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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"(app-pages-browser)/./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n\n\n\nconst MovieCard = (param)=>{\n    let { movie } = param;\n    const router = next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter;\n    const handleSeeClick = ()=>{};\n    const handleDeleteClick = ()=>{};\n    const handleModifyClick = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-99821b07405c3672\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-99821b07405c3672\" + \" \" + \"plato-item\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-99821b07405c3672\" + \" \" + \"plato-header\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"jsx-99821b07405c3672\",\n                            children: movie.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-99821b07405c3672\" + \" \" + \"separator\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"jsx-99821b07405c3672\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                className: \"jsx-99821b07405c3672\",\n                                children: \"Date of release:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 20\n                            }, undefined),\n                            \" \",\n                            movie.release_date\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"jsx-99821b07405c3672\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                className: \"jsx-99821b07405c3672\",\n                                children: \"Duration:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 20\n                            }, undefined),\n                            \" \",\n                            movie.duration,\n                            \" minutes\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"jsx-99821b07405c3672\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                className: \"jsx-99821b07405c3672\",\n                                children: \"Rating:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 20\n                            }, undefined),\n                            \" \",\n                            movie.rating\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-99821b07405c3672\" + \" \" + \"separator\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-99821b07405c3672\" + \" \" + \"buttons\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleSeeClick,\n                                className: \"jsx-99821b07405c3672\" + \" \" + \"btn btn-primary\",\n                                children: \"See\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleDeleteClick,\n                                className: \"jsx-99821b07405c3672\" + \" \" + \"btn btn-danger\",\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleModifyClick,\n                                className: \"jsx-99821b07405c3672\" + \" \" + \"btn-modify\",\n                                children: \"Modify\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"99821b07405c3672\",\n                children: \".plato-item.jsx-99821b07405c3672{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:20px;margin:15px 15px;border:1px solid#4caf50;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;-webkit-box-shadow:0 0 10px rgba(0,0,0,.1);-moz-box-shadow:0 0 10px rgba(0,0,0,.1);box-shadow:0 0 10px rgba(0,0,0,.1);background-color:#e7f7e4;-webkit-transition:-webkit-transform.3s,box-shadow.3s;-moz-transition:-moz-transform.3s,box-shadow.3s;-o-transition:-o-transform.3s,box-shadow.3s;transition:-webkit-transform.3s,box-shadow.3s;transition:-moz-transform.3s,box-shadow.3s;transition:-o-transform.3s,box-shadow.3s;transition:transform.3s,box-shadow.3s;min-height:220px;width:310px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:left;-webkit-align-items:left;-moz-box-align:left;-ms-flex-align:left;align-items:left}.plato-header.jsx-99821b07405c3672{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.separator.jsx-99821b07405c3672{border-bottom:1px solid#ccc;margin-bottom:10px}.buttons.jsx-99821b07405c3672{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.btn-see.jsx-99821b07405c3672{background-color:#007bff;color:white}.btn-delete.jsx-99821b07405c3672{background-color:#dc3545;color:white}.btn-modify.jsx-99821b07405c3672{background-color:#ffc107;color:#212529;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;border:none;padding:10px}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movieCard.jsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, undefined);\n};\n_c = MovieCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovieCard);\nvar _c;\n$RefreshReg$(_c, \"MovieCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbW92aWVDYXJkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTRDO0FBRzVDLE1BQU1DLFlBQVk7UUFBQyxFQUFFQyxLQUFLLEVBQUU7SUFDeEIsTUFBTUMsU0FBU0gsc0RBQVNBO0lBRXhCLE1BQU1JLGlCQUFpQixLQUV2QjtJQUVBLE1BQU1DLG9CQUFvQixLQUUxQjtJQUVBLE1BQU1DLG9CQUFvQixLQUUxQjtJQUVBLHFCQUNJLDhEQUFDQzs7OzBCQUNHLDhEQUFDQTswREFBYzs7a0NBQ1gsOERBQUNBO2tFQUFjO2tDQUNYLDRFQUFDQzs7c0NBQUlOLE1BQU1PLEtBQUs7Ozs7Ozs7Ozs7O2tDQUVwQiw4REFBQ0Y7a0VBQWM7Ozs7OztrQ0FDZiw4REFBQ0c7OzswQ0FBRSw4REFBQ0M7OzBDQUFPOzs7Ozs7NEJBQXlCOzRCQUFFVCxNQUFNVSxZQUFZOzs7Ozs7O2tDQUN4RCw4REFBQ0Y7OzswQ0FBRSw4REFBQ0M7OzBDQUFPOzs7Ozs7NEJBQWtCOzRCQUFFVCxNQUFNVyxRQUFROzRCQUFDOzs7Ozs7O2tDQUM5Qyw4REFBQ0g7OzswQ0FBRSw4REFBQ0M7OzBDQUFPOzs7Ozs7NEJBQWdCOzRCQUFFVCxNQUFNWSxNQUFNOzs7Ozs7O2tDQUN6Qyw4REFBQ1A7a0VBQWM7Ozs7OztrQ0FDZiw4REFBQ0E7a0VBQWM7OzBDQUNYLDhEQUFDUTtnQ0FBbUNDLFNBQVNaOzBFQUEzQjswQ0FBMkM7Ozs7OzswQ0FDN0QsOERBQUNXO2dDQUFrQ0MsU0FBU1g7MEVBQTFCOzBDQUE2Qzs7Ozs7OzBDQUMvRCw4REFBQ1U7Z0NBQThCQyxTQUFTVjswRUFBdEI7MENBQXlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkQvRTtLQXhGTUw7QUEwRk4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb3ZpZUNhcmQuanN4PzY5YjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5cclxuXHJcbmNvbnN0IE1vdmllQ2FyZCA9ICh7IG1vdmllIH0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcjtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZWVDbGljayA9ICgpID0+IHtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZUNsaWNrID0gKCkgPT4ge1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTW9kaWZ5Q2xpY2sgPSAoKSA9PiB7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxhdG8taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF0by1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+e21vdmllLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VwYXJhdG9yXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cD48c3Ryb25nPkRhdGUgb2YgcmVsZWFzZTo8L3N0cm9uZz4ge21vdmllLnJlbGVhc2VfZGF0ZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD48c3Ryb25nPkR1cmF0aW9uOjwvc3Ryb25nPiB7bW92aWUuZHVyYXRpb259IG1pbnV0ZXM8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD48c3Ryb25nPlJhdGluZzo8L3N0cm9uZz4ge21vdmllLnJhdGluZ308L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcGFyYXRvclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVTZWVDbGlja30+U2VlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZUNsaWNrfT5EZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1tb2RpZnlcIiBvbkNsaWNrPXtoYW5kbGVNb2RpZnlDbGlja30+TW9kaWZ5PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLnBsYXRvLWl0ZW0ge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAyMHB4O1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAxNXB4IDE1cHg7XHJcblx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjNGNhZjUwO1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNlN2Y3ZTQ7XHJcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgYm94LXNoYWRvdyAwLjNzO1xyXG5cdFx0XHRcdFx0bWluLWhlaWdodDogMjIwcHg7XHJcblx0XHRcdFx0XHR3aWR0aDogMzEwcHg7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IFxyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGxlZnQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucGxhdG8taGVhZGVyIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdH1cclxuXHJcbiAgICAgICAgICAgICAgICAuc2VwYXJhdG9yIHtcclxuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHRcdFx0XHR9XHJcblxyXG4gICAgICAgICAgICAgICAgLmJ1dHRvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5idG4tc2VlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYnRuLWRlbGV0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmJ0bi1tb2RpZnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVDYXJkOyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJNb3ZpZUNhcmQiLCJtb3ZpZSIsInJvdXRlciIsImhhbmRsZVNlZUNsaWNrIiwiaGFuZGxlRGVsZXRlQ2xpY2siLCJoYW5kbGVNb2RpZnlDbGljayIsImRpdiIsImgzIiwidGl0bGUiLCJwIiwic3Ryb25nIiwicmVsZWFzZV9kYXRlIiwiZHVyYXRpb24iLCJyYXRpbmciLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/movieCard.jsx\n"));

/***/ })

});