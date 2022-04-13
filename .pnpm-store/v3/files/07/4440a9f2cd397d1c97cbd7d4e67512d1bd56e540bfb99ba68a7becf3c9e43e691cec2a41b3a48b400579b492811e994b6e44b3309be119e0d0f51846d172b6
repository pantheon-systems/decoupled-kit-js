"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = exports.createSingleNode = exports.fetchAndCreateSingleNode = void 0;

var _fetchGraphql = _interopRequireDefault(require("../../../../utils/fetch-graphql"));

var _store = _interopRequireDefault(require("../../../../store"));

var _formatLogMessage = require("../../../../utils/format-log-message");

var _chalk = _interopRequireDefault(require("chalk"));

var _helpers = require("../../helpers");

var _getGatsbyApi = require("../../../../utils/get-gatsby-api");

var _constants = require("../../../../constants");

var _fetchReferencedMediaItems = _interopRequireDefault(require("../../fetch-nodes/fetch-referenced-media-items"));

var _dumper = require("dumper.js");

var _atob = require("atob");

var _helpers2 = require("../../../create-schema-customization/helpers");

var _processNode = require("../../create-nodes/process-node");

var _cache = require("../../../../utils/cache");

const fetchAndCreateSingleNode = async ({
  singleName,
  id,
  actionType,
  cachedNodeIds,
  token = null,
  isPreview = false,
  isDraft = false,
  userDatabaseId = null
}) => {
  function getNodeQuery() {
    const {
      nodeQuery,
      previewQuery
    } = (0, _helpers.getQueryInfoBySingleFieldName)(singleName) || {}; // if this is a preview use the preview query
    // if it's a preview but it's the initial blank node
    // then use the regular node query as the preview query wont
    // return anything

    const query = isPreview && !isDraft ? previewQuery : nodeQuery;
    return query;
  }

  const query = getNodeQuery();
  const {
    helpers: {
      reporter,
      getNode
    },
    pluginOptions
  } = (0, _getGatsbyApi.getGatsbyApi)();

  if (!query) {
    reporter.info((0, _formatLogMessage.formatLogMessage)(`A ${singleName} was updated, but no query was found for this node type. This node type is either excluded in plugin options or this is a bug.`));
    return {
      node: null
    };
  }

  const headers = token && userDatabaseId ? {
    WPGatsbyPreview: token,
    WPGatsbyPreviewUser: userDatabaseId
  } : {};
  const {
    data
  } = await (0, _fetchGraphql.default)({
    headers,
    query,
    variables: {
      id
    },
    errorContext: `Error occurred while updating a single "${singleName}" node.`
  });
  let remoteNode = data[singleName];

  if (!data || !remoteNode) {
    reporter.warn((0, _formatLogMessage.formatLogMessage)(`${id} ${singleName} was updated, but no data was returned for this node.`));
    reporter.info({
      singleName,
      id,
      actionType,
      cachedNodeIds,
      token,
      isPreview,
      userDatabaseId
    });
    return {
      node: null
    };
  }

  remoteNode.uri = normalizeUri({
    uri: remoteNode.uri,
    singleName,
    id
  });

  if (isPreview) {
    const existingNode = getNode(id);
    /**
     * For Preview, revisions of a node type can have data that updates unecessarily
     * This code block fixes that. The result being that less queries
     * are invalidated in Gatsby. For example if you have a query where you're getting the latest published post using the date field, that should be static but each preview updates the date field on the node being previewed (because the revision has a new date). So if we prevent the following fields from changing, this will be less problematic.
     */

    if (existingNode) {
      remoteNode = { ...remoteNode,
        databaseId: existingNode.databaseId,
        date: existingNode.date,
        dateGmt: existingNode.dateGmt,
        slug: existingNode.slug,
        guid: existingNode.guid,
        id: existingNode.id,
        link: existingNode.link,
        uri: existingNode.uri,
        status: existingNode.status
      };
    }
  }

  data[singleName] = remoteNode;
  const {
    additionalNodeIds,
    node
  } = await createSingleNode({
    singleName,
    id,
    actionType,
    data,
    cachedNodeIds
  });

  if (isPreview) {
    reporter.info((0, _formatLogMessage.formatLogMessage)(`Preview for ${singleName} ${node.id} was updated.`));

    if (pluginOptions.debug.preview) {
      reporter.info((0, _formatLogMessage.formatLogMessage)(`Raw remote node data:`));
      (0, _dumper.dump)(data);
    }
  }

  return {
    node,
    additionalNodeIds
  };
};

