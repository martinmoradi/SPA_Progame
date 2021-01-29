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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => /* binding */ header,\n/* harmony export */   \"footer\": () => /* binding */ footer\n/* harmony export */ });\nconst header = () => {\n  return `\n  <nav class=\"header--navigation\">\n      <a href=\"#\" class=\"header--title\">The Hyper Progame</a>\n      <div class=\"header--searchbar\">\n    <i class=\"fa fa-search searchIcon\"></i>\n        <input type=\"text\" name=\"searchGame\" id=\"searchGame\" placeholder=\"Find a game...\">\n        \n      </div>\n    </nav>\n  `;\n};\n\nconst footer = () => {\n  return `\n  <footer class=\"footer__main\">\n    <div class=\"footer__redbar\"></div>\n    <p class=\"footer__text\">\n      Martin Moradi © 2021 - Fictionnal website for exercice\n    </p>\n  </footer>\n  `;\n};\n\n\n\n\n\n\n//# sourceURL=webpack://test-webpack/./src/js/components.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageDetail\": () => /* binding */ PageDetail\n/* harmony export */ });\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ \"./src/js/utility.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ \"./src/js/components.js\");\n\n\n\nconst PageDetail = (argument) => {\n  const preparePage = () => {\n    let cleanedArgument = argument.replace(/\\s+/g, \"-\");\n\n    const fetchGame = (url, argument) => {\n      let finalURL = url + argument;\n\n      fetch(`${finalURL}`)\n        .then((response) => response.json())\n        .then((response) => {\n          let {\n            background_image,\n            website,\n            name,\n            rating,\n            ratings_count,\n            released,\n            description,\n            developers,\n            platforms,\n            publishers,\n            genres,\n            tags,\n            stores,\n            clip,\n            screenshots_count,\n            slug,\n          } = response;\n          if (background_image) {\n            document.querySelector(\n              \".hero--banner__image\"\n            ).style.backgroundImage = `url(${background_image})`;\n          }\n\n          if (website) {\n            document.querySelector(\".hero--banner__image\").innerHTML = `\n             <button class=\"hero--banner__button\"><a href=\"${website}\">Check Website</a></button>\n             `;\n          }\n\n          if (name) {\n            document.querySelector(\".game-title\").innerHTML = name;\n          }\n\n          if (rating && ratings_count) {\n            document.querySelector(\n              \".game_ratings\"\n            ).innerHTML = `${rating}/5 - ${ratings_count} votes`;\n          }\n\n          if (description) {\n            document.querySelector(\".game_description\").innerHTML = description;\n          }\n\n          if (released) {\n            document.querySelector(\".game_release-date\").innerHTML = released;\n          }\n\n          if (developers) {\n            document.querySelector(\".game_developers\").innerHTML =\n              developers[0].name;\n          }\n\n          if (platforms) {\n            platforms.forEach((platform) => {\n              document.querySelector(\".game_platforms\").innerHTML +=\n                platform.platform.name;\n            });\n          }\n\n          if (publishers) {\n            publishers.forEach((publisher) => {\n              document.querySelector(\".game_publishers\").innerHTML +=\n                publisher.name;\n            });\n          }\n\n          if (genres) {\n            genres.forEach((genre) => {\n              document.querySelector(\".game_genres\").innerHTML +=\n              genre.name + \" \"\n            })\n          }\n\n          if (tags) {\n            tags.forEach((tag) => {\n               document.querySelector(\".game_tags\").innerHTML +=\n               tag.name + \" \"\n            })\n          }\n\n          if (stores) {\n            stores.forEach((store) => {\n               document.querySelector(\".game_stores\").innerHTML +=\n               store.store.name + \" \"\n            })\n          }\n        });\n    };\n\n    fetchGame(\"https://api.rawg.io/api/games/\", cleanedArgument);\n  };\n\n  const render = () => {\n    pageContent.innerHTML = `\n     <header>\n      ${(0,_components__WEBPACK_IMPORTED_MODULE_1__.header)()}\n        <div class=\"hero--banner__image\">          \n        </div>\n        \n      </header>\n      <div>\n        <h1 class=\"game-title\"></h1>\n        <h1 class=\"game_ratings\">test</h1>\n      </div>\n      <p class=\"game_description\"></p>\n      <section class=\"game-detail\">\n        <div class=\"game_release-date\"></div>\n        <div class=\"game_developers\"></div>\n        <div class=\"game_platforms\"></div>\n        <div class=\"game_publishers\"></div>\n        <div class=\"game_genres\"></div>\n        <div class=\"game_tags\"></div>\n        <div class=\"game_stores\"></div>\n      </section>\n      ${(0,_components__WEBPACK_IMPORTED_MODULE_1__.footer)()}\n    `;\n\n    preparePage();\n  };\n\n  render();\n};\n\n\n\n\n//# sourceURL=webpack://test-webpack/./src/js/pageDetail.js?");

