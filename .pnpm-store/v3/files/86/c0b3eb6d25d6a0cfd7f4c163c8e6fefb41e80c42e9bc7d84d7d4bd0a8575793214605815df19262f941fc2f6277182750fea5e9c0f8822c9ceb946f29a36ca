"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeserializeCache = exports.jsonStringify = void 0;
function jsonStringify(json) {
    var stringified;
    try {
        stringified = JSON.stringify(json);
    }
    catch (e) {
        stringified = '';
        console.warn(e);
    }
    return stringified;
}
exports.jsonStringify = jsonStringify;
var DeserializeCache = /** @class */ (function () {
    function DeserializeCache() {
        this.cachedModels = {};
    }
    DeserializeCache.prototype.getCachedModel = function (data) {
        var entityKey = this.createCacheKey(data);
        return this.cachedModels[entityKey] || null;
    };
    DeserializeCache.prototype.handleModel = function (model, data) {
        var entityKey = this.createCacheKey(data);
        var dataWithPayload = data.attributes || data.relationships;
        if (entityKey && dataWithPayload) {
            this.cachedModels[entityKey] = model;
        }
    };
    DeserializeCache.prototype.createCacheKey = function (data) {
        if (data.type && data.id && !data.meta) {
            return data.type + "-" + data.id;
        }
        if (data.type && data.id && data.meta) {
            var meta = jsonStringify(data.meta);
            return data.type + "-" + data.id + "-" + meta;
        }
        return '';
    };
    return DeserializeCache;
}());
exports.DeserializeCache = DeserializeCache;
//# sourceMappingURL=cache.js.map