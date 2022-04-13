/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// Compare the 2 paths, case insensitive and ignoring trailing slash
export const isSamePath = (path1, path2) => {
    const normalize = (pathname) => {
        var _a;
        return (_a = (!pathname || (pathname === null || pathname === void 0 ? void 0 : pathname.endsWith('/'))
            ? pathname
            : `${pathname}/`)) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    };
    return normalize(path1) === normalize(path2);
};
//# sourceMappingURL=pathUtils.js.map