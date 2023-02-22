/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  font-family: \"Ubuntu\", sans-serif;\n  background-color: rgb(245, 245, 245);\n  color: #212121;\n  box-sizing: border-box;\n  margin: 0;\n}\n\nhtml {\n  padding: 0;\n}\n/*            */\n/* ANIMATIONS */\n/*           */\n@keyframes logoRotation {\n  from {\n    transform: scale(1) rotate(0);\n  }\n\n  to {\n    transform: scale(1.2) rotate(720deg);\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n/*               */\n/* STYLE CLASSES */\n/*               */\n.flexRow {\n  display: flex;\n}\n\n.flexColumn {\n  display: flex;\n  flex-direction: column;\n}\n\n.centered {\n  align-items: center;\n  justify-content: center;\n}\n\n.spacedEvenly {\n  justify-content: space-evenly;\n}\n\n.spacedApart {\n  justify-content: space-between;\n}\n\n.softBorder {\n  border-style: solid;\n  border-width: 2px;\n  border-radius: 12px;\n  padding: 1rem;\n}\n\n.hidden {\n  display: none;\n}\n/*                */\n/* MAIN CONTAINER */\n/*                */\n\n#mainContainer {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n/* Navigation Bar */\n#navContainer {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 2rem 0 0;\n}\n\n#siteTitle {\n}\n\n#siteLogo {\n}\n\n#siteName {\n  margin-left: 2rem;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n#menuBar {\n  gap: 2rem;\n  padding: 1rem 0;\n  top: 0px;\n}\n\n.menuItem {\n  font-size: 1rem;\n  font-weight: bold;\n}\n\n#menuIcon {\n  z-index: 5;\n  height: 3rem;\n  width: 3rem;\n}\n\n/* Recipe Editor */\n#recipeEditorForm {\n  margin: 0 auto;\n}\n\n#recipeEditorFormFieldset {\n  padding: 2rem 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n#recipeEditorFormFieldset div {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n}\n\n\n  /*        */\n /* FOOTER */\n/*        */\n\n#gitLogo {\n  height: 2rem;\n  width: 2rem;\n}\n\n#gitLogo:hover {\n  animation: logoRotation 0.75s;\n  animation-fill-mode: forwards;\n}\n\nfooter {\n  position: absolute;\n  bottom: 0px;\n  padding-bottom: 1rem;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,iCAAiC;EACjC,oCAAoC;EACpC,cAAc;EACd,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,UAAU;AACZ;AACA,eAAe;AACf,eAAe;AACf,cAAc;AACd;EACE;IACE,6BAA6B;EAC/B;;EAEA;IACE,oCAAoC;EACtC;AACF;;AAEA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;AACF;;AAEA,kBAAkB;AAClB,kBAAkB;AAClB,kBAAkB;AAClB;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;AACf;AACA,mBAAmB;AACnB,mBAAmB;AACnB,mBAAmB;;AAEnB;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA,mBAAmB;AACnB;EACE,aAAa;EACb,WAAW;EACX,mBAAmB;EACnB,8BAA8B;EAC9B,sBAAsB;AACxB;;AAEA;AACA;;AAEA;AACA;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,SAAS;EACT,eAAe;EACf,QAAQ;AACV;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,WAAW;AACb;;AAEA,kBAAkB;AAClB;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,SAAS;EACT,yBAAyB;AAC3B;;;EAGE,WAAW;CACZ,WAAW;AACZ,WAAW;;AAEX;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,6BAA6B;EAC7B,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,oBAAoB;EACpB,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX","sourcesContent":["* {\n  font-family: \"Ubuntu\", sans-serif;\n  background-color: rgb(245, 245, 245);\n  color: #212121;\n  box-sizing: border-box;\n  margin: 0;\n}\n\nhtml {\n  padding: 0;\n}\n/*            */\n/* ANIMATIONS */\n/*           */\n@keyframes logoRotation {\n  from {\n    transform: scale(1) rotate(0);\n  }\n\n  to {\n    transform: scale(1.2) rotate(720deg);\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n/*               */\n/* STYLE CLASSES */\n/*               */\n.flexRow {\n  display: flex;\n}\n\n.flexColumn {\n  display: flex;\n  flex-direction: column;\n}\n\n.centered {\n  align-items: center;\n  justify-content: center;\n}\n\n.spacedEvenly {\n  justify-content: space-evenly;\n}\n\n.spacedApart {\n  justify-content: space-between;\n}\n\n.softBorder {\n  border-style: solid;\n  border-width: 2px;\n  border-radius: 12px;\n  padding: 1rem;\n}\n\n.hidden {\n  display: none;\n}\n/*                */\n/* MAIN CONTAINER */\n/*                */\n\n#mainContainer {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n/* Navigation Bar */\n#navContainer {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 2rem 0 0;\n}\n\n#siteTitle {\n}\n\n#siteLogo {\n}\n\n#siteName {\n  margin-left: 2rem;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n#menuBar {\n  gap: 2rem;\n  padding: 1rem 0;\n  top: 0px;\n}\n\n.menuItem {\n  font-size: 1rem;\n  font-weight: bold;\n}\n\n#menuIcon {\n  z-index: 5;\n  height: 3rem;\n  width: 3rem;\n}\n\n/* Recipe Editor */\n#recipeEditorForm {\n  margin: 0 auto;\n}\n\n#recipeEditorFormFieldset {\n  padding: 2rem 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n#recipeEditorFormFieldset div {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n}\n\n\n  /*        */\n /* FOOTER */\n/*        */\n\n#gitLogo {\n  height: 2rem;\n  width: 2rem;\n}\n\n#gitLogo:hover {\n  animation: logoRotation 0.75s;\n  animation-fill-mode: forwards;\n}\n\nfooter {\n  position: absolute;\n  bottom: 0px;\n  padding-bottom: 1rem;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadFooter)
/* harmony export */ });
/* harmony import */ var _github_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./github.svg */ "./src/components/footer/github.svg");


