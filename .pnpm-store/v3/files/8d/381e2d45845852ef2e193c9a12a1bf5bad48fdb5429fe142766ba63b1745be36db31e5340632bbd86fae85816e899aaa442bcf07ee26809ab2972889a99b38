"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Handlebars = require("handlebars");
const utils_1 = require("../../utils");
function default_1() {
    Handlebars.registerHelper('typeParameterTable', function () {
        return table(this);
    });
}
exports.default = default_1;
function table(parameters) {
    const showTypeCol = hasTypes(parameters);
    const comments = parameters.map((param) => { var _a, _b, _c, _d; return !!((_b = (_a = param.comment) === null || _a === void 0 ? void 0 : _a.text) === null || _b === void 0 ? void 0 : _b.trim()) || !!((_d = (_c = param.comment) === null || _c === void 0 ? void 0 : _c.shortText) === null || _d === void 0 ? void 0 : _d.trim()); });
    const hasComments = !comments.every((value) => !value);
    const headers = ['Name'];
    if (showTypeCol) {
        headers.push('Type');
    }
    if (hasComments) {
        headers.push('Description');
    }
    const rows = parameters.map((parameter) => {
        const row = [];
        row.push(`\`${parameter.name}\``);
        if (showTypeCol) {
            const typeCol = [];
            if (!parameter.type && !parameter.default) {
                typeCol.push(`\`${parameter.name}\``);
            }
            if (parameter.type) {
                typeCol.push(`extends ${Handlebars.helpers.type.call(parameter.type, 'object')}`);
            }
            if (parameter.default) {
                if (parameter.type) {
                    typeCol.push(' = ');
                }
                typeCol.push(Handlebars.helpers.type.call(parameter.default));
            }
            row.push(typeCol.join(''));
        }
        if (hasComments) {
            if (parameter.comment) {
                row.push((0, utils_1.stripLineBreaks)(Handlebars.helpers.comments.call(parameter.comment)).replace(/\|/g, '\\|'));
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
}
function hasTypes(parameters) {
    const types = parameters.map((param) => !!param.type || !!param.default);
    return !types.every((value) => !value);
}
