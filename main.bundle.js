"use strict";
(self["webpackChunkdemo_pop_app"] = self["webpackChunkdemo_pop_app"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\r\n\tscroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n\tbackground-color: #e6e6e6;\r\n\tbackground: #c9d6ff;\r\n\tbackground: -webkit-linear-gradient(to right, #e2e2e2, #c9d6ff);\r\n\tbackground: linear-gradient(to right, #e2e2e2, #c9d6ff);\r\n\tfont-family: \"Roboto\", sans-serif;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n.hero-container {\r\n\twidth: 100vw;\r\n\theight: 100vh;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tgap: 20px;\r\n\tcolor: black;\r\n\tfont-family: \"Raleway\", sans-serif;\r\n}\r\n\r\n.hero-title {\r\n\tfont-size: 80px;\r\n}\r\n\r\n.hero-subtitle {\r\n\tfont-size: 20px;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.navbar-menu {\r\n\tdisplay: none;\r\n}\r\n\r\n.navbar-menu-item {\r\n\tpadding-bottom: 2px;\r\n}\r\n\r\n.navbar-menu-item.current-page {\r\n\tborder-bottom: 3px solid #f08080;\r\n}\r\n\r\n.footer-container {\r\n\tposition: absolute;\r\n\tbottom: 5px;\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tfont-size: 20px;\r\n}\r\n\r\n.side-navbar {\r\n\tdisplay: none;\r\n}\r\n\r\n.navbar-page-section-bullet {\r\n\tfont-size: 16px;\r\n\tfont-weight: normal;\r\n}\r\n\r\n.hero-demo-button {\r\n\toutline: none;\r\n\tborder: none;\r\n\tbackground: black;\r\n\tcolor: white;\r\n\tfont-size: 20px;\r\n\tpadding: 10px 30px;\r\n\tborder-radius: 4px;\r\n\tmargin-top: 20px;\r\n\tfont-family: \"Raleway\", sans-serif;\r\n\tletter-spacing: 1px;\r\n\ttransition: 0.3s;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.hero-demo-button:hover {\r\n\tcursor: pointer;\r\n\tbackground: #0d0d0d;\r\n\ttransition: 0.3s;\r\n\tcolor: #f08080;\r\n}\r\n\r\n.page-sections {\r\n\tmargin-top: 30%;\r\n\tmargin-bottom: 10%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tgap: 50px;\r\n}\r\n\r\n.section {\r\n\tbackground: white;\r\n\twidth: 80%;\r\n\tpadding: 20px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 40px;\r\n\tborder-radius: 7px;\r\n\tbox-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n}\r\n\r\n.section-title {\r\n\tfont-size: 35px;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.section-subtitle {\r\n\tfont-size: 25px;\r\n\ttext-align: center;\r\n\tfont-weight: bold;\r\n\tbackground: #f0f0f0;\r\n\tpadding: 10px;\r\n}\r\n\r\n.section-content {\r\n\tfont-size: 20px;\r\n}\r\n\r\n.code-snippet {\r\n\tfont-size: 14px !important;\r\n\tfont-weight: bold;\r\n\tdisplay: flex;\r\n\tbackground: #f0f8ff;\r\n\tbox-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;\r\n\tpadding: 5px;\r\n\tmargin: 10px 0px;\r\n\toverflow-x: scroll;\r\n}\r\n\r\n.navbar-container {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tbackground: black;\r\n\tcolor: white;\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tfont-size: 40px;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmin-height: 70px;\r\n}\r\n\r\n.back-arrow {\r\n\tposition: absolute;\r\n\tleft: 20px;\r\n\toutline: none;\r\n\tborder: none;\r\n\tbackground: inherit;\r\n\tcolor: white;\r\n\tfont-size: 40px;\r\n}\r\n\r\n.link-button {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.link-button:visited {\r\n\tcolor: black;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.hamburger-icon-container {\r\n\tposition: absolute;\r\n\tleft: 20px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\tgap: 10px;\r\n\theight: auto;\r\n\twidth: 40px;\r\n}\r\n\r\n.hamburger-line {\r\n\tborder-top: 2px solid white;\r\n}\r\n\r\n.hamburger-navbar-menu {\r\n\tposition: fixed;\r\n\tbackground: black;\r\n\tfont-size: 40px;\r\n\ttop: 70px;\r\n\tpadding: 25px 0px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 60px;\r\n\topacity: 0.9;\r\n\twidth: 100%;\r\n\talign-items: center;\r\n}\r\n\r\n.hamburger-menu-item {\r\n\ttext-decoration: none;\r\n\tfont-size: 25px;\r\n\tcolor: #f08080;\r\n}\r\n\r\n.navbar-link {\r\n\tcolor: white;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.navbar-link:hover {\r\n\tcolor: #f08080 !important;\r\n\tcursor: pointer;\r\n}\r\n\r\n.navbar-link:visited {\r\n\ttext-decoration: none;\r\n\tcolor: white;\r\n}\r\n\r\n.hamburger-menu-item:visited {\r\n\tcolor: #f08080;\r\n}\r\n\r\n.external-link {\r\n\tcolor: #f08080;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.external-link:hover {\r\n\ttext-decoration: underline;\r\n}\r\n\r\n.external-link:visited {\r\n\tcolor: #f08080;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.counter-container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tgap: 30px;\r\n\tfont-size: 40px;\r\n\tcolor: #f08080;\r\n}\r\n\r\n.counter-button {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tfont-size: 40px;\r\n\twidth: 40px;\r\n\theight: 40px;\r\n}\r\n\r\n.box-container {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tgap: 20px;\r\n}\r\n\r\n.box-button {\r\n\tfont-size: 25px;\r\n\tpadding: 5px 20px;\r\n}\r\n\r\n.box-display {\r\n\tbackground: red;\r\n\twidth: 30%;\r\n\theight: 40px;\r\n}\r\n\r\n.stopwatch-container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tgap: 20px;\r\n\tfont-size: 40px;\r\n\tcolor: #f08080;\r\n}\r\n\r\n.stopwatch-button {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tfont-size: 20px;\r\n\tpadding: 10px;\r\n}\r\n\r\n.duplicate-container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tgap: 20px;\r\n}\r\n\r\n.duplicate-input {\r\n\twidth: 50%;\r\n\tfont-size: 20px;\r\n}\r\n\r\n.duplicate-output {\r\n\tfont-size: 20px;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n\t.page-sections {\r\n\t\tmargin-top: 15%;\r\n\t\tmargin-bottom: 5%;\r\n\t}\r\n\t.hero-title {\r\n\t\tfont-size: 150px;\r\n\t}\r\n\t.hero-subtitle {\r\n\t\tfont-size: 30px;\r\n\t}\r\n\t.hamburger-menu-item {\r\n\t\tfont-size: 30px;\r\n\t}\r\n}\r\n\r\n@media (min-width: 1025px) {\r\n\t.section {\r\n\t\twidth: 50%;\r\n\t}\r\n\t.page-sections {\r\n\t\tmargin-top: 6%;\r\n\t\tmargin-bottom: 2%;\r\n\t}\r\n\t.code-snippet {\r\n\t\tjustify-content: center;\r\n\t\toverflow-x: hidden;\r\n\t}\r\n\t.section-content {\r\n\t\tfont-size: 18px;\r\n\t}\r\n\t.box-display {\r\n\t\twidth: 10%;\r\n\t}\r\n\t.navbar-container {\r\n\t\tjustify-content: end;\r\n\t}\r\n\t.navbar-title {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.hamburger-icon-container {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.navbar-menu {\r\n\t\tdisplay: flex;\r\n\t\tfont-size: 20px;\r\n\t\tgap: 70px;\r\n\t\tmargin-right: 2%;\r\n\t\tfont-family: \"Raleway\", sans-serif;\r\n\t}\r\n\t.footer-container {\r\n\t\tfont-size: 18px;\r\n\t}\r\n\t.side-navbar {\r\n\t\tdisplay: unset;\r\n\t\tposition: fixed;\r\n\t\twidth: fit-content;\r\n\t\tbackground: white;\r\n\t\tleft: 2%;\r\n\t\ttop: 100px;\r\n\t\tpadding: 20px;\r\n\t\tfont-family: \"Raleway\", sans-serif;\r\n\t\tfont-size: 18px;\r\n\t\tfont-weight: bold;\r\n\t\tborder-radius: 7px;\r\n\t}\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"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CACtB,mBAAmB;CACnB,SAAS;AACV;;AAEA;CACC,UAAU;CACV,eAAe;AAChB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC;EACC,eAAe;EACf,iBAAiB;CAClB;CACA;EACC,gBAAgB;CACjB;CACA;EACC,eAAe;CAChB;CACA;EACC,eAAe;CAChB;AACD;;AAEA;CACC;EACC,UAAU;CACX;CACA;EACC,cAAc;EACd,iBAAiB;CAClB;CACA;EACC,uBAAuB;EACvB,kBAAkB;CACnB;CACA;EACC,eAAe;CAChB;CACA;EACC,UAAU;CACX;CACA;EACC,oBAAoB;CACrB;CACA;EACC,aAAa;CACd;CACA;EACC,aAAa;CACd;CACA;EACC,aAAa;EACb,eAAe;EACf,SAAS;EACT,gBAAgB;EAChB,kCAAkC;CACnC;CACA;EACC,eAAe;CAChB;CACA;EACC,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,QAAQ;EACR,UAAU;EACV,aAAa;EACb,kCAAkC;EAClC,eAAe;EACf,iBAAiB;EACjB,kBAAkB;CACnB;AACD","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&family=Roboto&display=swap\");\r\n\r\nhtml {\r\n\tscroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n\tbackground-color: #e6e6e6;\r\n\tbackground: #c9d6ff;\r\n\tbackground: -webkit-linear-gradient(to right, #e2e2e2, #c9d6ff);\r\n\tbackground: linear-gradient(to right, #e2e2e2, #c9d6ff);\r\n\tfont-family: \"Roboto\", sans-serif;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n.hero-container {\r\n\twidth: 100vw;\r\n\theight: 100vh;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tgap: 20px;\r\n\tcolor: black;\r\n\tfont-family: \"Raleway\", sans-serif;\r\n}\r\n\r\n.hero-title {\r\n\tfont-size: 80px;\r\n}\r\n\r\n.hero-subtitle {\r\n\tfont-size: 20px;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.navbar-menu {\r\n\tdisplay: none;\r\n}\r\n\r\n.navbar-menu-item {\r\n\tpadding-bottom: 2px;\r\n}\r\n\r\n.navbar-menu-item.current-page {\r\n\tborder-bottom: 3px solid #f08080;\r\n}\r\n\r\n.footer-container {\r\n\tposition: absolute;\r\n\tbottom: 5px;\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tfont-size: 20px;\r\n}\r\n\r\n.side-navbar {\r\n\tdisplay: none;\r\n}\r\n\r\n.navbar-page-section-bullet {\r\n\tfont-size: 16px;\r\n\tfont-weight: normal;\r\n}\r\n\r\n.hero-demo-button {\r\n\toutline: none;\r\n\tborder: none;\r\n\tbackground: black;\r\n\tcolor: white;\r\n\tfont-size: 20px;\r\n\tpadding: 10px 30px;\r\n\tborder-radius: 4px;\r\n\tmargin-top: 20px;\r\n\tfont-family: \"Raleway\", sans-serif;\r\n\tletter-spacing: 1px;\r\n\ttransition: 0.3s;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.hero-demo-button:hover {\r\n\tcursor: pointer;\r\n\tbackground: #0d0d0d;\r\n\ttransition: 0.3s;\r\n\tcolor: #f08080;\r\n}\r\n\r\n.page-sections {\r\n\tmargin-top: 30%;\r\n\tmargin-bottom: 10%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tgap: 50px;\r\n}\r\n\r\n.section {\r\n\tbackground: white;\r\n\twidth: 80%;\r\n\tpadding: 20px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 40px;\r\n\tborder-radius: 7px;\r\n\tbox-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n}\r\n\r\n.section-title {\r\n\tfont-size: 35px;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.section-subtitle {\r\n\tfont-size: 25px;\r\n\ttext-align: center;\r\n\tfont-weight: bold;\r\n\tbackground: #f0f0f0;\r\n\tpadding: 10px;\r\n}\r\n\r\n.section-content {\r\n\tfont-size: 20px;\r\n}\r\n\r\n.code-snippet {\r\n\tfont-size: 14px !important;\r\n\tfont-weight: bold;\r\n\tdisplay: flex;\r\n\tbackground: #f0f8ff;\r\n\tbox-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;\r\n\tpadding: 5px;\r\n\tmargin: 10px 0px;\r\n\toverflow-x: scroll;\r\n}\r\n\r\n.navbar-container {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tbackground: black;\r\n\tcolor: white;\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tfont-size: 40px;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmin-height: 70px;\r\n}\r\n\r\n.back-arrow {\r\n\tposition: absolute;\r\n\tleft: 20px;\r\n\toutline: none;\r\n\tborder: none;\r\n\tbackground: inherit;\r\n\tcolor: white;\r\n\tfont-size: 40px;\r\n}\r\n\r\n.link-button {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.link-button:visited {\r\n\tcolor: black;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.hamburger-icon-container {\r\n\tposition: absolute;\r\n\tleft: 20px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\tgap: 10px;\r\n\theight: auto;\r\n\twidth: 40px;\r\n}\r\n\r\n.hamburger-line {\r\n\tborder-top: 2px solid white;\r\n}\r\n\r\n.hamburger-navbar-menu {\r\n\tposition: fixed;\r\n\tbackground: black;\r\n\tfont-size: 40px;\r\n\ttop: 70px;\r\n\tpadding: 25px 0px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 60px;\r\n\topacity: 0.9;\r\n\twidth: 100%;\r\n\talign-items: center;\r\n}\r\n\r\n.hamburger-menu-item {\r\n\ttext-decoration: none;\r\n\tfont-size: 25px;\r\n\tcolor: #f08080;\r\n}\r\n\r\n.navbar-link {\r\n\tcolor: white;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.navbar-link:hover {\r\n\tcolor: #f08080 !important;\r\n\tcursor: pointer;\r\n}\r\n\r\n.navbar-link:visited {\r\n\ttext-decoration: none;\r\n\tcolor: white;\r\n}\r\n\r\n.hamburger-menu-item:visited {\r\n\tcolor: #f08080;\r\n}\r\n\r\n.external-link {\r\n\tcolor: #f08080;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.external-link:hover {\r\n\ttext-decoration: underline;\r\n}\r\n\r\n.external-link:visited {\r\n\tcolor: #f08080;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.counter-container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tgap: 30px;\r\n\tfont-size: 40px;\r\n\tcolor: #f08080;\r\n}\r\n\r\n.counter-button {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tfont-size: 40px;\r\n\twidth: 40px;\r\n\theight: 40px;\r\n}\r\n\r\n.box-container {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tgap: 20px;\r\n}\r\n\r\n.box-button {\r\n\tfont-size: 25px;\r\n\tpadding: 5px 20px;\r\n}\r\n\r\n.box-display {\r\n\tbackground: red;\r\n\twidth: 30%;\r\n\theight: 40px;\r\n}\r\n\r\n.stopwatch-container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tgap: 20px;\r\n\tfont-size: 40px;\r\n\tcolor: #f08080;\r\n}\r\n\r\n.stopwatch-button {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tfont-size: 20px;\r\n\tpadding: 10px;\r\n}\r\n\r\n.duplicate-container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tgap: 20px;\r\n}\r\n\r\n.duplicate-input {\r\n\twidth: 50%;\r\n\tfont-size: 20px;\r\n}\r\n\r\n.duplicate-output {\r\n\tfont-size: 20px;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n\t.page-sections {\r\n\t\tmargin-top: 15%;\r\n\t\tmargin-bottom: 5%;\r\n\t}\r\n\t.hero-title {\r\n\t\tfont-size: 150px;\r\n\t}\r\n\t.hero-subtitle {\r\n\t\tfont-size: 30px;\r\n\t}\r\n\t.hamburger-menu-item {\r\n\t\tfont-size: 30px;\r\n\t}\r\n}\r\n\r\n@media (min-width: 1025px) {\r\n\t.section {\r\n\t\twidth: 50%;\r\n\t}\r\n\t.page-sections {\r\n\t\tmargin-top: 6%;\r\n\t\tmargin-bottom: 2%;\r\n\t}\r\n\t.code-snippet {\r\n\t\tjustify-content: center;\r\n\t\toverflow-x: hidden;\r\n\t}\r\n\t.section-content {\r\n\t\tfont-size: 18px;\r\n\t}\r\n\t.box-display {\r\n\t\twidth: 10%;\r\n\t}\r\n\t.navbar-container {\r\n\t\tjustify-content: end;\r\n\t}\r\n\t.navbar-title {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.hamburger-icon-container {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.navbar-menu {\r\n\t\tdisplay: flex;\r\n\t\tfont-size: 20px;\r\n\t\tgap: 70px;\r\n\t\tmargin-right: 2%;\r\n\t\tfont-family: \"Raleway\", sans-serif;\r\n\t}\r\n\t.footer-container {\r\n\t\tfont-size: 18px;\r\n\t}\r\n\t.side-navbar {\r\n\t\tdisplay: unset;\r\n\t\tposition: fixed;\r\n\t\twidth: fit-content;\r\n\t\tbackground: white;\r\n\t\tleft: 2%;\r\n\t\ttop: 100px;\r\n\t\tpadding: 20px;\r\n\t\tfont-family: \"Raleway\", sans-serif;\r\n\t\tfont-size: 18px;\r\n\t\tfont-weight: bold;\r\n\t\tborder-radius: 7px;\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/sonpop-js/modules/constants-module.js":
/*!************************************************************!*\
  !*** ./node_modules/sonpop-js/modules/constants-module.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "constants": () => (/* binding */ constants),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const constants = {
	accessKeyInvalidError: "accessKey must be a valid existing key",
	accessKeyMissingError:
		"accessKey must be passed inside props argument for a popComponent utilizing state.",
	createPOPElementTagType: "string",
	createRootElementDefaultId: "root",
	createRootElementTag: "div",
	forLoopIdentifier: "Array.forEach",
	popComponentUniqueKeyError: `POP components rendered in an array must have a unique "key" prop passed in.`,
	popElementAttributeSeparator: "=",
	popElementClassIdentifier: "class=",
	popElementIdIdentifier: "id=",
	popObjectTagSeparator: "|",
	mapLoopIdentifier: "Array.map",
	refreshDOMDefaultAction: "click",
	renderFunctionIdentifer: "Object.render",
	rootFunctionIdentifier: "Object.root",
	stateKeyFilterString: "Error",
	typeofPropsFunctionIdentifier: "function",
	typeofPropsObjectIdentifier: "object",
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constants);


/***/ }),

/***/ "./node_modules/sonpop-js/modules/dom-module.js":
/*!******************************************************!*\
  !*** ./node_modules/sonpop-js/modules/dom-module.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "dom": () => (/* binding */ dom)
/* harmony export */ });
/* harmony import */ var _constants_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants-module */ "./node_modules/sonpop-js/modules/constants-module.js");


const dom = {
	init: () => {
		dom.state = {};
		dom.renderStore = {};
		dom.stateCheckSet = new Set();
		window.addEventListener("hashchange", () => {
			const path = window.location.href.split("#!")[1];
			if (dom.routes && dom.currPath !== path) {
				window.location.reload();
			}
		});
	},
	generateElement: (popObject) => {
		if (typeof popObject === _constants_module__WEBPACK_IMPORTED_MODULE_0__["default"].createPOPElementTagType) {
			return document.createTextNode(popObject);
		}
		const parentArgs = popObject.tag.split(_constants_module__WEBPACK_IMPORTED_MODULE_0__["default"].popObjectTagSeparator);
		const parent = document.createElement(parentArgs[0]);
		if (parentArgs[1]) {
			if (parentArgs[1].includes(_constants_module__WEBPACK_IMPORTED_MODULE_0__["default"].popElementClassIdentifier)) {
				parent.className = parentArgs[1].split(
					_constants_module__WEBPACK_IMPORTED_MODULE_0__["default"].popElementAttributeSeparator
				)[1];
			} else if (parentArgs[1].includes(_constants_module__WEBPACK_IMPORTED_MODULE_0__["default"].popElementIdIdentifier)) {
				parent.id = parentArgs[1].split(
					_constants_module__WEBPACK_IMPORTED_MODULE_0__["default"].popElementAttributeSeparator
				)[1];
			}
		}
		if (parentArgs[2]) {
			if (parentArgs[2].includes(_constants_module__WEBPACK_IMPORTED_MODULE_0__["default"].popElementClassIdentifier)) {
				parent.className = parentArgs[2].split(
					_constants_module__WEBPACK_IMPORTED_MODULE_0__["default"].popElementAttributeSeparator
				)[1];
			} else if (parentArgs[2].includes(_constants_module__WEBPACK_IMPORTED_MODULE_0__["default"].popElementIdIdentifier)) {
				parent.id = parentArgs[2].split(
					_constants_module__WEBPACK_IMPORTED_MODULE_0__["default"].popElementAttributeSeparator
				)[1];
			}
		}
		Object.keys(popObject.props).forEach((key) => {
			parent[key] = popObject.props[key];
		});
		if (Array.isArray(popObject.children)) {
			popObject.children
				.map(dom.generateElement)
				.forEach((node) => parent.appendChild(node));
		}
		return parent;
	},
	sameProps: (propsOne, propsTwo) => {
		if (propsOne === propsTwo) return true;
		if (propsOne.toString() === propsTwo.toString()) return true;
		if (
			typeof propsOne !== _constants_module__WEBPACK_IMPORTED_MODULE_0__["default"].typeofPropsObjectIdentifier ||
			typeof propsTwo !== _constants_module__WEBPACK_IMPORTED_MODULE_0__["default"].typeofPropsObjectIdentifier ||
			propsOne == null ||
			propsTwo == null
		) {
			return false;
		}
		const keysOne = Object.keys(propsOne);
		const keysTwo = Object.keys(propsTwo);
		if (keysOne.length !== keysTwo.length) {
			return false;
		}
		let result = true;
		keysOne.forEach((key) => {
			if (!keysTwo.includes(key)) {
				result = false;
			}
			if (
				typeof propsOne[key] === _constants_module__WEBPACK_IMPORTED_MODULE_0__["default"].typeofPropsFunctionIdentifier ||
				typeof propsTwo[key] === _constants_module__WEBPACK_IMPORTED_MODULE_0__["default"].typeofPropsFunctionIdentifier
			) {
				if (propsOne[key].toString() !== propsTwo[key].toString()) {
					result = false;
				}
			}
			if (!dom.sameProps(propsOne[key], propsTwo[key])) {
				result = false;
			}
		});
		return result;
	},
	compareElements: (popNodeOne, popeNodeTwo) => {
		return (
			typeof popNodeOne !== typeof popeNodeTwo ||
			(typeof popNodeOne === _constants_module__WEBPACK_IMPORTED_MODULE_0__["default"].createPOPElementTagType &&
				popNodeOne !== popeNodeTwo) ||
			popNodeOne.tag !== popeNodeTwo.tag ||
			(popNodeOne.props &&
				popeNodeTwo.props &&
				!dom.sameProps(popNodeOne.props, popeNodeTwo.props))
		);
	},
	updateElement: (parentNode, newNode, oldNode, index = 0) => {
		if (!oldNode) {
			parentNode.appendChild(dom.generateElement(newNode));
		} else if (!newNode) {
			parentNode.removeChild(parentNode.childNodes[index]);
		} else if (dom.compareElements(newNode, oldNode)) {
			parentNode.replaceChild(
				dom.generateElement(newNode),
				parentNode.childNodes[index]
			);
		} else if (newNode.tag) {
			const newLength = newNode.children.length;
			const oldLength = oldNode.children.length;
			for (let i = 0; i < newLength || i < oldLength; i++) {
				dom.updateElement(
					parentNode.childNodes[index],
					newNode.children[i],
					oldNode.children[i],
					i
				);
			}
		}
	},
	initializeState: (popComponent, accessKey) => {
		if (popComponent.render && popComponent.set && accessKey) {
			if (!dom.state[accessKey]) {
				dom.state[accessKey] = {};
				popComponent.set({
					state: dom.state[accessKey],
				});
			}
			popComponent
				.render({ props: {}, state: {} })
				.children.forEach((child) => {
					if (child) {
						dom.initializeState(child, child.accessKey);
					}
				});
		}
	},
	filterValidPopObjects: (domTree) => {
		if (domTree.children && Array.isArray(domTree.children)) {
			const treeChildren = domTree.children.filter(
				(child) => child && Object.keys(child).length
			);
			treeChildren.forEach((obj) => {
				if (obj && obj.children) {
					obj.children = dom.filterValidPopObjects(obj);
				}
			});
			return treeChildren;
		}
		return [];
	},
	getComponentStateKey: (component, loopKey) => {
		const hasSet =
			typeof component === _constants_module__WEBPACK_IMPORTED_MODULE_0__["default"].typeofPropsFunctionIdentifier
				? component() && component().set
				: component && component.set;
		const location = new Error();
		const formattedLoopKey = loopKey ? String(loopKey) : null;
		const stack = location.stack.split("\n");
		const isLooped =
			stack.join("").includes(_constants_module__WEBPACK_IMPORTED_MODULE_0__["default"].forLoopIdentifier) ||
			stack.join("").includes(_constants_module__WEBPACK_IMPORTED_MODULE_0__["default"].mapLoopIdentifier);
		if (hasSet && isLooped && !formattedLoopKey) {
			throw new Error(_constants_module__WEBPACK_IMPORTED_MODULE_0__["default"].popComponentUniqueKeyError);
		}
		let cutOffIndex;
		for (let i = stack.length - 1; i >= 0; i--) {
			if (stack[i].includes(_constants_module__WEBPACK_IMPORTED_MODULE_0__["default"].renderFunctionIdentifer)) {
				cutOffIndex = i;
				break;
			}
		}
		const key = stack[2].includes(_constants_module__WEBPACK_IMPORTED_MODULE_0__["default"].rootFunctionIdentifier)
			? stack.join("").replace(_constants_module__WEBPACK_IMPORTED_MODULE_0__["default"].stateKeyFilterString, "")
			: stack
					.slice(0, cutOffIndex + 1)
					.join("")
					.replace(_constants_module__WEBPACK_IMPORTED_MODULE_0__["default"].stateKeyFilterString, "");
		return `${key}${formattedLoopKey ? formattedLoopKey : ""}`;
	},
	cleanState: () => {
		Object.keys(dom.state).forEach((key) => {
			if (!dom.stateCheckSet.has(key)) {
				delete dom.state[key];
			}
		});
	},
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);


