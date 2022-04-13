"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.genChunkName = exports.encodePath = exports.fileToPath = exports.generate = exports.getFolderContainingFile = exports.findFolderContainingFile = exports.getContentPathList = exports.getDataFileData = exports.getDataFilePath = exports.getFileLoaderUtils = exports.createAbsoluteFilePathMatcher = exports.createMatcher = exports.GlobExcludeDefault = exports.Globby = exports.docuHash = exports.simpleHash = exports.md5Hash = exports.escapePath = exports.aliasedSitePath = exports.toMessageRelativeFilePath = exports.posixPath = exports.shortName = exports.isNameTooLong = exports.createSlugger = exports.replaceMarkdownLinks = exports.parseMarkdownString = exports.parseMarkdownContentTitle = exports.parseFrontMatter = exports.createExcerpt = exports.parseMarkdownHeadingId = exports.groupTaggedItems = exports.normalizeFrontMatterTags = exports.normalizeFrontMatterTag = exports.getEditUrl = exports.normalizeUrl = exports.GitNotFoundError = exports.getFileCommitDate = exports.WEBPACK_URL_LOADER_LIMIT = exports.DEFAULT_PLUGIN_ID = exports.DEFAULT_PORT = exports.THEME_PATH = exports.OUTPUT_STATIC_ASSETS_DIR_NAME = exports.STATIC_DIR_NAME = exports.SRC_DIR_NAME = exports.GENERATED_FILES_DIR_NAME = exports.BABEL_CONFIG_FILE_NAME = exports.DEFAULT_CONFIG_FILE_NAME = exports.DEFAULT_BUILD_DIR_NAME = exports.NODE_MINOR_VERSION = exports.NODE_MAJOR_VERSION = void 0;
exports.updateTranslationFileMessages = exports.mergeTranslations = exports.reportMessage = exports.findAsyncSequential = exports.mapAsyncSequential = exports.readOutputHTMLFile = exports.getPluginI18nPath = exports.getElementsAround = exports.removePrefix = exports.removeSuffix = exports.removeTrailingSlash = exports.addTrailingSlash = exports.addTrailingPathSeparator = exports.addLeadingSlash = exports.resolvePathname = exports.isValidPathname = void 0;
const tslib_1 = require("tslib");
const logger_1 = (0, tslib_1.__importDefault)(require("@docusaurus/logger"));
const path_1 = (0, tslib_1.__importDefault)(require("path"));
const crypto_1 = require("crypto");
const lodash_1 = (0, tslib_1.__importDefault)(require("lodash"));
const fs_extra_1 = (0, tslib_1.__importDefault)(require("fs-extra"));
const url_1 = require("url");
const resolve_pathname_1 = (0, tslib_1.__importDefault)(require("resolve-pathname"));
const hashUtils_1 = require("./hashUtils");
const constants_1 = require("./constants");
var constants_2 = require("./constants");
Object.defineProperty(exports, "NODE_MAJOR_VERSION", { enumerable: true, get: function () { return constants_2.NODE_MAJOR_VERSION; } });
Object.defineProperty(exports, "NODE_MINOR_VERSION", { enumerable: true, get: function () { return constants_2.NODE_MINOR_VERSION; } });
Object.defineProperty(exports, "DEFAULT_BUILD_DIR_NAME", { enumerable: true, get: function () { return constants_2.DEFAULT_BUILD_DIR_NAME; } });
Object.defineProperty(exports, "DEFAULT_CONFIG_FILE_NAME", { enumerable: true, get: function () { return constants_2.DEFAULT_CONFIG_FILE_NAME; } });
Object.defineProperty(exports, "BABEL_CONFIG_FILE_NAME", { enumerable: true, get: function () { return constants_2.BABEL_CONFIG_FILE_NAME; } });
Object.defineProperty(exports, "GENERATED_FILES_DIR_NAME", { enumerable: true, get: function () { return constants_2.GENERATED_FILES_DIR_NAME; } });
Object.defineProperty(exports, "SRC_DIR_NAME", { enumerable: true, get: function () { return constants_2.SRC_DIR_NAME; } });
Object.defineProperty(exports, "STATIC_DIR_NAME", { enumerable: true, get: function () { return constants_2.STATIC_DIR_NAME; } });
Object.defineProperty(exports, "OUTPUT_STATIC_ASSETS_DIR_NAME", { enumerable: true, get: function () { return constants_2.OUTPUT_STATIC_ASSETS_DIR_NAME; } });
Object.defineProperty(exports, "THEME_PATH", { enumerable: true, get: function () { return constants_2.THEME_PATH; } });
Object.defineProperty(exports, "DEFAULT_PORT", { enumerable: true, get: function () { return constants_2.DEFAULT_PORT; } });
Object.defineProperty(exports, "DEFAULT_PLUGIN_ID", { enumerable: true, get: function () { return constants_2.DEFAULT_PLUGIN_ID; } });
Object.defineProperty(exports, "WEBPACK_URL_LOADER_LIMIT", { enumerable: true, get: function () { return constants_2.WEBPACK_URL_LOADER_LIMIT; } });
var gitUtils_1 = require("./gitUtils");
Object.defineProperty(exports, "getFileCommitDate", { enumerable: true, get: function () { return gitUtils_1.getFileCommitDate; } });
Object.defineProperty(exports, "GitNotFoundError", { enumerable: true, get: function () { return gitUtils_1.GitNotFoundError; } });
var urlUtils_1 = require("./urlUtils");
Object.defineProperty(exports, "normalizeUrl", { enumerable: true, get: function () { return urlUtils_1.normalizeUrl; } });
Object.defineProperty(exports, "getEditUrl", { enumerable: true, get: function () { return urlUtils_1.getEditUrl; } });
var tags_1 = require("./tags");
Object.defineProperty(exports, "normalizeFrontMatterTag", { enumerable: true, get: function () { return tags_1.normalizeFrontMatterTag; } });
Object.defineProperty(exports, "normalizeFrontMatterTags", { enumerable: true, get: function () { return tags_1.normalizeFrontMatterTags; } });
Object.defineProperty(exports, "groupTaggedItems", { enumerable: true, get: function () { return tags_1.groupTaggedItems; } });
var markdownParser_1 = require("./markdownParser");
Object.defineProperty(exports, "parseMarkdownHeadingId", { enumerable: true, get: function () { return markdownParser_1.parseMarkdownHeadingId; } });
Object.defineProperty(exports, "createExcerpt", { enumerable: true, get: function () { return markdownParser_1.createExcerpt; } });
Object.defineProperty(exports, "parseFrontMatter", { enumerable: true, get: function () { return markdownParser_1.parseFrontMatter; } });
Object.defineProperty(exports, "parseMarkdownContentTitle", { enumerable: true, get: function () { return markdownParser_1.parseMarkdownContentTitle; } });
Object.defineProperty(exports, "parseMarkdownString", { enumerable: true, get: function () { return markdownParser_1.parseMarkdownString; } });
var markdownLinks_1 = require("./markdownLinks");
Object.defineProperty(exports, "replaceMarkdownLinks", { enumerable: true, get: function () { return markdownLinks_1.replaceMarkdownLinks; } });
var slugger_1 = require("./slugger");
Object.defineProperty(exports, "createSlugger", { enumerable: true, get: function () { return slugger_1.createSlugger; } });
var pathUtils_1 = require("./pathUtils");
Object.defineProperty(exports, "isNameTooLong", { enumerable: true, get: function () { return pathUtils_1.isNameTooLong; } });
Object.defineProperty(exports, "shortName", { enumerable: true, get: function () { return pathUtils_1.shortName; } });
Object.defineProperty(exports, "posixPath", { enumerable: true, get: function () { return pathUtils_1.posixPath; } });
Object.defineProperty(exports, "toMessageRelativeFilePath", { enumerable: true, get: function () { return pathUtils_1.toMessageRelativeFilePath; } });
Object.defineProperty(exports, "aliasedSitePath", { enumerable: true, get: function () { return pathUtils_1.aliasedSitePath; } });
Object.defineProperty(exports, "escapePath", { enumerable: true, get: function () { return pathUtils_1.escapePath; } });
var hashUtils_2 = require("./hashUtils");
Object.defineProperty(exports, "md5Hash", { enumerable: true, get: function () { return hashUtils_2.md5Hash; } });
Object.defineProperty(exports, "simpleHash", { enumerable: true, get: function () { return hashUtils_2.simpleHash; } });
Object.defineProperty(exports, "docuHash", { enumerable: true, get: function () { return hashUtils_2.docuHash; } });
var globUtils_1 = require("./globUtils");
Object.defineProperty(exports, "Globby", { enumerable: true, get: function () { return globUtils_1.Globby; } });
Object.defineProperty(exports, "GlobExcludeDefault", { enumerable: true, get: function () { return globUtils_1.GlobExcludeDefault; } });
Object.defineProperty(exports, "createMatcher", { enumerable: true, get: function () { return globUtils_1.createMatcher; } });
Object.defineProperty(exports, "createAbsoluteFilePathMatcher", { enumerable: true, get: function () { return globUtils_1.createAbsoluteFilePathMatcher; } });
var webpackUtils_1 = require("./webpackUtils");
Object.defineProperty(exports, "getFileLoaderUtils", { enumerable: true, get: function () { return webpackUtils_1.getFileLoaderUtils; } });
var dataFileUtils_1 = require("./dataFileUtils");
Object.defineProperty(exports, "getDataFilePath", { enumerable: true, get: function () { return dataFileUtils_1.getDataFilePath; } });
Object.defineProperty(exports, "getDataFileData", { enumerable: true, get: function () { return dataFileUtils_1.getDataFileData; } });
Object.defineProperty(exports, "getContentPathList", { enumerable: true, get: function () { return dataFileUtils_1.getContentPathList; } });
Object.defineProperty(exports, "findFolderContainingFile", { enumerable: true, get: function () { return dataFileUtils_1.findFolderContainingFile; } });
Object.defineProperty(exports, "getFolderContainingFile", { enumerable: true, get: function () { return dataFileUtils_1.getFolderContainingFile; } });
const fileHash = new Map();
async function generate(generatedFilesDir, file, content, skipCache = process.env.NODE_ENV === 'production') {
    const filepath = path_1.default.join(generatedFilesDir, file);
    if (skipCache) {
        await fs_extra_1.default.ensureDir(path_1.default.dirname(filepath));
        await fs_extra_1.default.writeFile(filepath, content);
        return;
    }
    let lastHash = fileHash.get(filepath);
    // If file already exists but its not in runtime cache yet,
    // we try to calculate the content hash and then compare
    // This is to avoid unnecessary overwriting and we can reuse old file.
    if (!lastHash && (await fs_extra_1.default.pathExists(filepath))) {
        const lastContent = await fs_extra_1.default.readFile(filepath, 'utf8');
        lastHash = (0, crypto_1.createHash)('md5').update(lastContent).digest('hex');
        fileHash.set(filepath, lastHash);
    }
    const currentHash = (0, crypto_1.createHash)('md5').update(content).digest('hex');
    if (lastHash !== currentHash) {
        await fs_extra_1.default.ensureDir(path_1.default.dirname(filepath));
        await fs_extra_1.default.writeFile(filepath, content);
        fileHash.set(filepath, currentHash);
    }
}
exports.generate = generate;
const indexRE = /(?<dirname>^|.*\/)index\.(?:mdx?|jsx?|tsx?)$/i;
const extRE = /\.(?:mdx?|jsx?|tsx?)$/;
/**
 * Convert filepath to url path.
 * Example: 'index.md' -> '/', 'foo/bar.js' -> '/foo/bar',
 */
