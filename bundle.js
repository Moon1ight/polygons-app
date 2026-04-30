/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css"
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\nbody {\r\n    font-family: 'Arial', sans-serif;\r\n    background: #f5f9ff;\r\n    height: 100%;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://polygon-editor/./src/styles/main.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

"use strict";
eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://polygon-editor/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

"use strict";
eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://polygon-editor/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles/main.css"
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://polygon-editor/./src/styles/main.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

"use strict";
eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://polygon-editor/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

"use strict";
eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://polygon-editor/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://polygon-editor/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://polygon-editor/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://polygon-editor/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://polygon-editor/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/components/app-root.js"
/*!************************************!*\
  !*** ./src/components/app-root.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_area_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas-area.js */ \"./src/components/canvas-area.js\");\n/* harmony import */ var _toolbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolbar.js */ \"./src/components/toolbar.js\");\n/* harmony import */ var _core_polygon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/polygon.js */ \"./src/core/polygon.js\");\n/* harmony import */ var _core_history_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/history.js */ \"./src/core/history.js\");\n/* harmony import */ var _app_toast_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-toast.js */ \"./src/components/app-toast.js\");\n/* harmony import */ var _app_toast_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_app_toast_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _info_panel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-panel.js */ \"./src/components/info-panel.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass AppRoot extends HTMLElement {\r\n    constructor() {\r\n        super()\r\n        this.attachShadow({ mode: 'open' })\r\n\r\n        this.polygons = [];\r\n        this.history = new _core_history_js__WEBPACK_IMPORTED_MODULE_3__.History()\r\n    }\r\n\r\n    connectedCallback() {\r\n        this.shadowRoot.innerHTML = `\r\n            <style>\r\n                .layout {\r\n                    display: flex;\r\n                    flex-direction: column; \r\n                    padding: 10px 20px;\r\n                    min-height: 100vh;\r\n                    box-sizing: border-box;\r\n                }\r\n                info-panel {\r\n                    // width: 50%;\r\n                }\r\n                canvas-area {\r\n                    flex: 1;\r\n                    display: flex;\r\n                }\r\n                toolbar-panel {\r\n                    width: 100%;\r\n                }\r\n            </style>\r\n\r\n            <div class=\"layout\">\r\n                <info-panel></info-panel>\r\n                <toolbar-panel></toolbar-panel>\r\n                <canvas-area></canvas-area>\r\n                <app-toast></app-toast>\r\n            </div>\r\n        `\r\n\r\n        const toolbar = this.shadowRoot.querySelector('toolbar-panel')\r\n        const canvas = this.shadowRoot.querySelector('canvas-area')\r\n        const toast = this.shadowRoot.querySelector('app-toast')\r\n\r\n        // История\r\n        canvas.addEventListener('history', (e) => {\r\n            this.history.push(e.detail)\r\n        })\r\n        // При выборе элемента обновить инфо-панель\r\n        canvas.addEventListener('select', () => {\r\n            this.updateInfo();\r\n        });\r\n\r\n        // Создать полигон (кнопка)\r\n        toolbar.addEventListener('generate', () => {\r\n            const MAX_TRIES = 50\r\n            let polygon = null\r\n\r\n            for (let i = 0;i < MAX_TRIES; i++) {\r\n                const width = canvas.canvas.width\r\n                const height = canvas.canvas.height\r\n\r\n                const candidate = (0,_core_polygon_js__WEBPACK_IMPORTED_MODULE_2__.createRandomPolygon)(width, height)\r\n\r\n                const intersects = this.polygons.some(polygon => \r\n                    canvas.polygonsIntersect(candidate, polygon)\r\n                )\r\n\r\n                if (!intersects) {\r\n                    polygon = candidate\r\n                    break\r\n                }\r\n            }\r\n\r\n            // Если на канвасе нет места\r\n            if (!polygon) {\r\n                toast.show('Не удалось создать полигон без пересечений')\r\n                return\r\n            }\r\n\r\n            this.polygons.push(polygon)\r\n            this.history.push(this.polygons) // Записываем в историю\r\n\r\n            canvas.setPolygons(this.polygons)\r\n\r\n            this.updateInfo();\r\n        })\r\n\r\n        // Удаление элементов\r\n        toolbar.addEventListener('delete', () => {\r\n            const selected = canvas.selected\r\n            \r\n            if (!selected) {\r\n                toast.show('Ничего не выбрано')\r\n                return\r\n            }\r\n\r\n            this.polygons = this.polygons.filter(polygon => polygon !== selected)\r\n\r\n            canvas.selected = null\r\n\r\n            this.history.push(this.polygons)\r\n            \r\n            canvas.setPolygons(this.polygons)\r\n\r\n            this.updateInfo();\r\n\r\n            toast.show('Полигон удален')\r\n        })\r\n\r\n        toolbar.addEventListener('deleteAll', () => {\r\n            this.polygons = []\r\n            this.history.push(this.polygons)\r\n            canvas.setPolygons(this.polygons)\r\n\r\n            this.updateInfo();\r\n\r\n            toast.show('Полотно очищено')\r\n        })\r\n\r\n        window.addEventListener('keydown', (e) => {\r\n            if (e.key === 'Delete') {\r\n                toolbar.dispatchEvent(new CustomEvent('delete'))\r\n            }\r\n        })\r\n\r\n        // Undo/redo, в том числе на Ctrl+z / Ctrl+y\r\n        toolbar.addEventListener('undo', () => {\r\n            const state = this.history.undo()\r\n            if (state) {\r\n                this.polygons = state\r\n                canvas.setPolygons(this.polygons)\r\n            }\r\n\r\n            this.updateInfo();\r\n        })\r\n\r\n        toolbar.addEventListener('redo', () => {\r\n            const state = this.history.redo()\r\n            if (state) {\r\n                this.polygons = state\r\n                canvas.setPolygons(this.polygons)\r\n            }\r\n\r\n            this.updateInfo();\r\n        })\r\n\r\n        window.addEventListener('keydown', (e) => {\r\n            if (e.ctrlKey && e.key === 'z') {\r\n                const state = this.history.undo()\r\n                if (state) {\r\n                    this.polygons = state\r\n                    canvas.setPolygons(this.polygons)\r\n                }\r\n            }\r\n\r\n            if (\r\n                e.ctrlKey &&\r\n                (e.key === 'y' || (e.shiftKey && e.key === 'Z'))\r\n            ) {\r\n                const state = this.history.redo()\r\n                if (state) {\r\n                    this.polygons = state;\r\n                    canvas.setPolygons(this.polygons)\r\n                }           \r\n            }\r\n        })\r\n\r\n        // Загрузка и сохранение в JSON\r\n        toolbar.addEventListener('export', () => {\r\n            const data = JSON.stringify(this.polygons, null, 2)\r\n\r\n            const blob = new Blob([data], { type: 'application/json' })\r\n            const url = URL.createObjectURL(blob)\r\n\r\n            const a = document.createElement('a')\r\n            a.href = url;\r\n            a.download = 'polygons.json'\r\n            a.click()\r\n\r\n            URL.revokeObjectURL(url)\r\n            toast.show('Файл успешно сохранен')\r\n        })\r\n\r\n        toolbar.addEventListener('import', (e) => {\r\n            const file = e.detail\r\n\r\n            const reader = new FileReader()\r\n\r\n            reader.onload = () => {\r\n                try {\r\n                    const data = JSON.parse(reader.result)\r\n\r\n                    if (!Array.isArray(data)) throw new Error()\r\n                    \r\n                    this.polygons = data.map(polygon => ({\r\n                        id: polygon.id || Date.now() + Math.random(),\r\n                        points: polygon.points,\r\n                        color: polygon.color,\r\n                        scale: 1,\r\n                        isAnimating: false\r\n                    }))\r\n\r\n                    canvas.selected = null\r\n\r\n                    this.history.push(this.polygons)\r\n                    canvas.setPolygons(this.polygons)\r\n\r\n                    this.updateInfo()\r\n\r\n                    toast.show('Файл успешно загружен')\r\n                } catch {\r\n                    toast.show('Ошибка загрузки файла')\r\n                }\r\n            }\r\n            reader.readAsText(file)\r\n        })\r\n\r\n        // Смена цвета у выбранного полигона\r\n        toolbar.addEventListener('requestSelected', (e) => {\r\n            e.detail(canvas.selected)\r\n        })\r\n\r\n        toolbar.addEventListener('changeColor', (e) => {\r\n            const { color, polygonId } = e.detail\r\n\r\n            const polygon = this.polygons.find(polygon => polygon.id === polygonId)\r\n\r\n            if (!polygon) {\r\n                toast.show('Полигон не выбран')\r\n                return\r\n            }\r\n\r\n            this.history.push(JSON.parse(JSON.stringify(this.polygons)));\r\n\r\n            polygon.color = color\r\n\r\n            canvas.draw()\r\n        })\r\n    }\r\n\r\n    // Обновление информации в информационной панели\r\n    updateInfo() {\r\n        const info = this.shadowRoot.querySelector('info-panel')\r\n        const canvas = this.shadowRoot.querySelector('canvas-area')\r\n        \r\n        info.render(this.polygons.length, canvas.selected)\r\n    }\r\n}\r\n\r\ncustomElements.define('app-root', AppRoot)\n\n//# sourceURL=webpack://polygon-editor/./src/components/app-root.js?\n}");

