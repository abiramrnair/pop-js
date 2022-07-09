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
___CSS_LOADER_EXPORT___.push([module.id, "html {\r\n\tscroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n\tbackground-color: #e6e6e6;\r\n\tbackground: #c9d6ff;\r\n\tbackground: -webkit-linear-gradient(to right, #e2e2e2, #c9d6ff);\r\n\tbackground: linear-gradient(to right, #e2e2e2, #c9d6ff);\r\n\tfont-family: \"Roboto\", sans-serif;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n.hero-container {\r\n\twidth: 100vw;\r\n\theight: 100vh;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tgap: 20px;\r\n\tcolor: black;\r\n\tfont-family: \"Raleway\", sans-serif;\r\n}\r\n\r\n.hero-title {\r\n\tfont-size: 80px;\r\n}\r\n\r\n.hero-subtitle {\r\n\tfont-size: 20px;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.navbar-menu {\r\n\tdisplay: none;\r\n}\r\n\r\n.navbar-menu-item {\r\n\tpadding-bottom: 2px;\r\n}\r\n\r\n.navbar-menu-item.current-page {\r\n\tborder-bottom: 3px solid #f08080;\r\n}\r\n\r\n.footer-container {\r\n\tposition: absolute;\r\n\tbottom: 5px;\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tfont-size: 20px;\r\n}\r\n\r\n.side-navbar {\r\n\tdisplay: none;\r\n}\r\n\r\n.navbar-page-section-bullet {\r\n\tfont-size: 16px;\r\n\tfont-weight: normal;\r\n}\r\n\r\n.hero-demo-button {\r\n\toutline: none;\r\n\tborder: none;\r\n\tbackground: black;\r\n\tcolor: white;\r\n\tfont-size: 20px;\r\n\tpadding: 10px 30px;\r\n\tborder-radius: 4px;\r\n\tmargin-top: 20px;\r\n\tfont-family: \"Raleway\", sans-serif;\r\n\tletter-spacing: 1px;\r\n\ttransition: 0.3s;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.hero-demo-button:hover {\r\n\tcursor: pointer;\r\n\tbackground: #0d0d0d;\r\n\ttransition: 0.3s;\r\n\tcolor: #f08080;\r\n}\r\n\r\n.page-sections {\r\n\tmargin-top: 30%;\r\n\tmargin-bottom: 10%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tgap: 50px;\r\n}\r\n\r\n.section {\r\n\tbackground: white;\r\n\twidth: 80%;\r\n\tpadding: 20px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 40px;\r\n\tborder-radius: 7px;\r\n\tbox-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n}\r\n\r\n.section-title {\r\n\tfont-size: 35px;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.section-subtitle {\r\n\tfont-size: 25px;\r\n\ttext-align: center;\r\n\tfont-weight: bold;\r\n\tbackground: #f0f0f0;\r\n\tpadding: 10px;\r\n}\r\n\r\n.section-content {\r\n\tfont-size: 20px;\r\n}\r\n\r\n.code-snippet {\r\n\tfont-size: 14px !important;\r\n\tfont-weight: bold;\r\n\tdisplay: flex;\r\n\tbackground: #f0f8ff;\r\n\tbox-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;\r\n\tpadding: 5px;\r\n\tmargin: 10px 0px;\r\n\toverflow-x: scroll;\r\n}\r\n\r\npre {\r\n\tfont-size: 14px !important;\r\n}\r\n\r\n.navbar-container {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tbackground: black;\r\n\tcolor: white;\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tfont-size: 40px;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmin-height: 70px;\r\n}\r\n\r\n.back-arrow {\r\n\tposition: absolute;\r\n\tleft: 20px;\r\n\toutline: none;\r\n\tborder: none;\r\n\tbackground: inherit;\r\n\tcolor: white;\r\n\tfont-size: 40px;\r\n}\r\n\r\n.link-button {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.link-button:visited {\r\n\tcolor: black;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.hamburger-icon-container {\r\n\tposition: absolute;\r\n\tleft: 20px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\tgap: 10px;\r\n\theight: auto;\r\n\twidth: 40px;\r\n}\r\n\r\n.hamburger-line {\r\n\tborder-top: 2px solid white;\r\n}\r\n\r\n.hamburger-navbar-menu {\r\n\tposition: fixed;\r\n\tbackground: black;\r\n\tfont-size: 40px;\r\n\ttop: 70px;\r\n\tpadding: 25px 0px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 60px;\r\n\topacity: 0.9;\r\n\twidth: 100%;\r\n\talign-items: center;\r\n}\r\n\r\n.hamburger-menu-item {\r\n\ttext-decoration: none;\r\n\tfont-size: 25px;\r\n\tcolor: #f08080;\r\n}\r\n\r\n.navbar-link {\r\n\tcolor: white;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.navbar-link:hover {\r\n\tcolor: #f08080 !important;\r\n\tcursor: pointer;\r\n}\r\n\r\n.navbar-link:visited {\r\n\ttext-decoration: none;\r\n\tcolor: white;\r\n}\r\n\r\n.hamburger-menu-item:visited {\r\n\tcolor: #f08080;\r\n}\r\n\r\n.external-link {\r\n\tcolor: #f08080;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.external-link:hover {\r\n\ttext-decoration: underline;\r\n}\r\n\r\n.external-link:visited {\r\n\tcolor: #f08080;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.counter-container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tgap: 30px;\r\n\tfont-size: 40px;\r\n\tcolor: #f08080;\r\n}\r\n\r\n.counter-button {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tfont-size: 40px;\r\n\twidth: 40px;\r\n\theight: 40px;\r\n}\r\n\r\n.box-container {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tgap: 20px;\r\n}\r\n\r\n.box-button {\r\n\tfont-size: 25px;\r\n\tpadding: 5px 20px;\r\n}\r\n\r\n.box-display {\r\n\tbackground: red;\r\n\twidth: 30%;\r\n\theight: 40px;\r\n}\r\n\r\n.stopwatch-container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tgap: 20px;\r\n\tfont-size: 40px;\r\n\tcolor: #f08080;\r\n}\r\n\r\n.stopwatch-button {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tfont-size: 20px;\r\n\tpadding: 10px;\r\n}\r\n\r\n.duplicate-container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tgap: 20px;\r\n}\r\n\r\n.duplicate-input {\r\n\twidth: 50%;\r\n\tfont-size: 20px;\r\n}\r\n\r\n.duplicate-output {\r\n\tfont-size: 20px;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n\t.page-sections {\r\n\t\tmargin-top: 15%;\r\n\t\tmargin-bottom: 5%;\r\n\t}\r\n\t.hero-title {\r\n\t\tfont-size: 150px;\r\n\t}\r\n\t.hero-subtitle {\r\n\t\tfont-size: 30px;\r\n\t}\r\n\t.hamburger-menu-item {\r\n\t\tfont-size: 30px;\r\n\t}\r\n}\r\n\r\n@media (min-width: 1025px) {\r\n\t.section {\r\n\t\twidth: 50%;\r\n\t}\r\n\t.page-sections {\r\n\t\tmargin-top: 6%;\r\n\t\tmargin-bottom: 2%;\r\n\t}\r\n\t.code-snippet {\r\n\t\tjustify-content: center;\r\n\t\toverflow-x: hidden;\r\n\t}\r\n\t.section-content {\r\n\t\tfont-size: 18px;\r\n\t}\r\n\t.box-display {\r\n\t\twidth: 10%;\r\n\t}\r\n\t.navbar-container {\r\n\t\tjustify-content: end;\r\n\t}\r\n\t.navbar-title {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.hamburger-icon-container {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.navbar-menu {\r\n\t\tdisplay: flex;\r\n\t\tfont-size: 20px;\r\n\t\tgap: 70px;\r\n\t\tmargin-right: 2%;\r\n\t\tfont-family: \"Raleway\", sans-serif;\r\n\t}\r\n\t.footer-container {\r\n\t\tfont-size: 18px;\r\n\t}\r\n\t.side-navbar {\r\n\t\tdisplay: unset;\r\n\t\tposition: fixed;\r\n\t\twidth: fit-content;\r\n\t\tbackground: white;\r\n\t\tleft: 2%;\r\n\t\ttop: 100px;\r\n\t\tpadding: 20px;\r\n\t\tfont-family: \"Raleway\", sans-serif;\r\n\t\tfont-size: 18px;\r\n\t\tfont-weight: bold;\r\n\t\tborder-radius: 7px;\r\n\t}\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"AAGA;CACC,uBAAuB;AACxB;;AAEA;CACC,yBAAyB;CACzB,mBAAmB;CACnB,+DAA+D;CAC/D,uDAAuD;CACvD,iCAAiC;CACjC,SAAS;CACT,UAAU;AACX;;AAEA;CACC,YAAY;CACZ,aAAa;CACb,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,uBAAuB;CACvB,SAAS;CACT,YAAY;CACZ,kCAAkC;AACnC;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,gCAAgC;AACjC;;AAEA;CACC,kBAAkB;CAClB,WAAW;CACX,WAAW;CACX,aAAa;CACb,uBAAuB;CACvB,eAAe;AAChB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,eAAe;CACf,mBAAmB;AACpB;;AAEA;CACC,aAAa;CACb,YAAY;CACZ,iBAAiB;CACjB,YAAY;CACZ,eAAe;CACf,kBAAkB;CAClB,kBAAkB;CAClB,gBAAgB;CAChB,kCAAkC;CAClC,mBAAmB;CACnB,gBAAgB;CAChB,iBAAiB;AAClB;;AAEA;CACC,eAAe;CACf,mBAAmB;CACnB,gBAAgB;CAChB,cAAc;AACf;;AAEA;CACC,eAAe;CACf,kBAAkB;CAClB,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,mBAAmB;CACnB,SAAS;AACV;;AAEA;CACC,iBAAiB;CACjB,UAAU;CACV,aAAa;CACb,aAAa;CACb,sBAAsB;CACtB,SAAS;CACT,kBAAkB;CAClB,4CAA4C;AAC7C;;AAEA;CACC,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,eAAe;CACf,kBAAkB;CAClB,iBAAiB;CACjB,mBAAmB;CACnB,aAAa;AACd;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,0BAA0B;CAC1B,iBAAiB;CACjB,aAAa;CACb,mBAAmB;CACnB,wCAAwC;CACxC,YAAY;CACZ,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,0BAA0B;AAC3B;;AAEA;CACC,eAAe;CACf,MAAM;CACN,iBAAiB;CACjB,YAAY;CACZ,aAAa;CACb,WAAW;CACX,eAAe;CACf,uBAAuB;CACvB,mBAAmB;CACnB,gBAAgB;AACjB;;AAEA;CACC,kBAAkB;CAClB,UAAU;CACV,aAAa;CACb,YAAY;CACZ,mBAAmB;CACnB,YAAY;CACZ,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,qBAAqB;AACtB;;AAEA;CACC,YAAY;CACZ,qBAAqB;AACtB;;AAEA;CACC,kBAAkB;CAClB,UAAU;CACV,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,SAAS;CACT,YAAY;CACZ,WAAW;AACZ;;AAEA;CACC,2BAA2B;AAC5B;;AAEA;CACC,eAAe;CACf,iBAAiB;CACjB,eAAe;CACf,SAAS;CACT,iBAAiB;CACjB,aAAa;CACb,sBAAsB;CACtB,SAAS;CACT,YAAY;CACZ,WAAW;CACX,mBAAmB;AACpB;;AAEA;CACC,qBAAqB;CACrB,eAAe;CACf,cAAc;AACf;;AAEA;CACC,YAAY;CACZ,qBAAqB;AACtB;;AAEA;CACC,yBAAyB;CACzB,eAAe;AAChB;;AAEA;CACC,qBAAqB;CACrB,YAAY;AACb;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,cAAc;CACd,qBAAqB;AACtB;;AAEA;CACC,0BAA0B;AAC3B;;AAEA;CACC,cAAc;CACd,qBAAqB;AACtB;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,SAAS;CACT,eAAe;CACf,cAAc;AACf;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,eAAe;CACf,WAAW;CACX,YAAY;AACb;;AAEA;CACC,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,SAAS;AACV;;AAEA;CACC,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,eAAe;CACf,UAAU;CACV,YAAY;AACb;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,SAAS;CACT,eAAe;CACf,cAAc;AACf;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,eAAe;CACf,aAAa;AACd;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,SAAS;AACV;;AAEA;CACC,UAAU;CACV,eAAe;AAChB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC;EACC,eAAe;EACf,iBAAiB;CAClB;CACA;EACC,gBAAgB;CACjB;CACA;EACC,eAAe;CAChB;CACA;EACC,eAAe;CAChB;AACD;;AAEA;CACC;EACC,UAAU;CACX;CACA;EACC,cAAc;EACd,iBAAiB;CAClB;CACA;EACC,uBAAuB;EACvB,kBAAkB;CACnB;CACA;EACC,eAAe;CAChB;CACA;EACC,UAAU;CACX;CACA;EACC,oBAAoB;CACrB;CACA;EACC,aAAa;CACd;CACA;EACC,aAAa;CACd;CACA;EACC,aAAa;EACb,eAAe;EACf,SAAS;EACT,gBAAgB;EAChB,kCAAkC;CACnC;CACA;EACC,eAAe;CAChB;CACA;EACC,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,QAAQ;EACR,UAAU;EACV,aAAa;EACb,kCAAkC;EAClC,eAAe;EACf,iBAAiB;EACjB,kBAAkB;CACnB;AACD","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&family=Roboto&display=swap\");\r\n\r\nhtml {\r\n\tscroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n\tbackground-color: #e6e6e6;\r\n\tbackground: #c9d6ff;\r\n\tbackground: -webkit-linear-gradient(to right, #e2e2e2, #c9d6ff);\r\n\tbackground: linear-gradient(to right, #e2e2e2, #c9d6ff);\r\n\tfont-family: \"Roboto\", sans-serif;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n.hero-container {\r\n\twidth: 100vw;\r\n\theight: 100vh;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tgap: 20px;\r\n\tcolor: black;\r\n\tfont-family: \"Raleway\", sans-serif;\r\n}\r\n\r\n.hero-title {\r\n\tfont-size: 80px;\r\n}\r\n\r\n.hero-subtitle {\r\n\tfont-size: 20px;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.navbar-menu {\r\n\tdisplay: none;\r\n}\r\n\r\n.navbar-menu-item {\r\n\tpadding-bottom: 2px;\r\n}\r\n\r\n.navbar-menu-item.current-page {\r\n\tborder-bottom: 3px solid #f08080;\r\n}\r\n\r\n.footer-container {\r\n\tposition: absolute;\r\n\tbottom: 5px;\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tfont-size: 20px;\r\n}\r\n\r\n.side-navbar {\r\n\tdisplay: none;\r\n}\r\n\r\n.navbar-page-section-bullet {\r\n\tfont-size: 16px;\r\n\tfont-weight: normal;\r\n}\r\n\r\n.hero-demo-button {\r\n\toutline: none;\r\n\tborder: none;\r\n\tbackground: black;\r\n\tcolor: white;\r\n\tfont-size: 20px;\r\n\tpadding: 10px 30px;\r\n\tborder-radius: 4px;\r\n\tmargin-top: 20px;\r\n\tfont-family: \"Raleway\", sans-serif;\r\n\tletter-spacing: 1px;\r\n\ttransition: 0.3s;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.hero-demo-button:hover {\r\n\tcursor: pointer;\r\n\tbackground: #0d0d0d;\r\n\ttransition: 0.3s;\r\n\tcolor: #f08080;\r\n}\r\n\r\n.page-sections {\r\n\tmargin-top: 30%;\r\n\tmargin-bottom: 10%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tgap: 50px;\r\n}\r\n\r\n.section {\r\n\tbackground: white;\r\n\twidth: 80%;\r\n\tpadding: 20px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 40px;\r\n\tborder-radius: 7px;\r\n\tbox-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n}\r\n\r\n.section-title {\r\n\tfont-size: 35px;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.section-subtitle {\r\n\tfont-size: 25px;\r\n\ttext-align: center;\r\n\tfont-weight: bold;\r\n\tbackground: #f0f0f0;\r\n\tpadding: 10px;\r\n}\r\n\r\n.section-content {\r\n\tfont-size: 20px;\r\n}\r\n\r\n.code-snippet {\r\n\tfont-size: 14px !important;\r\n\tfont-weight: bold;\r\n\tdisplay: flex;\r\n\tbackground: #f0f8ff;\r\n\tbox-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;\r\n\tpadding: 5px;\r\n\tmargin: 10px 0px;\r\n\toverflow-x: scroll;\r\n}\r\n\r\npre {\r\n\tfont-size: 14px !important;\r\n}\r\n\r\n.navbar-container {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tbackground: black;\r\n\tcolor: white;\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tfont-size: 40px;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmin-height: 70px;\r\n}\r\n\r\n.back-arrow {\r\n\tposition: absolute;\r\n\tleft: 20px;\r\n\toutline: none;\r\n\tborder: none;\r\n\tbackground: inherit;\r\n\tcolor: white;\r\n\tfont-size: 40px;\r\n}\r\n\r\n.link-button {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.link-button:visited {\r\n\tcolor: black;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.hamburger-icon-container {\r\n\tposition: absolute;\r\n\tleft: 20px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\tgap: 10px;\r\n\theight: auto;\r\n\twidth: 40px;\r\n}\r\n\r\n.hamburger-line {\r\n\tborder-top: 2px solid white;\r\n}\r\n\r\n.hamburger-navbar-menu {\r\n\tposition: fixed;\r\n\tbackground: black;\r\n\tfont-size: 40px;\r\n\ttop: 70px;\r\n\tpadding: 25px 0px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 60px;\r\n\topacity: 0.9;\r\n\twidth: 100%;\r\n\talign-items: center;\r\n}\r\n\r\n.hamburger-menu-item {\r\n\ttext-decoration: none;\r\n\tfont-size: 25px;\r\n\tcolor: #f08080;\r\n}\r\n\r\n.navbar-link {\r\n\tcolor: white;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.navbar-link:hover {\r\n\tcolor: #f08080 !important;\r\n\tcursor: pointer;\r\n}\r\n\r\n.navbar-link:visited {\r\n\ttext-decoration: none;\r\n\tcolor: white;\r\n}\r\n\r\n.hamburger-menu-item:visited {\r\n\tcolor: #f08080;\r\n}\r\n\r\n.external-link {\r\n\tcolor: #f08080;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.external-link:hover {\r\n\ttext-decoration: underline;\r\n}\r\n\r\n.external-link:visited {\r\n\tcolor: #f08080;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.counter-container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tgap: 30px;\r\n\tfont-size: 40px;\r\n\tcolor: #f08080;\r\n}\r\n\r\n.counter-button {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tfont-size: 40px;\r\n\twidth: 40px;\r\n\theight: 40px;\r\n}\r\n\r\n.box-container {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tgap: 20px;\r\n}\r\n\r\n.box-button {\r\n\tfont-size: 25px;\r\n\tpadding: 5px 20px;\r\n}\r\n\r\n.box-display {\r\n\tbackground: red;\r\n\twidth: 30%;\r\n\theight: 40px;\r\n}\r\n\r\n.stopwatch-container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tgap: 20px;\r\n\tfont-size: 40px;\r\n\tcolor: #f08080;\r\n}\r\n\r\n.stopwatch-button {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tfont-size: 20px;\r\n\tpadding: 10px;\r\n}\r\n\r\n.duplicate-container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tgap: 20px;\r\n}\r\n\r\n.duplicate-input {\r\n\twidth: 50%;\r\n\tfont-size: 20px;\r\n}\r\n\r\n.duplicate-output {\r\n\tfont-size: 20px;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n\t.page-sections {\r\n\t\tmargin-top: 15%;\r\n\t\tmargin-bottom: 5%;\r\n\t}\r\n\t.hero-title {\r\n\t\tfont-size: 150px;\r\n\t}\r\n\t.hero-subtitle {\r\n\t\tfont-size: 30px;\r\n\t}\r\n\t.hamburger-menu-item {\r\n\t\tfont-size: 30px;\r\n\t}\r\n}\r\n\r\n@media (min-width: 1025px) {\r\n\t.section {\r\n\t\twidth: 50%;\r\n\t}\r\n\t.page-sections {\r\n\t\tmargin-top: 6%;\r\n\t\tmargin-bottom: 2%;\r\n\t}\r\n\t.code-snippet {\r\n\t\tjustify-content: center;\r\n\t\toverflow-x: hidden;\r\n\t}\r\n\t.section-content {\r\n\t\tfont-size: 18px;\r\n\t}\r\n\t.box-display {\r\n\t\twidth: 10%;\r\n\t}\r\n\t.navbar-container {\r\n\t\tjustify-content: end;\r\n\t}\r\n\t.navbar-title {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.hamburger-icon-container {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.navbar-menu {\r\n\t\tdisplay: flex;\r\n\t\tfont-size: 20px;\r\n\t\tgap: 70px;\r\n\t\tmargin-right: 2%;\r\n\t\tfont-family: \"Raleway\", sans-serif;\r\n\t}\r\n\t.footer-container {\r\n\t\tfont-size: 18px;\r\n\t}\r\n\t.side-navbar {\r\n\t\tdisplay: unset;\r\n\t\tposition: fixed;\r\n\t\twidth: fit-content;\r\n\t\tbackground: white;\r\n\t\tleft: 2%;\r\n\t\ttop: 100px;\r\n\t\tpadding: 20px;\r\n\t\tfont-family: \"Raleway\", sans-serif;\r\n\t\tfont-size: 18px;\r\n\t\tfont-weight: bold;\r\n\t\tborder-radius: 7px;\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
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
						"There are two links to code for components below that use state to store and update information. pop! JS checks if a render update is required after every click event by default. However, pop! JS supports manual re-render on state change where a click may not be present with the refresh() function.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|id=rendering-html|class=section-subtitle", [
						"Counter",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"This component updates its state and re-renders every time the user clicks a button. The CodePen for this counter component is available ",
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
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|id=rendering-html|class=section-subtitle", [
						"Stopwatch",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"This component updates its state and re-renders when a button is clicked but also forces a refresh every clock cycle. The CodePen for this stopwatch component is available ",
						sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create(
							"a|class=external-link",
							{
								href: "https://codepen.io/abiramrnair/pen/OJvNBpb",
								target: "_blank",
							},
							["here"]
						),
						".",
					]),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUs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QU0sd0RBQVU7QUFDaEIsOEJBQThCLDJCQUEyQixrQkFBa0IsUUFBUSxZQUFZLCtCQUErQixPQUFPLDhCQUE4QixrQkFBa0IsUUFBUSxZQUFZLGtKQUFrSix3RkFBd0YsbUpBQW1KLE9BQU8sR0FBRztBQUNobEI7QUFDQTtBQUNBLEtBQUsscURBQU8sQ0FBQyxzREFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RSTztBQUNjO0FBQ0o7QUFDdEM7QUFDTztBQUNQO0FBQ0EsU0FBUyx3REFBVTtBQUNuQixHQUFHLHFEQUFPLENBQUMsd0RBQUk7QUFDZixHQUFHLHFEQUFPLENBQUMsMERBQU07QUFDakI7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLGlFQUFlLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbW8tcG9wLWFwcC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzIiwid2VicGFjazovL2RlbW8tcG9wLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3AtYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3AtYXBwLy4vbm9kZV9tb2R1bGVzL3NvbnBvcC1qcy9tb2R1bGVzL2NvbnN0YW50cy1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3AtYXBwLy4vbm9kZV9tb2R1bGVzL3NvbnBvcC1qcy9tb2R1bGVzL2RvbS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3AtYXBwLy4vbm9kZV9tb2R1bGVzL3NvbnBvcC1qcy9wb3AuanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3AtYXBwLy4vc3JjL3N0eWxlcy9pbmRleC5jc3M/NjM0OSIsIndlYnBhY2s6Ly9kZW1vLXBvcC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3AtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9kZW1vLXBvcC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3AtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2RlbW8tcG9wLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2RlbW8tcG9wLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2RlbW8tcG9wLWFwcC8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9kZW1vLXBvcC1hcHAvLi9zcmMvY29tcG9uZW50cy9Db3VudGVyLmpzIiwid2VicGFjazovL2RlbW8tcG9wLWFwcC8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9kZW1vLXBvcC1hcHAvLi9zcmMvY29tcG9uZW50cy9IYW1idXJnZXJJY29uLmpzIiwid2VicGFjazovL2RlbW8tcG9wLWFwcC8uL3NyYy9jb21wb25lbnRzL0hlcm8uanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3AtYXBwLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyLmpzIiwid2VicGFjazovL2RlbW8tcG9wLWFwcC8uL3NyYy9jb21wb25lbnRzL1JlZEJveC5qcyIsIndlYnBhY2s6Ly9kZW1vLXBvcC1hcHAvLi9zcmMvY29tcG9uZW50cy9TaWRlTmF2YmFyLmpzIiwid2VicGFjazovL2RlbW8tcG9wLWFwcC8uL3NyYy9jb21wb25lbnRzL1N0b3B3YXRjaC5qcyIsIndlYnBhY2s6Ly9kZW1vLXBvcC1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3AtYXBwLy4vc3JjL3BhZ2VzL0d1aWRlLmpzIiwid2VicGFjazovL2RlbW8tcG9wLWFwcC8uL3NyYy9wYWdlcy9Ib21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJhbGV3YXk6d2dodEA0MDA7NjAwJmZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxyXFxuXFx0c2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XFxyXFxuXFx0YmFja2dyb3VuZDogI2M5ZDZmZjtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2UyZTJlMiwgI2M5ZDZmZik7XFxyXFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZTJlMmUyLCAjYzlkNmZmKTtcXHJcXG5cXHRmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5oZXJvLWNvbnRhaW5lciB7XFxyXFxuXFx0d2lkdGg6IDEwMHZ3O1xcclxcblxcdGhlaWdodDogMTAwdmg7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0Z2FwOiAyMHB4O1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHRmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby10aXRsZSB7XFxyXFxuXFx0Zm9udC1zaXplOiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1zdWJ0aXRsZSB7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLW1lbnUge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItbWVudS1pdGVtIHtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLW1lbnUtaXRlbS5jdXJyZW50LXBhZ2Uge1xcclxcblxcdGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZjA4MDgwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWNvbnRhaW5lciB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGJvdHRvbTogNXB4O1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1uYXZiYXIge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItcGFnZS1zZWN0aW9uLWJ1bGxldCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi5oZXJvLWRlbW8tYnV0dG9uIHtcXHJcXG5cXHRvdXRsaW5lOiBub25lO1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiBibGFjaztcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcblxcdHBhZGRpbmc6IDEwcHggMzBweDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuXFx0bWFyZ2luLXRvcDogMjBweDtcXHJcXG5cXHRmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBzYW5zLXNlcmlmO1xcclxcblxcdGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxuXFx0dHJhbnNpdGlvbjogMC4zcztcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8tZGVtby1idXR0b246aG92ZXIge1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjMGQwZDBkO1xcclxcblxcdHRyYW5zaXRpb246IDAuM3M7XFxyXFxuXFx0Y29sb3I6ICNmMDgwODA7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXNlY3Rpb25zIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAzMCU7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTAlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGdhcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24ge1xcclxcblxcdGJhY2tncm91bmQ6IHdoaXRlO1xcclxcblxcdHdpZHRoOiA4MCU7XFxyXFxuXFx0cGFkZGluZzogMjBweDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0Z2FwOiA0MHB4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG5cXHRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tdGl0bGUge1xcclxcblxcdGZvbnQtc2l6ZTogMzVweDtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tc3VidGl0bGUge1xcclxcblxcdGZvbnQtc2l6ZTogMjVweDtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0YmFja2dyb3VuZDogI2YwZjBmMDtcXHJcXG5cXHRwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi1jb250ZW50IHtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb2RlLXNuaXBwZXQge1xcclxcblxcdGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YmFja2dyb3VuZDogI2YwZjhmZjtcXHJcXG5cXHRib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyNCUpIDBweCAzcHggOHB4O1xcclxcblxcdHBhZGRpbmc6IDVweDtcXHJcXG5cXHRtYXJnaW46IDEwcHggMHB4O1xcclxcblxcdG92ZXJmbG93LXg6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxucHJlIHtcXHJcXG5cXHRmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1jb250YWluZXIge1xcclxcblxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHR0b3A6IDA7XFxyXFxuXFx0YmFja2dyb3VuZDogYmxhY2s7XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0Zm9udC1zaXplOiA0MHB4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0bWluLWhlaWdodDogNzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2stYXJyb3cge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRsZWZ0OiAyMHB4O1xcclxcblxcdG91dGxpbmU6IG5vbmU7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdGJhY2tncm91bmQ6IGluaGVyaXQ7XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdGZvbnQtc2l6ZTogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmstYnV0dG9uIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubGluay1idXR0b246dmlzaXRlZCB7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhhbWJ1cmdlci1pY29uLWNvbnRhaW5lciB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGxlZnQ6IDIwcHg7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGdhcDogMTBweDtcXHJcXG5cXHRoZWlnaHQ6IGF1dG87XFxyXFxuXFx0d2lkdGg6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5oYW1idXJnZXItbGluZSB7XFxyXFxuXFx0Ym9yZGVyLXRvcDogMnB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGFtYnVyZ2VyLW5hdmJhci1tZW51IHtcXHJcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0YmFja2dyb3VuZDogYmxhY2s7XFxyXFxuXFx0Zm9udC1zaXplOiA0MHB4O1xcclxcblxcdHRvcDogNzBweDtcXHJcXG5cXHRwYWRkaW5nOiAyNXB4IDBweDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0Z2FwOiA2MHB4O1xcclxcblxcdG9wYWNpdHk6IDAuOTtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGFtYnVyZ2VyLW1lbnUtaXRlbSB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcdGZvbnQtc2l6ZTogMjVweDtcXHJcXG5cXHRjb2xvcjogI2YwODA4MDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1saW5rIHtcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLWxpbms6aG92ZXIge1xcclxcblxcdGNvbG9yOiAjZjA4MDgwICFpbXBvcnRhbnQ7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLWxpbms6dmlzaXRlZCB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhhbWJ1cmdlci1tZW51LWl0ZW06dmlzaXRlZCB7XFxyXFxuXFx0Y29sb3I6ICNmMDgwODA7XFxyXFxufVxcclxcblxcclxcbi5leHRlcm5hbC1saW5rIHtcXHJcXG5cXHRjb2xvcjogI2YwODA4MDtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5leHRlcm5hbC1saW5rOmhvdmVyIHtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLmV4dGVybmFsLWxpbms6dmlzaXRlZCB7XFxyXFxuXFx0Y29sb3I6ICNmMDgwODA7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY291bnRlci1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRnYXA6IDMwcHg7XFxyXFxuXFx0Zm9udC1zaXplOiA0MHB4O1xcclxcblxcdGNvbG9yOiAjZjA4MDgwO1xcclxcbn1cXHJcXG5cXHJcXG4uY291bnRlci1idXR0b24ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRmb250LXNpemU6IDQwcHg7XFxyXFxuXFx0d2lkdGg6IDQwcHg7XFxyXFxuXFx0aGVpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm94LWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJveC1idXR0b24ge1xcclxcblxcdGZvbnQtc2l6ZTogMjVweDtcXHJcXG5cXHRwYWRkaW5nOiA1cHggMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJveC1kaXNwbGF5IHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiByZWQ7XFxyXFxuXFx0d2lkdGg6IDMwJTtcXHJcXG5cXHRoZWlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5zdG9wd2F0Y2gtY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0Z2FwOiAyMHB4O1xcclxcblxcdGZvbnQtc2l6ZTogNDBweDtcXHJcXG5cXHRjb2xvcjogI2YwODA4MDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0b3B3YXRjaC1idXR0b24ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxuXFx0cGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmR1cGxpY2F0ZS1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmR1cGxpY2F0ZS1pbnB1dCB7XFxyXFxuXFx0d2lkdGg6IDUwJTtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5kdXBsaWNhdGUtb3V0cHV0IHtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG5cXHQucGFnZS1zZWN0aW9ucyB7XFxyXFxuXFx0XFx0bWFyZ2luLXRvcDogMTUlO1xcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDUlO1xcclxcblxcdH1cXHJcXG5cXHQuaGVyby10aXRsZSB7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxNTBweDtcXHJcXG5cXHR9XFxyXFxuXFx0Lmhlcm8tc3VidGl0bGUge1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMzBweDtcXHJcXG5cXHR9XFxyXFxuXFx0LmhhbWJ1cmdlci1tZW51LWl0ZW0ge1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMzBweDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcXHJcXG5cXHQuc2VjdGlvbiB7XFxyXFxuXFx0XFx0d2lkdGg6IDUwJTtcXHJcXG5cXHR9XFxyXFxuXFx0LnBhZ2Utc2VjdGlvbnMge1xcclxcblxcdFxcdG1hcmdpbi10b3A6IDYlO1xcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDIlO1xcclxcblxcdH1cXHJcXG5cXHQuY29kZS1zbmlwcGV0IHtcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRcXHRvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuXFx0fVxcclxcblxcdC5zZWN0aW9uLWNvbnRlbnQge1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXHJcXG5cXHR9XFxyXFxuXFx0LmJveC1kaXNwbGF5IHtcXHJcXG5cXHRcXHR3aWR0aDogMTAlO1xcclxcblxcdH1cXHJcXG5cXHQubmF2YmFyLWNvbnRhaW5lciB7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuXFx0fVxcclxcblxcdC5uYXZiYXItdGl0bGUge1xcclxcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0fVxcclxcblxcdC5oYW1idXJnZXItaWNvbi1jb250YWluZXIge1xcclxcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0fVxcclxcblxcdC5uYXZiYXItbWVudSB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRmb250LXNpemU6IDIwcHg7XFxyXFxuXFx0XFx0Z2FwOiA3MHB4O1xcclxcblxcdFxcdG1hcmdpbi1yaWdodDogMiU7XFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG5cXHR9XFxyXFxuXFx0LmZvb3Rlci1jb250YWluZXIge1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXHJcXG5cXHR9XFxyXFxuXFx0LnNpZGUtbmF2YmFyIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiB1bnNldDtcXHJcXG5cXHRcXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0XFx0d2lkdGg6IGZpdC1jb250ZW50O1xcclxcblxcdFxcdGJhY2tncm91bmQ6IHdoaXRlO1xcclxcblxcdFxcdGxlZnQ6IDIlO1xcclxcblxcdFxcdHRvcDogMTAwcHg7XFxyXFxuXFx0XFx0cGFkZGluZzogMjBweDtcXHJcXG5cXHRcXHRmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBzYW5zLXNlcmlmO1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXHJcXG5cXHRcXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtDQUNDLHVCQUF1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O0VBQ0MsZUFBZTtDQUNoQjtDQUNBO0VBQ0MsVUFBVTtDQUNYO0NBQ0E7RUFDQyxvQkFBb0I7Q0FDckI7Q0FDQTtFQUNDLGFBQWE7Q0FDZDtDQUNBO0VBQ0MsYUFBYTtDQUNkO0NBQ0E7RUFDQyxhQUFhO0VBQ2IsZUFBZTtFQUNmLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsa0NBQWtDO0NBQ25DO0NBQ0E7RUFDQyxlQUFlO0NBQ2hCO0NBQ0E7RUFDQyxjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsUUFBUTtFQUNSLFVBQVU7RUFDVixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0NBQ25CO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJhbGV3YXk6d2dodEA0MDA7NjAwJmZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuXFx0c2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XFxyXFxuXFx0YmFja2dyb3VuZDogI2M5ZDZmZjtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2UyZTJlMiwgI2M5ZDZmZik7XFxyXFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZTJlMmUyLCAjYzlkNmZmKTtcXHJcXG5cXHRmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5oZXJvLWNvbnRhaW5lciB7XFxyXFxuXFx0d2lkdGg6IDEwMHZ3O1xcclxcblxcdGhlaWdodDogMTAwdmg7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0Z2FwOiAyMHB4O1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHRmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby10aXRsZSB7XFxyXFxuXFx0Zm9udC1zaXplOiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1zdWJ0aXRsZSB7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLW1lbnUge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItbWVudS1pdGVtIHtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLW1lbnUtaXRlbS5jdXJyZW50LXBhZ2Uge1xcclxcblxcdGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZjA4MDgwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWNvbnRhaW5lciB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGJvdHRvbTogNXB4O1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1uYXZiYXIge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItcGFnZS1zZWN0aW9uLWJ1bGxldCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi5oZXJvLWRlbW8tYnV0dG9uIHtcXHJcXG5cXHRvdXRsaW5lOiBub25lO1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiBibGFjaztcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcblxcdHBhZGRpbmc6IDEwcHggMzBweDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuXFx0bWFyZ2luLXRvcDogMjBweDtcXHJcXG5cXHRmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBzYW5zLXNlcmlmO1xcclxcblxcdGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxuXFx0dHJhbnNpdGlvbjogMC4zcztcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8tZGVtby1idXR0b246aG92ZXIge1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjMGQwZDBkO1xcclxcblxcdHRyYW5zaXRpb246IDAuM3M7XFxyXFxuXFx0Y29sb3I6ICNmMDgwODA7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXNlY3Rpb25zIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAzMCU7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTAlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGdhcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24ge1xcclxcblxcdGJhY2tncm91bmQ6IHdoaXRlO1xcclxcblxcdHdpZHRoOiA4MCU7XFxyXFxuXFx0cGFkZGluZzogMjBweDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0Z2FwOiA0MHB4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG5cXHRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tdGl0bGUge1xcclxcblxcdGZvbnQtc2l6ZTogMzVweDtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tc3VidGl0bGUge1xcclxcblxcdGZvbnQtc2l6ZTogMjVweDtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0YmFja2dyb3VuZDogI2YwZjBmMDtcXHJcXG5cXHRwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi1jb250ZW50IHtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb2RlLXNuaXBwZXQge1xcclxcblxcdGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YmFja2dyb3VuZDogI2YwZjhmZjtcXHJcXG5cXHRib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyNCUpIDBweCAzcHggOHB4O1xcclxcblxcdHBhZGRpbmc6IDVweDtcXHJcXG5cXHRtYXJnaW46IDEwcHggMHB4O1xcclxcblxcdG92ZXJmbG93LXg6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxucHJlIHtcXHJcXG5cXHRmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1jb250YWluZXIge1xcclxcblxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHR0b3A6IDA7XFxyXFxuXFx0YmFja2dyb3VuZDogYmxhY2s7XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0Zm9udC1zaXplOiA0MHB4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0bWluLWhlaWdodDogNzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2stYXJyb3cge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRsZWZ0OiAyMHB4O1xcclxcblxcdG91dGxpbmU6IG5vbmU7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdGJhY2tncm91bmQ6IGluaGVyaXQ7XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdGZvbnQtc2l6ZTogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmstYnV0dG9uIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubGluay1idXR0b246dmlzaXRlZCB7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhhbWJ1cmdlci1pY29uLWNvbnRhaW5lciB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGxlZnQ6IDIwcHg7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGdhcDogMTBweDtcXHJcXG5cXHRoZWlnaHQ6IGF1dG87XFxyXFxuXFx0d2lkdGg6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5oYW1idXJnZXItbGluZSB7XFxyXFxuXFx0Ym9yZGVyLXRvcDogMnB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGFtYnVyZ2VyLW5hdmJhci1tZW51IHtcXHJcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0YmFja2dyb3VuZDogYmxhY2s7XFxyXFxuXFx0Zm9udC1zaXplOiA0MHB4O1xcclxcblxcdHRvcDogNzBweDtcXHJcXG5cXHRwYWRkaW5nOiAyNXB4IDBweDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0Z2FwOiA2MHB4O1xcclxcblxcdG9wYWNpdHk6IDAuOTtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGFtYnVyZ2VyLW1lbnUtaXRlbSB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcdGZvbnQtc2l6ZTogMjVweDtcXHJcXG5cXHRjb2xvcjogI2YwODA4MDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1saW5rIHtcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLWxpbms6aG92ZXIge1xcclxcblxcdGNvbG9yOiAjZjA4MDgwICFpbXBvcnRhbnQ7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLWxpbms6dmlzaXRlZCB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhhbWJ1cmdlci1tZW51LWl0ZW06dmlzaXRlZCB7XFxyXFxuXFx0Y29sb3I6ICNmMDgwODA7XFxyXFxufVxcclxcblxcclxcbi5leHRlcm5hbC1saW5rIHtcXHJcXG5cXHRjb2xvcjogI2YwODA4MDtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5leHRlcm5hbC1saW5rOmhvdmVyIHtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLmV4dGVybmFsLWxpbms6dmlzaXRlZCB7XFxyXFxuXFx0Y29sb3I6ICNmMDgwODA7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY291bnRlci1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRnYXA6IDMwcHg7XFxyXFxuXFx0Zm9udC1zaXplOiA0MHB4O1xcclxcblxcdGNvbG9yOiAjZjA4MDgwO1xcclxcbn1cXHJcXG5cXHJcXG4uY291bnRlci1idXR0b24ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRmb250LXNpemU6IDQwcHg7XFxyXFxuXFx0d2lkdGg6IDQwcHg7XFxyXFxuXFx0aGVpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm94LWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJveC1idXR0b24ge1xcclxcblxcdGZvbnQtc2l6ZTogMjVweDtcXHJcXG5cXHRwYWRkaW5nOiA1cHggMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJveC1kaXNwbGF5IHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiByZWQ7XFxyXFxuXFx0d2lkdGg6IDMwJTtcXHJcXG5cXHRoZWlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5zdG9wd2F0Y2gtY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0Z2FwOiAyMHB4O1xcclxcblxcdGZvbnQtc2l6ZTogNDBweDtcXHJcXG5cXHRjb2xvcjogI2YwODA4MDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0b3B3YXRjaC1idXR0b24ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxuXFx0cGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmR1cGxpY2F0ZS1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmR1cGxpY2F0ZS1pbnB1dCB7XFxyXFxuXFx0d2lkdGg6IDUwJTtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5kdXBsaWNhdGUtb3V0cHV0IHtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG5cXHQucGFnZS1zZWN0aW9ucyB7XFxyXFxuXFx0XFx0bWFyZ2luLXRvcDogMTUlO1xcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDUlO1xcclxcblxcdH1cXHJcXG5cXHQuaGVyby10aXRsZSB7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxNTBweDtcXHJcXG5cXHR9XFxyXFxuXFx0Lmhlcm8tc3VidGl0bGUge1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMzBweDtcXHJcXG5cXHR9XFxyXFxuXFx0LmhhbWJ1cmdlci1tZW51LWl0ZW0ge1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMzBweDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcXHJcXG5cXHQuc2VjdGlvbiB7XFxyXFxuXFx0XFx0d2lkdGg6IDUwJTtcXHJcXG5cXHR9XFxyXFxuXFx0LnBhZ2Utc2VjdGlvbnMge1xcclxcblxcdFxcdG1hcmdpbi10b3A6IDYlO1xcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDIlO1xcclxcblxcdH1cXHJcXG5cXHQuY29kZS1zbmlwcGV0IHtcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRcXHRvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuXFx0fVxcclxcblxcdC5zZWN0aW9uLWNvbnRlbnQge1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXHJcXG5cXHR9XFxyXFxuXFx0LmJveC1kaXNwbGF5IHtcXHJcXG5cXHRcXHR3aWR0aDogMTAlO1xcclxcblxcdH1cXHJcXG5cXHQubmF2YmFyLWNvbnRhaW5lciB7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuXFx0fVxcclxcblxcdC5uYXZiYXItdGl0bGUge1xcclxcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0fVxcclxcblxcdC5oYW1idXJnZXItaWNvbi1jb250YWluZXIge1xcclxcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0fVxcclxcblxcdC5uYXZiYXItbWVudSB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRmb250LXNpemU6IDIwcHg7XFxyXFxuXFx0XFx0Z2FwOiA3MHB4O1xcclxcblxcdFxcdG1hcmdpbi1yaWdodDogMiU7XFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG5cXHR9XFxyXFxuXFx0LmZvb3Rlci1jb250YWluZXIge1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXHJcXG5cXHR9XFxyXFxuXFx0LnNpZGUtbmF2YmFyIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiB1bnNldDtcXHJcXG5cXHRcXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0XFx0d2lkdGg6IGZpdC1jb250ZW50O1xcclxcblxcdFxcdGJhY2tncm91bmQ6IHdoaXRlO1xcclxcblxcdFxcdGxlZnQ6IDIlO1xcclxcblxcdFxcdHRvcDogMTAwcHg7XFxyXFxuXFx0XFx0cGFkZGluZzogMjBweDtcXHJcXG5cXHRcXHRmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBzYW5zLXNlcmlmO1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXHJcXG5cXHRcXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGNvbnN0IGNvbnN0YW50cyA9IHtcclxuXHRhY2Nlc3NLZXlJbnZhbGlkRXJyb3I6IFwiYWNjZXNzS2V5IG11c3QgYmUgYSB2YWxpZCBleGlzdGluZyBrZXlcIixcclxuXHRhY2Nlc3NLZXlNaXNzaW5nRXJyb3I6XHJcblx0XHRcImFjY2Vzc0tleSBtdXN0IGJlIHBhc3NlZCBpbnNpZGUgcHJvcHMgYXJndW1lbnQgZm9yIGEgcG9wQ29tcG9uZW50IHV0aWxpemluZyBzdGF0ZS5cIixcclxuXHRjcmVhdGVQT1BFbGVtZW50VGFnVHlwZTogXCJzdHJpbmdcIixcclxuXHRjcmVhdGVSb290RWxlbWVudERlZmF1bHRJZDogXCJyb290XCIsXHJcblx0Y3JlYXRlUm9vdEVsZW1lbnRUYWc6IFwiZGl2XCIsXHJcblx0Zm9yTG9vcElkZW50aWZpZXI6IFwiQXJyYXkuZm9yRWFjaFwiLFxyXG5cdHBvcENvbXBvbmVudFVuaXF1ZUtleUVycm9yOiBgUE9QIGNvbXBvbmVudHMgcmVuZGVyZWQgaW4gYW4gYXJyYXkgbXVzdCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcCBwYXNzZWQgaW4uYCxcclxuXHRwb3BFbGVtZW50QXR0cmlidXRlU2VwYXJhdG9yOiBcIj1cIixcclxuXHRwb3BFbGVtZW50Q2xhc3NJZGVudGlmaWVyOiBcImNsYXNzPVwiLFxyXG5cdHBvcEVsZW1lbnRJZElkZW50aWZpZXI6IFwiaWQ9XCIsXHJcblx0cG9wT2JqZWN0VGFnU2VwYXJhdG9yOiBcInxcIixcclxuXHRtYXBMb29wSWRlbnRpZmllcjogXCJBcnJheS5tYXBcIixcclxuXHRyZWZyZXNoRE9NRGVmYXVsdEFjdGlvbjogXCJjbGlja1wiLFxyXG5cdHJlbmRlckZ1bmN0aW9uSWRlbnRpZmVyOiBcIk9iamVjdC5yZW5kZXJcIixcclxuXHRyb290RnVuY3Rpb25JZGVudGlmaWVyOiBcIk9iamVjdC5yb290XCIsXHJcblx0c3RhdGVLZXlGaWx0ZXJTdHJpbmc6IFwiRXJyb3JcIixcclxuXHR0eXBlb2ZQcm9wc0Z1bmN0aW9uSWRlbnRpZmllcjogXCJmdW5jdGlvblwiLFxyXG5cdHR5cGVvZlByb3BzT2JqZWN0SWRlbnRpZmllcjogXCJvYmplY3RcIixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnN0YW50cztcclxuIiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi9jb25zdGFudHMtbW9kdWxlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZG9tID0ge1xyXG5cdGluaXQ6ICgpID0+IHtcclxuXHRcdGRvbS5zdGF0ZSA9IHt9O1xyXG5cdFx0ZG9tLnJlbmRlclN0b3JlID0ge307XHJcblx0XHRkb20uc3RhdGVDaGVja1NldCA9IG5ldyBTZXQoKTtcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHBhdGggPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIiMhXCIpWzFdO1xyXG5cdFx0XHRpZiAoZG9tLnJvdXRlcyAmJiBkb20uY3VyclBhdGggIT09IHBhdGgpIHtcclxuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Z2VuZXJhdGVFbGVtZW50OiAocG9wT2JqZWN0KSA9PiB7XHJcblx0XHRpZiAodHlwZW9mIHBvcE9iamVjdCA9PT0gY29uc3RhbnRzLmNyZWF0ZVBPUEVsZW1lbnRUYWdUeXBlKSB7XHJcblx0XHRcdHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwb3BPYmplY3QpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgcGFyZW50QXJncyA9IHBvcE9iamVjdC50YWcuc3BsaXQoY29uc3RhbnRzLnBvcE9iamVjdFRhZ1NlcGFyYXRvcik7XHJcblx0XHRjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHBhcmVudEFyZ3NbMF0pO1xyXG5cdFx0aWYgKHBhcmVudEFyZ3NbMV0pIHtcclxuXHRcdFx0aWYgKHBhcmVudEFyZ3NbMV0uaW5jbHVkZXMoY29uc3RhbnRzLnBvcEVsZW1lbnRDbGFzc0lkZW50aWZpZXIpKSB7XHJcblx0XHRcdFx0cGFyZW50LmNsYXNzTmFtZSA9IHBhcmVudEFyZ3NbMV0uc3BsaXQoXHJcblx0XHRcdFx0XHRjb25zdGFudHMucG9wRWxlbWVudEF0dHJpYnV0ZVNlcGFyYXRvclxyXG5cdFx0XHRcdClbMV07XHJcblx0XHRcdH0gZWxzZSBpZiAocGFyZW50QXJnc1sxXS5pbmNsdWRlcyhjb25zdGFudHMucG9wRWxlbWVudElkSWRlbnRpZmllcikpIHtcclxuXHRcdFx0XHRwYXJlbnQuaWQgPSBwYXJlbnRBcmdzWzFdLnNwbGl0KFxyXG5cdFx0XHRcdFx0Y29uc3RhbnRzLnBvcEVsZW1lbnRBdHRyaWJ1dGVTZXBhcmF0b3JcclxuXHRcdFx0XHQpWzFdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAocGFyZW50QXJnc1syXSkge1xyXG5cdFx0XHRpZiAocGFyZW50QXJnc1syXS5pbmNsdWRlcyhjb25zdGFudHMucG9wRWxlbWVudENsYXNzSWRlbnRpZmllcikpIHtcclxuXHRcdFx0XHRwYXJlbnQuY2xhc3NOYW1lID0gcGFyZW50QXJnc1syXS5zcGxpdChcclxuXHRcdFx0XHRcdGNvbnN0YW50cy5wb3BFbGVtZW50QXR0cmlidXRlU2VwYXJhdG9yXHJcblx0XHRcdFx0KVsxXTtcclxuXHRcdFx0fSBlbHNlIGlmIChwYXJlbnRBcmdzWzJdLmluY2x1ZGVzKGNvbnN0YW50cy5wb3BFbGVtZW50SWRJZGVudGlmaWVyKSkge1xyXG5cdFx0XHRcdHBhcmVudC5pZCA9IHBhcmVudEFyZ3NbMl0uc3BsaXQoXHJcblx0XHRcdFx0XHRjb25zdGFudHMucG9wRWxlbWVudEF0dHJpYnV0ZVNlcGFyYXRvclxyXG5cdFx0XHRcdClbMV07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdE9iamVjdC5rZXlzKHBvcE9iamVjdC5wcm9wcykuZm9yRWFjaCgoa2V5KSA9PiB7XHJcblx0XHRcdHBhcmVudFtrZXldID0gcG9wT2JqZWN0LnByb3BzW2tleV07XHJcblx0XHR9KTtcclxuXHRcdGlmIChBcnJheS5pc0FycmF5KHBvcE9iamVjdC5jaGlsZHJlbikpIHtcclxuXHRcdFx0cG9wT2JqZWN0LmNoaWxkcmVuXHJcblx0XHRcdFx0Lm1hcChkb20uZ2VuZXJhdGVFbGVtZW50KVxyXG5cdFx0XHRcdC5mb3JFYWNoKChub2RlKSA9PiBwYXJlbnQuYXBwZW5kQ2hpbGQobm9kZSkpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHBhcmVudDtcclxuXHR9LFxyXG5cdHNhbWVQcm9wczogKHByb3BzT25lLCBwcm9wc1R3bykgPT4ge1xyXG5cdFx0aWYgKHByb3BzT25lID09PSBwcm9wc1R3bykgcmV0dXJuIHRydWU7XHJcblx0XHRpZiAocHJvcHNPbmUudG9TdHJpbmcoKSA9PT0gcHJvcHNUd28udG9TdHJpbmcoKSkgcmV0dXJuIHRydWU7XHJcblx0XHRpZiAoXHJcblx0XHRcdHR5cGVvZiBwcm9wc09uZSAhPT0gY29uc3RhbnRzLnR5cGVvZlByb3BzT2JqZWN0SWRlbnRpZmllciB8fFxyXG5cdFx0XHR0eXBlb2YgcHJvcHNUd28gIT09IGNvbnN0YW50cy50eXBlb2ZQcm9wc09iamVjdElkZW50aWZpZXIgfHxcclxuXHRcdFx0cHJvcHNPbmUgPT0gbnVsbCB8fFxyXG5cdFx0XHRwcm9wc1R3byA9PSBudWxsXHJcblx0XHQpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3Qga2V5c09uZSA9IE9iamVjdC5rZXlzKHByb3BzT25lKTtcclxuXHRcdGNvbnN0IGtleXNUd28gPSBPYmplY3Qua2V5cyhwcm9wc1R3byk7XHJcblx0XHRpZiAoa2V5c09uZS5sZW5ndGggIT09IGtleXNUd28ubGVuZ3RoKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGxldCByZXN1bHQgPSB0cnVlO1xyXG5cdFx0a2V5c09uZS5mb3JFYWNoKChrZXkpID0+IHtcclxuXHRcdFx0aWYgKCFrZXlzVHdvLmluY2x1ZGVzKGtleSkpIHtcclxuXHRcdFx0XHRyZXN1bHQgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0dHlwZW9mIHByb3BzT25lW2tleV0gPT09IGNvbnN0YW50cy50eXBlb2ZQcm9wc0Z1bmN0aW9uSWRlbnRpZmllciB8fFxyXG5cdFx0XHRcdHR5cGVvZiBwcm9wc1R3b1trZXldID09PSBjb25zdGFudHMudHlwZW9mUHJvcHNGdW5jdGlvbklkZW50aWZpZXJcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0aWYgKHByb3BzT25lW2tleV0udG9TdHJpbmcoKSAhPT0gcHJvcHNUd29ba2V5XS50b1N0cmluZygpKSB7XHJcblx0XHRcdFx0XHRyZXN1bHQgPSBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCFkb20uc2FtZVByb3BzKHByb3BzT25lW2tleV0sIHByb3BzVHdvW2tleV0pKSB7XHJcblx0XHRcdFx0cmVzdWx0ID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9LFxyXG5cdGNvbXBhcmVFbGVtZW50czogKHBvcE5vZGVPbmUsIHBvcGVOb2RlVHdvKSA9PiB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHR0eXBlb2YgcG9wTm9kZU9uZSAhPT0gdHlwZW9mIHBvcGVOb2RlVHdvIHx8XHJcblx0XHRcdCh0eXBlb2YgcG9wTm9kZU9uZSA9PT0gY29uc3RhbnRzLmNyZWF0ZVBPUEVsZW1lbnRUYWdUeXBlICYmXHJcblx0XHRcdFx0cG9wTm9kZU9uZSAhPT0gcG9wZU5vZGVUd28pIHx8XHJcblx0XHRcdHBvcE5vZGVPbmUudGFnICE9PSBwb3BlTm9kZVR3by50YWcgfHxcclxuXHRcdFx0KHBvcE5vZGVPbmUucHJvcHMgJiZcclxuXHRcdFx0XHRwb3BlTm9kZVR3by5wcm9wcyAmJlxyXG5cdFx0XHRcdCFkb20uc2FtZVByb3BzKHBvcE5vZGVPbmUucHJvcHMsIHBvcGVOb2RlVHdvLnByb3BzKSlcclxuXHRcdCk7XHJcblx0fSxcclxuXHR1cGRhdGVFbGVtZW50OiAocGFyZW50Tm9kZSwgbmV3Tm9kZSwgb2xkTm9kZSwgaW5kZXggPSAwKSA9PiB7XHJcblx0XHRpZiAoIW9sZE5vZGUpIHtcclxuXHRcdFx0cGFyZW50Tm9kZS5hcHBlbmRDaGlsZChkb20uZ2VuZXJhdGVFbGVtZW50KG5ld05vZGUpKTtcclxuXHRcdH0gZWxzZSBpZiAoIW5ld05vZGUpIHtcclxuXHRcdFx0cGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwYXJlbnROb2RlLmNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdH0gZWxzZSBpZiAoZG9tLmNvbXBhcmVFbGVtZW50cyhuZXdOb2RlLCBvbGROb2RlKSkge1xyXG5cdFx0XHRwYXJlbnROb2RlLnJlcGxhY2VDaGlsZChcclxuXHRcdFx0XHRkb20uZ2VuZXJhdGVFbGVtZW50KG5ld05vZGUpLFxyXG5cdFx0XHRcdHBhcmVudE5vZGUuY2hpbGROb2Rlc1tpbmRleF1cclxuXHRcdFx0KTtcclxuXHRcdH0gZWxzZSBpZiAobmV3Tm9kZS50YWcpIHtcclxuXHRcdFx0Y29uc3QgbmV3TGVuZ3RoID0gbmV3Tm9kZS5jaGlsZHJlbi5sZW5ndGg7XHJcblx0XHRcdGNvbnN0IG9sZExlbmd0aCA9IG9sZE5vZGUuY2hpbGRyZW4ubGVuZ3RoO1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5ld0xlbmd0aCB8fCBpIDwgb2xkTGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRkb20udXBkYXRlRWxlbWVudChcclxuXHRcdFx0XHRcdHBhcmVudE5vZGUuY2hpbGROb2Rlc1tpbmRleF0sXHJcblx0XHRcdFx0XHRuZXdOb2RlLmNoaWxkcmVuW2ldLFxyXG5cdFx0XHRcdFx0b2xkTm9kZS5jaGlsZHJlbltpXSxcclxuXHRcdFx0XHRcdGlcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHRpbml0aWFsaXplU3RhdGU6IChwb3BDb21wb25lbnQsIGFjY2Vzc0tleSkgPT4ge1xyXG5cdFx0aWYgKHBvcENvbXBvbmVudC5yZW5kZXIgJiYgcG9wQ29tcG9uZW50LnNldCAmJiBhY2Nlc3NLZXkpIHtcclxuXHRcdFx0aWYgKCFkb20uc3RhdGVbYWNjZXNzS2V5XSkge1xyXG5cdFx0XHRcdGRvbS5zdGF0ZVthY2Nlc3NLZXldID0ge307XHJcblx0XHRcdFx0cG9wQ29tcG9uZW50LnNldCh7XHJcblx0XHRcdFx0XHRzdGF0ZTogZG9tLnN0YXRlW2FjY2Vzc0tleV0sXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cG9wQ29tcG9uZW50XHJcblx0XHRcdFx0LnJlbmRlcih7IHByb3BzOiB7fSwgc3RhdGU6IHt9IH0pXHJcblx0XHRcdFx0LmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoY2hpbGQpIHtcclxuXHRcdFx0XHRcdFx0ZG9tLmluaXRpYWxpemVTdGF0ZShjaGlsZCwgY2hpbGQuYWNjZXNzS2V5KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdGZpbHRlclZhbGlkUG9wT2JqZWN0czogKGRvbVRyZWUpID0+IHtcclxuXHRcdGlmIChkb21UcmVlLmNoaWxkcmVuICYmIEFycmF5LmlzQXJyYXkoZG9tVHJlZS5jaGlsZHJlbikpIHtcclxuXHRcdFx0Y29uc3QgdHJlZUNoaWxkcmVuID0gZG9tVHJlZS5jaGlsZHJlbi5maWx0ZXIoXHJcblx0XHRcdFx0KGNoaWxkKSA9PiBjaGlsZCAmJiBPYmplY3Qua2V5cyhjaGlsZCkubGVuZ3RoXHJcblx0XHRcdCk7XHJcblx0XHRcdHRyZWVDaGlsZHJlbi5mb3JFYWNoKChvYmopID0+IHtcclxuXHRcdFx0XHRpZiAob2JqICYmIG9iai5jaGlsZHJlbikge1xyXG5cdFx0XHRcdFx0b2JqLmNoaWxkcmVuID0gZG9tLmZpbHRlclZhbGlkUG9wT2JqZWN0cyhvYmopO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiB0cmVlQ2hpbGRyZW47XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gW107XHJcblx0fSxcclxuXHRnZXRDb21wb25lbnRTdGF0ZUtleTogKGNvbXBvbmVudCwgbG9vcEtleSkgPT4ge1xyXG5cdFx0Y29uc3QgaGFzU2V0ID1cclxuXHRcdFx0dHlwZW9mIGNvbXBvbmVudCA9PT0gY29uc3RhbnRzLnR5cGVvZlByb3BzRnVuY3Rpb25JZGVudGlmaWVyXHJcblx0XHRcdFx0PyBjb21wb25lbnQoKSAmJiBjb21wb25lbnQoKS5zZXRcclxuXHRcdFx0XHQ6IGNvbXBvbmVudCAmJiBjb21wb25lbnQuc2V0O1xyXG5cdFx0Y29uc3QgbG9jYXRpb24gPSBuZXcgRXJyb3IoKTtcclxuXHRcdGNvbnN0IGZvcm1hdHRlZExvb3BLZXkgPSBsb29wS2V5ID8gU3RyaW5nKGxvb3BLZXkpIDogbnVsbDtcclxuXHRcdGNvbnN0IHN0YWNrID0gbG9jYXRpb24uc3RhY2suc3BsaXQoXCJcXG5cIik7XHJcblx0XHRjb25zdCBpc0xvb3BlZCA9XHJcblx0XHRcdHN0YWNrLmpvaW4oXCJcIikuaW5jbHVkZXMoY29uc3RhbnRzLmZvckxvb3BJZGVudGlmaWVyKSB8fFxyXG5cdFx0XHRzdGFjay5qb2luKFwiXCIpLmluY2x1ZGVzKGNvbnN0YW50cy5tYXBMb29wSWRlbnRpZmllcik7XHJcblx0XHRpZiAoaGFzU2V0ICYmIGlzTG9vcGVkICYmICFmb3JtYXR0ZWRMb29wS2V5KSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihjb25zdGFudHMucG9wQ29tcG9uZW50VW5pcXVlS2V5RXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0bGV0IGN1dE9mZkluZGV4O1xyXG5cdFx0Zm9yIChsZXQgaSA9IHN0YWNrLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcblx0XHRcdGlmIChzdGFja1tpXS5pbmNsdWRlcyhjb25zdGFudHMucmVuZGVyRnVuY3Rpb25JZGVudGlmZXIpKSB7XHJcblx0XHRcdFx0Y3V0T2ZmSW5kZXggPSBpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRjb25zdCBrZXkgPSBzdGFja1syXS5pbmNsdWRlcyhjb25zdGFudHMucm9vdEZ1bmN0aW9uSWRlbnRpZmllcilcclxuXHRcdFx0PyBzdGFjay5qb2luKFwiXCIpLnJlcGxhY2UoY29uc3RhbnRzLnN0YXRlS2V5RmlsdGVyU3RyaW5nLCBcIlwiKVxyXG5cdFx0XHQ6IHN0YWNrXHJcblx0XHRcdFx0XHQuc2xpY2UoMCwgY3V0T2ZmSW5kZXggKyAxKVxyXG5cdFx0XHRcdFx0LmpvaW4oXCJcIilcclxuXHRcdFx0XHRcdC5yZXBsYWNlKGNvbnN0YW50cy5zdGF0ZUtleUZpbHRlclN0cmluZywgXCJcIik7XHJcblx0XHRyZXR1cm4gYCR7a2V5fSR7Zm9ybWF0dGVkTG9vcEtleSA/IGZvcm1hdHRlZExvb3BLZXkgOiBcIlwifWA7XHJcblx0fSxcclxuXHRjbGVhblN0YXRlOiAoKSA9PiB7XHJcblx0XHRPYmplY3Qua2V5cyhkb20uc3RhdGUpLmZvckVhY2goKGtleSkgPT4ge1xyXG5cdFx0XHRpZiAoIWRvbS5zdGF0ZUNoZWNrU2V0LmhhcyhrZXkpKSB7XHJcblx0XHRcdFx0ZGVsZXRlIGRvbS5zdGF0ZVtrZXldO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZG9tO1xyXG4iLCJpbXBvcnQgY29uc3RhbnRzIGZyb20gXCIuL21vZHVsZXMvY29uc3RhbnRzLW1vZHVsZVwiO1xyXG5pbXBvcnQgZG9tIGZyb20gXCIuL21vZHVsZXMvZG9tLW1vZHVsZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBPUCA9IHtcclxuXHRjcmVhdGU6IChlbGVtZW50VGFnLCBlbGVtZW50Q2hpbGRyZW4gPSBbXSwgZWxlbWVudFByb3BzID0ge30pID0+IHtcclxuXHRcdGNvbnN0IGNoaWxkcmVuID1cclxuXHRcdFx0QXJyYXkuaXNBcnJheShlbGVtZW50UHJvcHMpICYmIGVsZW1lbnRQcm9wcy5sZW5ndGhcclxuXHRcdFx0XHQ/IGVsZW1lbnRQcm9wc1xyXG5cdFx0XHRcdDogZWxlbWVudENoaWxkcmVuO1xyXG5cdFx0aWYgKGNoaWxkcmVuICYmIEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pICYmIGNoaWxkcmVuLmxlbmd0aCkge1xyXG5cdFx0XHRjaGlsZHJlbi5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuXHRcdFx0XHRpZiAoIXZhbHVlKSB7XHJcblx0XHRcdFx0XHRjaGlsZHJlbltpbmRleF0gPSBcIiBcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHR5cGVvZiBlbGVtZW50VGFnID09PSBjb25zdGFudHMuY3JlYXRlUE9QRWxlbWVudFRhZ1R5cGUpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR0YWc6IGVsZW1lbnRUYWcsXHJcblx0XHRcdFx0cHJvcHM6XHJcblx0XHRcdFx0XHQhQXJyYXkuaXNBcnJheShlbGVtZW50Q2hpbGRyZW4pICYmIE9iamVjdC5rZXlzKGVsZW1lbnRDaGlsZHJlbikubGVuZ3RoXHJcblx0XHRcdFx0XHRcdD8gZWxlbWVudENoaWxkcmVuXHJcblx0XHRcdFx0XHRcdDogZWxlbWVudFByb3BzLFxyXG5cdFx0XHRcdGNoaWxkcmVuLFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0Z2V0U3RhdGU6IChhY2Nlc3NLZXkpID0+IHtcclxuXHRcdGlmICghYWNjZXNzS2V5KSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihjb25zdGFudHMuYWNjZXNzS2V5SW52YWxpZEVycm9yKTtcclxuXHRcdH1cclxuXHRcdGlmIChkb20uc3RhdGVbYWNjZXNzS2V5XSkge1xyXG5cdFx0XHRjb25zdCBzdGF0ZSA9IHsgLi4uZG9tLnN0YXRlW2FjY2Vzc0tleV0gfTtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHt9O1xyXG5cdH0sXHJcblx0dXNlOiAocG9wQ29tcG9uZW50LCBwb3BDb21wb25lbnRDaGlsZHJlbiA9IFtdLCBwb3BDb21wb25lbnRQcm9wcyA9IHt9KSA9PiB7XHJcblx0XHRjb25zdCBjb21wb25lbnRDaGlsZHJlbiA9XHJcblx0XHRcdEFycmF5LmlzQXJyYXkocG9wQ29tcG9uZW50UHJvcHMpICYmIHBvcENvbXBvbmVudFByb3BzLmxlbmd0aFxyXG5cdFx0XHRcdD8gcG9wQ29tcG9uZW50UHJvcHNcclxuXHRcdFx0XHQ6IHBvcENvbXBvbmVudENoaWxkcmVuO1xyXG5cdFx0Y29uc3QgY29tcG9uZW50UHJvcHMgPVxyXG5cdFx0XHRPYmplY3Qua2V5cyhwb3BDb21wb25lbnRDaGlsZHJlbikubGVuZ3RoICYmXHJcblx0XHRcdCFBcnJheS5pc0FycmF5KHBvcENvbXBvbmVudENoaWxkcmVuKVxyXG5cdFx0XHRcdD8gcG9wQ29tcG9uZW50Q2hpbGRyZW5cclxuXHRcdFx0XHQ6IHBvcENvbXBvbmVudFByb3BzO1xyXG5cdFx0bGV0IHBhcmVudCA9IHt9O1xyXG5cdFx0bGV0IGNvbXBvbmVudFN0YXRlID0ge307XHJcblx0XHRjb25zdCBjb21wb25lbnRTdGF0ZUtleSA9IGRvbS5nZXRDb21wb25lbnRTdGF0ZUtleShcclxuXHRcdFx0cG9wQ29tcG9uZW50LFxyXG5cdFx0XHRjb21wb25lbnRQcm9wcy5rZXlcclxuXHRcdCk7XHJcblx0XHRkb20uc3RhdGVDaGVja1NldC5hZGQoY29tcG9uZW50U3RhdGVLZXkpO1xyXG5cdFx0aWYgKGNvbXBvbmVudFByb3BzLmFjY2Vzc0tleSkge1xyXG5cdFx0XHRkb20uc3RhdGVDaGVja1NldC5hZGQoY29tcG9uZW50UHJvcHMuYWNjZXNzS2V5KTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGV4cGFuZGVkQ29tcG9uZW50ID1cclxuXHRcdFx0dHlwZW9mIHBvcENvbXBvbmVudCA9PT0gY29uc3RhbnRzLnR5cGVvZlByb3BzRnVuY3Rpb25JZGVudGlmaWVyICYmXHJcblx0XHRcdCFkb20uc3RhdGVbY29tcG9uZW50U3RhdGVLZXldXHJcblx0XHRcdFx0PyBwb3BDb21wb25lbnQoeyBwcm9wczogeyAuLi5jb21wb25lbnRQcm9wcyB9IH0pXHJcblx0XHRcdFx0OiB0eXBlb2YgcG9wQ29tcG9uZW50ID09PSBjb25zdGFudHMudHlwZW9mUHJvcHNGdW5jdGlvbklkZW50aWZpZXJcclxuXHRcdFx0XHQ/IGRvbS5yZW5kZXJTdG9yZVtjb21wb25lbnRTdGF0ZUtleV0uZXhwYW5kZWRGblxyXG5cdFx0XHRcdDogcG9wQ29tcG9uZW50O1xyXG5cdFx0aWYgKCFkb20uc3RhdGVbY29tcG9uZW50U3RhdGVLZXldKSB7XHJcblx0XHRcdGRvbS5zdGF0ZVtjb21wb25lbnRTdGF0ZUtleV0gPSB7fTtcclxuXHRcdFx0ZG9tLnJlbmRlclN0b3JlW2NvbXBvbmVudFN0YXRlS2V5XSA9IHt9O1xyXG5cdFx0XHRkb20ucmVuZGVyU3RvcmVbY29tcG9uZW50U3RhdGVLZXldLmV4cGFuZGVkRm4gPVxyXG5cdFx0XHRcdHR5cGVvZiBwb3BDb21wb25lbnQgPT09IGNvbnN0YW50cy50eXBlb2ZQcm9wc0Z1bmN0aW9uSWRlbnRpZmllclxyXG5cdFx0XHRcdFx0PyBwb3BDb21wb25lbnQoeyBwcm9wczogeyAuLi5jb21wb25lbnRQcm9wcyB9IH0pXHJcblx0XHRcdFx0XHQ6IHBvcENvbXBvbmVudDtcclxuXHRcdFx0aWYgKGV4cGFuZGVkQ29tcG9uZW50LnNldCkge1xyXG5cdFx0XHRcdHBhcmVudC5zZXQgPSBleHBhbmRlZENvbXBvbmVudC5zZXQ7XHJcblx0XHRcdFx0ZXhwYW5kZWRDb21wb25lbnQuc2V0KHtcclxuXHRcdFx0XHRcdHByb3BzOiB7IC4uLmNvbXBvbmVudFByb3BzIH0sXHJcblx0XHRcdFx0XHRzdGF0ZTogZG9tLnN0YXRlW2NvbXBvbmVudFN0YXRlS2V5XSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb21wb25lbnRTdGF0ZSA9IGRvbS5zdGF0ZVtjb21wb25lbnRTdGF0ZUtleV07XHJcblx0XHRcdGRvbS5zdGF0ZVtjb21wb25lbnRQcm9wcy5hY2Nlc3NLZXldID0gY29tcG9uZW50U3RhdGU7XHJcblx0XHR9XHJcblx0XHRpZiAoZXhwYW5kZWRDb21wb25lbnQucmVuZGVyKSB7XHJcblx0XHRcdHBhcmVudC5jb21wb25lbnRTdGF0ZUtleSA9IGNvbXBvbmVudFN0YXRlS2V5O1xyXG5cdFx0XHRjb21wb25lbnRTdGF0ZSA9IGRvbS5zdGF0ZVtjb21wb25lbnRTdGF0ZUtleV07XHJcblx0XHRcdGRvbS5zdGF0ZVtjb21wb25lbnRQcm9wcy5hY2Nlc3NLZXldID0gY29tcG9uZW50U3RhdGU7XHJcblx0XHRcdGRlbGV0ZSBjb21wb25lbnRQcm9wcy5hY2Nlc3NLZXk7XHJcblx0XHRcdGNvbnN0IHJlbmRlcmVkID0gZXhwYW5kZWRDb21wb25lbnQucmVuZGVyKHtcclxuXHRcdFx0XHRwcm9wczogeyAuLi5jb21wb25lbnRQcm9wcyB9LFxyXG5cdFx0XHRcdHN0YXRlOiBjb21wb25lbnRTdGF0ZSxcclxuXHRcdFx0fSk7XHJcblx0XHRcdGNvbnN0IGNoaWxkcmVuID0gcmVuZGVyZWQuY2hpbGRyZW47XHJcblx0XHRcdGlmICghcmVuZGVyZWQudGFnLnJlbmRlcikge1xyXG5cdFx0XHRcdHBhcmVudCA9IHsgLi4ucGFyZW50LCAuLi5yZW5kZXJlZCB9O1xyXG5cdFx0XHRcdGlmIChjb21wb25lbnRDaGlsZHJlbiAmJiBjb21wb25lbnRDaGlsZHJlbi5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdGNvbXBvbmVudENoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcblx0XHRcdFx0XHRcdHBhcmVudC5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRwYXJlbnQgPSBQT1AudXNlKHJlbmRlcmVkLnRhZywgY29tcG9uZW50Q2hpbGRyZW4pO1xyXG5cdFx0XHRcdGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcblx0XHRcdFx0XHRwYXJlbnQuY2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0aWYgKGNvbXBvbmVudENoaWxkcmVuICYmIGNvbXBvbmVudENoaWxkcmVuLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0Y29tcG9uZW50Q2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuXHRcdFx0XHRcdFx0cGFyZW50LmNoaWxkcmVuLnB1c2goY2hpbGQpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBwYXJlbnQ7XHJcblx0XHR9XHJcblx0fSxcclxuXHRyZWZyZXNoOiAoKSA9PiB7XHJcblx0XHRkb20uc3RhdGVDaGVja1NldC5jbGVhcigpO1xyXG5cdFx0Y29uc3QgbmV3VHJlZSA9IGRvbS5yZW5kZXJGbigpO1xyXG5cdFx0bmV3VHJlZS5jaGlsZHJlbiA9IGRvbS5maWx0ZXJWYWxpZFBvcE9iamVjdHMobmV3VHJlZSk7XHJcblx0XHRkb20udXBkYXRlRWxlbWVudChkb20ucm9vdCwgbmV3VHJlZSwgZG9tLnByZXZUcmVlKTtcclxuXHRcdGRvbS5wcmV2VHJlZSA9IG5ld1RyZWU7XHJcblx0XHRkb20uY2xlYW5TdGF0ZSgpO1xyXG5cdH0sXHJcblx0cm9vdDogKHBvcENvbXBvbmVudCwgcm9vdFByb3BzID0ge30pID0+IHtcclxuXHRcdGNvbnN0IHsgcm9vdE5hbWUsIGFjY2Vzc0tleSwgcG9wUm91dGVzIH0gPSByb290UHJvcHM7XHJcblx0XHRjb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChjb25zdGFudHMuY3JlYXRlUm9vdEVsZW1lbnRUYWcpO1xyXG5cdFx0cm9vdC5pZCA9XHJcblx0XHRcdHJvb3ROYW1lICYmIHR5cGVvZiByb290TmFtZSA9PT0gY29uc3RhbnRzLmNyZWF0ZVBPUEVsZW1lbnRUYWdUeXBlXHJcblx0XHRcdFx0PyByb290TmFtZVxyXG5cdFx0XHRcdDogY29uc3RhbnRzLmNyZWF0ZVJvb3RFbGVtZW50RGVmYXVsdElkO1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyb290KTtcclxuXHRcdGRvbS5yb290ID0gcm9vdDtcclxuXHRcdGNvbnN0IGhhc1JvdXRlcyA9XHJcblx0XHRcdHBvcFJvdXRlcyAmJiAhQXJyYXkuaXNBcnJheShwb3BSb3V0ZXMpICYmIE9iamVjdC5rZXlzKHBvcFJvdXRlcykubGVuZ3RoXHJcblx0XHRcdFx0PyB0cnVlXHJcblx0XHRcdFx0OiBmYWxzZTtcclxuXHRcdGRvbS5yb3V0ZXMgPSBoYXNSb3V0ZXMgPyBwb3BSb3V0ZXMgOiBudWxsO1xyXG5cdFx0bGV0IGNvbXBvbmVudFRvUmVuZGVyO1xyXG5cdFx0Y29uc3QgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiIyFcIilbMV07XHJcblx0XHRjb25zdCBkZWZhdWx0UGF0aCA9IGhhc1JvdXRlcyA/IE9iamVjdC5rZXlzKHBvcFJvdXRlcylbMF0gOiBudWxsO1xyXG5cdFx0aWYgKCFwYXRoICYmIGhhc1JvdXRlcykge1xyXG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiArPSBgIyEke2RlZmF1bHRQYXRofWA7XHJcblx0XHR9XHJcblx0XHRpZiAoaGFzUm91dGVzICYmIHBhdGggJiYgcG9wUm91dGVzW3BhdGhdKSB7XHJcblx0XHRcdGNvbXBvbmVudFRvUmVuZGVyID0gcG9wUm91dGVzW3BhdGhdO1xyXG5cdFx0XHRkb20uY3VyclBhdGggPSBwYXRoO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29tcG9uZW50VG9SZW5kZXIgPSBwb3BDb21wb25lbnQ7XHJcblx0XHR9XHJcblx0XHRkb20uaW5pdCgpO1xyXG5cdFx0Y29uc3QgY29tcG9uZW50U3RhdGVLZXkgPSBhY2Nlc3NLZXlcclxuXHRcdFx0PyBhY2Nlc3NLZXlcclxuXHRcdFx0OiBkb20uZ2V0Q29tcG9uZW50U3RhdGVLZXkoKTtcclxuXHRcdGNvbnN0IGlzQ29tcG9uZW50RnVuY3Rpb24gPVxyXG5cdFx0XHR0eXBlb2YgY29tcG9uZW50VG9SZW5kZXIgPT09IGNvbnN0YW50cy50eXBlb2ZQcm9wc0Z1bmN0aW9uSWRlbnRpZmllcjtcclxuXHRcdGNvbnN0IGV4cGFuZGVkQ29tcG9uZW50ID1cclxuXHRcdFx0aXNDb21wb25lbnRGdW5jdGlvbiAmJiAhZG9tLnN0YXRlW2NvbXBvbmVudFN0YXRlS2V5XVxyXG5cdFx0XHRcdD8gY29tcG9uZW50VG9SZW5kZXIoKVxyXG5cdFx0XHRcdDogY29tcG9uZW50VG9SZW5kZXI7XHJcblx0XHRkb20uaW5pdGlhbGl6ZVN0YXRlKGV4cGFuZGVkQ29tcG9uZW50LCBjb21wb25lbnRTdGF0ZUtleSk7XHJcblx0XHRjb25zdCBjb21wb25lbnRTdGF0ZSA9IGNvbXBvbmVudFN0YXRlS2V5XHJcblx0XHRcdD8gUE9QLmdldFN0YXRlKGNvbXBvbmVudFN0YXRlS2V5KVxyXG5cdFx0XHQ6IHt9O1xyXG5cdFx0ZG9tLnByZXZUcmVlID0gZXhwYW5kZWRDb21wb25lbnQucmVuZGVyKHtcclxuXHRcdFx0c3RhdGU6IGNvbXBvbmVudFN0YXRlLFxyXG5cdFx0fSk7XHJcblx0XHRkb20ucHJldlRyZWUuY2hpbGRyZW4gPSBkb20uZmlsdGVyVmFsaWRQb3BPYmplY3RzKGRvbS5wcmV2VHJlZSk7XHJcblx0XHRkb20ucmVuZGVyRm4gPSAoKSA9PlxyXG5cdFx0XHRleHBhbmRlZENvbXBvbmVudC5yZW5kZXIoe1xyXG5cdFx0XHRcdHN0YXRlOiBjb21wb25lbnRTdGF0ZSxcclxuXHRcdFx0fSk7XHJcblx0XHRkb20udXBkYXRlRWxlbWVudChyb290LCBkb20ucHJldlRyZWUpO1xyXG5cdFx0cm9vdC5hZGRFdmVudExpc3RlbmVyKGNvbnN0YW50cy5yZWZyZXNoRE9NRGVmYXVsdEFjdGlvbiwgKCkgPT4ge1xyXG5cdFx0XHRQT1AucmVmcmVzaCgpO1xyXG5cdFx0fSk7XHJcblx0fSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBPUDtcclxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQT1AgZnJvbSBcInNvbnBvcC1qc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHtcclxuXHRyZW5kZXI6IChjb21wb25lbnQpID0+IHtcclxuXHRcdGNvbnN0IHsgcHJvcHMgfSA9IGNvbXBvbmVudDtcclxuXHRcdGNvbnN0IGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZTtcclxuXHRcdGNvbnN0IGJ1dHRvbkxhYmVsID0gcHJvcHMubGFiZWw7XHJcblx0XHRjb25zdCBjbGlja0ZuID0gcHJvcHMub25DbGljaztcclxuXHJcblx0XHRyZXR1cm4gUE9QLmNyZWF0ZShgYnV0dG9ufGNsYXNzPSR7Y2xhc3NOYW1lfWAsIHsgb25jbGljazogY2xpY2tGbiB9LCBbXHJcblx0XHRcdGJ1dHRvbkxhYmVsLFxyXG5cdFx0XSk7XHJcblx0fSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcclxuIiwiaW1wb3J0IFBPUCBmcm9tIFwic29ucG9wLWpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ291bnRlciA9IHtcclxuXHRzZXQ6IChjb21wb25lbnQpID0+IHtcclxuXHRcdGNvbnN0IHsgc3RhdGUgfSA9IGNvbXBvbmVudDtcclxuXHRcdHN0YXRlLmNvdW50ZXIgPSAwO1xyXG5cdH0sXHJcblx0cmVuZGVyOiAoY29tcG9uZW50KSA9PiB7XHJcblx0XHRjb25zdCB7IHN0YXRlIH0gPSBjb21wb25lbnQ7XHJcblxyXG5cdFx0cmV0dXJuIFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9Y291bnRlci1jb250YWluZXJcIiwgW1xyXG5cdFx0XHRQT1AuY3JlYXRlKFwiYnV0dG9ufGNsYXNzPWNvdW50ZXItYnV0dG9uXCIsIFtcIi1cIl0sIHtcclxuXHRcdFx0XHRvbmNsaWNrOiAoKSA9PiAoc3RhdGUuY291bnRlciAtPSAxKSxcclxuXHRcdFx0fSksXHJcblx0XHRcdGAke3N0YXRlLmNvdW50ZXJ9YCxcclxuXHRcdFx0UE9QLmNyZWF0ZShcImJ1dHRvbnxjbGFzcz1jb3VudGVyLWJ1dHRvblwiLCBbXCIrXCJdLCB7XHJcblx0XHRcdFx0b25jbGljazogKCkgPT4gKHN0YXRlLmNvdW50ZXIgKz0gMSksXHJcblx0XHRcdH0pLFxyXG5cdFx0XSk7XHJcblx0fSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdW50ZXI7XHJcbiIsImltcG9ydCBQT1AgZnJvbSBcInNvbnBvcC1qc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlciA9IHtcclxuXHRyZW5kZXI6ICgpID0+IHtcclxuXHRcdHJldHVybiBQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPWZvb3Rlci1jb250YWluZXJcIiwgW1xyXG5cdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPWZvb3Rlci1pdGVtXCIsIFtcclxuXHRcdFx0XHRcIk1hZGUgYnkgXCIsXHJcblx0XHRcdFx0UE9QLmNyZWF0ZShcclxuXHRcdFx0XHRcdFwiYXxjbGFzcz1leHRlcm5hbC1saW5rXCIsXHJcblx0XHRcdFx0XHR7IGhyZWY6IFwiaHR0cHM6Ly9hYmlyYW1uYWlyLmNvbS9cIiwgdGFyZ2V0OiBcIl9ibGFua1wiIH0sXHJcblx0XHRcdFx0XHRbXCJtZVwiXVxyXG5cdFx0XHRcdCksXHJcblx0XHRcdF0pLFxyXG5cdFx0XSk7XHJcblx0fSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IFBPUCBmcm9tIFwic29ucG9wLWpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgSGFtYnVyZ2VySWNvbiA9IHtcclxuXHRyZW5kZXI6IChjb21wb25lbnQpID0+IHtcclxuXHRcdGNvbnN0IHsgcHJvcHMgfSA9IGNvbXBvbmVudDtcclxuXHRcdGNvbnN0IG9uQ2xpY2sgPSBwcm9wcy5vbkNsaWNrO1xyXG5cdFx0Y29uc3QgaXNPcGVuID0gcHJvcHMuaXNPcGVuO1xyXG5cclxuXHRcdHJldHVybiBQT1AuY3JlYXRlKFxyXG5cdFx0XHRcImRpdnxjbGFzcz1oYW1idXJnZXItaWNvbi1jb250YWluZXJcIixcclxuXHRcdFx0eyBvbmNsaWNrOiBvbkNsaWNrIH0sXHJcblx0XHRcdFtcclxuXHRcdFx0XHQhaXNPcGVuICYmIFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9aGFtYnVyZ2VyLWxpbmVcIiksXHJcblx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1oYW1idXJnZXItbGluZVwiKSxcclxuXHRcdFx0XHQhaXNPcGVuICYmIFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9aGFtYnVyZ2VyLWxpbmVcIiksXHJcblx0XHRcdF1cclxuXHRcdCk7XHJcblx0fSxcclxufTtcclxuIiwiaW1wb3J0IFBPUCBmcm9tIFwic29ucG9wLWpzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgSGVybyA9IHtcclxuXHRyZW5kZXI6ICgpID0+IHtcclxuXHRcdHJldHVybiBQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPWhlcm8tY29udGFpbmVyXCIsIFtcclxuXHRcdFx0UE9QLnVzZShOYXZiYXIpLFxyXG5cdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPWhlcm8tdGl0bGVcIiwgW1xyXG5cdFx0XHRcdFBPUC5jcmVhdGUoXCJzcGFufGNsYXNzPXRpdGxlLWVtcGhhc2lzXCIsIFtcInBvcCEgXCJdKSxcclxuXHRcdFx0XHRcIkpTXCIsXHJcblx0XHRcdF0pLFxyXG5cdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPWhlcm8tc3VidGl0bGVcIiwgW1wiZnJvbnRlbmQgbWFkZSBlYXN5XCJdKSxcclxuXHRcdFx0UE9QLmNyZWF0ZShcImF8Y2xhc3M9bGluay1idXR0b25cIiwgeyBocmVmOiBcIiMhL2d1aWRlLXBhZ2VcIiB9LCBbXHJcblx0XHRcdFx0UE9QLnVzZShCdXR0b24sIHtcclxuXHRcdFx0XHRcdGNsYXNzTmFtZTogXCJoZXJvLWRlbW8tYnV0dG9uXCIsXHJcblx0XHRcdFx0XHRsYWJlbDogXCJTdGFydCBOb3dcIixcclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0XSksXHJcblx0XHRdKTtcclxuXHR9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVybztcclxuIiwiaW1wb3J0IFBPUCBmcm9tIFwic29ucG9wLWpzXCI7XHJcbmltcG9ydCB7IEhhbWJ1cmdlckljb24gfSBmcm9tIFwiLi9IYW1idXJnZXJJY29uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2YmFyID0ge1xyXG5cdHNldDogKGNvbXBvbmVudCkgPT4ge1xyXG5cdFx0Y29uc3QgeyBzdGF0ZSB9ID0gY29tcG9uZW50O1xyXG5cdFx0c3RhdGUuaGFtYnVyZ2VyTWVudU9wZW4gPSBmYWxzZTtcclxuXHR9LFxyXG5cdHJlbmRlcjogKGNvbXBvbmVudCkgPT4ge1xyXG5cdFx0Y29uc3QgeyBwcm9wcywgc3RhdGUgfSA9IGNvbXBvbmVudDtcclxuXHRcdGNvbnN0IG5hdkJhclRpdGxlID0gcHJvcHMudGl0bGU7XHJcblx0XHRjb25zdCBtZW51SXRlbXMgPSBbXHJcblx0XHRcdHsgdGV4dDogXCJIb21lXCIsIHJvdXRlOiBcIiMhL2hvbWUtcGFnZVwiIH0sXHJcblx0XHRcdHsgdGV4dDogXCJHdWlkZVwiLCByb3V0ZTogXCIjIS9ndWlkZS1wYWdlXCIgfSxcclxuXHRcdF07XHJcblx0XHRjb25zdCBjdXJyUGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xyXG5cdFx0cmV0dXJuIFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9bmF2YmFyLWNvbnRhaW5lclwiLCBbXHJcblx0XHRcdFBPUC51c2UoSGFtYnVyZ2VySWNvbiwge1xyXG5cdFx0XHRcdG9uQ2xpY2s6ICgpID0+IChzdGF0ZS5oYW1idXJnZXJNZW51T3BlbiA9ICFzdGF0ZS5oYW1idXJnZXJNZW51T3BlbiksXHJcblx0XHRcdFx0aXNPcGVuOiBzdGF0ZS5oYW1idXJnZXJNZW51T3BlbixcclxuXHRcdFx0fSksXHJcblx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9bmF2YmFyLXRpdGxlXCIsIFtuYXZCYXJUaXRsZV0pLFxyXG5cdFx0XHRzdGF0ZS5oYW1idXJnZXJNZW51T3BlbiAmJlxyXG5cdFx0XHRcdFBPUC5jcmVhdGUoXHJcblx0XHRcdFx0XHRcImRpdnxjbGFzcz1oYW1idXJnZXItbmF2YmFyLW1lbnVcIixcclxuXHRcdFx0XHRcdG1lbnVJdGVtcy5tYXAoKGl0ZW0pID0+XHJcblx0XHRcdFx0XHRcdFBPUC5jcmVhdGUoXHJcblx0XHRcdFx0XHRcdFx0XCJhfGNsYXNzPWhhbWJ1cmdlci1tZW51LWl0ZW1cIixcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRocmVmOiBpdGVtLnJvdXRlLFxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0W2l0ZW0udGV4dF1cclxuXHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdCksXHJcblx0XHRcdFBPUC5jcmVhdGUoXHJcblx0XHRcdFx0XCJkaXZ8Y2xhc3M9bmF2YmFyLW1lbnVcIixcclxuXHRcdFx0XHRtZW51SXRlbXMubWFwKChpdGVtKSA9PlxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcclxuXHRcdFx0XHRcdFx0YHNwYW58Y2xhc3M9bmF2YmFyLW1lbnUtaXRlbSAke1xyXG5cdFx0XHRcdFx0XHRcdGN1cnJQYWdlID09PSBpdGVtLnJvdXRlID8gXCIgY3VycmVudC1wYWdlXCIgOiBcIlwiXHJcblx0XHRcdFx0XHRcdH1gLFxyXG5cdFx0XHRcdFx0XHRbXHJcblx0XHRcdFx0XHRcdFx0UE9QLmNyZWF0ZShcImF8Y2xhc3M9bmF2YmFyLWxpbmtcIiwgeyBocmVmOiBpdGVtLnJvdXRlIH0sIFtcclxuXHRcdFx0XHRcdFx0XHRcdGl0ZW0udGV4dCxcclxuXHRcdFx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdClcclxuXHRcdFx0KSxcclxuXHRcdF0pO1xyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiIsImltcG9ydCBQT1AgZnJvbSBcInNvbnBvcC1qc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlZEJveCA9IHtcclxuXHRzZXQ6IChjb21wb25lbnQpID0+IHtcclxuXHRcdGNvbnN0IHsgc3RhdGUgfSA9IGNvbXBvbmVudDtcclxuXHRcdHN0YXRlLnNob3dCb3ggPSB0cnVlO1xyXG5cdH0sXHJcblx0cmVuZGVyOiAoY29tcG9uZW50KSA9PiB7XHJcblx0XHRjb25zdCB7IHN0YXRlIH0gPSBjb21wb25lbnQ7XHJcblxyXG5cdFx0cmV0dXJuIFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9Ym94LWNvbnRhaW5lclwiLCBbXHJcblx0XHRcdFBPUC5jcmVhdGUoXHJcblx0XHRcdFx0XCJidXR0b258Y2xhc3M9Ym94LWJ1dHRvblwiLFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG9uY2xpY2s6ICgpID0+IChzdGF0ZS5zaG93Qm94ID0gIXN0YXRlLnNob3dCb3gpLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0W3N0YXRlLnNob3dCb3ggPyBcIkhpZGVcIiA6IFwiU2hvd1wiXVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZS5zaG93Qm94ICYmIFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9Ym94LWRpc3BsYXlcIiksXHJcblx0XHRdKTtcclxuXHR9LFxyXG59O1xyXG4iLCJpbXBvcnQgUE9QIGZyb20gXCJzb25wb3AtanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTaWRlTmF2YmFyID0ge1xyXG5cdHNjcm9sbFZpZXc6IChlbGVtZW50SWQpID0+IHtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCkuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogXCJjZW50ZXJcIiB9KTtcclxuXHR9LFxyXG5cdHJlbmRlcjogKCkgPT4ge1xyXG5cdFx0cmV0dXJuIFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2lkZS1uYXZiYXJcIiwgW1xyXG5cdFx0XHRcIkd1aWRlXCIsXHJcblx0XHRcdFBPUC5jcmVhdGUoXCJ1bHxjbGFzcz1uYXZiYXItcGFnZS1zZWN0aW9uLW92ZXJcIiwgW1xyXG5cdFx0XHRcdFBPUC5jcmVhdGUoXHJcblx0XHRcdFx0XHRcImxpfGNsYXNzPW5hdmJhci1wYWdlLXNlY3Rpb24tYnVsbGV0XCIsXHJcblx0XHRcdFx0XHR7IG9uY2xpY2s6ICgpID0+IFNpZGVOYXZiYXIuc2Nyb2xsVmlldyhcImludHJvXCIpIH0sXHJcblx0XHRcdFx0XHRbXCJJbnRyb1wiXVxyXG5cdFx0XHRcdCksXHJcblx0XHRcdFx0UE9QLmNyZWF0ZShcInVsfGNsYXNzPW5hdmJhci1wYWdlLXNlY3Rpb24tc3ViXCIsIFtcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXHJcblx0XHRcdFx0XHRcdFwibGl8Y2xhc3M9bmF2YmFyLXBhZ2Utc2VjdGlvbi1idWxsZXRcIixcclxuXHRcdFx0XHRcdFx0eyBvbmNsaWNrOiAoKSA9PiBTaWRlTmF2YmFyLnNjcm9sbFZpZXcoXCJjZG5cIikgfSxcclxuXHRcdFx0XHRcdFx0W1wiY2RuXCJdXHJcblx0XHRcdFx0XHQpLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcclxuXHRcdFx0XHRcdFx0XCJsaXxjbGFzcz1uYXZiYXItcGFnZS1zZWN0aW9uLWJ1bGxldFwiLFxyXG5cdFx0XHRcdFx0XHR7IG9uY2xpY2s6ICgpID0+IFNpZGVOYXZiYXIuc2Nyb2xsVmlldyhcIm5wbVwiKSB9LFxyXG5cdFx0XHRcdFx0XHRbXCJucG1cIl1cclxuXHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XSksXHJcblx0XHRcdF0pLFxyXG5cdFx0XHRQT1AuY3JlYXRlKFwidWx8Y2xhc3M9bmF2YmFyLXBhZ2Utc2VjdGlvbi1vdmVyXCIsIFtcclxuXHRcdFx0XHRQT1AuY3JlYXRlKFxyXG5cdFx0XHRcdFx0XCJsaXxjbGFzcz1uYXZiYXItcGFnZS1zZWN0aW9uLWJ1bGxldFwiLFxyXG5cdFx0XHRcdFx0eyBvbmNsaWNrOiAoKSA9PiBTaWRlTmF2YmFyLnNjcm9sbFZpZXcoXCJjb21wb25lbnRzXCIpIH0sXHJcblx0XHRcdFx0XHRbXCJDb21wb25lbnRzXCJdXHJcblx0XHRcdFx0KSxcclxuXHRcdFx0XHRQT1AuY3JlYXRlKFwidWx8Y2xhc3M9bmF2YmFyLXBhZ2Utc2VjdGlvbi1zdWJcIiwgW1xyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcclxuXHRcdFx0XHRcdFx0XCJsaXxjbGFzcz1uYXZiYXItcGFnZS1zZWN0aW9uLWJ1bGxldFwiLFxyXG5cdFx0XHRcdFx0XHR7IG9uY2xpY2s6ICgpID0+IFNpZGVOYXZiYXIuc2Nyb2xsVmlldyhcInJlbmRlcmluZy1odG1sXCIpIH0sXHJcblx0XHRcdFx0XHRcdFtcIlJlbmRlcmluZyBIVE1MXCJdXHJcblx0XHRcdFx0XHQpLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcclxuXHRcdFx0XHRcdFx0XCJsaXxjbGFzcz1uYXZiYXItcGFnZS1zZWN0aW9uLWJ1bGxldFwiLFxyXG5cdFx0XHRcdFx0XHR7IG9uY2xpY2s6ICgpID0+IFNpZGVOYXZiYXIuc2Nyb2xsVmlldyhcInJldXNpbmctY29tcG9uZW50c1wiKSB9LFxyXG5cdFx0XHRcdFx0XHRbXCJSZXVzaW5nIENvbXBvbmVudHNcIl1cclxuXHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFxyXG5cdFx0XHRcdFx0XHRcImxpfGNsYXNzPW5hdmJhci1wYWdlLXNlY3Rpb24tYnVsbGV0XCIsXHJcblx0XHRcdFx0XHRcdHsgb25jbGljazogKCkgPT4gU2lkZU5hdmJhci5zY3JvbGxWaWV3KFwiYXJndW1lbnQtb3JkZXJpbmdcIikgfSxcclxuXHRcdFx0XHRcdFx0W1wiQXJndW1lbnQgT3JkZXJpbmdcIl1cclxuXHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XSksXHJcblx0XHRcdF0pLFxyXG5cdFx0XHRQT1AuY3JlYXRlKFwidWx8Y2xhc3M9bmF2YmFyLXBhZ2Utc2VjdGlvbi1vdmVyXCIsIFtcclxuXHRcdFx0XHRQT1AuY3JlYXRlKFxyXG5cdFx0XHRcdFx0XCJsaXxjbGFzcz1uYXZiYXItcGFnZS1zZWN0aW9uLWJ1bGxldFwiLFxyXG5cdFx0XHRcdFx0eyBvbmNsaWNrOiAoKSA9PiBTaWRlTmF2YmFyLnNjcm9sbFZpZXcoXCJzdGF0ZVwiKSB9LFxyXG5cdFx0XHRcdFx0W1wiU3RhdGVcIl1cclxuXHRcdFx0XHQpLFxyXG5cdFx0XHRdKSxcclxuXHRcdFx0UE9QLmNyZWF0ZShcInVsfGNsYXNzPW5hdmJhci1wYWdlLXNlY3Rpb24tb3ZlclwiLCBbXHJcblx0XHRcdFx0UE9QLmNyZWF0ZShcclxuXHRcdFx0XHRcdFwibGl8Y2xhc3M9bmF2YmFyLXBhZ2Utc2VjdGlvbi1idWxsZXRcIixcclxuXHRcdFx0XHRcdHsgb25jbGljazogKCkgPT4gU2lkZU5hdmJhci5zY3JvbGxWaWV3KFwicm9vdC1zZWN0aW9uXCIpIH0sXHJcblx0XHRcdFx0XHRbXCJSb290XCJdXHJcblx0XHRcdFx0KSxcclxuXHRcdFx0XSksXHJcblx0XHRcdFBPUC5jcmVhdGUoXCJ1bHxjbGFzcz1uYXZiYXItcGFnZS1zZWN0aW9uLW92ZXJcIiwgW1xyXG5cdFx0XHRcdFBPUC5jcmVhdGUoXHJcblx0XHRcdFx0XHRcImxpfGNsYXNzPW5hdmJhci1wYWdlLXNlY3Rpb24tYnVsbGV0XCIsXHJcblx0XHRcdFx0XHR7IG9uY2xpY2s6ICgpID0+IFNpZGVOYXZiYXIuc2Nyb2xsVmlldyhcInJvdXRpbmdcIikgfSxcclxuXHRcdFx0XHRcdFtcIlJvdXRpbmdcIl1cclxuXHRcdFx0XHQpLFxyXG5cdFx0XHRdKSxcclxuXHRcdFx0UE9QLmNyZWF0ZShcInVsfGNsYXNzPW5hdmJhci1wYWdlLXNlY3Rpb24tb3ZlclwiLCBbXHJcblx0XHRcdFx0UE9QLmNyZWF0ZShcclxuXHRcdFx0XHRcdFwibGl8Y2xhc3M9bmF2YmFyLXBhZ2Utc2VjdGlvbi1idWxsZXRcIixcclxuXHRcdFx0XHRcdHsgb25jbGljazogKCkgPT4gU2lkZU5hdmJhci5zY3JvbGxWaWV3KFwidGlwc1wiKSB9LFxyXG5cdFx0XHRcdFx0W1wiVGlwc1wiXVxyXG5cdFx0XHRcdCksXHJcblx0XHRcdF0pLFxyXG5cdFx0XSk7XHJcblx0fSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVOYXZiYXI7XHJcbiIsImltcG9ydCBQT1AgZnJvbSBcInNvbnBvcC1qc1wiO1xyXG5cclxuZnVuY3Rpb24gc3RvcHdhdGNoTW9kZWwoKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGludGVydmFsOiBudWxsLFxyXG5cdFx0c2Vjb25kczogMCxcclxuXHRcdGlzUGF1c2VkOiB0cnVlLFxyXG5cdH07XHJcbn1cclxuXHJcbmNvbnN0IGFjdGlvbnMgPSB7XHJcblx0aW5jcmVtZW50KG1vZGVsKSB7XHJcblx0XHRtb2RlbC5zZWNvbmRzKys7XHJcblx0XHRQT1AucmVmcmVzaCgpO1xyXG5cdH0sXHJcblx0c3RhcnQobW9kZWwpIHtcclxuXHRcdG1vZGVsLmludGVydmFsID0gc2V0SW50ZXJ2YWwoYWN0aW9ucy5pbmNyZW1lbnQsIDEwMDAsIG1vZGVsKTtcclxuXHR9LFxyXG5cdHN0b3AobW9kZWwpIHtcclxuXHRcdG1vZGVsLmludGVydmFsID0gY2xlYXJJbnRlcnZhbChtb2RlbC5pbnRlcnZhbCk7XHJcblx0fSxcclxuXHRyZXNldChtb2RlbCkge1xyXG5cdFx0bW9kZWwuc2Vjb25kcyA9IDA7XHJcblx0fSxcclxuXHR0b2dnbGUobW9kZWwpIHtcclxuXHRcdG1vZGVsLmlzUGF1c2VkID8gYWN0aW9ucy5zdGFydChtb2RlbCkgOiBhY3Rpb25zLnN0b3AobW9kZWwpO1xyXG5cdFx0bW9kZWwuaXNQYXVzZWQgPSAhbW9kZWwuaXNQYXVzZWQ7XHJcblx0fSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTdG9wd2F0Y2ggPSB7XHJcblx0c2V0KGNvbXBvbmVudCkge1xyXG5cdFx0Y29uc3QgeyBzdGF0ZSB9ID0gY29tcG9uZW50O1xyXG5cdFx0c3RhdGUubW9kZWwgPSBzdG9wd2F0Y2hNb2RlbCgpO1xyXG5cdH0sXHJcblx0cmVuZGVyKGNvbXBvbmVudCkge1xyXG5cdFx0Y29uc3QgeyBzdGF0ZSB9ID0gY29tcG9uZW50O1xyXG5cclxuXHRcdHJldHVybiBQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXN0b3B3YXRjaC1jb250YWluZXJcIiwgW1xyXG5cdFx0XHRQT1AuY3JlYXRlKFwic3BhbnxjbGFzcz1zdG9wd2F0Y2gtc3BhblwiLCBbYCR7c3RhdGUubW9kZWwuc2Vjb25kc31gXSksXHJcblx0XHRcdFBPUC5jcmVhdGUoXHJcblx0XHRcdFx0XCJidXR0b258Y2xhc3M9c3RvcHdhdGNoLWJ1dHRvblwiLFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG9uY2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0YWN0aW9ucy50b2dnbGUoc3RhdGUubW9kZWwpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFtzdGF0ZS5tb2RlbC5pc1BhdXNlZCA/IFwiU3RhcnRcIiA6IFwiUGF1c2VcIl1cclxuXHRcdFx0KSxcclxuXHRcdFx0UE9QLmNyZWF0ZShcclxuXHRcdFx0XHRcImJ1dHRvbnxjbGFzcz1zdG9wd2F0Y2gtYnV0dG9uXCIsXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0b25jbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRhY3Rpb25zLnJlc2V0KHN0YXRlLm1vZGVsKTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRbXCJSZXNldFwiXVxyXG5cdFx0XHQpLFxyXG5cdFx0XSk7XHJcblx0fSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3B3YXRjaDtcclxuIiwiaW1wb3J0IFBPUCBmcm9tIFwic29ucG9wLWpzXCI7XHJcbmltcG9ydCBcIi4vc3R5bGVzL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9wYWdlcy9Ib21lXCI7XHJcbmltcG9ydCBHdWlkZSBmcm9tIFwiLi9wYWdlcy9HdWlkZVwiO1xyXG5cclxuY29uc3Qgcm91dGVzID0ge1xyXG5cdFwiL2hvbWUtcGFnZVwiOiBIb21lLFxyXG5cdFwiL2d1aWRlLXBhZ2VcIjogR3VpZGUsXHJcbn07XHJcblxyXG5QT1Aucm9vdChIb21lLCB7IHJvb3ROYW1lOiBcInBvcC1hcHAtcm9vdFwiLCBwb3BSb3V0ZXM6IHJvdXRlcyB9KTsgLy8gZW50cnkgcG9pbnQgZm9yIHBvcCEgYXBwIHdpdGggY3VzdG9tIHJvb3QgbmFtZVxyXG4iLCJpbXBvcnQgUE9QIGZyb20gXCJzb25wb3AtanNcIjtcclxuaW1wb3J0IENvdW50ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ291bnRlclwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhclwiO1xyXG5pbXBvcnQgeyBSZWRCb3ggfSBmcm9tIFwiLi4vY29tcG9uZW50cy9SZWRCb3hcIjtcclxuaW1wb3J0IFNpZGVOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2lkZU5hdmJhclwiO1xyXG5pbXBvcnQgU3RvcHdhdGNoIGZyb20gXCIuLi9jb21wb25lbnRzL1N0b3B3YXRjaFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEd1aWRlID0ge1xyXG5cdHJlbmRlcjogKCkgPT4ge1xyXG5cdFx0cmV0dXJuIFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9Z3VpZGUtcGFnZS1jb250YWluZXJcIiwgW1xyXG5cdFx0XHRQT1AudXNlKE5hdmJhciwgeyB0aXRsZTogXCJHdWlkZVwiIH0pLFxyXG5cdFx0XHRQT1AudXNlKFNpZGVOYXZiYXIsIHsgcGFnZTogXCJndWlkZS1wYWdlXCIgfSksXHJcblx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9cGFnZS1zZWN0aW9uc1wiLCBbXHJcblx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uXCIsIFtcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8aWQ9aW50cm98Y2xhc3M9c2VjdGlvbi10aXRsZVwiLCBbXCJJbnRyb1wiXSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHRcdFwicG9wISBKUyBpcyBhIGNvbXBhY3QgYW5kIGVhc3kgdG8gbGVhcm4gZnJhbWV3b3JrIHRoYXQgY2FuIGJlIHVzZWQgdG8gbWFrZSBhIGZyb250ZW5kIGludGVyZmFjZSB2ZXJ5IHF1aWNrbHkuIEl0IGNvbWVzIGVxdWlwcGVkIHdpdGggdGhlIGNhcGFiaWxpdHkgb2YgbWFraW5nIGNvbXBvbmVudHMgY29udGFpbmluZyBzdGF0ZSBhbmQgbGlmZWN5Y2xlIG1ldGhvZHMsIGFwcGxpY2F0aW9uIHBhZ2Ugcm91dGluZyBhbmQgcmVhY3RpbmcgdG8gY2hhbmdlcyBpbiBzdGF0ZS5cIixcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uLWNvbnRlbnRcIiwgW1xyXG5cdFx0XHRcdFx0XHRcIlRoaXMgd2Vic2l0ZSBhbmQgYWxsIGl0cyBjb21wb25lbnRzIGFyZSBwb3dlcmVkIGJ5IHBvcCEgSlMuICBBZnRlciByZXNlYXJjaGluZyBhYm91dCB2aXJ0dWFsIERPTSBkdXJpbmcgYW4gaW50ZXJuc2hpcCByb2xlIGFzIGEgZnJvbnRlbmQgZGV2ZWxvcGVyLCBJIHRob3VnaHQgaXQgd291bGQgYmUgZnVuIHRvIG1ha2UgbXkgb3duIGZyYW1ld29yayBpbnNwaXJlZCBieSBvbmUgSSB1c2VkIGR1cmluZyBteSB3b3JrIHRlcm0gLSBNaXRocmlsIEpTLiBUaGlzIHByb2plY3QgaXMgb25seSBhIGxpdHRsZSBvdmVyIDM1MCBzbG9jIGFuZCA2LjNrQiBpbiBzaXplICgyLjJrQiBnemlwcGVkKS4gSWYgeW91IGZpbmQgdGhpcyBwcm9qZWN0IGludGVyZXN0aW5nLCBjb25zaWRlciBnaXZpbmcgaXQgYSBzdGFyIG9uIFwiLFxyXG5cdFx0XHRcdFx0XHRQT1AuY3JlYXRlKFxyXG5cdFx0XHRcdFx0XHRcdFwiYXxjbGFzcz1leHRlcm5hbC1saW5rXCIsXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0aHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vYWJpcmFtcm5haXIvcG9wLWpzXCIsXHJcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXQ6IFwiX2JsYW5rXCIsXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRbXCJHaXRIdWJcIl1cclxuXHRcdFx0XHRcdFx0KSxcclxuXHRcdFx0XHRcdFx0XCIuXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8aWQ9Y2RufGNsYXNzPXNlY3Rpb24tc3VidGl0bGVcIiwgW1wiY2RuXCJdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1jb250ZW50XCIsIFtcclxuXHRcdFx0XHRcdFx0XCJUaGUgZWFzaWVzdCB3YXkgdG8gc2VlIHdoYXQgcG9wISBKUyBjYW4gZG8gaXMgdG8gdXNlIHNvbWUgSFRNTCBib2lsZXJwbGF0ZSBhbmQgY29weSB0aGUgbGluayBiZWxvdyBpbnRvIGEgSFRNTCBzY3JpcHQgdGFnLiBZb3UgY2FuIHRoZW4gYWNjZXNzIHBvcCEgSlMgd2l0aGluIGFub3RoZXIgc2V0IG9mIHNjcmlwdCB0YWdzLlwiLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwicHJlfGNsYXNzPWNvZGUtc25pcHBldFwiLCBbXHJcblx0XHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJjb2RlfGNsYXNzPWNvZGUtYmxvY2tcIiwgW1xyXG5cdFx0XHRcdFx0XHRcdGBodHRwczovL3VucGtnLmNvbS9zb25wb3AtanMvcG9wLm1pbi5qc2AsXHJcblx0XHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHRcdFwiQSBDb2RlUGVuIHVzaW5nIHBvcCEgSlMgbGlrZSB0aGlzIGlzIGF2YWlsYWJsZSBcIixcclxuXHRcdFx0XHRcdFx0UE9QLmNyZWF0ZShcclxuXHRcdFx0XHRcdFx0XHRcImF8Y2xhc3M9ZXh0ZXJuYWwtbGlua1wiLFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGhyZWY6IFwiaHR0cHM6Ly9jb2RlcGVuLmlvL2FiaXJhbXJuYWlyL3Blbi9Sd01XS0VPXCIsXHJcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXQ6IFwiX2JsYW5rXCIsXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRbXCJoZXJlXCJdXHJcblx0XHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHRcdFwiLlwiLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGlkPW5wbXxjbGFzcz1zZWN0aW9uLXN1YnRpdGxlXCIsIFtcIm5wbVwiXSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHRcdFwiRm9yIGNvbXBsZXggcHJvamVjdHMsIHlvdSBjYW4gaW5zdGFsbCBwb3AhIEpTIHZpYSBucG0gYW5kIGNvbmZpZ3VyZSBhIHByb2plY3Qgd2l0aCBhIGJ1bmRsZXIgb2YgeW91ciBjaG9pY2UuIEFsdGVybmF0aXZlbHksIHlvdSBjYW4gdXNlIHRoZSBcIixcclxuXHRcdFx0XHRcdFx0UE9QLmNyZWF0ZShcclxuXHRcdFx0XHRcdFx0XHRcImF8Y2xhc3M9ZXh0ZXJuYWwtbGlua1wiLFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGhyZWY6IFwiaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvY3JlYXRlLXBvcC1hcHBcIixcclxuXHRcdFx0XHRcdFx0XHRcdHRhcmdldDogXCJfYmxhbmtcIixcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFtcImNyZWF0ZS1wb3AtYXBwXCJdXHJcblx0XHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHRcdFwiIHNjcmlwdCB3aGljaCB1c2VzIFdlYnBhY2sgdG8gY3JlYXRlIGEgc2FtcGxlIGFwcC4gVG8gdXNlIHBvcCEgSlMsIGp1c3QgaW1wb3J0IFBPUC5cIixcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcInByZXxjbGFzcz1jb2RlLXNuaXBwZXRcIiwgW1xyXG5cdFx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiY29kZXxjbGFzcz1jb2RlLWJsb2NrXCIsIFtcclxuXHRcdFx0XHRcdFx0XHRgLy8gSW4gdGhlIHRlcm1pbmFsXFxubnBtIGluc3RhbGwgc29ucG9wLWpzXCJcXG5cXG4vLyBJbiBuZXcgZmlsZXNcXG5pbXBvcnQgUE9QIGZyb20gXCJzb25wb3AtanNcIjtgLFxyXG5cdFx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvblwiLCBbXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGlkPWNvbXBvbmVudHN8Y2xhc3M9c2VjdGlvbi10aXRsZVwiLCBbXCJDb21wb25lbnRzXCJdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1jb250ZW50XCIsIFtcclxuXHRcdFx0XHRcdFx0XCJMaWtlIG1vc3QgZnJhbWV3b3JrcywgcG9wISBKUyB1c2VzIGEgY29tcG9uZW50IGJhc2VkIGFwcHJvYWNoLiBDb21wb25lbnRzIGFyZSBqdXN0IHJldXNhYmxlIGNodW5rcyBvZiBIVE1MIHRoYXQgaGF2ZSB0aGVpciBvd24gc3RhdGUgYW5kIHByb3BlcnRpZXMuXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8aWQ9cmVuZGVyaW5nLWh0bWx8Y2xhc3M9c2VjdGlvbi1zdWJ0aXRsZVwiLCBbXHJcblx0XHRcdFx0XHRcdFwiUmVuZGVyXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1jb250ZW50XCIsIFtcclxuXHRcdFx0XHRcdFx0XCJwb3AhIGNvbXBvbmVudHMgYXJlIG9iamVjdHMgdGhhdCBjb250YWluIGEgcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIHJlbmRlciBmdW5jdGlvbiB0ZWxscyBwb3AhIEpTIHdoYXQgbmVlZHMgdG8gYmUgZGlzcGxheWVkIG9uIHRoZSBwYWdlLlwiLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHRcdFwiQSByZW5kZXIgZnVuY3Rpb24gY2FuIHJldHVybiBqdXN0IEhUTUwgb3IgYW5vdGhlciBwb3AhIGNvbXBvbmVudC5cIixcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcInByZXxjbGFzcz1jb2RlLXNuaXBwZXRcIiwgW1xyXG5cdFx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiY29kZXxjbGFzcz1jb2RlLWJsb2NrXCIsIFtcclxuXHRcdFx0XHRcdFx0XHRgZXhwb3J0IGNvbnN0IHBvcENvbXBvbmVudCA9IHtcXG4gICByZW5kZXI6ICgpID0+IHtcXG4gICAgICAgIHJldHVybiBQT1AuY3JlYXRlKCkvUE9QLnVzZSgpO1xcbiAgIH1cXG59YCxcclxuXHRcdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1jb250ZW50XCIsIFtcclxuXHRcdFx0XHRcdFx0XCJBIHBvcCEgY29tcG9uZW50IGRvZXMgbm90IGhhdmUgdG8gYmUgYW4gb2JqZWN0LiBJdCBjYW4gYWxzbyBiZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBvYmplY3QuXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJwcmV8Y2xhc3M9Y29kZS1zbmlwcGV0XCIsIFtcclxuXHRcdFx0XHRcdFx0UE9QLmNyZWF0ZShcImNvZGV8Y2xhc3M9Y29kZS1ibG9ja1wiLCBbXHJcblx0XHRcdFx0XHRcdFx0YGZ1bmN0aW9uIHBvcENvbXBvbmVudCAoKSB7XFxuICAgcmV0dXJuIHsgXFxuICAgICAgcmVuZGVyOiAoKSA9PiB7XFxuICAgICAgICByZXR1cm4gUE9QLmNyZWF0ZSgpL1BPUC51c2UoKTtcXG4gICAgICB9XFxuICAgfVxcbn1gLFxyXG5cdFx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxpZD1yZW5kZXJpbmctaHRtbHxjbGFzcz1zZWN0aW9uLXN1YnRpdGxlXCIsIFtcclxuXHRcdFx0XHRcdFx0XCJDcmVhdGUgSFRNTFwiLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHRcdFwiV2l0aCB0aGUgY3JlYXRlKCkgZnVuY3Rpb24sIHlvdSBjYW4gZ2VuZXJhdGUgSFRNTC4gVGhlIGZpcnN0IGFyZ3VtZW50IGFjY2VwdHMgYW55IHZhbGlkIEhUTUwgdGFnLlwiLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwicHJlfGNsYXNzPWNvZGUtc25pcHBldFwiLCBbXHJcblx0XHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJjb2RlfGNsYXNzPWNvZGUtYmxvY2tcIiwgW1xyXG5cdFx0XHRcdFx0XHRcdGBQT1AuY3JlYXRlKFwiZGl2XCIsIFtcIkhlbGxvIFdvcmxkXCJdKTtcXG5cXG4vLyBSZW5kZXJlZFxcbjxkaXY+XFxuICAgIEhlbGxvIFdvcmxkXFxuPC9kaXY+YCxcclxuXHRcdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1jb250ZW50XCIsIFtcclxuXHRcdFx0XHRcdFx0XCJDbGFzcyBhbmQgaWQgZm9yIHRoZSBlbGVtZW50IGNhbiBhbHNvIGJlIHBhc3NlZCBpbiBieSB1c2luZyBzdHJpbmdzIGNsYXNzPSBhbmQgaWQ9IHNlcGFyYXRlZCBieSB8LiBUaGUgb3JkZXIgb2YgY2xhc3MgYW5kIGlkIGRvZXMgbm90IG1hdHRlciwgYnV0IHRoZSB0YWcgbXVzdCBhbHdheXMgY29tZSBmaXJzdC5cIixcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcInByZXxjbGFzcz1jb2RlLXNuaXBwZXRcIiwgW1xyXG5cdFx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiY29kZXxjbGFzcz1jb2RlLWJsb2NrXCIsIFtcclxuXHRcdFx0XHRcdFx0XHRgUE9QLmNyZWF0ZShcImRpdnxjbGFzcz1oZWxsb3xpZD13b3JsZFwiLCBbXCJIZWxsbyBXb3JsZFwiXSk7XFxuXFxuLy8gUmVuZGVyZWRcXG48ZGl2IGlkPVwid29ybGRcIiBjbGFzcz1cImhlbGxvXCI+XFxuICAgIEhlbGxvIFdvcmxkXFxuPC9kaXY+YCxcclxuXHRcdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8aWQ9cmV1c2luZy1jb21wb25lbnRzfGNsYXNzPXNlY3Rpb24tc3VidGl0bGVcIiwgW1xyXG5cdFx0XHRcdFx0XHRcIlVzZSBDb21wb25lbnRzXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1jb250ZW50XCIsIFtcclxuXHRcdFx0XHRcdFx0XCJXaXRoIHRoZSB1c2UoKSBmdW5jdGlvbiwgeW91IGNhbiB1dGlsaXplIGltcG9ydGVkIHBvcCEgY29tcG9uZW50cyBhbmQgY29tcG9uZW50IHN0YXRlLlwiLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwicHJlfGNsYXNzPWNvZGUtc25pcHBldFwiLCBbXHJcblx0XHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJjb2RlfGNsYXNzPWNvZGUtYmxvY2tcIiwgW1xyXG5cdFx0XHRcdFx0XHRcdGBpbXBvcnQgY29tcG9uZW50IGZyb20gXCIvcGF0aFwiO1xcblxcblBPUC51c2UoY29tcG9uZW50LCBwcm9wcywgY2hpbGRyZW4pO2AsXHJcblx0XHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGlkPWFyZ3VtZW50LW9yZGVyaW5nfGNsYXNzPXNlY3Rpb24tc3VidGl0bGVcIiwgW1xyXG5cdFx0XHRcdFx0XHRcIkFyZ3VtZW50IE9yZGVyaW5nXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1jb250ZW50XCIsIFtcclxuXHRcdFx0XHRcdFx0XCJXaXRoIHRoZSBjcmVhdGUoKSBhbmQgdXNlKCkgZnVuY3Rpb25zLCB0aGUgb3JkZXIgZG9lcyBub3QgbWF0dGVyIHdoZW4gcHJvdmlkaW5nIHByb3BzIGFuZCBjaGlsZHJlbi4gSXQgb25seSBtYXR0ZXJzIHRoYXQgdGhlIHByb3BzIGFyZSBpbiBhbiBvYmplY3QgYW5kIGNoaWxkcmVuIGFyZSBpbiBhbiBhcnJheS5cIixcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uLWNvbnRlbnRcIiwgW1xyXG5cdFx0XHRcdFx0XHRcIkNoaWxkcmVuIGNhbiBlaXRoZXIgYmUgc3RyaW5ncyB3aGljaCBnZXQgdHJhbnNmb3JtZWQgdG8gSFRNTCB0ZXh0IG5vZGVzIG9yIHBvcCBjb21wb25lbnRzIHdyYXBwZWQgYnkgdGhlIGNyZWF0ZSgpIG9yIHVzZSgpIGZ1bmN0aW9ucy5cIixcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uLWNvbnRlbnRcIiwgW1xyXG5cdFx0XHRcdFx0XHRcIlRoZSBvcmRlciB0aGF0IHRoZSBjaGlsZHJlbiBhcmUgcGFzc2VkIGludG8gdGhlIGFycmF5IGZyb20gbGVmdCB0byByaWdodCBpcyBob3cgdGhleSBhcmUgcmVuZGVyZWQgdG9wIHRvIGJvdHRvbS5cIixcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcInByZXxjbGFzcz1jb2RlLXNuaXBwZXRcIiwgW1xyXG5cdFx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiY29kZXxjbGFzcz1jb2RlLWJsb2NrXCIsIFtcclxuXHRcdFx0XHRcdFx0XHRgUE9QLmNyZWF0ZShcImRpdlwiLCBbUE9QLmNyZWF0ZShcInNwYW5cIiksIFBPUC5jcmVhdGUoXCJidXR0b25cIiwgXCJDbGljayBNZVwiKV0pO1xcblxcbi8vIFJlbmRlcmVkXFxuPGRpdj5cXG4gICAgPHNwYW4+XFxuICAgICAgICA8YnV0dG9uPlxcbiAgICAgICAgICAgIENsaWNrIE1lXFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgPC9zcGFuPlxcbjwvZGl2PmAsXHJcblx0XHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XSksXHJcblx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uXCIsIFtcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8aWQ9c3RhdGV8Y2xhc3M9c2VjdGlvbi10aXRsZVwiLCBbXCJTdGF0ZVwiXSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHRcdFwiRXZlcnkgaW5zdGFuY2Ugb2YgYSBwb3AhIGNvbXBvbmVudCwgZXZlbiBpZGVudGljYWwgb25lcywgaGFzIGl0cyBvd24gc3RhdGUgYWZ0ZXIgYmVpbmcgcmVuZGVyZWQgd2l0aCB0aGUgdXNlKCkgZnVuY3Rpb24uXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8aWQ9cmVuZGVyaW5nLWh0bWx8Y2xhc3M9c2VjdGlvbi1zdWJ0aXRsZVwiLCBbXCJTZXRcIl0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uLWNvbnRlbnRcIiwgW1xyXG5cdFx0XHRcdFx0XHRcIlRvIGluaXRpYWxpemUgc3RhdGUgdmFyaWFibGVzLCBhIHBvcCEgY29tcG9uZW50IG11c3QgaGF2ZSBhIHNldCgpIGZ1bmN0aW9uLiBUaGUgc2V0KCkgZnVuY3Rpb24gaXMgYSBsaWZlY3ljbGUgbWV0aG9kIGFuZCB3aWxsIGFsd2F5cyBydW4gYmVmb3JlIHJlbmRlcigpIG1ha2luZyBpdCBncmVhdCBmb3Igc2V0dGluZyB1cCBhbnl0aGluZyBiZWZvcmUgYSBjb21wb25lbnQgaXMgZHJhd24uXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8aWQ9cmVuZGVyaW5nLWh0bWx8Y2xhc3M9c2VjdGlvbi1zdWJ0aXRsZVwiLCBbXHJcblx0XHRcdFx0XHRcdFwiQWNjZXNzIFN0YXRlXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1jb250ZW50XCIsIFtcclxuXHRcdFx0XHRcdFx0XCJTdGF0ZSBjYW4gYmUgYWNjZXNzZWQgYnkgZGVzdHJ1Y3R1cmluZyB0aGUgb2JqZWN0IGluc2lkZSB0aGUgcmVuZGVyIGZ1bmN0aW9uIGFyZ3VtZW50LiBUaGlzIHN0YXRlIG9iamVjdCBpbnNpZGUgdGhlIHJlbmRlciBmdW5jdGlvbiBpcyBtb2RpZmlhYmxlIGJlY2F1c2UgaXQgaXMgb3duZWQgYnkgdGhlIGNvbXBvbmVudC5cIixcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uLWNvbnRlbnRcIiwgW1xyXG5cdFx0XHRcdFx0XHRcIklmIGEgdW5pcXVlIHByb3Agb2YgYWNjZXNzS2V5IGlzIHBhc3NlZCBpbiB3aGVuIHRoZSBjb21wb25lbnQgaXMgcmVxdWlyZWQgdG8gYmUgcmVuZGVyZWQsIGEgcmVhZHktb25seSB2ZXJzaW9uIG9mIGNvbXBvbmVudCBzdGF0ZSBjYW4gYmUgYWNjZXNzZWQgYnkgb3RoZXIgY29tcG9uZW50cyB3aXRoIHRoZSBnZXRTdGF0ZSgpIGZ1bmN0aW9uLlwiLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwicHJlfGNsYXNzPWNvZGUtc25pcHBldFwiLCBbXHJcblx0XHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJjb2RlfGNsYXNzPWNvZGUtYmxvY2tcIiwgW1xyXG5cdFx0XHRcdFx0XHRcdFwiXFxuY29uc3QgcGFyZW50Q29tcG9uZW50ID0ge1xcbiAgICByZW5kZXI6ICgpID0+IHtcXG4gICAgICAgIHJldHVybiBQT1AudXNlKHBvcENvbXBvbmVudCwge1wiICtcclxuXHRcdFx0XHRcdFx0XHRcdGAgXCJhY2Nlc3NLZXk6IFwiY291bnRlci1zdGF0ZVwiIH0pO1xcbiAgICB9XFxufVxcblxcbi8vIEFjY2VzcyB0aGF0IHN0YXRlIGZyb20gYW4gdW5yZWxhdGVkIGNvbXBvbmVudFxcbmNvbnN0IGFub3RoZXJDb21wb25lbnQgPSB7XFxuICAgIHJlbmRlcjogKCkgPT4ge1xcbiAgICAgICAgY29uc3Qgb3RoZXJTdGF0ZSA9IFBPUC5nZXRTdGF0ZShcIm90aGVyLXN0YXRlXCIpO1xcbiAgICAgICAgXFxuICAgICAgICByZXR1cm4gUE9QLmNyZWF0ZShcImRpdnxjbGFzcz1jb21wb25lbnQtY29weVwiLCBbYCArXHJcblx0XHRcdFx0XHRcdFx0XHRcImAke3N0YXRlLnNvbWVWYXJpYWJsZX1gXSk7XFxuICAgIH1cXG59XCIsXHJcblx0XHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHRcdFwiVGhlcmUgYXJlIHR3byBsaW5rcyB0byBjb2RlIGZvciBjb21wb25lbnRzIGJlbG93IHRoYXQgdXNlIHN0YXRlIHRvIHN0b3JlIGFuZCB1cGRhdGUgaW5mb3JtYXRpb24uIHBvcCEgSlMgY2hlY2tzIGlmIGEgcmVuZGVyIHVwZGF0ZSBpcyByZXF1aXJlZCBhZnRlciBldmVyeSBjbGljayBldmVudCBieSBkZWZhdWx0LiBIb3dldmVyLCBwb3AhIEpTIHN1cHBvcnRzIG1hbnVhbCByZS1yZW5kZXIgb24gc3RhdGUgY2hhbmdlIHdoZXJlIGEgY2xpY2sgbWF5IG5vdCBiZSBwcmVzZW50IHdpdGggdGhlIHJlZnJlc2goKSBmdW5jdGlvbi5cIixcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxpZD1yZW5kZXJpbmctaHRtbHxjbGFzcz1zZWN0aW9uLXN1YnRpdGxlXCIsIFtcclxuXHRcdFx0XHRcdFx0XCJDb3VudGVyXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1jb250ZW50XCIsIFtcclxuXHRcdFx0XHRcdFx0XCJUaGlzIGNvbXBvbmVudCB1cGRhdGVzIGl0cyBzdGF0ZSBhbmQgcmUtcmVuZGVycyBldmVyeSB0aW1lIHRoZSB1c2VyIGNsaWNrcyBhIGJ1dHRvbi4gVGhlIENvZGVQZW4gZm9yIHRoaXMgY291bnRlciBjb21wb25lbnQgaXMgYXZhaWxhYmxlIFwiLFxyXG5cdFx0XHRcdFx0XHRQT1AuY3JlYXRlKFxyXG5cdFx0XHRcdFx0XHRcdFwiYXxjbGFzcz1leHRlcm5hbC1saW5rXCIsXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0aHJlZjogXCJodHRwczovL2NvZGVwZW4uaW8vYWJpcmFtcm5haXIvcGVuL0xZZE5nYm9cIixcclxuXHRcdFx0XHRcdFx0XHRcdHRhcmdldDogXCJfYmxhbmtcIixcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFtcImhlcmVcIl1cclxuXHRcdFx0XHRcdFx0KSxcclxuXHRcdFx0XHRcdFx0XCIuXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8aWQ9cmVuZGVyaW5nLWh0bWx8Y2xhc3M9c2VjdGlvbi1zdWJ0aXRsZVwiLCBbXHJcblx0XHRcdFx0XHRcdFwiU3RvcHdhdGNoXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1jb250ZW50XCIsIFtcclxuXHRcdFx0XHRcdFx0XCJUaGlzIGNvbXBvbmVudCB1cGRhdGVzIGl0cyBzdGF0ZSBhbmQgcmUtcmVuZGVycyB3aGVuIGEgYnV0dG9uIGlzIGNsaWNrZWQgYnV0IGFsc28gZm9yY2VzIGEgcmVmcmVzaCBldmVyeSBjbG9jayBjeWNsZS4gVGhlIENvZGVQZW4gZm9yIHRoaXMgc3RvcHdhdGNoIGNvbXBvbmVudCBpcyBhdmFpbGFibGUgXCIsXHJcblx0XHRcdFx0XHRcdFBPUC5jcmVhdGUoXHJcblx0XHRcdFx0XHRcdFx0XCJhfGNsYXNzPWV4dGVybmFsLWxpbmtcIixcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRocmVmOiBcImh0dHBzOi8vY29kZXBlbi5pby9hYmlyYW1ybmFpci9wZW4vT0p2TkJwYlwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0OiBcIl9ibGFua1wiLFxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0W1wiaGVyZVwiXVxyXG5cdFx0XHRcdFx0XHQpLFxyXG5cdFx0XHRcdFx0XHRcIi5cIixcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvblwiLCBbXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGlkPXJvb3Qtc2VjdGlvbnxjbGFzcz1zZWN0aW9uLXRpdGxlXCIsIFtcIlJvb3RcIl0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uLWNvbnRlbnRcIiwgW1xyXG5cdFx0XHRcdFx0XHRcIkFsbCBwb3AhIEpTIGFwcGxpY2F0aW9ucyBtdXN0IGhhdmUgYW4gZW50cnkgcG9pbnQuIFRoZSByb290KCkgZnVuY3Rpb24gd2lsbCB0YWtlIGEgcG9wQ29tcG9uZW50IGFuZCBlc3RhYmxpc2ggaXQgYXMgdGhlIGNvbnRhaW5lciBvZiB0aGUgd2hvbGUgYXBwbGljYXRpb24uXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1jb250ZW50XCIsIFtcclxuXHRcdFx0XHRcdFx0XCJUaGlzIHJvb3QgY29tcG9uZW50IHdpbGwgaGF2ZSBhbGwgdGhlIHByb3BlcnRpZXMgb2YgYSByZWd1bGFyIHBvcCBjb21wb25lbnQuIFRoZSBjYWxsIHRvIGVzdGFibGlzaCB0aGUgcm9vdCBpcyBtb3N0IG9mdGVuIGRvbmUgaW4gdGhlIGluZGV4LmpzIGZpbGUuXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJwcmV8Y2xhc3M9Y29kZS1zbmlwcGV0XCIsIFtcclxuXHRcdFx0XHRcdFx0UE9QLmNyZWF0ZShcImNvZGV8Y2xhc3M9Y29kZS1ibG9ja1wiLCBbXHJcblx0XHRcdFx0XHRcdFx0YGltcG9ydCBhcHBDb250YWluZXIgZnJvbSBcIi9wYXRoXCI7XFxuXFxuUE9QLnJvb3QoYXBwQ29udGFpbmVyKTtgLFxyXG5cdFx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uLWNvbnRlbnRcIiwgW1xyXG5cdFx0XHRcdFx0XHRcIlRoZSBzZWNvbmQgYXJndW1lbnQgb2YgdGhlIHJvb3QgZnVuY3Rpb24gYWNjZXB0cyBwcm9wcyBmb3IgdGhlIHJvb3QgY29tcG9uZW50IHN1Y2ggYXMgcm9vdE5hbWUsIGFjY2Vzc0tleSwgcG9wUm91dGVzIGV0Yy5cIixcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvblwiLCBbXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGlkPXJvdXRpbmd8Y2xhc3M9c2VjdGlvbi10aXRsZVwiLCBbXCJSb3V0aW5nXCJdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1jb250ZW50XCIsIFtcclxuXHRcdFx0XHRcdFx0XCJwb3AhIEpTIGlzIGNhcGFibGUgb2YgZGlzcGxheWluZyBtdWx0aXBsZSBwYWdlcyB3aXRoIGVhc3kgdG8gdW5kZXJzdGFuZCBhcHBsaWNhdGlvbiByb3V0aW5nLlwiLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHRcdFwiVG8gZW5hYmxlIHJvdXRpbmcsIHNpbXBseSBkZWNsYXJlIGFuIG9iamVjdCB3aXRoIHJvdXRlcyBhcyBrZXlzIGFuZCBwb3AgY29tcG9uZW50IGltcG9ydHMgYXMgdmFsdWVzLiBUaGUgZmlyc3Qga2V5IHZhbHVlIHBhaXIgb2YgdGhpcyBvYmplY3Qgd2lsbCBhbHdheXMgYmUgdGhlIGhvbWUgcGFnZSBvZiB0aGUgYXBwbGljYXRpb24uXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1jb250ZW50XCIsIFtcclxuXHRcdFx0XHRcdFx0XCJUaGlzIG9iamVjdCBjYW4gdGhlbiBiZSBwYXNzZWQgaW50byB0aGUgcm9vdCBmdW5jdGlvbiBpbiB0aGUgcHJvcHMgYXJndW1lbnQgd2l0aCB0aGUga2V5IG9mIHBvcFJvdXRlcy5cIixcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcInByZXxjbGFzcz1jb2RlLXNuaXBwZXRcIiwgW1xyXG5cdFx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiY29kZXxjbGFzcz1jb2RlLWJsb2NrXCIsIFtcclxuXHRcdFx0XHRcdFx0XHRgaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIvcGF0aFwiO1xcbmltcG9ydCBBYm91dFBhZ2UgZnJvbSBcIi9wYXRoXCI7XFxuXFxuY29uc3Qgcm91dGVzID0ge1xcbiAgICBcIi9ob21lXCI6IEhvbWVQYWdlLFxcbiAgICBcIi9hYm91dFwiOiBBYm91dFBhZ2VcXG59XFxuXFxuUE9QLnJvb3QoSG9tZSwgeyBwb3BSb3V0ZXM6IHJvdXRlcyB9KTtgLFxyXG5cdFx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uLWNvbnRlbnRcIiwgW1xyXG5cdFx0XHRcdFx0XHRgVG8gdGhlbiBhY2Nlc3MgZGlmZmVyZW50IHBhZ2VzLCBqdXN0IGNyZWF0ZSBhbmNob3IgdGFncyBhbnl3aGVyZSBpbiB0aGUgYXBwbGljYXRpb24gd2l0aCBhIHN0cmluZyBpbiB0aGUgZm9ybWF0IG9mIGhhc2hiYW5nIChcIiMhXCIpIGZvbGxvd2VkIGJ5IHJvdXRlIGludG8gdGhlIFwiaHJlZlwiIHByb3BlcnR5LmAsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJwcmV8Y2xhc3M9Y29kZS1zbmlwcGV0XCIsIFtcclxuXHRcdFx0XHRcdFx0UE9QLmNyZWF0ZShcImNvZGV8Y2xhc3M9Y29kZS1ibG9ja1wiLCBbXHJcblx0XHRcdFx0XHRcdFx0YFBPUC5jcmVhdGUoXCJhXCIsIHsgaHJlZjogXCIjIS9ob21lXCIgfSk7YCxcclxuXHRcdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1jb250ZW50XCIsIFtcclxuXHRcdFx0XHRcdFx0YENsaWNraW5nIHRoZXNlIGFuY2hvciB0YWdzIHdpbGwgcmUtcmVuZGVyIHRoZSB3aG9sZSBkb2N1bWVudCwgZGlzcGxheSB0aGUgYXBwcm9wcmlhdGUgcGFnZSBhbmQgYWxsIHByZXZpb3VzIHN0YXRlIGluZm9ybWF0aW9uIHdpbGwgcmVzZXQuYCxcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvblwiLCBbXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGlkPXRpcHN8Y2xhc3M9c2VjdGlvbi10aXRsZVwiLCBbXCJUaXBzXCJdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1jb250ZW50XCIsIFtcclxuXHRcdFx0XHRcdFx0YEl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgRVM2IHN0YW5kYXJkIHdoZW4gd29ya2luZyB3aXRoIHBvcCEgSlMuIFdoZW4gcG9zc2libGUsIGF2b2lkIHRyYWRpdGlvbmFsIFwiZm9yXCIgbG9vcHMgYW5kIHVzZSBmb3JFYWNoIHRvIGl0ZXJhdGUgYW5kIEFycmF5Lm1hcCgpIHRvIGdlbmVyYXRlIGFycmF5cy5gLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHRcdGBXaGVuIGludm9raW5nIFBPUC51c2UoKSBpbnNpZGUgYSBsb29wLCBhbiBlcnJvciB3aWxsIGJlIHRocm93biBpZiBhIGtleSBwcm9wIHdpdGggYSB1bmlxdWUgdmFsdWUgaXMgbm90IHBhc3NlZCBpbiBmb3IgZWFjaCBlbGVtZW50LmAsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJwcmV8Y2xhc3M9Y29kZS1zbmlwcGV0XCIsIFtcclxuXHRcdFx0XHRcdFx0UE9QLmNyZWF0ZShcImNvZGV8Y2xhc3M9Y29kZS1ibG9ja1wiLCBbXHJcblx0XHRcdFx0XHRcdFx0YHJlbmRlcjogKCkgPT4ge1xcbiAgICBjb25zdCBzb21lQXJyYXkgPSBbXCJIZWxsb1wiLCBcIldvcmxkXCIsIFwiIVwiXTtcXG5cXG4gICAgY29uc3QgY2hpbGRyZW4gPSBzb21lQXJyYXkubWFwKCh2YWwsIGluZGV4KSA9PiB7XFxuICAgICAgICByZXR1cm4gUE9QLnVzZShwb3BDb21wb25lbnQsIHsgbGFiZWw6IHZhbCwga2V5OiBpbmRleCB9KTtcXG4gICAgfSk7XFxuXFxuICAgIHJldHVybiBQT1AuY3JlYXRlKFwiZGl2XCIsIGNoaWxkcmVuKTtcXG59YCxcclxuXHRcdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRdKSxcclxuXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHRcdFwiQ29uZGl0aW9uYWwgcmVuZGVyaW5nIGNhbiBiZSBkb25lIGJ5IHVzaW5nIHRlcm5hcnkgb3IgYm9vbGVhbiBzdGF0ZW1lbnRzIGFuZCBpcyBhIGhhbmR5IG1ldGhvZCB0byBxdWlja2x5IHJlbmRlciBvciBlcmFzZSBjb21wb25lbnRzIGZyb20gdGhlIGRvY3VtZW50IHdoZW4gc3RhdGUgY2hhbmdlcy5cIixcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcInByZXxjbGFzcz1jb2RlLXNuaXBwZXRcIiwgW1xyXG5cdFx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiY29kZXxjbGFzcz1jb2RlLWJsb2NrXCIsIFtcclxuXHRcdFx0XHRcdFx0XHRgY29uc3QgYm94Q29tcG9uZW50ID0ge1xcbiAgICBzZXQ6IChjb21wb25lbnQpID0+IHtcXG4gICAgICAgIGNvbnN0IHsgc3RhdGUgfSA9IGNvbXBvbmVudDtcXG4gICAgICAgIHN0YXRlLnNob3dCb3ggPSB0cnVlO1xcbiAgICB9XFxuICAgIHJlbmRlcjogKGNvbXBvbmVudCkgPT4ge1xcbiAgICAgICAgY29uc3QgeyBzdGF0ZSB9ID0gY29tcG9uZW50O1xcblxcbiAgICAgICAgcmV0dXJuIFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9Ym94LWNvbnRhaW5lclwiLCBbXFxuICAgICAgICAgICAgUE9QLmNyZWF0ZShcXG4gICAgICAgICAgICAgICAgXCJidXR0b258Y2xhc3M9Ym94LWJ1dHRvblwiLFxcbiAgICAgICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgICAgICBvbmNsaWNrOiAoKSA9PiAoc3RhdGUuc2hvd0JveCA9ICFzdGF0ZS5zaG93Qm94KVxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBbc3RhdGUuc2hvd0JveCA/IFwiSGlkZVwiIDogXCJTaG93XCJdXFxuICAgICAgICAgICAgKSxcXG4gICAgICAgICAgICBzdGF0ZS5zaG93Qm94ICYmIFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9Ym94LWRpc3BsYXlcIilcXG4gICAgICAgIF0pO1xcbiAgICB9XFxufWAsXHJcblx0XHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AudXNlKFJlZEJveCksXHJcblx0XHRcdFx0XSksXHJcblx0XHRcdF0pLFxyXG5cdFx0XSk7XHJcblx0fSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEd1aWRlO1xyXG4iLCJpbXBvcnQgUE9QIGZyb20gXCJzb25wb3AtanNcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcclxuaW1wb3J0IEhlcm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVyb1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhvbWUgPSB7XHJcblx0cmVuZGVyOiAoKSA9PiB7XHJcblx0XHRyZXR1cm4gUE9QLmNyZWF0ZShcImRpdnxjbGFzcz1ob21lLXBhZ2UtY29udGFpbmVyXCIsIFtcclxuXHRcdFx0UE9QLnVzZShIZXJvKSxcclxuXHRcdFx0UE9QLnVzZShGb290ZXIpLFxyXG5cdFx0XSk7XHJcblx0fSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==