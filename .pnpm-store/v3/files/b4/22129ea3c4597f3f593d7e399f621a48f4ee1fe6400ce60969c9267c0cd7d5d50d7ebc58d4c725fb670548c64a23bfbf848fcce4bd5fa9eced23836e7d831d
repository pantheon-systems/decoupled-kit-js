"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.generatePlaceholder = generatePlaceholder;
exports.PlaceholderType = void 0;

var _path = _interopRequireDefault(require("path"));

var _fsExtra = require("fs-extra");

var _fetchRemoteFile = require("gatsby-core-utils/fetch-remote-file");

var _mutex = require("gatsby-core-utils/mutex");

var _fastq = _interopRequireDefault(require("fastq"));

var _gatsbySharp = _interopRequireDefault(require("gatsby-sharp"));

var _cache = require("./utils/cache");

var _mimeTypeHelpers = require("./utils/mime-type-helpers");

let PlaceholderType;
exports.PlaceholderType = PlaceholderType;

(function (PlaceholderType) {
  PlaceholderType["BLURRED"] = "blurred";
  PlaceholderType["DOMINANT_COLOR"] = "dominantColor";
})(PlaceholderType || (exports.PlaceholderType = PlaceholderType = {}));

const QUEUE_CONCURRENCY = 10;
const PLACEHOLDER_BASE64_WIDTH = 20;
const PLACEHOLDER_QUALITY = 25;
let tmpDir;

function getMutexKey(contentDigest) {
  return `gatsby-plugin-utils:placeholder:${contentDigest}`;
}

const queue = (0, _fastq.default)(async function ({
  url,
  contentDigest,
  width,
  height,
  type
}, cb) {
  const sharp = await (0, _gatsbySharp.default)();

  if (!tmpDir) {
    const cache = (0, _cache.getCache)();
    tmpDir = await (0, _fsExtra.mkdtemp)(_path.default.join(cache.directory, `placeholder-`));
  }

  const filePath = await (0, _fetchRemoteFile.fetchRemoteFile)({
    url,
    cacheKey: contentDigest,
    directory: tmpDir
  });

  switch (type) {
    case PlaceholderType.BLURRED:
      {
        let buffer;

        try {
          const fileStream = (0, _fsExtra.createReadStream)(filePath);
          const pipeline = sharp();
          fileStream.pipe(pipeline);
          buffer = await pipeline.resize(PLACEHOLDER_BASE64_WIDTH, Math.ceil(PLACEHOLDER_BASE64_WIDTH / (width / height))).toBuffer();
        } catch (e) {
          buffer = await (0, _fsExtra.readFile)(filePath);
        }

        return cb(null, `data:image/jpg;base64,${buffer.toString(`base64`)}`);
      }

    case PlaceholderType.DOMINANT_COLOR:
      {
        const fileStream = (0, _fsExtra.createReadStream)(filePath);
        const pipeline = sharp({
          failOnError: false
        });
        fileStream.pipe(pipeline);
        const {
          dominant
        } = await pipeline.stats();
        return cb(null, dominant ? `rgb(${dominant.r},${dominant.g},${dominant.b})` : `rgba(0,0,0,0)`);
      }
  }
}, QUEUE_CONCURRENCY); // eslint-disable-next-line consistent-return

async function generatePlaceholder(source, placeholderType) {
  switch (placeholderType) {
    case PlaceholderType.BLURRED:
      {
        return {
          fallback: await placeholderToBase64({
            id: source.id,
            placeholderUrl: source.placeholderUrl,
            originalUrl: source.url,
            format: (0, _mimeTypeHelpers.getImageFormatFromMimeType)(source.mimeType),
            width: source.width,
            height: source.height,
            contentDigest: source.internal.contentDigest
          })
        };
      }

    case PlaceholderType.DOMINANT_COLOR:
      {
        return {
          backgroundColor: await placeholderToDominantColor({
            id: source.id,
            placeholderUrl: source.placeholderUrl,
            originalUrl: source.url,
            format: (0, _mimeTypeHelpers.getImageFormatFromMimeType)(source.mimeType),
            width: source.width,
            height: source.height,
            contentDigest: source.internal.contentDigest
          })
        };
      }
  }
}

async function placeholderToBase64({
  placeholderUrl,
  originalUrl,
  width,
  height,
  id,
  contentDigest
}) {
  const cache = (0, _cache.getCache)();
  const cacheKey = `image-cdn:${id}-${contentDigest}:base64`;
  let cachedValue = await cache.get(cacheKey);

  if (cachedValue) {
    return cachedValue;
  }

  const mutex = (0, _mutex.createMutex)(getMutexKey(`${id}-${contentDigest}`));
  await mutex.acquire();

  try {
    // check cache again after mutex is acquired
    cachedValue = await cache.get(cacheKey);

    if (cachedValue) {
      return cachedValue;
    }

    let url = originalUrl;

    if (placeholderUrl) {
      url = generatePlaceholderUrl({
        url: placeholderUrl,
        width: PLACEHOLDER_BASE64_WIDTH,
        quality: PLACEHOLDER_QUALITY,
        originalWidth: width,
        originalHeight: height
      });
    }

    const base64Placeholder = await new Promise((resolve, reject) => {
      queue.push({
        url,
        contentDigest,
        width,
        height,
        type: PlaceholderType.BLURRED
      }, (err, result) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(result);
      });
    });
    await cache.set(cacheKey, base64Placeholder);
    return base64Placeholder;
  } finally {
    await mutex.release();
  }
}

async function placeholderToDominantColor({
  placeholderUrl,
  originalUrl,
  width,
  height,
  id,
  contentDigest
}) {
  const cache = (0, _cache.getCache)();
  const cacheKey = `image-cdn:${id}-${contentDigest}:dominantColor`;
  let cachedValue = await cache.get(cacheKey);

  if (cachedValue) {
    return cachedValue;
  }

  const mutex = (0, _mutex.createMutex)(getMutexKey(`${id}-${contentDigest}`));
  await mutex.acquire();

  try {
    // check cache again after mutex is acquired
    cachedValue = await cache.get(cacheKey);

    if (cachedValue) {
      return cachedValue;
    }

    let url = originalUrl;

    if (placeholderUrl) {
      url = generatePlaceholderUrl({
        url: placeholderUrl,
        width: 200,
        quality: PLACEHOLDER_QUALITY,
        originalWidth: width,
        originalHeight: height
      });
    }

    const dominantColor = await new Promise((resolve, reject) => {
      queue.push({
        url,
        contentDigest,
        width,
        height,
        type: PlaceholderType.DOMINANT_COLOR
      }, (err, result) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(result);
      });
    });
    await cache.set(cacheKey, dominantColor);
    return dominantColor;
  } finally {
    await mutex.release();
  }
}

function generatePlaceholderUrl({
  url,
  width,
  quality,
  originalWidth,
  originalHeight
}) {
  const aspectRatio = originalWidth / originalHeight;
  return url.replace(`%width%`, String(width)).replace(`%height%`, Math.floor(width / aspectRatio).toString()).replace(`%quality%`, String(quality));
}