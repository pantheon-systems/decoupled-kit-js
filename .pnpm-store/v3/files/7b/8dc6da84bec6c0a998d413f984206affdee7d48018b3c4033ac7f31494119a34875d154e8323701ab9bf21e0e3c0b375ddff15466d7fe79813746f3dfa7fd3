"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.fetchAndRunWpActions = exports.handleWpActions = exports.getWpActions = void 0;

var _graphqlQueries = require("../../../../utils/graphql-queries");

var _delete = _interopRequireDefault(require("./delete"));

var _update = _interopRequireDefault(require("./update"));

var _constants = require("../../../../constants");

var _fetchNodesPaginated = require("../../fetch-nodes/fetch-nodes-paginated");

var _fetchAndCreateNonNodeRootFields = _interopRequireDefault(require("../../create-nodes/fetch-and-create-non-node-root-fields"));

var _cache = require("../../../../utils/cache");

var _ = require("../..");

/**
 * getWpActions
 *
 * pull the latest changes from WP and determine which of those changes
 * require updates in Gatsby, then return valid changes
 * An example of a non-valid change would be a post that was created
 * and then immediately deleted.
 */
const getWpActions = async ({
  variables,
  helpers,
  throwFetchErrors = false,
  throwGqlErrors = false
}) => {
  const sourceTime = Date.now(); // @todo add pagination in case there are more than 100 actions since the last build

  const actionMonitorActions = await (0, _fetchNodesPaginated.paginatedWpNodeFetch)({
    contentTypePlural: `actionMonitorActions`,
    query: _graphqlQueries.actionMonitorQuery,
    nodeTypeName: `ActionMonitor`,
    helpers,
    throwFetchErrors,
    throwGqlErrors,
    ...variables
  });

  if (!actionMonitorActions || !actionMonitorActions.length) {
    return [];
  }

  await helpers.cache.set(_constants.LAST_COMPLETED_SOURCE_TIME, sourceTime);
  return actionMonitorActions;
};
/**
 * Acts on changes in WordPress to call functions that sync Gatsby with
 * the latest WP changes
 */


exports.getWpActions = getWpActions;

const handleWpActions = async api => {
  const {
    cachedNodeIds,
    helpers
  } = api;

  switch (api.wpAction.actionType) {
    case `DELETE`:
      await (0, _delete.default)(api);
      break;

    case `UPDATE`:
    case `CREATE`:
      await (0, _update.default)(api);
      break;

    case `NON_NODE_ROOT_FIELDS`:
      await (0, _fetchAndCreateNonNodeRootFields.default)();
      break;

    case `REFETCH_ALL`:
      await (0, _.sourceNodes)({ ...helpers,
        refetchAll: true
      }, {});
  }

  await (0, _cache.setHardCachedNodes)({
    helpers
  });
  return cachedNodeIds;
};
/**
 * fetchAndRunWpActions
 *
 * fetches a list of latest changes in WordPress
 * and then acts on those changes
 */


exports.handleWpActions = handleWpActions;

const fetchAndRunWpActions = async ({
  helpers,
  pluginOptions,
  since,
  throwFetchErrors = false,
  throwGqlErrors = false
}) => {
  // check for new, edited, or deleted posts in WP "Action Monitor"
  const wpActions = await getWpActions({
    variables: {
      since
    },
    helpers,
    throwFetchErrors,
    throwGqlErrors
  });
  const didUpdate = !!wpActions.length;

  if (didUpdate) {
    for (const wpAction of wpActions) {
      // Create, update, and delete nodes
      await handleWpActions({
        helpers,
        pluginOptions,
        wpAction
      });
    }
  }

  return {
    wpActions,
    didUpdate
  };
};

exports.fetchAndRunWpActions = fetchAndRunWpActions;
//# sourceMappingURL=index.js.map