/***/ },

/***/ "./src/components/app-toast.js"
/*!*************************************!*\
  !*** ./src/components/app-toast.js ***!
  \*************************************/
() {

eval("{class AppToast extends HTMLElement {\r\n    constructor() {\r\n        super()\r\n        this.attachShadow({ mode: 'open' })\r\n    }\r\n\r\n    connectedCallback() {\r\n        this.shadowRoot.innerHTML = `\r\n            <style>\r\n                .toast {\r\n                position: fixed;\r\n                bottom: 20px;\r\n                left: 50%;\r\n                transform: translateX(-50%) translateY(20px);\r\n                background: #333;\r\n                color: white;\r\n                padding: 12px 20px;\r\n                border-radius: 10px;\r\n                opacity: 0;\r\n                transition: all 0.3s ease;\r\n                pointer-events: none;\r\n                }\r\n\r\n                .toast.show {\r\n                opacity: 1;\r\n                transform: translateX(-50%) translateY(0);\r\n                }\r\n            </style>\r\n\r\n            <div class=\"toast\"></div>\r\n        `\r\n\r\n        this.el = this.shadowRoot.querySelector('.toast')\r\n    }\r\n\r\n    show(message) {\r\n        this.el.textContent = message\r\n        this.el.classList.add('show')\r\n\r\n        clearTimeout(this.timer)\r\n        this.timer = setTimeout(() => {\r\n            this.el.classList.remove('show')\r\n        }, 2000)\r\n    }\r\n}\r\n\r\ncustomElements.define('app-toast', AppToast)\n\n//# sourceURL=webpack://polygon-editor/./src/components/app-toast.js?\n}");

/***/ },

