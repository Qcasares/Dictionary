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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _state_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/state/store */ \"./src/state/store.ts\");\n/* harmony import */ var _components_ui_sonner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/sonner */ \"./src/components/ui/sonner.tsx\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.mjs\");\n/* harmony import */ var _components_layout_app_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/layout/app-layout */ \"./src/components/layout/app-layout.tsx\");\n/* harmony import */ var _components_ui_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/tooltip */ \"./src/components/ui/tooltip.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction App(param) {\n    let { Component, pageProps } = param;\n    _s();\n    const { apiKey, setApiKey } = (0,_state_store__WEBPACK_IMPORTED_MODULE_1__.useStore)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n        attribute: \"class\",\n        defaultTheme: \"system\",\n        enableSystem: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_5__.TooltipProvider, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_app_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/quentincasares/Downloads/dictionary/src/pages/_app.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/quentincasares/Downloads/dictionary/src/pages/_app.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_sonner__WEBPACK_IMPORTED_MODULE_2__.Toaster, {\n                    position: \"top-center\"\n                }, void 0, false, {\n                    fileName: \"/Users/quentincasares/Downloads/dictionary/src/pages/_app.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/quentincasares/Downloads/dictionary/src/pages/_app.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/quentincasares/Downloads/dictionary/src/pages/_app.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"3xpV5/idjQxpXvQwK30n3kH0a7k=\", false, function() {\n    return [\n        _state_store__WEBPACK_IMPORTED_MODULE_1__.useStore\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUN5QztBQUNRO0FBQ0w7QUFDVztBQUNHO0FBRTNDLFNBQVNLLElBQUksS0FBa0M7UUFBbEMsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVksR0FBbEM7O0lBQzFCLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBR1Qsc0RBQVFBO0lBRXRDLHFCQUNFLDhEQUFDRSxzREFBYUE7UUFBQ1EsV0FBVTtRQUFRQyxjQUFhO1FBQVNDLFlBQVk7a0JBQ2pFLDRFQUFDUixtRUFBZUE7OzhCQUNkLDhEQUFDRCxxRUFBU0E7OEJBQ1IsNEVBQUNHO3dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OzhCQUUxQiw4REFBQ04sMERBQU9BO29CQUFDWSxVQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQUkxQjtHQWJ3QlI7O1FBQ1FMLGtEQUFRQTs7O0tBRGhCSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICdAL3N0YXRlL3N0b3JlJztcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvc29ubmVyJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICduZXh0LXRoZW1lcyc7XG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9sYXlvdXQvYXBwLWxheW91dCc7XG5pbXBvcnQgeyBUb29sdGlwUHJvdmlkZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvdG9vbHRpcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIGNvbnN0IHsgYXBpS2V5LCBzZXRBcGlLZXkgfSA9IHVzZVN0b3JlKCk7XG4gIFxuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIGF0dHJpYnV0ZT1cImNsYXNzXCIgZGVmYXVsdFRoZW1lPVwic3lzdGVtXCIgZW5hYmxlU3lzdGVtPlxuICAgICAgPFRvb2x0aXBQcm92aWRlcj5cbiAgICAgICAgPEFwcExheW91dD5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvQXBwTGF5b3V0PlxuICAgICAgICA8VG9hc3RlciBwb3NpdGlvbj1cInRvcC1jZW50ZXJcIiAvPlxuICAgICAgPC9Ub29sdGlwUHJvdmlkZXI+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VTdG9yZSIsIlRvYXN0ZXIiLCJUaGVtZVByb3ZpZGVyIiwiQXBwTGF5b3V0IiwiVG9vbHRpcFByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiYXBpS2V5Iiwic2V0QXBpS2V5IiwiYXR0cmlidXRlIiwiZGVmYXVsdFRoZW1lIiwiZW5hYmxlU3lzdGVtIiwicG9zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n"));

/***/ }),

