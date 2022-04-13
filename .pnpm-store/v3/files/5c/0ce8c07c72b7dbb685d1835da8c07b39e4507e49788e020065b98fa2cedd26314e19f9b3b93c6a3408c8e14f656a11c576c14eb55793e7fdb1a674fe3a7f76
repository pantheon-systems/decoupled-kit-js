"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Handlebars = require("handlebars");
const typedoc_1 = require("typedoc");
function default_1() {
    Handlebars.registerHelper('ifShowReturns', function (options) {
        var _a;
        return this.type && !((_a = this.parent) === null || _a === void 0 ? void 0 : _a.kindOf(typedoc_1.ReflectionKind.Constructor))
            ? options.fn(this)
            : options.inverse(this);
    });
}
exports.default = default_1;
