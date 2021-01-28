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

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://test-webpack/./src/sass/style.scss?");

/***/ }),

/***/ "./src/js/components.js":
/*!******************************!*\
  !*** ./src/js/components.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => /* binding */ header\n/* harmony export */ });\nconst header = () => {\n  return `\n  <nav class=\"header--navigation\">\n      <a href=\"#\" class=\"header--title\">The Hyper Progame</a>\n      <div class=\"header--searchbar\">\n    <i class=\"fa fa-search searchIcon\"></i>\n        <input type=\"text\" name=\"searchGame\" id=\"searchGame\" placeholder=\"Find a game...\">\n        \n      </div>\n    </nav>\n  `;\n};\n\n\n\n\n//# sourceURL=webpack://test-webpack/./src/js/components.js?");

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => /* binding */ Home\n/* harmony export */ });\nconst Home = (argument = \"\") => {\n  console.log(\"Home Page\", argument);\n};\n\n\n\n\n//# sourceURL=webpack://test-webpack/./src/js/home.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"./src/js/routes.js\");\n\n\n\nlet pageArgument;\n\nconst setRoute = () => {\n  let path = window.location.hash.substring(1).split(\"/\");\n  pageArgument = path[1] || \"\";\n\n  var pageContent = document.getElementById(\"pageContent\");\n  _routes__WEBPACK_IMPORTED_MODULE_1__.routes[path[0]](pageArgument);\n  return true;\n};\n\nwindow.addEventListener(\"hashchange\", () => setRoute());\nwindow.addEventListener(\"DOMContentLoaded\", () => setRoute());\n\n\n//# sourceURL=webpack://test-webpack/./src/js/index.js?");

/***/ }),

/***/ "./src/js/pageDetail.js":
/*!******************************!*\
  !*** ./src/js/pageDetail.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageDetail\": () => /* binding */ PageDetail\n/* harmony export */ });\nconst PageDetail = (argument = \"\") => {\n  console.log(\"Page Detail\", argument);\n};\n\n\n\n//# sourceURL=webpack://test-webpack/./src/js/pageDetail.js?");

/***/ }),

/***/ "./src/js/pageList.js":
/*!****************************!*\
  !*** ./src/js/pageList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageList\": () => /* binding */ PageList\n/* harmony export */ });\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./src/js/components.js\");\nlet pageContent = document.querySelector(\"#pageContent\");\n\n\nconst PageList = (argument = \"\") => {\n  const preparePage = () => {\n    let cleanedArgument = argument.replace(/\\s+/g, \"-\");\n    let games = \"\";\n\n    const fetchList = (url, argument) => {\n      let finalURL = url;\n      if (argument) {\n        finalURL = url + \"?search=\" + argument;\n      }\n\n      fetch(`${finalURL}`)\n        .then((response) => response.json())\n        .then((response) => {\n          response.results.forEach((game) => {\n            games += `\n                  <div class=\"game__card\">\n                  <img src=\"${game.background_image}\" class=\"game__card--image\">\n                  <a href =\"#pagedetail/${game.id}\" class=\"game__card--title\">${game.name}</a>                  \n                  </div>\n                `;\n          });\n          document.querySelector(\".grid-container\").innerHTML = games;\n        });\n    };\n\n    fetchList(\n      \"https://api.rawg.io/api/games\",\n      cleanedArgument + \"&page_size=27\"\n    );\n  };\n\n  const render = () => {\n    pageContent.innerHTML = `    \n    <header>\n    ${(0,_components__WEBPACK_IMPORTED_MODULE_0__.header)()}\n        <h1>Welcome,</h1>\n        <p>The Hyper Progame is the world's premier event for computer and video games and related products. At The Hyper Progame, the video game industy's top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best, brightest, and most innovative in the interactive entertainment industy. For three exiting days, leading-edge compagnies, groundbrealing new technologies, and never-before seen products will be showcased. The Hyper Progame connects you with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure</p>\n        <div class=\"box\">\n          <select id=\"platforms\" name=\"platformlist\">\n            <option value=\"any\">Platform : Any</option>\n          </select>\n        </div>  \n      </header>\n      \n      <section class=\"games-list\">\n        <div class=\"grid-container\">...loading</div>\n      </section>\n    `;\n\n    preparePage();\n  };\n\n  render();\n};\n\n// searchBar.addEventListener(\"submit\", (e) => {\n//   const gameSearch = document.getElementById(\"search\").value\n//   e.preventDefault()\n//   PageList(gameSearch)\n// })\n\n// function qui return date today AA-MOIS-JOUR (2021-01-27, 2022-01-27)\n\n\n\n//# sourceURL=webpack://test-webpack/./src/js/pageList.js?");

/***/ }),

/***/ "./src/js/routes.js":
/*!**************************!*\
  !*** ./src/js/routes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => /* binding */ routes\n/* harmony export */ });\n/* harmony import */ var _pageList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageList */ \"./src/js/pageList.js\");\n/* harmony import */ var _pageDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageDetail */ \"./src/js/pageDetail.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/js/home.js\");\nconst routes = {\n  \"\": _home__WEBPACK_IMPORTED_MODULE_0__.Home,\n  pagelist: _pageList__WEBPACK_IMPORTED_MODULE_1__.PageList,\n  pagedetail: _pageDetail__WEBPACK_IMPORTED_MODULE_2__.PageDetail\n};\n\n\n\n\n\n\n//# sourceURL=webpack://test-webpack/./src/js/routes.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;