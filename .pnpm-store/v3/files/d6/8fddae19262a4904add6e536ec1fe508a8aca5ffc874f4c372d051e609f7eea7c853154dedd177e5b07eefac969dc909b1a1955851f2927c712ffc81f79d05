"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Handlebars = require("handlebars");
function default_1(theme) {
    Handlebars.registerHelper('ifShowPageTitle', function (options) {
        return theme.hidePageTitle ? options.inverse(this) : options.fn(this);
    });
}
exports.default = default_1;