/***/ "./src/components/canvas-area.js"
/*!***************************************!*\
  !*** ./src/components/canvas-area.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_canvas_css_raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/canvas.css?raw */ \"./src/styles/canvas.css?raw\");\n\r\n\r\nconst sheet = new CSSStyleSheet()\r\nsheet.replaceSync(_styles_canvas_css_raw__WEBPACK_IMPORTED_MODULE_0__)\r\n\r\nclass CanvasArea extends HTMLElement {\r\n    constructor() {\r\n        super()\r\n        this.attachShadow({ mode: 'open' })\r\n\r\n        this.polygons = []\r\n        this.selected = null\r\n        this.hovered = null\r\n\r\n        // Drag State\r\n        this.beforeDragState = null\r\n        this.dragging = false\r\n        this.prev = null\r\n\r\n        this.shadowRoot.adoptedStyleSheets = [sheet]\r\n    }\r\n\r\n    connectedCallback() {\r\n        this.shadowRoot.innerHTML = `\r\n            <canvas class='canvas'></canvas>\r\n        `\r\n\r\n        this.canvas = this.shadowRoot.querySelector('canvas')\r\n        this.ctx = this.canvas.getContext('2d')\r\n\r\n        this.resizeCanvas()\r\n\r\n        // События\r\n        this.canvas.addEventListener('mousedown', this.handleMouseDown.bind(this))\r\n        this.canvas.addEventListener('mousemove', this.handleMouseMove.bind(this))\r\n        window.addEventListener('mouseup', this.handleMouseUp.bind(this))\r\n        window.addEventListener('resize', () => this.resizeCanvas())\r\n\r\n        this.draw()\r\n    }\r\n\r\n    setPolygons(polygons) {\r\n        this.polygons = polygons\r\n        this.draw()\r\n        this.animate()\r\n    }\r\n\r\n    //=== DRAG START\r\n    handleMouseDown(e) {\r\n        const { x,y } = this.getMousePosition(e)\r\n\r\n        // Ищем полигон под курсором\r\n        let target = null\r\n\r\n        for (let i = this.polygons.length - 1; i >= 0; i--) {\r\n            if (this.isPointInsidePolygon(this.polygons[i], x, y)) {\r\n                target = this.polygons[i]\r\n                break\r\n            }\r\n        }\r\n\r\n        if (!target) {\r\n            this.selected = null\r\n\r\n            this.dispatchEvent(new CustomEvent('select'))\r\n            this.draw()\r\n\r\n            return\r\n        }\r\n\r\n        // Если кликаем по полигону - сохраняем состояние для drag\r\n        this.beforeDragState = JSON.parse(JSON.stringify(this.polygons))\r\n\r\n        // Выбираем полигон\r\n        this.selected = target\r\n\r\n        // Начинаем drag\r\n        this.dragging = true\r\n        this.prev = { x, y }\r\n\r\n        // Смена курсора\r\n        this.canvas.style.cursor = 'grabbing'\r\n\r\n        // Для инфо-панели\r\n        this.dispatchEvent(new CustomEvent('select'))\r\n\r\n        this.draw()\r\n    }\r\n\r\n    //=== DRAG MOVE\r\n    handleMouseMove(e) {\r\n        const { x,y } = this.getMousePosition(e)\r\n\r\n        if (this.dragging) {\r\n            let dx = x - this.prev.x\r\n            let dy = y - this.prev.y\r\n\r\n            this.constrainMovement(this.polygon, dx, dy)\r\n            \r\n            this.prev = { x, y }\r\n\r\n            this.draw()\r\n            return\r\n        }\r\n\r\n        let newHovered = null\r\n\r\n        for (let i = this.polygons.length - 1; i >= 0; i--) {\r\n            if (this.isPointInsidePolygon(this.polygons[i], x, y)) {\r\n                newHovered = this.polygons[i]\r\n                break\r\n            }\r\n        }\r\n\r\n        if (newHovered !== this.hovered) {\r\n            this.hovered  = newHovered\r\n\r\n            this.canvas.style.cursor = this.hovered ? 'pointer' : 'default'\r\n\r\n            this.draw()\r\n        }\r\n    }\r\n\r\n    //=== DRAG END\r\n    handleMouseUp(e) {\r\n        if (!this.dragging) return\r\n\r\n        this.dragging = false\r\n        this.prev = null\r\n\r\n        if (this.beforeDragState) {\r\n            this.dispatchEvent(new CustomEvent('history', {\r\n                detail: this.polygons\r\n            }))\r\n        }\r\n\r\n        this.beforeDragState = null\r\n\r\n        this.canvas.style.cursor = this.hovered ? 'pointer' : 'default'\r\n\r\n        // Тут позже добавлю сохранение в историю\r\n    }\r\n\r\n    //====== Utils ======\r\n\r\n    getMousePosition(e) {\r\n        const rect = this.canvas.getBoundingClientRect()\r\n\r\n        return {\r\n            x: e.clientX - rect.left,\r\n            y: e.clientY - rect.top\r\n        }\r\n    }\r\n\r\n    // Проверка точки внутри полигона\r\n    isPointInsidePolygon(polygon, x, y) {\r\n        const ctx = this.ctx\r\n\r\n        ctx.beginPath()\r\n\r\n        polygon.points.forEach((point, index) => {\r\n            if (index === 0) {\r\n                ctx.moveTo(point.x, point.y)\r\n            } else {\r\n                ctx.lineTo(point.x, point.y)\r\n            }\r\n        })\r\n\r\n        ctx.closePath()\r\n\r\n        return ctx.isPointInPath(x, y)\r\n    }\r\n\r\n    // Запрет на выход за границу полотна\r\n    constrainMovement(polygon, dx, dy) {\r\n        // Находим границы полигона\r\n        let minX = Infinity\r\n        let maxX = -Infinity\r\n        let minY = Infinity\r\n        let maxY = -Infinity\r\n\r\n        this.selected.points.forEach(point => {\r\n            if (point.x < minX) minX = point.x\r\n            if (point.x > maxX) maxX = point.x\r\n            if (point.y < minY) minY = point.y\r\n            if (point.y > maxY) maxY = point.y\r\n        })\r\n\r\n        const canvasWidth = this.canvas.width\r\n        const canvasHeight = this.canvas.height\r\n\r\n        // Ограничение по X\r\n        if (minX + dx < 0) {\r\n            dx = -minX\r\n        }\r\n\r\n        if (maxX + dx > canvasWidth) {\r\n            dx = canvasWidth - maxX\r\n        }\r\n\r\n        // Ограничение по Y\r\n        if (minY + dy < 0) {\r\n            dy = -minY\r\n        }\r\n\r\n        if (maxY + dy > canvasHeight) {\r\n            dy = canvasHeight - maxY\r\n        }\r\n\r\n        // Движение\r\n        \r\n        // Создаем \"виртуально перемещенный\" полигон\r\n        const moved = this.getMovedPolygon(this.selected, dx, dy)\r\n\r\n        // Проверка на пересечение с другими полигонами\r\n        let intersects = false\r\n\r\n        for (let polygon of this.polygons) {\r\n            if (polygon === this.selected) continue\r\n\r\n            if (this.polygonsIntersect(moved, polygon)) {\r\n                intersects = true\r\n                break\r\n            }\r\n        }\r\n\r\n        // Если пересечение есть - не двигаем\r\n        if (!intersects) {\r\n            this.selected.points.forEach(point => {\r\n                point.x += dx,\r\n                point.y += dy\r\n            })\r\n        }\r\n    }\r\n\r\n    // Запрет на наезжание полигонов\r\n    polygonsIntersect(p1, p2) {\r\n        // Проверяем, есть ли хоть одна точка p1 внутри p2\r\n        for (let point of p1.points) {\r\n            if (this.isPointInsidePolygon(p2, point.x, point.y)) {\r\n                return true\r\n            }\r\n        }\r\n        // Проверяем обратное\r\n        for (let point of p2.points) {\r\n            if (this.isPointInsidePolygon(p1, point.x, point.y)) {\r\n                return true\r\n            }\r\n        }\r\n\r\n        return false\r\n    }\r\n\r\n    // Виртуальное перемещение\r\n    getMovedPolygon(polygon, dx, dy) {\r\n        return {\r\n            ...polygon,\r\n            points: polygon.points.map(point => ({\r\n                x: point.x + dx,\r\n                y: point.y + dy\r\n            }))\r\n        }\r\n    }\r\n\r\n    draw() {\r\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)\r\n\r\n        this.polygons.forEach(polygon => {\r\n            this.drawPolygon(polygon)\r\n        })\r\n    }\r\n\r\n    drawPolygon(polygon) {\r\n        const ctx = this.ctx\r\n\r\n        const center = this.getPolygonCenter(polygon)\r\n        ctx.save()\r\n\r\n        if (polygon.isAnimating) {\r\n            ctx.translate(center.x, center.y)\r\n            ctx.scale(polygon.scale, polygon.scale)\r\n            ctx.translate(-center.x, -center.y)\r\n        }\r\n\r\n        ctx.beginPath()\r\n        const [first, ...rest] = polygon.points\r\n\r\n        ctx.moveTo(first.x, first.y)\r\n        rest.forEach(point => ctx.lineTo(point.x, point.y))\r\n        ctx.closePath()\r\n\r\n        ctx.fillStyle = polygon.color\r\n        ctx.fill()\r\n\r\n        // Выделение выбранного полигона\r\n        if (polygon === this.selected) {\r\n            ctx.strokeStyle = '#ff5e00';\r\n            ctx.lineWidth = 5;\r\n        } else if (polygon === this.hovered) {\r\n            ctx.strokeStyle = '#4b75ff'\r\n            ctx.lineWidth = 3\r\n        } else {\r\n            ctx.strokeStyle = 'black'\r\n            ctx.lineWidth = 2\r\n        }\r\n\r\n        ctx.stroke()\r\n\r\n        ctx.restore()\r\n    }\r\n\r\n    getPolygonCenter(polygon) {\r\n        let x = 0\r\n        let y = 0\r\n\r\n        polygon.points.forEach(point => {\r\n            x += point.x\r\n            y += point.y\r\n        })\r\n\r\n        return {\r\n            x: x / polygon.points.length,\r\n            y: y / polygon.points.length\r\n        }\r\n    }\r\n\r\n    // Анимация появления полигона\r\n    animate() {\r\n        let needsRedraw = false\r\n\r\n        this.polygons.forEach(polygon => {\r\n            if (polygon.isAnimating) {\r\n                polygon.scale += 0.1\r\n\r\n                if (polygon.scale >= 1) {\r\n                    polygon.scale = 1\r\n                    polygon.isAnimating = false\r\n                }\r\n\r\n                needsRedraw = true\r\n            }\r\n        })\r\n\r\n        if (needsRedraw) {\r\n            this.draw()\r\n            requestAnimationFrame(() => this.animate())\r\n        }\r\n    }\r\n\r\n    resizeCanvas() {\r\n        const rect = this.canvas.getBoundingClientRect()\r\n\r\n        const minHeight = 400\r\n\r\n        this.canvas.width = rect.width\r\n        this.canvas.height = Math.max(rect.height, minHeight)\r\n\r\n        this.draw()\r\n    }\r\n}\r\n\r\ncustomElements.define('canvas-area', CanvasArea)\n\n//# sourceURL=webpack://polygon-editor/./src/components/canvas-area.js?\n}");

