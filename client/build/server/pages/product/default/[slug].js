(function() {
var exports = {};
exports.id = "pages/product/default/[slug]";
exports.ids = ["pages/product/default/[slug]"];
exports.modules = {

/***/ "./components/partials/product/desc/desc-one.jsx":
/*!*******************************************************!*\
  !*** ./components/partials/product/desc/desc-one.jsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tabs */ "react-tabs");
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/features/custom-link */ "./components/features/custom-link.jsx");
/* harmony import */ var _store_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/store/modal */ "./store/modal.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/utils */ "./utils/index.js");
var _jsxFileName = "/home/tristan/projects/Upsidian/ramset-ecomm/client/components/partials/product/desc/desc-one.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);







function DescOne(props) {
  const {
    product,
    isGuide = true,
    isDivider = true,
    openModal
  } = props;
  let colors = [],
      sizes = [];

  if (product.variants.length > 0) {
    if (product.variants[0].size) product.variants.forEach(item => {
      if (sizes.findIndex(size => size.name === item.size.name) === -1) {
        sizes.push({
          name: item.size.name,
          value: item.size.size
        });
      }
    });

    if (product.variants[0].color) {
      product.variants.forEach(item => {
        if (colors.findIndex(color => color.name === item.color.name) === -1) colors.push({
          name: item.color.name,
          value: item.color.color
        });
      });
    }
  }

  const setRating = e => {
    e.preventDefault();

    if (e.currentTarget.parentNode.querySelector('.active')) {
      e.currentTarget.parentNode.querySelector('.active').classList.remove('active');
    }

    e.currentTarget.classList.add('active');
  };

  const showVideoModalHandler = e => {
    e.preventDefault();
    let link = e.currentTarget.closest('.btn-play').getAttribute('data');
    openModal(link);
  };

  return __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
    className: "tab tab-nav-simple product-tabs",
    selectedTabClassName: "show",
    selectedTabPanelClassName: "active",
    defaultIndex: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabList, {
    className: "nav nav-tabs justify-content-center",
    role: "tablist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, "Description")), product && product.brands.length > 0 || colors.length > 0 || sizes.length > 0 ? __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 29
    }
  }, "Additional information")) : '', isGuide ? __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 29
    }
  }, "Size Guide")) : '', __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }, "Reviews (", product.reviews, ")"))), __jsx("div", {
    className: "tab-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane product-tab-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row mt-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 25
    }
  }, __jsx("h5", {
    className: "description-title mb-4 font-weight-semi-bold ls-m",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 29
    }
  }, "Features"), __jsx("p", {
    className: "mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 29
    }
  }, "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti iMassa ristique sit amet condim vel, facilisis quimequistiqutiqu amet condim Dilisis Facilisis quis sapien. Praesent id enim sit amet."), __jsx("ul", {
    className: "mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 33
    }
  }, "Praesent id enim sit amet.Tdio vulputate"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 33
    }
  }, "Eleifend in in tortor. ellus massa.Dristique sitii"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 33
    }
  }, "Massa ristique sit amet condim vel"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 33
    }
  }, "Dilisis Facilisis quis sapien. Praesent id enim sit amet")), __jsx("h5", {
    className: "description-title mb-3 font-weight-semi-bold ls-m",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 29
    }
  }, "Specifications"), __jsx("table", {
    className: "table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 29
    }
  }, __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 33
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 37
    }
  }, __jsx("th", {
    className: "font-weight-semi-bold text-dark pl-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 41
    }
  }, "Material"), __jsx("td", {
    className: "pl-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 41
    }
  }, "Praesent id enim sit amet.Tdio")), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 37
    }
  }, __jsx("th", {
    className: "font-weight-semi-bold text-dark pl-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 41
    }
  }, "Claimed Size"), __jsx("td", {
    className: "pl-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 41
    }
  }, "Praesent id enim sit")), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 37
    }
  }, __jsx("th", {
    className: "font-weight-semi-bold text-dark pl-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 41
    }
  }, "Recommended Use"), __jsx("td", {
    className: "pl-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 41
    }
  }, "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti")), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 37
    }
  }, __jsx("th", {
    className: "font-weight-semi-bold text-dark border-no pl-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 41
    }
  }, "Manufacturer"), __jsx("td", {
    className: "border-no pl-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 41
    }
  }, "Praesent id enim"))))), __jsx("div", {
    className: "col-md-6 pl-md-6 pt-4 pt-md-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 25
    }
  }, __jsx("h5", {
    className: "description-title font-weight-semi-bold ls-m mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 29
    }
  }, "Video Description"), __jsx("figure", {
    className: "p-relative d-inline-block mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "./images/product.jpg",
    width: "559",
    height: "370",
    alt: "Product",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 33
    }
  }), __jsx("a", {
    className: "btn-play btn-iframe",
    href: "#",
    data: "/uploads/video/video-1.mp4",
    onClick: showVideoModalHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 33
    }
  }, __jsx("i", {
    className: "d-icon-play-solid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 37
    }
  }))), __jsx("div", {
    className: "icon-box-wrap d-flex flex-wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "icon-box icon-box-side icon-border pt-2 pb-2 mb-4 mr-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "icon-box-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "d-icon-lock",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: "icon-box-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 37
    }
  }, __jsx("h4", {
    className: "icon-box-title lh-1 pt-1 ls-s text-normal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 41
    }
  }, "2 year warranty"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 41
    }
  }, "Guarantee with no doubt"))), isDivider ? __jsx("div", {
    className: "divider d-xl-show mr-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 41
    }
  }) : '', __jsx("div", {
    className: "icon-box icon-box-side icon-border pt-2 pb-2 mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "icon-box-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "d-icon-truck",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: "icon-box-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 37
    }
  }, __jsx("h4", {
    className: "icon-box-title lh-1 pt-1 ls-s text-normal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 41
    }
  }, "Free shipping"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 41
    }
  }, "On orders over $50.00"))))))), product && product.brands.length > 0 || colors.length > 0 || sizes.length > 0 ? __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane product-tab-additional",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 25
    }
  }, __jsx("ul", {
    className: "list-none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 29
    }
  }, product.categories.length > 0 ? __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 41
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 45
    }
  }, "Categories:"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 45
    }
  }, product.categories.map((item, index) => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    key: item.name + '-' + index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 53
    }
  }, item.name, index < product.categories.length - 1 ? ', ' : "")))) : "", product.brands.length > 0 ? __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 41
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 45
    }
  }, "Brands:"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 45
    }
  }, product.brands.map((item, index) => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    key: item.name + '-' + index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 53
    }
  }, item.name, index < product.brands.length - 1 ? ', ' : "")))) : "", colors.length > 0 ? __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 41
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 45
    }
  }, "Color:"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 45
    }
  }, colors.map((item, index) => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    key: item.name + '-' + index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 53
    }
  }, item.name, index < colors.length - 1 ? ', ' : "")))) : "", sizes.length > 0 ? __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 41
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 45
    }
  }, "Size:"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 45
    }
  }, sizes.map((item, index) => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    key: item.name + '-' + index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 57
    }
  }, item.name, index < sizes.length - 1 ? ', ' : "")))) : "")) : '', isGuide ? __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane product-tab-size-guide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 25
    }
  }, __jsx("figure", {
    className: "size-image mt-4 mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "./images/size_guide.png",
    alt: "Size Guide Image",
    width: "217",
    height: "398",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 33
    }
  })), __jsx("figure", {
    className: "size-table mt-4 mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 29
    }
  }, __jsx("table", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 33
    }
  }, __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 37
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 41
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 45
    }
  }, "SIZE"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 45
    }
  }, "CHEST(IN.)"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 45
    }
  }, "WEIST(IN.)"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 45
    }
  }, "HIPS(IN.)"))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 37
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 41
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 45
    }
  }, "XS"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 45
    }
  }, "34-36"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 45
    }
  }, "27-29"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 45
    }
  }, "34.5-36.5")), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 41
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 45
    }
  }, "S"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 45
    }
  }, "36-38"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 45
    }
  }, "29-31"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 45
    }
  }, "36.5-38.5")), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 41
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 45
    }
  }, "M"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 45
    }
  }, "38-40"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 45
    }
  }, "31-33"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 45
    }
  }, "38.5-40.5")), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 41
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 45
    }
  }, "L"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 45
    }
  }, "40-42"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 45
    }
  }, "33-36"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 45
    }
  }, "40.5-43.5")), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 41
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 45
    }
  }, "XL"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 45
    }
  }, "42-45"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 45
    }
  }, "36-40"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 45
    }
  }, "43.5-47.5")), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 41
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 45
    }
  }, "XXL"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 45
    }
  }, "45-48"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 45
    }
  }, "40-44"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 45
    }
  }, "47.5-51.5")))))) : '', __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane product-tab-reviews",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 17
    }
  }, product.reviews === 0 ? __jsx("div", {
    className: "comments mb-2 pt-2 pb-2 border-no",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 29
    }
  }, "There are no reviews yet.") : __jsx("div", {
    className: "comments mb-8 pt-2 pb-2 border-no",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 29
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 33
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "comment",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 41
    }
  }, __jsx("figure", {
    className: "comment-media",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 45
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 49
    }
  }, __jsx("img", {
    src: "./images/blog/comments/1.jpg",
    alt: "avatar",
    width: "100",
    height: "100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 53
    }
  }))), __jsx("div", {
    className: "comment-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "comment-rating ratings-container mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 49
    }
  }, __jsx("div", {
    className: "ratings-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 53
    }
  }, __jsx("span", {
    className: "ratings",
    style: {
      width: product.ratings * 20 + '%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 57
    }
  }), __jsx("span", {
    className: "tooltiptext tooltip-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 57
    }
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_5__.toDecimal)(product.ratings)))), __jsx("div", {
    className: "comment-user",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 49
    }
  }, __jsx("span", {
    className: "comment-date text-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 53
    }
  }, "September 22, 2020 at 9:42 pm"), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 53
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 57
    }
  }, "John Doe"))), __jsx("div", {
    className: "comment-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 49
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 53
    }
  }, "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue."))))), product.reviews > 1 ? __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "comment",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 49
    }
  }, __jsx("figure", {
    className: "comment-media",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 53
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 57
    }
  }, __jsx("img", {
    src: "./images/blog/comments/2.jpg",
    alt: "avatar",
    width: "100",
    height: "100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 61
    }
  }))), __jsx("div", {
    className: "comment-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 53
    }
  }, __jsx("div", {
    className: "comment-rating ratings-container mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 57
    }
  }, __jsx("div", {
    className: "ratings-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 61
    }
  }, __jsx("span", {
    className: "ratings",
    style: {
      width: product.ratings * 20 + '%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 65
    }
  }), __jsx("span", {
    className: "tooltiptext tooltip-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 65
    }
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_5__.toDecimal)(product.ratings)))), __jsx("div", {
    className: "comment-user",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 57
    }
  }, __jsx("span", {
    className: "comment-date text-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 61
    }
  }, "September 22, 2020 at 9:42 pm"), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 61
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 65
    }
  }, "John Doe"))), __jsx("div", {
    className: "comment-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 57
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 61
    }
  }, "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, avida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat."))))) : "")), __jsx("div", {
    className: "reply",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "title-wrapper text-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "title title-simple text-left text-normal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 29
    }
  }, product.reviews > 0 ? "Add a Review" : "Be The First To Review “" + product.name + "”"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 29
    }
  }, "Your email address will not be published. Required fields are marked *")), __jsx("div", {
    className: "rating-form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "rating",
    className: "text-dark",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 29
    }
  }, "Your rating * "), __jsx("span", {
    className: "rating-stars selected",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 29
    }
  }, [1, 2, 3, 4, 5].map((num, index) => __jsx("a", {
    className: `star-${num}`,
    href: "#",
    onClick: setRating,
    key: 'star-' + index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 37
    }
  }, num))), __jsx("select", {
    name: "rating",
    id: "rating",
    required: "",
    style: {
      display: 'none'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 29
    }
  }, __jsx("option", {
    value: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 33
    }
  }, "Rate\u2026"), __jsx("option", {
    value: "5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 33
    }
  }, "Perfect"), __jsx("option", {
    value: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 33
    }
  }, "Good"), __jsx("option", {
    value: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 33
    }
  }, "Average"), __jsx("option", {
    value: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 33
    }
  }, "Not that bad"), __jsx("option", {
    value: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 33
    }
  }, "Very poor"))), __jsx("form", {
    action: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 25
    }
  }, __jsx("textarea", {
    id: "reply-message",
    cols: "30",
    rows: "6",
    className: "form-control mb-4",
    placeholder: "Comment *",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "col-md-6 mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 33
    }
  }, __jsx("input", {
    type: "text",
    className: "form-control",
    id: "reply-name",
    name: "reply-name",
    placeholder: "Name *",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 37
    }
  })), __jsx("div", {
    className: "col-md-6 mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 33
    }
  }, __jsx("input", {
    type: "email",
    className: "form-control",
    id: "reply-email",
    name: "reply-email",
    placeholder: "Email *",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 37
    }
  }))), __jsx("div", {
    className: "form-checkbox mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 29
    }
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-checkbox",
    id: "signin-remember",
    name: "signin-remember",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 33
    }
  }), __jsx("label", {
    className: "form-control-label",
    htmlFor: "signin-remember",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 33
    }
  }, "Save my name, email, and website in this browser for the next time I comment.")), __jsx("button", {
    type: "submit",
    className: "btn btn-primary btn-rounded",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 29
    }
  }, "Submit", __jsx("i", {
    className: "d-icon-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 97
    }
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)('', {
  openModal: _store_modal__WEBPACK_IMPORTED_MODULE_4__.modalActions.openModal
})(DescOne));

/***/ }),

