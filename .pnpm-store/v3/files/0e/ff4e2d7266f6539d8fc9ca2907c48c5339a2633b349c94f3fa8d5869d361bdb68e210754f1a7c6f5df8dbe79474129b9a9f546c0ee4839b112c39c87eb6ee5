"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonParse = exports.createIncludeNamesTree = void 0;
function createIncludeNamesTree(namesChain, includeTree) {
    var namesArray = namesChain.split('.');
    var currentIncludeName = namesArray.shift();
    var chainHasMoreNames = namesArray.length;
    var subTree = null;
    if (chainHasMoreNames) {
        subTree = includeTree[currentIncludeName] || {};
        createIncludeNamesTree(namesArray.join('.'), subTree);
    }
    includeTree[currentIncludeName] = subTree;
}
exports.createIncludeNamesTree = createIncludeNamesTree;
function jsonParse(stringified) {
    var parsed;
    try {
        parsed = JSON.parse(stringified);
    }
    catch (e) {
        parsed = {};
        console.warn(e);
    }
    return parsed;
}
exports.jsonParse = jsonParse;
//# sourceMappingURL=utils.js.map