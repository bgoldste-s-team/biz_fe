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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst AdBlock = (param)=>{\n    let { name , page , site , index  } = param;\n    _s();\n    console.log(\"adblock\", page, site, index, name);\n    const textArray = [\n        \"First message\",\n        \"Second message\",\n        \"Third message\"\n    ];\n    const [currentText, setCurrentText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(textArray[0]);\n    const [textIndex, setTextIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const variants = {\n        // variant1: {\n        //     // styling: \"bg-gradient-to-r from-black via-purple-800 to-black text-white p-8 text-center\",\n        //     styling:\"bg-neutral-content text-neutral p-8 text-center\",\n        //     header1:\"Don't Just Browse The Web.\",\n        //     header2:\"Create It.\",\n        //     subheader:\"\",\n        //     body: \"\",\n        //     cta1_link:\"\",\n        //     cta2_link:\"\",\n        //     cta1_text:\"\",\n        //     cta2_text:\"\"\n        // },\n        variant1: {\n            // styling: \"bg-gradient-to-r from-black via-purple-800 to-black text-white p-8 text-center\",\n            styling: \"bg-neutral-content text-neutral p-8 text-left\",\n            header1: \"Your Side Hustle Is Calling\",\n            header2: \"Create It.\",\n            subheader: \"\",\n            body: \"\",\n            cta1_link: \"\",\n            cta2_link: \"\",\n            cta1_text: \"\",\n            cta2_text: \"\",\n            textArray: [\n                \"Portfolio Websites\",\n                \"Review Sites\",\n                \"Small Businesses\"\n            ]\n        },\n        variant2: {\n            styling: \"bg-neutral-content text-neutral p-8 text-right\",\n            header1: \"Revenue Generating Websites\",\n            header2: \"Ready in seconds.\",\n            subheader: \"Your Side Hustle is Calling.\",\n            body: \"\",\n            cta1_link: \"\",\n            cta2_link: \"\",\n            cta1_text: \"\",\n            cta2_text: \"\",\n            textArray: [\n                \"Ready in seconds.\",\n                \"Actually Free\",\n                \"SEO Optimized\"\n            ]\n        }\n    };\n    const useVariant2 = index % 2 === 0;\n    const variant = index % 2 === 1 ? \"variant1\" : \"variant2\";\n    // useEffect(() => {\n    //    const interval = setInterval(() => {\n    //      setVisible(false);\n    //      setTextIndex((prevIndex) => {\n    //        const newIndex = prevIndex + 1 === variants[variant].textArray.length ? 0 : prevIndex + 1;\n    //        setTimeout(() => {\n    //          setCurrentText(variants[variant].textArray[newIndex]);\n    //          setVisible(true);\n    //        }, 300); // This delay is for the fade-out effect to be noticeable before the text changes\n    //        return newIndex;\n    //      });\n    //    }, 3500); // Giving some extra time for animations\n    //    return () => {\n    //      clearInterval(interval);\n    //    };\n    //  }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setVisible(false); // Starts the fade-out\n            setTimeout(()=>{\n                setTextIndex((prevIndex)=>{\n                    const newIndex = prevIndex + 1 === variants[variant].textArray.length ? 0 : prevIndex + 1;\n                    setCurrentText(variants[variant].textArray[newIndex]);\n                    return newIndex;\n                });\n            }, 300); // Wait for the fade-out to finish before changing text\n            setTimeout(()=>{\n                setVisible(true); // Fade-in the new text after another delay\n            }, 600); // Start the fade-in after the text has changed\n        }, 3500);\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        \"data-theme\": \"pagesake\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"hero \".concat(variants[variant].styling, \" \"),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hero-content flex-col   items-start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-start justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/pagesake_logo.svg\",\n                            className: \"h-40 w-40\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                            lineNumber: 129,\n                            columnNumber: 5\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                        lineNumber: 128,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-4xl \",\n                                children: [\n                                    \" \",\n                                    variants[variant].header1,\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 142,\n                                        columnNumber: 37\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-success\",\n                                        children: variants[variant].header2\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 143,\n                                        columnNumber: 7\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 140,\n                                columnNumber: 8\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl \".concat(visible ? \"\" : \"transition-opacity duration-300 opacity-0\", \" \").concat(textIndex === 0 ? \"text-green-300\" : textIndex === 1 ? \"text-blue-300\" : \"text-red-300 \", \"  font-bold mt-4 \"),\n                                children: currentText\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 152,\n                                columnNumber: 5\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center gap-4 mt-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-secondary btn-outline\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"https://pagesake.com\",\n                                            children: \"Learn More\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                            lineNumber: 154,\n                                            columnNumber: 55\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 154,\n                                        columnNumber: 5\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-primary\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"https://pagesake.com\",\n                                            children: \"Start for Free\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                            lineNumber: 155,\n                                            columnNumber: 41\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 155,\n                                        columnNumber: 5\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 153,\n                                columnNumber: 5\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                        lineNumber: 139,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                lineNumber: 127,\n                columnNumber: 5\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n            lineNumber: 125,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n        lineNumber: 124,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AdBlock, \"VfzrQ5a30aEbx1D5PVciVzf3WBk=\");\n_c = AdBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdBlock);\nvar _c;\n$RefreshReg$(_c, \"AdBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXNCRixXQUFVOzs7Ozs7Ozs7OztrQ0FVMUMsOERBQUNGOzswQ0FDRSw4REFBQ0s7Z0NBQ0FILFdBQVk7O29DQUNiO29DQUFFdkIsUUFBUSxDQUFDYSxRQUFRLENBQUNWLE9BQU87b0NBQUM7a0RBQUMsOERBQUN3Qjs7Ozs7a0RBQy9CLDhEQUFDQzt3Q0FBS0wsV0FBVTtrREFBZ0J2QixRQUFRLENBQUNhLFFBQVEsQ0FBQ1QsT0FBTzs7Ozs7Ozs7Ozs7OzBDQVMzRCw4REFBQ3NCO2dDQUFHSCxXQUFXLFlBQTBFM0IsT0FBOURFLFVBQVUsS0FBSywyQ0FBMkMsRUFBQyxLQUEwRixPQUF2RkYsY0FBYyxJQUFJLG1CQUFtQkEsY0FBWSxJQUFJLGtCQUFrQixlQUFlLEVBQUM7MENBQXFCRjs7Ozs7OzBDQUNyTSw4REFBQzJCO2dDQUFJRSxXQUFXOztrREFDaEIsOERBQUNNO3dDQUFPTixXQUFVO2tEQUFnQyw0RUFBQ3ZDLGtEQUFJQTs0Q0FBQzhDLE1BQU07c0RBQXdCOzs7Ozs7Ozs7OztrREFDdEYsOERBQUNEO3dDQUFPTixXQUFVO2tEQUFrQiw0RUFBQ3ZDLGtEQUFJQTs0Q0FBQzhDLE1BQU07c0RBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQjVFO0dBeEtNNUM7S0FBQUE7QUEwS04sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWRCbG9jay5qcz9mNWI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQge1xuICAgRmFDYXJ0U2hvcHBpbmdcblxufSBmcm9tIFwicmVhY3QtaWNvbnMvZmE2XCI7XG5cbmNvbnN0IEFkQmxvY2sgPSAoe25hbWUsIHBhZ2UsIHNpdGUsIGluZGV4fSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdhZGJsb2NrJywgcGFnZSwgc2l0ZSwgaW5kZXgsIG5hbWUpXG5cbiAgICBjb25zdCB0ZXh0QXJyYXkgPSBbXG4gICAgICAnRmlyc3QgbWVzc2FnZScsXG4gICAgICAnU2Vjb25kIG1lc3NhZ2UnLFxuICAgICAgJ1RoaXJkIG1lc3NhZ2UnLFxuICAvLyAuLi4gYWRkIGFzIG1hbnkgbWVzc2FnZXMgYXMgeW91IHdhbnRcbiAgICAgIF07XG5cbiAgICBjb25zdCBbY3VycmVudFRleHQsIHNldEN1cnJlbnRUZXh0XSA9IHVzZVN0YXRlKHRleHRBcnJheVswXSk7XG4gICAgY29uc3QgW3RleHRJbmRleCwgc2V0VGV4dEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xuIFxuXG4gICAgY29uc3QgdmFyaWFudHMgPSB7XG4gICAgICAgIC8vIHZhcmlhbnQxOiB7XG4gICAgICAgIC8vICAgICAvLyBzdHlsaW5nOiBcImJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibGFjayB2aWEtcHVycGxlLTgwMCB0by1ibGFjayB0ZXh0LXdoaXRlIHAtOCB0ZXh0LWNlbnRlclwiLFxuICAgICAgICAvLyAgICAgc3R5bGluZzpcImJnLW5ldXRyYWwtY29udGVudCB0ZXh0LW5ldXRyYWwgcC04IHRleHQtY2VudGVyXCIsXG4gICAgICAgIC8vICAgICBoZWFkZXIxOlwiRG9uJ3QgSnVzdCBCcm93c2UgVGhlIFdlYi5cIixcbiAgICAgICAgLy8gICAgIGhlYWRlcjI6XCJDcmVhdGUgSXQuXCIsXG4gICAgICAgIC8vICAgICBzdWJoZWFkZXI6XCJcIixcbiAgICAgICAgLy8gICAgIGJvZHk6IFwiXCIsXG4gICAgICAgIC8vICAgICBjdGExX2xpbms6XCJcIixcbiAgICAgICAgLy8gICAgIGN0YTJfbGluazpcIlwiLFxuICAgICAgICAvLyAgICAgY3RhMV90ZXh0OlwiXCIsXG4gICAgICAgIC8vICAgICBjdGEyX3RleHQ6XCJcIlxuICAgICAgICAvLyB9LFxuICAgICAgICB2YXJpYW50MToge1xuICAgICAgICAgICAgLy8gc3R5bGluZzogXCJiZy1ncmFkaWVudC10by1yIGZyb20tYmxhY2sgdmlhLXB1cnBsZS04MDAgdG8tYmxhY2sgdGV4dC13aGl0ZSBwLTggdGV4dC1jZW50ZXJcIixcbiAgICAgICAgICAgIHN0eWxpbmc6XCJiZy1uZXV0cmFsLWNvbnRlbnQgdGV4dC1uZXV0cmFsIHAtOCB0ZXh0LWxlZnRcIixcbiAgICAgICAgICAgIGhlYWRlcjE6XCJZb3VyIFNpZGUgSHVzdGxlIElzIENhbGxpbmdcIixcbiAgICAgICAgICAgIGhlYWRlcjI6XCJDcmVhdGUgSXQuXCIsXG4gICAgICAgICAgICBzdWJoZWFkZXI6XCJcIixcbiAgICAgICAgICAgIGJvZHk6IFwiXCIsXG4gICAgICAgICAgICBjdGExX2xpbms6XCJcIixcbiAgICAgICAgICAgIGN0YTJfbGluazpcIlwiLFxuICAgICAgICAgICAgY3RhMV90ZXh0OlwiXCIsXG4gICAgICAgICAgICBjdGEyX3RleHQ6XCJcIixcbiAgICAgICAgICAgIHRleHRBcnJheTogW1xuICAgICAgICAgICAgICAgICAgJ1BvcnRmb2xpbyBXZWJzaXRlcycsXG4gICAgICAgICAgICAgICAgICAnUmV2aWV3IFNpdGVzJyxcbiAgICAgICAgICAgICAgICAgICdTbWFsbCBCdXNpbmVzc2VzJyxcbiAgICAgICAgICAgICAgLy8gLi4uIGFkZCBhcyBtYW55IG1lc3NhZ2VzIGFzIHlvdSB3YW50XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHZhcmlhbnQyOiB7XG4gICAgICAgICBzdHlsaW5nOiBcImJnLW5ldXRyYWwtY29udGVudCB0ZXh0LW5ldXRyYWwgcC04IHRleHQtcmlnaHRcIixcbiAgICAgICAgIGhlYWRlcjE6XCJSZXZlbnVlIEdlbmVyYXRpbmcgV2Vic2l0ZXNcIixcbiAgICAgICAgIGhlYWRlcjI6XCJSZWFkeSBpbiBzZWNvbmRzLlwiLFxuICAgICAgICAgc3ViaGVhZGVyOlwiWW91ciBTaWRlIEh1c3RsZSBpcyBDYWxsaW5nLlwiLFxuICAgICAgICAgYm9keTogXCJcIixcbiAgICAgICAgIGN0YTFfbGluazpcIlwiLFxuICAgICAgICAgY3RhMl9saW5rOlwiXCIsXG4gICAgICAgICBjdGExX3RleHQ6XCJcIixcbiAgICAgICAgIGN0YTJfdGV4dDpcIlwiLFxuICAgICAgICAgICAgdGV4dEFycmF5OiBbXG4gICAgICAgICAgICAgICAnUmVhZHkgaW4gc2Vjb25kcy4nLFxuICAgICAgICAgICAgICAgJ0FjdHVhbGx5IEZyZWUnLFxuICAgICAgICAgICAgICAgJ1NFTyBPcHRpbWl6ZWQnLFxuICAgICAgICAgICAgIFxuICAgICAgICAgICAvLyAuLi4gYWRkIGFzIG1hbnkgbWVzc2FnZXMgYXMgeW91IHdhbnRcbiAgICAgICAgICAgICAgIF1cbiAgICAgfVxuIH1cblxuIGNvbnN0IHVzZVZhcmlhbnQyID0gaW5kZXggJSAyID09PSAwIFxuXG4gY29uc3QgdmFyaWFudCA9IGluZGV4ICUgMiA9PT0gMSA/ICd2YXJpYW50MScgOid2YXJpYW50MidcblxuXG5cbiAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuIC8vICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuIC8vICAgICAgc2V0VmlzaWJsZShmYWxzZSk7XG4gLy8gICAgICBzZXRUZXh0SW5kZXgoKHByZXZJbmRleCkgPT4ge1xuIC8vICAgICAgICBjb25zdCBuZXdJbmRleCA9IHByZXZJbmRleCArIDEgPT09IHZhcmlhbnRzW3ZhcmlhbnRdLnRleHRBcnJheS5sZW5ndGggPyAwIDogcHJldkluZGV4ICsgMTtcbiAvLyAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gLy8gICAgICAgICAgc2V0Q3VycmVudFRleHQodmFyaWFudHNbdmFyaWFudF0udGV4dEFycmF5W25ld0luZGV4XSk7XG4gLy8gICAgICAgICAgc2V0VmlzaWJsZSh0cnVlKTtcbiAvLyAgICAgICAgfSwgMzAwKTsgLy8gVGhpcyBkZWxheSBpcyBmb3IgdGhlIGZhZGUtb3V0IGVmZmVjdCB0byBiZSBub3RpY2VhYmxlIGJlZm9yZSB0aGUgdGV4dCBjaGFuZ2VzXG4gICAgICAgIFxuIC8vICAgICAgICByZXR1cm4gbmV3SW5kZXg7XG4gLy8gICAgICB9KTtcbiAvLyAgICB9LCAzNTAwKTsgLy8gR2l2aW5nIHNvbWUgZXh0cmEgdGltZSBmb3IgYW5pbWF0aW9uc1xuXG4gLy8gICAgcmV0dXJuICgpID0+IHtcbiAvLyAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuIC8vICAgIH07XG4gLy8gIH0sIFtdKTtcbnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRWaXNpYmxlKGZhbHNlKTsgLy8gU3RhcnRzIHRoZSBmYWRlLW91dFxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0VGV4dEluZGV4KChwcmV2SW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IHByZXZJbmRleCArIDEgPT09IHZhcmlhbnRzW3ZhcmlhbnRdLnRleHRBcnJheS5sZW5ndGggPyAwIDogcHJldkluZGV4ICsgMTtcbiAgICAgICAgICBzZXRDdXJyZW50VGV4dCh2YXJpYW50c1t2YXJpYW50XS50ZXh0QXJyYXlbbmV3SW5kZXhdKTtcbiAgICAgICAgICByZXR1cm4gbmV3SW5kZXg7XG4gICAgICAgIH0pO1xuICAgICAgfSwgMzAwKTsgLy8gV2FpdCBmb3IgdGhlIGZhZGUtb3V0IHRvIGZpbmlzaCBiZWZvcmUgY2hhbmdpbmcgdGV4dFxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0VmlzaWJsZSh0cnVlKTsgLy8gRmFkZS1pbiB0aGUgbmV3IHRleHQgYWZ0ZXIgYW5vdGhlciBkZWxheVxuICAgICAgfSwgNjAwKTsgLy8gU3RhcnQgdGhlIGZhZGUtaW4gYWZ0ZXIgdGhlIHRleHQgaGFzIGNoYW5nZWRcblxuICAgIH0sIDM1MDApO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH07XG59LCBbXSk7XG5cblxuXG4gcmV0dXJuIChcbiAgICA8ZGl2IGRhdGEtdGhlbWU9XCJwYWdlc2FrZVwiPlxuICAgIDxkaXYgIGNsYXNzTmFtZT17YGhlcm8gJHt2YXJpYW50c1t2YXJpYW50XS5zdHlsaW5nfSBgfT5cbiAgICAgICAgICAgIHsvKjxkaXYgIGNsYXNzTmFtZT1cInNjcm9sbC1wLTAgYmctZ3JhZGllbnQtdG8tciBmcm9tLXByaW1hcnkgdG8tc2Vjb25kYXJ5IHRleHQtd2hpdGUgcHktMTAgcHgtNFwiPiovfVxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1jb250ZW50IGZsZXgtY29sICAgaXRlbXMtc3RhcnRcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT17J2ZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQganVzdGlmeS1jZW50ZXInfT5cbiAgICA8aW1nIHNyYz17Jy9wYWdlc2FrZV9sb2dvLnN2Zyd9IGNsYXNzTmFtZT1cImgtNDAgdy00MFwiIC8+XG4gICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiaHR0cHM6Ly9kZXh0ZXJsYWJzLXB1YmxpYy5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9wYWdlc2FrZV9sb2dvLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID1cIiBiZy1zdG9uZS0zMDAgbWF4LXctc20gcm91bmRlZC1sZyBzaGFkb3ctMnhsIGgtMTYgdy0xNiBcIlxuICAgICAgICAgICAgICAgICAgICAvPiovfVxuICAgICAgICAgICAgICAgICAgICB7Lyo8aDQgY2xhc3NOYW1lPXsndGV4dC14bCAnfT5QYWdlc2FrZSB7bmFtZX0ge2luZGV4fTwvaDQ+Ki99XG5cbiAgICA8L2Rpdj5cblxuXG5cbiAgICA8ZGl2PlxuICAgICAgIDxoMSBcbiAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC00eGwgYH1cbiAgICAgID4ge3ZhcmlhbnRzW3ZhcmlhbnRdLmhlYWRlcjF9IDxiciAvPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXN1Y2Nlc3MnPnt2YXJpYW50c1t2YXJpYW50XS5oZWFkZXIyfTwvc3Bhbj5cbiAgICB7Lyo8c3BhbiBjbGFzc05hbWU9e2Ake3RleHRJbmRleCA9PT0gMCA/ICd0ZXh0LWdyZWVuLTMwMCcgOiB0ZXh0SW5kZXg9PT0xID8gJ3RleHQtYmx1ZS0zMDAnIDogJ3RleHQtcmVkLTMwMCd9ICBmb250LWJvbGQgbXQtNCB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMzAwICR7dmlzaWJsZSA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS0wJ31gfT57Y3VycmVudFRleHR9PC9zcGFuPiovfVxuICAgIDwvaDE+XG57LyogICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIFwiPnt2YXJpYW50c1t2YXJpYW50XS5zdWJoZWFkZXJ9IDxiciAvPlxuXG4gICAgPC9oMT4qL31cbiAgICB7Lyo8cCBjbGFzc05hbWU9XCJweS0yXCI+UGFnZXNha2UgbGV0cyB5b3UgYnVpbGQgY29tcGxldGUgd2Vic2l0ZXMsIHdpdGggY29udGVudCwgbW9uZXRpemF0aW9uIG9wdGlvbnMsIGFuZCBiZWF1dGlmdWwgZGVzaWduLCBhbGwgaW4gc2Vjb25kcy4gRm9yIGZyZWUuIDwvcD4qL31cbiAgICB7Lyo8cCBjbGFzc05hbWU9XCJweS0yXCI+U2VlIHdoYXQgdGhlIHNhdnZpZXN0IGNyZWF0b3JzIG9uIHRoZSB3ZWIgYXJlIGFscmVhZHkgZG9pbmcsIGNoZWNrb3V0IFBhZ2VzYWtlIHRvZGF5ISA8L3A+Ki99XG4gICBcbiAgICA8aDEgY2xhc3NOYW1lPXtgdGV4dC0yeGwgJHt2aXNpYmxlID8gJycgOiAndHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTMwMCBvcGFjaXR5LTAnfSAke3RleHRJbmRleCA9PT0gMCA/ICd0ZXh0LWdyZWVuLTMwMCcgOiB0ZXh0SW5kZXg9PT0xID8gJ3RleHQtYmx1ZS0zMDAnIDogJ3RleHQtcmVkLTMwMCAnfSAgZm9udC1ib2xkIG10LTQgYH0+e2N1cnJlbnRUZXh0fTwvaDE+XG4gICAgPGRpdiBjbGFzc05hbWU9eydmbGV4IGp1c3RpZnktY2VudGVyIGdhcC00IG10LTQnfT5cbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1vdXRsaW5lXCI+PExpbmsgaHJlZj17J2h0dHBzOi8vcGFnZXNha2UuY29tJ30+TGVhcm4gTW9yZTwvTGluaz48L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPjxMaW5rIGhyZWY9eydodHRwczovL3BhZ2VzYWtlLmNvbSd9PlN0YXJ0IGZvciBGcmVlPC9MaW5rPjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbnsvKjxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLXNpZGUgY2FyZC1jb21wYWN0IGJnLWJhc2UtMTAwIHNoYWRvdy14bFwiPlxuICA8ZmlndXJlPiA8RmFDYXJ0U2hvcHBpbmcgY2xhc3NOYW1lPSdoLTggdy04IGJnLWdyZWVuLTUwMCB0ZXh0LXByaW1hcnknIC8+PC9maWd1cmU+XG4gIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgPGgyIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5OZXcgbW92aWUgaXMgcmVsZWFzZWQhPC9oMj5cbiAgICA8cD5DbGljayB0aGUgYnV0dG9uIHRvIHdhdGNoIG9uIEpldGZsaXggYXBwLjwvcD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYWN0aW9ucyBqdXN0aWZ5LWVuZFwiPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5XYXRjaDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PiovfVxuXG5cbjwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZEJsb2NrO1xuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJGYUNhcnRTaG9wcGluZyIsIkFkQmxvY2siLCJuYW1lIiwicGFnZSIsInNpdGUiLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0QXJyYXkiLCJjdXJyZW50VGV4dCIsInNldEN1cnJlbnRUZXh0IiwidGV4dEluZGV4Iiwic2V0VGV4dEluZGV4IiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ2YXJpYW50cyIsInZhcmlhbnQxIiwic3R5bGluZyIsImhlYWRlcjEiLCJoZWFkZXIyIiwic3ViaGVhZGVyIiwiYm9keSIsImN0YTFfbGluayIsImN0YTJfbGluayIsImN0YTFfdGV4dCIsImN0YTJfdGV4dCIsInZhcmlhbnQyIiwidXNlVmFyaWFudDIiLCJ2YXJpYW50IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInNldFRpbWVvdXQiLCJwcmV2SW5kZXgiLCJuZXdJbmRleCIsImxlbmd0aCIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJkYXRhLXRoZW1lIiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaDEiLCJiciIsInNwYW4iLCJidXR0b24iLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/AdBlock.js\n"));

/***/ })

});