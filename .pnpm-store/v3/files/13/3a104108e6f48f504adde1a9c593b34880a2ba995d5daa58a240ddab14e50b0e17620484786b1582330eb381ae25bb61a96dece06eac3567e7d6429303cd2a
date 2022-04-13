"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.shouldDispatch = shouldDispatch;
exports.dispatchLocalFileServiceJob = dispatchLocalFileServiceJob;
exports.dispatchLocalImageServiceJob = dispatchLocalImageServiceJob;

var _path = _interopRequireDefault(require("path"));

var _getGatsbyVersion = require("../utils/get-gatsby-version");

var _urlGenerator = require("../utils/url-generator");

function shouldDispatch() {
  return !(process.env.GATSBY_CLOUD_IMAGE_CDN === `1` || process.env.GATSBY_CLOUD_IMAGE_CDN === `true`) && process.env.NODE_ENV === `production`;
}

function dispatchLocalFileServiceJob({
  url,
  filename,
  mimeType,
  contentDigest
}, actions) {
  var _global$__GATSBY;

  const GATSBY_VERSION = (0, _getGatsbyVersion.getGatsbyVersion)();
  const publicUrl = (0, _urlGenerator.generatePublicUrl)({
    url,
    // We always want file based url
    mimeType
  }, false).split(`/`);
  publicUrl.unshift(`public`);
  actions.createJobV2({
    name: `FILE_CDN`,
    inputPaths: [],
    // we know it's an image so we just mimic an image
    outputDir: _path.default.join(((_global$__GATSBY = global.__GATSBY) === null || _global$__GATSBY === void 0 ? void 0 : _global$__GATSBY.root) || process.cwd(), ...publicUrl.filter(Boolean)),
    args: {
      url,
      filename,
      contentDigest
    }
  }, {
    name: `gatsby`,
    // @ts-ignore - version is allowed
    version: GATSBY_VERSION,
    resolve: __dirname
  });
}

function dispatchLocalImageServiceJob({
  url,
  extension,
  basename,
  width,
  height,
  format,
  fit,
  contentDigest,
  quality
}, actions) {
  var _global$__GATSBY2;

  const GATSBY_VERSION = (0, _getGatsbyVersion.getGatsbyVersion)();
  const publicUrl = (0, _urlGenerator.generatePublicUrl)({
    url,
    mimeType: `image/${extension}`
  }).split(`/`);
  publicUrl.unshift(`public`);
  actions.createJobV2({
    name: `IMAGE_CDN`,
    inputPaths: [],
    outputDir: _path.default.join(((_global$__GATSBY2 = global.__GATSBY) === null || _global$__GATSBY2 === void 0 ? void 0 : _global$__GATSBY2.root) || process.cwd(), ...publicUrl.filter(Boolean), (0, _urlGenerator.generateImageArgs)({
      width,
      height,
      format,
      quality
    })),
    args: {
      url,
      filename: `${basename}.${extension}`,
      width,
      height,
      format,
      fit,
      quality,
      contentDigest
    }
  }, {
    name: `gatsby`,
    // @ts-ignore - version is allowed
    version: GATSBY_VERSION,
    resolve: __dirname
  });
}