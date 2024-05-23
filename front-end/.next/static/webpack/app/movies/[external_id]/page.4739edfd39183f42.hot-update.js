"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/movies/[external_id]/page",{

/***/ "(app-pages-browser)/./app/movies/[external_id]/page.jsx":
/*!*******************************************!*\
  !*** ./app/movies/[external_id]/page.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SeeMovie; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_loadingScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/loadingScreen */ \"(app-pages-browser)/./components/loadingScreen.jsx\");\n/* harmony import */ var _hooks_Connection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/Connection */ \"(app-pages-browser)/./hooks/Connection.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction SeeMovie() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { external_id } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useParams)();\n    const [movie, setMovie] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({});\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const response_movie = await (0,_hooks_Connection__WEBPACK_IMPORTED_MODULE_2__.get)(\"movies/\".concat(external_id, \"/\"));\n            setMovie(response_movie);\n            setIsLoading(false);\n        };\n        fetchData();\n    }, []);\n    if (isLoading) {\n        return (0,_components_loadingScreen__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mt-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row justify-content-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-12 col-md-8 col-lg-6 col-xl-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-body p-5 text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"mb-4\",\n                                children: \"Movie Details\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"nombre\",\n                                        className: \"form-label\",\n                                        children: \"title\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 37\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        name: \"nombre\",\n                                        id: \"nombre\",\n                                        placeholder: \"Ingrese el nombre del plato\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 37\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 33\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"precio\",\n                                        className: \"form-label\",\n                                        children: \"Precio\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 37\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        name: \"precio\",\n                                        id: \"precio\",\n                                        placeholder: \"Ingrese el precio del plato\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 37\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 33\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"tipo\",\n                                        className: \"form-label\",\n                                        children: \"Tipo\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 37\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        id: \"tipo\",\n                                        className: \"form-select\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 37\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 33\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"d-grid gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        className: \"btn btn-success\",\n                                        children: \"Guardar cambios\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 37\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        href: \"/plato\",\n                                        className: \"btn btn-danger\",\n                                        children: \"Volver\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 37\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 33\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                lineNumber: 32,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n}\n_s(SeeMovie, \"jA84fHl6aQsrLMguefprpHbFQCc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useParams\n    ];\n});\n_c = SeeMovie;\nvar _c;\n$RefreshReg$(_c, \"SeeMovie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9tb3ZpZXMvW2V4dGVybmFsX2lkXS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRXVEO0FBQ2Q7QUFDWjtBQUMwQjtBQUNYO0FBRTdCLFNBQVNPOztJQUNwQixNQUFNQyxTQUFTSiwwREFBU0E7SUFDeEIsTUFBTSxFQUFFSyxXQUFXLEVBQUUsR0FBR04sMERBQVNBO0lBQ2pDLE1BQU0sQ0FBQ08sT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQyxDQUFDO0lBQ3BDLE1BQU0sQ0FBQ00sV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUUzQ0QsZ0RBQVNBLENBQUM7UUFDTixNQUFNUyxZQUFZO1lBQ2QsTUFBTUMsaUJBQWlCLE1BQU1kLHNEQUFHQSxDQUFDLFVBQXNCLE9BQVpRLGFBQVk7WUFDdkRFLFNBQVNJO1lBQ1RGLGFBQWE7UUFDakI7UUFFQUM7SUFDSixHQUFHLEVBQUU7SUFFTCxJQUFJRixXQUFXO1FBQ1gsT0FBT1oscUVBQWFBO0lBQ3hCO0lBRUEscUJBQ0ksOERBQUNnQjtRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNYLDRFQUFDRDtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1gsNEVBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0M7Z0NBQUdELFdBQVU7MENBQU87Ozs7OzswQ0FDakIsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ0U7d0NBQU1DLFNBQVE7d0NBQVNILFdBQVU7a0RBQWE7Ozs7OztrREFDL0MsOERBQUNJO3dDQUNHQyxNQUFLO3dDQUNMQyxJQUFHO3dDQUNIQyxhQUFjOzs7Ozs7Ozs7Ozs7MENBSXRCLDhEQUFDUjtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNFO3dDQUFNQyxTQUFRO3dDQUFTSCxXQUFVO2tEQUFhOzs7Ozs7a0RBQy9DLDhEQUFDSTt3Q0FDR0MsTUFBSzt3Q0FDTEMsSUFBRzt3Q0FDSEMsYUFBYzs7Ozs7Ozs7Ozs7OzBDQUl0Qiw4REFBQ1I7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDRTt3Q0FBTUMsU0FBUTt3Q0FBT0gsV0FBVTtrREFBYTs7Ozs7O2tEQUc3Qyw4REFBQ1E7d0NBQ0dGLElBQUc7d0NBQ0hOLFdBQVU7Ozs7Ozs7Ozs7OzswQ0FLbEIsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ1M7d0NBQU9DLE1BQUs7d0NBQVNWLFdBQVU7a0RBQWtCOzs7Ozs7a0RBR2xELDhEQUFDZixpREFBSUE7d0NBQUMwQixNQUFLO3dDQUFTWCxXQUFVO2tEQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVbkY7R0F0RXdCVjs7UUFDTEgsc0RBQVNBO1FBQ0FELHNEQUFTQTs7O0tBRmJJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9tb3ZpZXMvW2V4dGVybmFsX2lkXS9wYWdlLmpzeD9hMjEyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IExvYWRpbmdTY3JlZW4gZnJvbSBcIkAvY29tcG9uZW50cy9sb2FkaW5nU2NyZWVuXCI7XHJcbmltcG9ydCB7IGdldCB9IGZyb20gXCJAL2hvb2tzL0Nvbm5lY3Rpb25cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMsIHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VlTW92aWUoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgZXh0ZXJuYWxfaWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gICAgY29uc3QgW21vdmllLCBzZXRNb3ZpZV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlX21vdmllID0gYXdhaXQgZ2V0KGBtb3ZpZXMvJHtleHRlcm5hbF9pZH0vYCk7XHJcbiAgICAgICAgICAgIHNldE1vdmllKHJlc3BvbnNlX21vdmllKTtcclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmZXRjaERhdGEoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIExvYWRpbmdTY3JlZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG10LTVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTggY29sLWxnLTYgY29sLXhsLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgcC01IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItNFwiPk1vdmllIERldGFpbHM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5vbWJyZVwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj50aXRsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YEluZ3Jlc2UgZWwgbm9tYnJlIGRlbCBwbGF0b2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByZWNpb1wiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5QcmVjaW88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcmVjaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwcmVjaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BJbmdyZXNlIGVsIHByZWNpbyBkZWwgcGxhdG9gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXBvXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGlwb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRpcG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZ3JpZCBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEd1YXJkYXIgY2FtYmlvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wbGF0b1wiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWb2x2ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiTG9hZGluZ1NjcmVlbiIsImdldCIsIkxpbmsiLCJ1c2VQYXJhbXMiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNlZU1vdmllIiwicm91dGVyIiwiZXh0ZXJuYWxfaWQiLCJtb3ZpZSIsInNldE1vdmllIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2VfbW92aWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwibmFtZSIsImlkIiwicGxhY2Vob2xkZXIiLCJzZWxlY3QiLCJidXR0b24iLCJ0eXBlIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/movies/[external_id]/page.jsx\n"));

/***/ })

});