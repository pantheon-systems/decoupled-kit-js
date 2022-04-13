"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.createLocalFileNode = exports.getFileNodeByMediaItemNode = exports.errorPanicker = exports.getMediaItemEditLink = exports.getFileNodeMetaBySourceUrl = void 0;

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _path = _interopRequireDefault(require("path"));

var _url = _interopRequireDefault(require("url"));

var _chalk = require("chalk");

var _asyncRetry = _interopRequireDefault(require("async-retry"));

var _gatsbySourceFilesystem = require("gatsby-source-filesystem");

var _index = _interopRequireDefault(require("./create-remote-file-node/index"));

var _store = _interopRequireDefault(require("../../../store"));

var _urlToPath = _interopRequireDefault(require("../../../utils/url-to-path"));

var _formatLogMessage = require("../../../utils/format-log-message");

var _fetchReferencedMediaItems = require("../fetch-nodes/fetch-referenced-media-items");

var _processNode = require("./process-node");

const getFileNodeMetaBySourceUrl = sourceUrl => {
  const fileNodesMetaByUrls = _store.default.getState().imageNodes.nodeMetaByUrl;

  return fileNodesMetaByUrls[(0, _fetchReferencedMediaItems.stripImageSizesFromUrl)(sourceUrl)];
};

exports.getFileNodeMetaBySourceUrl = getFileNodeMetaBySourceUrl;

const getMediaItemEditLink = node => {
  const {
    helpers,
    pluginOptions
  } = _store.default.getState().gatsbyApi;

  const {
    protocol,
    hostname
  } = _url.default.parse((node === null || node === void 0 ? void 0 : node.link) || pluginOptions.url);

  const baseUrl = `${protocol}//${hostname}`;
  const databaseId = node.databaseId;

  if (!databaseId) {
    const parentNode = node.parentHtmlNode || helpers.getNode(node.id);

    if (!(parentNode !== null && parentNode !== void 0 && parentNode.databaseId)) {
      return null;
    }

    return `${baseUrl}/wp-admin/post.php?post=${parentNode.databaseId}&action=edit`;
  }

  return `${baseUrl}/wp-admin/upload.php?item=${node.databaseId}`;
};

exports.getMediaItemEditLink = getMediaItemEditLink;

const errorPanicker = ({
  error,
  reporter,
  node,
  fetchState,
  parentName
}) => {
  const editUrl = getMediaItemEditLink(node);
  const stepMessage = parentName ? ` in step:\n\n"${parentName}"` : ``;
  const mediaItemLink = node.link ? `\nMedia item link: ${node.link}` : ``;
  const editLink = `\nEdit link: ${editUrl || `N/A`}`;
  const fileUrl = `\nFile url: ${node.mediaItemUrl}`;
  const sharedError = `occurred while fetching media item${node.databaseId ? ` #${node.databaseId}` : ``}${stepMessage}\n${mediaItemLink}${editLink}${fileUrl}`;
  const errorString = typeof error === `string` ? error : error && error.toString();

  const {
    pluginOptions
  } = _store.default.getState().gatsbyApi;

  const allow404ImagesInProduction = pluginOptions.production.allow404Images;
  const allow401ImagesInProduction = pluginOptions.production.allow401Images;
  const errorCodeIs404 = errorString.includes(`Response code 404`);
  const errorCodeIs401 = errorString.includes(`Response code 401`);
  const errorCode = errorCodeIs404 ? `404` : errorCodeIs401 ? `401` : null;

  if ((allow404ImagesInProduction || allow401ImagesInProduction || process.env.NODE_ENV !== `production`) && (errorCodeIs404 || errorCodeIs401)) {
    fetchState.shouldBail = true;
    reporter.log(``);
    reporter.warn((0, _formatLogMessage.formatLogMessage)(`Error ${sharedError}${!allow404ImagesInProduction || !allow401ImagesInProduction ? `\n\nThis error will fail production builds.` : ``}`));
    reporter.log(``);
    return;
  }

  if (errorString.includes(`Response code 4`)) {
    reporter.log(``);
    reporter.info((0, _formatLogMessage.formatLogMessage)(`Unrecoverable error ${sharedError}\n\nFailing the build to prevent deploying a broken site.${errorCode ? `\n\nIf you don't want ${errorCode}'s to fail your production builds, you can set the following option:

{
  options: {
    production: {
      allow${errorCode}Images: true
    }
  }
}` : ``}`));
    reporter.panic(error);
  } else if (errorString.includes(`Response code 5`)) {
    reporter.log(``);
    reporter.info((0, _formatLogMessage.formatLogMessage)([`Unrecoverable error ${sharedError}`, `\nYour wordpress host appears to be overloaded by our requests for images`, `\nIn ${(0, _chalk.bold)(`gatsby-config.js`)}, try lowering the ${(0, _chalk.bold)(`requestConcurrency`)} for MediaItems:`, `\nplugins: [
  {
    resolve: 'gatsby-source-wordpress',
    options: {
      url: 'https://mysite.com/graphql',
      type: {
        MediaItem: {
          localFile: {
            requestConcurrency: 50
          }
        }
      }
    },
  }
]`, `\nnote that GATSBY_CONCURRENT_REQUEST environment variable has been retired for these options`].join(`\n`)));
    reporter.panic(error);
  } else {
    console.error(error);
    reporter.panic();
  }
};

