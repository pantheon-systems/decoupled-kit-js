"use strict";

exports.__esModule = true;
exports.generatePublicUrl = generatePublicUrl;
exports.generateImageArgs = generateImageArgs;

var _types = require("../types");

function generatePublicUrl({
  url,
  mimeType
}, checkMimeType = true) {
  const remoteUrl = Buffer.from(url).toString(`base64`);
  let publicUrl = checkMimeType && (0, _types.isImage)({
    mimeType
  }) ? `/_gatsby/image/` : `/_gatsby/file/`;
  publicUrl += `${remoteUrl}`;
  return publicUrl;
}

function generateImageArgs({
  width,
  height,
  format,
  cropFocus,
  quality
}) {
  const args = [];

  if (width) {
    args.push(`w=${width}`);
  }

  if (height) {
    args.push(`h=${height}`);
  }

  if (cropFocus) {
    args.push(`fit=crop`);
    args.push(`crop=${Array.isArray(cropFocus) ? cropFocus.join(`,`) : cropFocus}`);
  }

  args.push(`fm=${format}`);
  args.push(`q=${quality}`);
  return Buffer.from(args.join(`&`)).toString(`base64`);
}