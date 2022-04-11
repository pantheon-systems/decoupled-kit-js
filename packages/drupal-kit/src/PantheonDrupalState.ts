import { ServerResponse } from 'http';
import { camelize } from 'humps';
import { gql } from '@apollo/client/core';
import { DrupalState } from '@gdwc/drupal-state';

import defaultFetch from './fetch/defaultFetch';

import { TJsonApiBody } from 'jsona/lib/JsonaTypes';
import {
  keyedResources,
  jsonapiLinkObject,
  DrupalStateConfig,
} from '@gdwc/drupal-state/dist/declarations/src/types/types';

class PantheonDrupalState extends DrupalState {
  constructor({
    apiBase,
    apiPrefix = 'jsonapi',
    defaultLocale,
    clientId,
    clientSecret,
    fetchAdapter = defaultFetch,
    debug = false,
  }: DrupalStateConfig) {
    super({
      apiBase,
      apiPrefix,
      defaultLocale,
      clientId,
      clientSecret,
      fetchAdapter,
      debug,
    });
  }

  /**
   * If a query is provided, fetches data using apollo-link-json-api, otherwise uses out fetch method.
   * @param endpoint the assembled JSON:API endpoint
   * @param query the specified GraphQL query
   * @param objectName Name of object to retrieve. Ex: node--article
   * @param res response object
   * @returns data fetched from JSON:API endpoint
   */
  async conditionalFetch(
    endpoint: string,
    query: string | boolean = false,
    objectName: string | boolean = false,
    res: ServerResponse | boolean = false
  ): Promise<TJsonApiBody> {
    let requestInit = {};
    let authHeader = '';
    if (this.auth) {
      // TODO - remove eslint disable. Not sure why eslint can't pick up on
      // this.getAuthHeader() from the parent class
      const headers = new Headers();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      authHeader = await this.getAuthHeader();
      headers.append('Authorization', authHeader);
      requestInit = {
        headers: headers,
      };
    }

    if (query) {
      this.client.link.headers = { Authorization: authHeader };

      const queryObjectName = camelize(objectName as string);
      const gqlQuery = gql`{
        ${queryObjectName} @jsonapi(path: "${endpoint}", includeJsonapi: true)
          {
            jsonapi
            graphql
            ${query}
          }
        }`;

      // This will bubble up surrogate keys to the response, but also currently
      // results in a redundant API call. The suggested long term solution is to
      // take on this enhancement to Drupal State:
      // https://www.drupal.org/project/drupal_state/issues/3238685 and then
      // refactor here to eliminate this redundant call. It should also be
      // possible to eliminate most of the other fetch related overrides here as
      // well.
      if (res) {
        await this.fetchJsonapiEndpoint(
          `${this.apiRoot}${endpoint}`,
          requestInit,
          res
        );
      }

      return (await this.client.query({ query: gqlQuery }).then(response => {
        const data = response.data as keyedResources;
        const object = data[queryObjectName] as jsonapiLinkObject;
        return {
          data: object.jsonapi.data,
          graphql: object.graphql,
          links: object.jsonapi.links,
        };
      })) as TJsonApiBody;
    } else {
      return (await this.fetchJsonapiEndpoint(
        endpoint,
        requestInit,
        res
      )) as TJsonApiBody;
    }
  }
}

export default PantheonDrupalState;
