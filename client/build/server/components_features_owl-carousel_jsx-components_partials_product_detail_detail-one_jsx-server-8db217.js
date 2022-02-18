exports.id = "components_features_owl-carousel_jsx-components_partials_product_detail_detail-one_jsx-server-8db217";
exports.ids = ["components_features_owl-carousel_jsx-components_partials_product_detail_detail-one_jsx-server-8db217"];
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

/***/ "./node_modules/react-image-lightbox/style.css":
/*!*****************************************************!*\
  !*** ./node_modules/react-image-lightbox/style.css ***!
  \*****************************************************/
/***/ (function() {



/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYW1zZXQtZWNvbW0vLi9jb21wb25lbnRzL2ZlYXR1cmVzL2NvdW50ZG93bi5qc3giLCJ3ZWJwYWNrOi8vcmFtc2V0LWVjb21tLy4vY29tcG9uZW50cy9mZWF0dXJlcy9vd2wtY2Fyb3VzZWwuanN4Iiwid2VicGFjazovL3JhbXNldC1lY29tbS8uL2NvbXBvbmVudHMvZmVhdHVyZXMvcHJvZHVjdC9jb21tb24vY2FydC1wb3B1cC5qc3giLCJ3ZWJwYWNrOi8vcmFtc2V0LWVjb21tLy4vY29tcG9uZW50cy9mZWF0dXJlcy9xdWFudGl0eS5qc3giLCJ3ZWJwYWNrOi8vcmFtc2V0LWVjb21tLy4vY29tcG9uZW50cy9wYXJ0aWFscy9wcm9kdWN0L2RldGFpbC9kZXRhaWwtb25lLmpzeCIsIndlYnBhY2s6Ly9yYW1zZXQtZWNvbW0vLi9jb21wb25lbnRzL3BhcnRpYWxzL3Byb2R1Y3QvcHJvZHVjdC1uYXYuanN4Iiwid2VicGFjazovL3JhbXNldC1lY29tbS8uL3NlcnZlci9hcG9sbG8uanMiLCJ3ZWJwYWNrOi8vcmFtc2V0LWVjb21tLy4vc2VydmVyL3F1ZXJpZXMuanMiLCJ3ZWJwYWNrOi8vcmFtc2V0LWVjb21tLy4vc3RvcmUvY2FydC5qcyIsIndlYnBhY2s6Ly9yYW1zZXQtZWNvbW0vLi9zdG9yZS9tb2RhbC5qcyIsIndlYnBhY2s6Ly9yYW1zZXQtZWNvbW0vLi9zdG9yZS93aXNobGlzdC5qcyIsIndlYnBhY2s6Ly9yYW1zZXQtZWNvbW0vLi91dGlscy9kYXRhL2Nhcm91c2VsLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RDb3VudERvd24iLCJwcm9wcyIsImRhdGUiLCJ0eXBlIiwiYWRDbGFzcyIsInJlbmRlcmVyIiwiZGF5cyIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJjb21wbGV0ZWQiLCJ6ZXJvUGFkIiwiRGF0ZSIsIk93bENhcm91c2VsIiwib3B0aW9ucyIsImNhcm91c2VsUmVmIiwidXNlUmVmIiwiZGVmYXVsdE9wdGlvbnMiLCJpdGVtcyIsImxvb3AiLCJtYXJnaW4iLCJyZXNwb25zaXZlQ2xhc3MiLCJuYXYiLCJuYXZUZXh0IiwibmF2RWxlbWVudCIsImRvdHMiLCJzbWFydFNwZWVkIiwiYXV0b3BsYXkiLCJhdXRvSGVpZ2h0IiwidXNlRWZmZWN0Iiwib25DaGFuZ2VSZWYiLCJldmVudHMiLCJvblRyYW5zbGF0ZWQiLCJlIiwidGFyZ2V0Iiwib25DaGFuZ2VJbmRleCIsIml0ZW0iLCJpbmRleCIsIk9iamVjdCIsImFzc2lnbiIsInNldHRpbmdzIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJSZWFjdCIsIkNhcnRQb3B1cCIsInByb2R1Y3QiLCJ0b3AiLCJzbHVnIiwicHJvY2VzcyIsInBpY3R1cmVzIiwidXJsIiwibmFtZSIsInF0eSIsInRvRGVjaW1hbCIsInByaWNlIiwiUXVhbnRpdHkiLCJxdWFudGl0eSIsInNldFF1YW50aXR5IiwidXNlU3RhdGUiLCJwYXJzZUludCIsIm9uQ2hhbmdlUXR5IiwibWludXNRdWFudGl0eSIsInBsdXNRdWFudGl0eSIsIm1heCIsImNoYW5nZVF0eSIsIm5ld1F0eSIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsIk1hdGgiLCJtaW4iLCJEZXRhaWxPbmUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkYXRhIiwiaXNTdGlja3lDYXJ0IiwiaXNOYXYiLCJ0b2dnbGVXaXNobGlzdCIsImFkZFRvQ2FydCIsIndpc2hsaXN0IiwiY3VyQ29sb3IiLCJzZXRDdXJDb2xvciIsImN1clNpemUiLCJzZXRDdXJTaXplIiwiY3VySW5kZXgiLCJzZXRDdXJJbmRleCIsImNhcnRBY3RpdmUiLCJzZXRDYXJ0QWN0aXZlIiwic2V0UWF1bnRpdHkiLCJpc1dpc2hsaXN0ZWQiLCJjb2xvcnMiLCJzaXplcyIsImZpbmRJbmRleCIsInZhcmlhbnRzIiwic2l6ZSIsImZvckVhY2giLCJwdXNoIiwiY29sb3IiLCJyZXNldFZhbHVlSGFuZGxlciIsInN0b2NrIiwid2lzaGxpc3RIYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwic2V0Q29sb3JIYW5kbGVyIiwic2V0U2l6ZUhhbmRsZXIiLCJhZGRUb0NhcnRIYW5kbGVyIiwidG1wTmFtZSIsInRtcFByaWNlIiwiZGlzY291bnQiLCJzYWxlX3ByaWNlIiwiaXNEaXNhYmxlZCIsInNrdSIsImNhdGVnb3JpZXMiLCJtYXAiLCJwYXRobmFtZSIsInF1ZXJ5IiwiY2F0ZWdvcnkiLCJ3aWR0aCIsInJhdGluZ3MiLCJyZXZpZXdzIiwic2hvcnRfZGVzY3JpcHRpb24iLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNvbm5lY3QiLCJ3aXNobGlzdEFjdGlvbnMiLCJjYXJ0QWN0aW9ucyIsIlByb2R1Y3ROYXYiLCJwcmV2IiwibmV4dCIsIkFQSV9VUkkiLCJjb25zb2xlIiwibG9nIiwiYXBvbGxvQ2xpZW50IiwiQXBvbGxvQ2xpZW50IiwidXJpIiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwid2l0aEFwb2xsbyIsImN1cnJlbnREZW1vIiwiUFJPRFVDVF9TSU1QTEUiLCJncWwiLCJQUk9EVUNUX1NNQUxMIiwiR0VUX1BST0RVQ1RTIiwiR0VUX1NQRUNJQUxfUFJPRFVDVFMiLCJHRVRfUFJPRFVDVCIsIkdFVF9WSURFTyIsIkdFVF9TSE9QX1NJREVCQVJfREFUQSIsIkdFVF9QT1NUUyIsIkdFVF9QT1NUIiwiR0VUX1BPU1RfU0lERUJBUl9EQVRBIiwiR0VUX0hPTUVfREFUQSIsImFjdGlvblR5cGVzIiwiQUREX1RPX0NBUlQiLCJSRU1PVkVfRlJPTV9DQVJUIiwiVVBEQVRFX0NBUlQiLCJSRUZSRVNIX1NUT1JFIiwiaW5pdGlhbFN0YXRlIiwiY2FydFJlZHVjZXIiLCJhY3Rpb24iLCJ0bXBQcm9kdWN0IiwicGF5bG9hZCIsInRtcERhdGEiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJjYXJ0IiwiY2FydEFjYyIsInByb2R1Y3RzIiwicmVtb3ZlRnJvbUNhcnQiLCJ1cGRhdGVDYXJ0IiwiY2FydFNhZ2EiLCJ0YWtlRXZlcnkiLCJzYWdhIiwidG9hc3QiLCJwZXJzaXN0Q29uZmlnIiwia2V5UHJlZml4Iiwia2V5Iiwic3RvcmFnZSIsInBlcnNpc3RSZWR1Y2VyIiwiT1BFTl9NT0RBTCIsIkNMT1NFX01PREFMIiwiT1BFTl9RVUlDS1ZJRVciLCJDTE9TRV9RVUlDS1ZJRVciLCJvcGVuTW9kYWwiLCJxdWlja3ZpZXciLCJzaW5nbGVTbHVnIiwibW9kYWxSZWR1Y2VyIiwibW9kYWxBY3Rpb25zIiwiY2xvc2VNb2RhbCIsIm1vZGFsVHlwZSIsIm9wZW5RdWlja3ZpZXciLCJjbG9zZVF1aWNrdmlldyIsIlRPR0dMRV9XSVNITElTVCIsIlJFTU9WRV9GUk9NX1dJU0hMSVNUIiwid2lzaGxpc3RSZWR1Y2VyIiwic3BsaWNlIiwid2lzaGxpc3RBY2MiLCJyZW1vdmVGcm9tV2lzaGxpc3QiLCJtYWluU2xpZGVyMSIsInJlc3BvbnNpdmUiLCJtYWluU2xpZGVyMiIsIm1haW5TbGlkZXIzIiwibWFpblNsaWRlcjQiLCJhdXRvUGxheSIsIm1haW5TbGlkZXI1IiwibWFpblNsaWRlcjYiLCJtYWluU2xpZGVyNyIsIm1haW5TbGlkZXI4IiwibWFpblNsaWRlcjkiLCJtYWluU2xpZGVyMTAiLCJtYWluU2xpZGVyMTEiLCJtYWluU2xpZGVyMTIiLCJtYWluU2xpZGVyMTMiLCJtYWluU2xpZGVyMTQiLCJtYWluU2xpZGVyMTUiLCJtYWluU2xpZGVyMTYiLCJhdXRvcGxheVRpbWVvdXQiLCJtYWluU2xpZGVyMTciLCJtYWluU2xpZGVyMTgiLCJtYWluU2xpZGVyMTkiLCJtYWluU2xpZGVyMjAiLCJpbnRyb1NsaWRlciIsInNlcnZpY2VTbGlkZXIiLCJicmFuZFNsaWRlciIsInByb2R1Y3RTbGlkZXIiLCJwcm9kdWN0U2xpZGVyMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsZ0JBQVQsQ0FBNEJDLEtBQTVCLEVBQW9DO0FBQy9DLFFBQU07QUFBRUMsUUFBSSxHQUFHLFlBQVQ7QUFBdUJDLFFBQUksR0FBRyxDQUE5QjtBQUFpQ0MsV0FBTyxHQUFHO0FBQTNDLE1BQWtESCxLQUF4RDs7QUFFQSxRQUFNSSxRQUFRLEdBQUcsQ0FBRTtBQUFFQyxRQUFGO0FBQVFDLFNBQVI7QUFBZUMsV0FBZjtBQUF3QkMsV0FBeEI7QUFBaUNDO0FBQWpDLEdBQUYsS0FBb0Q7QUFDakUsUUFBS0EsU0FBTCxFQUFpQjtBQUNiLGFBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FBUDtBQUNILEtBRkQsTUFFTztBQUNILGFBQ0lQLElBQUksS0FBSyxDQUFULEdBQ0k7QUFBSyxpQkFBUyxFQUFJLGFBQWFDLE9BQVMsRUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssaUJBQVMsRUFBQywrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBTSxpQkFBUyxFQUFDLG1CQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBTSxpQkFBUyxFQUFDLGtCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXFDTyx3REFBTyxDQUFFTCxJQUFGLENBQTVDLENBREosRUFFSTtBQUFNLGlCQUFTLEVBQUMsa0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosQ0FESixFQU1JO0FBQU0saUJBQVMsRUFBQyxtQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQU0saUJBQVMsRUFBQyxrQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFxQ0ssd0RBQU8sQ0FBRUosS0FBRixDQUE1QyxDQURKLEVBRUk7QUFBTSxpQkFBUyxFQUFDLGtCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLENBTkosRUFXSTtBQUFNLGlCQUFTLEVBQUMsbUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFNLGlCQUFTLEVBQUMsa0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBcUNJLHdEQUFPLENBQUVILE9BQUYsQ0FBNUMsQ0FESixFQUVJO0FBQU0saUJBQVMsRUFBQyxrQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixDQVhKLEVBZUk7QUFBTSxpQkFBUyxFQUFDLG1CQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBTSxpQkFBUyxFQUFDLGtCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXFDRyx3REFBTyxDQUFFRixPQUFGLENBQTVDLENBREosRUFFSTtBQUFNLGlCQUFTLEVBQUMsa0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosQ0FmSixDQURKLENBREosR0F3Qkk7QUFBSyxpQkFBUyxFQUFDLG1EQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFNLGlCQUFTLEVBQUMseUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREosRUFHSTtBQUFLLGlCQUFTLEVBQUMscUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQU0saUJBQVMsRUFBQyx3QkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQU0saUJBQVMsRUFBQyxrQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFxQ0Usd0RBQU8sQ0FBRUwsSUFBRixDQUE1QyxNQURKLEVBRUk7QUFBTSxpQkFBUyxFQUFDLGtCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLENBREosRUFNSTtBQUFNLGlCQUFTLEVBQUMseUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFNLGlCQUFTLEVBQUMsa0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBcUNLLHdEQUFPLENBQUVKLEtBQUYsQ0FBNUMsRUFBdUQ7QUFBTSxpQkFBUyxFQUFDLFdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBdkQsQ0FESixDQU5KLEVBVUk7QUFBTSxpQkFBUyxFQUFDLDJCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBTSxpQkFBUyxFQUFDLGtCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXFDSSx3REFBTyxDQUFFSCxPQUFGLENBQTVDLEVBQXlEO0FBQU0saUJBQVMsRUFBQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQXpELENBREosQ0FWSixFQWNJO0FBQU0saUJBQVMsRUFBQywyQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQU0saUJBQVMsRUFBQyxrQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFxQ0csd0RBQU8sQ0FBRUYsT0FBRixDQUE1QyxDQURKLENBZEosQ0FISixDQXpCUjtBQWdESDtBQUNKLEdBckREOztBQXVEQSxTQUNJLE1BQUMsd0RBQUQ7QUFDSSxRQUFJLEVBQUcsSUFBSUcsSUFBSixDQUFVVixJQUFWLENBRFg7QUFFSSxZQUFRLEVBQUdHLFFBRmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKO0FBTUgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEVEO0NBR0E7O0FBQ0EsU0FBU1EsV0FBVCxDQUF1QlosS0FBdkIsRUFBK0I7QUFDM0IsUUFBTTtBQUFFRyxXQUFGO0FBQVdVO0FBQVgsTUFBdUJiLEtBQTdCO0FBQ0EsUUFBTWMsV0FBVyxHQUFHQyw2Q0FBTSxDQUFFLElBQUYsQ0FBMUI7QUFDQSxRQUFNQyxjQUFjLEdBQUc7QUFDbkJDLFNBQUssRUFBRSxDQURZO0FBRW5CQyxRQUFJLEVBQUUsS0FGYTtBQUduQkMsVUFBTSxFQUFFLENBSFc7QUFJbkJDLG1CQUFlLEVBQUUsTUFKRTtBQUtuQkMsT0FBRyxFQUFFLElBTGM7QUFNbkJDLFdBQU8sRUFBRSxDQUFFLCtCQUFGLEVBQW1DLGdDQUFuQyxDQU5VO0FBT25CQyxjQUFVLEVBQUUsUUFQTztBQVFuQkMsUUFBSSxFQUFFLElBUmE7QUFTbkJDLGNBQVUsRUFBRSxHQVRPO0FBVW5CQyxZQUFRLEVBQUUsS0FWUztBQVduQkMsY0FBVSxFQUFFLEtBWE8sQ0FZbkI7O0FBWm1CLEdBQXZCO0FBZUFDLGtEQUFTLENBQUUsTUFBTTtBQUNiLFFBQUs1QixLQUFLLENBQUM2QixXQUFYLEVBQXlCO0FBQ3JCN0IsV0FBSyxDQUFDNkIsV0FBTixDQUFtQmYsV0FBbkI7QUFDSDtBQUNKLEdBSlEsRUFJTixDQUFFQSxXQUFGLENBSk0sQ0FBVDtBQU1BLE1BQUlnQixNQUFNLEdBQUc7QUFDVEMsZ0JBQVksRUFBRSxVQUFXQyxDQUFYLEVBQWU7QUFDekIsVUFBSyxDQUFDQSxDQUFDLENBQUNDLE1BQVIsRUFBaUI7O0FBQ2pCLFVBQUtqQyxLQUFLLENBQUNrQyxhQUFYLEVBQTJCO0FBQ3ZCbEMsYUFBSyxDQUFDa0MsYUFBTixDQUFxQkYsQ0FBQyxDQUFDRyxJQUFGLENBQU9DLEtBQTVCO0FBQ0g7QUFDSjtBQU5RLEdBQWI7QUFTQU4sUUFBTSxHQUFHTyxNQUFNLENBQUNDLE1BQVAsQ0FBZSxFQUFmLEVBQW1CUixNQUFuQixFQUEyQjlCLEtBQUssQ0FBQzhCLE1BQWpDLENBQVQ7QUFDQSxNQUFJUyxRQUFRLEdBQUdGLE1BQU0sQ0FBQ0MsTUFBUCxDQUFlLEVBQWYsRUFBbUJ0QixjQUFuQixFQUFtQ0gsT0FBbkMsQ0FBZjtBQUVBLFNBQ0liLEtBQUssQ0FBQ3dDLFFBQU4sR0FDSXhDLEtBQUssQ0FBQ3dDLFFBQU4sQ0FBZUMsTUFBZixHQUF3QixDQUF4QixJQUErQnpDLEtBQUssQ0FBQ3dDLFFBQU4sSUFBa0J4QyxLQUFLLENBQUN3QyxRQUFOLENBQWVDLE1BQWYsS0FBMEJDLFNBQTNFLEdBQ0ksTUFBQyw0REFBRDtBQUFVLE9BQUcsRUFBRzVCLFdBQWhCO0FBQThCLGFBQVMsRUFBSSxnQkFBZ0JYLE9BQVMsRUFBcEU7QUFBd0UsV0FBTyxFQUFHb0MsUUFBbEY7QUFBNkYsVUFBTSxFQUFHVCxNQUF0RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ005QixLQUFLLENBQUN3QyxRQURaLENBREosR0FJTSxFQUxWLEdBTU0sRUFQVjtBQVNIOztBQUVELDRFQUFlRyxpREFBQSxDQUFZL0IsV0FBWixDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUVBO0FBRUE7QUFFZSxTQUFTZ0MsU0FBVCxDQUFxQjVDLEtBQXJCLEVBQTZCO0FBQ3hDLFFBQU07QUFBRTZDO0FBQUYsTUFBYzdDLEtBQXBCO0FBRUEsU0FDSTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBb0MsU0FBSyxFQUFHO0FBQUU4QyxTQUFHLEVBQUU7QUFBUCxLQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsaUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixFQUdJO0FBQUssYUFBUyxFQUFDLDhDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFRLGFBQVMsRUFBQywwQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMscUVBQUQ7QUFBTyxRQUFJLEVBQUksb0JBQW9CRCxPQUFPLENBQUNFLElBQU0sRUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0ksT0FBRyxFQUFHQyx3QkFBQSxHQUFvQ0gsT0FBTyxDQUFDSSxRQUFSLENBQWtCLENBQWxCLEVBQXNCQyxHQURwRTtBQUVJLE9BQUcsRUFBQyxTQUZSO0FBR0ksU0FBSyxFQUFDLElBSFY7QUFJSSxVQUFNLEVBQUMsSUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixDQURKLEVBV0k7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMscUVBQUQ7QUFBTyxRQUFJLEVBQUksb0JBQW9CTCxPQUFPLENBQUNFLElBQU0sRUFBakQ7QUFBcUQsYUFBUyxFQUFDLGNBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZ0ZGLE9BQU8sQ0FBQ00sSUFBeEYsQ0FESixFQUVJO0FBQU0sYUFBUyxFQUFDLFdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFNLGFBQVMsRUFBQyxrQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFxQ04sT0FBTyxDQUFDTyxHQUE3QyxDQURKLEVBRUk7QUFBTSxhQUFTLEVBQUMsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFtQ0MsaURBQVMsQ0FBRVIsT0FBTyxDQUFDUyxLQUFWLENBQTVDLENBRkosQ0FGSixDQVhKLENBSEosRUF1Qkk7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMscUVBQUQ7QUFBTyxRQUFJLEVBQUMsYUFBWjtBQUEwQixhQUFTLEVBQUMsZ0RBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosRUFFSSxNQUFDLHFFQUFEO0FBQU8sUUFBSSxFQUFDLGlCQUFaO0FBQThCLGFBQVMsRUFBQyxvQ0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixDQXZCSixDQURKLENBREo7QUFnQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDRDtBQUVlLFNBQVNDLFFBQVQsT0FBMkM7QUFBQSxNQUF4QjtBQUFFSCxPQUFHLEdBQUc7QUFBUixHQUF3QjtBQUFBLE1BQVZwRCxLQUFVOztBQUN0RCxRQUFNO0FBQUVHLFdBQU8sR0FBRztBQUFaLE1BQW1DSCxLQUF6QztBQUNBLFFBQU07QUFBQSxPQUFFd0QsUUFBRjtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLCtDQUFRLENBQUVDLFFBQVEsQ0FBRVAsR0FBRixDQUFWLENBQTFDO0FBRUF4QixrREFBUyxDQUFFLE1BQU07QUFDYjZCLGVBQVcsQ0FBRUwsR0FBRixDQUFYO0FBQ0gsR0FGUSxFQUVOLENBQUVwRCxLQUFLLENBQUM2QyxPQUFSLENBRk0sQ0FBVDtBQUlBakIsa0RBQVMsQ0FBRSxNQUFNO0FBQ2I1QixTQUFLLENBQUM0RCxXQUFOLElBQXFCNUQsS0FBSyxDQUFDNEQsV0FBTixDQUFtQkosUUFBbkIsQ0FBckI7QUFDSCxHQUZRLEVBRU4sQ0FBRUEsUUFBRixDQUZNLENBQVQ7O0FBSUEsV0FBU0ssYUFBVCxHQUF5QjtBQUNyQixRQUFLTCxRQUFRLEdBQUcsQ0FBaEIsRUFBb0I7QUFDaEJDLGlCQUFXLENBQUVFLFFBQVEsQ0FBRUgsUUFBRixDQUFSLEdBQXVCLENBQXpCLENBQVg7QUFDSDtBQUNKOztBQUVELFdBQVNNLFlBQVQsR0FBd0I7QUFDcEIsUUFBS04sUUFBUSxHQUFHeEQsS0FBSyxDQUFDK0QsR0FBdEIsRUFBNEI7QUFDeEJOLGlCQUFXLENBQUVFLFFBQVEsQ0FBRUgsUUFBRixDQUFSLEdBQXVCLENBQXpCLENBQVg7QUFDSDtBQUNKOztBQUVELFdBQVNRLFNBQVQsQ0FBb0JoQyxDQUFwQixFQUF3QjtBQUNwQixRQUFJaUMsTUFBSjs7QUFFQSxRQUFLakMsQ0FBQyxDQUFDa0MsYUFBRixDQUFnQkMsS0FBaEIsS0FBMEIsRUFBL0IsRUFBb0M7QUFDaENGLFlBQU0sR0FBR0csSUFBSSxDQUFDQyxHQUFMLENBQVVWLFFBQVEsQ0FBRTNCLENBQUMsQ0FBQ2tDLGFBQUYsQ0FBZ0JDLEtBQWxCLENBQWxCLEVBQTZDbkUsS0FBSyxDQUFDK0QsR0FBbkQsQ0FBVDtBQUNBRSxZQUFNLEdBQUdHLElBQUksQ0FBQ0wsR0FBTCxDQUFVRSxNQUFWLEVBQWtCLENBQWxCLENBQVQ7QUFDQVIsaUJBQVcsQ0FBRVEsTUFBRixDQUFYO0FBQ0g7QUFDSjs7QUFFRCxTQUNJO0FBQUssYUFBUyxFQUFHOUQsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVEsYUFBUyxFQUFDLDZCQUFsQjtBQUFnRCxXQUFPLEVBQUcwRCxhQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFPLGFBQVMsRUFBQyx1QkFBakI7QUFBeUMsUUFBSSxFQUFDLFFBQTlDO0FBQXVELE9BQUcsRUFBQyxHQUEzRDtBQUErRCxPQUFHLEVBQUc3RCxLQUFLLENBQUMrRCxHQUEzRTtBQUFpRixTQUFLLEVBQUdQLFFBQXpGO0FBQW9HLFlBQVEsRUFBR1EsU0FBL0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0k7QUFBUSxhQUFTLEVBQUMsMkJBQWxCO0FBQThDLFdBQU8sRUFBR0YsWUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLENBREo7QUFPSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTUSxTQUFULENBQW1CdEUsS0FBbkIsRUFBMEI7QUFDdEIsTUFBSXVFLE1BQU0sR0FBR0Msc0RBQVMsRUFBdEI7QUFDQSxRQUFNO0FBQUVDLFFBQUY7QUFBUUMsZ0JBQVksR0FBRyxLQUF2QjtBQUE4QnZFLFdBQU8sR0FBRyxFQUF4QztBQUE0Q3dFLFNBQUssR0FBRztBQUFwRCxNQUE2RDNFLEtBQW5FO0FBQ0EsUUFBTTtBQUFFNEUsa0JBQUY7QUFBa0JDLGFBQWxCO0FBQTZCQztBQUE3QixNQUEwQzlFLEtBQWhEO0FBQ0EsUUFBTTtBQUFBLE9BQUMrRSxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQnRCLCtDQUFRLENBQUMsTUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDdUIsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0J4QiwrQ0FBUSxDQUFDLE1BQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ3lCLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCMUIsK0NBQVEsQ0FBQyxDQUFDLENBQUYsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQzJCLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCNUIsK0NBQVEsQ0FBQyxLQUFELENBQTVDO0FBQ0EsUUFBTTtBQUFBLE9BQUNGLFFBQUQ7QUFBQSxPQUFXK0I7QUFBWCxNQUEwQjdCLCtDQUFRLENBQUMsQ0FBRCxDQUF4QztBQUNBLE1BQUliLE9BQU8sR0FBRzRCLElBQUksSUFBSUEsSUFBSSxDQUFDNUIsT0FBM0IsQ0FUc0IsQ0FXdEI7O0FBQ0EsTUFBSTJDLFlBQUo7QUFBQSxNQUFrQkMsTUFBTSxHQUFHLEVBQTNCO0FBQUEsTUFBK0JDLEtBQUssR0FBRyxFQUF2QztBQUNBRixjQUFZLEdBQUdWLFFBQVEsQ0FBQ2EsU0FBVCxDQUFtQnhELElBQUksSUFBSUEsSUFBSSxDQUFDWSxJQUFMLEtBQWNGLE9BQU8sQ0FBQzRCLElBQVIsQ0FBYTFCLElBQXRELElBQThELENBQUMsQ0FBL0QsR0FBbUUsSUFBbkUsR0FBMEUsS0FBekY7O0FBRUEsTUFBSUYsT0FBTyxDQUFDNEIsSUFBUixJQUFnQjVCLE9BQU8sQ0FBQzRCLElBQVIsQ0FBYW1CLFFBQWIsQ0FBc0JuRCxNQUF0QixHQUErQixDQUFuRCxFQUFzRDtBQUNsRCxRQUFJSSxPQUFPLENBQUM0QixJQUFSLENBQWFtQixRQUFiLENBQXNCLENBQXRCLEVBQXlCQyxJQUE3QixFQUNJaEQsT0FBTyxDQUFDNEIsSUFBUixDQUFhbUIsUUFBYixDQUFzQkUsT0FBdEIsQ0FBOEIzRCxJQUFJLElBQUk7QUFDbEMsVUFBSXVELEtBQUssQ0FBQ0MsU0FBTixDQUFnQkUsSUFBSSxJQUFJQSxJQUFJLENBQUMxQyxJQUFMLEtBQWNoQixJQUFJLENBQUMwRCxJQUFMLENBQVUxQyxJQUFoRCxNQUEwRCxDQUFDLENBQS9ELEVBQWtFO0FBQzlEdUMsYUFBSyxDQUFDSyxJQUFOLENBQVc7QUFBRTVDLGNBQUksRUFBRWhCLElBQUksQ0FBQzBELElBQUwsQ0FBVTFDLElBQWxCO0FBQXdCZ0IsZUFBSyxFQUFFaEMsSUFBSSxDQUFDMEQsSUFBTCxDQUFVQTtBQUF6QyxTQUFYO0FBQ0g7QUFDSixLQUpEOztBQU1KLFFBQUloRCxPQUFPLENBQUM0QixJQUFSLENBQWFtQixRQUFiLENBQXNCLENBQXRCLEVBQXlCSSxLQUE3QixFQUFvQztBQUNoQ25ELGFBQU8sQ0FBQzRCLElBQVIsQ0FBYW1CLFFBQWIsQ0FBc0JFLE9BQXRCLENBQThCM0QsSUFBSSxJQUFJO0FBQ2xDLFlBQUlzRCxNQUFNLENBQUNFLFNBQVAsQ0FBaUJLLEtBQUssSUFBSUEsS0FBSyxDQUFDN0MsSUFBTixLQUFlaEIsSUFBSSxDQUFDNkQsS0FBTCxDQUFXN0MsSUFBcEQsTUFBOEQsQ0FBQyxDQUFuRSxFQUNJc0MsTUFBTSxDQUFDTSxJQUFQLENBQVk7QUFBRTVDLGNBQUksRUFBRWhCLElBQUksQ0FBQzZELEtBQUwsQ0FBVzdDLElBQW5CO0FBQXlCZ0IsZUFBSyxFQUFFaEMsSUFBSSxDQUFDNkQsS0FBTCxDQUFXQTtBQUEzQyxTQUFaO0FBQ1AsT0FIRDtBQUlIO0FBQ0o7O0FBRURwRSxrREFBUyxDQUFDLE1BQU07QUFDWixXQUFPLE1BQU07QUFDVHdELGlCQUFXLENBQUMsQ0FBQyxDQUFGLENBQVg7QUFDQWEsdUJBQWlCO0FBQ3BCLEtBSEQ7QUFJSCxHQUxRLEVBS04sQ0FBQ3BELE9BQUQsQ0FMTSxDQUFUO0FBT0FqQixrREFBUyxDQUFDLE1BQU07QUFDWixRQUFJaUIsT0FBTyxDQUFDNEIsSUFBUixDQUFhbUIsUUFBYixDQUFzQm5ELE1BQXRCLEdBQStCLENBQW5DLEVBQXNDO0FBQ2xDLFVBQUt3QyxPQUFPLEtBQUssTUFBWixJQUFzQkYsUUFBUSxLQUFLLE1BQXBDLElBQWdERSxPQUFPLEtBQUssTUFBWixJQUFzQnBDLE9BQU8sQ0FBQzRCLElBQVIsQ0FBYW1CLFFBQWIsQ0FBc0IsQ0FBdEIsRUFBeUJDLElBQXpCLEtBQWtDLElBQXhELElBQWdFZCxRQUFRLEtBQUssTUFBN0gsSUFBeUlBLFFBQVEsS0FBSyxNQUFiLElBQXVCbEMsT0FBTyxDQUFDNEIsSUFBUixDQUFhbUIsUUFBYixDQUFzQixDQUF0QixFQUF5QkksS0FBekIsS0FBbUMsSUFBMUQsSUFBa0VmLE9BQU8sS0FBSyxNQUEzTixFQUFvTztBQUNoT0sscUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDQUYsbUJBQVcsQ0FBQ3ZDLE9BQU8sQ0FBQzRCLElBQVIsQ0FBYW1CLFFBQWIsQ0FBc0JELFNBQXRCLENBQWdDeEQsSUFBSSxJQUFLQSxJQUFJLENBQUMwRCxJQUFMLEtBQWMsSUFBZCxJQUFzQjFELElBQUksQ0FBQzZELEtBQUwsS0FBZSxJQUFyQyxJQUE2QzdELElBQUksQ0FBQzZELEtBQUwsQ0FBVzdDLElBQVgsS0FBb0I0QixRQUFqRSxJQUE2RTVDLElBQUksQ0FBQzBELElBQUwsQ0FBVTFDLElBQVYsS0FBbUI4QixPQUFqRyxJQUE4RzlDLElBQUksQ0FBQzBELElBQUwsS0FBYyxJQUFkLElBQXNCMUQsSUFBSSxDQUFDNkQsS0FBTCxDQUFXN0MsSUFBWCxLQUFvQjRCLFFBQXhKLElBQXNLNUMsSUFBSSxDQUFDNkQsS0FBTCxLQUFlLElBQWYsSUFBdUI3RCxJQUFJLENBQUMwRCxJQUFMLENBQVUxQyxJQUFWLEtBQW1COEIsT0FBeFAsQ0FBRCxDQUFYO0FBQ0gsT0FIRCxNQUdPO0FBQ0hLLHFCQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0g7QUFDSixLQVBELE1BT087QUFDSEEsbUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDSDs7QUFFRCxRQUFJekMsT0FBTyxDQUFDcUQsS0FBUixLQUFrQixDQUF0QixFQUF5QjtBQUNyQlosbUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDSDtBQUNKLEdBZlEsRUFlTixDQUFDUCxRQUFELEVBQVdFLE9BQVgsRUFBb0JwQyxPQUFwQixDQWZNLENBQVQ7O0FBaUJBLFFBQU1zRCxlQUFlLEdBQUluRSxDQUFELElBQU87QUFDM0JBLEtBQUMsQ0FBQ29FLGNBQUY7O0FBRUEsUUFBSXhCLGNBQWMsSUFBSSxDQUFDWSxZQUF2QixFQUFxQztBQUNqQyxVQUFJdEIsYUFBYSxHQUFHbEMsQ0FBQyxDQUFDa0MsYUFBdEI7QUFDQUEsbUJBQWEsQ0FBQ21DLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLG1CQUE1QixFQUFpRCxTQUFqRDtBQUNBMUIsb0JBQWMsQ0FBQy9CLE9BQU8sQ0FBQzRCLElBQVQsQ0FBZDtBQUVBOEIsZ0JBQVUsQ0FBQyxNQUFNO0FBQ2JyQyxxQkFBYSxDQUFDbUMsU0FBZCxDQUF3QkcsTUFBeEIsQ0FBK0IsbUJBQS9CLEVBQW9ELFNBQXBEO0FBQ0gsT0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdILEtBUkQsTUFRTztBQUNIakMsWUFBTSxDQUFDd0IsSUFBUCxDQUFZLGlCQUFaO0FBQ0g7QUFDSixHQWREOztBQWdCQSxRQUFNVSxlQUFlLEdBQUl6RSxDQUFELElBQU87QUFDM0JnRCxlQUFXLENBQUNoRCxDQUFDLENBQUNDLE1BQUYsQ0FBU2tDLEtBQVYsQ0FBWDtBQUNILEdBRkQ7O0FBSUEsUUFBTXVDLGNBQWMsR0FBSTFFLENBQUQsSUFBTztBQUMxQmtELGNBQVUsQ0FBQ2xELENBQUMsQ0FBQ0MsTUFBRixDQUFTa0MsS0FBVixDQUFWO0FBQ0gsR0FGRDs7QUFJQSxRQUFNd0MsZ0JBQWdCLEdBQUcsTUFBTTtBQUMzQixRQUFJOUQsT0FBTyxDQUFDNEIsSUFBUixDQUFheUIsS0FBYixHQUFxQixDQUFyQixJQUEwQmIsVUFBOUIsRUFBMEM7QUFDdEMsVUFBSXhDLE9BQU8sQ0FBQzRCLElBQVIsQ0FBYW1CLFFBQWIsQ0FBc0JuRCxNQUF0QixHQUErQixDQUFuQyxFQUFzQztBQUNsQyxZQUFJbUUsT0FBTyxHQUFHL0QsT0FBTyxDQUFDNEIsSUFBUixDQUFhdEIsSUFBM0I7QUFBQSxZQUFpQzBELFFBQWpDO0FBQ0FELGVBQU8sSUFBSTdCLFFBQVEsS0FBSyxNQUFiLEdBQXNCLE1BQU1BLFFBQTVCLEdBQXVDLEVBQWxEO0FBQ0E2QixlQUFPLElBQUkzQixPQUFPLEtBQUssTUFBWixHQUFxQixNQUFNQSxPQUEzQixHQUFxQyxFQUFoRDs7QUFFQSxZQUFJcEMsT0FBTyxDQUFDNEIsSUFBUixDQUFhbkIsS0FBYixDQUFtQixDQUFuQixNQUEwQlQsT0FBTyxDQUFDNEIsSUFBUixDQUFhbkIsS0FBYixDQUFtQixDQUFuQixDQUE5QixFQUFxRDtBQUNqRHVELGtCQUFRLEdBQUdoRSxPQUFPLENBQUM0QixJQUFSLENBQWFuQixLQUFiLENBQW1CLENBQW5CLENBQVg7QUFDSCxTQUZELE1BRU8sSUFBSSxDQUFDVCxPQUFPLENBQUM0QixJQUFSLENBQWFtQixRQUFiLENBQXNCLENBQXRCLEVBQXlCdEMsS0FBMUIsSUFBbUNULE9BQU8sQ0FBQzRCLElBQVIsQ0FBYXFDLFFBQWIsR0FBd0IsQ0FBL0QsRUFBa0U7QUFDckVELGtCQUFRLEdBQUdoRSxPQUFPLENBQUM0QixJQUFSLENBQWFuQixLQUFiLENBQW1CLENBQW5CLENBQVg7QUFDSCxTQUZNLE1BRUE7QUFDSHVELGtCQUFRLEdBQUdoRSxPQUFPLENBQUM0QixJQUFSLENBQWFtQixRQUFiLENBQXNCVCxRQUF0QixFQUFnQzRCLFVBQWhDLEdBQTZDbEUsT0FBTyxDQUFDNEIsSUFBUixDQUFhbUIsUUFBYixDQUFzQlQsUUFBdEIsRUFBZ0M0QixVQUE3RSxHQUEwRmxFLE9BQU8sQ0FBQzRCLElBQVIsQ0FBYW1CLFFBQWIsQ0FBc0JULFFBQXRCLEVBQWdDN0IsS0FBckk7QUFDSDs7QUFFRHVCLGlCQUFTLGlDQUFNaEMsT0FBTyxDQUFDNEIsSUFBZDtBQUFvQnRCLGNBQUksRUFBRXlELE9BQTFCO0FBQW1DeEQsYUFBRyxFQUFFSSxRQUF4QztBQUFrREYsZUFBSyxFQUFFdUQ7QUFBekQsV0FBVDtBQUNILE9BZEQsTUFjTztBQUNIaEMsaUJBQVMsaUNBQU1oQyxPQUFPLENBQUM0QixJQUFkO0FBQW9CckIsYUFBRyxFQUFFSSxRQUF6QjtBQUFtQ0YsZUFBSyxFQUFFVCxPQUFPLENBQUM0QixJQUFSLENBQWFuQixLQUFiLENBQW1CLENBQW5CO0FBQTFDLFdBQVQ7QUFDSDtBQUNKO0FBQ0osR0FwQkQ7O0FBc0JBLFFBQU0yQyxpQkFBaUIsR0FBSWpFLENBQUQsSUFBTztBQUM3QmdELGVBQVcsQ0FBQyxNQUFELENBQVg7QUFDQUUsY0FBVSxDQUFDLE1BQUQsQ0FBVjtBQUNILEdBSEQ7O0FBS0EsV0FBUzhCLFVBQVQsQ0FBb0JoQixLQUFwQixFQUEyQkgsSUFBM0IsRUFBaUM7QUFDN0IsUUFBSUcsS0FBSyxLQUFLLE1BQVYsSUFBb0JILElBQUksS0FBSyxNQUFqQyxFQUF5QyxPQUFPLEtBQVA7O0FBRXpDLFFBQUlILEtBQUssQ0FBQ2pELE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDcEIsYUFBT0ksT0FBTyxDQUFDNEIsSUFBUixDQUFhbUIsUUFBYixDQUFzQkQsU0FBdEIsQ0FBZ0N4RCxJQUFJLElBQUlBLElBQUksQ0FBQzZELEtBQUwsQ0FBVzdDLElBQVgsS0FBb0I0QixRQUE1RCxNQUEwRSxDQUFDLENBQWxGO0FBQ0g7O0FBRUQsUUFBSVUsTUFBTSxDQUFDaEQsTUFBUCxLQUFrQixDQUF0QixFQUF5QjtBQUNyQixhQUFPSSxPQUFPLENBQUM0QixJQUFSLENBQWFtQixRQUFiLENBQXNCRCxTQUF0QixDQUFnQ3hELElBQUksSUFBSUEsSUFBSSxDQUFDMEQsSUFBTCxDQUFVMUMsSUFBVixLQUFtQjhCLE9BQTNELE1BQXdFLENBQUMsQ0FBaEY7QUFDSDs7QUFFRCxXQUFPcEMsT0FBTyxDQUFDNEIsSUFBUixDQUFhbUIsUUFBYixDQUFzQkQsU0FBdEIsQ0FBZ0N4RCxJQUFJLElBQUlBLElBQUksQ0FBQzZELEtBQUwsQ0FBVzdDLElBQVgsS0FBb0I2QyxLQUFwQixJQUE2QjdELElBQUksQ0FBQzBELElBQUwsQ0FBVTFDLElBQVYsS0FBbUIwQyxJQUF4RixNQUFrRyxDQUFDLENBQTFHO0FBQ0g7O0FBRUQsV0FBUzdCLFNBQVQsQ0FBbUJaLEdBQW5CLEVBQXdCO0FBQ3BCbUMsZUFBVyxDQUFDbkMsR0FBRCxDQUFYO0FBQ0g7O0FBRUQsU0FDSTtBQUFLLGFBQVMsRUFBRSxxQkFBcUJqRCxPQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVF3RSxLQUFLLEdBQ0Q7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFDLDBCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUksTUFBQyxxRUFBRDtBQUFPLFFBQUksRUFBQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZ0I7QUFBRyxhQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQWhCLENBQUosQ0FESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSSxNQUFDLHFFQUFEO0FBQU8sUUFBSSxFQUFDLEdBQVo7QUFBZ0IsYUFBUyxFQUFDLFFBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQUosQ0FGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixDQURKLEVBT0ksTUFBQyw2RUFBRDtBQUFZLFdBQU8sRUFBRTlCLE9BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixDQURDLEdBU1EsRUFYckIsRUFjSTtBQUFJLGFBQVMsRUFBQyxjQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBOEJBLE9BQU8sQ0FBQzRCLElBQVIsQ0FBYXRCLElBQTNDLENBZEosRUFnQkk7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQ1M7QUFBTSxhQUFTLEVBQUMsYUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUErQk4sT0FBTyxDQUFDNEIsSUFBUixDQUFhd0MsR0FBNUMsQ0FEVCxrQkFFZ0I7QUFBTSxhQUFTLEVBQUMsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVKcEUsT0FBTyxDQUFDNEIsSUFBUixDQUFheUMsVUFBYixDQUF3QkMsR0FBeEIsQ0FBNEIsQ0FBQ2hGLElBQUQsRUFBT0MsS0FBUCxLQUN4QixNQUFDLHVEQUFEO0FBQWdCLE9BQUcsRUFBRUQsSUFBSSxDQUFDZ0IsSUFBTCxHQUFZLEdBQVosR0FBa0JmLEtBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHFFQUFEO0FBQU8sUUFBSSxFQUFFO0FBQUVnRixjQUFRLEVBQUUsT0FBWjtBQUFxQkMsV0FBSyxFQUFFO0FBQUVDLGdCQUFRLEVBQUVuRixJQUFJLENBQUNZO0FBQWpCO0FBQTVCLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLWixJQUFJLENBQUNnQixJQURWLENBREosRUFJS2YsS0FBSyxHQUFHUyxPQUFPLENBQUM0QixJQUFSLENBQWF5QyxVQUFiLENBQXdCekUsTUFBeEIsR0FBaUMsQ0FBekMsR0FBNkMsSUFBN0MsR0FBb0QsRUFKekQsQ0FESixDQUZJLENBRmhCLENBaEJKLEVBK0JJO0FBQUssYUFBUyxFQUFDLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFUUksT0FBTyxDQUFDNEIsSUFBUixDQUFhbkIsS0FBYixDQUFtQixDQUFuQixNQUEwQlQsT0FBTyxDQUFDNEIsSUFBUixDQUFhbkIsS0FBYixDQUFtQixDQUFuQixDQUExQixHQUNJVCxPQUFPLENBQUM0QixJQUFSLENBQWFtQixRQUFiLENBQXNCbkQsTUFBdEIsS0FBaUMsQ0FBakMsSUFBdUNJLE9BQU8sQ0FBQzRCLElBQVIsQ0FBYW1CLFFBQWIsQ0FBc0JuRCxNQUF0QixHQUErQixDQUEvQixJQUFvQyxDQUFDSSxPQUFPLENBQUM0QixJQUFSLENBQWFtQixRQUFiLENBQXNCLENBQXRCLEVBQXlCdEMsS0FBckcsR0FDSSxxRUFDSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBNkJELGtEQUFTLENBQUNSLE9BQU8sQ0FBQzRCLElBQVIsQ0FBYW5CLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBRCxDQUF0QyxDQURKLEVBRUk7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQTZCRCxrREFBUyxDQUFDUixPQUFPLENBQUM0QixJQUFSLENBQWFuQixLQUFiLENBQW1CLENBQW5CLENBQUQsQ0FBdEMsQ0FGSixDQURKLEdBTUk7QUFBTSxhQUFTLEVBQUMsV0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUE4QkQsa0RBQVMsQ0FBQ1IsT0FBTyxDQUFDNEIsSUFBUixDQUFhbkIsS0FBYixDQUFtQixDQUFuQixDQUFELENBQXZDLGVBQW9FRCxrREFBUyxDQUFDUixPQUFPLENBQUM0QixJQUFSLENBQWFuQixLQUFiLENBQW1CLENBQW5CLENBQUQsQ0FBN0UsQ0FQUixHQVFNO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUE2QkQsa0RBQVMsQ0FBQ1IsT0FBTyxDQUFDNEIsSUFBUixDQUFhbkIsS0FBYixDQUFtQixDQUFuQixDQUFELENBQXRDLENBVmQsQ0EvQkosRUE4Q1FULE9BQU8sQ0FBQzRCLElBQVIsQ0FBYW5CLEtBQWIsQ0FBbUIsQ0FBbkIsTUFBMEJULE9BQU8sQ0FBQzRCLElBQVIsQ0FBYW5CLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBMUIsSUFBbURULE9BQU8sQ0FBQzRCLElBQVIsQ0FBYW1CLFFBQWIsQ0FBc0JuRCxNQUF0QixLQUFpQyxDQUFwRixHQUNJLE1BQUMsbUVBQUQ7QUFBVyxRQUFJLEVBQUUsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEdBQzZCLEVBL0NyQyxFQWtESTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTSxhQUFTLEVBQUMsU0FBaEI7QUFBMEIsU0FBSyxFQUFFO0FBQUU4RSxXQUFLLEVBQUUsS0FBSzFFLE9BQU8sQ0FBQzRCLElBQVIsQ0FBYStDLE9BQWxCLEdBQTRCO0FBQXJDLEtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQU0sYUFBUyxFQUFDLHlCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTJDbkUsa0RBQVMsQ0FBQ1IsT0FBTyxDQUFDNEIsSUFBUixDQUFhK0MsT0FBZCxDQUFwRCxDQUZKLENBREosRUFNSSxNQUFDLHFFQUFEO0FBQU8sUUFBSSxFQUFDLEdBQVo7QUFBZ0IsYUFBUyxFQUFDLGdCQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQThDM0UsT0FBTyxDQUFDNEIsSUFBUixDQUFhZ0QsT0FBM0QsZUFOSixDQWxESixFQTJESTtBQUFHLGFBQVMsRUFBQyxvQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW1DNUUsT0FBTyxDQUFDNEIsSUFBUixDQUFhaUQsaUJBQWhELENBM0RKLEVBOERRN0UsT0FBTyxJQUFJQSxPQUFPLENBQUM0QixJQUFSLENBQWFtQixRQUFiLENBQXNCbkQsTUFBdEIsR0FBK0IsQ0FBMUMsR0FDSSxxRUFFUUksT0FBTyxDQUFDNEIsSUFBUixDQUFhbUIsUUFBYixDQUFzQixDQUF0QixFQUF5QkksS0FBekIsR0FDSTtBQUFLLGFBQVMsRUFBQywrQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBRUk7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUSxRQUFJLEVBQUMsT0FBYjtBQUFxQixhQUFTLEVBQUMsMkJBQS9CO0FBQTJELFlBQVEsRUFBRVMsZUFBckU7QUFBc0YsU0FBSyxFQUFFMUIsUUFBN0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVEsU0FBSyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixFQUdRVSxNQUFNLENBQUMwQixHQUFQLENBQVdoRixJQUFJLElBQ1gsQ0FBQzZFLFVBQVUsQ0FBQzdFLElBQUksQ0FBQ2dCLElBQU4sRUFBWThCLE9BQVosQ0FBWCxHQUNJO0FBQVEsU0FBSyxFQUFFOUMsSUFBSSxDQUFDZ0IsSUFBcEI7QUFBMEIsT0FBRyxFQUFFLFdBQVdoQixJQUFJLENBQUNnQixJQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNEaEIsSUFBSSxDQUFDZ0IsSUFBM0QsQ0FESixHQUNnRixFQUZwRixDQUhSLENBREosQ0FGSixDQURKLEdBY2EsRUFoQnJCLEVBb0JRTixPQUFPLENBQUM0QixJQUFSLENBQWFtQixRQUFiLENBQXNCLENBQXRCLEVBQXlCQyxJQUF6QixHQUNJO0FBQUssYUFBUyxFQUFDLHdEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosRUFFSTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUSxRQUFJLEVBQUMsTUFBYjtBQUFvQixhQUFTLEVBQUMsMEJBQTlCO0FBQXlELFlBQVEsRUFBRWEsY0FBbkU7QUFBbUYsU0FBSyxFQUFFekIsT0FBMUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVEsU0FBSyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixFQUdRUyxLQUFLLENBQUN5QixHQUFOLENBQVVoRixJQUFJLElBQ1YsQ0FBQzZFLFVBQVUsQ0FBQ2pDLFFBQUQsRUFBVzVDLElBQUksQ0FBQ2dCLElBQWhCLENBQVgsR0FDSTtBQUFRLFNBQUssRUFBRWhCLElBQUksQ0FBQ2dCLElBQXBCO0FBQTBCLE9BQUcsRUFBRSxVQUFVaEIsSUFBSSxDQUFDZ0IsSUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFxRGhCLElBQUksQ0FBQ2dCLElBQTFELENBREosR0FDK0UsRUFGbkYsQ0FIUixDQURKLENBREosRUFhSSxNQUFDLGlFQUFEO0FBQVUsTUFBRSxFQUFFLFdBQVc0QixRQUFYLElBQXVCLFdBQVdFLE9BQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyw0REFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxxRUFBRDtBQUFPLFFBQUksRUFBQyxHQUFaO0FBQWdCLGFBQVMsRUFBQyx5QkFBMUI7QUFBb0QsV0FBTyxFQUFFZ0IsaUJBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosQ0FESixDQWJKLENBRkosQ0FESixHQXNCYSxFQTFDckIsRUE2Q0k7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsaUVBQUQ7QUFBVSxNQUFFLEVBQUVaLFVBQVUsSUFBSUYsUUFBUSxHQUFHLENBQUMsQ0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVRQSxRQUFRLEdBQUcsQ0FBQyxDQUFaLEdBQ0k7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVRdEMsT0FBTyxDQUFDNEIsSUFBUixDQUFhbUIsUUFBYixDQUFzQlQsUUFBdEIsRUFBZ0M3QixLQUFoQyxHQUNJVCxPQUFPLENBQUM0QixJQUFSLENBQWFtQixRQUFiLENBQXNCVCxRQUF0QixFQUFnQzRCLFVBQWhDLEdBQ0k7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUE2QjFELGtEQUFTLENBQUNSLE9BQU8sQ0FBQzRCLElBQVIsQ0FBYW1CLFFBQWIsQ0FBc0JULFFBQXRCLEVBQWdDNEIsVUFBakMsQ0FBdEMsQ0FESixFQUVJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUE2QjFELGtEQUFTLENBQUNSLE9BQU8sQ0FBQzRCLElBQVIsQ0FBYW1CLFFBQWIsQ0FBc0JULFFBQXRCLEVBQWdDN0IsS0FBakMsQ0FBdEMsQ0FGSixDQURKLEdBS007QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUE2QkQsa0RBQVMsQ0FBQ1IsT0FBTyxDQUFDNEIsSUFBUixDQUFhbUIsUUFBYixDQUFzQlQsUUFBdEIsRUFBZ0M3QixLQUFqQyxDQUF0QyxDQURGLENBTlYsR0FTTSxFQVhkLENBREosR0FjYSxFQWhCckIsQ0FESixDQURKLENBN0NKLENBREosR0FxRVUsRUFuSWxCLEVBc0lJO0FBQUksYUFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0SUosRUF5SVFvQixZQUFZLEdBQ1I7QUFBSyxhQUFTLEVBQUMsK0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFRLGFBQVMsRUFBQyxlQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxxRUFBRDtBQUFPLFFBQUksRUFBRSxzQkFBc0I3QixPQUFPLENBQUM0QixJQUFSLENBQWExQixJQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUVDLHdCQUFBLEdBQW9DSCxPQUFPLENBQUM0QixJQUFSLENBQWF4QixRQUFiLENBQXNCLENBQXRCLEVBQXlCQyxHQUF2RTtBQUE0RSxTQUFLLEVBQUMsSUFBbEY7QUFBdUYsVUFBTSxFQUFDLElBQTlGO0FBQ0ksT0FBRyxFQUFDLFNBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosQ0FESixFQU9JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBOEIsTUFBQyxxRUFBRDtBQUFPLFFBQUksRUFBRSxzQkFBc0JMLE9BQU8sQ0FBQzRCLElBQVIsQ0FBYTFCLElBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdURGLE9BQU8sQ0FBQzRCLElBQVIsQ0FBYXRCLElBQXBFLENBQTlCLENBREosRUFFSTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVFnQyxRQUFRLEdBQUcsQ0FBQyxDQUFaLElBQWlCdEMsT0FBTyxDQUFDNEIsSUFBUixDQUFhbUIsUUFBYixDQUFzQixDQUF0QixDQUFqQixHQUNJL0MsT0FBTyxDQUFDNEIsSUFBUixDQUFhbUIsUUFBYixDQUFzQlQsUUFBdEIsRUFBZ0M3QixLQUFoQyxHQUNJVCxPQUFPLENBQUM0QixJQUFSLENBQWFtQixRQUFiLENBQXNCVCxRQUF0QixFQUFnQzRCLFVBQWhDLEdBQ0kscUVBQ0k7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQTZCMUQsa0RBQVMsQ0FBQ1IsT0FBTyxDQUFDNEIsSUFBUixDQUFhbUIsUUFBYixDQUFzQlQsUUFBdEIsRUFBZ0M0QixVQUFqQyxDQUF0QyxDQURKLEVBRUk7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQTZCMUQsa0RBQVMsQ0FBQ1IsT0FBTyxDQUFDNEIsSUFBUixDQUFhbUIsUUFBYixDQUFzQlQsUUFBdEIsRUFBZ0M3QixLQUFqQyxDQUF0QyxDQUZKLENBREosR0FNSSxxRUFDSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBNkJELGtEQUFTLENBQUNSLE9BQU8sQ0FBQzRCLElBQVIsQ0FBYW1CLFFBQWIsQ0FBc0JULFFBQXRCLEVBQWdDN0IsS0FBakMsQ0FBdEMsQ0FESixDQVBSLEdBVU0sRUFYVixHQWFJVCxPQUFPLENBQUM0QixJQUFSLENBQWFuQixLQUFiLENBQW1CLENBQW5CLE1BQTBCVCxPQUFPLENBQUM0QixJQUFSLENBQWFuQixLQUFiLENBQW1CLENBQW5CLENBQTFCLEdBQ0lULE9BQU8sQ0FBQzRCLElBQVIsQ0FBYW1CLFFBQWIsQ0FBc0JuRCxNQUF0QixLQUFpQyxDQUFqQyxHQUNJLHFFQUNJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUE2Qlksa0RBQVMsQ0FBQ1IsT0FBTyxDQUFDNEIsSUFBUixDQUFhbkIsS0FBYixDQUFtQixDQUFuQixDQUFELENBQXRDLENBREosRUFFSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBNkJELGtEQUFTLENBQUNSLE9BQU8sQ0FBQzRCLElBQVIsQ0FBYW5CLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBRCxDQUF0QyxDQUZKLENBREosR0FNSTtBQUFNLGFBQVMsRUFBQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQThCRCxrREFBUyxDQUFDUixPQUFPLENBQUM0QixJQUFSLENBQWFuQixLQUFiLENBQW1CLENBQW5CLENBQUQsQ0FBdkMsZUFBb0VELGtEQUFTLENBQUNSLE9BQU8sQ0FBQzRCLElBQVIsQ0FBYW5CLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBRCxDQUE3RSxDQVBSLEdBUU07QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQTZCRCxrREFBUyxDQUFDUixPQUFPLENBQUM0QixJQUFSLENBQWFuQixLQUFiLENBQW1CLENBQW5CLENBQUQsQ0FBdEMsQ0F2QmxCLENBREosRUE0Qkk7QUFBSyxhQUFTLEVBQUMsd0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU0sYUFBUyxFQUFDLFNBQWhCO0FBQTBCLFNBQUssRUFBRTtBQUFFaUUsV0FBSyxFQUFFLEtBQUsxRSxPQUFPLENBQUM0QixJQUFSLENBQWErQyxPQUFsQixHQUE0QjtBQUFyQyxLQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFNLGFBQVMsRUFBQyx5QkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEyQ25FLGtEQUFTLENBQUNSLE9BQU8sQ0FBQzRCLElBQVIsQ0FBYStDLE9BQWQsQ0FBcEQsQ0FGSixDQURKLEVBTUksTUFBQyxxRUFBRDtBQUFPLFFBQUksRUFBQyxHQUFaO0FBQWdCLGFBQVMsRUFBQyxnQkFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUE4QzNFLE9BQU8sQ0FBQzRCLElBQVIsQ0FBYWdELE9BQTNELGVBTkosQ0E1QkosQ0FGSixDQVBKLENBREosRUFpREk7QUFBSyxhQUFTLEVBQUMsK0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sYUFBUyxFQUFDLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixFQUVJO0FBQUssYUFBUyxFQUFDLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGtFQUFEO0FBQVUsT0FBRyxFQUFFNUUsT0FBTyxDQUFDNEIsSUFBUixDQUFheUIsS0FBNUI7QUFBbUMsV0FBTyxFQUFFckQsT0FBNUM7QUFBcUQsZUFBVyxFQUFFbUIsU0FBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBUSxhQUFTLEVBQUcsb0VBQW1FcUIsVUFBVSxHQUFHLEVBQUgsR0FBUSxVQUFXLEVBQXBIO0FBQXVILFdBQU8sRUFBRXNCLGdCQUFoSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtKO0FBQUcsYUFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFsSixnQkFGSixDQUZKLENBakRKLENBREosQ0FEUSxHQTZEUjtBQUFLLGFBQVMsRUFBQywrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxhQUFTLEVBQUMsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLEVBRUk7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsa0VBQUQ7QUFBVSxPQUFHLEVBQUU5RCxPQUFPLENBQUM0QixJQUFSLENBQWF5QixLQUE1QjtBQUFtQyxXQUFPLEVBQUVyRCxPQUE1QztBQUFxRCxlQUFXLEVBQUVtQixTQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFRLGFBQVMsRUFBRyxvRUFBbUVxQixVQUFVLEdBQUcsRUFBSCxHQUFRLFVBQVcsRUFBcEg7QUFBdUgsV0FBTyxFQUFFc0IsZ0JBQWhJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBa0o7QUFBRyxhQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQWxKLGdCQUZKLENBRkosQ0F0TVosRUErTUk7QUFBSSxhQUFTLEVBQUMsc0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQS9NSixFQWlOSTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMscUVBQUQ7QUFBTyxRQUFJLEVBQUMsR0FBWjtBQUFnQixhQUFTLEVBQUMsK0NBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMscUVBQUQ7QUFBTyxRQUFJLEVBQUMsR0FBWjtBQUFnQixhQUFTLEVBQUMsMkNBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJLE1BQUMscUVBQUQ7QUFBTyxRQUFJLEVBQUMsR0FBWjtBQUFnQixhQUFTLEVBQUMsaURBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixDQURKLE9BS1c7QUFBTSxhQUFTLEVBQUMsbUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMWCxPQUt1RDtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQVksYUFBUyxFQUFHLDBCQUF4QjtBQUFtRCxTQUFLLEVBQUVuQixZQUFZLEdBQUcsaUJBQUgsR0FBdUIsaUJBQTdGO0FBQWdILFdBQU8sRUFBRVcsZUFBekg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUMvQztBQUFHLGFBQVMsRUFBRVgsWUFBWSxHQUFHLG1CQUFILEdBQXlCLGNBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEK0MsT0FFM0NBLFlBQVksR0FBRyxpQkFBSCxHQUF1QixpQkFGUSxDQUx2RCxDQWpOSixDQURKO0FBK05IOztBQUVELFNBQVNtQyxlQUFULENBQXlCQyxLQUF6QixFQUFnQztBQUM1QixTQUFPO0FBQ0g5QyxZQUFRLEVBQUU4QyxLQUFLLENBQUM5QyxRQUFOLENBQWVMLElBQWYsR0FBc0JtRCxLQUFLLENBQUM5QyxRQUFOLENBQWVMLElBQXJDLEdBQTRDO0FBRG5ELEdBQVA7QUFHSDs7QUFFRCwrREFBZW9ELG9EQUFPLENBQUNGLGVBQUQsRUFBa0I7QUFBRS9DLGdCQUFjLEVBQUVrRCwyRUFBbEI7QUFBa0RqRCxXQUFTLEVBQUVrRCw4REFBcUJsRDtBQUFsRixDQUFsQixDQUFQLENBQStHUCxTQUEvRyxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDblhBO0FBQ0E7QUFFZSxTQUFTMEQsVUFBVCxDQUFzQmhJLEtBQXRCLEVBQThCO0FBQ3pDLFFBQU07QUFBRTZDO0FBQUYsTUFBYzdDLEtBQXBCO0FBRUEsUUFBTXVFLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFFQSxTQUNJO0FBQUksYUFBUyxFQUFDLGFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVRM0IsT0FBTyxDQUFDb0YsSUFBUixHQUNJO0FBQUksYUFBUyxFQUFJLGVBQWVwRixPQUFPLENBQUNxRixJQUFSLEdBQWUsTUFBZixHQUF3QixjQUFnQixFQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxxRUFBRDtBQUFPLFFBQUksRUFBRztBQUFFZCxjQUFRLEVBQUU3QyxNQUFNLENBQUM2QyxRQUFuQjtBQUE2QkMsV0FBSyxFQUFFO0FBQUV0RSxZQUFJLEVBQUVGLE9BQU8sQ0FBQ29GLElBQVIsQ0FBYWxGO0FBQXJCO0FBQXBDLEtBQWQ7QUFBa0YsVUFBTSxFQUFHLEtBQTNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQyxtQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosV0FFWTtBQUFNLGFBQVMsRUFBQyxtQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNKO0FBQUssT0FBRyxFQUFHQyx3QkFBQSxHQUFvQ0gsT0FBTyxDQUFDb0YsSUFBUixDQUFhaEYsUUFBYixDQUF1QixDQUF2QixFQUEyQkMsR0FBMUU7QUFDSSxPQUFHLEVBQUMsbUJBRFI7QUFDNEIsU0FBSyxFQUFDLEtBRGxDO0FBQ3dDLFVBQU0sRUFBQyxLQUQvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREksRUFHSjtBQUFNLGFBQVMsRUFBQyxjQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlDTCxPQUFPLENBQUNvRixJQUFSLENBQWE5RSxJQUE5QyxDQUhJLENBRlosQ0FESixDQURKLEdBVVksRUFacEIsRUFnQlFOLE9BQU8sQ0FBQ3FGLElBQVIsR0FDSTtBQUFJLGFBQVMsRUFBQyxrQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxxRUFBRDtBQUFPLFFBQUksRUFBRztBQUFFZCxjQUFRLEVBQUU3QyxNQUFNLENBQUM2QyxRQUFuQjtBQUE2QkMsV0FBSyxFQUFFO0FBQUV0RSxZQUFJLEVBQUVGLE9BQU8sQ0FBQ3FGLElBQVIsQ0FBYW5GO0FBQXJCO0FBQXBDLEtBQWQ7QUFBa0YsVUFBTSxFQUFHLEtBQTNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FDUztBQUFHLGFBQVMsRUFBQyxvQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFQsRUFFSTtBQUFNLGFBQVMsRUFBQyxtQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssT0FBRyxFQUFHQyx3QkFBQSxHQUFvQ0gsT0FBTyxDQUFDcUYsSUFBUixDQUFhakYsUUFBYixDQUF1QixDQUF2QixFQUEyQkMsR0FBMUU7QUFDSSxPQUFHLEVBQUMsbUJBRFI7QUFDNEIsU0FBSyxFQUFDLEtBRGxDO0FBQ3dDLFVBQU0sRUFBQyxLQUQvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFHSTtBQUFNLGFBQVMsRUFBQyxjQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlDTCxPQUFPLENBQUNxRixJQUFSLENBQWEvRSxJQUE5QyxDQUhKLENBRkosQ0FESixDQURKLEdBVVksRUExQnBCLENBREo7QUErQkgsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDRDtBQUNBO0FBRUEsTUFBTWdGLE9BQU8sR0FBSSxHQUFFbkYsd0JBQW1DLFVBQXREO0FBQ0FvRixPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0FELE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO0FBRUEsTUFBTUcsWUFBWSxHQUFHLElBQUlDLHFEQUFKLENBQWlCO0FBQ2xDQyxLQUFHLEVBQUVMLE9BRDZCO0FBRWxDTSxPQUFLLEVBQUUsSUFBSUMsdURBQUo7QUFGMkIsQ0FBakIsQ0FBckI7QUFLQSwrREFBZUMsdURBQVUsQ0FBQ0wsWUFBRCxDQUF6QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBRU8sTUFBTU0sV0FBVyxHQUFJLEtBQXJCO0FBRVAsTUFBTUMsY0FBYyxHQUFHQyxvREFBSTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBaENBO0FBa0NBLE1BQU1DLGFBQWEsR0FBR0Qsb0RBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0F0QkE7QUF3Qk8sTUFBTUUsWUFBWSxHQUFHRixvREFBSTtBQUNoQztBQUNBLHlCQUF5QkYsV0FBYTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBT0MsY0FBZ0I7QUFDdkIsQ0FaTztBQWNBLE1BQU1JLG9CQUFvQixHQUFHSCxvREFBSTtBQUN4QztBQUNBLGdDQUFnQ0YsV0FBYTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBT0csYUFBZTtBQUN0QixDQWxCTztBQW9CQSxNQUFNRyxXQUFXLEdBQUdKLG9EQUFJO0FBQy9CO0FBQ0Esd0JBQXdCRixXQUFhO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBT0MsY0FBZ0I7QUFDdkIsQ0E1Rk87QUE4RkEsTUFBTU0sU0FBUyxHQUFHTCxvREFBSTtBQUM3QjtBQUNBLHNCQUFzQkYsV0FBYTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBVk87QUFZQSxNQUFNUSxxQkFBcUIsR0FBR04sb0RBQUk7QUFDekM7QUFDQSxnQ0FBZ0NGLFdBQWE7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQTVCTztBQThCQSxNQUFNUyxTQUFTLEdBQUdQLG9EQUFJO0FBQzdCO0FBQ0Esc0JBQXNCRixXQUFhO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQW5DTztBQXFDQSxNQUFNVSxRQUFRLEdBQUdSLG9EQUFJO0FBQzVCO0FBQ0EscUJBQXFCRixXQUFhO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBbkRPO0FBcURBLE1BQU1XLHFCQUFxQixHQUFHVCxvREFBSTtBQUN6QztBQUNBLGdDQUFnQ0YsV0FBYTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBbkJPO0FBcUJBLE1BQU1ZLGFBQWEsR0FBR1Ysb0RBQUk7QUFDakM7QUFDQSxnQ0FBZ0NGLFdBQWE7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0JBLFdBQWE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFPQyxjQUFnQjtBQUN2QixDQTlDTyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdlZQO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxNQUFNWSxXQUFXLEdBQUc7QUFDaEJDLGFBQVcsRUFBRSxhQURHO0FBRWhCQyxrQkFBZ0IsRUFBRSxrQkFGRjtBQUdoQkMsYUFBVyxFQUFFLGFBSEc7QUFJaEJDLGVBQWEsRUFBRTtBQUpDLENBQXBCO0FBT0EsTUFBTUMsWUFBWSxHQUFHO0FBQ2pCckYsTUFBSSxFQUFFO0FBRFcsQ0FBckI7O0FBSUEsU0FBU3NGLFdBQVQsQ0FBc0JuQyxLQUFLLEdBQUdrQyxZQUE5QixFQUE0Q0UsTUFBNUMsRUFBcUQ7QUFDakQsVUFBU0EsTUFBTSxDQUFDOUosSUFBaEI7QUFDSSxTQUFLdUosV0FBVyxDQUFDQyxXQUFqQjtBQUNJLFVBQUlPLFVBQVUscUJBQVFELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlckgsT0FBdkIsQ0FBZDs7QUFFQSxVQUFLK0UsS0FBSyxDQUFDbkQsSUFBTixDQUFXa0IsU0FBWCxDQUFzQnhELElBQUksSUFBSUEsSUFBSSxDQUFDZ0IsSUFBTCxLQUFjNkcsTUFBTSxDQUFDRSxPQUFQLENBQWVySCxPQUFmLENBQXVCTSxJQUFuRSxJQUE0RSxDQUFDLENBQWxGLEVBQXNGO0FBQ2xGLFlBQUlnSCxPQUFPLEdBQUd2QyxLQUFLLENBQUNuRCxJQUFOLENBQVcyRixNQUFYLENBQW1CLENBQUVDLEdBQUYsRUFBT0MsR0FBUCxLQUFnQjtBQUM3QyxjQUFLQSxHQUFHLENBQUNuSCxJQUFKLEtBQWE4RyxVQUFVLENBQUM5RyxJQUE3QixFQUFvQztBQUNoQ2tILGVBQUcsQ0FBQ3RFLElBQUosaUNBQ091RSxHQURQO0FBRUlsSCxpQkFBRyxFQUFFTyxRQUFRLENBQUUyRyxHQUFHLENBQUNsSCxHQUFOLENBQVIsR0FBc0JPLFFBQVEsQ0FBRXNHLFVBQVUsQ0FBQzdHLEdBQWI7QUFGdkM7QUFJSCxXQUxELE1BS087QUFDSGlILGVBQUcsQ0FBQ3RFLElBQUosQ0FBVXVFLEdBQVY7QUFDSDs7QUFFRCxpQkFBT0QsR0FBUDtBQUNILFNBWGEsRUFXWCxFQVhXLENBQWQ7QUFhQSwrQ0FBWXpDLEtBQVo7QUFBbUJuRCxjQUFJLEVBQUUwRjtBQUF6QjtBQUNILE9BZkQsTUFlTztBQUNILCtDQUFZdkMsS0FBWjtBQUFtQm5ELGNBQUksRUFBRSxDQUFFLEdBQUdtRCxLQUFLLENBQUNuRCxJQUFYLEVBQWlCd0YsVUFBakI7QUFBekI7QUFDSDs7QUFFTCxTQUFLUixXQUFXLENBQUNFLGdCQUFqQjtBQUNJLFVBQUlZLElBQUksR0FBRzNDLEtBQUssQ0FBQ25ELElBQU4sQ0FBVzJGLE1BQVgsQ0FBbUIsQ0FBRUksT0FBRixFQUFXM0gsT0FBWCxLQUF3QjtBQUNsRCxZQUFLQSxPQUFPLENBQUNNLElBQVIsS0FBaUI2RyxNQUFNLENBQUNFLE9BQVAsQ0FBZXJILE9BQWYsQ0FBdUJNLElBQTdDLEVBQW9EO0FBQ2hEcUgsaUJBQU8sQ0FBQ3pFLElBQVIsQ0FBY2xELE9BQWQ7QUFDSDs7QUFDRCxlQUFPMkgsT0FBUDtBQUNILE9BTFUsRUFLUixFQUxRLENBQVg7QUFPQSw2Q0FBWTVDLEtBQVo7QUFBbUJuRCxZQUFJLEVBQUU4RjtBQUF6Qjs7QUFFSixTQUFLZCxXQUFXLENBQUNHLFdBQWpCO0FBQ0ksNkNBQVloQyxLQUFaO0FBQW1CbkQsWUFBSSxFQUFFdUYsTUFBTSxDQUFDRSxPQUFQLENBQWVPO0FBQXhDOztBQUVKLFNBQUtoQixXQUFXLENBQUNJLGFBQWpCO0FBQ0ksYUFBT0MsWUFBUDs7QUFFSjtBQUNJLGFBQU9sQyxLQUFQO0FBeENSO0FBMENIOztBQUVNLE1BQU1HLFdBQVcsR0FBRztBQUN2QmxELFdBQVMsRUFBRWhDLE9BQU8sS0FBTTtBQUFFM0MsUUFBSSxFQUFFdUosV0FBVyxDQUFDQyxXQUFwQjtBQUFpQ1EsV0FBTyxFQUFFO0FBQUVySDtBQUFGO0FBQTFDLEdBQU4sQ0FESztBQUV2QjZILGdCQUFjLEVBQUU3SCxPQUFPLEtBQU07QUFBRTNDLFFBQUksRUFBRXVKLFdBQVcsQ0FBQ0UsZ0JBQXBCO0FBQXNDTyxXQUFPLEVBQUU7QUFBRXJIO0FBQUY7QUFBL0MsR0FBTixDQUZBO0FBR3ZCOEgsWUFBVSxFQUFFRixRQUFRLEtBQU07QUFBRXZLLFFBQUksRUFBRXVKLFdBQVcsQ0FBQ0csV0FBcEI7QUFBaUNNLFdBQU8sRUFBRTtBQUFFTztBQUFGO0FBQTFDLEdBQU47QUFIRyxDQUFwQjtBQU1BLFVBQVVHLFFBQVYsR0FBcUI7QUFDeEIsUUFBTUMsNkRBQVMsQ0FBRXBCLFdBQVcsQ0FBQ0MsV0FBZCxFQUEyQixVQUFVb0IsSUFBVixDQUFnQjlJLENBQWhCLEVBQW9CO0FBQzFEK0kseURBQUssQ0FBRSxNQUFDLG1GQUFEO0FBQVcsYUFBTyxFQUFHL0ksQ0FBQyxDQUFDa0ksT0FBRixDQUFVckgsT0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFGLENBQUw7QUFDSCxHQUZjLENBQWY7QUFHSDtBQUVELE1BQU1tSSxhQUFhLEdBQUc7QUFDbEJDLFdBQVMsRUFBRSxRQURPO0FBRWxCQyxLQUFHLEVBQUUsTUFGYTtBQUdsQkMsU0FBT0E7QUFIVyxDQUF0QjtBQU1BLCtEQUFlQyw2REFBYyxDQUFFSixhQUFGLEVBQWlCakIsV0FBakIsQ0FBN0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUNBO0FBRUEsTUFBTU4sV0FBVyxHQUFHO0FBQ2hCNEIsWUFBVSxFQUFFLFlBREk7QUFFaEJDLGFBQVcsRUFBRSxhQUZHO0FBR2hCQyxnQkFBYyxFQUFFLGdCQUhBO0FBSWhCQyxpQkFBZSxFQUFFLGlCQUpEO0FBS2hCM0IsZUFBYSxFQUFFO0FBTEMsQ0FBcEI7QUFRQSxNQUFNQyxZQUFZLEdBQUc7QUFDakI1SixNQUFJLEVBQUUsT0FEVztBQUVqQnVMLFdBQVMsRUFBRSxLQUZNO0FBR2pCQyxXQUFTLEVBQUUsS0FITTtBQUlqQkMsWUFBVSxFQUFFO0FBSkssQ0FBckI7O0FBT0EsU0FBU0MsWUFBVCxDQUF1QmhFLEtBQUssR0FBR2tDLFlBQS9CLEVBQTZDRSxNQUE3QyxFQUFzRDtBQUNsRCxVQUFTQSxNQUFNLENBQUM5SixJQUFoQjtBQUNJLFNBQUt1SixXQUFXLENBQUM4QixjQUFqQjtBQUNJLDZDQUNPM0QsS0FEUDtBQUVJOEQsaUJBQVMsRUFBRSxJQUZmO0FBR0lDLGtCQUFVLEVBQUUzQixNQUFNLENBQUNFLE9BQVAsQ0FBZW5IO0FBSC9COztBQU1KLFNBQUswRyxXQUFXLENBQUMrQixlQUFqQjtBQUNJLDZDQUNPNUQsS0FEUDtBQUVJOEQsaUJBQVMsRUFBRTtBQUZmOztBQUtKLFNBQUtqQyxXQUFXLENBQUM0QixVQUFqQjtBQUNJLDZDQUNPekQsS0FEUDtBQUVJK0Qsa0JBQVUsRUFBRTNCLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlbkgsSUFGL0I7QUFHSTBJLGlCQUFTLEVBQUU7QUFIZjs7QUFNSixTQUFLaEMsV0FBVyxDQUFDNkIsV0FBakI7QUFDSSw2Q0FDTzFELEtBRFA7QUFFSTZELGlCQUFTLEVBQUU7QUFGZjs7QUFLSixTQUFLaEMsV0FBVyxDQUFDSSxhQUFqQjtBQUNJLGFBQU9DLFlBQVA7O0FBRUo7QUFDSSxhQUFPbEMsS0FBUDtBQS9CUjtBQWlDSDs7QUFFTSxNQUFNaUUsWUFBWSxHQUFHO0FBQ3hCSixXQUFTLEVBQUUxSSxJQUFJLEtBQU07QUFBRTdDLFFBQUksRUFBRXVKLFdBQVcsQ0FBQzRCLFVBQXBCO0FBQWdDbkIsV0FBTyxFQUFFO0FBQUVuSDtBQUFGO0FBQXpDLEdBQU4sQ0FEUztBQUV4QitJLFlBQVUsRUFBRUMsU0FBUyxLQUFNO0FBQUU3TCxRQUFJLEVBQUV1SixXQUFXLENBQUM2QixXQUFwQjtBQUFpQ3BCLFdBQU8sRUFBRTtBQUFFNkI7QUFBRjtBQUExQyxHQUFOLENBRkc7QUFHeEJDLGVBQWEsRUFBRWpKLElBQUksS0FBTTtBQUFFN0MsUUFBSSxFQUFFdUosV0FBVyxDQUFDOEIsY0FBcEI7QUFBb0NyQixXQUFPLEVBQUU7QUFBRW5IO0FBQUY7QUFBN0MsR0FBTixDQUhLO0FBSXhCa0osZ0JBQWMsRUFBRSxPQUFRO0FBQUUvTCxRQUFJLEVBQUV1SixXQUFXLENBQUMrQjtBQUFwQixHQUFSO0FBSlEsQ0FBckI7QUFPUCxNQUFNUixhQUFhLEdBQUc7QUFDbEJDLFdBQVMsRUFBRSxRQURPO0FBRWxCQyxLQUFHLEVBQUUsT0FGYTtBQUdsQkMsU0FBT0E7QUFIVyxDQUF0QjtBQU1BLCtEQUFlQyw2REFBYyxDQUFFSixhQUFGLEVBQWlCWSxZQUFqQixDQUE3QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBO0FBQ0E7QUFFQSxNQUFNbkMsV0FBVyxHQUFHO0FBQ2hCeUMsaUJBQWUsRUFBRSxpQkFERDtBQUVoQkMsc0JBQW9CLEVBQUUsc0JBRk47QUFHaEJ0QyxlQUFhLEVBQUU7QUFIQyxDQUFwQjtBQU1BLE1BQU1DLFlBQVksR0FBRztBQUNqQnJGLE1BQUksRUFBRTtBQURXLENBQXJCOztBQUlBLFNBQVMySCxlQUFULENBQTBCeEUsS0FBSyxHQUFHa0MsWUFBbEMsRUFBZ0RFLE1BQWhELEVBQXlEO0FBQ3JELFVBQVNBLE1BQU0sQ0FBQzlKLElBQWhCO0FBQ0ksU0FBS3VKLFdBQVcsQ0FBQ3lDLGVBQWpCO0FBQ0ksVUFBSTlKLEtBQUssR0FBR3dGLEtBQUssQ0FBQ25ELElBQU4sQ0FBV2tCLFNBQVgsQ0FBc0J4RCxJQUFJLElBQUlBLElBQUksQ0FBQ2dCLElBQUwsS0FBYzZHLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlckgsT0FBZixDQUF1Qk0sSUFBbkUsQ0FBWjtBQUNBLFVBQUlnSCxPQUFPLEdBQUcsQ0FBRSxHQUFHdkMsS0FBSyxDQUFDbkQsSUFBWCxDQUFkOztBQUVBLFVBQUtyQyxLQUFLLEtBQUssQ0FBQyxDQUFoQixFQUFvQjtBQUNoQitILGVBQU8sQ0FBQ3BFLElBQVIsQ0FBY2lFLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlckgsT0FBN0I7QUFDSCxPQUZELE1BRU87QUFDSHNILGVBQU8sQ0FBQ2tDLE1BQVIsQ0FBZ0JqSyxLQUFoQjtBQUNIOztBQUVELDZDQUFZd0YsS0FBWjtBQUFtQm5ELFlBQUksRUFBRTBGO0FBQXpCOztBQUVKLFNBQUtWLFdBQVcsQ0FBQzBDLG9CQUFqQjtBQUNJLFVBQUlySCxRQUFRLEdBQUc4QyxLQUFLLENBQUNuRCxJQUFOLENBQVcyRixNQUFYLENBQW1CLENBQUVrQyxXQUFGLEVBQWV6SixPQUFmLEtBQTRCO0FBQzFELFlBQUtBLE9BQU8sQ0FBQ00sSUFBUixLQUFpQjZHLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlckgsT0FBZixDQUF1Qk0sSUFBN0MsRUFBb0Q7QUFDaERtSixxQkFBVyxDQUFDdkcsSUFBWixDQUFrQmxELE9BQWxCO0FBQ0g7O0FBQ0QsZUFBT3lKLFdBQVA7QUFDSCxPQUxjLEVBS1osRUFMWSxDQUFmO0FBT0EsNkNBQVkxRSxLQUFaO0FBQW1CbkQsWUFBSSxFQUFFSztBQUF6Qjs7QUFFSixTQUFLMkUsV0FBVyxDQUFDSSxhQUFqQjtBQUNJLGFBQU9DLFlBQVA7O0FBRUo7QUExQko7O0FBNEJBLFNBQU9sQyxLQUFQO0FBQ0g7O0FBRU0sTUFBTUUsZUFBZSxHQUFHO0FBQzNCbEQsZ0JBQWMsRUFBRS9CLE9BQU8sS0FBTTtBQUFFM0MsUUFBSSxFQUFFdUosV0FBVyxDQUFDeUMsZUFBcEI7QUFBcUNoQyxXQUFPLEVBQUU7QUFBRXJIO0FBQUY7QUFBOUMsR0FBTixDQURJO0FBRTNCMEosb0JBQWtCLEVBQUUxSixPQUFPLEtBQU07QUFBRTNDLFFBQUksRUFBRXVKLFdBQVcsQ0FBQzBDLG9CQUFwQjtBQUEwQ2pDLFdBQU8sRUFBRTtBQUFFckg7QUFBRjtBQUFuRCxHQUFOO0FBRkEsQ0FBeEI7QUFLUCxNQUFNbUksYUFBYSxHQUFHO0FBQ2xCQyxXQUFTLEVBQUUsUUFETztBQUVsQkMsS0FBRyxFQUFFLFVBRmE7QUFHbEJDLFNBQU9BO0FBSFcsQ0FBdEI7QUFNQSwrREFBZUMsNkRBQWMsQ0FBRUosYUFBRixFQUFpQm9CLGVBQWpCLENBQTdCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hETyxNQUFNSSxXQUFXLEdBQUc7QUFDdkJ2TCxPQUFLLEVBQUUsQ0FEZ0I7QUFFdkJJLEtBQUcsRUFBRSxLQUZrQjtBQUd2QkgsTUFBSSxFQUFFLEtBSGlCO0FBSXZCTSxNQUFJLEVBQUUsSUFKaUI7QUFLdkJMLFFBQU0sRUFBRSxDQUxlO0FBTXZCc0wsWUFBVSxFQUFFO0FBQ1IsT0FBRztBQUNDeEwsV0FBSyxFQUFFO0FBRFIsS0FESztBQUlSLFNBQUs7QUFDREEsV0FBSyxFQUFFO0FBRE4sS0FKRztBQU9SLFNBQUs7QUFDREEsV0FBSyxFQUFFO0FBRE4sS0FQRztBQVVSLFVBQU07QUFDRkEsV0FBSyxFQUFFLENBREw7QUFFRk8sVUFBSSxFQUFFO0FBRko7QUFWRTtBQU5XLENBQXBCO0FBdUJBLE1BQU1rTCxXQUFXLEdBQUc7QUFDdkJ6TCxPQUFLLEVBQUUsQ0FEZ0I7QUFFdkJDLE1BQUksRUFBRSxLQUZpQjtBQUd2QkcsS0FBRyxFQUFFLElBSGtCO0FBSXZCRyxNQUFJLEVBQUUsSUFKaUI7QUFLdkJpTCxZQUFVLEVBQUU7QUFDUixPQUFHO0FBQ0N4TCxXQUFLLEVBQUU7QUFEUixLQURLO0FBSVIsU0FBSztBQUNEQSxXQUFLLEVBQUU7QUFETixLQUpHO0FBT1IsU0FBSztBQUNEQSxXQUFLLEVBQUU7QUFETjtBQVBHO0FBTFcsQ0FBcEI7QUFrQkEsTUFBTTBMLFdBQVcsR0FBRztBQUN2QmhMLFlBQVUsRUFBRSxLQURXO0FBRXZCSCxNQUFJLEVBQUUsS0FGaUI7QUFHdkJILEtBQUcsRUFBRSxJQUhrQixDQUl2Qjs7QUFKdUIsQ0FBcEI7QUFPQSxNQUFNdUwsV0FBVyxHQUFHO0FBQ3ZCdkwsS0FBRyxFQUFFLEtBRGtCO0FBRXZCRyxNQUFJLEVBQUUsSUFGaUI7QUFHdkJQLE9BQUssRUFBRSxDQUhnQjtBQUl2QkUsUUFBTSxFQUFFLEVBSmU7QUFLdkJELE1BQUksRUFBRSxLQUxpQjtBQU12QjJMLFVBQVEsRUFBRTtBQU5hLENBQXBCO0FBU0EsTUFBTUMsV0FBVyxHQUFHO0FBQ3ZCekwsS0FBRyxFQUFFLEtBRGtCO0FBRXZCRyxNQUFJLEVBQUUsSUFGaUI7QUFHdkJQLE9BQUssRUFBRSxDQUhnQjtBQUl2QkUsUUFBTSxFQUFFLEVBSmU7QUFLdkJELE1BQUksRUFBRSxLQUxpQjtBQU12QnVMLFlBQVUsRUFBRTtBQUNSLE9BQUc7QUFDQ3hMLFdBQUssRUFBRTtBQURSLEtBREs7QUFJUixTQUFLO0FBQ0RBLFdBQUssRUFBRTtBQUROLEtBSkc7QUFPUixTQUFLO0FBQ0RBLFdBQUssRUFBRTtBQUROLEtBUEc7QUFVUixTQUFLO0FBQ0RBLFdBQUssRUFBRSxDQUROO0FBRURPLFVBQUksRUFBRTtBQUZMO0FBVkc7QUFOVyxDQUFwQjtBQXVCQSxNQUFNdUwsV0FBVyxHQUFHO0FBQ3ZCMUwsS0FBRyxFQUFFLEtBRGtCO0FBRXZCRyxNQUFJLEVBQUUsSUFGaUI7QUFHdkJQLE9BQUssRUFBRSxDQUhnQjtBQUl2QkUsUUFBTSxFQUFFLEVBSmU7QUFLdkJELE1BQUksRUFBRSxLQUxpQjtBQU12QnVMLFlBQVUsRUFBRTtBQUNSLE9BQUc7QUFDQ3hMLFdBQUssRUFBRTtBQURSLEtBREs7QUFJUixTQUFLO0FBQ0RBLFdBQUssRUFBRTtBQUROLEtBSkc7QUFPUixTQUFLO0FBQ0RBLFdBQUssRUFBRSxDQUROO0FBRURPLFVBQUksRUFBRTtBQUZMO0FBUEc7QUFOVyxDQUFwQjtBQW9CQSxNQUFNd0wsV0FBVyxHQUFHO0FBQ3ZCL0wsT0FBSyxFQUFFLENBRGdCO0FBRXZCSSxLQUFHLEVBQUUsSUFGa0I7QUFHdkJHLE1BQUksRUFBRSxLQUhpQjtBQUl2QnFMLFVBQVEsRUFBRSxJQUphO0FBS3ZCM0wsTUFBSSxFQUFFLEtBTGlCO0FBTXZCQyxRQUFNLEVBQUU7QUFOZSxDQUFwQjtBQVNBLE1BQU04TCxXQUFXLEdBQUc7QUFDdkJoTSxPQUFLLEVBQUUsQ0FEZ0I7QUFFdkJJLEtBQUcsRUFBRSxLQUZrQjtBQUd2QkcsTUFBSSxFQUFFLEtBSGlCO0FBSXZCTCxRQUFNLEVBQUUsQ0FKZTtBQUt2Qk8sVUFBUSxFQUFFLElBTGE7QUFNdkIrSyxZQUFVLEVBQUU7QUFDUixPQUFHO0FBQ0N4TCxXQUFLLEVBQUU7QUFEUixLQURLO0FBSVIsU0FBSztBQUNEQSxXQUFLLEVBQUU7QUFETixLQUpHO0FBT1IsU0FBSztBQUNEQSxXQUFLLEVBQUU7QUFETixLQVBHO0FBVVIsU0FBSztBQUNEQSxXQUFLLEVBQUU7QUFETixLQVZHO0FBYVIsVUFBTTtBQUNGQSxXQUFLLEVBQUU7QUFETDtBQWJFO0FBTlcsQ0FBcEI7QUF5QkEsTUFBTWlNLFdBQVcsR0FBRztBQUN2QmpNLE9BQUssRUFBRSxDQURnQjtBQUV2QkksS0FBRyxFQUFFLEtBRmtCO0FBR3ZCRyxNQUFJLEVBQUUsSUFIaUI7QUFJdkJMLFFBQU0sRUFBRSxFQUplO0FBS3ZCTyxVQUFRLEVBQUUsSUFMYTtBQU12QitLLFlBQVUsRUFBRTtBQUNSLE9BQUc7QUFDQ3hMLFdBQUssRUFBRTtBQURSLEtBREs7QUFJUixTQUFLO0FBQ0RBLFdBQUssRUFBRTtBQUROLEtBSkc7QUFPUixTQUFLO0FBQ0RBLFdBQUssRUFBRTtBQUROLEtBUEc7QUFVUixVQUFNO0FBQ0ZBLFdBQUssRUFBRTtBQURMO0FBVkU7QUFOVyxDQUFwQjtBQXNCQSxNQUFNa00sWUFBWSxHQUFHO0FBQ3hCbE0sT0FBSyxFQUFFLENBRGlCO0FBRXhCRSxRQUFNLEVBQUUsRUFGZ0I7QUFHeEJELE1BQUksRUFBRSxLQUhrQjtBQUl4QkcsS0FBRyxFQUFFLEtBSm1CO0FBS3hCRyxNQUFJLEVBQUUsSUFMa0I7QUFNeEJpTCxZQUFVLEVBQUU7QUFDUixTQUFLO0FBQ0R4TCxXQUFLLEVBQUU7QUFETixLQURHO0FBSVIsU0FBSztBQUNEQSxXQUFLLEVBQUU7QUFETjtBQUpHO0FBTlksQ0FBckI7QUFnQkEsTUFBTW1NLFlBQVksR0FBRztBQUN4Qi9MLEtBQUcsRUFBRSxLQURtQjtBQUV4QkcsTUFBSSxFQUFFLElBRmtCO0FBR3hCTixNQUFJLEVBQUUsS0FIa0I7QUFJeEJDLFFBQU0sRUFBRSxFQUpnQjtBQUt4QnNMLFlBQVUsRUFBRTtBQUNSLE9BQUc7QUFDQ3hMLFdBQUssRUFBRTtBQURSLEtBREs7QUFJUixTQUFLO0FBQ0RBLFdBQUssRUFBRTtBQUROLEtBSkc7QUFPUixTQUFLO0FBQ0RBLFdBQUssRUFBRSxDQUROO0FBRURPLFVBQUksRUFBRTtBQUZMO0FBUEc7QUFMWSxDQUFyQjtBQW1CQSxNQUFNNkwsWUFBWSxHQUFHO0FBQ3hCaE0sS0FBRyxFQUFFLEtBRG1CO0FBRXhCRyxNQUFJLEVBQUUsSUFGa0I7QUFHeEJOLE1BQUksRUFBRSxLQUhrQjtBQUl4QkMsUUFBTSxFQUFFLEVBSmdCO0FBS3hCc0wsWUFBVSxFQUFFO0FBQ1IsT0FBRztBQUNDeEwsV0FBSyxFQUFFO0FBRFIsS0FESztBQUlSLFNBQUs7QUFDREEsV0FBSyxFQUFFO0FBRE4sS0FKRztBQU9SLFNBQUs7QUFDREEsV0FBSyxFQUFFO0FBRE4sS0FQRztBQVVSLFNBQUs7QUFDREEsV0FBSyxFQUFFLENBRE47QUFFRE8sVUFBSSxFQUFFO0FBRkw7QUFWRztBQUxZLENBQXJCO0FBc0JBLE1BQU04TCxZQUFZLEdBQUc7QUFDeEJyTSxPQUFLLEVBQUUsQ0FEaUI7QUFFeEJFLFFBQU0sRUFBRSxFQUZnQjtBQUd4QkQsTUFBSSxFQUFFLEtBSGtCO0FBSXhCRyxLQUFHLEVBQUUsS0FKbUI7QUFLeEJHLE1BQUksRUFBRSxJQUxrQjtBQU14QmlMLFlBQVUsRUFBRTtBQUNSLE9BQUc7QUFDQ3hMLFdBQUssRUFBRTtBQURSLEtBREs7QUFJUixTQUFLO0FBQ0RBLFdBQUssRUFBRTtBQUROLEtBSkc7QUFPUixTQUFLO0FBQ0RBLFdBQUssRUFBRSxDQUROO0FBRURPLFVBQUksRUFBRTtBQUZMO0FBUEc7QUFOWSxDQUFyQjtBQW9CQSxNQUFNK0wsWUFBWSxHQUFHO0FBQ3hCdE0sT0FBSyxFQUFFLENBRGlCO0FBRXhCSSxLQUFHLEVBQUUsS0FGbUI7QUFHeEJHLE1BQUksRUFBRSxJQUhrQjtBQUl4Qk4sTUFBSSxFQUFFLEtBSmtCO0FBS3hCQyxRQUFNLEVBQUUsRUFMZ0I7QUFNeEJzTCxZQUFVLEVBQUU7QUFDUixPQUFHO0FBQ0N4TCxXQUFLLEVBQUU7QUFEUixLQURLO0FBSVIsU0FBSztBQUNEQSxXQUFLLEVBQUUsQ0FETjtBQUVETyxVQUFJLEVBQUU7QUFGTDtBQUpHO0FBTlksQ0FBckI7QUFpQkEsTUFBTWdNLFlBQVksR0FBRztBQUN4QnZNLE9BQUssRUFBRSxDQURpQjtBQUV4QkksS0FBRyxFQUFFLElBRm1CO0FBR3hCTSxZQUFVLEVBQUU7QUFIWSxDQUFyQjtBQU1BLE1BQU04TCxZQUFZLEdBQUc7QUFDeEJ4TSxPQUFLLEVBQUUsQ0FEaUI7QUFFeEJJLEtBQUcsRUFBRSxLQUZtQjtBQUd4QkcsTUFBSSxFQUFFLEtBSGtCO0FBSXhCTCxRQUFNLEVBQUUsRUFKZ0I7QUFLeEJPLFVBQVEsRUFBRSxJQUxjO0FBTXhCZ00saUJBQWUsRUFBRSxJQU5PO0FBT3hCeE0sTUFBSSxFQUFFLElBUGtCO0FBUXhCdUwsWUFBVSxFQUFFO0FBQ1IsT0FBRztBQUNDeEwsV0FBSyxFQUFFO0FBRFIsS0FESztBQUlSLFNBQUs7QUFDREEsV0FBSyxFQUFFO0FBRE4sS0FKRztBQU9SLFNBQUs7QUFDREEsV0FBSyxFQUFFO0FBRE4sS0FQRztBQVVSLFNBQUs7QUFDREEsV0FBSyxFQUFFO0FBRE4sS0FWRztBQWFSLFVBQU07QUFDRkEsV0FBSyxFQUFFO0FBREw7QUFiRTtBQVJZLENBQXJCO0FBMkJBLE1BQU0wTSxZQUFZLEdBQUc7QUFDeEJ6TSxNQUFJLEVBQUUsS0FEa0I7QUFFeEI7QUFDQUcsS0FBRyxFQUFFLEtBSG1CO0FBSXhCRixRQUFNLEVBQUUsRUFKZ0I7QUFLeEJzTCxZQUFVLEVBQUU7QUFDUixPQUFHO0FBQ0N4TCxXQUFLLEVBQUU7QUFEUixLQURLO0FBSVIsU0FBSztBQUNEQSxXQUFLLEVBQUU7QUFETixLQUpHO0FBT1IsU0FBSztBQUNEQSxXQUFLLEVBQUUsQ0FETjtBQUVETyxVQUFJLEVBQUUsS0FGTDtBQUdESCxTQUFHLEVBQUU7QUFISjtBQVBHLEdBTFksQ0FrQnhCO0FBQ0E7O0FBbkJ3QixDQUFyQjtBQXNCQSxNQUFNdU0sWUFBWSxHQUFHO0FBQ3hCM00sT0FBSyxFQUFFLENBRGlCO0FBRXhCQyxNQUFJLEVBQUUsS0FGa0I7QUFHeEJHLEtBQUcsRUFBRSxJQUhtQjtBQUl4QkcsTUFBSSxFQUFFLEtBSmtCO0FBS3hCTCxRQUFNLEVBQUUsRUFMZ0I7QUFNeEJzTCxZQUFVLEVBQUU7QUFDUixPQUFHO0FBQ0N4TCxXQUFLLEVBQUU7QUFEUixLQURLO0FBSVIsU0FBSztBQUNEQSxXQUFLLEVBQUU7QUFETixLQUpHO0FBT1IsU0FBSztBQUNEQSxXQUFLLEVBQUU7QUFETjtBQVBHO0FBTlksQ0FBckI7QUFtQkEsTUFBTTRNLFlBQVksR0FBRztBQUN4QnhNLEtBQUcsRUFBRSxLQURtQjtBQUV4QkgsTUFBSSxFQUFFLEtBRmtCO0FBR3hCTSxNQUFJLEVBQUUsS0FIa0I7QUFJeEJxTCxVQUFRLEVBQUUsS0FKYztBQUt4QjFMLFFBQU0sRUFBRSxFQUxnQjtBQU14QnNMLFlBQVUsRUFBRTtBQUNSLE9BQUc7QUFDQ3hMLFdBQUssRUFBRTtBQURSLEtBREs7QUFJUixTQUFLO0FBQ0RBLFdBQUssRUFBRTtBQUROLEtBSkc7QUFPUixTQUFLO0FBQ0RBLFdBQUssRUFBRTtBQUROO0FBUEc7QUFOWSxDQUFyQjtBQW1CQSxNQUFNNk0sWUFBWSxHQUFHO0FBQ3hCek0sS0FBRyxFQUFFLEtBRG1CO0FBRXhCRyxNQUFJLEVBQUU7QUFGa0IsQ0FBckIsQyxDQUtQOztBQUNPLE1BQU11TSxXQUFXLEdBQUc7QUFDdkIxTSxLQUFHLEVBQUUsS0FEa0I7QUFFdkJHLE1BQUksRUFBRSxJQUZpQjtBQUd2Qk4sTUFBSSxFQUFFLEtBSGlCO0FBSXZCRCxPQUFLLEVBQUUsQ0FKZ0I7QUFLdkJTLFVBQVEsRUFBRTtBQUxhLENBQXBCO0FBUUEsTUFBTXNNLGFBQWEsR0FBRztBQUN6Qi9NLE9BQUssRUFBRSxDQURrQjtBQUV6QkksS0FBRyxFQUFFLEtBRm9CO0FBR3pCRyxNQUFJLEVBQUUsS0FIbUI7QUFJekJMLFFBQU0sRUFBRSxDQUppQjtBQUt6QkQsTUFBSSxFQUFFLEtBTG1CO0FBTXpCUSxVQUFRLEVBQUUsS0FOZTtBQU96QmdNLGlCQUFlLEVBQUUsSUFQUTtBQVF6QmpCLFlBQVUsRUFBRTtBQUNSLE9BQUc7QUFDQ3hMLFdBQUssRUFBRTtBQURSLEtBREs7QUFJUixTQUFLO0FBQ0RBLFdBQUssRUFBRTtBQUROLEtBSkc7QUFPUixTQUFLO0FBQ0RBLFdBQUssRUFBRSxDQUROO0FBRURDLFVBQUksRUFBRTtBQUZMO0FBUEc7QUFSYSxDQUF0QjtBQXNCQSxNQUFNK00sV0FBVyxHQUFHO0FBQ3ZCaE4sT0FBSyxFQUFFLENBRGdCO0FBRXZCSSxLQUFHLEVBQUUsS0FGa0I7QUFHdkJHLE1BQUksRUFBRSxLQUhpQjtBQUl2QkUsVUFBUSxFQUFFLElBSmE7QUFLdkJSLE1BQUksRUFBRSxLQUxpQjtBQU12QkMsUUFBTSxFQUFFLEVBTmU7QUFPdkJzTCxZQUFVLEVBQUU7QUFDUixPQUFHO0FBQ0N4TCxXQUFLLEVBQUU7QUFEUixLQURLO0FBSVIsU0FBSztBQUNEQSxXQUFLLEVBQUU7QUFETixLQUpHO0FBT1IsU0FBSztBQUNEQSxXQUFLLEVBQUU7QUFETixLQVBHO0FBVVIsU0FBSztBQUNEQSxXQUFLLEVBQUU7QUFETixLQVZHO0FBYVIsVUFBTTtBQUNGQSxXQUFLLEVBQUU7QUFETDtBQWJFO0FBUFcsQ0FBcEI7QUEwQkEsTUFBTWlOLGFBQWEsR0FBRztBQUN6QmpOLE9BQUssRUFBRSxDQURrQjtBQUV6QkksS0FBRyxFQUFFLEtBRm9CO0FBR3pCRyxNQUFJLEVBQUUsSUFIbUI7QUFJekJFLFVBQVEsRUFBRSxLQUplO0FBS3pCUixNQUFJLEVBQUUsS0FMbUI7QUFNekJDLFFBQU0sRUFBRSxFQU5pQjtBQU96QnNMLFlBQVUsRUFBRTtBQUNSLE9BQUc7QUFDQ3hMLFdBQUssRUFBRTtBQURSLEtBREs7QUFJUixTQUFLO0FBQ0RBLFdBQUssRUFBRTtBQUROLEtBSkc7QUFPUixTQUFLO0FBQ0RBLFdBQUssRUFBRSxDQUROO0FBRURPLFVBQUksRUFBRSxLQUZMO0FBR0RILFNBQUcsRUFBRTtBQUhKO0FBUEc7QUFQYSxDQUF0QjtBQXNCQSxNQUFNOE0sY0FBYyxHQUFHO0FBQzFCbE4sT0FBSyxFQUFFLENBRG1CO0FBRTFCSSxLQUFHLEVBQUUsS0FGcUI7QUFHMUJHLE1BQUksRUFBRSxJQUhvQjtBQUkxQkUsVUFBUSxFQUFFLEtBSmdCO0FBSzFCUixNQUFJLEVBQUUsS0FMb0I7QUFNMUJDLFFBQU0sRUFBRSxFQU5rQjtBQU8xQnNMLFlBQVUsRUFBRTtBQUNSLE9BQUc7QUFDQ3hMLFdBQUssRUFBRTtBQURSLEtBREs7QUFJUixTQUFLO0FBQ0RBLFdBQUssRUFBRTtBQUROLEtBSkc7QUFPUixTQUFLO0FBQ0RBLFdBQUssRUFBRTtBQUROLEtBUEc7QUFVUixVQUFNO0FBQ0ZBLFdBQUssRUFBRSxDQURMO0FBRUZPLFVBQUksRUFBRSxLQUZKO0FBR0ZILFNBQUcsRUFBRTtBQUhIO0FBVkU7QUFQYyxDQUF2QixDIiwiZmlsZSI6ImNvbXBvbmVudHNfZmVhdHVyZXNfb3dsLWNhcm91c2VsX2pzeC1jb21wb25lbnRzX3BhcnRpYWxzX3Byb2R1Y3RfZGV0YWlsX2RldGFpbC1vbmVfanN4LXNlcnZlci04ZGIyMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ291bnRkb3duLCB7IHplcm9QYWQgfSBmcm9tICdyZWFjdC1jb3VudGRvd24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdENvdW50RG93biAoIHByb3BzICkge1xyXG4gICAgY29uc3QgeyBkYXRlID0gXCIyMDIxLTA4LTIwXCIsIHR5cGUgPSAxLCBhZENsYXNzID0gJycgfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IHJlbmRlcmVyID0gKCB7IGRheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBjb21wbGV0ZWQgfSApID0+IHtcclxuICAgICAgICBpZiAoIGNvbXBsZXRlZCApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxzcGFuPlByb2R1Y3QgU2VsbGluZyBGaW5pc2hlZCE8L3NwYW4+XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIHR5cGUgPT09IDEgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgYGNvdW50ZG93biAkeyBhZENsYXNzIH1gIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLXJvdyBjb3VudGRvd24tc2hvdzRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRkb3duLWFtb3VudFwiPnsgemVyb1BhZCggZGF5cyApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRkb3duLXBlcmlvZFwiPkRBWVM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRkb3duLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudGRvd24tYW1vdW50XCI+eyB6ZXJvUGFkKCBob3VycyApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRkb3duLXBlcmlvZFwiPkhPVVJTPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRkb3duLWFtb3VudFwiPnsgemVyb1BhZCggbWludXRlcyApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRkb3duLXBlcmlvZFwiPk1JTlVURVM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudGRvd24tc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1hbW91bnRcIj57IHplcm9QYWQoIHNlY29uZHMgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1wZXJpb2RcIj5TRUNPTkRTPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNvdW50ZG93bi1jb250YWluZXIgZm9udC13ZWlnaHQtc2VtaS1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtY291bnRkb3duLXRpdGxlXCI+T2ZmZXIgRW5kcyBJbjombmJzcDs8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY291bnRkb3duIGNvdW50ZG93bi1jb21wYWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudGRvd24tc2VjdGlvbiBkYXlzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRkb3duLWFtb3VudFwiPnsgemVyb1BhZCggZGF5cyApIH0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1wZXJpb2RcIj5kYXlzLCZuYnNwOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudGRvd24tc2VjdGlvbiBob3Vyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1hbW91bnRcIj57IHplcm9QYWQoIGhvdXJzICkgfTxzcGFuIGNsYXNzTmFtZT1cIm1yLTEgbWwtMVwiPjo8L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1zZWN0aW9uIG1pbnV0ZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudGRvd24tYW1vdW50XCI+eyB6ZXJvUGFkKCBtaW51dGVzICkgfTxzcGFuIGNsYXNzTmFtZT1cIm1yLTEgbWwtMVwiPjo8L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1zZWN0aW9uIHNlY29uZHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudGRvd24tYW1vdW50XCI+eyB6ZXJvUGFkKCBzZWNvbmRzICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb3VudGRvd25cclxuICAgICAgICAgICAgZGF0ZT17IG5ldyBEYXRlKCBkYXRlICkgfVxyXG4gICAgICAgICAgICByZW5kZXJlcj17IHJlbmRlcmVyIH0gPlxyXG4gICAgICAgIDwvQ291bnRkb3duPlxyXG4gICAgKTtcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW93bC1jYXJvdXNlbDInO1xyXG5cclxuLy8gbGV0IHByZXZQYXRoO1xyXG5mdW5jdGlvbiBPd2xDYXJvdXNlbCAoIHByb3BzICkge1xyXG4gICAgY29uc3QgeyBhZENsYXNzLCBvcHRpb25zIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IGNhcm91c2VsUmVmID0gdXNlUmVmKCBudWxsICk7XHJcbiAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgICAgICBpdGVtczogMSxcclxuICAgICAgICBsb29wOiBmYWxzZSxcclxuICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgcmVzcG9uc2l2ZUNsYXNzOiBcInRydWVcIixcclxuICAgICAgICBuYXY6IHRydWUsXHJcbiAgICAgICAgbmF2VGV4dDogWyAnPGkgY2xhc3M9XCJkLWljb24tYW5nbGUtbGVmdFwiPicsICc8aSBjbGFzcz1cImQtaWNvbi1hbmdsZS1yaWdodFwiPicgXSxcclxuICAgICAgICBuYXZFbGVtZW50OiBcImJ1dHRvblwiLFxyXG4gICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgc21hcnRTcGVlZDogNDAwLFxyXG4gICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICBhdXRvSGVpZ2h0OiBmYWxzZVxyXG4gICAgICAgIC8vIGF1dG9wbGF5VGltZW91dDogNTAwMCxcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCBwcm9wcy5vbkNoYW5nZVJlZiApIHtcclxuICAgICAgICAgICAgcHJvcHMub25DaGFuZ2VSZWYoIGNhcm91c2VsUmVmICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgWyBjYXJvdXNlbFJlZiBdIClcclxuXHJcbiAgICBsZXQgZXZlbnRzID0ge1xyXG4gICAgICAgIG9uVHJhbnNsYXRlZDogZnVuY3Rpb24gKCBlICkge1xyXG4gICAgICAgICAgICBpZiAoICFlLnRhcmdldCApIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKCBwcm9wcy5vbkNoYW5nZUluZGV4ICkge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMub25DaGFuZ2VJbmRleCggZS5pdGVtLmluZGV4ICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzID0gT2JqZWN0LmFzc2lnbigge30sIGV2ZW50cywgcHJvcHMuZXZlbnRzICk7XHJcbiAgICBsZXQgc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKCB7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIHByb3BzLmNoaWxkcmVuID9cclxuICAgICAgICAgICAgcHJvcHMuY2hpbGRyZW4ubGVuZ3RoID4gMCB8fCAoIHByb3BzLmNoaWxkcmVuICYmIHByb3BzLmNoaWxkcmVuLmxlbmd0aCA9PT0gdW5kZWZpbmVkICkgP1xyXG4gICAgICAgICAgICAgICAgPENhcm91c2VsIHJlZj17IGNhcm91c2VsUmVmIH0gY2xhc3NOYW1lPXsgYG93bC1jYXJvdXNlbCAkeyBhZENsYXNzIH1gIH0gb3B0aW9ucz17IHNldHRpbmdzIH0gZXZlbnRzPXsgZXZlbnRzIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9XHJcbiAgICAgICAgICAgICAgICA8L0Nhcm91c2VsID5cclxuICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICA6IFwiXCJcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oIE93bENhcm91c2VsICk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBBTGluayBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvY3VzdG9tLWxpbmsnO1xyXG5cclxuaW1wb3J0IHsgdG9EZWNpbWFsIH0gZnJvbSAnfi91dGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJ0UG9wdXAgKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IHsgcHJvZHVjdCB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbmlwb3B1cC1hcmVhXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluaXBvcHVwLWJveCBzaG93XCIgc3R5bGU9eyB7IHRvcDogXCIwXCIgfSB9PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWluaXBvcHVwLXRpdGxlXCI+U3VjY2Vzc2Z1bGx5IGFkZGVkLjwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QgcHJvZHVjdC1wdXJjaGFzZWQgIHByb2R1Y3QtY2FydCBtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJwcm9kdWN0LW1lZGlhIHB1cmUtbWVkaWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyBgL3Byb2R1Y3QvZGVmYXVsdC8keyBwcm9kdWN0LnNsdWcgfWAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9eyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BU1NFVF9VUkkgKyBwcm9kdWN0LnBpY3R1cmVzWyAwIF0udXJsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjkwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI5MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyBgL3Byb2R1Y3QvZGVmYXVsdC8keyBwcm9kdWN0LnNsdWcgfWAgfSBjbGFzc05hbWU9XCJwcm9kdWN0LW5hbWVcIj57IHByb2R1Y3QubmFtZSB9PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2UtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LXF1YW50aXR5XCI+eyBwcm9kdWN0LnF0eSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPiR7IHRvRGVjaW1hbCggcHJvZHVjdC5wcmljZSApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uLWdyb3VwIGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3BhZ2VzL2NhcnRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lIGJ0bi1wcmltYXJ5IGJ0bi1yb3VuZGVkXCI+VmlldyBDYXJ0PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9wYWdlcy9jaGVja291dFwiIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLXByaW1hcnkgYnRuLXJvdW5kZWRcIj5DaGVjayBPdXQ8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1YW50aXR5KCB7IHF0eSA9IDEsIC4uLnByb3BzIH0gKSB7XHJcbiAgICBjb25zdCB7IGFkQ2xhc3MgPSAnbXItMiBpbnB1dC1ncm91cCcgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgWyBxdWFudGl0eSwgc2V0UXVhbnRpdHkgXSA9IHVzZVN0YXRlKCBwYXJzZUludCggcXR5ICkgKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBzZXRRdWFudGl0eSggcXR5ICk7XHJcbiAgICB9LCBbIHByb3BzLnByb2R1Y3QgXSApXHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMub25DaGFuZ2VRdHkgJiYgcHJvcHMub25DaGFuZ2VRdHkoIHF1YW50aXR5ICk7XHJcbiAgICB9LCBbIHF1YW50aXR5IF0gKVxyXG5cclxuICAgIGZ1bmN0aW9uIG1pbnVzUXVhbnRpdHkoKSB7XHJcbiAgICAgICAgaWYgKCBxdWFudGl0eSA+IDEgKSB7XHJcbiAgICAgICAgICAgIHNldFF1YW50aXR5KCBwYXJzZUludCggcXVhbnRpdHkgKSAtIDEgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGx1c1F1YW50aXR5KCkge1xyXG4gICAgICAgIGlmICggcXVhbnRpdHkgPCBwcm9wcy5tYXggKSB7XHJcbiAgICAgICAgICAgIHNldFF1YW50aXR5KCBwYXJzZUludCggcXVhbnRpdHkgKSArIDEgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlUXR5KCBlICkge1xyXG4gICAgICAgIGxldCBuZXdRdHk7XHJcblxyXG4gICAgICAgIGlmICggZS5jdXJyZW50VGFyZ2V0LnZhbHVlICE9PSAnJyApIHtcclxuICAgICAgICAgICAgbmV3UXR5ID0gTWF0aC5taW4oIHBhcnNlSW50KCBlLmN1cnJlbnRUYXJnZXQudmFsdWUgKSwgcHJvcHMubWF4ICk7XHJcbiAgICAgICAgICAgIG5ld1F0eSA9IE1hdGgubWF4KCBuZXdRdHksIDEgKTtcclxuICAgICAgICAgICAgc2V0UXVhbnRpdHkoIG5ld1F0eSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgYWRDbGFzcyB9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncXVhbnRpdHktbWludXMgZC1pY29uLW1pbnVzJyBvbkNsaWNrPXsgbWludXNRdWFudGl0eSB9PjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdxdWFudGl0eSBmb3JtLWNvbnRyb2wnIHR5cGU9J251bWJlcicgbWluPVwiMVwiIG1heD17IHByb3BzLm1heCB9IHZhbHVlPXsgcXVhbnRpdHkgfSBvbkNoYW5nZT17IGNoYW5nZVF0eSB9IC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdxdWFudGl0eS1wbHVzIGQtaWNvbi1wbHVzJyBvbkNsaWNrPXsgcGx1c1F1YW50aXR5IH0+PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29sbGFwc2UgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbGxhcHNlJztcclxuXHJcbmltcG9ydCBBTGluayBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvY3VzdG9tLWxpbmsnO1xyXG5pbXBvcnQgQ291bnRkb3duIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9jb3VudGRvd24nO1xyXG5pbXBvcnQgUXVhbnRpdHkgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL3F1YW50aXR5JztcclxuXHJcbmltcG9ydCBQcm9kdWN0TmF2IGZyb20gJ34vY29tcG9uZW50cy9wYXJ0aWFscy9wcm9kdWN0L3Byb2R1Y3QtbmF2JztcclxuXHJcbmltcG9ydCB7IHdpc2hsaXN0QWN0aW9ucyB9IGZyb20gJ34vc3RvcmUvd2lzaGxpc3QnO1xyXG5pbXBvcnQgeyBjYXJ0QWN0aW9ucyB9IGZyb20gJ34vc3RvcmUvY2FydCc7XHJcblxyXG5pbXBvcnQgeyB0b0RlY2ltYWwgfSBmcm9tICd+L3V0aWxzJztcclxuXHJcbmZ1bmN0aW9uIERldGFpbE9uZShwcm9wcykge1xyXG4gICAgbGV0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBkYXRhLCBpc1N0aWNreUNhcnQgPSBmYWxzZSwgYWRDbGFzcyA9ICcnLCBpc05hdiA9IHRydWUgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgeyB0b2dnbGVXaXNobGlzdCwgYWRkVG9DYXJ0LCB3aXNobGlzdCB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBbY3VyQ29sb3IsIHNldEN1ckNvbG9yXSA9IHVzZVN0YXRlKCdudWxsJyk7XHJcbiAgICBjb25zdCBbY3VyU2l6ZSwgc2V0Q3VyU2l6ZV0gPSB1c2VTdGF0ZSgnbnVsbCcpO1xyXG4gICAgY29uc3QgW2N1ckluZGV4LCBzZXRDdXJJbmRleF0gPSB1c2VTdGF0ZSgtMSk7XHJcbiAgICBjb25zdCBbY2FydEFjdGl2ZSwgc2V0Q2FydEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcXVhbnRpdHksIHNldFFhdW50aXR5XSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgbGV0IHByb2R1Y3QgPSBkYXRhICYmIGRhdGEucHJvZHVjdDtcclxuXHJcbiAgICAvLyBkZWNpZGUgaWYgdGhlIHByb2R1Y3QgaXMgd2lzaGxpc3RlZFxyXG4gICAgbGV0IGlzV2lzaGxpc3RlZCwgY29sb3JzID0gW10sIHNpemVzID0gW107XHJcbiAgICBpc1dpc2hsaXN0ZWQgPSB3aXNobGlzdC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnNsdWcgPT09IHByb2R1Y3QuZGF0YS5zbHVnKSA+IC0xID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICAgIGlmIChwcm9kdWN0LmRhdGEgJiYgcHJvZHVjdC5kYXRhLnZhcmlhbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBpZiAocHJvZHVjdC5kYXRhLnZhcmlhbnRzWzBdLnNpemUpXHJcbiAgICAgICAgICAgIHByb2R1Y3QuZGF0YS52YXJpYW50cy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNpemVzLmZpbmRJbmRleChzaXplID0+IHNpemUubmFtZSA9PT0gaXRlbS5zaXplLm5hbWUpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNpemVzLnB1c2goeyBuYW1lOiBpdGVtLnNpemUubmFtZSwgdmFsdWU6IGl0ZW0uc2l6ZS5zaXplIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHByb2R1Y3QuZGF0YS52YXJpYW50c1swXS5jb2xvcikge1xyXG4gICAgICAgICAgICBwcm9kdWN0LmRhdGEudmFyaWFudHMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjb2xvcnMuZmluZEluZGV4KGNvbG9yID0+IGNvbG9yLm5hbWUgPT09IGl0ZW0uY29sb3IubmFtZSkgPT09IC0xKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9ycy5wdXNoKHsgbmFtZTogaXRlbS5jb2xvci5uYW1lLCB2YWx1ZTogaXRlbS5jb2xvci5jb2xvciB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgc2V0Q3VySW5kZXgoLTEpO1xyXG4gICAgICAgICAgICByZXNldFZhbHVlSGFuZGxlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9kdWN0XSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9kdWN0LmRhdGEudmFyaWFudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpZiAoKGN1clNpemUgIT09ICdudWxsJyAmJiBjdXJDb2xvciAhPT0gJ251bGwnKSB8fCAoY3VyU2l6ZSA9PT0gJ251bGwnICYmIHByb2R1Y3QuZGF0YS52YXJpYW50c1swXS5zaXplID09PSBudWxsICYmIGN1ckNvbG9yICE9PSAnbnVsbCcpIHx8IChjdXJDb2xvciA9PT0gJ251bGwnICYmIHByb2R1Y3QuZGF0YS52YXJpYW50c1swXS5jb2xvciA9PT0gbnVsbCAmJiBjdXJTaXplICE9PSAnbnVsbCcpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDYXJ0QWN0aXZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VySW5kZXgocHJvZHVjdC5kYXRhLnZhcmlhbnRzLmZpbmRJbmRleChpdGVtID0+IChpdGVtLnNpemUgIT09IG51bGwgJiYgaXRlbS5jb2xvciAhPT0gbnVsbCAmJiBpdGVtLmNvbG9yLm5hbWUgPT09IGN1ckNvbG9yICYmIGl0ZW0uc2l6ZS5uYW1lID09PSBjdXJTaXplKSB8fCAoaXRlbS5zaXplID09PSBudWxsICYmIGl0ZW0uY29sb3IubmFtZSA9PT0gY3VyQ29sb3IpIHx8IChpdGVtLmNvbG9yID09PSBudWxsICYmIGl0ZW0uc2l6ZS5uYW1lID09PSBjdXJTaXplKSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0Q2FydEFjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRDYXJ0QWN0aXZlKHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByb2R1Y3Quc3RvY2sgPT09IDApIHtcclxuICAgICAgICAgICAgc2V0Q2FydEFjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2N1ckNvbG9yLCBjdXJTaXplLCBwcm9kdWN0XSlcclxuXHJcbiAgICBjb25zdCB3aXNobGlzdEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYgKHRvZ2dsZVdpc2hsaXN0ICYmICFpc1dpc2hsaXN0ZWQpIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRUYXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgICAgIGN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnbG9hZC1tb3JlLW92ZXJsYXknLCAnbG9hZGluZycpO1xyXG4gICAgICAgICAgICB0b2dnbGVXaXNobGlzdChwcm9kdWN0LmRhdGEpO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWQtbW9yZS1vdmVybGF5JywgJ2xvYWRpbmcnKTtcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9wYWdlcy93aXNobGlzdCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXRDb2xvckhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldEN1ckNvbG9yKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXRTaXplSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0Q3VyU2l6ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkVG9DYXJ0SGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBpZiAocHJvZHVjdC5kYXRhLnN0b2NrID4gMCAmJiBjYXJ0QWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9kdWN0LmRhdGEudmFyaWFudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRtcE5hbWUgPSBwcm9kdWN0LmRhdGEubmFtZSwgdG1wUHJpY2U7XHJcbiAgICAgICAgICAgICAgICB0bXBOYW1lICs9IGN1ckNvbG9yICE9PSAnbnVsbCcgPyAnLScgKyBjdXJDb2xvciA6ICcnO1xyXG4gICAgICAgICAgICAgICAgdG1wTmFtZSArPSBjdXJTaXplICE9PSAnbnVsbCcgPyAnLScgKyBjdXJTaXplIDogJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByb2R1Y3QuZGF0YS5wcmljZVswXSA9PT0gcHJvZHVjdC5kYXRhLnByaWNlWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG1wUHJpY2UgPSBwcm9kdWN0LmRhdGEucHJpY2VbMF07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFwcm9kdWN0LmRhdGEudmFyaWFudHNbMF0ucHJpY2UgJiYgcHJvZHVjdC5kYXRhLmRpc2NvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRtcFByaWNlID0gcHJvZHVjdC5kYXRhLnByaWNlWzBdO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0bXBQcmljZSA9IHByb2R1Y3QuZGF0YS52YXJpYW50c1tjdXJJbmRleF0uc2FsZV9wcmljZSA/IHByb2R1Y3QuZGF0YS52YXJpYW50c1tjdXJJbmRleF0uc2FsZV9wcmljZSA6IHByb2R1Y3QuZGF0YS52YXJpYW50c1tjdXJJbmRleF0ucHJpY2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYWRkVG9DYXJ0KHsgLi4ucHJvZHVjdC5kYXRhLCBuYW1lOiB0bXBOYW1lLCBxdHk6IHF1YW50aXR5LCBwcmljZTogdG1wUHJpY2UgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb0NhcnQoeyAuLi5wcm9kdWN0LmRhdGEsIHF0eTogcXVhbnRpdHksIHByaWNlOiBwcm9kdWN0LmRhdGEucHJpY2VbMF0gfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzZXRWYWx1ZUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldEN1ckNvbG9yKCdudWxsJyk7XHJcbiAgICAgICAgc2V0Q3VyU2l6ZSgnbnVsbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzRGlzYWJsZWQoY29sb3IsIHNpemUpIHtcclxuICAgICAgICBpZiAoY29sb3IgPT09ICdudWxsJyB8fCBzaXplID09PSAnbnVsbCcpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHNpemVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvZHVjdC5kYXRhLnZhcmlhbnRzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uY29sb3IubmFtZSA9PT0gY3VyQ29sb3IpID09PSAtMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb2xvcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9kdWN0LmRhdGEudmFyaWFudHMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5zaXplLm5hbWUgPT09IGN1clNpemUpID09PSAtMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9kdWN0LmRhdGEudmFyaWFudHMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5jb2xvci5uYW1lID09PSBjb2xvciAmJiBpdGVtLnNpemUubmFtZSA9PT0gc2l6ZSkgPT09IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZVF0eShxdHkpIHtcclxuICAgICAgICBzZXRRYXVudGl0eShxdHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicHJvZHVjdC1kZXRhaWxzIFwiICsgYWRDbGFzc30+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlzTmF2ID9cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtbmF2aWdhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYiBicmVhZGNydW1iLWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvXCI+PGkgY2xhc3NOYW1lPVwiZC1pY29uLWhvbWVcIj48L2k+PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlByb2R1Y3RzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkRldGFpbDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdE5hdiBwcm9kdWN0PXtwcm9kdWN0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwcm9kdWN0LW5hbWVcIj57cHJvZHVjdC5kYXRhLm5hbWV9PC9oMj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LW1ldGEnPlxyXG4gICAgICAgICAgICAgICAgU0tVOiA8c3BhbiBjbGFzc05hbWU9J3Byb2R1Y3Qtc2t1Jz57cHJvZHVjdC5kYXRhLnNrdX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICBDQVRFR09SSUVTOiA8c3BhbiBjbGFzc05hbWU9J3Byb2R1Y3QtYnJhbmQnPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5kYXRhLmNhdGVnb3JpZXMubWFwKChpdGVtLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2l0ZW0ubmFtZSArICctJyArIGluZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17eyBwYXRobmFtZTogJy9zaG9wJywgcXVlcnk6IHsgY2F0ZWdvcnk6IGl0ZW0uc2x1ZyB9IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4IDwgcHJvZHVjdC5kYXRhLmNhdGVnb3JpZXMubGVuZ3RoIC0gMSA/ICcsICcgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmRhdGEucHJpY2VbMF0gIT09IHByb2R1Y3QuZGF0YS5wcmljZVsxXSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuZGF0YS52YXJpYW50cy5sZW5ndGggPT09IDAgfHwgKHByb2R1Y3QuZGF0YS52YXJpYW50cy5sZW5ndGggPiAwICYmICFwcm9kdWN0LmRhdGEudmFyaWFudHNbMF0ucHJpY2UpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucyBjbGFzc05hbWU9XCJuZXctcHJpY2VcIj4ke3RvRGVjaW1hbChwcm9kdWN0LmRhdGEucHJpY2VbMF0pfTwvaW5zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZWwgY2xhc3NOYW1lPVwib2xkLXByaWNlXCI+JHt0b0RlY2ltYWwocHJvZHVjdC5kYXRhLnByaWNlWzFdKX08L2RlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCBkZWwgY2xhc3NOYW1lPVwibmV3LXByaWNlXCI+JHt0b0RlY2ltYWwocHJvZHVjdC5kYXRhLnByaWNlWzBdKX0g4oCTICR7dG9EZWNpbWFsKHByb2R1Y3QuZGF0YS5wcmljZVsxXSl9PC9kZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogPGlucyBjbGFzc05hbWU9XCJuZXctcHJpY2VcIj4ke3RvRGVjaW1hbChwcm9kdWN0LmRhdGEucHJpY2VbMF0pfTwvaW5zPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QuZGF0YS5wcmljZVswXSAhPT0gcHJvZHVjdC5kYXRhLnByaWNlWzFdICYmIHByb2R1Y3QuZGF0YS52YXJpYW50cy5sZW5ndGggPT09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxDb3VudGRvd24gdHlwZT17Mn0gLz4gOiAnJ1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ3MtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ3MtZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJhdGluZ3NcIiBzdHlsZT17eyB3aWR0aDogMjAgKiBwcm9kdWN0LmRhdGEucmF0aW5ncyArICclJyB9fT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcHRleHQgdG9vbHRpcC10b3BcIj57dG9EZWNpbWFsKHByb2R1Y3QuZGF0YS5yYXRpbmdzKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJyYXRpbmctcmV2aWV3c1wiPigge3Byb2R1Y3QuZGF0YS5yZXZpZXdzfSByZXZpZXdzICk8L0FMaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2R1Y3Qtc2hvcnQtZGVzY1wiPntwcm9kdWN0LmRhdGEuc2hvcnRfZGVzY3JpcHRpb259PC9wPlxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdCAmJiBwcm9kdWN0LmRhdGEudmFyaWFudHMubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5kYXRhLnZhcmlhbnRzWzBdLmNvbG9yID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1mb3JtIHByb2R1Y3QtdmFyaWF0aW9ucyBwcm9kdWN0LWNvbG9yJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNvbG9yOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWxlY3QtYm94Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT0nY29sb3InIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sIHNlbGVjdC1jb2xvcicgb25DaGFuZ2U9e3NldENvbG9ySGFuZGxlcn0gdmFsdWU9e2N1ckNvbG9yfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibnVsbFwiPkNob29zZSBhbiBvcHRpb248L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycy5tYXAoaXRlbSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzRGlzYWJsZWQoaXRlbS5uYW1lLCBjdXJTaXplKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aXRlbS5uYW1lfSBrZXk9e1wiY29sb3ItXCIgKyBpdGVtLm5hbWV9PntpdGVtLm5hbWV9PC9vcHRpb24+IDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuZGF0YS52YXJpYW50c1swXS5zaXplID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1mb3JtIHByb2R1Y3QtdmFyaWF0aW9ucyBwcm9kdWN0LXNpemUgbWItMCBwYi0yJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNpemU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtZm9ybS1ncm91cCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VsZWN0LWJveCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPSdzaXplJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCBzZWxlY3Qtc2l6ZScgb25DaGFuZ2U9e3NldFNpemVIYW5kbGVyfSB2YWx1ZT17Y3VyU2l6ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJudWxsXCI+Q2hvb3NlIGFuIG9wdGlvbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplcy5tYXAoaXRlbSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc0Rpc2FibGVkKGN1ckNvbG9yLCBpdGVtLm5hbWUpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aXRlbS5uYW1lfSBrZXk9e1wic2l6ZS1cIiArIGl0ZW0ubmFtZX0+e2l0ZW0ubmFtZX08L29wdGlvbj4gOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sbGFwc2UgaW49eydudWxsJyAhPT0gY3VyQ29sb3IgfHwgJ251bGwnICE9PSBjdXJTaXplfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtd3JhcHBlciBvdmVyZmxvdy1oaWRkZW4gcmVzZXQtdmFsdWUtYnV0dG9uIHctMTAwIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9JyMnIGNsYXNzTmFtZT0ncHJvZHVjdC12YXJpYXRpb24tY2xlYW4nIG9uQ2xpY2s9e3Jlc2V0VmFsdWVIYW5kbGVyfT5DbGVhbiBBbGw8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC12YXJpYXRpb24tcHJpY2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbGxhcHNlIGluPXtjYXJ0QWN0aXZlICYmIGN1ckluZGV4ID4gLTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1ckluZGV4ID4gLTEgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLXByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5kYXRhLnZhcmlhbnRzW2N1ckluZGV4XS5wcmljZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5kYXRhLnZhcmlhbnRzW2N1ckluZGV4XS5zYWxlX3ByaWNlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnMgY2xhc3NOYW1lPVwibmV3LXByaWNlXCI+JHt0b0RlY2ltYWwocHJvZHVjdC5kYXRhLnZhcmlhbnRzW2N1ckluZGV4XS5zYWxlX3ByaWNlKX08L2lucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZWwgY2xhc3NOYW1lPVwib2xkLXByaWNlXCI+JHt0b0RlY2ltYWwocHJvZHVjdC5kYXRhLnZhcmlhbnRzW2N1ckluZGV4XS5wcmljZSl9PC9kZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZSBtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5zIGNsYXNzTmFtZT1cIm5ldy1wcmljZVwiPiR7dG9EZWNpbWFsKHByb2R1Y3QuZGF0YS52YXJpYW50c1tjdXJJbmRleF0ucHJpY2UpfTwvaW5zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPiA6ICcnXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJwcm9kdWN0LWRpdmlkZXJcIj48L2hyPlxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaXNTdGlja3lDYXJ0ID9cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1jb250ZW50IGZpeC10b3AgcHJvZHVjdC1zdGlja3ktY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3ktcHJvZHVjdC1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXsnL3Byb2R1Y3QvZGVmYXVsdC8nICsgcHJvZHVjdC5kYXRhLnNsdWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FTU0VUX1VSSSArIHByb2R1Y3QuZGF0YS5waWN0dXJlc1swXS51cmx9IHdpZHRoPVwiOTBcIiBoZWlnaHQ9XCI5MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiUHJvZHVjdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInByb2R1Y3QtdGl0bGVcIj48QUxpbmsgaHJlZj17Jy9wcm9kdWN0L2RlZmF1bHQvJyArIHByb2R1Y3QuZGF0YS5zbHVnfT57cHJvZHVjdC5kYXRhLm5hbWV9PC9BTGluaz48L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1ckluZGV4ID4gLTEgJiYgcHJvZHVjdC5kYXRhLnZhcmlhbnRzWzBdID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuZGF0YS52YXJpYW50c1tjdXJJbmRleF0ucHJpY2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuZGF0YS52YXJpYW50c1tjdXJJbmRleF0uc2FsZV9wcmljZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5zIGNsYXNzTmFtZT1cIm5ldy1wcmljZVwiPiR7dG9EZWNpbWFsKHByb2R1Y3QuZGF0YS52YXJpYW50c1tjdXJJbmRleF0uc2FsZV9wcmljZSl9PC9pbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGVsIGNsYXNzTmFtZT1cIm9sZC1wcmljZVwiPiR7dG9EZWNpbWFsKHByb2R1Y3QuZGF0YS52YXJpYW50c1tjdXJJbmRleF0ucHJpY2UpfTwvZGVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucyBjbGFzc05hbWU9XCJuZXctcHJpY2VcIj4ke3RvRGVjaW1hbChwcm9kdWN0LmRhdGEudmFyaWFudHNbY3VySW5kZXhdLnByaWNlKX08L2lucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmRhdGEucHJpY2VbMF0gIT09IHByb2R1Y3QuZGF0YS5wcmljZVsxXSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5kYXRhLnZhcmlhbnRzLmxlbmd0aCA9PT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5zIGNsYXNzTmFtZT1cIm5ldy1wcmljZVwiPiR7dG9EZWNpbWFsKHByb2R1Y3QuZGF0YS5wcmljZVswXSl9PC9pbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGVsIGNsYXNzTmFtZT1cIm9sZC1wcmljZVwiPiR7dG9EZWNpbWFsKHByb2R1Y3QuZGF0YS5wcmljZVsxXSl9PC9kZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwgZGVsIGNsYXNzTmFtZT1cIm5ldy1wcmljZVwiPiR7dG9EZWNpbWFsKHByb2R1Y3QuZGF0YS5wcmljZVswXSl9IOKAkyAke3RvRGVjaW1hbChwcm9kdWN0LmRhdGEucHJpY2VbMV0pfTwvZGVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGlucyBjbGFzc05hbWU9XCJuZXctcHJpY2VcIj4ke3RvRGVjaW1hbChwcm9kdWN0LmRhdGEucHJpY2VbMF0pfTwvaW5zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5ncy1jb250YWluZXIgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5ncy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJhdGluZ3NcIiBzdHlsZT17eyB3aWR0aDogMjAgKiBwcm9kdWN0LmRhdGEucmF0aW5ncyArICclJyB9fT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXB0ZXh0IHRvb2x0aXAtdG9wXCI+e3RvRGVjaW1hbChwcm9kdWN0LmRhdGEucmF0aW5ncyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJyYXRpbmctcmV2aWV3c1wiPigge3Byb2R1Y3QuZGF0YS5yZXZpZXdzfSByZXZpZXdzICk8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZm9ybSBwcm9kdWN0LXF0eSBwYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImQtbm9uZVwiPlFUWTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1mb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxRdWFudGl0eSBtYXg9e3Byb2R1Y3QuZGF0YS5zdG9ja30gcHJvZHVjdD17cHJvZHVjdH0gb25DaGFuZ2VRdHk9e2NoYW5nZVF0eX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2BidG4tcHJvZHVjdCBidG4tY2FydCB0ZXh0LW5vcm1hbCBscy1ub3JtYWwgZm9udC13ZWlnaHQtc2VtaS1ib2xkICR7Y2FydEFjdGl2ZSA/ICcnIDogJ2Rpc2FibGVkJ31gfSBvbkNsaWNrPXthZGRUb0NhcnRIYW5kbGVyfT48aSBjbGFzc05hbWU9J2QtaWNvbi1iYWcnPjwvaT5BZGQgdG8gQ2FydDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZm9ybSBwcm9kdWN0LXF0eSBwYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJkLW5vbmVcIj5RVFk6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxRdWFudGl0eSBtYXg9e3Byb2R1Y3QuZGF0YS5zdG9ja30gcHJvZHVjdD17cHJvZHVjdH0gb25DaGFuZ2VRdHk9e2NoYW5nZVF0eX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgYnRuLXByb2R1Y3QgYnRuLWNhcnQgdGV4dC1ub3JtYWwgbHMtbm9ybWFsIGZvbnQtd2VpZ2h0LXNlbWktYm9sZCAke2NhcnRBY3RpdmUgPyAnJyA6ICdkaXNhYmxlZCd9YH0gb25DbGljaz17YWRkVG9DYXJ0SGFuZGxlcn0+PGkgY2xhc3NOYW1lPSdkLWljb24tYmFnJz48L2k+QWRkIHRvIENhcnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJwcm9kdWN0LWRpdmlkZXIgbWItM1wiPjwvaHI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1saW5rcyBtci00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic29jaWFsLWxpbmsgc29jaWFsLWZhY2Vib29rIGZhYiBmYS1mYWNlYm9vay1mXCI+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzb2NpYWwtbGluayBzb2NpYWwtdHdpdHRlciBmYWIgZmEtdHdpdHRlclwiPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic29jaWFsLWxpbmsgc29jaWFsLXBpbnRlcmVzdCBmYWIgZmEtcGludGVyZXN0LXBcIj48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IDxzcGFuIGNsYXNzTmFtZT1cImRpdmlkZXIgZC1sZy1zaG93XCI+PC9zcGFuPiA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT17YGJ0bi1wcm9kdWN0IGJ0bi13aXNobGlzdGB9IHRpdGxlPXtpc1dpc2hsaXN0ZWQgPyAnQnJvd3NlIHdpc2hsaXN0JyA6ICdBZGQgdG8gd2lzaGxpc3QnfSBvbkNsaWNrPXt3aXNobGlzdEhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17aXNXaXNobGlzdGVkID8gXCJkLWljb24taGVhcnQtZnVsbFwiIDogXCJkLWljb24taGVhcnRcIn0+PC9pPiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzV2lzaGxpc3RlZCA/ICdCcm93c2Ugd2lzaGxpc3QnIDogJ0FkZCB0byBXaXNobGlzdCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgd2lzaGxpc3Q6IHN0YXRlLndpc2hsaXN0LmRhdGEgPyBzdGF0ZS53aXNobGlzdC5kYXRhIDogW11cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgdG9nZ2xlV2lzaGxpc3Q6IHdpc2hsaXN0QWN0aW9ucy50b2dnbGVXaXNobGlzdCwgYWRkVG9DYXJ0OiBjYXJ0QWN0aW9ucy5hZGRUb0NhcnQgfSkoRGV0YWlsT25lKTsiLCJpbXBvcnQgQUxpbmsgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL2N1c3RvbS1saW5rJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdE5hdiAoIHByb3BzICkge1xyXG4gICAgY29uc3QgeyBwcm9kdWN0IH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJwcm9kdWN0LW5hdlwiPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0LnByZXYgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBgcHJvZHVjdC1uYXYtJHsgcHJvZHVjdC5uZXh0ID8gJ3ByZXYnIDogJ25leHQgbm8tbmV4dCcgfWAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyB7IHBhdGhuYW1lOiByb3V0ZXIucGF0aG5hbWUsIHF1ZXJ5OiB7IHNsdWc6IHByb2R1Y3QucHJldi5zbHVnIH0gfSB9IHNjcm9sbD17IGZhbHNlIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJkLWljb24tYXJyb3ctbGVmdFwiPjwvaT4gUHJldlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LW5hdi1wb3B1cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgcHJvZHVjdC5wcmV2LnBpY3R1cmVzWyAwIF0udXJsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicHJvZHVjdCB0aHVtYm5haWxcIiB3aWR0aD1cIjExMFwiIGhlaWdodD1cIjEyM1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1uYW1lXCI+eyBwcm9kdWN0LnByZXYubmFtZSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+IDogXCJcIlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0Lm5leHQgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcm9kdWN0LW5hdi1uZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXsgeyBwYXRobmFtZTogcm91dGVyLnBhdGhuYW1lLCBxdWVyeTogeyBzbHVnOiBwcm9kdWN0Lm5leHQuc2x1ZyB9IH0gfSBzY3JvbGw9eyBmYWxzZSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV4dCA8aSBjbGFzc05hbWU9XCJkLWljb24tYXJyb3ctcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LW5hdi1wb3B1cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgcHJvZHVjdC5uZXh0LnBpY3R1cmVzWyAwIF0udXJsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicHJvZHVjdCB0aHVtYm5haWxcIiB3aWR0aD1cIjExMFwiIGhlaWdodD1cIjEyM1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1uYW1lXCI+eyBwcm9kdWN0Lm5leHQubmFtZSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+IDogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC91bD5cclxuICAgIClcclxufSIsImltcG9ydCB7IHdpdGhBcG9sbG8gfSBmcm9tICduZXh0LWFwb2xsbyc7XHJcbmltcG9ydCBBcG9sbG9DbGllbnQsIHsgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ2Fwb2xsby1ib29zdCc7XHJcblxyXG5jb25zdCBBUElfVVJJID0gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0VSVkVSX1VSTH0vZ3JhcGhxbGBcclxuY29uc29sZS5sb2coXCJBUElfVVJJXCIpXHJcbmNvbnNvbGUubG9nKEFQSV9VUkkpXHJcblxyXG5jb25zdCBhcG9sbG9DbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAgIHVyaTogQVBJX1VSSSxcclxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyhhcG9sbG9DbGllbnQpOyIsImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXHJcblxyXG5leHBvcnQgY29uc3QgY3VycmVudERlbW8gPSBgXCIxXCJgO1xyXG5cclxuY29uc3QgUFJPRFVDVF9TSU1QTEUgPSBncWxgXHJcbiAgICBmcmFnbWVudCBQcm9kdWN0U2ltcGxlIG9uIFByb2R1Y3Qge1xyXG4gICAgICAgIG5hbWVcclxuICAgICAgICBzbHVnXHJcbiAgICAgICAgcHJpY2VcclxuICAgICAgICByYXRpbmdzXHJcbiAgICAgICAgcmV2aWV3c1xyXG4gICAgICAgIHN0b2NrXHJcbiAgICAgICAgc2hvcnRfZGVzY3JpcHRpb25cclxuICAgICAgICBpc19mZWF0dXJlZFxyXG4gICAgICAgIGlzX25ld1xyXG4gICAgICAgIHVudGlsXHJcbiAgICAgICAgZGlzY291bnRcclxuICAgICAgICBwaWN0dXJlcyB7XHJcbiAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICB9XHJcbiAgICAgICAgc21hbGxfcGljdHVyZXMge1xyXG4gICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGVnb3JpZXMge1xyXG4gICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgIHNsdWdcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyaWFudHMge1xyXG4gICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICBzYWxlX3ByaWNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBQUk9EVUNUX1NNQUxMID0gZ3FsYFxyXG4gICAgZnJhZ21lbnQgUHJvZHVjdFNtYWxsIG9uIFByb2R1Y3Qge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIHNsdWdcclxuICAgICAgICBwcmljZVxyXG4gICAgICAgIHJhdGluZ3NcclxuICAgICAgICBwaWN0dXJlcyB7XHJcbiAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICB9XHJcbiAgICAgICAgc21hbGxfcGljdHVyZXMge1xyXG4gICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhcmlhbnRzIHtcclxuICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgc2FsZV9wcmljZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9QUk9EVUNUUyA9IGdxbGBcclxuICAgIHF1ZXJ5IHByb2R1Y3RzKCRzZWFyY2g6IFN0cmluZywgJGNvbG9yczogW1N0cmluZ10sICRzaXplczogW1N0cmluZ10sICRicmFuZHM6IFtTdHJpbmddLCAkbWluX3ByaWNlOiBJbnQsICRtYXhfcHJpY2U6IEludCwgJGNhdGVnb3J5OiBTdHJpbmcsICR0YWc6IFN0cmluZywgJHNvcnRCeTogU3RyaW5nLCAkZnJvbTogSW50LCAkdG86IEludCwgJGxpc3Q6IEJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHByb2R1Y3RzKGRlbW86ICR7Y3VycmVudERlbW8gfSwgc2VhcmNoOiAkc2VhcmNoLCBjb2xvcnM6ICRjb2xvcnMsIHNpemVzOiAkc2l6ZXMsIGJyYW5kczogJGJyYW5kcywgbWluX3ByaWNlOiAkbWluX3ByaWNlLCBtYXhfcHJpY2U6ICRtYXhfcHJpY2UsIGNhdGVnb3J5OiAkY2F0ZWdvcnksIHRhZzogJHRhZywgc29ydEJ5OiAkc29ydEJ5LCBmcm9tOiAkZnJvbSwgdG86ICR0byApIHtcclxuICAgICAgICAgICAgZGF0YSB7XHJcbiAgICAgICAgICAgICAgICBzaG9ydF9kZXNjcmlwdGlvbiBAaW5jbHVkZShpZjogJGxpc3QpXHJcbiAgICAgICAgICAgICAgICAuLi5Qcm9kdWN0U2ltcGxlXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRvdGFsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHsgUFJPRFVDVF9TSU1QTEUgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1NQRUNJQUxfUFJPRFVDVFMgPSBncWxgXHJcbiAgICBxdWVyeSBzcGVjaWFsUHJvZHVjdHMoJGZlYXR1cmVkOiBCb29sZWFuID0gZmFsc2UsICRiZXN0U2VsbGluZzogQm9vbGVhbiA9IGZhbHNlLCAkdG9wUmF0ZWQ6IEJvb2xlYW4gPSBmYWxzZSwgJG9uU2FsZTogQm9vbGVhbiA9IGZhbHNlLCAkY291bnQ6IEludCkge1xyXG4gICAgICAgIHNwZWNpYWxQcm9kdWN0cyhkZW1vOiAke2N1cnJlbnREZW1vIH0sIGZlYXR1cmVkOiAkZmVhdHVyZWQsIGJlc3RTZWxsaW5nOiAkYmVzdFNlbGxpbmcsIHRvcFJhdGVkOiAkdG9wUmF0ZWQsIG9uU2FsZTogJG9uU2FsZSwgY291bnQ6ICRjb3VudCkge1xyXG4gICAgICAgICAgICBmZWF0dXJlZCBAaW5jbHVkZShpZjogJGZlYXR1cmVkKSB7XHJcbiAgICAgICAgICAgICAgICAuLi5Qcm9kdWN0U21hbGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBiZXN0U2VsbGluZyBAaW5jbHVkZShpZjogJGJlc3RTZWxsaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAuLi5Qcm9kdWN0U21hbGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0b3BSYXRlZCBAaW5jbHVkZShpZjogJHRvcFJhdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAuLi5Qcm9kdWN0U21hbGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYXRlc3QgQGluY2x1ZGUoaWY6ICRsYXRlc3QpIHtcclxuICAgICAgICAgICAgICAgIC4uLlByb2R1Y3RTbWFsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHsgUFJPRFVDVF9TTUFMTCB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVCA9IGdxbGBcclxuICAgIHF1ZXJ5IHByb2R1Y3QoJHNsdWc6IFN0cmluZyEsICRvbmx5RGF0YTogQm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgcHJvZHVjdChkZW1vOiAke2N1cnJlbnREZW1vIH0sIHNsdWc6ICRzbHVnLCBvbmx5RGF0YTogJG9ubHlEYXRhKSB7XHJcbiAgICAgICAgICAgIGRhdGEge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgICBkaXNjb3VudFxyXG4gICAgICAgICAgICAgICAgc2hvcnRfZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIHNrdVxyXG4gICAgICAgICAgICAgICAgc3RvY2tcclxuICAgICAgICAgICAgICAgIHJhdGluZ3NcclxuICAgICAgICAgICAgICAgIHJldmlld3NcclxuICAgICAgICAgICAgICAgIHNhbGVfY291bnRcclxuICAgICAgICAgICAgICAgIGlzX25ld1xyXG4gICAgICAgICAgICAgICAgaXNfdG9wXHJcbiAgICAgICAgICAgICAgICB1bnRpbFxyXG4gICAgICAgICAgICAgICAgcGljdHVyZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzbWFsbF9waWN0dXJlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxhcmdlX3BpY3R1cmVzIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRhZ3Mge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmFuZHMge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICAgICAgICBzYWxlX3ByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3Ige1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRodW1iIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHJldiBAc2tpcChpZjogJG9ubHlEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBwaWN0dXJlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuZXh0IEBza2lwKGlmOiAkb25seURhdGEpIHtcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIHBpY3R1cmVzIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlbGF0ZWQgQHNraXAoaWY6ICRvbmx5RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgLi4uUHJvZHVjdFNpbXBsZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHsgUFJPRFVDVF9TSU1QTEUgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1ZJREVPID0gZ3FsYFxyXG4gICAgcXVlcnkgdmlkZW8oJHNsdWc6IFN0cmluZyEpIHtcclxuICAgICAgICB2aWRlbyhkZW1vOiAke2N1cnJlbnREZW1vIH0sIHNsdWc6ICRzbHVnKSB7XHJcbiAgICAgICAgICAgIGRhdGEge1xyXG4gICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfU0hPUF9TSURFQkFSX0RBVEEgPSBncWxgXHJcbiAgICBxdWVyeSBzaG9wU2lkZWJhckRhdGEoJGZlYXR1cmVkOiBCb29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBzaG9wU2lkZWJhckRhdGEoZGVtbzogJHtjdXJyZW50RGVtbyB9LCBmZWF0dXJlZDogJGZlYXR1cmVkKSB7XHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXMge1xyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmVhdHVyZWQgQGluY2x1ZGUoaWY6ICRmZWF0dXJlZCkge1xyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICAgIHJhdGluZ3NcclxuICAgICAgICAgICAgICAgIHJldmlld3NcclxuICAgICAgICAgICAgICAgIHBpY3R1cmVzIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudHMge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfUE9TVFMgPSBncWxgXHJcbiAgICBxdWVyeSBwb3N0cygkY2F0ZWdvcnk6IFN0cmluZywgJGZyb206IEludCwgJHRvOiBJbnQsICRjYXRlZ29yaWVzOiBbU3RyaW5nXSkge1xyXG4gICAgICAgIHBvc3RzKGRlbW86ICR7Y3VycmVudERlbW8gfSwgY2F0ZWdvcnk6ICRjYXRlZ29yeSwgZnJvbTogJGZyb20sIHRvOiAkdG8sIGNhdGVnb3JpZXM6ICRjYXRlZ29yaWVzICkge1xyXG4gICAgICAgICAgICBkYXRhIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICBkYXRlXHJcbiAgICAgICAgICAgICAgICBjb21tZW50c1xyXG4gICAgICAgICAgICAgICAgY29udGVudFxyXG4gICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgYXV0aG9yXHJcbiAgICAgICAgICAgICAgICBsYXJnZV9waWN0dXJlIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGljdHVyZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNtYWxsX3BpY3R1cmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2aWRlbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0b3RhbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9QT1NUID0gZ3FsYFxyXG4gICAgcXVlcnkgcG9zdCgkc2x1ZzogU3RyaW5nISkge1xyXG4gICAgICAgIHBvc3QoZGVtbzogJHtjdXJyZW50RGVtbyB9LCBzbHVnOiAkc2x1Zykge1xyXG4gICAgICAgICAgICBkYXRhIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICBhdXRob3JcclxuICAgICAgICAgICAgICAgIGRhdGVcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRzXHJcbiAgICAgICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgICBsYXJnZV9waWN0dXJlIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGljdHVyZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZpZGVvIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWxhdGVkIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICBkYXRlXHJcbiAgICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgICBjb21tZW50c1xyXG4gICAgICAgICAgICAgICAgY29udGVudFxyXG4gICAgICAgICAgICAgICAgcGljdHVyZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZpZGVvIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BPU1RfU0lERUJBUl9EQVRBID0gZ3FsYFxyXG4gICAgcXVlcnkgcG9zdFNpZGJhckRhdGEge1xyXG4gICAgICAgIHBvc3RTaWRlYmFyRGF0YShkZW1vOiAke2N1cnJlbnREZW1vIH0pIHtcclxuICAgICAgICAgICAgY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVjZW50IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICBkYXRlXHJcbiAgICAgICAgICAgICAgICBzbWFsbF9waWN0dXJlIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0hPTUVfREFUQSA9IGdxbGBcclxuICAgIHF1ZXJ5IGluZGV4RGF0YSgkcHJvZHVjdHNDb3VudDogSW50LCAkcG9zdHNDb3VudDogSW50KSB7XHJcbiAgICAgICAgc3BlY2lhbFByb2R1Y3RzKGRlbW86ICR7Y3VycmVudERlbW8gfSwgZmVhdHVyZWQ6IHRydWUsIGJlc3RTZWxsaW5nOiB0cnVlLCB0b3BSYXRlZDogdHJ1ZSwgbGF0ZXN0OiB0cnVlLCBvblNhbGU6IHRydWUsIGNvdW50OiAkcHJvZHVjdHNDb3VudCkge1xyXG4gICAgICAgICAgICBmZWF0dXJlZCB7XHJcbiAgICAgICAgICAgICAgICAuLi5Qcm9kdWN0U2ltcGxlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYmVzdFNlbGxpbmcge1xyXG4gICAgICAgICAgICAgICAgLi4uUHJvZHVjdFNpbXBsZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRvcFJhdGVkIHtcclxuICAgICAgICAgICAgICAgIC4uLlByb2R1Y3RTaW1wbGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYXRlc3Qge1xyXG4gICAgICAgICAgICAgICAgLi4uUHJvZHVjdFNpbXBsZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9uU2FsZSB7XHJcbiAgICAgICAgICAgICAgICAuLi5Qcm9kdWN0U2ltcGxlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcG9zdHMoZGVtbzogJHtjdXJyZW50RGVtbyB9LCB0bzogJHBvc3RzQ291bnQpIHtcclxuICAgICAgICAgICAgZGF0YSB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgZGF0ZVxyXG4gICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgY29tbWVudHNcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRcclxuICAgICAgICAgICAgICAgIHBpY3R1cmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2aWRlbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxhcmdlX3BpY3R1cmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAkeyBQUk9EVUNUX1NJTVBMRSB9XHJcbmBcclxuIiwiaW1wb3J0IHsgcGVyc2lzdFJlZHVjZXIgfSBmcm9tIFwicmVkdXgtcGVyc2lzdFwiO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tICdyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlJztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCB7IHRha2VFdmVyeSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcblxyXG5pbXBvcnQgQ2FydFBvcHVwIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9wcm9kdWN0L2NvbW1vbi9jYXJ0LXBvcHVwJztcclxuXHJcbmNvbnN0IGFjdGlvblR5cGVzID0ge1xyXG4gICAgQUREX1RPX0NBUlQ6ICdBRERfVE9fQ0FSVCcsXHJcbiAgICBSRU1PVkVfRlJPTV9DQVJUOiAnUkVNT1ZFX0ZST01fQ0FSVCcsXHJcbiAgICBVUERBVEVfQ0FSVDogJ1VQREFURV9DQVJUJyxcclxuICAgIFJFRlJFU0hfU1RPUkU6ICdSRUZSRVNIX1NUT1JFJ1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBkYXRhOiBbXVxyXG59XHJcblxyXG5mdW5jdGlvbiBjYXJ0UmVkdWNlciggc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiApIHtcclxuICAgIHN3aXRjaCAoIGFjdGlvbi50eXBlICkge1xyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuQUREX1RPX0NBUlQ6XHJcbiAgICAgICAgICAgIGxldCB0bXBQcm9kdWN0ID0geyAuLi5hY3Rpb24ucGF5bG9hZC5wcm9kdWN0IH07XHJcblxyXG4gICAgICAgICAgICBpZiAoIHN0YXRlLmRhdGEuZmluZEluZGV4KCBpdGVtID0+IGl0ZW0ubmFtZSA9PT0gYWN0aW9uLnBheWxvYWQucHJvZHVjdC5uYW1lICkgPiAtMSApIHtcclxuICAgICAgICAgICAgICAgIGxldCB0bXBEYXRhID0gc3RhdGUuZGF0YS5yZWR1Y2UoICggYWNjLCBjdXIgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBjdXIubmFtZSA9PT0gdG1wUHJvZHVjdC5uYW1lICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2MucHVzaCgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uY3VyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXR5OiBwYXJzZUludCggY3VyLnF0eSApICsgcGFyc2VJbnQoIHRtcFByb2R1Y3QucXR5IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjYy5wdXNoKCBjdXIgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgICAgICAgICB9LCBbXSApXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGRhdGE6IHRtcERhdGEgfTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBkYXRhOiBbIC4uLnN0YXRlLmRhdGEsIHRtcFByb2R1Y3QgXSB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuUkVNT1ZFX0ZST01fQ0FSVDpcclxuICAgICAgICAgICAgbGV0IGNhcnQgPSBzdGF0ZS5kYXRhLnJlZHVjZSggKCBjYXJ0QWNjLCBwcm9kdWN0ICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBwcm9kdWN0Lm5hbWUgIT09IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QubmFtZSApIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXJ0QWNjLnB1c2goIHByb2R1Y3QgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBjYXJ0QWNjO1xyXG4gICAgICAgICAgICB9LCBbXSApO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGRhdGE6IGNhcnQgfTtcclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5VUERBVEVfQ0FSVDpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGRhdGE6IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3RzIH07XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuUkVGUkVTSF9TVE9SRTpcclxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2FydEFjdGlvbnMgPSB7XHJcbiAgICBhZGRUb0NhcnQ6IHByb2R1Y3QgPT4gKCB7IHR5cGU6IGFjdGlvblR5cGVzLkFERF9UT19DQVJULCBwYXlsb2FkOiB7IHByb2R1Y3QgfSB9ICksXHJcbiAgICByZW1vdmVGcm9tQ2FydDogcHJvZHVjdCA9PiAoIHsgdHlwZTogYWN0aW9uVHlwZXMuUkVNT1ZFX0ZST01fQ0FSVCwgcGF5bG9hZDogeyBwcm9kdWN0IH0gfSApLFxyXG4gICAgdXBkYXRlQ2FydDogcHJvZHVjdHMgPT4gKCB7IHR5cGU6IGFjdGlvblR5cGVzLlVQREFURV9DQVJULCBwYXlsb2FkOiB7IHByb2R1Y3RzIH0gfSApXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGNhcnRTYWdhKCkge1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KCBhY3Rpb25UeXBlcy5BRERfVE9fQ0FSVCwgZnVuY3Rpb24qIHNhZ2EoIGUgKSB7XHJcbiAgICAgICAgdG9hc3QoIDxDYXJ0UG9wdXAgcHJvZHVjdD17IGUucGF5bG9hZC5wcm9kdWN0IH0gLz4gKTtcclxuICAgIH0gKVxyXG59XHJcblxyXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xyXG4gICAga2V5UHJlZml4OiBcInJpb2RlLVwiLFxyXG4gICAga2V5OiBcImNhcnRcIixcclxuICAgIHN0b3JhZ2VcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGVyc2lzdFJlZHVjZXIoIHBlcnNpc3RDb25maWcsIGNhcnRSZWR1Y2VyICk7IiwiaW1wb3J0IHsgcGVyc2lzdFJlZHVjZXIgfSBmcm9tIFwicmVkdXgtcGVyc2lzdFwiO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tICdyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlJztcclxuXHJcbmNvbnN0IGFjdGlvblR5cGVzID0ge1xyXG4gICAgT1BFTl9NT0RBTDogJ09QRU5fTU9EQUwnLFxyXG4gICAgQ0xPU0VfTU9EQUw6ICdDTE9TRV9NT0RBTCcsXHJcbiAgICBPUEVOX1FVSUNLVklFVzogJ09QRU5fUVVJQ0tWSUVXJyxcclxuICAgIENMT1NFX1FVSUNLVklFVzogJ0NMT1NFX1FVSUNLVklFVycsXHJcbiAgICBSRUZSRVNIX1NUT1JFOiAnUkVGUkVTSF9TVE9SRSdcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgdHlwZTogJ3ZpZGVvJyxcclxuICAgIG9wZW5Nb2RhbDogZmFsc2UsXHJcbiAgICBxdWlja3ZpZXc6IGZhbHNlLFxyXG4gICAgc2luZ2xlU2x1ZzogJydcclxufVxyXG5cclxuZnVuY3Rpb24gbW9kYWxSZWR1Y2VyKCBzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uICkge1xyXG4gICAgc3dpdGNoICggYWN0aW9uLnR5cGUgKSB7XHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5PUEVOX1FVSUNLVklFVzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcXVpY2t2aWV3OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2luZ2xlU2x1ZzogYWN0aW9uLnBheWxvYWQuc2x1Z1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuQ0xPU0VfUVVJQ0tWSUVXOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBxdWlja3ZpZXc6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5PUEVOX01PREFMOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBzaW5nbGVTbHVnOiBhY3Rpb24ucGF5bG9hZC5zbHVnLFxyXG4gICAgICAgICAgICAgICAgb3Blbk1vZGFsOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5DTE9TRV9NT0RBTDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgb3Blbk1vZGFsOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuUkVGUkVTSF9TVE9SRTpcclxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbW9kYWxBY3Rpb25zID0ge1xyXG4gICAgb3Blbk1vZGFsOiBzbHVnID0+ICggeyB0eXBlOiBhY3Rpb25UeXBlcy5PUEVOX01PREFMLCBwYXlsb2FkOiB7IHNsdWcgfSB9ICksXHJcbiAgICBjbG9zZU1vZGFsOiBtb2RhbFR5cGUgPT4gKCB7IHR5cGU6IGFjdGlvblR5cGVzLkNMT1NFX01PREFMLCBwYXlsb2FkOiB7IG1vZGFsVHlwZSB9IH0gKSxcclxuICAgIG9wZW5RdWlja3ZpZXc6IHNsdWcgPT4gKCB7IHR5cGU6IGFjdGlvblR5cGVzLk9QRU5fUVVJQ0tWSUVXLCBwYXlsb2FkOiB7IHNsdWcgfSB9ICksXHJcbiAgICBjbG9zZVF1aWNrdmlldzogKCkgPT4gKCB7IHR5cGU6IGFjdGlvblR5cGVzLkNMT1NFX1FVSUNLVklFVyB9IClcclxufTtcclxuXHJcbmNvbnN0IHBlcnNpc3RDb25maWcgPSB7XHJcbiAgICBrZXlQcmVmaXg6IFwicmlvZGUtXCIsXHJcbiAgICBrZXk6IFwibW9kYWxcIixcclxuICAgIHN0b3JhZ2VcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGVyc2lzdFJlZHVjZXIoIHBlcnNpc3RDb25maWcsIG1vZGFsUmVkdWNlciApOyIsImltcG9ydCB7IHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSBcInJlZHV4LXBlcnNpc3RcIjtcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAncmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZSc7XHJcblxyXG5jb25zdCBhY3Rpb25UeXBlcyA9IHtcclxuICAgIFRPR0dMRV9XSVNITElTVDogJ1RPR0dMRV9XSVNITElTVCcsXHJcbiAgICBSRU1PVkVfRlJPTV9XSVNITElTVDogJ1JFTU9WRV9GUk9NX1dJU0hMSVNUJyxcclxuICAgIFJFRlJFU0hfU1RPUkU6ICdSRUZSRVNIX1NUT1JFJ1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBkYXRhOiBbXVxyXG59XHJcblxyXG5mdW5jdGlvbiB3aXNobGlzdFJlZHVjZXIoIHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gKSB7XHJcbiAgICBzd2l0Y2ggKCBhY3Rpb24udHlwZSApIHtcclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLlRPR0dMRV9XSVNITElTVDpcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoIGl0ZW0gPT4gaXRlbS5uYW1lID09PSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0Lm5hbWUgKTtcclxuICAgICAgICAgICAgbGV0IHRtcERhdGEgPSBbIC4uLnN0YXRlLmRhdGEgXTtcclxuXHJcbiAgICAgICAgICAgIGlmICggaW5kZXggPT09IC0xICkge1xyXG4gICAgICAgICAgICAgICAgdG1wRGF0YS5wdXNoKCBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0ICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0bXBEYXRhLnNwbGljZSggaW5kZXggKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGRhdGE6IHRtcERhdGEgfTtcclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5SRU1PVkVfRlJPTV9XSVNITElTVDpcclxuICAgICAgICAgICAgbGV0IHdpc2hsaXN0ID0gc3RhdGUuZGF0YS5yZWR1Y2UoICggd2lzaGxpc3RBY2MsIHByb2R1Y3QgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHByb2R1Y3QubmFtZSAhPT0gYWN0aW9uLnBheWxvYWQucHJvZHVjdC5uYW1lICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpc2hsaXN0QWNjLnB1c2goIHByb2R1Y3QgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB3aXNobGlzdEFjYztcclxuICAgICAgICAgICAgfSwgW10gKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBkYXRhOiB3aXNobGlzdCB9O1xyXG5cclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLlJFRlJFU0hfU1RPUkU6XHJcbiAgICAgICAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB3aXNobGlzdEFjdGlvbnMgPSB7XHJcbiAgICB0b2dnbGVXaXNobGlzdDogcHJvZHVjdCA9PiAoIHsgdHlwZTogYWN0aW9uVHlwZXMuVE9HR0xFX1dJU0hMSVNULCBwYXlsb2FkOiB7IHByb2R1Y3QgfSB9ICksXHJcbiAgICByZW1vdmVGcm9tV2lzaGxpc3Q6IHByb2R1Y3QgPT4gKCB7IHR5cGU6IGFjdGlvblR5cGVzLlJFTU9WRV9GUk9NX1dJU0hMSVNULCBwYXlsb2FkOiB7IHByb2R1Y3QgfSB9IClcclxufTtcclxuXHJcbmNvbnN0IHBlcnNpc3RDb25maWcgPSB7XHJcbiAgICBrZXlQcmVmaXg6IFwicmlvZGUtXCIsXHJcbiAgICBrZXk6IFwid2lzaGxpc3RcIixcclxuICAgIHN0b3JhZ2VcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGVyc2lzdFJlZHVjZXIoIHBlcnNpc3RDb25maWcsIHdpc2hsaXN0UmVkdWNlciApOyIsImV4cG9ydCBjb25zdCBtYWluU2xpZGVyMSA9IHtcclxuICAgIGl0ZW1zOiA1LFxyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIG1hcmdpbjogMixcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICBpdGVtczogNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTIwMDoge1xyXG4gICAgICAgICAgICBpdGVtczogNSxcclxuICAgICAgICAgICAgZG90czogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYWluU2xpZGVyMiA9IHtcclxuICAgIGl0ZW1zOiAxLFxyXG4gICAgbG9vcDogZmFsc2UsXHJcbiAgICBuYXY6IHRydWUsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAxXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFpblNsaWRlcjMgPSB7XHJcbiAgICBhdXRvSGVpZ2h0OiBmYWxzZSxcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgbmF2OiB0cnVlXHJcbiAgICAvLyBkb3RzQ29udGFpbmVyOiBcIi5wcm9kdWN0LXRodW1ic1wiXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYWluU2xpZGVyNCA9IHtcclxuICAgIG5hdjogZmFsc2UsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgaXRlbXM6IDEsXHJcbiAgICBtYXJnaW46IDIwLFxyXG4gICAgbG9vcDogZmFsc2UsXHJcbiAgICBhdXRvUGxheTogdHJ1ZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFpblNsaWRlcjUgPSB7XHJcbiAgICBuYXY6IGZhbHNlLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGl0ZW1zOiA0LFxyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIDU3Njoge1xyXG4gICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDQsXHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFpblNsaWRlcjYgPSB7XHJcbiAgICBuYXY6IGZhbHNlLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGl0ZW1zOiAzLFxyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIDU3Njoge1xyXG4gICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAzLFxyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1haW5TbGlkZXI3ID0ge1xyXG4gICAgaXRlbXM6IDEsXHJcbiAgICBuYXY6IHRydWUsXHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIGF1dG9QbGF5OiB0cnVlLFxyXG4gICAgbG9vcDogZmFsc2UsXHJcbiAgICBtYXJnaW46IDIwXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYWluU2xpZGVyOCA9IHtcclxuICAgIGl0ZW1zOiA2LFxyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgbWFyZ2luOiAwLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNTc2OiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICBpdGVtczogNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTIwMDoge1xyXG4gICAgICAgICAgICBpdGVtczogNlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1haW5TbGlkZXI5ID0ge1xyXG4gICAgaXRlbXM6IDUsXHJcbiAgICBuYXY6IGZhbHNlLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIG1hcmdpbjogMjAsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICA1NzY6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICBpdGVtczogNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTIwMDoge1xyXG4gICAgICAgICAgICBpdGVtczogNVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1haW5TbGlkZXIxMCA9IHtcclxuICAgIGl0ZW1zOiAxLFxyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgNTc2OiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYWluU2xpZGVyMTEgPSB7XHJcbiAgICBuYXY6IGZhbHNlLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICA1NzY6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICBpdGVtczogMyxcclxuICAgICAgICAgICAgZG90czogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYWluU2xpZGVyMTIgPSB7XHJcbiAgICBuYXY6IGZhbHNlLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICA1NzY6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICBpdGVtczogM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiA0LFxyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1haW5TbGlkZXIxMyA9IHtcclxuICAgIGl0ZW1zOiAzLFxyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDMsXHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFpblNsaWRlcjE0ID0ge1xyXG4gICAgaXRlbXM6IDIsXHJcbiAgICBuYXY6IGZhbHNlLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDIsXHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFpblNsaWRlcjE1ID0ge1xyXG4gICAgaXRlbXM6IDQsXHJcbiAgICBuYXY6IHRydWUsXHJcbiAgICBhdXRvSGVpZ2h0OiBmYWxzZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFpblNsaWRlcjE2ID0ge1xyXG4gICAgaXRlbXM6IDcsXHJcbiAgICBuYXY6IGZhbHNlLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBtYXJnaW46IDIwLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICBhdXRvcGxheVRpbWVvdXQ6IDMwMDAsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIDU3Njoge1xyXG4gICAgICAgICAgICBpdGVtczogM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiA0XHJcbiAgICAgICAgfSxcclxuICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEyMDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDZcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYWluU2xpZGVyMTcgPSB7XHJcbiAgICBsb29wOiBmYWxzZSxcclxuICAgIC8vIGRvdHM6IHRydWUsXHJcbiAgICBuYXY6IGZhbHNlLFxyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICBpdGVtczogNCxcclxuICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgIG5hdjogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyAsXHJcbiAgICAvLyBkb3RzQ29udGFpbmVyOiBcIi5wcm9kdWN0LXRodW1ic1wiXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYWluU2xpZGVyMTggPSB7XHJcbiAgICBpdGVtczogMyxcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgbmF2OiB0cnVlLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBtYXJnaW46IDIwLFxyXG4gICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIDU3Njoge1xyXG4gICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFpblNsaWRlcjE5ID0ge1xyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBhdXRvUGxheTogZmFsc2UsXHJcbiAgICBtYXJnaW46IDIwLFxyXG4gICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICBpdGVtczogM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiA0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFpblNsaWRlcjIwID0ge1xyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGRvdHM6IHRydWVcclxufVxyXG5cclxuLy8gaG9tZSBwYWdlXHJcbmV4cG9ydCBjb25zdCBpbnRyb1NsaWRlciA9IHtcclxuICAgIG5hdjogZmFsc2UsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgbG9vcDogZmFsc2UsXHJcbiAgICBpdGVtczogMSxcclxuICAgIGF1dG9wbGF5OiBmYWxzZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2VydmljZVNsaWRlciA9IHtcclxuICAgIGl0ZW1zOiAzLFxyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgbWFyZ2luOiAwLFxyXG4gICAgbG9vcDogZmFsc2UsXHJcbiAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICBhdXRvcGxheVRpbWVvdXQ6IDUwMDAsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNTc2OiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDMsXHJcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYnJhbmRTbGlkZXIgPSB7XHJcbiAgICBpdGVtczogNixcclxuICAgIG5hdjogZmFsc2UsXHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgbG9vcDogZmFsc2UsXHJcbiAgICBtYXJnaW46IDIwLFxyXG4gICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIDU3Njoge1xyXG4gICAgICAgICAgICBpdGVtczogM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiA0XHJcbiAgICAgICAgfSxcclxuICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEyMDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDZcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0U2xpZGVyID0ge1xyXG4gICAgaXRlbXM6IDUsXHJcbiAgICBuYXY6IGZhbHNlLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICBpdGVtczogNCxcclxuICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgIG5hdjogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y3RTbGlkZXIyID0ge1xyXG4gICAgaXRlbXM6IDUsXHJcbiAgICBuYXY6IGZhbHNlLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICBpdGVtczogNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTIwMDoge1xyXG4gICAgICAgICAgICBpdGVtczogNSxcclxuICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgIG5hdjogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=