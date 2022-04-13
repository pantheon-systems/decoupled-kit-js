import { ServerResponse } from 'http';
import {
  TJsonApiBody,
  TJsonApiData,
  TJsonApiLinks,
} from 'jsona/lib/JsonaTypes';
import { SelectionSetNode } from 'graphql/language/ast';
import {
  ApolloClient,
  ApolloLink,
  NormalizedCacheObject,
} from '@apollo/client/core';

// Type Aliases

/**
 * An index of string keys and values.
 */
export type stringIndex = {
  [key: string]: string;
};

/**
 * JSON:API resource responses keyed by id
 */
export type keyedResources = {
  [key: string]: TJsonApiBody;
};

/**
 * JSON:API response that requires data and can be filtered
 */
export declare type TJsonApiBodyDataRequired = {
  data: TJsonApiDataFilterable;
  graphql?: TJsonApiBody;
  included?: Array<TJsonApiData>;
  links?: TJsonApiLinks;
};

/**
 * Allows iteration on a DefinitionNode object
 */
export type IterableDefinitionNode = {
  selectionSet: SelectionSetNode;
};

// Interfaces

/**
 * A fetch compatible function
 */
export interface fetchAdapter {
  (
    input: RequestInfo,
    init?: RequestInit | undefined,
    res?: ServerResponse | boolean
  ): Promise<Response>;
}

/**
 * An interface documenting all of the named parameters that can be used when
 * creating a new instance of DrupalState
 */
export interface DrupalStateConfig {
  /**
   * Configuration object for DrupalState instance
   */
  apiBase: string;
  apiPrefix?: string;
  defaultLocale?: string;
  clientId?: string;
  clientSecret?: string;
  fetchAdapter?: fetchAdapter;
  debug?: boolean;
}

/**
 * Object representing the data returned from the oAuth token endpoint
 */
export interface TokenResponseObject {
  access_token: string;
  expires_in: number;
  token_type: string;
}

/**
 * Object containing our internal representation of the data returned from
 * the oAuth token endpoint
 */
export interface TokenObject {
  accessToken: string;
  validUntil: number;
  tokenType: string;
}

/**
 * Extends ApolloLink to allow access to headers object
 */
export interface ApolloLinkWithHeaders extends ApolloLink {
  headers: Record<string, unknown>;
}

/**
 * Extends ApolloClient to allow access to headers object
 */
export interface ApolloClientWithHeaders
  extends ApolloClient<NormalizedCacheObject> {
  link: ApolloLinkWithHeaders;
}

/**
 * Generically represents the shape of a Drupal State object
 */
export interface DsState {
  [key: string]: TJsonApiBody;
}

// ApiIndex interfaces
/**
 * Allows for an index of any number of string keys. See
 * {@link fetch/fetchApiIndex}
 */
export interface GenericIndex {
  [key: string]: string | GenericIndex;
}

/**
 * Describes the JSON:API root response. See {@link fetch/fetchApiIndex}
 */
export interface ApiIndexResponse {
  data: [];
  links: GenericIndex;
}

/**
 * Describes json-api-link data that includes the original jsonapi response
 */
export interface jsonapiLinkObject {
  jsonapi: {
    data: TJsonApiBody;
    links: TJsonApiLinks;
    [key: string]: TJsonApiBody | TJsonApiLinks;
  };
  graphql: TJsonApiData;
  __typename: string;
}

/**
 * Describes get object parameters.
 */
export interface GetObjectParams {
  objectName: string;
  id?: string;
  res?: ServerResponse | boolean;
  query?: string | boolean;
  all?: boolean;
}

/**
 * Describes get object by Path alias.
 */
export interface GetObjectByPathParams {
  objectName: string;
  path: string;
  res?: ServerResponse | boolean;
  query?: string | boolean;
}

/**
 * Represents an index of path translation data.
 */
export interface dsPathTranslations {
  [key: string]: {
    entity: {
      uuid: string;
    };
  };
}

/**
 * Extends TJsonApiData with filter method
 */
export interface TJsonApiDataFilterable extends TJsonApiData {
  filter(isMatch: (item: TJsonApiData) => boolean): TJsonApiData[];
}

/**
 * Describes a partial state object for a collection. Used with setState.
 */
export interface CollectionState {
  [key: string]: TJsonApiBody;
}

/**
 * Describes a partial state object for a keyed list of resources.
 */
export interface ResourceState {
  [key: string]: keyedResources;
}

export interface queryResponse {
  data: TJsonApiBody;
  graphql: jsonapiLinkObject['graphql'];
  links?: TJsonApiLinks;
}
