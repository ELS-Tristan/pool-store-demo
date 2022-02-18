exports.id = "components_features_owl-carousel_jsx-components_partials_product_detail_detail-one_jsx-server-22f84c";
exports.ids = ["components_features_owl-carousel_jsx-components_partials_product_detail_detail-one_jsx-server-22f84c"];
exports.modules = {

/***/ "./components/features/countdown.jsx":
/*!*******************************************!*\
  !*** ./components/features/countdown.jsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ProductCountDown; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-countdown */ "react-countdown");
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_countdown__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/tristan/projects/Upsidian/ramset-ecomm/client/components/features/countdown.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ProductCountDown(props) {
  const {
    date = "2021-08-20",
    type = 1,
    adClass = ''
  } = props;

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed
  }) => {
    if (completed) {
      return __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 20
        }
      }, "Product Selling Finished!");
    } else {
      return type === 1 ? __jsx("div", {
        className: `countdown ${adClass}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "countdown-row countdown-show4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 25
        }
      }, __jsx("span", {
        className: "countdown-section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 29
        }
      }, __jsx("span", {
        className: "countdown-amount",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 33
        }
      }, (0,react_countdown__WEBPACK_IMPORTED_MODULE_1__.zeroPad)(days)), __jsx("span", {
        className: "countdown-period",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 33
        }
      }, "DAYS")), __jsx("span", {
        className: "countdown-section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 29
        }
      }, __jsx("span", {
        className: "countdown-amount",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 33
        }
      }, (0,react_countdown__WEBPACK_IMPORTED_MODULE_1__.zeroPad)(hours)), __jsx("span", {
        className: "countdown-period",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 33
        }
      }, "HOURS")), __jsx("span", {
        className: "countdown-section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 29
        }
      }, __jsx("span", {
        className: "countdown-amount",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 33
        }
      }, (0,react_countdown__WEBPACK_IMPORTED_MODULE_1__.zeroPad)(minutes)), __jsx("span", {
        className: "countdown-period",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 33
        }
      }, "MINUTES")), __jsx("span", {
        className: "countdown-section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 29
        }
      }, __jsx("span", {
        className: "countdown-amount",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 33
        }
      }, (0,react_countdown__WEBPACK_IMPORTED_MODULE_1__.zeroPad)(seconds)), __jsx("span", {
        className: "countdown-period",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 33
        }
      }, "SECONDS")))) : __jsx("div", {
        className: "product-countdown-container font-weight-semi-bold",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }
      }, __jsx("span", {
        className: "product-countdown-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 25
        }
      }, "Offer Ends In:\xA0"), __jsx("div", {
        className: "product-countdown countdown-compact",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 25
        }
      }, __jsx("span", {
        className: "countdown-section days",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 29
        }
      }, __jsx("span", {
        className: "countdown-amount",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 33
        }
      }, (0,react_countdown__WEBPACK_IMPORTED_MODULE_1__.zeroPad)(days), " "), __jsx("span", {
        className: "countdown-period",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 33
        }
      }, "days,\xA0")), __jsx("span", {
        className: "countdown-section hours",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 29
        }
      }, __jsx("span", {
        className: "countdown-amount",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 33
        }
      }, (0,react_countdown__WEBPACK_IMPORTED_MODULE_1__.zeroPad)(hours), __jsx("span", {
        className: "mr-1 ml-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 88
        }
      }, ":"))), __jsx("span", {
        className: "countdown-section minutes",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 29
        }
      }, __jsx("span", {
        className: "countdown-amount",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 33
        }
      }, (0,react_countdown__WEBPACK_IMPORTED_MODULE_1__.zeroPad)(minutes), __jsx("span", {
        className: "mr-1 ml-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 90
        }
      }, ":"))), __jsx("span", {
        className: "countdown-section seconds",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 29
        }
      }, __jsx("span", {
        className: "countdown-amount",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 33
        }
      }, (0,react_countdown__WEBPACK_IMPORTED_MODULE_1__.zeroPad)(seconds)))));
    }
  };

  return __jsx((react_countdown__WEBPACK_IMPORTED_MODULE_1___default()), {
    date: new Date(date),
    renderer: renderer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  });
}

/***/ }),

/***/ "./components/features/custom-link.jsx":
/*!*********************************************!*\
  !*** ./components/features/custom-link.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ALink; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/utils */ "./utils/index.js");
var _jsxFileName = "/home/tristan/projects/Upsidian/ramset-ecomm/client/components/features/custom-link.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function ALink(_ref) {
  let {
    children,
    className,
    content,
    style
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className", "content", "style"]);

  const preventDefault = e => {
    if (props.href === '#') {
      e.preventDefault();
    }

    if (props.onClick) {
      props.onClick();
    }
  };

  return content ? __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), _extends({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), __jsx("a", {
    className: className,
    style: style,
    onClick: preventDefault,
    dangerouslySetInnerHTML: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.parseContent)(content),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, children)) : __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), _extends({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }), __jsx("a", {
    className: className,
    style: style,
    onClick: preventDefault,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, children));
}

/***/ }),

/***/ "./components/features/owl-carousel.jsx":
/*!**********************************************!*\
  !*** ./components/features/owl-carousel.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_owl_carousel2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-owl-carousel2 */ "react-owl-carousel2");
/* harmony import */ var react_owl_carousel2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_owl_carousel2__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/tristan/projects/Upsidian/ramset-ecomm/client/components/features/owl-carousel.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

 // let prevPath;

function OwlCarousel(props) {
  const {
    adClass,
    options
  } = props;
  const carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const defaultOptions = {
    items: 1,
    loop: false,
    margin: 0,
    responsiveClass: "true",
    nav: true,
    navText: ['<i class="d-icon-angle-left">', '<i class="d-icon-angle-right">'],
    navElement: "button",
    dots: true,
    smartSpeed: 400,
    autoplay: false,
    autoHeight: false // autoplayTimeout: 5000,

  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (props.onChangeRef) {
      props.onChangeRef(carouselRef);
    }
  }, [carouselRef]);
  let events = {
    onTranslated: function (e) {
      if (!e.target) return;

      if (props.onChangeIndex) {
        props.onChangeIndex(e.item.index);
      }
    }
  };
  events = Object.assign({}, events, props.events);
  let settings = Object.assign({}, defaultOptions, options);
  return props.children ? props.children.length > 0 || props.children && props.children.length === undefined ? __jsx((react_owl_carousel2__WEBPACK_IMPORTED_MODULE_1___default()), {
    ref: carouselRef,
    className: `owl-carousel ${adClass}`,
    options: settings,
    events: events,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, props.children) : "" : "";
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(OwlCarousel));

/***/ }),

/***/ "./components/features/product/common/cart-popup.jsx":
/*!***********************************************************!*\
  !*** ./components/features/product/common/cart-popup.jsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CartPopup; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/features/custom-link */ "./components/features/custom-link.jsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/utils */ "./utils/index.js");
var _jsxFileName = "/home/tristan/projects/Upsidian/ramset-ecomm/client/components/features/product/common/cart-popup.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function CartPopup(props) {
  const {
    product
  } = props;
  return __jsx("div", {
    className: "minipopup-area",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "minipopup-box show",
    style: {
      top: "0"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "minipopup-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, "Successfully added."), __jsx("div", {
    className: "product product-purchased  product-cart mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx("figure", {
    className: "product-media pure-media",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: `/product/default/${product.slug}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "http://localhost1:4000" + product.pictures[0].url,
    alt: "product",
    width: "90",
    height: "90",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: "product-detail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: `/product/default/${product.slug}`,
    className: "product-name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, product.name), __jsx("span", {
    className: "price-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "product-quantity",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 29
    }
  }, product.qty), __jsx("span", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 29
    }
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_2__.toDecimal)(product.price))))), __jsx("div", {
    className: "action-group d-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/pages/cart",
    className: "btn btn-sm btn-outline btn-primary btn-rounded",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, "View Cart"), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/pages/checkout",
    className: "btn btn-sm btn-primary btn-rounded",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, "Check Out"))));
}

/***/ }),

/***/ "./components/features/quantity.jsx":
/*!******************************************!*\
  !*** ./components/features/quantity.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Quantity; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/tristan/projects/Upsidian/ramset-ecomm/client/components/features/quantity.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


function Quantity(_ref) {
  let {
    qty = 1
  } = _ref,
      props = _objectWithoutProperties(_ref, ["qty"]);

  const {
    adClass = 'mr-2 input-group'
  } = props;
  const {
    0: quantity,
    1: setQuantity
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(parseInt(qty));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setQuantity(qty);
  }, [props.product]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    props.onChangeQty && props.onChangeQty(quantity);
  }, [quantity]);

  function minusQuantity() {
    if (quantity > 1) {
      setQuantity(parseInt(quantity) - 1);
    }
  }

  function plusQuantity() {
    if (quantity < props.max) {
      setQuantity(parseInt(quantity) + 1);
    }
  }

  function changeQty(e) {
    let newQty;

    if (e.currentTarget.value !== '') {
      newQty = Math.min(parseInt(e.currentTarget.value), props.max);
      newQty = Math.max(newQty, 1);
      setQuantity(newQty);
    }
  }

  return __jsx("div", {
    className: adClass,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "quantity-minus d-icon-minus",
    onClick: minusQuantity,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }), __jsx("input", {
    className: "quantity form-control",
    type: "number",
    min: "1",
    max: props.max,
    value: quantity,
    onChange: changeQty,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }), __jsx("button", {
    className: "quantity-plus d-icon-plus",
    onClick: plusQuantity,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }));
}

/***/ }),

/***/ "./components/partials/product/detail/detail-one.jsx":
/*!***********************************************************!*\
  !*** ./components/partials/product/detail/detail-one.jsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Collapse */ "react-bootstrap/Collapse");
/* harmony import */ var react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/features/custom-link */ "./components/features/custom-link.jsx");
/* harmony import */ var _components_features_countdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/features/countdown */ "./components/features/countdown.jsx");
/* harmony import */ var _components_features_quantity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/features/quantity */ "./components/features/quantity.jsx");
/* harmony import */ var _components_partials_product_product_nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/components/partials/product/product-nav */ "./components/partials/product/product-nav.jsx");
/* harmony import */ var _store_wishlist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/store/wishlist */ "./store/wishlist.js");
/* harmony import */ var _store_cart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/store/cart */ "./store/cart.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/utils */ "./utils/index.js");
var _jsxFileName = "/home/tristan/projects/Upsidian/ramset-ecomm/client/components/partials/product/detail/detail-one.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function DetailOne(props) {
  let router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    data,
    isStickyCart = false,
    adClass = '',
    isNav = true
  } = props;
  const {
    toggleWishlist,
    addToCart,
    wishlist
  } = props;
  const {
    0: curColor,
    1: setCurColor
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('null');
  const {
    0: curSize,
    1: setCurSize
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('null');
  const {
    0: curIndex,
    1: setCurIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1);
  const {
    0: cartActive,
    1: setCartActive
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: quantity,
    1: setQauntity
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  let product = data && data.product; // decide if the product is wishlisted

  let isWishlisted,
      colors = [],
      sizes = [];
  isWishlisted = wishlist.findIndex(item => item.slug === product.data.slug) > -1 ? true : false;

  if (product.data && product.data.variants.length > 0) {
    if (product.data.variants[0].size) product.data.variants.forEach(item => {
      if (sizes.findIndex(size => size.name === item.size.name) === -1) {
        sizes.push({
          name: item.size.name,
          value: item.size.size
        });
      }
    });

    if (product.data.variants[0].color) {
      product.data.variants.forEach(item => {
        if (colors.findIndex(color => color.name === item.color.name) === -1) colors.push({
          name: item.color.name,
          value: item.color.color
        });
      });
    }
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => {
      setCurIndex(-1);
      resetValueHandler();
    };
  }, [product]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (product.data.variants.length > 0) {
      if (curSize !== 'null' && curColor !== 'null' || curSize === 'null' && product.data.variants[0].size === null && curColor !== 'null' || curColor === 'null' && product.data.variants[0].color === null && curSize !== 'null') {
        setCartActive(true);
        setCurIndex(product.data.variants.findIndex(item => item.size !== null && item.color !== null && item.color.name === curColor && item.size.name === curSize || item.size === null && item.color.name === curColor || item.color === null && item.size.name === curSize));
      } else {
        setCartActive(false);
      }
    } else {
      setCartActive(true);
    }

    if (product.stock === 0) {
      setCartActive(false);
    }
  }, [curColor, curSize, product]);

  const wishlistHandler = e => {
    e.preventDefault();

    if (toggleWishlist && !isWishlisted) {
      let currentTarget = e.currentTarget;
      currentTarget.classList.add('load-more-overlay', 'loading');
      toggleWishlist(product.data);
      setTimeout(() => {
        currentTarget.classList.remove('load-more-overlay', 'loading');
      }, 1000);
    } else {
      router.push('/pages/wishlist');
    }
  };

  const setColorHandler = e => {
    setCurColor(e.target.value);
  };

  const setSizeHandler = e => {
    setCurSize(e.target.value);
  };

  const addToCartHandler = () => {
    if (product.data.stock > 0 && cartActive) {
      if (product.data.variants.length > 0) {
        let tmpName = product.data.name,
            tmpPrice;
        tmpName += curColor !== 'null' ? '-' + curColor : '';
        tmpName += curSize !== 'null' ? '-' + curSize : '';

        if (product.data.price[0] === product.data.price[1]) {
          tmpPrice = product.data.price[0];
        } else if (!product.data.variants[0].price && product.data.discount > 0) {
          tmpPrice = product.data.price[0];
        } else {
          tmpPrice = product.data.variants[curIndex].sale_price ? product.data.variants[curIndex].sale_price : product.data.variants[curIndex].price;
        }

        addToCart(_objectSpread(_objectSpread({}, product.data), {}, {
          name: tmpName,
          qty: quantity,
          price: tmpPrice
        }));
      } else {
        addToCart(_objectSpread(_objectSpread({}, product.data), {}, {
          qty: quantity,
          price: product.data.price[0]
        }));
      }
    }
  };

  const resetValueHandler = e => {
    setCurColor('null');
    setCurSize('null');
  };

  function isDisabled(color, size) {
    if (color === 'null' || size === 'null') return false;

    if (sizes.length === 0) {
      return product.data.variants.findIndex(item => item.color.name === curColor) === -1;
    }

    if (colors.length === 0) {
      return product.data.variants.findIndex(item => item.size.name === curSize) === -1;
    }

    return product.data.variants.findIndex(item => item.color.name === color && item.size.name === size) === -1;
  }

  function changeQty(qty) {
    setQauntity(qty);
  }

  return __jsx("div", {
    className: "product-details " + adClass,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, isNav ? __jsx("div", {
    className: "product-navigation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 21
    }
  }, __jsx("ul", {
    className: "breadcrumb breadcrumb-lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 25
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 29
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 33
    }
  }, __jsx("i", {
    className: "d-icon-home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 49
    }
  }))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 29
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    className: "active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 33
    }
  }, "Products")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 29
    }
  }, "Detail")), __jsx(_components_partials_product_product_nav__WEBPACK_IMPORTED_MODULE_7__.default, {
    product: product,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 25
    }
  })) : '', __jsx("h2", {
    className: "product-name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }
  }, product.data.name), __jsx("div", {
    className: "product-meta",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }
  }, "SKU: ", __jsx("span", {
    className: "product-sku",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 22
    }
  }, product.data.sku), "CATEGORIES: ", __jsx("span", {
    className: "product-brand",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 29
    }
  }, product.data.categories.map((item, index) => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    key: item.name + '-' + index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 29
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: {
      pathname: '/shop',
      query: {
        category: item.slug
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 33
    }
  }, item.name), index < product.data.categories.length - 1 ? ', ' : '')))), __jsx("div", {
    className: "product-price mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 13
    }
  }, product.data.price[0] !== product.data.price[1] ? product.data.variants.length === 0 || product.data.variants.length > 0 && !product.data.variants[0].price ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("ins", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 33
    }
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_10__.toDecimal)(product.data.price[0])), __jsx("del", {
    className: "old-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 33
    }
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_10__.toDecimal)(product.data.price[1]))) : __jsx("del", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 29
    }
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_10__.toDecimal)(product.data.price[0]), " \u2013 $", (0,_utils__WEBPACK_IMPORTED_MODULE_10__.toDecimal)(product.data.price[1])) : __jsx("ins", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 27
    }
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_10__.toDecimal)(product.data.price[0]))), product.data.price[0] !== product.data.price[1] && product.data.variants.length === 0 ? __jsx(_components_features_countdown__WEBPACK_IMPORTED_MODULE_5__.default, {
    type: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 21
    }
  }) : '', __jsx("div", {
    className: "ratings-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "ratings-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "ratings",
    style: {
      width: 20 * product.data.ratings + '%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: "tooltiptext tooltip-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 21
    }
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_10__.toDecimal)(product.data.ratings))), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    className: "rating-reviews",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 17
    }
  }, "( ", product.data.reviews, " reviews )")), __jsx("p", {
    className: "product-short-desc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 13
    }
  }, product.data.short_description), product && product.data.variants.length > 0 ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, product.data.variants[0].color ? __jsx("div", {
    className: "product-form product-variations product-color",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 33
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 37
    }
  }, "Color:"), __jsx("div", {
    className: "select-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 37
    }
  }, __jsx("select", {
    name: "color",
    className: "form-control select-color",
    onChange: setColorHandler,
    value: curColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 41
    }
  }, __jsx("option", {
    value: "null",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 45
    }
  }, "Choose an option"), colors.map(item => !isDisabled(item.name, curSize) ? __jsx("option", {
    value: item.name,
    key: "color-" + item.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 57
    }
  }, item.name) : '')))) : "", product.data.variants[0].size ? __jsx("div", {
    className: "product-form product-variations product-size mb-0 pb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 33
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 37
    }
  }, "Size:"), __jsx("div", {
    className: "product-form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "select-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 41
    }
  }, __jsx("select", {
    name: "size",
    className: "form-control select-size",
    onChange: setSizeHandler,
    value: curSize,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 45
    }
  }, __jsx("option", {
    value: "null",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 49
    }
  }, "Choose an option"), sizes.map(item => !isDisabled(curColor, item.name) ? __jsx("option", {
    value: item.name,
    key: "size-" + item.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 61
    }
  }, item.name) : ''))), __jsx((react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_3___default()), {
    in: 'null' !== curColor || 'null' !== curSize,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "card-wrapper overflow-hidden reset-value-button w-100 mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 45
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    className: "product-variation-clean",
    onClick: resetValueHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 49
    }
  }, "Clean All"))))) : "", __jsx("div", {
    className: "product-variation-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 25
    }
  }, __jsx((react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_3___default()), {
    in: cartActive && curIndex > -1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "card-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 33
    }
  }, curIndex > -1 ? __jsx("div", {
    className: "single-product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 45
    }
  }, product.data.variants[curIndex].price ? product.data.variants[curIndex].sale_price ? __jsx("div", {
    className: "product-price mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 61
    }
  }, __jsx("ins", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 65
    }
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_10__.toDecimal)(product.data.variants[curIndex].sale_price)), __jsx("del", {
    className: "old-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 65
    }
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_10__.toDecimal)(product.data.variants[curIndex].price))) : __jsx("div", {
    className: "product-price mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 63
    }
  }, __jsx("ins", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 65
    }
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_10__.toDecimal)(product.data.variants[curIndex].price))) : "") : '')))) : '', __jsx("hr", {
    className: "product-divider",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 13
    }
  }), isStickyCart ? __jsx("div", {
    className: "sticky-content fix-top product-sticky-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "sticky-product-details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 29
    }
  }, __jsx("figure", {
    className: "product-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 33
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: '/product/default/' + product.data.slug,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: "http://localhost1:4000" + product.data.pictures[0].url,
    width: "90",
    height: "90",
    alt: "Product",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 41
    }
  }))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 33
    }
  }, __jsx("h4", {
    className: "product-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 37
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: '/product/default/' + product.data.slug,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 67
    }
  }, product.data.name)), __jsx("div", {
    className: "product-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "product-price mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 41
    }
  }, curIndex > -1 && product.data.variants[0] ? product.data.variants[curIndex].price ? product.data.variants[curIndex].sale_price ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("ins", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 65
    }
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_10__.toDecimal)(product.data.variants[curIndex].sale_price)), __jsx("del", {
    className: "old-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 65
    }
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_10__.toDecimal)(product.data.variants[curIndex].price))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("ins", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 65
    }
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_10__.toDecimal)(product.data.variants[curIndex].price))) : "" : product.data.price[0] !== product.data.price[1] ? product.data.variants.length === 0 ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("ins", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 65
    }
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_10__.toDecimal)(product.data.price[0])), __jsx("del", {
    className: "old-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 65
    }
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_10__.toDecimal)(product.data.price[1]))) : __jsx("del", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 61
    }
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_10__.toDecimal)(product.data.price[0]), " \u2013 $", (0,_utils__WEBPACK_IMPORTED_MODULE_10__.toDecimal)(product.data.price[1])) : __jsx("ins", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 59
    }
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_10__.toDecimal)(product.data.price[0]))), __jsx("div", {
    className: "ratings-container mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "ratings-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 45
    }
  }, __jsx("span", {
    className: "ratings",
    style: {
      width: 20 * product.data.ratings + '%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 49
    }
  }), __jsx("span", {
    className: "tooltiptext tooltip-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 49
    }
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_10__.toDecimal)(product.data.ratings))), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    className: "rating-reviews",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 45
    }
  }, "( ", product.data.reviews, " reviews )"))))), __jsx("div", {
    className: "product-form product-qty pb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 29
    }
  }, __jsx("label", {
    className: "d-none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 33
    }
  }, "QTY:"), __jsx("div", {
    className: "product-form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 33
    }
  }, __jsx(_components_features_quantity__WEBPACK_IMPORTED_MODULE_6__.default, {
    max: product.data.stock,
    product: product,
    onChangeQty: changeQty,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 37
    }
  }), __jsx("button", {
    className: `btn-product btn-cart text-normal ls-normal font-weight-semi-bold ${cartActive ? '' : 'disabled'}`,
    onClick: addToCartHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "d-icon-bag",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 183
    }
  }), "Add to Cart"))))) : __jsx("div", {
    className: "product-form product-qty pb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 21
    }
  }, __jsx("label", {
    className: "d-none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 25
    }
  }, "QTY:"), __jsx("div", {
    className: "product-form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 25
    }
  }, __jsx(_components_features_quantity__WEBPACK_IMPORTED_MODULE_6__.default, {
    max: product.data.stock,
    product: product,
    onChangeQty: changeQty,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 29
    }
  }), __jsx("button", {
    className: `btn-product btn-cart text-normal ls-normal font-weight-semi-bold ${cartActive ? '' : 'disabled'}`,
    onClick: addToCartHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 29
    }
  }, __jsx("i", {
    className: "d-icon-bag",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 175
    }
  }), "Add to Cart"))), __jsx("hr", {
    className: "product-divider mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "product-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "social-links mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 17
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    className: "social-link social-facebook fab fa-facebook-f",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 21
    }
  }), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    className: "social-link social-twitter fab fa-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 21
    }
  }), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    className: "social-link social-pinterest fab fa-pinterest-p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 21
    }
  })), " ", __jsx("span", {
    className: "divider d-lg-show",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 24
    }
  }), " ", __jsx("a", {
    href: "#",
    className: `btn-product btn-wishlist`,
    title: isWishlisted ? 'Browse wishlist' : 'Add to wishlist',
    onClick: wishlistHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 68
    }
  }, __jsx("i", {
    className: isWishlisted ? "d-icon-heart-full" : "d-icon-heart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 21
    }
  }), " ", isWishlisted ? 'Browse wishlist' : 'Add to Wishlist')));
}

