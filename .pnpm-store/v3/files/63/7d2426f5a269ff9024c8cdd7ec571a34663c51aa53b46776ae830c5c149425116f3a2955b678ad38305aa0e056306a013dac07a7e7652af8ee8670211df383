"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelsSerializer = void 0;
var utils_1 = require("../utils");
var ModelsSerializer = /** @class */ (function () {
    function ModelsSerializer(propertiesMapper) {
        propertiesMapper && this.setPropertiesMapper(propertiesMapper);
    }
    ModelsSerializer.prototype.setPropertiesMapper = function (propertiesMapper) {
        this.propertiesMapper = propertiesMapper;
    };
    ModelsSerializer.prototype.setStuff = function (stuff) {
        this.stuff = stuff;
    };
    ModelsSerializer.prototype.setIncludeNames = function (includeNames) {
        if (Array.isArray(includeNames)) {
            var includeNamesTree_1 = {};
            includeNames.forEach(function (namesChain) {
                utils_1.createIncludeNamesTree(namesChain, includeNamesTree_1);
            });
            this.includeNamesTree = includeNamesTree_1;
        }
        else {
            this.includeNamesTree = includeNames;
        }
    };
    ModelsSerializer.prototype.build = function () {
        var _a = this, stuff = _a.stuff, propertiesMapper = _a.propertiesMapper;
        if (!propertiesMapper || typeof propertiesMapper !== 'object') {
            throw new Error('ModelsSerializer cannot build, propertiesMapper is not set');
        }
        else if (!stuff || typeof stuff !== 'object') {
            throw new Error('ModelsSerializer cannot build, stuff is not set');
        }
        var body = {};
        var uniqueIncluded = {};
        if (stuff && Array.isArray(stuff)) {
            var collectionLength = stuff.length;
            var data = [];
            for (var i = 0; i < collectionLength; i++) {
                data.push(this.buildDataByModel(stuff[i]));
                this.buildIncludedByModel(stuff[i], this.includeNamesTree, uniqueIncluded);
            }
            body['data'] = data;
        }
        else if (stuff) {
            body['data'] = this.buildDataByModel(stuff);
            this.buildIncludedByModel(stuff, this.includeNamesTree, uniqueIncluded);
        }
        else if (stuff === null) {
            body['data'] = null;
        }
        if (Object.keys(uniqueIncluded).length) {
            body['included'] = [];
            var includeUniqueKeys = Object.keys(uniqueIncluded);
            includeUniqueKeys.forEach(function (k) {
                body['included'].push(uniqueIncluded[k]);
            });
        }
        return body;
    };
    ModelsSerializer.prototype.buildDataByModel = function (model) {
        var data = {
            id: this.propertiesMapper.getId(model),
            type: this.propertiesMapper.getType(model),
            attributes: this.propertiesMapper.getAttributes(model),
        };
        if (typeof data.type !== 'string' || !data.type) {
            console.warn('ModelsSerializer cannot buildDataByModel, type is not set or incorrect', model);
            throw new Error('ModelsSerializer cannot buildDataByModel, type is not set or incorrect');
        }
        var relationships = this.buildRelationshipsByModel(model);
        if (relationships && Object.keys(relationships).length) {
            data['relationships'] = relationships;
        }
        return data;
    };
    ModelsSerializer.prototype.buildRelationshipsByModel = function (model) {
        var _this = this;
        var relations = this.propertiesMapper.getRelationships(model);
        if (!relations || !Object.keys(relations).length) {
            return;
        }
        var relationships = {};
        Object.keys(relations).forEach(function (k) {
            var relation = relations[k];
            if (Array.isArray(relation)) {
                var relationshipData = [];
                var relationLength = relation.length;
                for (var i = 0; i < relationLength; i++) {
                    var item = {
                        id: _this.propertiesMapper.getId(relation[i]),
                        type: _this.propertiesMapper.getType(relation[i])
                    };
                    if (item.id && item.type) {
                        relationshipData.push(item);
                    }
                    else {
                        console.error("Can't create data item[" + i + "] for relationship " + k + ",\n                            it doesn't have 'id' or 'type', it was skipped", relation[i]);
                    }
                }
                relationships[k] = {
                    data: relationshipData
                };
            }
            else if (relation) {
                var item = {
                    id: _this.propertiesMapper.getId(relation),
                    type: _this.propertiesMapper.getType(relation)
                };
                if (item.type) {
                    relationships[k] = {
                        data: item
                    };
                }
                else {
                    console.error("Can't create data for relationship " + k + ", it doesn't have 'type', it was skipped", relation);
                }
            }
            else {
                relationships[k] = {
                    data: relation
                };
            }
        });
        return relationships;
    };
    ModelsSerializer.prototype.buildIncludedByModel = function (model, includeTree, builtIncluded) {
        if (builtIncluded === void 0) { builtIncluded = {}; }
        if (!includeTree || !Object.keys(includeTree).length) {
            return;
        }
        var modelRelationships = this.propertiesMapper.getRelationships(model);
        if (!modelRelationships || !Object.keys(modelRelationships).length) {
            return;
        }
        var includeNames = Object.keys(includeTree);
        var includeNamesLength = includeNames.length;
        for (var i = 0; i < includeNamesLength; i++) {
            var currentRelationName = includeNames[i];
            var relation = modelRelationships[currentRelationName];
            if (relation) {
                if (Array.isArray(relation)) {
                    var relationModelsLength = relation.length;
                    for (var r = 0; r < relationModelsLength; r++) {
                        var relationModel = relation[r];
                        this.buildIncludedItem(relationModel, includeTree[currentRelationName], builtIncluded);
                    }
                }
                else {
                    this.buildIncludedItem(relation, includeTree[currentRelationName], builtIncluded);
                }
            }
        }
    };
    ModelsSerializer.prototype.buildIncludedItem = function (relationModel, subIncludeTree, builtIncluded) {
        var includeKey = this.propertiesMapper.getType(relationModel) + this.propertiesMapper.getId(relationModel);
        if (!builtIncluded[includeKey]) {
            // create data by current entity if such included is not yet created
            builtIncluded[includeKey] = this.buildDataByModel(relationModel);
            if (subIncludeTree) {
                this.buildIncludedByModel(relationModel, subIncludeTree, builtIncluded);
            }
        }
    };
    return ModelsSerializer;
}());
exports.ModelsSerializer = ModelsSerializer;
exports.default = ModelsSerializer;
//# sourceMappingURL=ModelsSerializer.js.map