/***/ }),

/***/ "./src/js/pageList.js":
/*!****************************!*\
  !*** ./src/js/pageList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageList\": () => /* binding */ PageList\n/* harmony export */ });\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./src/js/components.js\");\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility */ \"./src/js/utility.js\");\nlet pageContent = document.querySelector(\"#pageContent\");\n\n\n\nconst PageList = (argument) => {\n\n  const hideContent = () => {\n    const cards = document.querySelectorAll(\".game__card\");\n    cards.forEach((card, index) => {\n      if (index > 8) {\n        card.classList.add(\"hidden\");\n      }\n    });\n  };\n\n  const showContent = () => {\n    let count = 0;\n    const showMoreButton = document.querySelector(\".main__showmore--button\");\n    showMoreButton.addEventListener(\"click\", function () {\n      const cards = document.querySelectorAll(\".game__card.hidden\");\n      count++;\n      cards.forEach((card, index) => {\n        if (index <= 8) {\n          card.classList.remove(\"hidden\");\n        }\n      });\n      if (count >= 2) {\n        showMoreButton.classList.add(\"hidden\");\n      }\n    });\n  };\n\n  const preparePage = () => {\n    let cleanedArgument = argument.replace(/\\s+/g, \"-\");\n    let games = \"\";\n\n    const fetchList = (url, argument, pageSize) => {\n      let finalURL = url;\n      if (argument) {\n        finalURL = url + \"?search=\" + argument + pageSize;\n      } else {\n        finalURL = url + \"?dates=\" + (0,_utility__WEBPACK_IMPORTED_MODULE_1__.getDate)() + pageSize;\n      }\n\n      fetch(`${finalURL}`)\n        .then((response) => response.json())\n        .then((response) => {\n          response.results.forEach((game) => {\n            const tags = [];\n            game.tags.forEach((tag) => {\n             if (tag.language === \"eng\") {\n               tags.push(tag.name);\n             }\n            });\n\n            const platforms = [];\n            game.parent_platforms.forEach((parent) =>\n              platforms.push(parent.platform.slug)\n            );\n\n            const disctinctPlatforms = [...new Set(platforms)];\n            let icons = [];\n            disctinctPlatforms.forEach((ele) =>\n              icons.push((0,_utility__WEBPACK_IMPORTED_MODULE_1__.platformsIcons)(ele))\n            );\n           \n            games += `\n                    <div class=\"game__card\">\n                      <img src=\"${\n                        game.background_image\n                      }\" class=\"game__card--image alt=\"${game.name}\">\n                      <div class=\"game__card--details hidden\">\n                        <h3>${(0,_utility__WEBPACK_IMPORTED_MODULE_1__.formatDate)(game.released)}</h3>\n                        <h3 class=\"game__card--developers\">${game.slug}</h3>\n                        <h3>${game.rating}/5 - ${game.reviews_count} votes</h3>\n                        <p>${tags.join(\" \")}</p>\n                      </div>\n                      <a href =\"#pagedetail/${\n                        game.id\n                      }\" class=\"game__card--title link\">\n                       ${game.name}\n                      </a> \n                      <div class=\"game__card--icons\">\n                        ${icons.join(\"\\n\")}\n                      </div>                 \n                  </div>     \n                `;\n          });\n\n          document.querySelector(\".grid-container\").innerHTML = games;\n          (0,_utility__WEBPACK_IMPORTED_MODULE_1__.fetchDevelopers)()\n          document.querySelectorAll(\".game__card--image\").forEach((image) => {\n            image.addEventListener(\"mouseover\", showDetails);\n          });\n          document.querySelectorAll(\".game__card--details\").forEach((card) => {\n            card.addEventListener(\"mouseleave\", hideDetails);\n          });\n          hideContent();\n        });\n    };\n\n    fetchList(\n      \"https://api.rawg.io/api/games\",\n      cleanedArgument, \"&page_size=27\"\n    );\n    (0,_utility__WEBPACK_IMPORTED_MODULE_1__.fetchPlatforms)();\n  };\n\n  const showDetails = (e) => {\n    e.target.classList.add(\"hidden\");\n    e.target.nextElementSibling.classList.remove(\"hidden\");\n  };\n\n  const hideDetails = (e) => {\n    e.target.classList.add(\"hidden\");\n    e.target.previousElementSibling.classList.remove(\"hidden\");\n  };\n\n  const render = () => {\n \n    pageContent.innerHTML = `    \n    <header>\n    ${(0,_components__WEBPACK_IMPORTED_MODULE_0__.header)()}\n        <h1>Welcome,</h1>\n        <p>\n         The Hyper Progame is the world's premier event for computer and video games and related products. At The Hyper Progame, the video game industy's top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best, brightest, and most innovative in the interactive entertainment industy. For three exiting days, leading-edge compagnies, groundbrealing new technologies, and never-before seen products will be showcased. The Hyper Progame connects you with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure\n        </p>\n        <form class=\"header--select__wrapper\">\n          <select id=\"platforms\" name=\"platformlist\" class=\"header--select__box\">\n             \n          </select>\n        </form>\n      </header>\n      \n      <section class=\"games-list\">\n        <div class=\"grid-container\">...loading</div>\n        <div class=\"main__showmore\">\n          <button class=\"main__showmore--button\">Show more</button>\n        </div>\n      </section>\n\n       ${(0,_components__WEBPACK_IMPORTED_MODULE_0__.footer)()}\n    `;\n    preparePage();\n\n  };\n\n  render();\n\n  showContent();\n};\n\n\n\n\n//# sourceURL=webpack://test-webpack/./src/js/pageList.js?");

