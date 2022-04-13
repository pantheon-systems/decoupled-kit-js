"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Handlebars = require("handlebars");
const typedoc_1 = require("typedoc");
const utils_1 = require("../../utils");
function default_1() {
    Handlebars.registerHelper('signatureTitle', function (accessor, standalone = true) {
        var _a, _b;
        const md = [];
        if (standalone) {
            md.push(`${(0, utils_1.memberSymbol)(this)} `);
        }
        if (this.parent && ((_a = this.parent.flags) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            md.push(this.parent.flags.map((flag) => `\`${flag}\``).join(' ') + ' ');
        }
        if (accessor) {
            md.push(`\`${accessor}\` **${this.name}**`);
        }
        else if (this.name !== '__call' && this.name !== '__type') {
            md.push(`**${this.name}**`);
        }
        if (this.typeParameters) {
            md.push(`<${this.typeParameters
                .map((typeParameter) => `\`${typeParameter.name}\``)
                .join(', ')}\\>`);
        }
        md.push(`(${getParameters(this.parameters)})`);
        if (this.type && !((_b = this.parent) === null || _b === void 0 ? void 0 : _b.kindOf(typedoc_1.ReflectionKind.Constructor))) {
            md.push(`: ${Handlebars.helpers.type.call(this.type, 'object')}`);
        }
        return md.join('') + (standalone ? '\n' : '');
    });
}
exports.default = default_1;
const getParameters = (parameters = [], backticks = true) => {
    return parameters
        .map((param) => {
        const paramsmd = [];
        if (param.flags.isRest) {
            paramsmd.push('...');
        }
        const paramItem = `${param.name}${param.flags.isOptional || param.defaultValue ? '?' : ''}`;
        paramsmd.push(backticks ? `\`${paramItem}\`` : paramItem);
        return paramsmd.join('');
    })
        .join(', ');
};
