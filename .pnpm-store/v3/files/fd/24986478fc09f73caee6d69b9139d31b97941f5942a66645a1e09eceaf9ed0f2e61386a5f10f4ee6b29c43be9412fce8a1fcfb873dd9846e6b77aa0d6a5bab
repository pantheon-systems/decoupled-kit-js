"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.persistPreviouslyCachedImages = void 0;

var _store = _interopRequireDefault(require("../store"));

var _getGatsbyApi = require("../utils/get-gatsby-api");

var _cache = require("../utils/cache");

const persistPreviouslyCachedImages = async () => {
  const {
    helpers,
    pluginOptions
  } = (0, _getGatsbyApi.getGatsbyApi)(); // get all existing media item nodes

  const mediaItemNodes = helpers.getNodesByType(`${pluginOptions.schema.typePrefix}MediaItem`); // and touch them so they aren't garbage collected.
  // we will remove them as needed when receiving DELETE events from WP

  mediaItemNodes.forEach(node => helpers.actions.touchNode(node));
  const imageNodeMetaByUrl = await (0, _cache.getPersistentCache)({
    key: `image-node-meta-by-url`
  });

  if (imageNodeMetaByUrl) {
    _store.default.dispatch.imageNodes.setState({
      nodeMetaByUrl: imageNodeMetaByUrl
    });
  }
};

exports.persistPreviouslyCachedImages = persistPreviouslyCachedImages;
//# sourceMappingURL=persist-cached-images.js.map