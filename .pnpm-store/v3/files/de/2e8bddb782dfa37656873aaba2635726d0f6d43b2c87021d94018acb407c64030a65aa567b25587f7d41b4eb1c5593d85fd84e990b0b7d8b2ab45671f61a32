"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.logPostBuildWarnings = void 0;

var _store = _interopRequireDefault(require("../store"));

var _formatLogMessage = require("../utils/format-log-message");

const logPostBuildWarnings = async () => {
  const {
    postBuildWarningCounts: {
      maxFileSizeBytesExceeded,
      mimeTypeExcluded
    },
    gatsbyApi: {
      helpers: {
        reporter
      }
    }
  } = _store.default.getState();

  const helpUrl = `https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/docs/debugging-and-troubleshooting.md#media-file-download-skipped`;
  const helpText = `Visit ${helpUrl} for more info.`;

  if (maxFileSizeBytesExceeded > 0) {
    const message = (0, _formatLogMessage.formatLogMessage)(`There were ${maxFileSizeBytesExceeded} files with file sizes that are above the maxFileSizeBytes config option and consequently were not fetched. ${helpText}`);
    reporter.warn(message);
  }

  if (mimeTypeExcluded > 0) {
    const message = (0, _formatLogMessage.formatLogMessage)(`There were ${mimeTypeExcluded} files with mime types that were included in the excludeByMimeTypes config option and consequently were not fetched. ${helpText}`);
    reporter.warn(message);
  }
};

exports.logPostBuildWarnings = logPostBuildWarnings;
//# sourceMappingURL=log-post-build-warnings.js.map