/***/ }),

/***/ "./node_modules/sonpop-js/pop.js":
/*!***************************************!*\
  !*** ./node_modules/sonpop-js/pop.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "POP": () => (/* binding */ POP),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_constants_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/constants-module */ "./node_modules/sonpop-js/modules/constants-module.js");
/* harmony import */ var _modules_dom_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom-module */ "./node_modules/sonpop-js/modules/dom-module.js");



const POP = {
	create: (elementTag, elementChildren = [], elementProps = {}) => {
		const children =
			Array.isArray(elementProps) && elementProps.length
				? elementProps
				: elementChildren;
		if (children && Array.isArray(children) && children.length) {
			children.forEach((value, index) => {
				if (!value) {
					children[index] = " ";
				}
			});
		}
		if (typeof elementTag === _modules_constants_module__WEBPACK_IMPORTED_MODULE_0__["default"].createPOPElementTagType) {
			return {
				tag: elementTag,
				props:
					!Array.isArray(elementChildren) && Object.keys(elementChildren).length
						? elementChildren
						: elementProps,
				children,
			};
		}
	},
	getState: (accessKey) => {
		if (!accessKey) {
			throw new Error(_modules_constants_module__WEBPACK_IMPORTED_MODULE_0__["default"].accessKeyInvalidError);
		}
		if (_modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].state[accessKey]) {
			const state = { ..._modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].state[accessKey] };
			return state;
		}
		return {};
	},
	use: (popComponent, popComponentChildren = [], popComponentProps = {}) => {
		const componentChildren =
			Array.isArray(popComponentProps) && popComponentProps.length
				? popComponentProps
				: popComponentChildren;
		const componentProps =
			Object.keys(popComponentChildren).length &&
			!Array.isArray(popComponentChildren)
				? popComponentChildren
				: popComponentProps;
		let parent = {};
		let componentState = {};
		const componentStateKey = _modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].getComponentStateKey(
			popComponent,
			componentProps.key
		);
		_modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].stateCheckSet.add(componentStateKey);
		if (componentProps.accessKey) {
			_modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].stateCheckSet.add(componentProps.accessKey);
		}
		const expandedComponent =
			typeof popComponent === _modules_constants_module__WEBPACK_IMPORTED_MODULE_0__["default"].typeofPropsFunctionIdentifier &&
			!_modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].state[componentStateKey]
				? popComponent({ props: { ...componentProps } })
				: typeof popComponent === _modules_constants_module__WEBPACK_IMPORTED_MODULE_0__["default"].typeofPropsFunctionIdentifier
				? _modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].renderStore[componentStateKey].expandedFn
				: popComponent;
		if (!_modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].state[componentStateKey]) {
			_modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].state[componentStateKey] = {};
			_modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].renderStore[componentStateKey] = {};
			_modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].renderStore[componentStateKey].expandedFn =
				typeof popComponent === _modules_constants_module__WEBPACK_IMPORTED_MODULE_0__["default"].typeofPropsFunctionIdentifier
					? popComponent({ props: { ...componentProps } })
					: popComponent;
			if (expandedComponent.set) {
				parent.set = expandedComponent.set;
				expandedComponent.set({
					props: { ...componentProps },
					state: _modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].state[componentStateKey],
				});
			}
			componentState = _modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].state[componentStateKey];
			_modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].state[componentProps.accessKey] = componentState;
		}
		if (expandedComponent.render) {
			parent.componentStateKey = componentStateKey;
			componentState = _modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].state[componentStateKey];
			_modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].state[componentProps.accessKey] = componentState;
			delete componentProps.accessKey;
			const rendered = expandedComponent.render({
				props: { ...componentProps },
				state: componentState,
			});
			const children = rendered.children;
			if (!rendered.tag.render) {
				parent = { ...parent, ...rendered };
				if (componentChildren && componentChildren.length) {
					componentChildren.forEach((child) => {
						parent.children.push(child);
					});
				}
			} else {
				parent = POP.use(rendered.tag, componentChildren);
				children.forEach((child) => {
					parent.children.push(child);
				});
				if (componentChildren && componentChildren.length) {
					componentChildren.forEach((child) => {
						parent.children.push(child);
					});
				}
			}
			return parent;
		}
	},
	refresh: () => {
		_modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].stateCheckSet.clear();
		const newTree = _modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].renderFn();
		newTree.children = _modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].filterValidPopObjects(newTree);
		_modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].updateElement(_modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].root, newTree, _modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].prevTree);
		_modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].prevTree = newTree;
		_modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].cleanState();
	},
	root: (popComponent, rootProps = {}) => {
		const { rootName, accessKey, popRoutes } = rootProps;
		const root = document.createElement(_modules_constants_module__WEBPACK_IMPORTED_MODULE_0__["default"].createRootElementTag);
		root.id =
			rootName && typeof rootName === _modules_constants_module__WEBPACK_IMPORTED_MODULE_0__["default"].createPOPElementTagType
				? rootName
				: _modules_constants_module__WEBPACK_IMPORTED_MODULE_0__["default"].createRootElementDefaultId;
		document.body.appendChild(root);
		_modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].root = root;
		const hasRoutes =
			popRoutes && !Array.isArray(popRoutes) && Object.keys(popRoutes).length
				? true
				: false;
		_modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].routes = hasRoutes ? popRoutes : null;
		let componentToRender;
		const path = window.location.href.split("#!")[1];
		const defaultPath = hasRoutes ? Object.keys(popRoutes)[0] : null;
		if (!path && hasRoutes) {
			window.location.href += `#!${defaultPath}`;
		}
		if (hasRoutes && path && popRoutes[path]) {
			componentToRender = popRoutes[path];
			_modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].currPath = path;
		} else {
			componentToRender = popComponent;
		}
		_modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].init();
		const componentStateKey = accessKey
			? accessKey
			: _modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].getComponentStateKey();
		const isComponentFunction =
			typeof componentToRender === _modules_constants_module__WEBPACK_IMPORTED_MODULE_0__["default"].typeofPropsFunctionIdentifier;
		const expandedComponent =
			isComponentFunction && !_modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].state[componentStateKey]
				? componentToRender()
				: componentToRender;
		_modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].initializeState(expandedComponent, componentStateKey);
		const componentState = componentStateKey
			? POP.getState(componentStateKey)
			: {};
		_modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].prevTree = expandedComponent.render({
			state: componentState,
		});
		_modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].prevTree.children = _modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].filterValidPopObjects(_modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].prevTree);
		_modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].renderFn = () =>
			expandedComponent.render({
				state: componentState,
			});
		_modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].updateElement(root, _modules_dom_module__WEBPACK_IMPORTED_MODULE_1__["default"].prevTree);
		root.addEventListener(_modules_constants_module__WEBPACK_IMPORTED_MODULE_0__["default"].refreshDOMDefaultAction, () => {
			POP.refresh();
		});
	},
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (POP);


/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/components/Button.js":
/*!**********************************!*\
  !*** ./src/components/Button.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sonpop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sonpop-js */ "./node_modules/sonpop-js/pop.js");


const Button = {
	render: (component) => {
		const { props } = component;
		const className = props.className;
		const buttonLabel = props.label;
		const clickFn = props.onClick;

		return sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create(`button|class=${className}`, { onclick: clickFn }, [
			buttonLabel,
		]);
	},
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ "./src/components/Counter.js":
/*!***********************************!*\
  !*** ./src/components/Counter.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Counter": () => (/* binding */ Counter),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sonpop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sonpop-js */ "./node_modules/sonpop-js/pop.js");


const Counter = {
	set: (component) => {
		const { state } = component;
		state.counter = 0;
	},
	render: (component) => {
		const { state } = component;

		return sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=counter-container", [
			sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("button|class=counter-button", ["-"], {
				onclick: () => (state.counter -= 1),
			}),
			`${state.counter}`,
			sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("button|class=counter-button", ["+"], {
				onclick: () => (state.counter += 1),
			}),
		]);
	},
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);


/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": () => (/* binding */ Footer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sonpop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sonpop-js */ "./node_modules/sonpop-js/pop.js");


const Footer = {
	render: () => {
		return sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=footer-container", [
			sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=footer-item", [
				"Made by ",
				sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create(
					"a|class=external-link",
					{ href: "https://abiramnair.com/", target: "_blank" },
					["me"]
				),
			]),
		]);
	},
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ "./src/components/HamburgerIcon.js":
/*!*****************************************!*\
  !*** ./src/components/HamburgerIcon.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HamburgerIcon": () => (/* binding */ HamburgerIcon)
/* harmony export */ });
/* harmony import */ var sonpop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sonpop-js */ "./node_modules/sonpop-js/pop.js");


const HamburgerIcon = {
	render: (component) => {
		const { props } = component;
		const onClick = props.onClick;
		const isOpen = props.isOpen;

		return sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create(
			"div|class=hamburger-icon-container",
			{ onclick: onClick },
			[
				!isOpen && sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=hamburger-line"),
				sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=hamburger-line"),
				!isOpen && sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=hamburger-line"),
			]
		);
	},
};


/***/ }),

/***/ "./src/components/Hero.js":
/*!********************************!*\
  !*** ./src/components/Hero.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hero": () => (/* binding */ Hero),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sonpop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sonpop-js */ "./node_modules/sonpop-js/pop.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./src/components/Button.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./src/components/Navbar.js");




const Hero = {
	render: () => {
		return sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=hero-container", [
			sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].use(_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"]),
			sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=hero-title", [
				sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("span|class=title-emphasis", ["pop! "]),
				"JS",
			]),
			sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=hero-subtitle", ["frontend made easy"]),
			sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("a|class=link-button", { href: "#!/guide-page" }, [
				sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].use(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
					className: "hero-demo-button",
					label: "Start Now",
				}),
			]),
		]);
	},
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);


/***/ }),

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Navbar": () => (/* binding */ Navbar),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sonpop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sonpop-js */ "./node_modules/sonpop-js/pop.js");
/* harmony import */ var _HamburgerIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HamburgerIcon */ "./src/components/HamburgerIcon.js");



const Navbar = {
	set: (component) => {
		const { state } = component;
		state.hamburgerMenuOpen = false;
	},
	render: (component) => {
		const { props, state } = component;
		const navBarTitle = props.title;
		const menuItems = [
			{ text: "Home", route: "#!/home-page" },
			{ text: "Guide", route: "#!/guide-page" },
		];
		const currPage = window.location.hash;
		return sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=navbar-container", [
			sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].use(_HamburgerIcon__WEBPACK_IMPORTED_MODULE_1__.HamburgerIcon, {
				onClick: () => (state.hamburgerMenuOpen = !state.hamburgerMenuOpen),
				isOpen: state.hamburgerMenuOpen,
			}),
			sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=navbar-title", [navBarTitle]),
			state.hamburgerMenuOpen &&
				sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create(
					"div|class=hamburger-navbar-menu",
					menuItems.map((item) =>
						sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create(
							"a|class=hamburger-menu-item",
							{
								href: item.route,
							},
							[item.text]
						)
					)
				),
			sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create(
				"div|class=navbar-menu",
				menuItems.map((item) =>
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create(
						`span|class=navbar-menu-item ${
							currPage === item.route ? " current-page" : ""
						}`,
						[
							sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("a|class=navbar-link", { href: item.route }, [
								item.text,
							]),
						]
					)
				)
			),
		]);
	},
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);


/***/ }),

/***/ "./src/components/RedBox.js":
/*!**********************************!*\
  !*** ./src/components/RedBox.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedBox": () => (/* binding */ RedBox)
/* harmony export */ });
/* harmony import */ var sonpop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sonpop-js */ "./node_modules/sonpop-js/pop.js");


const RedBox = {
	set: (component) => {
		const { state } = component;
		state.showBox = true;
	},
	render: (component) => {
		const { state } = component;

		return sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=box-container", [
			sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create(
				"button|class=box-button",
				{
					onclick: () => (state.showBox = !state.showBox),
				},
				[state.showBox ? "Hide" : "Show"]
			),
			state.showBox && sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=box-display"),
		]);
	},
};


/***/ }),

/***/ "./src/components/SideNavbar.js":
/*!**************************************!*\
  !*** ./src/components/SideNavbar.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideNavbar": () => (/* binding */ SideNavbar),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sonpop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sonpop-js */ "./node_modules/sonpop-js/pop.js");


const SideNavbar = {
	scrollView: (elementId) => {
		document.getElementById(elementId).scrollIntoView({ block: "center" });
	},
	render: () => {
		return sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=side-navbar", [
			"Guide",
			sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("ul|class=navbar-page-section-over", [
				sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create(
					"li|class=navbar-page-section-bullet",
					{ onclick: () => SideNavbar.scrollView("intro") },
					["Intro"]
				),
				sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("ul|class=navbar-page-section-sub", [
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create(
						"li|class=navbar-page-section-bullet",
						{ onclick: () => SideNavbar.scrollView("cdn") },
						["cdn"]
					),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create(
						"li|class=navbar-page-section-bullet",
						{ onclick: () => SideNavbar.scrollView("npm") },
						["npm"]
					),
				]),
			]),
			sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("ul|class=navbar-page-section-over", [
				sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create(
					"li|class=navbar-page-section-bullet",
					{ onclick: () => SideNavbar.scrollView("components") },
					["Components"]
				),
				sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("ul|class=navbar-page-section-sub", [
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create(
						"li|class=navbar-page-section-bullet",
						{ onclick: () => SideNavbar.scrollView("rendering-html") },
						["Rendering HTML"]
					),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create(
						"li|class=navbar-page-section-bullet",
						{ onclick: () => SideNavbar.scrollView("reusing-components") },
						["Reusing Components"]
					),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create(
						"li|class=navbar-page-section-bullet",
						{ onclick: () => SideNavbar.scrollView("argument-ordering") },
						["Argument Ordering"]
					),
				]),
			]),
			sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("ul|class=navbar-page-section-over", [
				sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create(
					"li|class=navbar-page-section-bullet",
					{ onclick: () => SideNavbar.scrollView("state") },
					["State"]
				),
			]),
			sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("ul|class=navbar-page-section-over", [
				sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create(
					"li|class=navbar-page-section-bullet",
					{ onclick: () => SideNavbar.scrollView("root-section") },
					["Root"]
				),
			]),
			sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("ul|class=navbar-page-section-over", [
				sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create(
					"li|class=navbar-page-section-bullet",
					{ onclick: () => SideNavbar.scrollView("routing") },
					["Routing"]
				),
			]),
			sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("ul|class=navbar-page-section-over", [
				sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create(
					"li|class=navbar-page-section-bullet",
					{ onclick: () => SideNavbar.scrollView("tips") },
					["Tips"]
				),
			]),
		]);
	},
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideNavbar);


/***/ }),

/***/ "./src/components/Stopwatch.js":
/*!*************************************!*\
  !*** ./src/components/Stopwatch.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Stopwatch": () => (/* binding */ Stopwatch),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sonpop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sonpop-js */ "./node_modules/sonpop-js/pop.js");


function stopwatchModel() {
	return {
		interval: null,
		seconds: 0,
		isPaused: true,
	};
}

const actions = {
	increment(model) {
		model.seconds++;
		sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].refresh();
	},
	start(model) {
		model.interval = setInterval(actions.increment, 1000, model);
	},
	stop(model) {
		model.interval = clearInterval(model.interval);
	},
	reset(model) {
		model.seconds = 0;
	},
	toggle(model) {
		model.isPaused ? actions.start(model) : actions.stop(model);
		model.isPaused = !model.isPaused;
	},
};

const Stopwatch = {
	set(component) {
		const { state } = component;
		state.model = stopwatchModel();
	},
	render(component) {
		const { state } = component;

		return sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=stopwatch-container", [
			sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("span|class=stopwatch-span", [`${state.model.seconds}`]),
			sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create(
				"button|class=stopwatch-button",
				{
					onclick: () => {
						actions.toggle(state.model);
					},
				},
				[state.model.isPaused ? "Start" : "Pause"]
			),
			sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create(
				"button|class=stopwatch-button",
				{
					onclick: () => {
						actions.reset(state.model);
					},
				},
				["Reset"]
			),
		]);
	},
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stopwatch);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sonpop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sonpop-js */ "./node_modules/sonpop-js/pop.js");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Home */ "./src/pages/Home.js");
/* harmony import */ var _pages_Guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Guide */ "./src/pages/Guide.js");





const routes = {
	"/home-page": _pages_Home__WEBPACK_IMPORTED_MODULE_2__["default"],
	"/guide-page": _pages_Guide__WEBPACK_IMPORTED_MODULE_3__["default"],
};

sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].root(_pages_Home__WEBPACK_IMPORTED_MODULE_2__["default"], { rootName: "pop-app-root", popRoutes: routes }); // entry point for pop! app with custom root name


/***/ }),

/***/ "./src/pages/Guide.js":
/*!****************************!*\
  !*** ./src/pages/Guide.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Guide": () => (/* binding */ Guide),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sonpop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sonpop-js */ "./node_modules/sonpop-js/pop.js");
/* harmony import */ var _components_Counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Counter */ "./src/components/Counter.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _components_RedBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/RedBox */ "./src/components/RedBox.js");
/* harmony import */ var _components_SideNavbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SideNavbar */ "./src/components/SideNavbar.js");
/* harmony import */ var _components_Stopwatch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Stopwatch */ "./src/components/Stopwatch.js");







