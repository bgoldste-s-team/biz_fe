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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ P5Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! matter-js */ \"./node_modules/matter-js/build/matter.js\");\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst P5NoSSR = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! p5 */ \"./node_modules/p5/lib/p5.min.js\", 23)), {\n    loadableGenerated: {\n        modules: [\n            \"../components/P5Game.js -> \" + \"p5\"\n        ]\n    },\n    ssr: false\n});\nfunction P5Game() {\n    _s();\n    const gameRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    let p5Instance = null; // <-- store p5.js instance here\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!P5NoSSR) {\n            return;\n        }\n        const P5 = __webpack_require__(/*! p5 */ \"./node_modules/p5/lib/p5.min.js\"); // <-- use require to ensure it's loaded\n        // now your sketch definition comes here as usual...\n        const sketch = (p)=>{\n            if (p5) {\n                let Engine = (matter_js__WEBPACK_IMPORTED_MODULE_3___default().Engine), Render = (matter_js__WEBPACK_IMPORTED_MODULE_3___default().Render), World = (matter_js__WEBPACK_IMPORTED_MODULE_3___default().World), Bodies = (matter_js__WEBPACK_IMPORTED_MODULE_3___default().Bodies), Vertices = (matter_js__WEBPACK_IMPORTED_MODULE_3___default().Vertices), Body = (matter_js__WEBPACK_IMPORTED_MODULE_3___default().Body);\n                let engine;\n                let bodies = [];\n                let ground;\n                let score = 0;\n                let scoreP;\n                let canvas;\n                const shapes = [\n                    \"rectangle\",\n                    \"square\",\n                    \"triangle\",\n                    \"circle\",\n                    \"star\"\n                ];\n                p.setup = function() {\n                    canvas = p.createCanvas(320, 320);\n                    engine = Engine.create();\n                    ground = Bodies.rectangle(160, 310, 320, 20, {\n                        isStatic: true\n                    });\n                    World.add(engine.world, [\n                        ground\n                    ]);\n                    scoreP = p.createP();\n                };\n                p.draw = function() {\n                    p.background(51);\n                    Engine.update(engine);\n                    p.noStroke();\n                    bodies.forEach((body)=>{\n                        p.fill(body.color);\n                        p.push();\n                        p.translate(body.body.position.x, body.body.position.y);\n                        p.rotate(body.body.angle);\n                        switch(body.shape){\n                            case \"rectangle\":\n                            case \"square\":\n                                p.rectMode(p.CENTER);\n                                p.rect(0, 0, body.w, body.h);\n                                break;\n                            case \"triangle\":\n                                p.triangle(-body.size / 2, body.size / 2, body.size / 2, body.size / 2, 0, -body.size / 2);\n                                break;\n                            case \"circle\":\n                                p.ellipseMode(p.RADIUS);\n                                p.ellipse(0, 0, body.size);\n                                break;\n                            case \"star\":\n                                p.star(0, 0, body.size / 2, body.size, 5);\n                                break;\n                        }\n                        p.pop();\n                    });\n                    scoreP.html(\"Score: \" + score);\n                };\n                p.star = function(x, y, radius1, radius2, npoints) {\n                    let angle = p.TWO_PI / npoints;\n                    let halfAngle = angle / 2.0;\n                    p.beginShape();\n                    for(let a = 0; a < p.TWO_PI; a += angle){\n                        let sx = x + p.cos(a) * radius2;\n                        let sy = y + p.sin(a) * radius2;\n                        p.vertex(sx, sy);\n                        sx = x + p.cos(a + halfAngle) * radius1;\n                        sy = y + p.sin(a + halfAngle) * radius1;\n                        p.vertex(sx, sy);\n                    }\n                    p.endShape(p.CLOSE);\n                };\n                p.mousePressed = function() {\n                    let shape = p.random(shapes);\n                    let size = Math.random() * 40 + 10;\n                    let body;\n                    if (shape === \"rectangle\" || shape === \"square\") {\n                        body = Bodies.rectangle(p.mouseX, p.mouseY, size, size);\n                    } else if (shape === \"circle\") {\n                        body = Bodies.circle(p.mouseX, p.mouseY, size);\n                    } else if (shape === \"triangle\") {\n                        let vertices = Vertices.fromPath(\"0 0 50 0 25 50\");\n                        body = Bodies.fromVertices(p.mouseX, p.mouseY, vertices);\n                    } else if (shape === \"star\") {\n                        let vertices = Vertices.fromPath(\"0 0 50 0 25 50\");\n                        body = Bodies.fromVertices(p.mouseX, p.mouseY, vertices);\n                    }\n                    World.add(engine.world, [\n                        body\n                    ]);\n                    let maxHeight = Math.min(...bodies.map((body)=>body.body.position.y));\n                    score = Math.round((320 - maxHeight) / 320 * 100);\n                    bodies.push({\n                        body,\n                        w: size,\n                        h: size,\n                        shape,\n                        color: p.color(Math.random() * 255, Math.random() * 255, Math.random() * 255),\n                        size\n                    });\n                };\n            }\n            ;\n            p5Instance = new P5(sketch, gameRef.current);\n            // clean up function\n            return ()=>{\n                p5Instance.remove();\n            };\n        };\n    }, [\n        p5NoSSR\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: gameRef\n    }, void 0, false, {\n        fileName: \"/Users/ben/cs_fe/src/components/P5Game.js\",\n        lineNumber: 132,\n        columnNumber: 12\n    }, this);\n}\n_s(P5Game, \"XYCikm1U7n9d/uJM8nRWCTDtVVY=\");\n_c = P5Game;\nvar _c;\n$RefreshReg$(_c, \"P5Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDO1FBQUlDLEtBQUt4Rjs7Ozs7O0FBQ3JCLENBQUM7R0E5SHVCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9QNUdhbWUuanM/YjRkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IE1hdHRlciBmcm9tICdtYXR0ZXItanMnO1xuXG5jb25zdCBQNU5vU1NSID0gZHluYW1pYyhpbXBvcnQoJ3A1JyksIHsgc3NyOiBmYWxzZSB9KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUDVHYW1lKCkge1xuICAgIGNvbnN0IGdhbWVSZWYgPSB1c2VSZWYoKTtcbiAgICBsZXQgcDVJbnN0YW5jZSA9IG51bGw7IC8vIDwtLSBzdG9yZSBwNS5qcyBpbnN0YW5jZSBoZXJlXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIVA1Tm9TU1IpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IFA1ID0gcmVxdWlyZSgncDUnKTsgLy8gPC0tIHVzZSByZXF1aXJlIHRvIGVuc3VyZSBpdCdzIGxvYWRlZFxuXG4gICAgICAgIC8vIG5vdyB5b3VyIHNrZXRjaCBkZWZpbml0aW9uIGNvbWVzIGhlcmUgYXMgdXN1YWwuLi5cbiAgICAgICAgY29uc3Qgc2tldGNoID0gKHApID0+IHtcbiAgICAgICAgICAgIGlmIChwNSkge1xuICAgICAgICAgICAgICAgIGxldCBFbmdpbmUgPSBNYXR0ZXIuRW5naW5lLFxuICAgICAgICAgICAgICAgICAgICBSZW5kZXIgPSBNYXR0ZXIuUmVuZGVyLFxuICAgICAgICAgICAgICAgICAgICBXb3JsZCA9IE1hdHRlci5Xb3JsZCxcbiAgICAgICAgICAgICAgICAgICAgQm9kaWVzID0gTWF0dGVyLkJvZGllcyxcbiAgICAgICAgICAgICAgICAgICAgVmVydGljZXMgPSBNYXR0ZXIuVmVydGljZXMsXG4gICAgICAgICAgICAgICAgICAgIEJvZHkgPSBNYXR0ZXIuQm9keTtcblxuICAgICAgICAgICAgICAgIGxldCBlbmdpbmU7XG4gICAgICAgICAgICAgICAgbGV0IGJvZGllcyA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBncm91bmQ7XG4gICAgICAgICAgICAgICAgbGV0IHNjb3JlID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgc2NvcmVQO1xuICAgICAgICAgICAgICAgIGxldCBjYW52YXM7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzaGFwZXMgPSBbJ3JlY3RhbmdsZScsICdzcXVhcmUnLCAndHJpYW5nbGUnLCAnY2lyY2xlJywgJ3N0YXInXTtcblxuICAgICAgICAgICAgICAgIHAuc2V0dXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcyA9IHAuY3JlYXRlQ2FudmFzKDMyMCwgMzIwKTtcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lID0gRW5naW5lLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBncm91bmQgPSBCb2RpZXMucmVjdGFuZ2xlKDE2MCwgMzEwLCAzMjAsIDIwLCB7aXNTdGF0aWM6IHRydWV9KTtcbiAgICAgICAgICAgICAgICAgICAgV29ybGQuYWRkKGVuZ2luZS53b3JsZCwgW2dyb3VuZF0pO1xuICAgICAgICAgICAgICAgICAgICBzY29yZVAgPSBwLmNyZWF0ZVAoKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgcC5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBwLmJhY2tncm91bmQoNTEpO1xuICAgICAgICAgICAgICAgICAgICBFbmdpbmUudXBkYXRlKGVuZ2luZSk7XG4gICAgICAgICAgICAgICAgICAgIHAubm9TdHJva2UoKTtcbiAgICAgICAgICAgICAgICAgICAgYm9kaWVzLmZvckVhY2goYm9keSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwLmZpbGwoYm9keS5jb2xvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwLnB1c2goKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHAudHJhbnNsYXRlKGJvZHkuYm9keS5wb3NpdGlvbi54LCBib2R5LmJvZHkucG9zaXRpb24ueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwLnJvdGF0ZShib2R5LmJvZHkuYW5nbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChib2R5LnNoYXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncmVjdGFuZ2xlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzcXVhcmUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLnJlY3RNb2RlKHAuQ0VOVEVSKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5yZWN0KDAsIDAsIGJvZHkudywgYm9keS5oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndHJpYW5nbGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLnRyaWFuZ2xlKC1ib2R5LnNpemUgLyAyLCBib2R5LnNpemUgLyAyLCBib2R5LnNpemUgLyAyLCBib2R5LnNpemUgLyAyLCAwLCAtYm9keS5zaXplIC8gMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NpcmNsZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAuZWxsaXBzZU1vZGUocC5SQURJVVMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLmVsbGlwc2UoMCwgMCwgYm9keS5zaXplKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3Rhcic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAuc3RhcigwLCAwLCBib2R5LnNpemUgLyAyLCBib2R5LnNpemUsIDUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHAucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHNjb3JlUC5odG1sKCdTY29yZTogJyArIHNjb3JlKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgcC5zdGFyID0gZnVuY3Rpb24gKHgsIHksIHJhZGl1czEsIHJhZGl1czIsIG5wb2ludHMpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFuZ2xlID0gcC5UV09fUEkgLyBucG9pbnRzO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaGFsZkFuZ2xlID0gYW5nbGUgLyAyLjA7XG4gICAgICAgICAgICAgICAgICAgIHAuYmVnaW5TaGFwZSgpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IHAuVFdPX1BJOyBhICs9IGFuZ2xlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3ggPSB4ICsgcC5jb3MoYSkgKiByYWRpdXMyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN5ID0geSArIHAuc2luKGEpICogcmFkaXVzMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHAudmVydGV4KHN4LCBzeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeCA9IHggKyBwLmNvcyhhICsgaGFsZkFuZ2xlKSAqIHJhZGl1czE7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeSA9IHkgKyBwLnNpbihhICsgaGFsZkFuZ2xlKSAqIHJhZGl1czE7XG4gICAgICAgICAgICAgICAgICAgICAgICBwLnZlcnRleChzeCwgc3kpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHAuZW5kU2hhcGUocC5DTE9TRSk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHAubW91c2VQcmVzc2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2hhcGUgPSBwLnJhbmRvbShzaGFwZXMpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2l6ZSA9IE1hdGgucmFuZG9tKCkgKiA0MCArIDEwO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYm9keTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNoYXBlID09PSAncmVjdGFuZ2xlJyB8fCBzaGFwZSA9PT0gJ3NxdWFyZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgPSBCb2RpZXMucmVjdGFuZ2xlKHAubW91c2VYLCBwLm1vdXNlWSwgc2l6ZSwgc2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hhcGUgPT09ICdjaXJjbGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5ID0gQm9kaWVzLmNpcmNsZShwLm1vdXNlWCwgcC5tb3VzZVksIHNpemUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNoYXBlID09PSAndHJpYW5nbGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmVydGljZXMgPSBWZXJ0aWNlcy5mcm9tUGF0aCgnMCAwIDUwIDAgMjUgNTAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgPSBCb2RpZXMuZnJvbVZlcnRpY2VzKHAubW91c2VYLCBwLm1vdXNlWSwgdmVydGljZXMpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNoYXBlID09PSAnc3RhcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2ZXJ0aWNlcyA9IFZlcnRpY2VzLmZyb21QYXRoKCcwIDAgNTAgMCAyNSA1MCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSA9IEJvZGllcy5mcm9tVmVydGljZXMocC5tb3VzZVgsIHAubW91c2VZLCB2ZXJ0aWNlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBXb3JsZC5hZGQoZW5naW5lLndvcmxkLCBbYm9keV0pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWF4SGVpZ2h0ID0gTWF0aC5taW4oLi4uYm9kaWVzLm1hcChib2R5ID0+IGJvZHkuYm9keS5wb3NpdGlvbi55KSk7XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlID0gTWF0aC5yb3VuZCgoMzIwIC0gbWF4SGVpZ2h0KSAvIDMyMCAqIDEwMCk7XG4gICAgICAgICAgICAgICAgICAgIGJvZGllcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICAgICAgICAgICAgICB3OiBzaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgaDogc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHAuY29sb3IoTWF0aC5yYW5kb20oKSAqIDI1NSwgTWF0aC5yYW5kb20oKSAqIDI1NSwgTWF0aC5yYW5kb20oKSAqIDI1NSksXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA7XG5cbiAgICAgICAgICAgIHA1SW5zdGFuY2UgPSBuZXcgUDUoc2tldGNoLCBnYW1lUmVmLmN1cnJlbnQpO1xuXG4gICAgICAgICAgICAvLyBjbGVhbiB1cCBmdW5jdGlvblxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBwNUluc3RhbmNlLnJlbW92ZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sIFtwNU5vU1NSXSk7XG5cbiAgICByZXR1cm4gPGRpdiByZWY9e2dhbWVSZWZ9IC8+O1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiZHluYW1pYyIsIk1hdHRlciIsIlA1Tm9TU1IiLCJzc3IiLCJQNUdhbWUiLCJnYW1lUmVmIiwicDVJbnN0YW5jZSIsIlA1IiwicmVxdWlyZSIsInNrZXRjaCIsInAiLCJwNSIsIkVuZ2luZSIsIlJlbmRlciIsIldvcmxkIiwiQm9kaWVzIiwiVmVydGljZXMiLCJCb2R5IiwiZW5naW5lIiwiYm9kaWVzIiwiZ3JvdW5kIiwic2NvcmUiLCJzY29yZVAiLCJjYW52YXMiLCJzaGFwZXMiLCJzZXR1cCIsImNyZWF0ZUNhbnZhcyIsImNyZWF0ZSIsInJlY3RhbmdsZSIsImlzU3RhdGljIiwiYWRkIiwid29ybGQiLCJjcmVhdGVQIiwiZHJhdyIsImJhY2tncm91bmQiLCJ1cGRhdGUiLCJub1N0cm9rZSIsImZvckVhY2giLCJib2R5IiwiZmlsbCIsImNvbG9yIiwicHVzaCIsInRyYW5zbGF0ZSIsInBvc2l0aW9uIiwieCIsInkiLCJyb3RhdGUiLCJhbmdsZSIsInNoYXBlIiwicmVjdE1vZGUiLCJDRU5URVIiLCJyZWN0IiwidyIsImgiLCJ0cmlhbmdsZSIsInNpemUiLCJlbGxpcHNlTW9kZSIsIlJBRElVUyIsImVsbGlwc2UiLCJzdGFyIiwicG9wIiwiaHRtbCIsInJhZGl1czEiLCJyYWRpdXMyIiwibnBvaW50cyIsIlRXT19QSSIsImhhbGZBbmdsZSIsImJlZ2luU2hhcGUiLCJhIiwic3giLCJjb3MiLCJzeSIsInNpbiIsInZlcnRleCIsImVuZFNoYXBlIiwiQ0xPU0UiLCJtb3VzZVByZXNzZWQiLCJyYW5kb20iLCJNYXRoIiwibW91c2VYIiwibW91c2VZIiwiY2lyY2xlIiwidmVydGljZXMiLCJmcm9tUGF0aCIsImZyb21WZXJ0aWNlcyIsIm1heEhlaWdodCIsIm1pbiIsIm1hcCIsInJvdW5kIiwiY3VycmVudCIsInJlbW92ZSIsInA1Tm9TU1IiLCJkaXYiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/P5Game.js\n"));

/***/ })

});