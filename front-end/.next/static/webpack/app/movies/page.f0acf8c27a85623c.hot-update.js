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

/***/ "(app-pages-browser)/./hooks/Connection.js":
/*!*****************************!*\
  !*** ./hooks/Connection.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   get: function() { return /* binding */ get; },\n/* harmony export */   send: function() { return /* binding */ send; },\n/* harmony export */   update: function() { return /* binding */ update; },\n/* harmony export */   url_api: function() { return /* binding */ url_api; }\n/* harmony export */ });\nlet URL = \"http://localhost:8000/movies/api/v1/\";\nfunction url_api() {\n    return URL;\n}\nasync function get(recurso) {\n    const headers = {\n        \"Content-type\": \"application/json\"\n    };\n    const response = await fetch(URL + recurso, {\n        cache: \"no-store\",\n        method: \"GET\",\n        headers: headers\n    });\n    const responseData = await response.json();\n    return responseData;\n}\nasync function update(recurso, data, token) {\n    const headers = {\n        Accept: \"application/json\",\n        \"Content-type\": \"application/json\",\n        token: token\n    };\n    const response = await fetch(URL + recurso, {\n        cache: \"no-store\",\n        method: \"PATCH\",\n        headers: headers,\n        body: JSON.stringify(data)\n    });\n    const responseData = await response.json();\n    return responseData;\n}\nasync function send(recurso, data, token) {\n    const headers = {\n        Accept: \"application/json\",\n        \"Content-type\": \"application/json\",\n        token: token\n    };\n    const response = await fetch(URL + recurso, {\n        cache: \"no-store\",\n        method: \"POST\",\n        headers: headers,\n        body: JSON.stringify(data)\n    });\n    const responseData = await response.json();\n    return responseData;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2hvb2tzL0Nvbm5lY3Rpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQUlBLE1BQU07QUFFSCxTQUFTQztJQUNkLE9BQU9EO0FBQ1Q7QUFFTyxlQUFlRSxJQUFJQyxPQUFPO0lBQy9CLE1BQU1DLFVBQVU7UUFDZCxnQkFBZ0I7SUFDbEI7SUFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU1OLE1BQU1HLFNBQVM7UUFDMUNJLE9BQU87UUFDUEMsUUFBUTtRQUNSSixTQUFTQTtJQUNYO0lBQ0EsTUFBTUssZUFBZSxNQUFNSixTQUFTSyxJQUFJO0lBQ3hDLE9BQU9EO0FBQ1Q7QUFFTyxlQUFlRSxPQUFPUixPQUFPLEVBQUVTLElBQUksRUFBRUMsS0FBSztJQUMvQyxNQUFNVCxVQUFVO1FBQ2RVLFFBQVE7UUFDUixnQkFBZ0I7UUFDaEJELE9BQU9BO0lBQ1Q7SUFFQSxNQUFNUixXQUFXLE1BQU1DLE1BQU1OLE1BQU1HLFNBQVM7UUFDMUNJLE9BQU87UUFDUEMsUUFBUTtRQUNSSixTQUFTQTtRQUNUVyxNQUFNQyxLQUFLQyxTQUFTLENBQUNMO0lBQ3ZCO0lBRUEsTUFBTUgsZUFBZSxNQUFNSixTQUFTSyxJQUFJO0lBQ3hDLE9BQU9EO0FBQ1Q7QUFFTyxlQUFlUyxLQUFLZixPQUFPLEVBQUVTLElBQUksRUFBRUMsS0FBSztJQUM3QyxNQUFNVCxVQUFVO1FBQ2RVLFFBQVE7UUFDUixnQkFBZ0I7UUFDaEJELE9BQU9BO0lBQ1Q7SUFFQSxNQUFNUixXQUFXLE1BQU1DLE1BQU1OLE1BQU1HLFNBQVM7UUFDMUNJLE9BQU87UUFDUEMsUUFBUTtRQUNSSixTQUFTQTtRQUNUVyxNQUFNQyxLQUFLQyxTQUFTLENBQUNMO0lBQ3ZCO0lBRUEsTUFBTUgsZUFBZSxNQUFNSixTQUFTSyxJQUFJO0lBQ3hDLE9BQU9EO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvQ29ubmVjdGlvbi5qcz81NWM5Il0sInNvdXJjZXNDb250ZW50IjpbImxldCBVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9tb3ZpZXMvYXBpL3YxL1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVybF9hcGkoKSB7XHJcbiAgcmV0dXJuIFVSTDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldChyZWN1cnNvKSB7XHJcbiAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgfTtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFVSTCArIHJlY3Vyc28sIHtcclxuICAgIGNhY2hlOiBcIm5vLXN0b3JlXCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICByZXR1cm4gcmVzcG9uc2VEYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlKHJlY3Vyc28sIGRhdGEsIHRva2VuKSB7XHJcbiAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIHRva2VuOiB0b2tlbixcclxuICB9O1xyXG5cclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFVSTCArIHJlY3Vyc28sIHtcclxuICAgIGNhY2hlOiBcIm5vLXN0b3JlXCIsXHJcbiAgICBtZXRob2Q6IFwiUEFUQ0hcIixcclxuICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIHJldHVybiByZXNwb25zZURhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kKHJlY3Vyc28sIGRhdGEsIHRva2VuKSB7XHJcbiAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIHRva2VuOiB0b2tlbixcclxuICB9O1xyXG5cclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFVSTCArIHJlY3Vyc28sIHtcclxuICAgIGNhY2hlOiBcIm5vLXN0b3JlXCIsXHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcclxufVxyXG4iXSwibmFtZXMiOlsiVVJMIiwidXJsX2FwaSIsImdldCIsInJlY3Vyc28iLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJmZXRjaCIsImNhY2hlIiwibWV0aG9kIiwicmVzcG9uc2VEYXRhIiwianNvbiIsInVwZGF0ZSIsImRhdGEiLCJ0b2tlbiIsIkFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./hooks/Connection.js\n"));

/***/ })

});