function loadFooter() {
  let footerText = document.createElement("p");
  footerText.textContent = "© 2023 Matt Talley (socrastein)";

  let logoContainer = document.createElement("a");
  logoContainer.href = "https://github.com/socrastein";
  logoContainer.target = "_blank";

  let logoImage = document.createElement("img");
  logoImage.id = "gitLogo";
  logoImage.src = _github_svg__WEBPACK_IMPORTED_MODULE_0__;

  const indexFooter = document.getElementsByTagName("footer");

  indexFooter[0].appendChild(footerText);
  indexFooter[0].appendChild(logoContainer);
  logoContainer.appendChild(logoImage);
}


/***/ }),

/***/ "./src/components/mainDisplay/recipeEditor.js":
/*!****************************************************!*\
  !*** ./src/components/mainDisplay/recipeEditor.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadRecipeEditor": () => (/* binding */ loadRecipeEditor),
/* harmony export */   "showRecipeEditor": () => (/* binding */ showRecipeEditor)
/* harmony export */ });
function loadRecipeEditor() {
  const mainContainer = document.getElementById("mainContainer");
  const recipeEditorContainer = document.createElement("div");
  recipeEditorContainer.setAttribute("class", "flexColumn spacedEvenly hidden");
  recipeEditorContainer.id = "recipeEditorContainer";

  mainContainer.appendChild(recipeEditorContainer);

  // RECIPE EDITING FORM
  const recipeEditorForm = document.createElement("form");
  recipeEditorForm.id = "recipeEditorForm";
  recipeEditorForm.action = "index.html";
  recipeEditorForm.method = "post";
  recipeEditorContainer.appendChild(recipeEditorForm);

  const recipeEditorFormFieldset = document.createElement("fieldset");
  recipeEditorFormFieldset.id = "recipeEditorFormFieldset";
  recipeEditorForm.appendChild(recipeEditorFormFieldset);

  const recipeEditorFormFieldsetTitle = document.createElement("legend");
  recipeEditorFormFieldsetTitle.textContent = "Edit Recipe";
  recipeEditorFormFieldset.appendChild(recipeEditorFormFieldsetTitle);

  const formValueArray = [
    {
      title: "Category",
      type: "select",
    },
    {
      title: "Name",
      type: "text",
    },
    {
      title: "Ingredients",
      type: "text",
    },
    {
      title: "Instructions",
      type: "textArea",
    },
    {
      title: "Notes",
      type: "textArea",
    },
  ];

  for (let i in formValueArray) {
    let title = formValueArray[i].title;
    let type = formValueArray[i].type;

    let container = document.createElement("div");
    container.id = `form${title}Container`;
    recipeEditorFormFieldset.appendChild(container);

    let label = document.createElement("label");
    label.textContent = `${title}: `;
    label.id = `form${title}Label`;
    label.setAttribute("for", `form${title}Input`);
    container.appendChild(label);

    let input = document.createElement("input");
    input.id = `form${title}Input`;
    input.name = `form${title}Input`;
    input.type = type;
    container.appendChild(input);
  }
}

function showRecipeEditor(recipe = undefined) {
  if (recipe) {
    let name = recipe.name;
    let ingredients = recipe.ingredients;
    let instructions = recipe.instructions;
    let notes = recipe.notes;
  }
}


/***/ }),

/***/ "./src/components/navbar/navBar.js":
/*!*****************************************!*\
  !*** ./src/components/navbar/navBar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadNavBar)
/* harmony export */ });
/* harmony import */ var _menu_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.svg */ "./src/components/navbar/menu.svg");
/* harmony import */ var _toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggleMenu */ "./src/components/navbar/toggleMenu.js");

