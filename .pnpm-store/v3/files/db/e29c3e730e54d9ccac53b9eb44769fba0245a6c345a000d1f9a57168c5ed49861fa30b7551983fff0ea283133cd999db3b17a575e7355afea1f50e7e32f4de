"use strict";

exports.__esModule = true;
exports.runApisInSteps = exports.runSteps = void 0;

var _formatLogMessage = require("./format-log-message");

var _cleanup = require("../steps/preview/cleanup");

var _report = require("./report");

const runSteps = async (steps, helpers, pluginOptions, apiName) => {
  for (const step of steps) {
    try {
      var _pluginOptions$debug;

      const {
        timeBuildSteps
      } = (_pluginOptions$debug = pluginOptions === null || pluginOptions === void 0 ? void 0 : pluginOptions.debug) !== null && _pluginOptions$debug !== void 0 ? _pluginOptions$debug : {};
      const timeStep = typeof timeBuildSteps === `boolean` ? timeBuildSteps : (timeBuildSteps === null || timeBuildSteps === void 0 ? void 0 : timeBuildSteps.includes(step.name)) || (timeBuildSteps === null || timeBuildSteps === void 0 ? void 0 : timeBuildSteps.includes(apiName));
      let activity;

      if (timeStep) {
        activity = helpers.reporter.activityTimer((0, _formatLogMessage.formatLogMessage)(`step -${!apiName ? `-` : ``}> ${step.name}`, {
          useVerboseStyle: true
        }));
        activity.start();
      }

      if (typeof step === `function`) {
        await step(helpers, pluginOptions);
      } else if (Array.isArray(step)) {
        await runSteps(step, helpers, pluginOptions, apiName);
      }

      if (activity) {
        activity.end();
      }
    } catch (e) {
      const sharedError = `Encountered a critical error when running the ${apiName ? `${apiName}.` : ``}${step.name} build step.`; // on errors, invoke any preview callbacks to send news of this error back to the WP Preview window.

      await (0, _cleanup.invokeAndCleanupLeftoverPreviewCallbacks)({
        status: `GATSBY_PREVIEW_PROCESS_ERROR`,
        context: sharedError,
        error: e
      });
      console.error(e);
      helpers.reporter.panic({
        id: _report.CODES.SourcePluginCodeError,
        context: {
          sourceMessage: (0, _formatLogMessage.formatLogMessage)(`\n\n\t${sharedError}\n\tSee above for more information.`, {
            useVerboseStyle: true
          })
        }
      });
    }
  }
};
/**
 * Takes in a pipe delimited string of Gatsby Node API names and returns the first supported API name as a string
 *
 * Example input: "onPluginInit|unstable_onPluginInit"
 * Example output: "unstable_onPluginInit"
 */


exports.runSteps = runSteps;

const findApiName = initialApiNameString => {
  if (!initialApiNameString.includes(`|`)) {
    return initialApiNameString;
  }

  const potentialApiNames = initialApiNameString.split(`|`);

  try {
    const {
      isGatsbyNodeLifecycleSupported
    } = require(`gatsby-plugin-utils`);

    for (const apiName of potentialApiNames) {
      if (isGatsbyNodeLifecycleSupported(apiName)) {
        return apiName;
      }
    }
  } catch (e) {
    console.error(`Could not check if Gatsby supports node API's [${potentialApiNames.join(`, `)}]. Trying to use the first available API name (${potentialApiNames[0]})`);
    return potentialApiNames[0];
  }

  throw new Error(`Couldn't find any supported Gatsby Node API's in ${initialApiNameString}`);
};

const runApiSteps = (steps, apiName) => async (helpers, pluginOptions) => runSteps(steps, helpers, pluginOptions, apiName);

const runApisInSteps = nodeApis => Object.entries(nodeApis).reduce((gatsbyNodeExportObject, [apiName, apiSteps]) => {
  const normalizedApiName = findApiName(apiName);
  return { ...gatsbyNodeExportObject,
    [normalizedApiName]: typeof apiSteps === `function` ? apiSteps : runApiSteps(apiSteps, normalizedApiName)
  };
}, {});

exports.runApisInSteps = runApisInSteps;
//# sourceMappingURL=run-steps.js.map