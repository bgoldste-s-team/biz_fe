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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst AdBlock = (param)=>{\n    let { name , page , site , index  } = param;\n    _s();\n    console.log(\"adblock\", page, site, index, name);\n    const textArray = [\n        \"First message\",\n        \"Second message\",\n        \"Third message\"\n    ];\n    const [currentText, setCurrentText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(textArray[0]);\n    const [textIndex, setTextIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const variants = {\n        // variant1: {\n        //     // styling: \"bg-gradient-to-r from-black via-purple-800 to-black text-white p-8 text-center\",\n        //     styling:\"bg-neutral-content text-neutral p-8 text-center\",\n        //     header1:\"Don't Just Browse The Web.\",\n        //     header2:\"Create It.\",\n        //     subheader:\"\",\n        //     body: \"\",\n        //     cta1_link:\"\",\n        //     cta2_link:\"\",\n        //     cta1_text:\"\",\n        //     cta2_text:\"\"\n        // },\n        variant1: {\n            // styling: \"bg-gradient-to-r from-black via-purple-800 to-black text-white p-8 text-center\",\n            styling: \"bg-neutral-content text-neutral p-8 text-left\",\n            header1: \"Your Side Hustle Is Calling\",\n            header2: \"Create It.\",\n            subheader: \"\",\n            body: \"\",\n            cta1_link: \"\",\n            cta2_link: \"\",\n            cta1_text: \"\",\n            cta2_text: \"\",\n            textArray: [\n                \"Portfolio Websites\",\n                \"Review Sites\",\n                \"Small Businesses\"\n            ]\n        },\n        variant2: {\n            styling: \"bg-neutral-content text-neutral p-8 text-right\",\n            header1: \"Revenue Generating Websites\",\n            header2: \"Ready in seconds.\",\n            subheader: \"Your Side Hustle is Calling.\",\n            body: \"\",\n            cta1_link: \"\",\n            cta2_link: \"\",\n            cta1_text: \"\",\n            cta2_text: \"\",\n            textArray: [\n                \"Ready in seconds.\",\n                \"Actually Free\",\n                \"SEO Optimized\",\n                \"AI Generated Content\"\n            ]\n        }\n    };\n    const useVariant2 = index % 2 === 0;\n    const variant = index % 2 === 1 ? \"variant1\" : \"variant2\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setVisible(false);\n            setTextIndex((prevIndex)=>{\n                const newIndex = prevIndex + 1 === variants[variant].textArray.length ? 0 : prevIndex + 1;\n                setTimeout(()=>{\n                    setCurrentText(variants[variant].textArray[newIndex]);\n                    setVisible(true);\n                }, 300); // This delay is for the fade-out effect to be noticeable before the text changes\n                return newIndex;\n            });\n        }, 3500); // Giving some extra time for animations\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        \"data-theme\": \"pagesake\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"hero \".concat(variants[variant].styling, \" \"),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hero-content flex-col   items-start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-start justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/pagesake_logo.svg\",\n                            className: \"btn btn-ghost\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                            lineNumber: 105,\n                            columnNumber: 5\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                        lineNumber: 104,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-4xl \",\n                                children: [\n                                    \" \",\n                                    variants[variant].header1,\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 118,\n                                        columnNumber: 37\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-success\",\n                                        children: variants[variant].header2\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 119,\n                                        columnNumber: 7\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 116,\n                                columnNumber: 8\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl \".concat(textIndex === 0 ? \"text-green-300 text-left\" : textIndex === 1 ? \"text-blue-300\" : \"text-red-300\", \"  font-bold mt-4 transition-opacity duration-300 \").concat(visible ? \"opacity-100\" : \"opacity-0\"),\n                                children: currentText\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 128,\n                                columnNumber: 5\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center gap-4 mt-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-secondary btn-outline\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"https://pagesake.com\",\n                                            children: \"Learn More\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                            lineNumber: 130,\n                                            columnNumber: 55\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 130,\n                                        columnNumber: 5\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-primary\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"https://pagesake.com\",\n                                            children: \"Start for Free\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                            lineNumber: 131,\n                                            columnNumber: 41\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 131,\n                                        columnNumber: 5\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 129,\n                                columnNumber: 5\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                        lineNumber: 115,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                lineNumber: 103,\n                columnNumber: 5\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n            lineNumber: 101,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n        lineNumber: 100,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AdBlock, \"VfzrQ5a30aEbx1D5PVciVzf3WBk=\");\n_c = AdBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdBlock);\nvar _c;\n$RefreshReg$(_c, \"AdBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksNkJBQTZCQSxjQUFZLElBQUksa0JBQWtCLGNBQWMsRUFBQyxxREFBeUYsT0FBdENFLFVBQVUsZ0JBQWdCLFdBQVc7MENBQUtKOzs7Ozs7MENBQ3hOLDhEQUFDMkI7Z0NBQUlFLFdBQVc7O2tEQUNoQiw4REFBQ007d0NBQU9OLFdBQVU7a0RBQWdDLDRFQUFDdkMsa0RBQUlBOzRDQUFDOEMsTUFBTTtzREFBd0I7Ozs7Ozs7Ozs7O2tEQUN0Riw4REFBQ0Q7d0NBQU9OLFdBQVU7a0RBQWtCLDRFQUFDdkMsa0RBQUlBOzRDQUFDOEMsTUFBTTtzREFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCNUU7R0FoSk01QztLQUFBQTtBQWtKTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BZEJsb2NrLmpzP2Y1YjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7XG4gICBGYUNhcnRTaG9wcGluZ1xuXG59IGZyb20gXCJyZWFjdC1pY29ucy9mYTZcIjtcblxuY29uc3QgQWRCbG9jayA9ICh7bmFtZSwgcGFnZSwgc2l0ZSwgaW5kZXh9KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2FkYmxvY2snLCBwYWdlLCBzaXRlLCBpbmRleCwgbmFtZSlcblxuICAgIGNvbnN0IHRleHRBcnJheSA9IFtcbiAgICAgICdGaXJzdCBtZXNzYWdlJyxcbiAgICAgICdTZWNvbmQgbWVzc2FnZScsXG4gICAgICAnVGhpcmQgbWVzc2FnZScsXG4gIC8vIC4uLiBhZGQgYXMgbWFueSBtZXNzYWdlcyBhcyB5b3Ugd2FudFxuICAgICAgXTtcblxuICAgIGNvbnN0IFtjdXJyZW50VGV4dCwgc2V0Q3VycmVudFRleHRdID0gdXNlU3RhdGUodGV4dEFycmF5WzBdKTtcbiAgICBjb25zdCBbdGV4dEluZGV4LCBzZXRUZXh0SW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUodHJ1ZSk7XG4gXG5cbiAgICBjb25zdCB2YXJpYW50cyA9IHtcbiAgICAgICAgLy8gdmFyaWFudDE6IHtcbiAgICAgICAgLy8gICAgIC8vIHN0eWxpbmc6IFwiYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsYWNrIHZpYS1wdXJwbGUtODAwIHRvLWJsYWNrIHRleHQtd2hpdGUgcC04IHRleHQtY2VudGVyXCIsXG4gICAgICAgIC8vICAgICBzdHlsaW5nOlwiYmctbmV1dHJhbC1jb250ZW50IHRleHQtbmV1dHJhbCBwLTggdGV4dC1jZW50ZXJcIixcbiAgICAgICAgLy8gICAgIGhlYWRlcjE6XCJEb24ndCBKdXN0IEJyb3dzZSBUaGUgV2ViLlwiLFxuICAgICAgICAvLyAgICAgaGVhZGVyMjpcIkNyZWF0ZSBJdC5cIixcbiAgICAgICAgLy8gICAgIHN1YmhlYWRlcjpcIlwiLFxuICAgICAgICAvLyAgICAgYm9keTogXCJcIixcbiAgICAgICAgLy8gICAgIGN0YTFfbGluazpcIlwiLFxuICAgICAgICAvLyAgICAgY3RhMl9saW5rOlwiXCIsXG4gICAgICAgIC8vICAgICBjdGExX3RleHQ6XCJcIixcbiAgICAgICAgLy8gICAgIGN0YTJfdGV4dDpcIlwiXG4gICAgICAgIC8vIH0sXG4gICAgICAgIHZhcmlhbnQxOiB7XG4gICAgICAgICAgICAvLyBzdHlsaW5nOiBcImJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibGFjayB2aWEtcHVycGxlLTgwMCB0by1ibGFjayB0ZXh0LXdoaXRlIHAtOCB0ZXh0LWNlbnRlclwiLFxuICAgICAgICAgICAgc3R5bGluZzpcImJnLW5ldXRyYWwtY29udGVudCB0ZXh0LW5ldXRyYWwgcC04IHRleHQtbGVmdFwiLFxuICAgICAgICAgICAgaGVhZGVyMTpcIllvdXIgU2lkZSBIdXN0bGUgSXMgQ2FsbGluZ1wiLFxuICAgICAgICAgICAgaGVhZGVyMjpcIkNyZWF0ZSBJdC5cIixcbiAgICAgICAgICAgIHN1YmhlYWRlcjpcIlwiLFxuICAgICAgICAgICAgYm9keTogXCJcIixcbiAgICAgICAgICAgIGN0YTFfbGluazpcIlwiLFxuICAgICAgICAgICAgY3RhMl9saW5rOlwiXCIsXG4gICAgICAgICAgICBjdGExX3RleHQ6XCJcIixcbiAgICAgICAgICAgIGN0YTJfdGV4dDpcIlwiLFxuICAgICAgICAgICAgdGV4dEFycmF5OiBbXG4gICAgICAgICAgICAgICAgICAnUG9ydGZvbGlvIFdlYnNpdGVzJyxcbiAgICAgICAgICAgICAgICAgICdSZXZpZXcgU2l0ZXMnLFxuICAgICAgICAgICAgICAgICAgJ1NtYWxsIEJ1c2luZXNzZXMnLFxuICAgICAgICAgICAgICAvLyAuLi4gYWRkIGFzIG1hbnkgbWVzc2FnZXMgYXMgeW91IHdhbnRcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgdmFyaWFudDI6IHtcbiAgICAgICAgIHN0eWxpbmc6IFwiYmctbmV1dHJhbC1jb250ZW50IHRleHQtbmV1dHJhbCBwLTggdGV4dC1yaWdodFwiLFxuICAgICAgICAgaGVhZGVyMTpcIlJldmVudWUgR2VuZXJhdGluZyBXZWJzaXRlc1wiLFxuICAgICAgICAgaGVhZGVyMjpcIlJlYWR5IGluIHNlY29uZHMuXCIsXG4gICAgICAgICBzdWJoZWFkZXI6XCJZb3VyIFNpZGUgSHVzdGxlIGlzIENhbGxpbmcuXCIsXG4gICAgICAgICBib2R5OiBcIlwiLFxuICAgICAgICAgY3RhMV9saW5rOlwiXCIsXG4gICAgICAgICBjdGEyX2xpbms6XCJcIixcbiAgICAgICAgIGN0YTFfdGV4dDpcIlwiLFxuICAgICAgICAgY3RhMl90ZXh0OlwiXCIsXG4gICAgICAgICAgICB0ZXh0QXJyYXk6IFtcbiAgICAgICAgICAgICAgICdSZWFkeSBpbiBzZWNvbmRzLicsXG4gICAgICAgICAgICAgICAnQWN0dWFsbHkgRnJlZScsXG4gICAgICAgICAgICAgICAnU0VPIE9wdGltaXplZCcsXG4gICAgICAgICAgICAgICAnQUkgR2VuZXJhdGVkIENvbnRlbnQnLFxuICAgICAgICAgICAvLyAuLi4gYWRkIGFzIG1hbnkgbWVzc2FnZXMgYXMgeW91IHdhbnRcbiAgICAgICAgICAgICAgIF1cbiAgICAgfVxuIH1cblxuIGNvbnN0IHVzZVZhcmlhbnQyID0gaW5kZXggJSAyID09PSAwIFxuXG4gY29uc3QgdmFyaWFudCA9IGluZGV4ICUgMiA9PT0gMSA/ICd2YXJpYW50MScgOid2YXJpYW50MidcblxuXG5cbiB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICBzZXRUZXh0SW5kZXgoKHByZXZJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdJbmRleCA9IHByZXZJbmRleCArIDEgPT09IHZhcmlhbnRzW3ZhcmlhbnRdLnRleHRBcnJheS5sZW5ndGggPyAwIDogcHJldkluZGV4ICsgMTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0Q3VycmVudFRleHQodmFyaWFudHNbdmFyaWFudF0udGV4dEFycmF5W25ld0luZGV4XSk7XG4gICAgICAgICAgc2V0VmlzaWJsZSh0cnVlKTtcbiAgICAgICAgfSwgMzAwKTsgLy8gVGhpcyBkZWxheSBpcyBmb3IgdGhlIGZhZGUtb3V0IGVmZmVjdCB0byBiZSBub3RpY2VhYmxlIGJlZm9yZSB0aGUgdGV4dCBjaGFuZ2VzXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbmV3SW5kZXg7XG4gICAgICB9KTtcbiAgICB9LCAzNTAwKTsgLy8gR2l2aW5nIHNvbWUgZXh0cmEgdGltZSBmb3IgYW5pbWF0aW9uc1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuIHJldHVybiAoXG4gICAgPGRpdiBkYXRhLXRoZW1lPVwicGFnZXNha2VcIj5cbiAgICA8ZGl2ICBjbGFzc05hbWU9e2BoZXJvICR7dmFyaWFudHNbdmFyaWFudF0uc3R5bGluZ30gYH0+XG4gICAgICAgICAgICB7Lyo8ZGl2ICBjbGFzc05hbWU9XCJzY3JvbGwtcC0wIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1wcmltYXJ5IHRvLXNlY29uZGFyeSB0ZXh0LXdoaXRlIHB5LTEwIHB4LTRcIj4qL31cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tY29udGVudCBmbGV4LWNvbCAgIGl0ZW1zLXN0YXJ0XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9eydmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IGp1c3RpZnktY2VudGVyJ30+XG4gICAgPGltZyBzcmM9eycvcGFnZXNha2VfbG9nby5zdmcnfSBjbGFzc05hbWU9XCJidG4gYnRuLWdob3N0XCIgLz5cbiAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9XCJodHRwczovL2RleHRlcmxhYnMtcHVibGljLnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3BhZ2VzYWtlX2xvZ28ucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwiIGJnLXN0b25lLTMwMCBtYXgtdy1zbSByb3VuZGVkLWxnIHNoYWRvdy0yeGwgaC0xNiB3LTE2IFwiXG4gICAgICAgICAgICAgICAgICAgIC8+Ki99XG4gICAgICAgICAgICAgICAgICAgIHsvKjxoNCBjbGFzc05hbWU9eyd0ZXh0LXhsICd9PlBhZ2VzYWtlIHtuYW1lfSB7aW5kZXh9PC9oND4qL31cblxuICAgIDwvZGl2PlxuXG5cblxuICAgIDxkaXY+XG4gICAgICAgPGgxIFxuICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LTR4bCBgfVxuICAgICAgPiB7dmFyaWFudHNbdmFyaWFudF0uaGVhZGVyMX0gPGJyIC8+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtc3VjY2Vzcyc+e3ZhcmlhbnRzW3ZhcmlhbnRdLmhlYWRlcjJ9PC9zcGFuPlxuICAgIHsvKjxzcGFuIGNsYXNzTmFtZT17YCR7dGV4dEluZGV4ID09PSAwID8gJ3RleHQtZ3JlZW4tMzAwJyA6IHRleHRJbmRleD09PTEgPyAndGV4dC1ibHVlLTMwMCcgOiAndGV4dC1yZWQtMzAwJ30gIGZvbnQtYm9sZCBtdC00IHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0zMDAgJHt2aXNpYmxlID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTAnfWB9PntjdXJyZW50VGV4dH08L3NwYW4+Ki99XG4gICAgPC9oMT5cbnsvKiAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgXCI+e3ZhcmlhbnRzW3ZhcmlhbnRdLnN1YmhlYWRlcn0gPGJyIC8+XG5cbiAgICA8L2gxPiovfVxuICAgIHsvKjxwIGNsYXNzTmFtZT1cInB5LTJcIj5QYWdlc2FrZSBsZXRzIHlvdSBidWlsZCBjb21wbGV0ZSB3ZWJzaXRlcywgd2l0aCBjb250ZW50LCBtb25ldGl6YXRpb24gb3B0aW9ucywgYW5kIGJlYXV0aWZ1bCBkZXNpZ24sIGFsbCBpbiBzZWNvbmRzLiBGb3IgZnJlZS4gPC9wPiovfVxuICAgIHsvKjxwIGNsYXNzTmFtZT1cInB5LTJcIj5TZWUgd2hhdCB0aGUgc2F2dmllc3QgY3JlYXRvcnMgb24gdGhlIHdlYiBhcmUgYWxyZWFkeSBkb2luZywgY2hlY2tvdXQgUGFnZXNha2UgdG9kYXkhIDwvcD4qL31cbiAgIFxuICAgIDxoMSBjbGFzc05hbWU9e2B0ZXh0LTJ4bCAke3RleHRJbmRleCA9PT0gMCA/ICd0ZXh0LWdyZWVuLTMwMCB0ZXh0LWxlZnQnIDogdGV4dEluZGV4PT09MSA/ICd0ZXh0LWJsdWUtMzAwJyA6ICd0ZXh0LXJlZC0zMDAnfSAgZm9udC1ib2xkIG10LTQgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTMwMCAke3Zpc2libGUgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktMCd9YH0+e2N1cnJlbnRUZXh0fTwvaDE+XG4gICAgPGRpdiBjbGFzc05hbWU9eydmbGV4IGp1c3RpZnktY2VudGVyIGdhcC00IG10LTQnfT5cbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1vdXRsaW5lXCI+PExpbmsgaHJlZj17J2h0dHBzOi8vcGFnZXNha2UuY29tJ30+TGVhcm4gTW9yZTwvTGluaz48L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPjxMaW5rIGhyZWY9eydodHRwczovL3BhZ2VzYWtlLmNvbSd9PlN0YXJ0IGZvciBGcmVlPC9MaW5rPjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbnsvKjxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLXNpZGUgY2FyZC1jb21wYWN0IGJnLWJhc2UtMTAwIHNoYWRvdy14bFwiPlxuICA8ZmlndXJlPiA8RmFDYXJ0U2hvcHBpbmcgY2xhc3NOYW1lPSdoLTggdy04IGJnLWdyZWVuLTUwMCB0ZXh0LXByaW1hcnknIC8+PC9maWd1cmU+XG4gIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgPGgyIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5OZXcgbW92aWUgaXMgcmVsZWFzZWQhPC9oMj5cbiAgICA8cD5DbGljayB0aGUgYnV0dG9uIHRvIHdhdGNoIG9uIEpldGZsaXggYXBwLjwvcD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYWN0aW9ucyBqdXN0aWZ5LWVuZFwiPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5XYXRjaDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PiovfVxuXG5cbjwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZEJsb2NrO1xuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJGYUNhcnRTaG9wcGluZyIsIkFkQmxvY2siLCJuYW1lIiwicGFnZSIsInNpdGUiLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0QXJyYXkiLCJjdXJyZW50VGV4dCIsInNldEN1cnJlbnRUZXh0IiwidGV4dEluZGV4Iiwic2V0VGV4dEluZGV4IiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ2YXJpYW50cyIsInZhcmlhbnQxIiwic3R5bGluZyIsImhlYWRlcjEiLCJoZWFkZXIyIiwic3ViaGVhZGVyIiwiYm9keSIsImN0YTFfbGluayIsImN0YTJfbGluayIsImN0YTFfdGV4dCIsImN0YTJfdGV4dCIsInZhcmlhbnQyIiwidXNlVmFyaWFudDIiLCJ2YXJpYW50IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInByZXZJbmRleCIsIm5ld0luZGV4IiwibGVuZ3RoIiwic2V0VGltZW91dCIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJkYXRhLXRoZW1lIiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaDEiLCJiciIsInNwYW4iLCJidXR0b24iLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/AdBlock.js\n"));

/***/ })

});