function mapStateToProps(state) {
  return {
    wishlist: state.wishlist.data ? state.wishlist.data : []
  };
}

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  toggleWishlist: _store_wishlist__WEBPACK_IMPORTED_MODULE_8__.wishlistActions.toggleWishlist,
  addToCart: _store_cart__WEBPACK_IMPORTED_MODULE_9__.cartActions.addToCart
})(DetailOne));

/***/ }),

/***/ "./components/partials/product/product-nav.jsx":
/*!*****************************************************!*\
  !*** ./components/partials/product/product-nav.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ProductNav; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/features/custom-link */ "./components/features/custom-link.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/tristan/projects/Upsidian/ramset-ecomm/client/components/partials/product/product-nav.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


function ProductNav(props) {
  const {
    product
  } = props;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  return __jsx("ul", {
    className: "product-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, product.prev ? __jsx("li", {
    className: `product-nav-${product.next ? 'prev' : 'next no-next'}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: {
      pathname: router.pathname,
      query: {
        slug: product.prev.slug
      }
    },
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "d-icon-arrow-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 29
    }
  }), " Prev", __jsx("span", {
    className: "product-nav-popup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: "http://localhost1:4000" + product.prev.pictures[0].url,
    alt: "product thumbnail",
    width: "110",
    height: "123",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 33
    }
  }), __jsx("span", {
    className: "product-name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 33
    }
  }, product.prev.name)))) : "", product.next ? __jsx("li", {
    className: "product-nav-next",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: {
      pathname: router.pathname,
      query: {
        slug: product.next.slug
      }
    },
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, "Next ", __jsx("i", {
    className: "d-icon-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 34
    }
  }), __jsx("span", {
    className: "product-nav-popup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "http://localhost1:4000" + product.next.pictures[0].url,
    alt: "product thumbnail",
    width: "110",
    height: "123",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 33
    }
  }), __jsx("span", {
    className: "product-name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 33
    }
  }, product.next.name)))) : "");
}

/***/ }),

/***/ "./server/apollo.js":
/*!**************************!*\
  !*** ./server/apollo.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-apollo */ "next-apollo");
/* harmony import */ var next_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_1__);


const API_URI = `${"http://localhost1:4000"}/graphql`;
console.log("API_URI");
console.log(API_URI);
const apolloClient = new (apollo_boost__WEBPACK_IMPORTED_MODULE_1___default())({
  uri: API_URI,
  cache: new apollo_boost__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache()
});
/* harmony default export */ __webpack_exports__["default"] = ((0,next_apollo__WEBPACK_IMPORTED_MODULE_0__.withApollo)(apolloClient));

/***/ }),

/***/ "./server/queries.js":
/*!***************************!*\
  !*** ./server/queries.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentDemo": function() { return /* binding */ currentDemo; },
/* harmony export */   "GET_PRODUCTS": function() { return /* binding */ GET_PRODUCTS; },
/* harmony export */   "GET_SPECIAL_PRODUCTS": function() { return /* binding */ GET_SPECIAL_PRODUCTS; },
/* harmony export */   "GET_PRODUCT": function() { return /* binding */ GET_PRODUCT; },
/* harmony export */   "GET_VIDEO": function() { return /* binding */ GET_VIDEO; },
/* harmony export */   "GET_SHOP_SIDEBAR_DATA": function() { return /* binding */ GET_SHOP_SIDEBAR_DATA; },
/* harmony export */   "GET_POSTS": function() { return /* binding */ GET_POSTS; },
/* harmony export */   "GET_POST": function() { return /* binding */ GET_POST; },
/* harmony export */   "GET_POST_SIDEBAR_DATA": function() { return /* binding */ GET_POST_SIDEBAR_DATA; },
/* harmony export */   "GET_HOME_DATA": function() { return /* binding */ GET_HOME_DATA; }
/* harmony export */ });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const currentDemo = `"1"`;
const PRODUCT_SIMPLE = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    fragment ProductSimple on Product {
        name
        slug
        price
        ratings
        reviews
        stock
        short_description
        is_featured
        is_new
        until
        discount
        pictures {
            url
            width
            height
        }
        small_pictures {
            url
            width
            height
        }
        categories {
            name
            slug
        }
        variants {
            price
            sale_price
        }
    }
`;
const PRODUCT_SMALL = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    fragment ProductSmall on Product {
        id
        name
        slug
        price
        ratings
        pictures {
            url
            width
            height
        }
        small_pictures {
            url
            width
            height
        }
        variants {
            price
            sale_price
        }
    }
`;
const GET_PRODUCTS = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query products($search: String, $colors: [String], $sizes: [String], $brands: [String], $min_price: Int, $max_price: Int, $category: String, $tag: String, $sortBy: String, $from: Int, $to: Int, $list: Boolean = false) {
        products(demo: ${currentDemo}, search: $search, colors: $colors, sizes: $sizes, brands: $brands, min_price: $min_price, max_price: $max_price, category: $category, tag: $tag, sortBy: $sortBy, from: $from, to: $to ) {
            data {
                short_description @include(if: $list)
                ...ProductSimple

            }
            total
        }
    }
    ${PRODUCT_SIMPLE}
`;
const GET_SPECIAL_PRODUCTS = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query specialProducts($featured: Boolean = false, $bestSelling: Boolean = false, $topRated: Boolean = false, $onSale: Boolean = false, $count: Int) {
        specialProducts(demo: ${currentDemo}, featured: $featured, bestSelling: $bestSelling, topRated: $topRated, onSale: $onSale, count: $count) {
            featured @include(if: $featured) {
                ...ProductSmall
            }
            bestSelling @include(if: $bestSelling) {
                ...ProductSmall
            }
            topRated @include(if: $topRated) {
                ...ProductSmall
            }
            latest @include(if: $latest) {
                ...ProductSmall
            }
        }
    }
    ${PRODUCT_SMALL}
`;
const GET_PRODUCT = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query product($slug: String!, $onlyData: Boolean = false) {
        product(demo: ${currentDemo}, slug: $slug, onlyData: $onlyData) {
            data {
                id
                slug
                name
                price
                discount
                short_description
                sku
                stock
                ratings
                reviews
                sale_count
                is_new
                is_top
                until
                pictures {
                    url
                    width
                    height
                }
                small_pictures {
                    url
                    width
                    height
                }
                large_pictures {
                    url
                    width
                    height
                }
                categories {
                    name
                    slug
                }
                tags {
                    name
                    slug
                }
                brands {
                    name
                    slug
                }
                variants {
                    price
                    sale_price
                    color {
                        name
                        color
                        thumb {
                            url
                            width
                            height
                        }
                    }
                    size {
                        name
                        size
                        thumb {
                            url
                            width
                            height
                        }
                    }
                }
            }
            prev @skip(if: $onlyData) {
                slug
                name
                pictures {
                    url
                    width
                    height
                }
            }
            next @skip(if: $onlyData) {
                slug
                name
                pictures {
                    url
                    width
                    height
                }
            }
            related @skip(if: $onlyData) {
                ...ProductSimple
            }
        }
    }
    ${PRODUCT_SIMPLE}
`;
const GET_VIDEO = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query video($slug: String!) {
        video(demo: ${currentDemo}, slug: $slug) {
            data {
                url
                width
                height
            }
        }
    }
`;
const GET_SHOP_SIDEBAR_DATA = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query shopSidebarData($featured: Boolean = false) {
        shopSidebarData(demo: ${currentDemo}, featured: $featured) {
            categories {
                name
                slug
                children {
                    name
                    slug
                }
            }
            featured @include(if: $featured) {
                slug
                name
                price
                ratings
                reviews
                pictures {
                    url
                    width
                    height
                }
                variants {
                    price
                }
            }
        }
    }
`;
const GET_POSTS = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query posts($category: String, $from: Int, $to: Int, $categories: [String]) {
        posts(demo: ${currentDemo}, category: $category, from: $from, to: $to, categories: $categories ) {
            data {
                title
                slug
                date
                comments
                content
                type
                author
                large_picture {
                    url
                    width
                    height
                }
                picture {
                    url
                    width
                    height
                }
                small_picture {
                    url
                    width
                    height
                }
                video {
                    url
                    width
                    height
                }
            }
            total
        }
    }
`;
const GET_POST = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query post($slug: String!) {
        post(demo: ${currentDemo}, slug: $slug) {
            data {
                title
                slug
                author
                date
                comments
                content
                type
                large_picture {
                    url
                    width
                    height
                }
                picture {
                    url
                    width
                    height
                }
                video {
                    url
                    width
                    height
                }
                categories {
                    name
                    slug
                }
            }
            related {
                title
                slug
                date
                type
                comments
                content
                picture {
                    url
                    width
                    height
                }
                video {
                    url
                    width
                    height
                }
            }
        }
    }
`;
const GET_POST_SIDEBAR_DATA = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query postSidbarData {
        postSidebarData(demo: ${currentDemo}) {
            categories {
                name
                slug
            }
            recent {
                title
                slug
                date
                small_picture {
                    url
                    width
                    height
                }
            }
        }
    }
`;
const GET_HOME_DATA = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query indexData($productsCount: Int, $postsCount: Int) {
        specialProducts(demo: ${currentDemo}, featured: true, bestSelling: true, topRated: true, latest: true, onSale: true, count: $productsCount) {
            featured {
                ...ProductSimple
            }
            bestSelling {
                ...ProductSimple
            }
            topRated {
                ...ProductSimple
            }
            latest {
                ...ProductSimple
            }
            onSale {
                ...ProductSimple
            }
        }
        posts(demo: ${currentDemo}, to: $postsCount) {
            data {
                title
                slug
                date
                type
                comments
                content
                picture {
                    url
                    width
                    height
                }
                video {
                    url
                    width
                    height
                }
                large_picture {
                    url
                    width
                    height
                }
            }
        }
    }
    ${PRODUCT_SIMPLE}
`;

/***/ }),

/***/ "./store/cart.js":
/*!***********************!*\
  !*** ./store/cart.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cartActions": function() { return /* binding */ cartActions; },
/* harmony export */   "cartSaga": function() { return /* binding */ cartSaga; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_features_product_common_cart_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/features/product/common/cart-popup */ "./components/features/product/common/cart-popup.jsx");
var _jsxFileName = "/home/tristan/projects/Upsidian/ramset-ecomm/client/store/cart.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_CART: 'UPDATE_CART',
  REFRESH_STORE: 'REFRESH_STORE'
};
const initialState = {
  data: []
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      let tmpProduct = _objectSpread({}, action.payload.product);

      if (state.data.findIndex(item => item.name === action.payload.product.name) > -1) {
        let tmpData = state.data.reduce((acc, cur) => {
          if (cur.name === tmpProduct.name) {
            acc.push(_objectSpread(_objectSpread({}, cur), {}, {
              qty: parseInt(cur.qty) + parseInt(tmpProduct.qty)
            }));
          } else {
            acc.push(cur);
          }

          return acc;
        }, []);
        return _objectSpread(_objectSpread({}, state), {}, {
          data: tmpData
        });
      } else {
        return _objectSpread(_objectSpread({}, state), {}, {
          data: [...state.data, tmpProduct]
        });
      }

    case actionTypes.REMOVE_FROM_CART:
      let cart = state.data.reduce((cartAcc, product) => {
        if (product.name !== action.payload.product.name) {
          cartAcc.push(product);
        }

        return cartAcc;
      }, []);
      return _objectSpread(_objectSpread({}, state), {}, {
        data: cart
      });

    case actionTypes.UPDATE_CART:
      return _objectSpread(_objectSpread({}, state), {}, {
        data: action.payload.products
      });

    case actionTypes.REFRESH_STORE:
      return initialState;

    default:
      return state;
  }
}

const cartActions = {
  addToCart: product => ({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product
    }
  }),
  removeFromCart: product => ({
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      product
    }
  }),
  updateCart: products => ({
    type: actionTypes.UPDATE_CART,
    payload: {
      products
    }
  })
};
function* cartSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_4__.takeEvery)(actionTypes.ADD_TO_CART, function* saga(e) {
    (0,react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast)(__jsx(_components_features_product_common_cart_popup__WEBPACK_IMPORTED_MODULE_5__.default, {
      product: e.payload.product,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 16
      }
    }));
  });
}
const persistConfig = {
  keyPrefix: "riode-",
  key: "cart",
  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default())
};
/* harmony default export */ __webpack_exports__["default"] = ((0,redux_persist__WEBPACK_IMPORTED_MODULE_1__.persistReducer)(persistConfig, cartReducer));

/***/ }),

/***/ "./store/modal.js":
/*!************************!*\
  !*** ./store/modal.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modalActions": function() { return /* binding */ modalActions; }
/* harmony export */ });
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const actionTypes = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  OPEN_QUICKVIEW: 'OPEN_QUICKVIEW',
  CLOSE_QUICKVIEW: 'CLOSE_QUICKVIEW',
  REFRESH_STORE: 'REFRESH_STORE'
};
const initialState = {
  type: 'video',
  openModal: false,
  quickview: false,
  singleSlug: ''
};

function modalReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.OPEN_QUICKVIEW:
      return _objectSpread(_objectSpread({}, state), {}, {
        quickview: true,
        singleSlug: action.payload.slug
      });

    case actionTypes.CLOSE_QUICKVIEW:
      return _objectSpread(_objectSpread({}, state), {}, {
        quickview: false
      });

    case actionTypes.OPEN_MODAL:
      return _objectSpread(_objectSpread({}, state), {}, {
        singleSlug: action.payload.slug,
        openModal: true
      });

    case actionTypes.CLOSE_MODAL:
      return _objectSpread(_objectSpread({}, state), {}, {
        openModal: false
      });

    case actionTypes.REFRESH_STORE:
      return initialState;

    default:
      return state;
  }
}

const modalActions = {
  openModal: slug => ({
    type: actionTypes.OPEN_MODAL,
    payload: {
      slug
    }
  }),
  closeModal: modalType => ({
    type: actionTypes.CLOSE_MODAL,
    payload: {
      modalType
    }
  }),
  openQuickview: slug => ({
    type: actionTypes.OPEN_QUICKVIEW,
    payload: {
      slug
    }
  }),
  closeQuickview: () => ({
    type: actionTypes.CLOSE_QUICKVIEW
  })
};
const persistConfig = {
  keyPrefix: "riode-",
  key: "modal",
  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1___default())
};
/* harmony default export */ __webpack_exports__["default"] = ((0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistReducer)(persistConfig, modalReducer));

/***/ }),

/***/ "./store/wishlist.js":
/*!***************************!*\
  !*** ./store/wishlist.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wishlistActions": function() { return /* binding */ wishlistActions; }
/* harmony export */ });
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const actionTypes = {
  TOGGLE_WISHLIST: 'TOGGLE_WISHLIST',
  REMOVE_FROM_WISHLIST: 'REMOVE_FROM_WISHLIST',
  REFRESH_STORE: 'REFRESH_STORE'
};
const initialState = {
  data: []
};

function wishlistReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_WISHLIST:
      let index = state.data.findIndex(item => item.name === action.payload.product.name);
      let tmpData = [...state.data];

      if (index === -1) {
        tmpData.push(action.payload.product);
      } else {
        tmpData.splice(index);
      }

      return _objectSpread(_objectSpread({}, state), {}, {
        data: tmpData
      });

    case actionTypes.REMOVE_FROM_WISHLIST:
      let wishlist = state.data.reduce((wishlistAcc, product) => {
        if (product.name !== action.payload.product.name) {
          wishlistAcc.push(product);
        }

        return wishlistAcc;
      }, []);
      return _objectSpread(_objectSpread({}, state), {}, {
        data: wishlist
      });

    case actionTypes.REFRESH_STORE:
      return initialState;

    default:
  }

  return state;
}

const wishlistActions = {
  toggleWishlist: product => ({
    type: actionTypes.TOGGLE_WISHLIST,
    payload: {
      product
    }
  }),
  removeFromWishlist: product => ({
    type: actionTypes.REMOVE_FROM_WISHLIST,
    payload: {
      product
    }
  })
};
const persistConfig = {
  keyPrefix: "riode-",
  key: "wishlist",
  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1___default())
};
/* harmony default export */ __webpack_exports__["default"] = ((0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistReducer)(persistConfig, wishlistReducer));

/***/ }),

/***/ "./utils/data/carousel.js":
/*!********************************!*\
  !*** ./utils/data/carousel.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainSlider1": function() { return /* binding */ mainSlider1; },