/***/ "./components/partials/product/light-box.jsx":
/*!***************************************************!*\
  !*** ./components/partials/product/light-box.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-image-lightbox */ "react-image-lightbox");
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image-lightbox/style.css */ "./node_modules/react-image-lightbox/style.css");
/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/tristan/projects/Upsidian/ramset-ecomm/client/components/partials/product/light-box.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function MediaLightBox(props) {
  const {
    images,
    product
  } = props;
  const {
    0: isOpen,
    1: setOpenState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: index,
    1: setIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setOpenState(props.isOpen);
  }, [props.isOpen]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIndex(props.index);
  }, [props.index]);

  const closeLightBox = () => {
    props.changeOpenState(false);
  };

  const setNextHandler = () => {
    setIndex((index + 1) % images.length);
  };

  const setPrevHandler = () => {
    setIndex((index + images.length - 1) % images.length);
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, isOpen ? __jsx((react_image_lightbox__WEBPACK_IMPORTED_MODULE_1___default()), {
    mainSrc: "http://localhost1:4000" + images[index].url,
    nextSrc: "http://localhost1:4000" + images[(index + 1) % images.length].url,
    prevSrc: "http://localhost1:4000" + images[(index + images.length - 1) % images.length].url,
    onCloseRequest: closeLightBox,
    onMovePrevRequest: setPrevHandler,
    onMoveNextRequest: setNextHandler,
    animationDisabled: false,
    animationDuration: 300,
    imageTitle: product.name,
    imagePadding: 80,
    clickOutsideToClose: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }) : '');
}

/* harmony default export */ __webpack_exports__["default"] = (MediaLightBox);

/***/ }),

/***/ "./components/partials/product/media/media-one.jsx":
/*!*********************************************************!*\
  !*** ./components/partials/product/media/media-one.jsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MediaOne; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_image_magnifiers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-image-magnifiers */ "react-image-magnifiers");
/* harmony import */ var react_image_magnifiers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_image_magnifiers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/custom-link */ "./components/features/custom-link.jsx");
/* harmony import */ var _components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/features/owl-carousel */ "./components/features/owl-carousel.jsx");
/* harmony import */ var _components_partials_product_thumb_thumb_one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/partials/product/thumb/thumb-one */ "./components/partials/product/thumb/thumb-one.jsx");
/* harmony import */ var _components_partials_product_thumb_thumb_two__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/partials/product/thumb/thumb-two */ "./components/partials/product/thumb/thumb-two.jsx");
/* harmony import */ var _components_partials_product_light_box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/partials/product/light-box */ "./components/partials/product/light-box.jsx");
/* harmony import */ var _utils_data_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/utils/data/carousel */ "./utils/data/carousel.js");
var _jsxFileName = "/home/tristan/projects/Upsidian/ramset-ecomm/client/components/partials/product/media/media-one.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);








function MediaOne(props) {
  const {
    product
  } = props;
  const {
    0: index,
    1: setIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: isOpen,
    1: setOpenState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: mediaRef,
    1: setMediaRef
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  let lgImages = product.large_pictures ? product.large_pictures : product.pictures;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIndex(0);
  }, [window.location.pathname]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (mediaRef !== null && mediaRef.current !== null && index >= 0) {
      mediaRef.current.$car.to(index, 300, true);
    }
  }, [index]);

  const setIndexHandler = mediaIndex => {
    if (mediaIndex !== index) {
      setIndex(mediaIndex);
    }
  };

  const changeRefHandler = carRef => {
    if (carRef.current !== undefined) {
      setMediaRef(carRef);
    }
  };

  const changeOpenState = openState => {
    setOpenState(openState);
  };

  const openLightBox = () => {
    setOpenState(true);
  };

  let events = {
    onTranslate: function (e) {
      if (!e.target) return;

      if (document.querySelector('.product-thumbs')) {
        document.querySelector('.product-thumbs').querySelector('.product-thumb.active').classList.remove('active');
        document.querySelector('.product-thumbs').querySelectorAll('.product-thumb')[e.item.index].classList.add('active');
      }
    }
  };
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    className: "product-gallery pg-vertical media-default",
    style: {
      top: "88px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "product-label-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, product.stock === 0 ? __jsx("label", {
    className: "product-label label-out",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 29
    }
  }, "out") : "", product.is_top ? __jsx("label", {
    className: "product-label label-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 29
    }
  }, "top") : "", product.is_new ? __jsx("label", {
    className: "product-label label-new",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 29
    }
  }, "new") : "", product.discount ? __jsx("label", {
    className: "product-label label-sale",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 29
    }
  }, "sale") : ""), __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_3__.default, {
    adClass: "product-single-carousel owl-theme owl-nav-inner",
    options: _utils_data_carousel__WEBPACK_IMPORTED_MODULE_7__.mainSlider3,
    onChangeIndex: setIndexHandler,
    onChangeRef: changeRefHandler,
    events: events,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, lgImages.map((image, index) => __jsx("div", {
    key: image + '-' + index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 29
    }
  }, __jsx(react_image_magnifiers__WEBPACK_IMPORTED_MODULE_1__.Magnifier, {
    imageSrc: "http://localhost1:4000" + image.url,
    imageAlt: "magnifier",
    largeImageSrc: "http://localhost1:4000" + image.url,
    dragToMove: false,
    mouseActivation: "hover",
    cursorStyleActive: "crosshair",
    className: "product-image large-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 33
    }
  })))), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    className: "product-image-full",
    onClick: openLightBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "d-icon-zoom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 89
    }
  })), __jsx(_components_partials_product_thumb_thumb_one__WEBPACK_IMPORTED_MODULE_4__.default, {
    product: product,
    index: index,
    onChangeIndex: setIndexHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }), __jsx(_components_partials_product_thumb_thumb_two__WEBPACK_IMPORTED_MODULE_5__.default, {
    product: product,
    index: index,
    onChangeIndex: setIndexHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  })), __jsx(_components_partials_product_light_box__WEBPACK_IMPORTED_MODULE_6__.default, {
    images: lgImages,
    isOpen: isOpen,
    changeOpenState: changeOpenState,
    index: index,
    product: product,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }));
}

/***/ }),

/***/ "./components/partials/product/related-products.jsx":
/*!**********************************************************!*\
  !*** ./components/partials/product/related-products.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RelatedProducts; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/features/owl-carousel */ "./components/features/owl-carousel.jsx");
