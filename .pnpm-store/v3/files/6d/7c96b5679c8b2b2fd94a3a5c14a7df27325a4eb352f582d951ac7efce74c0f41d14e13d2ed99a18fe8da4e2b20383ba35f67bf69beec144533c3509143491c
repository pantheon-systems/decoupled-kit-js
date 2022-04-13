"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Handlebars = require("handlebars");
function default_1(theme) {
    Handlebars.registerHelper('ifShowNamedAnchors', function (options) {
        return theme.namedAnchors ? options.fn(this) : options.inverse(this);
    });
}
exports.default = default_1;
