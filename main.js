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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/barista-holding-cup.jpg */ "./src/images/barista-holding-cup.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n  box-sizing: border-box;\n}\n\nh1, h2, h3, h4, h5, h6,\nfigure,\nbody,\nul {\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --white-color:             hsl(0, 0%, 93%);\n  --turquoise-color:      hsl(181, 100%, 30%);\n  --dark-turquoise-color: hsl(181, 100%, 10%);\n}\n\nhtml {\n  background-color: var(--white-color);\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 16px;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  transition: 0.25s;\n}\n\nh1 {\n  font-size: 2rem;\n  margin-bottom: 0.5rem;\n  text-align: center;\n}\n\nh2 {\n  color: var(--turquoise-color);\n  font-size: 1.5rem;\n  margin-bottom: 0.5rem;\n}\n\nfigcaption {\n  font-weight: bold;\n  text-align: center;\n}\n\nheader {\n  background-color: var(--white-color);\n  border-bottom: 2px solid black;\n  position: fixed;\n  width: 100%;\n  z-index: 10;\n}\n\n.header__wrapper {\n  align-items: center;\n  display: flex;\n  margin: 0 auto;\n  max-width: 1800px;\n  padding: 1.0rem;\n}\n\nheader svg {\n  color: var(--turquoise-color);\n  height: 48px;\n  width: 48px;\n}\n\nnav {\n  flex: 1;\n}\n\nnav ul {\n  display: flex;\n  justify-content: end;\n  gap: 2rem;\n}\n\nnav a {\n  color: var(--turquoise-color);\n  font-weight: bold;\n  text-decoration: underline;\n}\n\nnav a:hover {\n  color: var(--dark-turquoise-color);\n  cursor: pointer;\n  text-decoration: none;\n}\n\nmain {\n  flex: 1;\n  margin-top: 5rem;\n}\n\np {\n  font-size: 1.125rem;\n  line-height: 1.5;\n  margin: 0;\n}\n\n.banner {\n  align-items: center;\n  background-image: linear-gradient(\n                      rgba(0, 0, 0, 0.3),\n                      rgba(0, 0, 0, 0.3)\n                    ),\n                    url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center;\n  background-size: cover;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  height: 500px;\n  justify-content: center;\n  margin-bottom: 3rem;\n}\n\n.banner section {\n  background: rgba(0, 0, 0, 0.6);\n  border-radius: 15px;\n  margin: 0 1rem;\n  max-width: 550px;\n  padding: 2.5rem;\n}\n\n.gallery {\n  display: flex;\n  flex-flow: row wrap;\n  gap: 5rem;\n  justify-content: center;\n  margin-bottom: 2rem;\n}\n\n.gallery img {\n  border: 3px solid var(--turquoise-color);\n  border-radius: 5px;\n  margin-bottom: 0.25rem;\n}\n\n.menu {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.menu__heading {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n.menu__heading::before {\n  color: var(--turquoise-color);\n  content: \"\\2022  \";\n}\n\n.menu__heading::after {\n  color: var(--turquoise-color);\n  content: \"  \\2022\";\n}\n\n.menu__container {\n  display: flex;\n  flex-direction: column;\n  font-family: mono;\n  gap: 1rem;\n  margin-bottom: 3rem;\n  width: 320px;\n}\n\n.menu__container__item {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n\n.menu__container__item p {\n  font-size: 1.125rem;\n}\n\n.location-section {\n  margin-bottom: 2rem;\n  text-align: center;\n}\n\n.location-section img {\n  border: 3px solid var(--turquoise-color);\n  border-radius: 50%;\n  height: 100px;\n  margin-bottom: 0.5rem;\n}\n\n.hour-section {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 3rem;\n}\n\n.hour-section__container {\n  display: flex;\n  gap: 6rem;\n}\n\n.contact-heading {\n  margin: 1rem 0;\n}\n\n.contact-section {\n  margin-bottom: 3rem;\n  text-align: center;\n}\n\n.contact-section p {\n  margin-bottom: 0.5rem;\n}\n\nfooter {\n  align-items: center;\n  background-color: var(--turquoise-color);\n  display: flex;\n  justify-content: center;\n}\n\nfooter svg {\n  height: 24px;\n  width: 24px;\n}\n\nfooter a {\n  color: black;\n  padding: 1rem;\n}\n\nfooter a:hover {\n  background-color: var(--dark-turquoise-color);\n  color: white;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;;;;EAIE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,0CAA0C;EAC1C,2CAA2C;EAC3C,2CAA2C;AAC7C;;AAEA;EACE,oCAAoC;EACpC,oCAAoC;EACpC,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;EAC7B,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,oCAAoC;EACpC,8BAA8B;EAC9B,eAAe;EACf,WAAW;EACX,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,cAAc;EACd,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,aAAa;EACb,oBAAoB;EACpB,SAAS;AACX;;AAEA;EACE,6BAA6B;EAC7B,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,kCAAkC;EAClC,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,OAAO;EACP,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,SAAS;AACX;;AAEA;EACE,mBAAmB;EACnB;;;;2DAIyD;EACzD,2BAA2B;EAC3B,sBAAsB;EACtB,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,8BAA8B;EAC9B,mBAAmB;EACnB,cAAc;EACd,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,wCAAwC;EACxC,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,SAAS;EACT,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,wCAAwC;EACxC,kBAAkB;EAClB,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;EACnB,wCAAwC;EACxC,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,6CAA6C;EAC7C,YAAY;AACd","sourcesContent":["*, *::before, *::after {\n  box-sizing: border-box;\n}\n\nh1, h2, h3, h4, h5, h6,\nfigure,\nbody,\nul {\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --white-color:             hsl(0, 0%, 93%);\n  --turquoise-color:      hsl(181, 100%, 30%);\n  --dark-turquoise-color: hsl(181, 100%, 10%);\n}\n\nhtml {\n  background-color: var(--white-color);\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 16px;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  transition: 0.25s;\n}\n\nh1 {\n  font-size: 2rem;\n  margin-bottom: 0.5rem;\n  text-align: center;\n}\n\nh2 {\n  color: var(--turquoise-color);\n  font-size: 1.5rem;\n  margin-bottom: 0.5rem;\n}\n\nfigcaption {\n  font-weight: bold;\n  text-align: center;\n}\n\nheader {\n  background-color: var(--white-color);\n  border-bottom: 2px solid black;\n  position: fixed;\n  width: 100%;\n  z-index: 10;\n}\n\n.header__wrapper {\n  align-items: center;\n  display: flex;\n  margin: 0 auto;\n  max-width: 1800px;\n  padding: 1.0rem;\n}\n\nheader svg {\n  color: var(--turquoise-color);\n  height: 48px;\n  width: 48px;\n}\n\nnav {\n  flex: 1;\n}\n\nnav ul {\n  display: flex;\n  justify-content: end;\n  gap: 2rem;\n}\n\nnav a {\n  color: var(--turquoise-color);\n  font-weight: bold;\n  text-decoration: underline;\n}\n\nnav a:hover {\n  color: var(--dark-turquoise-color);\n  cursor: pointer;\n  text-decoration: none;\n}\n\nmain {\n  flex: 1;\n  margin-top: 5rem;\n}\n\np {\n  font-size: 1.125rem;\n  line-height: 1.5;\n  margin: 0;\n}\n\n.banner {\n  align-items: center;\n  background-image: linear-gradient(\n                      rgba(0, 0, 0, 0.3),\n                      rgba(0, 0, 0, 0.3)\n                    ),\n                    url(\"./images/barista-holding-cup.jpg\");\n  background-position: center;\n  background-size: cover;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  height: 500px;\n  justify-content: center;\n  margin-bottom: 3rem;\n}\n\n.banner section {\n  background: rgba(0, 0, 0, 0.6);\n  border-radius: 15px;\n  margin: 0 1rem;\n  max-width: 550px;\n  padding: 2.5rem;\n}\n\n.gallery {\n  display: flex;\n  flex-flow: row wrap;\n  gap: 5rem;\n  justify-content: center;\n  margin-bottom: 2rem;\n}\n\n.gallery img {\n  border: 3px solid var(--turquoise-color);\n  border-radius: 5px;\n  margin-bottom: 0.25rem;\n}\n\n.menu {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.menu__heading {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n.menu__heading::before {\n  color: var(--turquoise-color);\n  content: \"\\2022  \";\n}\n\n.menu__heading::after {\n  color: var(--turquoise-color);\n  content: \"  \\2022\";\n}\n\n.menu__container {\n  display: flex;\n  flex-direction: column;\n  font-family: mono;\n  gap: 1rem;\n  margin-bottom: 3rem;\n  width: 320px;\n}\n\n.menu__container__item {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n\n.menu__container__item p {\n  font-size: 1.125rem;\n}\n\n.location-section {\n  margin-bottom: 2rem;\n  text-align: center;\n}\n\n.location-section img {\n  border: 3px solid var(--turquoise-color);\n  border-radius: 50%;\n  height: 100px;\n  margin-bottom: 0.5rem;\n}\n\n.hour-section {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 3rem;\n}\n\n.hour-section__container {\n  display: flex;\n  gap: 6rem;\n}\n\n.contact-heading {\n  margin: 1rem 0;\n}\n\n.contact-section {\n  margin-bottom: 3rem;\n  text-align: center;\n}\n\n.contact-section p {\n  margin-bottom: 0.5rem;\n}\n\nfooter {\n  align-items: center;\n  background-color: var(--turquoise-color);\n  display: flex;\n  justify-content: center;\n}\n\nfooter svg {\n  height: 24px;\n  width: 24px;\n}\n\nfooter a {\n  color: black;\n  padding: 1rem;\n}\n\nfooter a:hover {\n  background-color: var(--dark-turquoise-color);\n  color: white;\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderContact)
/* harmony export */ });
/* harmony import */ var _dom_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_helpers */ "./src/dom_helpers.js");
/* harmony import */ var _images_coffee_table_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/coffee-table.png */ "./src/images/coffee-table.png");



