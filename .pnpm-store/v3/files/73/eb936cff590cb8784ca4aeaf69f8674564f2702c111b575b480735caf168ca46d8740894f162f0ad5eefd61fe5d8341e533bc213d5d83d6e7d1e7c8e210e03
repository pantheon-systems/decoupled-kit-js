"use strict";

exports.__esModule = true;
exports.default = void 0;

var _fetchReferencedMediaItems = require("../steps/source-nodes/fetch-nodes/fetch-referenced-media-items");

const imageNodes = {
  state: {
    nodeMetaByUrl: {}
  },
  reducers: {
    setState(state, payload) {
      state = { ...state,
        ...payload
      };
      return state;
    },

    pushNodeMeta(state, {
      id,
      sourceUrl,
      modifiedGmt
    }) {
      const nodeUrl = (0, _fetchReferencedMediaItems.stripImageSizesFromUrl)(sourceUrl); // don't overwrite the lookup table in case we have multiple
      // sized urls for the same image

      if (!state.nodeMetaByUrl[nodeUrl]) {
        state.nodeMetaByUrl[nodeUrl] = {
          id,
          modifiedGmt
        };
      }

      return state;
    }

  }
};
var _default = imageNodes;
exports.default = _default;
//# sourceMappingURL=image-nodes.js.map