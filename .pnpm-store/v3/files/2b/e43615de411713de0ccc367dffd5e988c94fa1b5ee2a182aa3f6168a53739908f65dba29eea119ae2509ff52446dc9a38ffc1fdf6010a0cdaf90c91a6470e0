"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerHelpers = exports.registerPartials = exports.reflectionMemberTemplate = exports.reflectionTemplate = exports.indexTemplate = void 0;
const fs = require("fs");
const Handlebars = require("handlebars");
const path = require("path");
const attemptExternalResolution_1 = require("./resources/helpers/attemptExternalResolution");
const breadcrumbs_1 = require("./resources/helpers/breadcrumbs");
const comment_1 = require("./resources/helpers/comment");
const comments_1 = require("./resources/helpers/comments");
const declaration_title_1 = require("./resources/helpers/declaration-title");
const escape_1 = require("./resources/helpers/escape");
const hierarchy_1 = require("./resources/helpers/hierarchy");
const if_is_reference_1 = require("./resources/helpers/if-is-reference");
const if_named_anchors_1 = require("./resources/helpers/if-named-anchors");
const if_show_breadcrumbs_1 = require("./resources/helpers/if-show-breadcrumbs");
const if_show_named_anchors_1 = require("./resources/helpers/if-show-named-anchors");
const if_show_page_title_1 = require("./resources/helpers/if-show-page-title");
const if_show_returns_1 = require("./resources/helpers/if-show-returns");
const if_show_type_hierarchy_1 = require("./resources/helpers/if-show-type-hierarchy");
const index_signature_title_1 = require("./resources/helpers/index-signature-title");
const parameter_table_1 = require("./resources/helpers/parameter-table");
const property_table_1 = require("./resources/helpers/property-table");
const reference_member_1 = require("./resources/helpers/reference-member");
const reflection_path_1 = require("./resources/helpers/reflection-path");
const reflection_title_1 = require("./resources/helpers/reflection-title");
const relative_url_1 = require("./resources/helpers/relative-url");
const signature_title_1 = require("./resources/helpers/signature-title");
const toc_1 = require("./resources/helpers/toc");
const type_1 = require("./resources/helpers/type");
const type_and_parent_1 = require("./resources/helpers/type-and-parent");
const type_parameter_table_1 = require("./resources/helpers/type-parameter-table");
const TEMPLATE_PATH = path.join(__dirname, 'resources', 'templates');
exports.indexTemplate = Handlebars.compile(fs.readFileSync(path.join(TEMPLATE_PATH, 'index.hbs')).toString());
exports.reflectionTemplate = Handlebars.compile(fs.readFileSync(path.join(TEMPLATE_PATH, 'reflection.hbs')).toString());
exports.reflectionMemberTemplate = Handlebars.compile(fs.readFileSync(path.join(TEMPLATE_PATH, 'reflection.member.hbs')).toString());
function registerPartials() {
    const partialsFolder = path.join(__dirname, 'resources', 'partials');
    const partialFiles = fs.readdirSync(partialsFolder);
    partialFiles.forEach((partialFile) => {
        const partialName = path.basename(partialFile, '.hbs');
        const partialContent = fs
            .readFileSync(partialsFolder + '/' + partialFile)
            .toString();
        Handlebars.registerPartial(partialName, partialContent);
    });
}
exports.registerPartials = registerPartials;
function registerHelpers(theme) {
    (0, attemptExternalResolution_1.default)(theme);
    (0, breadcrumbs_1.default)(theme);
    (0, comment_1.default)(theme);
    (0, comments_1.default)();
    (0, declaration_title_1.default)();
    (0, escape_1.default)();
    (0, hierarchy_1.default)();
    (0, if_is_reference_1.default)();
    (0, if_named_anchors_1.default)(theme);
    (0, if_show_breadcrumbs_1.default)(theme);
    (0, if_show_named_anchors_1.default)(theme);
    (0, if_show_page_title_1.default)(theme);
    (0, if_show_returns_1.default)();
    (0, if_show_type_hierarchy_1.default)();
    (0, index_signature_title_1.default)();
    (0, parameter_table_1.default)();
    (0, property_table_1.default)();
    (0, reference_member_1.default)();
    (0, reflection_path_1.default)();
    (0, reflection_title_1.default)(theme);
    (0, relative_url_1.default)(theme);
    (0, signature_title_1.default)();
    (0, toc_1.default)(theme);
    (0, type_1.default)();
    (0, type_and_parent_1.default)();
    (0, type_parameter_table_1.default)();
}
exports.registerHelpers = registerHelpers;
