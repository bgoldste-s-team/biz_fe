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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst AdBlock = (param)=>{\n    let { name , page , site , index  } = param;\n    _s();\n    console.log(\"adblock\", page, site, index, name);\n    const textArray = [\n        \"First message\",\n        \"Second message\",\n        \"Third message\"\n    ];\n    const [currentText, setCurrentText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(textArray[0]);\n    const [textIndex, setTextIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const variants = {\n        // variant1: {\n        //     // styling: \"bg-gradient-to-r from-black via-purple-800 to-black text-white p-8 text-center\",\n        //     styling:\"bg-neutral-content text-neutral p-8 text-center\",\n        //     header1:\"Don't Just Browse The Web.\",\n        //     header2:\"Create It.\",\n        //     subheader:\"\",\n        //     body: \"\",\n        //     cta1_link:\"\",\n        //     cta2_link:\"\",\n        //     cta1_text:\"\",\n        //     cta2_text:\"\"\n        // },\n        variant1: {\n            // styling: \"bg-gradient-to-r from-black via-purple-800 to-black text-white p-8 text-center\",\n            styling: \"bg-neutral-content text-neutral p-8 text-left\",\n            header1: \"Your Side Hustle Is Calling\",\n            header2: \"Create It.\",\n            subheader: \"\",\n            body: \"\",\n            cta1_link: \"\",\n            cta2_link: \"\",\n            cta1_text: \"\",\n            cta2_text: \"\",\n            textArray: [\n                \"Portfolio Websites\",\n                \"Review Sites\",\n                \"Small Businesses\"\n            ]\n        },\n        variant2: {\n            styling: \"bg-neutral-content text-neutral p-8 text-right\",\n            header1: \"Revenue Generating Websites\",\n            header2: \"Ready in seconds.\",\n            subheader: \"Your Side Hustle is Calling.\",\n            body: \"\",\n            cta1_link: \"\",\n            cta2_link: \"\",\n            cta1_text: \"\",\n            cta2_text: \"\",\n            textArray: [\n                \"Ready in seconds.\",\n                \"Actually Free\",\n                \"SEO Optimized\"\n            ]\n        }\n    };\n    const useVariant2 = index % 2 === 0;\n    const variant = index % 2 === 1 ? \"variant1\" : \"variant2\";\n    // useEffect(() => {\n    //    const interval = setInterval(() => {\n    //      setVisible(false);\n    //      setTextIndex((prevIndex) => {\n    //        const newIndex = prevIndex + 1 === variants[variant].textArray.length ? 0 : prevIndex + 1;\n    //        setTimeout(() => {\n    //          setCurrentText(variants[variant].textArray[newIndex]);\n    //          setVisible(true);\n    //        }, 300); // This delay is for the fade-out effect to be noticeable before the text changes\n    //        return newIndex;\n    //      });\n    //    }, 3500); // Giving some extra time for animations\n    //    return () => {\n    //      clearInterval(interval);\n    //    };\n    //  }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setVisible(false); // Starts the fade-out\n            setTimeout(()=>{\n                setTextIndex((prevIndex)=>{\n                    const newIndex = prevIndex + 1 === variants[variant].textArray.length ? 0 : prevIndex + 1;\n                    setCurrentText(variants[variant].textArray[newIndex]);\n                    return newIndex;\n                });\n            }, 300); // Wait for the fade-out to finish before changing text\n            setTimeout(()=>{\n                setVisible(true); // Fade-in the new text after another delay\n            }, 600); // Start the fade-in after the text has changed\n        }, 3500);\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        \"data-theme\": \"pagesake\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"hero \".concat(variants[variant].styling, \" \"),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hero-content flex-col   items-start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-start justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/pagesake_logo.svg\",\n                            className: \"h-28 w-28\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                            lineNumber: 132,\n                            columnNumber: 5\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                        lineNumber: 131,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-4xl \",\n                                children: [\n                                    \" \",\n                                    variants[variant].header1,\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 145,\n                                        columnNumber: 37\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-success\",\n                                        children: variants[variant].header2\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 146,\n                                        columnNumber: 7\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 143,\n                                columnNumber: 8\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"py-2\",\n                                children: \"Pagesake lets you build complete websites, with content, monetization options, and beautiful design, all in seconds. For free. \"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 152,\n                                columnNumber: 5\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"py-2\",\n                                children: \"See what the savviest creators on the web are already doing, checkout Pagesake today! \"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 153,\n                                columnNumber: 5\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl text-right \".concat(visible ? \"\" : \"transition-opacity duration-300 opacity-0\", \" \").concat(textIndex === 0 ? \"text-green-300\" : textIndex === 1 ? \"text-blue-300\" : \"text-red-300 \", \"  font-bold mt-4 \"),\n                                children: currentText\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 159,\n                                columnNumber: 5\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center gap-4 mt-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-secondary btn-outline\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"https://pagesake.com\",\n                                            children: \"Learn More\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                            lineNumber: 161,\n                                            columnNumber: 55\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 161,\n                                        columnNumber: 5\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-primary\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"https://pagesake.com\",\n                                            children: \"Start for Free\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                            lineNumber: 162,\n                                            columnNumber: 41\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 162,\n                                        columnNumber: 5\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 160,\n                                columnNumber: 5\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                        lineNumber: 142,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                lineNumber: 130,\n                columnNumber: 5\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n            lineNumber: 128,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n        lineNumber: 127,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AdBlock, \"VfzrQ5a30aEbx1D5PVciVzf3WBk=\");\n_c = AdBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdBlock);\nvar _c;\n$RefreshReg$(_c, \"AdBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXNCRixXQUFVOzs7Ozs7Ozs7OztrQ0FVMUMsOERBQUNGOzswQ0FDRSw4REFBQ0s7Z0NBQ0FILFdBQVk7O29DQUNiO29DQUFFdkIsUUFBUSxDQUFDYSxRQUFRLENBQUNWLE9BQU87b0NBQUM7a0RBQUMsOERBQUN3Qjs7Ozs7a0RBQy9CLDhEQUFDQzt3Q0FBS0wsV0FBVTtrREFBZ0J2QixRQUFRLENBQUNhLFFBQVEsQ0FBQ1QsT0FBTzs7Ozs7Ozs7Ozs7OzBDQU0zRCw4REFBQ3lCO2dDQUFFTixXQUFVOzBDQUFPOzs7Ozs7MENBQ3BCLDhEQUFDTTtnQ0FBRU4sV0FBVTswQ0FBTzs7Ozs7OzBDQU1wQiw4REFBQ0c7Z0NBQUdILFdBQVcsdUJBQXFGM0IsT0FBOURFLFVBQVUsS0FBSywyQ0FBMkMsRUFBQyxLQUEwRixPQUF2RkYsY0FBYyxJQUFJLG1CQUFtQkEsY0FBWSxJQUFJLGtCQUFrQixlQUFlLEVBQUM7MENBQXFCRjs7Ozs7OzBDQUNoTiw4REFBQzJCO2dDQUFJRSxXQUFXOztrREFDaEIsOERBQUNPO3dDQUFPUCxXQUFVO2tEQUFnQyw0RUFBQ3ZDLGtEQUFJQTs0Q0FBQytDLE1BQU07c0RBQXdCOzs7Ozs7Ozs7OztrREFDdEYsOERBQUNEO3dDQUFPUCxXQUFVO2tEQUFrQiw0RUFBQ3ZDLGtEQUFJQTs0Q0FBQytDLE1BQU07c0RBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZNUU7R0FuS003QztLQUFBQTtBQXFLTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BZEJsb2NrLmpzP2Y1YjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7XG4gICBGYUNhcnRTaG9wcGluZ1xuXG59IGZyb20gXCJyZWFjdC1pY29ucy9mYTZcIjtcblxuXG5cblxuY29uc3QgQWRCbG9jayA9ICh7bmFtZSwgcGFnZSwgc2l0ZSwgaW5kZXh9KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2FkYmxvY2snLCBwYWdlLCBzaXRlLCBpbmRleCwgbmFtZSlcblxuICAgIGNvbnN0IHRleHRBcnJheSA9IFtcbiAgICAgICdGaXJzdCBtZXNzYWdlJyxcbiAgICAgICdTZWNvbmQgbWVzc2FnZScsXG4gICAgICAnVGhpcmQgbWVzc2FnZScsXG4gIC8vIC4uLiBhZGQgYXMgbWFueSBtZXNzYWdlcyBhcyB5b3Ugd2FudFxuICAgICAgXTtcblxuICAgIGNvbnN0IFtjdXJyZW50VGV4dCwgc2V0Q3VycmVudFRleHRdID0gdXNlU3RhdGUodGV4dEFycmF5WzBdKTtcbiAgICBjb25zdCBbdGV4dEluZGV4LCBzZXRUZXh0SW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUodHJ1ZSk7XG4gXG5cbiAgICBjb25zdCB2YXJpYW50cyA9IHtcbiAgICAgICAgLy8gdmFyaWFudDE6IHtcbiAgICAgICAgLy8gICAgIC8vIHN0eWxpbmc6IFwiYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsYWNrIHZpYS1wdXJwbGUtODAwIHRvLWJsYWNrIHRleHQtd2hpdGUgcC04IHRleHQtY2VudGVyXCIsXG4gICAgICAgIC8vICAgICBzdHlsaW5nOlwiYmctbmV1dHJhbC1jb250ZW50IHRleHQtbmV1dHJhbCBwLTggdGV4dC1jZW50ZXJcIixcbiAgICAgICAgLy8gICAgIGhlYWRlcjE6XCJEb24ndCBKdXN0IEJyb3dzZSBUaGUgV2ViLlwiLFxuICAgICAgICAvLyAgICAgaGVhZGVyMjpcIkNyZWF0ZSBJdC5cIixcbiAgICAgICAgLy8gICAgIHN1YmhlYWRlcjpcIlwiLFxuICAgICAgICAvLyAgICAgYm9keTogXCJcIixcbiAgICAgICAgLy8gICAgIGN0YTFfbGluazpcIlwiLFxuICAgICAgICAvLyAgICAgY3RhMl9saW5rOlwiXCIsXG4gICAgICAgIC8vICAgICBjdGExX3RleHQ6XCJcIixcbiAgICAgICAgLy8gICAgIGN0YTJfdGV4dDpcIlwiXG4gICAgICAgIC8vIH0sXG4gICAgICAgIHZhcmlhbnQxOiB7XG4gICAgICAgICAgICAvLyBzdHlsaW5nOiBcImJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibGFjayB2aWEtcHVycGxlLTgwMCB0by1ibGFjayB0ZXh0LXdoaXRlIHAtOCB0ZXh0LWNlbnRlclwiLFxuICAgICAgICAgICAgc3R5bGluZzpcImJnLW5ldXRyYWwtY29udGVudCB0ZXh0LW5ldXRyYWwgcC04IHRleHQtbGVmdFwiLFxuICAgICAgICAgICAgaGVhZGVyMTpcIllvdXIgU2lkZSBIdXN0bGUgSXMgQ2FsbGluZ1wiLFxuICAgICAgICAgICAgaGVhZGVyMjpcIkNyZWF0ZSBJdC5cIixcbiAgICAgICAgICAgIHN1YmhlYWRlcjpcIlwiLFxuICAgICAgICAgICAgYm9keTogXCJcIixcbiAgICAgICAgICAgIGN0YTFfbGluazpcIlwiLFxuICAgICAgICAgICAgY3RhMl9saW5rOlwiXCIsXG4gICAgICAgICAgICBjdGExX3RleHQ6XCJcIixcbiAgICAgICAgICAgIGN0YTJfdGV4dDpcIlwiLFxuICAgICAgICAgICAgdGV4dEFycmF5OiBbXG4gICAgICAgICAgICAgICAgICAnUG9ydGZvbGlvIFdlYnNpdGVzJyxcbiAgICAgICAgICAgICAgICAgICdSZXZpZXcgU2l0ZXMnLFxuICAgICAgICAgICAgICAgICAgJ1NtYWxsIEJ1c2luZXNzZXMnLFxuICAgICAgICAgICAgICAvLyAuLi4gYWRkIGFzIG1hbnkgbWVzc2FnZXMgYXMgeW91IHdhbnRcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgdmFyaWFudDI6IHtcbiAgICAgICAgIHN0eWxpbmc6IFwiYmctbmV1dHJhbC1jb250ZW50IHRleHQtbmV1dHJhbCBwLTggdGV4dC1yaWdodFwiLFxuICAgICAgICAgaGVhZGVyMTpcIlJldmVudWUgR2VuZXJhdGluZyBXZWJzaXRlc1wiLFxuICAgICAgICAgaGVhZGVyMjpcIlJlYWR5IGluIHNlY29uZHMuXCIsXG4gICAgICAgICBzdWJoZWFkZXI6XCJZb3VyIFNpZGUgSHVzdGxlIGlzIENhbGxpbmcuXCIsXG4gICAgICAgICBib2R5OiBcIlwiLFxuICAgICAgICAgY3RhMV9saW5rOlwiXCIsXG4gICAgICAgICBjdGEyX2xpbms6XCJcIixcbiAgICAgICAgIGN0YTFfdGV4dDpcIlwiLFxuICAgICAgICAgY3RhMl90ZXh0OlwiXCIsXG4gICAgICAgICAgICB0ZXh0QXJyYXk6IFtcbiAgICAgICAgICAgICAgICdSZWFkeSBpbiBzZWNvbmRzLicsXG4gICAgICAgICAgICAgICAnQWN0dWFsbHkgRnJlZScsXG4gICAgICAgICAgICAgICAnU0VPIE9wdGltaXplZCcsXG4gICAgICAgICAgICAgXG4gICAgICAgICAgIC8vIC4uLiBhZGQgYXMgbWFueSBtZXNzYWdlcyBhcyB5b3Ugd2FudFxuICAgICAgICAgICAgICAgXVxuICAgICB9XG4gfVxuXG4gY29uc3QgdXNlVmFyaWFudDIgPSBpbmRleCAlIDIgPT09IDAgXG5cbiBjb25zdCB2YXJpYW50ID0gaW5kZXggJSAyID09PSAxID8gJ3ZhcmlhbnQxJyA6J3ZhcmlhbnQyJ1xuXG5cblxuIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gLy8gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gLy8gICAgICBzZXRWaXNpYmxlKGZhbHNlKTtcbiAvLyAgICAgIHNldFRleHRJbmRleCgocHJldkluZGV4KSA9PiB7XG4gLy8gICAgICAgIGNvbnN0IG5ld0luZGV4ID0gcHJldkluZGV4ICsgMSA9PT0gdmFyaWFudHNbdmFyaWFudF0udGV4dEFycmF5Lmxlbmd0aCA/IDAgOiBwcmV2SW5kZXggKyAxO1xuIC8vICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAvLyAgICAgICAgICBzZXRDdXJyZW50VGV4dCh2YXJpYW50c1t2YXJpYW50XS50ZXh0QXJyYXlbbmV3SW5kZXhdKTtcbiAvLyAgICAgICAgICBzZXRWaXNpYmxlKHRydWUpO1xuIC8vICAgICAgICB9LCAzMDApOyAvLyBUaGlzIGRlbGF5IGlzIGZvciB0aGUgZmFkZS1vdXQgZWZmZWN0IHRvIGJlIG5vdGljZWFibGUgYmVmb3JlIHRoZSB0ZXh0IGNoYW5nZXNcbiAgICAgICAgXG4gLy8gICAgICAgIHJldHVybiBuZXdJbmRleDtcbiAvLyAgICAgIH0pO1xuIC8vICAgIH0sIDM1MDApOyAvLyBHaXZpbmcgc29tZSBleHRyYSB0aW1lIGZvciBhbmltYXRpb25zXG5cbiAvLyAgICByZXR1cm4gKCkgPT4ge1xuIC8vICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gLy8gICAgfTtcbiAvLyAgfSwgW10pO1xudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldFZpc2libGUoZmFsc2UpOyAvLyBTdGFydHMgdGhlIGZhZGUtb3V0XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRUZXh0SW5kZXgoKHByZXZJbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gcHJldkluZGV4ICsgMSA9PT0gdmFyaWFudHNbdmFyaWFudF0udGV4dEFycmF5Lmxlbmd0aCA/IDAgOiBwcmV2SW5kZXggKyAxO1xuICAgICAgICAgIHNldEN1cnJlbnRUZXh0KHZhcmlhbnRzW3ZhcmlhbnRdLnRleHRBcnJheVtuZXdJbmRleF0pO1xuICAgICAgICAgIHJldHVybiBuZXdJbmRleDtcbiAgICAgICAgfSk7XG4gICAgICB9LCAzMDApOyAvLyBXYWl0IGZvciB0aGUgZmFkZS1vdXQgdG8gZmluaXNoIGJlZm9yZSBjaGFuZ2luZyB0ZXh0XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRWaXNpYmxlKHRydWUpOyAvLyBGYWRlLWluIHRoZSBuZXcgdGV4dCBhZnRlciBhbm90aGVyIGRlbGF5XG4gICAgICB9LCA2MDApOyAvLyBTdGFydCB0aGUgZmFkZS1pbiBhZnRlciB0aGUgdGV4dCBoYXMgY2hhbmdlZFxuXG4gICAgfSwgMzUwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfTtcbn0sIFtdKTtcblxuXG5cbiByZXR1cm4gKFxuICAgIDxkaXYgZGF0YS10aGVtZT1cInBhZ2VzYWtlXCI+XG4gICAgPGRpdiAgY2xhc3NOYW1lPXtgaGVybyAke3ZhcmlhbnRzW3ZhcmlhbnRdLnN0eWxpbmd9IGB9PlxuICAgICAgICAgICAgey8qPGRpdiAgY2xhc3NOYW1lPVwic2Nyb2xsLXAtMCBiZy1ncmFkaWVudC10by1yIGZyb20tcHJpbWFyeSB0by1zZWNvbmRhcnkgdGV4dC13aGl0ZSBweS0xMCBweC00XCI+Ki99XG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWNvbnRlbnQgZmxleC1jb2wgICBpdGVtcy1zdGFydFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPXsnZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCBqdXN0aWZ5LWNlbnRlcid9PlxuICAgIDxpbWcgc3JjPXsnL3BhZ2VzYWtlX2xvZ28uc3ZnJ30gY2xhc3NOYW1lPVwiaC0yOCB3LTI4XCIgLz5cbiAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9XCJodHRwczovL2RleHRlcmxhYnMtcHVibGljLnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3BhZ2VzYWtlX2xvZ28ucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwiIGJnLXN0b25lLTMwMCBtYXgtdy1zbSByb3VuZGVkLWxnIHNoYWRvdy0yeGwgaC0xNiB3LTE2IFwiXG4gICAgICAgICAgICAgICAgICAgIC8+Ki99XG4gICAgICAgICAgICAgICAgICAgIHsvKjxoNCBjbGFzc05hbWU9eyd0ZXh0LXhsICd9PlBhZ2VzYWtlIHtuYW1lfSB7aW5kZXh9PC9oND4qL31cblxuICAgIDwvZGl2PlxuXG5cblxuICAgIDxkaXY+XG4gICAgICAgPGgxIFxuICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LTR4bCBgfVxuICAgICAgPiB7dmFyaWFudHNbdmFyaWFudF0uaGVhZGVyMX0gPGJyIC8+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtc3VjY2Vzcyc+e3ZhcmlhbnRzW3ZhcmlhbnRdLmhlYWRlcjJ9PC9zcGFuPlxuICAgIHsvKjxzcGFuIGNsYXNzTmFtZT17YCR7dGV4dEluZGV4ID09PSAwID8gJ3RleHQtZ3JlZW4tMzAwJyA6IHRleHRJbmRleD09PTEgPyAndGV4dC1ibHVlLTMwMCcgOiAndGV4dC1yZWQtMzAwJ30gIGZvbnQtYm9sZCBtdC00IHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0zMDAgJHt2aXNpYmxlID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTAnfWB9PntjdXJyZW50VGV4dH08L3NwYW4+Ki99XG4gICAgPC9oMT5cbnsvKiAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgXCI+e3ZhcmlhbnRzW3ZhcmlhbnRdLnN1YmhlYWRlcn0gPGJyIC8+XG5cbiAgICA8L2gxPiovfVxuICAgIDxwIGNsYXNzTmFtZT1cInB5LTJcIj5QYWdlc2FrZSBsZXRzIHlvdSBidWlsZCBjb21wbGV0ZSB3ZWJzaXRlcywgd2l0aCBjb250ZW50LCBtb25ldGl6YXRpb24gb3B0aW9ucywgYW5kIGJlYXV0aWZ1bCBkZXNpZ24sIGFsbCBpbiBzZWNvbmRzLiBGb3IgZnJlZS4gPC9wPlxuICAgIDxwIGNsYXNzTmFtZT1cInB5LTJcIj5TZWUgd2hhdCB0aGUgc2F2dmllc3QgY3JlYXRvcnMgb24gdGhlIHdlYiBhcmUgYWxyZWFkeSBkb2luZywgY2hlY2tvdXQgUGFnZXNha2UgdG9kYXkhIDwvcD5cbiAgICBcblxuXG5cblxuICAgIDxoMSBjbGFzc05hbWU9e2B0ZXh0LTJ4bCB0ZXh0LXJpZ2h0ICR7dmlzaWJsZSA/ICcnIDogJ3RyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0zMDAgb3BhY2l0eS0wJ30gJHt0ZXh0SW5kZXggPT09IDAgPyAndGV4dC1ncmVlbi0zMDAnIDogdGV4dEluZGV4PT09MSA/ICd0ZXh0LWJsdWUtMzAwJyA6ICd0ZXh0LXJlZC0zMDAgJ30gIGZvbnQtYm9sZCBtdC00IGB9PntjdXJyZW50VGV4dH08L2gxPlxuICAgIDxkaXYgY2xhc3NOYW1lPXsnZmxleCBqdXN0aWZ5LWNlbnRlciBnYXAtNCBtdC00J30+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tb3V0bGluZVwiPjxMaW5rIGhyZWY9eydodHRwczovL3BhZ2VzYWtlLmNvbSd9PkxlYXJuIE1vcmU8L0xpbms+PC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj48TGluayBocmVmPXsnaHR0cHM6Ly9wYWdlc2FrZS5jb20nfT5TdGFydCBmb3IgRnJlZTwvTGluaz48L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cblxuXG48L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRCbG9jaztcblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiRmFDYXJ0U2hvcHBpbmciLCJBZEJsb2NrIiwibmFtZSIsInBhZ2UiLCJzaXRlIiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwidGV4dEFycmF5IiwiY3VycmVudFRleHQiLCJzZXRDdXJyZW50VGV4dCIsInRleHRJbmRleCIsInNldFRleHRJbmRleCIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidmFyaWFudHMiLCJ2YXJpYW50MSIsInN0eWxpbmciLCJoZWFkZXIxIiwiaGVhZGVyMiIsInN1YmhlYWRlciIsImJvZHkiLCJjdGExX2xpbmsiLCJjdGEyX2xpbmsiLCJjdGExX3RleHQiLCJjdGEyX3RleHQiLCJ2YXJpYW50MiIsInVzZVZhcmlhbnQyIiwidmFyaWFudCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJzZXRUaW1lb3V0IiwicHJldkluZGV4IiwibmV3SW5kZXgiLCJsZW5ndGgiLCJjbGVhckludGVydmFsIiwiZGl2IiwiZGF0YS10aGVtZSIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImgxIiwiYnIiLCJzcGFuIiwicCIsImJ1dHRvbiIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/AdBlock.js\n"));

/***/ })

});