const entryPoint = document.getElementById("content");

const locationContent = {
  tag: "section",
  attributes: { class: "location-section" },
  children: [
    { tag: "h2", text: "Visit Our Store" },
    { tag: "img", attributes: { src: _images_coffee_table_png__WEBPACK_IMPORTED_MODULE_1__ } },
    { tag: "address", text: "1234 Rocky Mountain Lane, Colorado Springs, CO" },
  ],
}

const hoursContent = {
  tag: "section",
  attributes: { class: "hour-section" },
  children: [
    { tag: "h2", text: "Hours" },
    {
      attributes: { class: "hour-section__container" },
      children: [
        {
          children: [
            { tag: "p", text: "Mon-Fri" },
            { tag: "p", text: "Sat" },
            { tag: "p", text: "Sun" },
          ]
        },
        {
          children: [
            { tag: "p", text: "6am-4pm" },
            { tag: "p", text: "6am-7pm" },
            { tag: "p", text: "CLOSED" }
          ]
        }
      ]
    }
  ]
}

const contactContent = {
  tag: "section",
  attributes: { class: "contact-section" },
  children: [
    { tag: "h2", text: "Contact Us" },
    { tag: "h3", text: "By Phone:" },
    { tag: "p", text: "719-555-4636" },
    { tag: "h3", text: "By Email:" },
    { tag: "p", text: "rockymtncafe@email.com" }
  ]
}

const pageContent = {
  tag: "section",
  children: [
    { tag: "h1", text: "Contact Us", attributes: { class: "contact-heading" } },
    locationContent,
    hoursContent,
    contactContent
  ]
}

// Location & Hours information
function renderContact() {
  console.log("happens")
  entryPoint.replaceChildren();

  const fragment = document.createDocumentFragment();
  fragment.appendChild((0,_dom_helpers__WEBPACK_IMPORTED_MODULE_0__.buildElement)(pageContent));

  entryPoint.appendChild(fragment);
}


/***/ }),

/***/ "./src/dom_helpers.js":
/*!****************************!*\
  !*** ./src/dom_helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildElement": () => (/* binding */ buildElement)
/* harmony export */ });
const toArray = (value) => Array.isArray(value) ? value : [value];

const isSVG = (element) => element.tag === "svg";

const buildElement = (opts) => {
  const element = document.createElement(opts.tag || "div");
  for (const [prop, value] of Object.entries(opts)) {
    switch (prop) {
      case "tag":
        break;
      case "text":
        element.textContent = value;
        break;
      case "attributes":
        for (const [attr, attrVal] of Object.entries(value)) {
          element.setAttribute(attr, attrVal);
        }
        break;
      case "events":
        toArray(value).map(({ type, handler }) => {
          element.addEventListener(type, handler);
        })
        break;
      case "children":
        toArray(value).map((child) => {
          if (isSVG(child)) {
            element.innerHTML = child.data;
          } else {
            const childEl = buildElement(child);
            element.appendChild(childEl);
          }
        })
        break;
      default:
    }
  }
  return element;
}




