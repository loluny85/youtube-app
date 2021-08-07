/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _util_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/regex */ \"./util/regex.js\");\n/* harmony import */ var _store_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/AppContext */ \"./store/AppContext.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/Users/developer3/codebase/youtube-app/pages/index.js\";\n\n\n\n\n\n\nconst Home = () => {\n  const {\n    state,\n    dispatch\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_AppContext__WEBPACK_IMPORTED_MODULE_4__.default);\n  const {\n    videoUrl\n  } = state;\n  const {\n    inputBox,\n    disableButtonStyle\n  } = (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default());\n  const {\n    0: url,\n    1: setUrl\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(videoUrl);\n  const {\n    0: invalidUrl,\n    1: setInvalidUrl\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n  const {\n    0: invalidUrlMsg,\n    1: setInvalidUrlMsg\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    if (!url.match(_util_regex__WEBPACK_IMPORTED_MODULE_3__.VALID_YOUTUBE_URL)) {\n      setInvalidUrl(true);\n      setInvalidUrlMsg(\"Enter a valid URL\");\n    } else {\n      setInvalidUrl(false);\n      setInvalidUrlMsg(\"\");\n    }\n  }, [url]);\n\n  const navigateToVideo = e => {\n    e.preventDefault();\n\n    if ((state === null || state === void 0 ? void 0 : state.videoUrl) !== url) {\n      dispatch({\n        type: 'SAVE_VIDEO_URL',\n        payload: url\n      });\n      dispatch({\n        type: 'DELETE_TIMESTAMP'\n      });\n    }\n\n    router.push('video');\n  };\n\n  const clickHandler = e => {\n    e.target.select();\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n    className: \"flex-column align-center\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n      className: inputBox,\n      type: \"text\",\n      placeholder: \"Youtube video URL...\",\n      value: url,\n      onChange: e => setUrl(e.target.value),\n      onClick: clickHandler\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: `errorMsg ${url && invalidUrl ? 'displayError' : 'hideError'}`,\n      children: invalidUrlMsg\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n      className: `button primaryButton ${invalidUrl ? disableButtonStyle : ''}`,\n      type: \"submit\",\n      value: \"Save\",\n      disabled: invalidUrl,\n      onClick: navigateToVideo\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95b3V0dWJlLWFwcC8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwibmFtZXMiOlsiSG9tZSIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsInZpZGVvVXJsIiwiaW5wdXRCb3giLCJkaXNhYmxlQnV0dG9uU3R5bGUiLCJzdHlsZXMiLCJ1cmwiLCJzZXRVcmwiLCJ1c2VTdGF0ZSIsImludmFsaWRVcmwiLCJzZXRJbnZhbGlkVXJsIiwiaW52YWxpZFVybE1zZyIsInNldEludmFsaWRVcmxNc2ciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJtYXRjaCIsIlZBTElEX1lPVVRVQkVfVVJMIiwibmF2aWdhdGVUb1ZpZGVvIiwiZSIsInByZXZlbnREZWZhdWx0IiwidHlwZSIsInBheWxvYWQiLCJwdXNoIiwiY2xpY2tIYW5kbGVyIiwidGFyZ2V0Iiwic2VsZWN0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBRyxNQUFNO0FBQ2pCLFFBQU07QUFBRUMsU0FBRjtBQUFTQztBQUFULE1BQXNCQyxpREFBVSxDQUFDQyxzREFBRCxDQUF0QztBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFlSixLQUFyQjtBQUNBLFFBQU07QUFBRUssWUFBRjtBQUFZQztBQUFaLE1BQW1DQyxnRUFBekM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsR0FBRDtBQUFBLE9BQU1DO0FBQU4sTUFBZ0JDLCtDQUFRLENBQUNOLFFBQUQsQ0FBOUI7QUFDQSxRQUFNO0FBQUEsT0FBQ08sVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJGLCtDQUFRLENBQUMsRUFBRCxDQUE1QztBQUNBLFFBQU07QUFBQSxPQUFDRyxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DSiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEQ7QUFDQSxRQUFNSyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRUFDLGtEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUksQ0FBQ1QsR0FBRyxDQUFDVSxLQUFKLENBQVVDLDBEQUFWLENBQUwsRUFBbUM7QUFDakNQLG1CQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0FFLHNCQUFnQixDQUFDLG1CQUFELENBQWhCO0FBQ0QsS0FIRCxNQUlLO0FBQ0hGLG1CQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0FFLHNCQUFnQixDQUFDLEVBQUQsQ0FBaEI7QUFDRDtBQUNGLEdBVFEsRUFTTixDQUFDTixHQUFELENBVE0sQ0FBVDs7QUFXQSxRQUFNWSxlQUFlLEdBQUlDLENBQUQsSUFBTztBQUM3QkEsS0FBQyxDQUFDQyxjQUFGOztBQUNBLFFBQUksQ0FBQXRCLEtBQUssU0FBTCxJQUFBQSxLQUFLLFdBQUwsWUFBQUEsS0FBSyxDQUFHSSxRQUFSLE1BQXFCSSxHQUF6QixFQUE4QjtBQUM1QlAsY0FBUSxDQUFDO0FBQ1BzQixZQUFJLEVBQUUsZ0JBREM7QUFFUEMsZUFBTyxFQUFFaEI7QUFGRixPQUFELENBQVI7QUFJQVAsY0FBUSxDQUFDO0FBQ1BzQixZQUFJLEVBQUU7QUFEQyxPQUFELENBQVI7QUFHRDs7QUFDRFIsVUFBTSxDQUFDVSxJQUFQLENBQVksT0FBWjtBQUNELEdBWkQ7O0FBY0EsUUFBTUMsWUFBWSxHQUFJTCxDQUFELElBQU87QUFDMUJBLEtBQUMsQ0FBQ00sTUFBRixDQUFTQyxNQUFUO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRTtBQUFNLGFBQVMsRUFBQywwQkFBaEI7QUFBQSw0QkFDRTtBQUNFLGVBQVMsRUFBRXZCLFFBRGI7QUFFRSxVQUFJLEVBQUMsTUFGUDtBQUdFLGlCQUFXLEVBQUMsc0JBSGQ7QUFJRSxXQUFLLEVBQUVHLEdBSlQ7QUFLRSxjQUFRLEVBQUdhLENBQUQsSUFBT1osTUFBTSxDQUFDWSxDQUFDLENBQUNNLE1BQUYsQ0FBU0UsS0FBVixDQUx6QjtBQU1FLGFBQU8sRUFBRUg7QUFOWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBU0U7QUFBSyxlQUFTLEVBQUcsWUFBV2xCLEdBQUcsSUFBSUcsVUFBUCxHQUFvQixjQUFwQixHQUFxQyxXQUFZLEVBQTdFO0FBQUEsZ0JBQWlGRTtBQUFqRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGLGVBVUU7QUFDRSxlQUFTLEVBQUcsd0JBQXVCRixVQUFVLEdBQUdMLGtCQUFILEdBQXdCLEVBQUcsRUFEMUU7QUFFRSxVQUFJLEVBQUMsUUFGUDtBQUdFLFdBQUssRUFBQyxNQUhSO0FBSUUsY0FBUSxFQUFFSyxVQUpaO0FBS0UsYUFBTyxFQUFFUztBQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFvQkQsQ0ExREQ7O0FBNERBLCtEQUFlckIsSUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBWQUxJRF9ZT1VUVUJFX1VSTCB9IGZyb20gJy4uL3V0aWwvcmVnZXgnO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSAnLi4vc3RvcmUvQXBwQ29udGV4dCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dClcbiAgY29uc3QgeyB2aWRlb1VybCB9ID0gc3RhdGVcbiAgY29uc3QgeyBpbnB1dEJveCwgZGlzYWJsZUJ1dHRvblN0eWxlIH0gPSBzdHlsZXM7XG4gIGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZSh2aWRlb1VybClcbiAgY29uc3QgW2ludmFsaWRVcmwsIHNldEludmFsaWRVcmxdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW2ludmFsaWRVcmxNc2csIHNldEludmFsaWRVcmxNc2ddID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghdXJsLm1hdGNoKFZBTElEX1lPVVRVQkVfVVJMKSkge1xuICAgICAgc2V0SW52YWxpZFVybCh0cnVlKVxuICAgICAgc2V0SW52YWxpZFVybE1zZyhcIkVudGVyIGEgdmFsaWQgVVJMXCIpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2V0SW52YWxpZFVybChmYWxzZSlcbiAgICAgIHNldEludmFsaWRVcmxNc2coXCJcIilcbiAgICB9XG4gIH0sIFt1cmxdKVxuXG4gIGNvbnN0IG5hdmlnYXRlVG9WaWRlbyA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYgKHN0YXRlID8udmlkZW9VcmwgIT09IHVybCkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiAnU0FWRV9WSURFT19VUkwnLFxuICAgICAgICBwYXlsb2FkOiB1cmxcbiAgICAgIH0pXG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICdERUxFVEVfVElNRVNUQU1QJ1xuICAgICAgfSlcbiAgICB9XG4gICAgcm91dGVyLnB1c2goJ3ZpZGVvJylcbiAgfVxuXG4gIGNvbnN0IGNsaWNrSGFuZGxlciA9IChlKSA9PiB7XG4gICAgZS50YXJnZXQuc2VsZWN0KClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleC1jb2x1bW4gYWxpZ24tY2VudGVyXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgY2xhc3NOYW1lPXtpbnB1dEJveH1cbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXR1YmUgdmlkZW8gVVJMLi4uXCJcbiAgICAgICAgdmFsdWU9e3VybH1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVcmwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICBvbkNsaWNrPXtjbGlja0hhbmRsZXJ9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BlcnJvck1zZyAke3VybCAmJiBpbnZhbGlkVXJsID8gJ2Rpc3BsYXlFcnJvcicgOiAnaGlkZUVycm9yJ31gfT57aW52YWxpZFVybE1zZ308L2Rpdj5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9e2BidXR0b24gcHJpbWFyeUJ1dHRvbiAke2ludmFsaWRVcmwgPyBkaXNhYmxlQnV0dG9uU3R5bGUgOiAnJ31gfVxuICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgdmFsdWU9XCJTYXZlXCJcbiAgICAgICAgZGlzYWJsZWQ9e2ludmFsaWRVcmx9XG4gICAgICAgIG9uQ2xpY2s9e25hdmlnYXRlVG9WaWRlb31cbiAgICAgIC8+XG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./store/AppContext.js":
/*!*****************************!*\
  !*** ./store/AppContext.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst AppContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95b3V0dWJlLWFwcC8uL3N0b3JlL0FwcENvbnRleHQuanM/N2JiNyJdLCJuYW1lcyI6WyJBcHBDb250ZXh0IiwiY3JlYXRlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFFQSxNQUFNQSxVQUFVLGdCQUFHQyxvREFBYSxDQUFDLElBQUQsQ0FBaEM7QUFFQSwrREFBZUQsVUFBZiIsImZpbGUiOiIuL3N0b3JlL0FwcENvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBBcHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKVxuXG5leHBvcnQgZGVmYXVsdCBBcHBDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/AppContext.js\n");

/***/ }),

