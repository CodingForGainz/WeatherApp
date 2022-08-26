/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./goudy-medieval/Goudy Mediaeval Regular.ttf */ "./src/goudy-medieval/Goudy Mediaeval Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Images/david-frasheski-cloud-tendies-fin.jpg */ "./src/Images/david-frasheski-cloud-tendies-fin.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --dark-color: rgb(7, 53, 80);\n  --light-color: rgba(18, 81, 117, 0.555);\n}\n@font-face {\n  font-family: Medieval;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n* {\n  padding: 0px;\n  color: white;\n  font-size: 16px;\n  margin: 0px;\n}\nhtml {\n  height: 100%;\n  display: flex;\n}\n\nbody {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-color: rgb(156, 149, 149);\n  background-size: 100vw 100vh;\n  background-repeat: no-repeat;\n  flex-grow: 1;\n  display: grid;\n  grid-template-columns: 3fr 3fr 3fr;\n  grid-template-rows: 1fr 1fr 65px;\n  grid-auto-flow: row;\n  font-family: Medieval;\n}\n\nh1 {\n  font-size: 2.5rem;\n  color: white;\n  text-shadow: var(--dark-color) 3px 2px;\n}\n#icon {\n  height: 100px;\n  width: 100px;\n}\n#centralContainer {\n  grid-area: 1/1/2/2;\n  display: flex;\n  padding-top: 3rem;\n  justify-content: center;\n  align-items: flex-start;\n}\n#input {\n  grid-area: 1/2/2/3;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  flex-wrap: wrap;\n  padding-top: 3rem;\n}\n\ninput {\n  border: none;\n  border: solid 1px black;\n  height: 2rem;\n  background-color: var(--light-color);\n  border-radius: 10px;\n  text-align: center;\n  max-width: fit-content;\n  min-width: 100px;\n  margin-bottom: 10px;\n}\ninput:focus {\n  background-color: var(--dark-color);\n  border: none;\n  outline: none;\n  border: solid white 1.5px;\n}\n\n.searchTitle {\n  /* margin-bottom: 10px; */\n  font-size: 24px;\n}\n\nfooter {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  font-size: 4px;\n  grid-area: 3/1/3/4;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  padding-left: 250px;\n  padding-right: 250px;\n  background-color: var(--light-color);\n  border-top: solid 2px var(--dark-color);\n}\n\n.footerItem {\n  margin: 8px;\n  color: white;\n  /* font-weight: bold; */\n}\n\n#creator a {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0px;\n  margin: 0px;\n}\n#credits {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#gitHubLogo {\n  max-width: 36px;\n}\n\n.data {\n  flex-grow: 1;\n}\n\nbutton {\n  color: black;\n  width: 200px;\n  height: 30px;\n  margin-bottom: 20px;\n  border-radius: 10px;\n}\n\n#mainOutput {\n  grid-area: 1/3/2/4;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-flow: row;\n  grid-auto-rows: 1fr;\n}\n\n#output {\n  grid-area: 2/1/3/4;\n  display: flex;\n  align-items: center;\n  padding: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: end;\n}\n\n.statIcon {\n  height: 20px;\n  width: auto;\n}\n", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"AAAA;EACE,4BAA4B;EAC5B,uCAAuC;AACzC;AACA;EACE,qBAAqB;EACrB,+DAA2E;EAC3E;wEACsE;AACxE;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,WAAW;AACb;AACA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,mDAAiE;EACjE,oCAAoC;EACpC,4BAA4B;EAC5B,4BAA4B;EAC5B,YAAY;EACZ,aAAa;EACb,kCAAkC;EAClC,gCAAgC;EAChC,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,sCAAsC;AACxC;AACA;EACE,aAAa;EACb,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,iBAAiB;EACjB,uBAAuB;EACvB,uBAAuB;AACzB;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,uBAAuB;EACvB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,YAAY;EACZ,oCAAoC;EACpC,mBAAmB;EACnB,kBAAkB;EAClB,sBAAsB;EACtB,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,mCAAmC;EACnC,YAAY;EACZ,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE;wEACsE;EACtE,cAAc;EACd,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,mBAAmB;EACnB,oBAAoB;EACpB,oCAAoC;EACpC,uCAAuC;AACzC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,WAAW;AACb;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb","sourcesContent":[":root {\n  --dark-color: rgb(7, 53, 80);\n  --light-color: rgba(18, 81, 117, 0.555);\n}\n@font-face {\n  font-family: Medieval;\n  src: url(./goudy-medieval/Goudy\\ Mediaeval\\ Regular.ttf) format('truetype');\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n* {\n  padding: 0px;\n  color: white;\n  font-size: 16px;\n  margin: 0px;\n}\nhtml {\n  height: 100%;\n  display: flex;\n}\n\nbody {\n  background: url('./Images/david-frasheski-cloud-tendies-fin.jpg');\n  background-color: rgb(156, 149, 149);\n  background-size: 100vw 100vh;\n  background-repeat: no-repeat;\n  flex-grow: 1;\n  display: grid;\n  grid-template-columns: 3fr 3fr 3fr;\n  grid-template-rows: 1fr 1fr 65px;\n  grid-auto-flow: row;\n  font-family: Medieval;\n}\n\nh1 {\n  font-size: 2.5rem;\n  color: white;\n  text-shadow: var(--dark-color) 3px 2px;\n}\n#icon {\n  height: 100px;\n  width: 100px;\n}\n#centralContainer {\n  grid-area: 1/1/2/2;\n  display: flex;\n  padding-top: 3rem;\n  justify-content: center;\n  align-items: flex-start;\n}\n#input {\n  grid-area: 1/2/2/3;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  flex-wrap: wrap;\n  padding-top: 3rem;\n}\n\ninput {\n  border: none;\n  border: solid 1px black;\n  height: 2rem;\n  background-color: var(--light-color);\n  border-radius: 10px;\n  text-align: center;\n  max-width: fit-content;\n  min-width: 100px;\n  margin-bottom: 10px;\n}\ninput:focus {\n  background-color: var(--dark-color);\n  border: none;\n  outline: none;\n  border: solid white 1.5px;\n}\n\n.searchTitle {\n  /* margin-bottom: 10px; */\n  font-size: 24px;\n}\n\nfooter {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  font-size: 4px;\n  grid-area: 3/1/3/4;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  padding-left: 250px;\n  padding-right: 250px;\n  background-color: var(--light-color);\n  border-top: solid 2px var(--dark-color);\n}\n\n.footerItem {\n  margin: 8px;\n  color: white;\n  /* font-weight: bold; */\n}\n\n#creator a {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0px;\n  margin: 0px;\n}\n#credits {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#gitHubLogo {\n  max-width: 36px;\n}\n\n.data {\n  flex-grow: 1;\n}\n\nbutton {\n  color: black;\n  width: 200px;\n  height: 30px;\n  margin-bottom: 20px;\n  border-radius: 10px;\n}\n\n#mainOutput {\n  grid-area: 1/3/2/4;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-flow: row;\n  grid-auto-rows: 1fr;\n}\n\n#output {\n  grid-area: 2/1/3/4;\n  display: flex;\n  align-items: center;\n  padding: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: end;\n}\n\n.statIcon {\n  height: 20px;\n  width: auto;\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getHours/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/getHours/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getHours)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getHours
 * @category Hour Helpers
 * @summary Get the hours of the given date.
 *
 * @description
 * Get the hours of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the hours
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the hours of 29 February 2012 11:45:00:
 * const result = getHours(new Date(2012, 1, 29, 11, 45))
 * //=> 11
 */

function getHours(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var hours = date.getHours();
  return hours;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/append-to-DOM.js":
/*!******************************!*\
  !*** ./src/append-to-DOM.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendIcon": () => (/* binding */ appendIcon),
/* harmony export */   "appendtoDOM": () => (/* binding */ appendtoDOM),
/* harmony export */   "displayData": () => (/* binding */ displayData)
/* harmony export */ });
/* harmony import */ var _winds_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./winds.png */ "./src/winds.png");
/* harmony import */ var _country_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./country.png */ "./src/country.png");
/* harmony import */ var _feels_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feels.png */ "./src/feels.png");
/* harmony import */ var _humidity_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./humidity.png */ "./src/humidity.png");
/* harmony import */ var _clouds_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clouds.png */ "./src/clouds.png");
/* harmony import */ var _date_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./date.png */ "./src/date.png");
/* harmony import */ var _city_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./city.png */ "./src/city.png");
/* harmony import */ var _weather_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./weather.png */ "./src/weather.png");
/* harmony import */ var _temp_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./temp.png */ "./src/temp.png");










