import * as _codemirror_state from '@codemirror/state';
import { LRLanguage, LanguageSupport } from '@codemirror/language';
import { CompletionContext, CompletionResult } from '@codemirror/autocomplete';

/**
HTML tag completion. Opens and closes tags and attributes in a
context-aware way.
*/
declare function htmlCompletionSource(context: CompletionContext): CompletionResult | null;

/**
A language provider based on the [Lezer HTML
parser](https://github.com/lezer-parser/html), extended with the
JavaScript and CSS parsers to parse the content of `<script>` and
`<style>` tags.
*/
declare const htmlLanguage: LRLanguage;
declare const htmlCompletion: _codemirror_state.Extension;
/**
Language support for HTML, including
[`htmlCompletion`](https://codemirror.net/6/docs/ref/#lang-html.htmlCompletion) and JavaScript and
CSS support extensions.
*/
declare function html(config?: {
    /**
    By default, the syntax tree will highlight mismatched closing
    tags. Set this to `false` to turn that off (for example when you
    expect to only be parsing a fragment of HTML text, not a full
    document).
    */
    matchClosingTags?: boolean;
    /**
    Determines whether [`autoCloseTags`](https://codemirror.net/6/docs/ref/#lang-html.autoCloseTags)
    is included in the support extensions. Defaults to true.
    */
    autoCloseTags?: boolean;
}): LanguageSupport;
/**
Extension that will automatically insert close tags when a `>` or
`/` is typed.
*/
declare const autoCloseTags: _codemirror_state.Extension;

export { autoCloseTags, html, htmlCompletion, htmlCompletionSource, htmlLanguage };
