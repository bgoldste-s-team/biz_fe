"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[slug]",{

/***/ "./src/components/AdBlock.js":
/*!***********************************!*\
  !*** ./src/components/AdBlock.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst AdBlock = (param)=>{\n    let { name , page , site , index  } = param;\n    console.log(\"adblock\", page, site, index, name);\n    const variants = {\n        variant1: {\n            // styling: \"bg-gradient-to-r from-black via-purple-800 to-black text-white p-8 text-center\",\n            styling: \"bg-neutral-content text-neutral p-8 text-center\",\n            header1: \"Don't Just Browse The Web.\",\n            header2: \"Create It.\",\n            subheader: \"\",\n            body: \"\",\n            cta1_link: \"\",\n            cta2_link: \"\",\n            cta1_text: \"\",\n            cta2_text: \"\"\n        },\n        variant2: {\n            styling: \"bg-neutral-content text-neutral p-8 text-center\",\n            header1: \"Revenue Generating Websites.\",\n            header2: \"Ready in seconds.\",\n            subheader: \"\",\n            body: \"\",\n            cta1_link: \"\",\n            cta2_link: \"\",\n            cta1_text: \"\",\n            cta2_text: \"\"\n        }\n    };\n    const useVariant2 = index % 2 === 0;\n    const variant = index % 2 === 1 ? \"variant1\" : \"variant2\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        \"data-theme\": \"pagesake\",\n        className: \"hero \".concat(variants[variant].styling, \" \"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"hero-content flex-col   items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/pagesake_logo.svg\",\n                        className: \"btn btn-ghost\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                        lineNumber: 42,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-4xl \",\n                            children: [\n                                variants[variant].header1,\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 75\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-green-200  font-bold mt-4\",\n                                    children: variants[variant].header2\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"py-2\",\n                            children: \"Pagesake lets you build complete websites, with content, monetization options, and beautiful design, all in seconds. For free. \"\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                            lineNumber: 56,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"py-2\",\n                            children: \"See what the savviest creators on the web are already doing, checkout Pagesake today! \"\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                            lineNumber: 57,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center gap-4 mt-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn btn-secondary btn-outline\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"https://pagesake.com\",\n                                        children: \"Learn More\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 75\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn btn-primary\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"https://pagesake.com\",\n                                        children: \"Start for Free\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 61\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                            lineNumber: 58,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                    lineNumber: 52,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n            lineNumber: 40,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, undefined);\n};\n_c = AdBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdBlock);\nvar _c;\n$RefreshReg$(_c, \"AdBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BZEJsb2NrLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBQ0c7QUFFN0IsTUFBTUUsVUFBVSxTQUErQjtRQUE5QixFQUFDQyxLQUFJLEVBQUVDLEtBQUksRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUM7SUFDdENDLFFBQVFDLEdBQUcsQ0FBQyxXQUFXSixNQUFNQyxNQUFNQyxPQUFPSDtJQUcxQyxNQUFNTSxXQUFXO1FBQ2JDLFVBQVU7WUFDTiw2RkFBNkY7WUFDN0ZDLFNBQVE7WUFDUkMsU0FBUTtZQUNSQyxTQUFRO1lBQ1JDLFdBQVU7WUFDVkMsTUFBTTtZQUNOQyxXQUFVO1lBQ1ZDLFdBQVU7WUFDVkMsV0FBVTtZQUNWQyxXQUFVO1FBQ2Q7UUFDQUMsVUFBVTtZQUNIVCxTQUFTO1lBQ1pDLFNBQVE7WUFDUkMsU0FBUTtZQUNSQyxXQUFVO1lBQ1ZDLE1BQU07WUFDTkMsV0FBVTtZQUNWQyxXQUFVO1lBQ1ZDLFdBQVU7WUFDVkMsV0FBVTtRQUNkO0lBQ0o7SUFFQSxNQUFNRSxjQUFjZixRQUFRLE1BQU07SUFFbEMsTUFBTWdCLFVBQVVoQixRQUFRLE1BQU0sSUFBSSxhQUFZLFVBQVU7SUFDeEQscUJBQ0ksOERBQUNpQjtRQUFJQyxjQUFXO1FBQVdDLFdBQVcsUUFBa0MsT0FBMUJoQixRQUFRLENBQUNhLFFBQVEsQ0FBQ1gsT0FBTyxFQUFDO2tCQUVwRSw0RUFBQ1k7WUFBSUUsV0FBVTs7OEJBQ1gsOERBQUNGO29CQUFJRSxXQUFXOzhCQUNaLDRFQUFDQzt3QkFBSUMsS0FBSzt3QkFBc0JGLFdBQVU7Ozs7Ozs7Ozs7OzhCQVU5Qyw4REFBQ0Y7O3NDQUNHLDhEQUFDSzs0QkFBR0gsV0FBVTs7Z0NBQWFoQixRQUFRLENBQUNhLFFBQVEsQ0FBQ1YsT0FBTztnQ0FBQzs4Q0FBQyw4REFBQ2lCOzs7Ozs4Q0FDbkQsOERBQUNDO29DQUFLTCxXQUFXOzhDQUFtQ2hCLFFBQVEsQ0FBQ2EsUUFBUSxDQUFDVCxPQUFPOzs7Ozs7Ozs7Ozs7c0NBRWpGLDhEQUFDa0I7NEJBQUVOLFdBQVU7c0NBQU87Ozs7OztzQ0FDcEIsOERBQUNNOzRCQUFFTixXQUFVO3NDQUFPOzs7Ozs7c0NBQ3BCLDhEQUFDRjs0QkFBSUUsV0FBVzs7OENBQ1osOERBQUNPO29DQUFPUCxXQUFVOzhDQUFnQyw0RUFBQ3hCLGtEQUFJQTt3Q0FBQ2dDLE1BQU07a0RBQXdCOzs7Ozs7Ozs7Ozs4Q0FDdEYsOERBQUNEO29DQUFPUCxXQUFVOzhDQUFrQiw0RUFBQ3hCLGtEQUFJQTt3Q0FBQ2dDLE1BQU07a0RBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2hHO0tBL0RNL0I7QUFpRU4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWRCbG9jay5qcz9mNWI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBBZEJsb2NrID0gKHtuYW1lLCBwYWdlLCBzaXRlLCBpbmRleH0pID0+IHtcbiAgICBjb25zb2xlLmxvZygnYWRibG9jaycsIHBhZ2UsIHNpdGUsIGluZGV4LCBuYW1lKVxuXG5cbiAgICBjb25zdCB2YXJpYW50cyA9IHtcbiAgICAgICAgdmFyaWFudDE6IHtcbiAgICAgICAgICAgIC8vIHN0eWxpbmc6IFwiYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsYWNrIHZpYS1wdXJwbGUtODAwIHRvLWJsYWNrIHRleHQtd2hpdGUgcC04IHRleHQtY2VudGVyXCIsXG4gICAgICAgICAgICBzdHlsaW5nOlwiYmctbmV1dHJhbC1jb250ZW50IHRleHQtbmV1dHJhbCBwLTggdGV4dC1jZW50ZXJcIixcbiAgICAgICAgICAgIGhlYWRlcjE6XCJEb24ndCBKdXN0IEJyb3dzZSBUaGUgV2ViLlwiLFxuICAgICAgICAgICAgaGVhZGVyMjpcIkNyZWF0ZSBJdC5cIixcbiAgICAgICAgICAgIHN1YmhlYWRlcjpcIlwiLFxuICAgICAgICAgICAgYm9keTogXCJcIixcbiAgICAgICAgICAgIGN0YTFfbGluazpcIlwiLFxuICAgICAgICAgICAgY3RhMl9saW5rOlwiXCIsXG4gICAgICAgICAgICBjdGExX3RleHQ6XCJcIixcbiAgICAgICAgICAgIGN0YTJfdGV4dDpcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIHZhcmlhbnQyOiB7XG4gICAgICAgICAgICAgICBzdHlsaW5nOiBcImJnLW5ldXRyYWwtY29udGVudCB0ZXh0LW5ldXRyYWwgcC04IHRleHQtY2VudGVyXCIsXG4gICAgICAgICAgICBoZWFkZXIxOlwiUmV2ZW51ZSBHZW5lcmF0aW5nIFdlYnNpdGVzLlwiLFxuICAgICAgICAgICAgaGVhZGVyMjpcIlJlYWR5IGluIHNlY29uZHMuXCIsXG4gICAgICAgICAgICBzdWJoZWFkZXI6XCJcIixcbiAgICAgICAgICAgIGJvZHk6IFwiXCIsXG4gICAgICAgICAgICBjdGExX2xpbms6XCJcIixcbiAgICAgICAgICAgIGN0YTJfbGluazpcIlwiLFxuICAgICAgICAgICAgY3RhMV90ZXh0OlwiXCIsXG4gICAgICAgICAgICBjdGEyX3RleHQ6XCJcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdXNlVmFyaWFudDIgPSBpbmRleCAlIDIgPT09IDAgXG5cbiAgICBjb25zdCB2YXJpYW50ID0gaW5kZXggJSAyID09PSAxID8gJ3ZhcmlhbnQxJyA6J3ZhcmlhbnQyJ1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgZGF0YS10aGVtZT1cInBhZ2VzYWtlXCIgY2xhc3NOYW1lPXtgaGVybyAke3ZhcmlhbnRzW3ZhcmlhbnRdLnN0eWxpbmd9IGB9PlxuICAgICAgICAgICAgey8qPGRpdiAgY2xhc3NOYW1lPVwic2Nyb2xsLXAtMCBiZy1ncmFkaWVudC10by1yIGZyb20tcHJpbWFyeSB0by1zZWNvbmRhcnkgdGV4dC13aGl0ZSBweS0xMCBweC00XCI+Ki99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tY29udGVudCBmbGV4LWNvbCAgIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInfT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eycvcGFnZXNha2VfbG9nby5zdmcnfSBjbGFzc05hbWU9XCJidG4gYnRuLWdob3N0XCIgLz5cbiAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9XCJodHRwczovL2RleHRlcmxhYnMtcHVibGljLnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3BhZ2VzYWtlX2xvZ28ucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwiIGJnLXN0b25lLTMwMCBtYXgtdy1zbSByb3VuZGVkLWxnIHNoYWRvdy0yeGwgaC0xNiB3LTE2IFwiXG4gICAgICAgICAgICAgICAgICAgIC8+Ki99XG4gICAgICAgICAgICAgICAgICAgIHsvKjxoNCBjbGFzc05hbWU9eyd0ZXh0LXhsICd9PlBhZ2VzYWtlIHtuYW1lfSB7aW5kZXh9PC9oND4qL31cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBcIj57dmFyaWFudHNbdmFyaWFudF0uaGVhZGVyMX0gPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyd0ZXh0LWdyZWVuLTIwMCAgZm9udC1ib2xkIG10LTQnfT57dmFyaWFudHNbdmFyaWFudF0uaGVhZGVyMn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB5LTJcIj5QYWdlc2FrZSBsZXRzIHlvdSBidWlsZCBjb21wbGV0ZSB3ZWJzaXRlcywgd2l0aCBjb250ZW50LCBtb25ldGl6YXRpb24gb3B0aW9ucywgYW5kIGJlYXV0aWZ1bCBkZXNpZ24sIGFsbCBpbiBzZWNvbmRzLiBGb3IgZnJlZS4gPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJweS0yXCI+U2VlIHdoYXQgdGhlIHNhdnZpZXN0IGNyZWF0b3JzIG9uIHRoZSB3ZWIgYXJlIGFscmVhZHkgZG9pbmcsIGNoZWNrb3V0IFBhZ2VzYWtlIHRvZGF5ISA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZmxleCBqdXN0aWZ5LWNlbnRlciBnYXAtNCBtdC00J30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1vdXRsaW5lXCI+PExpbmsgaHJlZj17J2h0dHBzOi8vcGFnZXNha2UuY29tJ30+TGVhcm4gTW9yZTwvTGluaz48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+PExpbmsgaHJlZj17J2h0dHBzOi8vcGFnZXNha2UuY29tJ30+U3RhcnQgZm9yIEZyZWU8L0xpbms+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkQmxvY2s7XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJBZEJsb2NrIiwibmFtZSIsInBhZ2UiLCJzaXRlIiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwidmFyaWFudHMiLCJ2YXJpYW50MSIsInN0eWxpbmciLCJoZWFkZXIxIiwiaGVhZGVyMiIsInN1YmhlYWRlciIsImJvZHkiLCJjdGExX2xpbmsiLCJjdGEyX2xpbmsiLCJjdGExX3RleHQiLCJjdGEyX3RleHQiLCJ2YXJpYW50MiIsInVzZVZhcmlhbnQyIiwidmFyaWFudCIsImRpdiIsImRhdGEtdGhlbWUiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJoMSIsImJyIiwic3BhbiIsInAiLCJidXR0b24iLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/AdBlock.js\n"));

/***/ })

});