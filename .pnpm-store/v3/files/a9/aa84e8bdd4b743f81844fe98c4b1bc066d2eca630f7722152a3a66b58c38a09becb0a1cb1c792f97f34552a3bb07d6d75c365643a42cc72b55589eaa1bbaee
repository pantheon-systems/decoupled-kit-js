"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Handlebars = require("handlebars");
function default_1() {
    Handlebars.registerHelper('referenceMember', function () {
        const referenced = this.tryGetTargetReflectionDeep();
        if (!referenced) {
            return `Re-exports ${this.name}`;
        }
        if (this.name === referenced.name) {
            return `Re-exports [${referenced.name}](${Handlebars.helpers.relativeURL(referenced.url)})`;
        }
        return `Renames and re-exports [${referenced.name}](${Handlebars.helpers.relativeURL(referenced.url)})`;
    });
}
exports.default = default_1;