// import siteLogo from "./logo.svg";



function loadNavBar() {
  let mainContainer = document.getElementById("mainContainer");

  let navContainer = document.createElement("div");
  navContainer.id = "navContainer";
  navContainer.classList.add("flexRow", "spacedApart");
  mainContainer.appendChild(navContainer);

  let siteTitle = document.createElement("div");
  siteTitle.id = "siteTitle";
  navContainer.appendChild(siteTitle);

  // let siteLogo = document.createElement("img");
  // siteLogo.id = "siteLogo";
  // siteLogo.src = siteLogo;
  // siteTitle.appendChild(siteLogo);

  let siteName = document.createElement("p");
  siteName.id = "siteName";
  siteName.textContent = "Recipe Box";
  siteTitle.appendChild(siteName);

  let menuBar = document.createElement("div");
  menuBar.id = "menuBar";
  menuBar.classList.add("flexRow");
  navContainer.appendChild(menuBar);

  let menuItems = [
    { name: "ITEM 1", onClick: "function1()" }, //TODO: FILL THESE IN
    { name: "ITEM 2", onClick: "function2()" },
    { name: "ITEM 3", onClick: "function3()" },
  ];

  menuItems.forEach((item) => {
    let menuItem = document.createElement("p");
    menuItem.textContent = item.name;
    menuItem.onclick = item.onClick;
    menuItem.classList.add("menuItem");
    menuBar.appendChild(menuItem);
  });

  let menuIcon = document.createElement("img");
  menuIcon.src = _menu_svg__WEBPACK_IMPORTED_MODULE_0__;
  menuIcon.id = "menuIcon";
  menuIcon.onclick = _toggleMenu__WEBPACK_IMPORTED_MODULE_1__.mobileMenuShow;
  navContainer.appendChild(menuIcon);
}


/***/ }),

/***/ "./src/components/navbar/navBarResize.js":
/*!***********************************************!*\
  !*** ./src/components/navbar/navBarResize.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onResize)
/* harmony export */ });
/* harmony import */ var _toggleMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggleMenu */ "./src/components/navbar/toggleMenu.js");


function onResize() {
  let screenWidth = window.screen.width;
  const menuBar = document.getElementById("menuBar");
  const menuIcon = document.getElementById("menuIcon");

  if (menuBar.classList.contains("flexColumn")){
    (0,_toggleMenu__WEBPACK_IMPORTED_MODULE_0__.mobileMenuHide)(); // If mobile menu is currently open, since it displays in a column
  }
  

  if (screenWidth < 600) {
    // siteLogo.style.height = "30px";
    // siteLogo.style.width = "30px";
    menuBar.classList.add("hidden");
    menuIcon.classList.remove("hidden");
    
  } else {
    // siteLogo.style.height = "50px";
    // siteLogo.style.width = "50px";
    menuBar.classList.remove("hidden");
    menuIcon.classList.add("hidden");
  }
}

/***/ }),

/***/ "./src/components/navbar/toggleMenu.js":
/*!*********************************************!*\
  !*** ./src/components/navbar/toggleMenu.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mobileMenuHide": () => (/* binding */ mobileMenuHide),
/* harmony export */   "mobileMenuShow": () => (/* binding */ mobileMenuShow)
/* harmony export */ });
/* harmony import */ var _x_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./x.svg */ "./src/components/navbar/x.svg");
/* harmony import */ var _menu_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.svg */ "./src/components/navbar/menu.svg");



function mobileMenuHide() {
  const menuBar = document.getElementById("menuBar");
  const menuIcon = document.getElementById("menuIcon");
  
  menuBar.style.position = "static";
  console.log("Changing position");
  menuBar.style.paddingTop = "1rem";
  menuBar.style.width = "";
  menuBar.setAttribute("class", "flexRow hidden");

  menuIcon.src = _menu_svg__WEBPACK_IMPORTED_MODULE_1__;
  menuIcon.removeEventListener("click", mobileMenuHide);
  menuIcon.addEventListener("click", mobileMenuShow);
}

function mobileMenuShow() {
  const menuBar = document.getElementById("menuBar");
  const menuIcon = document.getElementById("menuIcon");

  menuBar.setAttribute("class", "flexColumn centered");
  menuBar.style.position = "absolute";
  menuBar.style.paddingTop = "2rem";
  menuBar.style.width = "100vw";

  menuIcon.src = _x_svg__WEBPACK_IMPORTED_MODULE_0__;
  menuIcon.removeEventListener("click", mobileMenuShow);
  menuIcon.addEventListener("click", mobileMenuHide);
}


/***/ }),

