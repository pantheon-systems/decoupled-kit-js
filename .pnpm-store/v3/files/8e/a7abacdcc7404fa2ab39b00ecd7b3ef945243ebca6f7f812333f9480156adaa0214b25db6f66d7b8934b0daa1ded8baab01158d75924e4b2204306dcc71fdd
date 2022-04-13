"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Handlebars = require("handlebars");
const typedoc_1 = require("typedoc");
const utils_1 = require("../../utils");
function default_1() {
    Handlebars.registerHelper('propertyTable', function () {
        const comments = this.map((param) => { var _a, _b, _c, _d; return !!((_b = (_a = param.comment) === null || _a === void 0 ? void 0 : _a.text) === null || _b === void 0 ? void 0 : _b.trim()) || !!((_d = (_c = param.comment) === null || _c === void 0 ? void 0 : _c.shortText) === null || _d === void 0 ? void 0 : _d.trim()); });
        const hasComments = !comments.every((value) => !value);
        const headers = ['Name', 'Type'];
        if (hasComments) {
            headers.push('Description');
        }
        const flattenParams = (current) => {
            var _a, _b, _c;
            return (_c = (_b = (_a = current.type) === null || _a === void 0 ? void 0 : _a.declaration) === null || _b === void 0 ? void 0 : _b.children) === null || _c === void 0 ? void 0 : _c.reduce((acc, child) => {
                const childObj = {
                    ...child,
                    name: `${current.name}.${child.name}`,
                };
                return parseParams(childObj, acc);
            }, []);
        };
        const parseParams = (current, acc) => {
            var _a, _b;
            const shouldFlatten = (_b = (_a = current.type) === null || _a === void 0 ? void 0 : _a.declaration) === null || _b === void 0 ? void 0 : _b.children;
            return shouldFlatten
                ? [...acc, current, ...flattenParams(current)]
                : [...acc, current];
        };
        const properties = this.reduce((acc, current) => parseParams(current, acc), []);
        const rows = properties.map((property) => {
            const propertyType = property.type ? property.type : property;
            const row = [];
            const nameCol = [];
            const name = property.name.match(/[\\`\\|]/g) !== null
                ? (0, utils_1.escapeChars)(getName(property))
                : `\`${getName(property)}\``;
            nameCol.push(name);
            row.push(nameCol.join(' '));
            row.push(Handlebars.helpers.type
                .call(propertyType)
                .replace(/(?<!\\)\|/g, '\\|'));
            if (hasComments) {
                const comments = getComments(property);
                if (comments) {
                    row.push((0, utils_1.stripLineBreaks)(Handlebars.helpers.comments.call(comments)).replace(/\|/g, '\\|'));
                }
                else {
                    row.push('-');
                }
            }
            return `| ${row.join(' | ')} |\n`;
        });
        const output = `\n| ${headers.join(' | ')} |\n| ${headers
            .map(() => ':------')
            .join(' | ')} |\n${rows.join('')}`;
        return output;
    });
}
exports.default = default_1;
function getName(property) {
    const md = [];
    if (property.flags.isRest) {
        md.push('...');
    }
    if (property.getSignature) {
        md.push(Handlebars.helpers.signatureTitle.call(property.getSignature, 'get', false));
    }
    else if (property.setSignature) {
        md.push(Handlebars.helpers.signatureTitle.call(property.setSignature, 'set', false));
    }
    else {
        md.push(property.name);
    }
    if (property.flags.isOptional) {
        md.push('?');
    }
    return md.join('');
}
function getComments(property) {
    var _a, _b, _c;
    if (property.type instanceof typedoc_1.ReflectionType) {
        if ((_b = (_a = property.type) === null || _a === void 0 ? void 0 : _a.declaration) === null || _b === void 0 ? void 0 : _b.signatures) {
            return (_c = property.type) === null || _c === void 0 ? void 0 : _c.declaration.signatures[0].comment;
        }
    }
    if (property.signatures) {
        return property.signatures[0].comment;
    }
    return property.comment;
}
