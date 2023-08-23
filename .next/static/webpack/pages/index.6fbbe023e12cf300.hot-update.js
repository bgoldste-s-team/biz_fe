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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa6__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa6 */ \"./node_modules/react-icons/fa6/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst AdBlock = (param)=>{\n    let { name , page , site , index  } = param;\n    _s();\n    console.log(\"adblock\", page, site, index, name);\n    const textArray = [\n        \"First message\",\n        \"Second message\",\n        \"Third message\"\n    ];\n    const [currentText, setCurrentText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(textArray[0]);\n    const [textIndex, setTextIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const variants = {\n        // variant1: {\n        //     // styling: \"bg-gradient-to-r from-black via-purple-800 to-black text-white p-8 text-center\",\n        //     styling:\"bg-neutral-content text-neutral p-8 text-center\",\n        //     header1:\"Don't Just Browse The Web.\",\n        //     header2:\"Create It.\",\n        //     subheader:\"\",\n        //     body: \"\",\n        //     cta1_link:\"\",\n        //     cta2_link:\"\",\n        //     cta1_text:\"\",\n        //     cta2_text:\"\"\n        // },\n        variant1: {\n            // styling: \"bg-gradient-to-r from-black via-purple-800 to-black text-white p-8 text-center\",\n            styling: \"bg-neutral-content text-neutral p-8 text-center\",\n            header1: \"Your Side Hustle Is Calling\",\n            header2: \"Create It.\",\n            subheader: \"\",\n            body: \"\",\n            cta1_link: \"\",\n            cta2_link: \"\",\n            cta1_text: \"\",\n            cta2_text: \"\",\n            textArray: [\n                \"Portfolio Website\",\n                \"Review Site\",\n                \"Small Business\"\n            ]\n        },\n        variant2: {\n            styling: \"bg-neutral-content text-neutral p-8 text-center\",\n            header1: \"Revenue Generating Websites\",\n            header2: \"Ready in seconds.\",\n            subheader: \"Your Side Hustle is Calling.\",\n            body: \"\",\n            cta1_link: \"\",\n            cta2_link: \"\",\n            cta1_text: \"\",\n            cta2_text: \"\",\n            textArray: [\n                \"Ready in seconds.\",\n                \"SEO Optimized\",\n                \"AI Generated Content\"\n            ]\n        }\n    };\n    const useVariant2 = index % 2 === 0;\n    const variant = index % 2 === 1 ? \"variant1\" : \"variant2\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setVisible(false);\n            setTextIndex((prevIndex)=>{\n                const newIndex = prevIndex + 1 === variants[variant].textArray.length ? 0 : prevIndex + 1;\n                setTimeout(()=>{\n                    setCurrentText(variants[variant].textArray[newIndex]);\n                    setVisible(true);\n                }, 300); // This delay is for the fade-out effect to be noticeable before the text changes\n                return newIndex;\n            });\n        }, 3500); // Giving some extra time for animations\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        \"data-theme\": \"pagesake\",\n        className: \"hero \".concat(variants[variant].styling, \" \"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"hero-content flex-col   items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/pagesake_logo.svg\",\n                        className: \"btn btn-ghost\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                        lineNumber: 103,\n                        columnNumber: 5\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                    lineNumber: 102,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-4xl \",\n                            children: [\n                                \" \",\n                                variants[variant].header1,\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                    lineNumber: 116,\n                                    columnNumber: 37\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"\".concat(textIndex === 0 ? \"text-green-300\" : textIndex === 1 ? \"text-blue-300\" : \"text-red-300\", \"  font-bold mt-4 transition-opacity duration-300 \").concat(visible ? \"opacity-100\" : \"opacity-0\"),\n                                    children: currentText\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                    lineNumber: 117,\n                                    columnNumber: 5\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                            lineNumber: 114,\n                            columnNumber: 8\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl \",\n                            children: [\n                                variants[variant].subheader,\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                    lineNumber: 119,\n                                    columnNumber: 61\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                            lineNumber: 119,\n                            columnNumber: 5\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"py-2\",\n                            children: \"Pagesake lets you build complete websites, with content, monetization options, and beautiful design, all in seconds. For free. \"\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                            lineNumber: 122,\n                            columnNumber: 5\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"py-2\",\n                            children: \"See what the savviest creators on the web are already doing, checkout Pagesake today! \"\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                            lineNumber: 123,\n                            columnNumber: 5\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mask mask-squircle bg-red\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa6__WEBPACK_IMPORTED_MODULE_3__.FaCartShopping, {}, void 0, false, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 125,\n                                columnNumber: 5\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                            lineNumber: 124,\n                            columnNumber: 5\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card card-side bg-base-100 shadow-xl\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/images/stock/photo-1635805737707-575885ab0820.jpg\",\n                                        alt: \"Movie\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 128,\n                                        columnNumber: 11\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                    lineNumber: 128,\n                                    columnNumber: 3\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card-body\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"card-title\",\n                                            children: \"New movie is released!\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                            lineNumber: 130,\n                                            columnNumber: 5\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Click the button to watch on Jetflix app.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                            lineNumber: 131,\n                                            columnNumber: 5\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"card-actions justify-end\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"btn btn-primary\",\n                                                children: \"Watch\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                                lineNumber: 133,\n                                                columnNumber: 7\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                            lineNumber: 132,\n                                            columnNumber: 5\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                    lineNumber: 129,\n                                    columnNumber: 3\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                            lineNumber: 127,\n                            columnNumber: 5\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center gap-4 mt-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn btn-secondary btn-outline\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"https://pagesake.com\",\n                                        children: \"Learn More\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 138,\n                                        columnNumber: 55\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                    lineNumber: 138,\n                                    columnNumber: 5\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn btn-primary\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"https://pagesake.com\",\n                                        children: \"Start for Free\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 139,\n                                        columnNumber: 41\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                    lineNumber: 139,\n                                    columnNumber: 5\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                            lineNumber: 137,\n                            columnNumber: 5\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                    lineNumber: 113,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n            lineNumber: 101,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AdBlock, \"VfzrQ5a30aEbx1D5PVciVzf3WBk=\");\n_c = AdBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdBlock);\nvar _c;\n$RefreshReg$(_c, \"AdBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dk0sOERBQUNnQzs0QkFBR0gsV0FBVTs7Z0NBQWF2QixRQUFRLENBQUNhLFFBQVEsQ0FBQ1IsU0FBUztnQ0FBQzs4Q0FBQyw4REFBQ3NCOzs7Ozs7Ozs7OztzQ0FHekQsOERBQUNFOzRCQUFFTixXQUFVO3NDQUFPOzs7Ozs7c0NBQ3BCLDhEQUFDTTs0QkFBRU4sV0FBVTtzQ0FBTzs7Ozs7O3NDQUNwQiw4REFBQ0Y7NEJBQUlFLFdBQVU7c0NBQ2YsNEVBQUN0QywyREFBY0E7Ozs7Ozs7Ozs7c0NBRWYsOERBQUNvQzs0QkFBSUUsV0FBVTs7OENBQ2pCLDhEQUFDTzs4Q0FBTyw0RUFBQ047d0NBQUlDLEtBQUk7d0NBQXFETSxLQUFJOzs7Ozs7Ozs7Ozs4Q0FDMUUsOERBQUNWO29DQUFJRSxXQUFVOztzREFDYiw4REFBQ1M7NENBQUdULFdBQVU7c0RBQWE7Ozs7OztzREFDM0IsOERBQUNNO3NEQUFFOzs7Ozs7c0RBQ0gsOERBQUNSOzRDQUFJRSxXQUFVO3NEQUNiLDRFQUFDVTtnREFBT1YsV0FBVTswREFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUl0Qyw4REFBQ0Y7NEJBQUlFLFdBQVc7OzhDQUNoQiw4REFBQ1U7b0NBQU9WLFdBQVU7OENBQWdDLDRFQUFDdkMsa0RBQUlBO3dDQUFDa0QsTUFBTTtrREFBd0I7Ozs7Ozs7Ozs7OzhDQUN0Riw4REFBQ0Q7b0NBQU9WLFdBQVU7OENBQWtCLDRFQUFDdkMsa0RBQUlBO3dDQUFDa0QsTUFBTTtrREFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPNUU7R0ExSU1oRDtLQUFBQTtBQTRJTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BZEJsb2NrLmpzP2Y1YjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7XG4gICBGYUNhcnRTaG9wcGluZ1xuXG59IGZyb20gXCJyZWFjdC1pY29ucy9mYTZcIjtcblxuY29uc3QgQWRCbG9jayA9ICh7bmFtZSwgcGFnZSwgc2l0ZSwgaW5kZXh9KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2FkYmxvY2snLCBwYWdlLCBzaXRlLCBpbmRleCwgbmFtZSlcblxuICAgIGNvbnN0IHRleHRBcnJheSA9IFtcbiAgICAgICdGaXJzdCBtZXNzYWdlJyxcbiAgICAgICdTZWNvbmQgbWVzc2FnZScsXG4gICAgICAnVGhpcmQgbWVzc2FnZScsXG4gIC8vIC4uLiBhZGQgYXMgbWFueSBtZXNzYWdlcyBhcyB5b3Ugd2FudFxuICAgICAgXTtcblxuICAgIGNvbnN0IFtjdXJyZW50VGV4dCwgc2V0Q3VycmVudFRleHRdID0gdXNlU3RhdGUodGV4dEFycmF5WzBdKTtcbiAgICBjb25zdCBbdGV4dEluZGV4LCBzZXRUZXh0SW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUodHJ1ZSk7XG4gXG5cbiAgICBjb25zdCB2YXJpYW50cyA9IHtcbiAgICAgICAgLy8gdmFyaWFudDE6IHtcbiAgICAgICAgLy8gICAgIC8vIHN0eWxpbmc6IFwiYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsYWNrIHZpYS1wdXJwbGUtODAwIHRvLWJsYWNrIHRleHQtd2hpdGUgcC04IHRleHQtY2VudGVyXCIsXG4gICAgICAgIC8vICAgICBzdHlsaW5nOlwiYmctbmV1dHJhbC1jb250ZW50IHRleHQtbmV1dHJhbCBwLTggdGV4dC1jZW50ZXJcIixcbiAgICAgICAgLy8gICAgIGhlYWRlcjE6XCJEb24ndCBKdXN0IEJyb3dzZSBUaGUgV2ViLlwiLFxuICAgICAgICAvLyAgICAgaGVhZGVyMjpcIkNyZWF0ZSBJdC5cIixcbiAgICAgICAgLy8gICAgIHN1YmhlYWRlcjpcIlwiLFxuICAgICAgICAvLyAgICAgYm9keTogXCJcIixcbiAgICAgICAgLy8gICAgIGN0YTFfbGluazpcIlwiLFxuICAgICAgICAvLyAgICAgY3RhMl9saW5rOlwiXCIsXG4gICAgICAgIC8vICAgICBjdGExX3RleHQ6XCJcIixcbiAgICAgICAgLy8gICAgIGN0YTJfdGV4dDpcIlwiXG4gICAgICAgIC8vIH0sXG4gICAgICAgIHZhcmlhbnQxOiB7XG4gICAgICAgICAgICAvLyBzdHlsaW5nOiBcImJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibGFjayB2aWEtcHVycGxlLTgwMCB0by1ibGFjayB0ZXh0LXdoaXRlIHAtOCB0ZXh0LWNlbnRlclwiLFxuICAgICAgICAgICAgc3R5bGluZzpcImJnLW5ldXRyYWwtY29udGVudCB0ZXh0LW5ldXRyYWwgcC04IHRleHQtY2VudGVyXCIsXG4gICAgICAgICAgICBoZWFkZXIxOlwiWW91ciBTaWRlIEh1c3RsZSBJcyBDYWxsaW5nXCIsXG4gICAgICAgICAgICBoZWFkZXIyOlwiQ3JlYXRlIEl0LlwiLFxuICAgICAgICAgICAgc3ViaGVhZGVyOlwiXCIsXG4gICAgICAgICAgICBib2R5OiBcIlwiLFxuICAgICAgICAgICAgY3RhMV9saW5rOlwiXCIsXG4gICAgICAgICAgICBjdGEyX2xpbms6XCJcIixcbiAgICAgICAgICAgIGN0YTFfdGV4dDpcIlwiLFxuICAgICAgICAgICAgY3RhMl90ZXh0OlwiXCIsXG4gICAgICAgICAgICB0ZXh0QXJyYXk6IFtcbiAgICAgICAgICAgICAgICAgICdQb3J0Zm9saW8gV2Vic2l0ZScsXG4gICAgICAgICAgICAgICAgICAnUmV2aWV3IFNpdGUnLFxuICAgICAgICAgICAgICAgICAgJ1NtYWxsIEJ1c2luZXNzJyxcbiAgICAgICAgICAgICAgLy8gLi4uIGFkZCBhcyBtYW55IG1lc3NhZ2VzIGFzIHlvdSB3YW50XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHZhcmlhbnQyOiB7XG4gICAgICAgICBzdHlsaW5nOiBcImJnLW5ldXRyYWwtY29udGVudCB0ZXh0LW5ldXRyYWwgcC04IHRleHQtY2VudGVyXCIsXG4gICAgICAgICBoZWFkZXIxOlwiUmV2ZW51ZSBHZW5lcmF0aW5nIFdlYnNpdGVzXCIsXG4gICAgICAgICBoZWFkZXIyOlwiUmVhZHkgaW4gc2Vjb25kcy5cIixcbiAgICAgICAgIHN1YmhlYWRlcjpcIllvdXIgU2lkZSBIdXN0bGUgaXMgQ2FsbGluZy5cIixcbiAgICAgICAgIGJvZHk6IFwiXCIsXG4gICAgICAgICBjdGExX2xpbms6XCJcIixcbiAgICAgICAgIGN0YTJfbGluazpcIlwiLFxuICAgICAgICAgY3RhMV90ZXh0OlwiXCIsXG4gICAgICAgICBjdGEyX3RleHQ6XCJcIixcbiAgICAgICAgICAgIHRleHRBcnJheTogW1xuICAgICAgICAgICAgICAgJ1JlYWR5IGluIHNlY29uZHMuJyxcbiAgICAgICAgICAgICAgICdTRU8gT3B0aW1pemVkJyxcbiAgICAgICAgICAgICAgICdBSSBHZW5lcmF0ZWQgQ29udGVudCcsXG4gICAgICAgICAgIC8vIC4uLiBhZGQgYXMgbWFueSBtZXNzYWdlcyBhcyB5b3Ugd2FudFxuICAgICAgICAgICAgICAgXVxuICAgICB9XG4gfVxuXG4gY29uc3QgdXNlVmFyaWFudDIgPSBpbmRleCAlIDIgPT09IDAgXG5cbiBjb25zdCB2YXJpYW50ID0gaW5kZXggJSAyID09PSAxID8gJ3ZhcmlhbnQxJyA6J3ZhcmlhbnQyJ1xuXG5cblxuIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgIHNldFRleHRJbmRleCgocHJldkluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0luZGV4ID0gcHJldkluZGV4ICsgMSA9PT0gdmFyaWFudHNbdmFyaWFudF0udGV4dEFycmF5Lmxlbmd0aCA/IDAgOiBwcmV2SW5kZXggKyAxO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzZXRDdXJyZW50VGV4dCh2YXJpYW50c1t2YXJpYW50XS50ZXh0QXJyYXlbbmV3SW5kZXhdKTtcbiAgICAgICAgICBzZXRWaXNpYmxlKHRydWUpO1xuICAgICAgICB9LCAzMDApOyAvLyBUaGlzIGRlbGF5IGlzIGZvciB0aGUgZmFkZS1vdXQgZWZmZWN0IHRvIGJlIG5vdGljZWFibGUgYmVmb3JlIHRoZSB0ZXh0IGNoYW5nZXNcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBuZXdJbmRleDtcbiAgICAgIH0pO1xuICAgIH0sIDM1MDApOyAvLyBHaXZpbmcgc29tZSBleHRyYSB0aW1lIGZvciBhbmltYXRpb25zXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gcmV0dXJuIChcbiAgICA8ZGl2IGRhdGEtdGhlbWU9XCJwYWdlc2FrZVwiIGNsYXNzTmFtZT17YGhlcm8gJHt2YXJpYW50c1t2YXJpYW50XS5zdHlsaW5nfSBgfT5cbiAgICAgICAgICAgIHsvKjxkaXYgIGNsYXNzTmFtZT1cInNjcm9sbC1wLTAgYmctZ3JhZGllbnQtdG8tciBmcm9tLXByaW1hcnkgdG8tc2Vjb25kYXJ5IHRleHQtd2hpdGUgcHktMTAgcHgtNFwiPiovfVxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1jb250ZW50IGZsZXgtY29sICAgaXRlbXMtY2VudGVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9eydmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcid9PlxuICAgIDxpbWcgc3JjPXsnL3BhZ2VzYWtlX2xvZ28uc3ZnJ30gY2xhc3NOYW1lPVwiYnRuIGJ0bi1naG9zdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiaHR0cHM6Ly9kZXh0ZXJsYWJzLXB1YmxpYy5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9wYWdlc2FrZV9sb2dvLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID1cIiBiZy1zdG9uZS0zMDAgbWF4LXctc20gcm91bmRlZC1sZyBzaGFkb3ctMnhsIGgtMTYgdy0xNiBcIlxuICAgICAgICAgICAgICAgICAgICAvPiovfVxuICAgICAgICAgICAgICAgICAgICB7Lyo8aDQgY2xhc3NOYW1lPXsndGV4dC14bCAnfT5QYWdlc2FrZSB7bmFtZX0ge2luZGV4fTwvaDQ+Ki99XG5cbiAgICA8L2Rpdj5cblxuXG5cbiAgICA8ZGl2PlxuICAgICAgIDxoMSBcbiAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC00eGwgYH1cbiAgICAgID4ge3ZhcmlhbnRzW3ZhcmlhbnRdLmhlYWRlcjF9IDxiciAvPlxuICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7dGV4dEluZGV4ID09PSAwID8gJ3RleHQtZ3JlZW4tMzAwJyA6IHRleHRJbmRleD09PTEgPyAndGV4dC1ibHVlLTMwMCcgOiAndGV4dC1yZWQtMzAwJ30gIGZvbnQtYm9sZCBtdC00IHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0zMDAgJHt2aXNpYmxlID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTAnfWB9PntjdXJyZW50VGV4dH08L3NwYW4+XG4gICAgPC9oMT5cbiAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgXCI+e3ZhcmlhbnRzW3ZhcmlhbnRdLnN1YmhlYWRlcn0gPGJyIC8+XG5cbiAgICA8L2gxPlxuICAgIDxwIGNsYXNzTmFtZT1cInB5LTJcIj5QYWdlc2FrZSBsZXRzIHlvdSBidWlsZCBjb21wbGV0ZSB3ZWJzaXRlcywgd2l0aCBjb250ZW50LCBtb25ldGl6YXRpb24gb3B0aW9ucywgYW5kIGJlYXV0aWZ1bCBkZXNpZ24sIGFsbCBpbiBzZWNvbmRzLiBGb3IgZnJlZS4gPC9wPlxuICAgIDxwIGNsYXNzTmFtZT1cInB5LTJcIj5TZWUgd2hhdCB0aGUgc2F2dmllc3QgY3JlYXRvcnMgb24gdGhlIHdlYiBhcmUgYWxyZWFkeSBkb2luZywgY2hlY2tvdXQgUGFnZXNha2UgdG9kYXkhIDwvcD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hc2sgbWFzay1zcXVpcmNsZSBiZy1yZWRcIj5cbiAgICA8RmFDYXJ0U2hvcHBpbmcgIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtc2lkZSBiZy1iYXNlLTEwMCBzaGFkb3cteGxcIj5cbiAgPGZpZ3VyZT48aW1nIHNyYz1cIi9pbWFnZXMvc3RvY2svcGhvdG8tMTYzNTgwNTczNzcwNy01NzU4ODVhYjA4MjAuanBnXCIgYWx0PVwiTW92aWVcIi8+PC9maWd1cmU+XG4gIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgPGgyIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5OZXcgbW92aWUgaXMgcmVsZWFzZWQhPC9oMj5cbiAgICA8cD5DbGljayB0aGUgYnV0dG9uIHRvIHdhdGNoIG9uIEpldGZsaXggYXBwLjwvcD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYWN0aW9ucyBqdXN0aWZ5LWVuZFwiPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5XYXRjaDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPXsnZmxleCBqdXN0aWZ5LWNlbnRlciBnYXAtNCBtdC00J30+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tb3V0bGluZVwiPjxMaW5rIGhyZWY9eydodHRwczovL3BhZ2VzYWtlLmNvbSd9PkxlYXJuIE1vcmU8L0xpbms+PC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj48TGluayBocmVmPXsnaHR0cHM6Ly9wYWdlc2FrZS5jb20nfT5TdGFydCBmb3IgRnJlZTwvTGluaz48L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZEJsb2NrO1xuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJGYUNhcnRTaG9wcGluZyIsIkFkQmxvY2siLCJuYW1lIiwicGFnZSIsInNpdGUiLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0QXJyYXkiLCJjdXJyZW50VGV4dCIsInNldEN1cnJlbnRUZXh0IiwidGV4dEluZGV4Iiwic2V0VGV4dEluZGV4IiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ2YXJpYW50cyIsInZhcmlhbnQxIiwic3R5bGluZyIsImhlYWRlcjEiLCJoZWFkZXIyIiwic3ViaGVhZGVyIiwiYm9keSIsImN0YTFfbGluayIsImN0YTJfbGluayIsImN0YTFfdGV4dCIsImN0YTJfdGV4dCIsInZhcmlhbnQyIiwidXNlVmFyaWFudDIiLCJ2YXJpYW50IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInByZXZJbmRleCIsIm5ld0luZGV4IiwibGVuZ3RoIiwic2V0VGltZW91dCIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJkYXRhLXRoZW1lIiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaDEiLCJiciIsInNwYW4iLCJwIiwiZmlndXJlIiwiYWx0IiwiaDIiLCJidXR0b24iLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/AdBlock.js\n"));

/***/ })

});