/***/ },

/***/ "./src/components/info-panel.js"
/*!**************************************!*\
  !*** ./src/components/info-panel.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_info_css_raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/info.css?raw */ \"./src/styles/info.css?raw\");\n\r\n\r\nconst sheet = new CSSStyleSheet();\r\nsheet.replaceSync(_styles_info_css_raw__WEBPACK_IMPORTED_MODULE_0__);\r\n\r\nclass InfoPanel extends HTMLElement {\r\n    constructor() {\r\n        super()\r\n        this.attachShadow({ mode: 'open' })\r\n\r\n        this.shadowRoot.adoptedStyleSheets = [sheet]\r\n    }\r\n\r\n    connectedCallback() {\r\n        this.render(0, null)\r\n    }\r\n\r\n    render(count, selected) {\r\n        this.shadowRoot.innerHTML = `\r\n            <div class='info'>\r\n                <div>Количество полигонов: <b>${count}</b></div>\r\n                <div>\r\n                    Выбран: <b>${selected ? selected.id : 'Ничего не выбрано'}</b>\r\n                </div>\r\n            </div>\r\n        `\r\n    }\r\n}\r\n\r\ncustomElements.define('info-panel', InfoPanel)\n\n//# sourceURL=webpack://polygon-editor/./src/components/info-panel.js?\n}");

