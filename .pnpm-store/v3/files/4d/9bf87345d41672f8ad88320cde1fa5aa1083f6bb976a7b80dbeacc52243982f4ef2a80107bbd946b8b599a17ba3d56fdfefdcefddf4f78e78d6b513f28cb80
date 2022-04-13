import React, { createContext, useContext, useMemo, useCallback } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var ClasserContext = createContext({});
function ClasserProvider(_a) {
    var classes = _a.classes, children = _a.children;
    var outer = useContext(ClasserContext);
    var mixed = useMerge(outer, classes);
    return (React.createElement(ClasserContext.Provider, { value: mixed, children: children }));
}
function useClasser(libClassPrefix, innerClasses) {
    var outerClasses = useContext(ClasserContext);
    var classes = useMerge(outerClasses, innerClasses);
    return useCallback(getClasser(libClassPrefix, classes), [
        libClassPrefix,
        classes,
    ]);
}
function getClasser(libClassPrefix, classes) {
    return function classer() {
        var libClassSuffixList = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            libClassSuffixList[_i] = arguments[_i];
        }
        var libClassList = libClassSuffixList.map(function (libClassSuffix) {
            return libClassPrefix +
                (libClassPrefix && libClassSuffix ? "-" : "") +
                libClassSuffix;
        });
        var outputList = libClassList.slice();
        libClassList.forEach(function (libClass) {
            if (libClass in classes) {
                outputList.push(classes[libClass]);
            }
        });
        return outputList.join(" ");
    };
}
function useMerge(outer, inner) {
    return useMemo(function () { return (__assign(__assign({}, outer), inner)); }, [
        outer,
        inner,
    ]);
}

export { ClasserProvider, useClasser };