/***/ "./src/state/api.slice.ts":
/*!********************************!*\
  !*** ./src/state/api.slice.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialState: function() { return /* binding */ initialState; },\n/* harmony export */   useApiStore: function() { return /* binding */ useApiStore; }\n/* harmony export */ });\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ \"./node_modules/zustand/esm/index.mjs\");\n\nconst initialState = {\n    apiKey: \"\",\n    socketConnected: false,\n    setApiKey: ()=>{},\n    setSocketConnected: ()=>{}\n};\nconst useApiStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({\n        ...initialState,\n        setApiKey: (key)=>set({\n                apiKey: key\n            }),\n        setSocketConnected: (connected)=>set({\n                socketConnected: connected\n            })\n    }));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhdGUvYXBpLnNsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpQztBQVMxQixNQUFNQyxlQUF5QjtJQUNwQ0MsUUFBUTtJQUNSQyxpQkFBaUI7SUFDakJDLFdBQVcsS0FBTztJQUNsQkMsb0JBQW9CLEtBQU87QUFDN0IsRUFBRTtBQUVLLE1BQU1DLGNBQWNOLCtDQUFNQSxDQUFXLENBQUNPLE1BQVM7UUFDcEQsR0FBR04sWUFBWTtRQUNmRyxXQUFXLENBQUNJLE1BQVFELElBQUk7Z0JBQUVMLFFBQVFNO1lBQUk7UUFDdENILG9CQUFvQixDQUFDSSxZQUFjRixJQUFJO2dCQUFFSixpQkFBaUJNO1lBQVU7SUFDdEUsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3RhdGUvYXBpLnNsaWNlLnRzPzYzZWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSAnenVzdGFuZCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBpU3RhdGUge1xuICBhcGlLZXk6IHN0cmluZztcbiAgc29ja2V0Q29ubmVjdGVkOiBib29sZWFuO1xuICBzZXRBcGlLZXk6IChrZXk6IHN0cmluZykgPT4gdm9pZDtcbiAgc2V0U29ja2V0Q29ubmVjdGVkOiAoY29ubmVjdGVkOiBib29sZWFuKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBBcGlTdGF0ZSA9IHtcbiAgYXBpS2V5OiAnJyxcbiAgc29ja2V0Q29ubmVjdGVkOiBmYWxzZSxcbiAgc2V0QXBpS2V5OiAoKSA9PiB7fSxcbiAgc2V0U29ja2V0Q29ubmVjdGVkOiAoKSA9PiB7fSxcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VBcGlTdG9yZSA9IGNyZWF0ZTxBcGlTdGF0ZT4oKHNldCkgPT4gKHtcbiAgLi4uaW5pdGlhbFN0YXRlLFxuICBzZXRBcGlLZXk6IChrZXkpID0+IHNldCh7IGFwaUtleToga2V5IH0pLFxuICBzZXRTb2NrZXRDb25uZWN0ZWQ6IChjb25uZWN0ZWQpID0+IHNldCh7IHNvY2tldENvbm5lY3RlZDogY29ubmVjdGVkIH0pLFxufSkpOyJdLCJuYW1lcyI6WyJjcmVhdGUiLCJpbml0aWFsU3RhdGUiLCJhcGlLZXkiLCJzb2NrZXRDb25uZWN0ZWQiLCJzZXRBcGlLZXkiLCJzZXRTb2NrZXRDb25uZWN0ZWQiLCJ1c2VBcGlTdG9yZSIsInNldCIsImtleSIsImNvbm5lY3RlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/state/api.slice.ts\n"));

/***/ }),

