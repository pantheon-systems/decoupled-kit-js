"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Handlebars = require("handlebars");
const typedoc_1 = require("typedoc");
function default_1() {
    Handlebars.registerHelper('ifIsReference', function (options) {
        return this instanceof typedoc_1.ReferenceReflection
            ? options.fn(this)
            : options.inverse(this);
    });
}
exports.default = default_1;
