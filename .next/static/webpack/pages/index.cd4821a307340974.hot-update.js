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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst AdBlock = (param)=>{\n    let { name , page , site , index  } = param;\n    _s();\n    console.log(\"adblock\", page, site, index, name);\n    const textArray = [\n        \"First message\",\n        \"Second message\",\n        \"Third message\"\n    ];\n    const [currentText, setCurrentText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(textArray[0]);\n    const [textIndex, setTextIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const variants = {\n        // variant1: {\n        //     // styling: \"bg-gradient-to-r from-black via-purple-800 to-black text-white p-8 text-center\",\n        //     styling:\"bg-neutral-content text-neutral p-8 text-center\",\n        //     header1:\"Don't Just Browse The Web.\",\n        //     header2:\"Create It.\",\n        //     subheader:\"\",\n        //     body: \"\",\n        //     cta1_link:\"\",\n        //     cta2_link:\"\",\n        //     cta1_text:\"\",\n        //     cta2_text:\"\"\n        // },\n        variant1: {\n            // styling: \"bg-gradient-to-r from-black via-purple-800 to-black text-white p-8 text-center\",\n            styling: \"bg-neutral-content text-neutral p-8 text-left\",\n            header1: \"Your Side Hustle Is Calling\",\n            header2: \"Create It.\",\n            subheader: \"\",\n            body: \"\",\n            cta1_link: \"\",\n            cta2_link: \"\",\n            cta1_text: \"\",\n            cta2_text: \"\",\n            textArray: [\n                \"Portfolio Websites\",\n                \"Review Sites\",\n                \"Small Businesses\"\n            ]\n        },\n        variant2: {\n            styling: \"bg-neutral-content text-neutral p-8 text-right\",\n            header1: \"Revenue Generating Websites\",\n            header2: \"Ready in seconds.\",\n            subheader: \"Your Side Hustle is Calling.\",\n            body: \"\",\n            cta1_link: \"\",\n            cta2_link: \"\",\n            cta1_text: \"\",\n            cta2_text: \"\",\n            textArray: [\n                \"Ready in seconds.\",\n                \"Actually Free\",\n                \"SEO Optimized\"\n            ]\n        }\n    };\n    const useVariant2 = index % 2 === 0;\n    const variant = index % 2 === 1 ? \"variant1\" : \"variant2\";\n    // useEffect(() => {\n    //    const interval = setInterval(() => {\n    //      setVisible(false);\n    //      setTextIndex((prevIndex) => {\n    //        const newIndex = prevIndex + 1 === variants[variant].textArray.length ? 0 : prevIndex + 1;\n    //        setTimeout(() => {\n    //          setCurrentText(variants[variant].textArray[newIndex]);\n    //          setVisible(true);\n    //        }, 300); // This delay is for the fade-out effect to be noticeable before the text changes\n    //        return newIndex;\n    //      });\n    //    }, 3500); // Giving some extra time for animations\n    //    return () => {\n    //      clearInterval(interval);\n    //    };\n    //  }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setVisible(false); // Starts the fade-out\n            setTimeout(()=>{\n                setTextIndex((prevIndex)=>{\n                    const newIndex = prevIndex + 1 === variants[variant].textArray.length ? 0 : prevIndex + 1;\n                    setCurrentText(variants[variant].textArray[newIndex]);\n                    return newIndex;\n                });\n            }, 300); // Wait for the fade-out to finish before changing text\n            setTimeout(()=>{\n                setVisible(true); // Fade-in the new text after another delay\n            }, 600); // Start the fade-in after the text has changed\n        }, 3500);\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        \"data-theme\": \"pagesake\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"hero \".concat(variants[variant].styling, \" \"),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hero-content flex-col   items-start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-start justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/pagesake_logo.svg\",\n                            className: \"h-28 w-28\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                            lineNumber: 132,\n                            columnNumber: 5\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                        lineNumber: 131,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-4xl \",\n                                children: [\n                                    \" \",\n                                    variants[variant].header1,\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 145,\n                                        columnNumber: 37\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-success\",\n                                        children: variants[variant].header2\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 146,\n                                        columnNumber: 7\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 143,\n                                columnNumber: 8\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl text-right transform font-bold mt-4 \\n    \".concat(visible ? \"translate-x-0 wiggle\" : \"translate-x-full\", \" \\n    \").concat(textIndex === 0 ? \"text-green-300\" : textIndex === 1 ? \"text-blue-300\" : \"text-red-300\", \" \\n    transition-transform duration-300 ease-in-out\"),\n                                children: currentText\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 158,\n                                columnNumber: 5\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl text-right \".concat(visible ? \"\" : \"transition-opacity duration-300 opacity-0\", \" \").concat(textIndex === 0 ? \"text-green-300\" : textIndex === 1 ? \"text-blue-300\" : \"text-red-300 \", \"  font-bold mt-4 \"),\n                                children: currentText\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 164,\n                                columnNumber: 5\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center gap-4 mt-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-secondary btn-outline\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"https://pagesake.com\",\n                                            children: \"Learn More\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                            lineNumber: 166,\n                                            columnNumber: 55\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 166,\n                                        columnNumber: 5\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-primary\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"https://pagesake.com\",\n                                            children: \"Start for Free\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                            lineNumber: 167,\n                                            columnNumber: 41\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 167,\n                                        columnNumber: 5\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 165,\n                                columnNumber: 5\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                        lineNumber: 142,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                lineNumber: 130,\n                columnNumber: 5\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n            lineNumber: 128,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n        lineNumber: 127,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AdBlock, \"VfzrQ5a30aEbx1D5PVciVzf3WBk=\");\n_c = AdBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdBlock);\nvar _c;\n$RefreshReg$(_c, \"AdBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXNCRixXQUFVOzs7Ozs7Ozs7OztrQ0FVMUMsOERBQUNGOzswQ0FDRSw4REFBQ0s7Z0NBQ0FILFdBQVk7O29DQUNiO29DQUFFdkIsUUFBUSxDQUFDYSxRQUFRLENBQUNWLE9BQU87b0NBQUM7a0RBQUMsOERBQUN3Qjs7Ozs7a0RBQy9CLDhEQUFDQzt3Q0FBS0wsV0FBVTtrREFBZ0J2QixRQUFRLENBQUNhLFFBQVEsQ0FBQ1QsT0FBTzs7Ozs7Ozs7Ozs7OzBDQVkzRCw4REFBQ3NCO2dDQUFHSCxXQUFXLHNEQUViM0IsT0FEQUUsVUFBVSx5QkFBeUIsa0JBQWtCLEVBQUMsV0FDa0MsT0FBeEZGLGNBQWMsSUFBSSxtQkFBbUJBLGNBQWMsSUFBSSxrQkFBa0IsY0FBYyxFQUFDOzBDQUV6RkY7Ozs7OzswQ0FFRCw4REFBQ2dDO2dDQUFHSCxXQUFXLHVCQUFxRjNCLE9BQTlERSxVQUFVLEtBQUssMkNBQTJDLEVBQUMsS0FBMEYsT0FBdkZGLGNBQWMsSUFBSSxtQkFBbUJBLGNBQVksSUFBSSxrQkFBa0IsZUFBZSxFQUFDOzBDQUFxQkY7Ozs7OzswQ0FDaE4sOERBQUMyQjtnQ0FBSUUsV0FBVzs7a0RBQ2hCLDhEQUFDTTt3Q0FBT04sV0FBVTtrREFBZ0MsNEVBQUN2QyxrREFBSUE7NENBQUM4QyxNQUFNO3NEQUF3Qjs7Ozs7Ozs7Ozs7a0RBQ3RGLDhEQUFDRDt3Q0FBT04sV0FBVTtrREFBa0IsNEVBQUN2QyxrREFBSUE7NENBQUM4QyxNQUFNO3NEQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUI1RTtHQWpMTTVDO0tBQUFBO0FBbUxOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FkQmxvY2suanM/ZjViOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHtcbiAgIEZhQ2FydFNob3BwaW5nXG5cbn0gZnJvbSBcInJlYWN0LWljb25zL2ZhNlwiO1xuXG5cblxuXG5jb25zdCBBZEJsb2NrID0gKHtuYW1lLCBwYWdlLCBzaXRlLCBpbmRleH0pID0+IHtcbiAgICBjb25zb2xlLmxvZygnYWRibG9jaycsIHBhZ2UsIHNpdGUsIGluZGV4LCBuYW1lKVxuXG4gICAgY29uc3QgdGV4dEFycmF5ID0gW1xuICAgICAgJ0ZpcnN0IG1lc3NhZ2UnLFxuICAgICAgJ1NlY29uZCBtZXNzYWdlJyxcbiAgICAgICdUaGlyZCBtZXNzYWdlJyxcbiAgLy8gLi4uIGFkZCBhcyBtYW55IG1lc3NhZ2VzIGFzIHlvdSB3YW50XG4gICAgICBdO1xuXG4gICAgY29uc3QgW2N1cnJlbnRUZXh0LCBzZXRDdXJyZW50VGV4dF0gPSB1c2VTdGF0ZSh0ZXh0QXJyYXlbMF0pO1xuICAgIGNvbnN0IFt0ZXh0SW5kZXgsIHNldFRleHRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiBcblxuICAgIGNvbnN0IHZhcmlhbnRzID0ge1xuICAgICAgICAvLyB2YXJpYW50MToge1xuICAgICAgICAvLyAgICAgLy8gc3R5bGluZzogXCJiZy1ncmFkaWVudC10by1yIGZyb20tYmxhY2sgdmlhLXB1cnBsZS04MDAgdG8tYmxhY2sgdGV4dC13aGl0ZSBwLTggdGV4dC1jZW50ZXJcIixcbiAgICAgICAgLy8gICAgIHN0eWxpbmc6XCJiZy1uZXV0cmFsLWNvbnRlbnQgdGV4dC1uZXV0cmFsIHAtOCB0ZXh0LWNlbnRlclwiLFxuICAgICAgICAvLyAgICAgaGVhZGVyMTpcIkRvbid0IEp1c3QgQnJvd3NlIFRoZSBXZWIuXCIsXG4gICAgICAgIC8vICAgICBoZWFkZXIyOlwiQ3JlYXRlIEl0LlwiLFxuICAgICAgICAvLyAgICAgc3ViaGVhZGVyOlwiXCIsXG4gICAgICAgIC8vICAgICBib2R5OiBcIlwiLFxuICAgICAgICAvLyAgICAgY3RhMV9saW5rOlwiXCIsXG4gICAgICAgIC8vICAgICBjdGEyX2xpbms6XCJcIixcbiAgICAgICAgLy8gICAgIGN0YTFfdGV4dDpcIlwiLFxuICAgICAgICAvLyAgICAgY3RhMl90ZXh0OlwiXCJcbiAgICAgICAgLy8gfSxcbiAgICAgICAgdmFyaWFudDE6IHtcbiAgICAgICAgICAgIC8vIHN0eWxpbmc6IFwiYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsYWNrIHZpYS1wdXJwbGUtODAwIHRvLWJsYWNrIHRleHQtd2hpdGUgcC04IHRleHQtY2VudGVyXCIsXG4gICAgICAgICAgICBzdHlsaW5nOlwiYmctbmV1dHJhbC1jb250ZW50IHRleHQtbmV1dHJhbCBwLTggdGV4dC1sZWZ0XCIsXG4gICAgICAgICAgICBoZWFkZXIxOlwiWW91ciBTaWRlIEh1c3RsZSBJcyBDYWxsaW5nXCIsXG4gICAgICAgICAgICBoZWFkZXIyOlwiQ3JlYXRlIEl0LlwiLFxuICAgICAgICAgICAgc3ViaGVhZGVyOlwiXCIsXG4gICAgICAgICAgICBib2R5OiBcIlwiLFxuICAgICAgICAgICAgY3RhMV9saW5rOlwiXCIsXG4gICAgICAgICAgICBjdGEyX2xpbms6XCJcIixcbiAgICAgICAgICAgIGN0YTFfdGV4dDpcIlwiLFxuICAgICAgICAgICAgY3RhMl90ZXh0OlwiXCIsXG4gICAgICAgICAgICB0ZXh0QXJyYXk6IFtcbiAgICAgICAgICAgICAgICAgICdQb3J0Zm9saW8gV2Vic2l0ZXMnLFxuICAgICAgICAgICAgICAgICAgJ1JldmlldyBTaXRlcycsXG4gICAgICAgICAgICAgICAgICAnU21hbGwgQnVzaW5lc3NlcycsXG4gICAgICAgICAgICAgIC8vIC4uLiBhZGQgYXMgbWFueSBtZXNzYWdlcyBhcyB5b3Ugd2FudFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB2YXJpYW50Mjoge1xuICAgICAgICAgc3R5bGluZzogXCJiZy1uZXV0cmFsLWNvbnRlbnQgdGV4dC1uZXV0cmFsIHAtOCB0ZXh0LXJpZ2h0XCIsXG4gICAgICAgICBoZWFkZXIxOlwiUmV2ZW51ZSBHZW5lcmF0aW5nIFdlYnNpdGVzXCIsXG4gICAgICAgICBoZWFkZXIyOlwiUmVhZHkgaW4gc2Vjb25kcy5cIixcbiAgICAgICAgIHN1YmhlYWRlcjpcIllvdXIgU2lkZSBIdXN0bGUgaXMgQ2FsbGluZy5cIixcbiAgICAgICAgIGJvZHk6IFwiXCIsXG4gICAgICAgICBjdGExX2xpbms6XCJcIixcbiAgICAgICAgIGN0YTJfbGluazpcIlwiLFxuICAgICAgICAgY3RhMV90ZXh0OlwiXCIsXG4gICAgICAgICBjdGEyX3RleHQ6XCJcIixcbiAgICAgICAgICAgIHRleHRBcnJheTogW1xuICAgICAgICAgICAgICAgJ1JlYWR5IGluIHNlY29uZHMuJyxcbiAgICAgICAgICAgICAgICdBY3R1YWxseSBGcmVlJyxcbiAgICAgICAgICAgICAgICdTRU8gT3B0aW1pemVkJyxcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgLy8gLi4uIGFkZCBhcyBtYW55IG1lc3NhZ2VzIGFzIHlvdSB3YW50XG4gICAgICAgICAgICAgICBdXG4gICAgIH1cbiB9XG5cbiBjb25zdCB1c2VWYXJpYW50MiA9IGluZGV4ICUgMiA9PT0gMCBcblxuIGNvbnN0IHZhcmlhbnQgPSBpbmRleCAlIDIgPT09IDEgPyAndmFyaWFudDEnIDondmFyaWFudDInXG5cblxuXG4gLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAvLyAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAvLyAgICAgIHNldFZpc2libGUoZmFsc2UpO1xuIC8vICAgICAgc2V0VGV4dEluZGV4KChwcmV2SW5kZXgpID0+IHtcbiAvLyAgICAgICAgY29uc3QgbmV3SW5kZXggPSBwcmV2SW5kZXggKyAxID09PSB2YXJpYW50c1t2YXJpYW50XS50ZXh0QXJyYXkubGVuZ3RoID8gMCA6IHByZXZJbmRleCArIDE7XG4gLy8gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuIC8vICAgICAgICAgIHNldEN1cnJlbnRUZXh0KHZhcmlhbnRzW3ZhcmlhbnRdLnRleHRBcnJheVtuZXdJbmRleF0pO1xuIC8vICAgICAgICAgIHNldFZpc2libGUodHJ1ZSk7XG4gLy8gICAgICAgIH0sIDMwMCk7IC8vIFRoaXMgZGVsYXkgaXMgZm9yIHRoZSBmYWRlLW91dCBlZmZlY3QgdG8gYmUgbm90aWNlYWJsZSBiZWZvcmUgdGhlIHRleHQgY2hhbmdlc1xuICAgICAgICBcbiAvLyAgICAgICAgcmV0dXJuIG5ld0luZGV4O1xuIC8vICAgICAgfSk7XG4gLy8gICAgfSwgMzUwMCk7IC8vIEdpdmluZyBzb21lIGV4dHJhIHRpbWUgZm9yIGFuaW1hdGlvbnNcblxuIC8vICAgIHJldHVybiAoKSA9PiB7XG4gLy8gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAvLyAgICB9O1xuIC8vICB9LCBbXSk7XG51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0VmlzaWJsZShmYWxzZSk7IC8vIFN0YXJ0cyB0aGUgZmFkZS1vdXRcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldFRleHRJbmRleCgocHJldkluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3SW5kZXggPSBwcmV2SW5kZXggKyAxID09PSB2YXJpYW50c1t2YXJpYW50XS50ZXh0QXJyYXkubGVuZ3RoID8gMCA6IHByZXZJbmRleCArIDE7XG4gICAgICAgICAgc2V0Q3VycmVudFRleHQodmFyaWFudHNbdmFyaWFudF0udGV4dEFycmF5W25ld0luZGV4XSk7XG4gICAgICAgICAgcmV0dXJuIG5ld0luZGV4O1xuICAgICAgICB9KTtcbiAgICAgIH0sIDMwMCk7IC8vIFdhaXQgZm9yIHRoZSBmYWRlLW91dCB0byBmaW5pc2ggYmVmb3JlIGNoYW5naW5nIHRleHRcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldFZpc2libGUodHJ1ZSk7IC8vIEZhZGUtaW4gdGhlIG5ldyB0ZXh0IGFmdGVyIGFub3RoZXIgZGVsYXlcbiAgICAgIH0sIDYwMCk7IC8vIFN0YXJ0IHRoZSBmYWRlLWluIGFmdGVyIHRoZSB0ZXh0IGhhcyBjaGFuZ2VkXG5cbiAgICB9LCAzNTAwKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9O1xufSwgW10pO1xuXG5cblxuIHJldHVybiAoXG4gICAgPGRpdiBkYXRhLXRoZW1lPVwicGFnZXNha2VcIj5cbiAgICA8ZGl2ICBjbGFzc05hbWU9e2BoZXJvICR7dmFyaWFudHNbdmFyaWFudF0uc3R5bGluZ30gYH0+XG4gICAgICAgICAgICB7Lyo8ZGl2ICBjbGFzc05hbWU9XCJzY3JvbGwtcC0wIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1wcmltYXJ5IHRvLXNlY29uZGFyeSB0ZXh0LXdoaXRlIHB5LTEwIHB4LTRcIj4qL31cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tY29udGVudCBmbGV4LWNvbCAgIGl0ZW1zLXN0YXJ0XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9eydmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IGp1c3RpZnktY2VudGVyJ30+XG4gICAgPGltZyBzcmM9eycvcGFnZXNha2VfbG9nby5zdmcnfSBjbGFzc05hbWU9XCJoLTI4IHctMjhcIiAvPlxuICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz1cImh0dHBzOi8vZGV4dGVybGFicy1wdWJsaWMuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vcGFnZXNha2VfbG9nby5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9XCIgYmctc3RvbmUtMzAwIG1heC13LXNtIHJvdW5kZWQtbGcgc2hhZG93LTJ4bCBoLTE2IHctMTYgXCJcbiAgICAgICAgICAgICAgICAgICAgLz4qL31cbiAgICAgICAgICAgICAgICAgICAgey8qPGg0IGNsYXNzTmFtZT17J3RleHQteGwgJ30+UGFnZXNha2Uge25hbWV9IHtpbmRleH08L2g0PiovfVxuXG4gICAgPC9kaXY+XG5cblxuXG4gICAgPGRpdj5cbiAgICAgICA8aDEgXG4gICAgICAgIGNsYXNzTmFtZT17YHRleHQtNHhsIGB9XG4gICAgICA+IHt2YXJpYW50c1t2YXJpYW50XS5oZWFkZXIxfSA8YnIgLz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1zdWNjZXNzJz57dmFyaWFudHNbdmFyaWFudF0uaGVhZGVyMn08L3NwYW4+XG4gICAgey8qPHNwYW4gY2xhc3NOYW1lPXtgJHt0ZXh0SW5kZXggPT09IDAgPyAndGV4dC1ncmVlbi0zMDAnIDogdGV4dEluZGV4PT09MSA/ICd0ZXh0LWJsdWUtMzAwJyA6ICd0ZXh0LXJlZC0zMDAnfSAgZm9udC1ib2xkIG10LTQgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTMwMCAke3Zpc2libGUgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktMCd9YH0+e2N1cnJlbnRUZXh0fTwvc3Bhbj4qL31cbiAgICA8L2gxPlxuey8qICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBcIj57dmFyaWFudHNbdmFyaWFudF0uc3ViaGVhZGVyfSA8YnIgLz5cblxuICAgIDwvaDE+Ki99XG4gICAgey8qPHAgY2xhc3NOYW1lPVwicHktMlwiPlBhZ2VzYWtlIGxldHMgeW91IGJ1aWxkIGNvbXBsZXRlIHdlYnNpdGVzLCB3aXRoIGNvbnRlbnQsIG1vbmV0aXphdGlvbiBvcHRpb25zLCBhbmQgYmVhdXRpZnVsIGRlc2lnbiwgYWxsIGluIHNlY29uZHMuIEZvciBmcmVlLiA8L3A+Ki99XG4gICAgey8qPHAgY2xhc3NOYW1lPVwicHktMlwiPlNlZSB3aGF0IHRoZSBzYXZ2aWVzdCBjcmVhdG9ycyBvbiB0aGUgd2ViIGFyZSBhbHJlYWR5IGRvaW5nLCBjaGVja291dCBQYWdlc2FrZSB0b2RheSEgPC9wPiovfVxuICAgIFxuXG5cblxuICAgIDxoMSBjbGFzc05hbWU9e2B0ZXh0LTJ4bCB0ZXh0LXJpZ2h0IHRyYW5zZm9ybSBmb250LWJvbGQgbXQtNCBcbiAgICAke3Zpc2libGUgPyAndHJhbnNsYXRlLXgtMCB3aWdnbGUnIDogJ3RyYW5zbGF0ZS14LWZ1bGwnfSBcbiAgICAke3RleHRJbmRleCA9PT0gMCA/ICd0ZXh0LWdyZWVuLTMwMCcgOiB0ZXh0SW5kZXggPT09IDEgPyAndGV4dC1ibHVlLTMwMCcgOiAndGV4dC1yZWQtMzAwJ30gXG4gICAgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0YH0+XG4gICAge2N1cnJlbnRUZXh0fVxuPC9oMT5cbiAgICA8aDEgY2xhc3NOYW1lPXtgdGV4dC0yeGwgdGV4dC1yaWdodCAke3Zpc2libGUgPyAnJyA6ICd0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMzAwIG9wYWNpdHktMCd9ICR7dGV4dEluZGV4ID09PSAwID8gJ3RleHQtZ3JlZW4tMzAwJyA6IHRleHRJbmRleD09PTEgPyAndGV4dC1ibHVlLTMwMCcgOiAndGV4dC1yZWQtMzAwICd9ICBmb250LWJvbGQgbXQtNCBgfT57Y3VycmVudFRleHR9PC9oMT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17J2ZsZXgganVzdGlmeS1jZW50ZXIgZ2FwLTQgbXQtNCd9PlxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLW91dGxpbmVcIj48TGluayBocmVmPXsnaHR0cHM6Ly9wYWdlc2FrZS5jb20nfT5MZWFybiBNb3JlPC9MaW5rPjwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+PExpbmsgaHJlZj17J2h0dHBzOi8vcGFnZXNha2UuY29tJ30+U3RhcnQgZm9yIEZyZWU8L0xpbms+PC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDwvZGl2Plxuey8qPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtc2lkZSBjYXJkLWNvbXBhY3QgYmctYmFzZS0xMDAgc2hhZG93LXhsXCI+XG4gIDxmaWd1cmU+IDxGYUNhcnRTaG9wcGluZyBjbGFzc05hbWU9J2gtOCB3LTggYmctZ3JlZW4tNTAwIHRleHQtcHJpbWFyeScgLz48L2ZpZ3VyZT5cbiAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICA8aDIgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPk5ldyBtb3ZpZSBpcyByZWxlYXNlZCE8L2gyPlxuICAgIDxwPkNsaWNrIHRoZSBidXR0b24gdG8gd2F0Y2ggb24gSmV0ZmxpeCBhcHAuPC9wPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb25zIGp1c3RpZnktZW5kXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPldhdGNoPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+Ki99XG5cblxuPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkQmxvY2s7XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsIkZhQ2FydFNob3BwaW5nIiwiQWRCbG9jayIsIm5hbWUiLCJwYWdlIiwic2l0ZSIsImluZGV4IiwiY29uc29sZSIsImxvZyIsInRleHRBcnJheSIsImN1cnJlbnRUZXh0Iiwic2V0Q3VycmVudFRleHQiLCJ0ZXh0SW5kZXgiLCJzZXRUZXh0SW5kZXgiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInZhcmlhbnRzIiwidmFyaWFudDEiLCJzdHlsaW5nIiwiaGVhZGVyMSIsImhlYWRlcjIiLCJzdWJoZWFkZXIiLCJib2R5IiwiY3RhMV9saW5rIiwiY3RhMl9saW5rIiwiY3RhMV90ZXh0IiwiY3RhMl90ZXh0IiwidmFyaWFudDIiLCJ1c2VWYXJpYW50MiIsInZhcmlhbnQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwic2V0VGltZW91dCIsInByZXZJbmRleCIsIm5ld0luZGV4IiwibGVuZ3RoIiwiY2xlYXJJbnRlcnZhbCIsImRpdiIsImRhdGEtdGhlbWUiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJoMSIsImJyIiwic3BhbiIsImJ1dHRvbiIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/AdBlock.js\n"));

/***/ })

});