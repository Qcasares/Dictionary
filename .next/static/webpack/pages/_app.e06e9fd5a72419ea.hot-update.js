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

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_socket_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/socket-manager */ \"./src/lib/socket-manager.ts\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/store */ \"./src/store/store.ts\");\n/* harmony import */ var _components_ui_sonner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/sonner */ \"./src/components/ui/sonner.tsx\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.mjs\");\n/* harmony import */ var _components_layout_app_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/layout/app-layout */ \"./src/components/layout/app-layout.tsx\");\n/* harmony import */ var _components_ui_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/tooltip */ \"./src/components/ui/tooltip.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction App(param) {\n    let { Component, pageProps } = param;\n    _s();\n    (0,_lib_socket_manager__WEBPACK_IMPORTED_MODULE_1__.useSocketManager)();\n    const { socketConnected } = (0,_store_store__WEBPACK_IMPORTED_MODULE_2__.useStore)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n        attribute: \"class\",\n        defaultTheme: \"system\",\n        enableSystem: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_6__.TooltipProvider, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_app_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/quentincasares/Downloads/dictionary/src/pages/_app.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/quentincasares/Downloads/dictionary/src/pages/_app.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_sonner__WEBPACK_IMPORTED_MODULE_3__.Toaster, {\n                    position: \"top-center\"\n                }, void 0, false, {\n                    fileName: \"/Users/quentincasares/Downloads/dictionary/src/pages/_app.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/quentincasares/Downloads/dictionary/src/pages/_app.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/quentincasares/Downloads/dictionary/src/pages/_app.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"ueFKslroj+2HUNfovPQqNYc4v+Q=\", false, function() {\n    return [\n        _lib_socket_manager__WEBPACK_IMPORTED_MODULE_1__.useSocketManager,\n        _store_store__WEBPACK_IMPORTED_MODULE_2__.useStore\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDd0Q7QUFDZjtBQUNRO0FBQ0w7QUFDVztBQUNHO0FBRTNDLFNBQVNNLElBQUksS0FBa0M7UUFBbEMsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVksR0FBbEM7O0lBQzFCUixxRUFBZ0JBO0lBQ2hCLE1BQU0sRUFBRVMsZUFBZSxFQUFFLEdBQUdSLHNEQUFRQTtJQUVwQyxxQkFDRSw4REFBQ0Usc0RBQWFBO1FBQUNPLFdBQVU7UUFBUUMsY0FBYTtRQUFTQyxZQUFZO2tCQUNqRSw0RUFBQ1AsbUVBQWVBOzs4QkFDZCw4REFBQ0QscUVBQVNBOzhCQUNSLDRFQUFDRzt3QkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs4QkFFMUIsOERBQUNOLDBEQUFPQTtvQkFBQ1csVUFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJMUI7R0Fkd0JQOztRQUN0Qk4saUVBQWdCQTtRQUNZQyxrREFBUUE7OztLQUZkSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHsgdXNlU29ja2V0TWFuYWdlciB9IGZyb20gJ0AvbGliL3NvY2tldC1tYW5hZ2VyJztcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSAnQC9zdG9yZS9zdG9yZSc7XG5pbXBvcnQgeyBUb2FzdGVyIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL3Nvbm5lcic7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnbmV4dC10aGVtZXMnO1xuaW1wb3J0IEFwcExheW91dCBmcm9tICdAL2NvbXBvbmVudHMvbGF5b3V0L2FwcC1sYXlvdXQnO1xuaW1wb3J0IHsgVG9vbHRpcFByb3ZpZGVyIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL3Rvb2x0aXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICB1c2VTb2NrZXRNYW5hZ2VyKCk7XG4gIGNvbnN0IHsgc29ja2V0Q29ubmVjdGVkIH0gPSB1c2VTdG9yZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgYXR0cmlidXRlPVwiY2xhc3NcIiBkZWZhdWx0VGhlbWU9XCJzeXN0ZW1cIiBlbmFibGVTeXN0ZW0+XG4gICAgICA8VG9vbHRpcFByb3ZpZGVyPlxuICAgICAgICA8QXBwTGF5b3V0PlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9BcHBMYXlvdXQ+XG4gICAgICAgIDxUb2FzdGVyIHBvc2l0aW9uPVwidG9wLWNlbnRlclwiIC8+XG4gICAgICA8L1Rvb2x0aXBQcm92aWRlcj5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZVNvY2tldE1hbmFnZXIiLCJ1c2VTdG9yZSIsIlRvYXN0ZXIiLCJUaGVtZVByb3ZpZGVyIiwiQXBwTGF5b3V0IiwiVG9vbHRpcFByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic29ja2V0Q29ubmVjdGVkIiwiYXR0cmlidXRlIiwiZGVmYXVsdFRoZW1lIiwiZW5hYmxlU3lzdGVtIiwicG9zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n"));

/***/ })

});