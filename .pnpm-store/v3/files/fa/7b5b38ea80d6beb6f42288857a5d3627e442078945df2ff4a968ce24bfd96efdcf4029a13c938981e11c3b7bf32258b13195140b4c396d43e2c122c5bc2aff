"use strict";

exports.__esModule = true;
exports.default = void 0;

var _preview = require("../steps/preview");

const developStore = {
  state: {
    refreshPollingIsPaused: false
  },
  reducers: {
    pauseRefreshPolling(state) {
      if (!(0, _preview.inPreviewMode)()) {
        state.refreshPollingIsPaused = true;
      }

      return state;
    },

    resumeRefreshPolling(state) {
      if (!(0, _preview.inPreviewMode)()) {
        state.refreshPollingIsPaused = false;
      }

      return state;
    }

  }
};
var _default = developStore;
exports.default = _default;
//# sourceMappingURL=develop.js.map