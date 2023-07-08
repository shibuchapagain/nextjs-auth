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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"(app-client)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst ProfilePage = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const logout = ()=>{\n        try {\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/users/logout\");\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"Logout successfully\");\n            router.push(\"/login\");\n        } catch (err) {\n            console.log(err.message);\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(err.message);\n        }\n    };\n    const getUserDetails = async ()=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/users/me\");\n        setData(response === null || response === void 0 ? void 0 : response.data);\n        return response;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getUserDetails();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center justify-center min-h-screen py-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Profile\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Cryst\\\\Desktop\\\\NEXT-AUTH\\\\next-auth\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Cryst\\\\Desktop\\\\NEXT-AUTH\\\\next-auth\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Profile Page\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Cryst\\\\Desktop\\\\NEXT-AUTH\\\\next-auth\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: [\n                        data && (data === null || data === void 0 ? void 0 : data.status),\n                        \" Here, iam\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Cryst\\\\Desktop\\\\NEXT-AUTH\\\\next-auth\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Cryst\\\\Desktop\\\\NEXT-AUTH\\\\next-auth\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: logout,\n                    className: \"bg-blue-700 mt-4 hover:bg-blue-900 p-2 font-bold rounded text-white\",\n                    children: \"Logout\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Cryst\\\\Desktop\\\\NEXT-AUTH\\\\next-auth\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Cryst\\\\Desktop\\\\NEXT-AUTH\\\\next-auth\\\\src\\\\app\\\\profile\\\\page.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(ProfilePage, \"d0jLu8abQFTmBA+sGN5M6Di+FIQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ProfilePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePage);\nvar _c;\n$RefreshReg$(_c, \"ProfilePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9wcm9maWxlL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDMEI7QUFFa0I7QUFDQTtBQUNMO0FBRXZDLE1BQU1LLGNBQWM7O0lBQ2xCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFRSiwrQ0FBUUEsQ0FBQztJQUN0QyxNQUFNSyxTQUFTUCwwREFBU0E7SUFDeEIsTUFBTVEsU0FBUztRQUNiLElBQUk7WUFDRlQsNkNBQUtBLENBQUNVLElBQUk7WUFDVk4saURBQUtBLENBQUNPLFFBQVE7WUFDZEgsT0FBT0ksS0FBSztRQUNkLEVBQUUsT0FBT0MsS0FBVTtZQUNqQkMsUUFBUUMsSUFBSUYsSUFBSUc7WUFDaEJaLGlEQUFLQSxDQUFDYSxNQUFNSixJQUFJRztRQUNsQjtJQUNGO0lBQ0EsTUFBTUUsaUJBQWlCO1FBQ3JCLE1BQU1DLFdBQVcsTUFBTW5CLDZDQUFLQSxDQUFDVSxJQUFJO1FBQ2pDSCxRQUFRWSxxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLFNBQVViO1FBQ2xCLE9BQU9hO0lBQ1Q7SUFDQWpCLGdEQUFTQSxDQUFDO1FBQ1JnQjtJQUNGO0lBQ0EscUJBQ0U7a0JBQ0UsNEVBQUNFO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQzs4QkFBRzs7Ozs7OzhCQUNKLDhEQUFDQzs7Ozs7OEJBQ0QsOERBQUNDOzhCQUFFOzs7Ozs7OEJBQ0gsOERBQUNGOzt3QkFBSWhCLFFBQVFBLENBQUFBLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTW1CLE1BQUs7d0JBQUU7Ozs7Ozs7OEJBQzFCLDhEQUFDRjs7Ozs7OEJBQ0QsOERBQUNHO29CQUNDQyxTQUFTbEI7b0JBQ1RZLFdBQVU7OEJBQ1g7Ozs7Ozs7Ozs7Ozs7QUFNVDtHQXRDTWhCOztRQUVXSixzREFBU0E7OztLQUZwQkk7QUF3Q04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm9maWxlL3BhZ2UudHN4P2M0ZTYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuXHJcbmNvbnN0IFByb2ZpbGVQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXTogYW55ID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXhpb3MuZ2V0KFwiL2FwaS91c2Vycy9sb2dvdXRcIik7XHJcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJMb2dvdXQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcclxuICAgICAgdG9hc3QuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgZ2V0VXNlckRldGFpbHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvdXNlcnMvbWVcIik7XHJcbiAgICBzZXREYXRhKHJlc3BvbnNlPy5kYXRhKTtcclxuICAgIHJldHVybiByZXNwb25zZTtcclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRVc2VyRGV0YWlscygpO1xyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlbiBweS0yXCI+XHJcbiAgICAgICAgPGgyPlByb2ZpbGU8L2gyPlxyXG4gICAgICAgIDxociAvPlxyXG4gICAgICAgIDxwPlByb2ZpbGUgUGFnZTwvcD5cclxuICAgICAgICA8aDI+e2RhdGEgJiYgZGF0YT8uc3RhdHVzfSBIZXJlLCBpYW08L2gyPlxyXG4gICAgICAgIDxociAvPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e2xvZ291dH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNzAwIG10LTQgaG92ZXI6YmctYmx1ZS05MDAgcC0yIGZvbnQtYm9sZCByb3VuZGVkIHRleHQtd2hpdGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIExvZ291dFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlUGFnZTtcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ0b2FzdCIsIlByb2ZpbGVQYWdlIiwiZGF0YSIsInNldERhdGEiLCJyb3V0ZXIiLCJsb2dvdXQiLCJnZXQiLCJzdWNjZXNzIiwicHVzaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiZXJyb3IiLCJnZXRVc2VyRGV0YWlscyIsInJlc3BvbnNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJociIsInAiLCJzdGF0dXMiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/profile/page.tsx\n"));

/***/ })

});