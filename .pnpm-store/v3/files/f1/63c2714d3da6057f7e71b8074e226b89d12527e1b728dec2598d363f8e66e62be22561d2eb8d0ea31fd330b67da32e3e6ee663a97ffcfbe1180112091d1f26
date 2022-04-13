"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Handlebars = require("handlebars");
const utils_1 = require("../../utils");
function default_1(theme) {
    Handlebars.registerHelper('toc', function () {
        var _a, _b;
        const md = [];
        const { hideInPageTOC } = theme;
        const isVisible = (_a = this.groups) === null || _a === void 0 ? void 0 : _a.some((group) => group.allChildrenHaveOwnDocument());
        function pushGroup(group, md) {
            const children = group.children.map((child) => `- [${(0, utils_1.escapeChars)(child.name)}](${Handlebars.helpers.relativeURL(child.url)})`);
            md.push(children.join('\n'));
        }
        if ((!hideInPageTOC && this.groups) || (isVisible && this.groups)) {
            if (!hideInPageTOC) {
                md.push(`## Table of contents\n\n`);
            }
            const headingLevel = hideInPageTOC ? `##` : `###`;
            (_b = this.groups) === null || _b === void 0 ? void 0 : _b.forEach((group) => {
                const groupTitle = group.title;
                if (group.categories) {
                    group.categories.forEach((category) => {
                        md.push(`${headingLevel} ${category.title} ${groupTitle}\n\n`);
                        pushGroup(category, md);
                        md.push('\n');
                    });
                }
                else {
                    if (!hideInPageTOC || group.allChildrenHaveOwnDocument()) {
                        md.push(`${headingLevel} ${groupTitle}\n\n`);
                        pushGroup(group, md);
                        md.push('\n');
                    }
                }
            });
        }
        return md.length > 0 ? md.join('\n') : null;
    });
}
exports.default = default_1;