/***/ "./src/components/footer/github.svg":
/*!******************************************!*\
  !*** ./src/components/footer/github.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "080591513b1a3eb8fdfe.svg";

/***/ }),

/***/ "./src/components/navbar/menu.svg":
/*!****************************************!*\
  !*** ./src/components/navbar/menu.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cade3556e6c9b326d623.svg";

/***/ }),

/***/ "./src/components/navbar/x.svg":
/*!*************************************!*\
  !*** ./src/components/navbar/x.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "64f09d760e8936f5907a.svg";

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer */ "./src/components/footer/footer.js");
/* harmony import */ var _components_navbar_navBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/navBar */ "./src/components/navbar/navBar.js");
/* harmony import */ var _components_navbar_navBarResize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navbar/navBarResize */ "./src/components/navbar/navBarResize.js");
/* harmony import */ var _components_navbar_toggleMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/toggleMenu */ "./src/components/navbar/toggleMenu.js");
/* harmony import */ var _components_mainDisplay_recipeEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/mainDisplay/recipeEditor */ "./src/components/mainDisplay/recipeEditor.js");


// IMPORTING IMAGES:
// import myImage from './my-image.png'



// IMPORTING MODULES:
// import myFunction from './module'







// CONSTANT ELEMENTS
const mainContainer = document.getElementById("mainContainer");

// EVENT LISTENERS
// For displaying mobile menu when screen < 500px wide
window.addEventListener("resize", _components_navbar_navBarResize__WEBPACK_IMPORTED_MODULE_3__["default"]);

// RUN FUNCTIONS TO LOAD CONTENT:
console.log("Testing");

(0,_components_navbar_navBar__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_components_navbar_navBarResize__WEBPACK_IMPORTED_MODULE_3__["default"])();

(0,_components_mainDisplay_recipeEditor__WEBPACK_IMPORTED_MODULE_5__.loadRecipeEditor)();

(0,_components_footer_footer__WEBPACK_IMPORTED_MODULE_1__["default"])();

