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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"(app-pages-browser)/./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n\n\n\nconst MovieCard = (param)=>{\n    let { movie } = param;\n    const router = next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter;\n    const handleSeeClick = ()=>{};\n    const handleDeleteClick = ()=>{};\n    const handleModifyClick = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-fd3105dc44405463\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-fd3105dc44405463\" + \" \" + \"plato-item\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-fd3105dc44405463\" + \" \" + \"plato-header\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"jsx-fd3105dc44405463\",\n                            children: movie.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-fd3105dc44405463\" + \" \" + \"separator\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"jsx-fd3105dc44405463\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                className: \"jsx-fd3105dc44405463\",\n                                children: \"Date of release:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 20\n                            }, undefined),\n                            \" \",\n                            movie.release_date\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"jsx-fd3105dc44405463\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                className: \"jsx-fd3105dc44405463\",\n                                children: \"Duration:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 20\n                            }, undefined),\n                            \" \",\n                            movie.duration,\n                            \" minutes\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"jsx-fd3105dc44405463\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                className: \"jsx-fd3105dc44405463\",\n                                children: \"Rating:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 20\n                            }, undefined),\n                            \" \",\n                            movie.rating\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-fd3105dc44405463\" + \" \" + \"separator\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-fd3105dc44405463\" + \" \" + \"buttons\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleSeeClick,\n                                className: \"jsx-fd3105dc44405463\" + \" \" + \"btn btn-primary\",\n                                children: \"See\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleDeleteClick,\n                                className: \"jsx-fd3105dc44405463\" + \" \" + \"btn btn-danger\",\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleModifyClick,\n                                className: \"jsx-fd3105dc44405463\" + \" \" + \"btn btn-warning\",\n                                children: \"Modify\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"fd3105dc44405463\",\n                children: \".plato-item.jsx-fd3105dc44405463{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:20px;margin:15px 15px;border:1px solid#f48fb1;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;-webkit-box-shadow:0 0 10px rgba(0,0,0,.1);-moz-box-shadow:0 0 10px rgba(0,0,0,.1);box-shadow:0 0 10px rgba(0,0,0,.1);background-color:#fce4ec;-webkit-transition:-webkit-transform.3s,box-shadow.3s;-moz-transition:-moz-transform.3s,box-shadow.3s;-o-transition:-o-transform.3s,box-shadow.3s;transition:-webkit-transform.3s,box-shadow.3s;transition:-moz-transform.3s,box-shadow.3s;transition:-o-transform.3s,box-shadow.3s;transition:transform.3s,box-shadow.3s;min-height:220px;width:310px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:left;-webkit-align-items:left;-moz-box-align:left;-ms-flex-align:left;align-items:left}.plato-header.jsx-fd3105dc44405463{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.separator.jsx-fd3105dc44405463{border-bottom:1px solid#ccc;margin-bottom:10px}.buttons.jsx-fd3105dc44405463{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.btn-see.jsx-fd3105dc44405463{background-color:#007bff;color:white}.btn-delete.jsx-fd3105dc44405463{background-color:#dc3545;color:white}.btn-modify.jsx-fd3105dc44405463{background-color:#ffc107;color:#212529;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;border:none;padding:5px}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, undefined);\n};\n_c = MovieCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovieCard);\nvar _c;\n$RefreshReg$(_c, \"MovieCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbW92aWVDYXJkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTRDO0FBRzVDLE1BQU1DLFlBQVk7UUFBQyxFQUFFQyxLQUFLLEVBQUU7SUFDeEIsTUFBTUMsU0FBU0gsc0RBQVNBO0lBRXhCLE1BQU1JLGlCQUFpQixLQUV2QjtJQUVBLE1BQU1DLG9CQUFvQixLQUUxQjtJQUVBLE1BQU1DLG9CQUFvQixLQUUxQjtJQUVBLHFCQUNJLDhEQUFDQzs7OzBCQUNHLDhEQUFDQTswREFBYzs7a0NBQ1gsOERBQUNBO2tFQUFjO2tDQUNYLDRFQUFDQzs7c0NBQUlOLE1BQU1PLEtBQUs7Ozs7Ozs7Ozs7O2tDQUVwQiw4REFBQ0Y7a0VBQWM7Ozs7OztrQ0FDZiw4REFBQ0c7OzswQ0FBRSw4REFBQ0M7OzBDQUFPOzs7Ozs7NEJBQXlCOzRCQUFFVCxNQUFNVSxZQUFZOzs7Ozs7O2tDQUN4RCw4REFBQ0Y7OzswQ0FBRSw4REFBQ0M7OzBDQUFPOzs7Ozs7NEJBQWtCOzRCQUFFVCxNQUFNVyxRQUFROzRCQUFDOzs7Ozs7O2tDQUM5Qyw4REFBQ0g7OzswQ0FBRSw4REFBQ0M7OzBDQUFPOzs7Ozs7NEJBQWdCOzRCQUFFVCxNQUFNWSxNQUFNOzs7Ozs7O2tDQUN6Qyw4REFBQ1A7a0VBQWM7Ozs7OztrQ0FDZiw4REFBQ0E7a0VBQWM7OzBDQUNYLDhEQUFDUTtnQ0FBbUNDLFNBQVNaOzBFQUEzQjswQ0FBMkM7Ozs7OzswQ0FDN0QsOERBQUNXO2dDQUFrQ0MsU0FBU1g7MEVBQTFCOzBDQUE2Qzs7Ozs7OzBDQUMvRCw4REFBQ1U7Z0NBQW1DQyxTQUFTVjswRUFBM0I7MENBQThDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkRwRjtLQXhGTUw7QUEwRk4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb3ZpZUNhcmQuanN4PzY5YjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5cclxuXHJcbmNvbnN0IE1vdmllQ2FyZCA9ICh7IG1vdmllIH0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcjtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZWVDbGljayA9ICgpID0+IHtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZUNsaWNrID0gKCkgPT4ge1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTW9kaWZ5Q2xpY2sgPSAoKSA9PiB7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxhdG8taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF0by1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+e21vdmllLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VwYXJhdG9yXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cD48c3Ryb25nPkRhdGUgb2YgcmVsZWFzZTo8L3N0cm9uZz4ge21vdmllLnJlbGVhc2VfZGF0ZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD48c3Ryb25nPkR1cmF0aW9uOjwvc3Ryb25nPiB7bW92aWUuZHVyYXRpb259IG1pbnV0ZXM8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD48c3Ryb25nPlJhdGluZzo8L3N0cm9uZz4ge21vdmllLnJhdGluZ308L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcGFyYXRvclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVTZWVDbGlja30+U2VlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZUNsaWNrfT5EZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZ1wiIG9uQ2xpY2s9e2hhbmRsZU1vZGlmeUNsaWNrfT5Nb2RpZnk8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAucGxhdG8taXRlbSB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDIwcHg7XHJcblx0XHRcdFx0XHRtYXJnaW46IDE1cHggMTVweDtcclxuXHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNmNDhmYjE7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZjZTRlYztcclxuXHRcdFx0XHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBib3gtc2hhZG93IDAuM3M7XHJcblx0XHRcdFx0XHRtaW4taGVpZ2h0OiAyMjBweDtcclxuXHRcdFx0XHRcdHdpZHRoOiAzMTBweDtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgXHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogbGVmdDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5wbGF0by1oZWFkZXIge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0fVxyXG5cclxuICAgICAgICAgICAgICAgIC5zZXBhcmF0b3Ige1xyXG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdFx0XHRcdH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYnV0dG9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmJ0bi1zZWUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5idG4tZGVsZXRlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYnRuLW1vZGlmeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIxMjUyOTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllQ2FyZDsiXSwibmFtZXMiOlsidXNlUm91dGVyIiwiTW92aWVDYXJkIiwibW92aWUiLCJyb3V0ZXIiLCJoYW5kbGVTZWVDbGljayIsImhhbmRsZURlbGV0ZUNsaWNrIiwiaGFuZGxlTW9kaWZ5Q2xpY2siLCJkaXYiLCJoMyIsInRpdGxlIiwicCIsInN0cm9uZyIsInJlbGVhc2VfZGF0ZSIsImR1cmF0aW9uIiwicmF0aW5nIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/movieCard.jsx\n"));

/***/ })

});