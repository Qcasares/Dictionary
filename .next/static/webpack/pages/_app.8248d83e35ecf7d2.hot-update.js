"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useStore: function() { return /* binding */ useStore; }\n/* harmony export */ });\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ \"./node_modules/zustand/esm/index.mjs\");\n\nconst useStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({\n        apiKey: \"\",\n        socketConnected: false,\n        setApiKey: (key)=>set({\n                apiKey: key\n            }),\n        setSocketConnected: (connected)=>set({\n                socketConnected: connected\n            })\n    }));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc3RvcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBaUM7QUFTMUIsTUFBTUMsV0FBV0QsK0NBQU1BLENBQVcsQ0FBQ0UsTUFBUztRQUNqREMsUUFBUTtRQUNSQyxpQkFBaUI7UUFDakJDLFdBQVcsQ0FBQ0MsTUFBUUosSUFBSTtnQkFBRUMsUUFBUUc7WUFBSTtRQUN0Q0Msb0JBQW9CLENBQUNDLFlBQWNOLElBQUk7Z0JBQUVFLGlCQUFpQkk7WUFBVTtJQUN0RSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZS9zdG9yZS50cz81MDJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZSB9IGZyb20gJ3p1c3RhbmQnO1xuXG5pbnRlcmZhY2UgQXBwU3RhdGUge1xuICBhcGlLZXk6IHN0cmluZztcbiAgc29ja2V0Q29ubmVjdGVkOiBib29sZWFuO1xuICBzZXRBcGlLZXk6IChrZXk6IHN0cmluZykgPT4gdm9pZDtcbiAgc2V0U29ja2V0Q29ubmVjdGVkOiAoY29ubmVjdGVkOiBib29sZWFuKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgdXNlU3RvcmUgPSBjcmVhdGU8QXBwU3RhdGU+KChzZXQpID0+ICh7XG4gIGFwaUtleTogJycsXG4gIHNvY2tldENvbm5lY3RlZDogZmFsc2UsXG4gIHNldEFwaUtleTogKGtleSkgPT4gc2V0KHsgYXBpS2V5OiBrZXkgfSksXG4gIHNldFNvY2tldENvbm5lY3RlZDogKGNvbm5lY3RlZCkgPT4gc2V0KHsgc29ja2V0Q29ubmVjdGVkOiBjb25uZWN0ZWQgfSksXG59KSk7Il0sIm5hbWVzIjpbImNyZWF0ZSIsInVzZVN0b3JlIiwic2V0IiwiYXBpS2V5Iiwic29ja2V0Q29ubmVjdGVkIiwic2V0QXBpS2V5Iiwia2V5Iiwic2V0U29ja2V0Q29ubmVjdGVkIiwiY29ubmVjdGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/store.ts\n"));

/***/ })

});