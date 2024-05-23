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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SeeMovie; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_loadingScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/loadingScreen */ \"(app-pages-browser)/./components/loadingScreen.jsx\");\n/* harmony import */ var _hooks_Connection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/Connection */ \"(app-pages-browser)/./hooks/Connection.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction SeeMovie() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { external_id } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams)();\n    const [movie, setMovie] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({});\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const response_movie = await (0,_hooks_Connection__WEBPACK_IMPORTED_MODULE_2__.get)(\"movies/\".concat(external_id, \"/\"));\n            setMovie(response_movie);\n            setIsLoading(false);\n        };\n        fetchData();\n    }, []);\n    if (isLoading) {\n        return (0,_components_loadingScreen__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mt-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row justify-content-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-12 col-md-8 col-lg-6 col-xl-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-body p-5 text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"mb-4\",\n                                children: \"Modificar Plato\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mb-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"nombre\",\n                                                className: \"form-label\",\n                                                children: \"Nombre\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                name: \"nombre\",\n                                                id: \"nombre\",\n                                                placeholder: \"Ingrese el nombre del plato\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                                lineNumber: 38,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mb-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"precio\",\n                                                className: \"form-label\",\n                                                children: \"Precio\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                                lineNumber: 46,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                name: \"precio\",\n                                                id: \"precio\",\n                                                placeholder: \"Ingrese el precio del plato\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                                lineNumber: 47,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mb-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"tipo\",\n                                                className: \"form-label\",\n                                                children: \"Tipo\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                                lineNumber: 55,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                id: \"tipo\",\n                                                className: \"form-select\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"d-grid gap-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                type: \"submit\",\n                                                className: \"btn btn-success\",\n                                                children: \"Guardar cambios\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                                                href: \"/plato\",\n                                                className: \"btn btn-danger\",\n                                                children: \"Volver\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n                lineNumber: 31,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n            lineNumber: 30,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\app\\\\movies\\\\[external_id]\\\\page.jsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\n_s(SeeMovie, \"jA84fHl6aQsrLMguefprpHbFQCc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams\n    ];\n});\n_c = SeeMovie;\nvar _c;\n$RefreshReg$(_c, \"SeeMovie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9tb3ZpZXMvW2V4dGVybmFsX2lkXS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFdUQ7QUFDZDtBQUNjO0FBQ1g7QUFFN0IsU0FBU007O0lBQ3BCLE1BQU1DLFNBQVNKLDBEQUFTQTtJQUN4QixNQUFNLEVBQUVLLFdBQVcsRUFBRSxHQUFHTiwwREFBU0E7SUFDakMsTUFBTSxDQUFDTyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDLENBQUM7SUFDcEMsTUFBTSxDQUFDTSxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDO0lBRTNDRCxnREFBU0EsQ0FBQztRQUNOLE1BQU1TLFlBQVk7WUFDZCxNQUFNQyxpQkFBaUIsTUFBTWIsc0RBQUdBLENBQUMsVUFBc0IsT0FBWk8sYUFBWTtZQUN2REUsU0FBU0k7WUFDVEYsYUFBYTtRQUNqQjtRQUVBQztJQUNKLEdBQUcsRUFBRTtJQUVMLElBQUlGLFdBQVc7UUFDWCxPQUFPWCxxRUFBYUE7SUFDeEI7SUFFQSxxQkFDSSw4REFBQ2U7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDWCw0RUFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNDO2dDQUFHRCxXQUFVOzBDQUFPOzs7Ozs7MENBQ3JCLDhEQUFDRTs7a0RBQ0csOERBQUNIO3dDQUFJQyxXQUFVOzswREFDWCw4REFBQ0c7Z0RBQU1DLFNBQVE7Z0RBQVNKLFdBQVU7MERBQWE7Ozs7OzswREFDL0MsOERBQUNLO2dEQUNHQyxNQUFLO2dEQUNMQyxJQUFHO2dEQUNIQyxhQUFjOzs7Ozs7Ozs7Ozs7a0RBSXRCLDhEQUFDVDt3Q0FBSUMsV0FBVTs7MERBQ1gsOERBQUNHO2dEQUFNQyxTQUFRO2dEQUFTSixXQUFVOzBEQUFhOzs7Ozs7MERBQy9DLDhEQUFDSztnREFDR0MsTUFBSztnREFDTEMsSUFBRztnREFDSEMsYUFBYzs7Ozs7Ozs7Ozs7O2tEQUl0Qiw4REFBQ1Q7d0NBQUlDLFdBQVU7OzBEQUNYLDhEQUFDRztnREFBTUMsU0FBUTtnREFBT0osV0FBVTswREFBYTs7Ozs7OzBEQUc3Qyw4REFBQ1M7Z0RBQ0dGLElBQUc7Z0RBQ0hQLFdBQVU7Ozs7Ozs7Ozs7OztrREFLbEIsOERBQUNEO3dDQUFJQyxXQUFVOzswREFDWCw4REFBQ1U7Z0RBQU9DLE1BQUs7Z0RBQVNYLFdBQVU7MERBQWtCOzs7Ozs7MERBR2xELDhEQUFDWTtnREFBS0MsTUFBSztnREFBU2IsV0FBVTswREFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV25GO0dBeEV3QlY7O1FBQ0xILHNEQUFTQTtRQUNBRCxzREFBU0E7OztLQUZiSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbW92aWVzL1tleHRlcm5hbF9pZF0vcGFnZS5qc3g/YTIxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBMb2FkaW5nU2NyZWVuIGZyb20gXCJAL2NvbXBvbmVudHMvbG9hZGluZ1NjcmVlblwiO1xyXG5pbXBvcnQgeyBnZXQgfSBmcm9tIFwiQC9ob29rcy9Db25uZWN0aW9uXCI7XHJcbmltcG9ydCB7IHVzZVBhcmFtcywgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWVNb3ZpZSgpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBleHRlcm5hbF9pZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgICBjb25zdCBbbW92aWUsIHNldE1vdmllXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VfbW92aWUgPSBhd2FpdCBnZXQoYG1vdmllcy8ke2V4dGVybmFsX2lkfS9gKTtcclxuICAgICAgICAgICAgc2V0TW92aWUocmVzcG9uc2VfbW92aWUpO1xyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGlmIChpc0xvYWRpbmcpIHtcclxuICAgICAgICByZXR1cm4gTG9hZGluZ1NjcmVlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXQtNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtOCBjb2wtbGctNiBjb2wteGwtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBwLTUgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi00XCI+TW9kaWZpY2FyIFBsYXRvPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5vbWJyZVwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5Ob21icmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJub21icmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJub21icmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BJbmdyZXNlIGVsIG5vbWJyZSBkZWwgcGxhdG9gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwcmVjaW9cIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+UHJlY2lvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJlY2lvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicHJlY2lvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgSW5ncmVzZSBlbCBwcmVjaW8gZGVsIHBsYXRvYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGlwb1wiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpcG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0aXBvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWdyaWQgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHdWFyZGFyIGNhbWJpb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcGxhdG9cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVm9sdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbIkxvYWRpbmdTY3JlZW4iLCJnZXQiLCJ1c2VQYXJhbXMiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNlZU1vdmllIiwicm91dGVyIiwiZXh0ZXJuYWxfaWQiLCJtb3ZpZSIsInNldE1vdmllIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2VfbW92aWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImZvcm0iLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsIm5hbWUiLCJpZCIsInBsYWNlaG9sZGVyIiwic2VsZWN0IiwiYnV0dG9uIiwidHlwZSIsIkxpbmsiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/movies/[external_id]/page.jsx\n"));

/***/ })

});