"use strict";

exports.__esModule = true;
exports.default = exports.StateKey = void 0;
let StateKey;
exports.StateKey = StateKey;

(function (StateKey) {
  StateKey["mimeTypeExcluded"] = "mimeTypeExcluded";
  StateKey["maxFileSizeBytesExceeded"] = "maxFileSizeBytesExceeded";
})(StateKey || (exports.StateKey = StateKey = {}));

const incrementReducerCreator = stateKey => state => {
  state[stateKey]++;
  return state;
};

const postBuildWarningCounts = {
  state: {
    mimeTypeExcluded: 0,
    maxFileSizeBytesExceeded: 0
  },
  reducers: {
    incrementMimeTypeExceeded: incrementReducerCreator(StateKey.mimeTypeExcluded),
    incrementMaxFileSizeBytesExceeded: incrementReducerCreator(StateKey.maxFileSizeBytesExceeded)
  }
};
var _default = postBuildWarningCounts;
exports.default = _default;
//# sourceMappingURL=post-build-warning-logs.js.map