function fileToPath(file) {
    if (indexRE.test(file)) {
        return file.replace(indexRE, '/$1');
    }
    return `/${file.replace(extRE, '').replace(/\\/g, '/')}`;
}
exports.fileToPath = fileToPath;
function encodePath(userPath) {
    return userPath
        .split('/')
        .map((item) => encodeURIComponent(item))
        .join('/');
}
exports.encodePath = encodePath;
const chunkNameCache = new Map();
/**
 * Generate unique chunk name given a module path.
 */
function genChunkName(modulePath, prefix, preferredName, shortId = process.env.NODE_ENV === 'production') {
    let chunkName = chunkNameCache.get(modulePath);
    if (!chunkName) {
        if (shortId) {
            chunkName = (0, hashUtils_1.simpleHash)(modulePath, 8);
        }
        else {
            let str = modulePath;
            if (preferredName) {
                const shortHash = (0, hashUtils_1.simpleHash)(modulePath, 3);
                str = `${preferredName}${shortHash}`;
            }
            const name = str === '/' ? 'index' : (0, hashUtils_1.docuHash)(str);
            chunkName = prefix ? `${prefix}---${name}` : name;
        }
        chunkNameCache.set(modulePath, chunkName);
    }
    return chunkName;
}
exports.genChunkName = genChunkName;
function isValidPathname(str) {
    if (!str.startsWith('/')) {
        return false;
    }
    try {
        // weird, but is there a better way?
        const parsedPathname = new url_1.URL(str, 'https://domain.com').pathname;
        return parsedPathname === str || parsedPathname === encodeURI(str);
    }
    catch {
        return false;
    }
}
exports.isValidPathname = isValidPathname;
// resolve pathname and fail fast if resolution fails
function resolvePathname(to, from) {
    return (0, resolve_pathname_1.default)(to, from);
}
exports.resolvePathname = resolvePathname;
function addLeadingSlash(str) {
    return str.startsWith('/') ? str : `/${str}`;
}
exports.addLeadingSlash = addLeadingSlash;
function addTrailingPathSeparator(str) {
    return str.endsWith(path_1.default.sep)
        ? str
        : // If this is Windows, we need to change the forward slash to backward
            `${str.replace(/\/$/, '')}${path_1.default.sep}`;
}
exports.addTrailingPathSeparator = addTrailingPathSeparator;
// TODO deduplicate: also present in @docusaurus/utils-common
function addTrailingSlash(str) {
    return str.endsWith('/') ? str : `${str}/`;
}
exports.addTrailingSlash = addTrailingSlash;
function removeTrailingSlash(str) {
    return removeSuffix(str, '/');
}
exports.removeTrailingSlash = removeTrailingSlash;
function removeSuffix(str, suffix) {
    if (suffix === '') {
        return str; // always returns "" otherwise!
    }
    return str.endsWith(suffix) ? str.slice(0, -suffix.length) : str;
}
exports.removeSuffix = removeSuffix;
function removePrefix(str, prefix) {
    return str.startsWith(prefix) ? str.slice(prefix.length) : str;
}
exports.removePrefix = removePrefix;
function getElementsAround(array, aroundIndex) {
    const min = 0;
    const max = array.length - 1;
    if (aroundIndex < min || aroundIndex > max) {
        throw new Error(`Valid "aroundIndex" for array (of size ${array.length}) are between ${min} and ${max}, but you provided ${aroundIndex}.`);
    }
    const previous = aroundIndex === min ? undefined : array[aroundIndex - 1];
    const next = aroundIndex === max ? undefined : array[aroundIndex + 1];
    return { previous, next };
}
exports.getElementsAround = getElementsAround;
function getPluginI18nPath({ siteDir, locale, pluginName, pluginId = constants_1.DEFAULT_PLUGIN_ID, subPaths = [], }) {
    return path_1.default.join(siteDir, 'i18n', 
    // namespace first by locale: convenient to work in a single folder for a
    // translator
    locale, 
    // Make it convenient to use for single-instance
    // ie: return "docs", not "docs-default" nor "docs/default"
    `${pluginName}${pluginId === constants_1.DEFAULT_PLUGIN_ID ? '' : `-${pluginId}`}`, ...subPaths);
}
exports.getPluginI18nPath = getPluginI18nPath;
/**
 * @param permalink The URL that the HTML file corresponds to, without base URL
 * @param outDir Full path to the output directory
 * @param trailingSlash The site config option. If provided, only one path will
 * be read.
 * @returns This returns a buffer, which you have to decode string yourself if
 * needed. (Not always necessary since the output isn't for human consumption
 * anyways, and most HTML manipulation libs accept buffers)
 */
