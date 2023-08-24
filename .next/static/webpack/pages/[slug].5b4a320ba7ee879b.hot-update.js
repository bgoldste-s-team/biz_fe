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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst AdBlock = (param)=>{\n    let { name , page , site , index  } = param;\n    console.log(\"adblock\", page, site, index, name);\n    const variants = {\n        variant1: {\n            styling: \"bg-gradient-to-r from-black via-purple-800 to-black text-white p-8 text-center\",\n            header1: \"Don't Just Browse The Web.\",\n            header2: \"Create It.\",\n            subheader: \"\",\n            body: \"\",\n            cta1_link: \"\",\n            cta2_link: \"\",\n            cta1_text: \"\",\n            cta2_text: \"\"\n        },\n        variant2: {\n            styling: \"bg-neutral-content text-white p-8 text-center\",\n            header1: \"Websites for the rest of us.\",\n            subheader: \"\",\n            body: \"\",\n            cta1_link: \"\",\n            cta2_link: \"\",\n            cta1_text: \"\",\n            cta2_text: \"\"\n        }\n    };\n    const useVariant2 = index % 2 === 0;\n    const variant = index % 2 === 1 ? \"variant1\" : \"variant2\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        \"data-theme\": \"pagesake\",\n        className: \"hero \".concat(variants[variant].styling, \" \"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"hero-content flex-col   items-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl \",\n                        children: [\n                            variants[variant].header1,\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 44,\n                                columnNumber: 75\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-green-200  font-bold mt-4\",\n                                children: variants[variant].header2\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 45,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                        lineNumber: 44,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"py-2\",\n                        children: \"Pagesake lets you build complete websites, with content, monetization options, and beautiful design, all in seconds. For free. \"\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                        lineNumber: 47,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"py-2\",\n                        children: \"See what the savviest creators on the web are already doing, checkout Pagesake today! \"\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                        lineNumber: 48,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center gap-4 mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-secondary btn-outline\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"https://pagesake.com\",\n                                    children: \"Learn More\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 75\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 50,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-primary\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"https://pagesake.com\",\n                                    children: \"Start for Free\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 61\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 51,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                        lineNumber: 49,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/pagesake_logo.svg\",\n                            className: \"btn btn-ghost\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                            lineNumber: 54,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                        lineNumber: 53,\n                        columnNumber: 27\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                lineNumber: 43,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n            lineNumber: 38,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, undefined);\n};\n_c = AdBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdBlock);\nvar _c;\n$RefreshReg$(_c, \"AdBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BZEJsb2NrLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBQ0c7QUFFN0IsTUFBTUUsVUFBVSxTQUErQjtRQUE5QixFQUFDQyxLQUFJLEVBQUVDLEtBQUksRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUM7SUFDdENDLFFBQVFDLEdBQUcsQ0FBQyxXQUFXSixNQUFNQyxNQUFNQyxPQUFPSDtJQUcxQyxNQUFNTSxXQUFXO1FBQ2JDLFVBQVU7WUFDTkMsU0FBUztZQUNUQyxTQUFRO1lBQ1JDLFNBQVE7WUFDUkMsV0FBVTtZQUNWQyxNQUFNO1lBQ05DLFdBQVU7WUFDVkMsV0FBVTtZQUNWQyxXQUFVO1lBQ1ZDLFdBQVU7UUFDZDtRQUNBQyxVQUFVO1lBQ0hULFNBQVM7WUFDWkMsU0FBUTtZQUNSRSxXQUFVO1lBQ1ZDLE1BQU07WUFDTkMsV0FBVTtZQUNWQyxXQUFVO1lBQ1ZDLFdBQVU7WUFDVkMsV0FBVTtRQUNkO0lBQ0o7SUFFQSxNQUFNRSxjQUFjZixRQUFRLE1BQU07SUFFbEMsTUFBTWdCLFVBQVVoQixRQUFRLE1BQU0sSUFBSSxhQUFZLFVBQVU7SUFDeEQscUJBQ0ksOERBQUNpQjtRQUFJQyxjQUFXO1FBQVdDLFdBQVcsUUFBa0MsT0FBMUJoQixRQUFRLENBQUNhLFFBQVEsQ0FBQ1gsT0FBTyxFQUFDO2tCQUVwRSw0RUFBQ1k7WUFBSUUsV0FBVTtzQkFLWCw0RUFBQ0Y7O2tDQUNHLDhEQUFDRzt3QkFBR0QsV0FBVTs7NEJBQWFoQixRQUFRLENBQUNhLFFBQVEsQ0FBQ1YsT0FBTzs0QkFBQzswQ0FBQyw4REFBQ2U7Ozs7OzBDQUNuRCw4REFBQ0M7Z0NBQUtILFdBQVc7MENBQW1DaEIsUUFBUSxDQUFDYSxRQUFRLENBQUNULE9BQU87Ozs7Ozs7Ozs7OztrQ0FFakYsOERBQUNnQjt3QkFBRUosV0FBVTtrQ0FBTzs7Ozs7O2tDQUNwQiw4REFBQ0k7d0JBQUVKLFdBQVU7a0NBQU87Ozs7OztrQ0FDcEIsOERBQUNGO3dCQUFJRSxXQUFXOzswQ0FDWiw4REFBQ0s7Z0NBQU9MLFdBQVU7MENBQWdDLDRFQUFDeEIsa0RBQUlBO29DQUFDOEIsTUFBTTs4Q0FBd0I7Ozs7Ozs7Ozs7OzBDQUN0Riw4REFBQ0Q7Z0NBQU9MLFdBQVU7MENBQWtCLDRFQUFDeEIsa0RBQUlBO29DQUFDOEIsTUFBTTs4Q0FBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUV0RSw4REFBQ1I7d0JBQUlFLFdBQVc7a0NBQ3RCLDRFQUFDTzs0QkFBSUMsS0FBSzs0QkFBc0JSLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVk5RDtLQTlETXZCO0FBZ0VOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FkQmxvY2suanM/ZjViOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgQWRCbG9jayA9ICh7bmFtZSwgcGFnZSwgc2l0ZSwgaW5kZXh9KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2FkYmxvY2snLCBwYWdlLCBzaXRlLCBpbmRleCwgbmFtZSlcblxuXG4gICAgY29uc3QgdmFyaWFudHMgPSB7XG4gICAgICAgIHZhcmlhbnQxOiB7XG4gICAgICAgICAgICBzdHlsaW5nOiBcImJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibGFjayB2aWEtcHVycGxlLTgwMCB0by1ibGFjayB0ZXh0LXdoaXRlIHAtOCB0ZXh0LWNlbnRlclwiLFxuICAgICAgICAgICAgaGVhZGVyMTpcIkRvbid0IEp1c3QgQnJvd3NlIFRoZSBXZWIuXCIsXG4gICAgICAgICAgICBoZWFkZXIyOlwiQ3JlYXRlIEl0LlwiLFxuICAgICAgICAgICAgc3ViaGVhZGVyOlwiXCIsXG4gICAgICAgICAgICBib2R5OiBcIlwiLFxuICAgICAgICAgICAgY3RhMV9saW5rOlwiXCIsXG4gICAgICAgICAgICBjdGEyX2xpbms6XCJcIixcbiAgICAgICAgICAgIGN0YTFfdGV4dDpcIlwiLFxuICAgICAgICAgICAgY3RhMl90ZXh0OlwiXCJcbiAgICAgICAgfSxcbiAgICAgICAgdmFyaWFudDI6IHtcbiAgICAgICAgICAgICAgIHN0eWxpbmc6IFwiYmctbmV1dHJhbC1jb250ZW50IHRleHQtd2hpdGUgcC04IHRleHQtY2VudGVyXCIsXG4gICAgICAgICAgICBoZWFkZXIxOlwiV2Vic2l0ZXMgZm9yIHRoZSByZXN0IG9mIHVzLlwiLFxuICAgICAgICAgICAgc3ViaGVhZGVyOlwiXCIsXG4gICAgICAgICAgICBib2R5OiBcIlwiLFxuICAgICAgICAgICAgY3RhMV9saW5rOlwiXCIsXG4gICAgICAgICAgICBjdGEyX2xpbms6XCJcIixcbiAgICAgICAgICAgIGN0YTFfdGV4dDpcIlwiLFxuICAgICAgICAgICAgY3RhMl90ZXh0OlwiXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHVzZVZhcmlhbnQyID0gaW5kZXggJSAyID09PSAwIFxuXG4gICAgY29uc3QgdmFyaWFudCA9IGluZGV4ICUgMiA9PT0gMSA/ICd2YXJpYW50MScgOid2YXJpYW50MidcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGRhdGEtdGhlbWU9XCJwYWdlc2FrZVwiIGNsYXNzTmFtZT17YGhlcm8gJHt2YXJpYW50c1t2YXJpYW50XS5zdHlsaW5nfSBgfT5cbiAgICAgICAgICAgIHsvKjxkaXYgIGNsYXNzTmFtZT1cInNjcm9sbC1wLTAgYmctZ3JhZGllbnQtdG8tciBmcm9tLXByaW1hcnkgdG8tc2Vjb25kYXJ5IHRleHQtd2hpdGUgcHktMTAgcHgtNFwiPiovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWNvbnRlbnQgZmxleC1jb2wgICBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIFwiPnt2YXJpYW50c1t2YXJpYW50XS5oZWFkZXIxfSA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17J3RleHQtZ3JlZW4tMjAwICBmb250LWJvbGQgbXQtNCd9Pnt2YXJpYW50c1t2YXJpYW50XS5oZWFkZXIyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHktMlwiPlBhZ2VzYWtlIGxldHMgeW91IGJ1aWxkIGNvbXBsZXRlIHdlYnNpdGVzLCB3aXRoIGNvbnRlbnQsIG1vbmV0aXphdGlvbiBvcHRpb25zLCBhbmQgYmVhdXRpZnVsIGRlc2lnbiwgYWxsIGluIHNlY29uZHMuIEZvciBmcmVlLiA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB5LTJcIj5TZWUgd2hhdCB0aGUgc2F2dmllc3QgY3JlYXRvcnMgb24gdGhlIHdlYiBhcmUgYWxyZWFkeSBkb2luZywgY2hlY2tvdXQgUGFnZXNha2UgdG9kYXkhIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmbGV4IGp1c3RpZnktY2VudGVyIGdhcC00IG10LTQnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLW91dGxpbmVcIj48TGluayBocmVmPXsnaHR0cHM6Ly9wYWdlc2FrZS5jb20nfT5MZWFybiBNb3JlPC9MaW5rPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj48TGluayBocmVmPXsnaHR0cHM6Ly9wYWdlc2FrZS5jb20nfT5TdGFydCBmb3IgRnJlZTwvTGluaz48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInfT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eycvcGFnZXNha2VfbG9nby5zdmcnfSBjbGFzc05hbWU9XCJidG4gYnRuLWdob3N0XCIgLz5cbiAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9XCJodHRwczovL2RleHRlcmxhYnMtcHVibGljLnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3BhZ2VzYWtlX2xvZ28ucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwiIGJnLXN0b25lLTMwMCBtYXgtdy1zbSByb3VuZGVkLWxnIHNoYWRvdy0yeGwgaC0xNiB3LTE2IFwiXG4gICAgICAgICAgICAgICAgICAgIC8+Ki99XG4gICAgICAgICAgICAgICAgICAgIHsvKjxoNCBjbGFzc05hbWU9eyd0ZXh0LXhsICd9PlBhZ2VzYWtlIHtuYW1lfSB7aW5kZXh9PC9oND4qL31cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRCbG9jaztcblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkFkQmxvY2siLCJuYW1lIiwicGFnZSIsInNpdGUiLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJ2YXJpYW50cyIsInZhcmlhbnQxIiwic3R5bGluZyIsImhlYWRlcjEiLCJoZWFkZXIyIiwic3ViaGVhZGVyIiwiYm9keSIsImN0YTFfbGluayIsImN0YTJfbGluayIsImN0YTFfdGV4dCIsImN0YTJfdGV4dCIsInZhcmlhbnQyIiwidXNlVmFyaWFudDIiLCJ2YXJpYW50IiwiZGl2IiwiZGF0YS10aGVtZSIsImNsYXNzTmFtZSIsImgxIiwiYnIiLCJzcGFuIiwicCIsImJ1dHRvbiIsImhyZWYiLCJpbWciLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/AdBlock.js\n"));

/***/ })

});