"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Handlebars = require("handlebars");
function default_1() {
    Handlebars.registerHelper('comments', function () {
        const md = [];
        if (this.shortText) {
            md.push(Handlebars.helpers.comment.call(this.shortText));
        }
        if (this.text) {
            md.push(Handlebars.helpers.comment.call(this.text));
        }
        if (this.tags) {
            const tags = this.tags.map((tag) => `**\`${tag.tagName}\`**${tag.text
                ? Handlebars.helpers.comment.call((tag.text.startsWith('\n') ? '' : ' ') + tag.text)
                : ''}`);
            md.push(tags.join('\n\n'));
        }
        return md.join('\n\n');
    });
}
exports.default = default_1;
