"use strict";

exports.__esModule = true;
exports.tempPreventMultipleInstances = tempPreventMultipleInstances;

var _formatLogMessage = require("../utils/format-log-message");

let isWpSourcePluginInstalled = false;
/**
 * Temporarily break the build when a user defines multiple source configs for the plugin
 * See https://github.com/gatsbyjs/gatsby-source-wordpress/issues/251
 * @param {Reporter} reporter
 */

function tempPreventMultipleInstances({
  reporter
}) {
  if (isWpSourcePluginInstalled) {
    reporter.panic((0, _formatLogMessage.formatLogMessage)(`Multiple instances of this plugin aren't currently supported yet.`, {
      useVerboseStyle: true
    }));
  } else {
    isWpSourcePluginInstalled = true;
  }
}
//# sourceMappingURL=temp-prevent-multiple-instances.js.map