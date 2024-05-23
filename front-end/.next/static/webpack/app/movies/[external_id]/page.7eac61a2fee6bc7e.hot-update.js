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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SeeMovie; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_loadingScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/loadingScreen */ \"(app-pages-browser)/./components/loadingScreen.jsx\");\n/* harmony import */ var _hooks_Connection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/Connection */ \"(app-pages-browser)/./hooks/Connection.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction SeeMovie() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { external_id } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams)();\n    const [movie, setMovie] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({});\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const response_movie = await (0,_hooks_Connection__WEBPACK_IMPORTED_MODULE_2__.get)(\"movies/\".concat(external_id, \"/\"));\n            setMovie(response_movie);\n            setIsLoading(false);\n        };\n        fetchData();\n    }, []);\n    if (isLoading) {\n        return (0,_components_loadingScreen__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mt-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row justify-content-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-12 col-md-8 col-lg-6 col-xl-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-body p-5 text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"mb-4\",\n                                children: \"Movie Details\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"form-label\",\n                                        children: \"Title:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"form-control\",\n                                        children: movie.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"form-label\",\n                                        children: \"Release Date:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"form-control\",\n                                        children: movie.release_date\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"form-label\",\n                                        children: \"Duration (minutes):\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"form-control\",\n                                        children: movie.duration\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"form-label\",\n                                        children: \"Duration (minutes):\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"form-control\",\n                                        children: movie.duration\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"form-label\",\n                                        children: \"Rating:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"form-control\",\n                                        children: movie.rating\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"form-label\",\n                                        children: \"Director(s):\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"form-control\",\n                                        children: \"asd\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"form-label\",\n                                        children: \"Genre(s):\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"form-control\",\n                                        children: \"asd\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"d-grid gap-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn btn-primary\",\n                                    onClick: router.back(),\n                                    children: \"Volver\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 33\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                lineNumber: 31,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n            lineNumber: 30,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\n_s(SeeMovie, \"jA84fHl6aQsrLMguefprpHbFQCc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams\n    ];\n});\n_c = SeeMovie;\nvar _c;\n$RefreshReg$(_c, \"SeeMovie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9tb3ZpZXMvW2V4dGVybmFsX2lkXS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFdUQ7QUFDZDtBQUNjO0FBQ1g7QUFFN0IsU0FBU007O0lBQ3BCLE1BQU1DLFNBQVNKLDBEQUFTQTtJQUN4QixNQUFNLEVBQUVLLFdBQVcsRUFBRSxHQUFHTiwwREFBU0E7SUFDakMsTUFBTSxDQUFDTyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDLENBQUM7SUFDcEMsTUFBTSxDQUFDTSxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDO0lBRTNDRCxnREFBU0EsQ0FBQztRQUNOLE1BQU1TLFlBQVk7WUFDZCxNQUFNQyxpQkFBaUIsTUFBTWIsc0RBQUdBLENBQUMsVUFBc0IsT0FBWk8sYUFBWTtZQUN2REUsU0FBU0k7WUFDVEYsYUFBYTtRQUNqQjtRQUVBQztJQUNKLEdBQUcsRUFBRTtJQUVMLElBQUlGLFdBQVc7UUFDWCxPQUFPWCxxRUFBYUE7SUFDeEI7SUFFQSxxQkFDSSw4REFBQ2U7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDWCw0RUFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNDO2dDQUFHRCxXQUFVOzBDQUFPOzs7Ozs7MENBQ3JCLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNFO3dDQUFNRixXQUFVO2tEQUFhOzs7Ozs7a0RBQzlCLDhEQUFDRzt3Q0FBRUgsV0FBVTtrREFBZ0JQLE1BQU1XLEtBQUs7Ozs7Ozs7Ozs7OzswQ0FHNUMsOERBQUNMO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ0U7d0NBQU1GLFdBQVU7a0RBQWE7Ozs7OztrREFDOUIsOERBQUNHO3dDQUFFSCxXQUFVO2tEQUFnQlAsTUFBTVksWUFBWTs7Ozs7Ozs7Ozs7OzBDQUduRCw4REFBQ047Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDRTt3Q0FBTUYsV0FBVTtrREFBYTs7Ozs7O2tEQUM5Qiw4REFBQ0c7d0NBQUVILFdBQVU7a0RBQWdCUCxNQUFNYSxRQUFROzs7Ozs7Ozs7Ozs7MENBRy9DLDhEQUFDUDtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNFO3dDQUFNRixXQUFVO2tEQUFhOzs7Ozs7a0RBQzlCLDhEQUFDRzt3Q0FBRUgsV0FBVTtrREFBZ0JQLE1BQU1hLFFBQVE7Ozs7Ozs7Ozs7OzswQ0FHL0MsOERBQUNQO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ0U7d0NBQU1GLFdBQVU7a0RBQWE7Ozs7OztrREFDOUIsOERBQUNHO3dDQUFFSCxXQUFVO2tEQUFnQlAsTUFBTWMsTUFBTTs7Ozs7Ozs7Ozs7OzBDQUc3Qyw4REFBQ1I7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDRTt3Q0FBTUYsV0FBVTtrREFBYTs7Ozs7O2tEQUM5Qiw4REFBQ0c7d0NBQUVILFdBQVU7a0RBQWU7Ozs7Ozs7Ozs7OzswQ0FHaEMsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ0U7d0NBQU1GLFdBQVU7a0RBQWE7Ozs7OztrREFDOUIsOERBQUNHO3dDQUFFSCxXQUFVO2tEQUFlOzs7Ozs7Ozs7Ozs7MENBR2hDLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDWCw0RUFBQ1E7b0NBQU9SLFdBQVU7b0NBQWtCUyxTQUFTbEIsT0FBT21CLElBQUk7OENBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVNUY7R0F6RXdCcEI7O1FBQ0xILHNEQUFTQTtRQUNBRCxzREFBU0E7OztLQUZiSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbW92aWVzL1tleHRlcm5hbF9pZF0vcGFnZS5qc3g/YTIxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBMb2FkaW5nU2NyZWVuIGZyb20gXCJAL2NvbXBvbmVudHMvbG9hZGluZ1NjcmVlblwiO1xyXG5pbXBvcnQgeyBnZXQgfSBmcm9tIFwiQC9ob29rcy9Db25uZWN0aW9uXCI7XHJcbmltcG9ydCB7IHVzZVBhcmFtcywgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWVNb3ZpZSgpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBleHRlcm5hbF9pZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgICBjb25zdCBbbW92aWUsIHNldE1vdmllXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VfbW92aWUgPSBhd2FpdCBnZXQoYG1vdmllcy8ke2V4dGVybmFsX2lkfS9gKTtcclxuICAgICAgICAgICAgc2V0TW92aWUocmVzcG9uc2VfbW92aWUpO1xyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGlmIChpc0xvYWRpbmcpIHtcclxuICAgICAgICByZXR1cm4gTG9hZGluZ1NjcmVlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXQtNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtOCBjb2wtbGctNiBjb2wteGwtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBwLTUgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi00XCI+TW92aWUgRGV0YWlsczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlRpdGxlOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+e21vdmllLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+UmVsZWFzZSBEYXRlOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+e21vdmllLnJlbGVhc2VfZGF0ZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPkR1cmF0aW9uIChtaW51dGVzKTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPnttb3ZpZS5kdXJhdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPkR1cmF0aW9uIChtaW51dGVzKTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPnttb3ZpZS5kdXJhdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlJhdGluZzo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPnttb3ZpZS5yYXRpbmd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5EaXJlY3RvcihzKTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPmFzZDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+R2VucmUocyk6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5hc2Q8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZ3JpZCBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17cm91dGVyLmJhY2soKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZvbHZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiTG9hZGluZ1NjcmVlbiIsImdldCIsInVzZVBhcmFtcyIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2VlTW92aWUiLCJyb3V0ZXIiLCJleHRlcm5hbF9pZCIsIm1vdmllIiwic2V0TW92aWUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJmZXRjaERhdGEiLCJyZXNwb25zZV9tb3ZpZSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwibGFiZWwiLCJwIiwidGl0bGUiLCJyZWxlYXNlX2RhdGUiLCJkdXJhdGlvbiIsInJhdGluZyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJiYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/movies/[external_id]/page.jsx\n"));

/***/ })

});