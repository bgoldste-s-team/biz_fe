"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ContentNetwork.js":
/*!******************************************!*\
  !*** ./src/components/ContentNetwork.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ContentNetwork; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction ContentNetwork(param) {\n    let {} = param;\n    const contentNetworkData = [\n        {\n            title: \"FIrst Article\",\n            description: \"SUPER intersting article about asdfasdf asdf asdf asdf\",\n            url: \"https://asdfasdf.com\",\n            thumbnail_url: \"https://pagesake.com/pagesake_logo.svg\"\n        },\n        {\n            title: \"FIrst Article\",\n            description: \"SUPER intersting article about asdfasdf asdf asdf asdf\",\n            url: \"https://asdfasdf.com\",\n            thumbnail_url: \"https://pagesake.com/pagesake_logo.svg\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-primary p-4 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"primary-content text-center text-3xl\",\n                children: \"Related Content\"\n            }, void 0, false, {\n                fileName: \"/Users/ben/cs_fe/src/components/ContentNetwork.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"grid gap-4 px-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4\",\n                children: contentNetworkData.map((c)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card card-bordered border-primary-content w-80  bg-base-100 text-base-content\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \"c \",\n                                    c.title\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ben/cs_fe/src/components/ContentNetwork.js\",\n                                lineNumber: 24,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: c.thumbnail_url\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/cs_fe/src/components/ContentNetwork.js\",\n                                lineNumber: 25,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ben/cs_fe/src/components/ContentNetwork.js\",\n                        lineNumber: 23,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/ben/cs_fe/src/components/ContentNetwork.js\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ben/cs_fe/src/components/ContentNetwork.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_c = ContentNetwork;\nvar _c;\n$RefreshReg$(_c, \"ContentNetwork\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db250ZW50TmV0d29yay5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ2UsU0FBU0EsZUFBZSxLQUFFLEVBQUU7UUFBSixFQUFFLEdBQUY7SUFDckMsTUFBTUMscUJBQXFCO1FBQ3ZCO1lBQ0VDLE9BQU87WUFDUEMsYUFBYTtZQUNiQyxLQUFLO1lBQ0xDLGVBQWU7UUFDakI7UUFDQTtZQUNFSCxPQUFPO1lBQ1BDLGFBQWE7WUFDYkMsS0FBSztZQUNMQyxlQUFlO1FBQ2pCO0tBRUQ7SUFDSCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUF1Qzs7Ozs7OzBCQUNuRCw4REFBQ0U7Z0JBQUdGLFdBQVc7MEJBQ1pOLG1CQUFtQlMsR0FBRyxDQUFDLENBQUNDLGtCQUN2Qiw4REFBQ0w7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDSzs7b0NBQUc7b0NBQUdELEVBQUVULEtBQUs7Ozs7Ozs7MENBQ2QsOERBQUNXO2dDQUFJQyxLQUFLSCxFQUFFTixhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU12QyxDQUFDO0tBN0J1QkwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29udGVudE5ldHdvcmsuanM/ODg0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRlbnROZXR3b3JrKHt9KSB7XG4gIGNvbnN0IGNvbnRlbnROZXR3b3JrRGF0YSA9IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiRklyc3QgQXJ0aWNsZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTVVBFUiBpbnRlcnN0aW5nIGFydGljbGUgYWJvdXQgYXNkZmFzZGYgYXNkZiBhc2RmIGFzZGZcIixcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vYXNkZmFzZGYuY29tXCIsXG4gICAgICAgIHRodW1ibmFpbF91cmw6IFwiaHR0cHM6Ly9wYWdlc2FrZS5jb20vcGFnZXNha2VfbG9nby5zdmdcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIkZJcnN0IEFydGljbGVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiU1VQRVIgaW50ZXJzdGluZyBhcnRpY2xlIGFib3V0IGFzZGZhc2RmIGFzZGYgYXNkZiBhc2RmXCIsXG4gICAgICAgIHVybDogXCJodHRwczovL2FzZGZhc2RmLmNvbVwiLFxuICAgICAgICB0aHVtYm5haWxfdXJsOiBcImh0dHBzOi8vcGFnZXNha2UuY29tL3BhZ2VzYWtlX2xvZ28uc3ZnXCIsXG4gICAgICB9LFxuXG4gICAgXTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXByaW1hcnkgcC00IFwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInByaW1hcnktY29udGVudCB0ZXh0LWNlbnRlciB0ZXh0LTN4bFwiPlJlbGF0ZWQgQ29udGVudDwvaDI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e1wiZ3JpZCBnYXAtNCBweC0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIHhsOmdyaWQtY29scy00XCJ9PlxuICAgICAgICAgIHtjb250ZW50TmV0d29ya0RhdGEubWFwKChjKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib3JkZXJlZCBib3JkZXItcHJpbWFyeS1jb250ZW50IHctODAgIGJnLWJhc2UtMTAwIHRleHQtYmFzZS1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxoMT5jIHtjLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtjLnRodW1ibmFpbF91cmx9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQ29udGVudE5ldHdvcmsiLCJjb250ZW50TmV0d29ya0RhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidXJsIiwidGh1bWJuYWlsX3VybCIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwidWwiLCJtYXAiLCJjIiwiaDEiLCJpbWciLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ContentNetwork.js\n"));

/***/ })

});