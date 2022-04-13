"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.setGatsbyApiToState = void 0;

var _store = _interopRequireDefault(require("../store"));

var _processAndValidatePluginOptions = require("./process-and-validate-plugin-options");

var _formatLogMessage = require("../utils/format-log-message");

var _gatsbyVersion = require("../utils/gatsby-version");

let hasDisplayedPreviewPresetMessage = false;

const setGatsbyApiToState = (helpers, pluginOptions) => {
  if (helpers.traceId === `refresh-createSchemaCustomization`) {
    return;
  }

  const filteredPluginOptions = (0, _processAndValidatePluginOptions.processAndValidatePluginOptions)(helpers, pluginOptions); //
  // add the plugin options and Gatsby API helpers to our store
  // to access them more easily

  _store.default.dispatch.gatsbyApi.setState({
    helpers,
    pluginOptions: filteredPluginOptions
  });

  if (!hasDisplayedPreviewPresetMessage) {
    const {
      activePluginOptionsPresets,
      helpers
    } = _store.default.getState().gatsbyApi;

    if (activePluginOptionsPresets !== null && activePluginOptionsPresets !== void 0 && activePluginOptionsPresets.length) {
      const previewOptimizationPreset = activePluginOptionsPresets.find(({
        presetName
      }) => presetName === `PREVIEW_OPTIMIZATION`);

      if (previewOptimizationPreset) {
        helpers.reporter.info((0, _formatLogMessage.formatLogMessage)(`\nSince the "Preview Optimization" plugin option preset is enabled\n${!_gatsbyVersion.usingGatsbyV4OrGreater ? `we aren't fetching more than ${previewOptimizationPreset.options.type.__all.limit} nodes of each type.\nAdditionally, ` : ``}Gatsby image and static file links in HTML fields are disabled.\nIf you want to change this, please check the Preview docs for this plugin.\nhttps://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/docs/features/preview.md`));
      }
    }

    hasDisplayedPreviewPresetMessage = true;
  }
};

exports.setGatsbyApiToState = setGatsbyApiToState;
//# sourceMappingURL=set-gatsby-api-to-state.js.map