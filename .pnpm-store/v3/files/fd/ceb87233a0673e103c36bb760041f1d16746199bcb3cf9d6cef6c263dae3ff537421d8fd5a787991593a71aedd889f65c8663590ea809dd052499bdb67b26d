"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Handlebars = require("handlebars");
const typedoc_1 = require("typedoc");
function default_1() {
    Handlebars.registerHelper('reflectionPath', function () {
        var _a, _b;
        if (this.model) {
            if (this.model.kind && this.model.kind !== typedoc_1.ReflectionKind.Module) {
                const title = [];
                if (this.model.parent && this.model.parent.parent) {
                    if (this.model.parent.parent.parent) {
                        title.push(`[${this.model.parent.parent.name}](${Handlebars.helpers.relativeURL((_b = (_a = this.model) === null || _a === void 0 ? void 0 : _a.parent) === null || _b === void 0 ? void 0 : _b.parent.url)})`);
                    }
                    title.push(`[${this.model.parent.name}](${Handlebars.helpers.relativeURL(this.model.parent.url)})`);
                }
                title.push(this.model.name);
                return title.length > 1 ? `${title.join('.')}` : null;
            }
        }
        return null;
    });
}
exports.default = default_1;
