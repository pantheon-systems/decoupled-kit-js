"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _core = require("@rematch/core");

var _immer = _interopRequireDefault(require("@rematch/immer"));

var _models = _interopRequireDefault(require("./models"));

// import type { RematchStore } from "@rematch/core"
// @todo any used to be RematchStore<typeof models> but this isn't exactly right..
// need to revisit this later. newer versions of rematch sorted TS out but
// there are a lot of breaking changes for us it seems
const store = (0, _core.init)({
  models: _models.default,
  plugins: [(0, _immer.default)()]
});
var _default = store;
exports.default = _default;
//# sourceMappingURL=store.js.map