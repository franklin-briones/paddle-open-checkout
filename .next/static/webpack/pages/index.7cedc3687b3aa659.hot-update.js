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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PaddleLoaderPB: function() { return /* binding */ PaddleLoaderPB; },\n/* harmony export */   \"default\": function() { return /* binding */ IndexPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_FormComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FormComponent */ \"./components/FormComponent.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction PaddleLoaderPB(param) {\n    let { vendorID, onLoaded } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {\n        src: \"https://cdn.paddle.com/paddle/v2/paddle.js\",\n        onLoad: ()=>{\n            Paddle.Environment.set(\"sandbox\");\n            Paddle.Setup({\n                seller: Number(vendorID)\n            });\n            onLoaded(); // Notify that the script is loaded\n        }\n    }, void 0, false, {\n        fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/pages/index.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = PaddleLoaderPB;\nfunction IndexPage() {\n    _s();\n    const [vendorID, setVendorID] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [priceIDs, setPriceIDs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [quantities, setQuantities] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [paddleLoaded, setPaddleLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Keep track of whether Paddle is loaded\n    const handleSubmit = (data)=>{\n        setVendorID(data.vendorID);\n        setPriceIDs(data.priceIDs);\n        setQuantities(data.quantities);\n    };\n    // Called when Paddle is loaded\n    const handlePaddleLoaded = ()=>{\n        setPaddleLoaded(true);\n        myJavascriptFunction(priceIDs, quantities); // Call the function after Paddle is loaded\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                className: \"absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2\",\n                src: \"https://play.tailwindcss.com/img/beams.jpg\",\n                width: 500,\n                alt: \"Picture of the author\"\n            }, void 0, false, {\n                fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/pages/index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-3xl font-bold underline\",\n                children: \"Use this page to create test checkout data in your sandbox account\"\n            }, void 0, false, {\n                fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/pages/index.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Email warning:\"\n            }, void 0, false, {\n                fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/pages/index.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"When testing, be aware that any subsciption you set up that unless cancelled you will get email receipts for and renewal emails for.\"\n            }, void 0, false, {\n                fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/pages/index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"I suggest using a test email that will go nowhere such as myName.test@paddle.com\"\n            }, void 0, false, {\n                fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/pages/index.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/pages/index.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/pages/index.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Please have the following values handy:\"\n            }, void 0, false, {\n                fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/pages/index.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"Your seller ID: a 5 digit number that corresponds to your sandbox account that you can find under Developer Tools → Authentication\"\n                    }, void 0, false, {\n                        fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/pages/index.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"Any priceIDs you'd like to pass to the checkout, these are created for each product\"\n                    }, void 0, false, {\n                        fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/pages/index.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"Any corresponding quantities for each priceID, please make sure that this quantity corresponds to any quantity limits you set on its respective priceID\"\n                    }, void 0, false, {\n                        fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/pages/index.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/pages/index.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormComponent__WEBPACK_IMPORTED_MODULE_3__.FormComponent, {\n                onSubmit: handleSubmit\n            }, void 0, false, {\n                fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/pages/index.js\",\n                lineNumber: 59,\n                columnNumber: 8\n            }, this),\n            vendorID && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaddleLoaderPB, {\n                vendorID: vendorID,\n                onLoaded: handlePaddleLoaded\n            }, void 0, false, {\n                fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/pages/index.js\",\n                lineNumber: 60,\n                columnNumber: 20\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/pages/index.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(IndexPage, \"+W1fn6L1XlPvqkCm01s4GeY8ICo=\");\n_c1 = IndexPage;\nfunction myJavascriptFunction(priceIDs, quantities) {\n    const items = priceIDs.map((priceId, index)=>({\n            priceId,\n            quantity: Number(quantities[index])\n        }));\n    Paddle.Checkout.open({\n        marketing_consent: 0,\n        settings: {\n            theme: \"light\"\n        },\n        items\n    });\n}\nvar _c, _c1;\n$RefreshReg$(_c, \"PaddleLoaderPB\");\n$RefreshReg$(_c1, \"IndexPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0Y7QUFDNkI7QUFDM0I7QUFFMUIsU0FBU0ksZUFBZSxLQUFzQjtRQUF0QixFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRSxHQUF0QjtJQUM3QixxQkFDRSw4REFBQ0gsb0RBQU1BO1FBQ0xJLEtBQUk7UUFDSkMsUUFBUTtZQUNOQyxPQUFPQyxXQUFXLENBQUNDLEdBQUcsQ0FBQztZQUN2QkYsT0FBT0csS0FBSyxDQUFDO2dCQUNYQyxRQUFRQyxPQUFPVDtZQUNqQjtZQUNBQyxZQUFZLG1DQUFtQztRQUNqRDs7Ozs7O0FBR047S0FiZ0JGO0FBZUQsU0FBU1c7O0lBQ3RCLE1BQU0sQ0FBQ1YsVUFBVVcsWUFBWSxHQUFHaEIsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDaUIsVUFBVUMsWUFBWSxHQUFHbEIsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDbUIsWUFBWUMsY0FBYyxHQUFHcEIsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDcUIsY0FBY0MsZ0JBQWdCLEdBQUd0QiwrQ0FBUUEsQ0FBQyxRQUFRLHlDQUF5QztJQUVsRyxNQUFNdUIsZUFBZSxDQUFDQztRQUNwQlIsWUFBWVEsS0FBS25CLFFBQVE7UUFDekJhLFlBQVlNLEtBQUtQLFFBQVE7UUFDekJHLGNBQWNJLEtBQUtMLFVBQVU7SUFDL0I7SUFFQSwrQkFBK0I7SUFDL0IsTUFBTU0scUJBQXFCO1FBQ3pCSCxnQkFBZ0I7UUFDaEJJLHFCQUFxQlQsVUFBVUUsYUFBYSwyQ0FBMkM7SUFDekY7SUFFQSxxQkFDRSw4REFBQ1E7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUMzQixtREFBS0E7Z0JBQ04yQixXQUFVO2dCQUNWckIsS0FBSTtnQkFDSnNCLE9BQU87Z0JBQ1BDLEtBQUk7Ozs7OzswQkFFSiw4REFBQ0g7Z0JBQUlDLFdBQVU7MEJBQStCOzs7Ozs7MEJBQzlDLDhEQUFDRzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzswQkFBRTs7Ozs7OzBCQUNILDhEQUFDQTswQkFBRTs7Ozs7OzBCQUNILDhEQUFDQzs7Ozs7MEJBQ0QsOERBQUNBOzs7OzswQkFDRCw4REFBQ0Q7MEJBQUU7Ozs7OzswQkFDSCw4REFBQ0U7O2tDQUNDLDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQTtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQTtrQ0FBRzs7Ozs7Ozs7Ozs7OzBCQUVMLDhEQUFDakMsb0VBQWFBO2dCQUFDa0MsVUFBVWI7Ozs7OztZQUN6QmxCLDBCQUFZLDhEQUFDRDtnQkFBZUMsVUFBVUE7Z0JBQVVDLFVBQVVtQjs7Ozs7Ozs7Ozs7O0FBR2pFO0dBMUN3QlY7TUFBQUE7QUE0Q3hCLFNBQVNXLHFCQUFxQlQsUUFBUSxFQUFFRSxVQUFVO0lBQ2hELE1BQU1rQixRQUFRcEIsU0FBU3FCLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxRQUFXO1lBQzlDRDtZQUNBRSxVQUFVM0IsT0FBT0ssVUFBVSxDQUFDcUIsTUFBTTtRQUNwQztJQUVBL0IsT0FBT2lDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDO1FBQ25CQyxtQkFBbUI7UUFDbkJDLFVBQVU7WUFDUkMsT0FBTztRQUNUO1FBQ0FUO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IEZvcm1Db21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtQ29tcG9uZW50XCI7XG5pbXBvcnQgU2NyaXB0IGZyb20gXCJuZXh0L3NjcmlwdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gUGFkZGxlTG9hZGVyUEIoeyB2ZW5kb3JJRCwgb25Mb2FkZWQgfSkge1xuICByZXR1cm4gKFxuICAgIDxTY3JpcHRcbiAgICAgIHNyYz1cImh0dHBzOi8vY2RuLnBhZGRsZS5jb20vcGFkZGxlL3YyL3BhZGRsZS5qc1wiXG4gICAgICBvbkxvYWQ9eygpID0+IHtcbiAgICAgICAgUGFkZGxlLkVudmlyb25tZW50LnNldChcInNhbmRib3hcIik7XG4gICAgICAgIFBhZGRsZS5TZXR1cCh7XG4gICAgICAgICAgc2VsbGVyOiBOdW1iZXIodmVuZG9ySUQpXG4gICAgICAgIH0pO1xuICAgICAgICBvbkxvYWRlZCgpOyAvLyBOb3RpZnkgdGhhdCB0aGUgc2NyaXB0IGlzIGxvYWRlZFxuICAgICAgfX1cbiAgICAvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFBhZ2UoKSB7XG4gIGNvbnN0IFt2ZW5kb3JJRCwgc2V0VmVuZG9ySURdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtwcmljZUlEcywgc2V0UHJpY2VJRHNdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtxdWFudGl0aWVzLCBzZXRRdWFudGl0aWVzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcGFkZGxlTG9hZGVkLCBzZXRQYWRkbGVMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBLZWVwIHRyYWNrIG9mIHdoZXRoZXIgUGFkZGxlIGlzIGxvYWRlZFxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChkYXRhKSA9PiB7XG4gICAgc2V0VmVuZG9ySUQoZGF0YS52ZW5kb3JJRCk7XG4gICAgc2V0UHJpY2VJRHMoZGF0YS5wcmljZUlEcyk7XG4gICAgc2V0UXVhbnRpdGllcyhkYXRhLnF1YW50aXRpZXMpO1xuICB9O1xuXG4gIC8vIENhbGxlZCB3aGVuIFBhZGRsZSBpcyBsb2FkZWRcbiAgY29uc3QgaGFuZGxlUGFkZGxlTG9hZGVkID0gKCkgPT4ge1xuICAgIHNldFBhZGRsZUxvYWRlZCh0cnVlKTtcbiAgICBteUphdmFzY3JpcHRGdW5jdGlvbihwcmljZUlEcywgcXVhbnRpdGllcyk7IC8vIENhbGwgdGhlIGZ1bmN0aW9uIGFmdGVyIFBhZGRsZSBpcyBsb2FkZWRcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktNTAgcHktNiBzbTpweS0xMlwiPlxuICAgICAgPEltYWdlXG4gICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS8yIGxlZnQtMS8yIG1heC13LW5vbmUgLXRyYW5zbGF0ZS14LTEvMiAtdHJhbnNsYXRlLXktMS8yXCJcbiAgICAgIHNyYz1cImh0dHBzOi8vcGxheS50YWlsd2luZGNzcy5jb20vaW1nL2JlYW1zLmpwZ1wiXG4gICAgICB3aWR0aD17NTAwfVxuICAgICAgYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCJcbiAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdW5kZXJsaW5lXCI+VXNlIHRoaXMgcGFnZSB0byBjcmVhdGUgdGVzdCBjaGVja291dCBkYXRhIGluIHlvdXIgc2FuZGJveCBhY2NvdW50PC9kaXY+XG4gICAgICA8aDM+RW1haWwgd2FybmluZzo8L2gzPlxuICAgICAgPHA+V2hlbiB0ZXN0aW5nLCBiZSBhd2FyZSB0aGF0IGFueSBzdWJzY2lwdGlvbiB5b3Ugc2V0IHVwIHRoYXQgdW5sZXNzIGNhbmNlbGxlZCB5b3Ugd2lsbCBnZXQgZW1haWwgcmVjZWlwdHMgZm9yIGFuZCByZW5ld2FsIGVtYWlscyBmb3IuPC9wPlxuICAgICAgPHA+SSBzdWdnZXN0IHVzaW5nIGEgdGVzdCBlbWFpbCB0aGF0IHdpbGwgZ28gbm93aGVyZSBzdWNoIGFzIG15TmFtZS50ZXN0QHBhZGRsZS5jb208L3A+XG4gICAgICA8YnIgLz5cbiAgICAgIDxiciAvPlxuICAgICAgPHA+UGxlYXNlIGhhdmUgdGhlIGZvbGxvd2luZyB2YWx1ZXMgaGFuZHk6PC9wPlxuICAgICAgPG9sPlxuICAgICAgICA8bGk+WW91ciBzZWxsZXIgSUQ6IGEgNSBkaWdpdCBudW1iZXIgdGhhdCBjb3JyZXNwb25kcyB0byB5b3VyIHNhbmRib3ggYWNjb3VudCB0aGF0IHlvdSBjYW4gZmluZCB1bmRlciBEZXZlbG9wZXIgVG9vbHMg4oaSIEF1dGhlbnRpY2F0aW9uPC9saT5cbiAgICAgICAgPGxpPkFueSBwcmljZUlEcyB5b3UnZCBsaWtlIHRvIHBhc3MgdG8gdGhlIGNoZWNrb3V0LCB0aGVzZSBhcmUgY3JlYXRlZCBmb3IgZWFjaCBwcm9kdWN0PC9saT5cbiAgICAgICAgPGxpPkFueSBjb3JyZXNwb25kaW5nIHF1YW50aXRpZXMgZm9yIGVhY2ggcHJpY2VJRCwgcGxlYXNlIG1ha2Ugc3VyZSB0aGF0IHRoaXMgcXVhbnRpdHkgY29ycmVzcG9uZHMgdG8gYW55IHF1YW50aXR5IGxpbWl0cyB5b3Ugc2V0IG9uIGl0cyByZXNwZWN0aXZlIHByaWNlSUQ8L2xpPlxuICAgICAgPC9vbD5cbiAgICAgICA8Rm9ybUNvbXBvbmVudCBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSAvPlxuICAgICAge3ZlbmRvcklEICYmIDxQYWRkbGVMb2FkZXJQQiB2ZW5kb3JJRD17dmVuZG9ySUR9IG9uTG9hZGVkPXtoYW5kbGVQYWRkbGVMb2FkZWR9IC8+fVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBteUphdmFzY3JpcHRGdW5jdGlvbihwcmljZUlEcywgcXVhbnRpdGllcykge1xuICBjb25zdCBpdGVtcyA9IHByaWNlSURzLm1hcCgocHJpY2VJZCwgaW5kZXgpID0+ICh7XG4gICAgcHJpY2VJZCxcbiAgICBxdWFudGl0eTogTnVtYmVyKHF1YW50aXRpZXNbaW5kZXhdKVxuICB9KSk7XG5cbiAgUGFkZGxlLkNoZWNrb3V0Lm9wZW4oe1xuICAgIG1hcmtldGluZ19jb25zZW50OiAwLFxuICAgIHNldHRpbmdzOiB7XG4gICAgICB0aGVtZTogXCJsaWdodFwiLFxuICAgIH0sXG4gICAgaXRlbXNcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJJbWFnZSIsIkZvcm1Db21wb25lbnQiLCJTY3JpcHQiLCJQYWRkbGVMb2FkZXJQQiIsInZlbmRvcklEIiwib25Mb2FkZWQiLCJzcmMiLCJvbkxvYWQiLCJQYWRkbGUiLCJFbnZpcm9ubWVudCIsInNldCIsIlNldHVwIiwic2VsbGVyIiwiTnVtYmVyIiwiSW5kZXhQYWdlIiwic2V0VmVuZG9ySUQiLCJwcmljZUlEcyIsInNldFByaWNlSURzIiwicXVhbnRpdGllcyIsInNldFF1YW50aXRpZXMiLCJwYWRkbGVMb2FkZWQiLCJzZXRQYWRkbGVMb2FkZWQiLCJoYW5kbGVTdWJtaXQiLCJkYXRhIiwiaGFuZGxlUGFkZGxlTG9hZGVkIiwibXlKYXZhc2NyaXB0RnVuY3Rpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJ3aWR0aCIsImFsdCIsImgzIiwicCIsImJyIiwib2wiLCJsaSIsIm9uU3VibWl0IiwiaXRlbXMiLCJtYXAiLCJwcmljZUlkIiwiaW5kZXgiLCJxdWFudGl0eSIsIkNoZWNrb3V0Iiwib3BlbiIsIm1hcmtldGluZ19jb25zZW50Iiwic2V0dGluZ3MiLCJ0aGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});