"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDir = exports.render = exports.bootstrap = void 0;
const fs = __importStar(require("fs"));
const typedoc_1 = require("typedoc");
const bootstrap = (app, options) => {
    addTypedocReaders(app);
    addTypedocDeclarations(app);
    app.renderer.render = render;
    app.bootstrap(options);
};
exports.bootstrap = bootstrap;
async function render(project, outputDirectory) {
    var _a;
    if (!this.prepareTheme()) {
        return;
    }
    const output = new typedoc_1.RendererEvent(typedoc_1.RendererEvent.BEGIN, outputDirectory, project);
    output.urls = this.theme.getUrls(project);
    this.trigger(output);
    if (!output.isDefaultPrevented) {
        (_a = output === null || output === void 0 ? void 0 : output.urls) === null || _a === void 0 ? void 0 : _a.forEach((mapping) => {
            this.renderDocument(output.createPageEvent(mapping));
        });
        this.trigger(typedoc_1.RendererEvent.END, output);
    }
}
exports.render = render;
const addTypedocReaders = (app) => {
    app.options.addReader(new typedoc_1.TypeDocReader());
    app.options.addReader(new typedoc_1.TSConfigReader());
};
const addTypedocDeclarations = (app) => {
    app.options.addDeclaration({
        name: 'id',
    });
    app.options.addDeclaration({
        name: 'docsRoot',
    });
    app.options.addDeclaration({
        name: 'siteDir',
    });
    app.options.addDeclaration({
        name: 'globalsTitle',
    });
    app.options.addDeclaration({
        name: 'readmeTitle',
    });
    app.options.addDeclaration({
        name: 'indexSlug',
    });
    app.options.addDeclaration({
        name: 'includeExtension',
    });
    app.options.addDeclaration({
        name: 'sidebar',
        type: typedoc_1.ParameterType.Mixed,
    });
    app.options.addDeclaration({
        name: 'frontmatter',
        type: typedoc_1.ParameterType.Mixed,
    });
};
function removeDir(path) {
    if (fs.existsSync(path)) {
        const files = fs.readdirSync(path);
        if (files.length > 0) {
            files.forEach(function (filename) {
                if (fs.statSync(path + '/' + filename).isDirectory()) {
                    removeDir(path + '/' + filename);
                }
                else {
                    fs.unlinkSync(path + '/' + filename);
                }
            });
            fs.rmdirSync(path);
        }
        else {
            fs.rmdirSync(path);
        }
    }
}
exports.removeDir = removeDir;