exports.fetchAndCreateSingleNode = fetchAndCreateSingleNode;

const createSingleNode = async ({
  singleName,
  id,
  actionType,
  data,
  cachedNodeIds
}) => {
  const state = _store.default.getState();

  const {
    helpers,
    pluginOptions
  } = state.gatsbyApi;
  const {
    wpUrl
  } = state.remoteSchema;
  const {
    typeInfo
  } = (0, _helpers.getQueryInfoBySingleFieldName)(singleName);

  if (!cachedNodeIds) {
    cachedNodeIds = await (0, _cache.getPersistentCache)({
      key: _constants.CREATED_NODE_IDS
    });
  }

  const updatedNodeContent = { ...data[singleName],
    nodeType: typeInfo.nodesTypeName,
    type: typeInfo.nodesTypeName
  };
  const {
    processedNode,
    nodeMediaItemIdReferences
  } = await (0, _processNode.processNode)({
    node: updatedNodeContent,
    pluginOptions,
    wpUrl,
    helpers
  });
  await (0, _fetchReferencedMediaItems.default)({
    referencedMediaItemNodeIds: nodeMediaItemIdReferences
  });
  const {
    actions
  } = helpers;
  const {
    createContentDigest
  } = helpers;
  const builtTypename = (0, _helpers2.buildTypeName)(typeInfo.nodesTypeName);
  let remoteNode = { ...processedNode,
    __typename: builtTypename,
    id: id,
    parent: null,
    internal: {
      contentDigest: createContentDigest(updatedNodeContent),
      type: builtTypename
    }
  };
  const typeSettings = (0, _helpers2.getTypeSettingsByType)({
    name: typeInfo.nodesTypeName
  });
  let additionalNodeIds = nodeMediaItemIdReferences || [];
  let cancelUpdate;

  if (typeSettings.beforeChangeNode && typeof typeSettings.beforeChangeNode === `function`) {
    const {
      additionalNodeIds: receivedAdditionalNodeIds,
      remoteNode: receivedRemoteNode,
      cancelUpdate: receivedCancelUpdate
    } = (await typeSettings.beforeChangeNode({
      actionType: actionType,
      remoteNode,
      actions,
      helpers,
      fetchGraphql: _fetchGraphql.default,
      typeSettings,
      buildTypeName: _helpers2.buildTypeName,
      type: typeInfo.nodesTypeName,
      wpStore: _store.default
    })) || {};
    additionalNodeIds = [...additionalNodeIds, ...(receivedAdditionalNodeIds || [])];
    cancelUpdate = receivedCancelUpdate;

    if (receivedRemoteNode) {
      remoteNode = receivedRemoteNode;
    }
  }

  if (cancelUpdate) {
    return {
      additionalNodeIds,
      remoteNode: null
    };
  }

  if (remoteNode) {
    actions.createNode(remoteNode);
    cachedNodeIds.push(remoteNode.id);

    if (additionalNodeIds && additionalNodeIds.length) {
      additionalNodeIds.forEach(id => cachedNodeIds.push(id));
    }

    await (0, _cache.setPersistentCache)({
      key: _constants.CREATED_NODE_IDS,
      value: cachedNodeIds
    });
  }

  return {
    additionalNodeIds,
    node: remoteNode
  };
};

exports.createSingleNode = createSingleNode;

