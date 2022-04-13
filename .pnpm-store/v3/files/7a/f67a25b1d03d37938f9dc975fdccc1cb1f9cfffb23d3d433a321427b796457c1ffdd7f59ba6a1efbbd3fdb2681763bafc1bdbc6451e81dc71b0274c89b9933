"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getThemeSwizzleConfig = exports.normalizeSwizzleConfig = void 0;
const utils_validation_1 = require("@docusaurus/utils-validation");
const common_1 = require("./common");
const themes_1 = require("./themes");
function getModuleSwizzleConfig(swizzlePlugin) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    const getSwizzleConfig = (_d = (_b = (_a = swizzlePlugin.plugin.plugin) === null || _a === void 0 ? void 0 : _a.getSwizzleConfig) !== null && _b !== void 0 ? _b : (_c = swizzlePlugin.plugin.pluginModule) === null || _c === void 0 ? void 0 : _c.module.getSwizzleConfig) !== null && _d !== void 0 ? _d : (_f = (_e = swizzlePlugin.plugin.pluginModule) === null || _e === void 0 ? void 0 : _e.module) === null || _f === void 0 ? void 0 : _f.getSwizzleConfig;
    if (getSwizzleConfig) {
        return getSwizzleConfig();
    }
    // TODO deprecate getSwizzleComponentList later
    const getSwizzleComponentList = (_k = (_h = (_g = swizzlePlugin.plugin.plugin) === null || _g === void 0 ? void 0 : _g.getSwizzleComponentList) !== null && _h !== void 0 ? _h : (_j = swizzlePlugin.plugin.pluginModule) === null || _j === void 0 ? void 0 : _j.module.getSwizzleComponentList) !== null && _k !== void 0 ? _k : (_m = (_l = swizzlePlugin.plugin.pluginModule) === null || _l === void 0 ? void 0 : _l.module) === null || _m === void 0 ? void 0 : _m.getSwizzleComponentList;
    if (getSwizzleComponentList) {
        const safeComponents = (_o = getSwizzleComponentList()) !== null && _o !== void 0 ? _o : [];
        const safeComponentConfig = {
            actions: {
                eject: 'safe',
                wrap: 'safe',
            },
            description: undefined,
        };
        return {
            components: Object.fromEntries(safeComponents.map((comp) => [comp, safeComponentConfig])),
        };
    }
    return undefined;
}
function normalizeSwizzleConfig(unsafeSwizzleConfig) {
    const schema = utils_validation_1.Joi.object({
        components: utils_validation_1.Joi.object()
            .pattern(utils_validation_1.Joi.string(), utils_validation_1.Joi.object({
            actions: utils_validation_1.Joi.object().pattern(utils_validation_1.Joi.string().valid(...common_1.SwizzleActions), utils_validation_1.Joi.string().valid(...common_1.SwizzleActionsStatuses)),
            description: utils_validation_1.Joi.string(),
        }))
            .required(),
    });
    const result = schema.validate(unsafeSwizzleConfig);
    if (result.error) {
        throw new Error(`Swizzle config does not match expected schema: ${result.error.message}`);
    }
    const swizzleConfig = result.value;
    // Ensure all components always declare all actions
    Object.values(swizzleConfig.components).forEach((componentConfig) => {
        common_1.SwizzleActions.forEach((action) => {
            if (!componentConfig.actions[action]) {
                componentConfig.actions[action] = 'unsafe';
            }
        });
    });
    return swizzleConfig;
}
exports.normalizeSwizzleConfig = normalizeSwizzleConfig;
const FallbackSwizzleConfig = {
    components: {},
};
function getThemeSwizzleConfig(themeName, plugins) {
    const plugin = (0, themes_1.getPluginByThemeName)(plugins, themeName);
    const config = getModuleSwizzleConfig(plugin);
    if (config) {
        try {
            return normalizeSwizzleConfig(config);
        }
        catch (e) {
            throw new Error(`Invalid Swizzle config for theme ${themeName}.\n${e.message}`);
        }
    }
    return FallbackSwizzleConfig;
}
exports.getThemeSwizzleConfig = getThemeSwizzleConfig;
