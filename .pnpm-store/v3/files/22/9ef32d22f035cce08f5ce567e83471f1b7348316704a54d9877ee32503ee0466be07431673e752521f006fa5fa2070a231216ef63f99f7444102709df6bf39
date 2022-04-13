"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Handlebars = require("handlebars");
const typedoc_1 = require("typedoc");
const utils_1 = require("../../utils");
function default_1() {
    Handlebars.registerHelper('typeAndParent', function () {
        var _a, _b, _c;
        const getUrl = (name, url) => `[${name}](${Handlebars.helpers.relativeURL(url)})`;
        if (this) {
            if ('elementType' in this) {
                return Handlebars.helpers.typeAndParent.call(this.elementType) + '[]';
            }
            else {
                if (this.reflection) {
                    const md = [];
                    if (this.reflection instanceof typedoc_1.SignatureReflection) {
                        if ((_b = (_a = this.reflection.parent) === null || _a === void 0 ? void 0 : _a.parent) === null || _b === void 0 ? void 0 : _b.url) {
                            md.push(getUrl(this.reflection.parent.parent.name, this.reflection.parent.parent.url));
                            if (this.reflection.parent.url) {
                                md.push(getUrl(this.reflection.parent.name, this.reflection.parent.url));
                            }
                        }
                    }
                    else {
                        if ((_c = this.reflection.parent) === null || _c === void 0 ? void 0 : _c.url) {
                            md.push(getUrl(this.reflection.parent.name, this.reflection.parent.url));
                            if (this.reflection.url) {
                                md.push(getUrl(this.reflection.name, this.reflection.url));
                            }
                        }
                    }
                    return md.join('.');
                }
                else {
                    return (0, utils_1.escapeChars)(this.toString());
                }
            }
        }
        return 'void';
    });
}
exports.default = default_1;
