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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst AdBlock = (param)=>{\n    let { name , page , site , index  } = param;\n    _s();\n    console.log(\"adblock\", page, site, index, name);\n    const textArray = [\n        \"First message\",\n        \"Second message\",\n        \"Third message\"\n    ];\n    const [currentText, setCurrentText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(textArray[0]);\n    const [textIndex, setTextIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const variants = {\n        // variant1: {\n        //     // styling: \"bg-gradient-to-r from-black via-purple-800 to-black text-white p-8 text-center\",\n        //     styling:\"bg-neutral-content text-neutral p-8 text-center\",\n        //     header1:\"Don't Just Browse The Web.\",\n        //     header2:\"Create It.\",\n        //     subheader:\"\",\n        //     body: \"\",\n        //     cta1_link:\"\",\n        //     cta2_link:\"\",\n        //     cta1_text:\"\",\n        //     cta2_text:\"\"\n        // },\n        variant1: {\n            // styling: \"bg-gradient-to-r from-black via-purple-800 to-black text-white p-8 text-center\",\n            styling: \"bg-neutral-content text-neutral p-8 text-left\",\n            header1: \"Your Side Hustle Is Calling\",\n            header2: \"Create It.\",\n            subheader: \"\",\n            body: \"\",\n            cta1_link: \"\",\n            cta2_link: \"\",\n            cta1_text: \"\",\n            cta2_text: \"\",\n            textArray: [\n                \"Portfolio Websites \\uD83C\\uDFA8\",\n                \"Review Sites \\uD83D\\uDD75️‍♂️\",\n                \"Small Businesses \\uD83D\\uDDC3️\"\n            ]\n        },\n        variant2: {\n            styling: \"bg-neutral-content text-neutral p-8 text-left\",\n            header1: \"Revenue Generating Websites\",\n            header2: \"Ready in seconds.\",\n            subheader: \"Your Side Hustle is Calling.\",\n            body: \"\",\n            cta1_link: \"\",\n            cta2_link: \"\",\n            cta1_text: \"\",\n            cta2_text: \"\",\n            textArray: [\n                \"Ready in seconds.\",\n                \"Actually Free\",\n                \"SEO Optimized\"\n            ]\n        }\n    };\n    const useVariant2 = index % 2 === 0;\n    const variant = index % 2 === 1 ? \"variant1\" : \"variant2\";\n    // useEffect(() => {\n    //    const interval = setInterval(() => {\n    //      setVisible(false);\n    //      setTextIndex((prevIndex) => {\n    //        const newIndex = prevIndex + 1 === variants[variant].textArray.length ? 0 : prevIndex + 1;\n    //        setTimeout(() => {\n    //          setCurrentText(variants[variant].textArray[newIndex]);\n    //          setVisible(true);\n    //        }, 300); // This delay is for the fade-out effect to be noticeable before the text changes\n    //        return newIndex;\n    //      });\n    //    }, 3500); // Giving some extra time for animations\n    //    return () => {\n    //      clearInterval(interval);\n    //    };\n    //  }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setVisible(false); // Starts the fade-out\n            setTimeout(()=>{\n                setTextIndex((prevIndex)=>{\n                    const newIndex = prevIndex + 1 === variants[variant].textArray.length ? 0 : prevIndex + 1;\n                    setCurrentText(variants[variant].textArray[newIndex]);\n                    return newIndex;\n                });\n            }, 300); // Wait for the fade-out to finish before changing text\n            setTimeout(()=>{\n                setVisible(true); // Fade-in the new text after another delay\n            }, 600); // Start the fade-in after the text has changed\n        }, 3500);\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"https://pagesake.com\",\n        \"data-theme\": \"pagesake\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"hero \".concat(variants[variant].styling, \" \"),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hero-content flex-col   items-start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-start justify-center\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                        lineNumber: 131,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/pagesake_logo.svg\",\n                                className: \"h-28 w-28\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 140,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-4xl \",\n                                children: [\n                                    \" \",\n                                    variants[variant].header1,\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 142,\n                                        columnNumber: 39\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \" text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-primary\",\n                                        children: variants[variant].header2\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 143,\n                                        columnNumber: 7\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 141,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-lg  italic mt-4 py-2 bg-gray text-center \".concat(visible ? \"\" : \"transition-opacity duration-300 opacity-0\", \" \").concat(textIndex === 0 ? \"text-green-300\" : textIndex === 1 ? \"text-blue-300\" : \"text-red-300 \", \"   \"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: currentText\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                    lineNumber: 151,\n                                    columnNumber: 225\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 151,\n                                columnNumber: 5\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"\",\n                                children: [\n                                    \"Pagesake lets you build complete websites, with content, monetization options, and beautiful design, all in seconds. For free.\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 153,\n                                        columnNumber: 147\n                                    }, undefined),\n                                    \" asdfasdfasdf\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 153,\n                                columnNumber: 5\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center gap-4 mt-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-primary btn-outline\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"https://pagesake.com\",\n                                            children: \"Learn More\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                            lineNumber: 155,\n                                            columnNumber: 57\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 155,\n                                        columnNumber: 9\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-primary\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"https://pagesake.com\",\n                                            children: \"Start for Free\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                            lineNumber: 156,\n                                            columnNumber: 45\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 156,\n                                        columnNumber: 9\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 154,\n                                columnNumber: 5\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                        lineNumber: 139,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                lineNumber: 130,\n                columnNumber: 5\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n            lineNumber: 128,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n        lineNumber: 127,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AdBlock, \"VfzrQ5a30aEbx1D5PVciVzf3WBk=\");\n_c = AdBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdBlock);\nvar _c;\n$RefreshReg$(_c, \"AdBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UWhCLDhEQUFDRDs7MENBQ0csOERBQUNFO2dDQUFJQyxLQUFLO2dDQUFzQkYsV0FBVTs7Ozs7OzBDQUMxQyw4REFBQ0c7Z0NBQU9ILFdBQVk7O29DQUNuQjtvQ0FBRXhCLFFBQVEsQ0FBQ2EsUUFBUSxDQUFDVixPQUFPO29DQUFDO2tEQUFDLDhEQUFDeUI7Ozs7O2tEQUNqQyw4REFBQ0M7d0NBQUtMLFdBQVU7a0RBQStGeEIsUUFBUSxDQUFDYSxRQUFRLENBQUNULE9BQU87Ozs7Ozs7Ozs7OzswQ0FRMUksOERBQUNtQjtnQ0FBSUMsV0FBVyxpREFBK0c1QixPQUE5REUsVUFBVSxLQUFLLDJDQUEyQyxFQUFDLEtBQTBGLE9BQXZGRixjQUFjLElBQUksbUJBQW1CQSxjQUFZLElBQUksa0JBQWtCLGVBQWUsRUFBQzswQ0FBTSw0RUFBQytCOzhDQUFJakM7Ozs7Ozs7Ozs7OzBDQUVqTyw4REFBQ29DO2dDQUFFTixXQUFVOztvQ0FBRztrREFBOEgsOERBQUNJOzs7OztvQ0FBSTs7Ozs7OzswQ0FDbkosOERBQUNMO2dDQUFJQyxXQUFXOztrREFDWiw4REFBQ087d0NBQU9QLFdBQVU7a0RBQThCLDRFQUFDeEMsa0RBQUlBOzRDQUFDcUMsTUFBTTtzREFBd0I7Ozs7Ozs7Ozs7O2tEQUNwRiw4REFBQ1U7d0NBQU9QLFdBQVU7a0RBQWtCLDRFQUFDeEMsa0RBQUlBOzRDQUFDcUMsTUFBTTtzREFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVloRjtHQTdKTW5DO0tBQUFBO0FBK0pOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FkQmxvY2suanM/ZjViOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHtcbiAgIEZhQ2FydFNob3BwaW5nXG5cbn0gZnJvbSBcInJlYWN0LWljb25zL2ZhNlwiO1xuXG5cblxuXG5jb25zdCBBZEJsb2NrID0gKHtuYW1lLCBwYWdlLCBzaXRlLCBpbmRleH0pID0+IHtcbiAgICBjb25zb2xlLmxvZygnYWRibG9jaycsIHBhZ2UsIHNpdGUsIGluZGV4LCBuYW1lKVxuXG4gICAgY29uc3QgdGV4dEFycmF5ID0gW1xuICAgICAgJ0ZpcnN0IG1lc3NhZ2UnLFxuICAgICAgJ1NlY29uZCBtZXNzYWdlJyxcbiAgICAgICdUaGlyZCBtZXNzYWdlJyxcbiAgLy8gLi4uIGFkZCBhcyBtYW55IG1lc3NhZ2VzIGFzIHlvdSB3YW50XG4gICAgICBdO1xuXG4gICAgY29uc3QgW2N1cnJlbnRUZXh0LCBzZXRDdXJyZW50VGV4dF0gPSB1c2VTdGF0ZSh0ZXh0QXJyYXlbMF0pO1xuICAgIGNvbnN0IFt0ZXh0SW5kZXgsIHNldFRleHRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiBcblxuICAgIGNvbnN0IHZhcmlhbnRzID0ge1xuICAgICAgICAvLyB2YXJpYW50MToge1xuICAgICAgICAvLyAgICAgLy8gc3R5bGluZzogXCJiZy1ncmFkaWVudC10by1yIGZyb20tYmxhY2sgdmlhLXB1cnBsZS04MDAgdG8tYmxhY2sgdGV4dC13aGl0ZSBwLTggdGV4dC1jZW50ZXJcIixcbiAgICAgICAgLy8gICAgIHN0eWxpbmc6XCJiZy1uZXV0cmFsLWNvbnRlbnQgdGV4dC1uZXV0cmFsIHAtOCB0ZXh0LWNlbnRlclwiLFxuICAgICAgICAvLyAgICAgaGVhZGVyMTpcIkRvbid0IEp1c3QgQnJvd3NlIFRoZSBXZWIuXCIsXG4gICAgICAgIC8vICAgICBoZWFkZXIyOlwiQ3JlYXRlIEl0LlwiLFxuICAgICAgICAvLyAgICAgc3ViaGVhZGVyOlwiXCIsXG4gICAgICAgIC8vICAgICBib2R5OiBcIlwiLFxuICAgICAgICAvLyAgICAgY3RhMV9saW5rOlwiXCIsXG4gICAgICAgIC8vICAgICBjdGEyX2xpbms6XCJcIixcbiAgICAgICAgLy8gICAgIGN0YTFfdGV4dDpcIlwiLFxuICAgICAgICAvLyAgICAgY3RhMl90ZXh0OlwiXCJcbiAgICAgICAgLy8gfSxcbiAgICAgICAgdmFyaWFudDE6IHtcbiAgICAgICAgICAgIC8vIHN0eWxpbmc6IFwiYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsYWNrIHZpYS1wdXJwbGUtODAwIHRvLWJsYWNrIHRleHQtd2hpdGUgcC04IHRleHQtY2VudGVyXCIsXG4gICAgICAgICAgICBzdHlsaW5nOlwiYmctbmV1dHJhbC1jb250ZW50IHRleHQtbmV1dHJhbCBwLTggdGV4dC1sZWZ0XCIsXG4gICAgICAgICAgICBoZWFkZXIxOlwiWW91ciBTaWRlIEh1c3RsZSBJcyBDYWxsaW5nXCIsXG4gICAgICAgICAgICBoZWFkZXIyOlwiQ3JlYXRlIEl0LlwiLFxuICAgICAgICAgICAgc3ViaGVhZGVyOlwiXCIsXG4gICAgICAgICAgICBib2R5OiBcIlwiLFxuICAgICAgICAgICAgY3RhMV9saW5rOlwiXCIsXG4gICAgICAgICAgICBjdGEyX2xpbms6XCJcIixcbiAgICAgICAgICAgIGN0YTFfdGV4dDpcIlwiLFxuICAgICAgICAgICAgY3RhMl90ZXh0OlwiXCIsXG4gICAgICAgICAgICB0ZXh0QXJyYXk6IFtcbiAgICAgICAgICAgICAgICAgICdQb3J0Zm9saW8gV2Vic2l0ZXMg8J+OqCcsXG4gICAgICAgICAgICAgICAgICAnUmV2aWV3IFNpdGVzIPCflbXvuI/igI3imYLvuI8nLFxuICAgICAgICAgICAgICAgICAgJ1NtYWxsIEJ1c2luZXNzZXMg8J+Xg++4jycsXG4gICAgICAgICAgICAgIC8vIC4uLiBhZGQgYXMgbWFueSBtZXNzYWdlcyBhcyB5b3Ugd2FudFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB2YXJpYW50Mjoge1xuICAgICAgICAgc3R5bGluZzogXCJiZy1uZXV0cmFsLWNvbnRlbnQgdGV4dC1uZXV0cmFsIHAtOCB0ZXh0LWxlZnRcIixcbiAgICAgICAgIGhlYWRlcjE6XCJSZXZlbnVlIEdlbmVyYXRpbmcgV2Vic2l0ZXNcIixcbiAgICAgICAgIGhlYWRlcjI6XCJSZWFkeSBpbiBzZWNvbmRzLlwiLFxuICAgICAgICAgc3ViaGVhZGVyOlwiWW91ciBTaWRlIEh1c3RsZSBpcyBDYWxsaW5nLlwiLFxuICAgICAgICAgYm9keTogXCJcIixcbiAgICAgICAgIGN0YTFfbGluazpcIlwiLFxuICAgICAgICAgY3RhMl9saW5rOlwiXCIsXG4gICAgICAgICBjdGExX3RleHQ6XCJcIixcbiAgICAgICAgIGN0YTJfdGV4dDpcIlwiLFxuICAgICAgICAgICAgdGV4dEFycmF5OiBbXG4gICAgICAgICAgICAgICAnUmVhZHkgaW4gc2Vjb25kcy4nLFxuICAgICAgICAgICAgICAgJ0FjdHVhbGx5IEZyZWUnLFxuICAgICAgICAgICAgICAgJ1NFTyBPcHRpbWl6ZWQnLFxuICAgICAgICAgICAgIFxuICAgICAgICAgICAvLyAuLi4gYWRkIGFzIG1hbnkgbWVzc2FnZXMgYXMgeW91IHdhbnRcbiAgICAgICAgICAgICAgIF1cbiAgICAgfVxuIH1cblxuIGNvbnN0IHVzZVZhcmlhbnQyID0gaW5kZXggJSAyID09PSAwIFxuXG4gY29uc3QgdmFyaWFudCA9IGluZGV4ICUgMiA9PT0gMSA/ICd2YXJpYW50MScgOid2YXJpYW50MidcblxuXG5cbiAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuIC8vICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuIC8vICAgICAgc2V0VmlzaWJsZShmYWxzZSk7XG4gLy8gICAgICBzZXRUZXh0SW5kZXgoKHByZXZJbmRleCkgPT4ge1xuIC8vICAgICAgICBjb25zdCBuZXdJbmRleCA9IHByZXZJbmRleCArIDEgPT09IHZhcmlhbnRzW3ZhcmlhbnRdLnRleHRBcnJheS5sZW5ndGggPyAwIDogcHJldkluZGV4ICsgMTtcbiAvLyAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gLy8gICAgICAgICAgc2V0Q3VycmVudFRleHQodmFyaWFudHNbdmFyaWFudF0udGV4dEFycmF5W25ld0luZGV4XSk7XG4gLy8gICAgICAgICAgc2V0VmlzaWJsZSh0cnVlKTtcbiAvLyAgICAgICAgfSwgMzAwKTsgLy8gVGhpcyBkZWxheSBpcyBmb3IgdGhlIGZhZGUtb3V0IGVmZmVjdCB0byBiZSBub3RpY2VhYmxlIGJlZm9yZSB0aGUgdGV4dCBjaGFuZ2VzXG4gICAgICAgIFxuIC8vICAgICAgICByZXR1cm4gbmV3SW5kZXg7XG4gLy8gICAgICB9KTtcbiAvLyAgICB9LCAzNTAwKTsgLy8gR2l2aW5nIHNvbWUgZXh0cmEgdGltZSBmb3IgYW5pbWF0aW9uc1xuXG4gLy8gICAgcmV0dXJuICgpID0+IHtcbiAvLyAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuIC8vICAgIH07XG4gLy8gIH0sIFtdKTtcbnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRWaXNpYmxlKGZhbHNlKTsgLy8gU3RhcnRzIHRoZSBmYWRlLW91dFxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0VGV4dEluZGV4KChwcmV2SW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IHByZXZJbmRleCArIDEgPT09IHZhcmlhbnRzW3ZhcmlhbnRdLnRleHRBcnJheS5sZW5ndGggPyAwIDogcHJldkluZGV4ICsgMTtcbiAgICAgICAgICBzZXRDdXJyZW50VGV4dCh2YXJpYW50c1t2YXJpYW50XS50ZXh0QXJyYXlbbmV3SW5kZXhdKTtcbiAgICAgICAgICByZXR1cm4gbmV3SW5kZXg7XG4gICAgICAgIH0pO1xuICAgICAgfSwgMzAwKTsgLy8gV2FpdCBmb3IgdGhlIGZhZGUtb3V0IHRvIGZpbmlzaCBiZWZvcmUgY2hhbmdpbmcgdGV4dFxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0VmlzaWJsZSh0cnVlKTsgLy8gRmFkZS1pbiB0aGUgbmV3IHRleHQgYWZ0ZXIgYW5vdGhlciBkZWxheVxuICAgICAgfSwgNjAwKTsgLy8gU3RhcnQgdGhlIGZhZGUtaW4gYWZ0ZXIgdGhlIHRleHQgaGFzIGNoYW5nZWRcblxuICAgIH0sIDM1MDApO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH07XG59LCBbXSk7XG5cblxuXG4gcmV0dXJuIChcbiAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9wYWdlc2FrZS5jb21cIiBkYXRhLXRoZW1lPVwicGFnZXNha2VcIj5cbiAgICA8ZGl2ICBjbGFzc05hbWU9e2BoZXJvICR7dmFyaWFudHNbdmFyaWFudF0uc3R5bGluZ30gYH0+XG4gICAgICAgICAgICB7Lyo8ZGl2ICBjbGFzc05hbWU9XCJzY3JvbGwtcC0wIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1wcmltYXJ5IHRvLXNlY29uZGFyeSB0ZXh0LXdoaXRlIHB5LTEwIHB4LTRcIj4qL31cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tY29udGVudCBmbGV4LWNvbCAgIGl0ZW1zLXN0YXJ0XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9eydmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IGp1c3RpZnktY2VudGVyJ30+XG5cbiAgICAgICAgICAgICAgICAgIFxuXG4gICAgPC9kaXY+XG5cblxuXG4gICAgPGRpdj5cbiAgICAgICAgPGltZyBzcmM9eycvcGFnZXNha2VfbG9nby5zdmcnfSBjbGFzc05hbWU9XCJoLTI4IHctMjhcIiAvPlxuICAgICAgICA8aDEgICAgIGNsYXNzTmFtZT17YHRleHQtNHhsIGB9XG4gICAgICAgID4ge3ZhcmlhbnRzW3ZhcmlhbnRdLmhlYWRlcjF9IDxiciAvPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPScgdGV4dC00eGwgZm9udC1ib2xkIGJnLWNsaXAtdGV4dCB0ZXh0LXRyYW5zcGFyZW50IGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmF5LTMwMCB0by1wcmltYXJ5Jz57dmFyaWFudHNbdmFyaWFudF0uaGVhZGVyMn08L3NwYW4+XG5cbiAgICA8L2gxPlxuXG5cblxuICAgIHsvKkFOSU1BVEVEIFRFWFQgKi99ICBcbiAgICAgICBcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtbGcgIGl0YWxpYyBtdC00IHB5LTIgYmctZ3JheSB0ZXh0LWNlbnRlciAke3Zpc2libGUgPyAnJyA6ICd0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMzAwIG9wYWNpdHktMCd9ICR7dGV4dEluZGV4ID09PSAwID8gJ3RleHQtZ3JlZW4tMzAwJyA6IHRleHRJbmRleD09PTEgPyAndGV4dC1ibHVlLTMwMCcgOiAndGV4dC1yZWQtMzAwICd9ICAgYH0+PGgxPntjdXJyZW50VGV4dH08L2gxPlxuICAgIDwvZGl2PlxuICAgIDxwIGNsYXNzTmFtZT1cIlwiPlBhZ2VzYWtlIGxldHMgeW91IGJ1aWxkIGNvbXBsZXRlIHdlYnNpdGVzLCB3aXRoIGNvbnRlbnQsIG1vbmV0aXphdGlvbiBvcHRpb25zLCBhbmQgYmVhdXRpZnVsIGRlc2lnbiwgYWxsIGluIHNlY29uZHMuIEZvciBmcmVlLjxici8+IGFzZGZhc2RmYXNkZjwvcD5cbiAgICA8ZGl2IGNsYXNzTmFtZT17J2ZsZXgganVzdGlmeS1jZW50ZXIgZ2FwLTQgbXQtNCd9PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tb3V0bGluZVwiPjxMaW5rIGhyZWY9eydodHRwczovL3BhZ2VzYWtlLmNvbSd9PkxlYXJuIE1vcmU8L0xpbms+PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+PExpbmsgaHJlZj17J2h0dHBzOi8vcGFnZXNha2UuY29tJ30+U3RhcnQgZm9yIEZyZWU8L0xpbms+PC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG5cblxuPC9MaW5rPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZEJsb2NrO1xuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJGYUNhcnRTaG9wcGluZyIsIkFkQmxvY2siLCJuYW1lIiwicGFnZSIsInNpdGUiLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0QXJyYXkiLCJjdXJyZW50VGV4dCIsInNldEN1cnJlbnRUZXh0IiwidGV4dEluZGV4Iiwic2V0VGV4dEluZGV4IiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ2YXJpYW50cyIsInZhcmlhbnQxIiwic3R5bGluZyIsImhlYWRlcjEiLCJoZWFkZXIyIiwic3ViaGVhZGVyIiwiYm9keSIsImN0YTFfbGluayIsImN0YTJfbGluayIsImN0YTFfdGV4dCIsImN0YTJfdGV4dCIsInZhcmlhbnQyIiwidXNlVmFyaWFudDIiLCJ2YXJpYW50IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInNldFRpbWVvdXQiLCJwcmV2SW5kZXgiLCJuZXdJbmRleCIsImxlbmd0aCIsImNsZWFySW50ZXJ2YWwiLCJocmVmIiwiZGF0YS10aGVtZSIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImgxIiwiYnIiLCJzcGFuIiwicCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/AdBlock.js\n"));

/***/ })

});