/***/ "./src/state/dictionary.slice.ts":
/*!***************************************!*\
  !*** ./src/state/dictionary.slice.ts ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialState: function() { return /* binding */ initialState; },\n/* harmony export */   useDictionaryStore: function() { return /* binding */ useDictionaryStore; }\n/* harmony export */ });\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ \"./node_modules/zustand/esm/index.mjs\");\n\nconst initialState = {\n    metadata: [],\n    setMetadata: ()=>{}\n};\nconst useDictionaryStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({\n        ...initialState,\n        setMetadata: (metadata)=>set({\n                metadata\n            })\n    }));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhdGUvZGljdGlvbmFyeS5zbGljZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUM7QUFlMUIsTUFBTUMsZUFBZ0M7SUFDM0NDLFVBQVUsRUFBRTtJQUNaQyxhQUFhLEtBQU87QUFDdEIsRUFBRTtBQUVLLE1BQU1DLHFCQUFxQkosK0NBQU1BLENBQWtCLENBQUNLLE1BQVM7UUFDbEUsR0FBR0osWUFBWTtRQUNmRSxhQUFhLENBQUNELFdBQWFHLElBQUk7Z0JBQUVIO1lBQVM7SUFDNUMsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3RhdGUvZGljdGlvbmFyeS5zbGljZS50cz83YTVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZSB9IGZyb20gJ3p1c3RhbmQnO1xuXG5leHBvcnQgdHlwZSBGaWVsZFR5cGUgPSAnc3RyaW5nJyB8ICdudW1iZXInIHwgJ2Jvb2xlYW4nIHwgJ2RhdGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFkYXRhRmllbGQge1xuICBrZXk6IHN0cmluZztcbiAgdHlwZTogRmllbGRUeXBlO1xuICB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERpY3Rpb25hcnlTdGF0ZSB7XG4gIG1ldGFkYXRhOiBNZXRhZGF0YUZpZWxkW107XG4gIHNldE1ldGFkYXRhOiAobWV0YWRhdGE6IE1ldGFkYXRhRmllbGRbXSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogRGljdGlvbmFyeVN0YXRlID0ge1xuICBtZXRhZGF0YTogW10sXG4gIHNldE1ldGFkYXRhOiAoKSA9PiB7fSxcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VEaWN0aW9uYXJ5U3RvcmUgPSBjcmVhdGU8RGljdGlvbmFyeVN0YXRlPigoc2V0KSA9PiAoe1xuICAuLi5pbml0aWFsU3RhdGUsXG4gIHNldE1ldGFkYXRhOiAobWV0YWRhdGEpID0+IHNldCh7IG1ldGFkYXRhIH0pLFxufSkpOyJdLCJuYW1lcyI6WyJjcmVhdGUiLCJpbml0aWFsU3RhdGUiLCJtZXRhZGF0YSIsInNldE1ldGFkYXRhIiwidXNlRGljdGlvbmFyeVN0b3JlIiwic2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/state/dictionary.slice.ts\n"));

/***/ }),

