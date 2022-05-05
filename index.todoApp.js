/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./LibreBaskerville-Regular.ttf */ \"./src/LibreBaskerville-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\r\\n    font-family: LibreBaskervilleRegular;\\r\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n}\\r\\n\\r\\n* {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    font-family: LibreBaskervilleRegular;\\r\\n}\\r\\n\\r\\n#header{\\r\\n    background-color: aqua;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    padding-left: 15px;\\r\\n    padding-right: 15px; \\r\\n    column-gap: 15px;\\r\\n    height: 75px;\\r\\n    box-shadow: 0px 20px 5px 0px;\\r\\n    border-bottom: 1px solid rgb(156, 156, 156);\\r\\n}\\r\\n\\r\\n#content{\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n#logo{\\r\\n    position: relative;\\r\\n    height: 60%;\\r\\n    width: auto;\\r\\n}\\r\\n\\r\\n#appName{\\r\\n    font-size: 2rem;\\r\\n}\\r\\n\\r\\n#nav{\\r\\n    background-color: aquamarine;\\r\\n    height: 5vh;\\r\\n    display: flex;\\r\\n    align-items: flex-end;\\r\\n    column-gap: 15px;\\r\\n    padding-left: 15px;\\r\\n    padding-right: 15px;\\r\\n    border-bottom: 1px solid rgb(156, 156, 156);\\r\\n}\\r\\n\\r\\n.links {\\r\\n    padding-bottom: 5px;\\r\\n}\\r\\n\\r\\n.links:hover{\\r\\n    padding-bottom: 2px;\\r\\n    border-bottom: 3px solid rgb(29, 134, 25);\\r\\n}\\r\\n\\r\\n#newProjectDiv{\\r\\n    height: 5vh;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    padding: 15px;\\r\\n}\\r\\n\\r\\n#newProjectButton{\\r\\n    width: 100%;\\r\\n    height: 30px;\\r\\n    border-radius: 10px;\\r\\n    border: none;\\r\\n    background-color: rgb(127, 127, 250);\\r\\n    box-shadow: 0px 2px 2px 0px;\\r\\n    font-size: 0.9rem;\\r\\n}\\r\\n\\r\\n#allProjectsDiv{\\r\\n    position: relative;\\r\\n    height: 100%;\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\\r\\n    grid-auto-rows: 300px;\\r\\n    row-gap: 15px;\\r\\n    column-gap: 15px;\\r\\n    padding-left: 15px;\\r\\n    padding-right: 15px;\\r\\n}\\r\\n\\r\\n.card{\\r\\n    position: relative;\\r\\n    background-color: bisque;\\r\\n    border-radius: 10px;\\r\\n    box-shadow: 0px 2px 2px 0px;\\r\\n    display: grid;\\r\\n    padding: 15px;\\r\\n}\\r\\n\\r\\n.buttonsDiv{\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(3, 1fr);\\r\\n    column-gap: 15px;\\r\\n    row-gap: 15px;\\r\\n}\\r\\n\\r\\n.buttonsDiv button{\\r\\n    border-radius: 5px;\\r\\n    border: none;\\r\\n    box-shadow: 0px 2px 2px 0px;\\r\\n    font-size: 0.9rem;\\r\\n    height: 50%;\\r\\n    align-self: end;\\r\\n}\\r\\n\\r\\n.goTo{\\r\\n    background-color: rgb(151, 240, 151);\\r\\n}\\r\\n\\r\\n.modify{\\r\\n    background-color: rgb(127, 127, 250);\\r\\n}\\r\\n\\r\\n.delete{\\r\\n    background-color: rgb(223, 83, 83);\\r\\n}\\r\\n\\r\\n#newProjectInfoDiv{\\r\\n    display: none;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    background-color: azure;\\r\\n    height: 100%;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n#newProjectInfoForm{\\r\\n    height: 50vh;\\r\\n    width: 80vw;\\r\\n    background-color: bisque;\\r\\n    display: grid;\\r\\n    justify-content: center;\\r\\n    grid-template-columns: 1fr 7fr;\\r\\n    column-gap: 15px;\\r\\n    row-gap: 15px;\\r\\n    padding: 15px;\\r\\n    font-size: 1rem;\\r\\n    border-radius: 5px;\\r\\n    box-shadow: 0px 2px 2px 0px;\\r\\n}\\r\\n\\r\\n#newProjectInfoForm label {\\r\\n    align-self: center;\\r\\n}\\r\\n\\r\\n#newProjectInfoForm button {\\r\\n    position: relative;\\r\\n    height: 70%;\\r\\n    width: 100%;\\r\\n    align-self: center;\\r\\n}\\r\\n\\r\\n#newProjectInfoForm button, input, textarea{\\r\\n    position: relative;\\r\\n    border-radius: 5px;\\r\\n    border: 1px solid black;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n#validate, #cancel{\\r\\n    grid-column: 2/3;\\r\\n}\\r\\n\\r\\n#validate {\\r\\n    background-color: rgb(146, 223, 122);\\r\\n}\\r\\n\\r\\n#cancel {\\r\\n    background-color: rgb(224, 83, 83);\\r\\n}\\r\\n\\r\\n.projectPages, ol{\\r\\n    padding: 15px;\\r\\n    row-gap: 15px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolistapp/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\r\n\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\nmodule.exports = function (cssWithMappingToString) {\r\n  var list = []; // return the list of modules as css string\r\n\r\n  list.toString = function toString() {\r\n    return this.map(function (item) {\r\n      var content = \"\";\r\n      var needLayer = typeof item[5] !== \"undefined\";\r\n\r\n      if (item[4]) {\r\n        content += \"@supports (\".concat(item[4], \") {\");\r\n      }\r\n\r\n      if (item[2]) {\r\n        content += \"@media \".concat(item[2], \" {\");\r\n      }\r\n\r\n      if (needLayer) {\r\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\r\n      }\r\n\r\n      content += cssWithMappingToString(item);\r\n\r\n      if (needLayer) {\r\n        content += \"}\";\r\n      }\r\n\r\n      if (item[2]) {\r\n        content += \"}\";\r\n      }\r\n\r\n      if (item[4]) {\r\n        content += \"}\";\r\n      }\r\n\r\n      return content;\r\n    }).join(\"\");\r\n  }; // import a list of modules into the list\r\n\r\n\r\n  list.i = function i(modules, media, dedupe, supports, layer) {\r\n    if (typeof modules === \"string\") {\r\n      modules = [[null, modules, undefined]];\r\n    }\r\n\r\n    var alreadyImportedModules = {};\r\n\r\n    if (dedupe) {\r\n      for (var k = 0; k < this.length; k++) {\r\n        var id = this[k][0];\r\n\r\n        if (id != null) {\r\n          alreadyImportedModules[id] = true;\r\n        }\r\n      }\r\n    }\r\n\r\n    for (var _k = 0; _k < modules.length; _k++) {\r\n      var item = [].concat(modules[_k]);\r\n\r\n      if (dedupe && alreadyImportedModules[item[0]]) {\r\n        continue;\r\n      }\r\n\r\n      if (typeof layer !== \"undefined\") {\r\n        if (typeof item[5] === \"undefined\") {\r\n          item[5] = layer;\r\n        } else {\r\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\r\n          item[5] = layer;\r\n        }\r\n      }\r\n\r\n      if (media) {\r\n        if (!item[2]) {\r\n          item[2] = media;\r\n        } else {\r\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\r\n          item[2] = media;\r\n        }\r\n      }\r\n\r\n      if (supports) {\r\n        if (!item[4]) {\r\n          item[4] = \"\".concat(supports);\r\n        } else {\r\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\r\n          item[4] = supports;\r\n        }\r\n      }\r\n\r\n      list.push(item);\r\n    }\r\n  };\r\n\r\n  return list;\r\n};\n\n//# sourceURL=webpack://todolistapp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\r\n\r\nmodule.exports = function (url, options) {\r\n  if (!options) {\r\n    options = {};\r\n  }\r\n\r\n  if (!url) {\r\n    return url;\r\n  }\r\n\r\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\r\n\r\n  if (/^['\"].*['\"]$/.test(url)) {\r\n    url = url.slice(1, -1);\r\n  }\r\n\r\n  if (options.hash) {\r\n    url += options.hash;\r\n  } // Should url be wrapped?\r\n  // See https://drafts.csswg.org/css-values-3/#urls\r\n\r\n\r\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\r\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\r\n  }\r\n\r\n  return url;\r\n};\n\n//# sourceURL=webpack://todolistapp/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\r\n\r\nmodule.exports = function (i) {\r\n  return i[1];\r\n};\n\n//# sourceURL=webpack://todolistapp/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolistapp/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar stylesInDOM = [];\r\n\r\nfunction getIndexByIdentifier(identifier) {\r\n  var result = -1;\r\n\r\n  for (var i = 0; i < stylesInDOM.length; i++) {\r\n    if (stylesInDOM[i].identifier === identifier) {\r\n      result = i;\r\n      break;\r\n    }\r\n  }\r\n\r\n  return result;\r\n}\r\n\r\nfunction modulesToDom(list, options) {\r\n  var idCountMap = {};\r\n  var identifiers = [];\r\n\r\n  for (var i = 0; i < list.length; i++) {\r\n    var item = list[i];\r\n    var id = options.base ? item[0] + options.base : item[0];\r\n    var count = idCountMap[id] || 0;\r\n    var identifier = \"\".concat(id, \" \").concat(count);\r\n    idCountMap[id] = count + 1;\r\n    var indexByIdentifier = getIndexByIdentifier(identifier);\r\n    var obj = {\r\n      css: item[1],\r\n      media: item[2],\r\n      sourceMap: item[3],\r\n      supports: item[4],\r\n      layer: item[5]\r\n    };\r\n\r\n    if (indexByIdentifier !== -1) {\r\n      stylesInDOM[indexByIdentifier].references++;\r\n      stylesInDOM[indexByIdentifier].updater(obj);\r\n    } else {\r\n      var updater = addElementStyle(obj, options);\r\n      options.byIndex = i;\r\n      stylesInDOM.splice(i, 0, {\r\n        identifier: identifier,\r\n        updater: updater,\r\n        references: 1\r\n      });\r\n    }\r\n\r\n    identifiers.push(identifier);\r\n  }\r\n\r\n  return identifiers;\r\n}\r\n\r\nfunction addElementStyle(obj, options) {\r\n  var api = options.domAPI(options);\r\n  api.update(obj);\r\n\r\n  var updater = function updater(newObj) {\r\n    if (newObj) {\r\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\r\n        return;\r\n      }\r\n\r\n      api.update(obj = newObj);\r\n    } else {\r\n      api.remove();\r\n    }\r\n  };\r\n\r\n  return updater;\r\n}\r\n\r\nmodule.exports = function (list, options) {\r\n  options = options || {};\r\n  list = list || [];\r\n  var lastIdentifiers = modulesToDom(list, options);\r\n  return function update(newList) {\r\n    newList = newList || [];\r\n\r\n    for (var i = 0; i < lastIdentifiers.length; i++) {\r\n      var identifier = lastIdentifiers[i];\r\n      var index = getIndexByIdentifier(identifier);\r\n      stylesInDOM[index].references--;\r\n    }\r\n\r\n    var newLastIdentifiers = modulesToDom(newList, options);\r\n\r\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\r\n      var _identifier = lastIdentifiers[_i];\r\n\r\n      var _index = getIndexByIdentifier(_identifier);\r\n\r\n      if (stylesInDOM[_index].references === 0) {\r\n        stylesInDOM[_index].updater();\r\n\r\n        stylesInDOM.splice(_index, 1);\r\n      }\r\n    }\r\n\r\n    lastIdentifiers = newLastIdentifiers;\r\n  };\r\n};\n\n//# sourceURL=webpack://todolistapp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar memo = {};\r\n/* istanbul ignore next  */\r\n\r\nfunction getTarget(target) {\r\n  if (typeof memo[target] === \"undefined\") {\r\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\r\n\r\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\r\n      try {\r\n        // This will throw an exception if access to iframe is blocked\r\n        // due to cross-origin restrictions\r\n        styleTarget = styleTarget.contentDocument.head;\r\n      } catch (e) {\r\n        // istanbul ignore next\r\n        styleTarget = null;\r\n      }\r\n    }\r\n\r\n    memo[target] = styleTarget;\r\n  }\r\n\r\n  return memo[target];\r\n}\r\n/* istanbul ignore next  */\r\n\r\n\r\nfunction insertBySelector(insert, style) {\r\n  var target = getTarget(insert);\r\n\r\n  if (!target) {\r\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\r\n  }\r\n\r\n  target.appendChild(style);\r\n}\r\n\r\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolistapp/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction insertStyleElement(options) {\r\n  var element = document.createElement(\"style\");\r\n  options.setAttributes(element, options.attributes);\r\n  options.insert(element, options.options);\r\n  return element;\r\n}\r\n\r\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolistapp/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction setAttributesWithoutAttributes(styleElement) {\r\n  var nonce =  true ? __webpack_require__.nc : 0;\r\n\r\n  if (nonce) {\r\n    styleElement.setAttribute(\"nonce\", nonce);\r\n  }\r\n}\r\n\r\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolistapp/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction apply(styleElement, options, obj) {\r\n  var css = \"\";\r\n\r\n  if (obj.supports) {\r\n    css += \"@supports (\".concat(obj.supports, \") {\");\r\n  }\r\n\r\n  if (obj.media) {\r\n    css += \"@media \".concat(obj.media, \" {\");\r\n  }\r\n\r\n  var needLayer = typeof obj.layer !== \"undefined\";\r\n\r\n  if (needLayer) {\r\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\r\n  }\r\n\r\n  css += obj.css;\r\n\r\n  if (needLayer) {\r\n    css += \"}\";\r\n  }\r\n\r\n  if (obj.media) {\r\n    css += \"}\";\r\n  }\r\n\r\n  if (obj.supports) {\r\n    css += \"}\";\r\n  }\r\n\r\n  var sourceMap = obj.sourceMap;\r\n\r\n  if (sourceMap && typeof btoa !== \"undefined\") {\r\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\r\n  } // For old IE\r\n\r\n  /* istanbul ignore if  */\r\n\r\n\r\n  options.styleTagTransform(css, styleElement, options.options);\r\n}\r\n\r\nfunction removeStyleElement(styleElement) {\r\n  // istanbul ignore if\r\n  if (styleElement.parentNode === null) {\r\n    return false;\r\n  }\r\n\r\n  styleElement.parentNode.removeChild(styleElement);\r\n}\r\n/* istanbul ignore next  */\r\n\r\n\r\nfunction domAPI(options) {\r\n  var styleElement = options.insertStyleElement(options);\r\n  return {\r\n    update: function update(obj) {\r\n      apply(styleElement, options, obj);\r\n    },\r\n    remove: function remove() {\r\n      removeStyleElement(styleElement);\r\n    }\r\n  };\r\n}\r\n\r\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolistapp/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction styleTagTransform(css, styleElement) {\r\n  if (styleElement.styleSheet) {\r\n    styleElement.styleSheet.cssText = css;\r\n  } else {\r\n    while (styleElement.firstChild) {\r\n      styleElement.removeChild(styleElement.firstChild);\r\n    }\r\n\r\n    styleElement.appendChild(document.createTextNode(css));\r\n  }\r\n}\r\n\r\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolistapp/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/createNewProject.js":
/*!*********************************!*\
  !*** ./src/createNewProject.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"cancelCreation\": () => (/* binding */ cancelCreation),\n/* harmony export */   \"createCard\": () => (/* binding */ createCard),\n/* harmony export */   \"createCurrentProject\": () => (/* binding */ createCurrentProject),\n/* harmony export */   \"createCurrentProjectLink\": () => (/* binding */ createCurrentProjectLink),\n/* harmony export */   \"createNewProject\": () => (/* binding */ createNewProject),\n/* harmony export */   \"deleteCard\": () => (/* binding */ deleteCard),\n/* harmony export */   \"displayAllProjects\": () => (/* binding */ displayAllProjects),\n/* harmony export */   \"displayCreationForm\": () => (/* binding */ displayCreationForm),\n/* harmony export */   \"displayProjects\": () => (/* binding */ displayProjects),\n/* harmony export */   \"goTo\": () => (/* binding */ goTo),\n/* harmony export */   \"modifyCard\": () => (/* binding */ modifyCard),\n/* harmony export */   \"newTask\": () => (/* binding */ newTask),\n/* harmony export */   \"returnToProject\": () => (/* binding */ returnToProject),\n/* harmony export */   \"validateCreationKeyboard\": () => (/* binding */ validateCreationKeyboard),\n/* harmony export */   \"validateCreationMouse\": () => (/* binding */ validateCreationMouse),\n/* harmony export */   \"validateNewTask\": () => (/* binding */ validateNewTask)\n/* harmony export */ });\n\r\nclass Project {\r\n    constructor(id, title, description){\r\n        this.id = id;\r\n        this.title = title;\r\n        this.description = description;\r\n        this.dueDate = 'March 2023';\r\n        this.priority = 'Low';\r\n        this.tasks = [];\r\n    }\r\n    getId(){\r\n        return this.id;\r\n    }\r\n    getTitle(){\r\n        return this.title;\r\n    }\r\n    getDescription(){\r\n        return this.description;\r\n    }\r\n    getTasks(){\r\n        return this.tasks;\r\n    }\r\n}\r\n\r\nlet index = 0;\r\nconst allProjects = [];\r\nconst projectCreated = localStorage.getItem('projectCreated');\r\nif(projectCreated){\r\n    const numberOfProjects = localStorage.getItem('numberOfProjects');\r\n    index = Number(numberOfProjects)+1;\r\n    for(let i=0; i<=numberOfProjects; i++){\r\n        const projectId = localStorage.getItem(`id${i}`);\r\n        const projectTitle = localStorage.getItem(`title${i}`);\r\n        const projectDescription = localStorage.getItem(`description${i}`);\r\n        if(projectId){\r\n            const newProject = new Project(projectId, projectTitle, projectDescription);\r\n            allProjects.push(newProject);\r\n        }\r\n    }\r\n    \r\n}\r\nlet currentProjectOpen = undefined;\r\n\r\nfunction createNewProject(id, title, description){\r\n    const newProject = new Project(id, title, description);\r\n    if(!localStorage.getItem('projectCreated')){\r\n        localStorage.setItem('projectCreated', true);\r\n    }\r\n    allProjects.push(newProject);\r\n    localStorage.setItem(`id${id}`, newProject.id);\r\n    localStorage.setItem(`title${id}`, newProject.title);\r\n    localStorage.setItem(`description${id}`, newProject.description);\r\n    localStorage.setItem('numberOfProjects', id);\r\n    \r\n    \r\n    displayProjects();\r\n}\r\n\r\nfunction displayProjects(){\r\n    const allProjectsDiv = document.getElementById('allProjectsDiv');\r\n    if(allProjectsDiv!==null){\r\n        while(allProjectsDiv.firstChild){\r\n            allProjectsDiv.removeChild(allProjectsDiv.firstChild);\r\n        }\r\n    }\r\n    for(let project in allProjects){\r\n        if(allProjects[project]!=='projectDeleted'){\r\n            const projectId = localStorage.getItem(`id${project}`);\r\n            const projectTitle = localStorage.getItem(`title${project}`);\r\n            const projectDescription = localStorage.getItem(`description${project}`);\r\n            allProjectsDiv.appendChild(createCard(projectId, projectTitle, projectDescription));\r\n        }   \r\n    }\r\n}\r\n\r\nfunction createCard(projectId, projectTitle, projectDescription){\r\n\r\n    const projectDiv = document.createElement('div');\r\n    projectDiv.id = projectId;\r\n    projectDiv.className = 'card';\r\n\r\n    const title = document.createElement('h3');\r\n    title.innerHTML = 'Title : ' + projectTitle;\r\n    projectDiv.appendChild(title);\r\n\r\n    const description = document.createElement('p');\r\n    description.innerHTML = 'Description : ' + projectDescription;\r\n    projectDiv.appendChild(description);\r\n\r\n    const buttonsDiv = document.createElement('div');\r\n    buttonsDiv.className = 'buttonsDiv';\r\n\r\n    const goToBtn = document.createElement('button');\r\n    goToBtn.id = projectId;\r\n    goToBtn.className = 'goTo';\r\n    goToBtn.innerHTML = 'Go to project';\r\n    buttonsDiv.appendChild(goToBtn);\r\n    goToBtn.onclick = goTo;\r\n\r\n    const modifyBtn = document.createElement('button');\r\n    modifyBtn.id = projectId;\r\n    modifyBtn.className = 'modify';\r\n    modifyBtn.innerHTML = 'Modify details';\r\n    buttonsDiv.appendChild(modifyBtn);\r\n    modifyBtn.onclick = modifyCard;\r\n\r\n    const deleteBtn = document.createElement('button');\r\n    deleteBtn.id = projectId;\r\n    deleteBtn.className = 'delete';\r\n    deleteBtn.innerHTML = 'Delete project';\r\n    buttonsDiv.appendChild(deleteBtn);\r\n    deleteBtn.onclick = deleteCard;\r\n\r\n    projectDiv.appendChild(buttonsDiv);\r\n\r\n    return projectDiv;\r\n}\r\n\r\nfunction deleteCard(event){\r\n    const navLinks = document.getElementById('nav');\r\n    const deleteLink = document.getElementById(`link${event.target.id}`);\r\n    if(deleteLink!==null){\r\n        navLinks.removeChild(deleteLink);\r\n    }\r\n    const content = document.getElementById('content');\r\n    const currentProject = document.getElementById(`currentProject${event.target.id}`);\r\n    if(currentProject!==null){\r\n        content.removeChild(currentProject);\r\n    }\r\n    for(let project in allProjects){\r\n        if(allProjects[project].id == event.target.id){\r\n            allProjects.splice(project, 1);\r\n        }\r\n    }\r\n    const numberOfProjects = localStorage.getItem('numberOfProjects');\r\n    localStorage.setItem('numberOfProjects', numberOfProjects-1);\r\n    localStorage.removeItem(`id${event.target.id}`);\r\n    localStorage.removeItem(`title${event.target.id}`);\r\n    localStorage.removeItem(`description${event.target.id}`);\r\n    if(allProjects.length===0){\r\n        localStorage.removeItem(`projectCreated`);\r\n    }\r\n    displayProjects();\r\n}\r\n\r\nfunction modifyCard(event){\r\n    const modificationDiv = document.getElementById('modificationDiv');\r\n    modificationDiv.style.display = 'flex';\r\n}\r\n\r\nfunction cancelCreation(){\r\n    const newProjectInfoDiv = document.getElementById('newProjectInfoDiv');\r\n    newProjectInfoDiv.style.display = 'none';\r\n}\r\n\r\nfunction validateCreationMouse(){\r\n    const newProjectInfoDiv = document.getElementById('newProjectInfoDiv');\r\n    newProjectInfoDiv.style.display = 'none';\r\n    const titleInput = document.getElementById('titleInput').value;\r\n    const descriptionArea = document.getElementById('description').value;\r\n    createNewProject(index, titleInput, descriptionArea);\r\n    index++;\r\n}\r\n\r\nfunction validateCreationKeyboard(event){\r\n    if(event.key === 'Enter'){\r\n        const newProjectInfoDiv = document.getElementById('newProjectInfoDiv');\r\n        newProjectInfoDiv.style.display = 'none';\r\n        const titleInput = document.getElementById('titleInput').value;\r\n        const descriptionArea = document.getElementById('description').value;\r\n        createNewProject(index, titleInput, descriptionArea);\r\n        index++;\r\n    }\r\n}\r\n\r\nfunction displayCreationForm(){\r\n    const newProjectInfoDiv = document.getElementById('newProjectInfoDiv');\r\n    newProjectInfoDiv.style.display = 'flex';\r\n    const titleInput = document.getElementById('titleInput');\r\n    titleInput.value = '';\r\n    const descriptionArea = document.getElementById('description');\r\n    descriptionArea.value = '';\r\n}\r\n\r\nfunction goTo(event){\r\n    const newProjectDiv = document.getElementById('newProjectDiv');\r\n    newProjectDiv.style.display = 'none';\r\n    const allProjectsDiv = document.getElementById('allProjectsDiv');\r\n    allProjectsDiv.style.display = 'none';\r\n    const projectLink = document.getElementById(`link${event.target.id}`);\r\n    if(projectLink===null){\r\n        createCurrentProjectLink(event.target.id);\r\n    }\r\n    const currentProject = document.getElementById(`currentProject${event.target.id}`);\r\n    if(currentProject===null){\r\n        createCurrentProject(event.target.id);\r\n    }\r\n    else{\r\n        currentProject.style.display = 'grid';\r\n        currentProjectOpen = event.target.id;\r\n    }\r\n}\r\n\r\nfunction createCurrentProject(projectId){\r\n    const content = document.getElementById('content');\r\n    const currentProject = document.createElement('div');\r\n    currentProject.id = 'currentProject'+projectId;\r\n    currentProject.className = 'projectPages';\r\n    const addTask = document.createElement('button');\r\n    addTask.innerHTML = 'Add a task';\r\n    addTask.onclick = newTask;\r\n    addTask.id = projectId;\r\n    currentProject.appendChild(addTask);\r\n    content.appendChild(currentProject);\r\n    const currentProjectTitle = document.createElement('h3');\r\n    currentProjectTitle.id = projectId;\r\n    currentProjectTitle.innerHTML = 'Title : ' + allProjects[projectId].getTitle();\r\n    const currentProjectDescription = document.createElement('p');\r\n    currentProjectDescription.id = projectId;\r\n    currentProjectDescription.innerHTML = 'Description : ' + allProjects[projectId].getDescription();\r\n    currentProject.appendChild(currentProjectTitle);\r\n    currentProject.appendChild(currentProjectDescription);\r\n    const tasks = allProjects[projectId].getTasks();\r\n    if(tasks.length===0){\r\n        const para = document.createElement('p');\r\n        para.id = 'para'+projectId;\r\n        para.innerHTML = 'No tasks yet.';\r\n        currentProject.appendChild(para);\r\n    }\r\n    else{\r\n        const currentProjectTasks = document.createElement('ol');\r\n        for(let i=0; i<tasks.length; i++){\r\n            const list = document.createElement('li');\r\n            list.innerHTML = tasks[i];\r\n            currentProjectTasks.appendChild(list);\r\n        }\r\n        currentProject.appendChild(currentProjectTasks);\r\n    }\r\n    currentProject.style.display = 'grid';\r\n    currentProjectOpen = projectId;\r\n}\r\n\r\nfunction newTask(event){\r\n    const projectId = event.target.id;\r\n    const para = document.getElementById(`para${event.target.id}`);\r\n    if(para.innerHTML === 'No tasks yet.'){\r\n        para.innerHTML = '';\r\n        const ol = document.createElement('ol');\r\n        ol.id = 'list'+event.target.id;\r\n        const li = document.createElement('li');\r\n        li.id = 'newTask';\r\n        const text = document.createElement('input');\r\n        text.id = 'newInput';\r\n        text.onkeyup = validateNewTask;\r\n        para.appendChild(ol);\r\n        ol.appendChild(li);\r\n        li.appendChild(text);\r\n    }\r\n    else{\r\n        const ol = document.getElementById(`list${event.target.id}`);\r\n        const li = document.createElement('li');\r\n        li.id = 'newTask';\r\n        const text = document.createElement('input');\r\n        text.id = 'newInput';\r\n        text.onkeyup = validateNewTask;\r\n        ol.appendChild(li);\r\n        li.appendChild(text);\r\n    }\r\n}\r\n\r\nfunction validateNewTask(event){\r\n    let projectId = event.target.parentElement.parentElement.id;\r\n    projectId = projectId.split('');\r\n    projectId.splice(0, 4);\r\n    projectId = projectId.join('');\r\n    if(event.key==='Enter'){\r\n        const newTask = event.target.value;\r\n        const li = document.getElementById('newTask');\r\n        const input = document.getElementById('newInput');\r\n        li.removeChild(input);\r\n        li.innerHTML = newTask;\r\n        li.id = 'taskValid';\r\n        allProjects[projectId].tasks.push(newTask);\r\n    }\r\n}\r\n\r\nfunction createCurrentProjectLink(id){\r\n    \r\n    const navLinks = document.getElementById('nav');\r\n    const newLink = document.createElement('div');\r\n    newLink.id = 'link'+id;\r\n    newLink.className = 'links';\r\n    newLink.innerHTML = allProjects[id].getTitle();\r\n    newLink.onclick = returnToProject;\r\n    navLinks.appendChild(newLink);\r\n}\r\n\r\nfunction displayAllProjects(){\r\n    for(let i=0; i<allProjects.length;i++){\r\n        const currentProject = document.getElementById(`currentProject${i}`);\r\n        if(currentProject!==null){\r\n            currentProject.style.display = 'none';\r\n        }\r\n    }\r\n    const newProjectDiv = document.getElementById('newProjectDiv');\r\n    newProjectDiv.style.display = 'flex';\r\n    const allProjectsDiv = document.getElementById('allProjectsDiv');\r\n    allProjectsDiv.style.display = 'grid';\r\n}\r\n\r\nfunction returnToProject(event){\r\n    let linkID = event.target.id;\r\n    linkID = linkID.split('');\r\n    linkID.splice(0, 4);\r\n    linkID = linkID.join('');\r\n    if(currentProjectOpen!==undefined){\r\n        const projectToClose = document.getElementById(`currentProject${currentProjectOpen}`);\r\n        projectToClose.style.display = 'none';\r\n    }\r\n    const currentProject = document.getElementById(`currentProject${linkID}`);\r\n    currentProject.style.display = 'grid';\r\n    currentProjectOpen = linkID;\r\n    const newProjectDiv = document.getElementById('newProjectDiv');\r\n    newProjectDiv.style.display = 'none';\r\n    const allProjectsDiv = document.getElementById('allProjectsDiv');\r\n    allProjectsDiv.style.display = 'none';\r\n}\r\n\n\n//# sourceURL=webpack://todolistapp/./src/createNewProject.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _todoLogo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoLogo.png */ \"./src/todoLogo.png\");\n/* harmony import */ var _createNewProject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createNewProject.js */ \"./src/createNewProject.js\");\n\r\n\r\n\r\n\r\nfunction createTemplate(){\r\n    const content = document.getElementById('content');\r\n\r\n    const header = document.createElement('header');\r\n    header.id = 'header';\r\n\r\n    const logo = new Image();\r\n    logo.id = 'logo';\r\n    logo.src = _todoLogo_png__WEBPACK_IMPORTED_MODULE_1__;\r\n    header.appendChild(logo);\r\n\r\n    const name = document.createElement('span');\r\n    name.id = 'appName';\r\n    name.innerHTML = 'My Todo App'.toUpperCase();\r\n    header.appendChild(name);\r\n\r\n    content.appendChild(header);\r\n\r\n    const nav = document.createElement('nav');\r\n    nav.id = 'nav';\r\n    const allProjects = document.createElement('div');\r\n    allProjects.id = 'allNav';\r\n    allProjects.className = 'links';\r\n    allProjects.innerHTML = 'All Projects';\r\n    allProjects.onclick = _createNewProject_js__WEBPACK_IMPORTED_MODULE_2__.displayAllProjects;\r\n    nav.appendChild(allProjects);\r\n\r\n    content.appendChild(nav);\r\n\r\n    const newProjectDiv = document.createElement('div');\r\n    newProjectDiv.id = 'newProjectDiv';\r\n\r\n    const newProjectButton = document.createElement('button');\r\n    newProjectButton.id = 'newProjectButton';\r\n    newProjectButton.innerHTML = 'New Project';\r\n    newProjectButton.onclick = _createNewProject_js__WEBPACK_IMPORTED_MODULE_2__.displayCreationForm;\r\n    newProjectDiv.appendChild(newProjectButton);\r\n\r\n    content.appendChild(newProjectDiv);\r\n\r\n    const allProjectsDiv = document.createElement('div');\r\n    allProjectsDiv.id = 'allProjectsDiv';\r\n\r\n    content.appendChild(allProjectsDiv);\r\n\r\n    const newProjectInfoDiv = document.createElement('div');\r\n    newProjectInfoDiv.id = 'newProjectInfoDiv';\r\n    const newProjectInfoForm = document.createElement('div');\r\n    newProjectInfoForm.id = 'newProjectInfoForm';\r\n    const titleInput = document.createElement('input');\r\n    titleInput.type = 'text';\r\n    titleInput.id = 'titleInput';\r\n    const titleLabel = document.createElement('label');\r\n    titleLabel.innerHTML = 'Title';\r\n    titleLabel.htmlFor = 'titletitleInput';\r\n    const descriptionArea = document.createElement('textarea');\r\n    descriptionArea.id = 'description';\r\n    const descriptionLabel = document.createElement('label');\r\n    descriptionLabel.innerHTML = 'Description';\r\n    descriptionLabel.htmlFor = 'description';\r\n    const validate = document.createElement('button');\r\n    validate.id = 'validate';\r\n    validate.innerHTML = 'Validate';\r\n    validate.onclick = _createNewProject_js__WEBPACK_IMPORTED_MODULE_2__.validateCreationMouse;\r\n    newProjectInfoForm.onkeyup = _createNewProject_js__WEBPACK_IMPORTED_MODULE_2__.validateCreationKeyboard;\r\n    const cancel = document.createElement('button');\r\n    cancel.id = 'cancel';\r\n    cancel.innerHTML = 'Cancel';\r\n    cancel.onclick = _createNewProject_js__WEBPACK_IMPORTED_MODULE_2__.cancelCreation;\r\n\r\n    content.appendChild(newProjectInfoDiv);\r\n    newProjectInfoDiv.appendChild(newProjectInfoForm);\r\n    newProjectInfoForm.appendChild(titleLabel);\r\n    newProjectInfoForm.appendChild(titleInput);\r\n    newProjectInfoForm.appendChild(descriptionLabel);\r\n    newProjectInfoForm.appendChild(descriptionArea);\r\n    newProjectInfoForm.appendChild(validate);\r\n    newProjectInfoForm.appendChild(cancel);\r\n\r\n    return content;\r\n}\r\n\r\ndocument.body.appendChild(createTemplate());\r\n\r\n(0,_createNewProject_js__WEBPACK_IMPORTED_MODULE_2__.displayProjects)();\n\n//# sourceURL=webpack://todolistapp/./src/index.js?");

/***/ }),

/***/ "./src/LibreBaskerville-Regular.ttf":
/*!******************************************!*\
  !*** ./src/LibreBaskerville-Regular.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"715e9cea90f54d5a4093.ttf\";\n\n//# sourceURL=webpack://todolistapp/./src/LibreBaskerville-Regular.ttf?");

/***/ }),

/***/ "./src/todoLogo.png":
/*!**************************!*\
  !*** ./src/todoLogo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c5eb10ec2c7b9149200c.png\";\n\n//# sourceURL=webpack://todolistapp/./src/todoLogo.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;