// CONSTANT ELEMENTS (created by loading functions)


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNJO0FBQ3dCO0FBQ1c7OztBQUczRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0MsdUVBQVE7O0FBRTFDO0FBQ0E7O0FBRUEscUVBQVU7QUFDViwyRUFBUTs7QUFFUixzRkFBZ0I7O0FBRWhCLHFFQUFVOztBQUVWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbWFpbkRpc3BsYXkvcmVjaXBlRWRpdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvbmF2QmFyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvbmF2QmFyUmVzaXplLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvdG9nZ2xlTWVudS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCIsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XFxuICBjb2xvcjogIzIxMjEyMTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwge1xcbiAgcGFkZGluZzogMDtcXG59XFxuLyogICAgICAgICAgICAqL1xcbi8qIEFOSU1BVElPTlMgKi9cXG4vKiAgICAgICAgICAgKi9cXG5Aa2V5ZnJhbWVzIGxvZ29Sb3RhdGlvbiB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKSByb3RhdGUoNzIwZGVnKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbi8qICAgICAgICAgICAgICAgKi9cXG4vKiBTVFlMRSBDTEFTU0VTICovXFxuLyogICAgICAgICAgICAgICAqL1xcbi5mbGV4Um93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5mbGV4Q29sdW1uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2VudGVyZWQge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc3BhY2VkRXZlbmx5IHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uc3BhY2VkQXBhcnQge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc29mdEJvcmRlciB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4vKiAgICAgICAgICAgICAgICAqL1xcbi8qIE1BSU4gQ09OVEFJTkVSICovXFxuLyogICAgICAgICAgICAgICAgKi9cXG5cXG4jbWFpbkNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLyogTmF2aWdhdGlvbiBCYXIgKi9cXG4jbmF2Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxcmVtIDJyZW0gMCAwO1xcbn1cXG5cXG4jc2l0ZVRpdGxlIHtcXG59XFxuXFxuI3NpdGVMb2dvIHtcXG59XFxuXFxuI3NpdGVOYW1lIHtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI21lbnVCYXIge1xcbiAgZ2FwOiAycmVtO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbiAgdG9wOiAwcHg7XFxufVxcblxcbi5tZW51SXRlbSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI21lbnVJY29uIHtcXG4gIHotaW5kZXg6IDU7XFxuICBoZWlnaHQ6IDNyZW07XFxuICB3aWR0aDogM3JlbTtcXG59XFxuXFxuLyogUmVjaXBlIEVkaXRvciAqL1xcbiNyZWNpcGVFZGl0b3JGb3JtIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4jcmVjaXBlRWRpdG9yRm9ybUZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jcmVjaXBlRWRpdG9yRm9ybUZpZWxkc2V0IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuXFxuICAvKiAgICAgICAgKi9cXG4gLyogRk9PVEVSICovXFxuLyogICAgICAgICovXFxuXFxuI2dpdExvZ28ge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxufVxcblxcbiNnaXRMb2dvOmhvdmVyIHtcXG4gIGFuaW1hdGlvbjogbG9nb1JvdGF0aW9uIDAuNzVzO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbmZvb3RlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUNBQWlDO0VBQ2pDLG9DQUFvQztFQUNwQyxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUNBLGVBQWU7QUFDZixlQUFlO0FBQ2YsY0FBYztBQUNkO0VBQ0U7SUFDRSw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxvQ0FBb0M7RUFDdEM7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUEsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEI7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUNBLG1CQUFtQjtBQUNuQixtQkFBbUI7QUFDbkIsbUJBQW1COztBQUVuQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBLG1CQUFtQjtBQUNuQjtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCx5QkFBeUI7QUFDM0I7OztFQUdFLFdBQVc7Q0FDWixXQUFXO0FBQ1osV0FBVzs7QUFFWDtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcXG4gIGNvbG9yOiAjMjEyMTIxO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4vKiAgICAgICAgICAgICovXFxuLyogQU5JTUFUSU9OUyAqL1xcbi8qICAgICAgICAgICAqL1xcbkBrZXlmcmFtZXMgbG9nb1JvdGF0aW9uIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpIHJvdGF0ZSg3MjBkZWcpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuLyogICAgICAgICAgICAgICAqL1xcbi8qIFNUWUxFIENMQVNTRVMgKi9cXG4vKiAgICAgICAgICAgICAgICovXFxuLmZsZXhSb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmZsZXhDb2x1bW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jZW50ZXJlZCB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zcGFjZWRFdmVubHkge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5zcGFjZWRBcGFydCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zb2Z0Qm9yZGVyIHtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi8qICAgICAgICAgICAgICAgICovXFxuLyogTUFJTiBDT05UQUlORVIgKi9cXG4vKiAgICAgICAgICAgICAgICAqL1xcblxcbiNtYWluQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4vKiBOYXZpZ2F0aW9uIEJhciAqL1xcbiNuYXZDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbSAwIDA7XFxufVxcblxcbiNzaXRlVGl0bGUge1xcbn1cXG5cXG4jc2l0ZUxvZ28ge1xcbn1cXG5cXG4jc2l0ZU5hbWUge1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jbWVudUJhciB7XFxuICBnYXA6IDJyZW07XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICB0b3A6IDBweDtcXG59XFxuXFxuLm1lbnVJdGVtIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jbWVudUljb24ge1xcbiAgei1pbmRleDogNTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHdpZHRoOiAzcmVtO1xcbn1cXG5cXG4vKiBSZWNpcGUgRWRpdG9yICovXFxuI3JlY2lwZUVkaXRvckZvcm0ge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbiNyZWNpcGVFZGl0b3JGb3JtRmllbGRzZXQge1xcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcblxcbiNyZWNpcGVFZGl0b3JGb3JtRmllbGRzZXQgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG5cXG4gIC8qICAgICAgICAqL1xcbiAvKiBGT09URVIgKi9cXG4vKiAgICAgICAgKi9cXG5cXG4jZ2l0TG9nbyB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG59XFxuXFxuI2dpdExvZ286aG92ZXIge1xcbiAgYW5pbWF0aW9uOiBsb2dvUm90YXRpb24gMC43NXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBnaXRodWJMb2dvIGZyb20gXCIuL2dpdGh1Yi5zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEZvb3RlcigpIHtcbiAgbGV0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZm9vdGVyVGV4dC50ZXh0Q29udGVudCA9IFwiwqkgMjAyMyBNYXR0IFRhbGxleSAoc29jcmFzdGVpbilcIjtcblxuICBsZXQgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBsb2dvQ29udGFpbmVyLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9zb2NyYXN0ZWluXCI7XG4gIGxvZ29Db250YWluZXIudGFyZ2V0ID0gXCJfYmxhbmtcIjtcblxuICBsZXQgbG9nb0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgbG9nb0ltYWdlLmlkID0gXCJnaXRMb2dvXCI7XG4gIGxvZ29JbWFnZS5zcmMgPSBnaXRodWJMb2dvO1xuXG4gIGNvbnN0IGluZGV4Rm9vdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJmb290ZXJcIik7XG5cbiAgaW5kZXhGb290ZXJbMF0uYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XG4gIGluZGV4Rm9vdGVyWzBdLmFwcGVuZENoaWxkKGxvZ29Db250YWluZXIpO1xuICBsb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29JbWFnZSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbG9hZFJlY2lwZUVkaXRvcigpIHtcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkNvbnRhaW5lclwiKTtcbiAgY29uc3QgcmVjaXBlRWRpdG9yQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcmVjaXBlRWRpdG9yQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZmxleENvbHVtbiBzcGFjZWRFdmVubHkgaGlkZGVuXCIpO1xuICByZWNpcGVFZGl0b3JDb250YWluZXIuaWQgPSBcInJlY2lwZUVkaXRvckNvbnRhaW5lclwiO1xuXG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocmVjaXBlRWRpdG9yQ29udGFpbmVyKTtcblxuICAvLyBSRUNJUEUgRURJVElORyBGT1JNXG4gIGNvbnN0IHJlY2lwZUVkaXRvckZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgcmVjaXBlRWRpdG9yRm9ybS5pZCA9IFwicmVjaXBlRWRpdG9yRm9ybVwiO1xuICByZWNpcGVFZGl0b3JGb3JtLmFjdGlvbiA9IFwiaW5kZXguaHRtbFwiO1xuICByZWNpcGVFZGl0b3JGb3JtLm1ldGhvZCA9IFwicG9zdFwiO1xuICByZWNpcGVFZGl0b3JDb250YWluZXIuYXBwZW5kQ2hpbGQocmVjaXBlRWRpdG9yRm9ybSk7XG5cbiAgY29uc3QgcmVjaXBlRWRpdG9yRm9ybUZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xuICByZWNpcGVFZGl0b3JGb3JtRmllbGRzZXQuaWQgPSBcInJlY2lwZUVkaXRvckZvcm1GaWVsZHNldFwiO1xuICByZWNpcGVFZGl0b3JGb3JtLmFwcGVuZENoaWxkKHJlY2lwZUVkaXRvckZvcm1GaWVsZHNldCk7XG5cbiAgY29uc3QgcmVjaXBlRWRpdG9yRm9ybUZpZWxkc2V0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xuICByZWNpcGVFZGl0b3JGb3JtRmllbGRzZXRUaXRsZS50ZXh0Q29udGVudCA9IFwiRWRpdCBSZWNpcGVcIjtcbiAgcmVjaXBlRWRpdG9yRm9ybUZpZWxkc2V0LmFwcGVuZENoaWxkKHJlY2lwZUVkaXRvckZvcm1GaWVsZHNldFRpdGxlKTtcblxuICBjb25zdCBmb3JtVmFsdWVBcnJheSA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogXCJDYXRlZ29yeVwiLFxuICAgICAgdHlwZTogXCJzZWxlY3RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIk5hbWVcIixcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiSW5ncmVkaWVudHNcIixcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiSW5zdHJ1Y3Rpb25zXCIsXG4gICAgICB0eXBlOiBcInRleHRBcmVhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJOb3Rlc1wiLFxuICAgICAgdHlwZTogXCJ0ZXh0QXJlYVwiLFxuICAgIH0sXG4gIF07XG5cbiAgZm9yIChsZXQgaSBpbiBmb3JtVmFsdWVBcnJheSkge1xuICAgIGxldCB0aXRsZSA9IGZvcm1WYWx1ZUFycmF5W2ldLnRpdGxlO1xuICAgIGxldCB0eXBlID0gZm9ybVZhbHVlQXJyYXlbaV0udHlwZTtcblxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5pZCA9IGBmb3JtJHt0aXRsZX1Db250YWluZXJgO1xuICAgIHJlY2lwZUVkaXRvckZvcm1GaWVsZHNldC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYCR7dGl0bGV9OiBgO1xuICAgIGxhYmVsLmlkID0gYGZvcm0ke3RpdGxlfUxhYmVsYDtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgYGZvcm0ke3RpdGxlfUlucHV0YCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC5pZCA9IGBmb3JtJHt0aXRsZX1JbnB1dGA7XG4gICAgaW5wdXQubmFtZSA9IGBmb3JtJHt0aXRsZX1JbnB1dGA7XG4gICAgaW5wdXQudHlwZSA9IHR5cGU7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1JlY2lwZUVkaXRvcihyZWNpcGUgPSB1bmRlZmluZWQpIHtcbiAgaWYgKHJlY2lwZSkge1xuICAgIGxldCBuYW1lID0gcmVjaXBlLm5hbWU7XG4gICAgbGV0IGluZ3JlZGllbnRzID0gcmVjaXBlLmluZ3JlZGllbnRzO1xuICAgIGxldCBpbnN0cnVjdGlvbnMgPSByZWNpcGUuaW5zdHJ1Y3Rpb25zO1xuICAgIGxldCBub3RlcyA9IHJlY2lwZS5ub3RlcztcbiAgfVxufVxuIiwiaW1wb3J0IG1lbnVTVkcgZnJvbSBcIi4vbWVudS5zdmdcIjtcbi8vIGltcG9ydCBzaXRlTG9nbyBmcm9tIFwiLi9sb2dvLnN2Z1wiO1xuXG5pbXBvcnQgeyBtb2JpbGVNZW51SGlkZSwgbW9iaWxlTWVudVNob3cgfSBmcm9tIFwiLi90b2dnbGVNZW51XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWROYXZCYXIoKSB7XG4gIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQ29udGFpbmVyXCIpO1xuXG4gIGxldCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYXZDb250YWluZXIuaWQgPSBcIm5hdkNvbnRhaW5lclwiO1xuICBuYXZDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZsZXhSb3dcIiwgXCJzcGFjZWRBcGFydFwiKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZDb250YWluZXIpO1xuXG4gIGxldCBzaXRlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaXRlVGl0bGUuaWQgPSBcInNpdGVUaXRsZVwiO1xuICBuYXZDb250YWluZXIuYXBwZW5kQ2hpbGQoc2l0ZVRpdGxlKTtcblxuICAvLyBsZXQgc2l0ZUxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAvLyBzaXRlTG9nby5pZCA9IFwic2l0ZUxvZ29cIjtcbiAgLy8gc2l0ZUxvZ28uc3JjID0gc2l0ZUxvZ287XG4gIC8vIHNpdGVUaXRsZS5hcHBlbmRDaGlsZChzaXRlTG9nbyk7XG5cbiAgbGV0IHNpdGVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHNpdGVOYW1lLmlkID0gXCJzaXRlTmFtZVwiO1xuICBzaXRlTmFtZS50ZXh0Q29udGVudCA9IFwiUmVjaXBlIEJveFwiO1xuICBzaXRlVGl0bGUuYXBwZW5kQ2hpbGQoc2l0ZU5hbWUpO1xuXG4gIGxldCBtZW51QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUJhci5pZCA9IFwibWVudUJhclwiO1xuICBtZW51QmFyLmNsYXNzTGlzdC5hZGQoXCJmbGV4Um93XCIpO1xuICBuYXZDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUJhcik7XG5cbiAgbGV0IG1lbnVJdGVtcyA9IFtcbiAgICB7IG5hbWU6IFwiSVRFTSAxXCIsIG9uQ2xpY2s6IFwiZnVuY3Rpb24xKClcIiB9LCAvL1RPRE86IEZJTEwgVEhFU0UgSU5cbiAgICB7IG5hbWU6IFwiSVRFTSAyXCIsIG9uQ2xpY2s6IFwiZnVuY3Rpb24yKClcIiB9LFxuICAgIHsgbmFtZTogXCJJVEVNIDNcIiwgb25DbGljazogXCJmdW5jdGlvbjMoKVwiIH0sXG4gIF07XG5cbiAgbWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBsZXQgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBtZW51SXRlbS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICBtZW51SXRlbS5vbmNsaWNrID0gaXRlbS5vbkNsaWNrO1xuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51SXRlbVwiKTtcbiAgICBtZW51QmFyLmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgfSk7XG5cbiAgbGV0IG1lbnVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgbWVudUljb24uc3JjID0gbWVudVNWRztcbiAgbWVudUljb24uaWQgPSBcIm1lbnVJY29uXCI7XG4gIG1lbnVJY29uLm9uY2xpY2sgPSBtb2JpbGVNZW51U2hvdztcbiAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJY29uKTtcbn1cbiIsImltcG9ydCB7IG1vYmlsZU1lbnVIaWRlIH0gZnJvbSBcIi4vdG9nZ2xlTWVudVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvblJlc2l6ZSgpIHtcbiAgbGV0IHNjcmVlbldpZHRoID0gd2luZG93LnNjcmVlbi53aWR0aDtcbiAgY29uc3QgbWVudUJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudUJhclwiKTtcbiAgY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVJY29uXCIpO1xuXG4gIGlmIChtZW51QmFyLmNsYXNzTGlzdC5jb250YWlucyhcImZsZXhDb2x1bW5cIikpe1xuICAgIG1vYmlsZU1lbnVIaWRlKCk7IC8vIElmIG1vYmlsZSBtZW51IGlzIGN1cnJlbnRseSBvcGVuLCBzaW5jZSBpdCBkaXNwbGF5cyBpbiBhIGNvbHVtblxuICB9XG4gIFxuXG4gIGlmIChzY3JlZW5XaWR0aCA8IDYwMCkge1xuICAgIC8vIHNpdGVMb2dvLnN0eWxlLmhlaWdodCA9IFwiMzBweFwiO1xuICAgIC8vIHNpdGVMb2dvLnN0eWxlLndpZHRoID0gXCIzMHB4XCI7XG4gICAgbWVudUJhci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIG1lbnVJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgXG4gIH0gZWxzZSB7XG4gICAgLy8gc2l0ZUxvZ28uc3R5bGUuaGVpZ2h0ID0gXCI1MHB4XCI7XG4gICAgLy8gc2l0ZUxvZ28uc3R5bGUud2lkdGggPSBcIjUwcHhcIjtcbiAgICBtZW51QmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgbWVudUljb24uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfVxufSIsImltcG9ydCB4U1ZHIGZyb20gXCIuL3guc3ZnXCI7XG5pbXBvcnQgbWVudVNWRyBmcm9tIFwiLi9tZW51LnN2Z1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbW9iaWxlTWVudUhpZGUoKSB7XG4gIGNvbnN0IG1lbnVCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVCYXJcIik7XG4gIGNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51SWNvblwiKTtcbiAgXG4gIG1lbnVCYXIuc3R5bGUucG9zaXRpb24gPSBcInN0YXRpY1wiO1xuICBjb25zb2xlLmxvZyhcIkNoYW5naW5nIHBvc2l0aW9uXCIpO1xuICBtZW51QmFyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjFyZW1cIjtcbiAgbWVudUJhci5zdHlsZS53aWR0aCA9IFwiXCI7XG4gIG1lbnVCYXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmbGV4Um93IGhpZGRlblwiKTtcblxuICBtZW51SWNvbi5zcmMgPSBtZW51U1ZHO1xuICBtZW51SWNvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbW9iaWxlTWVudUhpZGUpO1xuICBtZW51SWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbW9iaWxlTWVudVNob3cpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW9iaWxlTWVudVNob3coKSB7XG4gIGNvbnN0IG1lbnVCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVCYXJcIik7XG4gIGNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51SWNvblwiKTtcblxuICBtZW51QmFyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZmxleENvbHVtbiBjZW50ZXJlZFwiKTtcbiAgbWVudUJhci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgbWVudUJhci5zdHlsZS5wYWRkaW5nVG9wID0gXCIycmVtXCI7XG4gIG1lbnVCYXIuc3R5bGUud2lkdGggPSBcIjEwMHZ3XCI7XG5cbiAgbWVudUljb24uc3JjID0geFNWRztcbiAgbWVudUljb24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1vYmlsZU1lbnVTaG93KTtcbiAgbWVudUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1vYmlsZU1lbnVIaWRlKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG4vLyBJTVBPUlRJTkcgSU1BR0VTOlxuLy8gaW1wb3J0IG15SW1hZ2UgZnJvbSAnLi9teS1pbWFnZS5wbmcnXG5cblxuXG4vLyBJTVBPUlRJTkcgTU9EVUxFUzpcbi8vIGltcG9ydCBteUZ1bmN0aW9uIGZyb20gJy4vbW9kdWxlJ1xuaW1wb3J0IGxvYWRGb290ZXIgZnJvbSBcIi4vY29tcG9uZW50cy9mb290ZXIvZm9vdGVyXCI7XG5pbXBvcnQgbG9hZE5hdkJhciBmcm9tIFwiLi9jb21wb25lbnRzL25hdmJhci9uYXZCYXJcIjtcbmltcG9ydCBvblJlc2l6ZSBmcm9tIFwiLi9jb21wb25lbnRzL25hdmJhci9uYXZCYXJSZXNpemVcIjtcbmltcG9ydCB7IG1vYmlsZU1lbnVIaWRlLCBtb2JpbGVNZW51U2hvdyB9IGZyb20gXCIuL2NvbXBvbmVudHMvbmF2YmFyL3RvZ2dsZU1lbnVcIjtcbmltcG9ydCB7IGxvYWRSZWNpcGVFZGl0b3IsIHNob3dSZWNpcGVFZGl0b3IgfSBmcm9tIFwiLi9jb21wb25lbnRzL21haW5EaXNwbGF5L3JlY2lwZUVkaXRvclwiO1xuXG5cbi8vIENPTlNUQU5UIEVMRU1FTlRTXG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQ29udGFpbmVyXCIpO1xuXG4vLyBFVkVOVCBMSVNURU5FUlNcbi8vIEZvciBkaXNwbGF5aW5nIG1vYmlsZSBtZW51IHdoZW4gc2NyZWVuIDwgNTAwcHggd2lkZVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgb25SZXNpemUpO1xuXG4vLyBSVU4gRlVOQ1RJT05TIFRPIExPQUQgQ09OVEVOVDpcbmNvbnNvbGUubG9nKFwiVGVzdGluZ1wiKTtcblxubG9hZE5hdkJhcigpO1xub25SZXNpemUoKTtcblxubG9hZFJlY2lwZUVkaXRvcigpO1xuXG5sb2FkRm9vdGVyKCk7XG5cbi8vIENPTlNUQU5UIEVMRU1FTlRTIChjcmVhdGVkIGJ5IGxvYWRpbmcgZnVuY3Rpb25zKVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=