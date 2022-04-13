"use strict";

exports.__esModule = true;
exports.default = void 0;
// `node` here is a Gatsby node
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const previewStore = {
  state: {
    nodePageCreatedCallbacks: {},
    nodeIdsToCreatedPages: {},
    pagePathToNodeDependencyId: {}
  },
  reducers: {
    unSubscribeToPagesCreatedFromNodeById(state, {
      nodeId
    }) {
      var _state$nodePageCreate;

      if ((_state$nodePageCreate = state.nodePageCreatedCallbacks) !== null && _state$nodePageCreate !== void 0 && _state$nodePageCreate[nodeId]) {
        delete state.nodePageCreatedCallbacks[nodeId];
      }

      return state;
    },

    subscribeToPagesCreatedFromNodeById(state, {
      nodeId,
      sendPreviewStatus
    }) {
      // save the callback for this nodeId
      // when a page is created from a node that has this id,
      // the callback will be invoked
      state.nodePageCreatedCallbacks[nodeId] = sendPreviewStatus;
      return state;
    },

    clearPreviewCallbacks(state) {
      state.nodePageCreatedCallbacks = {};
      return state;
    },

    saveNodePageState(state, {
      page,
      nodeId
    }) {
      state.nodeIdsToCreatedPages[nodeId] = {
        page
      };
      state.pagePathToNodeDependencyId[page.path] = {
        nodeId
      };
      return state;
    }

  }
};
var _default = previewStore;
exports.default = _default;
//# sourceMappingURL=preview.js.map