/***/ },

/***/ "./src/components/toolbar.js"
/*!***********************************!*\
  !*** ./src/components/toolbar.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_toolbar_css_raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/toolbar.css?raw */ \"./src/styles/toolbar.css?raw\");\n\r\n\r\nconst sheet = new CSSStyleSheet();\r\nsheet.replaceSync(_styles_toolbar_css_raw__WEBPACK_IMPORTED_MODULE_0__);\r\n\r\nclass ToolbarPanel extends HTMLElement {\r\n    constructor() {\r\n        super()\r\n        this.attachShadow({ mode: 'open' })\r\n\r\n        this.shadowRoot.adoptedStyleSheets = [sheet]\r\n    }\r\n\r\n    connectedCallback() {\r\n        this.shadowRoot.innerHTML = `\r\n            <div class='toolbar'>\r\n                <div>\r\n                    <button id=\"generate\">➕ Сгенерировать полигон</button>\r\n                    <div>\r\n                        <button id=\"undo\">↩️</button>\r\n                        <button id=\"redo\">↪️</button>\r\n                        <button id=\"color\">🎨</button>\r\n                        <input type=\"color\" id=\"colorPicker\" hidden />\r\n                    </div>\r\n                    <button id=\"delete\">🗑️ Удалить выбранный</button>\r\n                    <button id=\"deleteAll\">🗑️ Удалить все</button>\r\n                </div>\r\n                <div>\r\n                    <button id=\"export\">💾 Сохранить</button>\r\n                    <button id=\"import\">📎 Загрузить</button>\r\n                    <input type=\"file\" id=\"file\" hidden accept=\"application/JSON\" />\r\n                </div>\r\n            </div>\r\n        `\r\n\r\n        this.shadowRoot.getElementById(\"generate\")\r\n            .addEventListener('click', () => {\r\n                this.dispatchEvent(new CustomEvent('generate'))\r\n            })\r\n\r\n        this.shadowRoot.getElementById(\"undo\")\r\n            .addEventListener('click', () => {\r\n                this.dispatchEvent(new CustomEvent('undo'))\r\n            })\r\n\r\n        this.shadowRoot.getElementById(\"redo\")\r\n            .addEventListener('click', () => {\r\n                this.dispatchEvent(new CustomEvent('redo'))\r\n            })\r\n\r\n        this.shadowRoot.getElementById(\"delete\")\r\n            .addEventListener('click', () => {\r\n                this.dispatchEvent(new CustomEvent('delete'))\r\n            })\r\n\r\n        this.shadowRoot.getElementById('deleteAll')\r\n            .addEventListener('click', () => {\r\n                this.dispatchEvent(new CustomEvent('deleteAll'))\r\n            })\r\n\r\n        this.shadowRoot.getElementById(\"export\")\r\n            .addEventListener('click', () => {\r\n                this.dispatchEvent(new CustomEvent('export'))\r\n            })\r\n\r\n        const fileInput = this.shadowRoot.getElementById(\"file\")\r\n\r\n        this.shadowRoot.getElementById(\"import\")\r\n            .addEventListener('click', () => {\r\n                fileInput.click()\r\n            })\r\n\r\n        fileInput.addEventListener('change', (e) => {\r\n            const file = e.target.files[0]\r\n            if (!file) return\r\n\r\n            this.dispatchEvent(new CustomEvent('import', {\r\n                detail: file\r\n            }))\r\n\r\n            fileInput.value = ''\r\n        })\r\n\r\n        const colorBtn = this.shadowRoot.getElementById(\"color\")\r\n        const colorInput = this.shadowRoot.getElementById(\"colorPicker\")\r\n\r\n        let targetPolygon = null\r\n        \r\n        colorBtn.addEventListener('click', () => {\r\n            // Просим у app-root передать выбранный полигон\r\n            this.dispatchEvent(new CustomEvent('requestSelected', {\r\n                detail: (selected) => {\r\n                    targetPolygon = selected\r\n\r\n                    if (!targetPolygon) return\r\n\r\n                    colorInput.value = targetPolygon.colorBtn\r\n                    colorInput.click()\r\n                }\r\n            }))\r\n        })\r\n\r\n        colorInput.addEventListener('change', (e) => {\r\n            if (!targetPolygon) return\r\n\r\n            this.dispatchEvent(new CustomEvent('changeColor', {\r\n                detail: {\r\n                    color: e.target.value,\r\n                    polygonId: targetPolygon.id\r\n                }\r\n            }))\r\n\r\n            targetPolygon = null\r\n        })\r\n    }\r\n}\r\n\r\ncustomElements.define('toolbar-panel', ToolbarPanel)\n\n//# sourceURL=webpack://polygon-editor/./src/components/toolbar.js?\n}");

