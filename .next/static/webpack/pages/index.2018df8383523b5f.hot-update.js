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

/***/ "./components/FormComponent.js":
/*!*************************************!*\
  !*** ./components/FormComponent.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FormComponent: function() { return /* binding */ FormComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction FormComponent(param) {\n    let { onSubmit } = param;\n    _s();\n    const [vendorID, setVendorID] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [priceIDs, setPriceIDs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        \"\"\n    ]);\n    const [quantities, setQuantities] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        \"\"\n    ]);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        onSubmit({\n            vendorID,\n            priceIDs,\n            quantities\n        });\n    };\n    const handleAddField = ()=>{\n        setPriceIDs([\n            ...priceIDs,\n            \"\"\n        ]);\n        setQuantities([\n            ...quantities,\n            \"\"\n        ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"Vendor ID:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"bg-gray-800 text-white\",\n                        type: \"number\",\n                        value: vendorID,\n                        onChange: (e)=>setVendorID(e.target.value),\n                        minLength: 4,\n                        maxLength: 10,\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/components/FormComponent.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/components/FormComponent.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            priceIDs.map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: [\n                                \"Price ID:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"bg-gray-400\",\n                                    type: \"text\",\n                                    value: priceIDs[index],\n                                    onChange: (e)=>setPriceIDs([\n                                            ...priceIDs.slice(0, index),\n                                            e.target.value,\n                                            ...priceIDs.slice(index + 1)\n                                        ]),\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/components/FormComponent.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/components/FormComponent.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: [\n                                \"Quantity:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"bg-gray-400\",\n                                    type: \"number\",\n                                    value: quantities[index],\n                                    onChange: (e)=>setQuantities([\n                                            ...quantities.slice(0, index),\n                                            e.target.value,\n                                            ...quantities.slice(index + 1)\n                                        ]),\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/components/FormComponent.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/components/FormComponent.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/components/FormComponent.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"rounded-full bg-gray-400 p-2\",\n                type: \"button\",\n                onClick: handleAddField,\n                children: \"Add Price ID and Quantity\"\n            }, void 0, false, {\n                fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/components/FormComponent.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"rounded-full bg-green-400 p-2 mx-3\",\n                type: \"submit\",\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/components/FormComponent.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/components/FormComponent.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(FormComponent, \"h1OV5bisWkFLqE5PhC/eU3WC6b0=\");\n_c = FormComponent;\nvar _c;\n$RefreshReg$(_c, \"FormComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm1Db21wb25lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpQztBQUUxQixTQUFTQyxjQUFjLEtBQVk7UUFBWixFQUFFQyxRQUFRLEVBQUUsR0FBWjs7SUFDNUIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ0ssVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztRQUFDO0tBQUc7SUFDN0MsTUFBTSxDQUFDTyxZQUFZQyxjQUFjLEdBQUdSLCtDQUFRQSxDQUFDO1FBQUM7S0FBRztJQUVqRCxNQUFNUyxlQUFlLENBQUNDO1FBQ3BCQSxFQUFFQyxjQUFjO1FBQ2hCVCxTQUFTO1lBQUVDO1lBQVVFO1lBQVVFO1FBQVc7SUFDNUM7SUFFQSxNQUFNSyxpQkFBaUI7UUFDckJOLFlBQVk7ZUFBSUQ7WUFBVTtTQUFHO1FBQzdCRyxjQUFjO2VBQUlEO1lBQVk7U0FBRztJQUNuQztJQUVBLHFCQUNFLDhEQUFDTTtRQUFLWCxVQUFVTzs7MEJBQ2QsOERBQUNLOztvQkFBTTtrQ0FFTCw4REFBQ0M7d0JBQU1DLFdBQVU7d0JBQXlCQyxNQUFLO3dCQUFTQyxPQUFPZjt3QkFBVWdCLFVBQVUsQ0FBQ1QsSUFBTU4sWUFBWU0sRUFBRVUsTUFBTSxDQUFDRixLQUFLO3dCQUFHRyxXQUFXO3dCQUFHQyxXQUFXO3dCQUFJQyxRQUFROzs7Ozs7Ozs7Ozs7WUFFN0psQixTQUFTbUIsR0FBRyxDQUFDLENBQUNDLEdBQUdDLHNCQUNoQiw4REFBQ0M7b0JBQWdCWCxXQUFVOztzQ0FDekIsOERBQUNGOztnQ0FBTTs4Q0FFTCw4REFBQ0M7b0NBQU1DLFdBQVU7b0NBQWNDLE1BQUs7b0NBQU9DLE9BQU9iLFFBQVEsQ0FBQ3FCLE1BQU07b0NBQUVQLFVBQVUsQ0FBQ1QsSUFBTUosWUFBWTsrQ0FBSUQsU0FBU3VCLEtBQUssQ0FBQyxHQUFHRjs0Q0FBUWhCLEVBQUVVLE1BQU0sQ0FBQ0YsS0FBSzsrQ0FBS2IsU0FBU3VCLEtBQUssQ0FBQ0YsUUFBUTt5Q0FBRztvQ0FBR0gsUUFBUTs7Ozs7Ozs7Ozs7O3NDQUV4TCw4REFBQ1Q7O2dDQUFNOzhDQUVMLDhEQUFDQztvQ0FBTUMsV0FBVTtvQ0FBY0MsTUFBSztvQ0FBU0MsT0FBT1gsVUFBVSxDQUFDbUIsTUFBTTtvQ0FBRVAsVUFBVSxDQUFDVCxJQUFNRixjQUFjOytDQUFJRCxXQUFXcUIsS0FBSyxDQUFDLEdBQUdGOzRDQUFRaEIsRUFBRVUsTUFBTSxDQUFDRixLQUFLOytDQUFLWCxXQUFXcUIsS0FBSyxDQUFDRixRQUFRO3lDQUFHO29DQUFHSCxRQUFROzs7Ozs7Ozs7Ozs7O21CQVAxTEc7Ozs7OzBCQVdaLDhEQUFDRztnQkFBT2IsV0FBVTtnQkFBK0JDLE1BQUs7Z0JBQVNhLFNBQVNsQjswQkFBZ0I7Ozs7OzswQkFDeEYsOERBQUNpQjtnQkFBT2IsV0FBVTtnQkFBcUNDLE1BQUs7MEJBQVM7Ozs7Ozs7Ozs7OztBQUczRTtHQXJDZ0JoQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvcm1Db21wb25lbnQuanM/MjRhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gRm9ybUNvbXBvbmVudCh7IG9uU3VibWl0IH0pIHtcbiAgY29uc3QgW3ZlbmRvcklELCBzZXRWZW5kb3JJRF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3ByaWNlSURzLCBzZXRQcmljZUlEc10gPSB1c2VTdGF0ZShbXCJcIl0pO1xuICBjb25zdCBbcXVhbnRpdGllcywgc2V0UXVhbnRpdGllc10gPSB1c2VTdGF0ZShbXCJcIl0pO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG9uU3VibWl0KHsgdmVuZG9ySUQsIHByaWNlSURzLCBxdWFudGl0aWVzIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFkZEZpZWxkID0gKCkgPT4ge1xuICAgIHNldFByaWNlSURzKFsuLi5wcmljZUlEcywgXCJcIl0pO1xuICAgIHNldFF1YW50aXRpZXMoWy4uLnF1YW50aXRpZXMsIFwiXCJdKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgPGxhYmVsPlxuICAgICAgICBWZW5kb3IgSUQ6XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMCB0ZXh0LXdoaXRlXCIgdHlwZT1cIm51bWJlclwiIHZhbHVlPXt2ZW5kb3JJRH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRWZW5kb3JJRChlLnRhcmdldC52YWx1ZSl9IG1pbkxlbmd0aD17NH0gbWF4TGVuZ3RoPXsxMH0gcmVxdWlyZWQgLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICB7cHJpY2VJRHMubWFwKChfLCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInAtM1wiPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIFByaWNlIElEOlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJnLWdyYXktNDAwXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17cHJpY2VJRHNbaW5kZXhdfSBvbkNoYW5nZT17KGUpID0+IHNldFByaWNlSURzKFsuLi5wcmljZUlEcy5zbGljZSgwLCBpbmRleCksIGUudGFyZ2V0LnZhbHVlLCAuLi5wcmljZUlEcy5zbGljZShpbmRleCArIDEpXSl9IHJlcXVpcmVkIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBRdWFudGl0eTpcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJiZy1ncmF5LTQwMFwiIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17cXVhbnRpdGllc1tpbmRleF19IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UXVhbnRpdGllcyhbLi4ucXVhbnRpdGllcy5zbGljZSgwLCBpbmRleCksIGUudGFyZ2V0LnZhbHVlLCAuLi5xdWFudGl0aWVzLnNsaWNlKGluZGV4ICsgMSldKX0gcmVxdWlyZWQgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYmctZ3JheS00MDAgcC0yXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUFkZEZpZWxkfT5BZGQgUHJpY2UgSUQgYW5kIFF1YW50aXR5PC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBiZy1ncmVlbi00MDAgcC0yIG14LTNcIiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRm9ybUNvbXBvbmVudCIsIm9uU3VibWl0IiwidmVuZG9ySUQiLCJzZXRWZW5kb3JJRCIsInByaWNlSURzIiwic2V0UHJpY2VJRHMiLCJxdWFudGl0aWVzIiwic2V0UXVhbnRpdGllcyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUFkZEZpZWxkIiwiZm9ybSIsImxhYmVsIiwiaW5wdXQiLCJjbGFzc05hbWUiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsInJlcXVpcmVkIiwibWFwIiwiXyIsImluZGV4IiwiZGl2Iiwic2xpY2UiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FormComponent.js\n"));

/***/ })

});