/* harmony export */   "mainSlider2": function() { return /* binding */ mainSlider2; },
/* harmony export */   "mainSlider3": function() { return /* binding */ mainSlider3; },
/* harmony export */   "mainSlider4": function() { return /* binding */ mainSlider4; },
/* harmony export */   "mainSlider5": function() { return /* binding */ mainSlider5; },
/* harmony export */   "mainSlider6": function() { return /* binding */ mainSlider6; },
/* harmony export */   "mainSlider7": function() { return /* binding */ mainSlider7; },
/* harmony export */   "mainSlider8": function() { return /* binding */ mainSlider8; },
/* harmony export */   "mainSlider9": function() { return /* binding */ mainSlider9; },
/* harmony export */   "mainSlider10": function() { return /* binding */ mainSlider10; },
/* harmony export */   "mainSlider11": function() { return /* binding */ mainSlider11; },
/* harmony export */   "mainSlider12": function() { return /* binding */ mainSlider12; },
/* harmony export */   "mainSlider13": function() { return /* binding */ mainSlider13; },
/* harmony export */   "mainSlider14": function() { return /* binding */ mainSlider14; },
/* harmony export */   "mainSlider15": function() { return /* binding */ mainSlider15; },
/* harmony export */   "mainSlider16": function() { return /* binding */ mainSlider16; },
/* harmony export */   "mainSlider17": function() { return /* binding */ mainSlider17; },
/* harmony export */   "mainSlider18": function() { return /* binding */ mainSlider18; },
/* harmony export */   "mainSlider19": function() { return /* binding */ mainSlider19; },
/* harmony export */   "mainSlider20": function() { return /* binding */ mainSlider20; },
/* harmony export */   "introSlider": function() { return /* binding */ introSlider; },
/* harmony export */   "serviceSlider": function() { return /* binding */ serviceSlider; },
/* harmony export */   "brandSlider": function() { return /* binding */ brandSlider; },
/* harmony export */   "productSlider": function() { return /* binding */ productSlider; },
/* harmony export */   "productSlider2": function() { return /* binding */ productSlider2; }
/* harmony export */ });
const mainSlider1 = {
  items: 5,
  nav: false,
  loop: false,
  dots: true,
  margin: 2,
  responsive: {
    0: {
      items: 2
    },
    768: {
      items: 3
    },
    992: {
      items: 4
    },
    1200: {
      items: 5,
      dots: false
    }
  }
};
const mainSlider2 = {
  items: 1,
  loop: false,
  nav: true,
  dots: true,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    992: {
      items: 1
    }
  }
};
const mainSlider3 = {
  autoHeight: false,
  dots: false,
  nav: true // dotsContainer: ".product-thumbs"

};
const mainSlider4 = {
  nav: false,
  dots: true,
  items: 1,
  margin: 20,
  loop: false,
  autoPlay: true
};
const mainSlider5 = {
  nav: false,
  dots: true,
  items: 4,
  margin: 20,
  loop: false,
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 2
    },
    768: {
      items: 3
    },
    992: {
      items: 4,
      dots: false
    }
  }
};
const mainSlider6 = {
  nav: false,
  dots: true,
  items: 3,
  margin: 20,
  loop: false,
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 2
    },
    992: {
      items: 3,
      dots: false
    }
  }
};
const mainSlider7 = {
  items: 1,
  nav: true,
  dots: false,
  autoPlay: true,
  loop: false,
  margin: 20
};
const mainSlider8 = {
  items: 6,
  nav: false,
  dots: false,
  margin: 0,
  autoplay: true,
  responsive: {
    0: {
      items: 2
    },
    576: {
      items: 3
    },
    768: {
      items: 4
    },
    992: {
      items: 5
    },
    1200: {
      items: 6
    }
  }
};
const mainSlider9 = {
  items: 5,
  nav: false,
  dots: true,
  margin: 20,
  autoplay: true,
  responsive: {
    0: {
      items: 2
    },
    576: {
      items: 3
    },
    992: {
      items: 4
    },
    1200: {
      items: 5
    }
  }
};
const mainSlider10 = {
  items: 1,
  margin: 20,
  loop: false,
  nav: false,
  dots: true,
  responsive: {
    576: {
      items: 2
    },
    768: {
      items: 3
    }
  }
};
const mainSlider11 = {
  nav: false,
  dots: true,
  loop: false,
  margin: 20,
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 2
    },
    768: {
      items: 3,
      dots: false
    }
  }
};
const mainSlider12 = {
  nav: false,
  dots: true,
  loop: false,
  margin: 20,
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 2
    },
    768: {
      items: 3
    },
    992: {
      items: 4,
      dots: false
    }
  }
};
const mainSlider13 = {
  items: 3,
  margin: 20,
  loop: false,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    992: {
      items: 3,
      dots: false
    }
  }
};
const mainSlider14 = {
  items: 2,
  nav: false,
  dots: true,
  loop: false,
  margin: 20,
  responsive: {
    0: {
      items: 1
    },
    992: {
      items: 2,
      dots: false
    }
  }
};
const mainSlider15 = {
  items: 4,
  nav: true,
  autoHeight: false
};
const mainSlider16 = {
  items: 7,
  nav: false,
  dots: false,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 3000,
  loop: true,
  responsive: {
    0: {
      items: 2
    },
    576: {
      items: 3
    },
    768: {
      items: 4
    },
    992: {
      items: 5
    },
    1200: {
      items: 6
    }
  }
};
const mainSlider17 = {
  loop: false,
  // dots: true,
  nav: false,
  margin: 20,
  responsive: {
    0: {
      items: 2
    },
    768: {
      items: 3
    },
    992: {
      items: 4,
      dots: false,
      nav: false
    }
  } // ,
  // dotsContainer: ".product-thumbs"

};
const mainSlider18 = {
  items: 3,
  loop: false,
  nav: true,
  dots: false,
  margin: 20,
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 2
    },
    768: {
      items: 3
    }
  }
};
const mainSlider19 = {
  nav: false,
  loop: false,
  dots: false,
  autoPlay: false,
  margin: 20,
  responsive: {
    0: {
      items: 2
    },
    768: {
      items: 3
    },
    992: {
      items: 4
    }
  }
};
const mainSlider20 = {
  nav: false,
  dots: true
}; // home page

const introSlider = {
  nav: false,
  dots: true,
  loop: false,
  items: 1,
  autoplay: false
};
const serviceSlider = {
  items: 3,
  nav: false,
  dots: false,
  margin: 0,
  loop: false,
  autoplay: false,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 2
    },
    768: {
      items: 3,
      loop: false
    }
  }
};
const brandSlider = {
  items: 6,
  nav: false,
  dots: false,
  autoplay: true,
  loop: false,
  margin: 20,
  responsive: {
    0: {
      items: 2
    },
    576: {
      items: 3
    },
    768: {
      items: 4
    },
    992: {
      items: 5
    },
    1200: {
      items: 6
    }
  }
};
const productSlider = {
  items: 5,
  nav: false,
  dots: true,
  autoplay: false,
  loop: false,
  margin: 20,
  responsive: {
    0: {
      items: 2
    },
    768: {
      items: 3
    },
    992: {
      items: 4,
      dots: false,
      nav: true
    }
  }
};
const productSlider2 = {
  items: 5,
  nav: false,
  dots: true,
  autoplay: false,
  loop: false,
  margin: 20,
  responsive: {
    0: {
      items: 2
    },
    768: {
      items: 3
    },
    992: {
      items: 4
    },
    1200: {
      items: 5,
      dots: false,
      nav: true
    }
  }
};

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseOptions": function() { return /* binding */ parseOptions; },
/* harmony export */   "isIEBrowser": function() { return /* binding */ isIEBrowser; },
/* harmony export */   "isSafariBrowser": function() { return /* binding */ isSafariBrowser; },
/* harmony export */   "isEdgeBrowser": function() { return /* binding */ isEdgeBrowser; },
/* harmony export */   "findIndex": function() { return /* binding */ findIndex; },
/* harmony export */   "findArrayIndex": function() { return /* binding */ findArrayIndex; },
/* harmony export */   "parseContent": function() { return /* binding */ parseContent; },
/* harmony export */   "stickyHeaderHandler": function() { return /* binding */ stickyHeaderHandler; },
/* harmony export */   "resizeHandler": function() { return /* binding */ resizeHandler; },
/* harmony export */   "stickyFooterHandler": function() { return /* binding */ stickyFooterHandler; },
/* harmony export */   "parallaxHandler": function() { return /* binding */ parallaxHandler; },
/* harmony export */   "showScrollTopHandler": function() { return /* binding */ showScrollTopHandler; },
/* harmony export */   "scrollTopHandler": function() { return /* binding */ scrollTopHandler; },
/* harmony export */   "videoHandler": function() { return /* binding */ videoHandler; },
/* harmony export */   "getTotalPrice": function() { return /* binding */ getTotalPrice; },
/* harmony export */   "getCartCount": function() { return /* binding */ getCartCount; },
/* harmony export */   "toDecimal": function() { return /* binding */ toDecimal; }
/* harmony export */ });
/**
 * utils to parse options string to object
 * @param {string} options 
 * @return {object}
 */
const parseOptions = function (options) {
  if ("string" === typeof options) {
    return JSON.parse(options.replace(/'/g, '"').replace(';', ''));
  }

  return {};
};
/**
 * utils to dectect IE browser
 * @return {bool}
 */

const isIEBrowser = function () {
  let sUsrAg = navigator.userAgent;

  if (sUsrAg.indexOf("Trident") > -1) {
    return true;
  }

  return false;
};
/**
 * utils to detect safari browser
 * @return {bool}
 */

const isSafariBrowser = function () {
  let sUsrAg = navigator.userAgent;
  if (sUsrAg.indexOf('Safari') !== -1 && sUsrAg.indexOf('Chrome') === -1) return true;
  return false;
};
/**
 * utils to detect Edge browser
 * @return {bool}
 */

const isEdgeBrowser = function () {
  let sUsrAg = navigator.userAgent;
  if (sUsrAg.indexOf("Edge") > -1) return true;
  return false;
};
/**
 * utils to find index in array
 * @param {array} array
 * @param {callback} cb
 * @returns {number} index
 */

const findIndex = function (array, cb) {
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i])) {
      return i;
    }
  }

  return -1;
};
/**
 * utils to get the position of the first element of search array in array
 * @param {array} array
 * @param {array} searchArray
 * @param {callback} cb
 * @returns {number} index
 */

const findArrayIndex = function (array, searchArray, cb) {
  for (let i = 0; i < searchArray.length; i++) {
    if (cb(searchArray[i])) {
      return i;
    }
  }

  return -1;
};
/**
 * utils to remove all XSS  attacks potential
 * @param {String} html
 * @return {Object}
 */

const parseContent = html => {
  const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi; //Removing the <script> tags

  while (SCRIPT_REGEX.test(html)) {
    html = html.replace(SCRIPT_REGEX, '');
  } //Removing all events from tags...


  html = html.replace(/ on\w+="[^"]*"/g, '');
  return {
    __html: html
  };
};
/**
 * Apply sticky header
 */

const stickyHeaderHandler = function () {
  let top = document.querySelector('main') ? document.querySelector('main').offsetTop : 300;
  let stickyHeader = document.querySelector('.sticky-header');
  let height = 0;

  if (stickyHeader) {
    height = stickyHeader.offsetHeight;
  }

  if (window.pageYOffset >= top && window.innerWidth >= 992) {
    if (stickyHeader) {
      stickyHeader.classList.add('fixed');

      if (!document.querySelector('.sticky-wrapper')) {
        let newNode = document.createElement("div");
        newNode.className = "sticky-wrapper";
        stickyHeader.parentNode.insertBefore(newNode, stickyHeader);
        document.querySelector('.sticky-wrapper').insertAdjacentElement('beforeend', stickyHeader);
        document.querySelector('.sticky-wrapper').setAttribute("style", "height: " + height + "px");
      }

      if (!document.querySelector('.sticky-wrapper').getAttribute("style")) {
        document.querySelector('.sticky-wrapper').setAttribute("style", "height: " + height + "px");
      }
    }
  } else {
    if (stickyHeader) {
      stickyHeader.classList.remove('fixed');
    }

    if (document.querySelector('.sticky-wrapper')) {
      document.querySelector('.sticky-wrapper').removeAttribute("style");
    }
  }

  if (window.outerWidth >= 992 && document.querySelector('body').classList.contains('right-sidebar-active')) {
    document.querySelector('body').classList.remove('right-sidebar-active');
  }
};
/**
 * Add or remove settings when the window is resized
 */

const resizeHandler = function (width = 992, attri = 'right-sidebar-active') {
  let bodyClasses = document.querySelector("body") && document.querySelector("body").classList;
  bodyClasses = bodyClasses.value.split(' ').filter(item => item !== 'home' && item !== 'loaded');

  for (let i = 0; i < bodyClasses.length; i++) {
    document.querySelector("body") && document.querySelector('body').classList.remove(bodyClasses[i]);
  }
};
/**
 * Apply sticky footer
 */

const stickyFooterHandler = function () {
  let stickyFooter = document.querySelector('.sticky-footer');
  let top = document.querySelector('main') ? document.querySelector('main').offsetTop : 300;
  let height = 0;

  if (stickyFooter) {
    height = stickyFooter.offsetHeight;
  }

  if (window.pageYOffset >= top && window.innerWidth < 768) {
    if (stickyFooter) {
      stickyFooter.classList.add('fixed');

      if (!document.querySelector('.sticky-content-wrapper')) {
        let newNode = document.createElement("div");
        newNode.className = "sticky-content-wrapper";
        stickyFooter.parentNode.insertBefore(newNode, stickyFooter);
        document.querySelector('.sticky-content-wrapper').insertAdjacentElement('beforeend', stickyFooter);
      }

      document.querySelector('.sticky-content-wrapper').setAttribute("style", "height: " + height + "px");
    }
  } else {
    if (stickyFooter) {
      stickyFooter.classList.remove('fixed');
    }

    if (document.querySelector('.sticky-content-wrapper')) {
      document.querySelector('.sticky-content-wrapper').removeAttribute("style");
    }
  }

  if (window.innerWidth > 768 && document.querySelector('.sticky-content-wrapper')) {
    document.querySelector('.sticky-content-wrapper').style.height = 'auto';
  }
};
/**
 * utils to make background parallax
 */

const parallaxHandler = function () {
  let parallaxItems = document.querySelectorAll('.parallax');

  if (parallaxItems) {
    for (let i = 0; i < parallaxItems.length; i++) {
      // calculate background y Position;
      let parallax = parallaxItems[i],
          yPos,
          parallaxSpeed = 1;

      if (parallax.getAttribute('data-option')) {
        parallaxSpeed = parseInt(parseOptions(parallax.getAttribute('data-option')).speed);
      }

      yPos = (parallax.offsetTop - window.pageYOffset) * 50 * parallaxSpeed / parallax.offsetTop + 50;
      parallax.style.backgroundPosition = "50% " + yPos + "%";
    }
  }
};
/**
 * utils to show scrollTop button
 */

const showScrollTopHandler = function () {
  let scrollTop = document.querySelector(".scroll-top");

  if (window.pageYOffset >= 768) {
    scrollTop.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
  }
};
/**
 * utils to scroll to top
 */

function scrollTopHandler(isCustom = true, speed = 15) {
  let offsetTop = 0;

  if (isCustom && !isEdgeBrowser()) {
    if (document.querySelector('.main .container > .row')) {
      offsetTop = document.querySelector('.main .container > .row').getBoundingClientRect().top + window.pageYOffset - document.querySelector('.sticky-header').offsetHeight + 2;
    }
  } else {
    offsetTop = 0;
  }

  if (isSafariBrowser() || isEdgeBrowser()) {
    let pos = window.pageYOffset;
    let timerId = setInterval(() => {
      if (pos <= offsetTop) clearInterval(timerId);
      window.scrollBy(0, -speed);
      pos -= speed;
    }, 1);
  } else {
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
}
/**
 * utils to play and pause video
 */

const videoHandler = e => {
  e.stopPropagation();
  e.preventDefault();

  if (e.currentTarget.closest('.post-video')) {
    let video = e.currentTarget.closest('.post-video');

    if (video.classList.contains('playing')) {
      video.classList.remove('playing');
      video.classList.add('paused');
      video.querySelector('video').pause();
    } else {
      video.classList.add('playing');
      video.querySelector('video').play();
    }

    video.querySelector('video').addEventListener('ended', function () {
      video.classList.remove('playing');
      video.classList.remove('paused');
    });
  }
};
/**
 * utils to get total Price of products in cart.
 */

const getTotalPrice = cartItems => {
  let total = 0;

  if (cartItems) {
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].price * parseInt(cartItems[i].qty, 10);
    }
  }

  return total;
};
/**
 * utils to get number of products in cart
 */

const getCartCount = cartItems => {
  let total = 0;

  for (let i = 0; i < cartItems.length; i++) {
    total += parseInt(cartItems[i].qty, 10);
  }

  return total;
};
/**
 * utils to show number to n places of decimals
 */

