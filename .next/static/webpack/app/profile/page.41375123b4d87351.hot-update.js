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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"(app-client)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ProfilePage = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const logout = ()=>{\n        try {\n            axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"/api/users/logout\");\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(\"Logout successfully\");\n            router.push(\"/login\");\n        } catch (err) {\n            console.log(err.message);\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(err.message);\n        }\n    };\n    const getUserDetails = async ()=>{\n        try {\n            var _response_data, _response_data1, _response_data_data;\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"/api/users/me\");\n            setData(response === null || response === void 0 ? void 0 : (_response_data = response.data) === null || _response_data === void 0 ? void 0 : _response_data.data);\n            const id = response === null || response === void 0 ? void 0 : (_response_data1 = response.data) === null || _response_data1 === void 0 ? void 0 : (_response_data_data = _response_data1.data) === null || _response_data_data === void 0 ? void 0 : _response_data_data._id;\n            router.push(\"/profile/\".concat(id));\n            return response;\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    // useEffect(() => {\n    //   getUserDetails();\n    // }, []);\n    console.log(data, \"one\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center justify-center min-h-screen py-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Profile\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Cryst\\\\Desktop\\\\NEXT-AUTH\\\\next-auth\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Cryst\\\\Desktop\\\\NEXT-AUTH\\\\next-auth\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Profile Page\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Cryst\\\\Desktop\\\\NEXT-AUTH\\\\next-auth\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"cursor-pointer\",\n                    onClick: ()=>{\n                        // console.log(\"CLICK\");\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/profile/\".concat(data === null || data === void 0 ? void 0 : data._id)\n                        }, void 0, false, void 0, void 0);\n                    },\n                    children: data && (data === null || data === void 0 ? void 0 : data.username)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Cryst\\\\Desktop\\\\NEXT-AUTH\\\\next-auth\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/profile/\".concat(data === null || data === void 0 ? void 0 : data._id)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Cryst\\\\Desktop\\\\NEXT-AUTH\\\\next-auth\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 21\n                    }, undefined) : \"\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Cryst\\\\Desktop\\\\NEXT-AUTH\\\\next-auth\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Cryst\\\\Desktop\\\\NEXT-AUTH\\\\next-auth\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: getUserDetails,\n                    className: \"bg-blue-700 mt-4 hover:bg-blue-900 p-2 font-bold rounded text-white\",\n                    children: \"Get Profile\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Cryst\\\\Desktop\\\\NEXT-AUTH\\\\next-auth\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Cryst\\\\Desktop\\\\NEXT-AUTH\\\\next-auth\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: logout,\n                    className: \"bg-blue-700 mt-4 hover:bg-blue-900 p-2 font-bold rounded text-white\",\n                    children: \"Logout\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Cryst\\\\Desktop\\\\NEXT-AUTH\\\\next-auth\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Cryst\\\\Desktop\\\\NEXT-AUTH\\\\next-auth\\\\src\\\\app\\\\profile\\\\page.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(ProfilePage, \"bvHSlTCSm91PDU52t5UU7g+kpOQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ProfilePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePage);\nvar _c;\n$RefreshReg$(_c, \"ProfilePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9wcm9maWxlL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUMwQjtBQUNHO0FBQ2U7QUFDQTtBQUNMO0FBRXZDLE1BQU1LLGNBQWM7O0lBQ2xCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFRSiwrQ0FBUUEsQ0FBQztJQUN0QyxNQUFNSyxTQUFTTiwwREFBU0E7SUFDeEIsTUFBTU8sU0FBUztRQUNiLElBQUk7WUFDRlQsNkNBQUtBLENBQUNVLElBQUk7WUFDVk4saURBQUtBLENBQUNPLFFBQVE7WUFDZEgsT0FBT0ksS0FBSztRQUNkLEVBQUUsT0FBT0MsS0FBVTtZQUNqQkMsUUFBUUMsSUFBSUYsSUFBSUc7WUFDaEJaLGlEQUFLQSxDQUFDYSxNQUFNSixJQUFJRztRQUNsQjtJQUNGO0lBQ0EsTUFBTUUsaUJBQWlCO1FBQ3JCLElBQUk7Z0JBRU1DLGdCQUNHQTtZQUZYLE1BQU1BLFdBQVcsTUFBTW5CLDZDQUFLQSxDQUFDVSxJQUFJO1lBQ2pDSCxRQUFRWSxxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLENBQUFBLGlCQUFBQSxTQUFVYixrQkFBVmEsNEJBQUFBLEtBQUFBLElBQUFBLGVBQWdCYjtZQUN4QixNQUFNYyxLQUFLRCxxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLENBQUFBLGtCQUFBQSxTQUFVYixrQkFBVmEsNkJBQUFBLEtBQUFBLElBQUFBLHVCQUFBQSxnQkFBZ0JiLG1EQUFoQmEsS0FBQUEsd0JBQXNCRTtZQUNqQ2IsT0FBT0ksS0FBSyxZQUFlLE9BQUhRO1lBQ3hCLE9BQU9EO1FBQ1QsRUFBRSxPQUFPTixLQUFLO1lBQ1pDLFFBQVFDLElBQUlGO1FBQ2Q7SUFDRjtJQUNBLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWQyxRQUFRQyxJQUFJVCxNQUFNO0lBQ2xCLHFCQUNFO2tCQUNFLDRFQUFDZ0I7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNDOzs7Ozs4QkFDRCw4REFBQ0M7OEJBQUU7Ozs7Ozs4QkFDSCw4REFBQ0Y7b0JBQ0NELFdBQVU7b0JBQ1ZJLFNBQVM7d0JBQ1Asd0JBQXdCO3NDQUN4Qiw4REFBQzFCLGtEQUFJQTs0QkFBQzJCLE1BQU0sWUFBc0IsT0FBVnRCLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTWU7O29CQUNoQzs4QkFHQ2YsUUFBUUEsQ0FBQUEsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNdUIsUUFBTzs7Ozs7OzhCQUV4Qiw4REFBQ0M7OEJBQUl4QixxQkFBTyw4REFBQ0wsa0RBQUlBO3dCQUFDMkIsTUFBTSxZQUFzQixPQUFWdEIsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNZTs7Ozs7b0NBQVk7Ozs7Ozs4QkFDdEQsOERBQUNJOzs7Ozs4QkFDRCw4REFBQ007b0JBQ0NKLFNBQVNUO29CQUNUSyxXQUFVOzhCQUNYOzs7Ozs7OEJBR0QsOERBQUNFOzs7Ozs4QkFDRCw4REFBQ007b0JBQ0NKLFNBQVNsQjtvQkFDVGMsV0FBVTs4QkFDWDs7Ozs7Ozs7Ozs7OztBQU1UO0dBOURNbEI7O1FBRVdILHNEQUFTQTs7O0tBRnBCRztBQWdFTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Byb2ZpbGUvcGFnZS50c3g/YzRlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5cclxuY29uc3QgUHJvZmlsZVBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdOiBhbnkgPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBheGlvcy5nZXQoXCIvYXBpL3VzZXJzL2xvZ291dFwiKTtcclxuICAgICAgdG9hc3Quc3VjY2VzcyhcIkxvZ291dCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB0b2FzdC5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBnZXRVc2VyRGV0YWlscyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS91c2Vycy9tZVwiKTtcclxuICAgICAgc2V0RGF0YShyZXNwb25zZT8uZGF0YT8uZGF0YSk7XHJcbiAgICAgIGNvbnN0IGlkID0gcmVzcG9uc2U/LmRhdGE/LmRhdGE/Ll9pZDtcclxuICAgICAgcm91dGVyLnB1c2goYC9wcm9maWxlLyR7aWR9YCk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGdldFVzZXJEZXRhaWxzKCk7XHJcbiAgLy8gfSwgW10pO1xyXG4gIGNvbnNvbGUubG9nKGRhdGEsIFwib25lXCIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlbiBweS0yXCI+XHJcbiAgICAgICAgPGgyPlByb2ZpbGU8L2gyPlxyXG4gICAgICAgIDxociAvPlxyXG4gICAgICAgIDxwPlByb2ZpbGUgUGFnZTwvcD5cclxuICAgICAgICA8aDJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJDTElDS1wiKTtcclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9maWxlLyR7ZGF0YT8uX2lkfWB9IC8+O1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7Lyoge2RhdGEgJiYgPExpbmsgaHJlZj17YHByb2ZpbGUvJHtkYXRhPy5faWR9YH0gLz59ICovfVxyXG4gICAgICAgICAge2RhdGEgJiYgZGF0YT8udXNlcm5hbWV9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8aDM+e2RhdGEgPyA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHtkYXRhPy5faWR9YH0gLz4gOiBcIlwifTwvaDM+XHJcbiAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17Z2V0VXNlckRldGFpbHN9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTcwMCBtdC00IGhvdmVyOmJnLWJsdWUtOTAwIHAtMiBmb250LWJvbGQgcm91bmRlZCB0ZXh0LXdoaXRlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBHZXQgUHJvZmlsZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxociAvPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e2xvZ291dH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNzAwIG10LTQgaG92ZXI6YmctYmx1ZS05MDAgcC0yIGZvbnQtYm9sZCByb3VuZGVkIHRleHQtd2hpdGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIExvZ291dFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlUGFnZTtcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiTGluayIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidG9hc3QiLCJQcm9maWxlUGFnZSIsImRhdGEiLCJzZXREYXRhIiwicm91dGVyIiwibG9nb3V0IiwiZ2V0Iiwic3VjY2VzcyIsInB1c2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImVycm9yIiwiZ2V0VXNlckRldGFpbHMiLCJyZXNwb25zZSIsImlkIiwiX2lkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJociIsInAiLCJvbkNsaWNrIiwiaHJlZiIsInVzZXJuYW1lIiwiaDMiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/profile/page.tsx\n"));

/***/ })

});