/***/ },

/***/ "./src/core/history.js"
/*!*****************************!*\
  !*** ./src/core/history.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   History: () => (/* binding */ History)\n/* harmony export */ });\nclass History {\r\n    constructor() {\r\n        this.stack = []\r\n        this.index = -1\r\n    }\r\n\r\n    push(state) {\r\n        // Обрезать redo ветку\r\n        this.stack = this.stack.slice(0, this.index + 1)\r\n\r\n        // Сохранить копию\r\n        this.stack.push(this.clone(state))\r\n        this.index++\r\n    }\r\n\r\n    undo() {\r\n        if (this.index <= 0) return null\r\n\r\n        this.index--\r\n        return this.clone(this.stack[this.index])\r\n    }\r\n\r\n    redo() {\r\n        if (this.index >= this.stack.length - 1) return null\r\n\r\n        this.index++\r\n        return this.clone(this.stack[this.index])\r\n    }\r\n\r\n    clone(state) {\r\n        return JSON.parse(JSON.stringify(state))\r\n    }\r\n}\n\n//# sourceURL=webpack://polygon-editor/./src/core/history.js?\n}");

/***/ },

/***/ "./src/core/polygon.js"
/*!*****************************!*\
  !*** ./src/core/polygon.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createRandomPolygon: () => (/* binding */ createRandomPolygon)\n/* harmony export */ });\nfunction createRandomPolygon(width, height) {\r\n    const pointsCount = Math.floor(Math.random() * 5) + 3\r\n\r\n    // Добавляем отступ от краев\r\n    const margin = 60\r\n\r\n    const centerX = margin + Math.random() * (width - margin * 2)\r\n    const centerY = margin + Math.random() * (height - margin * 2)\r\n\r\n    const points = []\r\n\r\n    for (let i = 0; i < pointsCount; i++) {\r\n        const angle = (Math.PI * 2 * i) / pointsCount\r\n        const radius = 20 + Math.random() * 60\r\n\r\n        points.push({\r\n            x: centerX + Math.cos(angle) * radius,\r\n            y: centerY + Math.sin(angle) * radius\r\n        })\r\n    }\r\n\r\n    return {\r\n        id: Date.now() + Math.random(),\r\n        points,\r\n        color: `hsl(${Math.random() * 360}, 70%, 60%)`,\r\n        scale: 0,\r\n        isAnimating: true\r\n    }\r\n}\n\n//# sourceURL=webpack://polygon-editor/./src/core/polygon.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_app_root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/app-root.js */ \"./src/components/app-root.js\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n\r\n\n\n//# sourceURL=webpack://polygon-editor/./src/index.js?\n}");

/***/ },

