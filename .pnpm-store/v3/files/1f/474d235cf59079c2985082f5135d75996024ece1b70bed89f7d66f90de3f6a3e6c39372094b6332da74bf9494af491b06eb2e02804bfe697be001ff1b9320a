"use strict";

exports.__esModule = true;
exports.default = exports.touchValidNodes = void 0;

var _constants = require("../../../constants");

var _wpActions = require("./wp-actions");

var _formatLogMessage = require("../../../utils/format-log-message");

var _getGatsbyApi = require("../../../utils/get-gatsby-api");

var _cache = require("../../../utils/cache");

const touchValidNodes = async () => {
  const {
    helpers
  } = (0, _getGatsbyApi.getGatsbyApi)();
  const {
    actions
  } = helpers;
  const validNodeIds = await (0, _cache.getPersistentCache)({
    key: _constants.CREATED_NODE_IDS
  });

  if (validNodeIds !== null && validNodeIds !== void 0 && validNodeIds.length) {
    validNodeIds.forEach(nodeId => actions.touchNode(helpers.getNode(nodeId)));
  }
};
/**
 * fetchAndApplyNodeUpdates
 *
 * uses query info (types and gql query strings) fetched/generated in
 * onPreBootstrap to ask WordPress for the latest changes, and then
 * apply creates, updates, and deletes to Gatsby nodes
 */


exports.touchValidNodes = touchValidNodes;

const fetchAndApplyNodeUpdates = async ({
  since,
  throwFetchErrors = false,
  throwGqlErrors = false
}) => {
  const {
    helpers,
    pluginOptions
  } = (0, _getGatsbyApi.getGatsbyApi)();
  const {
    cache,
    reporter
  } = helpers;
  const activity = reporter.activityTimer((0, _formatLogMessage.formatLogMessage)(`pull updates since last build`));
  activity.start();

  if (!since) {
    since = await cache.get(_constants.LAST_COMPLETED_SOURCE_TIME);
  } // Check with WPGQL to create, delete, or update cached WP nodes


  const {
    wpActions,
    didUpdate
  } = await (0, _wpActions.fetchAndRunWpActions)({
    since,
    helpers,
    pluginOptions,
    throwFetchErrors,
    throwGqlErrors
  });
  await touchValidNodes();
  activity.end();
  return {
    wpActions,
    didUpdate
  };
};

var _default = fetchAndApplyNodeUpdates;
exports.default = _default;
//# sourceMappingURL=fetch-node-updates.js.map