"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Handlebars = require("handlebars");
const path = require("path");
const fs = require("fs");
const URL_PREFIX = /^(http|ftp)s?:\/\//;
const BRACKETS = /\[\[([^\]]+)\]\]/g;
const INLINE_TAG = /(?:\[(.+?)\])?\{@(link|linkcode|linkplain)\s+((?:.|\n)+?)\}/gi;
const INCLUDE_PATTERN = /\[\[include:([^\]]+?)\]\]/g;
const MEDIA_PATTERN = /media:\/\/([^ "\)\]\}]+)/g;
function default_1(theme) {
    Handlebars.registerHelper('comment', function () {
        const { project, reflection, includes, mediaDirectory } = theme;
        function replaceBrackets(text) {
            return text.replace(BRACKETS, (match, content) => {
                const split = splitLinkText(content);
                return buildLink(match, split.target, split.caption);
            });
        }
        function replaceInlineTags(text) {
            return text.replace(INLINE_TAG, (match, leading, tagName, content) => {
                const split = splitLinkText(content);
                const target = split.target;
                const caption = leading || split.caption;
                return buildLink(match, target, caption, tagName === 'linkcode');
            });
        }
        function buildLink(original, target, caption, monospace = false) {
            if (monospace) {
                caption = '`' + caption + '`';
            }
            if (URL_PREFIX.test(target)) {
                return `[${caption}](${target})`;
            }
            let targetReflection;
            if (reflection) {
                targetReflection = reflection.findReflectionByName(target);
            }
            else if (project) {
                targetReflection = project.findReflectionByName(target);
            }
            if (targetReflection && targetReflection.url) {
                return `[${caption}](${Handlebars.helpers.relativeURL(targetReflection.url)})`;
            }
            else {
                return original;
            }
        }
        function splitLinkText(text) {
            let splitIndex = text.indexOf('|');
            if (splitIndex === -1) {
                splitIndex = text.search(/\s/);
            }
            if (splitIndex !== -1) {
                return {
                    caption: text
                        .substr(splitIndex + 1)
                        .replace(/\n+/, ' ')
                        .trim(),
                    target: text.substr(0, splitIndex).trim(),
                };
            }
            else {
                return {
                    caption: text,
                    target: text,
                };
            }
        }
        let text = this;
        const context = Object.assign(text, '');
        if (includes) {
            text = text.replace(INCLUDE_PATTERN, (match, includesPath) => {
                includesPath = path.join(includes, includesPath.trim());
                if (fs.existsSync(includesPath) &&
                    fs.statSync(includesPath).isFile()) {
                    const contents = fs.readFileSync(includesPath, 'utf-8');
                    if (includesPath.substr(-4).toLocaleLowerCase() === '.hbs') {
                        const template = Handlebars.compile(contents);
                        return template(context);
                    }
                    else {
                        return contents;
                    }
                }
                else {
                    return '';
                }
            });
        }
        if (mediaDirectory) {
            text = text.replace(MEDIA_PATTERN, (match, mediaPath) => {
                if (fs.existsSync(path.join(mediaDirectory, mediaPath))) {
                    return Handlebars.helpers.relativeURL('media') + '/' + mediaPath;
                }
                else {
                    return match;
                }
            });
        }
        return replaceInlineTags(replaceBrackets(text));
    });
}
exports.default = default_1;
