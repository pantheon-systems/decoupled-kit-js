"use strict";

var _runSteps = require("./utils/run-steps");

var steps = _interopRequireWildcard(require("./steps"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

module.exports = (0, _runSteps.runApisInSteps)({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  "onPluginInit|unstable_onPluginInit": [steps.setGatsbyApiToState, steps.setErrorMap, steps.tempPreventMultipleInstances],
  pluginOptionsSchema: steps.pluginOptionsSchema,
  createSchemaCustomization: [steps.setGatsbyApiToState, steps.ensurePluginRequirementsAreMet, steps.ingestRemoteSchema, steps.createSchemaCustomization],
  sourceNodes: [steps.setGatsbyApiToState, steps.persistPreviouslyCachedImages, steps.sourceNodes, steps.setImageNodeIdCache],
  onPreExtractQueries: [steps.onPreExtractQueriesInvokeLeftoverPreviewCallbacks],
  onPostBuild: [steps.setImageNodeIdCache, steps.logPostBuildWarnings],
  onCreatePage: [steps.onCreatepageSavePreviewNodeIdToPageDependency, steps.onCreatePageRespondToPreviewStatusQuery],
  onCreateDevServer: [steps.imageRoutes, steps.setImageNodeIdCache, steps.logPostBuildWarnings, steps.startPollingForContentUpdates]
});
//# sourceMappingURL=gatsby-node.js.map