const toDecimal = (price, fixedCount = 2) => {
  return price.toLocaleString(undefined, {
    minimumFractionDigits: fixedCount,
    maximumFractionDigits: fixedCount
  });
};

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYW1zZXQtZWNvbW0vLi9jb21wb25lbnRzL2ZlYXR1cmVzL2NvdW50ZG93bi5qc3giLCJ3ZWJwYWNrOi8vcmFtc2V0LWVjb21tLy4vY29tcG9uZW50cy9mZWF0dXJlcy9jdXN0b20tbGluay5qc3giLCJ3ZWJwYWNrOi8vcmFtc2V0LWVjb21tLy4vY29tcG9uZW50cy9mZWF0dXJlcy9vd2wtY2Fyb3VzZWwuanN4Iiwid2VicGFjazovL3JhbXNldC1lY29tbS8uL2NvbXBvbmVudHMvZmVhdHVyZXMvcHJvZHVjdC9jb21tb24vY2FydC1wb3B1cC5qc3giLCJ3ZWJwYWNrOi8vcmFtc2V0LWVjb21tLy4vY29tcG9uZW50cy9mZWF0dXJlcy9xdWFudGl0eS5qc3giLCJ3ZWJwYWNrOi8vcmFtc2V0LWVjb21tLy4vY29tcG9uZW50cy9wYXJ0aWFscy9wcm9kdWN0L2RldGFpbC9kZXRhaWwtb25lLmpzeCIsIndlYnBhY2s6Ly9yYW1zZXQtZWNvbW0vLi9jb21wb25lbnRzL3BhcnRpYWxzL3Byb2R1Y3QvcHJvZHVjdC1uYXYuanN4Iiwid2VicGFjazovL3JhbXNldC1lY29tbS8uL3NlcnZlci9hcG9sbG8uanMiLCJ3ZWJwYWNrOi8vcmFtc2V0LWVjb21tLy4vc2VydmVyL3F1ZXJpZXMuanMiLCJ3ZWJwYWNrOi8vcmFtc2V0LWVjb21tLy4vc3RvcmUvY2FydC5qcyIsIndlYnBhY2s6Ly9yYW1zZXQtZWNvbW0vLi9zdG9yZS9tb2RhbC5qcyIsIndlYnBhY2s6Ly9yYW1zZXQtZWNvbW0vLi9zdG9yZS93aXNobGlzdC5qcyIsIndlYnBhY2s6Ly9yYW1zZXQtZWNvbW0vLi91dGlscy9kYXRhL2Nhcm91c2VsLmpzIiwid2VicGFjazovL3JhbXNldC1lY29tbS8uL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovL3JhbXNldC1lY29tbS9pZ25vcmVkfC9ob21lL3RyaXN0YW4vcHJvamVjdHMvVXBzaWRpYW4vcmFtc2V0LWVjb21tL2NsaWVudC9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIlByb2R1Y3RDb3VudERvd24iLCJwcm9wcyIsImRhdGUiLCJ0eXBlIiwiYWRDbGFzcyIsInJlbmRlcmVyIiwiZGF5cyIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJjb21wbGV0ZWQiLCJ6ZXJvUGFkIiwiRGF0ZSIsIkFMaW5rIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJjb250ZW50Iiwic3R5bGUiLCJwcmV2ZW50RGVmYXVsdCIsImUiLCJocmVmIiwib25DbGljayIsInBhcnNlQ29udGVudCIsIk93bENhcm91c2VsIiwib3B0aW9ucyIsImNhcm91c2VsUmVmIiwidXNlUmVmIiwiZGVmYXVsdE9wdGlvbnMiLCJpdGVtcyIsImxvb3AiLCJtYXJnaW4iLCJyZXNwb25zaXZlQ2xhc3MiLCJuYXYiLCJuYXZUZXh0IiwibmF2RWxlbWVudCIsImRvdHMiLCJzbWFydFNwZWVkIiwiYXV0b3BsYXkiLCJhdXRvSGVpZ2h0IiwidXNlRWZmZWN0Iiwib25DaGFuZ2VSZWYiLCJldmVudHMiLCJvblRyYW5zbGF0ZWQiLCJ0YXJnZXQiLCJvbkNoYW5nZUluZGV4IiwiaXRlbSIsImluZGV4IiwiT2JqZWN0IiwiYXNzaWduIiwic2V0dGluZ3MiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJSZWFjdCIsIkNhcnRQb3B1cCIsInByb2R1Y3QiLCJ0b3AiLCJzbHVnIiwicHJvY2VzcyIsInBpY3R1cmVzIiwidXJsIiwibmFtZSIsInF0eSIsInRvRGVjaW1hbCIsInByaWNlIiwiUXVhbnRpdHkiLCJxdWFudGl0eSIsInNldFF1YW50aXR5IiwidXNlU3RhdGUiLCJwYXJzZUludCIsIm9uQ2hhbmdlUXR5IiwibWludXNRdWFudGl0eSIsInBsdXNRdWFudGl0eSIsIm1heCIsImNoYW5nZVF0eSIsIm5ld1F0eSIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsIk1hdGgiLCJtaW4iLCJEZXRhaWxPbmUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkYXRhIiwiaXNTdGlja3lDYXJ0IiwiaXNOYXYiLCJ0b2dnbGVXaXNobGlzdCIsImFkZFRvQ2FydCIsIndpc2hsaXN0IiwiY3VyQ29sb3IiLCJzZXRDdXJDb2xvciIsImN1clNpemUiLCJzZXRDdXJTaXplIiwiY3VySW5kZXgiLCJzZXRDdXJJbmRleCIsImNhcnRBY3RpdmUiLCJzZXRDYXJ0QWN0aXZlIiwic2V0UWF1bnRpdHkiLCJpc1dpc2hsaXN0ZWQiLCJjb2xvcnMiLCJzaXplcyIsImZpbmRJbmRleCIsInZhcmlhbnRzIiwic2l6ZSIsImZvckVhY2giLCJwdXNoIiwiY29sb3IiLCJyZXNldFZhbHVlSGFuZGxlciIsInN0b2NrIiwid2lzaGxpc3RIYW5kbGVyIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0VGltZW91dCIsInJlbW92ZSIsInNldENvbG9ySGFuZGxlciIsInNldFNpemVIYW5kbGVyIiwiYWRkVG9DYXJ0SGFuZGxlciIsInRtcE5hbWUiLCJ0bXBQcmljZSIsImRpc2NvdW50Iiwic2FsZV9wcmljZSIsImlzRGlzYWJsZWQiLCJza3UiLCJjYXRlZ29yaWVzIiwibWFwIiwicGF0aG5hbWUiLCJxdWVyeSIsImNhdGVnb3J5Iiwid2lkdGgiLCJyYXRpbmdzIiwicmV2aWV3cyIsInNob3J0X2Rlc2NyaXB0aW9uIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb25uZWN0Iiwid2lzaGxpc3RBY3Rpb25zIiwiY2FydEFjdGlvbnMiLCJQcm9kdWN0TmF2IiwicHJldiIsIm5leHQiLCJBUElfVVJJIiwiY29uc29sZSIsImxvZyIsImFwb2xsb0NsaWVudCIsIkFwb2xsb0NsaWVudCIsInVyaSIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsIndpdGhBcG9sbG8iLCJjdXJyZW50RGVtbyIsIlBST0RVQ1RfU0lNUExFIiwiZ3FsIiwiUFJPRFVDVF9TTUFMTCIsIkdFVF9QUk9EVUNUUyIsIkdFVF9TUEVDSUFMX1BST0RVQ1RTIiwiR0VUX1BST0RVQ1QiLCJHRVRfVklERU8iLCJHRVRfU0hPUF9TSURFQkFSX0RBVEEiLCJHRVRfUE9TVFMiLCJHRVRfUE9TVCIsIkdFVF9QT1NUX1NJREVCQVJfREFUQSIsIkdFVF9IT01FX0RBVEEiLCJhY3Rpb25UeXBlcyIsIkFERF9UT19DQVJUIiwiUkVNT1ZFX0ZST01fQ0FSVCIsIlVQREFURV9DQVJUIiwiUkVGUkVTSF9TVE9SRSIsImluaXRpYWxTdGF0ZSIsImNhcnRSZWR1Y2VyIiwiYWN0aW9uIiwidG1wUHJvZHVjdCIsInBheWxvYWQiLCJ0bXBEYXRhIiwicmVkdWNlIiwiYWNjIiwiY3VyIiwiY2FydCIsImNhcnRBY2MiLCJwcm9kdWN0cyIsInJlbW92ZUZyb21DYXJ0IiwidXBkYXRlQ2FydCIsImNhcnRTYWdhIiwidGFrZUV2ZXJ5Iiwic2FnYSIsInRvYXN0IiwicGVyc2lzdENvbmZpZyIsImtleVByZWZpeCIsImtleSIsInN0b3JhZ2UiLCJwZXJzaXN0UmVkdWNlciIsIk9QRU5fTU9EQUwiLCJDTE9TRV9NT0RBTCIsIk9QRU5fUVVJQ0tWSUVXIiwiQ0xPU0VfUVVJQ0tWSUVXIiwib3Blbk1vZGFsIiwicXVpY2t2aWV3Iiwic2luZ2xlU2x1ZyIsIm1vZGFsUmVkdWNlciIsIm1vZGFsQWN0aW9ucyIsImNsb3NlTW9kYWwiLCJtb2RhbFR5cGUiLCJvcGVuUXVpY2t2aWV3IiwiY2xvc2VRdWlja3ZpZXciLCJUT0dHTEVfV0lTSExJU1QiLCJSRU1PVkVfRlJPTV9XSVNITElTVCIsIndpc2hsaXN0UmVkdWNlciIsInNwbGljZSIsIndpc2hsaXN0QWNjIiwicmVtb3ZlRnJvbVdpc2hsaXN0IiwibWFpblNsaWRlcjEiLCJyZXNwb25zaXZlIiwibWFpblNsaWRlcjIiLCJtYWluU2xpZGVyMyIsIm1haW5TbGlkZXI0IiwiYXV0b1BsYXkiLCJtYWluU2xpZGVyNSIsIm1haW5TbGlkZXI2IiwibWFpblNsaWRlcjciLCJtYWluU2xpZGVyOCIsIm1haW5TbGlkZXI5IiwibWFpblNsaWRlcjEwIiwibWFpblNsaWRlcjExIiwibWFpblNsaWRlcjEyIiwibWFpblNsaWRlcjEzIiwibWFpblNsaWRlcjE0IiwibWFpblNsaWRlcjE1IiwibWFpblNsaWRlcjE2IiwiYXV0b3BsYXlUaW1lb3V0IiwibWFpblNsaWRlcjE3IiwibWFpblNsaWRlcjE4IiwibWFpblNsaWRlcjE5IiwibWFpblNsaWRlcjIwIiwiaW50cm9TbGlkZXIiLCJzZXJ2aWNlU2xpZGVyIiwiYnJhbmRTbGlkZXIiLCJwcm9kdWN0U2xpZGVyIiwicHJvZHVjdFNsaWRlcjIiLCJwYXJzZU9wdGlvbnMiLCJKU09OIiwicGFyc2UiLCJyZXBsYWNlIiwiaXNJRUJyb3dzZXIiLCJzVXNyQWciLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmRleE9mIiwiaXNTYWZhcmlCcm93c2VyIiwiaXNFZGdlQnJvd3NlciIsImFycmF5IiwiY2IiLCJpIiwiZmluZEFycmF5SW5kZXgiLCJzZWFyY2hBcnJheSIsImh0bWwiLCJTQ1JJUFRfUkVHRVgiLCJ0ZXN0IiwiX19odG1sIiwic3RpY2t5SGVhZGVySGFuZGxlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm9mZnNldFRvcCIsInN0aWNreUhlYWRlciIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiaW5uZXJXaWR0aCIsIm5ld05vZGUiLCJjcmVhdGVFbGVtZW50IiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsImluc2VydEFkamFjZW50RWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsIm91dGVyV2lkdGgiLCJjb250YWlucyIsInJlc2l6ZUhhbmRsZXIiLCJhdHRyaSIsImJvZHlDbGFzc2VzIiwic3BsaXQiLCJmaWx0ZXIiLCJzdGlja3lGb290ZXJIYW5kbGVyIiwic3RpY2t5Rm9vdGVyIiwicGFyYWxsYXhIYW5kbGVyIiwicGFyYWxsYXhJdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYXJhbGxheCIsInlQb3MiLCJwYXJhbGxheFNwZWVkIiwic3BlZWQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJzaG93U2Nyb2xsVG9wSGFuZGxlciIsInNjcm9sbFRvcCIsInNjcm9sbFRvcEhhbmRsZXIiLCJpc0N1c3RvbSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBvcyIsInRpbWVySWQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzY3JvbGxCeSIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJ2aWRlb0hhbmRsZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJjbG9zZXN0IiwidmlkZW8iLCJwYXVzZSIsInBsYXkiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0VG90YWxQcmljZSIsImNhcnRJdGVtcyIsInRvdGFsIiwiZ2V0Q2FydENvdW50IiwiZml4ZWRDb3VudCIsInRvTG9jYWxlU3RyaW5nIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxnQkFBVCxDQUE0QkMsS0FBNUIsRUFBb0M7QUFDL0MsUUFBTTtBQUFFQyxRQUFJLEdBQUcsWUFBVDtBQUF1QkMsUUFBSSxHQUFHLENBQTlCO0FBQWlDQyxXQUFPLEdBQUc7QUFBM0MsTUFBa0RILEtBQXhEOztBQUVBLFFBQU1JLFFBQVEsR0FBRyxDQUFFO0FBQUVDLFFBQUY7QUFBUUMsU0FBUjtBQUFlQyxXQUFmO0FBQXdCQyxXQUF4QjtBQUFpQ0M7QUFBakMsR0FBRixLQUFvRDtBQUNqRSxRQUFLQSxTQUFMLEVBQWlCO0FBQ2IsYUFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQUFQO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsYUFDSVAsSUFBSSxLQUFLLENBQVQsR0FDSTtBQUFLLGlCQUFTLEVBQUksYUFBYUMsT0FBUyxFQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLCtCQUFmO0FBQUE7QUFB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QWQsRUFBaUJBLENBQUMsR0FBRzhELFNBQVMsQ0FBQ3JRLE1BQS9CLEVBQXVDdU0sQ0FBQyxFQUF4QyxFQUE2QztBQUN6QytELFNBQUssSUFBSXBQLFFBQVEsQ0FBRW1QLFNBQVMsQ0FBRTlELENBQUYsQ0FBVCxDQUFlNUwsR0FBakIsRUFBc0IsRUFBdEIsQ0FBakI7QUFDSDs7QUFFRCxTQUFPMlAsS0FBUDtBQUNILENBUk07QUFVUDtBQUNBO0FBQ0E7O0FBQ08sTUFBTTFQLFNBQVMsR0FBRyxDQUFFQyxLQUFGLEVBQVMyUCxVQUFVLEdBQUcsQ0FBdEIsS0FBNkI7QUFDbEQsU0FBTzNQLEtBQUssQ0FBQzRQLGNBQU4sQ0FBc0J4USxTQUF0QixFQUFpQztBQUFFeVEseUJBQXFCLEVBQUVGLFVBQXpCO0FBQXFDRyx5QkFBcUIsRUFBRUg7QUFBNUQsR0FBakMsQ0FBUDtBQUNILENBRk0sQzs7Ozs7Ozs7OztBQ3hUUCxlIiwiZmlsZSI6ImNvbXBvbmVudHNfZmVhdHVyZXNfb3dsLWNhcm91c2VsX2pzeC1jb21wb25lbnRzX3BhcnRpYWxzX3Byb2R1Y3RfZGV0YWlsX2RldGFpbC1vbmVfanN4LXNlcnZlci0yMmY4NGMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ291bnRkb3duLCB7IHplcm9QYWQgfSBmcm9tICdyZWFjdC1jb3VudGRvd24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdENvdW50RG93biAoIHByb3BzICkge1xyXG4gICAgY29uc3QgeyBkYXRlID0gXCIyMDIxLTA4LTIwXCIsIHR5cGUgPSAxLCBhZENsYXNzID0gJycgfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IHJlbmRlcmVyID0gKCB7IGRheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBjb21wbGV0ZWQgfSApID0+IHtcclxuICAgICAgICBpZiAoIGNvbXBsZXRlZCApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxzcGFuPlByb2R1Y3QgU2VsbGluZyBGaW5pc2hlZCE8L3NwYW4+XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIHR5cGUgPT09IDEgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgYGNvdW50ZG93biAkeyBhZENsYXNzIH1gIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLXJvdyBjb3VudGRvd24tc2hvdzRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRkb3duLWFtb3VudFwiPnsgemVyb1BhZCggZGF5cyApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRkb3duLXBlcmlvZFwiPkRBWVM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRkb3duLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudGRvd24tYW1vdW50XCI+eyB6ZXJvUGFkKCBob3VycyApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRkb3duLXBlcmlvZFwiPkhPVVJTPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRkb3duLWFtb3VudFwiPnsgemVyb1BhZCggbWludXRlcyApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRkb3duLXBlcmlvZFwiPk1JTlVURVM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudGRvd24tc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1hbW91bnRcIj57IHplcm9QYWQoIHNlY29uZHMgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1wZXJpb2RcIj5TRUNPTkRTPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNvdW50ZG93bi1jb250YWluZXIgZm9udC13ZWlnaHQtc2VtaS1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtY291bnRkb3duLXRpdGxlXCI+T2ZmZXIgRW5kcyBJbjombmJzcDs8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY291bnRkb3duIGNvdW50ZG93bi1jb21wYWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudGRvd24tc2VjdGlvbiBkYXlzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRkb3duLWFtb3VudFwiPnsgemVyb1BhZCggZGF5cyApIH0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1wZXJpb2RcIj5kYXlzLCZuYnNwOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudGRvd24tc2VjdGlvbiBob3Vyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1hbW91bnRcIj57IHplcm9QYWQoIGhvdXJzICkgfTxzcGFuIGNsYXNzTmFtZT1cIm1yLTEgbWwtMVwiPjo8L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1zZWN0aW9uIG1pbnV0ZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudGRvd24tYW1vdW50XCI+eyB6ZXJvUGFkKCBtaW51dGVzICkgfTxzcGFuIGNsYXNzTmFtZT1cIm1yLTEgbWwtMVwiPjo8L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1zZWN0aW9uIHNlY29uZHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudGRvd24tYW1vdW50XCI+eyB6ZXJvUGFkKCBzZWNvbmRzICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb3VudGRvd25cclxuICAgICAgICAgICAgZGF0ZT17IG5ldyBEYXRlKCBkYXRlICkgfVxyXG4gICAgICAgICAgICByZW5kZXJlcj17IHJlbmRlcmVyIH0gPlxyXG4gICAgICAgIDwvQ291bnRkb3duPlxyXG4gICAgKTtcclxufSIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCB7IHBhcnNlQ29udGVudCB9IGZyb20gJ34vdXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQUxpbmsoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBjb250ZW50LCBzdHlsZSwgLi4ucHJvcHMgfSkge1xyXG5cclxuICAgIGNvbnN0IHByZXZlbnREZWZhdWx0ID0gKGUpID0+IHtcclxuICAgICAgICBpZiAocHJvcHMuaHJlZiA9PT0gJyMnKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcm9wcy5vbkNsaWNrKSB7XHJcbiAgICAgICAgICAgIHByb3BzLm9uQ2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBjb250ZW50ID9cclxuICAgICAgICAgICAgPExpbmsgey4uLnByb3BzfSA+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3N0eWxlfSBvbkNsaWNrPXtwcmV2ZW50RGVmYXVsdH0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3BhcnNlQ29udGVudChjb250ZW50KX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+IDpcclxuICAgICAgICAgICAgPExpbmsgey4uLnByb3BzfSA+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3N0eWxlfSBvbkNsaWNrPXtwcmV2ZW50RGVmYXVsdH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1vd2wtY2Fyb3VzZWwyJztcclxuXHJcbi8vIGxldCBwcmV2UGF0aDtcclxuZnVuY3Rpb24gT3dsQ2Fyb3VzZWwgKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IHsgYWRDbGFzcywgb3B0aW9ucyB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBjYXJvdXNlbFJlZiA9IHVzZVJlZiggbnVsbCApO1xyXG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgIHJlc3BvbnNpdmVDbGFzczogXCJ0cnVlXCIsXHJcbiAgICAgICAgbmF2OiB0cnVlLFxyXG4gICAgICAgIG5hdlRleHQ6IFsgJzxpIGNsYXNzPVwiZC1pY29uLWFuZ2xlLWxlZnRcIj4nLCAnPGkgY2xhc3M9XCJkLWljb24tYW5nbGUtcmlnaHRcIj4nIF0sXHJcbiAgICAgICAgbmF2RWxlbWVudDogXCJidXR0b25cIixcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIHNtYXJ0U3BlZWQ6IDQwMCxcclxuICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgYXV0b0hlaWdodDogZmFsc2VcclxuICAgICAgICAvLyBhdXRvcGxheVRpbWVvdXQ6IDUwMDAsXHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGlmICggcHJvcHMub25DaGFuZ2VSZWYgKSB7XHJcbiAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlUmVmKCBjYXJvdXNlbFJlZiApO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFsgY2Fyb3VzZWxSZWYgXSApXHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHtcclxuICAgICAgICBvblRyYW5zbGF0ZWQ6IGZ1bmN0aW9uICggZSApIHtcclxuICAgICAgICAgICAgaWYgKCAhZS50YXJnZXQgKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmICggcHJvcHMub25DaGFuZ2VJbmRleCApIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlSW5kZXgoIGUuaXRlbS5pbmRleCApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cyA9IE9iamVjdC5hc3NpZ24oIHt9LCBldmVudHMsIHByb3BzLmV2ZW50cyApO1xyXG4gICAgbGV0IHNldHRpbmdzID0gT2JqZWN0LmFzc2lnbigge30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBwcm9wcy5jaGlsZHJlbiA/XHJcbiAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuLmxlbmd0aCA+IDAgfHwgKCBwcm9wcy5jaGlsZHJlbiAmJiBwcm9wcy5jaGlsZHJlbi5sZW5ndGggPT09IHVuZGVmaW5lZCApID9cclxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbCByZWY9eyBjYXJvdXNlbFJlZiB9IGNsYXNzTmFtZT17IGBvd2wtY2Fyb3VzZWwgJHsgYWRDbGFzcyB9YCB9IG9wdGlvbnM9eyBzZXR0aW5ncyB9IGV2ZW50cz17IGV2ZW50cyB9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxyXG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbCA+XHJcbiAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgOiBcIlwiXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKCBPd2xDYXJvdXNlbCApOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgQUxpbmsgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL2N1c3RvbS1saW5rJztcclxuXHJcbmltcG9ydCB7IHRvRGVjaW1hbCB9IGZyb20gJ34vdXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FydFBvcHVwICggcHJvcHMgKSB7XHJcbiAgICBjb25zdCB7IHByb2R1Y3QgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW5pcG9wdXAtYXJlYVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbmlwb3B1cC1ib3ggc2hvd1wiIHN0eWxlPXsgeyB0b3A6IFwiMFwiIH0gfT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1pbmlwb3B1cC10aXRsZVwiPlN1Y2Nlc3NmdWxseSBhZGRlZC48L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0IHByb2R1Y3QtcHVyY2hhc2VkICBwcm9kdWN0LWNhcnQgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwicHJvZHVjdC1tZWRpYSBwdXJlLW1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXsgYC9wcm9kdWN0L2RlZmF1bHQvJHsgcHJvZHVjdC5zbHVnIH1gIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgcHJvZHVjdC5waWN0dXJlc1sgMCBdLnVybCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI5MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiOTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXsgYC9wcm9kdWN0L2RlZmF1bHQvJHsgcHJvZHVjdC5zbHVnIH1gIH0gY2xhc3NOYW1lPVwicHJvZHVjdC1uYW1lXCI+eyBwcm9kdWN0Lm5hbWUgfTwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByaWNlLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1xdWFudGl0eVwiPnsgcHJvZHVjdC5xdHkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj4keyB0b0RlY2ltYWwoIHByb2R1Y3QucHJpY2UgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbi1ncm91cCBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9wYWdlcy9jYXJ0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tb3V0bGluZSBidG4tcHJpbWFyeSBidG4tcm91bmRlZFwiPlZpZXcgQ2FydDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvcGFnZXMvY2hlY2tvdXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5IGJ0bi1yb3VuZGVkXCI+Q2hlY2sgT3V0PC9BTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWFudGl0eSggeyBxdHkgPSAxLCAuLi5wcm9wcyB9ICkge1xyXG4gICAgY29uc3QgeyBhZENsYXNzID0gJ21yLTIgaW5wdXQtZ3JvdXAnIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IFsgcXVhbnRpdHksIHNldFF1YW50aXR5IF0gPSB1c2VTdGF0ZSggcGFyc2VJbnQoIHF0eSApICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgc2V0UXVhbnRpdHkoIHF0eSApO1xyXG4gICAgfSwgWyBwcm9wcy5wcm9kdWN0IF0gKVxyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIHByb3BzLm9uQ2hhbmdlUXR5ICYmIHByb3BzLm9uQ2hhbmdlUXR5KCBxdWFudGl0eSApO1xyXG4gICAgfSwgWyBxdWFudGl0eSBdIClcclxuXHJcbiAgICBmdW5jdGlvbiBtaW51c1F1YW50aXR5KCkge1xyXG4gICAgICAgIGlmICggcXVhbnRpdHkgPiAxICkge1xyXG4gICAgICAgICAgICBzZXRRdWFudGl0eSggcGFyc2VJbnQoIHF1YW50aXR5ICkgLSAxICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBsdXNRdWFudGl0eSgpIHtcclxuICAgICAgICBpZiAoIHF1YW50aXR5IDwgcHJvcHMubWF4ICkge1xyXG4gICAgICAgICAgICBzZXRRdWFudGl0eSggcGFyc2VJbnQoIHF1YW50aXR5ICkgKyAxICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZVF0eSggZSApIHtcclxuICAgICAgICBsZXQgbmV3UXR5O1xyXG5cclxuICAgICAgICBpZiAoIGUuY3VycmVudFRhcmdldC52YWx1ZSAhPT0gJycgKSB7XHJcbiAgICAgICAgICAgIG5ld1F0eSA9IE1hdGgubWluKCBwYXJzZUludCggZS5jdXJyZW50VGFyZ2V0LnZhbHVlICksIHByb3BzLm1heCApO1xyXG4gICAgICAgICAgICBuZXdRdHkgPSBNYXRoLm1heCggbmV3UXR5LCAxICk7XHJcbiAgICAgICAgICAgIHNldFF1YW50aXR5KCBuZXdRdHkgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGFkQ2xhc3MgfT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3F1YW50aXR5LW1pbnVzIGQtaWNvbi1taW51cycgb25DbGljaz17IG1pbnVzUXVhbnRpdHkgfT48L2J1dHRvbj5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ncXVhbnRpdHkgZm9ybS1jb250cm9sJyB0eXBlPSdudW1iZXInIG1pbj1cIjFcIiBtYXg9eyBwcm9wcy5tYXggfSB2YWx1ZT17IHF1YW50aXR5IH0gb25DaGFuZ2U9eyBjaGFuZ2VRdHkgfSAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncXVhbnRpdHktcGx1cyBkLWljb24tcGx1cycgb25DbGljaz17IHBsdXNRdWFudGl0eSB9PjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvbGxhcHNlIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2xsYXBzZSc7XHJcblxyXG5pbXBvcnQgQUxpbmsgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL2N1c3RvbS1saW5rJztcclxuaW1wb3J0IENvdW50ZG93biBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvY291bnRkb3duJztcclxuaW1wb3J0IFF1YW50aXR5IGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9xdWFudGl0eSc7XHJcblxyXG5pbXBvcnQgUHJvZHVjdE5hdiBmcm9tICd+L2NvbXBvbmVudHMvcGFydGlhbHMvcHJvZHVjdC9wcm9kdWN0LW5hdic7XHJcblxyXG5pbXBvcnQgeyB3aXNobGlzdEFjdGlvbnMgfSBmcm9tICd+L3N0b3JlL3dpc2hsaXN0JztcclxuaW1wb3J0IHsgY2FydEFjdGlvbnMgfSBmcm9tICd+L3N0b3JlL2NhcnQnO1xyXG5cclxuaW1wb3J0IHsgdG9EZWNpbWFsIH0gZnJvbSAnfi91dGlscyc7XHJcblxyXG5mdW5jdGlvbiBEZXRhaWxPbmUocHJvcHMpIHtcclxuICAgIGxldCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgZGF0YSwgaXNTdGlja3lDYXJ0ID0gZmFsc2UsIGFkQ2xhc3MgPSAnJywgaXNOYXYgPSB0cnVlIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHsgdG9nZ2xlV2lzaGxpc3QsIGFkZFRvQ2FydCwgd2lzaGxpc3QgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgW2N1ckNvbG9yLCBzZXRDdXJDb2xvcl0gPSB1c2VTdGF0ZSgnbnVsbCcpO1xyXG4gICAgY29uc3QgW2N1clNpemUsIHNldEN1clNpemVdID0gdXNlU3RhdGUoJ251bGwnKTtcclxuICAgIGNvbnN0IFtjdXJJbmRleCwgc2V0Q3VySW5kZXhdID0gdXNlU3RhdGUoLTEpO1xyXG4gICAgY29uc3QgW2NhcnRBY3RpdmUsIHNldENhcnRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3F1YW50aXR5LCBzZXRRYXVudGl0eV0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGxldCBwcm9kdWN0ID0gZGF0YSAmJiBkYXRhLnByb2R1Y3Q7XHJcblxyXG4gICAgLy8gZGVjaWRlIGlmIHRoZSBwcm9kdWN0IGlzIHdpc2hsaXN0ZWRcclxuICAgIGxldCBpc1dpc2hsaXN0ZWQsIGNvbG9ycyA9IFtdLCBzaXplcyA9IFtdO1xyXG4gICAgaXNXaXNobGlzdGVkID0gd2lzaGxpc3QuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5zbHVnID09PSBwcm9kdWN0LmRhdGEuc2x1ZykgPiAtMSA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICBpZiAocHJvZHVjdC5kYXRhICYmIHByb2R1Y3QuZGF0YS52YXJpYW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgaWYgKHByb2R1Y3QuZGF0YS52YXJpYW50c1swXS5zaXplKVxyXG4gICAgICAgICAgICBwcm9kdWN0LmRhdGEudmFyaWFudHMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzaXplcy5maW5kSW5kZXgoc2l6ZSA9PiBzaXplLm5hbWUgPT09IGl0ZW0uc2l6ZS5uYW1lKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaXplcy5wdXNoKHsgbmFtZTogaXRlbS5zaXplLm5hbWUsIHZhbHVlOiBpdGVtLnNpemUuc2l6ZSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChwcm9kdWN0LmRhdGEudmFyaWFudHNbMF0uY29sb3IpIHtcclxuICAgICAgICAgICAgcHJvZHVjdC5kYXRhLnZhcmlhbnRzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sb3JzLmZpbmRJbmRleChjb2xvciA9PiBjb2xvci5uYW1lID09PSBpdGVtLmNvbG9yLm5hbWUpID09PSAtMSlcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcnMucHVzaCh7IG5hbWU6IGl0ZW0uY29sb3IubmFtZSwgdmFsdWU6IGl0ZW0uY29sb3IuY29sb3IgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEN1ckluZGV4KC0xKTtcclxuICAgICAgICAgICAgcmVzZXRWYWx1ZUhhbmRsZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvZHVjdF0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocHJvZHVjdC5kYXRhLnZhcmlhbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgaWYgKChjdXJTaXplICE9PSAnbnVsbCcgJiYgY3VyQ29sb3IgIT09ICdudWxsJykgfHwgKGN1clNpemUgPT09ICdudWxsJyAmJiBwcm9kdWN0LmRhdGEudmFyaWFudHNbMF0uc2l6ZSA9PT0gbnVsbCAmJiBjdXJDb2xvciAhPT0gJ251bGwnKSB8fCAoY3VyQ29sb3IgPT09ICdudWxsJyAmJiBwcm9kdWN0LmRhdGEudmFyaWFudHNbMF0uY29sb3IgPT09IG51bGwgJiYgY3VyU2l6ZSAhPT0gJ251bGwnKSkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q2FydEFjdGl2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHNldEN1ckluZGV4KHByb2R1Y3QuZGF0YS52YXJpYW50cy5maW5kSW5kZXgoaXRlbSA9PiAoaXRlbS5zaXplICE9PSBudWxsICYmIGl0ZW0uY29sb3IgIT09IG51bGwgJiYgaXRlbS5jb2xvci5uYW1lID09PSBjdXJDb2xvciAmJiBpdGVtLnNpemUubmFtZSA9PT0gY3VyU2l6ZSkgfHwgKGl0ZW0uc2l6ZSA9PT0gbnVsbCAmJiBpdGVtLmNvbG9yLm5hbWUgPT09IGN1ckNvbG9yKSB8fCAoaXRlbS5jb2xvciA9PT0gbnVsbCAmJiBpdGVtLnNpemUubmFtZSA9PT0gY3VyU2l6ZSkpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldENhcnRBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0Q2FydEFjdGl2ZSh0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcm9kdWN0LnN0b2NrID09PSAwKSB7XHJcbiAgICAgICAgICAgIHNldENhcnRBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtjdXJDb2xvciwgY3VyU2l6ZSwgcHJvZHVjdF0pXHJcblxyXG4gICAgY29uc3Qgd2lzaGxpc3RIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGlmICh0b2dnbGVXaXNobGlzdCAmJiAhaXNXaXNobGlzdGVkKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50VGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgICAgICBjdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2xvYWQtbW9yZS1vdmVybGF5JywgJ2xvYWRpbmcnKTtcclxuICAgICAgICAgICAgdG9nZ2xlV2lzaGxpc3QocHJvZHVjdC5kYXRhKTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkLW1vcmUtb3ZlcmxheScsICdsb2FkaW5nJyk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvcGFnZXMvd2lzaGxpc3QnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0Q29sb3JIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgICBzZXRDdXJDb2xvcihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0U2l6ZUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldEN1clNpemUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZFRvQ2FydEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb2R1Y3QuZGF0YS5zdG9jayA+IDAgJiYgY2FydEFjdGl2ZSkge1xyXG4gICAgICAgICAgICBpZiAocHJvZHVjdC5kYXRhLnZhcmlhbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCB0bXBOYW1lID0gcHJvZHVjdC5kYXRhLm5hbWUsIHRtcFByaWNlO1xyXG4gICAgICAgICAgICAgICAgdG1wTmFtZSArPSBjdXJDb2xvciAhPT0gJ251bGwnID8gJy0nICsgY3VyQ29sb3IgOiAnJztcclxuICAgICAgICAgICAgICAgIHRtcE5hbWUgKz0gY3VyU2l6ZSAhPT0gJ251bGwnID8gJy0nICsgY3VyU2l6ZSA6ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0LmRhdGEucHJpY2VbMF0gPT09IHByb2R1Y3QuZGF0YS5wcmljZVsxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRtcFByaWNlID0gcHJvZHVjdC5kYXRhLnByaWNlWzBdO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghcHJvZHVjdC5kYXRhLnZhcmlhbnRzWzBdLnByaWNlICYmIHByb2R1Y3QuZGF0YS5kaXNjb3VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0bXBQcmljZSA9IHByb2R1Y3QuZGF0YS5wcmljZVswXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG1wUHJpY2UgPSBwcm9kdWN0LmRhdGEudmFyaWFudHNbY3VySW5kZXhdLnNhbGVfcHJpY2UgPyBwcm9kdWN0LmRhdGEudmFyaWFudHNbY3VySW5kZXhdLnNhbGVfcHJpY2UgOiBwcm9kdWN0LmRhdGEudmFyaWFudHNbY3VySW5kZXhdLnByaWNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGFkZFRvQ2FydCh7IC4uLnByb2R1Y3QuZGF0YSwgbmFtZTogdG1wTmFtZSwgcXR5OiBxdWFudGl0eSwgcHJpY2U6IHRtcFByaWNlIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9DYXJ0KHsgLi4ucHJvZHVjdC5kYXRhLCBxdHk6IHF1YW50aXR5LCBwcmljZTogcHJvZHVjdC5kYXRhLnByaWNlWzBdIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc2V0VmFsdWVIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgICBzZXRDdXJDb2xvcignbnVsbCcpO1xyXG4gICAgICAgIHNldEN1clNpemUoJ251bGwnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0Rpc2FibGVkKGNvbG9yLCBzaXplKSB7XHJcbiAgICAgICAgaWYgKGNvbG9yID09PSAnbnVsbCcgfHwgc2l6ZSA9PT0gJ251bGwnKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChzaXplcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3QuZGF0YS52YXJpYW50cy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmNvbG9yLm5hbWUgPT09IGN1ckNvbG9yKSA9PT0gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29sb3JzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvZHVjdC5kYXRhLnZhcmlhbnRzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uc2l6ZS5uYW1lID09PSBjdXJTaXplKSA9PT0gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcHJvZHVjdC5kYXRhLnZhcmlhbnRzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uY29sb3IubmFtZSA9PT0gY29sb3IgJiYgaXRlbS5zaXplLm5hbWUgPT09IHNpemUpID09PSAtMTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VRdHkocXR5KSB7XHJcbiAgICAgICAgc2V0UWF1bnRpdHkocXR5KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInByb2R1Y3QtZGV0YWlscyBcIiArIGFkQ2xhc3N9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpc05hdiA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LW5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJyZWFkY3J1bWIgYnJlYWRjcnVtYi1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL1wiPjxpIGNsYXNzTmFtZT1cImQtaWNvbi1ob21lXCI+PC9pPjwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJhY3RpdmVcIj5Qcm9kdWN0czwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5EZXRhaWw8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3ROYXYgcHJvZHVjdD17cHJvZHVjdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHJvZHVjdC1uYW1lXCI+e3Byb2R1Y3QuZGF0YS5uYW1lfTwvaDI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1tZXRhJz5cclxuICAgICAgICAgICAgICAgIFNLVTogPHNwYW4gY2xhc3NOYW1lPSdwcm9kdWN0LXNrdSc+e3Byb2R1Y3QuZGF0YS5za3V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgQ0FURUdPUklFUzogPHNwYW4gY2xhc3NOYW1lPSdwcm9kdWN0LWJyYW5kJz5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuZGF0YS5jYXRlZ29yaWVzLm1hcCgoaXRlbSwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpdGVtLm5hbWUgKyAnLScgKyBpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvc2hvcCcsIHF1ZXJ5OiB7IGNhdGVnb3J5OiBpdGVtLnNsdWcgfSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCA8IHByb2R1Y3QuZGF0YS5jYXRlZ29yaWVzLmxlbmd0aCAtIDEgPyAnLCAnIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZSBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5kYXRhLnByaWNlWzBdICE9PSBwcm9kdWN0LmRhdGEucHJpY2VbMV0gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmRhdGEudmFyaWFudHMubGVuZ3RoID09PSAwIHx8IChwcm9kdWN0LmRhdGEudmFyaWFudHMubGVuZ3RoID4gMCAmJiAhcHJvZHVjdC5kYXRhLnZhcmlhbnRzWzBdLnByaWNlKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnMgY2xhc3NOYW1lPVwibmV3LXByaWNlXCI+JHt0b0RlY2ltYWwocHJvZHVjdC5kYXRhLnByaWNlWzBdKX08L2lucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGVsIGNsYXNzTmFtZT1cIm9sZC1wcmljZVwiPiR7dG9EZWNpbWFsKHByb2R1Y3QuZGF0YS5wcmljZVsxXSl9PC9kZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwgZGVsIGNsYXNzTmFtZT1cIm5ldy1wcmljZVwiPiR7dG9EZWNpbWFsKHByb2R1Y3QuZGF0YS5wcmljZVswXSl9IOKAkyAke3RvRGVjaW1hbChwcm9kdWN0LmRhdGEucHJpY2VbMV0pfTwvZGVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDxpbnMgY2xhc3NOYW1lPVwibmV3LXByaWNlXCI+JHt0b0RlY2ltYWwocHJvZHVjdC5kYXRhLnByaWNlWzBdKX08L2lucz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0LmRhdGEucHJpY2VbMF0gIT09IHByb2R1Y3QuZGF0YS5wcmljZVsxXSAmJiBwcm9kdWN0LmRhdGEudmFyaWFudHMubGVuZ3RoID09PSAwID9cclxuICAgICAgICAgICAgICAgICAgICA8Q291bnRkb3duIHR5cGU9ezJ9IC8+IDogJydcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdzLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyYXRpbmdzXCIgc3R5bGU9e3sgd2lkdGg6IDIwICogcHJvZHVjdC5kYXRhLnJhdGluZ3MgKyAnJScgfX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXB0ZXh0IHRvb2x0aXAtdG9wXCI+e3RvRGVjaW1hbChwcm9kdWN0LmRhdGEucmF0aW5ncyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwicmF0aW5nLXJldmlld3NcIj4oIHtwcm9kdWN0LmRhdGEucmV2aWV3c30gcmV2aWV3cyApPC9BTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0LXNob3J0LWRlc2NcIj57cHJvZHVjdC5kYXRhLnNob3J0X2Rlc2NyaXB0aW9ufTwvcD5cclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QgJiYgcHJvZHVjdC5kYXRhLnZhcmlhbnRzLmxlbmd0aCA+IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuZGF0YS52YXJpYW50c1swXS5jb2xvciA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtZm9ybSBwcm9kdWN0LXZhcmlhdGlvbnMgcHJvZHVjdC1jb2xvcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Db2xvcjo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VsZWN0LWJveCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9J2NvbG9yJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCBzZWxlY3QtY29sb3InIG9uQ2hhbmdlPXtzZXRDb2xvckhhbmRsZXJ9IHZhbHVlPXtjdXJDb2xvcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm51bGxcIj5DaG9vc2UgYW4gb3B0aW9uPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMubWFwKGl0ZW0gPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc0Rpc2FibGVkKGl0ZW0ubmFtZSwgY3VyU2l6ZSkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2l0ZW0ubmFtZX0ga2V5PXtcImNvbG9yLVwiICsgaXRlbS5uYW1lfT57aXRlbS5uYW1lfTwvb3B0aW9uPiA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmRhdGEudmFyaWFudHNbMF0uc2l6ZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtZm9ybSBwcm9kdWN0LXZhcmlhdGlvbnMgcHJvZHVjdC1zaXplIG1iLTAgcGItMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TaXplOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LWZvcm0tZ3JvdXAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlbGVjdC1ib3gnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT0nc2l6ZScgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wgc2VsZWN0LXNpemUnIG9uQ2hhbmdlPXtzZXRTaXplSGFuZGxlcn0gdmFsdWU9e2N1clNpemV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibnVsbFwiPkNob29zZSBhbiBvcHRpb248L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZXMubWFwKGl0ZW0gPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNEaXNhYmxlZChjdXJDb2xvciwgaXRlbS5uYW1lKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2l0ZW0ubmFtZX0ga2V5PXtcInNpemUtXCIgKyBpdGVtLm5hbWV9PntpdGVtLm5hbWV9PC9vcHRpb24+IDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbGxhcHNlIGluPXsnbnVsbCcgIT09IGN1ckNvbG9yIHx8ICdudWxsJyAhPT0gY3VyU2l6ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXdyYXBwZXIgb3ZlcmZsb3ctaGlkZGVuIHJlc2V0LXZhbHVlLWJ1dHRvbiB3LTEwMCBtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPScjJyBjbGFzc05hbWU9J3Byb2R1Y3QtdmFyaWF0aW9uLWNsZWFuJyBvbkNsaWNrPXtyZXNldFZhbHVlSGFuZGxlcn0+Q2xlYW4gQWxsPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtdmFyaWF0aW9uLXByaWNlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZSBpbj17Y2FydEFjdGl2ZSAmJiBjdXJJbmRleCA+IC0xfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJJbmRleCA+IC0xID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1wcm9kdWN0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuZGF0YS52YXJpYW50c1tjdXJJbmRleF0ucHJpY2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuZGF0YS52YXJpYW50c1tjdXJJbmRleF0uc2FsZV9wcmljZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZSBtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5zIGNsYXNzTmFtZT1cIm5ldy1wcmljZVwiPiR7dG9EZWNpbWFsKHByb2R1Y3QuZGF0YS52YXJpYW50c1tjdXJJbmRleF0uc2FsZV9wcmljZSl9PC9pbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGVsIGNsYXNzTmFtZT1cIm9sZC1wcmljZVwiPiR7dG9EZWNpbWFsKHByb2R1Y3QuZGF0YS52YXJpYW50c1tjdXJJbmRleF0ucHJpY2UpfTwvZGVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2UgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucyBjbGFzc05hbWU9XCJuZXctcHJpY2VcIj4ke3RvRGVjaW1hbChwcm9kdWN0LmRhdGEudmFyaWFudHNbY3VySW5kZXhdLnByaWNlKX08L2lucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz4gOiAnJ1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwicHJvZHVjdC1kaXZpZGVyXCI+PC9ocj5cclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlzU3RpY2t5Q2FydCA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3ktY29udGVudCBmaXgtdG9wIHByb2R1Y3Qtc3RpY2t5LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5LXByb2R1Y3QtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwicHJvZHVjdC1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17Jy9wcm9kdWN0L2RlZmF1bHQvJyArIHByb2R1Y3QuZGF0YS5zbHVnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BU1NFVF9VUkkgKyBwcm9kdWN0LmRhdGEucGljdHVyZXNbMF0udXJsfSB3aWR0aD1cIjkwXCIgaGVpZ2h0PVwiOTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlByb2R1Y3RcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJwcm9kdWN0LXRpdGxlXCI+PEFMaW5rIGhyZWY9eycvcHJvZHVjdC9kZWZhdWx0LycgKyBwcm9kdWN0LmRhdGEuc2x1Z30+e3Byb2R1Y3QuZGF0YS5uYW1lfTwvQUxpbms+PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZSBtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJJbmRleCA+IC0xICYmIHByb2R1Y3QuZGF0YS52YXJpYW50c1swXSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmRhdGEudmFyaWFudHNbY3VySW5kZXhdLnByaWNlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmRhdGEudmFyaWFudHNbY3VySW5kZXhdLnNhbGVfcHJpY2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucyBjbGFzc05hbWU9XCJuZXctcHJpY2VcIj4ke3RvRGVjaW1hbChwcm9kdWN0LmRhdGEudmFyaWFudHNbY3VySW5kZXhdLnNhbGVfcHJpY2UpfTwvaW5zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRlbCBjbGFzc05hbWU9XCJvbGQtcHJpY2VcIj4ke3RvRGVjaW1hbChwcm9kdWN0LmRhdGEudmFyaWFudHNbY3VySW5kZXhdLnByaWNlKX08L2RlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnMgY2xhc3NOYW1lPVwibmV3LXByaWNlXCI+JHt0b0RlY2ltYWwocHJvZHVjdC5kYXRhLnZhcmlhbnRzW2N1ckluZGV4XS5wcmljZSl9PC9pbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5kYXRhLnByaWNlWzBdICE9PSBwcm9kdWN0LmRhdGEucHJpY2VbMV0gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuZGF0YS52YXJpYW50cy5sZW5ndGggPT09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucyBjbGFzc05hbWU9XCJuZXctcHJpY2VcIj4ke3RvRGVjaW1hbChwcm9kdWN0LmRhdGEucHJpY2VbMF0pfTwvaW5zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRlbCBjbGFzc05hbWU9XCJvbGQtcHJpY2VcIj4ke3RvRGVjaW1hbChwcm9kdWN0LmRhdGEucHJpY2VbMV0pfTwvZGVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IGRlbCBjbGFzc05hbWU9XCJuZXctcHJpY2VcIj4ke3RvRGVjaW1hbChwcm9kdWN0LmRhdGEucHJpY2VbMF0pfSDigJMgJHt0b0RlY2ltYWwocHJvZHVjdC5kYXRhLnByaWNlWzFdKX08L2RlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxpbnMgY2xhc3NOYW1lPVwibmV3LXByaWNlXCI+JHt0b0RlY2ltYWwocHJvZHVjdC5kYXRhLnByaWNlWzBdKX08L2lucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ3MtY29udGFpbmVyIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ3MtZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyYXRpbmdzXCIgc3R5bGU9e3sgd2lkdGg6IDIwICogcHJvZHVjdC5kYXRhLnJhdGluZ3MgKyAnJScgfX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwdGV4dCB0b29sdGlwLXRvcFwiPnt0b0RlY2ltYWwocHJvZHVjdC5kYXRhLnJhdGluZ3MpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwicmF0aW5nLXJldmlld3NcIj4oIHtwcm9kdWN0LmRhdGEucmV2aWV3c30gcmV2aWV3cyApPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWZvcm0gcHJvZHVjdC1xdHkgcGItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJkLW5vbmVcIj5RVFk6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UXVhbnRpdHkgbWF4PXtwcm9kdWN0LmRhdGEuc3RvY2t9IHByb2R1Y3Q9e3Byb2R1Y3R9IG9uQ2hhbmdlUXR5PXtjaGFuZ2VRdHl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgYnRuLXByb2R1Y3QgYnRuLWNhcnQgdGV4dC1ub3JtYWwgbHMtbm9ybWFsIGZvbnQtd2VpZ2h0LXNlbWktYm9sZCAke2NhcnRBY3RpdmUgPyAnJyA6ICdkaXNhYmxlZCd9YH0gb25DbGljaz17YWRkVG9DYXJ0SGFuZGxlcn0+PGkgY2xhc3NOYW1lPSdkLWljb24tYmFnJz48L2k+QWRkIHRvIENhcnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWZvcm0gcHJvZHVjdC1xdHkgcGItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZC1ub25lXCI+UVRZOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1mb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UXVhbnRpdHkgbWF4PXtwcm9kdWN0LmRhdGEuc3RvY2t9IHByb2R1Y3Q9e3Byb2R1Y3R9IG9uQ2hhbmdlUXR5PXtjaGFuZ2VRdHl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YGJ0bi1wcm9kdWN0IGJ0bi1jYXJ0IHRleHQtbm9ybWFsIGxzLW5vcm1hbCBmb250LXdlaWdodC1zZW1pLWJvbGQgJHtjYXJ0QWN0aXZlID8gJycgOiAnZGlzYWJsZWQnfWB9IG9uQ2xpY2s9e2FkZFRvQ2FydEhhbmRsZXJ9PjxpIGNsYXNzTmFtZT0nZC1pY29uLWJhZyc+PC9pPkFkZCB0byBDYXJ0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwicHJvZHVjdC1kaXZpZGVyIG1iLTNcIj48L2hyPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtbGlua3MgbXItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNvY2lhbC1saW5rIHNvY2lhbC1mYWNlYm9vayBmYWIgZmEtZmFjZWJvb2stZlwiPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic29jaWFsLWxpbmsgc29jaWFsLXR3aXR0ZXIgZmFiIGZhLXR3aXR0ZXJcIj48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNvY2lhbC1saW5rIHNvY2lhbC1waW50ZXJlc3QgZmFiIGZhLXBpbnRlcmVzdC1wXCI+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiA8c3BhbiBjbGFzc05hbWU9XCJkaXZpZGVyIGQtbGctc2hvd1wiPjwvc3Bhbj4gPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9e2BidG4tcHJvZHVjdCBidG4td2lzaGxpc3RgfSB0aXRsZT17aXNXaXNobGlzdGVkID8gJ0Jyb3dzZSB3aXNobGlzdCcgOiAnQWRkIHRvIHdpc2hsaXN0J30gb25DbGljaz17d2lzaGxpc3RIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2lzV2lzaGxpc3RlZCA/IFwiZC1pY29uLWhlYXJ0LWZ1bGxcIiA6IFwiZC1pY29uLWhlYXJ0XCJ9PjwvaT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1dpc2hsaXN0ZWQgPyAnQnJvd3NlIHdpc2hsaXN0JyA6ICdBZGQgdG8gV2lzaGxpc3QnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHdpc2hsaXN0OiBzdGF0ZS53aXNobGlzdC5kYXRhID8gc3RhdGUud2lzaGxpc3QuZGF0YSA6IFtdXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IHRvZ2dsZVdpc2hsaXN0OiB3aXNobGlzdEFjdGlvbnMudG9nZ2xlV2lzaGxpc3QsIGFkZFRvQ2FydDogY2FydEFjdGlvbnMuYWRkVG9DYXJ0IH0pKERldGFpbE9uZSk7IiwiaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9jdXN0b20tbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3ROYXYgKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IHsgcHJvZHVjdCB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHJvZHVjdC1uYXZcIj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdC5wcmV2ID9cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgYHByb2R1Y3QtbmF2LSR7IHByb2R1Y3QubmV4dCA/ICdwcmV2JyA6ICduZXh0IG5vLW5leHQnIH1gIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXsgeyBwYXRobmFtZTogcm91dGVyLnBhdGhuYW1lLCBxdWVyeTogeyBzbHVnOiBwcm9kdWN0LnByZXYuc2x1ZyB9IH0gfSBzY3JvbGw9eyBmYWxzZSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZC1pY29uLWFycm93LWxlZnRcIj48L2k+IFByZXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1uYXYtcG9wdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FTU0VUX1VSSSArIHByb2R1Y3QucHJldi5waWN0dXJlc1sgMCBdLnVybCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInByb2R1Y3QgdGh1bWJuYWlsXCIgd2lkdGg9XCIxMTBcIiBoZWlnaHQ9XCIxMjNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtbmFtZVwiPnsgcHJvZHVjdC5wcmV2Lm5hbWUgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPiA6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdC5uZXh0ID9cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJvZHVjdC1uYXYtbmV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IHsgcGF0aG5hbWU6IHJvdXRlci5wYXRobmFtZSwgcXVlcnk6IHsgc2x1ZzogcHJvZHVjdC5uZXh0LnNsdWcgfSB9IH0gc2Nyb2xsPXsgZmFsc2UgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5leHQgPGkgY2xhc3NOYW1lPVwiZC1pY29uLWFycm93LXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1uYXYtcG9wdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FTU0VUX1VSSSArIHByb2R1Y3QubmV4dC5waWN0dXJlc1sgMCBdLnVybCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInByb2R1Y3QgdGh1bWJuYWlsXCIgd2lkdGg9XCIxMTBcIiBoZWlnaHQ9XCIxMjNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtbmFtZVwiPnsgcHJvZHVjdC5uZXh0Lm5hbWUgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPiA6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyB3aXRoQXBvbGxvIH0gZnJvbSAnbmV4dC1hcG9sbG8nO1xyXG5pbXBvcnQgQXBvbGxvQ2xpZW50LCB7IEluTWVtb3J5Q2FjaGUgfSBmcm9tICdhcG9sbG8tYm9vc3QnO1xyXG5cclxuY29uc3QgQVBJX1VSSSA9IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NFUlZFUl9VUkx9L2dyYXBocWxgXHJcbmNvbnNvbGUubG9nKFwiQVBJX1VSSVwiKVxyXG5jb25zb2xlLmxvZyhBUElfVVJJKVxyXG5cclxuY29uc3QgYXBvbGxvQ2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgICB1cmk6IEFQSV9VUkksXHJcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oYXBvbGxvQ2xpZW50KTsiLCJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGN1cnJlbnREZW1vID0gYFwiMVwiYDtcclxuXHJcbmNvbnN0IFBST0RVQ1RfU0lNUExFID0gZ3FsYFxyXG4gICAgZnJhZ21lbnQgUHJvZHVjdFNpbXBsZSBvbiBQcm9kdWN0IHtcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgc2x1Z1xyXG4gICAgICAgIHByaWNlXHJcbiAgICAgICAgcmF0aW5nc1xyXG4gICAgICAgIHJldmlld3NcclxuICAgICAgICBzdG9ja1xyXG4gICAgICAgIHNob3J0X2Rlc2NyaXB0aW9uXHJcbiAgICAgICAgaXNfZmVhdHVyZWRcclxuICAgICAgICBpc19uZXdcclxuICAgICAgICB1bnRpbFxyXG4gICAgICAgIGRpc2NvdW50XHJcbiAgICAgICAgcGljdHVyZXMge1xyXG4gICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNtYWxsX3BpY3R1cmVzIHtcclxuICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRlZ29yaWVzIHtcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhcmlhbnRzIHtcclxuICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgc2FsZV9wcmljZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgUFJPRFVDVF9TTUFMTCA9IGdxbGBcclxuICAgIGZyYWdtZW50IFByb2R1Y3RTbWFsbCBvbiBQcm9kdWN0IHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIG5hbWVcclxuICAgICAgICBzbHVnXHJcbiAgICAgICAgcHJpY2VcclxuICAgICAgICByYXRpbmdzXHJcbiAgICAgICAgcGljdHVyZXMge1xyXG4gICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNtYWxsX3BpY3R1cmVzIHtcclxuICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXJpYW50cyB7XHJcbiAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgIHNhbGVfcHJpY2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVFMgPSBncWxgXHJcbiAgICBxdWVyeSBwcm9kdWN0cygkc2VhcmNoOiBTdHJpbmcsICRjb2xvcnM6IFtTdHJpbmddLCAkc2l6ZXM6IFtTdHJpbmddLCAkYnJhbmRzOiBbU3RyaW5nXSwgJG1pbl9wcmljZTogSW50LCAkbWF4X3ByaWNlOiBJbnQsICRjYXRlZ29yeTogU3RyaW5nLCAkdGFnOiBTdHJpbmcsICRzb3J0Qnk6IFN0cmluZywgJGZyb206IEludCwgJHRvOiBJbnQsICRsaXN0OiBCb29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBwcm9kdWN0cyhkZW1vOiAke2N1cnJlbnREZW1vIH0sIHNlYXJjaDogJHNlYXJjaCwgY29sb3JzOiAkY29sb3JzLCBzaXplczogJHNpemVzLCBicmFuZHM6ICRicmFuZHMsIG1pbl9wcmljZTogJG1pbl9wcmljZSwgbWF4X3ByaWNlOiAkbWF4X3ByaWNlLCBjYXRlZ29yeTogJGNhdGVnb3J5LCB0YWc6ICR0YWcsIHNvcnRCeTogJHNvcnRCeSwgZnJvbTogJGZyb20sIHRvOiAkdG8gKSB7XHJcbiAgICAgICAgICAgIGRhdGEge1xyXG4gICAgICAgICAgICAgICAgc2hvcnRfZGVzY3JpcHRpb24gQGluY2x1ZGUoaWY6ICRsaXN0KVxyXG4gICAgICAgICAgICAgICAgLi4uUHJvZHVjdFNpbXBsZVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0b3RhbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICR7IFBST0RVQ1RfU0lNUExFIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9TUEVDSUFMX1BST0RVQ1RTID0gZ3FsYFxyXG4gICAgcXVlcnkgc3BlY2lhbFByb2R1Y3RzKCRmZWF0dXJlZDogQm9vbGVhbiA9IGZhbHNlLCAkYmVzdFNlbGxpbmc6IEJvb2xlYW4gPSBmYWxzZSwgJHRvcFJhdGVkOiBCb29sZWFuID0gZmFsc2UsICRvblNhbGU6IEJvb2xlYW4gPSBmYWxzZSwgJGNvdW50OiBJbnQpIHtcclxuICAgICAgICBzcGVjaWFsUHJvZHVjdHMoZGVtbzogJHtjdXJyZW50RGVtbyB9LCBmZWF0dXJlZDogJGZlYXR1cmVkLCBiZXN0U2VsbGluZzogJGJlc3RTZWxsaW5nLCB0b3BSYXRlZDogJHRvcFJhdGVkLCBvblNhbGU6ICRvblNhbGUsIGNvdW50OiAkY291bnQpIHtcclxuICAgICAgICAgICAgZmVhdHVyZWQgQGluY2x1ZGUoaWY6ICRmZWF0dXJlZCkge1xyXG4gICAgICAgICAgICAgICAgLi4uUHJvZHVjdFNtYWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYmVzdFNlbGxpbmcgQGluY2x1ZGUoaWY6ICRiZXN0U2VsbGluZykge1xyXG4gICAgICAgICAgICAgICAgLi4uUHJvZHVjdFNtYWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdG9wUmF0ZWQgQGluY2x1ZGUoaWY6ICR0b3BSYXRlZCkge1xyXG4gICAgICAgICAgICAgICAgLi4uUHJvZHVjdFNtYWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGF0ZXN0IEBpbmNsdWRlKGlmOiAkbGF0ZXN0KSB7XHJcbiAgICAgICAgICAgICAgICAuLi5Qcm9kdWN0U21hbGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICR7IFBST0RVQ1RfU01BTEwgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BST0RVQ1QgPSBncWxgXHJcbiAgICBxdWVyeSBwcm9kdWN0KCRzbHVnOiBTdHJpbmchLCAkb25seURhdGE6IEJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHByb2R1Y3QoZGVtbzogJHtjdXJyZW50RGVtbyB9LCBzbHVnOiAkc2x1Zywgb25seURhdGE6ICRvbmx5RGF0YSkge1xyXG4gICAgICAgICAgICBkYXRhIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgICAgZGlzY291bnRcclxuICAgICAgICAgICAgICAgIHNob3J0X2Rlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBza3VcclxuICAgICAgICAgICAgICAgIHN0b2NrXHJcbiAgICAgICAgICAgICAgICByYXRpbmdzXHJcbiAgICAgICAgICAgICAgICByZXZpZXdzXHJcbiAgICAgICAgICAgICAgICBzYWxlX2NvdW50XHJcbiAgICAgICAgICAgICAgICBpc19uZXdcclxuICAgICAgICAgICAgICAgIGlzX3RvcFxyXG4gICAgICAgICAgICAgICAgdW50aWxcclxuICAgICAgICAgICAgICAgIHBpY3R1cmVzIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc21hbGxfcGljdHVyZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsYXJnZV9waWN0dXJlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0YWdzIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJhbmRzIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudHMge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgc2FsZV9wcmljZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHVtYiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzaXplIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRodW1iIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByZXYgQHNraXAoaWY6ICRvbmx5RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgcGljdHVyZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmV4dCBAc2tpcChpZjogJG9ubHlEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBwaWN0dXJlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWxhdGVkIEBza2lwKGlmOiAkb25seURhdGEpIHtcclxuICAgICAgICAgICAgICAgIC4uLlByb2R1Y3RTaW1wbGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICR7IFBST0RVQ1RfU0lNUExFIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9WSURFTyA9IGdxbGBcclxuICAgIHF1ZXJ5IHZpZGVvKCRzbHVnOiBTdHJpbmchKSB7XHJcbiAgICAgICAgdmlkZW8oZGVtbzogJHtjdXJyZW50RGVtbyB9LCBzbHVnOiAkc2x1Zykge1xyXG4gICAgICAgICAgICBkYXRhIHtcclxuICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1NIT1BfU0lERUJBUl9EQVRBID0gZ3FsYFxyXG4gICAgcXVlcnkgc2hvcFNpZGViYXJEYXRhKCRmZWF0dXJlZDogQm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgc2hvcFNpZGViYXJEYXRhKGRlbW86ICR7Y3VycmVudERlbW8gfSwgZmVhdHVyZWQ6ICRmZWF0dXJlZCkge1xyXG4gICAgICAgICAgICBjYXRlZ29yaWVzIHtcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZlYXR1cmVkIEBpbmNsdWRlKGlmOiAkZmVhdHVyZWQpIHtcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgICByYXRpbmdzXHJcbiAgICAgICAgICAgICAgICByZXZpZXdzXHJcbiAgICAgICAgICAgICAgICBwaWN0dXJlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnRzIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BPU1RTID0gZ3FsYFxyXG4gICAgcXVlcnkgcG9zdHMoJGNhdGVnb3J5OiBTdHJpbmcsICRmcm9tOiBJbnQsICR0bzogSW50LCAkY2F0ZWdvcmllczogW1N0cmluZ10pIHtcclxuICAgICAgICBwb3N0cyhkZW1vOiAke2N1cnJlbnREZW1vIH0sIGNhdGVnb3J5OiAkY2F0ZWdvcnksIGZyb206ICRmcm9tLCB0bzogJHRvLCBjYXRlZ29yaWVzOiAkY2F0ZWdvcmllcyApIHtcclxuICAgICAgICAgICAgZGF0YSB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgZGF0ZVxyXG4gICAgICAgICAgICAgICAgY29tbWVudHNcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRcclxuICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgIGF1dGhvclxyXG4gICAgICAgICAgICAgICAgbGFyZ2VfcGljdHVyZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBpY3R1cmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzbWFsbF9waWN0dXJlIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmlkZW8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdG90YWxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfUE9TVCA9IGdxbGBcclxuICAgIHF1ZXJ5IHBvc3QoJHNsdWc6IFN0cmluZyEpIHtcclxuICAgICAgICBwb3N0KGRlbW86ICR7Y3VycmVudERlbW8gfSwgc2x1ZzogJHNsdWcpIHtcclxuICAgICAgICAgICAgZGF0YSB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgYXV0aG9yXHJcbiAgICAgICAgICAgICAgICBkYXRlXHJcbiAgICAgICAgICAgICAgICBjb21tZW50c1xyXG4gICAgICAgICAgICAgICAgY29udGVudFxyXG4gICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgbGFyZ2VfcGljdHVyZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBpY3R1cmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2aWRlbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVsYXRlZCB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgZGF0ZVxyXG4gICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgY29tbWVudHNcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRcclxuICAgICAgICAgICAgICAgIHBpY3R1cmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2aWRlbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9QT1NUX1NJREVCQVJfREFUQSA9IGdxbGBcclxuICAgIHF1ZXJ5IHBvc3RTaWRiYXJEYXRhIHtcclxuICAgICAgICBwb3N0U2lkZWJhckRhdGEoZGVtbzogJHtjdXJyZW50RGVtbyB9KSB7XHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXMge1xyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlY2VudCB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgZGF0ZVxyXG4gICAgICAgICAgICAgICAgc21hbGxfcGljdHVyZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9IT01FX0RBVEEgPSBncWxgXHJcbiAgICBxdWVyeSBpbmRleERhdGEoJHByb2R1Y3RzQ291bnQ6IEludCwgJHBvc3RzQ291bnQ6IEludCkge1xyXG4gICAgICAgIHNwZWNpYWxQcm9kdWN0cyhkZW1vOiAke2N1cnJlbnREZW1vIH0sIGZlYXR1cmVkOiB0cnVlLCBiZXN0U2VsbGluZzogdHJ1ZSwgdG9wUmF0ZWQ6IHRydWUsIGxhdGVzdDogdHJ1ZSwgb25TYWxlOiB0cnVlLCBjb3VudDogJHByb2R1Y3RzQ291bnQpIHtcclxuICAgICAgICAgICAgZmVhdHVyZWQge1xyXG4gICAgICAgICAgICAgICAgLi4uUHJvZHVjdFNpbXBsZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJlc3RTZWxsaW5nIHtcclxuICAgICAgICAgICAgICAgIC4uLlByb2R1Y3RTaW1wbGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0b3BSYXRlZCB7XHJcbiAgICAgICAgICAgICAgICAuLi5Qcm9kdWN0U2ltcGxlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGF0ZXN0IHtcclxuICAgICAgICAgICAgICAgIC4uLlByb2R1Y3RTaW1wbGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvblNhbGUge1xyXG4gICAgICAgICAgICAgICAgLi4uUHJvZHVjdFNpbXBsZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBvc3RzKGRlbW86ICR7Y3VycmVudERlbW8gfSwgdG86ICRwb3N0c0NvdW50KSB7XHJcbiAgICAgICAgICAgIGRhdGEge1xyXG4gICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIGRhdGVcclxuICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRzXHJcbiAgICAgICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICAgICAgICBwaWN0dXJlIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmlkZW8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsYXJnZV9waWN0dXJlIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHsgUFJPRFVDVF9TSU1QTEUgfVxyXG5gXHJcbiIsImltcG9ydCB7IHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSBcInJlZHV4LXBlcnNpc3RcIjtcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAncmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZSc7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgeyB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5cclxuaW1wb3J0IENhcnRQb3B1cCBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvcHJvZHVjdC9jb21tb24vY2FydC1wb3B1cCc7XHJcblxyXG5jb25zdCBhY3Rpb25UeXBlcyA9IHtcclxuICAgIEFERF9UT19DQVJUOiAnQUREX1RPX0NBUlQnLFxyXG4gICAgUkVNT1ZFX0ZST01fQ0FSVDogJ1JFTU9WRV9GUk9NX0NBUlQnLFxyXG4gICAgVVBEQVRFX0NBUlQ6ICdVUERBVEVfQ0FSVCcsXHJcbiAgICBSRUZSRVNIX1NUT1JFOiAnUkVGUkVTSF9TVE9SRSdcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgZGF0YTogW11cclxufVxyXG5cclxuZnVuY3Rpb24gY2FydFJlZHVjZXIoIHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gKSB7XHJcbiAgICBzd2l0Y2ggKCBhY3Rpb24udHlwZSApIHtcclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLkFERF9UT19DQVJUOlxyXG4gICAgICAgICAgICBsZXQgdG1wUHJvZHVjdCA9IHsgLi4uYWN0aW9uLnBheWxvYWQucHJvZHVjdCB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKCBzdGF0ZS5kYXRhLmZpbmRJbmRleCggaXRlbSA9PiBpdGVtLm5hbWUgPT09IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QubmFtZSApID4gLTEgKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG1wRGF0YSA9IHN0YXRlLmRhdGEucmVkdWNlKCAoIGFjYywgY3VyICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggY3VyLm5hbWUgPT09IHRtcFByb2R1Y3QubmFtZSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjLnB1c2goIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmN1cixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF0eTogcGFyc2VJbnQoIGN1ci5xdHkgKSArIHBhcnNlSW50KCB0bXBQcm9kdWN0LnF0eSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2MucHVzaCggY3VyICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgICAgICAgfSwgW10gKVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBkYXRhOiB0bXBEYXRhIH07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZGF0YTogWyAuLi5zdGF0ZS5kYXRhLCB0bXBQcm9kdWN0IF0gfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLlJFTU9WRV9GUk9NX0NBUlQ6XHJcbiAgICAgICAgICAgIGxldCBjYXJ0ID0gc3RhdGUuZGF0YS5yZWR1Y2UoICggY2FydEFjYywgcHJvZHVjdCApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggcHJvZHVjdC5uYW1lICE9PSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0Lm5hbWUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FydEFjYy5wdXNoKCBwcm9kdWN0ICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FydEFjYztcclxuICAgICAgICAgICAgfSwgW10gKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBkYXRhOiBjYXJ0IH07XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuVVBEQVRFX0NBUlQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBkYXRhOiBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0cyB9O1xyXG5cclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLlJFRlJFU0hfU1RPUkU6XHJcbiAgICAgICAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNhcnRBY3Rpb25zID0ge1xyXG4gICAgYWRkVG9DYXJ0OiBwcm9kdWN0ID0+ICggeyB0eXBlOiBhY3Rpb25UeXBlcy5BRERfVE9fQ0FSVCwgcGF5bG9hZDogeyBwcm9kdWN0IH0gfSApLFxyXG4gICAgcmVtb3ZlRnJvbUNhcnQ6IHByb2R1Y3QgPT4gKCB7IHR5cGU6IGFjdGlvblR5cGVzLlJFTU9WRV9GUk9NX0NBUlQsIHBheWxvYWQ6IHsgcHJvZHVjdCB9IH0gKSxcclxuICAgIHVwZGF0ZUNhcnQ6IHByb2R1Y3RzID0+ICggeyB0eXBlOiBhY3Rpb25UeXBlcy5VUERBVEVfQ0FSVCwgcGF5bG9hZDogeyBwcm9kdWN0cyB9IH0gKVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBjYXJ0U2FnYSgpIHtcclxuICAgIHlpZWxkIHRha2VFdmVyeSggYWN0aW9uVHlwZXMuQUREX1RPX0NBUlQsIGZ1bmN0aW9uKiBzYWdhKCBlICkge1xyXG4gICAgICAgIHRvYXN0KCA8Q2FydFBvcHVwIHByb2R1Y3Q9eyBlLnBheWxvYWQucHJvZHVjdCB9IC8+ICk7XHJcbiAgICB9IClcclxufVxyXG5cclxuY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcclxuICAgIGtleVByZWZpeDogXCJyaW9kZS1cIixcclxuICAgIGtleTogXCJjYXJ0XCIsXHJcbiAgICBzdG9yYWdlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBlcnNpc3RSZWR1Y2VyKCBwZXJzaXN0Q29uZmlnLCBjYXJ0UmVkdWNlciApOyIsImltcG9ydCB7IHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSBcInJlZHV4LXBlcnNpc3RcIjtcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAncmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZSc7XHJcblxyXG5jb25zdCBhY3Rpb25UeXBlcyA9IHtcclxuICAgIE9QRU5fTU9EQUw6ICdPUEVOX01PREFMJyxcclxuICAgIENMT1NFX01PREFMOiAnQ0xPU0VfTU9EQUwnLFxyXG4gICAgT1BFTl9RVUlDS1ZJRVc6ICdPUEVOX1FVSUNLVklFVycsXHJcbiAgICBDTE9TRV9RVUlDS1ZJRVc6ICdDTE9TRV9RVUlDS1ZJRVcnLFxyXG4gICAgUkVGUkVTSF9TVE9SRTogJ1JFRlJFU0hfU1RPUkUnXHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHR5cGU6ICd2aWRlbycsXHJcbiAgICBvcGVuTW9kYWw6IGZhbHNlLFxyXG4gICAgcXVpY2t2aWV3OiBmYWxzZSxcclxuICAgIHNpbmdsZVNsdWc6ICcnXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vZGFsUmVkdWNlciggc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiApIHtcclxuICAgIHN3aXRjaCAoIGFjdGlvbi50eXBlICkge1xyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuT1BFTl9RVUlDS1ZJRVc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHF1aWNrdmlldzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNpbmdsZVNsdWc6IGFjdGlvbi5wYXlsb2FkLnNsdWdcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLkNMT1NFX1FVSUNLVklFVzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcXVpY2t2aWV3OiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuT1BFTl9NT0RBTDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgc2luZ2xlU2x1ZzogYWN0aW9uLnBheWxvYWQuc2x1ZyxcclxuICAgICAgICAgICAgICAgIG9wZW5Nb2RhbDogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuQ0xPU0VfTU9EQUw6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG9wZW5Nb2RhbDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLlJFRlJFU0hfU1RPUkU6XHJcbiAgICAgICAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1vZGFsQWN0aW9ucyA9IHtcclxuICAgIG9wZW5Nb2RhbDogc2x1ZyA9PiAoIHsgdHlwZTogYWN0aW9uVHlwZXMuT1BFTl9NT0RBTCwgcGF5bG9hZDogeyBzbHVnIH0gfSApLFxyXG4gICAgY2xvc2VNb2RhbDogbW9kYWxUeXBlID0+ICggeyB0eXBlOiBhY3Rpb25UeXBlcy5DTE9TRV9NT0RBTCwgcGF5bG9hZDogeyBtb2RhbFR5cGUgfSB9ICksXHJcbiAgICBvcGVuUXVpY2t2aWV3OiBzbHVnID0+ICggeyB0eXBlOiBhY3Rpb25UeXBlcy5PUEVOX1FVSUNLVklFVywgcGF5bG9hZDogeyBzbHVnIH0gfSApLFxyXG4gICAgY2xvc2VRdWlja3ZpZXc6ICgpID0+ICggeyB0eXBlOiBhY3Rpb25UeXBlcy5DTE9TRV9RVUlDS1ZJRVcgfSApXHJcbn07XHJcblxyXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xyXG4gICAga2V5UHJlZml4OiBcInJpb2RlLVwiLFxyXG4gICAga2V5OiBcIm1vZGFsXCIsXHJcbiAgICBzdG9yYWdlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBlcnNpc3RSZWR1Y2VyKCBwZXJzaXN0Q29uZmlnLCBtb2RhbFJlZHVjZXIgKTsiLCJpbXBvcnQgeyBwZXJzaXN0UmVkdWNlciB9IGZyb20gXCJyZWR1eC1wZXJzaXN0XCI7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJ3JlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2UnO1xyXG5cclxuY29uc3QgYWN0aW9uVHlwZXMgPSB7XHJcbiAgICBUT0dHTEVfV0lTSExJU1Q6ICdUT0dHTEVfV0lTSExJU1QnLFxyXG4gICAgUkVNT1ZFX0ZST01fV0lTSExJU1Q6ICdSRU1PVkVfRlJPTV9XSVNITElTVCcsXHJcbiAgICBSRUZSRVNIX1NUT1JFOiAnUkVGUkVTSF9TVE9SRSdcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgZGF0YTogW11cclxufVxyXG5cclxuZnVuY3Rpb24gd2lzaGxpc3RSZWR1Y2VyKCBzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uICkge1xyXG4gICAgc3dpdGNoICggYWN0aW9uLnR5cGUgKSB7XHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5UT0dHTEVfV0lTSExJU1Q6XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHN0YXRlLmRhdGEuZmluZEluZGV4KCBpdGVtID0+IGl0ZW0ubmFtZSA9PT0gYWN0aW9uLnBheWxvYWQucHJvZHVjdC5uYW1lICk7XHJcbiAgICAgICAgICAgIGxldCB0bXBEYXRhID0gWyAuLi5zdGF0ZS5kYXRhIF07XHJcblxyXG4gICAgICAgICAgICBpZiAoIGluZGV4ID09PSAtMSApIHtcclxuICAgICAgICAgICAgICAgIHRtcERhdGEucHVzaCggYWN0aW9uLnBheWxvYWQucHJvZHVjdCApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdG1wRGF0YS5zcGxpY2UoIGluZGV4ICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBkYXRhOiB0bXBEYXRhIH07XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuUkVNT1ZFX0ZST01fV0lTSExJU1Q6XHJcbiAgICAgICAgICAgIGxldCB3aXNobGlzdCA9IHN0YXRlLmRhdGEucmVkdWNlKCAoIHdpc2hsaXN0QWNjLCBwcm9kdWN0ICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBwcm9kdWN0Lm5hbWUgIT09IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QubmFtZSApIHtcclxuICAgICAgICAgICAgICAgICAgICB3aXNobGlzdEFjYy5wdXNoKCBwcm9kdWN0ICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gd2lzaGxpc3RBY2M7XHJcbiAgICAgICAgICAgIH0sIFtdICk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZGF0YTogd2lzaGxpc3QgfTtcclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5SRUZSRVNIX1NUT1JFOlxyXG4gICAgICAgICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgd2lzaGxpc3RBY3Rpb25zID0ge1xyXG4gICAgdG9nZ2xlV2lzaGxpc3Q6IHByb2R1Y3QgPT4gKCB7IHR5cGU6IGFjdGlvblR5cGVzLlRPR0dMRV9XSVNITElTVCwgcGF5bG9hZDogeyBwcm9kdWN0IH0gfSApLFxyXG4gICAgcmVtb3ZlRnJvbVdpc2hsaXN0OiBwcm9kdWN0ID0+ICggeyB0eXBlOiBhY3Rpb25UeXBlcy5SRU1PVkVfRlJPTV9XSVNITElTVCwgcGF5bG9hZDogeyBwcm9kdWN0IH0gfSApXHJcbn07XHJcblxyXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xyXG4gICAga2V5UHJlZml4OiBcInJpb2RlLVwiLFxyXG4gICAga2V5OiBcIndpc2hsaXN0XCIsXHJcbiAgICBzdG9yYWdlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBlcnNpc3RSZWR1Y2VyKCBwZXJzaXN0Q29uZmlnLCB3aXNobGlzdFJlZHVjZXIgKTsiLCJleHBvcnQgY29uc3QgbWFpblNsaWRlcjEgPSB7XHJcbiAgICBpdGVtczogNSxcclxuICAgIG5hdjogZmFsc2UsXHJcbiAgICBsb29wOiBmYWxzZSxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBtYXJnaW46IDIsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEyMDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDUsXHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFpblNsaWRlcjIgPSB7XHJcbiAgICBpdGVtczogMSxcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgbmF2OiB0cnVlLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICBpdGVtczogMVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1haW5TbGlkZXIzID0ge1xyXG4gICAgYXV0b0hlaWdodDogZmFsc2UsXHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIG5hdjogdHJ1ZVxyXG4gICAgLy8gZG90c0NvbnRhaW5lcjogXCIucHJvZHVjdC10aHVtYnNcIlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFpblNsaWRlcjQgPSB7XHJcbiAgICBuYXY6IGZhbHNlLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGl0ZW1zOiAxLFxyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgYXV0b1BsYXk6IHRydWVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1haW5TbGlkZXI1ID0ge1xyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBpdGVtczogNCxcclxuICAgIG1hcmdpbjogMjAsXHJcbiAgICBsb29wOiBmYWxzZSxcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICA1NzY6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICBpdGVtczogM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiA0LFxyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1haW5TbGlkZXI2ID0ge1xyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBpdGVtczogMyxcclxuICAgIG1hcmdpbjogMjAsXHJcbiAgICBsb29wOiBmYWxzZSxcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICA1NzY6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICBpdGVtczogMyxcclxuICAgICAgICAgICAgZG90czogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYWluU2xpZGVyNyA9IHtcclxuICAgIGl0ZW1zOiAxLFxyXG4gICAgbmF2OiB0cnVlLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBhdXRvUGxheTogdHJ1ZSxcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgbWFyZ2luOiAyMFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFpblNsaWRlcjggPSB7XHJcbiAgICBpdGVtczogNixcclxuICAgIG5hdjogZmFsc2UsXHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIG1hcmdpbjogMCxcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIDU3Njoge1xyXG4gICAgICAgICAgICBpdGVtczogM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiA0XHJcbiAgICAgICAgfSxcclxuICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEyMDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDZcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYWluU2xpZGVyOSA9IHtcclxuICAgIGl0ZW1zOiA1LFxyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBtYXJnaW46IDIwLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNTc2OiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEyMDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYWluU2xpZGVyMTAgPSB7XHJcbiAgICBpdGVtczogMSxcclxuICAgIG1hcmdpbjogMjAsXHJcbiAgICBsb29wOiBmYWxzZSxcclxuICAgIG5hdjogZmFsc2UsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgIDU3Njoge1xyXG4gICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFpblNsaWRlcjExID0ge1xyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBsb29wOiBmYWxzZSxcclxuICAgIG1hcmdpbjogMjAsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNTc2OiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDMsXHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFpblNsaWRlcjEyID0ge1xyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBsb29wOiBmYWxzZSxcclxuICAgIG1hcmdpbjogMjAsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNTc2OiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICBpdGVtczogNCxcclxuICAgICAgICAgICAgZG90czogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYWluU2xpZGVyMTMgPSB7XHJcbiAgICBpdGVtczogMyxcclxuICAgIG1hcmdpbjogMjAsXHJcbiAgICBsb29wOiBmYWxzZSxcclxuICAgIG5hdjogZmFsc2UsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAzLFxyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1haW5TbGlkZXIxNCA9IHtcclxuICAgIGl0ZW1zOiAyLFxyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBsb29wOiBmYWxzZSxcclxuICAgIG1hcmdpbjogMjAsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyLFxyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1haW5TbGlkZXIxNSA9IHtcclxuICAgIGl0ZW1zOiA0LFxyXG4gICAgbmF2OiB0cnVlLFxyXG4gICAgYXV0b0hlaWdodDogZmFsc2VcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1haW5TbGlkZXIxNiA9IHtcclxuICAgIGl0ZW1zOiA3LFxyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgYXV0b3BsYXlUaW1lb3V0OiAzMDAwLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICA1NzY6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICBpdGVtczogNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiA1XHJcbiAgICAgICAgfSxcclxuICAgICAgICAxMjAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiA2XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFpblNsaWRlcjE3ID0ge1xyXG4gICAgbG9vcDogZmFsc2UsXHJcbiAgICAvLyBkb3RzOiB0cnVlLFxyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIG1hcmdpbjogMjAsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDQsXHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBuYXY6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gLFxyXG4gICAgLy8gZG90c0NvbnRhaW5lcjogXCIucHJvZHVjdC10aHVtYnNcIlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFpblNsaWRlcjE4ID0ge1xyXG4gICAgaXRlbXM6IDMsXHJcbiAgICBsb29wOiBmYWxzZSxcclxuICAgIG5hdjogdHJ1ZSxcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICA1NzY6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICBpdGVtczogM1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1haW5TbGlkZXIxOSA9IHtcclxuICAgIG5hdjogZmFsc2UsXHJcbiAgICBsb29wOiBmYWxzZSxcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgYXV0b1BsYXk6IGZhbHNlLFxyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICBpdGVtczogNFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1haW5TbGlkZXIyMCA9IHtcclxuICAgIG5hdjogZmFsc2UsXHJcbiAgICBkb3RzOiB0cnVlXHJcbn1cclxuXHJcbi8vIGhvbWUgcGFnZVxyXG5leHBvcnQgY29uc3QgaW50cm9TbGlkZXIgPSB7XHJcbiAgICBuYXY6IGZhbHNlLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgaXRlbXM6IDEsXHJcbiAgICBhdXRvcGxheTogZmFsc2VcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlcnZpY2VTbGlkZXIgPSB7XHJcbiAgICBpdGVtczogMyxcclxuICAgIG5hdjogZmFsc2UsXHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIG1hcmdpbjogMCxcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgYXV0b3BsYXlUaW1lb3V0OiA1MDAwLFxyXG4gICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIDU3Njoge1xyXG4gICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAzLFxyXG4gICAgICAgICAgICBsb29wOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGJyYW5kU2xpZGVyID0ge1xyXG4gICAgaXRlbXM6IDYsXHJcbiAgICBuYXY6IGZhbHNlLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICA1NzY6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICBpdGVtczogNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiA1XHJcbiAgICAgICAgfSxcclxuICAgICAgICAxMjAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiA2XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdFNsaWRlciA9IHtcclxuICAgIGl0ZW1zOiA1LFxyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICBsb29wOiBmYWxzZSxcclxuICAgIG1hcmdpbjogMjAsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDQsXHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBuYXY6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0U2xpZGVyMiA9IHtcclxuICAgIGl0ZW1zOiA1LFxyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICBsb29wOiBmYWxzZSxcclxuICAgIG1hcmdpbjogMjAsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEyMDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDUsXHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBuYXY6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICogdXRpbHMgdG8gcGFyc2Ugb3B0aW9ucyBzdHJpbmcgdG8gb2JqZWN0XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zIFxyXG4gKiBAcmV0dXJuIHtvYmplY3R9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcGFyc2VPcHRpb25zID0gZnVuY3Rpb24gKCBvcHRpb25zICkge1xyXG4gICAgaWYgKCBcInN0cmluZ1wiID09PSB0eXBlb2Ygb3B0aW9ucyApIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSggb3B0aW9ucy5yZXBsYWNlKCAvJy9nLCAnXCInICkucmVwbGFjZSggJzsnLCAnJyApICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge307XHJcbn1cclxuXHJcbi8qKlxyXG4gKiB1dGlscyB0byBkZWN0ZWN0IElFIGJyb3dzZXJcclxuICogQHJldHVybiB7Ym9vbH1cclxuICovXHJcbmV4cG9ydCBjb25zdCBpc0lFQnJvd3NlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBzVXNyQWcgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gICAgaWYgKCBzVXNyQWcuaW5kZXhPZiggXCJUcmlkZW50XCIgKSA+IC0xICkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIHV0aWxzIHRvIGRldGVjdCBzYWZhcmkgYnJvd3NlclxyXG4gKiBAcmV0dXJuIHtib29sfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlzU2FmYXJpQnJvd3NlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBzVXNyQWcgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gICAgaWYgKCBzVXNyQWcuaW5kZXhPZiggJ1NhZmFyaScgKSAhPT0gLTEgJiYgc1VzckFnLmluZGV4T2YoICdDaHJvbWUnICkgPT09IC0xIClcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIHV0aWxzIHRvIGRldGVjdCBFZGdlIGJyb3dzZXJcclxuICogQHJldHVybiB7Ym9vbH1cclxuICovXHJcbmV4cG9ydCBjb25zdCBpc0VkZ2VCcm93c2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHNVc3JBZyA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgICBpZiAoIHNVc3JBZy5pbmRleE9mKCBcIkVkZ2VcIiApID4gLTEgKVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vKipcclxuICogdXRpbHMgdG8gZmluZCBpbmRleCBpbiBhcnJheVxyXG4gKiBAcGFyYW0ge2FycmF5fSBhcnJheVxyXG4gKiBAcGFyYW0ge2NhbGxiYWNrfSBjYlxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBpbmRleFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGZpbmRJbmRleCA9IGZ1bmN0aW9uICggYXJyYXksIGNiICkge1xyXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgICAgaWYgKCBjYiggYXJyYXlbIGkgXSApICkge1xyXG4gICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLTE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiB1dGlscyB0byBnZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBmaXJzdCBlbGVtZW50IG9mIHNlYXJjaCBhcnJheSBpbiBhcnJheVxyXG4gKiBAcGFyYW0ge2FycmF5fSBhcnJheVxyXG4gKiBAcGFyYW0ge2FycmF5fSBzZWFyY2hBcnJheVxyXG4gKiBAcGFyYW0ge2NhbGxiYWNrfSBjYlxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBpbmRleFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGZpbmRBcnJheUluZGV4ID0gZnVuY3Rpb24gKCBhcnJheSwgc2VhcmNoQXJyYXksIGNiICkge1xyXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgc2VhcmNoQXJyYXkubGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgICAgaWYgKCBjYiggc2VhcmNoQXJyYXlbIGkgXSApICkge1xyXG4gICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLTE7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogdXRpbHMgdG8gcmVtb3ZlIGFsbCBYU1MgIGF0dGFja3MgcG90ZW50aWFsXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBodG1sXHJcbiAqIEByZXR1cm4ge09iamVjdH1cclxuICovXHJcbmV4cG9ydCBjb25zdCBwYXJzZUNvbnRlbnQgPSAoIGh0bWwgKSA9PiB7XHJcbiAgICBjb25zdCBTQ1JJUFRfUkVHRVggPSAvPHNjcmlwdFxcYltePF0qKD86KD8hPFxcL3NjcmlwdD4pPFtePF0qKSo8XFwvc2NyaXB0Pi9naTtcclxuXHJcbiAgICAvL1JlbW92aW5nIHRoZSA8c2NyaXB0PiB0YWdzXHJcbiAgICB3aGlsZSAoIFNDUklQVF9SRUdFWC50ZXN0KCBodG1sICkgKSB7XHJcbiAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZSggU0NSSVBUX1JFR0VYLCAnJyApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vUmVtb3ZpbmcgYWxsIGV2ZW50cyBmcm9tIHRhZ3MuLi5cclxuICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoIC8gb25cXHcrPVwiW15cIl0qXCIvZywgJycgKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIF9faHRtbDogaHRtbFxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQXBwbHkgc3RpY2t5IGhlYWRlclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHN0aWNreUhlYWRlckhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgdG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJ21haW4nICkgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnbWFpbicgKS5vZmZzZXRUb3AgOiAzMDA7XHJcblxyXG4gICAgbGV0IHN0aWNreUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuc3RpY2t5LWhlYWRlcicgKTtcclxuICAgIGxldCBoZWlnaHQgPSAwO1xyXG5cclxuICAgIGlmICggc3RpY2t5SGVhZGVyICkge1xyXG4gICAgICAgIGhlaWdodCA9IHN0aWNreUhlYWRlci5vZmZzZXRIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCB3aW5kb3cucGFnZVlPZmZzZXQgPj0gdG9wICYmIHdpbmRvdy5pbm5lcldpZHRoID49IDk5MiApIHtcclxuICAgICAgICBpZiAoIHN0aWNreUhlYWRlciApIHtcclxuICAgICAgICAgICAgc3RpY2t5SGVhZGVyLmNsYXNzTGlzdC5hZGQoICdmaXhlZCcgKTtcclxuICAgICAgICAgICAgaWYgKCAhZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5zdGlja3ktd3JhcHBlcicgKSApIHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApO1xyXG4gICAgICAgICAgICAgICAgbmV3Tm9kZS5jbGFzc05hbWUgPSBcInN0aWNreS13cmFwcGVyXCI7XHJcbiAgICAgICAgICAgICAgICBzdGlja3lIZWFkZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoIG5ld05vZGUsIHN0aWNreUhlYWRlciApO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5zdGlja3ktd3JhcHBlcicgKS5pbnNlcnRBZGphY2VudEVsZW1lbnQoICdiZWZvcmVlbmQnLCBzdGlja3lIZWFkZXIgKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuc3RpY2t5LXdyYXBwZXInICkuc2V0QXR0cmlidXRlKCBcInN0eWxlXCIsIFwiaGVpZ2h0OiBcIiArIGhlaWdodCArIFwicHhcIiApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnN0aWNreS13cmFwcGVyJyApLmdldEF0dHJpYnV0ZSggXCJzdHlsZVwiICkgKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnN0aWNreS13cmFwcGVyJyApLnNldEF0dHJpYnV0ZSggXCJzdHlsZVwiLCBcImhlaWdodDogXCIgKyBoZWlnaHQgKyBcInB4XCIgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCBzdGlja3lIZWFkZXIgKSB7XHJcbiAgICAgICAgICAgIHN0aWNreUhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCAnZml4ZWQnICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuc3RpY2t5LXdyYXBwZXInICkgKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuc3RpY2t5LXdyYXBwZXInICkucmVtb3ZlQXR0cmlidXRlKCBcInN0eWxlXCIgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCB3aW5kb3cub3V0ZXJXaWR0aCA+PSA5OTIgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJ2JvZHknICkuY2xhc3NMaXN0LmNvbnRhaW5zKCAncmlnaHQtc2lkZWJhci1hY3RpdmUnICkgKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJ2JvZHknICkuY2xhc3NMaXN0LnJlbW92ZSggJ3JpZ2h0LXNpZGViYXItYWN0aXZlJyApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQWRkIG9yIHJlbW92ZSBzZXR0aW5ncyB3aGVuIHRoZSB3aW5kb3cgaXMgcmVzaXplZFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlc2l6ZUhhbmRsZXIgPSBmdW5jdGlvbiAoIHdpZHRoID0gOTkyLCBhdHRyaSA9ICdyaWdodC1zaWRlYmFyLWFjdGl2ZScgKSB7XHJcbiAgICBsZXQgYm9keUNsYXNzZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBcImJvZHlcIiApICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIFwiYm9keVwiICkuY2xhc3NMaXN0O1xyXG4gICAgYm9keUNsYXNzZXMgPSBib2R5Q2xhc3Nlcy52YWx1ZS5zcGxpdCggJyAnICkuZmlsdGVyKCBpdGVtID0+IGl0ZW0gIT09ICdob21lJyAmJiBpdGVtICE9PSAnbG9hZGVkJyApO1xyXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgYm9keUNsYXNzZXMubGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggXCJib2R5XCIgKSAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnYm9keScgKS5jbGFzc0xpc3QucmVtb3ZlKCBib2R5Q2xhc3Nlc1sgaSBdICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBcHBseSBzdGlja3kgZm9vdGVyXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3RpY2t5Rm9vdGVySGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBzdGlja3lGb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnN0aWNreS1mb290ZXInICk7XHJcbiAgICBsZXQgdG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJ21haW4nICkgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnbWFpbicgKS5vZmZzZXRUb3AgOiAzMDA7XHJcblxyXG4gICAgbGV0IGhlaWdodCA9IDA7XHJcblxyXG4gICAgaWYgKCBzdGlja3lGb290ZXIgKSB7XHJcbiAgICAgICAgaGVpZ2h0ID0gc3RpY2t5Rm9vdGVyLm9mZnNldEhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIHdpbmRvdy5wYWdlWU9mZnNldCA+PSB0b3AgJiYgd2luZG93LmlubmVyV2lkdGggPCA3NjggKSB7XHJcbiAgICAgICAgaWYgKCBzdGlja3lGb290ZXIgKSB7XHJcbiAgICAgICAgICAgIHN0aWNreUZvb3Rlci5jbGFzc0xpc3QuYWRkKCAnZml4ZWQnICk7XHJcbiAgICAgICAgICAgIGlmICggIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuc3RpY2t5LWNvbnRlbnQtd3JhcHBlcicgKSApIHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApO1xyXG4gICAgICAgICAgICAgICAgbmV3Tm9kZS5jbGFzc05hbWUgPSBcInN0aWNreS1jb250ZW50LXdyYXBwZXJcIjtcclxuICAgICAgICAgICAgICAgIHN0aWNreUZvb3Rlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZSggbmV3Tm9kZSwgc3RpY2t5Rm9vdGVyICk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnN0aWNreS1jb250ZW50LXdyYXBwZXInICkuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCAnYmVmb3JlZW5kJywgc3RpY2t5Rm9vdGVyICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuc3RpY2t5LWNvbnRlbnQtd3JhcHBlcicgKS5zZXRBdHRyaWJ1dGUoIFwic3R5bGVcIiwgXCJoZWlnaHQ6IFwiICsgaGVpZ2h0ICsgXCJweFwiICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIHN0aWNreUZvb3RlciApIHtcclxuICAgICAgICAgICAgc3RpY2t5Rm9vdGVyLmNsYXNzTGlzdC5yZW1vdmUoICdmaXhlZCcgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5zdGlja3ktY29udGVudC13cmFwcGVyJyApICkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnN0aWNreS1jb250ZW50LXdyYXBwZXInICkucmVtb3ZlQXR0cmlidXRlKCBcInN0eWxlXCIgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCB3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnN0aWNreS1jb250ZW50LXdyYXBwZXInICkgKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5zdGlja3ktY29udGVudC13cmFwcGVyJyApLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIHV0aWxzIHRvIG1ha2UgYmFja2dyb3VuZCBwYXJhbGxheFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHBhcmFsbGF4SGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBwYXJhbGxheEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5wYXJhbGxheCcgKTtcclxuXHJcbiAgICBpZiAoIHBhcmFsbGF4SXRlbXMgKSB7XHJcbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgcGFyYWxsYXhJdGVtcy5sZW5ndGg7IGkrKyApIHtcclxuICAgICAgICAgICAgLy8gY2FsY3VsYXRlIGJhY2tncm91bmQgeSBQb3NpdGlvbjtcclxuICAgICAgICAgICAgbGV0IHBhcmFsbGF4ID0gcGFyYWxsYXhJdGVtc1sgaSBdLCB5UG9zLCBwYXJhbGxheFNwZWVkID0gMTtcclxuXHJcbiAgICAgICAgICAgIGlmICggcGFyYWxsYXguZ2V0QXR0cmlidXRlKCAnZGF0YS1vcHRpb24nICkgKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbGxheFNwZWVkID0gcGFyc2VJbnQoIHBhcnNlT3B0aW9ucyggcGFyYWxsYXguZ2V0QXR0cmlidXRlKCAnZGF0YS1vcHRpb24nICkgKS5zcGVlZCApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB5UG9zID0gKCBwYXJhbGxheC5vZmZzZXRUb3AgLSB3aW5kb3cucGFnZVlPZmZzZXQgKSAqIDUwICogcGFyYWxsYXhTcGVlZCAvIHBhcmFsbGF4Lm9mZnNldFRvcCArIDUwO1xyXG5cclxuICAgICAgICAgICAgcGFyYWxsYXguc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gXCI1MCUgXCIgKyB5UG9zICsgXCIlXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogdXRpbHMgdG8gc2hvdyBzY3JvbGxUb3AgYnV0dG9uXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2hvd1Njcm9sbFRvcEhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgc2Nyb2xsVG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggXCIuc2Nyb2xsLXRvcFwiICk7XHJcblxyXG4gICAgaWYgKCB3aW5kb3cucGFnZVlPZmZzZXQgPj0gNzY4ICkge1xyXG4gICAgICAgIHNjcm9sbFRvcC5jbGFzc0xpc3QuYWRkKCBcInNob3dcIiApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzY3JvbGxUb3AuY2xhc3NMaXN0LnJlbW92ZSggXCJzaG93XCIgKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIHV0aWxzIHRvIHNjcm9sbCB0byB0b3BcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzY3JvbGxUb3BIYW5kbGVyKCBpc0N1c3RvbSA9IHRydWUsIHNwZWVkID0gMTUgKSB7XHJcbiAgICBsZXQgb2Zmc2V0VG9wID0gMDtcclxuXHJcbiAgICBpZiAoIGlzQ3VzdG9tICYmICFpc0VkZ2VCcm93c2VyKCkgKSB7XHJcbiAgICAgICAgaWYgKCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLm1haW4gLmNvbnRhaW5lciA+IC5yb3cnICkgKSB7XHJcbiAgICAgICAgICAgIG9mZnNldFRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcubWFpbiAuY29udGFpbmVyID4gLnJvdycgKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgLSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnN0aWNreS1oZWFkZXInICkub2Zmc2V0SGVpZ2h0ICsgMjtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG9mZnNldFRvcCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCBpc1NhZmFyaUJyb3dzZXIoKSB8fCBpc0VkZ2VCcm93c2VyKCkgKSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgICBsZXQgdGltZXJJZCA9IHNldEludGVydmFsKCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggcG9zIDw9IG9mZnNldFRvcCApIGNsZWFySW50ZXJ2YWwoIHRpbWVySWQgKTtcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbEJ5KCAwLCAtc3BlZWQgKTtcclxuICAgICAgICAgICAgcG9zIC09IHNwZWVkO1xyXG4gICAgICAgIH0sIDEgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKCB7XHJcbiAgICAgICAgICAgIHRvcDogb2Zmc2V0VG9wLFxyXG4gICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgICAgICB9ICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiB1dGlscyB0byBwbGF5IGFuZCBwYXVzZSB2aWRlb1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHZpZGVvSGFuZGxlciA9ICggZSApID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKCBlLmN1cnJlbnRUYXJnZXQuY2xvc2VzdCggJy5wb3N0LXZpZGVvJyApICkge1xyXG4gICAgICAgIGxldCB2aWRlbyA9IGUuY3VycmVudFRhcmdldC5jbG9zZXN0KCAnLnBvc3QtdmlkZW8nICk7XHJcbiAgICAgICAgaWYgKCB2aWRlby5jbGFzc0xpc3QuY29udGFpbnMoICdwbGF5aW5nJyApICkge1xyXG4gICAgICAgICAgICB2aWRlby5jbGFzc0xpc3QucmVtb3ZlKCAncGxheWluZycgKTtcclxuICAgICAgICAgICAgdmlkZW8uY2xhc3NMaXN0LmFkZCggJ3BhdXNlZCcgKTtcclxuICAgICAgICAgICAgdmlkZW8ucXVlcnlTZWxlY3RvciggJ3ZpZGVvJyApLnBhdXNlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmlkZW8uY2xhc3NMaXN0LmFkZCggJ3BsYXlpbmcnICk7XHJcbiAgICAgICAgICAgIHZpZGVvLnF1ZXJ5U2VsZWN0b3IoICd2aWRlbycgKS5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2aWRlby5xdWVyeVNlbGVjdG9yKCAndmlkZW8nICkuYWRkRXZlbnRMaXN0ZW5lciggJ2VuZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2aWRlby5jbGFzc0xpc3QucmVtb3ZlKCAncGxheWluZycgKTtcclxuICAgICAgICAgICAgdmlkZW8uY2xhc3NMaXN0LnJlbW92ZSggJ3BhdXNlZCcgKTtcclxuICAgICAgICB9IClcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIHV0aWxzIHRvIGdldCB0b3RhbCBQcmljZSBvZiBwcm9kdWN0cyBpbiBjYXJ0LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldFRvdGFsUHJpY2UgPSBjYXJ0SXRlbXMgPT4ge1xyXG4gICAgbGV0IHRvdGFsID0gMDtcclxuICAgIGlmICggY2FydEl0ZW1zICkge1xyXG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGNhcnRJdGVtcy5sZW5ndGg7IGkrKyApIHtcclxuICAgICAgICAgICAgdG90YWwgKz0gY2FydEl0ZW1zWyBpIF0ucHJpY2UgKiBwYXJzZUludCggY2FydEl0ZW1zWyBpIF0ucXR5LCAxMCApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0b3RhbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIHV0aWxzIHRvIGdldCBudW1iZXIgb2YgcHJvZHVjdHMgaW4gY2FydFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldENhcnRDb3VudCA9IGNhcnRJdGVtcyA9PiB7XHJcbiAgICBsZXQgdG90YWwgPSAwO1xyXG5cclxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGNhcnRJdGVtcy5sZW5ndGg7IGkrKyApIHtcclxuICAgICAgICB0b3RhbCArPSBwYXJzZUludCggY2FydEl0ZW1zWyBpIF0ucXR5LCAxMCApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b3RhbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIHV0aWxzIHRvIHNob3cgbnVtYmVyIHRvIG4gcGxhY2VzIG9mIGRlY2ltYWxzXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdG9EZWNpbWFsID0gKCBwcmljZSwgZml4ZWRDb3VudCA9IDIgKSA9PiB7XHJcbiAgICByZXR1cm4gcHJpY2UudG9Mb2NhbGVTdHJpbmcoIHVuZGVmaW5lZCwgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IGZpeGVkQ291bnQsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogZml4ZWRDb3VudCB9ICk7XHJcbn0iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9