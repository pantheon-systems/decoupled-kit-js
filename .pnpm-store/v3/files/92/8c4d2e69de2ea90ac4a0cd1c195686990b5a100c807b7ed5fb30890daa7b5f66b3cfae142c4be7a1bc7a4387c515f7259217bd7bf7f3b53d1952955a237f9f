"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.sourceNodes = void 0;

var _fetchNodeUpdates = _interopRequireDefault(require("./update-nodes/fetch-node-updates"));

var _fetchNodes = require("./fetch-nodes/fetch-nodes");

var _constants = require("../../constants");

var _store = _interopRequireDefault(require("../../store"));

var _fetchAndCreateNonNodeRootFields = _interopRequireDefault(require("./create-nodes/fetch-and-create-non-node-root-fields"));

var _progressBarPromise = require("./create-nodes/create-remote-file-node/progress-bar-promise");

var _preview = require("../preview");

const sourceNodes = async helpers => {
  const {
    cache,
    webhookBody,
    refetchAll
  } = helpers; // if this is a preview we want to process it and return early

  if (webhookBody.preview) {
    await (0, _preview.sourcePreviews)(helpers);
    return;
  } // if it's not a preview but we have a token
  // we should source any pending previews then continue sourcing
  else if (webhookBody.token && webhookBody.userDatabaseId) {
    await (0, _preview.sourcePreviews)(helpers);
  }

  const now = Date.now(); // fetch non-node root fields such as settings.
  // For now, we're refetching them on every build

  const nonNodeRootFieldsPromise = (0, _fetchAndCreateNonNodeRootFields.default)();
  const lastCompletedSourceTime = webhookBody.refreshing && webhookBody.since ? webhookBody.since : await cache.get(_constants.LAST_COMPLETED_SOURCE_TIME);

  const {
    schemaWasChanged,
    foundUsableHardCachedData
  } = _store.default.getState().remoteSchema;

  const fetchEverything = foundUsableHardCachedData || !lastCompletedSourceTime || refetchAll || // don't refetch everything in development
  process.env.NODE_ENV !== `development` && // and the schema was changed
  schemaWasChanged; // If this is an uncached build,
  // or our initial build to fetch and cache everything didn't complete,
  // pull everything from WPGQL

  if (fetchEverything) {
    await (0, _fetchNodes.fetchAndCreateAllNodes)();
  } // If we've already successfully pulled everything from WPGraphQL
  // just pull the latest changes
  else if (!fetchEverything) {
    await (0, _fetchNodeUpdates.default)({
      since: lastCompletedSourceTime
    });
  }

  await nonNodeRootFieldsPromise;
  (0, _progressBarPromise.allowFileDownloaderProgressBarToClear)();
  await helpers.cache.set(_constants.LAST_COMPLETED_SOURCE_TIME, now);
  const {
    dispatch
  } = _store.default;
  dispatch.remoteSchema.setSchemaWasChanged(false);
  dispatch.develop.resumeRefreshPolling();
};

exports.sourceNodes = sourceNodes;
//# sourceMappingURL=index.js.map