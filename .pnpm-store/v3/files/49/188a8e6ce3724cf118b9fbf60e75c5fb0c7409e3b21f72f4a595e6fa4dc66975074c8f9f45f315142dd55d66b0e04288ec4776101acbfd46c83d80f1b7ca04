"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonPropertiesMapper = exports.defineRelationGetter = exports.ModelPropertiesMapper = exports.RELATIONSHIP_NAMES_PROP = void 0;
exports.RELATIONSHIP_NAMES_PROP = 'relationshipNames';
var ModelPropertiesMapper = /** @class */ (function () {
    function ModelPropertiesMapper() {
    }
    ModelPropertiesMapper.prototype.getId = function (model) {
        return model.id;
    };
    ModelPropertiesMapper.prototype.getType = function (model) {
        return model.type;
    };
    ModelPropertiesMapper.prototype.getAttributes = function (model) {
        var exceptProps = ['id', 'type', exports.RELATIONSHIP_NAMES_PROP];
        if (Array.isArray(model[exports.RELATIONSHIP_NAMES_PROP])) {
            exceptProps.push.apply(exceptProps, model[exports.RELATIONSHIP_NAMES_PROP]);
        }
        else if (model[exports.RELATIONSHIP_NAMES_PROP]) {
            console.warn("Can't getAttributes correctly, '" + exports.RELATIONSHIP_NAMES_PROP + "' property of " + model.type + "-" + model.id + " model\n                isn't array of relationship names", model[exports.RELATIONSHIP_NAMES_PROP]);
        }
        var attributes = {};
        Object.keys(model).forEach(function (attrName) {
            if (exceptProps.indexOf(attrName) === -1) {
                attributes[attrName] = model[attrName];
            }
        });
        return attributes;
    };
    ModelPropertiesMapper.prototype.getRelationships = function (model) {
        var relationshipNames = model[exports.RELATIONSHIP_NAMES_PROP];
        if (!relationshipNames || Array.isArray(relationshipNames) && !relationshipNames.length) {
            return;
        }
        else if (relationshipNames && !Array.isArray(relationshipNames)) {
            console.warn("Can't getRelationships correctly,\n                '" + exports.RELATIONSHIP_NAMES_PROP + "' property of " + model.type + "-" + model.id + " model\n                isn't array of relationship names", model[exports.RELATIONSHIP_NAMES_PROP]);
            return;
        }
        var relationships = {};
        relationshipNames.forEach(function (relationName) {
            if (model[relationName] !== undefined) {
                relationships[relationName] = model[relationName];
            }
        });
        return relationships;
    };
    return ModelPropertiesMapper;
}());
exports.ModelPropertiesMapper = ModelPropertiesMapper;
function defineRelationGetter(model, relationName, buildRelation) {
    Object.defineProperty(model, relationName, {
        enumerable: true,
        configurable: true,
        set: function (value) {
            delete model[relationName];
            model[relationName] = value;
        },
        get: function () {
            delete model[relationName];
            return model[relationName] = buildRelation();
        },
    });
}
exports.defineRelationGetter = defineRelationGetter;
var JsonPropertiesMapper = /** @class */ (function () {
    function JsonPropertiesMapper() {
    }
    JsonPropertiesMapper.prototype.createModel = function (type) {
        return { type: type };
    };
    JsonPropertiesMapper.prototype.setId = function (model, id) {
        model.id = id;
    };
    JsonPropertiesMapper.prototype.setAttributes = function (model, attributes) {
        Object.keys(attributes).forEach(function (propName) {
            model[propName] = attributes[propName];
        });
    };
    JsonPropertiesMapper.prototype.setMeta = function (model, meta) {
        model.meta = meta;
    };
    JsonPropertiesMapper.prototype.setLinks = function (model, links) {
        model.links = links;
    };
    JsonPropertiesMapper.prototype.setResourceIdObjMeta = function (model, meta) {
        model.resourceIdObjMeta = meta;
    };
    JsonPropertiesMapper.prototype.setRelationships = function (model, relationships) {
        Object.keys(relationships).forEach(function (propName) {
            if (typeof relationships[propName] === 'function') {
                defineRelationGetter(model, propName, relationships[propName]);
            }
            else {
                model[propName] = relationships[propName];
            }
        });
        var newNames = Object.keys(relationships);
        var currentNames = model[exports.RELATIONSHIP_NAMES_PROP];
        if (currentNames && currentNames.length) {
            model[exports.RELATIONSHIP_NAMES_PROP] = __spreadArray(__spreadArray([], currentNames), newNames).filter(function (value, i, self) { return self.indexOf(value) === i; });
        }
        else {
            model[exports.RELATIONSHIP_NAMES_PROP] = newNames;
        }
    };
    JsonPropertiesMapper.prototype.setRelationshipLinks = function (parentModel, relationName, links) {
        // inherit your IJsonPropertiesMapper and overload this method, if you want to handle relationship links
    };
    JsonPropertiesMapper.prototype.setRelationshipMeta = function (parentModel, relationName, links) {
        // inherit your IJsonPropertiesMapper and overload this method, if you want to handle relationship meta
    };
    return JsonPropertiesMapper;
}());
exports.JsonPropertiesMapper = JsonPropertiesMapper;
//# sourceMappingURL=simplePropertyMappers.js.map