async function readOutputHTMLFile(permalink, outDir, trailingSlash) {
    const withTrailingSlashPath = path_1.default.join(outDir, permalink, 'index.html');
    const withoutTrailingSlashPath = path_1.default.join(outDir, `${permalink.replace(/\/$/, '')}.html`);
    if (trailingSlash) {
        return fs_extra_1.default.readFile(withTrailingSlashPath);
    }
    else if (trailingSlash === false) {
        return fs_extra_1.default.readFile(withoutTrailingSlashPath);
    }
    const HTMLPath = await findAsyncSequential([withTrailingSlashPath, withoutTrailingSlashPath], fs_extra_1.default.pathExists);
    if (!HTMLPath) {
        throw new Error(`Expected output HTML file to be found at ${withTrailingSlashPath}`);
    }
    return fs_extra_1.default.readFile(HTMLPath);
}
exports.readOutputHTMLFile = readOutputHTMLFile;
async function mapAsyncSequential(array, action) {
    const results = [];
    for (const t of array) {
        const result = await action(t);
        results.push(result);
    }
    return results;
}
exports.mapAsyncSequential = mapAsyncSequential;
async function findAsyncSequential(array, predicate) {
    for (const t of array) {
        if (await predicate(t)) {
            return t;
        }
    }
    return undefined;
}
exports.findAsyncSequential = findAsyncSequential;
function reportMessage(message, reportingSeverity) {
    switch (reportingSeverity) {
        case 'ignore':
            break;
        case 'log':
            logger_1.default.info(message);
            break;
        case 'warn':
            logger_1.default.warn(message);
            break;
        case 'error':
            logger_1.default.error(message);
            break;
        case 'throw':
            throw new Error(message);
        default:
            throw new Error(`Unexpected "reportingSeverity" value: ${reportingSeverity}.`);
    }
}
exports.reportMessage = reportMessage;
function mergeTranslations(contents) {
    return contents.reduce((acc, content) => ({ ...acc, ...content }), {});
}
exports.mergeTranslations = mergeTranslations;
// Useful to update all the messages of a translation file
// Used in tests to simulate translations
function updateTranslationFileMessages(translationFile, updateMessage) {
    return {
        ...translationFile,
        content: lodash_1.default.mapValues(translationFile.content, (translation) => ({
            ...translation,
            message: updateMessage(translation.message),
        })),
    };
}
exports.updateTranslationFileMessages = updateTranslationFileMessages;
//# sourceMappingURL=index.js.map