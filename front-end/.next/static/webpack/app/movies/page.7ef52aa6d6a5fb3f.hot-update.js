"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/movies/page",{

/***/ "(app-pages-browser)/./components/movieCard.jsx":
/*!**********************************!*\
  !*** ./components/movieCard.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"(app-pages-browser)/./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n\n\n\nconst MovieCard = (param)=>{\n    let { movie } = param;\n    const router = next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter;\n    const handleSeeClick = ()=>{};\n    const handleDeleteClick = ()=>{};\n    const handleModifyClick = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-1154d41a397244e4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-1154d41a397244e4\" + \" \" + \"plato-item\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-1154d41a397244e4\" + \" \" + \"plato-header\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"jsx-1154d41a397244e4\",\n                            children: movie.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-1154d41a397244e4\" + \" \" + \"separator\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"jsx-1154d41a397244e4\",\n                        children: [\n                            \"Duration: \",\n                            movie.duration,\n                            \" minutes\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"jsx-1154d41a397244e4\",\n                        children: [\n                            \"Rating: \",\n                            movie.rating\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-1154d41a397244e4\" + \" \" + \"separator\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-1154d41a397244e4\" + \" \" + \"buttons\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleSeeClick,\n                                className: \"jsx-1154d41a397244e4\" + \" \" + \"btn-see\",\n                                children: \"See\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleDeleteClick,\n                                className: \"jsx-1154d41a397244e4\" + \" \" + \"btn-delete\",\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleModifyClick,\n                                className: \"jsx-1154d41a397244e4\" + \" \" + \"btn-modify\",\n                                children: \"Modify\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"1154d41a397244e4\",\n                children: \".plato-item.jsx-1154d41a397244e4{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:20px;margin:15px 15px;border:1px solid#4caf50;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;-webkit-box-shadow:0 0 10px rgba(0,0,0,.1);-moz-box-shadow:0 0 10px rgba(0,0,0,.1);box-shadow:0 0 10px rgba(0,0,0,.1);background-color:#e7f7e4;-webkit-transition:-webkit-transform.3s,box-shadow.3s;-moz-transition:-moz-transform.3s,box-shadow.3s;-o-transition:-o-transform.3s,box-shadow.3s;transition:-webkit-transform.3s,box-shadow.3s;transition:-moz-transform.3s,box-shadow.3s;transition:-o-transform.3s,box-shadow.3s;transition:transform.3s,box-shadow.3s;min-height:220px;width:310px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:left;-webkit-align-items:left;-moz-box-align:left;-ms-flex-align:left;align-items:left}.plato-header.jsx-1154d41a397244e4{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.separator.jsx-1154d41a397244e4{border-bottom:1px solid#ccc;margin-bottom:10px}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, undefined);\n};\n_c = MovieCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovieCard);\nvar _c;\n$RefreshReg$(_c, \"MovieCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbW92aWVDYXJkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTRDO0FBRzVDLE1BQU1DLFlBQVk7UUFBQyxFQUFFQyxLQUFLLEVBQUU7SUFDeEIsTUFBTUMsU0FBU0gsc0RBQVNBO0lBRXhCLE1BQU1JLGlCQUFpQixLQUV2QjtJQUVBLE1BQU1DLG9CQUFvQixLQUUxQjtJQUVBLE1BQU1DLG9CQUFvQixLQUUxQjtJQUVBLHFCQUNJLDhEQUFDQzs7OzBCQUNHLDhEQUFDQTswREFBYzs7a0NBQ1gsOERBQUNBO2tFQUFjO2tDQUNYLDRFQUFDQzs7c0NBQUlOLE1BQU1PLEtBQUs7Ozs7Ozs7Ozs7O2tDQUVwQiw4REFBQ0Y7a0VBQWM7Ozs7OztrQ0FDZiw4REFBQ0c7Ozs0QkFBRTs0QkFBV1IsTUFBTVMsUUFBUTs0QkFBQzs7Ozs7OztrQ0FDN0IsOERBQUNEOzs7NEJBQUU7NEJBQVNSLE1BQU1VLE1BQU07Ozs7Ozs7a0NBQ3hCLDhEQUFDTDtrRUFBYzs7Ozs7O2tDQUNmLDhEQUFDQTtrRUFBYzs7MENBQ2YsOERBQUNNO2dDQUEyQkMsU0FBU1Y7MEVBQW5COzBDQUFtQzs7Ozs7OzBDQUNyRCw4REFBQ1M7Z0NBQThCQyxTQUFTVDswRUFBdEI7MENBQXlDOzs7Ozs7MENBQzNELDhEQUFDUTtnQ0FBOEJDLFNBQVNSOzBFQUF0QjswQ0FBeUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQzNFO0tBaEVNTDtBQWtFTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21vdmllQ2FyZC5qc3g/NjliNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcblxyXG5cclxuY29uc3QgTW92aWVDYXJkID0gKHsgbW92aWUgfSkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlZUNsaWNrID0gKCkgPT4ge1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlQ2xpY2sgPSAoKSA9PiB7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVNb2RpZnlDbGljayA9ICgpID0+IHtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF0by1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXRvLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz57bW92aWUudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXBhcmF0b3JcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwPkR1cmF0aW9uOiB7bW92aWUuZHVyYXRpb259IG1pbnV0ZXM8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5SYXRpbmc6IHttb3ZpZS5yYXRpbmd9PC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXBhcmF0b3JcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tc2VlXCIgb25DbGljaz17aGFuZGxlU2VlQ2xpY2t9PlNlZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tZGVsZXRlXCIgb25DbGljaz17aGFuZGxlRGVsZXRlQ2xpY2t9PkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tbW9kaWZ5XCIgb25DbGljaz17aGFuZGxlTW9kaWZ5Q2xpY2t9Pk1vZGlmeTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLnBsYXRvLWl0ZW0ge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAyMHB4O1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAxNXB4IDE1cHg7XHJcblx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjNGNhZjUwO1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNlN2Y3ZTQ7XHJcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgYm94LXNoYWRvdyAwLjNzO1xyXG5cdFx0XHRcdFx0bWluLWhlaWdodDogMjIwcHg7XHJcblx0XHRcdFx0XHR3aWR0aDogMzEwcHg7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IFxyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGxlZnQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucGxhdG8taGVhZGVyIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdH1cclxuXHJcbiAgICAgICAgICAgICAgICAuc2VwYXJhdG9yIHtcclxuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHRcdFx0XHR9IFxyXG5cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVDYXJkOyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJNb3ZpZUNhcmQiLCJtb3ZpZSIsInJvdXRlciIsImhhbmRsZVNlZUNsaWNrIiwiaGFuZGxlRGVsZXRlQ2xpY2siLCJoYW5kbGVNb2RpZnlDbGljayIsImRpdiIsImgzIiwidGl0bGUiLCJwIiwiZHVyYXRpb24iLCJyYXRpbmciLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/movieCard.jsx\n"));

/***/ })

});