"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.postProcessSidebars = void 0;
const tslib_1 = require("tslib");
const utils_1 = require("@docusaurus/utils");
const lodash_1 = (0, tslib_1.__importDefault)(require("lodash"));
function normalizeCategoryLink(category, params) {
    var _a, _b;
    if (((_a = category.link) === null || _a === void 0 ? void 0 : _a.type) === 'generated-index') {
        // default slug logic can be improved
        const getDefaultSlug = () => `/category/${params.categoryLabelSlugger.slug(category.label)}`;
        const slug = (_b = category.link.slug) !== null && _b !== void 0 ? _b : getDefaultSlug();
        const permalink = (0, utils_1.normalizeUrl)([params.version.versionPath, slug]);
        return {
            ...category.link,
            slug,
            permalink,
        };
    }
    return category.link;
}
function postProcessSidebarItem(item, params) {
    var _a, _b;
    if (item.type === 'category') {
        const category = {
            ...item,
            collapsed: (_a = item.collapsed) !== null && _a !== void 0 ? _a : params.sidebarOptions.sidebarCollapsed,
            collapsible: (_b = item.collapsible) !== null && _b !== void 0 ? _b : params.sidebarOptions.sidebarCollapsible,
            link: normalizeCategoryLink(item, params),
            items: item.items.map((subItem) => postProcessSidebarItem(subItem, params)),
        };
        // If the current category doesn't have subitems, we render a normal link
        // instead.
        if (category.items.length === 0) {
            if (!category.link) {
                throw new Error(`Sidebar category ${item.label} has neither any subitem nor a link. This makes this item not able to link to anything.`);
            }
            switch (category.link.type) {
                case 'doc':
                    return {
                        type: 'doc',
                        label: category.label,
                        id: category.link.id,
                    };
                case 'generated-index':
                    return {
                        type: 'link',
                        label: category.label,
                        href: category.link.permalink,
                    };
                default:
                    throw new Error('Unexpected sidebar category link type');
            }
        }
        // A non-collapsible category can't be collapsed!
        if (category.collapsible === false) {
            category.collapsed = false;
        }
        return category;
    }
    return item;
}
function postProcessSidebars(sidebars, params) {
    return lodash_1.default.mapValues(sidebars, (sidebar) => sidebar.map((item) => postProcessSidebarItem(item, params)));
}
exports.postProcessSidebars = postProcessSidebars;
