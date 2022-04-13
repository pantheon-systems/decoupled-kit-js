"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Handlebars = require("handlebars");
function default_1() {
    Handlebars.registerHelper('indexSignatureTitle', function () {
        const md = ['▪'];
        const parameters = this.parameters
            ? this.parameters.map((parameter) => {
                return `${parameter.name}: ${Handlebars.helpers.type.call(parameter.type)}`;
            })
            : [];
        md.push(`\[${parameters.join('')}\]: ${Handlebars.helpers.type.call(this.type)}`);
        return md.join(' ');
    });
}
exports.default = default_1;
