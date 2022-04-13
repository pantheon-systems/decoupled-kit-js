"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.processAndValidatePluginOptions = void 0;

var _path = _interopRequireDefault(require("path"));

var _formatLogMessage = require("../utils/format-log-message");

var _isInteger = _interopRequireDefault(require("lodash/isInteger"));

var _gatsbyVersion = require("../utils/gatsby-version");

var _lodash = require("lodash");

let warnedAboutMediaItemLazyNodes = false;
const optionsProcessors = [{
  name: `MediaItem.lazyNodes doesn't work in Gatsby v4+`,
  test: ({
    userPluginOptions
  }) => {
    var _userPluginOptions$ty, _userPluginOptions$ty2;

    return userPluginOptions === null || userPluginOptions === void 0 ? void 0 : (_userPluginOptions$ty = userPluginOptions.type) === null || _userPluginOptions$ty === void 0 ? void 0 : (_userPluginOptions$ty2 = _userPluginOptions$ty.MediaItem) === null || _userPluginOptions$ty2 === void 0 ? void 0 : _userPluginOptions$ty2.lazyNodes;
  },
  processor: ({
    helpers,
    userPluginOptions
  }) => {
    if (_gatsbyVersion.usingGatsbyV4OrGreater) {
      helpers.reporter.panic((0, _formatLogMessage.formatLogMessage)(`The type.MediaItem.lazyNodes option isn't supported in Gatsby v4+ due to query running using JS workers in PQR (Parallell Query Running). lazyNodes creates nodes in GraphQL resolvers and PQR doesn't support that.\n\nIf you would like to prevent gatsby-source-wordpress from fetching File nodes for each MediaItem node, set the type.MediaItem.createFileNodes option to false.`));
    } else if (!warnedAboutMediaItemLazyNodes) {
      warnedAboutMediaItemLazyNodes = true;
      helpers.reporter.warn((0, _formatLogMessage.formatLogMessage)(`\nThe type.MediaItem.lazyNodes option wont be supported in Gatsby v4+ due to query running using JS workers in PQR (Parallell Query Running). lazyNodes creates nodes in GraphQL resolvers and PQR doesn't support that.\n\nThis option works with your current version of Gatsby but will stop working in Gatsby v4+.\n\nIf you would like to prevent gatsby-source-wordpress from fetching File nodes for each MediaItem node, set the type.MediaItem.createFileNodes option to false instead.\n`));
    }

    return userPluginOptions;
  }
}, {
  name: `pluginOptions.type.MediaItem.limit is not allowed`,
  test: ({
    userPluginOptions
  }) => {
    var _userPluginOptions$ty3, _userPluginOptions$ty4;

    return !!(userPluginOptions !== null && userPluginOptions !== void 0 && (_userPluginOptions$ty3 = userPluginOptions.type) !== null && _userPluginOptions$ty3 !== void 0 && (_userPluginOptions$ty4 = _userPluginOptions$ty3.MediaItem) !== null && _userPluginOptions$ty4 !== void 0 && _userPluginOptions$ty4.limit);
  },
  processor: ({
    helpers,
    userPluginOptions
  }) => {
    var _userPluginOptions$ty5, _userPluginOptions$ty6;

    helpers.reporter.panic((0, _formatLogMessage.formatLogMessage)(`PluginOptions.type.MediaItem.limit is an disallowed plugin option.\nPlease remove the MediaItem.limit option from gatsby-config.js (currently set to ${userPluginOptions === null || userPluginOptions === void 0 ? void 0 : (_userPluginOptions$ty5 = userPluginOptions.type) === null || _userPluginOptions$ty5 === void 0 ? void 0 : (_userPluginOptions$ty6 = _userPluginOptions$ty5.MediaItem) === null || _userPluginOptions$ty6 === void 0 ? void 0 : _userPluginOptions$ty6.limit})\n\nMediaItem nodes are automatically limited to 0 and then fetched only when referenced by other node types. For example as a featured image, in custom fields, or in post_content.`));
  }
}, {
  name: `queryDepth-is-not-a-positive-int`,
  test: ({
    userPluginOptions
  }) => {
    var _userPluginOptions$sc, _userPluginOptions$sc2, _userPluginOptions$sc3;

    return typeof (userPluginOptions === null || userPluginOptions === void 0 ? void 0 : (_userPluginOptions$sc = userPluginOptions.schema) === null || _userPluginOptions$sc === void 0 ? void 0 : _userPluginOptions$sc.queryDepth) !== `undefined` && (!(0, _isInteger.default)(userPluginOptions === null || userPluginOptions === void 0 ? void 0 : (_userPluginOptions$sc2 = userPluginOptions.schema) === null || _userPluginOptions$sc2 === void 0 ? void 0 : _userPluginOptions$sc2.queryDepth) || (userPluginOptions === null || userPluginOptions === void 0 ? void 0 : (_userPluginOptions$sc3 = userPluginOptions.schema) === null || _userPluginOptions$sc3 === void 0 ? void 0 : _userPluginOptions$sc3.queryDepth) <= 0);
  },
  processor: ({
    helpers,
    userPluginOptions
  }) => {
    helpers.reporter.log(``);
    helpers.reporter.warn((0, _formatLogMessage.formatLogMessage)(`\n\npluginOptions.schema.queryDepth is not a positive integer.\nUsing default value in place of provided value.\n`, {
      useVerboseStyle: true
    }));
    delete userPluginOptions.schema.queryDepth;
    return userPluginOptions;
  }
}, {
  name: `Require beforeChangeNode type setting functions by absolute or relative path`,
  test: ({
    userPluginOptions
  }) => !!(userPluginOptions !== null && userPluginOptions !== void 0 && userPluginOptions.type),
  processor: ({
    helpers,
    userPluginOptions
  }) => {
    const gatsbyStore = helpers.store.getState();
    const typeSettings = Object.entries(userPluginOptions.type);
    typeSettings.forEach(([typeName, settings]) => {
      const beforeChangeNodePath = settings === null || settings === void 0 ? void 0 : settings.beforeChangeNode;

      if (_gatsbyVersion.usingGatsbyV4OrGreater && typeof beforeChangeNodePath === `function`) {
        helpers.reporter.panic(`Since Gatsby v4+ you cannot use the ${typeName}.beforeChangeNode option as a function. Please make the option a relative or absolute path to a JS file where the beforeChangeNode fn is the default export.`);
      }

      if (!beforeChangeNodePath || typeof beforeChangeNodePath !== `string`) {
        return;
      }

      try {
        const absoluteRequirePath = _path.default.isAbsolute(beforeChangeNodePath) ? beforeChangeNodePath : require.resolve(_path.default.join(gatsbyStore.program.directory, beforeChangeNodePath));

        const beforeChangeNodeFn = require(absoluteRequirePath);

        if (beforeChangeNodeFn) {
          userPluginOptions.type[typeName].beforeChangeNode = beforeChangeNodeFn;
        }
      } catch (e) {
        helpers.reporter.panic((0, _formatLogMessage.formatLogMessage)(`beforeChangeNode type setting for ${typeName} threw error:\n${e.message}`));
      }
    });
    return userPluginOptions;
  }
}];

const processAndValidatePluginOptions = (helpers, pluginOptions) => {
  let userPluginOptions = (0, _lodash.cloneDeep)(pluginOptions);
  optionsProcessors.forEach(({
    test,
    processor,
    name
  }) => {
    if (!name) {
      helpers.reporter.panic((0, _formatLogMessage.formatLogMessage)(`Plugin option filter is unnamed\n\n${test.toString()}\n\n${processor.toString()}`));
    }

    if (test({
      helpers,
      userPluginOptions
    })) {
      const filteredUserPluginOptions = processor({
        helpers,
        userPluginOptions
      });

      if (filteredUserPluginOptions) {
        userPluginOptions = filteredUserPluginOptions;
      } else {
        helpers.reporter.panic((0, _formatLogMessage.formatLogMessage)(`Plugin option filter ${name} didn't return a filtered options object`));
      }
    }
  }); // remove auth from pluginOptions so we don't leak into the browser

  delete pluginOptions.auth;
  return userPluginOptions;
};

exports.processAndValidatePluginOptions = processAndValidatePluginOptions;
//# sourceMappingURL=process-and-validate-plugin-options.js.map