/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./LibreBaskerville-Regular.ttf */ "./src/LibreBaskerville-Regular.ttf"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\\n    font-family: LibreBaskervilleRegular;\\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\\n}\\n\\n* {\\n    margin: 0;\\n    padding: 0;\\n    font-family: LibreBaskervilleRegular;\\n}\\n\\n#header{\\n    background-color: aqua;\\n    display: flex;\\n    align-items: center;\\n    padding-left: 15px;\\n    padding-right: 15px; \\n    column-gap: 15px;\\n    height: 75px;\\n    box-shadow: 0px 20px 5px 0px;\\n    border-bottom: 1px solid rgb(156, 156, 156);\\n}\\n\\n#content{\\n    height: 100%;\\n}\\n\\n#logo{\\n    position: relative;\\n    height: 60%;\\n    width: auto;\\n}\\n\\n#appName{\\n    font-size: 2rem;\\n}\\n\\n#nav{\\n    background-color: aquamarine;\\n    height: 5vh;\\n    display: flex;\\n    align-items: flex-end;\\n    column-gap: 15px;\\n    padding-left: 15px;\\n    padding-right: 15px;\\n    border-bottom: 1px solid rgb(156, 156, 156);\\n}\\n\\n.links {\\n    padding-bottom: 5px;\\n}\\n\\n.links:hover{\\n    padding-bottom: 2px;\\n    border-bottom: 3px solid rgb(29, 134, 25);\\n}\\n\\n#newProjectDiv{\\n    height: 5vh;\\n    display: flex;\\n    align-items: center;\\n    padding: 15px;\\n}\\n\\n#newProjectButton{\\n    width: 100%;\\n    height: 30px;\\n    border-radius: 10px;\\n    border: none;\\n    background-color: rgb(127, 127, 250);\\n    box-shadow: 0px 2px 2px 0px;\\n    font-size: 0.9rem;\\n}\\n\\n#allProjectsDiv{\\n    position: relative;\\n    height: 100%;\\n    display: grid;\\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\\n    grid-auto-rows: 300px;\\n    row-gap: 15px;\\n    column-gap: 15px;\\n    padding-left: 15px;\\n    padding-right: 15px;\\n}\\n\\n.card{\\n    position: relative;\\n    background-color: bisque;\\n    border-radius: 10px;\\n    box-shadow: 0px 2px 2px 0px;\\n    display: grid;\\n    padding: 15px;\\n}\\n\\n.buttonsDiv{\\n    display: grid;\\n    grid-template-columns: repeat(3, 1fr);\\n    column-gap: 15px;\\n    row-gap: 15px;\\n}\\n\\n.buttonsDiv button{\\n    border-radius: 5px;\\n    border: none;\\n    box-shadow: 0px 2px 2px 0px;\\n    font-size: 0.9rem;\\n    height: 50%;\\n    align-self: end;\\n}\\n\\n.goTo{\\n    background-color: rgb(151, 240, 151);\\n}\\n\\n.modify{\\n    background-color: rgb(127, 127, 250);\\n}\\n\\n.delete{\\n    background-color: rgb(223, 83, 83);\\n}\\n\\n#newProjectInfoDiv{\\n    display: none;\\n    justify-content: center;\\n    align-items: center;\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    background-color: azure;\\n    height: 100%;\\n    width: 100%;\\n}\\n\\n#newProjectInfoForm{\\n    height: 50vh;\\n    width: 80vw;\\n    background-color: bisque;\\n    display: grid;\\n    justify-content: center;\\n    grid-template-columns: 1fr 7fr;\\n    column-gap: 15px;\\n    row-gap: 15px;\\n    padding: 15px;\\n    font-size: 1rem;\\n    border-radius: 5px;\\n    box-shadow: 0px 2px 2px 0px;\\n}\\n\\n#newProjectInfoForm label {\\n    align-self: center;\\n}\\n\\n#newProjectInfoForm button {\\n    position: relative;\\n    height: 70%;\\n    width: 100%;\\n    align-self: center;\\n}\\n\\n#newProjectInfoForm button, input, textarea{\\n    position: relative;\\n    border-radius: 5px;\\n    border: 1px solid black;\\n    width: 100%;\\n}\\n\\n#validate, #cancel{\\n    grid-column: 2/3;\\n}\\n\\n#validate {\\n    background-color: rgb(146, 223, 122);\\n}\\n\\n#cancel {\\n    background-color: rgb(224, 83, 83);\\n}\\n\\n.projectPages, ol{\\n    padding: 15px;\\n    row-gap: 15px;\\n}", ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolistapp/./src/styles.css?./node_modules/css-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        eval(
          '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += "}";\n      }\n\n      if (item[2]) {\n        content += "}";\n      }\n\n      if (item[4]) {\n        content += "}";\n      }\n\n      return content;\n    }).join("");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todolistapp/./node_modules/css-loader/dist/runtime/api.js?'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
      /*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
      /***/ (module) => {
        eval(
          '\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^[\'"].*[\'"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/["\'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return "\\"".concat(url.replace(/"/g, \'\\\\"\').replace(/\\n/g, "\\\\n"), "\\"");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://todolistapp/./node_modules/css-loader/dist/runtime/getUrl.js?'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
      /***/ (module) => {
        eval(
          "\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolistapp/./node_modules/css-loader/dist/runtime/noSourceMaps.js?"
        );

        /***/
      },

    /***/ "./src/styles.css":
      /*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://todolistapp/./src/styles.css?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolistapp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolistapp/./node_modules/style-loader/dist/runtime/insertBySelector.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolistapp/./node_modules/style-loader/dist/runtime/insertStyleElement.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolistapp/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n\n  var needLayer = typeof obj.layer !== "undefined";\n\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += "}";\n  }\n\n  if (obj.media) {\n    css += "}";\n  }\n\n  if (obj.supports) {\n    css += "}";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolistapp/./node_modules/style-loader/dist/runtime/styleDomAPI.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        eval(
          "\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolistapp/./node_modules/style-loader/dist/runtime/styleTagTransform.js?"
        );

        /***/
      },

    /***/ "./src/createNewProject.js":
      /*!*********************************!*\
  !*** ./src/createNewProject.js ***!
  \*********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Project": () => (/* binding */ Project),\n/* harmony export */   "cancelCreation": () => (/* binding */ cancelCreation),\n/* harmony export */   "createCard": () => (/* binding */ createCard),\n/* harmony export */   "createCurrentProject": () => (/* binding */ createCurrentProject),\n/* harmony export */   "createCurrentProjectLink": () => (/* binding */ createCurrentProjectLink),\n/* harmony export */   "createNewProject": () => (/* binding */ createNewProject),\n/* harmony export */   "deleteCard": () => (/* binding */ deleteCard),\n/* harmony export */   "displayAllProjects": () => (/* binding */ displayAllProjects),\n/* harmony export */   "displayCreationForm": () => (/* binding */ displayCreationForm),\n/* harmony export */   "displayProjects": () => (/* binding */ displayProjects),\n/* harmony export */   "goTo": () => (/* binding */ goTo),\n/* harmony export */   "modifyCard": () => (/* binding */ modifyCard),\n/* harmony export */   "newTask": () => (/* binding */ newTask),\n/* harmony export */   "returnToProject": () => (/* binding */ returnToProject),\n/* harmony export */   "validateCreationKeyboard": () => (/* binding */ validateCreationKeyboard),\n/* harmony export */   "validateCreationMouse": () => (/* binding */ validateCreationMouse),\n/* harmony export */   "validateNewTask": () => (/* binding */ validateNewTask)\n/* harmony export */ });\nclass Project {\n    constructor(id, title, description) {\n      this.id = id;\n      this.title = title;\n      this.description = description;\n      this.dueDate = "March 2023";\n      this.priority = "Low";\n      this.tasks = [];\n    }\n    getId() {\n      return this.id;\n    }\n    getTitle() {\n      return this.title;\n    }\n    getDescription() {\n      return this.description;\n    }\n    getTasks() {\n      return this.tasks;\n    }\n  }\n  \n  let index = 0;\n  let allProjects = [];\n  let currentProjectOpen = null;\n  \n  function createNewProject(id, title, description) {\n    const newProject = new Project(String(id), title, description);\n    if (!localStorage.getItem("projectCreated")) {\n      localStorage.setItem("projectCreated", true);\n    }\n    allProjects.push(newProject);\n    localStorage.setItem(`id${id}`, newProject.id);\n    localStorage.setItem(`title${id}`, newProject.title);\n    localStorage.setItem(`description${id}`, newProject.description);\n    let numberOfProjects = Number(localStorage.getItem("numberOfProjects"));\n    if (\n      numberOfProjects === null ||\n      numberOfProjects === 0 ||\n      numberOfProjects === undefined\n    ) {\n      localStorage.setItem("numberOfProjects", 1);\n    } else {\n      localStorage.setItem("numberOfProjects", numberOfProjects + 1);\n    }\n    displayProjects();\n  }\n  \n  function displayProjects() {\n    const projectCreated = localStorage.getItem("projectCreated");\n    if (projectCreated && allProjects.length === 0) {\n      const numberOfProjects = localStorage.getItem("numberOfProjects");\n  \n      for (let project in localStorage) {\n        if (project[0] === "i" && project[1] === "d") {\n          const projectId = localStorage.getItem(project);\n          const projectTitle = localStorage.getItem(`title${projectId}`);\n          const projectDescription = localStorage.getItem(\n            `description${projectId}`\n          );\n          const newProject = new Project(\n            projectId,\n            projectTitle,\n            projectDescription\n          );\n          allProjects.push(newProject);\n          let tasks = localStorage.getItem(`tasks${projectId}`);\n          if (tasks) {\n            tasks = tasks.split(",");\n          }\n          if (tasks) {\n            for (let task in tasks) {\n              for (let project in allProjects) {\n                if (allProjects[project].id === projectId) {\n                  allProjects[project].tasks.push(tasks[task]);\n                }\n              }\n            }\n          }\n        }\n      }\n      allProjects = allProjects.sort((a, b) => {\n        if (Number(a.id) > Number(b.id)) {\n          return 1;\n        } else if (Number(a.id) < Number(b.id)) {\n          return -1;\n        }\n      });\n      index = Number(allProjects[allProjects.length - 1].id) + 1;\n    } else if (projectCreated && allProjects.length !== 0) {\n      allProjects = allProjects.sort((a, b) => {\n        if (Number(a.id) > Number(b.id)) {\n          return 1;\n        } else if (Number(a.id) < Number(b.id)) {\n          return -1;\n        }\n      });\n      index = Number(allProjects[allProjects.length - 1].id) + 1;\n    }\n    const allProjectsDiv = document.getElementById("allProjectsDiv");\n    if (allProjectsDiv !== null) {\n      while (allProjectsDiv.firstChild) {\n        allProjectsDiv.removeChild(allProjectsDiv.firstChild);\n      }\n    }\n    for (let project in allProjects) {\n      const projectId = allProjects[project].getId();\n      const projectTitle = allProjects[project].getTitle();\n      const projectDescription = allProjects[project].getDescription();\n      allProjectsDiv.appendChild(\n        createCard(projectId, projectTitle, projectDescription)\n      );\n    }\n  }\n  \n  function createCard(projectId, projectTitle, projectDescription) {\n    const projectDiv = document.createElement("div");\n    projectDiv.id = projectId;\n    projectDiv.className = "card";\n  \n    const title = document.createElement("h3");\n    title.innerHTML = "Title : " + projectTitle;\n    projectDiv.appendChild(title);\n  \n    const description = document.createElement("p");\n    description.innerHTML = "Description : " + projectDescription;\n    projectDiv.appendChild(description);\n  \n    const buttonsDiv = document.createElement("div");\n    buttonsDiv.className = "buttonsDiv";\n  \n    const goToBtn = document.createElement("button");\n    goToBtn.id = projectId;\n    goToBtn.className = "goTo";\n    goToBtn.innerHTML = "Go to project";\n    buttonsDiv.appendChild(goToBtn);\n    goToBtn.onclick = goTo;\n  \n    const modifyBtn = document.createElement("button");\n    modifyBtn.id = projectId;\n    modifyBtn.className = "modify";\n    modifyBtn.innerHTML = "Modify details";\n    buttonsDiv.appendChild(modifyBtn);\n    modifyBtn.onclick = modifyCard;\n  \n    const deleteBtn = document.createElement("button");\n    deleteBtn.id = projectId;\n    deleteBtn.className = "delete";\n    deleteBtn.innerHTML = "Delete project";\n    buttonsDiv.appendChild(deleteBtn);\n    deleteBtn.onclick = deleteCard;\n  \n    projectDiv.appendChild(buttonsDiv);\n  \n    return projectDiv;\n  }\n  \n  function deleteCard(event) {\n    const navLinks = document.getElementById("nav");\n    const deleteLink = document.getElementById(`link${event.target.id}`);\n    if (deleteLink !== null) {\n      navLinks.removeChild(deleteLink);\n    }\n    const content = document.getElementById("content");\n    const currentProject = document.getElementById(\n      `currentProject${event.target.id}`\n    );\n    if (currentProject !== null) {\n      content.removeChild(currentProject);\n    }\n    for (let project in allProjects) {\n      if (allProjects[project].id == event.target.id) {\n        allProjects.splice(project, 1);\n      }\n    }\n    let numberOfProjects = Number(localStorage.getItem("numberOfProjects"));\n    localStorage.setItem("numberOfProjects", numberOfProjects - 1);\n    localStorage.removeItem(`id${event.target.id}`);\n    localStorage.removeItem(`title${event.target.id}`);\n    localStorage.removeItem(`description${event.target.id}`);\n    localStorage.removeItem(`tasks${event.target.id}`);\n    if (allProjects.length === 0) {\n      localStorage.removeItem(`projectCreated`);\n    }\n    displayProjects();\n  }\n  \n  function modifyCard(event) {\n    const modificationDiv = document.getElementById("modificationDiv");\n    modificationDiv.style.display = "flex";\n  }\n  \n  function cancelCreation() {\n    const newProjectInfoDiv = document.getElementById("newProjectInfoDiv");\n    newProjectInfoDiv.style.display = "none";\n  }\n  \n  function validateCreationMouse() {\n    const newProjectInfoDiv = document.getElementById("newProjectInfoDiv");\n    newProjectInfoDiv.style.display = "none";\n    const titleInput = document.getElementById("titleInput").value;\n    const descriptionArea = document.getElementById("description").value;\n    createNewProject(index, titleInput, descriptionArea);\n    index++;\n  }\n  \n  function validateCreationKeyboard(event) {\n    if (event.key === "Enter") {\n      const newProjectInfoDiv = document.getElementById("newProjectInfoDiv");\n      newProjectInfoDiv.style.display = "none";\n      const titleInput = document.getElementById("titleInput").value;\n      const descriptionArea = document.getElementById("description").value;\n      createNewProject(index, titleInput, descriptionArea);\n      index++;\n    }\n  }\n  \n  function displayCreationForm() {\n    const newProjectInfoDiv = document.getElementById("newProjectInfoDiv");\n    newProjectInfoDiv.style.display = "flex";\n    const titleInput = document.getElementById("titleInput");\n    titleInput.value = "";\n    const descriptionArea = document.getElementById("description");\n    descriptionArea.value = "";\n  }\n  \n  function goTo(event) {\n    const newProjectDiv = document.getElementById("newProjectDiv");\n    newProjectDiv.style.display = "none";\n    const allProjectsDiv = document.getElementById("allProjectsDiv");\n    allProjectsDiv.style.display = "none";\n    const projectLink = document.getElementById(`link${event.target.id}`);\n    if (projectLink === null) {\n      createCurrentProjectLink(event.target.id);\n    }\n    const currentProject = document.getElementById(\n      `currentProject${event.target.id}`\n    );\n    if (currentProject === null) {\n      createCurrentProject(event.target.id);\n    } else {\n      currentProject.style.display = "grid";\n      currentProjectOpen = event.target.id;\n    }\n  }\n  \n  function createCurrentProjectLink(id) {\n    for (let project in allProjects) {\n      if (id === allProjects[project].id) {\n        const navLinks = document.getElementById("nav");\n        const newLink = document.createElement("div");\n        newLink.id = "link" + allProjects[project].id;\n        newLink.className = "links";\n        newLink.innerHTML = allProjects[project].title;\n        newLink.onclick = returnToProject;\n        navLinks.appendChild(newLink);\n      }\n    }\n  }\n  \n  function createCurrentProject(projectId) {\n    for (let project in allProjects) {\n      if (projectId === allProjects[project].id) {\n        const content = document.getElementById("content");\n        const currentProject = document.createElement("div");\n        currentProject.id = "currentProject" + allProjects[project].id;\n        currentProject.className = "projectPages";\n        const addTask = document.createElement("button");\n        addTask.innerHTML = "Add a task";\n        addTask.onclick = newTask;\n        addTask.id = allProjects[project].id;\n        currentProject.appendChild(addTask);\n        content.appendChild(currentProject);\n        const currentProjectTitle = document.createElement("h3");\n        currentProjectTitle.id = allProjects[project].id;\n        currentProjectTitle.innerHTML =\n          "Title : " + allProjects[project].getTitle();\n        const currentProjectDescription = document.createElement("p");\n        currentProjectDescription.id = allProjects[project].id;\n        currentProjectDescription.innerHTML =\n          "Description : " + allProjects[project].getDescription();\n        currentProject.appendChild(currentProjectTitle);\n        currentProject.appendChild(currentProjectDescription);\n        const tasks = allProjects[project].getTasks();\n        if (tasks.length === 0) {\n          const para = document.createElement("p");\n          para.id = "para" + allProjects[project].id;\n          para.innerHTML = "No tasks yet.";\n          currentProject.appendChild(para);\n        } else {\n          const para = document.createElement("p");\n          para.id = "para" + allProjects[project].id;\n          const currentProjectTasks = document.createElement("ol");\n          currentProjectTasks.id = "list" + projectId;\n          for (let i = 0; i < tasks.length; i++) {\n            const list = document.createElement("li");\n            list.innerHTML = tasks[i];\n            currentProjectTasks.appendChild(list);\n          }\n          para.appendChild(currentProjectTasks);\n          currentProject.appendChild(para);\n        }\n        currentProject.style.display = "grid";\n        currentProjectOpen = allProjects[project].id;\n      }\n    }\n  }\n  \n  function newTask(event) {\n    const projectId = event.target.id;\n    const para = document.getElementById(`para${event.target.id}`);\n    if (para.innerHTML === "No tasks yet.") {\n      para.innerHTML = "";\n      const ol = document.createElement("ol");\n      ol.id = "list" + event.target.id;\n      const li = document.createElement("li");\n      li.id = "newTask";\n      const text = document.createElement("input");\n      text.id = "newInput";\n      text.onkeyup = validateNewTask;\n      para.appendChild(ol);\n      ol.appendChild(li);\n      li.appendChild(text);\n    } else {\n      const ol = document.getElementById(`list${event.target.id}`);\n      const li = document.createElement("li");\n      li.id = "newTask";\n      const text = document.createElement("input");\n      text.id = "newInput";\n      text.onkeyup = validateNewTask;\n      ol.appendChild(li);\n      li.appendChild(text);\n    }\n  }\n  \n  function validateNewTask(event) {\n    let projectId = event.target.parentElement.parentElement.id;\n    projectId = projectId.split("");\n    projectId.splice(0, 4);\n    projectId = projectId.join("");\n    if (event.key === "Enter") {\n      const newTask = event.target.value;\n      const li = document.getElementById("newTask");\n      const input = document.getElementById("newInput");\n      li.removeChild(input);\n      li.innerHTML = newTask;\n      li.id = "taskValid";\n      const tasks = localStorage.getItem(`tasks${projectId}`);\n      if (tasks) {\n        localStorage.setItem(`tasks${projectId}`, [tasks, newTask]);\n      } else {\n        localStorage.setItem(`tasks${projectId}`, [newTask]);\n      }\n      for (let project in allProjects) {\n        if (projectId === allProjects[project].id) {\n          allProjects[project].tasks.push(newTask);\n        }\n      }\n    }\n  }\n  \n  function displayAllProjects() {\n    for (let i = 0; i < allProjects.length; i++) {\n      const currentProject = document.getElementById(\n        `currentProject${allProjects[i].id}`\n      );\n      if (currentProject !== null) {\n        currentProject.style.display = "none";\n      }\n    }\n    const newProjectDiv = document.getElementById("newProjectDiv");\n    newProjectDiv.style.display = "flex";\n    const allProjectsDiv = document.getElementById("allProjectsDiv");\n    allProjectsDiv.style.display = "grid";\n    currentProjectOpen = null;\n  }\n  \n  function returnToProject(event) {\n    let linkID = event.target.id;\n    linkID = linkID.split("");\n    linkID.splice(0, 4);\n    linkID = linkID.join("");\n    if (currentProjectOpen !== null) {\n      const projectToClose = document.getElementById(\n        `currentProject${currentProjectOpen}`\n      );\n      projectToClose.style.display = "none";\n    }\n    const currentProject = document.getElementById(`currentProject${linkID}`);\n    currentProject.style.display = "grid";\n    currentProjectOpen = linkID;\n    const newProjectDiv = document.getElementById("newProjectDiv");\n    newProjectDiv.style.display = "none";\n    const allProjectsDiv = document.getElementById("allProjectsDiv");\n    allProjectsDiv.style.display = "none";\n    currentProjectOpen = event.target.id;\n  }\n  \n\n//# sourceURL=webpack://todolistapp/./src/createNewProject.js?'
        );

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");\n/* harmony import */ var _todoLogo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoLogo.png */ "./src/todoLogo.png");\n/* harmony import */ var _createNewProject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createNewProject.js */ "./src/createNewProject.js");\n\n\n\n\nfunction createTemplate() {\n  const content = document.getElementById("content");\n\n  const header = document.createElement("header");\n  header.id = "header";\n\n  const logo = new Image();\n  logo.id = "logo";\n  logo.src = _todoLogo_png__WEBPACK_IMPORTED_MODULE_1__;\n  header.appendChild(logo);\n\n  const name = document.createElement("span");\n  name.id = "appName";\n  name.innerHTML = "My Todo App".toUpperCase();\n  header.appendChild(name);\n\n  content.appendChild(header);\n\n  const nav = document.createElement("nav");\n  nav.id = "nav";\n  const allProjects = document.createElement("div");\n  allProjects.id = "allNav";\n  allProjects.className = "links";\n  allProjects.innerHTML = "All Projects";\n  allProjects.onclick = _createNewProject_js__WEBPACK_IMPORTED_MODULE_2__.displayAllProjects;\n  nav.appendChild(allProjects);\n\n  content.appendChild(nav);\n\n  const newProjectDiv = document.createElement("div");\n  newProjectDiv.id = "newProjectDiv";\n\n  const newProjectButton = document.createElement("button");\n  newProjectButton.id = "newProjectButton";\n  newProjectButton.innerHTML = "New Project";\n  newProjectButton.onclick = _createNewProject_js__WEBPACK_IMPORTED_MODULE_2__.displayCreationForm;\n  newProjectDiv.appendChild(newProjectButton);\n\n  content.appendChild(newProjectDiv);\n\n  const allProjectsDiv = document.createElement("div");\n  allProjectsDiv.id = "allProjectsDiv";\n\n  content.appendChild(allProjectsDiv);\n\n  const newProjectInfoDiv = document.createElement("div");\n  newProjectInfoDiv.id = "newProjectInfoDiv";\n  const newProjectInfoForm = document.createElement("div");\n  newProjectInfoForm.id = "newProjectInfoForm";\n  const titleInput = document.createElement("input");\n  titleInput.type = "text";\n  titleInput.id = "titleInput";\n  const titleLabel = document.createElement("label");\n  titleLabel.innerHTML = "Title";\n  titleLabel.htmlFor = "titletitleInput";\n  const descriptionArea = document.createElement("textarea");\n  descriptionArea.id = "description";\n  const descriptionLabel = document.createElement("label");\n  descriptionLabel.innerHTML = "Description";\n  descriptionLabel.htmlFor = "description";\n  const validate = document.createElement("button");\n  validate.id = "validate";\n  validate.innerHTML = "Validate";\n  validate.onclick = _createNewProject_js__WEBPACK_IMPORTED_MODULE_2__.validateCreationMouse;\n  newProjectInfoForm.onkeyup = _createNewProject_js__WEBPACK_IMPORTED_MODULE_2__.validateCreationKeyboard;\n  const cancel = document.createElement("button");\n  cancel.id = "cancel";\n  cancel.innerHTML = "Cancel";\n  cancel.onclick = _createNewProject_js__WEBPACK_IMPORTED_MODULE_2__.cancelCreation;\n\n  content.appendChild(newProjectInfoDiv);\n  newProjectInfoDiv.appendChild(newProjectInfoForm);\n  newProjectInfoForm.appendChild(titleLabel);\n  newProjectInfoForm.appendChild(titleInput);\n  newProjectInfoForm.appendChild(descriptionLabel);\n  newProjectInfoForm.appendChild(descriptionArea);\n  newProjectInfoForm.appendChild(validate);\n  newProjectInfoForm.appendChild(cancel);\n\n  return content;\n}\n\ndocument.body.appendChild(createTemplate());\n(0,_createNewProject_js__WEBPACK_IMPORTED_MODULE_2__.displayProjects)();\n\n\n//# sourceURL=webpack://todolistapp/./src/index.js?'
        );

        /***/
      },

    /***/ "./src/LibreBaskerville-Regular.ttf":
      /*!******************************************!*\
  !*** ./src/LibreBaskerville-Regular.ttf ***!
  \******************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "715e9cea90f54d5a4093.ttf";\n\n//# sourceURL=webpack://todolistapp/./src/LibreBaskerville-Regular.ttf?'
        );

        /***/
      },

    /***/ "./src/todoLogo.png":
      /*!**************************!*\
  !*** ./src/todoLogo.png ***!
  \**************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "c5eb10ec2c7b9149200c.png";\n\n//# sourceURL=webpack://todolistapp/./src/todoLogo.png?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = __webpack_modules__;
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/global */
  /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === "object") return globalThis;
      /******/ try {
        /******/ return this || new Function("return this")();
        /******/
      } catch (e) {
        /******/ if (typeof window === "object") return window;
        /******/
      }
      /******/
    })();
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/ (() => {
    /******/ var scriptUrl;
    /******/ if (__webpack_require__.g.importScripts)
      scriptUrl = __webpack_require__.g.location + "";
    /******/ var document = __webpack_require__.g.document;
    /******/ if (!scriptUrl && document) {
      /******/ if (document.currentScript)
        /******/ scriptUrl = document.currentScript.src;
      /******/ if (!scriptUrl) {
        /******/ var scripts = document.getElementsByTagName("script");
        /******/ if (scripts.length)
          scriptUrl = scripts[scripts.length - 1].src;
        /******/
      }
      /******/
    }
    /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ if (!scriptUrl)
      throw new Error("Automatic publicPath is not supported in this browser");
    /******/ scriptUrl = scriptUrl
      .replace(/#.*$/, "")
      .replace(/\?.*$/, "")
      .replace(/\/[^\/]+$/, "/");
    /******/ __webpack_require__.p = scriptUrl;
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/jsonp chunk loading */
  /******/ (() => {
    /******/ __webpack_require__.b = document.baseURI || self.location.href;
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /******/ var installedChunks = {
      /******/ index: 0,
      /******/
    };
    /******/
    /******/ // no chunk on demand loading
    /******/
    /******/ // no prefetching
    /******/
    /******/ // no preloaded
    /******/
    /******/ // no HMR
    /******/
    /******/ // no HMR manifest
    /******/
    /******/ // no on chunks loaded
    /******/
    /******/ // no jsonp function
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();