/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderHeader)
/* harmony export */ });
/* harmony import */ var _dom_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_helpers */ "./src/dom_helpers.js");
/* harmony import */ var _icons_github_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/github.svg */ "./src/icons/github.svg");



const footerProps = {
  tag: "footer",
  children: {
    tag: "a",
    attributes: {
      href: "https://github.com/JoshDevHub/Restaurant",
      target: "_blank"
    },
    children: {
      tag: "svg",
      data: _icons_github_svg__WEBPACK_IMPORTED_MODULE_1__,
    }
  }
}

function renderHeader() {
  const fragment = document.createDocumentFragment();
  fragment.appendChild((0,_dom_helpers__WEBPACK_IMPORTED_MODULE_0__.buildElement)(footerProps));

  document.body.appendChild(fragment);
}


/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderHeader)
/* harmony export */ });
/* harmony import */ var _dom_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_helpers */ "./src/dom_helpers.js");
/* harmony import */ var _images_coffee_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/coffee.svg */ "./src/images/coffee.svg");



const entryPoint = document.getElementById("content");

const headerProps = {
  tag: "header",
  children: {
    attributes: { class: "header__wrapper" },
    children: [
      {
        tag: "svg",
        data: _images_coffee_svg__WEBPACK_IMPORTED_MODULE_1__
      },
      {
        tag: "nav",
        children: {
          tag: "ul",
          children: [],
        }
      }
    ],
  },
}

const NAV_LINK_TEXT_CONTENT = {
  home: "Home",
  menu: "Menu",
  contact: "Contact"
}

const buildNavLink = (component, handler) => {
  return (0,_dom_helpers__WEBPACK_IMPORTED_MODULE_0__.buildElement)({
    tag: "li",
    children: {
      tag: "a",
      text: NAV_LINK_TEXT_CONTENT[component],
      events: { type: "click", handler }
    }
  })
}

function renderHeader(navFunctions) {
  const fragment = document.createDocumentFragment();
  fragment.appendChild((0,_dom_helpers__WEBPACK_IMPORTED_MODULE_0__.buildElement)(headerProps));
  const navLinkList = fragment.querySelector("ul");

  for (const [component, listener] of Object.entries(navFunctions)) {
    navLinkList.appendChild(buildNavLink(component, listener));
  }

  document.body.insertBefore(fragment, entryPoint)
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderHomeContent)
/* harmony export */ });
/* harmony import */ var _dom_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_helpers */ "./src/dom_helpers.js");
/* harmony import */ var _images_latte_coffee_200px_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/latte-coffee-200px.png */ "./src/images/latte-coffee-200px.png");
/* harmony import */ var _images_closeup_shot_roasted_coffee_beans_200px_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/closeup-shot-roasted-coffee-beans-200px.png */ "./src/images/closeup-shot-roasted-coffee-beans-200px.png");
/* harmony import */ var _images_gary_yost_54IXTVq_VvA_unsplash_200px_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/gary-yost-54IXTVq-VvA-unsplash-200px.png */ "./src/images/gary-yost-54IXTVq-VvA-unsplash-200px.png");





const entryPoint = document.getElementById("content");

const bannerDom = {
  tag: "div",
  attributes: { class: "banner" },
  children: {
    tag: "section",
    children: [
      { tag: "h1", text: "Rocky Mountain Cafe" },
      {
        tag: "p",
        text: `A cozy, rustic retreat nestled in the heart of the Rocky Mountains.
               With a warm, inviting atmosphere and stunning views, our coffee
               shop is the perfect place to relax and unwind with a steaming cup
               of freshly brewed coffee.`
      }
    ]
  }
}

const renderBanner = () => {
  const fragment = document.createDocumentFragment();
  fragment.appendChild((0,_dom_helpers__WEBPACK_IMPORTED_MODULE_0__.buildElement)(bannerDom));

  entryPoint.appendChild(fragment);
}

const galleryImages = [
  { img: _images_latte_coffee_200px_png__WEBPACK_IMPORTED_MODULE_1__, caption: "Delicious espresso drinks", alt: "" },
  { img: _images_closeup_shot_roasted_coffee_beans_200px_png__WEBPACK_IMPORTED_MODULE_2__, caption: "Fresh roasted coffee beans", alt: "" },
  { img: _images_gary_yost_54IXTVq_VvA_unsplash_200px_png__WEBPACK_IMPORTED_MODULE_3__, caption: "Gorgeous mountain vistas", alt: "" },
]

const figureDom = ({ img, caption, alt }) => {
  return {
    tag: "figure",
    children: [
      { tag: "img", attributes: { src: img, alt: alt } },
      { tag: "figcaption", text: caption }
    ]
  }
}

const renderGallery = () => {
  const fragment = document.createDocumentFragment();
  const container = fragment.appendChild((0,_dom_helpers__WEBPACK_IMPORTED_MODULE_0__.buildElement)({ attributes: { class: "gallery" } }));
  galleryImages.forEach((galleryImage) => {
    const figureObject = figureDom(galleryImage);
    container.appendChild((0,_dom_helpers__WEBPACK_IMPORTED_MODULE_0__.buildElement)(figureObject));
  })
  entryPoint.appendChild(fragment);
}

function renderHomeContent() {
  entryPoint.replaceChildren();

  renderBanner();
  renderGallery();
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderMenu)
/* harmony export */ });
/* harmony import */ var _dom_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_helpers */ "./src/dom_helpers.js");


const entryPoint = document.getElementById("content");

const domTreeForItem = ({name, price}) => {
  return {
    attributes: { class: "menu__container__item" },
    children: [
      { tag: "p", text: name },
      { tag: "p", text: price },
    ]
  }
}

const buildMenuSection = (sectionName, ...sectionContent) => {
  const itemTree = sectionContent.map(domTreeForItem);
  return {
    tag: "section",
    children: [
      {
        tag: "h2",
        text: sectionName,
        attributes: { class: "menu__container__heading" }
      },
      ...itemTree
    ]
  }
}

const menuContent = {
  tag: "section",
  attributes: { class: "menu" },
  children: [
    {
      tag: "h1",
      text: "Menu",
      attributes: { class: "menu__heading" },
    },
    {
      attributes: { class: "menu__container" },
      children: [
        buildMenuSection(
          "Brewed Coffee",
          { name: "Brewed Dark Roast", price: "2.00" },
          { name: "Brewed Light Roast", price: "2.00" }
        ),
        buildMenuSection(
          "Espresso Drinks",
          { name: "Americano", price: "2.50" },
          { name: "Caffe Mocha", price: "3.25" },
          { name: "Cappuccino", price: "3.25" },
          { name: "Flat White", price: "3.50" },
          { name: "Latte", price: "3.25" },
          { name: "Macchiato", price: "3.00" },
        ),
        buildMenuSection(
          "Cold Coffee",
          { name: "Cold Brew", price: "3.50" },
          { name: "Iced Americano", price: "2.75" },
        )
      ]
    }
  ]
}

