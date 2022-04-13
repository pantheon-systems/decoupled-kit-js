"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Handlebars = require("handlebars");
const typedoc_1 = require("typedoc");
const utils_1 = require("../../utils");
function default_1() {
    Handlebars.registerHelper('declarationTitle', function () {
        var _a;
        const md = [(0, utils_1.memberSymbol)(this)];
        function getType(reflection) {
            var _a;
            const reflectionType = reflection.type;
            if (reflectionType && ((_a = reflectionType.declaration) === null || _a === void 0 ? void 0 : _a.children)) {
                return ': `Object`';
            }
            return (': ' +
                Handlebars.helpers.type.call(reflectionType ? reflectionType : reflection, 'object'));
        }
        if (this.flags && this.flags.length > 0 && !this.flags.isRest) {
            md.push(' ' + this.flags.map((flag) => `\`${flag}\``).join(' '));
        }
        md.push(`${this.flags.isRest ? '... ' : ''} **${(0, utils_1.escapeChars)(this.name)}**`);
        if (this instanceof typedoc_1.DeclarationReflection && this.typeParameters) {
            md.push(`<${this.typeParameters
                .map((typeParameter) => `\`${typeParameter.name}\``)
                .join(', ')}\\>`);
        }
        if (!((_a = this.parent) === null || _a === void 0 ? void 0 : _a.kindOf(typedoc_1.ReflectionKind.Enum))) {
            md.push(getType(this));
        }
        if (!(this.type instanceof typedoc_1.LiteralType) &&
            this.defaultValue &&
            this.defaultValue !== '...') {
            md.push(` = \`${(0, utils_1.stripLineBreaks)((0, utils_1.stripComments)(this.defaultValue))}\``);
        }
        return md.join('');
    });
}
exports.default = default_1;
