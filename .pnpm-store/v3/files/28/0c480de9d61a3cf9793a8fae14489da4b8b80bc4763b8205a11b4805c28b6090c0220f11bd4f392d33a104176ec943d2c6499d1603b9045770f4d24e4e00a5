"use strict";

exports.__esModule = true;
exports.ingestRemoteSchema = void 0;

var _runSteps = require("../../utils/run-steps");

var _formatLogMessage = require("../../utils/format-log-message");

var _diffSchemas = require("./diff-schemas");

var _introspectRemoteSchema = require("./introspect-remote-schema");

var _identifyAndStoreIngestableTypes = require("./identify-and-store-ingestable-types");

var _buildAndStoreIngestibleRootFieldNonNodeQueries = require("./build-and-store-ingestible-root-field-non-node-queries");

var _buildNodeQueries = require("./build-queries-from-introspection/build-node-queries");

var _cacheFetchedTypes = require("./cache-fetched-types");

var _writeQueriesToDisk = require("./write-queries-to-disk");

/**
 * This fn is called during schema customization.
 * It pulls in the remote WPGraphQL schema, caches it,
 * then builds queries and stores a transformed object
 * later used in schema customization.
 *
 * This fn must run in all PQR workers.
 */
const ingestRemoteSchema = async (helpers, pluginOptions) => {
  if (process.env.NODE_ENV === `development`) {
    // running this code block in production is problematic for PQR
    // since this fn will run once for each worker and we need the result in each
    // we'll return early in most workers when it checks the cache here
    // Since PQR doesn't run in development and this code block was only meant for dev
    // it should be ok to wrap it in this if statement
    const schemaTimeKey = `lastIngestRemoteSchemaTime`;
    const lastIngestRemoteSchemaTime = await helpers.cache.get(schemaTimeKey);
    const ingestedSchemaInLastTenSeconds = Date.now() - lastIngestRemoteSchemaTime <= 10000;

    if (lastIngestRemoteSchemaTime && ingestedSchemaInLastTenSeconds) {
      // only allow this to run once every ten seconds
      // this prevents thrashing when many webhooks are received at once
      return;
    }

    await helpers.cache.set(schemaTimeKey, Date.now());
  }

  const activity = helpers.reporter.activityTimer((0, _formatLogMessage.formatLogMessage)(`ingest WPGraphQL schema`));
  activity.start();

  try {
    await (0, _runSteps.runSteps)([_diffSchemas.checkIfSchemaHasChanged, _introspectRemoteSchema.introspectAndStoreRemoteSchema, _identifyAndStoreIngestableTypes.identifyAndStoreIngestableFieldsAndTypes, [_buildNodeQueries.buildNodeQueries, _buildAndStoreIngestibleRootFieldNonNodeQueries.buildNonNodeQueries], [_cacheFetchedTypes.cacheFetchedTypes, _writeQueriesToDisk.writeQueriesToDisk]], helpers, pluginOptions);
  } catch (e) {
    activity.panic(e);
  } finally {
    activity.end();
  }
};

exports.ingestRemoteSchema = ingestRemoteSchema;
//# sourceMappingURL=index.js.map