function renderMenu() {
  entryPoint.replaceChildren();
  const fragment = document.createDocumentFragment();
  fragment.appendChild((0,_dom_helpers__WEBPACK_IMPORTED_MODULE_0__.buildElement)(menuContent));

  entryPoint.appendChild(fragment);
}


/***/ }),

/***/ "./src/images/barista-holding-cup.jpg":
/*!********************************************!*\
  !*** ./src/images/barista-holding-cup.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2ce05641b8bd37b9a1ad.jpg";

/***/ }),

/***/ "./src/images/closeup-shot-roasted-coffee-beans-200px.png":
/*!****************************************************************!*\
  !*** ./src/images/closeup-shot-roasted-coffee-beans-200px.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a464bbc3fec95e1e3dbc.png";

/***/ }),

/***/ "./src/images/coffee-table.png":
/*!*************************************!*\
  !*** ./src/images/coffee-table.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7dfac6acfa169f988732.png";

/***/ }),

/***/ "./src/images/gary-yost-54IXTVq-VvA-unsplash-200px.png":
/*!*************************************************************!*\
  !*** ./src/images/gary-yost-54IXTVq-VvA-unsplash-200px.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6b12127dfcd60d8ed879.png";

/***/ }),

/***/ "./src/images/latte-coffee-200px.png":
/*!*******************************************!*\
  !*** ./src/images/latte-coffee-200px.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2132578048b29876e935.png";

/***/ }),

/***/ "./src/icons/github.svg":
/*!******************************!*\
  !*** ./src/icons/github.svg ***!
  \******************************/
/***/ ((module) => {

module.exports = "<svg role=\"img\" viewBox=\"0 0 24 24\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"><title>GitHub</title><path d=\"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12\"/></svg>\n";

/***/ }),

/***/ "./src/images/coffee.svg":
/*!*******************************!*\
  !*** ./src/images/coffee.svg ***!
  \*******************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"48\" width=\"48\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z\" /></svg>\n";

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
/******/ 			"main": 0
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
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







(0,_header__WEBPACK_IMPORTED_MODULE_1__["default"])({
  home: _home__WEBPACK_IMPORTED_MODULE_0__["default"],
  menu: _menu__WEBPACK_IMPORTED_MODULE_3__["default"],
  contact: _contact__WEBPACK_IMPORTED_MODULE_4__["default"]
});