/***/ "./src/state/store.ts":
/*!****************************!*\
  !*** ./src/state/store.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useStore: function() { return /* binding */ useStore; }\n/* harmony export */ });\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! zustand */ \"./node_modules/zustand/esm/index.mjs\");\n/* harmony import */ var _api_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.slice */ \"./src/state/api.slice.ts\");\n/* harmony import */ var _dictionary_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dictionary.slice */ \"./src/state/dictionary.slice.ts\");\n/* harmony import */ var _ui_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui.slice */ \"./src/state/ui.slice.ts\");\n\n\n\n\nconst useStore = (0,zustand__WEBPACK_IMPORTED_MODULE_3__.create)((set, get)=>({\n        ..._api_slice__WEBPACK_IMPORTED_MODULE_0__.initialState,\n        ..._dictionary_slice__WEBPACK_IMPORTED_MODULE_1__.initialState,\n        ..._ui_slice__WEBPACK_IMPORTED_MODULE_2__.initialState,\n        // API actions\n        setApiKey: (key)=>set({\n                apiKey: key\n            }),\n        setSocketConnected: (connected)=>set({\n                socketConnected: connected\n            }),\n        // Dictionary actions\n        setMetadata: (metadata)=>set({\n                metadata\n            }),\n        // UI actions\n        setTheme: (theme)=>set({\n                theme\n            })\n    }));\n// Middleware for logging state changes\nuseStore.subscribe((state)=>console.log(\"State changed:\", state));\n// Middleware for persistence\nuseStore.subscribe((state)=>localStorage.setItem(\"app-state\", JSON.stringify(state)));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhdGUvc3RvcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUM7QUFDdUM7QUFDb0M7QUFDdkM7QUFJOUQsTUFBTUssV0FBV0wsK0NBQU1BLENBQVcsQ0FBQ00sS0FBS0MsTUFBUztRQUN0RCxHQUFHTCxvREFBZTtRQUNsQixHQUFHQywyREFBc0I7UUFDekIsR0FBR0MsbURBQWM7UUFFakIsY0FBYztRQUNkSSxXQUFXLENBQUNDLE1BQWdCSCxJQUFJO2dCQUFFSSxRQUFRRDtZQUFJO1FBQzlDRSxvQkFBb0IsQ0FBQ0MsWUFBdUJOLElBQUk7Z0JBQUVPLGlCQUFpQkQ7WUFBVTtRQUU3RSxxQkFBcUI7UUFDckJFLGFBQWEsQ0FBQ0MsV0FBOEJULElBQUk7Z0JBQUVTO1lBQVM7UUFFM0QsYUFBYTtRQUNiQyxVQUFVLENBQUNDLFFBQTRCWCxJQUFJO2dCQUFFVztZQUFNO0lBQ3JELElBQUk7QUFFSix1Q0FBdUM7QUFDdkNaLFNBQVNhLFNBQVMsQ0FDaEIsQ0FBQ0MsUUFBVUMsUUFBUUMsR0FBRyxDQUFDLGtCQUFrQkY7QUFHM0MsNkJBQTZCO0FBQzdCZCxTQUFTYSxTQUFTLENBQ2hCLENBQUNDLFFBQVVHLGFBQWFDLE9BQU8sQ0FBQyxhQUFhQyxLQUFLQyxTQUFTLENBQUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdGF0ZS9zdG9yZS50cz80OTZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZSB9IGZyb20gJ3p1c3RhbmQnO1xuaW1wb3J0IHsgQXBpU3RhdGUsIGluaXRpYWxTdGF0ZSBhcyBhcGlJbml0aWFsU3RhdGUgfSBmcm9tICcuL2FwaS5zbGljZSc7XG5pbXBvcnQgeyBEaWN0aW9uYXJ5U3RhdGUsIGluaXRpYWxTdGF0ZSBhcyBkaWN0aW9uYXJ5SW5pdGlhbFN0YXRlLCBNZXRhZGF0YUZpZWxkIH0gZnJvbSAnLi9kaWN0aW9uYXJ5LnNsaWNlJztcbmltcG9ydCB7IFVpU3RhdGUsIGluaXRpYWxTdGF0ZSBhcyB1aUluaXRpYWxTdGF0ZSB9IGZyb20gJy4vdWkuc2xpY2UnO1xuXG50eXBlIEFwcFN0YXRlID0gQXBpU3RhdGUgJiBEaWN0aW9uYXJ5U3RhdGUgJiBVaVN0YXRlO1xuXG5leHBvcnQgY29uc3QgdXNlU3RvcmUgPSBjcmVhdGU8QXBwU3RhdGU+KChzZXQsIGdldCkgPT4gKHtcbiAgLi4uYXBpSW5pdGlhbFN0YXRlLFxuICAuLi5kaWN0aW9uYXJ5SW5pdGlhbFN0YXRlLFxuICAuLi51aUluaXRpYWxTdGF0ZSxcbiAgXG4gIC8vIEFQSSBhY3Rpb25zXG4gIHNldEFwaUtleTogKGtleTogc3RyaW5nKSA9PiBzZXQoeyBhcGlLZXk6IGtleSB9KSxcbiAgc2V0U29ja2V0Q29ubmVjdGVkOiAoY29ubmVjdGVkOiBib29sZWFuKSA9PiBzZXQoeyBzb2NrZXRDb25uZWN0ZWQ6IGNvbm5lY3RlZCB9KSxcbiAgXG4gIC8vIERpY3Rpb25hcnkgYWN0aW9uc1xuICBzZXRNZXRhZGF0YTogKG1ldGFkYXRhOiBNZXRhZGF0YUZpZWxkW10pID0+IHNldCh7IG1ldGFkYXRhIH0pLFxuICBcbiAgLy8gVUkgYWN0aW9uc1xuICBzZXRUaGVtZTogKHRoZW1lOiAnbGlnaHQnIHwgJ2RhcmsnKSA9PiBzZXQoeyB0aGVtZSB9KSxcbn0pKTtcblxuLy8gTWlkZGxld2FyZSBmb3IgbG9nZ2luZyBzdGF0ZSBjaGFuZ2VzXG51c2VTdG9yZS5zdWJzY3JpYmUoXG4gIChzdGF0ZSkgPT4gY29uc29sZS5sb2coJ1N0YXRlIGNoYW5nZWQ6Jywgc3RhdGUpXG4pO1xuXG4vLyBNaWRkbGV3YXJlIGZvciBwZXJzaXN0ZW5jZVxudXNlU3RvcmUuc3Vic2NyaWJlKFxuICAoc3RhdGUpID0+IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcHAtc3RhdGUnLCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpXG4pOyJdLCJuYW1lcyI6WyJjcmVhdGUiLCJpbml0aWFsU3RhdGUiLCJhcGlJbml0aWFsU3RhdGUiLCJkaWN0aW9uYXJ5SW5pdGlhbFN0YXRlIiwidWlJbml0aWFsU3RhdGUiLCJ1c2VTdG9yZSIsInNldCIsImdldCIsInNldEFwaUtleSIsImtleSIsImFwaUtleSIsInNldFNvY2tldENvbm5lY3RlZCIsImNvbm5lY3RlZCIsInNvY2tldENvbm5lY3RlZCIsInNldE1ldGFkYXRhIiwibWV0YWRhdGEiLCJzZXRUaGVtZSIsInRoZW1lIiwic3Vic2NyaWJlIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/state/store.ts\n"));

