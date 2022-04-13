"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Handlebars = require("handlebars");
function default_1() {
    Handlebars.registerHelper('ifShowTypeHierarchy', function (options) {
        var _a;
        const typeHierarchy = (_a = this.model) === null || _a === void 0 ? void 0 : _a.typeHierarchy;
        return typeHierarchy && typeHierarchy.next
            ? options.fn(this)
            : options.inverse(this);
    });
}
exports.default = default_1;