const wpActionUPDATE = async ({
  helpers,
  wpAction
}) => {
  const reportUpdate = ({
    setAction
  } = {}) => {
    const actionType = setAction || wpAction.actionType;
    reporter.log(``);
    reporter.info((0, _formatLogMessage.formatLogMessage)(`${_chalk.default.bold(`${actionType.toLowerCase()} ${wpAction.referencedNodeSingularName}`)} ${wpAction.title} (#${wpAction.referencedNodeID})`));
    reporter.log(``);
  };

  const {
    reporter,
    actions
  } = helpers;
  const cachedNodeIds = await (0, _cache.getPersistentCache)({
    key: _constants.CREATED_NODE_IDS
  });

  const state = _store.default.getState();

  const {
    gatsbyApi: {
      pluginOptions: {
        verbose
      },
      helpers: {
        getNode
      }
    }
  } = state;
  const nodeId = wpAction.referencedNodeGlobalRelayID;
  const existingNode = await getNode(nodeId);

  if (wpAction.referencedNodeStatus !== `publish`) {
    // if the post status isn't publish anymore, we need to remove the node
    // by removing it from cached nodes so it's garbage collected by Gatsby
    const validNodeIds = cachedNodeIds.filter(cachedId => cachedId !== nodeId);
    await (0, _cache.setPersistentCache)({
      key: _constants.CREATED_NODE_IDS,
      value: validNodeIds
    });

    if (existingNode) {
      await actions.touchNode(existingNode);
      await actions.deleteNode(existingNode);
      reportUpdate({
        setAction: `DELETE`
      });
    }

    return;
  }

  const {
    node
  } = await fetchAndCreateSingleNode({
    id: nodeId,
    actionType: wpAction.actionType,
    singleName: wpAction.referencedNodeSingularName,
    cachedNodeIds
  });

  if (node) {
    reportUpdate();

    if (verbose) {
      const nodeEntries = existingNode ? Object.entries(existingNode) : null;

      if (nodeEntries !== null && nodeEntries !== void 0 && nodeEntries.length) {
        const loggableEntries = nodeEntries.filter(([key]) => !key.includes(`modifiedGmt`) && key !== `modified`);

        for (const [key, value] of loggableEntries) {
          if (!node || !node[key] || !value) {
            return;
          }

          if ( // if the value of this field changed, log it
          typeof node[key] === `string` && value !== node[key]) {
            reporter.log(``);
            reporter.info(_chalk.default.bold(`${key} changed`));

            if (value.length < 250 && node[key].length < 250) {
              reporter.log(``);
              reporter.log(`${_chalk.default.italic.bold(`    from`)}`);
              reporter.log(`      ${value}`);
              reporter.log(_chalk.default.italic.bold(`    to`));
              reporter.log(`      ${node[key]}`);
              reporter.log(``);
            }
          }
        }

        reporter.log(``);
      }
    }
  } // return cachedNodeIds

};

const getDbIdFromRelayId = relayId => (0, _atob.atob)(relayId).split(`:`).reverse()[0];

const normalizeUri = ({
  uri,
  id,
  singleName
}) => {
  var _uri, _uri2, _uri3, _uri4;

  // remove the preview query params as they're not relevant in Gatsby
  uri = (_uri = uri) === null || _uri === void 0 ? void 0 : _uri.replace(`preview=true`, ``); // if removing the preview string leaves us with either of these
  // characters at the end, trim em off!

  if ((_uri2 = uri) !== null && _uri2 !== void 0 && _uri2.endsWith(`?`) || (_uri3 = uri) !== null && _uri3 !== void 0 && _uri3.endsWith(`&`)) {
    uri = uri.slice(0, -1);
  } // if this is a draft url which could look like
  // this /?p=543534 or /?page=4324 or /?something=yep&page=543543 or /?p=4534&what=yes
  // we will create a proper path that Gatsby can handle
  // /post_graphql_name/post_db_id/
  // this same logic is on the WP side in the preview template
  // to account for this situation.


  if ((_uri4 = uri) !== null && _uri4 !== void 0 && _uri4.startsWith(`/?`)) {
    const dbId = getDbIdFromRelayId(id);
    return `/generated-preview-path/${singleName}/${dbId}/`;
  }

  return uri;
};

var _default = wpActionUPDATE;
exports.default = _default;
//# sourceMappingURL=update.js.map