/* harmony import */ var _components_features_product_product_two__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/product/product-two */ "./components/features/product/product-two.jsx");
/* harmony import */ var _utils_data_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/utils/data/carousel */ "./utils/data/carousel.js");
var _jsxFileName = "/home/tristan/projects/Upsidian/ramset-ecomm/client/components/partials/product/related-products.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function RelatedProducts(props) {
  const {
    products,
    adClass = "pt-3 mt-10"
  } = props;
  return products.length > 0 ? __jsx("section", {
    className: `${adClass}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "title justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, "Related Products"), __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_1__.default, {
    adClass: "owl-carousel owl-theme owl-nav-full",
    options: _utils_data_carousel__WEBPACK_IMPORTED_MODULE_3__.mainSlider17,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, products && products.slice(0, 5).map((item, index) => __jsx(_components_features_product_product_two__WEBPACK_IMPORTED_MODULE_2__.default, {
    product: item,
    key: 'product-two-' + index,
    adClass: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 29
    }
  })))) : '';
}

/***/ }),

/***/ "./components/partials/product/thumb/thumb-one.jsx":
/*!*********************************************************!*\
  !*** ./components/partials/product/thumb/thumb-one.jsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ThumbOne; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/tristan/projects/Upsidian/ramset-ecomm/client/components/partials/product/thumb/thumb-one.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ThumbOne(props) {
  const {
    index,
    product
  } = props;
  const {
    0: pos,
    1: setPos
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: term,
    1: setTerm
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(4);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener('resize', initCarouselHanlder);
    setTimeout(() => {
      let productThumb = document.querySelector('.product-thumb');
      let wrapperHeight = document.querySelector('.product-thumbs-one').offsetHeight;
      let thumbSpace = parseInt(window.getComputedStyle(productThumb).getPropertyValue("margin-bottom"));
      let transformUnit = productThumb.offsetHeight + thumbSpace; // newTerm = Math.ceil( ( ( document.querySelector( '.product-gallery.pg-vertical' ).offsetHeight + thumbSpace ) ) / transformUnit );

      let newTerm = document.querySelector('.product-gallery.pg-vertical').offsetHeight + thumbSpace;
      newTerm = parseInt(newTerm / transformUnit);

      if (newTerm !== term) {
        setTerm(newTerm);
      }
    }, 300);
    return () => {
      window.removeEventListener('resize', initCarouselHanlder);
    };
  }, []); // initial settings

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let productThumbs = document.querySelector('.product-thumbs-one');

    if (window.innerWidth < 992) {
      document.querySelector('.product-thumbs-one').style.display = 'none';
      document.querySelector('.product-thumbs-two').style.display = 'block';
      window.jQuery('.owl-carousel').trigger('refresh.owl.carousel');
    } else {
      document.querySelector('.product-thumbs-one').style.display = 'block';
      document.querySelector('.product-thumbs-two').style.display = 'none';
    }

    setPos(0);

    if (term < product.pictures.length) {
      productThumbs.querySelector('.thumb-down').classList.remove('disabled');
    } else {
      productThumbs.querySelector('.thumb-down').classList.add('disabled');
    }

    if (document.querySelector('.product-thumbs')) {
      activeItem(0);
      productThumbs.querySelector('.thumb-up').classList.add('disabled');
      document.querySelector('.product-thumbs').style.top = 0;
    }
  }, [product]); // change the pos and top when the media carousel is translated 

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (pos + term - 1 < index) {
      moveThumb("down");
      setPos(pos + 1);
    }

    if (index < pos) {
      moveThumb("up");
      setPos(pos - 1);
    }

    activeItem(index);
  }, [index]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let productThumbs = document.querySelector('.product-thumbs-one');

    if (pos + term < product.pictures.length) {
      productThumbs.querySelector('.thumb-down').classList.remove('disabled');
    } else {
      productThumbs.querySelector('.thumb-down').classList.add('disabled');
    }

    if (pos + term === product.pictures.length) {// moveThumb( "down" );
      // setPos( pos + 1 );
    }

    if (index < pos) {// moveThumb( "up" );
      // setPos( pos - 1 );
    }
  }, [term]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let productThumbs = document.querySelector('.product-thumbs-one');

    if (productThumbs) {
      if (pos > 0) {
        productThumbs.querySelector('.thumb-up').classList.remove('disabled');
      } else {
        productThumbs.querySelector('.thumb-up').classList.add('disabled');
      }

      if (pos + term < product.pictures.length) {
        productThumbs.querySelector('.thumb-down').classList.remove('disabled');
      } else {
        productThumbs.querySelector('.thumb-down').classList.add('disabled');
      }
    }
  }, [pos]); // move thumb pos

  function moveThumb(type = "up") {
    let sign = type === "up" ? 1 : -1;
    let productThumb = document.querySelector('.product-thumb');
    let wrapperHeight = document.querySelector('.product-thumbs-one').offsetHeight;
    let transformUnit = productThumb.offsetHeight + parseInt(window.getComputedStyle(productThumb).getPropertyValue("margin-bottom"));

    if (type === 'down') {
      document.querySelector('.product-thumbs').style.top = -transformUnit * (pos - sign) + (wrapperHeight - transformUnit * term) + parseInt(window.getComputedStyle(productThumb).getPropertyValue("margin-bottom")) + 'px';
    } else {
      document.querySelector('.product-thumbs').style.top = -transformUnit * (pos - sign) + 'px';
    }
  } // active selected item


  function activeItem(index) {
    if (document.querySelector('.product-thumbs').querySelector('.active.product-thumb')) {
      let activeItems = document.querySelector('.product-thumbs').querySelectorAll('.active.product-thumb');
      activeItems.forEach(item => {
        item.classList.remove('active');
      });
    }

    document.querySelector('.product-thumbs').querySelectorAll('.product-thumb')[index].classList.add('active');
  } // init and destroy thumb carousel in 992px


  const initCarouselHanlder = () => {
    if (window.innerWidth < 992) {
      document.querySelector('.product-thumbs-one').style.display = 'none';
      document.querySelector('.product-thumbs-two').style.display = 'block';
      window.jQuery('.owl-carousel').trigger('refresh.owl.carousel');
    } else {
      document.querySelector('.product-thumbs-one').style.display = 'block';
      document.querySelector('.product-thumbs-two').style.display = 'none';
      setTermHandler();
    }
  }; // change the items displayed once in sidebar


  const setTermHandler = () => {
    setTimeout(() => {
      let productThumb = document.querySelector('.product-thumb');
      let wrapperHeight = document.querySelector('.product-thumbs-one').offsetHeight;
      let thumbSpace = parseInt(window.getComputedStyle(productThumb).getPropertyValue("margin-bottom"));
      let transformUnit = productThumb.offsetHeight + thumbSpace; // newTerm = Math.ceil( ( ( document.querySelector( '.product-gallery.pg-vertical' ).offsetHeight + thumbSpace ) ) / transformUnit );

      let newTerm = document.querySelector('.product-gallery.pg-vertical').offsetHeight + thumbSpace;
      newTerm = parseInt(newTerm / transformUnit);
      console.log("new term is", newTerm, window.innerWidth);

      if (newTerm !== term) {
        setTerm(newTerm);
      }

      let thumbContainer = document.querySelector('.product-thumbs-one');

      if (product.pictures.length <= newTerm) {
        setTimeout(() => {
          thumbContainer.querySelector('.product-thumbs').style.top = 0;
        }, 100);
      } else {
        let currentTop = parseInt(window.getComputedStyle(thumbContainer.querySelector('.product-thumbs')).getPropertyValue('top'));
        let offset = currentTop + transformUnit * product.pictures.length - thumbSpace;
        let temp = wrapperHeight - offset;

        if ((index > newTerm - 1 || temp >= 0) && product.pictures.length > newTerm) {
          thumbContainer.querySelector('.product-thumbs').style.top = currentTop + temp + 'px';
        }
      }
    }, 300);
  }; // set the top on clicking prev


  const prevPosHandler = () => {
    setPos(pos - 1);
    moveThumb("up");
  }; // set the top on clicking next


  const nextPosHandler = () => {
    setPos(pos + 1);
    moveThumb("down");
  }; // active the thumb which is currently selected


  const activeHandler = (e, index) => {
    if (props.onChangeIndex) {
      props.onChangeIndex(index);
    }

    activeItem(index);
  };

  return __jsx("div", {
    className: "product-thumbs-wrap product-thumbs-one",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "product-thumbs",
    id: "product-thumbs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 13
    }
  }, product.pictures.map((item, index) => __jsx("div", {
    className: `product-thumb`,
    key: "thumb - " + index,
    onClick: e => activeHandler(e, index),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "http://localhost1:4000" + item.url,
    alt: "product thumbnail",
    width: "109",
    height: "122",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 29
    }
  })))), __jsx("button", {
    className: "thumb-up",
    onClick: prevPosHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "fas fa-chevron-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 69
    }
  })), __jsx("button", {
    className: "thumb-down",
    onClick: nextPosHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "fas fa-chevron-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 71
    }
  })));
}

/***/ }),

/***/ "./components/partials/product/thumb/thumb-two.jsx":
/*!*********************************************************!*\
  !*** ./components/partials/product/thumb/thumb-two.jsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/features/owl-carousel */ "./components/features/owl-carousel.jsx");
/* harmony import */ var _utils_data_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/utils/data/carousel */ "./utils/data/carousel.js");
var _jsxFileName = "/home/tristan/projects/Upsidian/ramset-ecomm/client/components/partials/product/thumb/thumb-two.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function ThumbTwo(props) {
  const {
    product,
    index = 0
  } = props;
  let thumbs = product.pictures;
  const {
    0: thumbRef,
    1: setThumbRef
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (thumbRef !== null && index >= 0) {
      thumbRef.current.$car.to(index, 300, true);

      if (document.querySelector('.product-thumbs')) {
        document.querySelector('.product-thumbs .owl-stage').querySelector('.product-thumb.active') && document.querySelector('.product-thumbs .owl-stage').querySelector('.product-thumb.active').classList.remove('active');
        document.querySelector('.product-thumbs .owl-stage').querySelectorAll('.owl-item')[index] && document.querySelector('.product-thumbs .owl-stage').querySelectorAll('.owl-item')[index] && document.querySelector('.product-thumbs .owl-stage').querySelectorAll('.owl-item')[index].querySelector('.product-thumb').classList.add('active');
      }
    }
  }, [index]);

  const thumbActiveHandler = (e, thumbIndex) => {
    props.onChangeIndex(thumbIndex);
    document.querySelector('.product-thumbs') && document.querySelector('.product-thumbs .owl-stage').querySelector('.product-thumb.active').classList.remove('active');
    e.currentTarget.classList.add('active'); // window.jQuery( '.quickview-modal .product-single-carousel' ).trigger( 'to.owl.carousel', [ thumbIndex, 100, true ] );
  };

  const changeRefHandler = carRef => {
    if (carRef.current !== undefined && thumbRef === null) {
      setThumbRef(carRef);
    }
  };

  return __jsx("div", {
    className: "product-thumbs-wrap product-thumbs-two",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_1__.default, {
    adClass: "product-thumbs product-thumb-carousel",
    options: _utils_data_carousel__WEBPACK_IMPORTED_MODULE_2__.mainSlider15,
    onChangeRef: changeRefHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, thumbs.map((thumb, index) => __jsx("div", {
    className: `product-thumb ${index === 0 ? 'active' : ''}`,
    onClick: e => {
      thumbActiveHandler(e, index);
    },
    key: thumb + '-2-' + index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "http://localhost1:4000" + thumb.url,
    alt: "product thumbnail",
    width: "137",
    height: "137",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 29
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(ThumbTwo));

/***/ }),

/***/ "./pages/product/default/[slug].jsx":
/*!******************************************!*\
  !*** ./pages/product/default/[slug].jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! imagesloaded */ "imagesloaded");
/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(imagesloaded__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _server_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/server/apollo */ "./server/apollo.js");
/* harmony import */ var _server_queries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/server/queries */ "./server/queries.js");
/* harmony import */ var _components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/components/features/owl-carousel */ "./components/features/owl-carousel.jsx");
/* harmony import */ var _components_partials_product_media_media_one__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/components/partials/product/media/media-one */ "./components/partials/product/media/media-one.jsx");
/* harmony import */ var _components_partials_product_detail_detail_one__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/components/partials/product/detail/detail-one */ "./components/partials/product/detail/detail-one.jsx");
/* harmony import */ var _components_partials_product_desc_desc_one__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/components/partials/product/desc/desc-one */ "./components/partials/product/desc/desc-one.jsx");
/* harmony import */ var _components_partials_product_related_products__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/components/partials/product/related-products */ "./components/partials/product/related-products.jsx");
/* harmony import */ var _utils_data_carousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/utils/data/carousel */ "./utils/data/carousel.js");
var _jsxFileName = "/home/tristan/projects/Upsidian/ramset-ecomm/client/pages/product/default/[slug].jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);














function ProductDefault() {
  const slug = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query.slug;
  const {
    data,
    loading,
    error
  } = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_server_queries__WEBPACK_IMPORTED_MODULE_6__.GET_PRODUCT, {
    variables: {
      slug
    }
  });
  const {
    0: loaded,
    1: setLoadingState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const product = data && data.product.data;
  const related = data && data.product.related;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!loading && product) console.log("product got", product);
    imagesloaded__WEBPACK_IMPORTED_MODULE_4___default()('main').on('done', function () {
      console.log("images loading");
      setLoadingState(true);
    }).on('progress', function () {
      console.log("images loaded");
      setLoadingState(false);
    });
    if (loading) console.log("product loading");
    setLoadingState(false);
  }, [loading, product]);
  return __jsx("main", {
    className: "main mt-6 single-product",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx((react_helmet__WEBPACK_IMPORTED_MODULE_3___default()), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, "4iode React eCommerce Template | Product Default")), __jsx("h1", {
    className: "d-none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "Riode React eCommerce Template - Product Default"), product !== undefined ? __jsx("div", {
    className: `page-content mb-10 pb-6 ${loaded ? '' : 'd-none'}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "container vertical",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "product product-single row mb-7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "col-md-6 sticky-sidebar-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 33
    }
  }, __jsx(_components_partials_product_media_media_one__WEBPACK_IMPORTED_MODULE_8__.default, {
    product: product,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 37
    }
  })), __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 33
    }
  }, __jsx(_components_partials_product_detail_detail_one__WEBPACK_IMPORTED_MODULE_9__.default, {
    data: data,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 37
    }
  }))), __jsx(_components_partials_product_desc_desc_one__WEBPACK_IMPORTED_MODULE_10__.default, {
    product: product,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 29
    }
  }), __jsx(_components_partials_product_related_products__WEBPACK_IMPORTED_MODULE_11__.default, {
    products: related,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 29
    }
  }))) : '', loaded && !loading ? '' : __jsx("div", {
    className: "skeleton-body container mb-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row mb-7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-md-6 pg-vertical",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "skel-pro-gallery",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "skel-pro-summary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 33
    }
  }))), __jsx("div", {
    className: "skel-pro-tabs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_server_apollo__WEBPACK_IMPORTED_MODULE_5__.default)({
  ssr: true
})(ProductDefault));

/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/react-hooks");;

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("apollo-boost");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "imagesloaded":
/*!*******************************!*\
  !*** external "imagesloaded" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("imagesloaded");;

/***/ }),

/***/ "next-apollo":
/*!******************************!*\
  !*** external "next-apollo" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-apollo");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-bootstrap/Collapse":
/*!*******************************************!*\
  !*** external "react-bootstrap/Collapse" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap/Collapse");;

/***/ }),

/***/ "react-countdown":
/*!**********************************!*\
  !*** external "react-countdown" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-countdown");;

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-helmet");;

/***/ }),

/***/ "react-image-lightbox":
/*!***************************************!*\
  !*** external "react-image-lightbox" ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-image-lightbox");;

/***/ }),

/***/ "react-image-magnifiers":
/*!*****************************************!*\
  !*** external "react-image-magnifiers" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-image-magnifiers");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-lazy-load-image-component":
/*!**************************************************!*\
  !*** external "react-lazy-load-image-component" ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-lazy-load-image-component");;

/***/ }),

