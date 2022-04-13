"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReduxObjectDenormalizer = /** @class */ (function () {
    function ReduxObjectDenormalizer(propertiesMapper) {
        this.cachedModels = {};
        this.setPropertiesMapper(propertiesMapper);
    }
    ReduxObjectDenormalizer.prototype.setPropertiesMapper = function (propertiesMapper) {
        this.propertiesMapper = propertiesMapper;
    };
    ReduxObjectDenormalizer.prototype.setReduxObject = function (reduxObject) {
        this.reduxObject = reduxObject;
    };
    ReduxObjectDenormalizer.prototype.setEntityType = function (entityType) {
        this.entityType = entityType;
    };
    ReduxObjectDenormalizer.prototype.setEntityIds = function (ids) {
        this.ids = ids;
    };
    ReduxObjectDenormalizer.prototype.setReturnBuilderInRelations = function (returnBuilderInRelations) {
        this.returnBuilderInRelations = returnBuilderInRelations;
    };
    ReduxObjectDenormalizer.prototype.build = function () {
        var _this = this;
        var _a = this, reduxObject = _a.reduxObject, entityType = _a.entityType, propertiesMapper = _a.propertiesMapper;
        if (!propertiesMapper || typeof propertiesMapper !== 'object') {
            throw new Error('ReduxObjectDenormalizer cannot build, propertiesMapper is not set');
        }
        else if (!reduxObject || typeof reduxObject !== 'object') {
            throw new Error('ReduxObjectDenormalizer cannot build, reduxObject is not set');
        }
        else if (!entityType) {
            throw new Error('ReduxObjectDenormalizer cannot build, entityType is not set');
        }
        if (!reduxObject[entityType]) {
            return null;
        }
        var ids = this.ids;
        if (!ids) {
            ids = Object.keys(reduxObject[entityType]);
        }
        if (Array.isArray(ids)) {
            if (!ids.length) {
                return null;
            }
            var models_1 = [];
            ids.forEach(function (id) {
                var model = _this.buildModel(entityType, id);
                if (model) {
                    models_1.push(model);
                }
            });
            return models_1;
        }
        return this.buildModel(entityType, ids);
    };
    ReduxObjectDenormalizer.prototype.buildModel = function (type, id) {
        var reduxObject = this.reduxObject;
        if (!reduxObject[type]) {
            return null;
        }
        var reduxObjectModel = reduxObject[type][id];
        if (!reduxObjectModel) {
            return null;
        }
        // checks for built model in cachedModels is a protection from creating models on recursive relationships
        var entityKey = type + "-" + id;
        var model = this.cachedModels[entityKey];
        if (!model) {
            model = this.propertiesMapper.createModel(type);
            if (model) {
                this.cachedModels[entityKey] = model;
                this.propertiesMapper.setId(model, reduxObjectModel.id);
                if (reduxObjectModel.attributes) {
                    this.propertiesMapper.setAttributes(model, reduxObjectModel.attributes);
                }
                var relationships = this.buildRelationships(model, reduxObjectModel.relationships);
                if (relationships) {
                    this.propertiesMapper.setRelationships(model, relationships);
                }
            }
        }
        return model;
    };
    ReduxObjectDenormalizer.prototype.buildRelationships = function (model, reduxObjectRelationships) {
        var _this = this;
        if (!reduxObjectRelationships) {
            return null;
        }
        var relationNames = Object.keys(reduxObjectRelationships);
        if (!relationNames.length) {
            return null;
        }
        var relations = {};
        relationNames.forEach(function (relationName) {
            var relation = reduxObjectRelationships[relationName];
            if (relation && relation.data) {
                if (_this.returnBuilderInRelations) {
                    relations[relationName] = _this.buildRelationModels.bind(_this, relation.data);
                }
                else {
                    relations[relationName] = _this.buildRelationModels(relation.data);
                }
            }
            if (relation && relation.links) {
                _this.propertiesMapper.setRelationshipLinks(model, relationName, relation.links);
            }
            if (relation && relation.meta) {
                var setRelationshipMeta = _this.propertiesMapper.setRelationshipMeta;
                if (setRelationshipMeta) { // support was added in patch release
                    setRelationshipMeta(model, relationName, relation.meta);
                }
            }
        });
        return Object.keys(relations).length ? relations : null;
    };
    ReduxObjectDenormalizer.prototype.buildRelationModels = function (data) {
        var _this = this;
        if (Array.isArray(data)) {
            var relationModels_1 = [];
            data.forEach(function (dataItem) {
                var model = _this.buildModel(dataItem.type, dataItem.id);
                relationModels_1.push(model || dataItem);
            });
            return relationModels_1;
        }
        else if (data.id && data.type) {
            return this.buildModel(data.type, data.id) || data;
        }
        return null;
    };
    return ReduxObjectDenormalizer;
}());
exports.default = ReduxObjectDenormalizer;
//# sourceMappingURL=ReduxObjectDenormalizer.js.map