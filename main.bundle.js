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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n\tbackground-color: #e6e6e6;\r\n\tbackground: #c9d6ff;\r\n\tbackground: -webkit-linear-gradient(to right, #e2e2e2, #c9d6ff);\r\n\tbackground: linear-gradient(to right, #e2e2e2, #c9d6ff);\r\n\tfont-family: \"Roboto\", sans-serif;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n.hero-container {\r\n\twidth: 100vw;\r\n\theight: 100vh;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tgap: 20px;\r\n\tcolor: black;\r\n\tfont-family: \"Raleway\", sans-serif;\r\n}\r\n\r\n.hero-title {\r\n\tfont-size: 100px;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.hero-subtitle {\r\n\tfont-size: 20px;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.navbar-menu {\r\n\tdisplay: none;\r\n}\r\n\r\n.navbar-menu-item {\r\n\tpadding-bottom: 2px;\r\n}\r\n\r\n.navbar-menu-item.current-page {\r\n\tborder-bottom: 3px solid #f08080;\r\n}\r\n\r\n.footer-container {\r\n\tposition: absolute;\r\n\tbottom: 10px;\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tfont-size: 20px;\r\n}\r\n\r\n.hero-demo-button {\r\n\toutline: none;\r\n\tborder: none;\r\n\tbackground: black;\r\n\tcolor: white;\r\n\tfont-size: 20px;\r\n\tfont-weight: bold;\r\n\tpadding: 10px 30px;\r\n\tborder-radius: 4px;\r\n\tmargin-top: 20px;\r\n\tfont-family: \"Raleway\", sans-serif;\r\n\tletter-spacing: 1px;\r\n\ttransition: 0.3s;\r\n}\r\n\r\n.hero-demo-button:hover {\r\n\tcursor: pointer;\r\n\tbackground: #0d0d0d;\r\n\ttransition: 0.3s;\r\n\tcolor: #f08080;\r\n}\r\n\r\n.page-sections {\r\n\tmargin-top: 30%;\r\n\tmargin-bottom: 10%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tgap: 50px;\r\n}\r\n\r\n.section {\r\n\tbackground: white;\r\n\twidth: 80%;\r\n\tpadding: 20px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 40px;\r\n\tborder-radius: 7px;\r\n\tbox-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n}\r\n\r\n.section-title {\r\n\tfont-size: 35px;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.section-subtitle {\r\n\tfont-size: 25px;\r\n\ttext-align: center;\r\n\tfont-weight: bold;\r\n\tbackground: #f0f0f0;\r\n\tpadding: 10px;\r\n}\r\n\r\n.section-content {\r\n\tfont-size: 20px;\r\n}\r\n\r\n.code-snippet {\r\n\tfont-size: 14px;\r\n\tfont-weight: bold;\r\n\tdisplay: flex;\r\n\tbackground: #f0f8ff;\r\n\tbox-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;\r\n\tpadding: 5px;\r\n\tmargin: 10px 0px;\r\n\toverflow-x: scroll;\r\n}\r\n\r\n.navbar-container {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tbackground: black;\r\n\tcolor: white;\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tfont-size: 40px;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmin-height: 70px;\r\n}\r\n\r\n.back-arrow {\r\n\tposition: absolute;\r\n\tleft: 20px;\r\n\toutline: none;\r\n\tborder: none;\r\n\tbackground: inherit;\r\n\tcolor: white;\r\n\tfont-size: 40px;\r\n}\r\n\r\n.link-button {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.link-button:visited {\r\n\tcolor: black;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.hamburger-icon-container {\r\n\tposition: absolute;\r\n\tleft: 20px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\tgap: 10px;\r\n\theight: auto;\r\n\twidth: 40px;\r\n}\r\n\r\n.hamburger-line {\r\n\tborder-top: 2px solid white;\r\n}\r\n\r\n.hamburger-navbar-menu {\r\n\tposition: fixed;\r\n\tbackground: black;\r\n\tfont-size: 40px;\r\n\ttop: 70px;\r\n\tpadding: 25px 0px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 60px;\r\n\topacity: 0.9;\r\n\twidth: 100%;\r\n\talign-items: center;\r\n}\r\n\r\n.hamburger-menu-item {\r\n\ttext-decoration: none;\r\n\tfont-size: 25px;\r\n\tcolor: #f08080;\r\n}\r\n\r\n.navbar-link {\r\n\tcolor: white;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.navbar-link:hover {\r\n\tcolor: #f08080 !important;\r\n\tcursor: pointer;\r\n}\r\n\r\n.navbar-link:visited {\r\n\ttext-decoration: none;\r\n\tcolor: white;\r\n}\r\n\r\n.hamburger-menu-item:visited {\r\n\tcolor: #f08080;\r\n}\r\n\r\n.external-link {\r\n\tcolor: #f08080;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.external-link:hover {\r\n\ttext-decoration: underline;\r\n}\r\n\r\n.external-link:visited {\r\n\tcolor: #f08080;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.counter-container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tgap: 30px;\r\n\tfont-size: 40px;\r\n\tcolor: #f08080;\r\n}\r\n\r\n.counter-button {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tfont-size: 40px;\r\n\twidth: 40px;\r\n\theight: 40px;\r\n}\r\n\r\n.box-container {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tgap: 20px;\r\n}\r\n\r\n.box-button {\r\n\tfont-size: 25px;\r\n\tpadding: 5px 20px;\r\n}\r\n\r\n.box-display {\r\n\tbackground: red;\r\n\twidth: 30%;\r\n\theight: 40px;\r\n}\r\n\r\n.stopwatch-container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tgap: 20px;\r\n\tfont-size: 40px;\r\n\tcolor: #f08080;\r\n}\r\n\r\n.stopwatch-button {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tfont-size: 20px;\r\n\tpadding: 10px;\r\n}\r\n\r\n.duplicate-container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tgap: 20px;\r\n}\r\n\r\n.duplicate-input {\r\n\twidth: 50%;\r\n\tfont-size: 20px;\r\n}\r\n\r\n.duplicate-output {\r\n\tfont-size: 20px;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n\t.page-sections {\r\n\t\tmargin-top: 15%;\r\n\t\tmargin-bottom: 5%;\r\n\t}\r\n\t.hero-title {\r\n\t\tfont-size: 150px;\r\n\t}\r\n\t.hero-subtitle {\r\n\t\tfont-size: 30px;\r\n\t}\r\n\t.hero-demo-button {\r\n\t\tfont-size: 30px;\r\n\t}\r\n\t.footer-container {\r\n\t\tfont-size: 25px;\r\n\t}\r\n\t.hamburger-menu-item {\r\n\t\tfont-size: 30px;\r\n\t}\r\n}\r\n\r\n@media (min-width: 1025px) {\r\n\t.section {\r\n\t\twidth: 50%;\r\n\t}\r\n\t.page-sections {\r\n\t\tmargin-top: 6%;\r\n\t\tmargin-bottom: 2%;\r\n\t}\r\n\t.code-snippet {\r\n\t\tjustify-content: center;\r\n\t\toverflow-x: hidden;\r\n\t}\r\n\t.section-content {\r\n\t\tfont-size: 18px;\r\n\t}\r\n\t.box-display {\r\n\t\twidth: 10%;\r\n\t}\r\n\t.navbar-container {\r\n\t\tjustify-content: end;\r\n\t}\r\n\t.navbar-title {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.hamburger-icon-container {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.navbar-menu {\r\n\t\tdisplay: flex;\r\n\t\tfont-size: 20px;\r\n\t\tgap: 70px;\r\n\t\tmargin-right: 2%;\r\n\t\tfont-family: \"Raleway\", sans-serif;\r\n\t}\r\n\t.footer-container {\r\n\t\tfont-size: 18px;\r\n\t}\r\n\t.hero-demo-button {\r\n\t\tfont-size: 25px;\r\n\t}\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"AAGA;CACC,yBAAyB;CACzB,mBAAmB;CACnB,+DAA+D;CAC/D,uDAAuD;CACvD,iCAAiC;CACjC,SAAS;CACT,UAAU;AACX;;AAEA;CACC,YAAY;CACZ,aAAa;CACb,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,uBAAuB;CACvB,SAAS;CACT,YAAY;CACZ,kCAAkC;AACnC;;AAEA;CACC,gBAAgB;CAChB,iBAAiB;AAClB;;AAEA;CACC,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,gCAAgC;AACjC;;AAEA;CACC,kBAAkB;CAClB,YAAY;CACZ,WAAW;CACX,aAAa;CACb,uBAAuB;CACvB,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,YAAY;CACZ,iBAAiB;CACjB,YAAY;CACZ,eAAe;CACf,iBAAiB;CACjB,kBAAkB;CAClB,kBAAkB;CAClB,gBAAgB;CAChB,kCAAkC;CAClC,mBAAmB;CACnB,gBAAgB;AACjB;;AAEA;CACC,eAAe;CACf,mBAAmB;CACnB,gBAAgB;CAChB,cAAc;AACf;;AAEA;CACC,eAAe;CACf,kBAAkB;CAClB,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,mBAAmB;CACnB,SAAS;AACV;;AAEA;CACC,iBAAiB;CACjB,UAAU;CACV,aAAa;CACb,aAAa;CACb,sBAAsB;CACtB,SAAS;CACT,kBAAkB;CAClB,4CAA4C;AAC7C;;AAEA;CACC,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,eAAe;CACf,kBAAkB;CAClB,iBAAiB;CACjB,mBAAmB;CACnB,aAAa;AACd;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,eAAe;CACf,iBAAiB;CACjB,aAAa;CACb,mBAAmB;CACnB,wCAAwC;CACxC,YAAY;CACZ,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,eAAe;CACf,MAAM;CACN,iBAAiB;CACjB,YAAY;CACZ,aAAa;CACb,WAAW;CACX,eAAe;CACf,uBAAuB;CACvB,mBAAmB;CACnB,gBAAgB;AACjB;;AAEA;CACC,kBAAkB;CAClB,UAAU;CACV,aAAa;CACb,YAAY;CACZ,mBAAmB;CACnB,YAAY;CACZ,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,qBAAqB;AACtB;;AAEA;CACC,YAAY;CACZ,qBAAqB;AACtB;;AAEA;CACC,kBAAkB;CAClB,UAAU;CACV,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,SAAS;CACT,YAAY;CACZ,WAAW;AACZ;;AAEA;CACC,2BAA2B;AAC5B;;AAEA;CACC,eAAe;CACf,iBAAiB;CACjB,eAAe;CACf,SAAS;CACT,iBAAiB;CACjB,aAAa;CACb,sBAAsB;CACtB,SAAS;CACT,YAAY;CACZ,WAAW;CACX,mBAAmB;AACpB;;AAEA;CACC,qBAAqB;CACrB,eAAe;CACf,cAAc;AACf;;AAEA;CACC,YAAY;CACZ,qBAAqB;AACtB;;AAEA;CACC,yBAAyB;CACzB,eAAe;AAChB;;AAEA;CACC,qBAAqB;CACrB,YAAY;AACb;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,cAAc;CACd,qBAAqB;AACtB;;AAEA;CACC,0BAA0B;AAC3B;;AAEA;CACC,cAAc;CACd,qBAAqB;AACtB;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,SAAS;CACT,eAAe;CACf,cAAc;AACf;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,eAAe;CACf,WAAW;CACX,YAAY;AACb;;AAEA;CACC,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,SAAS;AACV;;AAEA;CACC,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,eAAe;CACf,UAAU;CACV,YAAY;AACb;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,SAAS;CACT,eAAe;CACf,cAAc;AACf;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,eAAe;CACf,aAAa;AACd;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,SAAS;AACV;;AAEA;CACC,UAAU;CACV,eAAe;AAChB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC;EACC,eAAe;EACf,iBAAiB;CAClB;CACA;EACC,gBAAgB;CACjB;CACA;EACC,eAAe;CAChB;CACA;EACC,eAAe;CAChB;CACA;EACC,eAAe;CAChB;CACA;EACC,eAAe;CAChB;AACD;;AAEA;CACC;EACC,UAAU;CACX;CACA;EACC,cAAc;EACd,iBAAiB;CAClB;CACA;EACC,uBAAuB;EACvB,kBAAkB;CACnB;CACA;EACC,eAAe;CAChB;CACA;EACC,UAAU;CACX;CACA;EACC,oBAAoB;CACrB;CACA;EACC,aAAa;CACd;CACA;EACC,aAAa;CACd;CACA;EACC,aAAa;EACb,eAAe;EACf,SAAS;EACT,gBAAgB;EAChB,kCAAkC;CACnC;CACA;EACC,eAAe;CAChB;CACA;EACC,eAAe;CAChB;AACD","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&family=Roboto&display=swap\");\r\n\r\nbody {\r\n\tbackground-color: #e6e6e6;\r\n\tbackground: #c9d6ff;\r\n\tbackground: -webkit-linear-gradient(to right, #e2e2e2, #c9d6ff);\r\n\tbackground: linear-gradient(to right, #e2e2e2, #c9d6ff);\r\n\tfont-family: \"Roboto\", sans-serif;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n.hero-container {\r\n\twidth: 100vw;\r\n\theight: 100vh;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tgap: 20px;\r\n\tcolor: black;\r\n\tfont-family: \"Raleway\", sans-serif;\r\n}\r\n\r\n.hero-title {\r\n\tfont-size: 100px;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.hero-subtitle {\r\n\tfont-size: 20px;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.navbar-menu {\r\n\tdisplay: none;\r\n}\r\n\r\n.navbar-menu-item {\r\n\tpadding-bottom: 2px;\r\n}\r\n\r\n.navbar-menu-item.current-page {\r\n\tborder-bottom: 3px solid #f08080;\r\n}\r\n\r\n.footer-container {\r\n\tposition: absolute;\r\n\tbottom: 10px;\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tfont-size: 20px;\r\n}\r\n\r\n.hero-demo-button {\r\n\toutline: none;\r\n\tborder: none;\r\n\tbackground: black;\r\n\tcolor: white;\r\n\tfont-size: 20px;\r\n\tfont-weight: bold;\r\n\tpadding: 10px 30px;\r\n\tborder-radius: 4px;\r\n\tmargin-top: 20px;\r\n\tfont-family: \"Raleway\", sans-serif;\r\n\tletter-spacing: 1px;\r\n\ttransition: 0.3s;\r\n}\r\n\r\n.hero-demo-button:hover {\r\n\tcursor: pointer;\r\n\tbackground: #0d0d0d;\r\n\ttransition: 0.3s;\r\n\tcolor: #f08080;\r\n}\r\n\r\n.page-sections {\r\n\tmargin-top: 30%;\r\n\tmargin-bottom: 10%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tgap: 50px;\r\n}\r\n\r\n.section {\r\n\tbackground: white;\r\n\twidth: 80%;\r\n\tpadding: 20px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 40px;\r\n\tborder-radius: 7px;\r\n\tbox-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n}\r\n\r\n.section-title {\r\n\tfont-size: 35px;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.section-subtitle {\r\n\tfont-size: 25px;\r\n\ttext-align: center;\r\n\tfont-weight: bold;\r\n\tbackground: #f0f0f0;\r\n\tpadding: 10px;\r\n}\r\n\r\n.section-content {\r\n\tfont-size: 20px;\r\n}\r\n\r\n.code-snippet {\r\n\tfont-size: 14px;\r\n\tfont-weight: bold;\r\n\tdisplay: flex;\r\n\tbackground: #f0f8ff;\r\n\tbox-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;\r\n\tpadding: 5px;\r\n\tmargin: 10px 0px;\r\n\toverflow-x: scroll;\r\n}\r\n\r\n.navbar-container {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tbackground: black;\r\n\tcolor: white;\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tfont-size: 40px;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmin-height: 70px;\r\n}\r\n\r\n.back-arrow {\r\n\tposition: absolute;\r\n\tleft: 20px;\r\n\toutline: none;\r\n\tborder: none;\r\n\tbackground: inherit;\r\n\tcolor: white;\r\n\tfont-size: 40px;\r\n}\r\n\r\n.link-button {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.link-button:visited {\r\n\tcolor: black;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.hamburger-icon-container {\r\n\tposition: absolute;\r\n\tleft: 20px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\tgap: 10px;\r\n\theight: auto;\r\n\twidth: 40px;\r\n}\r\n\r\n.hamburger-line {\r\n\tborder-top: 2px solid white;\r\n}\r\n\r\n.hamburger-navbar-menu {\r\n\tposition: fixed;\r\n\tbackground: black;\r\n\tfont-size: 40px;\r\n\ttop: 70px;\r\n\tpadding: 25px 0px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 60px;\r\n\topacity: 0.9;\r\n\twidth: 100%;\r\n\talign-items: center;\r\n}\r\n\r\n.hamburger-menu-item {\r\n\ttext-decoration: none;\r\n\tfont-size: 25px;\r\n\tcolor: #f08080;\r\n}\r\n\r\n.navbar-link {\r\n\tcolor: white;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.navbar-link:hover {\r\n\tcolor: #f08080 !important;\r\n\tcursor: pointer;\r\n}\r\n\r\n.navbar-link:visited {\r\n\ttext-decoration: none;\r\n\tcolor: white;\r\n}\r\n\r\n.hamburger-menu-item:visited {\r\n\tcolor: #f08080;\r\n}\r\n\r\n.external-link {\r\n\tcolor: #f08080;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.external-link:hover {\r\n\ttext-decoration: underline;\r\n}\r\n\r\n.external-link:visited {\r\n\tcolor: #f08080;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.counter-container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tgap: 30px;\r\n\tfont-size: 40px;\r\n\tcolor: #f08080;\r\n}\r\n\r\n.counter-button {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tfont-size: 40px;\r\n\twidth: 40px;\r\n\theight: 40px;\r\n}\r\n\r\n.box-container {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tgap: 20px;\r\n}\r\n\r\n.box-button {\r\n\tfont-size: 25px;\r\n\tpadding: 5px 20px;\r\n}\r\n\r\n.box-display {\r\n\tbackground: red;\r\n\twidth: 30%;\r\n\theight: 40px;\r\n}\r\n\r\n.stopwatch-container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tgap: 20px;\r\n\tfont-size: 40px;\r\n\tcolor: #f08080;\r\n}\r\n\r\n.stopwatch-button {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tfont-size: 20px;\r\n\tpadding: 10px;\r\n}\r\n\r\n.duplicate-container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tgap: 20px;\r\n}\r\n\r\n.duplicate-input {\r\n\twidth: 50%;\r\n\tfont-size: 20px;\r\n}\r\n\r\n.duplicate-output {\r\n\tfont-size: 20px;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n\t.page-sections {\r\n\t\tmargin-top: 15%;\r\n\t\tmargin-bottom: 5%;\r\n\t}\r\n\t.hero-title {\r\n\t\tfont-size: 150px;\r\n\t}\r\n\t.hero-subtitle {\r\n\t\tfont-size: 30px;\r\n\t}\r\n\t.hero-demo-button {\r\n\t\tfont-size: 30px;\r\n\t}\r\n\t.footer-container {\r\n\t\tfont-size: 25px;\r\n\t}\r\n\t.hamburger-menu-item {\r\n\t\tfont-size: 30px;\r\n\t}\r\n}\r\n\r\n@media (min-width: 1025px) {\r\n\t.section {\r\n\t\twidth: 50%;\r\n\t}\r\n\t.page-sections {\r\n\t\tmargin-top: 6%;\r\n\t\tmargin-bottom: 2%;\r\n\t}\r\n\t.code-snippet {\r\n\t\tjustify-content: center;\r\n\t\toverflow-x: hidden;\r\n\t}\r\n\t.section-content {\r\n\t\tfont-size: 18px;\r\n\t}\r\n\t.box-display {\r\n\t\twidth: 10%;\r\n\t}\r\n\t.navbar-container {\r\n\t\tjustify-content: end;\r\n\t}\r\n\t.navbar-title {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.hamburger-icon-container {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.navbar-menu {\r\n\t\tdisplay: flex;\r\n\t\tfont-size: 20px;\r\n\t\tgap: 70px;\r\n\t\tmargin-right: 2%;\r\n\t\tfont-family: \"Raleway\", sans-serif;\r\n\t}\r\n\t.footer-container {\r\n\t\tfont-size: 18px;\r\n\t}\r\n\t.hero-demo-button {\r\n\t\tfont-size: 25px;\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/components/Duplicate.js":
/*!*************************************!*\
  !*** ./src/components/Duplicate.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Duplicate": () => (/* binding */ Duplicate),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sonpop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sonpop-js */ "./node_modules/sonpop-js/pop.js");


