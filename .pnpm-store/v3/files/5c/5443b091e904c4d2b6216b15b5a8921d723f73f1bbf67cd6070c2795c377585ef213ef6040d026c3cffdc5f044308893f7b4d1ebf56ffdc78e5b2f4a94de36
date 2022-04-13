"use strict";

exports.__esModule = true;
exports.transformListOfUnions = exports.transformUnion = void 0;

var _helpers = require("../helpers");

const transformUnion = ({
  field,
  fieldName
}) => {
  return {
    type: (0, _helpers.buildTypeName)(field.type.name),
    resolve: (source, _, context) => {
      const resolvedField = source[fieldName] || source[`${field.name}__typename_${field.type.name}`];

      if (resolvedField && resolvedField.id) {
        const gatsbyNode = context.nodeModel.getNodeById({
          id: resolvedField.id,
          type: resolvedField.type
        });

        if (gatsbyNode) {
          return gatsbyNode;
        }
      }

      return resolvedField !== null && resolvedField !== void 0 ? resolvedField : null;
    }
  };
};

exports.transformUnion = transformUnion;

const transformListOfUnions = ({
  field,
  fieldName
}) => {
  const typeName = (0, _helpers.buildTypeName)(field.type.ofType.name);
  return {
    type: `[${typeName}]`,
    resolve: (source, _, context) => {
      var _source$fieldName;

      const resolvedField = (_source$fieldName = source[fieldName]) !== null && _source$fieldName !== void 0 ? _source$fieldName : source[`${field.name}__typename_${field.type.name}`];

      if (!resolvedField && resolvedField !== false || !resolvedField.length) {
        return null;
      }

      return resolvedField.reduce((accumulator, item) => {
        // @todo use our list of Gatsby node types to do a more performant check
        // on wether this is a Gatsby node or not.
        const node = item.id ? context.nodeModel.getNodeById({
          id: item.id,
          type: (0, _helpers.buildTypeName)(item.__typename)
        }) : null;

        if (node) {
          accumulator.push(node);
        } else if (!item.id) {
          accumulator.push(item);
        }

        return accumulator;
      }, []);
    }
  };
};

exports.transformListOfUnions = transformListOfUnions;
//# sourceMappingURL=transform-union.js.map