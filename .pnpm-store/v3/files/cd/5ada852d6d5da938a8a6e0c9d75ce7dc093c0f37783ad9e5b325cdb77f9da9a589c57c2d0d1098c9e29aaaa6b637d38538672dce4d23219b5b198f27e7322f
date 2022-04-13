"use strict";

exports.__esModule = true;
exports.ERROR_MAP = exports.CODES = void 0;
const CODES = {
  /* Fetch errors */
  WordPressFilters: `111001`,
  BadResponse: `111002`,
  RequestDenied: `111004`,
  Authentication: `111005`,
  Timeout: `111006`,
  WordPress500ishError: `111007`,
  SelfSignedCert: `111008`,

  /* GraphQL Errors */
  RemoteGraphQLError: `112001`,
  MissingAppendedPath: `112002`,

  /* CodeErrors */
  SourcePluginCodeError: `112003`
};
exports.CODES = CODES;

const getErrorText = context => context.sourceMessage;

const ERROR_MAP = {
  [CODES.WordPressFilters]: {
    text: getErrorText,
    level: `ERROR`,
    category: `USER`
  },
  [CODES.BadResponse]: {
    text: getErrorText,
    level: `ERROR`,
    category: `USER`
  },
  [CODES.RequestDenied]: {
    text: getErrorText,
    level: `ERROR`,
    category: `USER`
  },
  [CODES.Authentication]: {
    text: getErrorText,
    level: `ERROR`,
    category: `USER`
  },
  [CODES.Timeout]: {
    text: getErrorText,
    level: `ERROR`,
    category: `USER`
  },
  [CODES.RemoteGraphQLError]: {
    text: getErrorText,
    level: `ERROR`,
    category: `THIRD_PARTY`
  },
  [CODES.MissingAppendedPath]: {
    text: getErrorText,
    level: `ERROR`,
    category: `THIRD_PARTY`
  },
  [CODES.SourcePluginCodeError]: {
    text: getErrorText,
    level: `ERROR`,
    category: `SYSTEM`
  },
  [CODES.WordPress500ishError]: {
    text: getErrorText,
    level: `ERROR`,
    category: `THIRD_PARTY`
  },
  [CODES.SelfSignedCert]: {
    text: getErrorText,
    level: `ERROR`,
    category: `THIRD_PARTY`
  }
};
exports.ERROR_MAP = ERROR_MAP;
//# sourceMappingURL=report.js.map