exports.errorPanicker = errorPanicker;

const getFileNodeByMediaItemNode = async ({
  mediaItemNode,
  helpers
}) => {
  const {
    sourceUrl,
    modifiedGmt,
    mediaItemUrl,
    databaseId
  } = mediaItemNode;
  const fileUrl = sourceUrl || mediaItemUrl;

  if (!fileUrl) {
    helpers.reporter.warn((0, _formatLogMessage.formatLogMessage)(`Couldn't find source url for media item #${databaseId}`));
    return null;
  }

  const existingNodeMeta = getFileNodeMetaBySourceUrl(fileUrl);

  if ( // if we already have this image
  existingNodeMeta && existingNodeMeta.id && // and it hasn't been modified
  existingNodeMeta.modifiedGmt === modifiedGmt) {
    let node = await helpers.getNode(existingNodeMeta.id); // some of the cached node metas don't necessarily need to be a File
    // so make sure we return a File node if what we get isn't one

    if (node && node.internal && node.internal.type !== `File`) {
      if (node.localFile && node.localFile.id) {
        // look up the corresponding file node
        node = await helpers.getNode(node.localFile.id);
      } else {
        return null;
      }
    }

    return node;
  }

  return null;
};

exports.getFileNodeByMediaItemNode = getFileNodeByMediaItemNode;
const failedImageUrls = new Set();

