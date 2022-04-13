"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonDeserializer = void 0;
var JsonDeserializer = /** @class */ (function () {
    function JsonDeserializer(propertiesMapper, deserializeCache, options) {
        this.preferNestedDataFromData = false;
        this.setPropertiesMapper(propertiesMapper);
        this.setDeserializeCache(deserializeCache);
        if (!options) {
            return;
        }
        if (options.preferNestedDataFromData) {
            this.preferNestedDataFromData = true;
        }
    }
    JsonDeserializer.prototype.setDeserializeCache = function (dc) {
        this.dc = dc;
    };
    JsonDeserializer.prototype.setPropertiesMapper = function (pm) {
        this.pm = pm;
    };
    JsonDeserializer.prototype.setJsonParsedObject = function (body) {
        this.body = body;
    };
    JsonDeserializer.prototype.build = function () {
        var data = this.body.data;
        var stuff;
        if (Array.isArray(data)) {
            stuff = [];
            var collectionLength = data.length;
            for (var i = 0; i < collectionLength; i++) {
                if (data[i]) {
                    var model = this.buildModelByData(data[i]);
                    if (model) {
                        stuff.push(model);
                    }
                }
            }
        }
        else if (data) {
            stuff = this.buildModelByData(data);
        }
        return stuff;
    };
    JsonDeserializer.prototype.buildModelByData = function (data, resourceIdObj) {
        if (resourceIdObj === void 0) { resourceIdObj = {}; }
        var cachedModel = this.dc.getCachedModel(data);
        if (cachedModel) {
            return cachedModel;
        }
        var model = this.pm.createModel(data.type);
        this.dc.handleModel(model, data); // should be called before this.pm.setRelationships(model, relationships);
        if (model) {
            this.pm.setId(model, data.id);
            if (data.attributes) {
                this.pm.setAttributes(model, data.attributes);
            }
            if (data.meta && this.pm.setMeta) {
                this.pm.setMeta(model, data.meta);
            }
            if (data.links && this.pm.setLinks) {
                this.pm.setLinks(model, data.links);
            }
            if (resourceIdObj.meta) {
                this.pm.setResourceIdObjMeta(model, resourceIdObj.meta);
            }
            var relationships = this.buildRelationsByData(data, model);
            if (relationships) {
                this.pm.setRelationships(model, relationships);
            }
        }
        return model;
    };
    JsonDeserializer.prototype.buildRelationsByData = function (data, model) {
        var readyRelations = {};
        if (data.relationships) {
            for (var k in data.relationships) {
                var relation = data.relationships[k];
                if (Array.isArray(relation.data)) {
                    readyRelations[k] = [];
                    var relationDataLength = relation.data.length;
                    var resourceIdObj = void 0;
                    for (var i = 0; i < relationDataLength; i++) {
                        resourceIdObj = relation.data[i];
                        if (!resourceIdObj) {
                            return;
                        }
                        var dataItem = this.buildDataFromIncludedOrData(resourceIdObj.id, resourceIdObj.type);
                        readyRelations[k].push(this.buildModelByData(dataItem, resourceIdObj));
                    }
                }
                else if (relation.data) {
                    var dataItem = this.buildDataFromIncludedOrData(relation.data.id, relation.data.type);
                    readyRelations[k] = this.buildModelByData(dataItem, relation.data);
                }
                else if (relation.data === null) {
                    readyRelations[k] = null;
                }
                if (relation.links) {
                    var setRelationshipLinks = this.pm.setRelationshipLinks;
                    if (setRelationshipLinks) {
                        setRelationshipLinks(model, k, relation.links);
                    }
                }
                if (relation.meta) {
                    var setRelationshipMeta = this.pm.setRelationshipMeta;
                    if (setRelationshipMeta) {
                        setRelationshipMeta(model, k, relation.meta);
                    }
                }
            }
        }
        if (Object.keys(readyRelations).length) {
            return readyRelations;
        }
        return null;
    };
    JsonDeserializer.prototype.buildDataFromIncludedOrData = function (id, type) {
        if (this.preferNestedDataFromData) {
            var dataObject = this.buildDataInObject();
            var dataItemFromData = dataObject[type + id];
            if (dataItemFromData) {
                return dataItemFromData;
            }
        }
        var includedObject = this.buildIncludedInObject();
        var dataItemFromIncluded = includedObject[type + id];
        if (dataItemFromIncluded) {
            return dataItemFromIncluded;
        }
        if (!this.preferNestedDataFromData) {
            var dataObject = this.buildDataInObject();
            var dataItemFromData = dataObject[type + id];
            if (dataItemFromData) {
                return dataItemFromData;
            }
        }
        return { id: id, type: type };
    };
    JsonDeserializer.prototype.buildDataInObject = function () {
        if (!this.dataInObject) {
            this.dataInObject = {};
            var data = this.body.data;
            var dataLength = data.length;
            if (data && dataLength) {
                for (var i = 0; i < dataLength; i++) {
                    var item = data[i];
                    this.dataInObject[item.type + item.id] = item;
                }
            }
            else if (data) {
                this.dataInObject[data.type + data.id] = data;
            }
        }
        return this.dataInObject;
    };
    JsonDeserializer.prototype.buildIncludedInObject = function () {
        if (!this.includedInObject) {
            this.includedInObject = {};
            if (this.body.included) {
                var includedLength = this.body.included.length;
                for (var i = 0; i < includedLength; i++) {
                    var item = this.body.included[i];
                    this.includedInObject[item.type + item.id] = item;
                }
            }
        }
        return this.includedInObject;
    };
    return JsonDeserializer;
}());
exports.JsonDeserializer = JsonDeserializer;
exports.default = JsonDeserializer;
//# sourceMappingURL=JsonDeserializer.js.map