(0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_footer__WEBPACK_IMPORTED_MODULE_2__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXVDO0FBQ0g7QUFDQTtBQUNKO0FBQ007QUFDakI7O0FBRXJCLG1EQUFZO0FBQ1osUUFBUSw2Q0FBaUI7QUFDekIsUUFBUSw2Q0FBVTtBQUNsQixXQUFXLGdEQUFhO0FBQ3hCLENBQUM7O0FBRUQsaURBQWlCO0FBQ2pCLG1EQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9kb21faGVscGVycy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYmFyaXN0YS1ob2xkaW5nLWN1cC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsXFxuZmlndXJlLFxcbmJvZHksXFxudWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS13aGl0ZS1jb2xvcjogICAgICAgICAgICAgaHNsKDAsIDAlLCA5MyUpO1xcbiAgLS10dXJxdW9pc2UtY29sb3I6ICAgICAgaHNsKDE4MSwgMTAwJSwgMzAlKTtcXG4gIC0tZGFyay10dXJxdW9pc2UtY29sb3I6IGhzbCgxODEsIDEwMCUsIDEwJSk7XFxufVxcblxcbmh0bWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaDIge1xcbiAgY29sb3I6IHZhcigtLXR1cnF1b2lzZS1jb2xvcik7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuZmlnY2FwdGlvbiB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbi5oZWFkZXJfX3dyYXBwZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1heC13aWR0aDogMTgwMHB4O1xcbiAgcGFkZGluZzogMS4wcmVtO1xcbn1cXG5cXG5oZWFkZXIgc3ZnIHtcXG4gIGNvbG9yOiB2YXIoLS10dXJxdW9pc2UtY29sb3IpO1xcbiAgaGVpZ2h0OiA0OHB4O1xcbiAgd2lkdGg6IDQ4cHg7XFxufVxcblxcbm5hdiB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG5uYXYgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG5uYXYgYSB7XFxuICBjb2xvcjogdmFyKC0tdHVycXVvaXNlLWNvbG9yKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbm5hdiBhOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLXR1cnF1b2lzZS1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbm1haW4ge1xcbiAgZmxleDogMTtcXG4gIG1hcmdpbi10b3A6IDVyZW07XFxufVxcblxcbnAge1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5iYW5uZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICAgICAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjMpLFxcbiAgICAgICAgICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMylcXG4gICAgICAgICAgICAgICAgICAgICksXFxuICAgICAgICAgICAgICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG4uYmFubmVyIHNlY3Rpb24ge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgbWF4LXdpZHRoOiA1NTBweDtcXG4gIHBhZGRpbmc6IDIuNXJlbTtcXG59XFxuXFxuLmdhbGxlcnkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICBnYXA6IDVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5nYWxsZXJ5IGltZyB7XFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS10dXJxdW9pc2UtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcXG59XFxuXFxuLm1lbnUge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubWVudV9faGVhZGluZyB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLm1lbnVfX2hlYWRpbmc6OmJlZm9yZSB7XFxuICBjb2xvcjogdmFyKC0tdHVycXVvaXNlLWNvbG9yKTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjAyMiAgXFxcIjtcXG59XFxuXFxuLm1lbnVfX2hlYWRpbmc6OmFmdGVyIHtcXG4gIGNvbG9yOiB2YXIoLS10dXJxdW9pc2UtY29sb3IpO1xcbiAgY29udGVudDogXFxcIiAgXFxcXDIwMjJcXFwiO1xcbn1cXG5cXG4ubWVudV9fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1mYW1pbHk6IG1vbm87XFxuICBnYXA6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbiAgd2lkdGg6IDMyMHB4O1xcbn1cXG5cXG4ubWVudV9fY29udGFpbmVyX19pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4ubWVudV9fY29udGFpbmVyX19pdGVtIHAge1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG59XFxuXFxuLmxvY2F0aW9uLXNlY3Rpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxvY2F0aW9uLXNlY3Rpb24gaW1nIHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXR1cnF1b2lzZS1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4uaG91ci1zZWN0aW9uIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxufVxcblxcbi5ob3VyLXNlY3Rpb25fX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA2cmVtO1xcbn1cXG5cXG4uY29udGFjdC1oZWFkaW5nIHtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbn1cXG5cXG4uY29udGFjdC1zZWN0aW9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0LXNlY3Rpb24gcCB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbmZvb3RlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVycXVvaXNlLWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIHN2ZyB7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB3aWR0aDogMjRweDtcXG59XFxuXFxuZm9vdGVyIGEge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuZm9vdGVyIGE6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay10dXJxdW9pc2UtY29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOzs7O0VBSUUsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQywyQ0FBMkM7RUFDM0MsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLG9DQUFvQztFQUNwQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25COzs7OzJEQUl5RDtFQUN6RCwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHdDQUF3QztFQUN4QyxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw2Q0FBNkM7RUFDN0MsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNixcXG5maWd1cmUsXFxuYm9keSxcXG51bCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXdoaXRlLWNvbG9yOiAgICAgICAgICAgICBoc2woMCwgMCUsIDkzJSk7XFxuICAtLXR1cnF1b2lzZS1jb2xvcjogICAgICBoc2woMTgxLCAxMDAlLCAzMCUpO1xcbiAgLS1kYXJrLXR1cnF1b2lzZS1jb2xvcjogaHNsKDE4MSwgMTAwJSwgMTAlKTtcXG59XFxuXFxuaHRtbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oMiB7XFxuICBjb2xvcjogdmFyKC0tdHVycXVvaXNlLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG5maWdjYXB0aW9uIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuXFxuLmhlYWRlcl9fd3JhcHBlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxODAwcHg7XFxuICBwYWRkaW5nOiAxLjByZW07XFxufVxcblxcbmhlYWRlciBzdmcge1xcbiAgY29sb3I6IHZhcigtLXR1cnF1b2lzZS1jb2xvcik7XFxuICBoZWlnaHQ6IDQ4cHg7XFxuICB3aWR0aDogNDhweDtcXG59XFxuXFxubmF2IHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbm5hdiB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbm5hdiBhIHtcXG4gIGNvbG9yOiB2YXIoLS10dXJxdW9pc2UtY29sb3IpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxubmF2IGE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWRhcmstdHVycXVvaXNlLWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxubWFpbiB7XFxuICBmbGV4OiAxO1xcbiAgbWFyZ2luLXRvcDogNXJlbTtcXG59XFxuXFxucCB7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmJhbm5lciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgICAgICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMyksXFxuICAgICAgICAgICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC4zKVxcbiAgICAgICAgICAgICAgICAgICAgKSxcXG4gICAgICAgICAgICAgICAgICAgIHVybChcXFwiLi9pbWFnZXMvYmFyaXN0YS1ob2xkaW5nLWN1cC5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuXFxuLmJhbm5lciBzZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIG1heC13aWR0aDogNTUwcHg7XFxuICBwYWRkaW5nOiAyLjVyZW07XFxufVxcblxcbi5nYWxsZXJ5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgZ2FwOiA1cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uZ2FsbGVyeSBpbWcge1xcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tdHVycXVvaXNlLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XFxufVxcblxcbi5tZW51IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1lbnVfX2hlYWRpbmcge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5tZW51X19oZWFkaW5nOjpiZWZvcmUge1xcbiAgY29sb3I6IHZhcigtLXR1cnF1b2lzZS1jb2xvcik7XFxuICBjb250ZW50OiBcXFwiXFxcXDIwMjIgIFxcXCI7XFxufVxcblxcbi5tZW51X19oZWFkaW5nOjphZnRlciB7XFxuICBjb2xvcjogdmFyKC0tdHVycXVvaXNlLWNvbG9yKTtcXG4gIGNvbnRlbnQ6IFxcXCIgIFxcXFwyMDIyXFxcIjtcXG59XFxuXFxuLm1lbnVfX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtZmFtaWx5OiBtb25vO1xcbiAgZ2FwOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG4gIHdpZHRoOiAzMjBweDtcXG59XFxuXFxuLm1lbnVfX2NvbnRhaW5lcl9faXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLm1lbnVfX2NvbnRhaW5lcl9faXRlbSBwIHtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxufVxcblxcbi5sb2NhdGlvbi1zZWN0aW9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5sb2NhdGlvbi1zZWN0aW9uIGltZyB7XFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS10dXJxdW9pc2UtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLmhvdXItc2VjdGlvbiB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG4uaG91ci1zZWN0aW9uX19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNnJlbTtcXG59XFxuXFxuLmNvbnRhY3QtaGVhZGluZyB7XFxuICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuLmNvbnRhY3Qtc2VjdGlvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdC1zZWN0aW9uIHAge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1cnF1b2lzZS1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciBzdmcge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDI0cHg7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbmZvb3RlciBhOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstdHVycXVvaXNlLWNvbG9yKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGJ1aWxkRWxlbWVudCB9IGZyb20gXCIuL2RvbV9oZWxwZXJzXCI7XG5pbXBvcnQgY29mZmVlVGFibGUgZnJvbSBcIi4vaW1hZ2VzL2NvZmZlZS10YWJsZS5wbmdcIjtcblxuY29uc3QgZW50cnlQb2ludCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuY29uc3QgbG9jYXRpb25Db250ZW50ID0ge1xuICB0YWc6IFwic2VjdGlvblwiLFxuICBhdHRyaWJ1dGVzOiB7IGNsYXNzOiBcImxvY2F0aW9uLXNlY3Rpb25cIiB9LFxuICBjaGlsZHJlbjogW1xuICAgIHsgdGFnOiBcImgyXCIsIHRleHQ6IFwiVmlzaXQgT3VyIFN0b3JlXCIgfSxcbiAgICB7IHRhZzogXCJpbWdcIiwgYXR0cmlidXRlczogeyBzcmM6IGNvZmZlZVRhYmxlIH0gfSxcbiAgICB7IHRhZzogXCJhZGRyZXNzXCIsIHRleHQ6IFwiMTIzNCBSb2NreSBNb3VudGFpbiBMYW5lLCBDb2xvcmFkbyBTcHJpbmdzLCBDT1wiIH0sXG4gIF0sXG59XG5cbmNvbnN0IGhvdXJzQ29udGVudCA9IHtcbiAgdGFnOiBcInNlY3Rpb25cIixcbiAgYXR0cmlidXRlczogeyBjbGFzczogXCJob3VyLXNlY3Rpb25cIiB9LFxuICBjaGlsZHJlbjogW1xuICAgIHsgdGFnOiBcImgyXCIsIHRleHQ6IFwiSG91cnNcIiB9LFxuICAgIHtcbiAgICAgIGF0dHJpYnV0ZXM6IHsgY2xhc3M6IFwiaG91ci1zZWN0aW9uX19jb250YWluZXJcIiB9LFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7IHRhZzogXCJwXCIsIHRleHQ6IFwiTW9uLUZyaVwiIH0sXG4gICAgICAgICAgICB7IHRhZzogXCJwXCIsIHRleHQ6IFwiU2F0XCIgfSxcbiAgICAgICAgICAgIHsgdGFnOiBcInBcIiwgdGV4dDogXCJTdW5cIiB9LFxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7IHRhZzogXCJwXCIsIHRleHQ6IFwiNmFtLTRwbVwiIH0sXG4gICAgICAgICAgICB7IHRhZzogXCJwXCIsIHRleHQ6IFwiNmFtLTdwbVwiIH0sXG4gICAgICAgICAgICB7IHRhZzogXCJwXCIsIHRleHQ6IFwiQ0xPU0VEXCIgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5jb25zdCBjb250YWN0Q29udGVudCA9IHtcbiAgdGFnOiBcInNlY3Rpb25cIixcbiAgYXR0cmlidXRlczogeyBjbGFzczogXCJjb250YWN0LXNlY3Rpb25cIiB9LFxuICBjaGlsZHJlbjogW1xuICAgIHsgdGFnOiBcImgyXCIsIHRleHQ6IFwiQ29udGFjdCBVc1wiIH0sXG4gICAgeyB0YWc6IFwiaDNcIiwgdGV4dDogXCJCeSBQaG9uZTpcIiB9LFxuICAgIHsgdGFnOiBcInBcIiwgdGV4dDogXCI3MTktNTU1LTQ2MzZcIiB9LFxuICAgIHsgdGFnOiBcImgzXCIsIHRleHQ6IFwiQnkgRW1haWw6XCIgfSxcbiAgICB7IHRhZzogXCJwXCIsIHRleHQ6IFwicm9ja3ltdG5jYWZlQGVtYWlsLmNvbVwiIH1cbiAgXVxufVxuXG5jb25zdCBwYWdlQ29udGVudCA9IHtcbiAgdGFnOiBcInNlY3Rpb25cIixcbiAgY2hpbGRyZW46IFtcbiAgICB7IHRhZzogXCJoMVwiLCB0ZXh0OiBcIkNvbnRhY3QgVXNcIiwgYXR0cmlidXRlczogeyBjbGFzczogXCJjb250YWN0LWhlYWRpbmdcIiB9IH0sXG4gICAgbG9jYXRpb25Db250ZW50LFxuICAgIGhvdXJzQ29udGVudCxcbiAgICBjb250YWN0Q29udGVudFxuICBdXG59XG5cbi8vIExvY2F0aW9uICYgSG91cnMgaW5mb3JtYXRpb25cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckNvbnRhY3QoKSB7XG4gIGNvbnNvbGUubG9nKFwiaGFwcGVuc1wiKVxuICBlbnRyeVBvaW50LnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICBmcmFnbWVudC5hcHBlbmRDaGlsZChidWlsZEVsZW1lbnQocGFnZUNvbnRlbnQpKTtcblxuICBlbnRyeVBvaW50LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbn1cbiIsImNvbnN0IHRvQXJyYXkgPSAodmFsdWUpID0+IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdO1xuXG5jb25zdCBpc1NWRyA9IChlbGVtZW50KSA9PiBlbGVtZW50LnRhZyA9PT0gXCJzdmdcIjtcblxuY29uc3QgYnVpbGRFbGVtZW50ID0gKG9wdHMpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob3B0cy50YWcgfHwgXCJkaXZcIik7XG4gIGZvciAoY29uc3QgW3Byb3AsIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvcHRzKSkge1xuICAgIHN3aXRjaCAocHJvcCkge1xuICAgICAgY2FzZSBcInRhZ1wiOlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJ0ZXh0XCI6XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiYXR0cmlidXRlc1wiOlxuICAgICAgICBmb3IgKGNvbnN0IFthdHRyLCBhdHRyVmFsXSBvZiBPYmplY3QuZW50cmllcyh2YWx1ZSkpIHtcbiAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBhdHRyVmFsKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJldmVudHNcIjpcbiAgICAgICAgdG9BcnJheSh2YWx1ZSkubWFwKCh7IHR5cGUsIGhhbmRsZXIgfSkgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyKTtcbiAgICAgICAgfSlcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiY2hpbGRyZW5cIjpcbiAgICAgICAgdG9BcnJheSh2YWx1ZSkubWFwKChjaGlsZCkgPT4ge1xuICAgICAgICAgIGlmIChpc1NWRyhjaGlsZCkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gY2hpbGQuZGF0YTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2hpbGRFbCA9IGJ1aWxkRWxlbWVudChjaGlsZCk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkRWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IHsgYnVpbGRFbGVtZW50IH07XG4iLCJpbXBvcnQgeyBidWlsZEVsZW1lbnQgfSBmcm9tIFwiLi9kb21faGVscGVyc1wiO1xuaW1wb3J0IGdpdGh1Ykljb24gZnJvbSBcIi4vaWNvbnMvZ2l0aHViLnN2Z1wiO1xuXG5jb25zdCBmb290ZXJQcm9wcyA9IHtcbiAgdGFnOiBcImZvb3RlclwiLFxuICBjaGlsZHJlbjoge1xuICAgIHRhZzogXCJhXCIsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vSm9zaERldkh1Yi9SZXN0YXVyYW50XCIsXG4gICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICB9LFxuICAgIGNoaWxkcmVuOiB7XG4gICAgICB0YWc6IFwic3ZnXCIsXG4gICAgICBkYXRhOiBnaXRodWJJY29uLFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJIZWFkZXIoKSB7XG4gIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICBmcmFnbWVudC5hcHBlbmRDaGlsZChidWlsZEVsZW1lbnQoZm9vdGVyUHJvcHMpKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbn1cbiIsImltcG9ydCB7IGJ1aWxkRWxlbWVudCB9IGZyb20gXCIuL2RvbV9oZWxwZXJzXCI7XG5pbXBvcnQgY29mZmVlSWNvbiBmcm9tIFwiLi9pbWFnZXMvY29mZmVlLnN2Z1wiO1xuXG5jb25zdCBlbnRyeVBvaW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5jb25zdCBoZWFkZXJQcm9wcyA9IHtcbiAgdGFnOiBcImhlYWRlclwiLFxuICBjaGlsZHJlbjoge1xuICAgIGF0dHJpYnV0ZXM6IHsgY2xhc3M6IFwiaGVhZGVyX193cmFwcGVyXCIgfSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICB0YWc6IFwic3ZnXCIsXG4gICAgICAgIGRhdGE6IGNvZmZlZUljb25cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRhZzogXCJuYXZcIixcbiAgICAgICAgY2hpbGRyZW46IHtcbiAgICAgICAgICB0YWc6IFwidWxcIixcbiAgICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdLFxuICB9LFxufVxuXG5jb25zdCBOQVZfTElOS19URVhUX0NPTlRFTlQgPSB7XG4gIGhvbWU6IFwiSG9tZVwiLFxuICBtZW51OiBcIk1lbnVcIixcbiAgY29udGFjdDogXCJDb250YWN0XCJcbn1cblxuY29uc3QgYnVpbGROYXZMaW5rID0gKGNvbXBvbmVudCwgaGFuZGxlcikgPT4ge1xuICByZXR1cm4gYnVpbGRFbGVtZW50KHtcbiAgICB0YWc6IFwibGlcIixcbiAgICBjaGlsZHJlbjoge1xuICAgICAgdGFnOiBcImFcIixcbiAgICAgIHRleHQ6IE5BVl9MSU5LX1RFWFRfQ09OVEVOVFtjb21wb25lbnRdLFxuICAgICAgZXZlbnRzOiB7IHR5cGU6IFwiY2xpY2tcIiwgaGFuZGxlciB9XG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJIZWFkZXIobmF2RnVuY3Rpb25zKSB7XG4gIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICBmcmFnbWVudC5hcHBlbmRDaGlsZChidWlsZEVsZW1lbnQoaGVhZGVyUHJvcHMpKTtcbiAgY29uc3QgbmF2TGlua0xpc3QgPSBmcmFnbWVudC5xdWVyeVNlbGVjdG9yKFwidWxcIik7XG5cbiAgZm9yIChjb25zdCBbY29tcG9uZW50LCBsaXN0ZW5lcl0gb2YgT2JqZWN0LmVudHJpZXMobmF2RnVuY3Rpb25zKSkge1xuICAgIG5hdkxpbmtMaXN0LmFwcGVuZENoaWxkKGJ1aWxkTmF2TGluayhjb21wb25lbnQsIGxpc3RlbmVyKSk7XG4gIH1cblxuICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShmcmFnbWVudCwgZW50cnlQb2ludClcbn1cbiIsImltcG9ydCB7IGJ1aWxkRWxlbWVudCB9IGZyb20gXCIuL2RvbV9oZWxwZXJzXCI7XG5pbXBvcnQgbGF0dGVJbWFnZSBmcm9tIFwiLi9pbWFnZXMvbGF0dGUtY29mZmVlLTIwMHB4LnBuZ1wiO1xuaW1wb3J0IGJlYW5JbWFnZSBmcm9tIFwiLi9pbWFnZXMvY2xvc2V1cC1zaG90LXJvYXN0ZWQtY29mZmVlLWJlYW5zLTIwMHB4LnBuZ1wiO1xuaW1wb3J0IG1vdW50YWluSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL2dhcnkteW9zdC01NElYVFZxLVZ2QS11bnNwbGFzaC0yMDBweC5wbmdcIjtcblxuY29uc3QgZW50cnlQb2ludCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuY29uc3QgYmFubmVyRG9tID0ge1xuICB0YWc6IFwiZGl2XCIsXG4gIGF0dHJpYnV0ZXM6IHsgY2xhc3M6IFwiYmFubmVyXCIgfSxcbiAgY2hpbGRyZW46IHtcbiAgICB0YWc6IFwic2VjdGlvblwiLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7IHRhZzogXCJoMVwiLCB0ZXh0OiBcIlJvY2t5IE1vdW50YWluIENhZmVcIiB9LFxuICAgICAge1xuICAgICAgICB0YWc6IFwicFwiLFxuICAgICAgICB0ZXh0OiBgQSBjb3p5LCBydXN0aWMgcmV0cmVhdCBuZXN0bGVkIGluIHRoZSBoZWFydCBvZiB0aGUgUm9ja3kgTW91bnRhaW5zLlxuICAgICAgICAgICAgICAgV2l0aCBhIHdhcm0sIGludml0aW5nIGF0bW9zcGhlcmUgYW5kIHN0dW5uaW5nIHZpZXdzLCBvdXIgY29mZmVlXG4gICAgICAgICAgICAgICBzaG9wIGlzIHRoZSBwZXJmZWN0IHBsYWNlIHRvIHJlbGF4IGFuZCB1bndpbmQgd2l0aCBhIHN0ZWFtaW5nIGN1cFxuICAgICAgICAgICAgICAgb2YgZnJlc2hseSBicmV3ZWQgY29mZmVlLmBcbiAgICAgIH1cbiAgICBdXG4gIH1cbn1cblxuY29uc3QgcmVuZGVyQmFubmVyID0gKCkgPT4ge1xuICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoYnVpbGRFbGVtZW50KGJhbm5lckRvbSkpO1xuXG4gIGVudHJ5UG9pbnQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xufVxuXG5jb25zdCBnYWxsZXJ5SW1hZ2VzID0gW1xuICB7IGltZzogbGF0dGVJbWFnZSwgY2FwdGlvbjogXCJEZWxpY2lvdXMgZXNwcmVzc28gZHJpbmtzXCIsIGFsdDogXCJcIiB9LFxuICB7IGltZzogYmVhbkltYWdlLCBjYXB0aW9uOiBcIkZyZXNoIHJvYXN0ZWQgY29mZmVlIGJlYW5zXCIsIGFsdDogXCJcIiB9LFxuICB7IGltZzogbW91bnRhaW5JbWFnZSwgY2FwdGlvbjogXCJHb3JnZW91cyBtb3VudGFpbiB2aXN0YXNcIiwgYWx0OiBcIlwiIH0sXG5dXG5cbmNvbnN0IGZpZ3VyZURvbSA9ICh7IGltZywgY2FwdGlvbiwgYWx0IH0pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0YWc6IFwiZmlndXJlXCIsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHsgdGFnOiBcImltZ1wiLCBhdHRyaWJ1dGVzOiB7IHNyYzogaW1nLCBhbHQ6IGFsdCB9IH0sXG4gICAgICB7IHRhZzogXCJmaWdjYXB0aW9uXCIsIHRleHQ6IGNhcHRpb24gfVxuICAgIF1cbiAgfVxufVxuXG5jb25zdCByZW5kZXJHYWxsZXJ5ID0gKCkgPT4ge1xuICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgY29uc3QgY29udGFpbmVyID0gZnJhZ21lbnQuYXBwZW5kQ2hpbGQoYnVpbGRFbGVtZW50KHsgYXR0cmlidXRlczogeyBjbGFzczogXCJnYWxsZXJ5XCIgfSB9KSk7XG4gIGdhbGxlcnlJbWFnZXMuZm9yRWFjaCgoZ2FsbGVyeUltYWdlKSA9PiB7XG4gICAgY29uc3QgZmlndXJlT2JqZWN0ID0gZmlndXJlRG9tKGdhbGxlcnlJbWFnZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkRWxlbWVudChmaWd1cmVPYmplY3QpKTtcbiAgfSlcbiAgZW50cnlQb2ludC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckhvbWVDb250ZW50KCkge1xuICBlbnRyeVBvaW50LnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gIHJlbmRlckJhbm5lcigpO1xuICByZW5kZXJHYWxsZXJ5KCk7XG59XG4iLCJpbXBvcnQgeyBidWlsZEVsZW1lbnQgfSBmcm9tIFwiLi9kb21faGVscGVyc1wiO1xuXG5jb25zdCBlbnRyeVBvaW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5jb25zdCBkb21UcmVlRm9ySXRlbSA9ICh7bmFtZSwgcHJpY2V9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgYXR0cmlidXRlczogeyBjbGFzczogXCJtZW51X19jb250YWluZXJfX2l0ZW1cIiB9LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7IHRhZzogXCJwXCIsIHRleHQ6IG5hbWUgfSxcbiAgICAgIHsgdGFnOiBcInBcIiwgdGV4dDogcHJpY2UgfSxcbiAgICBdXG4gIH1cbn1cblxuY29uc3QgYnVpbGRNZW51U2VjdGlvbiA9IChzZWN0aW9uTmFtZSwgLi4uc2VjdGlvbkNvbnRlbnQpID0+IHtcbiAgY29uc3QgaXRlbVRyZWUgPSBzZWN0aW9uQ29udGVudC5tYXAoZG9tVHJlZUZvckl0ZW0pO1xuICByZXR1cm4ge1xuICAgIHRhZzogXCJzZWN0aW9uXCIsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgdGFnOiBcImgyXCIsXG4gICAgICAgIHRleHQ6IHNlY3Rpb25OYW1lLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7IGNsYXNzOiBcIm1lbnVfX2NvbnRhaW5lcl9faGVhZGluZ1wiIH1cbiAgICAgIH0sXG4gICAgICAuLi5pdGVtVHJlZVxuICAgIF1cbiAgfVxufVxuXG5jb25zdCBtZW51Q29udGVudCA9IHtcbiAgdGFnOiBcInNlY3Rpb25cIixcbiAgYXR0cmlidXRlczogeyBjbGFzczogXCJtZW51XCIgfSxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICB0YWc6IFwiaDFcIixcbiAgICAgIHRleHQ6IFwiTWVudVwiLFxuICAgICAgYXR0cmlidXRlczogeyBjbGFzczogXCJtZW51X19oZWFkaW5nXCIgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGF0dHJpYnV0ZXM6IHsgY2xhc3M6IFwibWVudV9fY29udGFpbmVyXCIgfSxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIGJ1aWxkTWVudVNlY3Rpb24oXG4gICAgICAgICAgXCJCcmV3ZWQgQ29mZmVlXCIsXG4gICAgICAgICAgeyBuYW1lOiBcIkJyZXdlZCBEYXJrIFJvYXN0XCIsIHByaWNlOiBcIjIuMDBcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJCcmV3ZWQgTGlnaHQgUm9hc3RcIiwgcHJpY2U6IFwiMi4wMFwiIH1cbiAgICAgICAgKSxcbiAgICAgICAgYnVpbGRNZW51U2VjdGlvbihcbiAgICAgICAgICBcIkVzcHJlc3NvIERyaW5rc1wiLFxuICAgICAgICAgIHsgbmFtZTogXCJBbWVyaWNhbm9cIiwgcHJpY2U6IFwiMi41MFwiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIkNhZmZlIE1vY2hhXCIsIHByaWNlOiBcIjMuMjVcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJDYXBwdWNjaW5vXCIsIHByaWNlOiBcIjMuMjVcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJGbGF0IFdoaXRlXCIsIHByaWNlOiBcIjMuNTBcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJMYXR0ZVwiLCBwcmljZTogXCIzLjI1XCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiTWFjY2hpYXRvXCIsIHByaWNlOiBcIjMuMDBcIiB9LFxuICAgICAgICApLFxuICAgICAgICBidWlsZE1lbnVTZWN0aW9uKFxuICAgICAgICAgIFwiQ29sZCBDb2ZmZWVcIixcbiAgICAgICAgICB7IG5hbWU6IFwiQ29sZCBCcmV3XCIsIHByaWNlOiBcIjMuNTBcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJJY2VkIEFtZXJpY2Fub1wiLCBwcmljZTogXCIyLjc1XCIgfSxcbiAgICAgICAgKVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJNZW51KCkge1xuICBlbnRyeVBvaW50LnJlcGxhY2VDaGlsZHJlbigpO1xuICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoYnVpbGRFbGVtZW50KG1lbnVDb250ZW50KSk7XG5cbiAgZW50cnlQb2ludC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHJlbmRlckhvbWVDb250ZW50IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCByZW5kZXJIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgcmVuZGVyRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IHJlbmRlck1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHJlbmRlckNvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxucmVuZGVySGVhZGVyKHtcbiAgaG9tZTogcmVuZGVySG9tZUNvbnRlbnQsXG4gIG1lbnU6IHJlbmRlck1lbnUsXG4gIGNvbnRhY3Q6IHJlbmRlckNvbnRhY3Rcbn0pO1xuXG5yZW5kZXJIb21lQ29udGVudCgpO1xucmVuZGVyRm9vdGVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=