const createLocalFileNode = async ({
  mediaItemNode,
  parentName,
  skipExistingNode = false
}) => {
  var _pluginOptions$type, _pluginOptions$type$M;

  const state = _store.default.getState();

  const {
    helpers,
    pluginOptions
  } = state.gatsbyApi;
  const existingNode = !skipExistingNode ? await getFileNodeByMediaItemNode({
    mediaItemNode,
    helpers
  }) : null;

  if (existingNode) {
    return existingNode;
  }

  const {
    store: gatsbyStore,
    cache,
    createNodeId,
    reporter,
    actions: {
      createNode
    }
  } = helpers;
  let {
    mediaItemUrl,
    modifiedGmt,
    mimeType,
    title,
    fileSize
  } = mediaItemNode;

  if (!mediaItemUrl || failedImageUrls.has(mediaItemUrl)) {
    return null;
  }

  const {
    wpUrl
  } = state.remoteSchema;
  mediaItemUrl = (0, _processNode.ensureSrcHasHostname)({
    wpUrl,
    src: mediaItemUrl
  });
  const {
    excludeByMimeTypes,
    maxFileSizeBytes
  } = (_pluginOptions$type = pluginOptions.type) === null || _pluginOptions$type === void 0 ? void 0 : (_pluginOptions$type$M = _pluginOptions$type.MediaItem) === null || _pluginOptions$type$M === void 0 ? void 0 : _pluginOptions$type$M.localFile; // if this file is larger than maxFileSizeBytes, don't fetch the remote file

  if (fileSize > maxFileSizeBytes) {
    _store.default.dispatch.postBuildWarningCounts.incrementMaxFileSizeBytesExceeded();

    return null;
  } // if this type of file is excluded, don't fetch the remote file


  if (excludeByMimeTypes.includes(mimeType)) {
    _store.default.dispatch.postBuildWarningCounts.incrementMimeTypeExceeded();

    return null;
  }

  const hardCachedFileRelativePath = (0, _urlToPath.default)(mediaItemUrl);
  const hardCachedMediaFilesDirectory = `${process.cwd()}/.wordpress-cache`;
  const hardCachedFilePath = hardCachedMediaFilesDirectory + hardCachedFileRelativePath;
  const hardCacheMediaFiles = process.env.NODE_ENV === `development` && pluginOptions.develop.hardCacheMediaFiles || process.env.NODE_ENV === `production` && pluginOptions.production.hardCacheMediaFiles;
  const fetchState = {
    shouldBail: false
  };
  const createFileNodeRequirements = {
    parentNodeId: mediaItemNode.id,
    store: gatsbyStore,
    cache,
    createNode,
    createNodeId,
    reporter
  };
  let remoteFileNode;

  if (hardCacheMediaFiles) {
    // check for file in .wordpress-cache/wp-content
    // if it exists, use that to create a node from instead of
    // fetching from wp
    try {
      const buffer = await _fsExtra.default.readFile(hardCachedFilePath);
      remoteFileNode = await (0, _gatsbySourceFilesystem.createFileNodeFromBuffer)({
        buffer,
        name: title,
        ext: _path.default.extname(mediaItemUrl),
        ...createFileNodeRequirements
      });
    } catch (e) {// ignore errors, we'll download the image below if it doesn't exist
    }
  }

  if (!remoteFileNode) {
    // Otherwise we need to download it
    remoteFileNode = await (0, _asyncRetry.default)(async () => {
      if (fetchState.shouldBail) {
        failedImageUrls.add(mediaItemUrl);
        return null;
      }

      const {
        hostname: wpUrlHostname
      } = _url.default.parse(wpUrl);

      const {
        hostname: mediaItemHostname
      } = _url.default.parse(mediaItemUrl);

      const htaccessCredentials = pluginOptions.auth.htaccess; // if media items are hosted on another url like s3,
      // using the htaccess creds will throw 400 errors

      const shouldUseHtaccessCredentials = wpUrlHostname === mediaItemHostname;
      const auth = htaccessCredentials && shouldUseHtaccessCredentials ? {
        htaccess_pass: htaccessCredentials === null || htaccessCredentials === void 0 ? void 0 : htaccessCredentials.password,
        htaccess_user: htaccessCredentials === null || htaccessCredentials === void 0 ? void 0 : htaccessCredentials.username
      } : null; // if this errors, it's caught one level above in fetch-referenced-media-items.js so it can be placed on the end of the request queue

      const node = await (0, _index.default)({
        url: mediaItemUrl,
        auth,
        ...createFileNodeRequirements,
        pluginOptions
      });
      return node;
    }, {
      retries: 3,
      factor: 1.1,
      minTimeout: 5000,
      onRetry: error => errorPanicker({
        error,
        reporter,
        node: mediaItemNode,
        fetchState,
        parentName
      })
    });
  }

  if (!remoteFileNode) {
    return null;
  } // push it's id and url to our store for caching,
  // so we can touch this node next time
  // and so we can easily access the id by source url later


  _store.default.dispatch.imageNodes.pushNodeMeta({
    id: remoteFileNode.id,
    sourceUrl: mediaItemUrl,
    modifiedGmt
  });

  if (hardCacheMediaFiles) {
    try {
      // make sure the directory exists
      await _fsExtra.default.ensureDir(_path.default.dirname(hardCachedFilePath)); // copy our downloaded file to our existing directory

      await _fsExtra.default.copyFile(remoteFileNode.absolutePath, hardCachedFilePath);
    } catch (e) {
      helpers.reporter.panic(e);
    }
  } // and use it


  return remoteFileNode;
};

exports.createLocalFileNode = createLocalFileNode;
//# sourceMappingURL=create-local-file-node.js.map