const output = document.getElementById('output');

function displayData(location, system) {
  let speedUnits = '';
  let tempUnits = '';
  if (system === 'metric') {
    speedUnits = 'm/s';
    tempUnits = 'C';
  } else {
    speedUnits = 'mi/h';
    tempUnits = 'F';
  }

  appendtoDOM(`${location.date}`, 'Date: ', true, _date_png__WEBPACK_IMPORTED_MODULE_5__);
  appendtoDOM(`${location.city}`, 'City: ', true, _city_png__WEBPACK_IMPORTED_MODULE_6__);
  appendtoDOM(`${location.coutry}`, 'Country: ', false, _country_png__WEBPACK_IMPORTED_MODULE_1__);
  appendtoDOM(
    `${location.feels_like} ${tempUnits}`,
    'Feels like: ',
    false,
    _feels_png__WEBPACK_IMPORTED_MODULE_2__
  );
  appendtoDOM(`${location.humidity}%`, 'Humidity: ', false, _humidity_png__WEBPACK_IMPORTED_MODULE_3__);
  appendtoDOM(`${location.weather}`, 'Weather: ', true, _weather_png__WEBPACK_IMPORTED_MODULE_7__);
  appendtoDOM(
    `${location.wind} ${speedUnits}`,
    'Wind Speed: ',
    false,
    _winds_png__WEBPACK_IMPORTED_MODULE_0__
  );
  appendtoDOM(
    `${location.temperature} ${tempUnits}`,
    'Current Temperature: ',
    true,
    _temp_png__WEBPACK_IMPORTED_MODULE_8__
  );
  appendtoDOM(`${location.clouds}%`, 'Cloudiness: ', false, _clouds_png__WEBPACK_IMPORTED_MODULE_4__);
}

