"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.createSchemaCustomization = void 0;

var _store = _interopRequireDefault(require("../../store"));

var _helpers = require("./helpers");

var _buildTypes = _interopRequireDefault(require("./build-types"));

var _fetchNodes = require("../source-nodes/fetch-nodes/fetch-nodes");

var _isExcluded = require("../ingest-remote-schema/is-excluded");

var _formatLogMessage = require("../../utils/format-log-message");

var _report = require("../../utils/report");

var _polyfillRemoteFile = require("gatsby-plugin-utils/polyfill-remote-file");

/**
 * createSchemaCustomization
 */
const customizeSchema = async ({
  actions,
  schema
}) => {
  const state = _store.default.getState();

  const {
    gatsbyApi: {
      pluginOptions
    },
    remoteSchema
  } = state;
  const {
    fieldAliases,
    fieldBlacklist,
    ingestibles: {
      nonNodeRootFields
    }
  } = remoteSchema;
  const typeDefs = [];
  const gatsbyNodeTypes = (0, _fetchNodes.getGatsbyNodeTypeNames)();
  const typeBuilderApi = {
    typeDefs,
    schema,
    gatsbyNodeTypes,
    fieldAliases,
    fieldBlacklist,
    pluginOptions
  }; // create Gatsby node types

  remoteSchema.introspectionData.__schema.types.forEach(type => {
    if ((0, _helpers.fieldOfTypeWasFetched)(type) && !(0, _isExcluded.typeIsExcluded)({
      pluginOptions,
      typeName: type.name
    })) {
      let builtType;

      switch (type.kind) {
        case `UNION`:
          builtType = _buildTypes.default.unionType({ ...typeBuilderApi,
            type
          });
          break;

        case `INTERFACE`:
          builtType = _buildTypes.default.interfaceType({ ...typeBuilderApi,
            type
          });
          break;

        case `OBJECT`:
          builtType = _buildTypes.default.objectType({ ...typeBuilderApi,
            type
          });
          break;

        case `ENUM`:
          builtType = _buildTypes.default.enumType({ ...typeBuilderApi,
            type
          });
          break;

        case `SCALAR`:
          /**
           * custom scalar types aren't imlemented currently.
           *  @todo make this hookable so sub-plugins or plugin options can add custom scalar support.
           */
          break;
      }

      if (builtType) {
        typeDefs.push(builtType);
      }
    }
  }); // Create non Gatsby node types by creating a single node
  // where the typename is the type prefix
  // The node fields are the non-node root fields of the remote schema
  // like so: query { prefix { ...fields } }


  const wpType = _buildTypes.default.objectType({ ...typeBuilderApi,
    type: {
      kind: `OBJECT`,
      name: pluginOptions.schema.typePrefix,
      description: `Non-node WPGraphQL root fields.`,
      fields: nonNodeRootFields,
      interfaces: [`Node`]
    },
    isAGatsbyNode: true
  });

  typeDefs.push((0, _polyfillRemoteFile.addRemoteFilePolyfillInterface)(schema.buildObjectType({
    name: pluginOptions.schema.typePrefix + `MediaItem`,
    fields: {},
    interfaces: [`Node`, `RemoteFile`]
  }), {
    schema,
    actions
  }));
  typeDefs.push(wpType);
  actions.createTypes(typeDefs);
};

const createSchemaCustomization = async api => {
  try {
    await customizeSchema(api);
  } catch (e) {
    api.reporter.panic({
      id: _report.CODES.SourcePluginCodeError,
      error: e,
      context: {
        sourceMessage: (0, _formatLogMessage.formatLogMessage)(e.message)
      }
    });
  }
};

exports.createSchemaCustomization = createSchemaCustomization;
//# sourceMappingURL=index.js.map