/***/ }),

/***/ "./src/js/routes.js":
/*!**************************!*\
  !*** ./src/js/routes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => /* binding */ routes\n/* harmony export */ });\n/* harmony import */ var _pageList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageList */ \"./src/js/pageList.js\");\n/* harmony import */ var _pageDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageDetail */ \"./src/js/pageDetail.js\");\nconst routes = {\n  \"\": _pageList__WEBPACK_IMPORTED_MODULE_0__.PageList,\n  pagelist: _pageList__WEBPACK_IMPORTED_MODULE_0__.PageList,\n  pagedetail: _pageDetail__WEBPACK_IMPORTED_MODULE_1__.PageDetail\n};\n\n\n\n\n\n\n//# sourceURL=webpack://test-webpack/./src/js/routes.js?");

/***/ }),

/***/ "./src/js/utility.js":
/*!***************************!*\
  !*** ./src/js/utility.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"platformsIcons\": () => /* binding */ platformsIcons,\n/* harmony export */   \"formatDate\": () => /* binding */ formatDate,\n/* harmony export */   \"searchGame\": () => /* binding */ searchGame,\n/* harmony export */   \"getDate\": () => /* binding */ getDate,\n/* harmony export */   \"fetchDevelopers\": () => /* binding */ fetchDevelopers,\n/* harmony export */   \"fetchPlatforms\": () => /* binding */ fetchPlatforms,\n/* harmony export */   \"storeIcons\": () => /* binding */ storeIcons\n/* harmony export */ });\n/* harmony import */ var _pageList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageList */ \"./src/js/pageList.js\");\n\n\nconst platformsIcons = (platform) => {\n  switch (platform) {\n    case \"pc\":\n      return \"<img src='/src/images/icons/windows.svg' alt='Windows' class='platform__icon'>\";\n\n    case \"playstation\":\n      return \"<img src='src/images/icons/ps4.svg' alt='PlayStation' class='platform__icon'>\";\n\n    case \"xbox\":\n      return \"<img src='/src/images/icons/xbox.svg' alt='Xbox' class='platform__icon'>\";\n\n    case \"ios\":\n      return \"<img src='/src/images/icons/mobile.svg' alt='Ios' class='platform__icon'>\";\n\n    case \"android\":\n      return \"<img src='src/images/icons/androi.svg' alt='Android' class='platform__icon'>\";\n\n    case \"mac\":\n      return \"<img src='src/images/icons/apple.svg' alt='Mac' class='platform__icon'>\";\n\n    case \"linux\":\n      return \"<img src='src/images/icons/linux.svg' alt='Linux' class='platform__icon'>\";\n\n    case \"nintendo\":\n      return \"<img src='src/images/icons/switch.svg' alt='Nintendo' class='platform__icon'>\";\n\n    case \"atari\":\n      return \"<img src='src/images/icons/ghost-solid.svg' alt='Atari' class='platform__icon'>\";\n\n    case \"commodore-amiga\":\n      return \"<img src='src/images/icons/ghost-solid.svg' alt='Commodore' class='platform__icon'>\";\n\n    case \"sega\":\n      return \"<img src='src/images/icons/ghost-solid.svg' alt='Sega' class='platform__icon'>\";\n\n    case \"3do\":\n      return \"<img src='src/images/icons/ghost-solid.svg' alt='3do' class='platform__icon'>\";\n\n    case \"neo-geo\":\n      return \"<img src='src/images/icons/ghost-solid.svg' alt='Neo-Geo' class='platform__icon'>\";\n\n    case \"web\":\n      return \"<img data-id='14' src='src/images/icons/chrome.svg' alt='Web' class='platform__icon'>\";\n  }\n};\n\nconst storeIcons = (store) => {\n  switch (store) {\n    case \"steam\":\n      return \"<img data-id='1' src='src/images/icons/steam.svg' alt='Steam' class='store__icon'>\"\n\n    case \"playstation-store\":\n      return \"<img data-id='2' src='src/images/icons/ps4.svg' alt='PS Store' class='store__icon'>\"\n\n    case\"xbox-store\":\n      return \"<img data-id='3' src='src/images/icons/xbox.svg' alt='Xbox Store' class='store__icon'>\";\n\n    case \"apple-appstore\":\n      return \"<img data-id='4' src='src/images/icons/applestore.svg' alt='Apple Store' class='store__icon'>\";\n\n    case \"gog\":\n      return \"<img data-id='5' src='src/images/icons/gog.svg' alt='GoG' class='store__icon'>\";\n\n    case \"nintendo\":\n      return \"<img data-id='6' src='src/images/icons/switch.svg' alt='Nintendo' class='store__icon'>\";\n\n    case \"xbox360\":\n      return \"<img data-id='7' src='src/images/icons/xbox.svg' alt='Xbox360' class='store__icon'>\";\n\n    case \"google-play\":\n      return \"<img data-id='8' src='src/images/icons/googleplay.svg' alt='Google Play' class='store__icon'>\";\n\n    case \"switch\":\n      return \"<img data-id='9' src='src/images/icons/itch.svg' alt='Switch' class='store__icon'>\";\n\n    case \"epic-games\":\n      return \"<img data-id='10' src='src/images/icons/epic.svg' alt='Epic Games' class='store__icon'>\";\n  }\n  \n}\n\nconst formatDate = (date) => {\n  let splittedDate = date.split(\"-\");\n  let formatted = `${monthFormater(splittedDate[1])} ${splittedDate[2]} ${\n    splittedDate[0]\n  }`;\n  return formatted;\n};\n\nconst monthFormater = (month) => {\n  switch (month) {\n    case \"01\":\n      return \"Jan.\";\n    case \"02\":\n      return \"Feb.\";\n    case \"03\":\n      return \"Mar.\";\n    case \"04\":\n      return \"Apr.\";\n    case \"05\":\n      return \"May\";\n    case \"06\":\n      return \"Jun.\";\n    case \"07\":\n      return \"Jul.\";\n    case \"08\":\n      return \"Aug.\";\n    case \"09\":\n      return \"Sept.\";\n    case \"10\":\n      return \"Oct.\";\n    case \"11\":\n      return \"Nov.\";\n    case \"12\":\n      return \"Dec.\";\n  }\n};\n\nconst getDate = () => {\n  let dateNow = new Date();\n  let month = dateNow.getMonth() + 1;\n  let day = dateNow.getDate();\n  let fullCurrentDate =\n    dateNow.getFullYear() +\n    \"-\" +\n    ((\"\" + month).length < 2 ? \"0\" : \"\") +\n    month +\n    \"-\" +\n    ((\"\" + day).length < 2 ? \"0\" : \"\") +\n    day;\n\n  // get current year+1\n  let fullNextYear =\n    dateNow.getFullYear() +\n    1 +\n    \"-\" +\n    ((\"\" + month).length < 2 ? \"0\" : \"\") +\n    month +\n    \"-\" +\n    ((\"\" + day).length < 2 ? \"0\" : \"\") +\n    day;\n\n  return `${fullCurrentDate},${fullNextYear}`;\n};\n\nconst searchGame = () => {\n  let search = document.getElementById(\"searchGame\").value;\n  searchBar.addEventListener(\"submit\", (e) => {\n    const request = document.getElementById(\"searchGame\").value;\n    console.log(request);\n    e.preventDefault();\n    (0,_pageList__WEBPACK_IMPORTED_MODULE_0__.PageList)(request);\n  });\n};\n\nconst fetchDevelopers = () => {\n  let developers = document.querySelectorAll(\".game__card--developers\");\n  developers.forEach((developer) => {\n    let game = developer.innerHTML;\n    fetch(`https://api.rawg.io/api/games/${game}`)\n      .then((response) => response.json())\n      .then((response) => {\n        let devStudio;\n        if (response.developers) {\n          response.developers.forEach((developer) => {\n            devStudio = `${developer.name}`;\n          });\n        }\n        developer.innerHTML = devStudio;\n      });\n  });\n};\n\nconst fetchPlatforms = async () => {\n  let options = '<option value=\"any\">Platform : Any</option>';\n  let fetched = await fetch(`https://api.rawg.io/api/platforms?&page_size=8`);\n  const response = await fetched.json();\n\n  response.results.forEach((platform) => {\n    options += `\n                <option value=\"${platform.slug}\">Platform : ${platform.name}</option>\n                `;\n  });\n  document.querySelector(\"#platforms\").innerHTML = options;\n};\n\n\n\n\n//# sourceURL=webpack://test-webpack/./src/js/utility.js?");

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