const Duplicate = {
	set: (component) => {
		const { state } = component;
		state.textValue = "";
	},
	render: (component) => {
		const { state } = component;

		return sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=duplicate-container", [
			sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("span|class=duplicate-output", [
				"User: ",
				state.textValue ? state.textValue : "*crickets*",
			]),
			sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("input|id=text-input|class=duplicate-input", {
				type: "text",
				placeholder: "Type here...",
				maxLength: "15",
				oninput: (e) => {
					state.textValue = document.getElementById("text-input").value;
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].refresh();
				},
			}),
		]);
	},
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Duplicate);


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
					["me!"]
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
			sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("a|class=link-button", { href: "#!/demo-page" }, [
				sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].use(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], { className: "hero-demo-button", label: "Demo" }),
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
			{ text: "Demo", route: "#!/demo-page" },
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
/* harmony import */ var _pages_Demo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Demo */ "./src/pages/Demo.js");






const routes = {
	"/home-page": _pages_Home__WEBPACK_IMPORTED_MODULE_2__["default"],
	"/guide-page": _pages_Guide__WEBPACK_IMPORTED_MODULE_3__["default"],
	"/demo-page": _pages_Demo__WEBPACK_IMPORTED_MODULE_4__["default"],
};

sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].root(_pages_Home__WEBPACK_IMPORTED_MODULE_2__["default"], { rootName: "pop-app-root", popRoutes: routes }); // entry point for pop! app with custom root name


/***/ }),

/***/ "./src/pages/Demo.js":
/*!***************************!*\
  !*** ./src/pages/Demo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Demo": () => (/* binding */ Demo),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sonpop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sonpop-js */ "./node_modules/sonpop-js/pop.js");
/* harmony import */ var _components_Counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Counter */ "./src/components/Counter.js");
/* harmony import */ var _components_Duplicate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Duplicate */ "./src/components/Duplicate.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _components_Stopwatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Stopwatch */ "./src/components/Stopwatch.js");






const Demo = {
	render: () => {
		return sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=demo-page-container", [
			sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].use(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], { title: "Demo" }),
			sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=page-sections", [
				sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section", [
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-subtitle", ["Ready. Set. Pop!"]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"This website and all its components are powered by pop! JS. If you find this project of mine interesting, consider giving it a star on ",
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
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"This section contains three examples of components that have their own state and re-render, if necessary, to a change in state.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"Open up developer tools and see pop! JS updating only the affected DOM element when a component is required to be re-rendered. A CodePen is also available ",
						sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create(
							"a|class=external-link",
							{
								href: "https://codepen.io/abiramrnair/pen/RwMWKEO",
								target: "_blank",
							},
							["here"]
						),
						" to easily try out pop! JS for yourself.",
					]),
				]),
				sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section", [
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-subtitle", ["Counter"]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("pre|class=code-snippet", [
						sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("code|class=code-block", [
							`import POP from "sonpop-js";\n\nexport const Counter = {\n    set: (component) => {\n        const { state } = component;\n        state.counter = 0;\n    },\n    render: (component) => {\n        const { state } = component;\n\n        return POP.create("div|class=counter-container", [\n            POP.create("button|class=counter-button", ["-"], {\n                onclick: () => (state.counter -= 1),\n            }),\n` +
								"            `${state.counter}`,\n" +
								`            POP.create("button|class=counter-button", ["+"], {\n                onclick: () => (state.counter += 1),\n            }),\n        ]);\n    },\n};`,
						]),
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].use(_components_Counter__WEBPACK_IMPORTED_MODULE_1__["default"]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"This component re-renders itself when the user manually changes state by using a button.",
					]),
				]),
				sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section", [
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-subtitle", ["Duplicate"]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("pre|class=code-snippet", [
						sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("code|class=code-block", [
							`import POP from "sonpop-js";\n\nexport const Duplicate = {\n    set: (component) => {\n        const { state } = component;\n        state.textValue = "";\n    },\n    render: (component) => {\n        const { state } = component;\n\n        return POP.create("div|class=duplicate-container", [\n            POP.create("span|class=duplicate-output", [\n                "User": ",\n                state.textValue ? state.textValue : "*crickets*",\n            ]),\n            POP.create("input|id=text-input|class=duplicate-input", {\n                type: "text",\n                placeholder: "Type here...",\n                maxLength: "15",\n                oninput: (e) => {\n                    state.textValue = document.getElementById("text-input").value;\n                    POP.refresh();\n                },\n            }),\n        ]);\n    },\n};`,
						]),
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].use(_components_Duplicate__WEBPACK_IMPORTED_MODULE_2__["default"]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"This component re-renders itself when the user manually changes state by typing.",
					]),
				]),
				sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section", [
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-subtitle", ["Stopwatch"]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("pre|class=code-snippet", [
						sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("code|class=code-block", [
							`import POP from "sonpop-js";\n\nfunction stopwatchModel() {\n    return {\n        interval: null,\n        seconds: 0,\n        isPaused: true,\n    };\n}\n\nconst actions = {\n    increment(model) {\n        model.seconds++;\n        POP.refresh();\n    },\n    start(model) {\n        model.interval = setInterval(actions.increment, 1000, model);\n    },\n    stop(model) {\n        model.interval = clearInterval(model.interval);\n    },\n    reset(model) {\n        model.seconds = 0;\n    },\n    toggle(model) {\n        model.isPaused ? actions.start(model) : actions.stop(model);\n        model.isPaused = !model.isPaused;\n    },\n};\n\nexport const Stopwatch = {\n    set: (component) => {\n        const { state } = component;\n        state.model = stopwatchModel();\n    },\n    render: (component) => {\n        const { state } = component;\n\n        return POP.create("div|class=stopwatch-container", [\n            POP.create("span|class=stopwatch-span", [` +
								"`${state.model.seconds}`]),\n" +
								`            POP.create(\n                "button|class=stopwatch-button",\n                {\n                    onclick: () => {\n                        actions.toggle(state.model);\n                    },\n                },\n                [state.model.isPaused ? "Start" : "Pause"]\n            ),` +
								`\n            POP.create(\n                "button|class=stopwatch-button",\n                {\n                    onclick: () => {\n                        actions.reset(state.model);\n                    },\n                },\n                ["Reset"]\n            ),\n        ]);\n    },\n};`,
						]),
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].use(_components_Stopwatch__WEBPACK_IMPORTED_MODULE_4__["default"]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						`This component is able to re-render itself continuously without user input.`,
					]),
				]),
			]),
		]);
	},
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Demo);


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
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _components_RedBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/RedBox */ "./src/components/RedBox.js");




