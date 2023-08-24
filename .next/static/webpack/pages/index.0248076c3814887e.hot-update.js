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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa6__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa6 */ \"./node_modules/react-icons/fa6/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst AdBlock = (param)=>{\n    let { name , page , site , index  } = param;\n    _s();\n    console.log(\"adblock\", page, site, index, name);\n    const textArray = [\n        \"First message\",\n        \"Second message\",\n        \"Third message\"\n    ];\n    const [currentText, setCurrentText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(textArray[0]);\n    const [textIndex, setTextIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const variants = {\n        // variant1: {\n        //     // styling: \"bg-gradient-to-r from-black via-purple-800 to-black text-white p-8 text-center\",\n        //     styling:\"bg-neutral-content text-neutral p-8 text-center\",\n        //     header1:\"Don't Just Browse The Web.\",\n        //     header2:\"Create It.\",\n        //     subheader:\"\",\n        //     body: \"\",\n        //     cta1_link:\"\",\n        //     cta2_link:\"\",\n        //     cta1_text:\"\",\n        //     cta2_text:\"\"\n        // },\n        variant1: {\n            // styling: \"bg-gradient-to-r from-black via-purple-800 to-black text-white p-8 text-center\",\n            styling: \"bg-neutral-content text-neutral p-8 text-center\",\n            header1: \"Your Side Hustle Is Calling\",\n            header2: \"Create It.\",\n            subheader: \"\",\n            body: \"\",\n            cta1_link: \"\",\n            cta2_link: \"\",\n            cta1_text: \"\",\n            cta2_text: \"\",\n            textArray: [\n                \"Portfolio Website\",\n                \"Review Site\",\n                \"Small Business\"\n            ]\n        },\n        variant2: {\n            styling: \"bg-neutral-content text-neutral p-8 text-center\",\n            header1: \"Revenue Generating Websites\",\n            header2: \"Ready in seconds.\",\n            subheader: \"Your Side Hustle is Calling.\",\n            body: \"\",\n            cta1_link: \"\",\n            cta2_link: \"\",\n            cta1_text: \"\",\n            cta2_text: \"\",\n            textArray: [\n                \"Ready in seconds.\",\n                \"SEO Optimized\",\n                \"AI Generated Content\"\n            ]\n        }\n    };\n    const useVariant2 = index % 2 === 0;\n    const variant = index % 2 === 1 ? \"variant1\" : \"variant2\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setVisible(false);\n            setTextIndex((prevIndex)=>{\n                const newIndex = prevIndex + 1 === variants[variant].textArray.length ? 0 : prevIndex + 1;\n                setTimeout(()=>{\n                    setCurrentText(variants[variant].textArray[newIndex]);\n                    setVisible(true);\n                }, 300); // This delay is for the fade-out effect to be noticeable before the text changes\n                return newIndex;\n            });\n        }, 3500); // Giving some extra time for animations\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        \"data-theme\": \"pagesake\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hero \".concat(variants[variant].styling, \" \"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"hero-content flex-col   items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col items-center justify-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/pagesake_logo.svg\",\n                                className: \"btn btn-ghost\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 104,\n                                columnNumber: 5\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                            lineNumber: 103,\n                            columnNumber: 5\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-4xl \",\n                                    children: [\n                                        \" \",\n                                        variants[variant].header1,\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                            lineNumber: 117,\n                                            columnNumber: 37\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"\".concat(textIndex === 0 ? \"text-green-300\" : textIndex === 1 ? \"text-blue-300\" : \"text-red-300\", \"  font-bold mt-4 transition-opacity duration-300 \").concat(visible ? \"opacity-100\" : \"opacity-0\"),\n                                            children: currentText\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                            lineNumber: 118,\n                                            columnNumber: 5\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                    lineNumber: 115,\n                                    columnNumber: 8\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-2xl \",\n                                    children: [\n                                        variants[variant].subheader,\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                            lineNumber: 120,\n                                            columnNumber: 61\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                    lineNumber: 120,\n                                    columnNumber: 5\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"py-2\",\n                                    children: \"Pagesake lets you build complete websites, with content, monetization options, and beautiful design, all in seconds. For free. \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                    lineNumber: 123,\n                                    columnNumber: 5\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"py-2\",\n                                    children: \"See what the savviest creators on the web are already doing, checkout Pagesake today! \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                    lineNumber: 124,\n                                    columnNumber: 5\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mask mask-squircle bg-red\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa6__WEBPACK_IMPORTED_MODULE_3__.FaCartShopping, {}, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 126,\n                                        columnNumber: 5\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                    lineNumber: 125,\n                                    columnNumber: 5\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-center gap-4 mt-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"btn btn-secondary btn-outline\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                href: \"https://pagesake.com\",\n                                                children: \"Learn More\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                                lineNumber: 130,\n                                                columnNumber: 55\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                            lineNumber: 130,\n                                            columnNumber: 5\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"btn btn-primary\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                href: \"https://pagesake.com\",\n                                                children: \"Start for Free\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                                lineNumber: 131,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                            lineNumber: 131,\n                                            columnNumber: 5\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                    lineNumber: 129,\n                                    columnNumber: 5\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                            lineNumber: 114,\n                            columnNumber: 5\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                    lineNumber: 102,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                lineNumber: 100,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card card-side card-compact bg-base-100 shadow-xl\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa6__WEBPACK_IMPORTED_MODULE_3__.FaCartShopping, {\n                                className: \"h-8 w-8 bg-green-500 text-primary\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 139,\n                                columnNumber: 12\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                        lineNumber: 139,\n                        columnNumber: 3\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-body\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"card-title\",\n                                children: \"New movie is released!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 141,\n                                columnNumber: 5\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Click the button to watch on Jetflix app.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 142,\n                                columnNumber: 5\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"card-actions justify-end\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn btn-primary\",\n                                    children: \"Watch\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                    lineNumber: 144,\n                                    columnNumber: 7\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 143,\n                                columnNumber: 5\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                        lineNumber: 140,\n                        columnNumber: 3\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                lineNumber: 138,\n                columnNumber: 1\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AdBlock, \"VfzrQ5a30aEbx1D5PVciVzf3WBk=\");\n_c = AdBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdBlock);\nvar _c;\n$RefreshReg$(_c, \"AdBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BZEJsb2NrLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDcEI7QUFJSjtBQUV6QixNQUFNSyxVQUFVLFNBQStCO1FBQTlCLEVBQUNDLEtBQUksRUFBRUMsS0FBSSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBQzs7SUFDdENDLFFBQVFDLEdBQUcsQ0FBQyxXQUFXSixNQUFNQyxNQUFNQyxPQUFPSDtJQUUxQyxNQUFNTSxZQUFZO1FBQ2hCO1FBQ0E7UUFDQTtLQUVDO0lBRUgsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdiLCtDQUFRQSxDQUFDVyxTQUFTLENBQUMsRUFBRTtJQUMzRCxNQUFNLENBQUNHLFdBQVdDLGFBQWEsR0FBR2YsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDZ0IsU0FBU0MsV0FBVyxHQUFHakIsK0NBQVFBLENBQUMsSUFBSTtJQUczQyxNQUFNa0IsV0FBVztRQUNiLGNBQWM7UUFDZCxvR0FBb0c7UUFDcEcsaUVBQWlFO1FBQ2pFLDRDQUE0QztRQUM1Qyw0QkFBNEI7UUFDNUIsb0JBQW9CO1FBQ3BCLGdCQUFnQjtRQUNoQixvQkFBb0I7UUFDcEIsb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkIsS0FBSztRQUNMQyxVQUFVO1lBQ04sNkZBQTZGO1lBQzdGQyxTQUFRO1lBQ1JDLFNBQVE7WUFDUkMsU0FBUTtZQUNSQyxXQUFVO1lBQ1ZDLE1BQU07WUFDTkMsV0FBVTtZQUNWQyxXQUFVO1lBQ1ZDLFdBQVU7WUFDVkMsV0FBVTtZQUNWakIsV0FBVztnQkFDTDtnQkFDQTtnQkFDQTthQUVDO1FBQ1g7UUFDQWtCLFVBQVU7WUFDVFQsU0FBUztZQUNUQyxTQUFRO1lBQ1JDLFNBQVE7WUFDUkMsV0FBVTtZQUNWQyxNQUFNO1lBQ05DLFdBQVU7WUFDVkMsV0FBVTtZQUNWQyxXQUFVO1lBQ1ZDLFdBQVU7WUFDUGpCLFdBQVc7Z0JBQ1I7Z0JBQ0E7Z0JBQ0E7YUFFQztRQUNYO0lBQ0o7SUFFQSxNQUFNbUIsY0FBY3RCLFFBQVEsTUFBTTtJQUVsQyxNQUFNdUIsVUFBVXZCLFFBQVEsTUFBTSxJQUFJLGFBQVksVUFBVTtJQUl4RFAsZ0RBQVNBLENBQUMsSUFBTTtRQUNiLE1BQU0rQixXQUFXQyxZQUFZLElBQU07WUFDakNoQixXQUFXLEtBQUs7WUFDaEJGLGFBQWEsQ0FBQ21CLFlBQWM7Z0JBQzFCLE1BQU1DLFdBQVdELFlBQVksTUFBTWhCLFFBQVEsQ0FBQ2EsUUFBUSxDQUFDcEIsU0FBUyxDQUFDeUIsTUFBTSxHQUFHLElBQUlGLFlBQVksQ0FBQztnQkFDekZHLFdBQVcsSUFBTTtvQkFDZnhCLGVBQWVLLFFBQVEsQ0FBQ2EsUUFBUSxDQUFDcEIsU0FBUyxDQUFDd0IsU0FBUztvQkFDcERsQixXQUFXLElBQUk7Z0JBQ2pCLEdBQUcsTUFBTSxpRkFBaUY7Z0JBRTFGLE9BQU9rQjtZQUNUO1FBQ0YsR0FBRyxPQUFPLHdDQUF3QztRQUVsRCxPQUFPLElBQU07WUFDWEcsY0FBY047UUFDaEI7SUFDRixHQUFHLEVBQUU7SUFFTixxQkFDRyw4REFBQ087UUFBSUMsY0FBVzs7MEJBQ2hCLDhEQUFDRDtnQkFBS0UsV0FBVyxRQUFrQyxPQUExQnZCLFFBQVEsQ0FBQ2EsUUFBUSxDQUFDWCxPQUFPLEVBQUM7MEJBRW5ELDRFQUFDbUI7b0JBQUlFLFdBQVU7O3NDQUNmLDhEQUFDRjs0QkFBSUUsV0FBVztzQ0FDaEIsNEVBQUNDO2dDQUFJQyxLQUFLO2dDQUFzQkYsV0FBVTs7Ozs7Ozs7Ozs7c0NBVTFDLDhEQUFDRjs7OENBQ0UsOERBQUNLO29DQUNBSCxXQUFZOzt3Q0FDYjt3Q0FBRXZCLFFBQVEsQ0FBQ2EsUUFBUSxDQUFDVixPQUFPO3dDQUFDO3NEQUFDLDhEQUFDd0I7Ozs7O3NEQUNqQyw4REFBQ0M7NENBQUtMLFdBQVcsR0FBNEl6QixPQUF6SUYsY0FBYyxJQUFJLG1CQUFtQkEsY0FBWSxJQUFJLGtCQUFrQixjQUFjLEVBQUMscURBQXlGLE9BQXRDRSxVQUFVLGdCQUFnQixXQUFXO3NEQUFLSjs7Ozs7Ozs7Ozs7OzhDQUV2TSw4REFBQ2dDO29DQUFHSCxXQUFVOzt3Q0FBYXZCLFFBQVEsQ0FBQ2EsUUFBUSxDQUFDUixTQUFTO3dDQUFDO3NEQUFDLDhEQUFDc0I7Ozs7Ozs7Ozs7OzhDQUd6RCw4REFBQ0U7b0NBQUVOLFdBQVU7OENBQU87Ozs7Ozs4Q0FDcEIsOERBQUNNO29DQUFFTixXQUFVOzhDQUFPOzs7Ozs7OENBQ3BCLDhEQUFDRjtvQ0FBSUUsV0FBVTs4Q0FDZiw0RUFBQ3RDLDJEQUFjQTs7Ozs7Ozs7Ozs4Q0FHZiw4REFBQ29DO29DQUFJRSxXQUFXOztzREFDaEIsOERBQUNPOzRDQUFPUCxXQUFVO3NEQUFnQyw0RUFBQ3ZDLGtEQUFJQTtnREFBQytDLE1BQU07MERBQXdCOzs7Ozs7Ozs7OztzREFDdEYsOERBQUNEOzRDQUFPUCxXQUFVO3NEQUFrQiw0RUFBQ3ZDLGtEQUFJQTtnREFBQytDLE1BQU07MERBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU81RSw4REFBQ1Y7Z0JBQUlFLFdBQVU7O2tDQUNiLDhEQUFDUzs7NEJBQU87MENBQUMsOERBQUMvQywyREFBY0E7Z0NBQUNzQyxXQUFVOzs7Ozs7Ozs7Ozs7a0NBQ25DLDhEQUFDRjt3QkFBSUUsV0FBVTs7MENBQ2IsOERBQUNVO2dDQUFHVixXQUFVOzBDQUFhOzs7Ozs7MENBQzNCLDhEQUFDTTswQ0FBRTs7Ozs7OzBDQUNILDhEQUFDUjtnQ0FBSUUsV0FBVTswQ0FDYiw0RUFBQ087b0NBQU9QLFdBQVU7OENBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVExQztHQWhKTXJDO0tBQUFBO0FBa0pOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FkQmxvY2suanM/ZjViOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHtcbiAgIEZhQ2FydFNob3BwaW5nXG5cbn0gZnJvbSBcInJlYWN0LWljb25zL2ZhNlwiO1xuXG5jb25zdCBBZEJsb2NrID0gKHtuYW1lLCBwYWdlLCBzaXRlLCBpbmRleH0pID0+IHtcbiAgICBjb25zb2xlLmxvZygnYWRibG9jaycsIHBhZ2UsIHNpdGUsIGluZGV4LCBuYW1lKVxuXG4gICAgY29uc3QgdGV4dEFycmF5ID0gW1xuICAgICAgJ0ZpcnN0IG1lc3NhZ2UnLFxuICAgICAgJ1NlY29uZCBtZXNzYWdlJyxcbiAgICAgICdUaGlyZCBtZXNzYWdlJyxcbiAgLy8gLi4uIGFkZCBhcyBtYW55IG1lc3NhZ2VzIGFzIHlvdSB3YW50XG4gICAgICBdO1xuXG4gICAgY29uc3QgW2N1cnJlbnRUZXh0LCBzZXRDdXJyZW50VGV4dF0gPSB1c2VTdGF0ZSh0ZXh0QXJyYXlbMF0pO1xuICAgIGNvbnN0IFt0ZXh0SW5kZXgsIHNldFRleHRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiBcblxuICAgIGNvbnN0IHZhcmlhbnRzID0ge1xuICAgICAgICAvLyB2YXJpYW50MToge1xuICAgICAgICAvLyAgICAgLy8gc3R5bGluZzogXCJiZy1ncmFkaWVudC10by1yIGZyb20tYmxhY2sgdmlhLXB1cnBsZS04MDAgdG8tYmxhY2sgdGV4dC13aGl0ZSBwLTggdGV4dC1jZW50ZXJcIixcbiAgICAgICAgLy8gICAgIHN0eWxpbmc6XCJiZy1uZXV0cmFsLWNvbnRlbnQgdGV4dC1uZXV0cmFsIHAtOCB0ZXh0LWNlbnRlclwiLFxuICAgICAgICAvLyAgICAgaGVhZGVyMTpcIkRvbid0IEp1c3QgQnJvd3NlIFRoZSBXZWIuXCIsXG4gICAgICAgIC8vICAgICBoZWFkZXIyOlwiQ3JlYXRlIEl0LlwiLFxuICAgICAgICAvLyAgICAgc3ViaGVhZGVyOlwiXCIsXG4gICAgICAgIC8vICAgICBib2R5OiBcIlwiLFxuICAgICAgICAvLyAgICAgY3RhMV9saW5rOlwiXCIsXG4gICAgICAgIC8vICAgICBjdGEyX2xpbms6XCJcIixcbiAgICAgICAgLy8gICAgIGN0YTFfdGV4dDpcIlwiLFxuICAgICAgICAvLyAgICAgY3RhMl90ZXh0OlwiXCJcbiAgICAgICAgLy8gfSxcbiAgICAgICAgdmFyaWFudDE6IHtcbiAgICAgICAgICAgIC8vIHN0eWxpbmc6IFwiYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsYWNrIHZpYS1wdXJwbGUtODAwIHRvLWJsYWNrIHRleHQtd2hpdGUgcC04IHRleHQtY2VudGVyXCIsXG4gICAgICAgICAgICBzdHlsaW5nOlwiYmctbmV1dHJhbC1jb250ZW50IHRleHQtbmV1dHJhbCBwLTggdGV4dC1jZW50ZXJcIixcbiAgICAgICAgICAgIGhlYWRlcjE6XCJZb3VyIFNpZGUgSHVzdGxlIElzIENhbGxpbmdcIixcbiAgICAgICAgICAgIGhlYWRlcjI6XCJDcmVhdGUgSXQuXCIsXG4gICAgICAgICAgICBzdWJoZWFkZXI6XCJcIixcbiAgICAgICAgICAgIGJvZHk6IFwiXCIsXG4gICAgICAgICAgICBjdGExX2xpbms6XCJcIixcbiAgICAgICAgICAgIGN0YTJfbGluazpcIlwiLFxuICAgICAgICAgICAgY3RhMV90ZXh0OlwiXCIsXG4gICAgICAgICAgICBjdGEyX3RleHQ6XCJcIixcbiAgICAgICAgICAgIHRleHRBcnJheTogW1xuICAgICAgICAgICAgICAgICAgJ1BvcnRmb2xpbyBXZWJzaXRlJyxcbiAgICAgICAgICAgICAgICAgICdSZXZpZXcgU2l0ZScsXG4gICAgICAgICAgICAgICAgICAnU21hbGwgQnVzaW5lc3MnLFxuICAgICAgICAgICAgICAvLyAuLi4gYWRkIGFzIG1hbnkgbWVzc2FnZXMgYXMgeW91IHdhbnRcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgdmFyaWFudDI6IHtcbiAgICAgICAgIHN0eWxpbmc6IFwiYmctbmV1dHJhbC1jb250ZW50IHRleHQtbmV1dHJhbCBwLTggdGV4dC1jZW50ZXJcIixcbiAgICAgICAgIGhlYWRlcjE6XCJSZXZlbnVlIEdlbmVyYXRpbmcgV2Vic2l0ZXNcIixcbiAgICAgICAgIGhlYWRlcjI6XCJSZWFkeSBpbiBzZWNvbmRzLlwiLFxuICAgICAgICAgc3ViaGVhZGVyOlwiWW91ciBTaWRlIEh1c3RsZSBpcyBDYWxsaW5nLlwiLFxuICAgICAgICAgYm9keTogXCJcIixcbiAgICAgICAgIGN0YTFfbGluazpcIlwiLFxuICAgICAgICAgY3RhMl9saW5rOlwiXCIsXG4gICAgICAgICBjdGExX3RleHQ6XCJcIixcbiAgICAgICAgIGN0YTJfdGV4dDpcIlwiLFxuICAgICAgICAgICAgdGV4dEFycmF5OiBbXG4gICAgICAgICAgICAgICAnUmVhZHkgaW4gc2Vjb25kcy4nLFxuICAgICAgICAgICAgICAgJ1NFTyBPcHRpbWl6ZWQnLFxuICAgICAgICAgICAgICAgJ0FJIEdlbmVyYXRlZCBDb250ZW50JyxcbiAgICAgICAgICAgLy8gLi4uIGFkZCBhcyBtYW55IG1lc3NhZ2VzIGFzIHlvdSB3YW50XG4gICAgICAgICAgICAgICBdXG4gICAgIH1cbiB9XG5cbiBjb25zdCB1c2VWYXJpYW50MiA9IGluZGV4ICUgMiA9PT0gMCBcblxuIGNvbnN0IHZhcmlhbnQgPSBpbmRleCAlIDIgPT09IDEgPyAndmFyaWFudDEnIDondmFyaWFudDInXG5cblxuXG4gdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldFZpc2libGUoZmFsc2UpO1xuICAgICAgc2V0VGV4dEluZGV4KChwcmV2SW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3SW5kZXggPSBwcmV2SW5kZXggKyAxID09PSB2YXJpYW50c1t2YXJpYW50XS50ZXh0QXJyYXkubGVuZ3RoID8gMCA6IHByZXZJbmRleCArIDE7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNldEN1cnJlbnRUZXh0KHZhcmlhbnRzW3ZhcmlhbnRdLnRleHRBcnJheVtuZXdJbmRleF0pO1xuICAgICAgICAgIHNldFZpc2libGUodHJ1ZSk7XG4gICAgICAgIH0sIDMwMCk7IC8vIFRoaXMgZGVsYXkgaXMgZm9yIHRoZSBmYWRlLW91dCBlZmZlY3QgdG8gYmUgbm90aWNlYWJsZSBiZWZvcmUgdGhlIHRleHQgY2hhbmdlc1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG5ld0luZGV4O1xuICAgICAgfSk7XG4gICAgfSwgMzUwMCk7IC8vIEdpdmluZyBzb21lIGV4dHJhIHRpbWUgZm9yIGFuaW1hdGlvbnNcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiByZXR1cm4gKFxuICAgIDxkaXYgZGF0YS10aGVtZT1cInBhZ2VzYWtlXCI+XG4gICAgPGRpdiAgY2xhc3NOYW1lPXtgaGVybyAke3ZhcmlhbnRzW3ZhcmlhbnRdLnN0eWxpbmd9IGB9PlxuICAgICAgICAgICAgey8qPGRpdiAgY2xhc3NOYW1lPVwic2Nyb2xsLXAtMCBiZy1ncmFkaWVudC10by1yIGZyb20tcHJpbWFyeSB0by1zZWNvbmRhcnkgdGV4dC13aGl0ZSBweS0xMCBweC00XCI+Ki99XG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWNvbnRlbnQgZmxleC1jb2wgICBpdGVtcy1jZW50ZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT17J2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyJ30+XG4gICAgPGltZyBzcmM9eycvcGFnZXNha2VfbG9nby5zdmcnfSBjbGFzc05hbWU9XCJidG4gYnRuLWdob3N0XCIgLz5cbiAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9XCJodHRwczovL2RleHRlcmxhYnMtcHVibGljLnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3BhZ2VzYWtlX2xvZ28ucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwiIGJnLXN0b25lLTMwMCBtYXgtdy1zbSByb3VuZGVkLWxnIHNoYWRvdy0yeGwgaC0xNiB3LTE2IFwiXG4gICAgICAgICAgICAgICAgICAgIC8+Ki99XG4gICAgICAgICAgICAgICAgICAgIHsvKjxoNCBjbGFzc05hbWU9eyd0ZXh0LXhsICd9PlBhZ2VzYWtlIHtuYW1lfSB7aW5kZXh9PC9oND4qL31cblxuICAgIDwvZGl2PlxuXG5cblxuICAgIDxkaXY+XG4gICAgICAgPGgxIFxuICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LTR4bCBgfVxuICAgICAgPiB7dmFyaWFudHNbdmFyaWFudF0uaGVhZGVyMX0gPGJyIC8+XG4gICAgPHNwYW4gY2xhc3NOYW1lPXtgJHt0ZXh0SW5kZXggPT09IDAgPyAndGV4dC1ncmVlbi0zMDAnIDogdGV4dEluZGV4PT09MSA/ICd0ZXh0LWJsdWUtMzAwJyA6ICd0ZXh0LXJlZC0zMDAnfSAgZm9udC1ib2xkIG10LTQgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTMwMCAke3Zpc2libGUgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktMCd9YH0+e2N1cnJlbnRUZXh0fTwvc3Bhbj5cbiAgICA8L2gxPlxuICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBcIj57dmFyaWFudHNbdmFyaWFudF0uc3ViaGVhZGVyfSA8YnIgLz5cblxuICAgIDwvaDE+XG4gICAgPHAgY2xhc3NOYW1lPVwicHktMlwiPlBhZ2VzYWtlIGxldHMgeW91IGJ1aWxkIGNvbXBsZXRlIHdlYnNpdGVzLCB3aXRoIGNvbnRlbnQsIG1vbmV0aXphdGlvbiBvcHRpb25zLCBhbmQgYmVhdXRpZnVsIGRlc2lnbiwgYWxsIGluIHNlY29uZHMuIEZvciBmcmVlLiA8L3A+XG4gICAgPHAgY2xhc3NOYW1lPVwicHktMlwiPlNlZSB3aGF0IHRoZSBzYXZ2aWVzdCBjcmVhdG9ycyBvbiB0aGUgd2ViIGFyZSBhbHJlYWR5IGRvaW5nLCBjaGVja291dCBQYWdlc2FrZSB0b2RheSEgPC9wPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFzayBtYXNrLXNxdWlyY2xlIGJnLXJlZFwiPlxuICAgIDxGYUNhcnRTaG9wcGluZyAgLz5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPXsnZmxleCBqdXN0aWZ5LWNlbnRlciBnYXAtNCBtdC00J30+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tb3V0bGluZVwiPjxMaW5rIGhyZWY9eydodHRwczovL3BhZ2VzYWtlLmNvbSd9PkxlYXJuIE1vcmU8L0xpbms+PC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj48TGluayBocmVmPXsnaHR0cHM6Ly9wYWdlc2FrZS5jb20nfT5TdGFydCBmb3IgRnJlZTwvTGluaz48L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG48ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1zaWRlIGNhcmQtY29tcGFjdCBiZy1iYXNlLTEwMCBzaGFkb3cteGxcIj5cbiAgPGZpZ3VyZT4gPEZhQ2FydFNob3BwaW5nIGNsYXNzTmFtZT0naC04IHctOCBiZy1ncmVlbi01MDAgdGV4dC1wcmltYXJ5JyAvPjwvZmlndXJlPlxuICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgIDxoMiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+TmV3IG1vdmllIGlzIHJlbGVhc2VkITwvaDI+XG4gICAgPHA+Q2xpY2sgdGhlIGJ1dHRvbiB0byB3YXRjaCBvbiBKZXRmbGl4IGFwcC48L3A+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWFjdGlvbnMganVzdGlmeS1lbmRcIj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+V2F0Y2g8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuXG48L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRCbG9jaztcblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiRmFDYXJ0U2hvcHBpbmciLCJBZEJsb2NrIiwibmFtZSIsInBhZ2UiLCJzaXRlIiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwidGV4dEFycmF5IiwiY3VycmVudFRleHQiLCJzZXRDdXJyZW50VGV4dCIsInRleHRJbmRleCIsInNldFRleHRJbmRleCIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidmFyaWFudHMiLCJ2YXJpYW50MSIsInN0eWxpbmciLCJoZWFkZXIxIiwiaGVhZGVyMiIsInN1YmhlYWRlciIsImJvZHkiLCJjdGExX2xpbmsiLCJjdGEyX2xpbmsiLCJjdGExX3RleHQiLCJjdGEyX3RleHQiLCJ2YXJpYW50MiIsInVzZVZhcmlhbnQyIiwidmFyaWFudCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwcmV2SW5kZXgiLCJuZXdJbmRleCIsImxlbmd0aCIsInNldFRpbWVvdXQiLCJjbGVhckludGVydmFsIiwiZGl2IiwiZGF0YS10aGVtZSIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImgxIiwiYnIiLCJzcGFuIiwicCIsImJ1dHRvbiIsImhyZWYiLCJmaWd1cmUiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/AdBlock.js\n"));

/***/ })

});