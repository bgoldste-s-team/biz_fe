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

/***/ "./src/components/AdBlock.js":
/*!***********************************!*\
  !*** ./src/components/AdBlock.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst AdBlock = (param)=>{\n    let { name , page , site , index  } = param;\n    _s();\n    console.log(\"adblock\", page, site, index, name);\n    const textArray = [\n        \"First message\",\n        \"Second message\",\n        \"Third message\"\n    ];\n    const [currentText, setCurrentText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(textArray[0]);\n    const [textIndex, setTextIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const variants = {\n        // variant1: {\n        //     // styling: \"bg-gradient-to-r from-black via-purple-800 to-black text-white p-8 text-center\",\n        //     styling:\"bg-neutral-content text-neutral p-8 text-center\",\n        //     header1:\"Don't Just Browse The Web.\",\n        //     header2:\"Create It.\",\n        //     subheader:\"\",\n        //     body: \"\",\n        //     cta1_link:\"\",\n        //     cta2_link:\"\",\n        //     cta1_text:\"\",\n        //     cta2_text:\"\"\n        // },\n        variant1: {\n            // styling: \"bg-gradient-to-r from-black via-purple-800 to-black text-white p-8 text-center\",\n            styling: \"bg-neutral-content text-neutral p-8 text-center\",\n            header1: \"Your Side Hustle Is Calling\",\n            header2: \"Create It.\",\n            subheader: \"\",\n            body: \"\",\n            cta1_link: \"\",\n            cta2_link: \"\",\n            cta1_text: \"\",\n            cta2_text: \"\",\n            textArray: [\n                \"First asdfasdfmessage\",\n                \"Secondasdfasdfasdf message\",\n                \"Third masdfasdfessage\"\n            ]\n        },\n        variant2: {\n            styling: \"bg-neutral-content text-neutral p-8 text-center\",\n            header1: \"Revenue Generating Websites\",\n            header2: \"Ready in seconds.\",\n            subheader: \"Your Side Hustle is Calling.\",\n            body: \"\",\n            cta1_link: \"\",\n            cta2_link: \"\",\n            cta1_text: \"\",\n            cta2_text: \"\",\n            textArray: [\n                \"asdfasdfasdf\",\n                \"Second messaasdfasdfasdfge\",\n                \"Third mesasdfasdfsage\"\n            ]\n        }\n    };\n    const useVariant2 = index % 2 === 0;\n    const variant = index % 2 === 1 ? \"variant1\" : \"variant2\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setVisible(false);\n            setTextIndex((prevIndex)=>{\n                const newIndex = prevIndex + 1 === variants[variant].textArray.length ? 0 : prevIndex + 1;\n                setTimeout(()=>{\n                    setCurrentText(variants[variant].textArray[newIndex]);\n                    setVisible(true);\n                }, 300); // This delay is for the fade-out effect to be noticeable before the text changes\n                return newIndex;\n            });\n        }, 3500); // Giving some extra time for animations\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        \"data-theme\": \"pagesake\",\n        className: \"hero \".concat(variants[variant].styling, \" \"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"hero-content flex-col   items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/pagesake_logo.svg\",\n                        className: \"btn btn-ghost\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                        lineNumber: 99,\n                        columnNumber: 5\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                    lineNumber: 98,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-4xl \",\n                            children: [\n                                \" \",\n                                variants[variant].header1,\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                    lineNumber: 112,\n                                    columnNumber: 37\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-green-200  font-bold mt-4 transition-opacity duration-300 \".concat(visible ? \"opacity-100\" : \"opacity-0\"),\n                                    children: currentText\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                    lineNumber: 113,\n                                    columnNumber: 5\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                            lineNumber: 110,\n                            columnNumber: 8\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl \",\n                            children: [\n                                variants[variant].subheader,\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                    lineNumber: 115,\n                                    columnNumber: 61\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                            lineNumber: 115,\n                            columnNumber: 5\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"py-2\",\n                            children: \"Pagesake lets you build complete websites, with content, monetization options, and beautiful design, all in seconds. For free. \"\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                            lineNumber: 118,\n                            columnNumber: 5\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"py-2\",\n                            children: \"See what the savviest creators on the web are already doing, checkout Pagesake today! \"\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                            lineNumber: 119,\n                            columnNumber: 5\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center gap-4 mt-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn btn-secondary btn-outline\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"https://pagesake.com\",\n                                        children: \"Learn More\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 121,\n                                        columnNumber: 55\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                    lineNumber: 121,\n                                    columnNumber: 5\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn btn-primary\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"https://pagesake.com\",\n                                        children: \"Start for Free\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 122,\n                                        columnNumber: 41\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                    lineNumber: 122,\n                                    columnNumber: 5\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                            lineNumber: 120,\n                            columnNumber: 5\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                    lineNumber: 109,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n            lineNumber: 97,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AdBlock, \"VfzrQ5a30aEbx1D5PVciVzf3WBk=\");\n_c = AdBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdBlock);\nvar _c;\n$RefreshReg$(_c, \"AdBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyw4REFBQ3NCOzs7Ozs7Ozs7OztzQ0FHekQsOERBQUNFOzRCQUFFTixXQUFVO3NDQUFPOzs7Ozs7c0NBQ3BCLDhEQUFDTTs0QkFBRU4sV0FBVTtzQ0FBTzs7Ozs7O3NDQUNwQiw4REFBQ0Y7NEJBQUlFLFdBQVc7OzhDQUNoQiw4REFBQ087b0NBQU9QLFdBQVU7OENBQWdDLDRFQUFDdEMsa0RBQUlBO3dDQUFDOEMsTUFBTTtrREFBd0I7Ozs7Ozs7Ozs7OzhDQUN0Riw4REFBQ0Q7b0NBQU9QLFdBQVU7OENBQWtCLDRFQUFDdEMsa0RBQUlBO3dDQUFDOEMsTUFBTTtrREFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPNUU7R0E3SE03QztLQUFBQTtBQStITiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BZEJsb2NrLmpzP2Y1YjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgQWRCbG9jayA9ICh7bmFtZSwgcGFnZSwgc2l0ZSwgaW5kZXh9KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2FkYmxvY2snLCBwYWdlLCBzaXRlLCBpbmRleCwgbmFtZSlcblxuICAgIGNvbnN0IHRleHRBcnJheSA9IFtcbiAgICAgICdGaXJzdCBtZXNzYWdlJyxcbiAgICAgICdTZWNvbmQgbWVzc2FnZScsXG4gICAgICAnVGhpcmQgbWVzc2FnZScsXG4gIC8vIC4uLiBhZGQgYXMgbWFueSBtZXNzYWdlcyBhcyB5b3Ugd2FudFxuICAgICAgXTtcblxuICAgIGNvbnN0IFtjdXJyZW50VGV4dCwgc2V0Q3VycmVudFRleHRdID0gdXNlU3RhdGUodGV4dEFycmF5WzBdKTtcbiAgICBjb25zdCBbdGV4dEluZGV4LCBzZXRUZXh0SW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUodHJ1ZSk7XG4gXG5cbiAgICBjb25zdCB2YXJpYW50cyA9IHtcbiAgICAgICAgLy8gdmFyaWFudDE6IHtcbiAgICAgICAgLy8gICAgIC8vIHN0eWxpbmc6IFwiYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsYWNrIHZpYS1wdXJwbGUtODAwIHRvLWJsYWNrIHRleHQtd2hpdGUgcC04IHRleHQtY2VudGVyXCIsXG4gICAgICAgIC8vICAgICBzdHlsaW5nOlwiYmctbmV1dHJhbC1jb250ZW50IHRleHQtbmV1dHJhbCBwLTggdGV4dC1jZW50ZXJcIixcbiAgICAgICAgLy8gICAgIGhlYWRlcjE6XCJEb24ndCBKdXN0IEJyb3dzZSBUaGUgV2ViLlwiLFxuICAgICAgICAvLyAgICAgaGVhZGVyMjpcIkNyZWF0ZSBJdC5cIixcbiAgICAgICAgLy8gICAgIHN1YmhlYWRlcjpcIlwiLFxuICAgICAgICAvLyAgICAgYm9keTogXCJcIixcbiAgICAgICAgLy8gICAgIGN0YTFfbGluazpcIlwiLFxuICAgICAgICAvLyAgICAgY3RhMl9saW5rOlwiXCIsXG4gICAgICAgIC8vICAgICBjdGExX3RleHQ6XCJcIixcbiAgICAgICAgLy8gICAgIGN0YTJfdGV4dDpcIlwiXG4gICAgICAgIC8vIH0sXG4gICAgICAgIHZhcmlhbnQxOiB7XG4gICAgICAgICAgICAvLyBzdHlsaW5nOiBcImJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibGFjayB2aWEtcHVycGxlLTgwMCB0by1ibGFjayB0ZXh0LXdoaXRlIHAtOCB0ZXh0LWNlbnRlclwiLFxuICAgICAgICAgICAgc3R5bGluZzpcImJnLW5ldXRyYWwtY29udGVudCB0ZXh0LW5ldXRyYWwgcC04IHRleHQtY2VudGVyXCIsXG4gICAgICAgICAgICBoZWFkZXIxOlwiWW91ciBTaWRlIEh1c3RsZSBJcyBDYWxsaW5nXCIsXG4gICAgICAgICAgICBoZWFkZXIyOlwiQ3JlYXRlIEl0LlwiLFxuICAgICAgICAgICAgc3ViaGVhZGVyOlwiXCIsXG4gICAgICAgICAgICBib2R5OiBcIlwiLFxuICAgICAgICAgICAgY3RhMV9saW5rOlwiXCIsXG4gICAgICAgICAgICBjdGEyX2xpbms6XCJcIixcbiAgICAgICAgICAgIGN0YTFfdGV4dDpcIlwiLFxuICAgICAgICAgICAgY3RhMl90ZXh0OlwiXCIsXG4gICAgICAgICAgICB0ZXh0QXJyYXk6IFtcbiAgICAgICAgICAgICAgICAgICdGaXJzdCBhc2RmYXNkZm1lc3NhZ2UnLFxuICAgICAgICAgICAgICAgICAgJ1NlY29uZGFzZGZhc2RmYXNkZiBtZXNzYWdlJyxcbiAgICAgICAgICAgICAgICAgICdUaGlyZCBtYXNkZmFzZGZlc3NhZ2UnLFxuICAgICAgICAgICAgICAvLyAuLi4gYWRkIGFzIG1hbnkgbWVzc2FnZXMgYXMgeW91IHdhbnRcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgdmFyaWFudDI6IHtcbiAgICAgICAgIHN0eWxpbmc6IFwiYmctbmV1dHJhbC1jb250ZW50IHRleHQtbmV1dHJhbCBwLTggdGV4dC1jZW50ZXJcIixcbiAgICAgICAgIGhlYWRlcjE6XCJSZXZlbnVlIEdlbmVyYXRpbmcgV2Vic2l0ZXNcIixcbiAgICAgICAgIGhlYWRlcjI6XCJSZWFkeSBpbiBzZWNvbmRzLlwiLFxuICAgICAgICAgc3ViaGVhZGVyOlwiWW91ciBTaWRlIEh1c3RsZSBpcyBDYWxsaW5nLlwiLFxuICAgICAgICAgYm9keTogXCJcIixcbiAgICAgICAgIGN0YTFfbGluazpcIlwiLFxuICAgICAgICAgY3RhMl9saW5rOlwiXCIsXG4gICAgICAgICBjdGExX3RleHQ6XCJcIixcbiAgICAgICAgIGN0YTJfdGV4dDpcIlwiLFxuICAgICAgICAgICAgdGV4dEFycmF5OiBbXG4gICAgICAgICAgICAgICAnYXNkZmFzZGZhc2RmJyxcbiAgICAgICAgICAgICAgICdTZWNvbmQgbWVzc2Fhc2RmYXNkZmFzZGZnZScsXG4gICAgICAgICAgICAgICAnVGhpcmQgbWVzYXNkZmFzZGZzYWdlJyxcbiAgICAgICAgICAgLy8gLi4uIGFkZCBhcyBtYW55IG1lc3NhZ2VzIGFzIHlvdSB3YW50XG4gICAgICAgICAgICAgICBdXG4gICAgIH1cbiB9XG5cbiBjb25zdCB1c2VWYXJpYW50MiA9IGluZGV4ICUgMiA9PT0gMCBcblxuIGNvbnN0IHZhcmlhbnQgPSBpbmRleCAlIDIgPT09IDEgPyAndmFyaWFudDEnIDondmFyaWFudDInXG5cblxuXG4gdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldFZpc2libGUoZmFsc2UpO1xuICAgICAgc2V0VGV4dEluZGV4KChwcmV2SW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3SW5kZXggPSBwcmV2SW5kZXggKyAxID09PSB2YXJpYW50c1t2YXJpYW50XS50ZXh0QXJyYXkubGVuZ3RoID8gMCA6IHByZXZJbmRleCArIDE7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNldEN1cnJlbnRUZXh0KHZhcmlhbnRzW3ZhcmlhbnRdLnRleHRBcnJheVtuZXdJbmRleF0pO1xuICAgICAgICAgIHNldFZpc2libGUodHJ1ZSk7XG4gICAgICAgIH0sIDMwMCk7IC8vIFRoaXMgZGVsYXkgaXMgZm9yIHRoZSBmYWRlLW91dCBlZmZlY3QgdG8gYmUgbm90aWNlYWJsZSBiZWZvcmUgdGhlIHRleHQgY2hhbmdlc1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG5ld0luZGV4O1xuICAgICAgfSk7XG4gICAgfSwgMzUwMCk7IC8vIEdpdmluZyBzb21lIGV4dHJhIHRpbWUgZm9yIGFuaW1hdGlvbnNcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiByZXR1cm4gKFxuICAgIDxkaXYgZGF0YS10aGVtZT1cInBhZ2VzYWtlXCIgY2xhc3NOYW1lPXtgaGVybyAke3ZhcmlhbnRzW3ZhcmlhbnRdLnN0eWxpbmd9IGB9PlxuICAgICAgICAgICAgey8qPGRpdiAgY2xhc3NOYW1lPVwic2Nyb2xsLXAtMCBiZy1ncmFkaWVudC10by1yIGZyb20tcHJpbWFyeSB0by1zZWNvbmRhcnkgdGV4dC13aGl0ZSBweS0xMCBweC00XCI+Ki99XG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWNvbnRlbnQgZmxleC1jb2wgICBpdGVtcy1jZW50ZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT17J2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyJ30+XG4gICAgPGltZyBzcmM9eycvcGFnZXNha2VfbG9nby5zdmcnfSBjbGFzc05hbWU9XCJidG4gYnRuLWdob3N0XCIgLz5cbiAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9XCJodHRwczovL2RleHRlcmxhYnMtcHVibGljLnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3BhZ2VzYWtlX2xvZ28ucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwiIGJnLXN0b25lLTMwMCBtYXgtdy1zbSByb3VuZGVkLWxnIHNoYWRvdy0yeGwgaC0xNiB3LTE2IFwiXG4gICAgICAgICAgICAgICAgICAgIC8+Ki99XG4gICAgICAgICAgICAgICAgICAgIHsvKjxoNCBjbGFzc05hbWU9eyd0ZXh0LXhsICd9PlBhZ2VzYWtlIHtuYW1lfSB7aW5kZXh9PC9oND4qL31cblxuICAgIDwvZGl2PlxuXG5cblxuICAgIDxkaXY+XG4gICAgICAgPGgxIFxuICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LTR4bCBgfVxuICAgICAgPiB7dmFyaWFudHNbdmFyaWFudF0uaGVhZGVyMX0gPGJyIC8+XG4gICAgPHNwYW4gY2xhc3NOYW1lPXtgdGV4dC1ncmVlbi0yMDAgIGZvbnQtYm9sZCBtdC00IHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0zMDAgJHt2aXNpYmxlID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTAnfWB9PntjdXJyZW50VGV4dH08L3NwYW4+XG4gICAgPC9oMT5cbiAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgXCI+e3ZhcmlhbnRzW3ZhcmlhbnRdLnN1YmhlYWRlcn0gPGJyIC8+XG5cbiAgICA8L2gxPlxuICAgIDxwIGNsYXNzTmFtZT1cInB5LTJcIj5QYWdlc2FrZSBsZXRzIHlvdSBidWlsZCBjb21wbGV0ZSB3ZWJzaXRlcywgd2l0aCBjb250ZW50LCBtb25ldGl6YXRpb24gb3B0aW9ucywgYW5kIGJlYXV0aWZ1bCBkZXNpZ24sIGFsbCBpbiBzZWNvbmRzLiBGb3IgZnJlZS4gPC9wPlxuICAgIDxwIGNsYXNzTmFtZT1cInB5LTJcIj5TZWUgd2hhdCB0aGUgc2F2dmllc3QgY3JlYXRvcnMgb24gdGhlIHdlYiBhcmUgYWxyZWFkeSBkb2luZywgY2hlY2tvdXQgUGFnZXNha2UgdG9kYXkhIDwvcD5cbiAgICA8ZGl2IGNsYXNzTmFtZT17J2ZsZXgganVzdGlmeS1jZW50ZXIgZ2FwLTQgbXQtNCd9PlxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLW91dGxpbmVcIj48TGluayBocmVmPXsnaHR0cHM6Ly9wYWdlc2FrZS5jb20nfT5MZWFybiBNb3JlPC9MaW5rPjwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+PExpbmsgaHJlZj17J2h0dHBzOi8vcGFnZXNha2UuY29tJ30+U3RhcnQgZm9yIEZyZWU8L0xpbms+PC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRCbG9jaztcblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiQWRCbG9jayIsIm5hbWUiLCJwYWdlIiwic2l0ZSIsImluZGV4IiwiY29uc29sZSIsImxvZyIsInRleHRBcnJheSIsImN1cnJlbnRUZXh0Iiwic2V0Q3VycmVudFRleHQiLCJ0ZXh0SW5kZXgiLCJzZXRUZXh0SW5kZXgiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInZhcmlhbnRzIiwidmFyaWFudDEiLCJzdHlsaW5nIiwiaGVhZGVyMSIsImhlYWRlcjIiLCJzdWJoZWFkZXIiLCJib2R5IiwiY3RhMV9saW5rIiwiY3RhMl9saW5rIiwiY3RhMV90ZXh0IiwiY3RhMl90ZXh0IiwidmFyaWFudDIiLCJ1c2VWYXJpYW50MiIsInZhcmlhbnQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwicHJldkluZGV4IiwibmV3SW5kZXgiLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwiY2xlYXJJbnRlcnZhbCIsImRpdiIsImRhdGEtdGhlbWUiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJoMSIsImJyIiwic3BhbiIsInAiLCJidXR0b24iLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/AdBlock.js\n"));

/***/ })

});