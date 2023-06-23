"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/quiz",{

/***/ "./src/components/P5Game.js":
/*!**********************************!*\
  !*** ./src/components/P5Game.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ P5Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction loadScript(src, onLoad) {\n    const script = document.createElement(\"script\");\n    script.src = src;\n    script.onload = onLoad;\n    document.body.appendChild(script);\n}\nfunction P5Game() {\n    _s();\n    const [scriptsLoaded, setScriptsLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const gameRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        loadScript(\"https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js\", ()=>{\n            loadScript(\"https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.14.2/matter.min.js\", ()=>{\n                setScriptsLoaded(true);\n            });\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (scriptsLoaded) {\n            const sketch = (p)=>{\n                let Engine = window.Matter.Engine, World = window.Matter.World, Bodies = window.Matter.Bodies, Vertices = window.Matter.Vertices;\n                let engine;\n                let bodies = [];\n                let ground;\n                let score = 0;\n                let scoreP;\n                let canvas;\n                let alreadyHandled = false;\n                const shapes = [\n                    \"rectangle\",\n                    \"square\"\n                ];\n                p.setup = function() {\n                    canvas = p.createCanvas(320, 320);\n                    engine = Engine.create();\n                    ground = Bodies.rectangle(160, 310, 320, 20, {\n                        isStatic: true\n                    });\n                    World.add(engine.world, [\n                        ground\n                    ]);\n                    scoreP = p.createDiv().parent(gameRef.current);\n                };\n                p.draw = function() {\n                    p.background(51);\n                    window.Matter.Engine.update(engine);\n                    p.noStroke();\n                    bodies.forEach((body)=>{\n                        p.fill(body.color);\n                        p.push();\n                        p.translate(body.body.position.x, body.body.position.y);\n                        p.rotate(body.body.angle);\n                        switch(body.shape){\n                            case \"rectangle\":\n                            case \"square\":\n                                p.rectMode(p.CENTER);\n                                p.rect(0, 0, body.w, body.h);\n                                break;\n                            case \"triangle\":\n                                p.triangle(-body.size / 2, body.size / 2, body.size / 2, body.size / 2, 0, -body.size / 2);\n                                break;\n                            case \"circle\":\n                                p.ellipseMode(p.RADIUS);\n                                p.ellipse(0, 0, body.size);\n                                break;\n                            case \"star\":\n                                p.star(0, 0, body.size / 2, body.size, 5);\n                                break;\n                        }\n                        p.pop();\n                    });\n                    scoreP.html(\"Score: \" + score);\n                };\n                p.star = function(x, y, radius1, radius2, npoints) {\n                    let angle = p.TWO_PI / npoints;\n                    let halfAngle = angle / 2.0;\n                    p.beginShape();\n                    for(let a = 0; a < p.TWO_PI; a += angle){\n                        let sx = x + p.cos(a) * radius2;\n                        let sy = y + p.sin(a) * radius2;\n                        p.vertex(sx, sy);\n                        sx = x + p.cos(a + halfAngle) * radius1;\n                        sy = y + p.sin(a + halfAngle) * radius1;\n                        p.vertex(sx, sy);\n                    }\n                    p.endShape(p.CLOSE);\n                };\n                p.createShape = function() {\n                    let shape = p.random(shapes);\n                    let size = Math.random() * 40 + 10;\n                    let body;\n                    if (shape === \"rectangle\" || shape === \"square\") {\n                        body = Bodies.rectangle(p.mouseX, p.mouseY, size, size);\n                    } else if (shape === \"circle\") {\n                        body = Bodies.circle(p.mouseX, p.mouseY, size);\n                    } else if (shape === \"triangle\") {\n                        let vertices = Vertices.fromPath(\"0 0 50 0 25 50\");\n                        body = window.Matter.Bodies.fromVertices(p.mouseX, p.mouseY, vertices);\n                    } else if (shape === \"star\") {\n                        let vertices = Vertices.fromPath(\"0 0 50 0 25 50\");\n                        body = window.Matter.Bodies.fromVertices(p.mouseX, p.mouseY, vertices);\n                    }\n                    World.add(engine.world, [\n                        body\n                    ]);\n                    let maxHeight = Math.min(...bodies.map((body)=>body.body.position.y));\n                    score = Math.round((320 - maxHeight) / 320 * 100);\n                    bodies.push({\n                        body,\n                        w: size,\n                        h: size,\n                        shape,\n                        color: p.color(Math.random() * 255, Math.random() * 255, Math.random() * 255),\n                        size\n                    });\n                };\n                p.touchStarted = function() {\n                    createShape();\n                    alreadyHandled = true;\n                    return false; // prevent default behavior\n                };\n                p.mousePressed = function() {\n                    if (alreadyHandled) {\n                        alreadyHandled = false;\n                        return false; // prevent default behavior\n                    }\n                    createShape();\n                };\n            };\n            new window.p5(sketch, gameRef.current);\n        }\n    }, [\n        scriptsLoaded\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: gameRef,\n        children: !scriptsLoaded && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/ben/cs_fe/src/components/P5Game.js\",\n            lineNumber: 147,\n            columnNumber: 32\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ben/cs_fe/src/components/P5Game.js\",\n        lineNumber: 146,\n        columnNumber: 9\n    }, this);\n}\n_s(P5Game, \"eLcVFRpMWZay577IpQr5igFT4ew=\");\n_c = P5Game;\nvar _c;\n$RefreshReg$(_c, \"P5Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBR0U7d0JBQ0hQO3dCQUNBUixPQUFPL0IsRUFBRStCLEtBQUssQ0FBQ3NDLEtBQUtELE1BQU0sS0FBSyxLQUFLQyxLQUFLRCxNQUFNLEtBQUssS0FBS0MsS0FBS0QsTUFBTSxLQUFLO3dCQUN6RXRCO29CQUNKO2dCQUNKO2dCQUNBOUMsRUFBRWdGLFlBQVksR0FBRyxXQUFZO29CQUN6QmI7b0JBQ0F0RCxpQkFBaUIsSUFBSTtvQkFDckIsT0FBTyxLQUFLLEVBQUUsMkJBQTJCO2dCQUM3QztnQkFDQWIsRUFBRWlGLFlBQVksR0FBRyxXQUFZO29CQUN6QixJQUFJcEUsZ0JBQWdCO3dCQUNoQkEsaUJBQWlCLEtBQUs7d0JBQ3RCLE9BQU8sS0FBSyxFQUFFLDJCQUEyQjtvQkFDN0MsQ0FBQztvQkFDRHNEO2dCQUVKO1lBQ0o7WUFFQSxJQUFJakUsT0FBT2dGLEVBQUUsQ0FBQ25GLFFBQVFELFFBQVEwQixPQUFPO1FBQ3pDLENBQUM7SUFDTCxHQUFHO1FBQUM1QjtLQUFjO0lBRWxCLHFCQUNJLDhEQUFDdUY7UUFBSUMsS0FBS3RGO2tCQUNMLENBQUNGLCtCQUFpQiw4REFBQ0k7c0JBQUU7Ozs7Ozs7Ozs7O0FBR2xDLENBQUM7R0E1SXVCTDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9QNUdhbWUuanM/YjRkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBsb2FkU2NyaXB0KHNyYywgb25Mb2FkKSB7XG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgc2NyaXB0LnNyYyA9IHNyYztcbiAgICBzY3JpcHQub25sb2FkID0gb25Mb2FkO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUDVHYW1lKCkge1xuICAgIGNvbnN0IFtzY3JpcHRzTG9hZGVkLCBzZXRTY3JpcHRzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBnYW1lUmVmID0gdXNlUmVmKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsb2FkU2NyaXB0KCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9wNS5qcy8xLjQuMC9wNS5taW4uanMnLCAoKSA9PiB7XG4gICAgICAgICAgICBsb2FkU2NyaXB0KCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tYXR0ZXItanMvMC4xNC4yL21hdHRlci5taW4uanMnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0U2NyaXB0c0xvYWRlZCh0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoc2NyaXB0c0xvYWRlZCkge1xuICAgICAgICAgICAgY29uc3Qgc2tldGNoID0gKHApID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgRW5naW5lID0gd2luZG93Lk1hdHRlci5FbmdpbmUsXG4gICAgICAgICAgICAgICAgICAgIFdvcmxkID0gd2luZG93Lk1hdHRlci5Xb3JsZCxcbiAgICAgICAgICAgICAgICAgICAgQm9kaWVzID0gd2luZG93Lk1hdHRlci5Cb2RpZXMsXG4gICAgICAgICAgICAgICAgICAgIFZlcnRpY2VzID0gd2luZG93Lk1hdHRlci5WZXJ0aWNlcztcblxuICAgICAgICAgICAgICAgIGxldCBlbmdpbmU7XG4gICAgICAgICAgICAgICAgbGV0IGJvZGllcyA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBncm91bmQ7XG4gICAgICAgICAgICAgICAgbGV0IHNjb3JlID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgc2NvcmVQO1xuICAgICAgICAgICAgICAgIGxldCBjYW52YXM7XG4gICAgICAgICAgICAgICAgbGV0IGFscmVhZHlIYW5kbGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzaGFwZXMgPSBbJ3JlY3RhbmdsZScsXG4gICAgICAgICAgICAgICAgICAgICdzcXVhcmUnLFxuICAgICAgICAgICAgICAgICAgICAvLyAndHJpYW5nbGUnLFxuICAgICAgICAgICAgICAgICAgICAvLyAnY2lyY2xlJywgJ3N0YXInXG4gICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgIHAuc2V0dXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcyA9IHAuY3JlYXRlQ2FudmFzKDMyMCwgMzIwKTtcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lID0gRW5naW5lLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBncm91bmQgPSBCb2RpZXMucmVjdGFuZ2xlKDE2MCwgMzEwLCAzMjAsIDIwLCB7IGlzU3RhdGljOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICBXb3JsZC5hZGQoZW5naW5lLndvcmxkLCBbZ3JvdW5kXSk7XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlUCA9IHAuY3JlYXRlRGl2KCkucGFyZW50KGdhbWVSZWYuY3VycmVudCk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHAuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcC5iYWNrZ3JvdW5kKDUxKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lk1hdHRlci5FbmdpbmUudXBkYXRlKGVuZ2luZSk7XG4gICAgICAgICAgICAgICAgICAgIHAubm9TdHJva2UoKTtcbiAgICAgICAgICAgICAgICAgICAgYm9kaWVzLmZvckVhY2goYm9keSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwLmZpbGwoYm9keS5jb2xvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwLnB1c2goKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHAudHJhbnNsYXRlKGJvZHkuYm9keS5wb3NpdGlvbi54LCBib2R5LmJvZHkucG9zaXRpb24ueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwLnJvdGF0ZShib2R5LmJvZHkuYW5nbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChib2R5LnNoYXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncmVjdGFuZ2xlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzcXVhcmUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLnJlY3RNb2RlKHAuQ0VOVEVSKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5yZWN0KDAsIDAsIGJvZHkudywgYm9keS5oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndHJpYW5nbGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLnRyaWFuZ2xlKC1ib2R5LnNpemUgLyAyLCBib2R5LnNpemUgLyAyLCBib2R5LnNpemUgLyAyLCBib2R5LnNpemUgLyAyLCAwLCAtYm9keS5zaXplIC8gMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NpcmNsZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAuZWxsaXBzZU1vZGUocC5SQURJVVMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLmVsbGlwc2UoMCwgMCwgYm9keS5zaXplKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3Rhcic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAuc3RhcigwLCAwLCBib2R5LnNpemUgLyAyLCBib2R5LnNpemUsIDUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHAucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHNjb3JlUC5odG1sKCdTY29yZTogJyArIHNjb3JlKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgcC5zdGFyID0gZnVuY3Rpb24gKHgsIHksIHJhZGl1czEsIHJhZGl1czIsIG5wb2ludHMpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFuZ2xlID0gcC5UV09fUEkgLyBucG9pbnRzO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaGFsZkFuZ2xlID0gYW5nbGUgLyAyLjA7XG4gICAgICAgICAgICAgICAgICAgIHAuYmVnaW5TaGFwZSgpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IHAuVFdPX1BJOyBhICs9IGFuZ2xlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3ggPSB4ICsgcC5jb3MoYSkgKiByYWRpdXMyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN5ID0geSArIHAuc2luKGEpICogcmFkaXVzMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHAudmVydGV4KHN4LCBzeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeCA9IHggKyBwLmNvcyhhICsgaGFsZkFuZ2xlKSAqIHJhZGl1czE7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeSA9IHkgKyBwLnNpbihhICsgaGFsZkFuZ2xlKSAqIHJhZGl1czE7XG4gICAgICAgICAgICAgICAgICAgICAgICBwLnZlcnRleChzeCwgc3kpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHAuZW5kU2hhcGUocC5DTE9TRSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBwLmNyZWF0ZVNoYXBlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzaGFwZSA9IHAucmFuZG9tKHNoYXBlcyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzaXplID0gTWF0aC5yYW5kb20oKSAqIDQwICsgMTA7XG4gICAgICAgICAgICAgICAgICAgIGxldCBib2R5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2hhcGUgPT09ICdyZWN0YW5nbGUnIHx8IHNoYXBlID09PSAnc3F1YXJlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSA9IEJvZGllcy5yZWN0YW5nbGUocC5tb3VzZVgsIHAubW91c2VZLCBzaXplLCBzaXplKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzaGFwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgPSBCb2RpZXMuY2lyY2xlKHAubW91c2VYLCBwLm1vdXNlWSwgc2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hhcGUgPT09ICd0cmlhbmdsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2ZXJ0aWNlcyA9IFZlcnRpY2VzLmZyb21QYXRoKCcwIDAgNTAgMCAyNSA1MCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSA9IHdpbmRvdy5NYXR0ZXIuQm9kaWVzLmZyb21WZXJ0aWNlcyhwLm1vdXNlWCwgcC5tb3VzZVksIHZlcnRpY2VzKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzaGFwZSA9PT0gJ3N0YXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmVydGljZXMgPSBWZXJ0aWNlcy5mcm9tUGF0aCgnMCAwIDUwIDAgMjUgNTAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgPSB3aW5kb3cuTWF0dGVyLkJvZGllcy5mcm9tVmVydGljZXMocC5tb3VzZVgsIHAubW91c2VZLCB2ZXJ0aWNlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBXb3JsZC5hZGQoZW5naW5lLndvcmxkLCBbYm9keV0pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWF4SGVpZ2h0ID0gTWF0aC5taW4oLi4uYm9kaWVzLm1hcChib2R5ID0+IGJvZHkuYm9keS5wb3NpdGlvbi55KSk7XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlID0gTWF0aC5yb3VuZCgoMzIwIC0gbWF4SGVpZ2h0KSAvIDMyMCAqIDEwMCk7XG4gICAgICAgICAgICAgICAgICAgIGJvZGllcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICAgICAgICAgICAgICB3OiBzaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgaDogc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHAuY29sb3IoTWF0aC5yYW5kb20oKSAqIDI1NSwgTWF0aC5yYW5kb20oKSAqIDI1NSwgTWF0aC5yYW5kb20oKSAqIDI1NSksXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwLnRvdWNoU3RhcnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlU2hhcGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYWxyZWFkeUhhbmRsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIHByZXZlbnQgZGVmYXVsdCBiZWhhdmlvclxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcC5tb3VzZVByZXNzZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbHJlYWR5SGFuZGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxyZWFkeUhhbmRsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gcHJldmVudCBkZWZhdWx0IGJlaGF2aW9yXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlU2hhcGUoKTtcblxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBuZXcgd2luZG93LnA1KHNrZXRjaCwgZ2FtZVJlZi5jdXJyZW50KTtcbiAgICAgICAgfVxuICAgIH0sIFtzY3JpcHRzTG9hZGVkXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHJlZj17Z2FtZVJlZn0+XG4gICAgICAgICAgICB7IXNjcmlwdHNMb2FkZWQgJiYgPHA+TG9hZGluZy4uLjwvcD59XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsImxvYWRTY3JpcHQiLCJzcmMiLCJvbkxvYWQiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJvbmxvYWQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJQNUdhbWUiLCJzY3JpcHRzTG9hZGVkIiwic2V0U2NyaXB0c0xvYWRlZCIsImdhbWVSZWYiLCJza2V0Y2giLCJwIiwiRW5naW5lIiwid2luZG93IiwiTWF0dGVyIiwiV29ybGQiLCJCb2RpZXMiLCJWZXJ0aWNlcyIsImVuZ2luZSIsImJvZGllcyIsImdyb3VuZCIsInNjb3JlIiwic2NvcmVQIiwiY2FudmFzIiwiYWxyZWFkeUhhbmRsZWQiLCJzaGFwZXMiLCJzZXR1cCIsImNyZWF0ZUNhbnZhcyIsImNyZWF0ZSIsInJlY3RhbmdsZSIsImlzU3RhdGljIiwiYWRkIiwid29ybGQiLCJjcmVhdGVEaXYiLCJwYXJlbnQiLCJjdXJyZW50IiwiZHJhdyIsImJhY2tncm91bmQiLCJ1cGRhdGUiLCJub1N0cm9rZSIsImZvckVhY2giLCJmaWxsIiwiY29sb3IiLCJwdXNoIiwidHJhbnNsYXRlIiwicG9zaXRpb24iLCJ4IiwieSIsInJvdGF0ZSIsImFuZ2xlIiwic2hhcGUiLCJyZWN0TW9kZSIsIkNFTlRFUiIsInJlY3QiLCJ3IiwiaCIsInRyaWFuZ2xlIiwic2l6ZSIsImVsbGlwc2VNb2RlIiwiUkFESVVTIiwiZWxsaXBzZSIsInN0YXIiLCJwb3AiLCJodG1sIiwicmFkaXVzMSIsInJhZGl1czIiLCJucG9pbnRzIiwiVFdPX1BJIiwiaGFsZkFuZ2xlIiwiYmVnaW5TaGFwZSIsImEiLCJzeCIsImNvcyIsInN5Iiwic2luIiwidmVydGV4IiwiZW5kU2hhcGUiLCJDTE9TRSIsImNyZWF0ZVNoYXBlIiwicmFuZG9tIiwiTWF0aCIsIm1vdXNlWCIsIm1vdXNlWSIsImNpcmNsZSIsInZlcnRpY2VzIiwiZnJvbVBhdGgiLCJmcm9tVmVydGljZXMiLCJtYXhIZWlnaHQiLCJtaW4iLCJtYXAiLCJyb3VuZCIsInRvdWNoU3RhcnRlZCIsIm1vdXNlUHJlc3NlZCIsInA1IiwiZGl2IiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/P5Game.js\n"));

/***/ })

});