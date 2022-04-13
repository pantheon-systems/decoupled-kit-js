"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _isText = require("istextorbinary").isText;
var jsRegex = /(t|j)sx?$/i;
var FILE_LOADER_REGEX = /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm)(\?.*)?$/i;
exports.MAX_FILE_SIZE = 512 * 1024;
exports.isText = function (filename, buffer) {
    if (jsRegex.test(filename)) {
        return true;
    }
    return new Promise(function (resolve, reject) {
        _isText(filename, buffer, function (err, result) {
            if (err) {
                return reject(err);
            }
            resolve(result && !FILE_LOADER_REGEX.test(filename) && !exports.isTooBig(buffer));
        });
    });
};
exports.isTooBig = function (buffer) {
    return buffer.length > exports.MAX_FILE_SIZE;
};
//# sourceMappingURL=is-text.js.map