function appendtoDOM(data, title, main, icon) {
  const statContainer = document.createElement('div');
  const statInfo = document.createElement('div');
  statContainer.setAttribute('id', data);
  statContainer.setAttribute('class', 'data');
  statInfo.innerHTML = title + data;

  const statIcon = new Image();
  statIcon.src = icon;
  statIcon.setAttribute('class', 'statIcon');
  statContainer.appendChild(statIcon);
  statContainer.appendChild(statInfo);
  if (main === false) {
    // output.appendChild(statIcon);
    output.appendChild(statContainer);
  } else if (main === true) {
    // mainOutput.appendChild(statIcon);
    mainOutput.appendChild(statContainer);
  }
}

async function appendIcon(iconId) {
  const iconContainer = document.createElement('div');
  iconContainer.setAttribute('id', 'icon');
  let url = `http://openweathermap.org/img/wn/${iconId}.png`;
  const weatherIcon = new Image();
  weatherIcon.src = url;
  iconContainer.appendChild(weatherIcon);
  mainOutput.appendChild(iconContainer);
}




/***/ }),

/***/ "./src/data-management.js":
/*!********************************!*\
  !*** ./src/data-management.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "alternateUnits": () => (/* binding */ alternateUnits),
/* harmony export */   "dataManagement": () => (/* binding */ dataManagement)
/* harmony export */ });
/* harmony import */ var _append_to_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./append-to-DOM */ "./src/append-to-DOM.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/getHours/index.js");




const unitsBtn = document.getElementById('units');

const dataManagement = (data) => {
  let location = {
    time: currentDate(),
    city: data.name,
    feels_like: data.main.feels_like,
    humidity: data.main.humidity,
    temperature: data.main.temp, //k
    temp_max: data.main.temp_max, //k
    temp_min: data.main.temp_min, //k
    weather: data.weather[0].description,
    wind: data.wind.speed, //m/s
    coutry: data.sys.country,
    clouds: data.clouds.all, //%
    icon: data.weather[0].icon,
  };
  (0,_append_to_DOM__WEBPACK_IMPORTED_MODULE_0__.displayData)(location, _index__WEBPACK_IMPORTED_MODULE_1__.status.system);
  (0,_append_to_DOM__WEBPACK_IMPORTED_MODULE_0__.appendIcon)(location.icon);
};

function alternateUnits(system) {
  if (system === 'metric') {
    _index__WEBPACK_IMPORTED_MODULE_1__.status.system = 'imperial';
    unitsBtn.innerText = 'C';
  } else {
    _index__WEBPACK_IMPORTED_MODULE_1__.status.system = 'metric';
    unitsBtn.innerText = 'F';
  }
  return _index__WEBPACK_IMPORTED_MODULE_1__.status.system;
}

const currentDate = () => {
  const hours = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date());
  return hours;
};




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "status": () => (/* binding */ status)
/* harmony export */ });
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _start__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start */ "./src/start.js");



const btn = document.getElementById('search');
const city = document.getElementById('city');
const country = document.getElementById('country');
const output = document.getElementById('output');
// const outputText = document.getElementById('outputText');
const unitsBtn = document.getElementById('units');

let status = {
  loaded: false,
  system: 'metric',
};

document.body.addEventListener('keydown', (event) => {
  let code = event.key;
  if (code === 'Enter') {
    (0,_start__WEBPACK_IMPORTED_MODULE_1__.start)();
  }
});

btn.onclick = (0,_start__WEBPACK_IMPORTED_MODULE_1__.start)();

unitsBtn.onclick = () => {
  if (status.loaded === true) {
    (0,_start__WEBPACK_IMPORTED_MODULE_1__.changeUnits)();
  } else {
    output.innerHTML = 'Please Search for a city before changing units.';
  }
};


//Date, Temperature, Feels like, Humidity, Wind Speed, Chance of Rain, 'Weather State'


/***/ }),

/***/ "./src/retrieve-data.js":
/*!******************************!*\
  !*** ./src/retrieve-data.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "retrieveData": () => (/* binding */ retrieveData)
/* harmony export */ });
/* harmony import */ var _data_management__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-management */ "./src/data-management.js");