const Guide = {
	render: () => {
		return sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=guide-page-container", [
			sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].use(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], { title: "Guide" }),
			sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].use(_components_SideNavbar__WEBPACK_IMPORTED_MODULE_4__["default"], { page: "guide-page" }),
			sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=page-sections", [
				sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section", [
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|id=intro|class=section-title", ["Intro"]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"pop! JS is a compact and easy to learn framework that can be used to make a frontend interface very quickly. It comes equipped with the capability of making components containing state and lifecycle methods, application page routing and reacting to changes in state.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"This website and all its components are powered by pop! JS.  After researching about virtual DOM during an internship role as a frontend developer, I thought it would be fun to make my own framework inspired by one I used during my work term - Mithril JS. This project is only a little over 350 sloc and 6.3kB in size (2.2kB gzipped). If you find this project interesting, consider giving it a star on ",
						sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create(
							"a|class=external-link",
							{
								href: "https://github.com/abiramrnair/pop-js",
								target: "_blank",
							},
							["GitHub"]
						),
						".",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|id=cdn|class=section-subtitle", ["cdn"]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"The easiest way to see what pop! JS can do is to use some HTML boilerplate and copy the link below into a HTML script tag. You can then access pop! JS within another set of script tags.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("pre|class=code-snippet", [
						sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("code|class=code-block", [
							`https://unpkg.com/sonpop-js/pop.min.js`,
						]),
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"A CodePen using pop! JS like this is available ",
						sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create(
							"a|class=external-link",
							{
								href: "https://codepen.io/abiramrnair/pen/RwMWKEO",
								target: "_blank",
							},
							["here"]
						),
						".",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|id=npm|class=section-subtitle", ["npm"]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"For complex projects, you can install pop! JS via npm and configure a project with a bundler of your choice. Alternatively, you can use the ",
						sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create(
							"a|class=external-link",
							{
								href: "https://www.npmjs.com/package/create-pop-app",
								target: "_blank",
							},
							["create-pop-app"]
						),
						" script which uses Webpack to create a sample app. To use pop! JS, just import POP.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("pre|class=code-snippet", [
						sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("code|class=code-block", [
							`// In the terminal\nnpm install sonpop-js"\n\n// In new files\nimport POP from "sonpop-js";`,
						]),
					]),
				]),
				sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section", [
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|id=components|class=section-title", ["Components"]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"Like most frameworks, pop! JS uses a component based approach. Components are just reusable chunks of HTML that have their own state and properties.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|id=rendering-html|class=section-subtitle", [
						"Render",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"pop! components are objects that contain a render function. This render function tells pop! JS what needs to be displayed on the page.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"A render function can return just HTML or another pop! component.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("pre|class=code-snippet", [
						sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("code|class=code-block", [
							`export const popComponent = {\n   render: () => {\n        return POP.create()/POP.use();\n   }\n}`,
						]),
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"A pop! component does not have to be an object. It can also be a function that returns an object.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("pre|class=code-snippet", [
						sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("code|class=code-block", [
							`function popComponent () {\n   return { \n      render: () => {\n        return POP.create()/POP.use();\n      }\n   }\n}`,
						]),
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|id=rendering-html|class=section-subtitle", [
						"Create HTML",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"With the create() function, you can generate HTML. The first argument accepts any valid HTML tag.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("pre|class=code-snippet", [
						sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("code|class=code-block", [
							`POP.create("div", ["Hello World"]);\n\n// Rendered\n<div>\n    Hello World\n</div>`,
						]),
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"Class and id for the element can also be passed in by using strings class= and id= separated by |. The order of class and id does not matter, but the tag must always come first.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("pre|class=code-snippet", [
						sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("code|class=code-block", [
							`POP.create("div|class=hello|id=world", ["Hello World"]);\n\n// Rendered\n<div id="world" class="hello">\n    Hello World\n</div>`,
						]),
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|id=reusing-components|class=section-subtitle", [
						"Use Components",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"With the use() function, you can utilize imported pop! components and component state.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("pre|class=code-snippet", [
						sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("code|class=code-block", [
							`import component from "/path";\n\nPOP.use(component, props, children);`,
						]),
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|id=argument-ordering|class=section-subtitle", [
						"Argument Ordering",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"With the create() and use() functions, the order does not matter when providing props and children. It only matters that the props are in an object and children are in an array.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"Children can either be strings which get transformed to HTML text nodes or pop components wrapped by the create() or use() functions.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"The order that the children are passed into the array from left to right is how they are rendered top to bottom.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("pre|class=code-snippet", [
						sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("code|class=code-block", [
							`POP.create("div", [POP.create("span"), POP.create("button", "Click Me")]);\n\n// Rendered\n<div>\n    <span>\n        <button>\n            Click Me\n        </button>\n    </span>\n</div>`,
						]),
					]),
				]),
				sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section", [
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|id=state|class=section-title", ["State"]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"Every instance of a pop! component, even identical ones, has its own state after being rendered with the use() function.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|id=rendering-html|class=section-subtitle", ["Set"]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"To initialize state variables, a pop! component must have a set() function. The set() function is a lifecycle method and will always run before render() making it great for setting up anything before a component is drawn.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|id=rendering-html|class=section-subtitle", [
						"Access State",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"State can be accessed by destructuring the object inside the render function argument. This state object inside the render function is modifiable because it is owned by the component.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"If a unique prop of accessKey is passed in when the component is required to be rendered, a ready-only version of component state can be accessed by other components with the getState() function.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("pre|class=code-snippet", [
						sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("code|class=code-block", [
							"\nconst parentComponent = {\n    render: () => {\n        return POP.use(popComponent, {" +
								` "accessKey: "counter-state" });\n    }\n}\n\n// Access that state from an unrelated component\nconst anotherComponent = {\n    render: () => {\n        const otherState = POP.getState("other-state");\n        \n        return POP.create("div|class=component-copy", [` +
								"`${state.someVariable}`]);\n    }\n}",
						]),
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"There are two examples of components below that use state to store and update information. pop! JS checks if a render update is required after every click event by default. However, pop! JS supports manual re-render on state change where a click may not be present with the refresh() function.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|id=rendering-html|class=section-subtitle", [
						"Counter",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].use(_components_Counter__WEBPACK_IMPORTED_MODULE_1__["default"]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"The CodePen for this counter component is available ",
						sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create(
							"a|class=external-link",
							{
								href: "https://codepen.io/abiramrnair/pen/LYdNgbo",
								target: "_blank",
							},
							["here"]
						),
						".",
					]),
					// POP.create("div|id=rendering-html|class=section-subtitle", [
					// 	"Stopwatch",
					// ]),
					// POP.use(Stopwatch),
					// POP.create("div|class=section-content", [
					// 	"The CodePen for this counter component is available ",
					// 	POP.create(
					// 		"a|class=external-link",
					// 		{
					// 			href: "https://codepen.io/abiramrnair/pen/OJvNBpb",
					// 			target: "_blank",
					// 		},
					// 		["here"]
					// 	),
					// 	".",
					// ]),
				]),
				sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section", [
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|id=root-section|class=section-title", ["Root"]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"All pop! JS applications must have an entry point. The root() function will take a popComponent and establish it as the container of the whole application.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"This root component will have all the properties of a regular pop component. The call to establish the root is most often done in the index.js file.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("pre|class=code-snippet", [
						sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("code|class=code-block", [
							`import appContainer from "/path";\n\nPOP.root(appContainer);`,
						]),
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"The second argument of the root function accepts props for the root component such as rootName, accessKey, popRoutes etc.",
					]),
				]),
				sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section", [
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|id=routing|class=section-title", ["Routing"]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"pop! JS is capable of displaying multiple pages with easy to understand application routing.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"To enable routing, simply declare an object with routes as keys and pop component imports as values. The first key value pair of this object will always be the home page of the application.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"This object can then be passed into the root function in the props argument with the key of popRoutes.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("pre|class=code-snippet", [
						sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("code|class=code-block", [
							`import HomePage from "/path";\nimport AboutPage from "/path";\n\nconst routes = {\n    "/home": HomePage,\n    "/about": AboutPage\n}\n\nPOP.root(Home, { popRoutes: routes });`,
						]),
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						`To then access different pages, just create anchor tags anywhere in the application with a string in the format of hashbang ("#!") followed by route into the "href" property.`,
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("pre|class=code-snippet", [
						sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("code|class=code-block", [
							`POP.create("a", { href: "#!/home" });`,
						]),
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						`Clicking these anchor tags will re-render the whole document, display the appropriate page and all previous state information will reset.`,
					]),
				]),
				sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section", [
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|id=tips|class=section-title", ["Tips"]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						`It is recommended to use the ES6 standard when working with pop! JS. When possible, avoid traditional "for" loops and use forEach to iterate and Array.map() to generate arrays.`,
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						`When invoking POP.use() inside a loop, an error will be thrown if a key prop with a unique value is not passed in for each element.`,
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("pre|class=code-snippet", [
						sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("code|class=code-block", [
							`render: () => {\n    const someArray = ["Hello", "World", "!"];\n\n    const children = someArray.map((val, index) => {\n        return POP.use(popComponent, { label: val, key: index });\n    });\n\n    return POP.create("div", children);\n}`,
						]),
					]),

					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"Conditional rendering can be done by using ternary or boolean statements and is a handy method to quickly render or erase components from the document when state changes.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("pre|class=code-snippet", [
						sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("code|class=code-block", [
							`const boxComponent = {\n    set: (component) => {\n        const { state } = component;\n        state.showBox = true;\n    }\n    render: (component) => {\n        const { state } = component;\n\n        return POP.create("div|class=box-container", [\n            POP.create(\n                "button|class=box-button",\n                {\n                    onclick: () => (state.showBox = !state.showBox)\n                },\n                [state.showBox ? "Hide" : "Show"]\n            ),\n            state.showBox && POP.create("div|class=box-display")\n        ]);\n    }\n}`,
						]),
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].use(_components_RedBox__WEBPACK_IMPORTED_MODULE_3__.RedBox),
				]),
			]),
		]);
	},
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Guide);


/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* binding */ Home),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sonpop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sonpop-js */ "./node_modules/sonpop-js/pop.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Hero */ "./src/components/Hero.js");




