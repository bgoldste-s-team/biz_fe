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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst AdBlock = (param)=>{\n    let { name , page , site , index  } = param;\n    _s();\n    console.log(\"adblock\", page, site, index, name);\n    const textArray = [\n        \"First message\",\n        \"Second message\",\n        \"Third message\"\n    ];\n    const [currentText, setCurrentText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(textArray[0]);\n    const [textIndex, setTextIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const variants = {\n        // variant1: {\n        //     // styling: \"bg-gradient-to-r from-black via-purple-800 to-black text-white p-8 text-center\",\n        //     styling:\"bg-neutral-content text-neutral p-8 text-center\",\n        //     header1:\"Don't Just Browse The Web.\",\n        //     header2:\"Create It.\",\n        //     subheader:\"\",\n        //     body: \"\",\n        //     cta1_link:\"\",\n        //     cta2_link:\"\",\n        //     cta1_text:\"\",\n        //     cta2_text:\"\"\n        // },\n        variant1: {\n            // styling: \"bg-gradient-to-r from-black via-purple-800 to-black text-white p-8 text-center\",\n            styling: \"bg-neutral-content text-neutral p-8 text-left\",\n            header1: \"Your Side Hustle Is Calling\",\n            header2: \"Create It.\",\n            subheader: \"\",\n            body: \"\",\n            cta1_link: \"\",\n            cta2_link: \"\",\n            cta1_text: \"\",\n            cta2_text: \"\",\n            textArray: [\n                \"Portfolio Websites \\uD83C\\uDFA8\",\n                \"Review Sites \\uD83D\\uDD75️‍♂️\",\n                \"Small Businesses \\uD83D\\uDDC3️\"\n            ]\n        },\n        variant2: {\n            styling: \"bg-neutral-content text-neutral px-8 text-left\",\n            header1: \"Revenue Generating Websites\",\n            header2: \"Ready in seconds.\",\n            subheader: \"Your Side Hustle is Calling.\",\n            body: \"\",\n            cta1_link: \"\",\n            cta2_link: \"\",\n            cta1_text: \"\",\n            cta2_text: \"\",\n            textArray: [\n                \"Ready in seconds.\",\n                \"Actually Free\",\n                \"SEO Optimized\"\n            ]\n        }\n    };\n    const useVariant2 = index % 2 === 0;\n    const variant = index % 2 === 1 ? \"variant1\" : \"variant2\";\n    // useEffect(() => {\n    //    const interval = setInterval(() => {\n    //      setVisible(false);\n    //      setTextIndex((prevIndex) => {\n    //        const newIndex = prevIndex + 1 === variants[variant].textArray.length ? 0 : prevIndex + 1;\n    //        setTimeout(() => {\n    //          setCurrentText(variants[variant].textArray[newIndex]);\n    //          setVisible(true);\n    //        }, 300); // This delay is for the fade-out effect to be noticeable before the text changes\n    //        return newIndex;\n    //      });\n    //    }, 3500); // Giving some extra time for animations\n    //    return () => {\n    //      clearInterval(interval);\n    //    };\n    //  }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setVisible(false); // Starts the fade-out\n            setTimeout(()=>{\n                setTextIndex((prevIndex)=>{\n                    const newIndex = prevIndex + 1 === variants[variant].textArray.length ? 0 : prevIndex + 1;\n                    setCurrentText(variants[variant].textArray[newIndex]);\n                    return newIndex;\n                });\n            }, 300); // Wait for the fade-out to finish before changing text\n            setTimeout(()=>{\n                setVisible(true); // Fade-in the new text after another delay\n            }, 600); // Start the fade-in after the text has changed\n        }, 3500);\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"https://pagesake.com\",\n        \"data-theme\": \"pagesake\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"hero \".concat(variants[variant].styling, \" \"),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hero-content flex-col   items-start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-start justify-center\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                        lineNumber: 131,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/pagesake_logo.svg\",\n                                className: \"h-28 w-28\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 140,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-4xl \",\n                                children: [\n                                    \" \",\n                                    variants[variant].header1,\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 142,\n                                        columnNumber: 39\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \" text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary\",\n                                        children: variants[variant].header2\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 143,\n                                        columnNumber: 7\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 141,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-lg  italic mt-4 py-2 bg-gray text-center \".concat(visible ? \"\" : \"transition-opacity duration-300 opacity-0\", \" \").concat(textIndex === 0 ? \"text-green-300\" : textIndex === 1 ? \"text-blue-300\" : \"text-red-300 \", \"   \"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: currentText\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                    lineNumber: 151,\n                                    columnNumber: 225\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 151,\n                                columnNumber: 5\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"\",\n                                children: [\n                                    \"Pagesake lets you build complete websites, with content, monetization options, and beautiful design, all in seconds. For free.\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 153,\n                                        columnNumber: 147\n                                    }, undefined),\n                                    \" asdfasdfasdf\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 153,\n                                columnNumber: 5\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center gap-4 mt-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-primary btn-outline\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"https://pagesake.com\",\n                                            children: \"Learn More\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                            lineNumber: 155,\n                                            columnNumber: 57\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 155,\n                                        columnNumber: 9\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-primary\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"https://pagesake.com\",\n                                            children: \"Start for Free\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                            lineNumber: 156,\n                                            columnNumber: 45\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 156,\n                                        columnNumber: 9\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 154,\n                                columnNumber: 5\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                        lineNumber: 139,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                lineNumber: 130,\n                columnNumber: 5\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n            lineNumber: 128,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n        lineNumber: 127,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AdBlock, \"VfzrQ5a30aEbx1D5PVciVzf3WBk=\");\n_c = AdBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdBlock);\nvar _c;\n$RefreshReg$(_c, \"AdBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UWhCLDhEQUFDRDs7MENBQ0csOERBQUNFO2dDQUFJQyxLQUFLO2dDQUFzQkYsV0FBVTs7Ozs7OzBDQUMxQyw4REFBQ0c7Z0NBQU9ILFdBQVk7O29DQUNuQjtvQ0FBRXhCLFFBQVEsQ0FBQ2EsUUFBUSxDQUFDVixPQUFPO29DQUFDO2tEQUFDLDhEQUFDeUI7Ozs7O2tEQUNqQyw4REFBQ0M7d0NBQUtMLFdBQVU7a0RBQWdHeEIsUUFBUSxDQUFDYSxRQUFRLENBQUNULE9BQU87Ozs7Ozs7Ozs7OzswQ0FRM0ksOERBQUNtQjtnQ0FBSUMsV0FBVyxpREFBK0c1QixPQUE5REUsVUFBVSxLQUFLLDJDQUEyQyxFQUFDLEtBQTBGLE9BQXZGRixjQUFjLElBQUksbUJBQW1CQSxjQUFZLElBQUksa0JBQWtCLGVBQWUsRUFBQzswQ0FBTSw0RUFBQytCOzhDQUFJakM7Ozs7Ozs7Ozs7OzBDQUVqTyw4REFBQ29DO2dDQUFFTixXQUFVOztvQ0FBRztrREFBOEgsOERBQUNJOzs7OztvQ0FBSTs7Ozs7OzswQ0FDbkosOERBQUNMO2dDQUFJQyxXQUFXOztrREFDWiw4REFBQ087d0NBQU9QLFdBQVU7a0RBQThCLDRFQUFDeEMsa0RBQUlBOzRDQUFDcUMsTUFBTTtzREFBd0I7Ozs7Ozs7Ozs7O2tEQUNwRiw4REFBQ1U7d0NBQU9QLFdBQVU7a0RBQWtCLDRFQUFDeEMsa0RBQUlBOzRDQUFDcUMsTUFBTTtzREFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVloRjtHQTdKTW5DO0tBQUFBO0FBK0pOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FkQmxvY2suanM/ZjViOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHtcbiAgIEZhQ2FydFNob3BwaW5nXG5cbn0gZnJvbSBcInJlYWN0LWljb25zL2ZhNlwiO1xuXG5cblxuXG5jb25zdCBBZEJsb2NrID0gKHtuYW1lLCBwYWdlLCBzaXRlLCBpbmRleH0pID0+IHtcbiAgICBjb25zb2xlLmxvZygnYWRibG9jaycsIHBhZ2UsIHNpdGUsIGluZGV4LCBuYW1lKVxuXG4gICAgY29uc3QgdGV4dEFycmF5ID0gW1xuICAgICAgJ0ZpcnN0IG1lc3NhZ2UnLFxuICAgICAgJ1NlY29uZCBtZXNzYWdlJyxcbiAgICAgICdUaGlyZCBtZXNzYWdlJyxcbiAgLy8gLi4uIGFkZCBhcyBtYW55IG1lc3NhZ2VzIGFzIHlvdSB3YW50XG4gICAgICBdO1xuXG4gICAgY29uc3QgW2N1cnJlbnRUZXh0LCBzZXRDdXJyZW50VGV4dF0gPSB1c2VTdGF0ZSh0ZXh0QXJyYXlbMF0pO1xuICAgIGNvbnN0IFt0ZXh0SW5kZXgsIHNldFRleHRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiBcblxuICAgIGNvbnN0IHZhcmlhbnRzID0ge1xuICAgICAgICAvLyB2YXJpYW50MToge1xuICAgICAgICAvLyAgICAgLy8gc3R5bGluZzogXCJiZy1ncmFkaWVudC10by1yIGZyb20tYmxhY2sgdmlhLXB1cnBsZS04MDAgdG8tYmxhY2sgdGV4dC13aGl0ZSBwLTggdGV4dC1jZW50ZXJcIixcbiAgICAgICAgLy8gICAgIHN0eWxpbmc6XCJiZy1uZXV0cmFsLWNvbnRlbnQgdGV4dC1uZXV0cmFsIHAtOCB0ZXh0LWNlbnRlclwiLFxuICAgICAgICAvLyAgICAgaGVhZGVyMTpcIkRvbid0IEp1c3QgQnJvd3NlIFRoZSBXZWIuXCIsXG4gICAgICAgIC8vICAgICBoZWFkZXIyOlwiQ3JlYXRlIEl0LlwiLFxuICAgICAgICAvLyAgICAgc3ViaGVhZGVyOlwiXCIsXG4gICAgICAgIC8vICAgICBib2R5OiBcIlwiLFxuICAgICAgICAvLyAgICAgY3RhMV9saW5rOlwiXCIsXG4gICAgICAgIC8vICAgICBjdGEyX2xpbms6XCJcIixcbiAgICAgICAgLy8gICAgIGN0YTFfdGV4dDpcIlwiLFxuICAgICAgICAvLyAgICAgY3RhMl90ZXh0OlwiXCJcbiAgICAgICAgLy8gfSxcbiAgICAgICAgdmFyaWFudDE6IHtcbiAgICAgICAgICAgIC8vIHN0eWxpbmc6IFwiYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsYWNrIHZpYS1wdXJwbGUtODAwIHRvLWJsYWNrIHRleHQtd2hpdGUgcC04IHRleHQtY2VudGVyXCIsXG4gICAgICAgICAgICBzdHlsaW5nOlwiYmctbmV1dHJhbC1jb250ZW50IHRleHQtbmV1dHJhbCBwLTggdGV4dC1sZWZ0XCIsXG4gICAgICAgICAgICBoZWFkZXIxOlwiWW91ciBTaWRlIEh1c3RsZSBJcyBDYWxsaW5nXCIsXG4gICAgICAgICAgICBoZWFkZXIyOlwiQ3JlYXRlIEl0LlwiLFxuICAgICAgICAgICAgc3ViaGVhZGVyOlwiXCIsXG4gICAgICAgICAgICBib2R5OiBcIlwiLFxuICAgICAgICAgICAgY3RhMV9saW5rOlwiXCIsXG4gICAgICAgICAgICBjdGEyX2xpbms6XCJcIixcbiAgICAgICAgICAgIGN0YTFfdGV4dDpcIlwiLFxuICAgICAgICAgICAgY3RhMl90ZXh0OlwiXCIsXG4gICAgICAgICAgICB0ZXh0QXJyYXk6IFtcbiAgICAgICAgICAgICAgICAgICdQb3J0Zm9saW8gV2Vic2l0ZXMg8J+OqCcsXG4gICAgICAgICAgICAgICAgICAnUmV2aWV3IFNpdGVzIPCflbXvuI/igI3imYLvuI8nLFxuICAgICAgICAgICAgICAgICAgJ1NtYWxsIEJ1c2luZXNzZXMg8J+Xg++4jycsXG4gICAgICAgICAgICAgIC8vIC4uLiBhZGQgYXMgbWFueSBtZXNzYWdlcyBhcyB5b3Ugd2FudFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB2YXJpYW50Mjoge1xuICAgICAgICAgc3R5bGluZzogXCJiZy1uZXV0cmFsLWNvbnRlbnQgdGV4dC1uZXV0cmFsIHB4LTggdGV4dC1sZWZ0XCIsXG4gICAgICAgICBoZWFkZXIxOlwiUmV2ZW51ZSBHZW5lcmF0aW5nIFdlYnNpdGVzXCIsXG4gICAgICAgICBoZWFkZXIyOlwiUmVhZHkgaW4gc2Vjb25kcy5cIixcbiAgICAgICAgIHN1YmhlYWRlcjpcIllvdXIgU2lkZSBIdXN0bGUgaXMgQ2FsbGluZy5cIixcbiAgICAgICAgIGJvZHk6IFwiXCIsXG4gICAgICAgICBjdGExX2xpbms6XCJcIixcbiAgICAgICAgIGN0YTJfbGluazpcIlwiLFxuICAgICAgICAgY3RhMV90ZXh0OlwiXCIsXG4gICAgICAgICBjdGEyX3RleHQ6XCJcIixcbiAgICAgICAgICAgIHRleHRBcnJheTogW1xuICAgICAgICAgICAgICAgJ1JlYWR5IGluIHNlY29uZHMuJyxcbiAgICAgICAgICAgICAgICdBY3R1YWxseSBGcmVlJyxcbiAgICAgICAgICAgICAgICdTRU8gT3B0aW1pemVkJyxcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgLy8gLi4uIGFkZCBhcyBtYW55IG1lc3NhZ2VzIGFzIHlvdSB3YW50XG4gICAgICAgICAgICAgICBdXG4gICAgIH1cbiB9XG5cbiBjb25zdCB1c2VWYXJpYW50MiA9IGluZGV4ICUgMiA9PT0gMCBcblxuIGNvbnN0IHZhcmlhbnQgPSBpbmRleCAlIDIgPT09IDEgPyAndmFyaWFudDEnIDondmFyaWFudDInXG5cblxuXG4gLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAvLyAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAvLyAgICAgIHNldFZpc2libGUoZmFsc2UpO1xuIC8vICAgICAgc2V0VGV4dEluZGV4KChwcmV2SW5kZXgpID0+IHtcbiAvLyAgICAgICAgY29uc3QgbmV3SW5kZXggPSBwcmV2SW5kZXggKyAxID09PSB2YXJpYW50c1t2YXJpYW50XS50ZXh0QXJyYXkubGVuZ3RoID8gMCA6IHByZXZJbmRleCArIDE7XG4gLy8gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuIC8vICAgICAgICAgIHNldEN1cnJlbnRUZXh0KHZhcmlhbnRzW3ZhcmlhbnRdLnRleHRBcnJheVtuZXdJbmRleF0pO1xuIC8vICAgICAgICAgIHNldFZpc2libGUodHJ1ZSk7XG4gLy8gICAgICAgIH0sIDMwMCk7IC8vIFRoaXMgZGVsYXkgaXMgZm9yIHRoZSBmYWRlLW91dCBlZmZlY3QgdG8gYmUgbm90aWNlYWJsZSBiZWZvcmUgdGhlIHRleHQgY2hhbmdlc1xuICAgICAgICBcbiAvLyAgICAgICAgcmV0dXJuIG5ld0luZGV4O1xuIC8vICAgICAgfSk7XG4gLy8gICAgfSwgMzUwMCk7IC8vIEdpdmluZyBzb21lIGV4dHJhIHRpbWUgZm9yIGFuaW1hdGlvbnNcblxuIC8vICAgIHJldHVybiAoKSA9PiB7XG4gLy8gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAvLyAgICB9O1xuIC8vICB9LCBbXSk7XG51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0VmlzaWJsZShmYWxzZSk7IC8vIFN0YXJ0cyB0aGUgZmFkZS1vdXRcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldFRleHRJbmRleCgocHJldkluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3SW5kZXggPSBwcmV2SW5kZXggKyAxID09PSB2YXJpYW50c1t2YXJpYW50XS50ZXh0QXJyYXkubGVuZ3RoID8gMCA6IHByZXZJbmRleCArIDE7XG4gICAgICAgICAgc2V0Q3VycmVudFRleHQodmFyaWFudHNbdmFyaWFudF0udGV4dEFycmF5W25ld0luZGV4XSk7XG4gICAgICAgICAgcmV0dXJuIG5ld0luZGV4O1xuICAgICAgICB9KTtcbiAgICAgIH0sIDMwMCk7IC8vIFdhaXQgZm9yIHRoZSBmYWRlLW91dCB0byBmaW5pc2ggYmVmb3JlIGNoYW5naW5nIHRleHRcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldFZpc2libGUodHJ1ZSk7IC8vIEZhZGUtaW4gdGhlIG5ldyB0ZXh0IGFmdGVyIGFub3RoZXIgZGVsYXlcbiAgICAgIH0sIDYwMCk7IC8vIFN0YXJ0IHRoZSBmYWRlLWluIGFmdGVyIHRoZSB0ZXh0IGhhcyBjaGFuZ2VkXG5cbiAgICB9LCAzNTAwKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9O1xufSwgW10pO1xuXG5cblxuIHJldHVybiAoXG4gICAgPExpbmsgaHJlZj1cImh0dHBzOi8vcGFnZXNha2UuY29tXCIgZGF0YS10aGVtZT1cInBhZ2VzYWtlXCI+XG4gICAgPGRpdiAgY2xhc3NOYW1lPXtgaGVybyAke3ZhcmlhbnRzW3ZhcmlhbnRdLnN0eWxpbmd9IGB9PlxuICAgICAgICAgICAgey8qPGRpdiAgY2xhc3NOYW1lPVwic2Nyb2xsLXAtMCBiZy1ncmFkaWVudC10by1yIGZyb20tcHJpbWFyeSB0by1zZWNvbmRhcnkgdGV4dC13aGl0ZSBweS0xMCBweC00XCI+Ki99XG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWNvbnRlbnQgZmxleC1jb2wgICBpdGVtcy1zdGFydFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPXsnZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCBqdXN0aWZ5LWNlbnRlcid9PlxuXG4gICAgICAgICAgICAgICAgICBcblxuICAgIDwvZGl2PlxuXG5cblxuICAgIDxkaXY+XG4gICAgICAgIDxpbWcgc3JjPXsnL3BhZ2VzYWtlX2xvZ28uc3ZnJ30gY2xhc3NOYW1lPVwiaC0yOCB3LTI4XCIgLz5cbiAgICAgICAgPGgxICAgICBjbGFzc05hbWU9e2B0ZXh0LTR4bCBgfVxuICAgICAgICA+IHt2YXJpYW50c1t2YXJpYW50XS5oZWFkZXIxfSA8YnIgLz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0nIHRleHQtNHhsIGZvbnQtYm9sZCBiZy1jbGlwLXRleHQgdGV4dC10cmFuc3BhcmVudCBiZy1ncmFkaWVudC10by1yIGZyb20tc2Vjb25kYXJ5IHRvLXByaW1hcnknPnt2YXJpYW50c1t2YXJpYW50XS5oZWFkZXIyfTwvc3Bhbj5cblxuICAgIDwvaDE+XG5cblxuXG4gICAgey8qQU5JTUFURUQgVEVYVCAqL30gIFxuICAgICAgIFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgdGV4dC1sZyAgaXRhbGljIG10LTQgcHktMiBiZy1ncmF5IHRleHQtY2VudGVyICR7dmlzaWJsZSA/ICcnIDogJ3RyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0zMDAgb3BhY2l0eS0wJ30gJHt0ZXh0SW5kZXggPT09IDAgPyAndGV4dC1ncmVlbi0zMDAnIDogdGV4dEluZGV4PT09MSA/ICd0ZXh0LWJsdWUtMzAwJyA6ICd0ZXh0LXJlZC0zMDAgJ30gICBgfT48aDE+e2N1cnJlbnRUZXh0fTwvaDE+XG4gICAgPC9kaXY+XG4gICAgPHAgY2xhc3NOYW1lPVwiXCI+UGFnZXNha2UgbGV0cyB5b3UgYnVpbGQgY29tcGxldGUgd2Vic2l0ZXMsIHdpdGggY29udGVudCwgbW9uZXRpemF0aW9uIG9wdGlvbnMsIGFuZCBiZWF1dGlmdWwgZGVzaWduLCBhbGwgaW4gc2Vjb25kcy4gRm9yIGZyZWUuPGJyLz4gYXNkZmFzZGZhc2RmPC9wPlxuICAgIDxkaXYgY2xhc3NOYW1lPXsnZmxleCBqdXN0aWZ5LWNlbnRlciBnYXAtNCBtdC00J30+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1vdXRsaW5lXCI+PExpbmsgaHJlZj17J2h0dHBzOi8vcGFnZXNha2UuY29tJ30+TGVhcm4gTW9yZTwvTGluaz48L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj48TGluayBocmVmPXsnaHR0cHM6Ly9wYWdlc2FrZS5jb20nfT5TdGFydCBmb3IgRnJlZTwvTGluaz48L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cblxuXG48L0xpbms+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkQmxvY2s7XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsIkZhQ2FydFNob3BwaW5nIiwiQWRCbG9jayIsIm5hbWUiLCJwYWdlIiwic2l0ZSIsImluZGV4IiwiY29uc29sZSIsImxvZyIsInRleHRBcnJheSIsImN1cnJlbnRUZXh0Iiwic2V0Q3VycmVudFRleHQiLCJ0ZXh0SW5kZXgiLCJzZXRUZXh0SW5kZXgiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInZhcmlhbnRzIiwidmFyaWFudDEiLCJzdHlsaW5nIiwiaGVhZGVyMSIsImhlYWRlcjIiLCJzdWJoZWFkZXIiLCJib2R5IiwiY3RhMV9saW5rIiwiY3RhMl9saW5rIiwiY3RhMV90ZXh0IiwiY3RhMl90ZXh0IiwidmFyaWFudDIiLCJ1c2VWYXJpYW50MiIsInZhcmlhbnQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwic2V0VGltZW91dCIsInByZXZJbmRleCIsIm5ld0luZGV4IiwibGVuZ3RoIiwiY2xlYXJJbnRlcnZhbCIsImhyZWYiLCJkYXRhLXRoZW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaDEiLCJiciIsInNwYW4iLCJwIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/AdBlock.js\n"));

/***/ })

});