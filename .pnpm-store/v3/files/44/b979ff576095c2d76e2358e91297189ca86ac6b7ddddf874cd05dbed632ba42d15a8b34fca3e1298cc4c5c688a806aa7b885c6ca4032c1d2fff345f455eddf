"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var ModelsSerializer_1 = require("./builders/ModelsSerializer");
var JsonDeserializer_1 = require("./builders/JsonDeserializer");
var ReduxObjectDenormalizer_1 = require("./builders/ReduxObjectDenormalizer");
var simplePropertyMappers_1 = require("./simplePropertyMappers");
var cache_1 = require("./cache");
var Jsona = /** @class */ (function () {
    function Jsona(params) {
        this.modelPropertiesMapper = new simplePropertyMappers_1.ModelPropertiesMapper();
        this.jsonPropertiesMapper = new simplePropertyMappers_1.JsonPropertiesMapper();
        this.DeserializeCache = cache_1.DeserializeCache;
        this.ModelsSerializer = ModelsSerializer_1.default;
        this.JsonDeserializer = JsonDeserializer_1.default;
        if (params && params.modelPropertiesMapper) {
            this.modelPropertiesMapper = params.modelPropertiesMapper;
        }
        if (params && params.jsonPropertiesMapper) {
            this.jsonPropertiesMapper = params.jsonPropertiesMapper;
        }
        if (params && params.DeserializeCache) {
            this.DeserializeCache = params.DeserializeCache;
        }
        if (params && params.ModelsSerializer) {
            this.ModelsSerializer = params.ModelsSerializer;
        }
        if (params && params.JsonDeserializer) {
            this.JsonDeserializer = params.JsonDeserializer;
        }
    }
    /**
     * serialize
     * Creates JSON, compatible with json:api specification from Jsona model(s).
     */
    Jsona.prototype.serialize = function (_a) {
        var stuff = _a.stuff, includeNames = _a.includeNames;
        if (!stuff) {
            throw new Error('Jsona can not serialize, stuff is not passed');
        }
        var jsonBuilder = new this.ModelsSerializer(this.modelPropertiesMapper);
        jsonBuilder.setStuff(stuff);
        if (includeNames) {
            jsonBuilder.setIncludeNames(includeNames);
        }
        return jsonBuilder.build();
    };
    /**
     * deserialize
     * Creates Jsona model(s) from JSON, compatible with json:api specification.
     */
    Jsona.prototype.deserialize = function (body, options) {
        if (!body) {
            throw new Error('Jsona can not deserialize, body is not passed');
        }
        var deserializeCache = new this.DeserializeCache();
        var modelBuilder = new this.JsonDeserializer(this.jsonPropertiesMapper, deserializeCache, options);
        if (typeof body === 'string') {
            modelBuilder.setJsonParsedObject(utils_1.jsonParse(body));
        }
        else {
            modelBuilder.setJsonParsedObject(body);
        }
        return modelBuilder.build();
    };
    /**
     * denormalizeReduxObject
     * Creates Jsona model(s) from ReduxObject, that creates by json-api-normalizer
     * https://github.com/yury-dymov/json-api-normalizer
     *
     */
    Jsona.prototype.denormalizeReduxObject = function (_a) {
        var reduxObject = _a.reduxObject, entityType = _a.entityType, entityIds = _a.entityIds, _b = _a.returnBuilderInRelations, returnBuilderInRelations = _b === void 0 ? false : _b;
        if (!reduxObject) {
            throw new Error('Jsona can not denormalize ReduxObject, incorrect reduxObject passed');
        }
        if (!entityType) {
            throw new Error('Jsona can not denormalize ReduxObject, entityType is not passed');
        }
        if (!reduxObject[entityType]) {
            return null;
        }
        var modelBuilder = new ReduxObjectDenormalizer_1.default(this.jsonPropertiesMapper);
        modelBuilder.setReduxObject(reduxObject);
        modelBuilder.setEntityType(entityType);
        modelBuilder.setReturnBuilderInRelations(returnBuilderInRelations);
        if (entityIds) {
            modelBuilder.setEntityIds(Array.isArray(entityIds) ? entityIds : entityIds.toString());
        }
        return modelBuilder.build();
    };
    return Jsona;
}());
exports.default = Jsona;
//# sourceMappingURL=Jsona.js.map