const Home = {
	render: () => {
		return sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=home-page-container", [
			sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].use(_components_Hero__WEBPACK_IMPORTED_MODULE_2__["default"]),
			sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].use(_components_Footer__WEBPACK_IMPORTED_MODULE_1__["default"]),
		]);
	},
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLG9IQUFvSDtBQUNwSCxnSEFBZ0gsZ0NBQWdDO0FBQ2hKO0FBQ0EsZ0RBQWdELDhCQUE4QixLQUFLLGNBQWMsZ0NBQWdDLDBCQUEwQixzRUFBc0UsOERBQThELDBDQUEwQyxnQkFBZ0IsaUJBQWlCLEtBQUsseUJBQXlCLG1CQUFtQixvQkFBb0Isb0JBQW9CLDZCQUE2QiwwQkFBMEIsOEJBQThCLGdCQUFnQixtQkFBbUIsMkNBQTJDLEtBQUsscUJBQXFCLHNCQUFzQixLQUFLLHdCQUF3QixzQkFBc0Isd0JBQXdCLEtBQUssc0JBQXNCLG9CQUFvQixLQUFLLDJCQUEyQiwwQkFBMEIsS0FBSyx3Q0FBd0MsdUNBQXVDLEtBQUssMkJBQTJCLHlCQUF5QixrQkFBa0Isa0JBQWtCLG9CQUFvQiw4QkFBOEIsc0JBQXNCLEtBQUssc0JBQXNCLG9CQUFvQixLQUFLLHFDQUFxQyxzQkFBc0IsMEJBQTBCLEtBQUssMkJBQTJCLG9CQUFvQixtQkFBbUIsd0JBQXdCLG1CQUFtQixzQkFBc0IseUJBQXlCLHlCQUF5Qix1QkFBdUIsMkNBQTJDLDBCQUEwQix1QkFBdUIsd0JBQXdCLEtBQUssaUNBQWlDLHNCQUFzQiwwQkFBMEIsdUJBQXVCLHFCQUFxQixLQUFLLHdCQUF3QixzQkFBc0IseUJBQXlCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixnQkFBZ0IsS0FBSyxrQkFBa0Isd0JBQXdCLGlCQUFpQixvQkFBb0Isb0JBQW9CLDZCQUE2QixnQkFBZ0IseUJBQXlCLG1EQUFtRCxLQUFLLHdCQUF3QixzQkFBc0Isd0JBQXdCLEtBQUssMkJBQTJCLHNCQUFzQix5QkFBeUIsd0JBQXdCLDBCQUEwQixvQkFBb0IsS0FBSywwQkFBMEIsc0JBQXNCLEtBQUssdUJBQXVCLGlDQUFpQyx3QkFBd0Isb0JBQW9CLDBCQUEwQiwrQ0FBK0MsbUJBQW1CLHVCQUF1Qix5QkFBeUIsS0FBSywyQkFBMkIsc0JBQXNCLGFBQWEsd0JBQXdCLG1CQUFtQixvQkFBb0Isa0JBQWtCLHNCQUFzQiw4QkFBOEIsMEJBQTBCLHVCQUF1QixLQUFLLHFCQUFxQix5QkFBeUIsaUJBQWlCLG9CQUFvQixtQkFBbUIsMEJBQTBCLG1CQUFtQixzQkFBc0IsS0FBSyxzQkFBc0Isb0JBQW9CLDBCQUEwQiw0QkFBNEIsS0FBSyw4QkFBOEIsbUJBQW1CLDRCQUE0QixLQUFLLG1DQUFtQyx5QkFBeUIsaUJBQWlCLG9CQUFvQiw2QkFBNkIsOEJBQThCLGdCQUFnQixtQkFBbUIsa0JBQWtCLEtBQUsseUJBQXlCLGtDQUFrQyxLQUFLLGdDQUFnQyxzQkFBc0Isd0JBQXdCLHNCQUFzQixnQkFBZ0Isd0JBQXdCLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLG1CQUFtQixrQkFBa0IsMEJBQTBCLEtBQUssOEJBQThCLDRCQUE0QixzQkFBc0IscUJBQXFCLEtBQUssc0JBQXNCLG1CQUFtQiw0QkFBNEIsS0FBSyw0QkFBNEIsZ0NBQWdDLHNCQUFzQixLQUFLLDhCQUE4Qiw0QkFBNEIsbUJBQW1CLEtBQUssc0NBQXNDLHFCQUFxQixLQUFLLHdCQUF3QixxQkFBcUIsNEJBQTRCLEtBQUssOEJBQThCLGlDQUFpQyxLQUFLLGdDQUFnQyxxQkFBcUIsNEJBQTRCLEtBQUssNEJBQTRCLG9CQUFvQiwwQkFBMEIsOEJBQThCLGdCQUFnQixzQkFBc0IscUJBQXFCLEtBQUsseUJBQXlCLG9CQUFvQiwwQkFBMEIsOEJBQThCLHNCQUFzQixrQkFBa0IsbUJBQW1CLEtBQUssd0JBQXdCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLGdCQUFnQixLQUFLLHFCQUFxQixzQkFBc0Isd0JBQXdCLEtBQUssc0JBQXNCLHNCQUFzQixpQkFBaUIsbUJBQW1CLEtBQUssOEJBQThCLG9CQUFvQiwwQkFBMEIsOEJBQThCLGdCQUFnQixzQkFBc0IscUJBQXFCLEtBQUssMkJBQTJCLG9CQUFvQiwwQkFBMEIsOEJBQThCLHNCQUFzQixvQkFBb0IsS0FBSyw4QkFBOEIsb0JBQW9CLDZCQUE2QiwwQkFBMEIsZ0JBQWdCLEtBQUssMEJBQTBCLGlCQUFpQixzQkFBc0IsS0FBSywyQkFBMkIsc0JBQXNCLEtBQUssbURBQW1ELHNCQUFzQix3QkFBd0IsMEJBQTBCLE9BQU8sbUJBQW1CLHlCQUF5QixPQUFPLHNCQUFzQix3QkFBd0IsT0FBTyw0QkFBNEIsd0JBQXdCLE9BQU8sS0FBSyxvQ0FBb0MsZ0JBQWdCLG1CQUFtQixPQUFPLHNCQUFzQix1QkFBdUIsMEJBQTBCLE9BQU8scUJBQXFCLGdDQUFnQywyQkFBMkIsT0FBTyx3QkFBd0Isd0JBQXdCLE9BQU8sb0JBQW9CLG1CQUFtQixPQUFPLHlCQUF5Qiw2QkFBNkIsT0FBTyxxQkFBcUIsc0JBQXNCLE9BQU8saUNBQWlDLHNCQUFzQixPQUFPLG9CQUFvQixzQkFBc0Isd0JBQXdCLGtCQUFrQix5QkFBeUIsNkNBQTZDLE9BQU8seUJBQXlCLHdCQUF3QixPQUFPLG9CQUFvQix1QkFBdUIsd0JBQXdCLDJCQUEyQiwwQkFBMEIsaUJBQWlCLG1CQUFtQixzQkFBc0IsNkNBQTZDLHdCQUF3QiwwQkFBMEIsMkJBQTJCLE9BQU8sS0FBSyxXQUFXLHVGQUF1RixZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVB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K0IsT0FBTyw4QkFBOEIsa0JBQWtCLFFBQVEsWUFBWSxrSkFBa0osd0ZBQXdGLG1KQUFtSixPQUFPLEdBQUc7QUFDaGxCO0FBQ0E7QUFDQSxLQUFLLHFEQUFPLENBQUMsc0RBQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Uk87QUFDYztBQUNKO0FBQ3RDO0FBQ087QUFDUDtBQUNBLFNBQVMsd0RBQVU7QUFDbkIsR0FBRyxxREFBTyxDQUFDLHdEQUFJO0FBQ2YsR0FBRyxxREFBTyxDQUFDLDBEQUFNO0FBQ2pCO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxpRUFBZSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1vLXBvcC1hcHAvLi9zcmMvc3R5bGVzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9kZW1vLXBvcC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2RlbW8tcG9wLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2RlbW8tcG9wLWFwcC8uL25vZGVfbW9kdWxlcy9zb25wb3AtanMvbW9kdWxlcy9jb25zdGFudHMtbW9kdWxlLmpzIiwid2VicGFjazovL2RlbW8tcG9wLWFwcC8uL25vZGVfbW9kdWxlcy9zb25wb3AtanMvbW9kdWxlcy9kb20tbW9kdWxlLmpzIiwid2VicGFjazovL2RlbW8tcG9wLWFwcC8uL25vZGVfbW9kdWxlcy9zb25wb3AtanMvcG9wLmpzIiwid2VicGFjazovL2RlbW8tcG9wLWFwcC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzPzYzNDkiLCJ3ZWJwYWNrOi8vZGVtby1wb3AtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2RlbW8tcG9wLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3AtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2RlbW8tcG9wLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9kZW1vLXBvcC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9kZW1vLXBvcC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9kZW1vLXBvcC1hcHAvLi9zcmMvY29tcG9uZW50cy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3AtYXBwLy4vc3JjL2NvbXBvbmVudHMvQ291bnRlci5qcyIsIndlYnBhY2s6Ly9kZW1vLXBvcC1hcHAvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3AtYXBwLy4vc3JjL2NvbXBvbmVudHMvSGFtYnVyZ2VySWNvbi5qcyIsIndlYnBhY2s6Ly9kZW1vLXBvcC1hcHAvLi9zcmMvY29tcG9uZW50cy9IZXJvLmpzIiwid2VicGFjazovL2RlbW8tcG9wLWFwcC8uL3NyYy9jb21wb25lbnRzL05hdmJhci5qcyIsIndlYnBhY2s6Ly9kZW1vLXBvcC1hcHAvLi9zcmMvY29tcG9uZW50cy9SZWRCb3guanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3AtYXBwLy4vc3JjL2NvbXBvbmVudHMvU2lkZU5hdmJhci5qcyIsIndlYnBhY2s6Ly9kZW1vLXBvcC1hcHAvLi9zcmMvY29tcG9uZW50cy9TdG9wd2F0Y2guanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3AtYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2RlbW8tcG9wLWFwcC8uL3NyYy9wYWdlcy9HdWlkZS5qcyIsIndlYnBhY2s6Ly9kZW1vLXBvcC1hcHAvLi9zcmMvcGFnZXMvSG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5OndnaHRANDAwOzYwMCZmYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcclxcblxcdHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xcclxcblxcdGJhY2tncm91bmQ6ICNjOWQ2ZmY7XFxyXFxuXFx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlMmUyZTIsICNjOWQ2ZmYpO1xcclxcblxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2UyZTJlMiwgI2M5ZDZmZik7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1jb250YWluZXIge1xcclxcblxcdHdpZHRoOiAxMDB2dztcXHJcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGdhcDogMjBweDtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8tdGl0bGUge1xcclxcblxcdGZvbnQtc2l6ZTogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8tc3VidGl0bGUge1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1tZW51IHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLW1lbnUtaXRlbSB7XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1tZW51LWl0ZW0uY3VycmVudC1wYWdlIHtcXHJcXG5cXHRib3JkZXItYm90dG9tOiAzcHggc29saWQgI2YwODA4MDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1jb250YWluZXIge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRib3R0b206IDVweDtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtbmF2YmFyIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLXBhZ2Utc2VjdGlvbi1idWxsZXQge1xcclxcblxcdGZvbnQtc2l6ZTogMTZweDtcXHJcXG5cXHRmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1kZW1vLWJ1dHRvbiB7XFxyXFxuXFx0b3V0bGluZTogbm9uZTtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0YmFja2dyb3VuZDogYmxhY2s7XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHRwYWRkaW5nOiAxMHB4IDMwcHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcclxcblxcdG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG5cXHRsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcblxcdHRyYW5zaXRpb246IDAuM3M7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5oZXJvLWRlbW8tYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZDogIzBkMGQwZDtcXHJcXG5cXHR0cmFuc2l0aW9uOiAwLjNzO1xcclxcblxcdGNvbG9yOiAjZjA4MDgwO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zZWN0aW9ucyB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMzAlO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDEwJTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRnYXA6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG5cXHR3aWR0aDogODAlO1xcclxcblxcdHBhZGRpbmc6IDIwcHg7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGdhcDogNDBweDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuXFx0Ym94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLXRpdGxlIHtcXHJcXG5cXHRmb250LXNpemU6IDM1cHg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLXN1YnRpdGxlIHtcXHJcXG5cXHRmb250LXNpemU6IDI1cHg7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcdGJhY2tncm91bmQ6ICNmMGYwZjA7XFxyXFxuXFx0cGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tY29udGVudCB7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29kZS1zbmlwcGV0IHtcXHJcXG5cXHRmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGJhY2tncm91bmQ6ICNmMGY4ZmY7XFxyXFxuXFx0Ym94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjQlKSAwcHggM3B4IDhweDtcXHJcXG5cXHRwYWRkaW5nOiA1cHg7XFxyXFxuXFx0bWFyZ2luOiAxMHB4IDBweDtcXHJcXG5cXHRvdmVyZmxvdy14OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItY29udGFpbmVyIHtcXHJcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0dG9wOiAwO1xcclxcblxcdGJhY2tncm91bmQ6IGJsYWNrO1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGZvbnQtc2l6ZTogNDBweDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdG1pbi1oZWlnaHQ6IDcwcHg7XFxyXFxufVxcclxcblxcclxcbi5iYWNrLWFycm93IHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0bGVmdDogMjBweDtcXHJcXG5cXHRvdXRsaW5lOiBub25lO1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiBpbmhlcml0O1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRmb250LXNpemU6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5saW5rLWJ1dHRvbiB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmstYnV0dG9uOnZpc2l0ZWQge1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5oYW1idXJnZXItaWNvbi1jb250YWluZXIge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRsZWZ0OiAyMHB4O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRnYXA6IDEwcHg7XFxyXFxuXFx0aGVpZ2h0OiBhdXRvO1xcclxcblxcdHdpZHRoOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGFtYnVyZ2VyLWxpbmUge1xcclxcblxcdGJvcmRlci10b3A6IDJweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhhbWJ1cmdlci1uYXZiYXItbWVudSB7XFxyXFxuXFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdGJhY2tncm91bmQ6IGJsYWNrO1xcclxcblxcdGZvbnQtc2l6ZTogNDBweDtcXHJcXG5cXHR0b3A6IDcwcHg7XFxyXFxuXFx0cGFkZGluZzogMjVweCAwcHg7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGdhcDogNjBweDtcXHJcXG5cXHRvcGFjaXR5OiAwLjk7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhhbWJ1cmdlci1tZW51LWl0ZW0ge1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHRmb250LXNpemU6IDI1cHg7XFxyXFxuXFx0Y29sb3I6ICNmMDgwODA7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItbGluayB7XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1saW5rOmhvdmVyIHtcXHJcXG5cXHRjb2xvcjogI2YwODA4MCAhaW1wb3J0YW50O1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1saW5rOnZpc2l0ZWQge1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5oYW1idXJnZXItbWVudS1pdGVtOnZpc2l0ZWQge1xcclxcblxcdGNvbG9yOiAjZjA4MDgwO1xcclxcbn1cXHJcXG5cXHJcXG4uZXh0ZXJuYWwtbGluayB7XFxyXFxuXFx0Y29sb3I6ICNmMDgwODA7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZXh0ZXJuYWwtbGluazpob3ZlciB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5leHRlcm5hbC1saW5rOnZpc2l0ZWQge1xcclxcblxcdGNvbG9yOiAjZjA4MDgwO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvdW50ZXItY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0Z2FwOiAzMHB4O1xcclxcblxcdGZvbnQtc2l6ZTogNDBweDtcXHJcXG5cXHRjb2xvcjogI2YwODA4MDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvdW50ZXItYnV0dG9uIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0Zm9udC1zaXplOiA0MHB4O1xcclxcblxcdHdpZHRoOiA0MHB4O1xcclxcblxcdGhlaWdodDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJveC1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib3gtYnV0dG9uIHtcXHJcXG5cXHRmb250LXNpemU6IDI1cHg7XFxyXFxuXFx0cGFkZGluZzogNXB4IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib3gtZGlzcGxheSB7XFxyXFxuXFx0YmFja2dyb3VuZDogcmVkO1xcclxcblxcdHdpZHRoOiAzMCU7XFxyXFxuXFx0aGVpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RvcHdhdGNoLWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGdhcDogMjBweDtcXHJcXG5cXHRmb250LXNpemU6IDQwcHg7XFxyXFxuXFx0Y29sb3I6ICNmMDgwODA7XFxyXFxufVxcclxcblxcclxcbi5zdG9wd2F0Y2gtYnV0dG9uIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcblxcdHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5kdXBsaWNhdGUtY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5kdXBsaWNhdGUtaW5wdXQge1xcclxcblxcdHdpZHRoOiA1MCU7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZHVwbGljYXRlLW91dHB1dCB7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuXFx0LnBhZ2Utc2VjdGlvbnMge1xcclxcblxcdFxcdG1hcmdpbi10b3A6IDE1JTtcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiA1JTtcXHJcXG5cXHR9XFxyXFxuXFx0Lmhlcm8tdGl0bGUge1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMTUwcHg7XFxyXFxuXFx0fVxcclxcblxcdC5oZXJvLXN1YnRpdGxlIHtcXHJcXG5cXHRcXHRmb250LXNpemU6IDMwcHg7XFxyXFxuXFx0fVxcclxcblxcdC5oYW1idXJnZXItbWVudS1pdGVtIHtcXHJcXG5cXHRcXHRmb250LXNpemU6IDMwcHg7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XFxyXFxuXFx0LnNlY3Rpb24ge1xcclxcblxcdFxcdHdpZHRoOiA1MCU7XFxyXFxuXFx0fVxcclxcblxcdC5wYWdlLXNlY3Rpb25zIHtcXHJcXG5cXHRcXHRtYXJnaW4tdG9wOiA2JTtcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAyJTtcXHJcXG5cXHR9XFxyXFxuXFx0LmNvZGUtc25pcHBldCB7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFx0b3ZlcmZsb3cteDogaGlkZGVuO1xcclxcblxcdH1cXHJcXG5cXHQuc2VjdGlvbi1jb250ZW50IHtcXHJcXG5cXHRcXHRmb250LXNpemU6IDE4cHg7XFxyXFxuXFx0fVxcclxcblxcdC5ib3gtZGlzcGxheSB7XFxyXFxuXFx0XFx0d2lkdGg6IDEwJTtcXHJcXG5cXHR9XFxyXFxuXFx0Lm5hdmJhci1jb250YWluZXIge1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogZW5kO1xcclxcblxcdH1cXHJcXG5cXHQubmF2YmFyLXRpdGxlIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcclxcblxcdH1cXHJcXG5cXHQuaGFtYnVyZ2VyLWljb24tY29udGFpbmVyIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcclxcblxcdH1cXHJcXG5cXHQubmF2YmFyLW1lbnUge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAyMHB4O1xcclxcblxcdFxcdGdhcDogNzBweDtcXHJcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDIlO1xcclxcblxcdFxcdGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuXFx0fVxcclxcblxcdC5mb290ZXItY29udGFpbmVyIHtcXHJcXG5cXHRcXHRmb250LXNpemU6IDE4cHg7XFxyXFxuXFx0fVxcclxcblxcdC5zaWRlLW5hdmJhciB7XFxyXFxuXFx0XFx0ZGlzcGxheTogdW5zZXQ7XFxyXFxuXFx0XFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdFxcdHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG5cXHRcXHRsZWZ0OiAyJTtcXHJcXG5cXHRcXHR0b3A6IDEwMHB4O1xcclxcblxcdFxcdHBhZGRpbmc6IDIwcHg7XFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG5cXHRcXHRmb250LXNpemU6IDE4cHg7XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogN3B4O1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7Q0FDQyx1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsbUJBQW1CO0NBQ25CLCtEQUErRDtDQUMvRCx1REFBdUQ7Q0FDdkQsaUNBQWlDO0NBQ2pDLFNBQVM7Q0FDVCxVQUFVO0FBQ1g7O0FBRUE7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O0VBQ1QsZ0JBQWdCO0VBQ2hCLGtDQUFrQztDQUNuQztDQUNBO0VBQ0MsZUFBZTtDQUNoQjtDQUNBO0VBQ0MsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFFBQVE7RUFDUixVQUFVO0VBQ1YsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtDQUNuQjtBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5OndnaHRANDAwOzYwMCZmYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbmh0bWwge1xcclxcblxcdHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xcclxcblxcdGJhY2tncm91bmQ6ICNjOWQ2ZmY7XFxyXFxuXFx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlMmUyZTIsICNjOWQ2ZmYpO1xcclxcblxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2UyZTJlMiwgI2M5ZDZmZik7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1jb250YWluZXIge1xcclxcblxcdHdpZHRoOiAxMDB2dztcXHJcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGdhcDogMjBweDtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8tdGl0bGUge1xcclxcblxcdGZvbnQtc2l6ZTogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8tc3VidGl0bGUge1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1tZW51IHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLW1lbnUtaXRlbSB7XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1tZW51LWl0ZW0uY3VycmVudC1wYWdlIHtcXHJcXG5cXHRib3JkZXItYm90dG9tOiAzcHggc29saWQgI2YwODA4MDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1jb250YWluZXIge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRib3R0b206IDVweDtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtbmF2YmFyIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLXBhZ2Utc2VjdGlvbi1idWxsZXQge1xcclxcblxcdGZvbnQtc2l6ZTogMTZweDtcXHJcXG5cXHRmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1kZW1vLWJ1dHRvbiB7XFxyXFxuXFx0b3V0bGluZTogbm9uZTtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0YmFja2dyb3VuZDogYmxhY2s7XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHRwYWRkaW5nOiAxMHB4IDMwcHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcclxcblxcdG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG5cXHRsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcblxcdHRyYW5zaXRpb246IDAuM3M7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5oZXJvLWRlbW8tYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZDogIzBkMGQwZDtcXHJcXG5cXHR0cmFuc2l0aW9uOiAwLjNzO1xcclxcblxcdGNvbG9yOiAjZjA4MDgwO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zZWN0aW9ucyB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMzAlO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDEwJTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRnYXA6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG5cXHR3aWR0aDogODAlO1xcclxcblxcdHBhZGRpbmc6IDIwcHg7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGdhcDogNDBweDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuXFx0Ym94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLXRpdGxlIHtcXHJcXG5cXHRmb250LXNpemU6IDM1cHg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLXN1YnRpdGxlIHtcXHJcXG5cXHRmb250LXNpemU6IDI1cHg7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcdGJhY2tncm91bmQ6ICNmMGYwZjA7XFxyXFxuXFx0cGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tY29udGVudCB7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29kZS1zbmlwcGV0IHtcXHJcXG5cXHRmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGJhY2tncm91bmQ6ICNmMGY4ZmY7XFxyXFxuXFx0Ym94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjQlKSAwcHggM3B4IDhweDtcXHJcXG5cXHRwYWRkaW5nOiA1cHg7XFxyXFxuXFx0bWFyZ2luOiAxMHB4IDBweDtcXHJcXG5cXHRvdmVyZmxvdy14OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItY29udGFpbmVyIHtcXHJcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0dG9wOiAwO1xcclxcblxcdGJhY2tncm91bmQ6IGJsYWNrO1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGZvbnQtc2l6ZTogNDBweDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdG1pbi1oZWlnaHQ6IDcwcHg7XFxyXFxufVxcclxcblxcclxcbi5iYWNrLWFycm93IHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0bGVmdDogMjBweDtcXHJcXG5cXHRvdXRsaW5lOiBub25lO1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiBpbmhlcml0O1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRmb250LXNpemU6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5saW5rLWJ1dHRvbiB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmstYnV0dG9uOnZpc2l0ZWQge1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5oYW1idXJnZXItaWNvbi1jb250YWluZXIge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRsZWZ0OiAyMHB4O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRnYXA6IDEwcHg7XFxyXFxuXFx0aGVpZ2h0OiBhdXRvO1xcclxcblxcdHdpZHRoOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGFtYnVyZ2VyLWxpbmUge1xcclxcblxcdGJvcmRlci10b3A6IDJweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhhbWJ1cmdlci1uYXZiYXItbWVudSB7XFxyXFxuXFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdGJhY2tncm91bmQ6IGJsYWNrO1xcclxcblxcdGZvbnQtc2l6ZTogNDBweDtcXHJcXG5cXHR0b3A6IDcwcHg7XFxyXFxuXFx0cGFkZGluZzogMjVweCAwcHg7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGdhcDogNjBweDtcXHJcXG5cXHRvcGFjaXR5OiAwLjk7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhhbWJ1cmdlci1tZW51LWl0ZW0ge1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHRmb250LXNpemU6IDI1cHg7XFxyXFxuXFx0Y29sb3I6ICNmMDgwODA7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItbGluayB7XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1saW5rOmhvdmVyIHtcXHJcXG5cXHRjb2xvcjogI2YwODA4MCAhaW1wb3J0YW50O1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1saW5rOnZpc2l0ZWQge1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5oYW1idXJnZXItbWVudS1pdGVtOnZpc2l0ZWQge1xcclxcblxcdGNvbG9yOiAjZjA4MDgwO1xcclxcbn1cXHJcXG5cXHJcXG4uZXh0ZXJuYWwtbGluayB7XFxyXFxuXFx0Y29sb3I6ICNmMDgwODA7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZXh0ZXJuYWwtbGluazpob3ZlciB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5leHRlcm5hbC1saW5rOnZpc2l0ZWQge1xcclxcblxcdGNvbG9yOiAjZjA4MDgwO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvdW50ZXItY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0Z2FwOiAzMHB4O1xcclxcblxcdGZvbnQtc2l6ZTogNDBweDtcXHJcXG5cXHRjb2xvcjogI2YwODA4MDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvdW50ZXItYnV0dG9uIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0Zm9udC1zaXplOiA0MHB4O1xcclxcblxcdHdpZHRoOiA0MHB4O1xcclxcblxcdGhlaWdodDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJveC1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib3gtYnV0dG9uIHtcXHJcXG5cXHRmb250LXNpemU6IDI1cHg7XFxyXFxuXFx0cGFkZGluZzogNXB4IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib3gtZGlzcGxheSB7XFxyXFxuXFx0YmFja2dyb3VuZDogcmVkO1xcclxcblxcdHdpZHRoOiAzMCU7XFxyXFxuXFx0aGVpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RvcHdhdGNoLWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGdhcDogMjBweDtcXHJcXG5cXHRmb250LXNpemU6IDQwcHg7XFxyXFxuXFx0Y29sb3I6ICNmMDgwODA7XFxyXFxufVxcclxcblxcclxcbi5zdG9wd2F0Y2gtYnV0dG9uIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcblxcdHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5kdXBsaWNhdGUtY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5kdXBsaWNhdGUtaW5wdXQge1xcclxcblxcdHdpZHRoOiA1MCU7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZHVwbGljYXRlLW91dHB1dCB7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuXFx0LnBhZ2Utc2VjdGlvbnMge1xcclxcblxcdFxcdG1hcmdpbi10b3A6IDE1JTtcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiA1JTtcXHJcXG5cXHR9XFxyXFxuXFx0Lmhlcm8tdGl0bGUge1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMTUwcHg7XFxyXFxuXFx0fVxcclxcblxcdC5oZXJvLXN1YnRpdGxlIHtcXHJcXG5cXHRcXHRmb250LXNpemU6IDMwcHg7XFxyXFxuXFx0fVxcclxcblxcdC5oYW1idXJnZXItbWVudS1pdGVtIHtcXHJcXG5cXHRcXHRmb250LXNpemU6IDMwcHg7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XFxyXFxuXFx0LnNlY3Rpb24ge1xcclxcblxcdFxcdHdpZHRoOiA1MCU7XFxyXFxuXFx0fVxcclxcblxcdC5wYWdlLXNlY3Rpb25zIHtcXHJcXG5cXHRcXHRtYXJnaW4tdG9wOiA2JTtcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAyJTtcXHJcXG5cXHR9XFxyXFxuXFx0LmNvZGUtc25pcHBldCB7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFx0b3ZlcmZsb3cteDogaGlkZGVuO1xcclxcblxcdH1cXHJcXG5cXHQuc2VjdGlvbi1jb250ZW50IHtcXHJcXG5cXHRcXHRmb250LXNpemU6IDE4cHg7XFxyXFxuXFx0fVxcclxcblxcdC5ib3gtZGlzcGxheSB7XFxyXFxuXFx0XFx0d2lkdGg6IDEwJTtcXHJcXG5cXHR9XFxyXFxuXFx0Lm5hdmJhci1jb250YWluZXIge1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogZW5kO1xcclxcblxcdH1cXHJcXG5cXHQubmF2YmFyLXRpdGxlIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcclxcblxcdH1cXHJcXG5cXHQuaGFtYnVyZ2VyLWljb24tY29udGFpbmVyIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcclxcblxcdH1cXHJcXG5cXHQubmF2YmFyLW1lbnUge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAyMHB4O1xcclxcblxcdFxcdGdhcDogNzBweDtcXHJcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDIlO1xcclxcblxcdFxcdGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuXFx0fVxcclxcblxcdC5mb290ZXItY29udGFpbmVyIHtcXHJcXG5cXHRcXHRmb250LXNpemU6IDE4cHg7XFxyXFxuXFx0fVxcclxcblxcdC5zaWRlLW5hdmJhciB7XFxyXFxuXFx0XFx0ZGlzcGxheTogdW5zZXQ7XFxyXFxuXFx0XFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdFxcdHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG5cXHRcXHRsZWZ0OiAyJTtcXHJcXG5cXHRcXHR0b3A6IDEwMHB4O1xcclxcblxcdFxcdHBhZGRpbmc6IDIwcHg7XFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG5cXHRcXHRmb250LXNpemU6IDE4cHg7XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogN3B4O1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBjb25zdCBjb25zdGFudHMgPSB7XHJcblx0YWNjZXNzS2V5SW52YWxpZEVycm9yOiBcImFjY2Vzc0tleSBtdXN0IGJlIGEgdmFsaWQgZXhpc3Rpbmcga2V5XCIsXHJcblx0YWNjZXNzS2V5TWlzc2luZ0Vycm9yOlxyXG5cdFx0XCJhY2Nlc3NLZXkgbXVzdCBiZSBwYXNzZWQgaW5zaWRlIHByb3BzIGFyZ3VtZW50IGZvciBhIHBvcENvbXBvbmVudCB1dGlsaXppbmcgc3RhdGUuXCIsXHJcblx0Y3JlYXRlUE9QRWxlbWVudFRhZ1R5cGU6IFwic3RyaW5nXCIsXHJcblx0Y3JlYXRlUm9vdEVsZW1lbnREZWZhdWx0SWQ6IFwicm9vdFwiLFxyXG5cdGNyZWF0ZVJvb3RFbGVtZW50VGFnOiBcImRpdlwiLFxyXG5cdGZvckxvb3BJZGVudGlmaWVyOiBcIkFycmF5LmZvckVhY2hcIixcclxuXHRwb3BDb21wb25lbnRVbmlxdWVLZXlFcnJvcjogYFBPUCBjb21wb25lbnRzIHJlbmRlcmVkIGluIGFuIGFycmF5IG11c3QgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AgcGFzc2VkIGluLmAsXHJcblx0cG9wRWxlbWVudEF0dHJpYnV0ZVNlcGFyYXRvcjogXCI9XCIsXHJcblx0cG9wRWxlbWVudENsYXNzSWRlbnRpZmllcjogXCJjbGFzcz1cIixcclxuXHRwb3BFbGVtZW50SWRJZGVudGlmaWVyOiBcImlkPVwiLFxyXG5cdHBvcE9iamVjdFRhZ1NlcGFyYXRvcjogXCJ8XCIsXHJcblx0bWFwTG9vcElkZW50aWZpZXI6IFwiQXJyYXkubWFwXCIsXHJcblx0cmVmcmVzaERPTURlZmF1bHRBY3Rpb246IFwiY2xpY2tcIixcclxuXHRyZW5kZXJGdW5jdGlvbklkZW50aWZlcjogXCJPYmplY3QucmVuZGVyXCIsXHJcblx0cm9vdEZ1bmN0aW9uSWRlbnRpZmllcjogXCJPYmplY3Qucm9vdFwiLFxyXG5cdHN0YXRlS2V5RmlsdGVyU3RyaW5nOiBcIkVycm9yXCIsXHJcblx0dHlwZW9mUHJvcHNGdW5jdGlvbklkZW50aWZpZXI6IFwiZnVuY3Rpb25cIixcclxuXHR0eXBlb2ZQcm9wc09iamVjdElkZW50aWZpZXI6IFwib2JqZWN0XCIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25zdGFudHM7XHJcbiIsImltcG9ydCBjb25zdGFudHMgZnJvbSBcIi4vY29uc3RhbnRzLW1vZHVsZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRvbSA9IHtcclxuXHRpbml0OiAoKSA9PiB7XHJcblx0XHRkb20uc3RhdGUgPSB7fTtcclxuXHRcdGRvbS5yZW5kZXJTdG9yZSA9IHt9O1xyXG5cdFx0ZG9tLnN0YXRlQ2hlY2tTZXQgPSBuZXcgU2V0KCk7XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBwYXRoID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCIjIVwiKVsxXTtcclxuXHRcdFx0aWYgKGRvbS5yb3V0ZXMgJiYgZG9tLmN1cnJQYXRoICE9PSBwYXRoKSB7XHJcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdGdlbmVyYXRlRWxlbWVudDogKHBvcE9iamVjdCkgPT4ge1xyXG5cdFx0aWYgKHR5cGVvZiBwb3BPYmplY3QgPT09IGNvbnN0YW50cy5jcmVhdGVQT1BFbGVtZW50VGFnVHlwZSkge1xyXG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocG9wT2JqZWN0KTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IHBhcmVudEFyZ3MgPSBwb3BPYmplY3QudGFnLnNwbGl0KGNvbnN0YW50cy5wb3BPYmplY3RUYWdTZXBhcmF0b3IpO1xyXG5cdFx0Y29uc3QgcGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChwYXJlbnRBcmdzWzBdKTtcclxuXHRcdGlmIChwYXJlbnRBcmdzWzFdKSB7XHJcblx0XHRcdGlmIChwYXJlbnRBcmdzWzFdLmluY2x1ZGVzKGNvbnN0YW50cy5wb3BFbGVtZW50Q2xhc3NJZGVudGlmaWVyKSkge1xyXG5cdFx0XHRcdHBhcmVudC5jbGFzc05hbWUgPSBwYXJlbnRBcmdzWzFdLnNwbGl0KFxyXG5cdFx0XHRcdFx0Y29uc3RhbnRzLnBvcEVsZW1lbnRBdHRyaWJ1dGVTZXBhcmF0b3JcclxuXHRcdFx0XHQpWzFdO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHBhcmVudEFyZ3NbMV0uaW5jbHVkZXMoY29uc3RhbnRzLnBvcEVsZW1lbnRJZElkZW50aWZpZXIpKSB7XHJcblx0XHRcdFx0cGFyZW50LmlkID0gcGFyZW50QXJnc1sxXS5zcGxpdChcclxuXHRcdFx0XHRcdGNvbnN0YW50cy5wb3BFbGVtZW50QXR0cmlidXRlU2VwYXJhdG9yXHJcblx0XHRcdFx0KVsxXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHBhcmVudEFyZ3NbMl0pIHtcclxuXHRcdFx0aWYgKHBhcmVudEFyZ3NbMl0uaW5jbHVkZXMoY29uc3RhbnRzLnBvcEVsZW1lbnRDbGFzc0lkZW50aWZpZXIpKSB7XHJcblx0XHRcdFx0cGFyZW50LmNsYXNzTmFtZSA9IHBhcmVudEFyZ3NbMl0uc3BsaXQoXHJcblx0XHRcdFx0XHRjb25zdGFudHMucG9wRWxlbWVudEF0dHJpYnV0ZVNlcGFyYXRvclxyXG5cdFx0XHRcdClbMV07XHJcblx0XHRcdH0gZWxzZSBpZiAocGFyZW50QXJnc1syXS5pbmNsdWRlcyhjb25zdGFudHMucG9wRWxlbWVudElkSWRlbnRpZmllcikpIHtcclxuXHRcdFx0XHRwYXJlbnQuaWQgPSBwYXJlbnRBcmdzWzJdLnNwbGl0KFxyXG5cdFx0XHRcdFx0Y29uc3RhbnRzLnBvcEVsZW1lbnRBdHRyaWJ1dGVTZXBhcmF0b3JcclxuXHRcdFx0XHQpWzFdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRPYmplY3Qua2V5cyhwb3BPYmplY3QucHJvcHMpLmZvckVhY2goKGtleSkgPT4ge1xyXG5cdFx0XHRwYXJlbnRba2V5XSA9IHBvcE9iamVjdC5wcm9wc1trZXldO1xyXG5cdFx0fSk7XHJcblx0XHRpZiAoQXJyYXkuaXNBcnJheShwb3BPYmplY3QuY2hpbGRyZW4pKSB7XHJcblx0XHRcdHBvcE9iamVjdC5jaGlsZHJlblxyXG5cdFx0XHRcdC5tYXAoZG9tLmdlbmVyYXRlRWxlbWVudClcclxuXHRcdFx0XHQuZm9yRWFjaCgobm9kZSkgPT4gcGFyZW50LmFwcGVuZENoaWxkKG5vZGUpKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBwYXJlbnQ7XHJcblx0fSxcclxuXHRzYW1lUHJvcHM6IChwcm9wc09uZSwgcHJvcHNUd28pID0+IHtcclxuXHRcdGlmIChwcm9wc09uZSA9PT0gcHJvcHNUd28pIHJldHVybiB0cnVlO1xyXG5cdFx0aWYgKHByb3BzT25lLnRvU3RyaW5nKCkgPT09IHByb3BzVHdvLnRvU3RyaW5nKCkpIHJldHVybiB0cnVlO1xyXG5cdFx0aWYgKFxyXG5cdFx0XHR0eXBlb2YgcHJvcHNPbmUgIT09IGNvbnN0YW50cy50eXBlb2ZQcm9wc09iamVjdElkZW50aWZpZXIgfHxcclxuXHRcdFx0dHlwZW9mIHByb3BzVHdvICE9PSBjb25zdGFudHMudHlwZW9mUHJvcHNPYmplY3RJZGVudGlmaWVyIHx8XHJcblx0XHRcdHByb3BzT25lID09IG51bGwgfHxcclxuXHRcdFx0cHJvcHNUd28gPT0gbnVsbFxyXG5cdFx0KSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGtleXNPbmUgPSBPYmplY3Qua2V5cyhwcm9wc09uZSk7XHJcblx0XHRjb25zdCBrZXlzVHdvID0gT2JqZWN0LmtleXMocHJvcHNUd28pO1xyXG5cdFx0aWYgKGtleXNPbmUubGVuZ3RoICE9PSBrZXlzVHdvLmxlbmd0aCkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRsZXQgcmVzdWx0ID0gdHJ1ZTtcclxuXHRcdGtleXNPbmUuZm9yRWFjaCgoa2V5KSA9PiB7XHJcblx0XHRcdGlmICgha2V5c1R3by5pbmNsdWRlcyhrZXkpKSB7XHJcblx0XHRcdFx0cmVzdWx0ID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKFxyXG5cdFx0XHRcdHR5cGVvZiBwcm9wc09uZVtrZXldID09PSBjb25zdGFudHMudHlwZW9mUHJvcHNGdW5jdGlvbklkZW50aWZpZXIgfHxcclxuXHRcdFx0XHR0eXBlb2YgcHJvcHNUd29ba2V5XSA9PT0gY29uc3RhbnRzLnR5cGVvZlByb3BzRnVuY3Rpb25JZGVudGlmaWVyXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdGlmIChwcm9wc09uZVtrZXldLnRvU3RyaW5nKCkgIT09IHByb3BzVHdvW2tleV0udG9TdHJpbmcoKSkge1xyXG5cdFx0XHRcdFx0cmVzdWx0ID0gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghZG9tLnNhbWVQcm9wcyhwcm9wc09uZVtrZXldLCBwcm9wc1R3b1trZXldKSkge1xyXG5cdFx0XHRcdHJlc3VsdCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fSxcclxuXHRjb21wYXJlRWxlbWVudHM6IChwb3BOb2RlT25lLCBwb3BlTm9kZVR3bykgPT4ge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0dHlwZW9mIHBvcE5vZGVPbmUgIT09IHR5cGVvZiBwb3BlTm9kZVR3byB8fFxyXG5cdFx0XHQodHlwZW9mIHBvcE5vZGVPbmUgPT09IGNvbnN0YW50cy5jcmVhdGVQT1BFbGVtZW50VGFnVHlwZSAmJlxyXG5cdFx0XHRcdHBvcE5vZGVPbmUgIT09IHBvcGVOb2RlVHdvKSB8fFxyXG5cdFx0XHRwb3BOb2RlT25lLnRhZyAhPT0gcG9wZU5vZGVUd28udGFnIHx8XHJcblx0XHRcdChwb3BOb2RlT25lLnByb3BzICYmXHJcblx0XHRcdFx0cG9wZU5vZGVUd28ucHJvcHMgJiZcclxuXHRcdFx0XHQhZG9tLnNhbWVQcm9wcyhwb3BOb2RlT25lLnByb3BzLCBwb3BlTm9kZVR3by5wcm9wcykpXHJcblx0XHQpO1xyXG5cdH0sXHJcblx0dXBkYXRlRWxlbWVudDogKHBhcmVudE5vZGUsIG5ld05vZGUsIG9sZE5vZGUsIGluZGV4ID0gMCkgPT4ge1xyXG5cdFx0aWYgKCFvbGROb2RlKSB7XHJcblx0XHRcdHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoZG9tLmdlbmVyYXRlRWxlbWVudChuZXdOb2RlKSk7XHJcblx0XHR9IGVsc2UgaWYgKCFuZXdOb2RlKSB7XHJcblx0XHRcdHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocGFyZW50Tm9kZS5jaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2UgaWYgKGRvbS5jb21wYXJlRWxlbWVudHMobmV3Tm9kZSwgb2xkTm9kZSkpIHtcclxuXHRcdFx0cGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoXHJcblx0XHRcdFx0ZG9tLmdlbmVyYXRlRWxlbWVudChuZXdOb2RlKSxcclxuXHRcdFx0XHRwYXJlbnROb2RlLmNoaWxkTm9kZXNbaW5kZXhdXHJcblx0XHRcdCk7XHJcblx0XHR9IGVsc2UgaWYgKG5ld05vZGUudGFnKSB7XHJcblx0XHRcdGNvbnN0IG5ld0xlbmd0aCA9IG5ld05vZGUuY2hpbGRyZW4ubGVuZ3RoO1xyXG5cdFx0XHRjb25zdCBvbGRMZW5ndGggPSBvbGROb2RlLmNoaWxkcmVuLmxlbmd0aDtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuZXdMZW5ndGggfHwgaSA8IG9sZExlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0ZG9tLnVwZGF0ZUVsZW1lbnQoXHJcblx0XHRcdFx0XHRwYXJlbnROb2RlLmNoaWxkTm9kZXNbaW5kZXhdLFxyXG5cdFx0XHRcdFx0bmV3Tm9kZS5jaGlsZHJlbltpXSxcclxuXHRcdFx0XHRcdG9sZE5vZGUuY2hpbGRyZW5baV0sXHJcblx0XHRcdFx0XHRpXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0aW5pdGlhbGl6ZVN0YXRlOiAocG9wQ29tcG9uZW50LCBhY2Nlc3NLZXkpID0+IHtcclxuXHRcdGlmIChwb3BDb21wb25lbnQucmVuZGVyICYmIHBvcENvbXBvbmVudC5zZXQgJiYgYWNjZXNzS2V5KSB7XHJcblx0XHRcdGlmICghZG9tLnN0YXRlW2FjY2Vzc0tleV0pIHtcclxuXHRcdFx0XHRkb20uc3RhdGVbYWNjZXNzS2V5XSA9IHt9O1xyXG5cdFx0XHRcdHBvcENvbXBvbmVudC5zZXQoe1xyXG5cdFx0XHRcdFx0c3RhdGU6IGRvbS5zdGF0ZVthY2Nlc3NLZXldLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdHBvcENvbXBvbmVudFxyXG5cdFx0XHRcdC5yZW5kZXIoeyBwcm9wczoge30sIHN0YXRlOiB7fSB9KVxyXG5cdFx0XHRcdC5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGNoaWxkKSB7XHJcblx0XHRcdFx0XHRcdGRvbS5pbml0aWFsaXplU3RhdGUoY2hpbGQsIGNoaWxkLmFjY2Vzc0tleSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRmaWx0ZXJWYWxpZFBvcE9iamVjdHM6IChkb21UcmVlKSA9PiB7XHJcblx0XHRpZiAoZG9tVHJlZS5jaGlsZHJlbiAmJiBBcnJheS5pc0FycmF5KGRvbVRyZWUuY2hpbGRyZW4pKSB7XHJcblx0XHRcdGNvbnN0IHRyZWVDaGlsZHJlbiA9IGRvbVRyZWUuY2hpbGRyZW4uZmlsdGVyKFxyXG5cdFx0XHRcdChjaGlsZCkgPT4gY2hpbGQgJiYgT2JqZWN0LmtleXMoY2hpbGQpLmxlbmd0aFxyXG5cdFx0XHQpO1xyXG5cdFx0XHR0cmVlQ2hpbGRyZW4uZm9yRWFjaCgob2JqKSA9PiB7XHJcblx0XHRcdFx0aWYgKG9iaiAmJiBvYmouY2hpbGRyZW4pIHtcclxuXHRcdFx0XHRcdG9iai5jaGlsZHJlbiA9IGRvbS5maWx0ZXJWYWxpZFBvcE9iamVjdHMob2JqKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gdHJlZUNoaWxkcmVuO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIFtdO1xyXG5cdH0sXHJcblx0Z2V0Q29tcG9uZW50U3RhdGVLZXk6IChjb21wb25lbnQsIGxvb3BLZXkpID0+IHtcclxuXHRcdGNvbnN0IGhhc1NldCA9XHJcblx0XHRcdHR5cGVvZiBjb21wb25lbnQgPT09IGNvbnN0YW50cy50eXBlb2ZQcm9wc0Z1bmN0aW9uSWRlbnRpZmllclxyXG5cdFx0XHRcdD8gY29tcG9uZW50KCkgJiYgY29tcG9uZW50KCkuc2V0XHJcblx0XHRcdFx0OiBjb21wb25lbnQgJiYgY29tcG9uZW50LnNldDtcclxuXHRcdGNvbnN0IGxvY2F0aW9uID0gbmV3IEVycm9yKCk7XHJcblx0XHRjb25zdCBmb3JtYXR0ZWRMb29wS2V5ID0gbG9vcEtleSA/IFN0cmluZyhsb29wS2V5KSA6IG51bGw7XHJcblx0XHRjb25zdCBzdGFjayA9IGxvY2F0aW9uLnN0YWNrLnNwbGl0KFwiXFxuXCIpO1xyXG5cdFx0Y29uc3QgaXNMb29wZWQgPVxyXG5cdFx0XHRzdGFjay5qb2luKFwiXCIpLmluY2x1ZGVzKGNvbnN0YW50cy5mb3JMb29wSWRlbnRpZmllcikgfHxcclxuXHRcdFx0c3RhY2suam9pbihcIlwiKS5pbmNsdWRlcyhjb25zdGFudHMubWFwTG9vcElkZW50aWZpZXIpO1xyXG5cdFx0aWYgKGhhc1NldCAmJiBpc0xvb3BlZCAmJiAhZm9ybWF0dGVkTG9vcEtleSkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoY29uc3RhbnRzLnBvcENvbXBvbmVudFVuaXF1ZUtleUVycm9yKTtcclxuXHRcdH1cclxuXHRcdGxldCBjdXRPZmZJbmRleDtcclxuXHRcdGZvciAobGV0IGkgPSBzdGFjay5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG5cdFx0XHRpZiAoc3RhY2tbaV0uaW5jbHVkZXMoY29uc3RhbnRzLnJlbmRlckZ1bmN0aW9uSWRlbnRpZmVyKSkge1xyXG5cdFx0XHRcdGN1dE9mZkluZGV4ID0gaTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Y29uc3Qga2V5ID0gc3RhY2tbMl0uaW5jbHVkZXMoY29uc3RhbnRzLnJvb3RGdW5jdGlvbklkZW50aWZpZXIpXHJcblx0XHRcdD8gc3RhY2suam9pbihcIlwiKS5yZXBsYWNlKGNvbnN0YW50cy5zdGF0ZUtleUZpbHRlclN0cmluZywgXCJcIilcclxuXHRcdFx0OiBzdGFja1xyXG5cdFx0XHRcdFx0LnNsaWNlKDAsIGN1dE9mZkluZGV4ICsgMSlcclxuXHRcdFx0XHRcdC5qb2luKFwiXCIpXHJcblx0XHRcdFx0XHQucmVwbGFjZShjb25zdGFudHMuc3RhdGVLZXlGaWx0ZXJTdHJpbmcsIFwiXCIpO1xyXG5cdFx0cmV0dXJuIGAke2tleX0ke2Zvcm1hdHRlZExvb3BLZXkgPyBmb3JtYXR0ZWRMb29wS2V5IDogXCJcIn1gO1xyXG5cdH0sXHJcblx0Y2xlYW5TdGF0ZTogKCkgPT4ge1xyXG5cdFx0T2JqZWN0LmtleXMoZG9tLnN0YXRlKS5mb3JFYWNoKChrZXkpID0+IHtcclxuXHRcdFx0aWYgKCFkb20uc3RhdGVDaGVja1NldC5oYXMoa2V5KSkge1xyXG5cdFx0XHRcdGRlbGV0ZSBkb20uc3RhdGVba2V5XTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRvbTtcclxuIiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi9tb2R1bGVzL2NvbnN0YW50cy1tb2R1bGVcIjtcclxuaW1wb3J0IGRvbSBmcm9tIFwiLi9tb2R1bGVzL2RvbS1tb2R1bGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQT1AgPSB7XHJcblx0Y3JlYXRlOiAoZWxlbWVudFRhZywgZWxlbWVudENoaWxkcmVuID0gW10sIGVsZW1lbnRQcm9wcyA9IHt9KSA9PiB7XHJcblx0XHRjb25zdCBjaGlsZHJlbiA9XHJcblx0XHRcdEFycmF5LmlzQXJyYXkoZWxlbWVudFByb3BzKSAmJiBlbGVtZW50UHJvcHMubGVuZ3RoXHJcblx0XHRcdFx0PyBlbGVtZW50UHJvcHNcclxuXHRcdFx0XHQ6IGVsZW1lbnRDaGlsZHJlbjtcclxuXHRcdGlmIChjaGlsZHJlbiAmJiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSAmJiBjaGlsZHJlbi5sZW5ndGgpIHtcclxuXHRcdFx0Y2hpbGRyZW4uZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XHJcblx0XHRcdFx0aWYgKCF2YWx1ZSkge1xyXG5cdFx0XHRcdFx0Y2hpbGRyZW5baW5kZXhdID0gXCIgXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdGlmICh0eXBlb2YgZWxlbWVudFRhZyA9PT0gY29uc3RhbnRzLmNyZWF0ZVBPUEVsZW1lbnRUYWdUeXBlKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dGFnOiBlbGVtZW50VGFnLFxyXG5cdFx0XHRcdHByb3BzOlxyXG5cdFx0XHRcdFx0IUFycmF5LmlzQXJyYXkoZWxlbWVudENoaWxkcmVuKSAmJiBPYmplY3Qua2V5cyhlbGVtZW50Q2hpbGRyZW4pLmxlbmd0aFxyXG5cdFx0XHRcdFx0XHQ/IGVsZW1lbnRDaGlsZHJlblxyXG5cdFx0XHRcdFx0XHQ6IGVsZW1lbnRQcm9wcyxcclxuXHRcdFx0XHRjaGlsZHJlbixcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdGdldFN0YXRlOiAoYWNjZXNzS2V5KSA9PiB7XHJcblx0XHRpZiAoIWFjY2Vzc0tleSkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoY29uc3RhbnRzLmFjY2Vzc0tleUludmFsaWRFcnJvcik7XHJcblx0XHR9XHJcblx0XHRpZiAoZG9tLnN0YXRlW2FjY2Vzc0tleV0pIHtcclxuXHRcdFx0Y29uc3Qgc3RhdGUgPSB7IC4uLmRvbS5zdGF0ZVthY2Nlc3NLZXldIH07XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB7fTtcclxuXHR9LFxyXG5cdHVzZTogKHBvcENvbXBvbmVudCwgcG9wQ29tcG9uZW50Q2hpbGRyZW4gPSBbXSwgcG9wQ29tcG9uZW50UHJvcHMgPSB7fSkgPT4ge1xyXG5cdFx0Y29uc3QgY29tcG9uZW50Q2hpbGRyZW4gPVxyXG5cdFx0XHRBcnJheS5pc0FycmF5KHBvcENvbXBvbmVudFByb3BzKSAmJiBwb3BDb21wb25lbnRQcm9wcy5sZW5ndGhcclxuXHRcdFx0XHQ/IHBvcENvbXBvbmVudFByb3BzXHJcblx0XHRcdFx0OiBwb3BDb21wb25lbnRDaGlsZHJlbjtcclxuXHRcdGNvbnN0IGNvbXBvbmVudFByb3BzID1cclxuXHRcdFx0T2JqZWN0LmtleXMocG9wQ29tcG9uZW50Q2hpbGRyZW4pLmxlbmd0aCAmJlxyXG5cdFx0XHQhQXJyYXkuaXNBcnJheShwb3BDb21wb25lbnRDaGlsZHJlbilcclxuXHRcdFx0XHQ/IHBvcENvbXBvbmVudENoaWxkcmVuXHJcblx0XHRcdFx0OiBwb3BDb21wb25lbnRQcm9wcztcclxuXHRcdGxldCBwYXJlbnQgPSB7fTtcclxuXHRcdGxldCBjb21wb25lbnRTdGF0ZSA9IHt9O1xyXG5cdFx0Y29uc3QgY29tcG9uZW50U3RhdGVLZXkgPSBkb20uZ2V0Q29tcG9uZW50U3RhdGVLZXkoXHJcblx0XHRcdHBvcENvbXBvbmVudCxcclxuXHRcdFx0Y29tcG9uZW50UHJvcHMua2V5XHJcblx0XHQpO1xyXG5cdFx0ZG9tLnN0YXRlQ2hlY2tTZXQuYWRkKGNvbXBvbmVudFN0YXRlS2V5KTtcclxuXHRcdGlmIChjb21wb25lbnRQcm9wcy5hY2Nlc3NLZXkpIHtcclxuXHRcdFx0ZG9tLnN0YXRlQ2hlY2tTZXQuYWRkKGNvbXBvbmVudFByb3BzLmFjY2Vzc0tleSk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBleHBhbmRlZENvbXBvbmVudCA9XHJcblx0XHRcdHR5cGVvZiBwb3BDb21wb25lbnQgPT09IGNvbnN0YW50cy50eXBlb2ZQcm9wc0Z1bmN0aW9uSWRlbnRpZmllciAmJlxyXG5cdFx0XHQhZG9tLnN0YXRlW2NvbXBvbmVudFN0YXRlS2V5XVxyXG5cdFx0XHRcdD8gcG9wQ29tcG9uZW50KHsgcHJvcHM6IHsgLi4uY29tcG9uZW50UHJvcHMgfSB9KVxyXG5cdFx0XHRcdDogdHlwZW9mIHBvcENvbXBvbmVudCA9PT0gY29uc3RhbnRzLnR5cGVvZlByb3BzRnVuY3Rpb25JZGVudGlmaWVyXHJcblx0XHRcdFx0PyBkb20ucmVuZGVyU3RvcmVbY29tcG9uZW50U3RhdGVLZXldLmV4cGFuZGVkRm5cclxuXHRcdFx0XHQ6IHBvcENvbXBvbmVudDtcclxuXHRcdGlmICghZG9tLnN0YXRlW2NvbXBvbmVudFN0YXRlS2V5XSkge1xyXG5cdFx0XHRkb20uc3RhdGVbY29tcG9uZW50U3RhdGVLZXldID0ge307XHJcblx0XHRcdGRvbS5yZW5kZXJTdG9yZVtjb21wb25lbnRTdGF0ZUtleV0gPSB7fTtcclxuXHRcdFx0ZG9tLnJlbmRlclN0b3JlW2NvbXBvbmVudFN0YXRlS2V5XS5leHBhbmRlZEZuID1cclxuXHRcdFx0XHR0eXBlb2YgcG9wQ29tcG9uZW50ID09PSBjb25zdGFudHMudHlwZW9mUHJvcHNGdW5jdGlvbklkZW50aWZpZXJcclxuXHRcdFx0XHRcdD8gcG9wQ29tcG9uZW50KHsgcHJvcHM6IHsgLi4uY29tcG9uZW50UHJvcHMgfSB9KVxyXG5cdFx0XHRcdFx0OiBwb3BDb21wb25lbnQ7XHJcblx0XHRcdGlmIChleHBhbmRlZENvbXBvbmVudC5zZXQpIHtcclxuXHRcdFx0XHRwYXJlbnQuc2V0ID0gZXhwYW5kZWRDb21wb25lbnQuc2V0O1xyXG5cdFx0XHRcdGV4cGFuZGVkQ29tcG9uZW50LnNldCh7XHJcblx0XHRcdFx0XHRwcm9wczogeyAuLi5jb21wb25lbnRQcm9wcyB9LFxyXG5cdFx0XHRcdFx0c3RhdGU6IGRvbS5zdGF0ZVtjb21wb25lbnRTdGF0ZUtleV0sXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29tcG9uZW50U3RhdGUgPSBkb20uc3RhdGVbY29tcG9uZW50U3RhdGVLZXldO1xyXG5cdFx0XHRkb20uc3RhdGVbY29tcG9uZW50UHJvcHMuYWNjZXNzS2V5XSA9IGNvbXBvbmVudFN0YXRlO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGV4cGFuZGVkQ29tcG9uZW50LnJlbmRlcikge1xyXG5cdFx0XHRwYXJlbnQuY29tcG9uZW50U3RhdGVLZXkgPSBjb21wb25lbnRTdGF0ZUtleTtcclxuXHRcdFx0Y29tcG9uZW50U3RhdGUgPSBkb20uc3RhdGVbY29tcG9uZW50U3RhdGVLZXldO1xyXG5cdFx0XHRkb20uc3RhdGVbY29tcG9uZW50UHJvcHMuYWNjZXNzS2V5XSA9IGNvbXBvbmVudFN0YXRlO1xyXG5cdFx0XHRkZWxldGUgY29tcG9uZW50UHJvcHMuYWNjZXNzS2V5O1xyXG5cdFx0XHRjb25zdCByZW5kZXJlZCA9IGV4cGFuZGVkQ29tcG9uZW50LnJlbmRlcih7XHJcblx0XHRcdFx0cHJvcHM6IHsgLi4uY29tcG9uZW50UHJvcHMgfSxcclxuXHRcdFx0XHRzdGF0ZTogY29tcG9uZW50U3RhdGUsXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRjb25zdCBjaGlsZHJlbiA9IHJlbmRlcmVkLmNoaWxkcmVuO1xyXG5cdFx0XHRpZiAoIXJlbmRlcmVkLnRhZy5yZW5kZXIpIHtcclxuXHRcdFx0XHRwYXJlbnQgPSB7IC4uLnBhcmVudCwgLi4ucmVuZGVyZWQgfTtcclxuXHRcdFx0XHRpZiAoY29tcG9uZW50Q2hpbGRyZW4gJiYgY29tcG9uZW50Q2hpbGRyZW4ubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRjb21wb25lbnRDaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRwYXJlbnQuY2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cGFyZW50ID0gUE9QLnVzZShyZW5kZXJlZC50YWcsIGNvbXBvbmVudENoaWxkcmVuKTtcclxuXHRcdFx0XHRjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG5cdFx0XHRcdFx0cGFyZW50LmNoaWxkcmVuLnB1c2goY2hpbGQpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGlmIChjb21wb25lbnRDaGlsZHJlbiAmJiBjb21wb25lbnRDaGlsZHJlbi5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdGNvbXBvbmVudENoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcblx0XHRcdFx0XHRcdHBhcmVudC5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcGFyZW50O1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0cmVmcmVzaDogKCkgPT4ge1xyXG5cdFx0ZG9tLnN0YXRlQ2hlY2tTZXQuY2xlYXIoKTtcclxuXHRcdGNvbnN0IG5ld1RyZWUgPSBkb20ucmVuZGVyRm4oKTtcclxuXHRcdG5ld1RyZWUuY2hpbGRyZW4gPSBkb20uZmlsdGVyVmFsaWRQb3BPYmplY3RzKG5ld1RyZWUpO1xyXG5cdFx0ZG9tLnVwZGF0ZUVsZW1lbnQoZG9tLnJvb3QsIG5ld1RyZWUsIGRvbS5wcmV2VHJlZSk7XHJcblx0XHRkb20ucHJldlRyZWUgPSBuZXdUcmVlO1xyXG5cdFx0ZG9tLmNsZWFuU3RhdGUoKTtcclxuXHR9LFxyXG5cdHJvb3Q6IChwb3BDb21wb25lbnQsIHJvb3RQcm9wcyA9IHt9KSA9PiB7XHJcblx0XHRjb25zdCB7IHJvb3ROYW1lLCBhY2Nlc3NLZXksIHBvcFJvdXRlcyB9ID0gcm9vdFByb3BzO1xyXG5cdFx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoY29uc3RhbnRzLmNyZWF0ZVJvb3RFbGVtZW50VGFnKTtcclxuXHRcdHJvb3QuaWQgPVxyXG5cdFx0XHRyb290TmFtZSAmJiB0eXBlb2Ygcm9vdE5hbWUgPT09IGNvbnN0YW50cy5jcmVhdGVQT1BFbGVtZW50VGFnVHlwZVxyXG5cdFx0XHRcdD8gcm9vdE5hbWVcclxuXHRcdFx0XHQ6IGNvbnN0YW50cy5jcmVhdGVSb290RWxlbWVudERlZmF1bHRJZDtcclxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocm9vdCk7XHJcblx0XHRkb20ucm9vdCA9IHJvb3Q7XHJcblx0XHRjb25zdCBoYXNSb3V0ZXMgPVxyXG5cdFx0XHRwb3BSb3V0ZXMgJiYgIUFycmF5LmlzQXJyYXkocG9wUm91dGVzKSAmJiBPYmplY3Qua2V5cyhwb3BSb3V0ZXMpLmxlbmd0aFxyXG5cdFx0XHRcdD8gdHJ1ZVxyXG5cdFx0XHRcdDogZmFsc2U7XHJcblx0XHRkb20ucm91dGVzID0gaGFzUm91dGVzID8gcG9wUm91dGVzIDogbnVsbDtcclxuXHRcdGxldCBjb21wb25lbnRUb1JlbmRlcjtcclxuXHRcdGNvbnN0IHBhdGggPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIiMhXCIpWzFdO1xyXG5cdFx0Y29uc3QgZGVmYXVsdFBhdGggPSBoYXNSb3V0ZXMgPyBPYmplY3Qua2V5cyhwb3BSb3V0ZXMpWzBdIDogbnVsbDtcclxuXHRcdGlmICghcGF0aCAmJiBoYXNSb3V0ZXMpIHtcclxuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgKz0gYCMhJHtkZWZhdWx0UGF0aH1gO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGhhc1JvdXRlcyAmJiBwYXRoICYmIHBvcFJvdXRlc1twYXRoXSkge1xyXG5cdFx0XHRjb21wb25lbnRUb1JlbmRlciA9IHBvcFJvdXRlc1twYXRoXTtcclxuXHRcdFx0ZG9tLmN1cnJQYXRoID0gcGF0aDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbXBvbmVudFRvUmVuZGVyID0gcG9wQ29tcG9uZW50O1xyXG5cdFx0fVxyXG5cdFx0ZG9tLmluaXQoKTtcclxuXHRcdGNvbnN0IGNvbXBvbmVudFN0YXRlS2V5ID0gYWNjZXNzS2V5XHJcblx0XHRcdD8gYWNjZXNzS2V5XHJcblx0XHRcdDogZG9tLmdldENvbXBvbmVudFN0YXRlS2V5KCk7XHJcblx0XHRjb25zdCBpc0NvbXBvbmVudEZ1bmN0aW9uID1cclxuXHRcdFx0dHlwZW9mIGNvbXBvbmVudFRvUmVuZGVyID09PSBjb25zdGFudHMudHlwZW9mUHJvcHNGdW5jdGlvbklkZW50aWZpZXI7XHJcblx0XHRjb25zdCBleHBhbmRlZENvbXBvbmVudCA9XHJcblx0XHRcdGlzQ29tcG9uZW50RnVuY3Rpb24gJiYgIWRvbS5zdGF0ZVtjb21wb25lbnRTdGF0ZUtleV1cclxuXHRcdFx0XHQ/IGNvbXBvbmVudFRvUmVuZGVyKClcclxuXHRcdFx0XHQ6IGNvbXBvbmVudFRvUmVuZGVyO1xyXG5cdFx0ZG9tLmluaXRpYWxpemVTdGF0ZShleHBhbmRlZENvbXBvbmVudCwgY29tcG9uZW50U3RhdGVLZXkpO1xyXG5cdFx0Y29uc3QgY29tcG9uZW50U3RhdGUgPSBjb21wb25lbnRTdGF0ZUtleVxyXG5cdFx0XHQ/IFBPUC5nZXRTdGF0ZShjb21wb25lbnRTdGF0ZUtleSlcclxuXHRcdFx0OiB7fTtcclxuXHRcdGRvbS5wcmV2VHJlZSA9IGV4cGFuZGVkQ29tcG9uZW50LnJlbmRlcih7XHJcblx0XHRcdHN0YXRlOiBjb21wb25lbnRTdGF0ZSxcclxuXHRcdH0pO1xyXG5cdFx0ZG9tLnByZXZUcmVlLmNoaWxkcmVuID0gZG9tLmZpbHRlclZhbGlkUG9wT2JqZWN0cyhkb20ucHJldlRyZWUpO1xyXG5cdFx0ZG9tLnJlbmRlckZuID0gKCkgPT5cclxuXHRcdFx0ZXhwYW5kZWRDb21wb25lbnQucmVuZGVyKHtcclxuXHRcdFx0XHRzdGF0ZTogY29tcG9uZW50U3RhdGUsXHJcblx0XHRcdH0pO1xyXG5cdFx0ZG9tLnVwZGF0ZUVsZW1lbnQocm9vdCwgZG9tLnByZXZUcmVlKTtcclxuXHRcdHJvb3QuYWRkRXZlbnRMaXN0ZW5lcihjb25zdGFudHMucmVmcmVzaERPTURlZmF1bHRBY3Rpb24sICgpID0+IHtcclxuXHRcdFx0UE9QLnJlZnJlc2goKTtcclxuXHRcdH0pO1xyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQT1A7XHJcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUE9QIGZyb20gXCJzb25wb3AtanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b24gPSB7XHJcblx0cmVuZGVyOiAoY29tcG9uZW50KSA9PiB7XHJcblx0XHRjb25zdCB7IHByb3BzIH0gPSBjb21wb25lbnQ7XHJcblx0XHRjb25zdCBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWU7XHJcblx0XHRjb25zdCBidXR0b25MYWJlbCA9IHByb3BzLmxhYmVsO1xyXG5cdFx0Y29uc3QgY2xpY2tGbiA9IHByb3BzLm9uQ2xpY2s7XHJcblxyXG5cdFx0cmV0dXJuIFBPUC5jcmVhdGUoYGJ1dHRvbnxjbGFzcz0ke2NsYXNzTmFtZX1gLCB7IG9uY2xpY2s6IGNsaWNrRm4gfSwgW1xyXG5cdFx0XHRidXR0b25MYWJlbCxcclxuXHRcdF0pO1xyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XHJcbiIsImltcG9ydCBQT1AgZnJvbSBcInNvbnBvcC1qc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvdW50ZXIgPSB7XHJcblx0c2V0OiAoY29tcG9uZW50KSA9PiB7XHJcblx0XHRjb25zdCB7IHN0YXRlIH0gPSBjb21wb25lbnQ7XHJcblx0XHRzdGF0ZS5jb3VudGVyID0gMDtcclxuXHR9LFxyXG5cdHJlbmRlcjogKGNvbXBvbmVudCkgPT4ge1xyXG5cdFx0Y29uc3QgeyBzdGF0ZSB9ID0gY29tcG9uZW50O1xyXG5cclxuXHRcdHJldHVybiBQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPWNvdW50ZXItY29udGFpbmVyXCIsIFtcclxuXHRcdFx0UE9QLmNyZWF0ZShcImJ1dHRvbnxjbGFzcz1jb3VudGVyLWJ1dHRvblwiLCBbXCItXCJdLCB7XHJcblx0XHRcdFx0b25jbGljazogKCkgPT4gKHN0YXRlLmNvdW50ZXIgLT0gMSksXHJcblx0XHRcdH0pLFxyXG5cdFx0XHRgJHtzdGF0ZS5jb3VudGVyfWAsXHJcblx0XHRcdFBPUC5jcmVhdGUoXCJidXR0b258Y2xhc3M9Y291bnRlci1idXR0b25cIiwgW1wiK1wiXSwge1xyXG5cdFx0XHRcdG9uY2xpY2s6ICgpID0+IChzdGF0ZS5jb3VudGVyICs9IDEpLFxyXG5cdFx0XHR9KSxcclxuXHRcdF0pO1xyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3VudGVyO1xyXG4iLCJpbXBvcnQgUE9QIGZyb20gXCJzb25wb3AtanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGb290ZXIgPSB7XHJcblx0cmVuZGVyOiAoKSA9PiB7XHJcblx0XHRyZXR1cm4gUE9QLmNyZWF0ZShcImRpdnxjbGFzcz1mb290ZXItY29udGFpbmVyXCIsIFtcclxuXHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1mb290ZXItaXRlbVwiLCBbXHJcblx0XHRcdFx0XCJNYWRlIGJ5IFwiLFxyXG5cdFx0XHRcdFBPUC5jcmVhdGUoXHJcblx0XHRcdFx0XHRcImF8Y2xhc3M9ZXh0ZXJuYWwtbGlua1wiLFxyXG5cdFx0XHRcdFx0eyBocmVmOiBcImh0dHBzOi8vYWJpcmFtbmFpci5jb20vXCIsIHRhcmdldDogXCJfYmxhbmtcIiB9LFxyXG5cdFx0XHRcdFx0W1wibWVcIl1cclxuXHRcdFx0XHQpLFxyXG5cdFx0XHRdKSxcclxuXHRcdF0pO1xyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImltcG9ydCBQT1AgZnJvbSBcInNvbnBvcC1qc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhhbWJ1cmdlckljb24gPSB7XHJcblx0cmVuZGVyOiAoY29tcG9uZW50KSA9PiB7XHJcblx0XHRjb25zdCB7IHByb3BzIH0gPSBjb21wb25lbnQ7XHJcblx0XHRjb25zdCBvbkNsaWNrID0gcHJvcHMub25DbGljaztcclxuXHRcdGNvbnN0IGlzT3BlbiA9IHByb3BzLmlzT3BlbjtcclxuXHJcblx0XHRyZXR1cm4gUE9QLmNyZWF0ZShcclxuXHRcdFx0XCJkaXZ8Y2xhc3M9aGFtYnVyZ2VyLWljb24tY29udGFpbmVyXCIsXHJcblx0XHRcdHsgb25jbGljazogb25DbGljayB9LFxyXG5cdFx0XHRbXHJcblx0XHRcdFx0IWlzT3BlbiAmJiBQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPWhhbWJ1cmdlci1saW5lXCIpLFxyXG5cdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9aGFtYnVyZ2VyLWxpbmVcIiksXHJcblx0XHRcdFx0IWlzT3BlbiAmJiBQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPWhhbWJ1cmdlci1saW5lXCIpLFxyXG5cdFx0XHRdXHJcblx0XHQpO1xyXG5cdH0sXHJcbn07XHJcbiIsImltcG9ydCBQT1AgZnJvbSBcInNvbnBvcC1qc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlcm8gPSB7XHJcblx0cmVuZGVyOiAoKSA9PiB7XHJcblx0XHRyZXR1cm4gUE9QLmNyZWF0ZShcImRpdnxjbGFzcz1oZXJvLWNvbnRhaW5lclwiLCBbXHJcblx0XHRcdFBPUC51c2UoTmF2YmFyKSxcclxuXHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1oZXJvLXRpdGxlXCIsIFtcclxuXHRcdFx0XHRQT1AuY3JlYXRlKFwic3BhbnxjbGFzcz10aXRsZS1lbXBoYXNpc1wiLCBbXCJwb3AhIFwiXSksXHJcblx0XHRcdFx0XCJKU1wiLFxyXG5cdFx0XHRdKSxcclxuXHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1oZXJvLXN1YnRpdGxlXCIsIFtcImZyb250ZW5kIG1hZGUgZWFzeVwiXSksXHJcblx0XHRcdFBPUC5jcmVhdGUoXCJhfGNsYXNzPWxpbmstYnV0dG9uXCIsIHsgaHJlZjogXCIjIS9ndWlkZS1wYWdlXCIgfSwgW1xyXG5cdFx0XHRcdFBPUC51c2UoQnV0dG9uLCB7XHJcblx0XHRcdFx0XHRjbGFzc05hbWU6IFwiaGVyby1kZW1vLWJ1dHRvblwiLFxyXG5cdFx0XHRcdFx0bGFiZWw6IFwiU3RhcnQgTm93XCIsXHJcblx0XHRcdFx0fSksXHJcblx0XHRcdF0pLFxyXG5cdFx0XSk7XHJcblx0fSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm87XHJcbiIsImltcG9ydCBQT1AgZnJvbSBcInNvbnBvcC1qc1wiO1xyXG5pbXBvcnQgeyBIYW1idXJnZXJJY29uIH0gZnJvbSBcIi4vSGFtYnVyZ2VySWNvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdmJhciA9IHtcclxuXHRzZXQ6IChjb21wb25lbnQpID0+IHtcclxuXHRcdGNvbnN0IHsgc3RhdGUgfSA9IGNvbXBvbmVudDtcclxuXHRcdHN0YXRlLmhhbWJ1cmdlck1lbnVPcGVuID0gZmFsc2U7XHJcblx0fSxcclxuXHRyZW5kZXI6IChjb21wb25lbnQpID0+IHtcclxuXHRcdGNvbnN0IHsgcHJvcHMsIHN0YXRlIH0gPSBjb21wb25lbnQ7XHJcblx0XHRjb25zdCBuYXZCYXJUaXRsZSA9IHByb3BzLnRpdGxlO1xyXG5cdFx0Y29uc3QgbWVudUl0ZW1zID0gW1xyXG5cdFx0XHR7IHRleHQ6IFwiSG9tZVwiLCByb3V0ZTogXCIjIS9ob21lLXBhZ2VcIiB9LFxyXG5cdFx0XHR7IHRleHQ6IFwiR3VpZGVcIiwgcm91dGU6IFwiIyEvZ3VpZGUtcGFnZVwiIH0sXHJcblx0XHRdO1xyXG5cdFx0Y29uc3QgY3VyclBhZ2UgPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcclxuXHRcdHJldHVybiBQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPW5hdmJhci1jb250YWluZXJcIiwgW1xyXG5cdFx0XHRQT1AudXNlKEhhbWJ1cmdlckljb24sIHtcclxuXHRcdFx0XHRvbkNsaWNrOiAoKSA9PiAoc3RhdGUuaGFtYnVyZ2VyTWVudU9wZW4gPSAhc3RhdGUuaGFtYnVyZ2VyTWVudU9wZW4pLFxyXG5cdFx0XHRcdGlzT3Blbjogc3RhdGUuaGFtYnVyZ2VyTWVudU9wZW4sXHJcblx0XHRcdH0pLFxyXG5cdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPW5hdmJhci10aXRsZVwiLCBbbmF2QmFyVGl0bGVdKSxcclxuXHRcdFx0c3RhdGUuaGFtYnVyZ2VyTWVudU9wZW4gJiZcclxuXHRcdFx0XHRQT1AuY3JlYXRlKFxyXG5cdFx0XHRcdFx0XCJkaXZ8Y2xhc3M9aGFtYnVyZ2VyLW5hdmJhci1tZW51XCIsXHJcblx0XHRcdFx0XHRtZW51SXRlbXMubWFwKChpdGVtKSA9PlxyXG5cdFx0XHRcdFx0XHRQT1AuY3JlYXRlKFxyXG5cdFx0XHRcdFx0XHRcdFwiYXxjbGFzcz1oYW1idXJnZXItbWVudS1pdGVtXCIsXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0aHJlZjogaXRlbS5yb3V0ZSxcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFtpdGVtLnRleHRdXHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHQpLFxyXG5cdFx0XHRQT1AuY3JlYXRlKFxyXG5cdFx0XHRcdFwiZGl2fGNsYXNzPW5hdmJhci1tZW51XCIsXHJcblx0XHRcdFx0bWVudUl0ZW1zLm1hcCgoaXRlbSkgPT5cclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXHJcblx0XHRcdFx0XHRcdGBzcGFufGNsYXNzPW5hdmJhci1tZW51LWl0ZW0gJHtcclxuXHRcdFx0XHRcdFx0XHRjdXJyUGFnZSA9PT0gaXRlbS5yb3V0ZSA/IFwiIGN1cnJlbnQtcGFnZVwiIDogXCJcIlxyXG5cdFx0XHRcdFx0XHR9YCxcclxuXHRcdFx0XHRcdFx0W1xyXG5cdFx0XHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJhfGNsYXNzPW5hdmJhci1saW5rXCIsIHsgaHJlZjogaXRlbS5yb3V0ZSB9LCBbXHJcblx0XHRcdFx0XHRcdFx0XHRpdGVtLnRleHQsXHJcblx0XHRcdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHQpXHJcblx0XHRcdCksXHJcblx0XHRdKTtcclxuXHR9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iLCJpbXBvcnQgUE9QIGZyb20gXCJzb25wb3AtanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSZWRCb3ggPSB7XHJcblx0c2V0OiAoY29tcG9uZW50KSA9PiB7XHJcblx0XHRjb25zdCB7IHN0YXRlIH0gPSBjb21wb25lbnQ7XHJcblx0XHRzdGF0ZS5zaG93Qm94ID0gdHJ1ZTtcclxuXHR9LFxyXG5cdHJlbmRlcjogKGNvbXBvbmVudCkgPT4ge1xyXG5cdFx0Y29uc3QgeyBzdGF0ZSB9ID0gY29tcG9uZW50O1xyXG5cclxuXHRcdHJldHVybiBQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPWJveC1jb250YWluZXJcIiwgW1xyXG5cdFx0XHRQT1AuY3JlYXRlKFxyXG5cdFx0XHRcdFwiYnV0dG9ufGNsYXNzPWJveC1idXR0b25cIixcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRvbmNsaWNrOiAoKSA9PiAoc3RhdGUuc2hvd0JveCA9ICFzdGF0ZS5zaG93Qm94KSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFtzdGF0ZS5zaG93Qm94ID8gXCJIaWRlXCIgOiBcIlNob3dcIl1cclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUuc2hvd0JveCAmJiBQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPWJveC1kaXNwbGF5XCIpLFxyXG5cdFx0XSk7XHJcblx0fSxcclxufTtcclxuIiwiaW1wb3J0IFBPUCBmcm9tIFwic29ucG9wLWpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2lkZU5hdmJhciA9IHtcclxuXHRzY3JvbGxWaWV3OiAoZWxlbWVudElkKSA9PiB7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQpLnNjcm9sbEludG9WaWV3KHsgYmxvY2s6IFwiY2VudGVyXCIgfSk7XHJcblx0fSxcclxuXHRyZW5kZXI6ICgpID0+IHtcclxuXHRcdHJldHVybiBQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNpZGUtbmF2YmFyXCIsIFtcclxuXHRcdFx0XCJHdWlkZVwiLFxyXG5cdFx0XHRQT1AuY3JlYXRlKFwidWx8Y2xhc3M9bmF2YmFyLXBhZ2Utc2VjdGlvbi1vdmVyXCIsIFtcclxuXHRcdFx0XHRQT1AuY3JlYXRlKFxyXG5cdFx0XHRcdFx0XCJsaXxjbGFzcz1uYXZiYXItcGFnZS1zZWN0aW9uLWJ1bGxldFwiLFxyXG5cdFx0XHRcdFx0eyBvbmNsaWNrOiAoKSA9PiBTaWRlTmF2YmFyLnNjcm9sbFZpZXcoXCJpbnRyb1wiKSB9LFxyXG5cdFx0XHRcdFx0W1wiSW50cm9cIl1cclxuXHRcdFx0XHQpLFxyXG5cdFx0XHRcdFBPUC5jcmVhdGUoXCJ1bHxjbGFzcz1uYXZiYXItcGFnZS1zZWN0aW9uLXN1YlwiLCBbXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFxyXG5cdFx0XHRcdFx0XHRcImxpfGNsYXNzPW5hdmJhci1wYWdlLXNlY3Rpb24tYnVsbGV0XCIsXHJcblx0XHRcdFx0XHRcdHsgb25jbGljazogKCkgPT4gU2lkZU5hdmJhci5zY3JvbGxWaWV3KFwiY2RuXCIpIH0sXHJcblx0XHRcdFx0XHRcdFtcImNkblwiXVxyXG5cdFx0XHRcdFx0KSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXHJcblx0XHRcdFx0XHRcdFwibGl8Y2xhc3M9bmF2YmFyLXBhZ2Utc2VjdGlvbi1idWxsZXRcIixcclxuXHRcdFx0XHRcdFx0eyBvbmNsaWNrOiAoKSA9PiBTaWRlTmF2YmFyLnNjcm9sbFZpZXcoXCJucG1cIikgfSxcclxuXHRcdFx0XHRcdFx0W1wibnBtXCJdXHJcblx0XHRcdFx0XHQpLFxyXG5cdFx0XHRcdF0pLFxyXG5cdFx0XHRdKSxcclxuXHRcdFx0UE9QLmNyZWF0ZShcInVsfGNsYXNzPW5hdmJhci1wYWdlLXNlY3Rpb24tb3ZlclwiLCBbXHJcblx0XHRcdFx0UE9QLmNyZWF0ZShcclxuXHRcdFx0XHRcdFwibGl8Y2xhc3M9bmF2YmFyLXBhZ2Utc2VjdGlvbi1idWxsZXRcIixcclxuXHRcdFx0XHRcdHsgb25jbGljazogKCkgPT4gU2lkZU5hdmJhci5zY3JvbGxWaWV3KFwiY29tcG9uZW50c1wiKSB9LFxyXG5cdFx0XHRcdFx0W1wiQ29tcG9uZW50c1wiXVxyXG5cdFx0XHRcdCksXHJcblx0XHRcdFx0UE9QLmNyZWF0ZShcInVsfGNsYXNzPW5hdmJhci1wYWdlLXNlY3Rpb24tc3ViXCIsIFtcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXHJcblx0XHRcdFx0XHRcdFwibGl8Y2xhc3M9bmF2YmFyLXBhZ2Utc2VjdGlvbi1idWxsZXRcIixcclxuXHRcdFx0XHRcdFx0eyBvbmNsaWNrOiAoKSA9PiBTaWRlTmF2YmFyLnNjcm9sbFZpZXcoXCJyZW5kZXJpbmctaHRtbFwiKSB9LFxyXG5cdFx0XHRcdFx0XHRbXCJSZW5kZXJpbmcgSFRNTFwiXVxyXG5cdFx0XHRcdFx0KSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXHJcblx0XHRcdFx0XHRcdFwibGl8Y2xhc3M9bmF2YmFyLXBhZ2Utc2VjdGlvbi1idWxsZXRcIixcclxuXHRcdFx0XHRcdFx0eyBvbmNsaWNrOiAoKSA9PiBTaWRlTmF2YmFyLnNjcm9sbFZpZXcoXCJyZXVzaW5nLWNvbXBvbmVudHNcIikgfSxcclxuXHRcdFx0XHRcdFx0W1wiUmV1c2luZyBDb21wb25lbnRzXCJdXHJcblx0XHRcdFx0XHQpLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcclxuXHRcdFx0XHRcdFx0XCJsaXxjbGFzcz1uYXZiYXItcGFnZS1zZWN0aW9uLWJ1bGxldFwiLFxyXG5cdFx0XHRcdFx0XHR7IG9uY2xpY2s6ICgpID0+IFNpZGVOYXZiYXIuc2Nyb2xsVmlldyhcImFyZ3VtZW50LW9yZGVyaW5nXCIpIH0sXHJcblx0XHRcdFx0XHRcdFtcIkFyZ3VtZW50IE9yZGVyaW5nXCJdXHJcblx0XHRcdFx0XHQpLFxyXG5cdFx0XHRcdF0pLFxyXG5cdFx0XHRdKSxcclxuXHRcdFx0UE9QLmNyZWF0ZShcInVsfGNsYXNzPW5hdmJhci1wYWdlLXNlY3Rpb24tb3ZlclwiLCBbXHJcblx0XHRcdFx0UE9QLmNyZWF0ZShcclxuXHRcdFx0XHRcdFwibGl8Y2xhc3M9bmF2YmFyLXBhZ2Utc2VjdGlvbi1idWxsZXRcIixcclxuXHRcdFx0XHRcdHsgb25jbGljazogKCkgPT4gU2lkZU5hdmJhci5zY3JvbGxWaWV3KFwic3RhdGVcIikgfSxcclxuXHRcdFx0XHRcdFtcIlN0YXRlXCJdXHJcblx0XHRcdFx0KSxcclxuXHRcdFx0XSksXHJcblx0XHRcdFBPUC5jcmVhdGUoXCJ1bHxjbGFzcz1uYXZiYXItcGFnZS1zZWN0aW9uLW92ZXJcIiwgW1xyXG5cdFx0XHRcdFBPUC5jcmVhdGUoXHJcblx0XHRcdFx0XHRcImxpfGNsYXNzPW5hdmJhci1wYWdlLXNlY3Rpb24tYnVsbGV0XCIsXHJcblx0XHRcdFx0XHR7IG9uY2xpY2s6ICgpID0+IFNpZGVOYXZiYXIuc2Nyb2xsVmlldyhcInJvb3Qtc2VjdGlvblwiKSB9LFxyXG5cdFx0XHRcdFx0W1wiUm9vdFwiXVxyXG5cdFx0XHRcdCksXHJcblx0XHRcdF0pLFxyXG5cdFx0XHRQT1AuY3JlYXRlKFwidWx8Y2xhc3M9bmF2YmFyLXBhZ2Utc2VjdGlvbi1vdmVyXCIsIFtcclxuXHRcdFx0XHRQT1AuY3JlYXRlKFxyXG5cdFx0XHRcdFx0XCJsaXxjbGFzcz1uYXZiYXItcGFnZS1zZWN0aW9uLWJ1bGxldFwiLFxyXG5cdFx0XHRcdFx0eyBvbmNsaWNrOiAoKSA9PiBTaWRlTmF2YmFyLnNjcm9sbFZpZXcoXCJyb3V0aW5nXCIpIH0sXHJcblx0XHRcdFx0XHRbXCJSb3V0aW5nXCJdXHJcblx0XHRcdFx0KSxcclxuXHRcdFx0XSksXHJcblx0XHRcdFBPUC5jcmVhdGUoXCJ1bHxjbGFzcz1uYXZiYXItcGFnZS1zZWN0aW9uLW92ZXJcIiwgW1xyXG5cdFx0XHRcdFBPUC5jcmVhdGUoXHJcblx0XHRcdFx0XHRcImxpfGNsYXNzPW5hdmJhci1wYWdlLXNlY3Rpb24tYnVsbGV0XCIsXHJcblx0XHRcdFx0XHR7IG9uY2xpY2s6ICgpID0+IFNpZGVOYXZiYXIuc2Nyb2xsVmlldyhcInRpcHNcIikgfSxcclxuXHRcdFx0XHRcdFtcIlRpcHNcIl1cclxuXHRcdFx0XHQpLFxyXG5cdFx0XHRdKSxcclxuXHRcdF0pO1xyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlTmF2YmFyO1xyXG4iLCJpbXBvcnQgUE9QIGZyb20gXCJzb25wb3AtanNcIjtcclxuXHJcbmZ1bmN0aW9uIHN0b3B3YXRjaE1vZGVsKCkge1xyXG5cdHJldHVybiB7XHJcblx0XHRpbnRlcnZhbDogbnVsbCxcclxuXHRcdHNlY29uZHM6IDAsXHJcblx0XHRpc1BhdXNlZDogdHJ1ZSxcclxuXHR9O1xyXG59XHJcblxyXG5jb25zdCBhY3Rpb25zID0ge1xyXG5cdGluY3JlbWVudChtb2RlbCkge1xyXG5cdFx0bW9kZWwuc2Vjb25kcysrO1xyXG5cdFx0UE9QLnJlZnJlc2goKTtcclxuXHR9LFxyXG5cdHN0YXJ0KG1vZGVsKSB7XHJcblx0XHRtb2RlbC5pbnRlcnZhbCA9IHNldEludGVydmFsKGFjdGlvbnMuaW5jcmVtZW50LCAxMDAwLCBtb2RlbCk7XHJcblx0fSxcclxuXHRzdG9wKG1vZGVsKSB7XHJcblx0XHRtb2RlbC5pbnRlcnZhbCA9IGNsZWFySW50ZXJ2YWwobW9kZWwuaW50ZXJ2YWwpO1xyXG5cdH0sXHJcblx0cmVzZXQobW9kZWwpIHtcclxuXHRcdG1vZGVsLnNlY29uZHMgPSAwO1xyXG5cdH0sXHJcblx0dG9nZ2xlKG1vZGVsKSB7XHJcblx0XHRtb2RlbC5pc1BhdXNlZCA/IGFjdGlvbnMuc3RhcnQobW9kZWwpIDogYWN0aW9ucy5zdG9wKG1vZGVsKTtcclxuXHRcdG1vZGVsLmlzUGF1c2VkID0gIW1vZGVsLmlzUGF1c2VkO1xyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgU3RvcHdhdGNoID0ge1xyXG5cdHNldChjb21wb25lbnQpIHtcclxuXHRcdGNvbnN0IHsgc3RhdGUgfSA9IGNvbXBvbmVudDtcclxuXHRcdHN0YXRlLm1vZGVsID0gc3RvcHdhdGNoTW9kZWwoKTtcclxuXHR9LFxyXG5cdHJlbmRlcihjb21wb25lbnQpIHtcclxuXHRcdGNvbnN0IHsgc3RhdGUgfSA9IGNvbXBvbmVudDtcclxuXHJcblx0XHRyZXR1cm4gUE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zdG9wd2F0Y2gtY29udGFpbmVyXCIsIFtcclxuXHRcdFx0UE9QLmNyZWF0ZShcInNwYW58Y2xhc3M9c3RvcHdhdGNoLXNwYW5cIiwgW2Ake3N0YXRlLm1vZGVsLnNlY29uZHN9YF0pLFxyXG5cdFx0XHRQT1AuY3JlYXRlKFxyXG5cdFx0XHRcdFwiYnV0dG9ufGNsYXNzPXN0b3B3YXRjaC1idXR0b25cIixcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRvbmNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGFjdGlvbnMudG9nZ2xlKHN0YXRlLm1vZGVsKTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRbc3RhdGUubW9kZWwuaXNQYXVzZWQgPyBcIlN0YXJ0XCIgOiBcIlBhdXNlXCJdXHJcblx0XHRcdCksXHJcblx0XHRcdFBPUC5jcmVhdGUoXHJcblx0XHRcdFx0XCJidXR0b258Y2xhc3M9c3RvcHdhdGNoLWJ1dHRvblwiLFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG9uY2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0YWN0aW9ucy5yZXNldChzdGF0ZS5tb2RlbCk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0W1wiUmVzZXRcIl1cclxuXHRcdFx0KSxcclxuXHRcdF0pO1xyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9wd2F0Y2g7XHJcbiIsImltcG9ydCBQT1AgZnJvbSBcInNvbnBvcC1qc1wiO1xyXG5pbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5jc3NcIjtcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vcGFnZXMvSG9tZVwiO1xyXG5pbXBvcnQgR3VpZGUgZnJvbSBcIi4vcGFnZXMvR3VpZGVcIjtcclxuXHJcbmNvbnN0IHJvdXRlcyA9IHtcclxuXHRcIi9ob21lLXBhZ2VcIjogSG9tZSxcclxuXHRcIi9ndWlkZS1wYWdlXCI6IEd1aWRlLFxyXG59O1xyXG5cclxuUE9QLnJvb3QoSG9tZSwgeyByb290TmFtZTogXCJwb3AtYXBwLXJvb3RcIiwgcG9wUm91dGVzOiByb3V0ZXMgfSk7IC8vIGVudHJ5IHBvaW50IGZvciBwb3AhIGFwcCB3aXRoIGN1c3RvbSByb290IG5hbWVcclxuIiwiaW1wb3J0IFBPUCBmcm9tIFwic29ucG9wLWpzXCI7XHJcbmltcG9ydCBDb3VudGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0NvdW50ZXJcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJcIjtcclxuaW1wb3J0IHsgUmVkQm94IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVkQm94XCI7XHJcbmltcG9ydCBTaWRlTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL1NpZGVOYXZiYXJcIjtcclxuaW1wb3J0IFN0b3B3YXRjaCBmcm9tIFwiLi4vY29tcG9uZW50cy9TdG9wd2F0Y2hcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHdWlkZSA9IHtcclxuXHRyZW5kZXI6ICgpID0+IHtcclxuXHRcdHJldHVybiBQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPWd1aWRlLXBhZ2UtY29udGFpbmVyXCIsIFtcclxuXHRcdFx0UE9QLnVzZShOYXZiYXIsIHsgdGl0bGU6IFwiR3VpZGVcIiB9KSxcclxuXHRcdFx0UE9QLnVzZShTaWRlTmF2YmFyLCB7IHBhZ2U6IFwiZ3VpZGUtcGFnZVwiIH0pLFxyXG5cdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXBhZ2Utc2VjdGlvbnNcIiwgW1xyXG5cdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvblwiLCBbXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGlkPWludHJvfGNsYXNzPXNlY3Rpb24tdGl0bGVcIiwgW1wiSW50cm9cIl0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uLWNvbnRlbnRcIiwgW1xyXG5cdFx0XHRcdFx0XHRcInBvcCEgSlMgaXMgYSBjb21wYWN0IGFuZCBlYXN5IHRvIGxlYXJuIGZyYW1ld29yayB0aGF0IGNhbiBiZSB1c2VkIHRvIG1ha2UgYSBmcm9udGVuZCBpbnRlcmZhY2UgdmVyeSBxdWlja2x5LiBJdCBjb21lcyBlcXVpcHBlZCB3aXRoIHRoZSBjYXBhYmlsaXR5IG9mIG1ha2luZyBjb21wb25lbnRzIGNvbnRhaW5pbmcgc3RhdGUgYW5kIGxpZmVjeWNsZSBtZXRob2RzLCBhcHBsaWNhdGlvbiBwYWdlIHJvdXRpbmcgYW5kIHJlYWN0aW5nIHRvIGNoYW5nZXMgaW4gc3RhdGUuXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1jb250ZW50XCIsIFtcclxuXHRcdFx0XHRcdFx0XCJUaGlzIHdlYnNpdGUgYW5kIGFsbCBpdHMgY29tcG9uZW50cyBhcmUgcG93ZXJlZCBieSBwb3AhIEpTLiAgQWZ0ZXIgcmVzZWFyY2hpbmcgYWJvdXQgdmlydHVhbCBET00gZHVyaW5nIGFuIGludGVybnNoaXAgcm9sZSBhcyBhIGZyb250ZW5kIGRldmVsb3BlciwgSSB0aG91Z2h0IGl0IHdvdWxkIGJlIGZ1biB0byBtYWtlIG15IG93biBmcmFtZXdvcmsgaW5zcGlyZWQgYnkgb25lIEkgdXNlZCBkdXJpbmcgbXkgd29yayB0ZXJtIC0gTWl0aHJpbCBKUy4gVGhpcyBwcm9qZWN0IGlzIG9ubHkgYSBsaXR0bGUgb3ZlciAzNTAgc2xvYyBhbmQgNi4za0IgaW4gc2l6ZSAoMi4ya0IgZ3ppcHBlZCkuIElmIHlvdSBmaW5kIHRoaXMgcHJvamVjdCBpbnRlcmVzdGluZywgY29uc2lkZXIgZ2l2aW5nIGl0IGEgc3RhciBvbiBcIixcclxuXHRcdFx0XHRcdFx0UE9QLmNyZWF0ZShcclxuXHRcdFx0XHRcdFx0XHRcImF8Y2xhc3M9ZXh0ZXJuYWwtbGlua1wiLFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL2FiaXJhbXJuYWlyL3BvcC1qc1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0OiBcIl9ibGFua1wiLFxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0W1wiR2l0SHViXCJdXHJcblx0XHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHRcdFwiLlwiLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGlkPWNkbnxjbGFzcz1zZWN0aW9uLXN1YnRpdGxlXCIsIFtcImNkblwiXSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHRcdFwiVGhlIGVhc2llc3Qgd2F5IHRvIHNlZSB3aGF0IHBvcCEgSlMgY2FuIGRvIGlzIHRvIHVzZSBzb21lIEhUTUwgYm9pbGVycGxhdGUgYW5kIGNvcHkgdGhlIGxpbmsgYmVsb3cgaW50byBhIEhUTUwgc2NyaXB0IHRhZy4gWW91IGNhbiB0aGVuIGFjY2VzcyBwb3AhIEpTIHdpdGhpbiBhbm90aGVyIHNldCBvZiBzY3JpcHQgdGFncy5cIixcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcInByZXxjbGFzcz1jb2RlLXNuaXBwZXRcIiwgW1xyXG5cdFx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiY29kZXxjbGFzcz1jb2RlLWJsb2NrXCIsIFtcclxuXHRcdFx0XHRcdFx0XHRgaHR0cHM6Ly91bnBrZy5jb20vc29ucG9wLWpzL3BvcC5taW4uanNgLFxyXG5cdFx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uLWNvbnRlbnRcIiwgW1xyXG5cdFx0XHRcdFx0XHRcIkEgQ29kZVBlbiB1c2luZyBwb3AhIEpTIGxpa2UgdGhpcyBpcyBhdmFpbGFibGUgXCIsXHJcblx0XHRcdFx0XHRcdFBPUC5jcmVhdGUoXHJcblx0XHRcdFx0XHRcdFx0XCJhfGNsYXNzPWV4dGVybmFsLWxpbmtcIixcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRocmVmOiBcImh0dHBzOi8vY29kZXBlbi5pby9hYmlyYW1ybmFpci9wZW4vUndNV0tFT1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0OiBcIl9ibGFua1wiLFxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0W1wiaGVyZVwiXVxyXG5cdFx0XHRcdFx0XHQpLFxyXG5cdFx0XHRcdFx0XHRcIi5cIixcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxpZD1ucG18Y2xhc3M9c2VjdGlvbi1zdWJ0aXRsZVwiLCBbXCJucG1cIl0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uLWNvbnRlbnRcIiwgW1xyXG5cdFx0XHRcdFx0XHRcIkZvciBjb21wbGV4IHByb2plY3RzLCB5b3UgY2FuIGluc3RhbGwgcG9wISBKUyB2aWEgbnBtIGFuZCBjb25maWd1cmUgYSBwcm9qZWN0IHdpdGggYSBidW5kbGVyIG9mIHlvdXIgY2hvaWNlLiBBbHRlcm5hdGl2ZWx5LCB5b3UgY2FuIHVzZSB0aGUgXCIsXHJcblx0XHRcdFx0XHRcdFBPUC5jcmVhdGUoXHJcblx0XHRcdFx0XHRcdFx0XCJhfGNsYXNzPWV4dGVybmFsLWxpbmtcIixcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRocmVmOiBcImh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL2NyZWF0ZS1wb3AtYXBwXCIsXHJcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXQ6IFwiX2JsYW5rXCIsXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRbXCJjcmVhdGUtcG9wLWFwcFwiXVxyXG5cdFx0XHRcdFx0XHQpLFxyXG5cdFx0XHRcdFx0XHRcIiBzY3JpcHQgd2hpY2ggdXNlcyBXZWJwYWNrIHRvIGNyZWF0ZSBhIHNhbXBsZSBhcHAuIFRvIHVzZSBwb3AhIEpTLCBqdXN0IGltcG9ydCBQT1AuXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJwcmV8Y2xhc3M9Y29kZS1zbmlwcGV0XCIsIFtcclxuXHRcdFx0XHRcdFx0UE9QLmNyZWF0ZShcImNvZGV8Y2xhc3M9Y29kZS1ibG9ja1wiLCBbXHJcblx0XHRcdFx0XHRcdFx0YC8vIEluIHRoZSB0ZXJtaW5hbFxcbm5wbSBpbnN0YWxsIHNvbnBvcC1qc1wiXFxuXFxuLy8gSW4gbmV3IGZpbGVzXFxuaW1wb3J0IFBPUCBmcm9tIFwic29ucG9wLWpzXCI7YCxcclxuXHRcdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRdKSxcclxuXHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb25cIiwgW1xyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxpZD1jb21wb25lbnRzfGNsYXNzPXNlY3Rpb24tdGl0bGVcIiwgW1wiQ29tcG9uZW50c1wiXSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHRcdFwiTGlrZSBtb3N0IGZyYW1ld29ya3MsIHBvcCEgSlMgdXNlcyBhIGNvbXBvbmVudCBiYXNlZCBhcHByb2FjaC4gQ29tcG9uZW50cyBhcmUganVzdCByZXVzYWJsZSBjaHVua3Mgb2YgSFRNTCB0aGF0IGhhdmUgdGhlaXIgb3duIHN0YXRlIGFuZCBwcm9wZXJ0aWVzLlwiLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGlkPXJlbmRlcmluZy1odG1sfGNsYXNzPXNlY3Rpb24tc3VidGl0bGVcIiwgW1xyXG5cdFx0XHRcdFx0XHRcIlJlbmRlclwiLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHRcdFwicG9wISBjb21wb25lbnRzIGFyZSBvYmplY3RzIHRoYXQgY29udGFpbiBhIHJlbmRlciBmdW5jdGlvbi4gVGhpcyByZW5kZXIgZnVuY3Rpb24gdGVsbHMgcG9wISBKUyB3aGF0IG5lZWRzIHRvIGJlIGRpc3BsYXllZCBvbiB0aGUgcGFnZS5cIixcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uLWNvbnRlbnRcIiwgW1xyXG5cdFx0XHRcdFx0XHRcIkEgcmVuZGVyIGZ1bmN0aW9uIGNhbiByZXR1cm4ganVzdCBIVE1MIG9yIGFub3RoZXIgcG9wISBjb21wb25lbnQuXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJwcmV8Y2xhc3M9Y29kZS1zbmlwcGV0XCIsIFtcclxuXHRcdFx0XHRcdFx0UE9QLmNyZWF0ZShcImNvZGV8Y2xhc3M9Y29kZS1ibG9ja1wiLCBbXHJcblx0XHRcdFx0XHRcdFx0YGV4cG9ydCBjb25zdCBwb3BDb21wb25lbnQgPSB7XFxuICAgcmVuZGVyOiAoKSA9PiB7XFxuICAgICAgICByZXR1cm4gUE9QLmNyZWF0ZSgpL1BPUC51c2UoKTtcXG4gICB9XFxufWAsXHJcblx0XHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHRcdFwiQSBwb3AhIGNvbXBvbmVudCBkb2VzIG5vdCBoYXZlIHRvIGJlIGFuIG9iamVjdC4gSXQgY2FuIGFsc28gYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gb2JqZWN0LlwiLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwicHJlfGNsYXNzPWNvZGUtc25pcHBldFwiLCBbXHJcblx0XHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJjb2RlfGNsYXNzPWNvZGUtYmxvY2tcIiwgW1xyXG5cdFx0XHRcdFx0XHRcdGBmdW5jdGlvbiBwb3BDb21wb25lbnQgKCkge1xcbiAgIHJldHVybiB7IFxcbiAgICAgIHJlbmRlcjogKCkgPT4ge1xcbiAgICAgICAgcmV0dXJuIFBPUC5jcmVhdGUoKS9QT1AudXNlKCk7XFxuICAgICAgfVxcbiAgIH1cXG59YCxcclxuXHRcdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8aWQ9cmVuZGVyaW5nLWh0bWx8Y2xhc3M9c2VjdGlvbi1zdWJ0aXRsZVwiLCBbXHJcblx0XHRcdFx0XHRcdFwiQ3JlYXRlIEhUTUxcIixcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uLWNvbnRlbnRcIiwgW1xyXG5cdFx0XHRcdFx0XHRcIldpdGggdGhlIGNyZWF0ZSgpIGZ1bmN0aW9uLCB5b3UgY2FuIGdlbmVyYXRlIEhUTUwuIFRoZSBmaXJzdCBhcmd1bWVudCBhY2NlcHRzIGFueSB2YWxpZCBIVE1MIHRhZy5cIixcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcInByZXxjbGFzcz1jb2RlLXNuaXBwZXRcIiwgW1xyXG5cdFx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiY29kZXxjbGFzcz1jb2RlLWJsb2NrXCIsIFtcclxuXHRcdFx0XHRcdFx0XHRgUE9QLmNyZWF0ZShcImRpdlwiLCBbXCJIZWxsbyBXb3JsZFwiXSk7XFxuXFxuLy8gUmVuZGVyZWRcXG48ZGl2PlxcbiAgICBIZWxsbyBXb3JsZFxcbjwvZGl2PmAsXHJcblx0XHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHRcdFwiQ2xhc3MgYW5kIGlkIGZvciB0aGUgZWxlbWVudCBjYW4gYWxzbyBiZSBwYXNzZWQgaW4gYnkgdXNpbmcgc3RyaW5ncyBjbGFzcz0gYW5kIGlkPSBzZXBhcmF0ZWQgYnkgfC4gVGhlIG9yZGVyIG9mIGNsYXNzIGFuZCBpZCBkb2VzIG5vdCBtYXR0ZXIsIGJ1dCB0aGUgdGFnIG11c3QgYWx3YXlzIGNvbWUgZmlyc3QuXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJwcmV8Y2xhc3M9Y29kZS1zbmlwcGV0XCIsIFtcclxuXHRcdFx0XHRcdFx0UE9QLmNyZWF0ZShcImNvZGV8Y2xhc3M9Y29kZS1ibG9ja1wiLCBbXHJcblx0XHRcdFx0XHRcdFx0YFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9aGVsbG98aWQ9d29ybGRcIiwgW1wiSGVsbG8gV29ybGRcIl0pO1xcblxcbi8vIFJlbmRlcmVkXFxuPGRpdiBpZD1cIndvcmxkXCIgY2xhc3M9XCJoZWxsb1wiPlxcbiAgICBIZWxsbyBXb3JsZFxcbjwvZGl2PmAsXHJcblx0XHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGlkPXJldXNpbmctY29tcG9uZW50c3xjbGFzcz1zZWN0aW9uLXN1YnRpdGxlXCIsIFtcclxuXHRcdFx0XHRcdFx0XCJVc2UgQ29tcG9uZW50c1wiLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHRcdFwiV2l0aCB0aGUgdXNlKCkgZnVuY3Rpb24sIHlvdSBjYW4gdXRpbGl6ZSBpbXBvcnRlZCBwb3AhIGNvbXBvbmVudHMgYW5kIGNvbXBvbmVudCBzdGF0ZS5cIixcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcInByZXxjbGFzcz1jb2RlLXNuaXBwZXRcIiwgW1xyXG5cdFx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiY29kZXxjbGFzcz1jb2RlLWJsb2NrXCIsIFtcclxuXHRcdFx0XHRcdFx0XHRgaW1wb3J0IGNvbXBvbmVudCBmcm9tIFwiL3BhdGhcIjtcXG5cXG5QT1AudXNlKGNvbXBvbmVudCwgcHJvcHMsIGNoaWxkcmVuKTtgLFxyXG5cdFx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxpZD1hcmd1bWVudC1vcmRlcmluZ3xjbGFzcz1zZWN0aW9uLXN1YnRpdGxlXCIsIFtcclxuXHRcdFx0XHRcdFx0XCJBcmd1bWVudCBPcmRlcmluZ1wiLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHRcdFwiV2l0aCB0aGUgY3JlYXRlKCkgYW5kIHVzZSgpIGZ1bmN0aW9ucywgdGhlIG9yZGVyIGRvZXMgbm90IG1hdHRlciB3aGVuIHByb3ZpZGluZyBwcm9wcyBhbmQgY2hpbGRyZW4uIEl0IG9ubHkgbWF0dGVycyB0aGF0IHRoZSBwcm9wcyBhcmUgaW4gYW4gb2JqZWN0IGFuZCBjaGlsZHJlbiBhcmUgaW4gYW4gYXJyYXkuXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1jb250ZW50XCIsIFtcclxuXHRcdFx0XHRcdFx0XCJDaGlsZHJlbiBjYW4gZWl0aGVyIGJlIHN0cmluZ3Mgd2hpY2ggZ2V0IHRyYW5zZm9ybWVkIHRvIEhUTUwgdGV4dCBub2RlcyBvciBwb3AgY29tcG9uZW50cyB3cmFwcGVkIGJ5IHRoZSBjcmVhdGUoKSBvciB1c2UoKSBmdW5jdGlvbnMuXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1jb250ZW50XCIsIFtcclxuXHRcdFx0XHRcdFx0XCJUaGUgb3JkZXIgdGhhdCB0aGUgY2hpbGRyZW4gYXJlIHBhc3NlZCBpbnRvIHRoZSBhcnJheSBmcm9tIGxlZnQgdG8gcmlnaHQgaXMgaG93IHRoZXkgYXJlIHJlbmRlcmVkIHRvcCB0byBib3R0b20uXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJwcmV8Y2xhc3M9Y29kZS1zbmlwcGV0XCIsIFtcclxuXHRcdFx0XHRcdFx0UE9QLmNyZWF0ZShcImNvZGV8Y2xhc3M9Y29kZS1ibG9ja1wiLCBbXHJcblx0XHRcdFx0XHRcdFx0YFBPUC5jcmVhdGUoXCJkaXZcIiwgW1BPUC5jcmVhdGUoXCJzcGFuXCIpLCBQT1AuY3JlYXRlKFwiYnV0dG9uXCIsIFwiQ2xpY2sgTWVcIildKTtcXG5cXG4vLyBSZW5kZXJlZFxcbjxkaXY+XFxuICAgIDxzcGFuPlxcbiAgICAgICAgPGJ1dHRvbj5cXG4gICAgICAgICAgICBDbGljayBNZVxcbiAgICAgICAgPC9idXR0b24+XFxuICAgIDwvc3Bhbj5cXG48L2Rpdj5gLFxyXG5cdFx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvblwiLCBbXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGlkPXN0YXRlfGNsYXNzPXNlY3Rpb24tdGl0bGVcIiwgW1wiU3RhdGVcIl0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uLWNvbnRlbnRcIiwgW1xyXG5cdFx0XHRcdFx0XHRcIkV2ZXJ5IGluc3RhbmNlIG9mIGEgcG9wISBjb21wb25lbnQsIGV2ZW4gaWRlbnRpY2FsIG9uZXMsIGhhcyBpdHMgb3duIHN0YXRlIGFmdGVyIGJlaW5nIHJlbmRlcmVkIHdpdGggdGhlIHVzZSgpIGZ1bmN0aW9uLlwiLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGlkPXJlbmRlcmluZy1odG1sfGNsYXNzPXNlY3Rpb24tc3VidGl0bGVcIiwgW1wiU2V0XCJdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1jb250ZW50XCIsIFtcclxuXHRcdFx0XHRcdFx0XCJUbyBpbml0aWFsaXplIHN0YXRlIHZhcmlhYmxlcywgYSBwb3AhIGNvbXBvbmVudCBtdXN0IGhhdmUgYSBzZXQoKSBmdW5jdGlvbi4gVGhlIHNldCgpIGZ1bmN0aW9uIGlzIGEgbGlmZWN5Y2xlIG1ldGhvZCBhbmQgd2lsbCBhbHdheXMgcnVuIGJlZm9yZSByZW5kZXIoKSBtYWtpbmcgaXQgZ3JlYXQgZm9yIHNldHRpbmcgdXAgYW55dGhpbmcgYmVmb3JlIGEgY29tcG9uZW50IGlzIGRyYXduLlwiLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGlkPXJlbmRlcmluZy1odG1sfGNsYXNzPXNlY3Rpb24tc3VidGl0bGVcIiwgW1xyXG5cdFx0XHRcdFx0XHRcIkFjY2VzcyBTdGF0ZVwiLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHRcdFwiU3RhdGUgY2FuIGJlIGFjY2Vzc2VkIGJ5IGRlc3RydWN0dXJpbmcgdGhlIG9iamVjdCBpbnNpZGUgdGhlIHJlbmRlciBmdW5jdGlvbiBhcmd1bWVudC4gVGhpcyBzdGF0ZSBvYmplY3QgaW5zaWRlIHRoZSByZW5kZXIgZnVuY3Rpb24gaXMgbW9kaWZpYWJsZSBiZWNhdXNlIGl0IGlzIG93bmVkIGJ5IHRoZSBjb21wb25lbnQuXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1jb250ZW50XCIsIFtcclxuXHRcdFx0XHRcdFx0XCJJZiBhIHVuaXF1ZSBwcm9wIG9mIGFjY2Vzc0tleSBpcyBwYXNzZWQgaW4gd2hlbiB0aGUgY29tcG9uZW50IGlzIHJlcXVpcmVkIHRvIGJlIHJlbmRlcmVkLCBhIHJlYWR5LW9ubHkgdmVyc2lvbiBvZiBjb21wb25lbnQgc3RhdGUgY2FuIGJlIGFjY2Vzc2VkIGJ5IG90aGVyIGNvbXBvbmVudHMgd2l0aCB0aGUgZ2V0U3RhdGUoKSBmdW5jdGlvbi5cIixcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcInByZXxjbGFzcz1jb2RlLXNuaXBwZXRcIiwgW1xyXG5cdFx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiY29kZXxjbGFzcz1jb2RlLWJsb2NrXCIsIFtcclxuXHRcdFx0XHRcdFx0XHRcIlxcbmNvbnN0IHBhcmVudENvbXBvbmVudCA9IHtcXG4gICAgcmVuZGVyOiAoKSA9PiB7XFxuICAgICAgICByZXR1cm4gUE9QLnVzZShwb3BDb21wb25lbnQsIHtcIiArXHJcblx0XHRcdFx0XHRcdFx0XHRgIFwiYWNjZXNzS2V5OiBcImNvdW50ZXItc3RhdGVcIiB9KTtcXG4gICAgfVxcbn1cXG5cXG4vLyBBY2Nlc3MgdGhhdCBzdGF0ZSBmcm9tIGFuIHVucmVsYXRlZCBjb21wb25lbnRcXG5jb25zdCBhbm90aGVyQ29tcG9uZW50ID0ge1xcbiAgICByZW5kZXI6ICgpID0+IHtcXG4gICAgICAgIGNvbnN0IG90aGVyU3RhdGUgPSBQT1AuZ2V0U3RhdGUoXCJvdGhlci1zdGF0ZVwiKTtcXG4gICAgICAgIFxcbiAgICAgICAgcmV0dXJuIFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9Y29tcG9uZW50LWNvcHlcIiwgW2AgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XCJgJHtzdGF0ZS5zb21lVmFyaWFibGV9YF0pO1xcbiAgICB9XFxufVwiLFxyXG5cdFx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uLWNvbnRlbnRcIiwgW1xyXG5cdFx0XHRcdFx0XHRcIlRoZXJlIGFyZSB0d28gZXhhbXBsZXMgb2YgY29tcG9uZW50cyBiZWxvdyB0aGF0IHVzZSBzdGF0ZSB0byBzdG9yZSBhbmQgdXBkYXRlIGluZm9ybWF0aW9uLiBwb3AhIEpTIGNoZWNrcyBpZiBhIHJlbmRlciB1cGRhdGUgaXMgcmVxdWlyZWQgYWZ0ZXIgZXZlcnkgY2xpY2sgZXZlbnQgYnkgZGVmYXVsdC4gSG93ZXZlciwgcG9wISBKUyBzdXBwb3J0cyBtYW51YWwgcmUtcmVuZGVyIG9uIHN0YXRlIGNoYW5nZSB3aGVyZSBhIGNsaWNrIG1heSBub3QgYmUgcHJlc2VudCB3aXRoIHRoZSByZWZyZXNoKCkgZnVuY3Rpb24uXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8aWQ9cmVuZGVyaW5nLWh0bWx8Y2xhc3M9c2VjdGlvbi1zdWJ0aXRsZVwiLCBbXHJcblx0XHRcdFx0XHRcdFwiQ291bnRlclwiLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AudXNlKENvdW50ZXIpLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uLWNvbnRlbnRcIiwgW1xyXG5cdFx0XHRcdFx0XHRcIlRoZSBDb2RlUGVuIGZvciB0aGlzIGNvdW50ZXIgY29tcG9uZW50IGlzIGF2YWlsYWJsZSBcIixcclxuXHRcdFx0XHRcdFx0UE9QLmNyZWF0ZShcclxuXHRcdFx0XHRcdFx0XHRcImF8Y2xhc3M9ZXh0ZXJuYWwtbGlua1wiLFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGhyZWY6IFwiaHR0cHM6Ly9jb2RlcGVuLmlvL2FiaXJhbXJuYWlyL3Blbi9MWWROZ2JvXCIsXHJcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXQ6IFwiX2JsYW5rXCIsXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRbXCJoZXJlXCJdXHJcblx0XHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHRcdFwiLlwiLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHQvLyBQT1AuY3JlYXRlKFwiZGl2fGlkPXJlbmRlcmluZy1odG1sfGNsYXNzPXNlY3Rpb24tc3VidGl0bGVcIiwgW1xyXG5cdFx0XHRcdFx0Ly8gXHRcIlN0b3B3YXRjaFwiLFxyXG5cdFx0XHRcdFx0Ly8gXSksXHJcblx0XHRcdFx0XHQvLyBQT1AudXNlKFN0b3B3YXRjaCksXHJcblx0XHRcdFx0XHQvLyBQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHQvLyBcdFwiVGhlIENvZGVQZW4gZm9yIHRoaXMgY291bnRlciBjb21wb25lbnQgaXMgYXZhaWxhYmxlIFwiLFxyXG5cdFx0XHRcdFx0Ly8gXHRQT1AuY3JlYXRlKFxyXG5cdFx0XHRcdFx0Ly8gXHRcdFwiYXxjbGFzcz1leHRlcm5hbC1saW5rXCIsXHJcblx0XHRcdFx0XHQvLyBcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gXHRcdFx0aHJlZjogXCJodHRwczovL2NvZGVwZW4uaW8vYWJpcmFtcm5haXIvcGVuL09Kdk5CcGJcIixcclxuXHRcdFx0XHRcdC8vIFx0XHRcdHRhcmdldDogXCJfYmxhbmtcIixcclxuXHRcdFx0XHRcdC8vIFx0XHR9LFxyXG5cdFx0XHRcdFx0Ly8gXHRcdFtcImhlcmVcIl1cclxuXHRcdFx0XHRcdC8vIFx0KSxcclxuXHRcdFx0XHRcdC8vIFx0XCIuXCIsXHJcblx0XHRcdFx0XHQvLyBdKSxcclxuXHRcdFx0XHRdKSxcclxuXHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb25cIiwgW1xyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxpZD1yb290LXNlY3Rpb258Y2xhc3M9c2VjdGlvbi10aXRsZVwiLCBbXCJSb290XCJdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1jb250ZW50XCIsIFtcclxuXHRcdFx0XHRcdFx0XCJBbGwgcG9wISBKUyBhcHBsaWNhdGlvbnMgbXVzdCBoYXZlIGFuIGVudHJ5IHBvaW50LiBUaGUgcm9vdCgpIGZ1bmN0aW9uIHdpbGwgdGFrZSBhIHBvcENvbXBvbmVudCBhbmQgZXN0YWJsaXNoIGl0IGFzIHRoZSBjb250YWluZXIgb2YgdGhlIHdob2xlIGFwcGxpY2F0aW9uLlwiLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHRcdFwiVGhpcyByb290IGNvbXBvbmVudCB3aWxsIGhhdmUgYWxsIHRoZSBwcm9wZXJ0aWVzIG9mIGEgcmVndWxhciBwb3AgY29tcG9uZW50LiBUaGUgY2FsbCB0byBlc3RhYmxpc2ggdGhlIHJvb3QgaXMgbW9zdCBvZnRlbiBkb25lIGluIHRoZSBpbmRleC5qcyBmaWxlLlwiLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwicHJlfGNsYXNzPWNvZGUtc25pcHBldFwiLCBbXHJcblx0XHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJjb2RlfGNsYXNzPWNvZGUtYmxvY2tcIiwgW1xyXG5cdFx0XHRcdFx0XHRcdGBpbXBvcnQgYXBwQ29udGFpbmVyIGZyb20gXCIvcGF0aFwiO1xcblxcblBPUC5yb290KGFwcENvbnRhaW5lcik7YCxcclxuXHRcdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1jb250ZW50XCIsIFtcclxuXHRcdFx0XHRcdFx0XCJUaGUgc2Vjb25kIGFyZ3VtZW50IG9mIHRoZSByb290IGZ1bmN0aW9uIGFjY2VwdHMgcHJvcHMgZm9yIHRoZSByb290IGNvbXBvbmVudCBzdWNoIGFzIHJvb3ROYW1lLCBhY2Nlc3NLZXksIHBvcFJvdXRlcyBldGMuXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRdKSxcclxuXHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb25cIiwgW1xyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxpZD1yb3V0aW5nfGNsYXNzPXNlY3Rpb24tdGl0bGVcIiwgW1wiUm91dGluZ1wiXSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHRcdFwicG9wISBKUyBpcyBjYXBhYmxlIG9mIGRpc3BsYXlpbmcgbXVsdGlwbGUgcGFnZXMgd2l0aCBlYXN5IHRvIHVuZGVyc3RhbmQgYXBwbGljYXRpb24gcm91dGluZy5cIixcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uLWNvbnRlbnRcIiwgW1xyXG5cdFx0XHRcdFx0XHRcIlRvIGVuYWJsZSByb3V0aW5nLCBzaW1wbHkgZGVjbGFyZSBhbiBvYmplY3Qgd2l0aCByb3V0ZXMgYXMga2V5cyBhbmQgcG9wIGNvbXBvbmVudCBpbXBvcnRzIGFzIHZhbHVlcy4gVGhlIGZpcnN0IGtleSB2YWx1ZSBwYWlyIG9mIHRoaXMgb2JqZWN0IHdpbGwgYWx3YXlzIGJlIHRoZSBob21lIHBhZ2Ugb2YgdGhlIGFwcGxpY2F0aW9uLlwiLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHRcdFwiVGhpcyBvYmplY3QgY2FuIHRoZW4gYmUgcGFzc2VkIGludG8gdGhlIHJvb3QgZnVuY3Rpb24gaW4gdGhlIHByb3BzIGFyZ3VtZW50IHdpdGggdGhlIGtleSBvZiBwb3BSb3V0ZXMuXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJwcmV8Y2xhc3M9Y29kZS1zbmlwcGV0XCIsIFtcclxuXHRcdFx0XHRcdFx0UE9QLmNyZWF0ZShcImNvZGV8Y2xhc3M9Y29kZS1ibG9ja1wiLCBbXHJcblx0XHRcdFx0XHRcdFx0YGltcG9ydCBIb21lUGFnZSBmcm9tIFwiL3BhdGhcIjtcXG5pbXBvcnQgQWJvdXRQYWdlIGZyb20gXCIvcGF0aFwiO1xcblxcbmNvbnN0IHJvdXRlcyA9IHtcXG4gICAgXCIvaG9tZVwiOiBIb21lUGFnZSxcXG4gICAgXCIvYWJvdXRcIjogQWJvdXRQYWdlXFxufVxcblxcblBPUC5yb290KEhvbWUsIHsgcG9wUm91dGVzOiByb3V0ZXMgfSk7YCxcclxuXHRcdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1jb250ZW50XCIsIFtcclxuXHRcdFx0XHRcdFx0YFRvIHRoZW4gYWNjZXNzIGRpZmZlcmVudCBwYWdlcywganVzdCBjcmVhdGUgYW5jaG9yIHRhZ3MgYW55d2hlcmUgaW4gdGhlIGFwcGxpY2F0aW9uIHdpdGggYSBzdHJpbmcgaW4gdGhlIGZvcm1hdCBvZiBoYXNoYmFuZyAoXCIjIVwiKSBmb2xsb3dlZCBieSByb3V0ZSBpbnRvIHRoZSBcImhyZWZcIiBwcm9wZXJ0eS5gLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwicHJlfGNsYXNzPWNvZGUtc25pcHBldFwiLCBbXHJcblx0XHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJjb2RlfGNsYXNzPWNvZGUtYmxvY2tcIiwgW1xyXG5cdFx0XHRcdFx0XHRcdGBQT1AuY3JlYXRlKFwiYVwiLCB7IGhyZWY6IFwiIyEvaG9tZVwiIH0pO2AsXHJcblx0XHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHRcdGBDbGlja2luZyB0aGVzZSBhbmNob3IgdGFncyB3aWxsIHJlLXJlbmRlciB0aGUgd2hvbGUgZG9jdW1lbnQsIGRpc3BsYXkgdGhlIGFwcHJvcHJpYXRlIHBhZ2UgYW5kIGFsbCBwcmV2aW91cyBzdGF0ZSBpbmZvcm1hdGlvbiB3aWxsIHJlc2V0LmAsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRdKSxcclxuXHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb25cIiwgW1xyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxpZD10aXBzfGNsYXNzPXNlY3Rpb24tdGl0bGVcIiwgW1wiVGlwc1wiXSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHRcdGBJdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIEVTNiBzdGFuZGFyZCB3aGVuIHdvcmtpbmcgd2l0aCBwb3AhIEpTLiBXaGVuIHBvc3NpYmxlLCBhdm9pZCB0cmFkaXRpb25hbCBcImZvclwiIGxvb3BzIGFuZCB1c2UgZm9yRWFjaCB0byBpdGVyYXRlIGFuZCBBcnJheS5tYXAoKSB0byBnZW5lcmF0ZSBhcnJheXMuYCxcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uLWNvbnRlbnRcIiwgW1xyXG5cdFx0XHRcdFx0XHRgV2hlbiBpbnZva2luZyBQT1AudXNlKCkgaW5zaWRlIGEgbG9vcCwgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24gaWYgYSBrZXkgcHJvcCB3aXRoIGEgdW5pcXVlIHZhbHVlIGlzIG5vdCBwYXNzZWQgaW4gZm9yIGVhY2ggZWxlbWVudC5gLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwicHJlfGNsYXNzPWNvZGUtc25pcHBldFwiLCBbXHJcblx0XHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJjb2RlfGNsYXNzPWNvZGUtYmxvY2tcIiwgW1xyXG5cdFx0XHRcdFx0XHRcdGByZW5kZXI6ICgpID0+IHtcXG4gICAgY29uc3Qgc29tZUFycmF5ID0gW1wiSGVsbG9cIiwgXCJXb3JsZFwiLCBcIiFcIl07XFxuXFxuICAgIGNvbnN0IGNoaWxkcmVuID0gc29tZUFycmF5Lm1hcCgodmFsLCBpbmRleCkgPT4ge1xcbiAgICAgICAgcmV0dXJuIFBPUC51c2UocG9wQ29tcG9uZW50LCB7IGxhYmVsOiB2YWwsIGtleTogaW5kZXggfSk7XFxuICAgIH0pO1xcblxcbiAgICByZXR1cm4gUE9QLmNyZWF0ZShcImRpdlwiLCBjaGlsZHJlbik7XFxufWAsXHJcblx0XHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0XSksXHJcblxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uLWNvbnRlbnRcIiwgW1xyXG5cdFx0XHRcdFx0XHRcIkNvbmRpdGlvbmFsIHJlbmRlcmluZyBjYW4gYmUgZG9uZSBieSB1c2luZyB0ZXJuYXJ5IG9yIGJvb2xlYW4gc3RhdGVtZW50cyBhbmQgaXMgYSBoYW5keSBtZXRob2QgdG8gcXVpY2tseSByZW5kZXIgb3IgZXJhc2UgY29tcG9uZW50cyBmcm9tIHRoZSBkb2N1bWVudCB3aGVuIHN0YXRlIGNoYW5nZXMuXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJwcmV8Y2xhc3M9Y29kZS1zbmlwcGV0XCIsIFtcclxuXHRcdFx0XHRcdFx0UE9QLmNyZWF0ZShcImNvZGV8Y2xhc3M9Y29kZS1ibG9ja1wiLCBbXHJcblx0XHRcdFx0XHRcdFx0YGNvbnN0IGJveENvbXBvbmVudCA9IHtcXG4gICAgc2V0OiAoY29tcG9uZW50KSA9PiB7XFxuICAgICAgICBjb25zdCB7IHN0YXRlIH0gPSBjb21wb25lbnQ7XFxuICAgICAgICBzdGF0ZS5zaG93Qm94ID0gdHJ1ZTtcXG4gICAgfVxcbiAgICByZW5kZXI6IChjb21wb25lbnQpID0+IHtcXG4gICAgICAgIGNvbnN0IHsgc3RhdGUgfSA9IGNvbXBvbmVudDtcXG5cXG4gICAgICAgIHJldHVybiBQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPWJveC1jb250YWluZXJcIiwgW1xcbiAgICAgICAgICAgIFBPUC5jcmVhdGUoXFxuICAgICAgICAgICAgICAgIFwiYnV0dG9ufGNsYXNzPWJveC1idXR0b25cIixcXG4gICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgb25jbGljazogKCkgPT4gKHN0YXRlLnNob3dCb3ggPSAhc3RhdGUuc2hvd0JveClcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgW3N0YXRlLnNob3dCb3ggPyBcIkhpZGVcIiA6IFwiU2hvd1wiXVxcbiAgICAgICAgICAgICksXFxuICAgICAgICAgICAgc3RhdGUuc2hvd0JveCAmJiBQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPWJveC1kaXNwbGF5XCIpXFxuICAgICAgICBdKTtcXG4gICAgfVxcbn1gLFxyXG5cdFx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLnVzZShSZWRCb3gpLFxyXG5cdFx0XHRcdF0pLFxyXG5cdFx0XHRdKSxcclxuXHRcdF0pO1xyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHdWlkZTtcclxuIiwiaW1wb3J0IFBPUCBmcm9tIFwic29ucG9wLWpzXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XHJcbmltcG9ydCBIZXJvIGZyb20gXCIuLi9jb21wb25lbnRzL0hlcm9cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBIb21lID0ge1xyXG5cdHJlbmRlcjogKCkgPT4ge1xyXG5cdFx0cmV0dXJuIFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9aG9tZS1wYWdlLWNvbnRhaW5lclwiLCBbXHJcblx0XHRcdFBPUC51c2UoSGVybyksXHJcblx0XHRcdFBPUC51c2UoRm9vdGVyKSxcclxuXHRcdF0pO1xyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=