/***/ "./src/styles/canvas.css?raw"
/*!***********************************!*\
  !*** ./src/styles/canvas.css?raw ***!
  \***********************************/
(module) {

"use strict";
eval("{module.exports = \":host {\\r\\n    display: block;\\r\\n    flex: 1;\\r\\n}\\r\\n.canvas {\\r\\n    /* border: 1px solid #a5a5a5; */\\r\\n    box-shadow:\\r\\n      0 1px 2px rgba(0, 0, 0, 0.1),\\r\\n      0 4px 12px rgba(0, 0, 0, 0.2);\\r\\n    border-radius: 12px;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    min-height: 300px;\\r\\n    display: block;\\r\\n    background: #fff;\\r\\n}\";\n\n//# sourceURL=webpack://polygon-editor/./src/styles/canvas.css?\n}");

/***/ },

/***/ "./src/styles/info.css?raw"
/*!*********************************!*\
  !*** ./src/styles/info.css?raw ***!
  \*********************************/
(module) {

"use strict";
eval("{module.exports = \".info {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    flex-wrap: wrap;\\r\\n    gap: 20px;\\r\\n    padding: 15px 15px;\\r\\n    background: #ffffff;\\r\\n    border-radius: 12px;\\r\\n    box-shadow:\\r\\n        0 1px 2px rgba(0, 0, 0, 0.1),\\r\\n        0 4px 12px rgba(0, 0, 0, 0.2);\\r\\n}\";\n\n//# sourceURL=webpack://polygon-editor/./src/styles/info.css?\n}");

/***/ },