async function retrieveData(city, country, unitSystem) {
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=5df5c999c0258327ce5af181da97e8a9&units=${unitSystem}`;
    const response = await fetch(url, { mode: 'cors' });
    const weatherData = await response.json();
    (0,_data_management__WEBPACK_IMPORTED_MODULE_0__.dataManagement)(weatherData);
  } catch (error) {
    output.innerHTML =
      "We couldn't find this city. Please, make sure of the following:<ul><li>City name is spelled correctly.</li><li>Country uses only Initials i.e. Costa Rica = CR.</li><li>There are no numbers in your inputs.</li></ul>";
  }
}




/***/ }),

/***/ "./src/start.js":
/*!**********************!*\
  !*** ./src/start.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeUnits": () => (/* binding */ changeUnits),
/* harmony export */   "start": () => (/* binding */ start)
/* harmony export */ });
/* harmony import */ var _data_management__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-management */ "./src/data-management.js");
/* harmony import */ var _retrieve_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./retrieve-data */ "./src/retrieve-data.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/index.js");
// import { alternateUnits } from './data-management';




function start() {
  _index__WEBPACK_IMPORTED_MODULE_2__.status.loaded = true;
  let cityText = city.value;
  let countryText = country.value;
  output.innerHTML = '';
  mainOutput.innerHTML = '';
  (0,_retrieve_data__WEBPACK_IMPORTED_MODULE_1__.retrieveData)(cityText, countryText, _index__WEBPACK_IMPORTED_MODULE_2__.status.system);
}

function changeUnits() {
  output.innerHTML = '';
  mainOutput.innerHTML = '';
  let cityText = city.value;
  let countryText = country.value;
  (0,_retrieve_data__WEBPACK_IMPORTED_MODULE_1__.retrieveData)(cityText, countryText, (0,_data_management__WEBPACK_IMPORTED_MODULE_0__.alternateUnits)(_index__WEBPACK_IMPORTED_MODULE_2__.status.system));
}




/***/ }),

/***/ "./src/Images/david-frasheski-cloud-tendies-fin.jpg":
/*!**********************************************************!*\
  !*** ./src/Images/david-frasheski-cloud-tendies-fin.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dced689c1ae19cc7aa94.jpg";

/***/ }),

/***/ "./src/city.png":
/*!**********************!*\
  !*** ./src/city.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "af196e1c5ab347eb2d96.png";

/***/ }),

/***/ "./src/clouds.png":
/*!************************!*\
  !*** ./src/clouds.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "30b61f2d2b3761b7dd79.png";

/***/ }),

/***/ "./src/country.png":
/*!*************************!*\
  !*** ./src/country.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "90215803a09f705c69d1.png";

/***/ }),

/***/ "./src/date.png":
/*!**********************!*\
  !*** ./src/date.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "24c974015dcc7b624f54.png";

/***/ }),

/***/ "./src/feels.png":
/*!***********************!*\
  !*** ./src/feels.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff85c7ef54161d728076.png";

/***/ }),

/***/ "./src/goudy-medieval/Goudy Mediaeval Regular.ttf":
/*!********************************************************!*\
  !*** ./src/goudy-medieval/Goudy Mediaeval Regular.ttf ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3001ee94e784062a368c.ttf";

/***/ }),

/***/ "./src/humidity.png":
/*!**************************!*\
  !*** ./src/humidity.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de8a32c7d6d44bb3238e.png";

/***/ }),

/***/ "./src/temp.png":
/*!**********************!*\
  !*** ./src/temp.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5cb49dc182262666a503.png";

/***/ }),

/***/ "./src/weather.png":
/*!*************************!*\
  !*** ./src/weather.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d2c2e2cd81460bf9d5f.png";

/***/ }),

/***/ "./src/winds.png":
/*!***********************!*\
  !*** ./src/winds.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c7736c8732a4775e4fb3.png";

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBLEVBQUUsNERBQVksd0JBQXdCLGlEQUFhO0FBQ25EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDREQUFZLHdCQUF3QixnRUFBYyxDQUFDLGlEQUFhO0FBQ2xFOztBQUU4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEI5QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL21haW4uY3NzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9nZXRIb3Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9tYWluLmNzcz9kZGQzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9hcHBlbmQtdG8tRE9NLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvZGF0YS1tYW5hZ2VtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9yZXRyaWV2ZS1kYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3RhcnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZ291ZHktbWVkaWV2YWwvR291ZHkgTWVkaWFldmFsIFJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9JbWFnZXMvZGF2aWQtZnJhc2hlc2tpLWNsb3VkLXRlbmRpZXMtZmluLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWRhcmstY29sb3I6IHJnYig3LCA1MywgODApO1xcbiAgLS1saWdodC1jb2xvcjogcmdiYSgxOCwgODEsIDExNywgMC41NTUpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBNZWRpZXZhbDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90byxcXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxufVxcblxcbioge1xcbiAgcGFkZGluZzogMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NiwgMTQ5LCAxNDkpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDB2dyAxMDB2aDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgM2ZyIDNmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciA2NXB4O1xcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gIGZvbnQtZmFtaWx5OiBNZWRpZXZhbDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXNoYWRvdzogdmFyKC0tZGFyay1jb2xvcikgM3B4IDJweDtcXG59XFxuI2ljb24ge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuI2NlbnRyYWxDb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuI2lucHV0IHtcXG4gIGdyaWQtYXJlYTogMS8yLzIvMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gIGhlaWdodDogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgbWluLXdpZHRoOiAxMDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbmlucHV0OmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogc29saWQgd2hpdGUgMS41cHg7XFxufVxcblxcbi5zZWFyY2hUaXRsZSB7XFxuICAvKiBtYXJnaW4tYm90dG9tOiAxMHB4OyAqL1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sXFxuICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA0cHg7XFxuICBncmlkLWFyZWE6IDMvMS8zLzQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgcGFkZGluZy1sZWZ0OiAyNTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDI1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgYm9yZGVyLXRvcDogc29saWQgMnB4IHZhcigtLWRhcmstY29sb3IpO1xcbn1cXG5cXG4uZm9vdGVySXRlbSB7XFxuICBtYXJnaW46IDhweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xcbn1cXG5cXG4jY3JlYXRvciBhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG59XFxuI2NyZWRpdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuI2dpdEh1YkxvZ28ge1xcbiAgbWF4LXdpZHRoOiAzNnB4O1xcbn1cXG5cXG4uZGF0YSB7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBjb2xvcjogYmxhY2s7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI21haW5PdXRwdXQge1xcbiAgZ3JpZC1hcmVhOiAxLzMvMi80O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICBncmlkLWF1dG8tcm93czogMWZyO1xcbn1cXG5cXG4jb3V0cHV0IHtcXG4gIGdyaWQtYXJlYTogMi8xLzMvNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbi5zdGF0SWNvbiB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsNEJBQTRCO0VBQzVCLHVDQUF1QztBQUN6QztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLCtEQUEyRTtFQUMzRTt3RUFDc0U7QUFDeEU7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtREFBaUU7RUFDakUsb0NBQW9DO0VBQ3BDLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHNDQUFzQztBQUN4QztBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7d0VBQ3NFO0VBQ3RFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixvQ0FBb0M7RUFDcEMsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWRhcmstY29sb3I6IHJnYig3LCA1MywgODApO1xcbiAgLS1saWdodC1jb2xvcjogcmdiYSgxOCwgODEsIDExNywgMC41NTUpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBNZWRpZXZhbDtcXG4gIHNyYzogdXJsKC4vZ291ZHktbWVkaWV2YWwvR291ZHlcXFxcIE1lZGlhZXZhbFxcXFwgUmVndWxhci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLFxcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBtYXJnaW46IDBweDtcXG59XFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi9JbWFnZXMvZGF2aWQtZnJhc2hlc2tpLWNsb3VkLXRlbmRpZXMtZmluLmpwZycpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NiwgMTQ5LCAxNDkpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDB2dyAxMDB2aDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgM2ZyIDNmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciA2NXB4O1xcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gIGZvbnQtZmFtaWx5OiBNZWRpZXZhbDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXNoYWRvdzogdmFyKC0tZGFyay1jb2xvcikgM3B4IDJweDtcXG59XFxuI2ljb24ge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuI2NlbnRyYWxDb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuI2lucHV0IHtcXG4gIGdyaWQtYXJlYTogMS8yLzIvMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gIGhlaWdodDogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgbWluLXdpZHRoOiAxMDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbmlucHV0OmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogc29saWQgd2hpdGUgMS41cHg7XFxufVxcblxcbi5zZWFyY2hUaXRsZSB7XFxuICAvKiBtYXJnaW4tYm90dG9tOiAxMHB4OyAqL1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sXFxuICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA0cHg7XFxuICBncmlkLWFyZWE6IDMvMS8zLzQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgcGFkZGluZy1sZWZ0OiAyNTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDI1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgYm9yZGVyLXRvcDogc29saWQgMnB4IHZhcigtLWRhcmstY29sb3IpO1xcbn1cXG5cXG4uZm9vdGVySXRlbSB7XFxuICBtYXJnaW46IDhweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xcbn1cXG5cXG4jY3JlYXRvciBhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG59XFxuI2NyZWRpdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuI2dpdEh1YkxvZ28ge1xcbiAgbWF4LXdpZHRoOiAzNnB4O1xcbn1cXG5cXG4uZGF0YSB7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBjb2xvcjogYmxhY2s7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI21haW5PdXRwdXQge1xcbiAgZ3JpZC1hcmVhOiAxLzMvMi80O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICBncmlkLWF1dG8tcm93czogMWZyO1xcbn1cXG5cXG4jb3V0cHV0IHtcXG4gIGdyaWQtYXJlYTogMi8xLzMvNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbi5zdGF0SWNvbiB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBnZXRIb3Vyc1xuICogQGNhdGVnb3J5IEhvdXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBob3VycyBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgaG91cnMgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgaG91cnNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBHZXQgdGhlIGhvdXJzIG9mIDI5IEZlYnJ1YXJ5IDIwMTIgMTE6NDU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBnZXRIb3VycyhuZXcgRGF0ZSgyMDEyLCAxLCAyOSwgMTEsIDQ1KSlcbiAqIC8vPT4gMTFcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRIb3VycyhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgcmV0dXJuIGhvdXJzO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHdpbmRJY29uIGZyb20gJy4vd2luZHMucG5nJztcbmltcG9ydCBjb3VudHJ5SWNvbiBmcm9tICcuL2NvdW50cnkucG5nJztcbmltcG9ydCBmZWVsc0ljb24gZnJvbSAnLi9mZWVscy5wbmcnO1xuaW1wb3J0IGh1bWlkaXR5SWNvbiBmcm9tICcuL2h1bWlkaXR5LnBuZyc7XG5pbXBvcnQgY2xvdWRzSWNvbiBmcm9tICcuL2Nsb3Vkcy5wbmcnO1xuaW1wb3J0IGRhdGVJY29uIGZyb20gJy4vZGF0ZS5wbmcnO1xuaW1wb3J0IGNpdHlJY29uIGZyb20gJy4vY2l0eS5wbmcnO1xuaW1wb3J0IHdlYXRoZXJJY29uIGZyb20gJy4vd2VhdGhlci5wbmcnO1xuaW1wb3J0IHRlbXBJY29uIGZyb20gJy4vdGVtcC5wbmcnO1xuXG5jb25zdCBvdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3V0cHV0Jyk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlEYXRhKGxvY2F0aW9uLCBzeXN0ZW0pIHtcbiAgbGV0IHNwZWVkVW5pdHMgPSAnJztcbiAgbGV0IHRlbXBVbml0cyA9ICcnO1xuICBpZiAoc3lzdGVtID09PSAnbWV0cmljJykge1xuICAgIHNwZWVkVW5pdHMgPSAnbS9zJztcbiAgICB0ZW1wVW5pdHMgPSAnQyc7XG4gIH0gZWxzZSB7XG4gICAgc3BlZWRVbml0cyA9ICdtaS9oJztcbiAgICB0ZW1wVW5pdHMgPSAnRic7XG4gIH1cblxuICBhcHBlbmR0b0RPTShgJHtsb2NhdGlvbi5kYXRlfWAsICdEYXRlOiAnLCB0cnVlLCBkYXRlSWNvbik7XG4gIGFwcGVuZHRvRE9NKGAke2xvY2F0aW9uLmNpdHl9YCwgJ0NpdHk6ICcsIHRydWUsIGNpdHlJY29uKTtcbiAgYXBwZW5kdG9ET00oYCR7bG9jYXRpb24uY291dHJ5fWAsICdDb3VudHJ5OiAnLCBmYWxzZSwgY291bnRyeUljb24pO1xuICBhcHBlbmR0b0RPTShcbiAgICBgJHtsb2NhdGlvbi5mZWVsc19saWtlfSAke3RlbXBVbml0c31gLFxuICAgICdGZWVscyBsaWtlOiAnLFxuICAgIGZhbHNlLFxuICAgIGZlZWxzSWNvblxuICApO1xuICBhcHBlbmR0b0RPTShgJHtsb2NhdGlvbi5odW1pZGl0eX0lYCwgJ0h1bWlkaXR5OiAnLCBmYWxzZSwgaHVtaWRpdHlJY29uKTtcbiAgYXBwZW5kdG9ET00oYCR7bG9jYXRpb24ud2VhdGhlcn1gLCAnV2VhdGhlcjogJywgdHJ1ZSwgd2VhdGhlckljb24pO1xuICBhcHBlbmR0b0RPTShcbiAgICBgJHtsb2NhdGlvbi53aW5kfSAke3NwZWVkVW5pdHN9YCxcbiAgICAnV2luZCBTcGVlZDogJyxcbiAgICBmYWxzZSxcbiAgICB3aW5kSWNvblxuICApO1xuICBhcHBlbmR0b0RPTShcbiAgICBgJHtsb2NhdGlvbi50ZW1wZXJhdHVyZX0gJHt0ZW1wVW5pdHN9YCxcbiAgICAnQ3VycmVudCBUZW1wZXJhdHVyZTogJyxcbiAgICB0cnVlLFxuICAgIHRlbXBJY29uXG4gICk7XG4gIGFwcGVuZHRvRE9NKGAke2xvY2F0aW9uLmNsb3Vkc30lYCwgJ0Nsb3VkaW5lc3M6ICcsIGZhbHNlLCBjbG91ZHNJY29uKTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kdG9ET00oZGF0YSwgdGl0bGUsIG1haW4sIGljb24pIHtcbiAgY29uc3Qgc3RhdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBzdGF0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzdGF0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBkYXRhKTtcbiAgc3RhdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RhdGEnKTtcbiAgc3RhdEluZm8uaW5uZXJIVE1MID0gdGl0bGUgKyBkYXRhO1xuXG4gIGNvbnN0IHN0YXRJY29uID0gbmV3IEltYWdlKCk7XG4gIHN0YXRJY29uLnNyYyA9IGljb247XG4gIHN0YXRJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3RhdEljb24nKTtcbiAgc3RhdENvbnRhaW5lci5hcHBlbmRDaGlsZChzdGF0SWNvbik7XG4gIHN0YXRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhdEluZm8pO1xuICBpZiAobWFpbiA9PT0gZmFsc2UpIHtcbiAgICAvLyBvdXRwdXQuYXBwZW5kQ2hpbGQoc3RhdEljb24pO1xuICAgIG91dHB1dC5hcHBlbmRDaGlsZChzdGF0Q29udGFpbmVyKTtcbiAgfSBlbHNlIGlmIChtYWluID09PSB0cnVlKSB7XG4gICAgLy8gbWFpbk91dHB1dC5hcHBlbmRDaGlsZChzdGF0SWNvbik7XG4gICAgbWFpbk91dHB1dC5hcHBlbmRDaGlsZChzdGF0Q29udGFpbmVyKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBhcHBlbmRJY29uKGljb25JZCkge1xuICBjb25zdCBpY29uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGljb25Db250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdpY29uJyk7XG4gIGxldCB1cmwgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpY29uSWR9LnBuZ2A7XG4gIGNvbnN0IHdlYXRoZXJJY29uID0gbmV3IEltYWdlKCk7XG4gIHdlYXRoZXJJY29uLnNyYyA9IHVybDtcbiAgaWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVySWNvbik7XG4gIG1haW5PdXRwdXQuYXBwZW5kQ2hpbGQoaWNvbkNvbnRhaW5lcik7XG59XG5cbmV4cG9ydCB7IGFwcGVuZHRvRE9NLCBkaXNwbGF5RGF0YSwgYXBwZW5kSWNvbiB9O1xuIiwiaW1wb3J0IHsgYXBwZW5kSWNvbiwgZGlzcGxheURhdGEgfSBmcm9tICcuL2FwcGVuZC10by1ET00nO1xuaW1wb3J0IHsgc3RhdHVzIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBnZXRIb3VycyB9IGZyb20gJ2RhdGUtZm5zJztcblxuY29uc3QgdW5pdHNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdHMnKTtcblxuY29uc3QgZGF0YU1hbmFnZW1lbnQgPSAoZGF0YSkgPT4ge1xuICBsZXQgbG9jYXRpb24gPSB7XG4gICAgdGltZTogY3VycmVudERhdGUoKSxcbiAgICBjaXR5OiBkYXRhLm5hbWUsXG4gICAgZmVlbHNfbGlrZTogZGF0YS5tYWluLmZlZWxzX2xpa2UsXG4gICAgaHVtaWRpdHk6IGRhdGEubWFpbi5odW1pZGl0eSxcbiAgICB0ZW1wZXJhdHVyZTogZGF0YS5tYWluLnRlbXAsIC8va1xuICAgIHRlbXBfbWF4OiBkYXRhLm1haW4udGVtcF9tYXgsIC8va1xuICAgIHRlbXBfbWluOiBkYXRhLm1haW4udGVtcF9taW4sIC8va1xuICAgIHdlYXRoZXI6IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgICB3aW5kOiBkYXRhLndpbmQuc3BlZWQsIC8vbS9zXG4gICAgY291dHJ5OiBkYXRhLnN5cy5jb3VudHJ5LFxuICAgIGNsb3VkczogZGF0YS5jbG91ZHMuYWxsLCAvLyVcbiAgICBpY29uOiBkYXRhLndlYXRoZXJbMF0uaWNvbixcbiAgfTtcbiAgZGlzcGxheURhdGEobG9jYXRpb24sIHN0YXR1cy5zeXN0ZW0pO1xuICBhcHBlbmRJY29uKGxvY2F0aW9uLmljb24pO1xufTtcblxuZnVuY3Rpb24gYWx0ZXJuYXRlVW5pdHMoc3lzdGVtKSB7XG4gIGlmIChzeXN0ZW0gPT09ICdtZXRyaWMnKSB7XG4gICAgc3RhdHVzLnN5c3RlbSA9ICdpbXBlcmlhbCc7XG4gICAgdW5pdHNCdG4uaW5uZXJUZXh0ID0gJ0MnO1xuICB9IGVsc2Uge1xuICAgIHN0YXR1cy5zeXN0ZW0gPSAnbWV0cmljJztcbiAgICB1bml0c0J0bi5pbm5lclRleHQgPSAnRic7XG4gIH1cbiAgcmV0dXJuIHN0YXR1cy5zeXN0ZW07XG59XG5cbmNvbnN0IGN1cnJlbnREYXRlID0gKCkgPT4ge1xuICBjb25zdCBob3VycyA9IGdldEhvdXJzKG5ldyBEYXRlKCkpO1xuICByZXR1cm4gaG91cnM7XG59O1xuXG5leHBvcnQgeyBkYXRhTWFuYWdlbWVudCwgYWx0ZXJuYXRlVW5pdHMgfTtcbiIsImltcG9ydCAnLi9tYWluLmNzcyc7XG5pbXBvcnQgeyBjaGFuZ2VVbml0cywgc3RhcnQgfSBmcm9tICcuL3N0YXJ0JztcblxuY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpO1xuY29uc3QgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5Jyk7XG5jb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50cnknKTtcbmNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdXRwdXQnKTtcbi8vIGNvbnN0IG91dHB1dFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3V0cHV0VGV4dCcpO1xuY29uc3QgdW5pdHNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdHMnKTtcblxubGV0IHN0YXR1cyA9IHtcbiAgbG9hZGVkOiBmYWxzZSxcbiAgc3lzdGVtOiAnbWV0cmljJyxcbn07XG5cbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICBsZXQgY29kZSA9IGV2ZW50LmtleTtcbiAgaWYgKGNvZGUgPT09ICdFbnRlcicpIHtcbiAgICBzdGFydCgpO1xuICB9XG59KTtcblxuYnRuLm9uY2xpY2sgPSBzdGFydCgpO1xuXG51bml0c0J0bi5vbmNsaWNrID0gKCkgPT4ge1xuICBpZiAoc3RhdHVzLmxvYWRlZCA9PT0gdHJ1ZSkge1xuICAgIGNoYW5nZVVuaXRzKCk7XG4gIH0gZWxzZSB7XG4gICAgb3V0cHV0LmlubmVySFRNTCA9ICdQbGVhc2UgU2VhcmNoIGZvciBhIGNpdHkgYmVmb3JlIGNoYW5naW5nIHVuaXRzLic7XG4gIH1cbn07XG5cbmV4cG9ydCB7IHN0YXR1cyB9O1xuLy9EYXRlLCBUZW1wZXJhdHVyZSwgRmVlbHMgbGlrZSwgSHVtaWRpdHksIFdpbmQgU3BlZWQsIENoYW5jZSBvZiBSYWluLCAnV2VhdGhlciBTdGF0ZSdcbiIsImltcG9ydCB7IGRhdGFNYW5hZ2VtZW50IH0gZnJvbSAnLi9kYXRhLW1hbmFnZW1lbnQnO1xuXG5hc3luYyBmdW5jdGlvbiByZXRyaWV2ZURhdGEoY2l0eSwgY291bnRyeSwgdW5pdFN5c3RlbSkge1xuICB0cnkge1xuICAgIGxldCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9LCR7Y291bnRyeX0mQVBQSUQ9NWRmNWM5OTljMDI1ODMyN2NlNWFmMTgxZGE5N2U4YTkmdW5pdHM9JHt1bml0U3lzdGVtfWA7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGRhdGFNYW5hZ2VtZW50KHdlYXRoZXJEYXRhKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBvdXRwdXQuaW5uZXJIVE1MID1cbiAgICAgIFwiV2UgY291bGRuJ3QgZmluZCB0aGlzIGNpdHkuIFBsZWFzZSwgbWFrZSBzdXJlIG9mIHRoZSBmb2xsb3dpbmc6PHVsPjxsaT5DaXR5IG5hbWUgaXMgc3BlbGxlZCBjb3JyZWN0bHkuPC9saT48bGk+Q291bnRyeSB1c2VzIG9ubHkgSW5pdGlhbHMgaS5lLiBDb3N0YSBSaWNhID0gQ1IuPC9saT48bGk+VGhlcmUgYXJlIG5vIG51bWJlcnMgaW4geW91ciBpbnB1dHMuPC9saT48L3VsPlwiO1xuICB9XG59XG5cbmV4cG9ydCB7IHJldHJpZXZlRGF0YSB9O1xuIiwiLy8gaW1wb3J0IHsgYWx0ZXJuYXRlVW5pdHMgfSBmcm9tICcuL2RhdGEtbWFuYWdlbWVudCc7XG5pbXBvcnQgeyBhbHRlcm5hdGVVbml0cyB9IGZyb20gJy4vZGF0YS1tYW5hZ2VtZW50JztcbmltcG9ydCB7IHJldHJpZXZlRGF0YSB9IGZyb20gJy4vcmV0cmlldmUtZGF0YSc7XG5pbXBvcnQgeyBzdGF0dXMgfSBmcm9tICcuL2luZGV4JztcblxuZnVuY3Rpb24gc3RhcnQoKSB7XG4gIHN0YXR1cy5sb2FkZWQgPSB0cnVlO1xuICBsZXQgY2l0eVRleHQgPSBjaXR5LnZhbHVlO1xuICBsZXQgY291bnRyeVRleHQgPSBjb3VudHJ5LnZhbHVlO1xuICBvdXRwdXQuaW5uZXJIVE1MID0gJyc7XG4gIG1haW5PdXRwdXQuaW5uZXJIVE1MID0gJyc7XG4gIHJldHJpZXZlRGF0YShjaXR5VGV4dCwgY291bnRyeVRleHQsIHN0YXR1cy5zeXN0ZW0pO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VVbml0cygpIHtcbiAgb3V0cHV0LmlubmVySFRNTCA9ICcnO1xuICBtYWluT3V0cHV0LmlubmVySFRNTCA9ICcnO1xuICBsZXQgY2l0eVRleHQgPSBjaXR5LnZhbHVlO1xuICBsZXQgY291bnRyeVRleHQgPSBjb3VudHJ5LnZhbHVlO1xuICByZXRyaWV2ZURhdGEoY2l0eVRleHQsIGNvdW50cnlUZXh0LCBhbHRlcm5hdGVVbml0cyhzdGF0dXMuc3lzdGVtKSk7XG59XG5cbmV4cG9ydCB7IHN0YXJ0LCBjaGFuZ2VVbml0cyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9