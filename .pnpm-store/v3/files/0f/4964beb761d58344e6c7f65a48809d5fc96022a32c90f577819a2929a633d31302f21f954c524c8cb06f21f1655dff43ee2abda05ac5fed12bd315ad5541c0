"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Handlebars = require("handlebars");
const utils_1 = require("../../utils");
function default_1(theme) {
    Handlebars.registerHelper('reflectionTitle', function (shouldEscape = true) {
        const title = [''];
        if (this.model &&
            this.model.kindString &&
            this.url !== this.project.url) {
            title.push(`${this.model.kindString}: `);
        }
        if (this.url === this.project.url) {
            title.push(theme.indexTitle || this.project.name);
        }
        else {
            title.push(shouldEscape ? (0, utils_1.escapeChars)(this.model.name) : this.model.name);
            if (this.model.typeParameters) {
                const typeParameters = this.model.typeParameters
                    .map((typeParameter) => typeParameter.name)
                    .join(', ');
                title.push(`<${typeParameters}${shouldEscape ? '\\>' : '>'}`);
            }
        }
        return title.join('');
    });
}
exports.default = default_1;
