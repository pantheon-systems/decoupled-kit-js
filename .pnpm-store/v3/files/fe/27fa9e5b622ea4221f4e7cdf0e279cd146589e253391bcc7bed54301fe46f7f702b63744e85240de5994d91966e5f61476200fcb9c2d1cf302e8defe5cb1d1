"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Handlebars = require("handlebars");
const utils_1 = require("../../utils");
function default_1() {
    Handlebars.registerHelper('hierarchy', function (level) {
        const md = [];
        const symbol = level > 0 ? getSymbol(level) : '-';
        this.types.forEach((hierarchyType) => {
            if (this.isTarget) {
                md.push(`${symbol} **\`${hierarchyType}\`**`);
            }
            else {
                md.push(`${symbol} ${Handlebars.helpers.type.call(hierarchyType)}`);
            }
        });
        if (this.next) {
            md.push(Handlebars.helpers.hierarchy.call(this.next, level + 1));
        }
        return md.join('\n\n');
    });
    function getSymbol(level) {
        return (0, utils_1.spaces)(2) + [...Array(level)].map(() => '↳').join('');
    }
}
exports.default = default_1;