/***/ "react-owl-carousel2":
/*!**************************************!*\
  !*** external "react-owl-carousel2" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-owl-carousel2");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react-tabs":
/*!*****************************!*\
  !*** external "react-tabs" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-tabs");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist");;

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist/lib/storage");;

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-saga/effects");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_features_owl-carousel_jsx-server_apollo_js-server_queries_js-store_cart_js-store_m-6f6f31","components_partials_product_detail_detail-one_jsx-utils_data_carousel_js-node_modules_react-i-ce3a98","components_features_product_product-two_jsx"], function() { return __webpack_exec__("./pages/product/default/[slug].jsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYW1zZXQtZWNvbW0vLi9jb21wb25lbnRzL3BhcnRpYWxzL3Byb2R1Y3QvZGVzYy9kZXNjLW9uZS5qc3giLCJ3ZWJwYWNrOi8vcmFtc2V0LWVjb21tLy4vY29tcG9uZW50cy9wYXJ0aWFscy9wcm9kdWN0L2xpZ2h0LWJveC5qc3giLCJ3ZWJwYWNrOi8vcmFtc2V0LWVjb21tLy4vY29tcG9uZW50cy9wYXJ0aWFscy9wcm9kdWN0L21lZGlhL21lZGlhLW9uZS5qc3giLCJ3ZWJwYWNrOi8vcmFtc2V0LWVjb21tLy4vY29tcG9uZW50cy9wYXJ0aWFscy9wcm9kdWN0L3JlbGF0ZWQtcHJvZHVjdHMuanN4Iiwid2VicGFjazovL3JhbXNldC1lY29tbS8uL2NvbXBvbmVudHMvcGFydGlhbHMvcHJvZHVjdC90aHVtYi90aHVtYi1vbmUuanN4Iiwid2VicGFjazovL3JhbXNldC1lY29tbS8uL2NvbXBvbmVudHMvcGFydGlhbHMvcHJvZHVjdC90aHVtYi90aHVtYi10d28uanN4Iiwid2VicGFjazovL3JhbXNldC1lY29tbS8uL3BhZ2VzL3Byb2R1Y3QvZGVmYXVsdC9bc2x1Z10uanN4Iiwid2VicGFjazovL3JhbXNldC1lY29tbS9leHRlcm5hbCBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIiIsIndlYnBhY2s6Ly9yYW1zZXQtZWNvbW0vZXh0ZXJuYWwgXCJhcG9sbG8tYm9vc3RcIiIsIndlYnBhY2s6Ly9yYW1zZXQtZWNvbW0vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovL3JhbXNldC1lY29tbS9leHRlcm5hbCBcImltYWdlc2xvYWRlZFwiIiwid2VicGFjazovL3JhbXNldC1lY29tbS9leHRlcm5hbCBcIm5leHQtYXBvbGxvXCIiLCJ3ZWJwYWNrOi8vcmFtc2V0LWVjb21tL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3JhbXNldC1lY29tbS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9yYW1zZXQtZWNvbW0vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3JhbXNldC1lY29tbS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcmFtc2V0LWVjb21tL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0NvbGxhcHNlXCIiLCJ3ZWJwYWNrOi8vcmFtc2V0LWVjb21tL2V4dGVybmFsIFwicmVhY3QtY291bnRkb3duXCIiLCJ3ZWJwYWNrOi8vcmFtc2V0LWVjb21tL2V4dGVybmFsIFwicmVhY3QtaGVsbWV0XCIiLCJ3ZWJwYWNrOi8vcmFtc2V0LWVjb21tL2V4dGVybmFsIFwicmVhY3QtaW1hZ2UtbGlnaHRib3hcIiIsIndlYnBhY2s6Ly9yYW1zZXQtZWNvbW0vZXh0ZXJuYWwgXCJyZWFjdC1pbWFnZS1tYWduaWZpZXJzXCIiLCJ3ZWJwYWNrOi8vcmFtc2V0LWVjb21tL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9yYW1zZXQtZWNvbW0vZXh0ZXJuYWwgXCJyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50XCIiLCJ3ZWJwYWNrOi8vcmFtc2V0LWVjb21tL2V4dGVybmFsIFwicmVhY3Qtb3dsLWNhcm91c2VsMlwiIiwid2VicGFjazovL3JhbXNldC1lY29tbS9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vcmFtc2V0LWVjb21tL2V4dGVybmFsIFwicmVhY3QtdGFic1wiIiwid2VicGFjazovL3JhbXNldC1lY29tbS9leHRlcm5hbCBcInJlYWN0LXRvYXN0aWZ5XCIiLCJ3ZWJwYWNrOi8vcmFtc2V0LWVjb21tL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdFwiIiwid2VicGFjazovL3JhbXNldC1lY29tbS9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIiIsIndlYnBhY2s6Ly9yYW1zZXQtZWNvbW0vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJEZXNjT25lIiwicHJvcHMiLCJwcm9kdWN0IiwiaXNHdWlkZSIsImlzRGl2aWRlciIsIm9wZW5Nb2RhbCIsImNvbG9ycyIsInNpemVzIiwidmFyaWFudHMiLCJsZW5ndGgiLCJzaXplIiwiZm9yRWFjaCIsIml0ZW0iLCJmaW5kSW5kZXgiLCJuYW1lIiwicHVzaCIsInZhbHVlIiwiY29sb3IiLCJzZXRSYXRpbmciLCJlIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50VGFyZ2V0IiwicGFyZW50Tm9kZSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJzaG93VmlkZW9Nb2RhbEhhbmRsZXIiLCJsaW5rIiwiY2xvc2VzdCIsImdldEF0dHJpYnV0ZSIsImJyYW5kcyIsInJldmlld3MiLCJjYXRlZ29yaWVzIiwibWFwIiwiaW5kZXgiLCJ3aWR0aCIsInJhdGluZ3MiLCJ0b0RlY2ltYWwiLCJudW0iLCJkaXNwbGF5IiwiY29ubmVjdCIsIm1vZGFsQWN0aW9ucyIsIk1lZGlhTGlnaHRCb3giLCJpbWFnZXMiLCJpc09wZW4iLCJzZXRPcGVuU3RhdGUiLCJ1c2VTdGF0ZSIsInNldEluZGV4IiwidXNlRWZmZWN0IiwiY2xvc2VMaWdodEJveCIsImNoYW5nZU9wZW5TdGF0ZSIsInNldE5leHRIYW5kbGVyIiwic2V0UHJldkhhbmRsZXIiLCJwcm9jZXNzIiwidXJsIiwiTWVkaWFPbmUiLCJtZWRpYVJlZiIsInNldE1lZGlhUmVmIiwibGdJbWFnZXMiLCJsYXJnZV9waWN0dXJlcyIsInBpY3R1cmVzIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImN1cnJlbnQiLCIkY2FyIiwidG8iLCJzZXRJbmRleEhhbmRsZXIiLCJtZWRpYUluZGV4IiwiY2hhbmdlUmVmSGFuZGxlciIsImNhclJlZiIsInVuZGVmaW5lZCIsIm9wZW5TdGF0ZSIsIm9wZW5MaWdodEJveCIsImV2ZW50cyIsIm9uVHJhbnNsYXRlIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwidG9wIiwic3RvY2siLCJpc190b3AiLCJpc19uZXciLCJkaXNjb3VudCIsIm1haW5TbGlkZXIzIiwiaW1hZ2UiLCJSZWxhdGVkUHJvZHVjdHMiLCJwcm9kdWN0cyIsImFkQ2xhc3MiLCJtYWluU2xpZGVyMTciLCJzbGljZSIsIlRodW1iT25lIiwicG9zIiwic2V0UG9zIiwidGVybSIsInNldFRlcm0iLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdENhcm91c2VsSGFubGRlciIsInNldFRpbWVvdXQiLCJwcm9kdWN0VGh1bWIiLCJ3cmFwcGVySGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwidGh1bWJTcGFjZSIsInBhcnNlSW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJ0cmFuc2Zvcm1Vbml0IiwibmV3VGVybSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwcm9kdWN0VGh1bWJzIiwiaW5uZXJXaWR0aCIsInN0eWxlIiwialF1ZXJ5IiwidHJpZ2dlciIsImFjdGl2ZUl0ZW0iLCJtb3ZlVGh1bWIiLCJ0eXBlIiwic2lnbiIsImFjdGl2ZUl0ZW1zIiwic2V0VGVybUhhbmRsZXIiLCJjb25zb2xlIiwibG9nIiwidGh1bWJDb250YWluZXIiLCJjdXJyZW50VG9wIiwib2Zmc2V0IiwidGVtcCIsInByZXZQb3NIYW5kbGVyIiwibmV4dFBvc0hhbmRsZXIiLCJhY3RpdmVIYW5kbGVyIiwib25DaGFuZ2VJbmRleCIsIlRodW1iVHdvIiwidGh1bWJzIiwidGh1bWJSZWYiLCJzZXRUaHVtYlJlZiIsInRodW1iQWN0aXZlSGFuZGxlciIsInRodW1iSW5kZXgiLCJtYWluU2xpZGVyMTUiLCJ0aHVtYiIsIlJlYWN0IiwiUHJvZHVjdERlZmF1bHQiLCJzbHVnIiwidXNlUm91dGVyIiwicXVlcnkiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwidXNlUXVlcnkiLCJHRVRfUFJPRFVDVCIsInZhcmlhYmxlcyIsImxvYWRlZCIsInNldExvYWRpbmdTdGF0ZSIsInJlbGF0ZWQiLCJpbWFnZXNMb2FkZWQiLCJvbiIsIndpdGhBcG9sbG8iLCJzc3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7O0FBRUEsU0FBU0EsT0FBVCxDQUFrQkMsS0FBbEIsRUFBMEI7QUFDdEIsUUFBTTtBQUFFQyxXQUFGO0FBQVdDLFdBQU8sR0FBRyxJQUFyQjtBQUEyQkMsYUFBUyxHQUFHLElBQXZDO0FBQTZDQztBQUE3QyxNQUEyREosS0FBakU7QUFFQSxNQUFJSyxNQUFNLEdBQUcsRUFBYjtBQUFBLE1BQWlCQyxLQUFLLEdBQUcsRUFBekI7O0FBRUEsTUFBS0wsT0FBTyxDQUFDTSxRQUFSLENBQWlCQyxNQUFqQixHQUEwQixDQUEvQixFQUFtQztBQUMvQixRQUFLUCxPQUFPLENBQUNNLFFBQVIsQ0FBa0IsQ0FBbEIsRUFBc0JFLElBQTNCLEVBQ0lSLE9BQU8sQ0FBQ00sUUFBUixDQUFpQkcsT0FBakIsQ0FBMEJDLElBQUksSUFBSTtBQUM5QixVQUFLTCxLQUFLLENBQUNNLFNBQU4sQ0FBaUJILElBQUksSUFBSUEsSUFBSSxDQUFDSSxJQUFMLEtBQWNGLElBQUksQ0FBQ0YsSUFBTCxDQUFVSSxJQUFqRCxNQUE0RCxDQUFDLENBQWxFLEVBQXNFO0FBQ2xFUCxhQUFLLENBQUNRLElBQU4sQ0FBWTtBQUFFRCxjQUFJLEVBQUVGLElBQUksQ0FBQ0YsSUFBTCxDQUFVSSxJQUFsQjtBQUF3QkUsZUFBSyxFQUFFSixJQUFJLENBQUNGLElBQUwsQ0FBVUE7QUFBekMsU0FBWjtBQUNIO0FBQ0osS0FKRDs7QUFNSixRQUFLUixPQUFPLENBQUNNLFFBQVIsQ0FBa0IsQ0FBbEIsRUFBc0JTLEtBQTNCLEVBQW1DO0FBQy9CZixhQUFPLENBQUNNLFFBQVIsQ0FBaUJHLE9BQWpCLENBQTBCQyxJQUFJLElBQUk7QUFDOUIsWUFBS04sTUFBTSxDQUFDTyxT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O0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkosQ0FESixDQURKLEVBU0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKLENBREosRUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixDQVBKLEVBYUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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O0FBQUE7QUFBQTtBQUFBLElBREosQ0FMSixDQURKLEVBV0k7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEosQ0E5QlosQ0FESjtBQTJESDs7QUFFRCwrREFBZVUsdURBQVUsQ0FBQztBQUFFQyxLQUFHO0FBQUwsQ0FBRCxDQUFWLENBQW1EaEIsY0FBbkQsQ0FBZixFOzs7Ozs7Ozs7OztBQ3JHQSxpRDs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxnRCIsImZpbGUiOiJwYWdlcy9wcm9kdWN0L2RlZmF1bHQvW3NsdWddLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgVGFicywgVGFiLCBUYWJMaXN0LCBUYWJQYW5lbCB9IGZyb20gJ3JlYWN0LXRhYnMnO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9jdXN0b20tbGluayc7XHJcblxyXG5pbXBvcnQgeyBtb2RhbEFjdGlvbnMgfSBmcm9tICd+L3N0b3JlL21vZGFsJztcclxuXHJcbmltcG9ydCB7IHRvRGVjaW1hbCB9IGZyb20gJ34vdXRpbHMnO1xyXG5cclxuZnVuY3Rpb24gRGVzY09uZSggcHJvcHMgKSB7XHJcbiAgICBjb25zdCB7IHByb2R1Y3QsIGlzR3VpZGUgPSB0cnVlLCBpc0RpdmlkZXIgPSB0cnVlLCBvcGVuTW9kYWwgfSA9IHByb3BzO1xyXG5cclxuICAgIGxldCBjb2xvcnMgPSBbXSwgc2l6ZXMgPSBbXTtcclxuXHJcbiAgICBpZiAoIHByb2R1Y3QudmFyaWFudHMubGVuZ3RoID4gMCApIHtcclxuICAgICAgICBpZiAoIHByb2R1Y3QudmFyaWFudHNbIDAgXS5zaXplIClcclxuICAgICAgICAgICAgcHJvZHVjdC52YXJpYW50cy5mb3JFYWNoKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggc2l6ZXMuZmluZEluZGV4KCBzaXplID0+IHNpemUubmFtZSA9PT0gaXRlbS5zaXplLm5hbWUgKSA9PT0gLTEgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZXMucHVzaCggeyBuYW1lOiBpdGVtLnNpemUubmFtZSwgdmFsdWU6IGl0ZW0uc2l6ZS5zaXplIH0gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICBpZiAoIHByb2R1Y3QudmFyaWFudHNbIDAgXS5jb2xvciApIHtcclxuICAgICAgICAgICAgcHJvZHVjdC52YXJpYW50cy5mb3JFYWNoKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggY29sb3JzLmZpbmRJbmRleCggY29sb3IgPT4gY29sb3IubmFtZSA9PT0gaXRlbS5jb2xvci5uYW1lICkgPT09IC0xIClcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcnMucHVzaCggeyBuYW1lOiBpdGVtLmNvbG9yLm5hbWUsIHZhbHVlOiBpdGVtLmNvbG9yLmNvbG9yIH0gKTtcclxuICAgICAgICAgICAgfSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXRSYXRpbmcgPSAoIGUgKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAoIGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoICcuYWN0aXZlJyApICkge1xyXG4gICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCAnLmFjdGl2ZScgKS5jbGFzc0xpc3QucmVtb3ZlKCAnYWN0aXZlJyApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoICdhY3RpdmUnICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd1ZpZGVvTW9kYWxIYW5kbGVyID0gKCBlICkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgbGluayA9IGUuY3VycmVudFRhcmdldC5jbG9zZXN0KCAnLmJ0bi1wbGF5JyApLmdldEF0dHJpYnV0ZSggJ2RhdGEnICk7XHJcbiAgICAgICAgb3Blbk1vZGFsKCBsaW5rICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VGFicyBjbGFzc05hbWU9XCJ0YWIgdGFiLW5hdi1zaW1wbGUgcHJvZHVjdC10YWJzXCIgc2VsZWN0ZWRUYWJDbGFzc05hbWU9XCJzaG93XCIgc2VsZWN0ZWRUYWJQYW5lbENsYXNzTmFtZT1cImFjdGl2ZVwiIGRlZmF1bHRJbmRleD17IDAgfSA+XHJcbiAgICAgICAgICAgIDxUYWJMaXN0IGNsYXNzTmFtZT1cIm5hdiBuYXYtdGFicyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgcm9sZT1cInRhYmxpc3RcIj5cclxuICAgICAgICAgICAgICAgIDxUYWIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkRlc2NyaXB0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdCAmJiBwcm9kdWN0LmJyYW5kcy5sZW5ndGggPiAwIHx8IGNvbG9ycy5sZW5ndGggPiAwIHx8IHNpemVzLmxlbmd0aCA+IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkFkZGl0aW9uYWwgaW5mb3JtYXRpb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPiA6ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNHdWlkZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+U2l6ZSBHdWlkZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+IDogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxUYWIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlJldmlld3MgKHsgcHJvZHVjdC5yZXZpZXdzIH0pPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgIDwvVGFiTGlzdD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbCBjbGFzc05hbWU9XCJ0YWItcGFuZSBwcm9kdWN0LXRhYi1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLXRpdGxlIG1iLTQgZm9udC13ZWlnaHQtc2VtaS1ib2xkIGxzLW1cIj5GZWF0dXJlczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJhZXNlbnQgaWQgZW5pbSBzaXQgYW1ldC5UZGlvIHZ1bHB1dGF0ZSBlbGVpZmVuZCBpbiBpbiB0b3J0b3IuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxsdXMgbWFzc2EuIHNpdGkgaU1hc3NhIHJpc3RpcXVlIHNpdCBhbWV0IGNvbmRpbSB2ZWwsIGZhY2lsaXNpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1aW1lcXVpc3RpcXV0aXF1IGFtZXQgY29uZGltIERpbGlzaXMgRmFjaWxpc2lzIHF1aXMgc2FwaWVuLiBQcmFlc2VudCBpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuaW0gc2l0IGFtZXQuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1iLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UHJhZXNlbnQgaWQgZW5pbSBzaXQgYW1ldC5UZGlvIHZ1bHB1dGF0ZTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkVsZWlmZW5kIGluIGluIHRvcnRvci4gZWxsdXMgbWFzc2EuRHJpc3RpcXVlIHNpdGlpPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+TWFzc2EgcmlzdGlxdWUgc2l0IGFtZXQgY29uZGltIHZlbDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkRpbGlzaXMgRmFjaWxpc2lzIHF1aXMgc2FwaWVuLiBQcmFlc2VudCBpZCBlbmltIHNpdCBhbWV0PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tdGl0bGUgbWItMyBmb250LXdlaWdodC1zZW1pLWJvbGQgbHMtbVwiPlNwZWNpZmljYXRpb25zXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LXNlbWktYm9sZCB0ZXh0LWRhcmsgcGwtMFwiPk1hdGVyaWFsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwbC00XCI+UHJhZXNlbnQgaWQgZW5pbSBzaXQgYW1ldC5UZGlvPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LXNlbWktYm9sZCB0ZXh0LWRhcmsgcGwtMFwiPkNsYWltZWQgU2l6ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGwtNFwiPlByYWVzZW50IGlkIGVuaW0gc2l0PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LXNlbWktYm9sZCB0ZXh0LWRhcmsgcGwtMFwiPlJlY29tbWVuZGVkIFVzZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGwtNFwiPlByYWVzZW50IGlkIGVuaW0gc2l0IGFtZXQuVGRpbyB2dWxwdXRhdGUgZWxlaWZlbmRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluIGluIHRvcnRvci4gZWxsdXMgbWFzc2EuIHNpdGk8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtc2VtaS1ib2xkIHRleHQtZGFyayBib3JkZXItbm8gcGwtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hbnVmYWN0dXJlcjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyLW5vIHBsLTRcIj5QcmFlc2VudCBpZCBlbmltPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgcGwtbWQtNiBwdC00IHB0LW1kLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbi10aXRsZSBmb250LXdlaWdodC1zZW1pLWJvbGQgbHMtbSBtYi01XCI+VmlkZW8gRGVzY3JpcHRpb248L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJwLXJlbGF0aXZlIGQtaW5saW5lLWJsb2NrIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL3Byb2R1Y3QuanBnXCIgd2lkdGg9XCI1NTlcIiBoZWlnaHQ9XCIzNzBcIiBhbHQ9XCJQcm9kdWN0XCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuLXBsYXkgYnRuLWlmcmFtZVwiIGhyZWY9XCIjXCIgZGF0YT1cIi91cGxvYWRzL3ZpZGVvL3ZpZGVvLTEubXA0XCIgb25DbGljaz17IHNob3dWaWRlb01vZGFsSGFuZGxlciB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJkLWljb24tcGxheS1zb2xpZFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1ib3gtd3JhcCBkLWZsZXggZmxleC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWJveCBpY29uLWJveC1zaWRlIGljb24tYm9yZGVyIHB0LTIgcGItMiBtYi00IG1yLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZC1pY29uLWxvY2tcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tYm94LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJpY29uLWJveC10aXRsZSBsaC0xIHB0LTEgbHMtcyB0ZXh0LW5vcm1hbFwiPjIgeWVhclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2FycmFudHk8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+R3VhcmFudGVlIHdpdGggbm8gZG91YnQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXZpZGVyID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlciBkLXhsLXNob3cgbXItMTBcIj48L2Rpdj4gOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tYm94IGljb24tYm94LXNpZGUgaWNvbi1ib3JkZXIgcHQtMiBwYi0yIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWJveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJkLWljb24tdHJ1Y2tcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tYm94LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJpY29uLWJveC10aXRsZSBsaC0xIHB0LTEgbHMtcyB0ZXh0LW5vcm1hbFwiPkZyZWUgc2hpcHBpbmdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+T24gb3JkZXJzIG92ZXIgJDUwLjAwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3QgJiYgcHJvZHVjdC5icmFuZHMubGVuZ3RoID4gMCB8fCBjb2xvcnMubGVuZ3RoID4gMCB8fCBzaXplcy5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVsIGNsYXNzTmFtZT1cInRhYi1wYW5lIHByb2R1Y3QtdGFiLWFkZGl0aW9uYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LW5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuY2F0ZWdvcmllcy5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48bGFiZWw+Q2F0ZWdvcmllczo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHByb2R1Y3QuY2F0ZWdvcmllcy5tYXAoICggaXRlbSwgaW5kZXggKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXsgaXRlbS5uYW1lICsgJy0nICsgaW5kZXggfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGl0ZW0ubmFtZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpbmRleCA8IHByb2R1Y3QuY2F0ZWdvcmllcy5sZW5ndGggLSAxID8gJywgJyA6IFwiXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5icmFuZHMubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGxhYmVsPkJyYW5kczo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHByb2R1Y3QuYnJhbmRzLm1hcCggKCBpdGVtLCBpbmRleCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9eyBpdGVtLm5hbWUgKyAnLScgKyBpbmRleCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaXRlbS5uYW1lIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGluZGV4IDwgcHJvZHVjdC5icmFuZHMubGVuZ3RoIC0gMSA/ICcsICcgOiBcIlwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48bGFiZWw+Q29sb3I6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjb2xvcnMubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17IGl0ZW0ubmFtZSArICctJyArIGluZGV4IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpdGVtLm5hbWUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaW5kZXggPCBjb2xvcnMubGVuZ3RoIC0gMSA/ICcsICcgOiBcIlwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemVzLmxlbmd0aCA+IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxsYWJlbD5TaXplOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemVzLm1hcCggKCBpdGVtLCBpbmRleCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXsgaXRlbS5uYW1lICsgJy0nICsgaW5kZXggfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpdGVtLm5hbWUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGluZGV4IDwgc2l6ZXMubGVuZ3RoIC0gMSA/ICcsICcgOiBcIlwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNHdWlkZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbCBjbGFzc05hbWU9XCJ0YWItcGFuZSBwcm9kdWN0LXRhYi1zaXplLWd1aWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cInNpemUtaW1hZ2UgbXQtNCBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy9zaXplX2d1aWRlLnBuZ1wiIGFsdD1cIlNpemUgR3VpZGUgSW1hZ2VcIiB3aWR0aD1cIjIxN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjM5OFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwic2l6ZS10YWJsZSBtdC00IG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U0laRTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNIRVNUKElOLik8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5XRUlTVChJTi4pPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+SElQUyhJTi4pPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+WFM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zNC0zNjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjI3LTI5PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MzQuNS0zNi41PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zNi0zODwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjI5LTMxPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MzYuNS0zOC41PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zOC00MDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjMxLTMzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MzguNS00MC41PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD40MC00MjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjMzLTM2PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+NDAuNS00My41PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlhMPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+NDItNDU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zNi00MDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjQzLjUtNDcuNTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5YWEw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD40NS00ODwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjQwLTQ0PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+NDcuNS01MS41PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPiA6ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsIGNsYXNzTmFtZT1cInRhYi1wYW5lIHByb2R1Y3QtdGFiLXJldmlld3NcIj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QucmV2aWV3cyA9PT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRzIG1iLTIgcHQtMiBwYi0yIGJvcmRlci1ub1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZXJlIGFyZSBubyByZXZpZXdzIHlldC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRzIG1iLTggcHQtMiBwYi0yIGJvcmRlci1ub1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJjb21tZW50LW1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy9ibG9nL2NvbW1lbnRzLzEuanBnXCIgYWx0PVwiYXZhdGFyXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudC1yYXRpbmcgcmF0aW5ncy1jb250YWluZXIgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdzLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyYXRpbmdzXCIgc3R5bGU9eyB7IHdpZHRoOiBwcm9kdWN0LnJhdGluZ3MgKiAyMCArICclJyB9IH0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXB0ZXh0IHRvb2x0aXAtdG9wXCI+eyB0b0RlY2ltYWwoIHByb2R1Y3QucmF0aW5ncyApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudC11c2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb21tZW50LWRhdGUgdGV4dC1ib2R5XCI+U2VwdGVtYmVyIDIyLCAyMDIwIGF0IDk6NDJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cG08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+PEFMaW5rIGhyZWY9XCIjXCI+Sm9obiBEb2U8L0FMaW5rPjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNlZCBwcmV0aXVtLCBsaWd1bGEgc29sbGljaXR1ZGluIGxhb3JlZXQgdml2ZXJyYSwgdG9ydG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWJlcm8gc29kYWxlcyBsZW8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZ2V0IGJsYW5kaXQgbnVuYyB0b3J0b3IgZXUgbmliaC4gTnVsbGFtIG1vbGxpcy4gVXQganVzdG8uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdXNwZW5kaXNzZSBwb3RlbnRpLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VkIGVnZXN0YXMsIGFudGUgZXQgdnVscHV0YXRlIHZvbHV0cGF0LCBlcm9zIHBlZGUgc2VtcGVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVzdCwgdml0YWUgbHVjdHVzIG1ldHVzIGxpYmVybyBldSBhdWd1ZS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnJldmlld3MgPiAxID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJjb21tZW50LW1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvYmxvZy9jb21tZW50cy8yLmpwZ1wiIGFsdD1cImF2YXRhclwiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50LWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnQtcmF0aW5nIHJhdGluZ3MtY29udGFpbmVyIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdzLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJhdGluZ3NcIiBzdHlsZT17IHsgd2lkdGg6IHByb2R1Y3QucmF0aW5ncyAqIDIwICsgJyUnIH0gfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwdGV4dCB0b29sdGlwLXRvcFwiPnsgdG9EZWNpbWFsKCBwcm9kdWN0LnJhdGluZ3MgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnQtdXNlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb21tZW50LWRhdGUgdGV4dC1ib2R5XCI+U2VwdGVtYmVyIDIyLCAyMDIwIGF0IDk6NDJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cG08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND48QUxpbmsgaHJlZj1cIiNcIj5Kb2huIERvZTwvQUxpbms+PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2VkIHByZXRpdW0sIGxpZ3VsYSBzb2xsaWNpdHVkaW4gbGFvcmVldCB2aXZlcnJhLCB0b3J0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGliZXJvIHNvZGFsZXMgbGVvLCBlZ2V0IGJsYW5kaXQgbnVuYyB0b3J0b3IgZXUgbmliaC4gTnVsbGFtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbGxpcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXQganVzdG8uIFN1c3BlbmRpc3NlIHBvdGVudGkuIFNlZCBlZ2VzdGFzLCBhbnRlIGV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZ1bHB1dGF0ZSB2b2x1dHBhdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJvcyBwZWRlIHNlbXBlciBlc3QsIHZpdGFlIGx1Y3R1cyBtZXR1cyBsaWJlcm8gZXUgYXVndWUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vcmJpIHB1cnVzIGxpYmVybyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmF1Y2lidXMgYWRpcGlzY2luZywgY29tbW9kbyBxdWlzLCBhdmlkYSBpZCwgZXN0LiBTZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVjdHVzLiBQcmFlc2VudCBlbGVtZW50dW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVuZHJlcml0IHRvcnRvci4gU2VkIHNlbXBlciBsb3JlbSBhdCBmZWxpcy4gVmVzdGlidWx1bVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2b2x1dHBhdC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwbHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS13cmFwcGVyIHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIHRpdGxlLXNpbXBsZSB0ZXh0LWxlZnQgdGV4dC1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QucmV2aWV3cyA+IDAgPyBcIkFkZCBhIFJldmlld1wiIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQmUgVGhlIEZpcnN0IFRvIFJldmlldyDigJxcIiArIHByb2R1Y3QubmFtZSArIFwi4oCdXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+WW91ciBlbWFpbCBhZGRyZXNzIHdpbGwgbm90IGJlIHB1Ymxpc2hlZC4gUmVxdWlyZWQgZmllbGRzIGFyZSBtYXJrZWQgKjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmF0aW5nXCIgY2xhc3NOYW1lPVwidGV4dC1kYXJrXCI+WW91ciByYXRpbmcgKiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmF0aW5nLXN0YXJzIHNlbGVjdGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBbIDEsIDIsIDMsIDQsIDUgXS5tYXAoICggbnVtLCBpbmRleCApID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17IGBzdGFyLSR7IG51bSB9YCB9IGhyZWY9XCIjXCIgb25DbGljaz17IHNldFJhdGluZyB9IGtleT17ICdzdGFyLScgKyBpbmRleCB9PnsgbnVtIH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwicmF0aW5nXCIgaWQ9XCJyYXRpbmdcIiByZXF1aXJlZD1cIlwiIHN0eWxlPXsgeyBkaXNwbGF5OiAnbm9uZScgfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5SYXRl4oCmPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjVcIj5QZXJmZWN0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj5Hb29kPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5BdmVyYWdlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5Ob3QgdGhhdCBiYWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPlZlcnkgcG9vcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJyZXBseS1tZXNzYWdlXCIgY29scz1cIjMwXCIgcm93cz1cIjZcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb21tZW50ICpcIiByZXF1aXJlZD48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG1iLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJyZXBseS1uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZXBseS1uYW1lXCIgcGxhY2Vob2xkZXI9XCJOYW1lICpcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgbWItNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJyZXBseS1lbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmVwbHktZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsICpcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2tib3ggbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJjdXN0b20tY2hlY2tib3hcIiBpZD1cInNpZ25pbi1yZW1lbWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzaWduaW4tcmVtZW1iZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtbGFiZWxcIiBodG1sRm9yPVwic2lnbmluLXJlbWVtYmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNhdmUgbXkgbmFtZSwgZW1haWwsIGFuZCB3ZWJzaXRlIGluIHRoaXMgYnJvd3NlciBmb3IgdGhlIG5leHQgdGltZSBJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXJvdW5kZWRcIj5TdWJtaXQ8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtaWNvbi1hcnJvdy1yaWdodFwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvVGFicyA+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoICcnLCB7IG9wZW5Nb2RhbDogbW9kYWxBY3Rpb25zLm9wZW5Nb2RhbCB9ICkoIERlc2NPbmUgKSIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaWdodGJveCBmcm9tICdyZWFjdC1pbWFnZS1saWdodGJveCc7XHJcbmltcG9ydCAncmVhY3QtaW1hZ2UtbGlnaHRib3gvc3R5bGUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIE1lZGlhTGlnaHRCb3goIHByb3BzICkge1xyXG4gICAgY29uc3QgeyBpbWFnZXMsIHByb2R1Y3QgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgWyBpc09wZW4sIHNldE9wZW5TdGF0ZSBdID0gdXNlU3RhdGUoIGZhbHNlICk7XHJcbiAgICBjb25zdCBbIGluZGV4LCBzZXRJbmRleCBdID0gdXNlU3RhdGUoIDAgKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBzZXRPcGVuU3RhdGUoIHByb3BzLmlzT3BlbiApO1xyXG4gICAgfSwgWyBwcm9wcy5pc09wZW4gXSApXHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgc2V0SW5kZXgoIHByb3BzLmluZGV4ICk7XHJcbiAgICB9LCBbIHByb3BzLmluZGV4IF0gKVxyXG5cclxuICAgIGNvbnN0IGNsb3NlTGlnaHRCb3ggPSAoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMuY2hhbmdlT3BlblN0YXRlKCBmYWxzZSApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldE5leHRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEluZGV4KCAoIGluZGV4ICsgMSApICUgaW1hZ2VzLmxlbmd0aCApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldFByZXZIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEluZGV4KCAoIGluZGV4ICsgaW1hZ2VzLmxlbmd0aCAtIDEgKSAlIGltYWdlcy5sZW5ndGggKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlzT3BlbiA/XHJcbiAgICAgICAgICAgICAgICAgICAgPExpZ2h0Ym94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5TcmM9eyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BU1NFVF9VUkkgKyBpbWFnZXNbIGluZGV4IF0udXJsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFNyYz17IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FTU0VUX1VSSSArIGltYWdlc1sgKCBpbmRleCArIDEgKSAlIGltYWdlcy5sZW5ndGggXS51cmwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2U3JjPXsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgaW1hZ2VzWyAoIGluZGV4ICsgaW1hZ2VzLmxlbmd0aCAtIDEgKSAlIGltYWdlcy5sZW5ndGggXS51cmwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlUmVxdWVzdD17IGNsb3NlTGlnaHRCb3ggfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdmVQcmV2UmVxdWVzdD17IHNldFByZXZIYW5kbGVyIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3ZlTmV4dFJlcXVlc3Q9eyBzZXROZXh0SGFuZGxlciB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkRpc2FibGVkPXsgZmFsc2UgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbj17IDMwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVGl0bGU9eyBwcm9kdWN0Lm5hbWUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVBhZGRpbmc9eyA4MCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrT3V0c2lkZVRvQ2xvc2U9eyB0cnVlIH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZWRpYUxpZ2h0Qm94OyIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1hZ25pZmllciB9IGZyb20gJ3JlYWN0LWltYWdlLW1hZ25pZmllcnMnO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9jdXN0b20tbGluayc7XHJcbmltcG9ydCBPd2xDYXJvdXNlbCBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvb3dsLWNhcm91c2VsJztcclxuXHJcbmltcG9ydCBUaHVtYk9uZSBmcm9tICd+L2NvbXBvbmVudHMvcGFydGlhbHMvcHJvZHVjdC90aHVtYi90aHVtYi1vbmUnO1xyXG5pbXBvcnQgVGh1bWJUd28gZnJvbSAnfi9jb21wb25lbnRzL3BhcnRpYWxzL3Byb2R1Y3QvdGh1bWIvdGh1bWItdHdvJztcclxuaW1wb3J0IE1lZGlhTGlnaHRCb3ggZnJvbSAnfi9jb21wb25lbnRzL3BhcnRpYWxzL3Byb2R1Y3QvbGlnaHQtYm94JztcclxuXHJcbmltcG9ydCB7IG1haW5TbGlkZXIzIH0gZnJvbSAnfi91dGlscy9kYXRhL2Nhcm91c2VsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lZGlhT25lICggcHJvcHMgKSB7XHJcbiAgICBjb25zdCB7IHByb2R1Y3QgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgWyBpbmRleCwgc2V0SW5kZXggXSA9IHVzZVN0YXRlKCAwICk7XHJcbiAgICBjb25zdCBbIGlzT3Blbiwgc2V0T3BlblN0YXRlIF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcclxuICAgIGNvbnN0IFsgbWVkaWFSZWYsIHNldE1lZGlhUmVmIF0gPSB1c2VTdGF0ZSggbnVsbCApO1xyXG5cclxuICAgIGxldCBsZ0ltYWdlcyA9IHByb2R1Y3QubGFyZ2VfcGljdHVyZXMgPyBwcm9kdWN0LmxhcmdlX3BpY3R1cmVzIDogcHJvZHVjdC5waWN0dXJlcztcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBzZXRJbmRleCggMCApO1xyXG4gICAgfSwgWyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgXSApXHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCBtZWRpYVJlZiAhPT0gbnVsbCAmJiBtZWRpYVJlZi5jdXJyZW50ICE9PSBudWxsICYmIGluZGV4ID49IDAgKSB7XHJcbiAgICAgICAgICAgIG1lZGlhUmVmLmN1cnJlbnQuJGNhci50byggaW5kZXgsIDMwMCwgdHJ1ZSApO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFsgaW5kZXggXSApXHJcblxyXG4gICAgY29uc3Qgc2V0SW5kZXhIYW5kbGVyID0gKCBtZWRpYUluZGV4ICkgPT4ge1xyXG4gICAgICAgIGlmICggbWVkaWFJbmRleCAhPT0gaW5kZXggKSB7XHJcbiAgICAgICAgICAgIHNldEluZGV4KCBtZWRpYUluZGV4ICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVJlZkhhbmRsZXIgPSAoIGNhclJlZiApID0+IHtcclxuICAgICAgICBpZiAoIGNhclJlZi5jdXJyZW50ICE9PSB1bmRlZmluZWQgKSB7XHJcbiAgICAgICAgICAgIHNldE1lZGlhUmVmKCBjYXJSZWYgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hhbmdlT3BlblN0YXRlID0gb3BlblN0YXRlID0+IHtcclxuICAgICAgICBzZXRPcGVuU3RhdGUoIG9wZW5TdGF0ZSApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9wZW5MaWdodEJveCA9ICgpID0+IHtcclxuICAgICAgICBzZXRPcGVuU3RhdGUoIHRydWUgKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZXZlbnRzID0ge1xyXG4gICAgICAgIG9uVHJhbnNsYXRlOiBmdW5jdGlvbiAoIGUgKSB7XHJcbiAgICAgICAgICAgIGlmICggIWUudGFyZ2V0ICkgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucHJvZHVjdC10aHVtYnMnICkgKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnByb2R1Y3QtdGh1bWJzJyApLnF1ZXJ5U2VsZWN0b3IoICcucHJvZHVjdC10aHVtYi5hY3RpdmUnICkuY2xhc3NMaXN0LnJlbW92ZSggJ2FjdGl2ZScgKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucHJvZHVjdC10aHVtYnMnICkucXVlcnlTZWxlY3RvckFsbCggJy5wcm9kdWN0LXRodW1iJyApWyBlLml0ZW0uaW5kZXggXS5jbGFzc0xpc3QuYWRkKCAnYWN0aXZlJyApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWdhbGxlcnkgcGctdmVydGljYWwgbWVkaWEtZGVmYXVsdFwiIHN0eWxlPXsgeyB0b3A6IFwiODhweFwiIH0gfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1sYWJlbC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5zdG9jayA9PT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicHJvZHVjdC1sYWJlbCBsYWJlbC1vdXRcIj5vdXQ8L2xhYmVsPiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5pc190b3AgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInByb2R1Y3QtbGFiZWwgbGFiZWwtdG9wXCI+dG9wPC9sYWJlbD4gOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuaXNfbmV3ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLW5ld1wiPm5ldzwvbGFiZWw+IDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmRpc2NvdW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLXNhbGVcIj5zYWxlPC9sYWJlbD4gOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPE93bENhcm91c2VsIGFkQ2xhc3M9XCJwcm9kdWN0LXNpbmdsZS1jYXJvdXNlbCBvd2wtdGhlbWUgb3dsLW5hdi1pbm5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17IG1haW5TbGlkZXIzIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZUluZGV4PXsgc2V0SW5kZXhIYW5kbGVyIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZVJlZj17IGNoYW5nZVJlZkhhbmRsZXIgfVxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50cz17IGV2ZW50cyB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZ0ltYWdlcy5tYXAoICggaW1hZ2UsIGluZGV4ICkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXsgaW1hZ2UgKyAnLScgKyBpbmRleCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYWduaWZpZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmM9eyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BU1NFVF9VUkkgKyBpbWFnZS51cmwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZUFsdD1cIm1hZ25pZmllclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhcmdlSW1hZ2VTcmM9eyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BU1NFVF9VUkkgKyBpbWFnZS51cmwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnVG9Nb3ZlPXsgZmFsc2UgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3VzZUFjdGl2YXRpb249XCJob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvclN0eWxlQWN0aXZlPVwiY3Jvc3NoYWlyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC1pbWFnZSBsYXJnZS1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgICAgIDwvT3dsQ2Fyb3VzZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwicHJvZHVjdC1pbWFnZS1mdWxsXCIgb25DbGljaz17IG9wZW5MaWdodEJveCB9PjxpIGNsYXNzTmFtZT1cImQtaWNvbi16b29tXCI+PC9pPjwvQUxpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRodW1iT25lIHByb2R1Y3Q9eyBwcm9kdWN0IH0gaW5kZXg9eyBpbmRleCB9IG9uQ2hhbmdlSW5kZXg9eyBzZXRJbmRleEhhbmRsZXIgfSAvPlxyXG4gICAgICAgICAgICAgICAgPFRodW1iVHdvIHByb2R1Y3Q9eyBwcm9kdWN0IH0gaW5kZXg9eyBpbmRleCB9IG9uQ2hhbmdlSW5kZXg9eyBzZXRJbmRleEhhbmRsZXIgfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxNZWRpYUxpZ2h0Qm94IGltYWdlcz17IGxnSW1hZ2VzIH0gaXNPcGVuPXsgaXNPcGVuIH0gY2hhbmdlT3BlblN0YXRlPXsgY2hhbmdlT3BlblN0YXRlIH0gaW5kZXg9eyBpbmRleCB9IHByb2R1Y3Q9eyBwcm9kdWN0IH0gLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSIsImltcG9ydCBPd2xDYXJvdXNlbCBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvb3dsLWNhcm91c2VsJztcclxuXHJcbmltcG9ydCBQcm9kdWN0VHdvIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9wcm9kdWN0L3Byb2R1Y3QtdHdvJztcclxuXHJcbmltcG9ydCB7IG1haW5TbGlkZXIxNyB9IGZyb20gJ34vdXRpbHMvZGF0YS9jYXJvdXNlbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWxhdGVkUHJvZHVjdHMocHJvcHMpIHtcclxuICAgIGNvbnN0IHsgcHJvZHVjdHMsIGFkQ2xhc3MgPSBcInB0LTMgbXQtMTBcIiB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBwcm9kdWN0cy5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgJHthZENsYXNzfWB9PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5SZWxhdGVkIFByb2R1Y3RzPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICA8T3dsQ2Fyb3VzZWwgYWRDbGFzcz1cIm93bC1jYXJvdXNlbCBvd2wtdGhlbWUgb3dsLW5hdi1mdWxsXCIgb3B0aW9ucz17bWFpblNsaWRlcjE3fT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzICYmIHByb2R1Y3RzLnNsaWNlKDAsIDUpLm1hcCgoaXRlbSwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdFR3byBwcm9kdWN0PXtpdGVtfSBrZXk9eydwcm9kdWN0LXR3by0nICsgaW5kZXh9IGFkQ2xhc3M9JycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvT3dsQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj4gOiAnJ1xyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRodW1iT25lKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IHsgaW5kZXgsIHByb2R1Y3QgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgWyBwb3MsIHNldFBvcyBdID0gdXNlU3RhdGUoIDAgKTtcclxuICAgIGNvbnN0IFsgdGVybSwgc2V0VGVybSBdID0gdXNlU3RhdGUoIDQgKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIGluaXRDYXJvdXNlbEhhbmxkZXIgKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcHJvZHVjdFRodW1iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5wcm9kdWN0LXRodW1iJyApO1xyXG4gICAgICAgICAgICBsZXQgd3JhcHBlckhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucHJvZHVjdC10aHVtYnMtb25lJyApLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgbGV0IHRodW1iU3BhY2UgPSBwYXJzZUludCggd2luZG93LmdldENvbXB1dGVkU3R5bGUoIHByb2R1Y3RUaHVtYiApLmdldFByb3BlcnR5VmFsdWUoIFwibWFyZ2luLWJvdHRvbVwiICkgKTtcclxuICAgICAgICAgICAgbGV0IHRyYW5zZm9ybVVuaXQgPSBwcm9kdWN0VGh1bWIub2Zmc2V0SGVpZ2h0ICsgdGh1bWJTcGFjZTtcclxuICAgICAgICAgICAgLy8gbmV3VGVybSA9IE1hdGguY2VpbCggKCAoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucHJvZHVjdC1nYWxsZXJ5LnBnLXZlcnRpY2FsJyApLm9mZnNldEhlaWdodCArIHRodW1iU3BhY2UgKSApIC8gdHJhbnNmb3JtVW5pdCApO1xyXG4gICAgICAgICAgICBsZXQgbmV3VGVybSA9ICggKCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnByb2R1Y3QtZ2FsbGVyeS5wZy12ZXJ0aWNhbCcgKS5vZmZzZXRIZWlnaHQgKyB0aHVtYlNwYWNlICkgKTtcclxuICAgICAgICAgICAgbmV3VGVybSA9IHBhcnNlSW50KCBuZXdUZXJtIC8gdHJhbnNmb3JtVW5pdCApO1xyXG4gICAgICAgICAgICBpZiAoIG5ld1Rlcm0gIT09IHRlcm0gKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUZXJtKCBuZXdUZXJtICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAzMDAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCBpbml0Q2Fyb3VzZWxIYW5sZGVyICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10gKVxyXG5cclxuICAgIC8vIGluaXRpYWwgc2V0dGluZ3NcclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGxldCBwcm9kdWN0VGh1bWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5wcm9kdWN0LXRodW1icy1vbmUnICk7XHJcblxyXG4gICAgICAgIGlmICggd2luZG93LmlubmVyV2lkdGggPCA5OTIgKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucHJvZHVjdC10aHVtYnMtb25lJyApLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucHJvZHVjdC10aHVtYnMtdHdvJyApLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICB3aW5kb3cualF1ZXJ5KCAnLm93bC1jYXJvdXNlbCcgKS50cmlnZ2VyKCAncmVmcmVzaC5vd2wuY2Fyb3VzZWwnICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5wcm9kdWN0LXRodW1icy1vbmUnICkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucHJvZHVjdC10aHVtYnMtdHdvJyApLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRQb3MoIDAgKTtcclxuXHJcbiAgICAgICAgaWYgKCB0ZXJtIDwgcHJvZHVjdC5waWN0dXJlcy5sZW5ndGggKSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RUaHVtYnMucXVlcnlTZWxlY3RvciggJy50aHVtYi1kb3duJyApLmNsYXNzTGlzdC5yZW1vdmUoICdkaXNhYmxlZCcgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwcm9kdWN0VGh1bWJzLnF1ZXJ5U2VsZWN0b3IoICcudGh1bWItZG93bicgKS5jbGFzc0xpc3QuYWRkKCAnZGlzYWJsZWQnICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucHJvZHVjdC10aHVtYnMnICkgKSB7XHJcbiAgICAgICAgICAgIGFjdGl2ZUl0ZW0oIDAgKTtcclxuICAgICAgICAgICAgcHJvZHVjdFRodW1icy5xdWVyeVNlbGVjdG9yKCAnLnRodW1iLXVwJyApLmNsYXNzTGlzdC5hZGQoICdkaXNhYmxlZCcgKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5wcm9kdWN0LXRodW1icycgKS5zdHlsZS50b3AgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFsgcHJvZHVjdCBdIClcclxuXHJcbiAgICAvLyBjaGFuZ2UgdGhlIHBvcyBhbmQgdG9wIHdoZW4gdGhlIG1lZGlhIGNhcm91c2VsIGlzIHRyYW5zbGF0ZWQgXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBpZiAoIHBvcyArIHRlcm0gLSAxIDwgaW5kZXggKSB7XHJcbiAgICAgICAgICAgIG1vdmVUaHVtYiggXCJkb3duXCIgKTtcclxuICAgICAgICAgICAgc2V0UG9zKCBwb3MgKyAxICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIGluZGV4IDwgcG9zICkge1xyXG4gICAgICAgICAgICBtb3ZlVGh1bWIoIFwidXBcIiApO1xyXG4gICAgICAgICAgICBzZXRQb3MoIHBvcyAtIDEgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFjdGl2ZUl0ZW0oIGluZGV4ICk7XHJcbiAgICB9LCBbIGluZGV4IF0gKVxyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGxldCBwcm9kdWN0VGh1bWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5wcm9kdWN0LXRodW1icy1vbmUnICk7XHJcbiAgICAgICAgaWYgKCBwb3MgKyB0ZXJtIDwgcHJvZHVjdC5waWN0dXJlcy5sZW5ndGggKSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RUaHVtYnMucXVlcnlTZWxlY3RvciggJy50aHVtYi1kb3duJyApLmNsYXNzTGlzdC5yZW1vdmUoICdkaXNhYmxlZCcgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwcm9kdWN0VGh1bWJzLnF1ZXJ5U2VsZWN0b3IoICcudGh1bWItZG93bicgKS5jbGFzc0xpc3QuYWRkKCAnZGlzYWJsZWQnICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIHBvcyArIHRlcm0gPT09IHByb2R1Y3QucGljdHVyZXMubGVuZ3RoICkge1xyXG4gICAgICAgICAgICAvLyBtb3ZlVGh1bWIoIFwiZG93blwiICk7XHJcbiAgICAgICAgICAgIC8vIHNldFBvcyggcG9zICsgMSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBpbmRleCA8IHBvcyApIHtcclxuICAgICAgICAgICAgLy8gbW92ZVRodW1iKCBcInVwXCIgKTtcclxuICAgICAgICAgICAgLy8gc2V0UG9zKCBwb3MgLSAxICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgWyB0ZXJtIF0gKVxyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGxldCBwcm9kdWN0VGh1bWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5wcm9kdWN0LXRodW1icy1vbmUnICk7XHJcbiAgICAgICAgaWYgKCBwcm9kdWN0VGh1bWJzICkge1xyXG4gICAgICAgICAgICBpZiAoIHBvcyA+IDAgKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGh1bWJzLnF1ZXJ5U2VsZWN0b3IoICcudGh1bWItdXAnICkuY2xhc3NMaXN0LnJlbW92ZSggJ2Rpc2FibGVkJyApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdFRodW1icy5xdWVyeVNlbGVjdG9yKCAnLnRodW1iLXVwJyApLmNsYXNzTGlzdC5hZGQoICdkaXNhYmxlZCcgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBwb3MgKyB0ZXJtIDwgcHJvZHVjdC5waWN0dXJlcy5sZW5ndGggKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGh1bWJzLnF1ZXJ5U2VsZWN0b3IoICcudGh1bWItZG93bicgKS5jbGFzc0xpc3QucmVtb3ZlKCAnZGlzYWJsZWQnICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGh1bWJzLnF1ZXJ5U2VsZWN0b3IoICcudGh1bWItZG93bicgKS5jbGFzc0xpc3QuYWRkKCAnZGlzYWJsZWQnICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbIHBvcyBdIClcclxuXHJcbiAgICAvLyBtb3ZlIHRodW1iIHBvc1xyXG4gICAgZnVuY3Rpb24gbW92ZVRodW1iKCB0eXBlID0gXCJ1cFwiICkge1xyXG4gICAgICAgIGxldCBzaWduID0gdHlwZSA9PT0gXCJ1cFwiID8gMSA6IC0xO1xyXG4gICAgICAgIGxldCBwcm9kdWN0VGh1bWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnByb2R1Y3QtdGh1bWInICk7XHJcbiAgICAgICAgbGV0IHdyYXBwZXJIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnByb2R1Y3QtdGh1bWJzLW9uZScgKS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgbGV0IHRyYW5zZm9ybVVuaXQgPSBwcm9kdWN0VGh1bWIub2Zmc2V0SGVpZ2h0ICsgcGFyc2VJbnQoIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKCBwcm9kdWN0VGh1bWIgKS5nZXRQcm9wZXJ0eVZhbHVlKCBcIm1hcmdpbi1ib3R0b21cIiApICk7XHJcbiAgICAgICAgaWYgKCB0eXBlID09PSAnZG93bicgKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucHJvZHVjdC10aHVtYnMnICkuc3R5bGUudG9wID0gLXRyYW5zZm9ybVVuaXQgKiAoIHBvcyAtIHNpZ24gKSArICggd3JhcHBlckhlaWdodCAtIHRyYW5zZm9ybVVuaXQgKiB0ZXJtICkgKyBwYXJzZUludCggd2luZG93LmdldENvbXB1dGVkU3R5bGUoIHByb2R1Y3RUaHVtYiApLmdldFByb3BlcnR5VmFsdWUoIFwibWFyZ2luLWJvdHRvbVwiICkgKSArICdweCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5wcm9kdWN0LXRodW1icycgKS5zdHlsZS50b3AgPSAtdHJhbnNmb3JtVW5pdCAqICggcG9zIC0gc2lnbiApICsgJ3B4JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWN0aXZlIHNlbGVjdGVkIGl0ZW1cclxuICAgIGZ1bmN0aW9uIGFjdGl2ZUl0ZW0oIGluZGV4ICkge1xyXG4gICAgICAgIGlmICggZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5wcm9kdWN0LXRodW1icycgKS5xdWVyeVNlbGVjdG9yKCAnLmFjdGl2ZS5wcm9kdWN0LXRodW1iJyApICkge1xyXG4gICAgICAgICAgICBsZXQgYWN0aXZlSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnByb2R1Y3QtdGh1bWJzJyApLnF1ZXJ5U2VsZWN0b3JBbGwoICcuYWN0aXZlLnByb2R1Y3QtdGh1bWInICk7XHJcbiAgICAgICAgICAgIGFjdGl2ZUl0ZW1zLmZvckVhY2goIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCAnYWN0aXZlJyApO1xyXG4gICAgICAgICAgICB9IClcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5wcm9kdWN0LXRodW1icycgKS5xdWVyeVNlbGVjdG9yQWxsKCAnLnByb2R1Y3QtdGh1bWInIClbIGluZGV4IF0uY2xhc3NMaXN0LmFkZCggJ2FjdGl2ZScgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpbml0IGFuZCBkZXN0cm95IHRodW1iIGNhcm91c2VsIGluIDk5MnB4XHJcbiAgICBjb25zdCBpbml0Q2Fyb3VzZWxIYW5sZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICggd2luZG93LmlubmVyV2lkdGggPCA5OTIgKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucHJvZHVjdC10aHVtYnMtb25lJyApLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucHJvZHVjdC10aHVtYnMtdHdvJyApLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICB3aW5kb3cualF1ZXJ5KCAnLm93bC1jYXJvdXNlbCcgKS50cmlnZ2VyKCAncmVmcmVzaC5vd2wuY2Fyb3VzZWwnICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5wcm9kdWN0LXRodW1icy1vbmUnICkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucHJvZHVjdC10aHVtYnMtdHdvJyApLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIHNldFRlcm1IYW5kbGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNoYW5nZSB0aGUgaXRlbXMgZGlzcGxheWVkIG9uY2UgaW4gc2lkZWJhclxyXG4gICAgY29uc3Qgc2V0VGVybUhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcHJvZHVjdFRodW1iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5wcm9kdWN0LXRodW1iJyApO1xyXG4gICAgICAgICAgICBsZXQgd3JhcHBlckhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucHJvZHVjdC10aHVtYnMtb25lJyApLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgbGV0IHRodW1iU3BhY2UgPSBwYXJzZUludCggd2luZG93LmdldENvbXB1dGVkU3R5bGUoIHByb2R1Y3RUaHVtYiApLmdldFByb3BlcnR5VmFsdWUoIFwibWFyZ2luLWJvdHRvbVwiICkgKTtcclxuICAgICAgICAgICAgbGV0IHRyYW5zZm9ybVVuaXQgPSBwcm9kdWN0VGh1bWIub2Zmc2V0SGVpZ2h0ICsgdGh1bWJTcGFjZTtcclxuICAgICAgICAgICAgLy8gbmV3VGVybSA9IE1hdGguY2VpbCggKCAoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucHJvZHVjdC1nYWxsZXJ5LnBnLXZlcnRpY2FsJyApLm9mZnNldEhlaWdodCArIHRodW1iU3BhY2UgKSApIC8gdHJhbnNmb3JtVW5pdCApO1xyXG4gICAgICAgICAgICBsZXQgbmV3VGVybSA9ICggKCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnByb2R1Y3QtZ2FsbGVyeS5wZy12ZXJ0aWNhbCcgKS5vZmZzZXRIZWlnaHQgKyB0aHVtYlNwYWNlICkgKTtcclxuICAgICAgICAgICAgbmV3VGVybSA9IHBhcnNlSW50KCBuZXdUZXJtIC8gdHJhbnNmb3JtVW5pdCApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyggXCJuZXcgdGVybSBpc1wiLCBuZXdUZXJtLCB3aW5kb3cuaW5uZXJXaWR0aCApO1xyXG4gICAgICAgICAgICBpZiAoIG5ld1Rlcm0gIT09IHRlcm0gKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUZXJtKCBuZXdUZXJtICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB0aHVtYkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucHJvZHVjdC10aHVtYnMtb25lJyApO1xyXG4gICAgICAgICAgICBpZiAoIHByb2R1Y3QucGljdHVyZXMubGVuZ3RoIDw9IG5ld1Rlcm0gKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGh1bWJDb250YWluZXIucXVlcnlTZWxlY3RvciggJy5wcm9kdWN0LXRodW1icycgKS5zdHlsZS50b3AgPSAwO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFRvcCA9IHBhcnNlSW50KCB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSggdGh1bWJDb250YWluZXIucXVlcnlTZWxlY3RvciggJy5wcm9kdWN0LXRodW1icycgKSApLmdldFByb3BlcnR5VmFsdWUoICd0b3AnICkgKTtcclxuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSBjdXJyZW50VG9wICsgdHJhbnNmb3JtVW5pdCAqIHByb2R1Y3QucGljdHVyZXMubGVuZ3RoIC0gdGh1bWJTcGFjZTtcclxuICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gd3JhcHBlckhlaWdodCAtIG9mZnNldDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoICggaW5kZXggPiBuZXdUZXJtIC0gMSB8fCB0ZW1wID49IDAgKSAmJiBwcm9kdWN0LnBpY3R1cmVzLmxlbmd0aCA+IG5ld1Rlcm0gKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGh1bWJDb250YWluZXIucXVlcnlTZWxlY3RvciggJy5wcm9kdWN0LXRodW1icycgKS5zdHlsZS50b3AgPSBjdXJyZW50VG9wICsgdGVtcCArICdweCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAzMDAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXQgdGhlIHRvcCBvbiBjbGlja2luZyBwcmV2XHJcbiAgICBjb25zdCBwcmV2UG9zSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBzZXRQb3MoIHBvcyAtIDEgKTtcclxuICAgICAgICBtb3ZlVGh1bWIoIFwidXBcIiApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNldCB0aGUgdG9wIG9uIGNsaWNraW5nIG5leHRcclxuICAgIGNvbnN0IG5leHRQb3NIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFBvcyggcG9zICsgMSApO1xyXG4gICAgICAgIG1vdmVUaHVtYiggXCJkb3duXCIgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhY3RpdmUgdGhlIHRodW1iIHdoaWNoIGlzIGN1cnJlbnRseSBzZWxlY3RlZFxyXG4gICAgY29uc3QgYWN0aXZlSGFuZGxlciA9ICggZSwgaW5kZXggKSA9PiB7XHJcbiAgICAgICAgaWYgKCBwcm9wcy5vbkNoYW5nZUluZGV4ICkge1xyXG4gICAgICAgICAgICBwcm9wcy5vbkNoYW5nZUluZGV4KCBpbmRleCApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYWN0aXZlSXRlbSggaW5kZXggKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC10aHVtYnMtd3JhcCBwcm9kdWN0LXRodW1icy1vbmVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXRodW1ic1wiIGlkPVwicHJvZHVjdC10aHVtYnNcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnBpY3R1cmVzLm1hcCggKCBpdGVtLCBpbmRleCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBgcHJvZHVjdC10aHVtYmAgfSBrZXk9eyBcInRodW1iIC0gXCIgKyBpbmRleCB9IG9uQ2xpY2s9eyAoIGUgKSA9PiBhY3RpdmVIYW5kbGVyKCBlLCBpbmRleCApIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FTU0VUX1VSSSArIGl0ZW0udXJsIH0gYWx0PVwicHJvZHVjdCB0aHVtYm5haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTA5XCIgaGVpZ2h0PVwiMTIyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0aHVtYi11cFwiIG9uQ2xpY2s9eyBwcmV2UG9zSGFuZGxlciB9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWxlZnRcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGh1bWItZG93blwiIG9uQ2xpY2s9eyBuZXh0UG9zSGFuZGxlciB9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IE93bENhcm91c2VsIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9vd2wtY2Fyb3VzZWwnO1xyXG5cclxuaW1wb3J0IHsgbWFpblNsaWRlcjE1IH0gZnJvbSAnfi91dGlscy9kYXRhL2Nhcm91c2VsJztcclxuXHJcbmZ1bmN0aW9uIFRodW1iVHdvICggcHJvcHMgKSB7XHJcbiAgICBjb25zdCB7IHByb2R1Y3QsIGluZGV4ID0gMCB9ID0gcHJvcHM7XHJcbiAgICBsZXQgdGh1bWJzID0gcHJvZHVjdC5waWN0dXJlcztcclxuICAgIGNvbnN0IFsgdGh1bWJSZWYsIHNldFRodW1iUmVmIF0gPSB1c2VTdGF0ZSggbnVsbCApO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGlmICggdGh1bWJSZWYgIT09IG51bGwgJiYgaW5kZXggPj0gMCApIHtcclxuICAgICAgICAgICAgdGh1bWJSZWYuY3VycmVudC4kY2FyLnRvKCBpbmRleCwgMzAwLCB0cnVlICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucHJvZHVjdC10aHVtYnMnICkgKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnByb2R1Y3QtdGh1bWJzIC5vd2wtc3RhZ2UnICkucXVlcnlTZWxlY3RvciggJy5wcm9kdWN0LXRodW1iLmFjdGl2ZScgKSAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnByb2R1Y3QtdGh1bWJzIC5vd2wtc3RhZ2UnICkucXVlcnlTZWxlY3RvciggJy5wcm9kdWN0LXRodW1iLmFjdGl2ZScgKS5jbGFzc0xpc3QucmVtb3ZlKCAnYWN0aXZlJyApO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5wcm9kdWN0LXRodW1icyAub3dsLXN0YWdlJyApLnF1ZXJ5U2VsZWN0b3JBbGwoICcub3dsLWl0ZW0nIClbIGluZGV4IF0gJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5wcm9kdWN0LXRodW1icyAub3dsLXN0YWdlJyApLnF1ZXJ5U2VsZWN0b3JBbGwoICcub3dsLWl0ZW0nIClbIGluZGV4IF0gJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5wcm9kdWN0LXRodW1icyAub3dsLXN0YWdlJyApLnF1ZXJ5U2VsZWN0b3JBbGwoICcub3dsLWl0ZW0nIClbIGluZGV4IF0ucXVlcnlTZWxlY3RvciggJy5wcm9kdWN0LXRodW1iJyApLmNsYXNzTGlzdC5hZGQoICdhY3RpdmUnICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbIGluZGV4IF0gKVxyXG5cclxuICAgIGNvbnN0IHRodW1iQWN0aXZlSGFuZGxlciA9ICggZSwgdGh1bWJJbmRleCApID0+IHtcclxuICAgICAgICBwcm9wcy5vbkNoYW5nZUluZGV4KCB0aHVtYkluZGV4ICk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5wcm9kdWN0LXRodW1icycgKSAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnByb2R1Y3QtdGh1bWJzIC5vd2wtc3RhZ2UnICkucXVlcnlTZWxlY3RvciggJy5wcm9kdWN0LXRodW1iLmFjdGl2ZScgKS5jbGFzc0xpc3QucmVtb3ZlKCAnYWN0aXZlJyApO1xyXG4gICAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCAnYWN0aXZlJyApO1xyXG4gICAgICAgIC8vIHdpbmRvdy5qUXVlcnkoICcucXVpY2t2aWV3LW1vZGFsIC5wcm9kdWN0LXNpbmdsZS1jYXJvdXNlbCcgKS50cmlnZ2VyKCAndG8ub3dsLmNhcm91c2VsJywgWyB0aHVtYkluZGV4LCAxMDAsIHRydWUgXSApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVJlZkhhbmRsZXIgPSAoIGNhclJlZiApID0+IHtcclxuICAgICAgICBpZiAoIGNhclJlZi5jdXJyZW50ICE9PSB1bmRlZmluZWQgJiYgdGh1bWJSZWYgPT09IG51bGwgKSB7XHJcbiAgICAgICAgICAgIHNldFRodW1iUmVmKCBjYXJSZWYgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtdGh1bWJzLXdyYXAgcHJvZHVjdC10aHVtYnMtdHdvXCI+XHJcbiAgICAgICAgICAgIDxPd2xDYXJvdXNlbCBhZENsYXNzPVwicHJvZHVjdC10aHVtYnMgcHJvZHVjdC10aHVtYi1jYXJvdXNlbFwiIG9wdGlvbnM9eyBtYWluU2xpZGVyMTUgfSBvbkNoYW5nZVJlZj17IGNoYW5nZVJlZkhhbmRsZXIgfT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHVtYnMubWFwKCAoIHRodW1iLCBpbmRleCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBgcHJvZHVjdC10aHVtYiAkeyBpbmRleCA9PT0gMCA/ICdhY3RpdmUnIDogJycgfWAgfSBvbkNsaWNrPXsgKCBlICkgPT4geyB0aHVtYkFjdGl2ZUhhbmRsZXIoIGUsIGluZGV4ICkgfSB9IGtleT17IHRodW1iICsgJy0yLScgKyBpbmRleCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BU1NFVF9VUkkgKyB0aHVtYi51cmwgfSBhbHQ9XCJwcm9kdWN0IHRodW1ibmFpbFwiIHdpZHRoPVwiMTM3XCIgaGVpZ2h0PVwiMTM3XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvT3dsQ2Fyb3VzZWw+XHJcbiAgICAgICAgPC9kaXYgPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKCBUaHVtYlR3byApOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XHJcbmltcG9ydCBIZWxtZXQgZnJvbSAncmVhY3QtaGVsbWV0JztcclxuaW1wb3J0IGltYWdlc0xvYWRlZCBmcm9tICdpbWFnZXNsb2FkZWQnO1xyXG5cclxuaW1wb3J0IHdpdGhBcG9sbG8gZnJvbSAnfi9zZXJ2ZXIvYXBvbGxvJztcclxuaW1wb3J0IHsgR0VUX1BST0RVQ1QgfSBmcm9tICd+L3NlcnZlci9xdWVyaWVzJztcclxuXHJcbmltcG9ydCBPd2xDYXJvdXNlbCBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvb3dsLWNhcm91c2VsJztcclxuXHJcbmltcG9ydCBNZWRpYU9uZSBmcm9tICd+L2NvbXBvbmVudHMvcGFydGlhbHMvcHJvZHVjdC9tZWRpYS9tZWRpYS1vbmUnO1xyXG5pbXBvcnQgRGV0YWlsT25lIGZyb20gJ34vY29tcG9uZW50cy9wYXJ0aWFscy9wcm9kdWN0L2RldGFpbC9kZXRhaWwtb25lJztcclxuaW1wb3J0IERlc2NPbmUgZnJvbSAnfi9jb21wb25lbnRzL3BhcnRpYWxzL3Byb2R1Y3QvZGVzYy9kZXNjLW9uZSc7XHJcbmltcG9ydCBSZWxhdGVkUHJvZHVjdHMgZnJvbSAnfi9jb21wb25lbnRzL3BhcnRpYWxzL3Byb2R1Y3QvcmVsYXRlZC1wcm9kdWN0cyc7XHJcblxyXG5pbXBvcnQgeyBtYWluU2xpZGVyMTcgfSBmcm9tICd+L3V0aWxzL2RhdGEvY2Fyb3VzZWwnO1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdERlZmF1bHQoKSB7XHJcbiAgICBjb25zdCBzbHVnID0gdXNlUm91dGVyKCkucXVlcnkuc2x1ZztcclxuICAgIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5KEdFVF9QUk9EVUNULCB7IHZhcmlhYmxlczogeyBzbHVnIH0gfSk7XHJcbiAgICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkaW5nU3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgcHJvZHVjdCA9IGRhdGEgJiYgZGF0YS5wcm9kdWN0LmRhdGE7XHJcbiAgICBjb25zdCByZWxhdGVkID0gZGF0YSAmJiBkYXRhLnByb2R1Y3QucmVsYXRlZDtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghbG9hZGluZyAmJiBwcm9kdWN0KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInByb2R1Y3QgZ290XCIsIHByb2R1Y3QpXHJcbiAgICAgICAgaW1hZ2VzTG9hZGVkKCdtYWluJykub24oJ2RvbmUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW1hZ2VzIGxvYWRpbmdcIilcclxuICAgICAgICAgICAgc2V0TG9hZGluZ1N0YXRlKHRydWUpO1xyXG4gICAgICAgIH0pLm9uKCdwcm9ncmVzcycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbWFnZXMgbG9hZGVkXCIpXHJcbiAgICAgICAgICAgIHNldExvYWRpbmdTdGF0ZShmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGxvYWRpbmcpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJvZHVjdCBsb2FkaW5nXCIpXHJcbiAgICAgICAgc2V0TG9hZGluZ1N0YXRlKGZhbHNlKVxyXG4gICAgfSwgW2xvYWRpbmcsIHByb2R1Y3RdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpbiBtdC02IHNpbmdsZS1wcm9kdWN0XCI+XHJcbiAgICAgICAgICAgIDxIZWxtZXQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+NGlvZGUgUmVhY3QgZUNvbW1lcmNlIFRlbXBsYXRlIHwgUHJvZHVjdCBEZWZhdWx0PC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWxtZXQ+XHJcblxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZC1ub25lXCI+UmlvZGUgUmVhY3QgZUNvbW1lcmNlIFRlbXBsYXRlIC0gUHJvZHVjdCBEZWZhdWx0PC9oMT5cclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QgIT09IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BwYWdlLWNvbnRlbnQgbWItMTAgcGItNiAke2xvYWRlZCA/ICcnIDogJ2Qtbm9uZSd9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciB2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0IHByb2R1Y3Qtc2luZ2xlIHJvdyBtYi03XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBzdGlja3ktc2lkZWJhci13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZWRpYU9uZSBwcm9kdWN0PXtwcm9kdWN0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZXRhaWxPbmUgZGF0YT17ZGF0YX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZXNjT25lIHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbGF0ZWRQcm9kdWN0cyBwcm9kdWN0cz17cmVsYXRlZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsb2FkZWQgJiYgIWxvYWRpbmcgPyAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrZWxldG9uLWJvZHkgY29udGFpbmVyIG1iLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgcGctdmVydGljYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrZWwtcHJvLWdhbGxlcnlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrZWwtcHJvLXN1bW1hcnlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tlbC1wcm8tdGFic1wiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB0LTMgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5SZWxhdGVkIFByb2R1Y3RzPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3dsQ2Fyb3VzZWwgYWRDbGFzcz1cIm93bC1jYXJvdXNlbCBvd2wtdGhlbWUgb3dsLW5hdi1mdWxsXCIgb3B0aW9ucz17bWFpblNsaWRlcjE3fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsxLCAyLCAzLCA0LCA1LCA2XS5tYXAoKGl0ZW0pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtbG9hZGluZy1vdmVybGF5XCIga2V5PXsncG9wdXAtc2tlbC0nICsgaXRlbX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L093bENhcm91c2VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKHsgc3NyOiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB9KShQcm9kdWN0RGVmYXVsdCk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWJvb3N0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1hZ2VzbG9hZGVkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWFwb2xsb1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvQ29sbGFwc2VcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvdW50ZG93blwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaGVsbWV0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pbWFnZS1saWdodGJveFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaW1hZ2UtbWFnbmlmaWVyc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW93bC1jYXJvdXNlbDJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10YWJzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9