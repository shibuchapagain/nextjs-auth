"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/profile/page",{

/***/ "(app-client)/./src/app/profile/page.tsx":
/*!**********************************!*\
  !*** ./src/app/profile/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"(app-client)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst ProfilePage = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const logout = ()=>{\n        try {\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/users/logout\");\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"Logout successfully\");\n            router.push(\"/login\");\n        } catch (err) {\n            console.log(err.message);\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(err.message);\n        }\n    };\n    const getUserDetails = async ()=>{\n        var _response_data;\n        const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/users/me\");\n        setData(response === null || response === void 0 ? void 0 : (_response_data = response.data) === null || _response_data === void 0 ? void 0 : _response_data.data);\n        return response;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getUserDetails();\n    }, []);\n    console.log(data, \"one\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center justify-center min-h-screen py-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Profile\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Cryst\\\\Desktop\\\\NEXT-AUTH\\\\next-auth\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Cryst\\\\Desktop\\\\NEXT-AUTH\\\\next-auth\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Profile Page\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Cryst\\\\Desktop\\\\NEXT-AUTH\\\\next-auth\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: [\n                        data && (data === null || data === void 0 ? void 0 : data.status),\n                        \" Here, iam\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Cryst\\\\Desktop\\\\NEXT-AUTH\\\\next-auth\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Cryst\\\\Desktop\\\\NEXT-AUTH\\\\next-auth\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: logout,\n                    className: \"bg-blue-700 mt-4 hover:bg-blue-900 p-2 font-bold rounded text-white\",\n                    children: \"Logout\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Cryst\\\\Desktop\\\\NEXT-AUTH\\\\next-auth\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Cryst\\\\Desktop\\\\NEXT-AUTH\\\\next-auth\\\\src\\\\app\\\\profile\\\\page.tsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(ProfilePage, \"d0jLu8abQFTmBA+sGN5M6Di+FIQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ProfilePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePage);\nvar _c;\n$RefreshReg$(_c, \"ProfilePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9wcm9maWxlL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDMEI7QUFFa0I7QUFDQTtBQUNMO0FBRXZDLE1BQU1LLGNBQWM7O0lBQ2xCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFRSiwrQ0FBUUEsQ0FBQztJQUN0QyxNQUFNSyxTQUFTUCwwREFBU0E7SUFDeEIsTUFBTVEsU0FBUztRQUNiLElBQUk7WUFDRlQsNkNBQUtBLENBQUNVLElBQUk7WUFDVk4saURBQUtBLENBQUNPLFFBQVE7WUFDZEgsT0FBT0ksS0FBSztRQUNkLEVBQUUsT0FBT0MsS0FBVTtZQUNqQkMsUUFBUUMsSUFBSUYsSUFBSUc7WUFDaEJaLGlEQUFLQSxDQUFDYSxNQUFNSixJQUFJRztRQUNsQjtJQUNGO0lBQ0EsTUFBTUUsaUJBQWlCO1lBRWJDO1FBRFIsTUFBTUEsV0FBVyxNQUFNbkIsNkNBQUtBLENBQUNVLElBQUk7UUFDakNILFFBQVFZLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsaUJBQUFBLFNBQVViLGtCQUFWYSw0QkFBQUEsS0FBQUEsSUFBQUEsZUFBZ0JiO1FBQ3hCLE9BQU9hO0lBQ1Q7SUFDQWpCLGdEQUFTQSxDQUFDO1FBQ1JnQjtJQUNGLEdBQUcsRUFBRTtJQUNMSixRQUFRQyxJQUFJVCxNQUFNO0lBQ2xCLHFCQUNFO2tCQUNFLDRFQUFDYztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ0M7Ozs7OzhCQUNELDhEQUFDQzs4QkFBRTs7Ozs7OzhCQUNILDhEQUFDRjs7d0JBQUloQixRQUFRQSxDQUFBQSxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1tQixNQUFLO3dCQUFFOzs7Ozs7OzhCQUMxQiw4REFBQ0Y7Ozs7OzhCQUNELDhEQUFDRztvQkFDQ0MsU0FBU2xCO29CQUNUWSxXQUFVOzhCQUNYOzs7Ozs7Ozs7Ozs7O0FBTVQ7R0F2Q01oQjs7UUFFV0osc0RBQVNBOzs7S0FGcEJJO0FBeUNOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcHJvZmlsZS9wYWdlLnRzeD9jNGU2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcblxyXG5jb25zdCBQcm9maWxlUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV06IGFueSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF4aW9zLmdldChcIi9hcGkvdXNlcnMvbG9nb3V0XCIpO1xyXG4gICAgICB0b2FzdC5zdWNjZXNzKFwiTG9nb3V0IHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XHJcbiAgICAgIHRvYXN0LmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGdldFVzZXJEZXRhaWxzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL3VzZXJzL21lXCIpO1xyXG4gICAgc2V0RGF0YShyZXNwb25zZT8uZGF0YT8uZGF0YSk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0VXNlckRldGFpbHMoKTtcclxuICB9LCBbXSk7XHJcbiAgY29uc29sZS5sb2coZGF0YSwgXCJvbmVcIik7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIHB5LTJcIj5cclxuICAgICAgICA8aDI+UHJvZmlsZTwvaDI+XHJcbiAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgPHA+UHJvZmlsZSBQYWdlPC9wPlxyXG4gICAgICAgIDxoMj57ZGF0YSAmJiBkYXRhPy5zdGF0dXN9IEhlcmUsIGlhbTwvaDI+XHJcbiAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17bG9nb3V0fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS03MDAgbXQtNCBob3ZlcjpiZy1ibHVlLTkwMCBwLTIgZm9udC1ib2xkIHJvdW5kZWQgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTG9nb3V0XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVQYWdlO1xyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInRvYXN0IiwiUHJvZmlsZVBhZ2UiLCJkYXRhIiwic2V0RGF0YSIsInJvdXRlciIsImxvZ291dCIsImdldCIsInN1Y2Nlc3MiLCJwdXNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJlcnJvciIsImdldFVzZXJEZXRhaWxzIiwicmVzcG9uc2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImhyIiwicCIsInN0YXR1cyIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/profile/page.tsx\n"));

/***/ })

});