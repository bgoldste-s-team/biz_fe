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

/***/ "./src/components/ProductBank.js":
/*!***************************************!*\
  !*** ./src/components/ProductBank.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductBank; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AmazonProductCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AmazonProductCard */ \"./src/components/AmazonProductCard.js\");\n\n\nfunction ProductBank(param) {\n    let { products  } = param;\n    console.log(products);\n    if (products.length < 1) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-primary-content py-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center text-3xl p-2\",\n                children: \"You Might Like..\"\n            }, void 0, false, {\n                fileName: \"/Users/ben/cs_fe/src/components/ProductBank.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-2\",\n                children: products.map((p)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AmazonProductCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        product: p\n                    }, p.id, false, {\n                        fileName: \"/Users/ben/cs_fe/src/components/ProductBank.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/ben/cs_fe/src/components/ProductBank.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                    src: \"//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&category=amzn_biz_bounty&banner=0K3WH19RMBH6B504RGG2&f=ifr&lc=pf4&linkID=849c376d382b574d3c219951158fc2f2&t=collegeappgen-20&tracking_id=collegeappgen-20\",\n                    width: \"300\",\n                    height: \"250\",\n                    scrolling: \"no\",\n                    border: \"0\",\n                    marginwidth: \"0\",\n                    frameborder: \"0\",\n                    sandbox: \"allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation\"\n                }, void 0, false, {\n                    fileName: \"/Users/ben/cs_fe/src/components/ProductBank.js\",\n                    lineNumber: 21,\n                    columnNumber: 10\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ben/cs_fe/src/components/ProductBank.js\",\n                lineNumber: 21,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ben/cs_fe/src/components/ProductBank.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = ProductBank;\nvar _c;\n$RefreshReg$(_c, \"ProductBank\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0QmFuay5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUErRDtBQUVoRCxTQUFTQyxZQUFZLEtBQVksRUFBRTtRQUFkLEVBQUVDLFNBQVEsRUFBRSxHQUFaO0lBQ2xDQyxRQUFRQyxHQUFHLENBQUNGO0lBQ1osSUFBSUEsU0FBU0csTUFBTSxHQUFHLEdBQUc7UUFDdkIsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUNELHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQTJCOzs7Ozs7MEJBQ3ZDLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDaEJMLFNBQVNPLEdBQUcsQ0FBQyxDQUFDQyxrQkFDYiw4REFBQ1YscUVBQWlCQTt3QkFBWVcsU0FBU0Q7dUJBQWZBLEVBQUVFLEVBQUU7Ozs7Ozs7Ozs7MEJBUWhDLDhEQUFDTjswQkFBSSw0RUFBQ087b0JBQU9DLEtBQUk7b0JBQTZNQyxPQUFNO29CQUFNQyxRQUFPO29CQUFNQyxXQUFVO29CQUFLQyxRQUFPO29CQUFJQyxhQUFZO29CQUFLQyxhQUFZO29CQUFJQyxTQUFROzs7Ozs7Ozs7Ozs7Ozs7OztBQUc5VCxDQUFDO0tBckJ1QnBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RCYW5rLmpzP2QyYjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFtYXpvblByb2R1Y3RDYXJkIGZyb20gXCJAL2NvbXBvbmVudHMvQW1hem9uUHJvZHVjdENhcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdEJhbmsoeyBwcm9kdWN0cyB9KSB7XG4gIGNvbnNvbGUubG9nKHByb2R1Y3RzKTtcbiAgaWYgKHByb2R1Y3RzLmxlbmd0aCA8IDEpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcHJpbWFyeS1jb250ZW50IHB5LTJcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTN4bCBwLTJcIj5Zb3UgTWlnaHQgTGlrZS4uPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC0yIG14LTJcIj5cbiAgICAgIHtwcm9kdWN0cy5tYXAoKHApID0+IChcbiAgICAgICAgPEFtYXpvblByb2R1Y3RDYXJkIGtleT17cC5pZH0gcHJvZHVjdD17cH0gLz5cbiAgICAgICkpfVxuXG4gICAgPC9kaXY+XG4gICB7LyogIDxBbWF6b25Qcm9kdWN0Q2FyZCBwcm9kdWN0PXt7XG4gICAgICAgIHByb2R1Y3RfbmFtZToneW91YXNkZicsXG4gICAgICAgIHVybDonYXNkZidcbiAgICAgfX0vPiovfVxuICAgIDxkaXY+PGlmcmFtZSBzcmM9XCIvL3JjbS1uYS5hbWF6b24tYWRzeXN0ZW0uY29tL2UvY20/bz0xJnA9MTImbD11cjEmY2F0ZWdvcnk9YW16bl9iaXpfYm91bnR5JmJhbm5lcj0wSzNXSDE5Uk1CSDZCNTA0UkdHMiZmPWlmciZsYz1wZjQmbGlua0lEPTg0OWMzNzZkMzgyYjU3NGQzYzIxOTk1MTE1OGZjMmYyJnQ9Y29sbGVnZWFwcGdlbi0yMCZ0cmFja2luZ19pZD1jb2xsZWdlYXBwZ2VuLTIwXCIgd2lkdGg9XCIzMDBcIiBoZWlnaHQ9XCIyNTBcIiBzY3JvbGxpbmc9XCJub1wiIGJvcmRlcj1cIjBcIiBtYXJnaW53aWR0aD1cIjBcIiAgZnJhbWVib3JkZXI9XCIwXCIgc2FuZGJveD1cImFsbG93LXNjcmlwdHMgYWxsb3ctc2FtZS1vcmlnaW4gYWxsb3ctcG9wdXBzIGFsbG93LXRvcC1uYXZpZ2F0aW9uLWJ5LXVzZXItYWN0aXZhdGlvblwiPjwvaWZyYW1lPjwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSBcbiJdLCJuYW1lcyI6WyJBbWF6b25Qcm9kdWN0Q2FyZCIsIlByb2R1Y3RCYW5rIiwicHJvZHVjdHMiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJtYXAiLCJwIiwicHJvZHVjdCIsImlkIiwiaWZyYW1lIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJzY3JvbGxpbmciLCJib3JkZXIiLCJtYXJnaW53aWR0aCIsImZyYW1lYm9yZGVyIiwic2FuZGJveCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ProductBank.js\n"));

/***/ })

});