/***/ "./src/styles/toolbar.css?raw"
/*!************************************!*\
  !*** ./src/styles/toolbar.css?raw ***!
  \************************************/
(module) {

"use strict";
eval("{module.exports = \".toolbar {\\r\\n    /* border-bottom: 1px solid #a5a5a5; */\\r\\n    padding: 15px 0;\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n    flex-wrap: wrap;\\r\\n    gap: 15px;\\r\\n    /* margin-bottom: 10px; */\\r\\n}\\r\\n.toolbar div {\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n    gap: 20px;\\r\\n}\\r\\n\\r\\n.toolbar #undo,\\r\\n.toolbar #redo,\\r\\n.toolbar #color {\\r\\n    width: 50px;\\r\\n    font-size: 20px;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n    cursor: pointer;\\r\\n    border: none;\\r\\n    border-radius: 12px;\\r\\n    outline: none;\\r\\n    background: #fff;\\r\\n    height: 50px;\\r\\n    padding: 15px 10px;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    box-shadow:\\r\\n        0 1px 2px rgba(0, 0, 0, 0.1),\\r\\n        0 4px 12px rgba(0, 0, 0, 0.2);\\r\\n    transition: all 0.25s ease;\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n    transform: translateY(-1px);\\r\\n    box-shadow:\\r\\n        0 2px 4px rgba(0, 0, 0, 0.06),\\r\\n        0 6px 16px rgba(0, 0, 0, 0.08);\\r\\n}\\r\\n\\r\\nbutton:active {\\r\\n    transform: translateY(0);\\r\\n    box-shadow:\\r\\n        0 1px 2px rgba(0, 0, 0, 0.05) inset;\\r\\n}\\r\\n\\r\\n/* Disabled на будущее, пока disable на кнопки не вешал */\\r\\nbutton:disabled {\\r\\n  opacity: 0.7;\\r\\n  cursor: not-allowed;\\r\\n  transform: none;\\r\\n  box-shadow: none;\\r\\n}\";\n\n//# sourceURL=webpack://polygon-editor/./src/styles/toolbar.css?\n}");

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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