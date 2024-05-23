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

/***/ "(app-pages-browser)/./components/movies.jsx":
/*!*******************************!*\
  !*** ./components/movies.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"(app-pages-browser)/./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _loadingScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadingScreen */ \"(app-pages-browser)/./components/loadingScreen.jsx\");\n/* harmony import */ var _hooks_Connection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/Connection */ \"(app-pages-browser)/./hooks/Connection.js\");\n/* harmony import */ var _movieCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movieCard */ \"(app-pages-browser)/./components/movieCard.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Movies = ()=>{\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const response_movies = await (0,_hooks_Connection__WEBPACK_IMPORTED_MODULE_4__.get)(\"movies/\");\n            setMovies(response_movies);\n            console.log(response_movies);\n            setIsLoading(false);\n        };\n        if (true) {\n            fetchData();\n        }\n    }, []);\n    if (isLoading) {\n        return (0,_loadingScreen__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-ab9974267a566b63\" + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"jsx-ab9974267a566b63\",\n                children: \"MOVIES\"\n            }, void 0, false, {\n                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movies.jsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-ab9974267a566b63\" + \" \" + \"plato-list\",\n                children: movies.map((movie, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_movieCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        movie: movie\n                    }, i, false, {\n                        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movies.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movies.jsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"ab9974267a566b63\",\n                children: \".plato-list.jsx-ab9974267a566b63{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:left;-webkit-justify-content:left;-moz-box-pack:left;-ms-flex-pack:left;justify-content:left;margin-bottom:20px}h1.jsx-ab9974267a566b63{text-align:center;margin-bottom:20px;margin-top:1rem}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\WorkSpace\\\\CRUD-DJANGO-NEXTJS\\\\front-end\\\\components\\\\movies.jsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Movies, \"BLz+Dza675Lqh5QFvDsUJLyjzvs=\");\n_c = Movies;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movies);\nvar _c;\n$RefreshReg$(_c, \"Movies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbW92aWVzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFNEM7QUFDQTtBQUNIO0FBQ0w7QUFHcEMsTUFBTUssU0FBUzs7SUFDWCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDTyxRQUFRQyxVQUFVLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFFdkNELGdEQUFTQSxDQUFDO1FBQ04sTUFBTVUsWUFBWTtZQUNkLE1BQU1DLGtCQUFrQixNQUFNUixzREFBR0EsQ0FBQztZQUNsQ00sVUFBVUU7WUFDVkMsUUFBUUMsR0FBRyxDQUFDRjtZQUNaSixhQUFhO1FBQ2pCO1FBRUEsSUFBSSxJQUE2QixFQUFFO1lBQy9CRztRQUNKO0lBQ0osR0FBRyxFQUFFO0lBRUwsSUFBSUosV0FBVztRQUNYLE9BQU9KLDBEQUFhQTtJQUN4QjtJQUVBLHFCQUNJLDhEQUFDWTtrREFBYzs7MEJBQ1gsOERBQUNDOzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDRDswREFBYzswQkFDVk4sT0FBT1EsR0FBRyxDQUFDLENBQUNDLE9BQU9DLGtCQUNoQiw4REFBQ2Qsa0RBQVNBO3dCQUFTYSxPQUFPQTt1QkFBVkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJwQztHQTdDTWI7S0FBQUE7QUErQ04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb3ZpZXMuanN4P2JlODgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2FkaW5nU2NyZWVuIGZyb20gXCIuL2xvYWRpbmdTY3JlZW5cIjtcclxuaW1wb3J0IHsgZ2V0IH0gZnJvbSBcIkAvaG9va3MvQ29ubmVjdGlvblwiO1xyXG5pbXBvcnQgTW92aWVDYXJkIGZyb20gXCIuL21vdmllQ2FyZFwiO1xyXG5cclxuXHJcbmNvbnN0IE1vdmllcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFttb3ZpZXMsIHNldE1vdmllc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlX21vdmllcyA9IGF3YWl0IGdldChcIm1vdmllcy9cIik7XHJcbiAgICAgICAgICAgIHNldE1vdmllcyhyZXNwb25zZV9tb3ZpZXMpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZV9tb3ZpZXMpO1xyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIExvYWRpbmdTY3JlZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxoMT5NT1ZJRVM8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXRvLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgIHttb3ZpZXMubWFwKChtb3ZpZSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxNb3ZpZUNhcmQga2V5PXtpfSBtb3ZpZT17bW92aWV9IC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5wbGF0by1saXN0IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVzOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxvYWRpbmdTY3JlZW4iLCJnZXQiLCJNb3ZpZUNhcmQiLCJNb3ZpZXMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJtb3ZpZXMiLCJzZXRNb3ZpZXMiLCJmZXRjaERhdGEiLCJyZXNwb25zZV9tb3ZpZXMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaDEiLCJtYXAiLCJtb3ZpZSIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/movies.jsx\n"));

/***/ })

});