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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PaddleLoaderPB: function() { return /* binding */ PaddleLoaderPB; },\n/* harmony export */   \"default\": function() { return /* binding */ IndexPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_FormComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FormComponent */ \"./components/FormComponent.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction PaddleLoaderPB(param) {\n    let { vendorID, onLoaded } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {\n        src: \"https://cdn.paddle.com/paddle/v2/paddle.js\",\n        onLoad: ()=>{\n            Paddle.Environment.set(\"sandbox\");\n            Paddle.Setup({\n                seller: Number(vendorID)\n            });\n            onLoaded(); // Notify that the script is loaded\n        }\n    }, void 0, false, {\n        fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/pages/index.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = PaddleLoaderPB;\nfunction IndexPage() {\n    _s();\n    const [vendorID, setVendorID] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [priceIDs, setPriceIDs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [quantities, setQuantities] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [paddleLoaded, setPaddleLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Keep track of whether Paddle is loaded\n    const handleSubmit = (data)=>{\n        setVendorID(data.vendorID);\n        setPriceIDs(data.priceIDs);\n        setQuantities(data.quantities);\n    };\n    // Called when Paddle is loaded\n    const handlePaddleLoaded = ()=>{\n        setPaddleLoaded(true);\n        myJavascriptFunction(priceIDs, quantities); // Call the function after Paddle is loaded\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-3xl font-bold underline\",\n                children: \"Use this page to create test checkout data in your sandbox account\"\n            }, void 0, false, {\n                fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/pages/index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Email warning:\"\n            }, void 0, false, {\n                fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/pages/index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"When testing, be aware that any subsciption you set up that unless cancelled you will get email receipts for and renewal emails for.\"\n            }, void 0, false, {\n                fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/pages/index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"I suggest using a test email that will go nowhere such as myName.test@paddle.com\"\n            }, void 0, false, {\n                fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/pages/index.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/pages/index.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/pages/index.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Please have the following values handy:\"\n            }, void 0, false, {\n                fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/pages/index.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"Your seller ID: a 5 digit number that corresponds to your sandbox account that you can find under Developer Tools → Authentication\"\n                    }, void 0, false, {\n                        fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/pages/index.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"Any priceIDs you'd like to pass to the checkout, these are created for each product\"\n                    }, void 0, false, {\n                        fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/pages/index.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"Any corresponding quantities for each priceID, please make sure that this quantity corresponds to any quantity limits you set on its respective priceID\"\n                    }, void 0, false, {\n                        fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/pages/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/pages/index.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormComponent__WEBPACK_IMPORTED_MODULE_3__.FormComponent, {\n                onSubmit: handleSubmit\n            }, void 0, false, {\n                fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/pages/index.js\",\n                lineNumber: 53,\n                columnNumber: 8\n            }, this),\n            vendorID && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaddleLoaderPB, {\n                vendorID: vendorID,\n                onLoaded: handlePaddleLoaded\n            }, void 0, false, {\n                fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/pages/index.js\",\n                lineNumber: 54,\n                columnNumber: 20\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/pages/index.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(IndexPage, \"+W1fn6L1XlPvqkCm01s4GeY8ICo=\");\n_c1 = IndexPage;\nfunction myJavascriptFunction(priceIDs, quantities) {\n    const items = priceIDs.map((priceId, index)=>({\n            priceId,\n            quantity: Number(quantities[index])\n        }));\n    Paddle.Checkout.open({\n        marketing_consent: 0,\n        settings: {\n            theme: \"light\"\n        },\n        items\n    });\n}\nvar _c, _c1;\n$RefreshReg$(_c, \"PaddleLoaderPB\");\n$RefreshReg$(_c1, \"IndexPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0Y7QUFDNkI7QUFDM0I7QUFFMUIsU0FBU0ksZUFBZSxLQUFzQjtRQUF0QixFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRSxHQUF0QjtJQUM3QixxQkFDRSw4REFBQ0gsb0RBQU1BO1FBQ0xJLEtBQUk7UUFDSkMsUUFBUTtZQUNOQyxPQUFPQyxXQUFXLENBQUNDLEdBQUcsQ0FBQztZQUN2QkYsT0FBT0csS0FBSyxDQUFDO2dCQUNYQyxRQUFRQyxPQUFPVDtZQUNqQjtZQUNBQyxZQUFZLG1DQUFtQztRQUNqRDs7Ozs7O0FBR047S0FiZ0JGO0FBZUQsU0FBU1c7O0lBQ3RCLE1BQU0sQ0FBQ1YsVUFBVVcsWUFBWSxHQUFHaEIsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDaUIsVUFBVUMsWUFBWSxHQUFHbEIsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDbUIsWUFBWUMsY0FBYyxHQUFHcEIsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDcUIsY0FBY0MsZ0JBQWdCLEdBQUd0QiwrQ0FBUUEsQ0FBQyxRQUFRLHlDQUF5QztJQUVsRyxNQUFNdUIsZUFBZSxDQUFDQztRQUNwQlIsWUFBWVEsS0FBS25CLFFBQVE7UUFDekJhLFlBQVlNLEtBQUtQLFFBQVE7UUFDekJHLGNBQWNJLEtBQUtMLFVBQVU7SUFDL0I7SUFFQSwrQkFBK0I7SUFDL0IsTUFBTU0scUJBQXFCO1FBQ3pCSCxnQkFBZ0I7UUFDaEJJLHFCQUFxQlQsVUFBVUUsYUFBYSwyQ0FBMkM7SUFDekY7SUFFQSxxQkFDRSw4REFBQ1E7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUErQjs7Ozs7OzBCQUM5Qyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7MEJBQUU7Ozs7OzswQkFDSCw4REFBQ0E7MEJBQUU7Ozs7OzswQkFDSCw4REFBQ0M7Ozs7OzBCQUNELDhEQUFDQTs7Ozs7MEJBQ0QsOERBQUNEOzBCQUFFOzs7Ozs7MEJBQ0gsOERBQUNFOztrQ0FDQyw4REFBQ0M7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0E7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0E7a0NBQUc7Ozs7Ozs7Ozs7OzswQkFFTCw4REFBQy9CLG9FQUFhQTtnQkFBQ2dDLFVBQVVYOzs7Ozs7WUFDekJsQiwwQkFBWSw4REFBQ0Q7Z0JBQWVDLFVBQVVBO2dCQUFVQyxVQUFVbUI7Ozs7Ozs7Ozs7OztBQUdqRTtHQXBDd0JWO01BQUFBO0FBc0N4QixTQUFTVyxxQkFBcUJULFFBQVEsRUFBRUUsVUFBVTtJQUNoRCxNQUFNZ0IsUUFBUWxCLFNBQVNtQixHQUFHLENBQUMsQ0FBQ0MsU0FBU0MsUUFBVztZQUM5Q0Q7WUFDQUUsVUFBVXpCLE9BQU9LLFVBQVUsQ0FBQ21CLE1BQU07UUFDcEM7SUFFQTdCLE9BQU8rQixRQUFRLENBQUNDLElBQUksQ0FBQztRQUNuQkMsbUJBQW1CO1FBQ25CQyxVQUFVO1lBQ1JDLE9BQU87UUFDVDtRQUNBVDtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBGb3JtQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybUNvbXBvbmVudFwiO1xuaW1wb3J0IFNjcmlwdCBmcm9tIFwibmV4dC9zY3JpcHRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFBhZGRsZUxvYWRlclBCKHsgdmVuZG9ySUQsIG9uTG9hZGVkIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8U2NyaXB0XG4gICAgICBzcmM9XCJodHRwczovL2Nkbi5wYWRkbGUuY29tL3BhZGRsZS92Mi9wYWRkbGUuanNcIlxuICAgICAgb25Mb2FkPXsoKSA9PiB7XG4gICAgICAgIFBhZGRsZS5FbnZpcm9ubWVudC5zZXQoXCJzYW5kYm94XCIpO1xuICAgICAgICBQYWRkbGUuU2V0dXAoe1xuICAgICAgICAgIHNlbGxlcjogTnVtYmVyKHZlbmRvcklEKVxuICAgICAgICB9KTtcbiAgICAgICAgb25Mb2FkZWQoKTsgLy8gTm90aWZ5IHRoYXQgdGhlIHNjcmlwdCBpcyBsb2FkZWRcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKCkge1xuICBjb25zdCBbdmVuZG9ySUQsIHNldFZlbmRvcklEXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcHJpY2VJRHMsIHNldFByaWNlSURzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcXVhbnRpdGllcywgc2V0UXVhbnRpdGllc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3BhZGRsZUxvYWRlZCwgc2V0UGFkZGxlTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gS2VlcCB0cmFjayBvZiB3aGV0aGVyIFBhZGRsZSBpcyBsb2FkZWRcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZGF0YSkgPT4ge1xuICAgIHNldFZlbmRvcklEKGRhdGEudmVuZG9ySUQpO1xuICAgIHNldFByaWNlSURzKGRhdGEucHJpY2VJRHMpO1xuICAgIHNldFF1YW50aXRpZXMoZGF0YS5xdWFudGl0aWVzKTtcbiAgfTtcblxuICAvLyBDYWxsZWQgd2hlbiBQYWRkbGUgaXMgbG9hZGVkXG4gIGNvbnN0IGhhbmRsZVBhZGRsZUxvYWRlZCA9ICgpID0+IHtcbiAgICBzZXRQYWRkbGVMb2FkZWQodHJ1ZSk7XG4gICAgbXlKYXZhc2NyaXB0RnVuY3Rpb24ocHJpY2VJRHMsIHF1YW50aXRpZXMpOyAvLyBDYWxsIHRoZSBmdW5jdGlvbiBhZnRlciBQYWRkbGUgaXMgbG9hZGVkXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTUwIHB5LTYgc206cHktMTJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHVuZGVybGluZVwiPlVzZSB0aGlzIHBhZ2UgdG8gY3JlYXRlIHRlc3QgY2hlY2tvdXQgZGF0YSBpbiB5b3VyIHNhbmRib3ggYWNjb3VudDwvZGl2PlxuICAgICAgPGgzPkVtYWlsIHdhcm5pbmc6PC9oMz5cbiAgICAgIDxwPldoZW4gdGVzdGluZywgYmUgYXdhcmUgdGhhdCBhbnkgc3Vic2NpcHRpb24geW91IHNldCB1cCB0aGF0IHVubGVzcyBjYW5jZWxsZWQgeW91IHdpbGwgZ2V0IGVtYWlsIHJlY2VpcHRzIGZvciBhbmQgcmVuZXdhbCBlbWFpbHMgZm9yLjwvcD5cbiAgICAgIDxwPkkgc3VnZ2VzdCB1c2luZyBhIHRlc3QgZW1haWwgdGhhdCB3aWxsIGdvIG5vd2hlcmUgc3VjaCBhcyBteU5hbWUudGVzdEBwYWRkbGUuY29tPC9wPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxwPlBsZWFzZSBoYXZlIHRoZSBmb2xsb3dpbmcgdmFsdWVzIGhhbmR5OjwvcD5cbiAgICAgIDxvbD5cbiAgICAgICAgPGxpPllvdXIgc2VsbGVyIElEOiBhIDUgZGlnaXQgbnVtYmVyIHRoYXQgY29ycmVzcG9uZHMgdG8geW91ciBzYW5kYm94IGFjY291bnQgdGhhdCB5b3UgY2FuIGZpbmQgdW5kZXIgRGV2ZWxvcGVyIFRvb2xzIOKGkiBBdXRoZW50aWNhdGlvbjwvbGk+XG4gICAgICAgIDxsaT5BbnkgcHJpY2VJRHMgeW91J2QgbGlrZSB0byBwYXNzIHRvIHRoZSBjaGVja291dCwgdGhlc2UgYXJlIGNyZWF0ZWQgZm9yIGVhY2ggcHJvZHVjdDwvbGk+XG4gICAgICAgIDxsaT5BbnkgY29ycmVzcG9uZGluZyBxdWFudGl0aWVzIGZvciBlYWNoIHByaWNlSUQsIHBsZWFzZSBtYWtlIHN1cmUgdGhhdCB0aGlzIHF1YW50aXR5IGNvcnJlc3BvbmRzIHRvIGFueSBxdWFudGl0eSBsaW1pdHMgeW91IHNldCBvbiBpdHMgcmVzcGVjdGl2ZSBwcmljZUlEPC9saT5cbiAgICAgIDwvb2w+XG4gICAgICAgPEZvcm1Db21wb25lbnQgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gLz5cbiAgICAgIHt2ZW5kb3JJRCAmJiA8UGFkZGxlTG9hZGVyUEIgdmVuZG9ySUQ9e3ZlbmRvcklEfSBvbkxvYWRlZD17aGFuZGxlUGFkZGxlTG9hZGVkfSAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gbXlKYXZhc2NyaXB0RnVuY3Rpb24ocHJpY2VJRHMsIHF1YW50aXRpZXMpIHtcbiAgY29uc3QgaXRlbXMgPSBwcmljZUlEcy5tYXAoKHByaWNlSWQsIGluZGV4KSA9PiAoe1xuICAgIHByaWNlSWQsXG4gICAgcXVhbnRpdHk6IE51bWJlcihxdWFudGl0aWVzW2luZGV4XSlcbiAgfSkpO1xuXG4gIFBhZGRsZS5DaGVja291dC5vcGVuKHtcbiAgICBtYXJrZXRpbmdfY29uc2VudDogMCxcbiAgICBzZXR0aW5nczoge1xuICAgICAgdGhlbWU6IFwibGlnaHRcIixcbiAgICB9LFxuICAgIGl0ZW1zXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSW1hZ2UiLCJGb3JtQ29tcG9uZW50IiwiU2NyaXB0IiwiUGFkZGxlTG9hZGVyUEIiLCJ2ZW5kb3JJRCIsIm9uTG9hZGVkIiwic3JjIiwib25Mb2FkIiwiUGFkZGxlIiwiRW52aXJvbm1lbnQiLCJzZXQiLCJTZXR1cCIsInNlbGxlciIsIk51bWJlciIsIkluZGV4UGFnZSIsInNldFZlbmRvcklEIiwicHJpY2VJRHMiLCJzZXRQcmljZUlEcyIsInF1YW50aXRpZXMiLCJzZXRRdWFudGl0aWVzIiwicGFkZGxlTG9hZGVkIiwic2V0UGFkZGxlTG9hZGVkIiwiaGFuZGxlU3VibWl0IiwiZGF0YSIsImhhbmRsZVBhZGRsZUxvYWRlZCIsIm15SmF2YXNjcmlwdEZ1bmN0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJwIiwiYnIiLCJvbCIsImxpIiwib25TdWJtaXQiLCJpdGVtcyIsIm1hcCIsInByaWNlSWQiLCJpbmRleCIsInF1YW50aXR5IiwiQ2hlY2tvdXQiLCJvcGVuIiwibWFya2V0aW5nX2NvbnNlbnQiLCJzZXR0aW5ncyIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});