"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Handlebars = require("handlebars");
function default_1(theme) {
    Handlebars.registerHelper('relativeURL', function (url) {
        return url
            ? theme.publicPath
                ? theme.publicPath + url
                : theme.getRelativeUrl(url)
            : url;
    });
}
exports.default = default_1;