const Guide = {
	render: () => {
		return sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=guide-page-container", [
			sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].use(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], { title: "Guide" }),
			sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=page-sections", [
				sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section", [
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-title", ["Intro"]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"pop! JS is a compact and easy to learn framework that can be used to make a frontend interface very quickly. It comes equipped with stateful components, routing and lifecycle methods. The project is only a little over 350 sloc and the code is available ",
						sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create(
							"a|class=external-link",
							{ href: "https://github.com/abiramrnair/pop-js" },
							[" here"]
						),
						".",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-subtitle", ["cdn"]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"The easiest way to see what pop! JS can do is to copy the link below into a HTML script tag.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("pre|class=code-snippet", [
						sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("code|class=code-block", [
							`https://unpkg.com/sonpop-js/pop.min.js`,
						]),
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("pre|class=code-snippet", [
						sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("code|class=code-block", [
							`<html>\n    <body>\n        <script src="https://unpkg.com/sonpop-js/pop.min.js">\n        </script>\n        <script>\n\n            // Code here\n\n        </script>\n    </body>\n</html>`,
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
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-subtitle", ["npm"]),
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
						" script which uses Webpack to create a sample app.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("pre|class=code-snippet", [
						sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("code|class=code-block", [`npm install sonpop-js";`]),
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"To use pop! JS, just import POP.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("pre|class=code-snippet", [
						sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("code|class=code-block", [
							`import POP from "sonpop-js";`,
						]),
					]),
				]),
				sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section", [
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-title", ["Components"]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"Like most frameworks, pop! JS uses a component based approach.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"Components are just reusable chunks of HTML that have their own state and properties.",
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
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-subtitle", ["Rendering HTML"]),
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
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-subtitle", ["Reusing Components"]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"With the use() function, you can utilize imported pop! components and component state.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("pre|class=code-snippet", [
						sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("code|class=code-block", [
							`import component from "/path";\n\nPOP.use(component, props, children);`,
						]),
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-subtitle", ["Argument Ordering"]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"With the create() and use() functions, the order does not matter when providing props and children. It only matters that the props are in an object and children are in an array.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"Children can either be strings which get transformed to HTML text nodes or pop components wrapped by the use() function.",
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
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-title", ["State"]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"Every instance of a pop! component, even identical ones, have its own state after being rendered with the use() function.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"To initialize state variables however, a pop! component must have a set() function. The set() function is a lifecycle method like the render() function.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"set() will always run before render() and is great for setting up anything before a component is drawn.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"State can be accessed by destructuring the object inside the render function argument.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						"If a unique prop of accessKey is passed in when the component is required to be rendered, a ready-only version of component state can be accessed outside the component with the getState() function.",
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("pre|class=code-snippet", [
						sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("code|class=code-block", [
							`// Make a component with state\nconst popComponent = {\n    set: (component) => {\n        const { state } = component;\n        state.counter = 0;\n    }\n    render: (component) => {\n        const { state } = component;\n        const num = state.counter;\n    	return POP.create("div|class=counter", ` +
								"[`${num}`]);\n    }\n}\n\n// Use the above component\nconst parentComponent = {\n    render: () => {\n        return POP.use(popComponent, {" +
								` "accessKey: "counter-state" });\n    }\n}\n\n// Access that state from an unrelated component\nconst anotherComponent = {\n    render: () => {\n        const counterState = POP.getState("counter-state");\n        const { counter } = counterState;\n        return POP.create("div|class=counter-copy", [` +
								"`${counter}`]);\n    }\n}",
						]),
					]),
				]),
				sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section", [
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-title", ["Root"]),
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
						"The second argument of the root function accepts props for the root component such as rootName and accessKey.",
					]),
				]),
				sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section", [
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-title", ["Routing"]),
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
						`To then access different pages, just create anchor tags anywhere in the application with a string in the format of hashbang of hashbang ("#!") followed by route into the "href" property.`,
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("pre|class=code-snippet", [
						sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("code|class=code-block", [
							`POP.create("a", { href: "#!/home" });`,
						]),
					]),
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-content", [
						`It is important to note that clicking these anchor tags will re-render the whole document and all previous state information will reset.`,
					]),
				]),
				sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section", [
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].create("div|class=section-title", ["Tips"]),
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
					sonpop_js__WEBPACK_IMPORTED_MODULE_0__["default"].use(_components_RedBox__WEBPACK_IMPORTED_MODULE_2__.RedBox),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFL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Iiwid2VicGFjazovL2RlbW8tcG9wLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3AtYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3AtYXBwLy4vbm9kZV9tb2R1bGVzL3NvbnBvcC1qcy9tb2R1bGVzL2NvbnN0YW50cy1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3AtYXBwLy4vbm9kZV9tb2R1bGVzL3NvbnBvcC1qcy9tb2R1bGVzL2RvbS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3AtYXBwLy4vbm9kZV9tb2R1bGVzL3NvbnBvcC1qcy9wb3AuanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3AtYXBwLy4vc3JjL3N0eWxlcy9pbmRleC5jc3M/NjM0OSIsIndlYnBhY2s6Ly9kZW1vLXBvcC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3AtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9kZW1vLXBvcC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3AtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2RlbW8tcG9wLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2RlbW8tcG9wLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2RlbW8tcG9wLWFwcC8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9kZW1vLXBvcC1hcHAvLi9zcmMvY29tcG9uZW50cy9Db3VudGVyLmpzIiwid2VicGFjazovL2RlbW8tcG9wLWFwcC8uL3NyYy9jb21wb25lbnRzL0R1cGxpY2F0ZS5qcyIsIndlYnBhY2s6Ly9kZW1vLXBvcC1hcHAvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3AtYXBwLy4vc3JjL2NvbXBvbmVudHMvSGFtYnVyZ2VySWNvbi5qcyIsIndlYnBhY2s6Ly9kZW1vLXBvcC1hcHAvLi9zcmMvY29tcG9uZW50cy9IZXJvLmpzIiwid2VicGFjazovL2RlbW8tcG9wLWFwcC8uL3NyYy9jb21wb25lbnRzL05hdmJhci5qcyIsIndlYnBhY2s6Ly9kZW1vLXBvcC1hcHAvLi9zcmMvY29tcG9uZW50cy9SZWRCb3guanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3AtYXBwLy4vc3JjL2NvbXBvbmVudHMvU3RvcHdhdGNoLmpzIiwid2VicGFjazovL2RlbW8tcG9wLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW1vLXBvcC1hcHAvLi9zcmMvcGFnZXMvRGVtby5qcyIsIndlYnBhY2s6Ly9kZW1vLXBvcC1hcHAvLi9zcmMvcGFnZXMvR3VpZGUuanMiLCJ3ZWJwYWNrOi8vZGVtby1wb3AtYXBwLy4vc3JjL3BhZ2VzL0hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmFsZXdheTp3Z2h0QDQwMDs2MDAmZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xcclxcblxcdGJhY2tncm91bmQ6ICNjOWQ2ZmY7XFxyXFxuXFx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlMmUyZTIsICNjOWQ2ZmYpO1xcclxcblxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2UyZTJlMiwgI2M5ZDZmZik7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1jb250YWluZXIge1xcclxcblxcdHdpZHRoOiAxMDB2dztcXHJcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGdhcDogMjBweDtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8tdGl0bGUge1xcclxcblxcdGZvbnQtc2l6ZTogMTAwcHg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5oZXJvLXN1YnRpdGxlIHtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItbWVudSB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1tZW51LWl0ZW0ge1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAycHg7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItbWVudS1pdGVtLmN1cnJlbnQtcGFnZSB7XFxyXFxuXFx0Ym9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmMDgwODA7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItY29udGFpbmVyIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0Ym90dG9tOiAxMHB4O1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1kZW1vLWJ1dHRvbiB7XFxyXFxuXFx0b3V0bGluZTogbm9uZTtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0YmFja2dyb3VuZDogYmxhY2s7XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHRwYWRkaW5nOiAxMHB4IDMwcHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcclxcblxcdG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG5cXHRsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcblxcdHRyYW5zaXRpb246IDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5oZXJvLWRlbW8tYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZDogIzBkMGQwZDtcXHJcXG5cXHR0cmFuc2l0aW9uOiAwLjNzO1xcclxcblxcdGNvbG9yOiAjZjA4MDgwO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zZWN0aW9ucyB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMzAlO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDEwJTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRnYXA6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG5cXHR3aWR0aDogODAlO1xcclxcblxcdHBhZGRpbmc6IDIwcHg7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGdhcDogNDBweDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuXFx0Ym94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLXRpdGxlIHtcXHJcXG5cXHRmb250LXNpemU6IDM1cHg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLXN1YnRpdGxlIHtcXHJcXG5cXHRmb250LXNpemU6IDI1cHg7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcdGJhY2tncm91bmQ6ICNmMGYwZjA7XFxyXFxuXFx0cGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tY29udGVudCB7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29kZS1zbmlwcGV0IHtcXHJcXG5cXHRmb250LXNpemU6IDE0cHg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjZjBmOGZmO1xcclxcblxcdGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDI0JSkgMHB4IDNweCA4cHg7XFxyXFxuXFx0cGFkZGluZzogNXB4O1xcclxcblxcdG1hcmdpbjogMTBweCAwcHg7XFxyXFxuXFx0b3ZlcmZsb3cteDogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLWNvbnRhaW5lciB7XFxyXFxuXFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdHRvcDogMDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiBibGFjaztcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRmb250LXNpemU6IDQwcHg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRtaW4taGVpZ2h0OiA3MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmFjay1hcnJvdyB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGxlZnQ6IDIwcHg7XFxyXFxuXFx0b3V0bGluZTogbm9uZTtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0YmFja2dyb3VuZDogaW5oZXJpdDtcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0Zm9udC1zaXplOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGluay1idXR0b24ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5saW5rLWJ1dHRvbjp2aXNpdGVkIHtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaGFtYnVyZ2VyLWljb24tY29udGFpbmVyIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0bGVmdDogMjBweDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0Z2FwOiAxMHB4O1xcclxcblxcdGhlaWdodDogYXV0bztcXHJcXG5cXHR3aWR0aDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhhbWJ1cmdlci1saW5lIHtcXHJcXG5cXHRib3JkZXItdG9wOiAycHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5oYW1idXJnZXItbmF2YmFyLW1lbnUge1xcclxcblxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiBibGFjaztcXHJcXG5cXHRmb250LXNpemU6IDQwcHg7XFxyXFxuXFx0dG9wOiA3MHB4O1xcclxcblxcdHBhZGRpbmc6IDI1cHggMHB4O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRnYXA6IDYwcHg7XFxyXFxuXFx0b3BhY2l0eTogMC45O1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oYW1idXJnZXItbWVudS1pdGVtIHtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFx0Zm9udC1zaXplOiAyNXB4O1xcclxcblxcdGNvbG9yOiAjZjA4MDgwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLWxpbmsge1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItbGluazpob3ZlciB7XFxyXFxuXFx0Y29sb3I6ICNmMDgwODAgIWltcG9ydGFudDtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItbGluazp2aXNpdGVkIHtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGFtYnVyZ2VyLW1lbnUtaXRlbTp2aXNpdGVkIHtcXHJcXG5cXHRjb2xvcjogI2YwODA4MDtcXHJcXG59XFxyXFxuXFxyXFxuLmV4dGVybmFsLWxpbmsge1xcclxcblxcdGNvbG9yOiAjZjA4MDgwO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmV4dGVybmFsLWxpbms6aG92ZXIge1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uZXh0ZXJuYWwtbGluazp2aXNpdGVkIHtcXHJcXG5cXHRjb2xvcjogI2YwODA4MDtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb3VudGVyLWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGdhcDogMzBweDtcXHJcXG5cXHRmb250LXNpemU6IDQwcHg7XFxyXFxuXFx0Y29sb3I6ICNmMDgwODA7XFxyXFxufVxcclxcblxcclxcbi5jb3VudGVyLWJ1dHRvbiB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGZvbnQtc2l6ZTogNDBweDtcXHJcXG5cXHR3aWR0aDogNDBweDtcXHJcXG5cXHRoZWlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib3gtY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Z2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm94LWJ1dHRvbiB7XFxyXFxuXFx0Zm9udC1zaXplOiAyNXB4O1xcclxcblxcdHBhZGRpbmc6IDVweCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm94LWRpc3BsYXkge1xcclxcblxcdGJhY2tncm91bmQ6IHJlZDtcXHJcXG5cXHR3aWR0aDogMzAlO1xcclxcblxcdGhlaWdodDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0b3B3YXRjaC1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRnYXA6IDIwcHg7XFxyXFxuXFx0Zm9udC1zaXplOiA0MHB4O1xcclxcblxcdGNvbG9yOiAjZjA4MDgwO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RvcHdhdGNoLWJ1dHRvbiB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHRwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZHVwbGljYXRlLWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Z2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZHVwbGljYXRlLWlucHV0IHtcXHJcXG5cXHR3aWR0aDogNTAlO1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmR1cGxpY2F0ZS1vdXRwdXQge1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcblxcdC5wYWdlLXNlY3Rpb25zIHtcXHJcXG5cXHRcXHRtYXJnaW4tdG9wOiAxNSU7XFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogNSU7XFxyXFxuXFx0fVxcclxcblxcdC5oZXJvLXRpdGxlIHtcXHJcXG5cXHRcXHRmb250LXNpemU6IDE1MHB4O1xcclxcblxcdH1cXHJcXG5cXHQuaGVyby1zdWJ0aXRsZSB7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAzMHB4O1xcclxcblxcdH1cXHJcXG5cXHQuaGVyby1kZW1vLWJ1dHRvbiB7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAzMHB4O1xcclxcblxcdH1cXHJcXG5cXHQuZm9vdGVyLWNvbnRhaW5lciB7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAyNXB4O1xcclxcblxcdH1cXHJcXG5cXHQuaGFtYnVyZ2VyLW1lbnUtaXRlbSB7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAzMHB4O1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xcclxcblxcdC5zZWN0aW9uIHtcXHJcXG5cXHRcXHR3aWR0aDogNTAlO1xcclxcblxcdH1cXHJcXG5cXHQucGFnZS1zZWN0aW9ucyB7XFxyXFxuXFx0XFx0bWFyZ2luLXRvcDogNiU7XFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMiU7XFxyXFxuXFx0fVxcclxcblxcdC5jb2RlLXNuaXBwZXQge1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcdG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG5cXHR9XFxyXFxuXFx0LnNlY3Rpb24tY29udGVudCB7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxOHB4O1xcclxcblxcdH1cXHJcXG5cXHQuYm94LWRpc3BsYXkge1xcclxcblxcdFxcdHdpZHRoOiAxMCU7XFxyXFxuXFx0fVxcclxcblxcdC5uYXZiYXItY29udGFpbmVyIHtcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG5cXHR9XFxyXFxuXFx0Lm5hdmJhci10aXRsZSB7XFxyXFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHR9XFxyXFxuXFx0LmhhbWJ1cmdlci1pY29uLWNvbnRhaW5lciB7XFxyXFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHR9XFxyXFxuXFx0Lm5hdmJhci1tZW51IHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHRcXHRnYXA6IDcwcHg7XFxyXFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAyJTtcXHJcXG5cXHRcXHRmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBzYW5zLXNlcmlmO1xcclxcblxcdH1cXHJcXG5cXHQuZm9vdGVyLWNvbnRhaW5lciB7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxOHB4O1xcclxcblxcdH1cXHJcXG5cXHQuaGVyby1kZW1vLWJ1dHRvbiB7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAyNXB4O1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7Q0FDQyx5QkFBeUI7Q0FDekIsbUJBQW1CO0NBQ25CLCtEQUErRDtDQUMvRCx1REFBdUQ7Q0FDdkQsaUNBQWlDO0NBQ2pDLFNBQVM7Q0FDVCxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixTQUFTO0NBQ1QsWUFBWTtDQUNaLGtDQUFrQztBQUNuQzs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsZ0NBQWdDO0FBQ2pDOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixXQUFXO0NBQ1gsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsWUFBWTtDQUNaLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsa0NBQWtDO0NBQ2xDLG1CQUFtQjtDQUNuQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLGdCQUFnQjtDQUNoQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsVUFBVTtDQUNWLGFBQWE7Q0FDYixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFNBQVM7Q0FDVCxrQkFBa0I7Q0FDbEIsNENBQTRD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QUNBO0VBQ0MsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtDQUNuQjtDQUNBO0VBQ0MsZUFBZTtDQUNoQjtDQUNBO0VBQ0MsVUFBVTtDQUNYO0NBQ0E7RUFDQyxvQkFBb0I7Q0FDckI7Q0FDQTtFQUNDLGFBQWE7Q0FDZDtDQUNBO0VBQ0MsYUFBYTtDQUNkO0NBQ0E7RUFDQyxhQUFhO0VBQ2IsZUFBZTtFQUNmLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsa0NBQWtDO0NBQ25DO0NBQ0E7RUFDQyxlQUFlO0NBQ2hCO0NBQ0E7RUFDQyxlQUFlO0NBQ2hCO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJhbGV3YXk6d2dodEA0MDA7NjAwJmZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjYzlkNmZmO1xcclxcblxcdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZTJlMmUyLCAjYzlkNmZmKTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlMmUyZTIsICNjOWQ2ZmYpO1xcclxcblxcdGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8tY29udGFpbmVyIHtcXHJcXG5cXHR3aWR0aDogMTAwdnc7XFxyXFxuXFx0aGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRnYXA6IDIwcHg7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcblxcdGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5oZXJvLXRpdGxlIHtcXHJcXG5cXHRmb250LXNpemU6IDEwMHB4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1zdWJ0aXRsZSB7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLW1lbnUge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItbWVudS1pdGVtIHtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLW1lbnUtaXRlbS5jdXJyZW50LXBhZ2Uge1xcclxcblxcdGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZjA4MDgwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWNvbnRhaW5lciB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGJvdHRvbTogMTBweDtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8tZGVtby1idXR0b24ge1xcclxcblxcdG91dGxpbmU6IG5vbmU7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdGJhY2tncm91bmQ6IGJsYWNrO1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0cGFkZGluZzogMTBweCAzMHB4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG5cXHRtYXJnaW4tdG9wOiAyMHB4O1xcclxcblxcdGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuXFx0bGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG5cXHR0cmFuc2l0aW9uOiAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1kZW1vLWJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGJhY2tncm91bmQ6ICMwZDBkMGQ7XFxyXFxuXFx0dHJhbnNpdGlvbjogMC4zcztcXHJcXG5cXHRjb2xvcjogI2YwODA4MDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc2VjdGlvbnMge1xcclxcblxcdG1hcmdpbi10b3A6IDMwJTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxMCU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Z2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbiB7XFxyXFxuXFx0YmFja2dyb3VuZDogd2hpdGU7XFxyXFxuXFx0d2lkdGg6IDgwJTtcXHJcXG5cXHRwYWRkaW5nOiAyMHB4O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRnYXA6IDQwcHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogN3B4O1xcclxcblxcdGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi10aXRsZSB7XFxyXFxuXFx0Zm9udC1zaXplOiAzNXB4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi1zdWJ0aXRsZSB7XFxyXFxuXFx0Zm9udC1zaXplOiAyNXB4O1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcclxcblxcdHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLWNvbnRlbnQge1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvZGUtc25pcHBldCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YmFja2dyb3VuZDogI2YwZjhmZjtcXHJcXG5cXHRib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyNCUpIDBweCAzcHggOHB4O1xcclxcblxcdHBhZGRpbmc6IDVweDtcXHJcXG5cXHRtYXJnaW46IDEwcHggMHB4O1xcclxcblxcdG92ZXJmbG93LXg6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1jb250YWluZXIge1xcclxcblxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHR0b3A6IDA7XFxyXFxuXFx0YmFja2dyb3VuZDogYmxhY2s7XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0Zm9udC1zaXplOiA0MHB4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0bWluLWhlaWdodDogNzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2stYXJyb3cge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRsZWZ0OiAyMHB4O1xcclxcblxcdG91dGxpbmU6IG5vbmU7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdGJhY2tncm91bmQ6IGluaGVyaXQ7XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdGZvbnQtc2l6ZTogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmstYnV0dG9uIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubGluay1idXR0b246dmlzaXRlZCB7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhhbWJ1cmdlci1pY29uLWNvbnRhaW5lciB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGxlZnQ6IDIwcHg7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGdhcDogMTBweDtcXHJcXG5cXHRoZWlnaHQ6IGF1dG87XFxyXFxuXFx0d2lkdGg6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5oYW1idXJnZXItbGluZSB7XFxyXFxuXFx0Ym9yZGVyLXRvcDogMnB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGFtYnVyZ2VyLW5hdmJhci1tZW51IHtcXHJcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0YmFja2dyb3VuZDogYmxhY2s7XFxyXFxuXFx0Zm9udC1zaXplOiA0MHB4O1xcclxcblxcdHRvcDogNzBweDtcXHJcXG5cXHRwYWRkaW5nOiAyNXB4IDBweDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0Z2FwOiA2MHB4O1xcclxcblxcdG9wYWNpdHk6IDAuOTtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGFtYnVyZ2VyLW1lbnUtaXRlbSB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcdGZvbnQtc2l6ZTogMjVweDtcXHJcXG5cXHRjb2xvcjogI2YwODA4MDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1saW5rIHtcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLWxpbms6aG92ZXIge1xcclxcblxcdGNvbG9yOiAjZjA4MDgwICFpbXBvcnRhbnQ7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLWxpbms6dmlzaXRlZCB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhhbWJ1cmdlci1tZW51LWl0ZW06dmlzaXRlZCB7XFxyXFxuXFx0Y29sb3I6ICNmMDgwODA7XFxyXFxufVxcclxcblxcclxcbi5leHRlcm5hbC1saW5rIHtcXHJcXG5cXHRjb2xvcjogI2YwODA4MDtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5leHRlcm5hbC1saW5rOmhvdmVyIHtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLmV4dGVybmFsLWxpbms6dmlzaXRlZCB7XFxyXFxuXFx0Y29sb3I6ICNmMDgwODA7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY291bnRlci1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRnYXA6IDMwcHg7XFxyXFxuXFx0Zm9udC1zaXplOiA0MHB4O1xcclxcblxcdGNvbG9yOiAjZjA4MDgwO1xcclxcbn1cXHJcXG5cXHJcXG4uY291bnRlci1idXR0b24ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRmb250LXNpemU6IDQwcHg7XFxyXFxuXFx0d2lkdGg6IDQwcHg7XFxyXFxuXFx0aGVpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm94LWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJveC1idXR0b24ge1xcclxcblxcdGZvbnQtc2l6ZTogMjVweDtcXHJcXG5cXHRwYWRkaW5nOiA1cHggMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJveC1kaXNwbGF5IHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiByZWQ7XFxyXFxuXFx0d2lkdGg6IDMwJTtcXHJcXG5cXHRoZWlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5zdG9wd2F0Y2gtY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0Z2FwOiAyMHB4O1xcclxcblxcdGZvbnQtc2l6ZTogNDBweDtcXHJcXG5cXHRjb2xvcjogI2YwODA4MDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0b3B3YXRjaC1idXR0b24ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxuXFx0cGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmR1cGxpY2F0ZS1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmR1cGxpY2F0ZS1pbnB1dCB7XFxyXFxuXFx0d2lkdGg6IDUwJTtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5kdXBsaWNhdGUtb3V0cHV0IHtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG5cXHQucGFnZS1zZWN0aW9ucyB7XFxyXFxuXFx0XFx0bWFyZ2luLXRvcDogMTUlO1xcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDUlO1xcclxcblxcdH1cXHJcXG5cXHQuaGVyby10aXRsZSB7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxNTBweDtcXHJcXG5cXHR9XFxyXFxuXFx0Lmhlcm8tc3VidGl0bGUge1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMzBweDtcXHJcXG5cXHR9XFxyXFxuXFx0Lmhlcm8tZGVtby1idXR0b24ge1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMzBweDtcXHJcXG5cXHR9XFxyXFxuXFx0LmZvb3Rlci1jb250YWluZXIge1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMjVweDtcXHJcXG5cXHR9XFxyXFxuXFx0LmhhbWJ1cmdlci1tZW51LWl0ZW0ge1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMzBweDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcXHJcXG5cXHQuc2VjdGlvbiB7XFxyXFxuXFx0XFx0d2lkdGg6IDUwJTtcXHJcXG5cXHR9XFxyXFxuXFx0LnBhZ2Utc2VjdGlvbnMge1xcclxcblxcdFxcdG1hcmdpbi10b3A6IDYlO1xcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDIlO1xcclxcblxcdH1cXHJcXG5cXHQuY29kZS1zbmlwcGV0IHtcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRcXHRvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuXFx0fVxcclxcblxcdC5zZWN0aW9uLWNvbnRlbnQge1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXHJcXG5cXHR9XFxyXFxuXFx0LmJveC1kaXNwbGF5IHtcXHJcXG5cXHRcXHR3aWR0aDogMTAlO1xcclxcblxcdH1cXHJcXG5cXHQubmF2YmFyLWNvbnRhaW5lciB7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuXFx0fVxcclxcblxcdC5uYXZiYXItdGl0bGUge1xcclxcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0fVxcclxcblxcdC5oYW1idXJnZXItaWNvbi1jb250YWluZXIge1xcclxcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0fVxcclxcblxcdC5uYXZiYXItbWVudSB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRmb250LXNpemU6IDIwcHg7XFxyXFxuXFx0XFx0Z2FwOiA3MHB4O1xcclxcblxcdFxcdG1hcmdpbi1yaWdodDogMiU7XFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG5cXHR9XFxyXFxuXFx0LmZvb3Rlci1jb250YWluZXIge1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXHJcXG5cXHR9XFxyXFxuXFx0Lmhlcm8tZGVtby1idXR0b24ge1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMjVweDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgY29uc3QgY29uc3RhbnRzID0ge1xyXG5cdGFjY2Vzc0tleUludmFsaWRFcnJvcjogXCJhY2Nlc3NLZXkgbXVzdCBiZSBhIHZhbGlkIGV4aXN0aW5nIGtleVwiLFxyXG5cdGFjY2Vzc0tleU1pc3NpbmdFcnJvcjpcclxuXHRcdFwiYWNjZXNzS2V5IG11c3QgYmUgcGFzc2VkIGluc2lkZSBwcm9wcyBhcmd1bWVudCBmb3IgYSBwb3BDb21wb25lbnQgdXRpbGl6aW5nIHN0YXRlLlwiLFxyXG5cdGNyZWF0ZVBPUEVsZW1lbnRUYWdUeXBlOiBcInN0cmluZ1wiLFxyXG5cdGNyZWF0ZVJvb3RFbGVtZW50RGVmYXVsdElkOiBcInJvb3RcIixcclxuXHRjcmVhdGVSb290RWxlbWVudFRhZzogXCJkaXZcIixcclxuXHRmb3JMb29wSWRlbnRpZmllcjogXCJBcnJheS5mb3JFYWNoXCIsXHJcblx0cG9wQ29tcG9uZW50VW5pcXVlS2V5RXJyb3I6IGBQT1AgY29tcG9uZW50cyByZW5kZXJlZCBpbiBhbiBhcnJheSBtdXN0IGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wIHBhc3NlZCBpbi5gLFxyXG5cdHBvcEVsZW1lbnRBdHRyaWJ1dGVTZXBhcmF0b3I6IFwiPVwiLFxyXG5cdHBvcEVsZW1lbnRDbGFzc0lkZW50aWZpZXI6IFwiY2xhc3M9XCIsXHJcblx0cG9wRWxlbWVudElkSWRlbnRpZmllcjogXCJpZD1cIixcclxuXHRwb3BPYmplY3RUYWdTZXBhcmF0b3I6IFwifFwiLFxyXG5cdG1hcExvb3BJZGVudGlmaWVyOiBcIkFycmF5Lm1hcFwiLFxyXG5cdHJlZnJlc2hET01EZWZhdWx0QWN0aW9uOiBcImNsaWNrXCIsXHJcblx0cmVuZGVyRnVuY3Rpb25JZGVudGlmZXI6IFwiT2JqZWN0LnJlbmRlclwiLFxyXG5cdHJvb3RGdW5jdGlvbklkZW50aWZpZXI6IFwiT2JqZWN0LnJvb3RcIixcclxuXHRzdGF0ZUtleUZpbHRlclN0cmluZzogXCJFcnJvclwiLFxyXG5cdHR5cGVvZlByb3BzRnVuY3Rpb25JZGVudGlmaWVyOiBcImZ1bmN0aW9uXCIsXHJcblx0dHlwZW9mUHJvcHNPYmplY3RJZGVudGlmaWVyOiBcIm9iamVjdFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uc3RhbnRzO1xyXG4iLCJpbXBvcnQgY29uc3RhbnRzIGZyb20gXCIuL2NvbnN0YW50cy1tb2R1bGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBkb20gPSB7XHJcblx0aW5pdDogKCkgPT4ge1xyXG5cdFx0ZG9tLnN0YXRlID0ge307XHJcblx0XHRkb20ucmVuZGVyU3RvcmUgPSB7fTtcclxuXHRcdGRvbS5zdGF0ZUNoZWNrU2V0ID0gbmV3IFNldCgpO1xyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsICgpID0+IHtcclxuXHRcdFx0Y29uc3QgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiIyFcIilbMV07XHJcblx0XHRcdGlmIChkb20ucm91dGVzICYmIGRvbS5jdXJyUGF0aCAhPT0gcGF0aCkge1xyXG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHRnZW5lcmF0ZUVsZW1lbnQ6IChwb3BPYmplY3QpID0+IHtcclxuXHRcdGlmICh0eXBlb2YgcG9wT2JqZWN0ID09PSBjb25zdGFudHMuY3JlYXRlUE9QRWxlbWVudFRhZ1R5cGUpIHtcclxuXHRcdFx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHBvcE9iamVjdCk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBwYXJlbnRBcmdzID0gcG9wT2JqZWN0LnRhZy5zcGxpdChjb25zdGFudHMucG9wT2JqZWN0VGFnU2VwYXJhdG9yKTtcclxuXHRcdGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQocGFyZW50QXJnc1swXSk7XHJcblx0XHRpZiAocGFyZW50QXJnc1sxXSkge1xyXG5cdFx0XHRpZiAocGFyZW50QXJnc1sxXS5pbmNsdWRlcyhjb25zdGFudHMucG9wRWxlbWVudENsYXNzSWRlbnRpZmllcikpIHtcclxuXHRcdFx0XHRwYXJlbnQuY2xhc3NOYW1lID0gcGFyZW50QXJnc1sxXS5zcGxpdChcclxuXHRcdFx0XHRcdGNvbnN0YW50cy5wb3BFbGVtZW50QXR0cmlidXRlU2VwYXJhdG9yXHJcblx0XHRcdFx0KVsxXTtcclxuXHRcdFx0fSBlbHNlIGlmIChwYXJlbnRBcmdzWzFdLmluY2x1ZGVzKGNvbnN0YW50cy5wb3BFbGVtZW50SWRJZGVudGlmaWVyKSkge1xyXG5cdFx0XHRcdHBhcmVudC5pZCA9IHBhcmVudEFyZ3NbMV0uc3BsaXQoXHJcblx0XHRcdFx0XHRjb25zdGFudHMucG9wRWxlbWVudEF0dHJpYnV0ZVNlcGFyYXRvclxyXG5cdFx0XHRcdClbMV07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChwYXJlbnRBcmdzWzJdKSB7XHJcblx0XHRcdGlmIChwYXJlbnRBcmdzWzJdLmluY2x1ZGVzKGNvbnN0YW50cy5wb3BFbGVtZW50Q2xhc3NJZGVudGlmaWVyKSkge1xyXG5cdFx0XHRcdHBhcmVudC5jbGFzc05hbWUgPSBwYXJlbnRBcmdzWzJdLnNwbGl0KFxyXG5cdFx0XHRcdFx0Y29uc3RhbnRzLnBvcEVsZW1lbnRBdHRyaWJ1dGVTZXBhcmF0b3JcclxuXHRcdFx0XHQpWzFdO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHBhcmVudEFyZ3NbMl0uaW5jbHVkZXMoY29uc3RhbnRzLnBvcEVsZW1lbnRJZElkZW50aWZpZXIpKSB7XHJcblx0XHRcdFx0cGFyZW50LmlkID0gcGFyZW50QXJnc1syXS5zcGxpdChcclxuXHRcdFx0XHRcdGNvbnN0YW50cy5wb3BFbGVtZW50QXR0cmlidXRlU2VwYXJhdG9yXHJcblx0XHRcdFx0KVsxXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0T2JqZWN0LmtleXMocG9wT2JqZWN0LnByb3BzKS5mb3JFYWNoKChrZXkpID0+IHtcclxuXHRcdFx0cGFyZW50W2tleV0gPSBwb3BPYmplY3QucHJvcHNba2V5XTtcclxuXHRcdH0pO1xyXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkocG9wT2JqZWN0LmNoaWxkcmVuKSkge1xyXG5cdFx0XHRwb3BPYmplY3QuY2hpbGRyZW5cclxuXHRcdFx0XHQubWFwKGRvbS5nZW5lcmF0ZUVsZW1lbnQpXHJcblx0XHRcdFx0LmZvckVhY2goKG5vZGUpID0+IHBhcmVudC5hcHBlbmRDaGlsZChub2RlKSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcGFyZW50O1xyXG5cdH0sXHJcblx0c2FtZVByb3BzOiAocHJvcHNPbmUsIHByb3BzVHdvKSA9PiB7XHJcblx0XHRpZiAocHJvcHNPbmUgPT09IHByb3BzVHdvKSByZXR1cm4gdHJ1ZTtcclxuXHRcdGlmIChwcm9wc09uZS50b1N0cmluZygpID09PSBwcm9wc1R3by50b1N0cmluZygpKSByZXR1cm4gdHJ1ZTtcclxuXHRcdGlmIChcclxuXHRcdFx0dHlwZW9mIHByb3BzT25lICE9PSBjb25zdGFudHMudHlwZW9mUHJvcHNPYmplY3RJZGVudGlmaWVyIHx8XHJcblx0XHRcdHR5cGVvZiBwcm9wc1R3byAhPT0gY29uc3RhbnRzLnR5cGVvZlByb3BzT2JqZWN0SWRlbnRpZmllciB8fFxyXG5cdFx0XHRwcm9wc09uZSA9PSBudWxsIHx8XHJcblx0XHRcdHByb3BzVHdvID09IG51bGxcclxuXHRcdCkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRjb25zdCBrZXlzT25lID0gT2JqZWN0LmtleXMocHJvcHNPbmUpO1xyXG5cdFx0Y29uc3Qga2V5c1R3byA9IE9iamVjdC5rZXlzKHByb3BzVHdvKTtcclxuXHRcdGlmIChrZXlzT25lLmxlbmd0aCAhPT0ga2V5c1R3by5sZW5ndGgpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0bGV0IHJlc3VsdCA9IHRydWU7XHJcblx0XHRrZXlzT25lLmZvckVhY2goKGtleSkgPT4ge1xyXG5cdFx0XHRpZiAoIWtleXNUd28uaW5jbHVkZXMoa2V5KSkge1xyXG5cdFx0XHRcdHJlc3VsdCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHR0eXBlb2YgcHJvcHNPbmVba2V5XSA9PT0gY29uc3RhbnRzLnR5cGVvZlByb3BzRnVuY3Rpb25JZGVudGlmaWVyIHx8XHJcblx0XHRcdFx0dHlwZW9mIHByb3BzVHdvW2tleV0gPT09IGNvbnN0YW50cy50eXBlb2ZQcm9wc0Z1bmN0aW9uSWRlbnRpZmllclxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHRpZiAocHJvcHNPbmVba2V5XS50b1N0cmluZygpICE9PSBwcm9wc1R3b1trZXldLnRvU3RyaW5nKCkpIHtcclxuXHRcdFx0XHRcdHJlc3VsdCA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoIWRvbS5zYW1lUHJvcHMocHJvcHNPbmVba2V5XSwgcHJvcHNUd29ba2V5XSkpIHtcclxuXHRcdFx0XHRyZXN1bHQgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH0sXHJcblx0Y29tcGFyZUVsZW1lbnRzOiAocG9wTm9kZU9uZSwgcG9wZU5vZGVUd28pID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdHR5cGVvZiBwb3BOb2RlT25lICE9PSB0eXBlb2YgcG9wZU5vZGVUd28gfHxcclxuXHRcdFx0KHR5cGVvZiBwb3BOb2RlT25lID09PSBjb25zdGFudHMuY3JlYXRlUE9QRWxlbWVudFRhZ1R5cGUgJiZcclxuXHRcdFx0XHRwb3BOb2RlT25lICE9PSBwb3BlTm9kZVR3bykgfHxcclxuXHRcdFx0cG9wTm9kZU9uZS50YWcgIT09IHBvcGVOb2RlVHdvLnRhZyB8fFxyXG5cdFx0XHQocG9wTm9kZU9uZS5wcm9wcyAmJlxyXG5cdFx0XHRcdHBvcGVOb2RlVHdvLnByb3BzICYmXHJcblx0XHRcdFx0IWRvbS5zYW1lUHJvcHMocG9wTm9kZU9uZS5wcm9wcywgcG9wZU5vZGVUd28ucHJvcHMpKVxyXG5cdFx0KTtcclxuXHR9LFxyXG5cdHVwZGF0ZUVsZW1lbnQ6IChwYXJlbnROb2RlLCBuZXdOb2RlLCBvbGROb2RlLCBpbmRleCA9IDApID0+IHtcclxuXHRcdGlmICghb2xkTm9kZSkge1xyXG5cdFx0XHRwYXJlbnROb2RlLmFwcGVuZENoaWxkKGRvbS5nZW5lcmF0ZUVsZW1lbnQobmV3Tm9kZSkpO1xyXG5cdFx0fSBlbHNlIGlmICghbmV3Tm9kZSkge1xyXG5cdFx0XHRwYXJlbnROb2RlLnJlbW92ZUNoaWxkKHBhcmVudE5vZGUuY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0fSBlbHNlIGlmIChkb20uY29tcGFyZUVsZW1lbnRzKG5ld05vZGUsIG9sZE5vZGUpKSB7XHJcblx0XHRcdHBhcmVudE5vZGUucmVwbGFjZUNoaWxkKFxyXG5cdFx0XHRcdGRvbS5nZW5lcmF0ZUVsZW1lbnQobmV3Tm9kZSksXHJcblx0XHRcdFx0cGFyZW50Tm9kZS5jaGlsZE5vZGVzW2luZGV4XVxyXG5cdFx0XHQpO1xyXG5cdFx0fSBlbHNlIGlmIChuZXdOb2RlLnRhZykge1xyXG5cdFx0XHRjb25zdCBuZXdMZW5ndGggPSBuZXdOb2RlLmNoaWxkcmVuLmxlbmd0aDtcclxuXHRcdFx0Y29uc3Qgb2xkTGVuZ3RoID0gb2xkTm9kZS5jaGlsZHJlbi5sZW5ndGg7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbmV3TGVuZ3RoIHx8IGkgPCBvbGRMZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGRvbS51cGRhdGVFbGVtZW50KFxyXG5cdFx0XHRcdFx0cGFyZW50Tm9kZS5jaGlsZE5vZGVzW2luZGV4XSxcclxuXHRcdFx0XHRcdG5ld05vZGUuY2hpbGRyZW5baV0sXHJcblx0XHRcdFx0XHRvbGROb2RlLmNoaWxkcmVuW2ldLFxyXG5cdFx0XHRcdFx0aVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdGluaXRpYWxpemVTdGF0ZTogKHBvcENvbXBvbmVudCwgYWNjZXNzS2V5KSA9PiB7XHJcblx0XHRpZiAocG9wQ29tcG9uZW50LnJlbmRlciAmJiBwb3BDb21wb25lbnQuc2V0ICYmIGFjY2Vzc0tleSkge1xyXG5cdFx0XHRpZiAoIWRvbS5zdGF0ZVthY2Nlc3NLZXldKSB7XHJcblx0XHRcdFx0ZG9tLnN0YXRlW2FjY2Vzc0tleV0gPSB7fTtcclxuXHRcdFx0XHRwb3BDb21wb25lbnQuc2V0KHtcclxuXHRcdFx0XHRcdHN0YXRlOiBkb20uc3RhdGVbYWNjZXNzS2V5XSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRwb3BDb21wb25lbnRcclxuXHRcdFx0XHQucmVuZGVyKHsgcHJvcHM6IHt9LCBzdGF0ZToge30gfSlcclxuXHRcdFx0XHQuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuXHRcdFx0XHRcdGlmIChjaGlsZCkge1xyXG5cdFx0XHRcdFx0XHRkb20uaW5pdGlhbGl6ZVN0YXRlKGNoaWxkLCBjaGlsZC5hY2Nlc3NLZXkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0ZmlsdGVyVmFsaWRQb3BPYmplY3RzOiAoZG9tVHJlZSkgPT4ge1xyXG5cdFx0aWYgKGRvbVRyZWUuY2hpbGRyZW4gJiYgQXJyYXkuaXNBcnJheShkb21UcmVlLmNoaWxkcmVuKSkge1xyXG5cdFx0XHRjb25zdCB0cmVlQ2hpbGRyZW4gPSBkb21UcmVlLmNoaWxkcmVuLmZpbHRlcihcclxuXHRcdFx0XHQoY2hpbGQpID0+IGNoaWxkICYmIE9iamVjdC5rZXlzKGNoaWxkKS5sZW5ndGhcclxuXHRcdFx0KTtcclxuXHRcdFx0dHJlZUNoaWxkcmVuLmZvckVhY2goKG9iaikgPT4ge1xyXG5cdFx0XHRcdGlmIChvYmogJiYgb2JqLmNoaWxkcmVuKSB7XHJcblx0XHRcdFx0XHRvYmouY2hpbGRyZW4gPSBkb20uZmlsdGVyVmFsaWRQb3BPYmplY3RzKG9iaik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIHRyZWVDaGlsZHJlbjtcclxuXHRcdH1cclxuXHRcdHJldHVybiBbXTtcclxuXHR9LFxyXG5cdGdldENvbXBvbmVudFN0YXRlS2V5OiAoY29tcG9uZW50LCBsb29wS2V5KSA9PiB7XHJcblx0XHRjb25zdCBoYXNTZXQgPVxyXG5cdFx0XHR0eXBlb2YgY29tcG9uZW50ID09PSBjb25zdGFudHMudHlwZW9mUHJvcHNGdW5jdGlvbklkZW50aWZpZXJcclxuXHRcdFx0XHQ/IGNvbXBvbmVudCgpICYmIGNvbXBvbmVudCgpLnNldFxyXG5cdFx0XHRcdDogY29tcG9uZW50ICYmIGNvbXBvbmVudC5zZXQ7XHJcblx0XHRjb25zdCBsb2NhdGlvbiA9IG5ldyBFcnJvcigpO1xyXG5cdFx0Y29uc3QgZm9ybWF0dGVkTG9vcEtleSA9IGxvb3BLZXkgPyBTdHJpbmcobG9vcEtleSkgOiBudWxsO1xyXG5cdFx0Y29uc3Qgc3RhY2sgPSBsb2NhdGlvbi5zdGFjay5zcGxpdChcIlxcblwiKTtcclxuXHRcdGNvbnN0IGlzTG9vcGVkID1cclxuXHRcdFx0c3RhY2suam9pbihcIlwiKS5pbmNsdWRlcyhjb25zdGFudHMuZm9yTG9vcElkZW50aWZpZXIpIHx8XHJcblx0XHRcdHN0YWNrLmpvaW4oXCJcIikuaW5jbHVkZXMoY29uc3RhbnRzLm1hcExvb3BJZGVudGlmaWVyKTtcclxuXHRcdGlmIChoYXNTZXQgJiYgaXNMb29wZWQgJiYgIWZvcm1hdHRlZExvb3BLZXkpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGNvbnN0YW50cy5wb3BDb21wb25lbnRVbmlxdWVLZXlFcnJvcik7XHJcblx0XHR9XHJcblx0XHRsZXQgY3V0T2ZmSW5kZXg7XHJcblx0XHRmb3IgKGxldCBpID0gc3RhY2subGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuXHRcdFx0aWYgKHN0YWNrW2ldLmluY2x1ZGVzKGNvbnN0YW50cy5yZW5kZXJGdW5jdGlvbklkZW50aWZlcikpIHtcclxuXHRcdFx0XHRjdXRPZmZJbmRleCA9IGk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGNvbnN0IGtleSA9IHN0YWNrWzJdLmluY2x1ZGVzKGNvbnN0YW50cy5yb290RnVuY3Rpb25JZGVudGlmaWVyKVxyXG5cdFx0XHQ/IHN0YWNrLmpvaW4oXCJcIikucmVwbGFjZShjb25zdGFudHMuc3RhdGVLZXlGaWx0ZXJTdHJpbmcsIFwiXCIpXHJcblx0XHRcdDogc3RhY2tcclxuXHRcdFx0XHRcdC5zbGljZSgwLCBjdXRPZmZJbmRleCArIDEpXHJcblx0XHRcdFx0XHQuam9pbihcIlwiKVxyXG5cdFx0XHRcdFx0LnJlcGxhY2UoY29uc3RhbnRzLnN0YXRlS2V5RmlsdGVyU3RyaW5nLCBcIlwiKTtcclxuXHRcdHJldHVybiBgJHtrZXl9JHtmb3JtYXR0ZWRMb29wS2V5ID8gZm9ybWF0dGVkTG9vcEtleSA6IFwiXCJ9YDtcclxuXHR9LFxyXG5cdGNsZWFuU3RhdGU6ICgpID0+IHtcclxuXHRcdE9iamVjdC5rZXlzKGRvbS5zdGF0ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XHJcblx0XHRcdGlmICghZG9tLnN0YXRlQ2hlY2tTZXQuaGFzKGtleSkpIHtcclxuXHRcdFx0XHRkZWxldGUgZG9tLnN0YXRlW2tleV07XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkb207XHJcbiIsImltcG9ydCBjb25zdGFudHMgZnJvbSBcIi4vbW9kdWxlcy9jb25zdGFudHMtbW9kdWxlXCI7XHJcbmltcG9ydCBkb20gZnJvbSBcIi4vbW9kdWxlcy9kb20tbW9kdWxlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUE9QID0ge1xyXG5cdGNyZWF0ZTogKGVsZW1lbnRUYWcsIGVsZW1lbnRDaGlsZHJlbiA9IFtdLCBlbGVtZW50UHJvcHMgPSB7fSkgPT4ge1xyXG5cdFx0Y29uc3QgY2hpbGRyZW4gPVxyXG5cdFx0XHRBcnJheS5pc0FycmF5KGVsZW1lbnRQcm9wcykgJiYgZWxlbWVudFByb3BzLmxlbmd0aFxyXG5cdFx0XHRcdD8gZWxlbWVudFByb3BzXHJcblx0XHRcdFx0OiBlbGVtZW50Q2hpbGRyZW47XHJcblx0XHRpZiAoY2hpbGRyZW4gJiYgQXJyYXkuaXNBcnJheShjaGlsZHJlbikgJiYgY2hpbGRyZW4ubGVuZ3RoKSB7XHJcblx0XHRcdGNoaWxkcmVuLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRcdGlmICghdmFsdWUpIHtcclxuXHRcdFx0XHRcdGNoaWxkcmVuW2luZGV4XSA9IFwiIFwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRpZiAodHlwZW9mIGVsZW1lbnRUYWcgPT09IGNvbnN0YW50cy5jcmVhdGVQT1BFbGVtZW50VGFnVHlwZSkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHRhZzogZWxlbWVudFRhZyxcclxuXHRcdFx0XHRwcm9wczpcclxuXHRcdFx0XHRcdCFBcnJheS5pc0FycmF5KGVsZW1lbnRDaGlsZHJlbikgJiYgT2JqZWN0LmtleXMoZWxlbWVudENoaWxkcmVuKS5sZW5ndGhcclxuXHRcdFx0XHRcdFx0PyBlbGVtZW50Q2hpbGRyZW5cclxuXHRcdFx0XHRcdFx0OiBlbGVtZW50UHJvcHMsXHJcblx0XHRcdFx0Y2hpbGRyZW4sXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0fSxcclxuXHRnZXRTdGF0ZTogKGFjY2Vzc0tleSkgPT4ge1xyXG5cdFx0aWYgKCFhY2Nlc3NLZXkpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGNvbnN0YW50cy5hY2Nlc3NLZXlJbnZhbGlkRXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGRvbS5zdGF0ZVthY2Nlc3NLZXldKSB7XHJcblx0XHRcdGNvbnN0IHN0YXRlID0geyAuLi5kb20uc3RhdGVbYWNjZXNzS2V5XSB9O1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4ge307XHJcblx0fSxcclxuXHR1c2U6IChwb3BDb21wb25lbnQsIHBvcENvbXBvbmVudENoaWxkcmVuID0gW10sIHBvcENvbXBvbmVudFByb3BzID0ge30pID0+IHtcclxuXHRcdGNvbnN0IGNvbXBvbmVudENoaWxkcmVuID1cclxuXHRcdFx0QXJyYXkuaXNBcnJheShwb3BDb21wb25lbnRQcm9wcykgJiYgcG9wQ29tcG9uZW50UHJvcHMubGVuZ3RoXHJcblx0XHRcdFx0PyBwb3BDb21wb25lbnRQcm9wc1xyXG5cdFx0XHRcdDogcG9wQ29tcG9uZW50Q2hpbGRyZW47XHJcblx0XHRjb25zdCBjb21wb25lbnRQcm9wcyA9XHJcblx0XHRcdE9iamVjdC5rZXlzKHBvcENvbXBvbmVudENoaWxkcmVuKS5sZW5ndGggJiZcclxuXHRcdFx0IUFycmF5LmlzQXJyYXkocG9wQ29tcG9uZW50Q2hpbGRyZW4pXHJcblx0XHRcdFx0PyBwb3BDb21wb25lbnRDaGlsZHJlblxyXG5cdFx0XHRcdDogcG9wQ29tcG9uZW50UHJvcHM7XHJcblx0XHRsZXQgcGFyZW50ID0ge307XHJcblx0XHRsZXQgY29tcG9uZW50U3RhdGUgPSB7fTtcclxuXHRcdGNvbnN0IGNvbXBvbmVudFN0YXRlS2V5ID0gZG9tLmdldENvbXBvbmVudFN0YXRlS2V5KFxyXG5cdFx0XHRwb3BDb21wb25lbnQsXHJcblx0XHRcdGNvbXBvbmVudFByb3BzLmtleVxyXG5cdFx0KTtcclxuXHRcdGRvbS5zdGF0ZUNoZWNrU2V0LmFkZChjb21wb25lbnRTdGF0ZUtleSk7XHJcblx0XHRpZiAoY29tcG9uZW50UHJvcHMuYWNjZXNzS2V5KSB7XHJcblx0XHRcdGRvbS5zdGF0ZUNoZWNrU2V0LmFkZChjb21wb25lbnRQcm9wcy5hY2Nlc3NLZXkpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgZXhwYW5kZWRDb21wb25lbnQgPVxyXG5cdFx0XHR0eXBlb2YgcG9wQ29tcG9uZW50ID09PSBjb25zdGFudHMudHlwZW9mUHJvcHNGdW5jdGlvbklkZW50aWZpZXIgJiZcclxuXHRcdFx0IWRvbS5zdGF0ZVtjb21wb25lbnRTdGF0ZUtleV1cclxuXHRcdFx0XHQ/IHBvcENvbXBvbmVudCh7IHByb3BzOiB7IC4uLmNvbXBvbmVudFByb3BzIH0gfSlcclxuXHRcdFx0XHQ6IHR5cGVvZiBwb3BDb21wb25lbnQgPT09IGNvbnN0YW50cy50eXBlb2ZQcm9wc0Z1bmN0aW9uSWRlbnRpZmllclxyXG5cdFx0XHRcdD8gZG9tLnJlbmRlclN0b3JlW2NvbXBvbmVudFN0YXRlS2V5XS5leHBhbmRlZEZuXHJcblx0XHRcdFx0OiBwb3BDb21wb25lbnQ7XHJcblx0XHRpZiAoIWRvbS5zdGF0ZVtjb21wb25lbnRTdGF0ZUtleV0pIHtcclxuXHRcdFx0ZG9tLnN0YXRlW2NvbXBvbmVudFN0YXRlS2V5XSA9IHt9O1xyXG5cdFx0XHRkb20ucmVuZGVyU3RvcmVbY29tcG9uZW50U3RhdGVLZXldID0ge307XHJcblx0XHRcdGRvbS5yZW5kZXJTdG9yZVtjb21wb25lbnRTdGF0ZUtleV0uZXhwYW5kZWRGbiA9XHJcblx0XHRcdFx0dHlwZW9mIHBvcENvbXBvbmVudCA9PT0gY29uc3RhbnRzLnR5cGVvZlByb3BzRnVuY3Rpb25JZGVudGlmaWVyXHJcblx0XHRcdFx0XHQ/IHBvcENvbXBvbmVudCh7IHByb3BzOiB7IC4uLmNvbXBvbmVudFByb3BzIH0gfSlcclxuXHRcdFx0XHRcdDogcG9wQ29tcG9uZW50O1xyXG5cdFx0XHRpZiAoZXhwYW5kZWRDb21wb25lbnQuc2V0KSB7XHJcblx0XHRcdFx0cGFyZW50LnNldCA9IGV4cGFuZGVkQ29tcG9uZW50LnNldDtcclxuXHRcdFx0XHRleHBhbmRlZENvbXBvbmVudC5zZXQoe1xyXG5cdFx0XHRcdFx0cHJvcHM6IHsgLi4uY29tcG9uZW50UHJvcHMgfSxcclxuXHRcdFx0XHRcdHN0YXRlOiBkb20uc3RhdGVbY29tcG9uZW50U3RhdGVLZXldLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbXBvbmVudFN0YXRlID0gZG9tLnN0YXRlW2NvbXBvbmVudFN0YXRlS2V5XTtcclxuXHRcdFx0ZG9tLnN0YXRlW2NvbXBvbmVudFByb3BzLmFjY2Vzc0tleV0gPSBjb21wb25lbnRTdGF0ZTtcclxuXHRcdH1cclxuXHRcdGlmIChleHBhbmRlZENvbXBvbmVudC5yZW5kZXIpIHtcclxuXHRcdFx0cGFyZW50LmNvbXBvbmVudFN0YXRlS2V5ID0gY29tcG9uZW50U3RhdGVLZXk7XHJcblx0XHRcdGNvbXBvbmVudFN0YXRlID0gZG9tLnN0YXRlW2NvbXBvbmVudFN0YXRlS2V5XTtcclxuXHRcdFx0ZG9tLnN0YXRlW2NvbXBvbmVudFByb3BzLmFjY2Vzc0tleV0gPSBjb21wb25lbnRTdGF0ZTtcclxuXHRcdFx0ZGVsZXRlIGNvbXBvbmVudFByb3BzLmFjY2Vzc0tleTtcclxuXHRcdFx0Y29uc3QgcmVuZGVyZWQgPSBleHBhbmRlZENvbXBvbmVudC5yZW5kZXIoe1xyXG5cdFx0XHRcdHByb3BzOiB7IC4uLmNvbXBvbmVudFByb3BzIH0sXHJcblx0XHRcdFx0c3RhdGU6IGNvbXBvbmVudFN0YXRlLFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Y29uc3QgY2hpbGRyZW4gPSByZW5kZXJlZC5jaGlsZHJlbjtcclxuXHRcdFx0aWYgKCFyZW5kZXJlZC50YWcucmVuZGVyKSB7XHJcblx0XHRcdFx0cGFyZW50ID0geyAuLi5wYXJlbnQsIC4uLnJlbmRlcmVkIH07XHJcblx0XHRcdFx0aWYgKGNvbXBvbmVudENoaWxkcmVuICYmIGNvbXBvbmVudENoaWxkcmVuLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0Y29tcG9uZW50Q2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuXHRcdFx0XHRcdFx0cGFyZW50LmNoaWxkcmVuLnB1c2goY2hpbGQpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHBhcmVudCA9IFBPUC51c2UocmVuZGVyZWQudGFnLCBjb21wb25lbnRDaGlsZHJlbik7XHJcblx0XHRcdFx0Y2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuXHRcdFx0XHRcdHBhcmVudC5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRpZiAoY29tcG9uZW50Q2hpbGRyZW4gJiYgY29tcG9uZW50Q2hpbGRyZW4ubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRjb21wb25lbnRDaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRwYXJlbnQuY2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHBhcmVudDtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHJlZnJlc2g6ICgpID0+IHtcclxuXHRcdGRvbS5zdGF0ZUNoZWNrU2V0LmNsZWFyKCk7XHJcblx0XHRjb25zdCBuZXdUcmVlID0gZG9tLnJlbmRlckZuKCk7XHJcblx0XHRuZXdUcmVlLmNoaWxkcmVuID0gZG9tLmZpbHRlclZhbGlkUG9wT2JqZWN0cyhuZXdUcmVlKTtcclxuXHRcdGRvbS51cGRhdGVFbGVtZW50KGRvbS5yb290LCBuZXdUcmVlLCBkb20ucHJldlRyZWUpO1xyXG5cdFx0ZG9tLnByZXZUcmVlID0gbmV3VHJlZTtcclxuXHRcdGRvbS5jbGVhblN0YXRlKCk7XHJcblx0fSxcclxuXHRyb290OiAocG9wQ29tcG9uZW50LCByb290UHJvcHMgPSB7fSkgPT4ge1xyXG5cdFx0Y29uc3QgeyByb290TmFtZSwgYWNjZXNzS2V5LCBwb3BSb3V0ZXMgfSA9IHJvb3RQcm9wcztcclxuXHRcdGNvbnN0IHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGNvbnN0YW50cy5jcmVhdGVSb290RWxlbWVudFRhZyk7XHJcblx0XHRyb290LmlkID1cclxuXHRcdFx0cm9vdE5hbWUgJiYgdHlwZW9mIHJvb3ROYW1lID09PSBjb25zdGFudHMuY3JlYXRlUE9QRWxlbWVudFRhZ1R5cGVcclxuXHRcdFx0XHQ/IHJvb3ROYW1lXHJcblx0XHRcdFx0OiBjb25zdGFudHMuY3JlYXRlUm9vdEVsZW1lbnREZWZhdWx0SWQ7XHJcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJvb3QpO1xyXG5cdFx0ZG9tLnJvb3QgPSByb290O1xyXG5cdFx0Y29uc3QgaGFzUm91dGVzID1cclxuXHRcdFx0cG9wUm91dGVzICYmICFBcnJheS5pc0FycmF5KHBvcFJvdXRlcykgJiYgT2JqZWN0LmtleXMocG9wUm91dGVzKS5sZW5ndGhcclxuXHRcdFx0XHQ/IHRydWVcclxuXHRcdFx0XHQ6IGZhbHNlO1xyXG5cdFx0ZG9tLnJvdXRlcyA9IGhhc1JvdXRlcyA/IHBvcFJvdXRlcyA6IG51bGw7XHJcblx0XHRsZXQgY29tcG9uZW50VG9SZW5kZXI7XHJcblx0XHRjb25zdCBwYXRoID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCIjIVwiKVsxXTtcclxuXHRcdGNvbnN0IGRlZmF1bHRQYXRoID0gaGFzUm91dGVzID8gT2JqZWN0LmtleXMocG9wUm91dGVzKVswXSA6IG51bGw7XHJcblx0XHRpZiAoIXBhdGggJiYgaGFzUm91dGVzKSB7XHJcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmICs9IGAjISR7ZGVmYXVsdFBhdGh9YDtcclxuXHRcdH1cclxuXHRcdGlmIChoYXNSb3V0ZXMgJiYgcGF0aCAmJiBwb3BSb3V0ZXNbcGF0aF0pIHtcclxuXHRcdFx0Y29tcG9uZW50VG9SZW5kZXIgPSBwb3BSb3V0ZXNbcGF0aF07XHJcblx0XHRcdGRvbS5jdXJyUGF0aCA9IHBhdGg7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb21wb25lbnRUb1JlbmRlciA9IHBvcENvbXBvbmVudDtcclxuXHRcdH1cclxuXHRcdGRvbS5pbml0KCk7XHJcblx0XHRjb25zdCBjb21wb25lbnRTdGF0ZUtleSA9IGFjY2Vzc0tleVxyXG5cdFx0XHQ/IGFjY2Vzc0tleVxyXG5cdFx0XHQ6IGRvbS5nZXRDb21wb25lbnRTdGF0ZUtleSgpO1xyXG5cdFx0Y29uc3QgaXNDb21wb25lbnRGdW5jdGlvbiA9XHJcblx0XHRcdHR5cGVvZiBjb21wb25lbnRUb1JlbmRlciA9PT0gY29uc3RhbnRzLnR5cGVvZlByb3BzRnVuY3Rpb25JZGVudGlmaWVyO1xyXG5cdFx0Y29uc3QgZXhwYW5kZWRDb21wb25lbnQgPVxyXG5cdFx0XHRpc0NvbXBvbmVudEZ1bmN0aW9uICYmICFkb20uc3RhdGVbY29tcG9uZW50U3RhdGVLZXldXHJcblx0XHRcdFx0PyBjb21wb25lbnRUb1JlbmRlcigpXHJcblx0XHRcdFx0OiBjb21wb25lbnRUb1JlbmRlcjtcclxuXHRcdGRvbS5pbml0aWFsaXplU3RhdGUoZXhwYW5kZWRDb21wb25lbnQsIGNvbXBvbmVudFN0YXRlS2V5KTtcclxuXHRcdGNvbnN0IGNvbXBvbmVudFN0YXRlID0gY29tcG9uZW50U3RhdGVLZXlcclxuXHRcdFx0PyBQT1AuZ2V0U3RhdGUoY29tcG9uZW50U3RhdGVLZXkpXHJcblx0XHRcdDoge307XHJcblx0XHRkb20ucHJldlRyZWUgPSBleHBhbmRlZENvbXBvbmVudC5yZW5kZXIoe1xyXG5cdFx0XHRzdGF0ZTogY29tcG9uZW50U3RhdGUsXHJcblx0XHR9KTtcclxuXHRcdGRvbS5wcmV2VHJlZS5jaGlsZHJlbiA9IGRvbS5maWx0ZXJWYWxpZFBvcE9iamVjdHMoZG9tLnByZXZUcmVlKTtcclxuXHRcdGRvbS5yZW5kZXJGbiA9ICgpID0+XHJcblx0XHRcdGV4cGFuZGVkQ29tcG9uZW50LnJlbmRlcih7XHJcblx0XHRcdFx0c3RhdGU6IGNvbXBvbmVudFN0YXRlLFxyXG5cdFx0XHR9KTtcclxuXHRcdGRvbS51cGRhdGVFbGVtZW50KHJvb3QsIGRvbS5wcmV2VHJlZSk7XHJcblx0XHRyb290LmFkZEV2ZW50TGlzdGVuZXIoY29uc3RhbnRzLnJlZnJlc2hET01EZWZhdWx0QWN0aW9uLCAoKSA9PiB7XHJcblx0XHRcdFBPUC5yZWZyZXNoKCk7XHJcblx0XHR9KTtcclxuXHR9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUE9QO1xyXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFBPUCBmcm9tIFwic29ucG9wLWpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uID0ge1xyXG5cdHJlbmRlcjogKGNvbXBvbmVudCkgPT4ge1xyXG5cdFx0Y29uc3QgeyBwcm9wcyB9ID0gY29tcG9uZW50O1xyXG5cdFx0Y29uc3QgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lO1xyXG5cdFx0Y29uc3QgYnV0dG9uTGFiZWwgPSBwcm9wcy5sYWJlbDtcclxuXHRcdGNvbnN0IGNsaWNrRm4gPSBwcm9wcy5vbkNsaWNrO1xyXG5cclxuXHRcdHJldHVybiBQT1AuY3JlYXRlKGBidXR0b258Y2xhc3M9JHtjbGFzc05hbWV9YCwgeyBvbmNsaWNrOiBjbGlja0ZuIH0sIFtcclxuXHRcdFx0YnV0dG9uTGFiZWwsXHJcblx0XHRdKTtcclxuXHR9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xyXG4iLCJpbXBvcnQgUE9QIGZyb20gXCJzb25wb3AtanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb3VudGVyID0ge1xyXG5cdHNldDogKGNvbXBvbmVudCkgPT4ge1xyXG5cdFx0Y29uc3QgeyBzdGF0ZSB9ID0gY29tcG9uZW50O1xyXG5cdFx0c3RhdGUuY291bnRlciA9IDA7XHJcblx0fSxcclxuXHRyZW5kZXI6IChjb21wb25lbnQpID0+IHtcclxuXHRcdGNvbnN0IHsgc3RhdGUgfSA9IGNvbXBvbmVudDtcclxuXHJcblx0XHRyZXR1cm4gUE9QLmNyZWF0ZShcImRpdnxjbGFzcz1jb3VudGVyLWNvbnRhaW5lclwiLCBbXHJcblx0XHRcdFBPUC5jcmVhdGUoXCJidXR0b258Y2xhc3M9Y291bnRlci1idXR0b25cIiwgW1wiLVwiXSwge1xyXG5cdFx0XHRcdG9uY2xpY2s6ICgpID0+IChzdGF0ZS5jb3VudGVyIC09IDEpLFxyXG5cdFx0XHR9KSxcclxuXHRcdFx0YCR7c3RhdGUuY291bnRlcn1gLFxyXG5cdFx0XHRQT1AuY3JlYXRlKFwiYnV0dG9ufGNsYXNzPWNvdW50ZXItYnV0dG9uXCIsIFtcIitcIl0sIHtcclxuXHRcdFx0XHRvbmNsaWNrOiAoKSA9PiAoc3RhdGUuY291bnRlciArPSAxKSxcclxuXHRcdFx0fSksXHJcblx0XHRdKTtcclxuXHR9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ291bnRlcjtcclxuIiwiaW1wb3J0IFBPUCBmcm9tIFwic29ucG9wLWpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRHVwbGljYXRlID0ge1xyXG5cdHNldDogKGNvbXBvbmVudCkgPT4ge1xyXG5cdFx0Y29uc3QgeyBzdGF0ZSB9ID0gY29tcG9uZW50O1xyXG5cdFx0c3RhdGUudGV4dFZhbHVlID0gXCJcIjtcclxuXHR9LFxyXG5cdHJlbmRlcjogKGNvbXBvbmVudCkgPT4ge1xyXG5cdFx0Y29uc3QgeyBzdGF0ZSB9ID0gY29tcG9uZW50O1xyXG5cclxuXHRcdHJldHVybiBQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPWR1cGxpY2F0ZS1jb250YWluZXJcIiwgW1xyXG5cdFx0XHRQT1AuY3JlYXRlKFwic3BhbnxjbGFzcz1kdXBsaWNhdGUtb3V0cHV0XCIsIFtcclxuXHRcdFx0XHRcIlVzZXI6IFwiLFxyXG5cdFx0XHRcdHN0YXRlLnRleHRWYWx1ZSA/IHN0YXRlLnRleHRWYWx1ZSA6IFwiKmNyaWNrZXRzKlwiLFxyXG5cdFx0XHRdKSxcclxuXHRcdFx0UE9QLmNyZWF0ZShcImlucHV0fGlkPXRleHQtaW5wdXR8Y2xhc3M9ZHVwbGljYXRlLWlucHV0XCIsIHtcclxuXHRcdFx0XHR0eXBlOiBcInRleHRcIixcclxuXHRcdFx0XHRwbGFjZWhvbGRlcjogXCJUeXBlIGhlcmUuLi5cIixcclxuXHRcdFx0XHRtYXhMZW5ndGg6IFwiMTVcIixcclxuXHRcdFx0XHRvbmlucHV0OiAoZSkgPT4ge1xyXG5cdFx0XHRcdFx0c3RhdGUudGV4dFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0LWlucHV0XCIpLnZhbHVlO1xyXG5cdFx0XHRcdFx0UE9QLnJlZnJlc2goKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9KSxcclxuXHRcdF0pO1xyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEdXBsaWNhdGU7XHJcbiIsImltcG9ydCBQT1AgZnJvbSBcInNvbnBvcC1qc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlciA9IHtcclxuXHRyZW5kZXI6ICgpID0+IHtcclxuXHRcdHJldHVybiBQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPWZvb3Rlci1jb250YWluZXJcIiwgW1xyXG5cdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPWZvb3Rlci1pdGVtXCIsIFtcclxuXHRcdFx0XHRcIk1hZGUgYnkgXCIsXHJcblx0XHRcdFx0UE9QLmNyZWF0ZShcclxuXHRcdFx0XHRcdFwiYXxjbGFzcz1leHRlcm5hbC1saW5rXCIsXHJcblx0XHRcdFx0XHR7IGhyZWY6IFwiaHR0cHM6Ly9hYmlyYW1uYWlyLmNvbS9cIiwgdGFyZ2V0OiBcIl9ibGFua1wiIH0sXHJcblx0XHRcdFx0XHRbXCJtZSFcIl1cclxuXHRcdFx0XHQpLFxyXG5cdFx0XHRdKSxcclxuXHRcdF0pO1xyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImltcG9ydCBQT1AgZnJvbSBcInNvbnBvcC1qc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhhbWJ1cmdlckljb24gPSB7XHJcblx0cmVuZGVyOiAoY29tcG9uZW50KSA9PiB7XHJcblx0XHRjb25zdCB7IHByb3BzIH0gPSBjb21wb25lbnQ7XHJcblx0XHRjb25zdCBvbkNsaWNrID0gcHJvcHMub25DbGljaztcclxuXHRcdGNvbnN0IGlzT3BlbiA9IHByb3BzLmlzT3BlbjtcclxuXHJcblx0XHRyZXR1cm4gUE9QLmNyZWF0ZShcclxuXHRcdFx0XCJkaXZ8Y2xhc3M9aGFtYnVyZ2VyLWljb24tY29udGFpbmVyXCIsXHJcblx0XHRcdHsgb25jbGljazogb25DbGljayB9LFxyXG5cdFx0XHRbXHJcblx0XHRcdFx0IWlzT3BlbiAmJiBQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPWhhbWJ1cmdlci1saW5lXCIpLFxyXG5cdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9aGFtYnVyZ2VyLWxpbmVcIiksXHJcblx0XHRcdFx0IWlzT3BlbiAmJiBQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPWhhbWJ1cmdlci1saW5lXCIpLFxyXG5cdFx0XHRdXHJcblx0XHQpO1xyXG5cdH0sXHJcbn07XHJcbiIsImltcG9ydCBQT1AgZnJvbSBcInNvbnBvcC1qc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlcm8gPSB7XHJcblx0cmVuZGVyOiAoKSA9PiB7XHJcblx0XHRyZXR1cm4gUE9QLmNyZWF0ZShcImRpdnxjbGFzcz1oZXJvLWNvbnRhaW5lclwiLCBbXHJcblx0XHRcdFBPUC51c2UoTmF2YmFyKSxcclxuXHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1oZXJvLXRpdGxlXCIsIFtcclxuXHRcdFx0XHRQT1AuY3JlYXRlKFwic3BhbnxjbGFzcz10aXRsZS1lbXBoYXNpc1wiLCBbXCJwb3AhIFwiXSksXHJcblx0XHRcdFx0XCJKU1wiLFxyXG5cdFx0XHRdKSxcclxuXHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1oZXJvLXN1YnRpdGxlXCIsIFtcImZyb250ZW5kIG1hZGUgZWFzeVwiXSksXHJcblx0XHRcdFBPUC5jcmVhdGUoXCJhfGNsYXNzPWxpbmstYnV0dG9uXCIsIHsgaHJlZjogXCIjIS9kZW1vLXBhZ2VcIiB9LCBbXHJcblx0XHRcdFx0UE9QLnVzZShCdXR0b24sIHsgY2xhc3NOYW1lOiBcImhlcm8tZGVtby1idXR0b25cIiwgbGFiZWw6IFwiRGVtb1wiIH0pLFxyXG5cdFx0XHRdKSxcclxuXHRcdF0pO1xyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xyXG4iLCJpbXBvcnQgUE9QIGZyb20gXCJzb25wb3AtanNcIjtcclxuaW1wb3J0IHsgSGFtYnVyZ2VySWNvbiB9IGZyb20gXCIuL0hhbWJ1cmdlckljb25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBOYXZiYXIgPSB7XHJcblx0c2V0OiAoY29tcG9uZW50KSA9PiB7XHJcblx0XHRjb25zdCB7IHN0YXRlIH0gPSBjb21wb25lbnQ7XHJcblx0XHRzdGF0ZS5oYW1idXJnZXJNZW51T3BlbiA9IGZhbHNlO1xyXG5cdH0sXHJcblx0cmVuZGVyOiAoY29tcG9uZW50KSA9PiB7XHJcblx0XHRjb25zdCB7IHByb3BzLCBzdGF0ZSB9ID0gY29tcG9uZW50O1xyXG5cdFx0Y29uc3QgbmF2QmFyVGl0bGUgPSBwcm9wcy50aXRsZTtcclxuXHRcdGNvbnN0IG1lbnVJdGVtcyA9IFtcclxuXHRcdFx0eyB0ZXh0OiBcIkhvbWVcIiwgcm91dGU6IFwiIyEvaG9tZS1wYWdlXCIgfSxcclxuXHRcdFx0eyB0ZXh0OiBcIkd1aWRlXCIsIHJvdXRlOiBcIiMhL2d1aWRlLXBhZ2VcIiB9LFxyXG5cdFx0XHR7IHRleHQ6IFwiRGVtb1wiLCByb3V0ZTogXCIjIS9kZW1vLXBhZ2VcIiB9LFxyXG5cdFx0XTtcclxuXHRcdGNvbnN0IGN1cnJQYWdlID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XHJcblx0XHRyZXR1cm4gUE9QLmNyZWF0ZShcImRpdnxjbGFzcz1uYXZiYXItY29udGFpbmVyXCIsIFtcclxuXHRcdFx0UE9QLnVzZShIYW1idXJnZXJJY29uLCB7XHJcblx0XHRcdFx0b25DbGljazogKCkgPT4gKHN0YXRlLmhhbWJ1cmdlck1lbnVPcGVuID0gIXN0YXRlLmhhbWJ1cmdlck1lbnVPcGVuKSxcclxuXHRcdFx0XHRpc09wZW46IHN0YXRlLmhhbWJ1cmdlck1lbnVPcGVuLFxyXG5cdFx0XHR9KSxcclxuXHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1uYXZiYXItdGl0bGVcIiwgW25hdkJhclRpdGxlXSksXHJcblx0XHRcdHN0YXRlLmhhbWJ1cmdlck1lbnVPcGVuICYmXHJcblx0XHRcdFx0UE9QLmNyZWF0ZShcclxuXHRcdFx0XHRcdFwiZGl2fGNsYXNzPWhhbWJ1cmdlci1uYXZiYXItbWVudVwiLFxyXG5cdFx0XHRcdFx0bWVudUl0ZW1zLm1hcCgoaXRlbSkgPT5cclxuXHRcdFx0XHRcdFx0UE9QLmNyZWF0ZShcclxuXHRcdFx0XHRcdFx0XHRcImF8Y2xhc3M9aGFtYnVyZ2VyLW1lbnUtaXRlbVwiLFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGhyZWY6IGl0ZW0ucm91dGUsXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRbaXRlbS50ZXh0XVxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdFx0KSxcclxuXHRcdFx0UE9QLmNyZWF0ZShcclxuXHRcdFx0XHRcImRpdnxjbGFzcz1uYXZiYXItbWVudVwiLFxyXG5cdFx0XHRcdG1lbnVJdGVtcy5tYXAoKGl0ZW0pID0+XHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFxyXG5cdFx0XHRcdFx0XHRgc3BhbnxjbGFzcz1uYXZiYXItbWVudS1pdGVtICR7XHJcblx0XHRcdFx0XHRcdFx0Y3VyclBhZ2UgPT09IGl0ZW0ucm91dGUgPyBcIiBjdXJyZW50LXBhZ2VcIiA6IFwiXCJcclxuXHRcdFx0XHRcdFx0fWAsXHJcblx0XHRcdFx0XHRcdFtcclxuXHRcdFx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiYXxjbGFzcz1uYXZiYXItbGlua1wiLCB7IGhyZWY6IGl0ZW0ucm91dGUgfSwgW1xyXG5cdFx0XHRcdFx0XHRcdFx0aXRlbS50ZXh0LFxyXG5cdFx0XHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdFx0KVxyXG5cdFx0XHQpLFxyXG5cdFx0XSk7XHJcblx0fSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIiwiaW1wb3J0IFBPUCBmcm9tIFwic29ucG9wLWpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUmVkQm94ID0ge1xyXG5cdHNldDogKGNvbXBvbmVudCkgPT4ge1xyXG5cdFx0Y29uc3QgeyBzdGF0ZSB9ID0gY29tcG9uZW50O1xyXG5cdFx0c3RhdGUuc2hvd0JveCA9IHRydWU7XHJcblx0fSxcclxuXHRyZW5kZXI6IChjb21wb25lbnQpID0+IHtcclxuXHRcdGNvbnN0IHsgc3RhdGUgfSA9IGNvbXBvbmVudDtcclxuXHJcblx0XHRyZXR1cm4gUE9QLmNyZWF0ZShcImRpdnxjbGFzcz1ib3gtY29udGFpbmVyXCIsIFtcclxuXHRcdFx0UE9QLmNyZWF0ZShcclxuXHRcdFx0XHRcImJ1dHRvbnxjbGFzcz1ib3gtYnV0dG9uXCIsXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0b25jbGljazogKCkgPT4gKHN0YXRlLnNob3dCb3ggPSAhc3RhdGUuc2hvd0JveCksXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRbc3RhdGUuc2hvd0JveCA/IFwiSGlkZVwiIDogXCJTaG93XCJdXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlLnNob3dCb3ggJiYgUE9QLmNyZWF0ZShcImRpdnxjbGFzcz1ib3gtZGlzcGxheVwiKSxcclxuXHRcdF0pO1xyXG5cdH0sXHJcbn07XHJcbiIsImltcG9ydCBQT1AgZnJvbSBcInNvbnBvcC1qc1wiO1xyXG5cclxuZnVuY3Rpb24gc3RvcHdhdGNoTW9kZWwoKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGludGVydmFsOiBudWxsLFxyXG5cdFx0c2Vjb25kczogMCxcclxuXHRcdGlzUGF1c2VkOiB0cnVlLFxyXG5cdH07XHJcbn1cclxuXHJcbmNvbnN0IGFjdGlvbnMgPSB7XHJcblx0aW5jcmVtZW50KG1vZGVsKSB7XHJcblx0XHRtb2RlbC5zZWNvbmRzKys7XHJcblx0XHRQT1AucmVmcmVzaCgpO1xyXG5cdH0sXHJcblx0c3RhcnQobW9kZWwpIHtcclxuXHRcdG1vZGVsLmludGVydmFsID0gc2V0SW50ZXJ2YWwoYWN0aW9ucy5pbmNyZW1lbnQsIDEwMDAsIG1vZGVsKTtcclxuXHR9LFxyXG5cdHN0b3AobW9kZWwpIHtcclxuXHRcdG1vZGVsLmludGVydmFsID0gY2xlYXJJbnRlcnZhbChtb2RlbC5pbnRlcnZhbCk7XHJcblx0fSxcclxuXHRyZXNldChtb2RlbCkge1xyXG5cdFx0bW9kZWwuc2Vjb25kcyA9IDA7XHJcblx0fSxcclxuXHR0b2dnbGUobW9kZWwpIHtcclxuXHRcdG1vZGVsLmlzUGF1c2VkID8gYWN0aW9ucy5zdGFydChtb2RlbCkgOiBhY3Rpb25zLnN0b3AobW9kZWwpO1xyXG5cdFx0bW9kZWwuaXNQYXVzZWQgPSAhbW9kZWwuaXNQYXVzZWQ7XHJcblx0fSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTdG9wd2F0Y2ggPSB7XHJcblx0c2V0KGNvbXBvbmVudCkge1xyXG5cdFx0Y29uc3QgeyBzdGF0ZSB9ID0gY29tcG9uZW50O1xyXG5cdFx0c3RhdGUubW9kZWwgPSBzdG9wd2F0Y2hNb2RlbCgpO1xyXG5cdH0sXHJcblx0cmVuZGVyKGNvbXBvbmVudCkge1xyXG5cdFx0Y29uc3QgeyBzdGF0ZSB9ID0gY29tcG9uZW50O1xyXG5cclxuXHRcdHJldHVybiBQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXN0b3B3YXRjaC1jb250YWluZXJcIiwgW1xyXG5cdFx0XHRQT1AuY3JlYXRlKFwic3BhbnxjbGFzcz1zdG9wd2F0Y2gtc3BhblwiLCBbYCR7c3RhdGUubW9kZWwuc2Vjb25kc31gXSksXHJcblx0XHRcdFBPUC5jcmVhdGUoXHJcblx0XHRcdFx0XCJidXR0b258Y2xhc3M9c3RvcHdhdGNoLWJ1dHRvblwiLFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG9uY2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0YWN0aW9ucy50b2dnbGUoc3RhdGUubW9kZWwpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFtzdGF0ZS5tb2RlbC5pc1BhdXNlZCA/IFwiU3RhcnRcIiA6IFwiUGF1c2VcIl1cclxuXHRcdFx0KSxcclxuXHRcdFx0UE9QLmNyZWF0ZShcclxuXHRcdFx0XHRcImJ1dHRvbnxjbGFzcz1zdG9wd2F0Y2gtYnV0dG9uXCIsXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0b25jbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRhY3Rpb25zLnJlc2V0KHN0YXRlLm1vZGVsKTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRbXCJSZXNldFwiXVxyXG5cdFx0XHQpLFxyXG5cdFx0XSk7XHJcblx0fSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3B3YXRjaDtcclxuIiwiaW1wb3J0IFBPUCBmcm9tIFwic29ucG9wLWpzXCI7XHJcbmltcG9ydCBcIi4vc3R5bGVzL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9wYWdlcy9Ib21lXCI7XHJcbmltcG9ydCBHdWlkZSBmcm9tIFwiLi9wYWdlcy9HdWlkZVwiO1xyXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9wYWdlcy9EZW1vXCI7XHJcblxyXG5jb25zdCByb3V0ZXMgPSB7XHJcblx0XCIvaG9tZS1wYWdlXCI6IEhvbWUsXHJcblx0XCIvZ3VpZGUtcGFnZVwiOiBHdWlkZSxcclxuXHRcIi9kZW1vLXBhZ2VcIjogRGVtbyxcclxufTtcclxuXHJcblBPUC5yb290KEhvbWUsIHsgcm9vdE5hbWU6IFwicG9wLWFwcC1yb290XCIsIHBvcFJvdXRlczogcm91dGVzIH0pOyAvLyBlbnRyeSBwb2ludCBmb3IgcG9wISBhcHAgd2l0aCBjdXN0b20gcm9vdCBuYW1lXHJcbiIsImltcG9ydCBQT1AgZnJvbSBcInNvbnBvcC1qc1wiO1xyXG5pbXBvcnQgQ291bnRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3VudGVyXCI7XHJcbmltcG9ydCBEdXBsaWNhdGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvRHVwbGljYXRlXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XHJcbmltcG9ydCBTdG9wd2F0Y2ggZnJvbSBcIi4uL2NvbXBvbmVudHMvU3RvcHdhdGNoXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRGVtbyA9IHtcclxuXHRyZW5kZXI6ICgpID0+IHtcclxuXHRcdHJldHVybiBQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPWRlbW8tcGFnZS1jb250YWluZXJcIiwgW1xyXG5cdFx0XHRQT1AudXNlKE5hdmJhciwgeyB0aXRsZTogXCJEZW1vXCIgfSksXHJcblx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9cGFnZS1zZWN0aW9uc1wiLCBbXHJcblx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uXCIsIFtcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1zdWJ0aXRsZVwiLCBbXCJSZWFkeS4gU2V0LiBQb3AhXCJdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1jb250ZW50XCIsIFtcclxuXHRcdFx0XHRcdFx0XCJUaGlzIHdlYnNpdGUgYW5kIGFsbCBpdHMgY29tcG9uZW50cyBhcmUgcG93ZXJlZCBieSBwb3AhIEpTLiBJZiB5b3UgZmluZCB0aGlzIHByb2plY3Qgb2YgbWluZSBpbnRlcmVzdGluZywgY29uc2lkZXIgZ2l2aW5nIGl0IGEgc3RhciBvbiBcIixcclxuXHRcdFx0XHRcdFx0UE9QLmNyZWF0ZShcclxuXHRcdFx0XHRcdFx0XHRcImF8Y2xhc3M9ZXh0ZXJuYWwtbGlua1wiLFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL2FiaXJhbXJuYWlyL3BvcC1qc1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0OiBcIl9ibGFua1wiLFxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0W1wiR2l0SHViXCJdXHJcblx0XHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHRcdFwiLlwiLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHRcdFwiVGhpcyBzZWN0aW9uIGNvbnRhaW5zIHRocmVlIGV4YW1wbGVzIG9mIGNvbXBvbmVudHMgdGhhdCBoYXZlIHRoZWlyIG93biBzdGF0ZSBhbmQgcmUtcmVuZGVyLCBpZiBuZWNlc3NhcnksIHRvIGEgY2hhbmdlIGluIHN0YXRlLlwiLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHRcdFwiT3BlbiB1cCBkZXZlbG9wZXIgdG9vbHMgYW5kIHNlZSBwb3AhIEpTIHVwZGF0aW5nIG9ubHkgdGhlIGFmZmVjdGVkIERPTSBlbGVtZW50IHdoZW4gYSBjb21wb25lbnQgaXMgcmVxdWlyZWQgdG8gYmUgcmUtcmVuZGVyZWQuIEEgQ29kZVBlbiBpcyBhbHNvIGF2YWlsYWJsZSBcIixcclxuXHRcdFx0XHRcdFx0UE9QLmNyZWF0ZShcclxuXHRcdFx0XHRcdFx0XHRcImF8Y2xhc3M9ZXh0ZXJuYWwtbGlua1wiLFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGhyZWY6IFwiaHR0cHM6Ly9jb2RlcGVuLmlvL2FiaXJhbXJuYWlyL3Blbi9Sd01XS0VPXCIsXHJcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXQ6IFwiX2JsYW5rXCIsXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRbXCJoZXJlXCJdXHJcblx0XHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHRcdFwiIHRvIGVhc2lseSB0cnkgb3V0IHBvcCEgSlMgZm9yIHlvdXJzZWxmLlwiLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XSksXHJcblx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uXCIsIFtcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1zdWJ0aXRsZVwiLCBbXCJDb3VudGVyXCJdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJwcmV8Y2xhc3M9Y29kZS1zbmlwcGV0XCIsIFtcclxuXHRcdFx0XHRcdFx0UE9QLmNyZWF0ZShcImNvZGV8Y2xhc3M9Y29kZS1ibG9ja1wiLCBbXHJcblx0XHRcdFx0XHRcdFx0YGltcG9ydCBQT1AgZnJvbSBcInNvbnBvcC1qc1wiO1xcblxcbmV4cG9ydCBjb25zdCBDb3VudGVyID0ge1xcbiAgICBzZXQ6IChjb21wb25lbnQpID0+IHtcXG4gICAgICAgIGNvbnN0IHsgc3RhdGUgfSA9IGNvbXBvbmVudDtcXG4gICAgICAgIHN0YXRlLmNvdW50ZXIgPSAwO1xcbiAgICB9LFxcbiAgICByZW5kZXI6IChjb21wb25lbnQpID0+IHtcXG4gICAgICAgIGNvbnN0IHsgc3RhdGUgfSA9IGNvbXBvbmVudDtcXG5cXG4gICAgICAgIHJldHVybiBQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPWNvdW50ZXItY29udGFpbmVyXCIsIFtcXG4gICAgICAgICAgICBQT1AuY3JlYXRlKFwiYnV0dG9ufGNsYXNzPWNvdW50ZXItYnV0dG9uXCIsIFtcIi1cIl0sIHtcXG4gICAgICAgICAgICAgICAgb25jbGljazogKCkgPT4gKHN0YXRlLmNvdW50ZXIgLT0gMSksXFxuICAgICAgICAgICAgfSksXFxuYCArXHJcblx0XHRcdFx0XHRcdFx0XHRcIiAgICAgICAgICAgIGAke3N0YXRlLmNvdW50ZXJ9YCxcXG5cIiArXHJcblx0XHRcdFx0XHRcdFx0XHRgICAgICAgICAgICAgUE9QLmNyZWF0ZShcImJ1dHRvbnxjbGFzcz1jb3VudGVyLWJ1dHRvblwiLCBbXCIrXCJdLCB7XFxuICAgICAgICAgICAgICAgIG9uY2xpY2s6ICgpID0+IChzdGF0ZS5jb3VudGVyICs9IDEpLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgXSk7XFxuICAgIH0sXFxufTtgLFxyXG5cdFx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLnVzZShDb3VudGVyKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1jb250ZW50XCIsIFtcclxuXHRcdFx0XHRcdFx0XCJUaGlzIGNvbXBvbmVudCByZS1yZW5kZXJzIGl0c2VsZiB3aGVuIHRoZSB1c2VyIG1hbnVhbGx5IGNoYW5nZXMgc3RhdGUgYnkgdXNpbmcgYSBidXR0b24uXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRdKSxcclxuXHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb25cIiwgW1xyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uLXN1YnRpdGxlXCIsIFtcIkR1cGxpY2F0ZVwiXSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwicHJlfGNsYXNzPWNvZGUtc25pcHBldFwiLCBbXHJcblx0XHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJjb2RlfGNsYXNzPWNvZGUtYmxvY2tcIiwgW1xyXG5cdFx0XHRcdFx0XHRcdGBpbXBvcnQgUE9QIGZyb20gXCJzb25wb3AtanNcIjtcXG5cXG5leHBvcnQgY29uc3QgRHVwbGljYXRlID0ge1xcbiAgICBzZXQ6IChjb21wb25lbnQpID0+IHtcXG4gICAgICAgIGNvbnN0IHsgc3RhdGUgfSA9IGNvbXBvbmVudDtcXG4gICAgICAgIHN0YXRlLnRleHRWYWx1ZSA9IFwiXCI7XFxuICAgIH0sXFxuICAgIHJlbmRlcjogKGNvbXBvbmVudCkgPT4ge1xcbiAgICAgICAgY29uc3QgeyBzdGF0ZSB9ID0gY29tcG9uZW50O1xcblxcbiAgICAgICAgcmV0dXJuIFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9ZHVwbGljYXRlLWNvbnRhaW5lclwiLCBbXFxuICAgICAgICAgICAgUE9QLmNyZWF0ZShcInNwYW58Y2xhc3M9ZHVwbGljYXRlLW91dHB1dFwiLCBbXFxuICAgICAgICAgICAgICAgIFwiVXNlclwiOiBcIixcXG4gICAgICAgICAgICAgICAgc3RhdGUudGV4dFZhbHVlID8gc3RhdGUudGV4dFZhbHVlIDogXCIqY3JpY2tldHMqXCIsXFxuICAgICAgICAgICAgXSksXFxuICAgICAgICAgICAgUE9QLmNyZWF0ZShcImlucHV0fGlkPXRleHQtaW5wdXR8Y2xhc3M9ZHVwbGljYXRlLWlucHV0XCIsIHtcXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlR5cGUgaGVyZS4uLlwiLFxcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IFwiMTVcIixcXG4gICAgICAgICAgICAgICAgb25pbnB1dDogKGUpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnRleHRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dC1pbnB1dFwiKS52YWx1ZTtcXG4gICAgICAgICAgICAgICAgICAgIFBPUC5yZWZyZXNoKCk7XFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICBdKTtcXG4gICAgfSxcXG59O2AsXHJcblx0XHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AudXNlKER1cGxpY2F0ZSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHRcdFwiVGhpcyBjb21wb25lbnQgcmUtcmVuZGVycyBpdHNlbGYgd2hlbiB0aGUgdXNlciBtYW51YWxseSBjaGFuZ2VzIHN0YXRlIGJ5IHR5cGluZy5cIixcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvblwiLCBbXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tc3VidGl0bGVcIiwgW1wiU3RvcHdhdGNoXCJdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJwcmV8Y2xhc3M9Y29kZS1zbmlwcGV0XCIsIFtcclxuXHRcdFx0XHRcdFx0UE9QLmNyZWF0ZShcImNvZGV8Y2xhc3M9Y29kZS1ibG9ja1wiLCBbXHJcblx0XHRcdFx0XHRcdFx0YGltcG9ydCBQT1AgZnJvbSBcInNvbnBvcC1qc1wiO1xcblxcbmZ1bmN0aW9uIHN0b3B3YXRjaE1vZGVsKCkge1xcbiAgICByZXR1cm4ge1xcbiAgICAgICAgaW50ZXJ2YWw6IG51bGwsXFxuICAgICAgICBzZWNvbmRzOiAwLFxcbiAgICAgICAgaXNQYXVzZWQ6IHRydWUsXFxuICAgIH07XFxufVxcblxcbmNvbnN0IGFjdGlvbnMgPSB7XFxuICAgIGluY3JlbWVudChtb2RlbCkge1xcbiAgICAgICAgbW9kZWwuc2Vjb25kcysrO1xcbiAgICAgICAgUE9QLnJlZnJlc2goKTtcXG4gICAgfSxcXG4gICAgc3RhcnQobW9kZWwpIHtcXG4gICAgICAgIG1vZGVsLmludGVydmFsID0gc2V0SW50ZXJ2YWwoYWN0aW9ucy5pbmNyZW1lbnQsIDEwMDAsIG1vZGVsKTtcXG4gICAgfSxcXG4gICAgc3RvcChtb2RlbCkge1xcbiAgICAgICAgbW9kZWwuaW50ZXJ2YWwgPSBjbGVhckludGVydmFsKG1vZGVsLmludGVydmFsKTtcXG4gICAgfSxcXG4gICAgcmVzZXQobW9kZWwpIHtcXG4gICAgICAgIG1vZGVsLnNlY29uZHMgPSAwO1xcbiAgICB9LFxcbiAgICB0b2dnbGUobW9kZWwpIHtcXG4gICAgICAgIG1vZGVsLmlzUGF1c2VkID8gYWN0aW9ucy5zdGFydChtb2RlbCkgOiBhY3Rpb25zLnN0b3AobW9kZWwpO1xcbiAgICAgICAgbW9kZWwuaXNQYXVzZWQgPSAhbW9kZWwuaXNQYXVzZWQ7XFxuICAgIH0sXFxufTtcXG5cXG5leHBvcnQgY29uc3QgU3RvcHdhdGNoID0ge1xcbiAgICBzZXQ6IChjb21wb25lbnQpID0+IHtcXG4gICAgICAgIGNvbnN0IHsgc3RhdGUgfSA9IGNvbXBvbmVudDtcXG4gICAgICAgIHN0YXRlLm1vZGVsID0gc3RvcHdhdGNoTW9kZWwoKTtcXG4gICAgfSxcXG4gICAgcmVuZGVyOiAoY29tcG9uZW50KSA9PiB7XFxuICAgICAgICBjb25zdCB7IHN0YXRlIH0gPSBjb21wb25lbnQ7XFxuXFxuICAgICAgICByZXR1cm4gUE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zdG9wd2F0Y2gtY29udGFpbmVyXCIsIFtcXG4gICAgICAgICAgICBQT1AuY3JlYXRlKFwic3BhbnxjbGFzcz1zdG9wd2F0Y2gtc3BhblwiLCBbYCArXHJcblx0XHRcdFx0XHRcdFx0XHRcImAke3N0YXRlLm1vZGVsLnNlY29uZHN9YF0pLFxcblwiICtcclxuXHRcdFx0XHRcdFx0XHRcdGAgICAgICAgICAgICBQT1AuY3JlYXRlKFxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnxjbGFzcz1zdG9wd2F0Y2gtYnV0dG9uXCIsXFxuICAgICAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgICAgICAgIG9uY2xpY2s6ICgpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnRvZ2dsZShzdGF0ZS5tb2RlbCk7XFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBbc3RhdGUubW9kZWwuaXNQYXVzZWQgPyBcIlN0YXJ0XCIgOiBcIlBhdXNlXCJdXFxuICAgICAgICAgICAgKSxgICtcclxuXHRcdFx0XHRcdFx0XHRcdGBcXG4gICAgICAgICAgICBQT1AuY3JlYXRlKFxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnxjbGFzcz1zdG9wd2F0Y2gtYnV0dG9uXCIsXFxuICAgICAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgICAgICAgIG9uY2xpY2s6ICgpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnJlc2V0KHN0YXRlLm1vZGVsKTtcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIFtcIlJlc2V0XCJdXFxuICAgICAgICAgICAgKSxcXG4gICAgICAgIF0pO1xcbiAgICB9LFxcbn07YCxcclxuXHRcdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC51c2UoU3RvcHdhdGNoKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1jb250ZW50XCIsIFtcclxuXHRcdFx0XHRcdFx0YFRoaXMgY29tcG9uZW50IGlzIGFibGUgdG8gcmUtcmVuZGVyIGl0c2VsZiBjb250aW51b3VzbHkgd2l0aG91dCB1c2VyIGlucHV0LmAsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRdKSxcclxuXHRcdFx0XSksXHJcblx0XHRdKTtcclxuXHR9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVtbztcclxuIiwiaW1wb3J0IFBPUCBmcm9tIFwic29ucG9wLWpzXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XHJcbmltcG9ydCB7IFJlZEJveCB9IGZyb20gXCIuLi9jb21wb25lbnRzL1JlZEJveFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEd1aWRlID0ge1xyXG5cdHJlbmRlcjogKCkgPT4ge1xyXG5cdFx0cmV0dXJuIFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9Z3VpZGUtcGFnZS1jb250YWluZXJcIiwgW1xyXG5cdFx0XHRQT1AudXNlKE5hdmJhciwgeyB0aXRsZTogXCJHdWlkZVwiIH0pLFxyXG5cdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXBhZ2Utc2VjdGlvbnNcIiwgW1xyXG5cdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvblwiLCBbXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tdGl0bGVcIiwgW1wiSW50cm9cIl0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uLWNvbnRlbnRcIiwgW1xyXG5cdFx0XHRcdFx0XHRcInBvcCEgSlMgaXMgYSBjb21wYWN0IGFuZCBlYXN5IHRvIGxlYXJuIGZyYW1ld29yayB0aGF0IGNhbiBiZSB1c2VkIHRvIG1ha2UgYSBmcm9udGVuZCBpbnRlcmZhY2UgdmVyeSBxdWlja2x5LiBJdCBjb21lcyBlcXVpcHBlZCB3aXRoIHN0YXRlZnVsIGNvbXBvbmVudHMsIHJvdXRpbmcgYW5kIGxpZmVjeWNsZSBtZXRob2RzLiBUaGUgcHJvamVjdCBpcyBvbmx5IGEgbGl0dGxlIG92ZXIgMzUwIHNsb2MgYW5kIHRoZSBjb2RlIGlzIGF2YWlsYWJsZSBcIixcclxuXHRcdFx0XHRcdFx0UE9QLmNyZWF0ZShcclxuXHRcdFx0XHRcdFx0XHRcImF8Y2xhc3M9ZXh0ZXJuYWwtbGlua1wiLFxyXG5cdFx0XHRcdFx0XHRcdHsgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vYWJpcmFtcm5haXIvcG9wLWpzXCIgfSxcclxuXHRcdFx0XHRcdFx0XHRbXCIgaGVyZVwiXVxyXG5cdFx0XHRcdFx0XHQpLFxyXG5cdFx0XHRcdFx0XHRcIi5cIixcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uLXN1YnRpdGxlXCIsIFtcImNkblwiXSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHRcdFwiVGhlIGVhc2llc3Qgd2F5IHRvIHNlZSB3aGF0IHBvcCEgSlMgY2FuIGRvIGlzIHRvIGNvcHkgdGhlIGxpbmsgYmVsb3cgaW50byBhIEhUTUwgc2NyaXB0IHRhZy5cIixcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcInByZXxjbGFzcz1jb2RlLXNuaXBwZXRcIiwgW1xyXG5cdFx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiY29kZXxjbGFzcz1jb2RlLWJsb2NrXCIsIFtcclxuXHRcdFx0XHRcdFx0XHRgaHR0cHM6Ly91bnBrZy5jb20vc29ucG9wLWpzL3BvcC5taW4uanNgLFxyXG5cdFx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcInByZXxjbGFzcz1jb2RlLXNuaXBwZXRcIiwgW1xyXG5cdFx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiY29kZXxjbGFzcz1jb2RlLWJsb2NrXCIsIFtcclxuXHRcdFx0XHRcdFx0XHRgPGh0bWw+XFxuICAgIDxib2R5PlxcbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3VucGtnLmNvbS9zb25wb3AtanMvcG9wLm1pbi5qc1wiPlxcbiAgICAgICAgPC9zY3JpcHQ+XFxuICAgICAgICA8c2NyaXB0PlxcblxcbiAgICAgICAgICAgIC8vIENvZGUgaGVyZVxcblxcbiAgICAgICAgPC9zY3JpcHQ+XFxuICAgIDwvYm9keT5cXG48L2h0bWw+YCxcclxuXHRcdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1jb250ZW50XCIsIFtcclxuXHRcdFx0XHRcdFx0XCJBIENvZGVQZW4gdXNpbmcgcG9wISBKUyBsaWtlIHRoaXMgaXMgYXZhaWxhYmxlIFwiLFxyXG5cdFx0XHRcdFx0XHRQT1AuY3JlYXRlKFxyXG5cdFx0XHRcdFx0XHRcdFwiYXxjbGFzcz1leHRlcm5hbC1saW5rXCIsXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0aHJlZjogXCJodHRwczovL2NvZGVwZW4uaW8vYWJpcmFtcm5haXIvcGVuL1J3TVdLRU9cIixcclxuXHRcdFx0XHRcdFx0XHRcdHRhcmdldDogXCJfYmxhbmtcIixcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFtcImhlcmVcIl1cclxuXHRcdFx0XHRcdFx0KSxcclxuXHRcdFx0XHRcdFx0XCIuXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1zdWJ0aXRsZVwiLCBbXCJucG1cIl0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uLWNvbnRlbnRcIiwgW1xyXG5cdFx0XHRcdFx0XHRcIkZvciBjb21wbGV4IHByb2plY3RzLCB5b3UgY2FuIGluc3RhbGwgcG9wISBKUyB2aWEgbnBtIGFuZCBjb25maWd1cmUgYSBwcm9qZWN0IHdpdGggYSBidW5kbGVyIG9mIHlvdXIgY2hvaWNlLiBBbHRlcm5hdGl2ZWx5LCB5b3UgY2FuIHVzZSB0aGUgXCIsXHJcblx0XHRcdFx0XHRcdFBPUC5jcmVhdGUoXHJcblx0XHRcdFx0XHRcdFx0XCJhfGNsYXNzPWV4dGVybmFsLWxpbmtcIixcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRocmVmOiBcImh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL2NyZWF0ZS1wb3AtYXBwXCIsXHJcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXQ6IFwiX2JsYW5rXCIsXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRbXCJjcmVhdGUtcG9wLWFwcFwiXVxyXG5cdFx0XHRcdFx0XHQpLFxyXG5cdFx0XHRcdFx0XHRcIiBzY3JpcHQgd2hpY2ggdXNlcyBXZWJwYWNrIHRvIGNyZWF0ZSBhIHNhbXBsZSBhcHAuXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJwcmV8Y2xhc3M9Y29kZS1zbmlwcGV0XCIsIFtcclxuXHRcdFx0XHRcdFx0UE9QLmNyZWF0ZShcImNvZGV8Y2xhc3M9Y29kZS1ibG9ja1wiLCBbYG5wbSBpbnN0YWxsIHNvbnBvcC1qc1wiO2BdKSxcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uLWNvbnRlbnRcIiwgW1xyXG5cdFx0XHRcdFx0XHRcIlRvIHVzZSBwb3AhIEpTLCBqdXN0IGltcG9ydCBQT1AuXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJwcmV8Y2xhc3M9Y29kZS1zbmlwcGV0XCIsIFtcclxuXHRcdFx0XHRcdFx0UE9QLmNyZWF0ZShcImNvZGV8Y2xhc3M9Y29kZS1ibG9ja1wiLCBbXHJcblx0XHRcdFx0XHRcdFx0YGltcG9ydCBQT1AgZnJvbSBcInNvbnBvcC1qc1wiO2AsXHJcblx0XHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XSksXHJcblx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uXCIsIFtcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi10aXRsZVwiLCBbXCJDb21wb25lbnRzXCJdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1jb250ZW50XCIsIFtcclxuXHRcdFx0XHRcdFx0XCJMaWtlIG1vc3QgZnJhbWV3b3JrcywgcG9wISBKUyB1c2VzIGEgY29tcG9uZW50IGJhc2VkIGFwcHJvYWNoLlwiLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHRcdFwiQ29tcG9uZW50cyBhcmUganVzdCByZXVzYWJsZSBjaHVua3Mgb2YgSFRNTCB0aGF0IGhhdmUgdGhlaXIgb3duIHN0YXRlIGFuZCBwcm9wZXJ0aWVzLlwiLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHRcdFwicG9wISBjb21wb25lbnRzIGFyZSBvYmplY3RzIHRoYXQgY29udGFpbiBhIHJlbmRlciBmdW5jdGlvbi4gVGhpcyByZW5kZXIgZnVuY3Rpb24gdGVsbHMgcG9wISBKUyB3aGF0IG5lZWRzIHRvIGJlIGRpc3BsYXllZCBvbiB0aGUgcGFnZS5cIixcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uLWNvbnRlbnRcIiwgW1xyXG5cdFx0XHRcdFx0XHRcIkEgcmVuZGVyIGZ1bmN0aW9uIGNhbiByZXR1cm4ganVzdCBIVE1MIG9yIGFub3RoZXIgcG9wISBjb21wb25lbnQuXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJwcmV8Y2xhc3M9Y29kZS1zbmlwcGV0XCIsIFtcclxuXHRcdFx0XHRcdFx0UE9QLmNyZWF0ZShcImNvZGV8Y2xhc3M9Y29kZS1ibG9ja1wiLCBbXHJcblx0XHRcdFx0XHRcdFx0YGV4cG9ydCBjb25zdCBwb3BDb21wb25lbnQgPSB7XFxuICAgcmVuZGVyOiAoKSA9PiB7XFxuICAgICAgICByZXR1cm4gUE9QLmNyZWF0ZSgpL1BPUC51c2UoKTtcXG4gICB9XFxufWAsXHJcblx0XHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHRcdFwiQSBwb3AhIGNvbXBvbmVudCBkb2VzIG5vdCBoYXZlIHRvIGJlIGFuIG9iamVjdC4gSXQgY2FuIGFsc28gYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gb2JqZWN0LlwiLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwicHJlfGNsYXNzPWNvZGUtc25pcHBldFwiLCBbXHJcblx0XHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJjb2RlfGNsYXNzPWNvZGUtYmxvY2tcIiwgW1xyXG5cdFx0XHRcdFx0XHRcdGBmdW5jdGlvbiBwb3BDb21wb25lbnQgKCkge1xcbiAgIHJldHVybiB7IFxcbiAgICAgIHJlbmRlcjogKCkgPT4ge1xcbiAgICAgICAgcmV0dXJuIFBPUC5jcmVhdGUoKS9QT1AudXNlKCk7XFxuICAgICAgfVxcbiAgIH1cXG59YCxcclxuXHRcdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1zdWJ0aXRsZVwiLCBbXCJSZW5kZXJpbmcgSFRNTFwiXSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHRcdFwiV2l0aCB0aGUgY3JlYXRlKCkgZnVuY3Rpb24sIHlvdSBjYW4gZ2VuZXJhdGUgSFRNTC4gVGhlIGZpcnN0IGFyZ3VtZW50IGFjY2VwdHMgYW55IHZhbGlkIEhUTUwgdGFnLlwiLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwicHJlfGNsYXNzPWNvZGUtc25pcHBldFwiLCBbXHJcblx0XHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJjb2RlfGNsYXNzPWNvZGUtYmxvY2tcIiwgW1xyXG5cdFx0XHRcdFx0XHRcdGBQT1AuY3JlYXRlKFwiZGl2XCIsIFtcIkhlbGxvIFdvcmxkXCJdKTtcXG5cXG4vLyBSZW5kZXJlZFxcbjxkaXY+XFxuICAgIEhlbGxvIFdvcmxkXFxuPC9kaXY+YCxcclxuXHRcdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1jb250ZW50XCIsIFtcclxuXHRcdFx0XHRcdFx0XCJDbGFzcyBhbmQgaWQgZm9yIHRoZSBlbGVtZW50IGNhbiBhbHNvIGJlIHBhc3NlZCBpbiBieSB1c2luZyBzdHJpbmdzIGNsYXNzPSBhbmQgaWQ9IHNlcGFyYXRlZCBieSB8LiBUaGUgb3JkZXIgb2YgY2xhc3MgYW5kIGlkIGRvZXMgbm90IG1hdHRlciwgYnV0IHRoZSB0YWcgbXVzdCBhbHdheXMgY29tZSBmaXJzdC5cIixcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcInByZXxjbGFzcz1jb2RlLXNuaXBwZXRcIiwgW1xyXG5cdFx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiY29kZXxjbGFzcz1jb2RlLWJsb2NrXCIsIFtcclxuXHRcdFx0XHRcdFx0XHRgUE9QLmNyZWF0ZShcImRpdnxjbGFzcz1oZWxsb3xpZD13b3JsZFwiLCBbXCJIZWxsbyBXb3JsZFwiXSk7XFxuXFxuLy8gUmVuZGVyZWRcXG48ZGl2IGlkPVwid29ybGRcIiBjbGFzcz1cImhlbGxvXCI+XFxuICAgIEhlbGxvIFdvcmxkXFxuPC9kaXY+YCxcclxuXHRcdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1zdWJ0aXRsZVwiLCBbXCJSZXVzaW5nIENvbXBvbmVudHNcIl0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uLWNvbnRlbnRcIiwgW1xyXG5cdFx0XHRcdFx0XHRcIldpdGggdGhlIHVzZSgpIGZ1bmN0aW9uLCB5b3UgY2FuIHV0aWxpemUgaW1wb3J0ZWQgcG9wISBjb21wb25lbnRzIGFuZCBjb21wb25lbnQgc3RhdGUuXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJwcmV8Y2xhc3M9Y29kZS1zbmlwcGV0XCIsIFtcclxuXHRcdFx0XHRcdFx0UE9QLmNyZWF0ZShcImNvZGV8Y2xhc3M9Y29kZS1ibG9ja1wiLCBbXHJcblx0XHRcdFx0XHRcdFx0YGltcG9ydCBjb21wb25lbnQgZnJvbSBcIi9wYXRoXCI7XFxuXFxuUE9QLnVzZShjb21wb25lbnQsIHByb3BzLCBjaGlsZHJlbik7YCxcclxuXHRcdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1zdWJ0aXRsZVwiLCBbXCJBcmd1bWVudCBPcmRlcmluZ1wiXSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHRcdFwiV2l0aCB0aGUgY3JlYXRlKCkgYW5kIHVzZSgpIGZ1bmN0aW9ucywgdGhlIG9yZGVyIGRvZXMgbm90IG1hdHRlciB3aGVuIHByb3ZpZGluZyBwcm9wcyBhbmQgY2hpbGRyZW4uIEl0IG9ubHkgbWF0dGVycyB0aGF0IHRoZSBwcm9wcyBhcmUgaW4gYW4gb2JqZWN0IGFuZCBjaGlsZHJlbiBhcmUgaW4gYW4gYXJyYXkuXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1jb250ZW50XCIsIFtcclxuXHRcdFx0XHRcdFx0XCJDaGlsZHJlbiBjYW4gZWl0aGVyIGJlIHN0cmluZ3Mgd2hpY2ggZ2V0IHRyYW5zZm9ybWVkIHRvIEhUTUwgdGV4dCBub2RlcyBvciBwb3AgY29tcG9uZW50cyB3cmFwcGVkIGJ5IHRoZSB1c2UoKSBmdW5jdGlvbi5cIixcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uLWNvbnRlbnRcIiwgW1xyXG5cdFx0XHRcdFx0XHRcIlRoZSBvcmRlciB0aGF0IHRoZSBjaGlsZHJlbiBhcmUgcGFzc2VkIGludG8gdGhlIGFycmF5IGZyb20gbGVmdCB0byByaWdodCBpcyBob3cgdGhleSBhcmUgcmVuZGVyZWQgdG9wIHRvIGJvdHRvbS5cIixcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcInByZXxjbGFzcz1jb2RlLXNuaXBwZXRcIiwgW1xyXG5cdFx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiY29kZXxjbGFzcz1jb2RlLWJsb2NrXCIsIFtcclxuXHRcdFx0XHRcdFx0XHRgUE9QLmNyZWF0ZShcImRpdlwiLCBbUE9QLmNyZWF0ZShcInNwYW5cIiksIFBPUC5jcmVhdGUoXCJidXR0b25cIiwgXCJDbGljayBNZVwiKV0pO1xcblxcbi8vIFJlbmRlcmVkXFxuPGRpdj5cXG4gICAgPHNwYW4+XFxuICAgICAgICA8YnV0dG9uPlxcbiAgICAgICAgICAgIENsaWNrIE1lXFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgPC9zcGFuPlxcbjwvZGl2PmAsXHJcblx0XHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XSksXHJcblx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uXCIsIFtcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi10aXRsZVwiLCBbXCJTdGF0ZVwiXSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHRcdFwiRXZlcnkgaW5zdGFuY2Ugb2YgYSBwb3AhIGNvbXBvbmVudCwgZXZlbiBpZGVudGljYWwgb25lcywgaGF2ZSBpdHMgb3duIHN0YXRlIGFmdGVyIGJlaW5nIHJlbmRlcmVkIHdpdGggdGhlIHVzZSgpIGZ1bmN0aW9uLlwiLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHRcdFwiVG8gaW5pdGlhbGl6ZSBzdGF0ZSB2YXJpYWJsZXMgaG93ZXZlciwgYSBwb3AhIGNvbXBvbmVudCBtdXN0IGhhdmUgYSBzZXQoKSBmdW5jdGlvbi4gVGhlIHNldCgpIGZ1bmN0aW9uIGlzIGEgbGlmZWN5Y2xlIG1ldGhvZCBsaWtlIHRoZSByZW5kZXIoKSBmdW5jdGlvbi5cIixcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uLWNvbnRlbnRcIiwgW1xyXG5cdFx0XHRcdFx0XHRcInNldCgpIHdpbGwgYWx3YXlzIHJ1biBiZWZvcmUgcmVuZGVyKCkgYW5kIGlzIGdyZWF0IGZvciBzZXR0aW5nIHVwIGFueXRoaW5nIGJlZm9yZSBhIGNvbXBvbmVudCBpcyBkcmF3bi5cIixcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uLWNvbnRlbnRcIiwgW1xyXG5cdFx0XHRcdFx0XHRcIlN0YXRlIGNhbiBiZSBhY2Nlc3NlZCBieSBkZXN0cnVjdHVyaW5nIHRoZSBvYmplY3QgaW5zaWRlIHRoZSByZW5kZXIgZnVuY3Rpb24gYXJndW1lbnQuXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1jb250ZW50XCIsIFtcclxuXHRcdFx0XHRcdFx0XCJJZiBhIHVuaXF1ZSBwcm9wIG9mIGFjY2Vzc0tleSBpcyBwYXNzZWQgaW4gd2hlbiB0aGUgY29tcG9uZW50IGlzIHJlcXVpcmVkIHRvIGJlIHJlbmRlcmVkLCBhIHJlYWR5LW9ubHkgdmVyc2lvbiBvZiBjb21wb25lbnQgc3RhdGUgY2FuIGJlIGFjY2Vzc2VkIG91dHNpZGUgdGhlIGNvbXBvbmVudCB3aXRoIHRoZSBnZXRTdGF0ZSgpIGZ1bmN0aW9uLlwiLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwicHJlfGNsYXNzPWNvZGUtc25pcHBldFwiLCBbXHJcblx0XHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJjb2RlfGNsYXNzPWNvZGUtYmxvY2tcIiwgW1xyXG5cdFx0XHRcdFx0XHRcdGAvLyBNYWtlIGEgY29tcG9uZW50IHdpdGggc3RhdGVcXG5jb25zdCBwb3BDb21wb25lbnQgPSB7XFxuICAgIHNldDogKGNvbXBvbmVudCkgPT4ge1xcbiAgICAgICAgY29uc3QgeyBzdGF0ZSB9ID0gY29tcG9uZW50O1xcbiAgICAgICAgc3RhdGUuY291bnRlciA9IDA7XFxuICAgIH1cXG4gICAgcmVuZGVyOiAoY29tcG9uZW50KSA9PiB7XFxuICAgICAgICBjb25zdCB7IHN0YXRlIH0gPSBjb21wb25lbnQ7XFxuICAgICAgICBjb25zdCBudW0gPSBzdGF0ZS5jb3VudGVyO1xcbiAgICBcdHJldHVybiBQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPWNvdW50ZXJcIiwgYCArXHJcblx0XHRcdFx0XHRcdFx0XHRcIltgJHtudW19YF0pO1xcbiAgICB9XFxufVxcblxcbi8vIFVzZSB0aGUgYWJvdmUgY29tcG9uZW50XFxuY29uc3QgcGFyZW50Q29tcG9uZW50ID0ge1xcbiAgICByZW5kZXI6ICgpID0+IHtcXG4gICAgICAgIHJldHVybiBQT1AudXNlKHBvcENvbXBvbmVudCwge1wiICtcclxuXHRcdFx0XHRcdFx0XHRcdGAgXCJhY2Nlc3NLZXk6IFwiY291bnRlci1zdGF0ZVwiIH0pO1xcbiAgICB9XFxufVxcblxcbi8vIEFjY2VzcyB0aGF0IHN0YXRlIGZyb20gYW4gdW5yZWxhdGVkIGNvbXBvbmVudFxcbmNvbnN0IGFub3RoZXJDb21wb25lbnQgPSB7XFxuICAgIHJlbmRlcjogKCkgPT4ge1xcbiAgICAgICAgY29uc3QgY291bnRlclN0YXRlID0gUE9QLmdldFN0YXRlKFwiY291bnRlci1zdGF0ZVwiKTtcXG4gICAgICAgIGNvbnN0IHsgY291bnRlciB9ID0gY291bnRlclN0YXRlO1xcbiAgICAgICAgcmV0dXJuIFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9Y291bnRlci1jb3B5XCIsIFtgICtcclxuXHRcdFx0XHRcdFx0XHRcdFwiYCR7Y291bnRlcn1gXSk7XFxuICAgIH1cXG59XCIsXHJcblx0XHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XSksXHJcblx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uXCIsIFtcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi10aXRsZVwiLCBbXCJSb290XCJdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1jb250ZW50XCIsIFtcclxuXHRcdFx0XHRcdFx0XCJBbGwgcG9wISBKUyBhcHBsaWNhdGlvbnMgbXVzdCBoYXZlIGFuIGVudHJ5IHBvaW50LiBUaGUgcm9vdCgpIGZ1bmN0aW9uIHdpbGwgdGFrZSBhIHBvcENvbXBvbmVudCBhbmQgZXN0YWJsaXNoIGl0IGFzIHRoZSBjb250YWluZXIgb2YgdGhlIHdob2xlIGFwcGxpY2F0aW9uLlwiLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHRcdFwiVGhpcyByb290IGNvbXBvbmVudCB3aWxsIGhhdmUgYWxsIHRoZSBwcm9wZXJ0aWVzIG9mIGEgcmVndWxhciBwb3AgY29tcG9uZW50LiBUaGUgY2FsbCB0byBlc3RhYmxpc2ggdGhlIHJvb3QgaXMgbW9zdCBvZnRlbiBkb25lIGluIHRoZSBpbmRleC5qcyBmaWxlLlwiLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwicHJlfGNsYXNzPWNvZGUtc25pcHBldFwiLCBbXHJcblx0XHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJjb2RlfGNsYXNzPWNvZGUtYmxvY2tcIiwgW1xyXG5cdFx0XHRcdFx0XHRcdGBpbXBvcnQgYXBwQ29udGFpbmVyIGZyb20gXCIvcGF0aFwiO1xcblxcblBPUC5yb290KGFwcENvbnRhaW5lcik7YCxcclxuXHRcdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1jb250ZW50XCIsIFtcclxuXHRcdFx0XHRcdFx0XCJUaGUgc2Vjb25kIGFyZ3VtZW50IG9mIHRoZSByb290IGZ1bmN0aW9uIGFjY2VwdHMgcHJvcHMgZm9yIHRoZSByb290IGNvbXBvbmVudCBzdWNoIGFzIHJvb3ROYW1lIGFuZCBhY2Nlc3NLZXkuXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRdKSxcclxuXHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb25cIiwgW1xyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uLXRpdGxlXCIsIFtcIlJvdXRpbmdcIl0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uLWNvbnRlbnRcIiwgW1xyXG5cdFx0XHRcdFx0XHRcInBvcCEgSlMgaXMgY2FwYWJsZSBvZiBkaXNwbGF5aW5nIG11bHRpcGxlIHBhZ2VzIHdpdGggZWFzeSB0byB1bmRlcnN0YW5kIGFwcGxpY2F0aW9uIHJvdXRpbmcuXCIsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1jb250ZW50XCIsIFtcclxuXHRcdFx0XHRcdFx0XCJUbyBlbmFibGUgcm91dGluZywgc2ltcGx5IGRlY2xhcmUgYW4gb2JqZWN0IHdpdGggcm91dGVzIGFzIGtleXMgYW5kIHBvcCBjb21wb25lbnQgaW1wb3J0cyBhcyB2YWx1ZXMuIFRoZSBmaXJzdCBrZXkgdmFsdWUgcGFpciBvZiB0aGlzIG9iamVjdCB3aWxsIGFsd2F5cyBiZSB0aGUgaG9tZSBwYWdlIG9mIHRoZSBhcHBsaWNhdGlvbi5cIixcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uLWNvbnRlbnRcIiwgW1xyXG5cdFx0XHRcdFx0XHRcIlRoaXMgb2JqZWN0IGNhbiB0aGVuIGJlIHBhc3NlZCBpbnRvIHRoZSByb290IGZ1bmN0aW9uIGluIHRoZSBwcm9wcyBhcmd1bWVudCB3aXRoIHRoZSBrZXkgb2YgcG9wUm91dGVzLlwiLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwicHJlfGNsYXNzPWNvZGUtc25pcHBldFwiLCBbXHJcblx0XHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJjb2RlfGNsYXNzPWNvZGUtYmxvY2tcIiwgW1xyXG5cdFx0XHRcdFx0XHRcdGBpbXBvcnQgSG9tZVBhZ2UgZnJvbSBcIi9wYXRoXCI7XFxuaW1wb3J0IEFib3V0UGFnZSBmcm9tIFwiL3BhdGhcIjtcXG5cXG5jb25zdCByb3V0ZXMgPSB7XFxuICAgIFwiL2hvbWVcIjogSG9tZVBhZ2UsXFxuICAgIFwiL2Fib3V0XCI6IEFib3V0UGFnZVxcbn1cXG5cXG5QT1Aucm9vdChIb21lLCB7IHBvcFJvdXRlczogcm91dGVzIH0pO2AsXHJcblx0XHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb24tY29udGVudFwiLCBbXHJcblx0XHRcdFx0XHRcdGBUbyB0aGVuIGFjY2VzcyBkaWZmZXJlbnQgcGFnZXMsIGp1c3QgY3JlYXRlIGFuY2hvciB0YWdzIGFueXdoZXJlIGluIHRoZSBhcHBsaWNhdGlvbiB3aXRoIGEgc3RyaW5nIGluIHRoZSBmb3JtYXQgb2YgaGFzaGJhbmcgb2YgaGFzaGJhbmcgKFwiIyFcIikgZm9sbG93ZWQgYnkgcm91dGUgaW50byB0aGUgXCJocmVmXCIgcHJvcGVydHkuYCxcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcInByZXxjbGFzcz1jb2RlLXNuaXBwZXRcIiwgW1xyXG5cdFx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiY29kZXxjbGFzcz1jb2RlLWJsb2NrXCIsIFtcclxuXHRcdFx0XHRcdFx0XHRgUE9QLmNyZWF0ZShcImFcIiwgeyBocmVmOiBcIiMhL2hvbWVcIiB9KTtgLFxyXG5cdFx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uLWNvbnRlbnRcIiwgW1xyXG5cdFx0XHRcdFx0XHRgSXQgaXMgaW1wb3J0YW50IHRvIG5vdGUgdGhhdCBjbGlja2luZyB0aGVzZSBhbmNob3IgdGFncyB3aWxsIHJlLXJlbmRlciB0aGUgd2hvbGUgZG9jdW1lbnQgYW5kIGFsbCBwcmV2aW91cyBzdGF0ZSBpbmZvcm1hdGlvbiB3aWxsIHJlc2V0LmAsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRdKSxcclxuXHRcdFx0XHRQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPXNlY3Rpb25cIiwgW1xyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uLXRpdGxlXCIsIFtcIlRpcHNcIl0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcImRpdnxjbGFzcz1zZWN0aW9uLWNvbnRlbnRcIiwgW1xyXG5cdFx0XHRcdFx0XHRgSXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBFUzYgc3RhbmRhcmQgd2hlbiB3b3JraW5nIHdpdGggcG9wISBKUy4gV2hlbiBwb3NzaWJsZSwgYXZvaWQgdHJhZGl0aW9uYWwgXCJmb3JcIiBsb29wcyBhbmQgdXNlIGZvckVhY2ggdG8gaXRlcmF0ZSBhbmQgQXJyYXkubWFwKCkgdG8gZ2VuZXJhdGUgYXJyYXlzLmAsXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1jb250ZW50XCIsIFtcclxuXHRcdFx0XHRcdFx0YFdoZW4gaW52b2tpbmcgUE9QLnVzZSgpIGluc2lkZSBhIGxvb3AsIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duIGlmIGEga2V5IHByb3Agd2l0aCBhIHVuaXF1ZSB2YWx1ZSBpcyBub3QgcGFzc2VkIGluIGZvciBlYWNoIGVsZW1lbnQuYCxcclxuXHRcdFx0XHRcdF0pLFxyXG5cdFx0XHRcdFx0UE9QLmNyZWF0ZShcInByZXxjbGFzcz1jb2RlLXNuaXBwZXRcIiwgW1xyXG5cdFx0XHRcdFx0XHRQT1AuY3JlYXRlKFwiY29kZXxjbGFzcz1jb2RlLWJsb2NrXCIsIFtcclxuXHRcdFx0XHRcdFx0XHRgcmVuZGVyOiAoKSA9PiB7XFxuICAgIGNvbnN0IHNvbWVBcnJheSA9IFtcIkhlbGxvXCIsIFwiV29ybGRcIiwgXCIhXCJdO1xcblxcbiAgICBjb25zdCBjaGlsZHJlbiA9IHNvbWVBcnJheS5tYXAoKHZhbCwgaW5kZXgpID0+IHtcXG4gICAgICAgIHJldHVybiBQT1AudXNlKHBvcENvbXBvbmVudCwgeyBsYWJlbDogdmFsLCBrZXk6IGluZGV4IH0pO1xcbiAgICB9KTtcXG5cXG4gICAgcmV0dXJuIFBPUC5jcmVhdGUoXCJkaXZcIiwgY2hpbGRyZW4pO1xcbn1gLFxyXG5cdFx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdF0pLFxyXG5cclxuXHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJkaXZ8Y2xhc3M9c2VjdGlvbi1jb250ZW50XCIsIFtcclxuXHRcdFx0XHRcdFx0XCJDb25kaXRpb25hbCByZW5kZXJpbmcgY2FuIGJlIGRvbmUgYnkgdXNpbmcgdGVybmFyeSBvciBib29sZWFuIHN0YXRlbWVudHMgYW5kIGlzIGEgaGFuZHkgbWV0aG9kIHRvIHF1aWNrbHkgcmVuZGVyIG9yIGVyYXNlIGNvbXBvbmVudHMgZnJvbSB0aGUgZG9jdW1lbnQgd2hlbiBzdGF0ZSBjaGFuZ2VzLlwiLFxyXG5cdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRQT1AuY3JlYXRlKFwicHJlfGNsYXNzPWNvZGUtc25pcHBldFwiLCBbXHJcblx0XHRcdFx0XHRcdFBPUC5jcmVhdGUoXCJjb2RlfGNsYXNzPWNvZGUtYmxvY2tcIiwgW1xyXG5cdFx0XHRcdFx0XHRcdGBjb25zdCBib3hDb21wb25lbnQgPSB7XFxuICAgIHNldDogKGNvbXBvbmVudCkgPT4ge1xcbiAgICAgICAgY29uc3QgeyBzdGF0ZSB9ID0gY29tcG9uZW50O1xcbiAgICAgICAgc3RhdGUuc2hvd0JveCA9IHRydWU7XFxuICAgIH1cXG4gICAgcmVuZGVyOiAoY29tcG9uZW50KSA9PiB7XFxuICAgICAgICBjb25zdCB7IHN0YXRlIH0gPSBjb21wb25lbnQ7XFxuXFxuICAgICAgICByZXR1cm4gUE9QLmNyZWF0ZShcImRpdnxjbGFzcz1ib3gtY29udGFpbmVyXCIsIFtcXG4gICAgICAgICAgICBQT1AuY3JlYXRlKFxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnxjbGFzcz1ib3gtYnV0dG9uXCIsXFxuICAgICAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgICAgICAgIG9uY2xpY2s6ICgpID0+IChzdGF0ZS5zaG93Qm94ID0gIXN0YXRlLnNob3dCb3gpXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIFtzdGF0ZS5zaG93Qm94ID8gXCJIaWRlXCIgOiBcIlNob3dcIl1cXG4gICAgICAgICAgICApLFxcbiAgICAgICAgICAgIHN0YXRlLnNob3dCb3ggJiYgUE9QLmNyZWF0ZShcImRpdnxjbGFzcz1ib3gtZGlzcGxheVwiKVxcbiAgICAgICAgXSk7XFxuICAgIH1cXG59YCxcclxuXHRcdFx0XHRcdFx0XSksXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdFBPUC51c2UoUmVkQm94KSxcclxuXHRcdFx0XHRdKSxcclxuXHRcdFx0XSksXHJcblx0XHRdKTtcclxuXHR9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3VpZGU7XHJcbiIsImltcG9ydCBQT1AgZnJvbSBcInNvbnBvcC1qc1wiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5pbXBvcnQgSGVybyBmcm9tIFwiLi4vY29tcG9uZW50cy9IZXJvXCI7XHJcblxyXG5leHBvcnQgY29uc3QgSG9tZSA9IHtcclxuXHRyZW5kZXI6ICgpID0+IHtcclxuXHRcdHJldHVybiBQT1AuY3JlYXRlKFwiZGl2fGNsYXNzPWhvbWUtcGFnZS1jb250YWluZXJcIiwgW1xyXG5cdFx0XHRQT1AudXNlKEhlcm8pLFxyXG5cdFx0XHRQT1AudXNlKEZvb3RlciksXHJcblx0XHRdKTtcclxuXHR9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9