/***/ }),

/***/ "./src/state/ui.slice.ts":
/*!*******************************!*\
  !*** ./src/state/ui.slice.ts ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialState: function() { return /* binding */ initialState; },\n/* harmony export */   useUiStore: function() { return /* binding */ useUiStore; }\n/* harmony export */ });\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ \"./node_modules/zustand/esm/index.mjs\");\n\nconst initialState = {\n    theme: \"light\",\n    setTheme: ()=>{}\n};\nconst useUiStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({\n        ...initialState,\n        setTheme: (theme)=>set({\n                theme\n            })\n    }));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhdGUvdWkuc2xpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlDO0FBTzFCLE1BQU1DLGVBQXdCO0lBQ25DQyxPQUFPO0lBQ1BDLFVBQVUsS0FBTztBQUNuQixFQUFFO0FBRUssTUFBTUMsYUFBYUosK0NBQU1BLENBQVUsQ0FBQ0ssTUFBUztRQUNsRCxHQUFHSixZQUFZO1FBQ2ZFLFVBQVUsQ0FBQ0QsUUFBVUcsSUFBSTtnQkFBRUg7WUFBTTtJQUNuQyxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdGF0ZS91aS5zbGljZS50cz9kM2ExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZSB9IGZyb20gJ3p1c3RhbmQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVpU3RhdGUge1xuICB0aGVtZTogJ2xpZ2h0JyB8ICdkYXJrJztcbiAgc2V0VGhlbWU6ICh0aGVtZTogJ2xpZ2h0JyB8ICdkYXJrJykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogVWlTdGF0ZSA9IHtcbiAgdGhlbWU6ICdsaWdodCcsXG4gIHNldFRoZW1lOiAoKSA9PiB7fSxcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VVaVN0b3JlID0gY3JlYXRlPFVpU3RhdGU+KChzZXQpID0+ICh7XG4gIC4uLmluaXRpYWxTdGF0ZSxcbiAgc2V0VGhlbWU6ICh0aGVtZSkgPT4gc2V0KHsgdGhlbWUgfSksXG59KSk7Il0sIm5hbWVzIjpbImNyZWF0ZSIsImluaXRpYWxTdGF0ZSIsInRoZW1lIiwic2V0VGhlbWUiLCJ1c2VVaVN0b3JlIiwic2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/state/ui.slice.ts\n"));

/***/ })

});