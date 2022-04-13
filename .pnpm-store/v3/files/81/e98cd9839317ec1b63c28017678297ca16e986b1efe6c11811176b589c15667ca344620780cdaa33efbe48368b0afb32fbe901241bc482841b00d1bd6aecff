"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Handlebars = require("handlebars");
const utils_1 = require("../../utils");
function default_1(theme) {
    Handlebars.registerHelper('breadcrumbs', function () {
        const { entryPoints, entryDocument, project, readme } = theme;
        if (!project) {
            return '';
        }
        const hasReadmeFile = !readme.endsWith('none');
        const breadcrumbs = [];
        const globalsName = entryPoints.length > 1 ? 'Modules' : 'Exports';
        breadcrumbs.push(this.url === entryDocument
            ? project.name
            : `[${project.name}](${Handlebars.helpers.relativeURL(entryDocument)})`);
        if (hasReadmeFile) {
            breadcrumbs.push(this.url === project.url
                ? globalsName
                : `[${globalsName}](${Handlebars.helpers.relativeURL('modules.md')})`);
        }
        const breadcrumbsOut = breadcrumb(this, this.model, breadcrumbs);
        return breadcrumbsOut;
    });
}
exports.default = default_1;
function breadcrumb(page, model, md) {
    if (model && model.parent) {
        breadcrumb(page, model.parent, md);
        if (model.url) {
            md.push(page.url === model.url
                ? `${(0, utils_1.escapeChars)(model.name)}`
                : `[${(0, utils_1.escapeChars)(model.name)}](${Handlebars.helpers.relativeURL(model.url)})`);
        }
    }
    return md.join(' / ');
}
