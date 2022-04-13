"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Handlebars = require("handlebars");
function default_1(theme) {
    Handlebars.registerHelper('ifShowBreadcrumbs', function (options) {
        return theme.hideBreadcrumbs ? options.inverse(this) : options.fn(this);
    });
}
exports.default = default_1;