/***/ "./util/regex.js":
/*!***********************!*\
  !*** ./util/regex.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"VALID_YOUTUBE_URL\": function() { return /* binding */ VALID_YOUTUBE_URL; }\n/* harmony export */ });\nconst VALID_YOUTUBE_URL = /((http(s)?:\\/\\/)?)(www\\.)?((youtube\\.com\\/)|(youtu.be\\/))((watch\\?v=))[\\S]+/;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95b3V0dWJlLWFwcC8uL3V0aWwvcmVnZXguanM/Nzk4YSJdLCJuYW1lcyI6WyJWQUxJRF9ZT1VUVUJFX1VSTCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLGlCQUFpQixHQUFHLDZFQUExQiIsImZpbGUiOiIuL3V0aWwvcmVnZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgVkFMSURfWU9VVFVCRV9VUkwgPSAvKChodHRwKHMpPzpcXC9cXC8pPykod3d3XFwuKT8oKHlvdXR1YmVcXC5jb21cXC8pfCh5b3V0dS5iZVxcLykpKCh3YXRjaFxcP3Y9KSlbXFxTXSsvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./util/regex.js\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"inputBox\": \"Home_inputBox__3zk4V\",\n\t\"disableButtonStyle\": \"Home_disableButtonStyle__1cl3b\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95b3V0dWJlLWFwcC8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3M/Y2Y1NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImlucHV0Qm94XCI6IFwiSG9tZV9pbnB1dEJveF9fM3prNFZcIixcblx0XCJkaXNhYmxlQnV0dG9uU3R5bGVcIjogXCJIb21lX2Rpc2FibGVCdXR0b25TdHlsZV9fMWNsM2JcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();