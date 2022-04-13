"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownThemeOptionsReader = void 0;
class MarkdownThemeOptionsReader {
    constructor() {
        this.priority = 1000;
        this.name = 'markdown-theme-reader';
    }
    read(container) {
        if (container.getValue('theme') === 'default') {
            container.setValue('theme', 'markdown');
        }
    }
}
exports.MarkdownThemeOptionsReader = MarkdownThemeOptionsReader;
