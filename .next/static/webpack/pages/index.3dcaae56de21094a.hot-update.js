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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FormComponent: function() { return /* binding */ FormComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction FormComponent(param) {\n    let { onSubmit } = param;\n    _s();\n    const [vendorID, setVendorID] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [priceIDs, setPriceIDs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        \"\"\n    ]);\n    const [quantities, setQuantities] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        \"\"\n    ]);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        onSubmit({\n            vendorID,\n            priceIDs,\n            quantities\n        });\n    };\n    const handleAddField = ()=>{\n        setPriceIDs([\n            ...priceIDs,\n            \"\"\n        ]);\n        setQuantities([\n            ...quantities,\n            \"\"\n        ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"Vendor ID:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: vendorID,\n                        onChange: (e)=>setVendorID(e.target.value),\n                        minLength: 4,\n                        maxLength: 10,\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/components/FormComponent.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/components/FormComponent.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            priceIDs.map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: [\n                                \"Price ID:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: priceIDs[index],\n                                    onChange: (e)=>setPriceIDs([\n                                            ...priceIDs.slice(0, index),\n                                            e.target.value,\n                                            ...priceIDs.slice(index + 1)\n                                        ]),\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/components/FormComponent.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/components/FormComponent.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: [\n                                \"Quantity:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"number\",\n                                    value: quantities[index],\n                                    onChange: (e)=>setQuantities([\n                                            ...quantities.slice(0, index),\n                                            e.target.value,\n                                            ...quantities.slice(index + 1)\n                                        ]),\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/components/FormComponent.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/components/FormComponent.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/components/FormComponent.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"rounded-full bg-gray-400\",\n                type: \"button\",\n                onClick: handleAddField,\n                children: \"Add Price ID and Quantity\"\n            }, void 0, false, {\n                fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/components/FormComponent.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/components/FormComponent.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/franklin/Documents/Paddle/paddle-open-checkout/components/FormComponent.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(FormComponent, \"h1OV5bisWkFLqE5PhC/eU3WC6b0=\");\n_c = FormComponent;\nvar _c;\n$RefreshReg$(_c, \"FormComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm1Db21wb25lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpQztBQUUxQixTQUFTQyxjQUFjLEtBQVk7UUFBWixFQUFFQyxRQUFRLEVBQUUsR0FBWjs7SUFDNUIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ0ssVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztRQUFDO0tBQUc7SUFDN0MsTUFBTSxDQUFDTyxZQUFZQyxjQUFjLEdBQUdSLCtDQUFRQSxDQUFDO1FBQUM7S0FBRztJQUVqRCxNQUFNUyxlQUFlLENBQUNDO1FBQ3BCQSxFQUFFQyxjQUFjO1FBQ2hCVCxTQUFTO1lBQUVDO1lBQVVFO1lBQVVFO1FBQVc7SUFDNUM7SUFFQSxNQUFNSyxpQkFBaUI7UUFDckJOLFlBQVk7ZUFBSUQ7WUFBVTtTQUFHO1FBQzdCRyxjQUFjO2VBQUlEO1lBQVk7U0FBRztJQUNuQztJQUVBLHFCQUNFLDhEQUFDTTtRQUFLWCxVQUFVTzs7MEJBQ2QsOERBQUNLOztvQkFBTTtrQ0FFTCw4REFBQ0M7d0JBQU1DLE1BQUs7d0JBQVNDLE9BQU9kO3dCQUFVZSxVQUFVLENBQUNSLElBQU1OLFlBQVlNLEVBQUVTLE1BQU0sQ0FBQ0YsS0FBSzt3QkFBR0csV0FBVzt3QkFBR0MsV0FBVzt3QkFBSUMsUUFBUTs7Ozs7Ozs7Ozs7O1lBRTFIakIsU0FBU2tCLEdBQUcsQ0FBQyxDQUFDQyxHQUFHQyxzQkFDaEIsOERBQUNDOztzQ0FDQyw4REFBQ1o7O2dDQUFNOzhDQUVMLDhEQUFDQztvQ0FBTUMsTUFBSztvQ0FBT0MsT0FBT1osUUFBUSxDQUFDb0IsTUFBTTtvQ0FBRVAsVUFBVSxDQUFDUixJQUFNSixZQUFZOytDQUFJRCxTQUFTc0IsS0FBSyxDQUFDLEdBQUdGOzRDQUFRZixFQUFFUyxNQUFNLENBQUNGLEtBQUs7K0NBQUtaLFNBQVNzQixLQUFLLENBQUNGLFFBQVE7eUNBQUc7b0NBQUdILFFBQVE7Ozs7Ozs7Ozs7OztzQ0FFaEssOERBQUNSOztnQ0FBTTs4Q0FFTCw4REFBQ0M7b0NBQU1DLE1BQUs7b0NBQVNDLE9BQU9WLFVBQVUsQ0FBQ2tCLE1BQU07b0NBQUVQLFVBQVUsQ0FBQ1IsSUFBTUYsY0FBYzsrQ0FBSUQsV0FBV29CLEtBQUssQ0FBQyxHQUFHRjs0Q0FBUWYsRUFBRVMsTUFBTSxDQUFDRixLQUFLOytDQUFLVixXQUFXb0IsS0FBSyxDQUFDRixRQUFRO3lDQUFHO29DQUFHSCxRQUFROzs7Ozs7Ozs7Ozs7O21CQVBsS0c7Ozs7OzBCQVdaLDhEQUFDRztnQkFBT0MsV0FBVTtnQkFBMkJiLE1BQUs7Z0JBQVNjLFNBQVNsQjswQkFBZ0I7Ozs7OzswQkFDcEYsOERBQUNnQjtnQkFBT1osTUFBSzswQkFBUzs7Ozs7Ozs7Ozs7O0FBRzVCO0dBckNnQmY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtQ29tcG9uZW50LmpzPzI0YWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEZvcm1Db21wb25lbnQoeyBvblN1Ym1pdCB9KSB7XG4gIGNvbnN0IFt2ZW5kb3JJRCwgc2V0VmVuZG9ySURdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwcmljZUlEcywgc2V0UHJpY2VJRHNdID0gdXNlU3RhdGUoW1wiXCJdKTtcbiAgY29uc3QgW3F1YW50aXRpZXMsIHNldFF1YW50aXRpZXNdID0gdXNlU3RhdGUoW1wiXCJdKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBvblN1Ym1pdCh7IHZlbmRvcklELCBwcmljZUlEcywgcXVhbnRpdGllcyB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBZGRGaWVsZCA9ICgpID0+IHtcbiAgICBzZXRQcmljZUlEcyhbLi4ucHJpY2VJRHMsIFwiXCJdKTtcbiAgICBzZXRRdWFudGl0aWVzKFsuLi5xdWFudGl0aWVzLCBcIlwiXSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgVmVuZG9yIElEOlxuICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXt2ZW5kb3JJRH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRWZW5kb3JJRChlLnRhcmdldC52YWx1ZSl9IG1pbkxlbmd0aD17NH0gbWF4TGVuZ3RoPXsxMH0gcmVxdWlyZWQgLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICB7cHJpY2VJRHMubWFwKChfLCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIFByaWNlIElEOlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3ByaWNlSURzW2luZGV4XX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRQcmljZUlEcyhbLi4ucHJpY2VJRHMuc2xpY2UoMCwgaW5kZXgpLCBlLnRhcmdldC52YWx1ZSwgLi4ucHJpY2VJRHMuc2xpY2UoaW5kZXggKyAxKV0pfSByZXF1aXJlZCAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgUXVhbnRpdHk6XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtxdWFudGl0aWVzW2luZGV4XX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRRdWFudGl0aWVzKFsuLi5xdWFudGl0aWVzLnNsaWNlKDAsIGluZGV4KSwgZS50YXJnZXQudmFsdWUsIC4uLnF1YW50aXRpZXMuc2xpY2UoaW5kZXggKyAxKV0pfSByZXF1aXJlZCAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBiZy1ncmF5LTQwMFwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVBZGRGaWVsZH0+QWRkIFByaWNlIElEIGFuZCBRdWFudGl0eTwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRm9ybUNvbXBvbmVudCIsIm9uU3VibWl0IiwidmVuZG9ySUQiLCJzZXRWZW5kb3JJRCIsInByaWNlSURzIiwic2V0UHJpY2VJRHMiLCJxdWFudGl0aWVzIiwic2V0UXVhbnRpdGllcyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUFkZEZpZWxkIiwiZm9ybSIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsInJlcXVpcmVkIiwibWFwIiwiXyIsImluZGV4IiwiZGl2Iiwic2xpY2UiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FormComponent.js\n"));

/***/ })

});