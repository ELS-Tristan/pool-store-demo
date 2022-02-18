(function() {
var exports = {};
exports.id = "pages/shop";
exports.ids = ["pages/shop"];
exports.modules = {

/***/ "./components/features/pagination.jsx":
/*!********************************************!*\
  !*** ./components/features/pagination.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/custom-link */ "./components/features/custom-link.jsx");
var _jsxFileName = "/home/tristan/projects/Upsidian/ramset-ecomm/client/components/features/pagination.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function Pagination(props) {
  const {
    maxShowCounts = 7,
    totalPage = 1,
    distance = 2
  } = props;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const query = router.query;
  const page = query.page ? parseInt(query.page) : 1;
  let indexList = [];
  let min = Math.max(page - distance, 2);
  let max = Math.min(page + distance, totalPage - 1);

  for (let i = min; i <= max; i++) {
    indexList[i - min + 1] = i;
  }

  indexList[0] = 1;
  indexList[max - min + 2] = totalPage;
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, totalPage > 1 && __jsx("ul", {
    className: "pagination",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: `page-item ${page < 2 ? 'disabled' : ''}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__.default, {
    className: "page-link page-link-prev",
    href: page > 1 ? {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        page: page - 1
      })
    } : '#',
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "d-icon-arrow-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 29
    }
  }), "Prev")), indexList.map((item, index) => index === 1 && item > 2 ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    key: `page-${index}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "page-item dots",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 37
    }
  }, "..."), __jsx("li", {
    className: `page-item ${page === item ? 'active' : ''}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 37
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__.default, {
    className: "page-link",
    href: page === item ? '#' : {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        page: item
      })
    },
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 41
    }
  }, item, page === item && __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 69
    }
  }, "(current)")))) : index === indexList.length - 2 && item + 1 < totalPage ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    key: `page-${index}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 37
    }
  }, __jsx("li", {
    className: `page-item ${page === item ? 'active' : ''}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 41
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__.default, {
    className: "page-link",
    href: page === item ? '#' : {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        page: item
      })
    },
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 45
    }
  }, item, page === item && __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 73
    }
  }, "(current)"))), __jsx("span", {
    className: "page-item dots",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 41
    }
  }, "...")) : __jsx("li", {
    className: `page-item ${page === item ? 'active' : ''}`,
    key: `page-${index}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 37
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__.default, {
    className: "page-link",
    href: page === item ? '#' : {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        page: item
      })
    },
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 41
    }
  }, item, page === item && __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 69
    }
  }, "(current)")))), __jsx("li", {
    className: `page-item ${page > totalPage - 1 ? 'disabled' : ''}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__.default, {
    className: "page-link page-link-next",
    href: page < totalPage ? {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        page: page + 1
      })
    } : '#',
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }
  }, "Next", __jsx("i", {
    className: "d-icon-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 33
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Pagination));

/***/ }),

/***/ "./components/features/product/product-eight.jsx":
/*!*******************************************************!*\
  !*** ./components/features/product/product-eight.jsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lazy-load-image-component */ "react-lazy-load-image-component");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/features/custom-link */ "./components/features/custom-link.jsx");
/* harmony import */ var _store_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/store/cart */ "./store/cart.js");
/* harmony import */ var _store_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/store/modal */ "./store/modal.js");
/* harmony import */ var _store_wishlist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/store/wishlist */ "./store/wishlist.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/utils */ "./utils/index.js");
var _jsxFileName = "/home/tristan/projects/Upsidian/ramset-ecomm/client/components/features/product/product-eight.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function ProductEight(props) {
  const {
    product,
    adClass,
    toggleWishlist,
    wishlist,
    addToCart,
    openQuickview
  } = props; // decide if the product is wishlisted

  let isWishlisted;
  isWishlisted = wishlist.findIndex(item => item.slug === product.slug) > -1 ? true : false;

  const showQuickviewHandler = () => {
    openQuickview(product.slug);
  };

  const wishlistHandler = e => {
    if (toggleWishlist) {
      toggleWishlist(product);
    }

    e.preventDefault();
    let currentTarget = e.currentTarget;
    currentTarget.classList.add('load-more-overlay', 'loading');
    setTimeout(() => {
      currentTarget.classList.remove('load-more-overlay', 'loading');
    }, 1000);
  };

  const addToCartHandler = e => {
    e.preventDefault();
    addToCart(_objectSpread(_objectSpread({}, product), {}, {
      qty: 1,
      price: product.price[0]
    }));
  };

  return __jsx("div", {
    className: `product product-list ${adClass} ${product.variants.length > 0 ? 'product-variable' : ''}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("figure", {
    className: "product-media",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: `/product/default/${product.slug}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "product",
    src: "http://localhost1:4000" + product.pictures[0].url,
    threshold: 500,
    effect: "opacity",
    width: "300",
    height: "338",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }), product.pictures.length >= 2 ? __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "product",
    src: "http://localhost1:4000" + product.pictures[1].url,
    threshold: 500,
    width: "300",
    height: "338",
    effect: "opacity",
    wrapperClassName: "product-image-hover",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 29
    }
  }) : ""), __jsx("div", {
    className: "product-label-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, product.is_new ? __jsx("label", {
    className: "product-label label-new",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 40
    }
  }, "New") : '', product.is_top ? __jsx("label", {
    className: "product-label label-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 40
    }
  }, "Top") : '', product.discount > 0 ? product.variants.length === 0 ? __jsx("label", {
    className: "product-label label-sale",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 33
    }
  }, product.discount, "% OFF") : __jsx("label", {
    className: "product-label label-sale",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 35
    }
  }, "Sale") : '')), __jsx("div", {
    className: "product-details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "product-cat",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, product.categories ? product.categories.map((item, index) => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    key: item.name + '-' + index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 33
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: {
      pathname: '/shop',
      query: {
        category: item.slug
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 37
    }
  }, item.name, index < product.categories.length - 1 ? ', ' : ""))) : ""), __jsx("h3", {
    className: "product-name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: `/product/default/${product.slug}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 21
    }
  }, product.name)), __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }, product.price[0] !== product.price[1] ? product.variants.length === 0 || product.variants.length > 0 && !product.variants[0].price ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("ins", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 37
    }
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_7__.toDecimal)(product.price[0])), __jsx("del", {
    className: "old-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 37
    }
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_7__.toDecimal)(product.price[1]))) : __jsx("del", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 33
    }
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_7__.toDecimal)(product.price[0]), " \u2013 $", (0,_utils__WEBPACK_IMPORTED_MODULE_7__.toDecimal)(product.price[1])) : __jsx("ins", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 31
    }
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_7__.toDecimal)(product.price[0]))), __jsx("div", {
    className: "ratings-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "ratings-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "ratings",
    style: {
      width: 20 * product.ratings + '%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "tooltiptext tooltip-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 25
    }
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_7__.toDecimal)(product.ratings))), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: `/product/default/${product.slug}`,
    className: "rating-reviews",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 21
    }
  }, "( ", product.reviews, " reviews )")), __jsx("p", {
    className: "product-short-desc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }, product.short_description), __jsx("div", {
    className: "product-action",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }, product.variants.length > 0 ? __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: `/product/default/${product.slug}`,
    className: "btn-product btn-cart",
    title: "Go to product",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 33
    }
  }, "Select Options")) : __jsx("a", {
    href: "#",
    className: "btn-product btn-cart",
    title: "Add to cart",
    onClick: addToCartHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 29
    }
  }, __jsx("i", {
    className: "d-icon-bag",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 33
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 63
    }
  }, "Add to cart")), __jsx("a", {
    href: "#",
    className: "btn-product-icon btn-wishlist",
    title: isWishlisted ? 'Remove from wishlist' : 'Add to wishlist',
    onClick: wishlistHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: isWishlisted ? "d-icon-heart-full" : "d-icon-heart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 25
    }
  })), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: "#",
    className: "btn-product-icon btn-quickview",
    title: "Quick View",
    onClick: showQuickviewHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "d-icon-search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 132
    }
  })))));
}

function mapStateToProps(state) {
  return {
    wishlist: state.wishlist.data ? state.wishlist.data : []
  };
}

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, _objectSpread({
  toggleWishlist: _store_wishlist__WEBPACK_IMPORTED_MODULE_6__.wishlistActions.toggleWishlist,
  addToCart: _store_cart__WEBPACK_IMPORTED_MODULE_4__.cartActions.addToCart
}, _store_modal__WEBPACK_IMPORTED_MODULE_5__.modalActions))(ProductEight));

/***/ }),

/***/ "./components/features/product/product-sm.jsx":
/*!****************************************************!*\
  !*** ./components/features/product/product-sm.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lazy-load-image-component */ "react-lazy-load-image-component");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/custom-link */ "./components/features/custom-link.jsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/utils */ "./utils/index.js");
var _jsxFileName = "/home/tristan/projects/Upsidian/ramset-ecomm/client/components/features/product/product-sm.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





function SmallProduct(props) {
  const {
    product,
    adClass,
    isReviewCount = true
  } = props;
  return __jsx("div", {
    className: `product product-list-sm ${adClass}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("figure", {
    className: "product-media",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: `/product/default/${product.slug}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "product",
    src: "http://localhost1:4000" + product.pictures[0].url,
    threshold: 500,
    effect: "opacity",
    width: "300",
    height: "338",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }), product.pictures.length >= 2 ? __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "product",
    src: "http://localhost1:4000" + product.pictures[1].url,
    threshold: 500,
    width: "300",
    height: "338",
    effect: "opacity",
    wrapperClassName: "product-image-hover",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 29
    }
  }) : "")), __jsx("div", {
    className: "product-details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "product-name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: `/product/default/${product.slug}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, product.name)), __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, product.price[0] !== product.price[1] ? product.variants.length === 0 || product.variants.length > 0 && !product.variants[0].price ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("ins", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 37
    }
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_3__.toDecimal)(product.price[0])), __jsx("del", {
    className: "old-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 37
    }
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_3__.toDecimal)(product.price[1]))) : __jsx("del", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 33
    }
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_3__.toDecimal)(product.price[0]), " \u2013 $", (0,_utils__WEBPACK_IMPORTED_MODULE_3__.toDecimal)(product.price[1])) : __jsx("ins", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 31
    }
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_3__.toDecimal)(product.price[0]))), __jsx("div", {
    className: "ratings-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "ratings-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "ratings",
    style: {
      width: 20 * product.ratings + '%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "tooltiptext tooltip-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_3__.toDecimal)(product.ratings))), isReviewCount ? __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: `/product/default/${product.slug}`,
    className: "rating-reviews",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 29
    }
  }, "( ", product.reviews, " reviews )") : '')));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(SmallProduct));

/***/ }),

/***/ "./components/partials/shop/product-list/product-list-one.jsx":
/*!********************************************************************!*\
  !*** ./components/partials/shop/product-list/product-list-one.jsx ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_partials_shop_toolbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/partials/shop/toolbox */ "./components/partials/shop/toolbox.jsx");
/* harmony import */ var _components_features_product_product_two__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/features/product/product-two */ "./components/features/product/product-two.jsx");
/* harmony import */ var _components_features_product_product_eight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/features/product/product-eight */ "./components/features/product/product-eight.jsx");
/* harmony import */ var _components_features_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/features/pagination */ "./components/features/pagination.jsx");
/* harmony import */ var _server_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/server/apollo */ "./server/apollo.js");
/* harmony import */ var _server_queries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/server/queries */ "./server/queries.js");
var _jsxFileName = "/home/tristan/projects/Upsidian/ramset-ecomm/client/components/partials/shop/product-list/product-list-one.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);










function ProductListOne(props) {
  const {
    itemsPerRow = 3,
    type = "left",
    isToolbox = true
  } = props;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const query = router.query;
  const [getProducts, {
    data,
    loading,
    error
  }] = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__.useLazyQuery)(_server_queries__WEBPACK_IMPORTED_MODULE_8__.GET_PRODUCTS);
  const products = data && data.products.data;
  const gridClasses = {
    3: "cols-2 cols-sm-3",
    4: "cols-2 cols-sm-3 cols-md-4",
    5: "cols-2 cols-sm-3 cols-md-4 cols-xl-5",
    6: "cols-2 cols-sm-3 cols-md-4 cols-xl-6",
    7: "cols-2 cols-sm-3 cols-md-4 cols-lg-5 cols-xl-7",
    8: "cols-2 cols-sm-3 cols-md-4 cols-lg-5 cols-xl-8"
  };
  const perPage = query.per_page ? parseInt(query.per_page) : 12;
  const totalPage = data ? parseInt(data.products.total / perPage) + (data.products.total % perPage ? 1 : 0) : 1;
  const page = query.page ? query.page : 1;
  const gridType = query.type ? query.type : 'grid';
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getProducts({
      variables: {
        search: query.search,
        colors: query.colors ? query.colors.split(',') : [],
        sizes: query.sizes ? query.sizes.split(',') : [],
        brands: query.brands ? query.brands.split(',') : [],
        min_price: parseInt(query.min_price),
        max_price: parseInt(query.max_price),
        category: query.category,
        tag: query.tag,
        sortBy: query.sortby,
        from: perPage * (page - 1),
        to: perPage * page
      }
    });
  }, [query]);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, isToolbox ? __jsx(_components_partials_shop_toolbox__WEBPACK_IMPORTED_MODULE_3__.default, {
    type: type,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 29
    }
  }) : '', loading ? gridType === 'grid' ? __jsx("div", {
    className: `row product-wrapper ${gridClasses[itemsPerRow]}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => __jsx("div", {
    className: "product-loading-overlay",
    key: 'popup-skel-' + item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 37
    }
  }))) : __jsx("div", {
    className: "row product-wrapper skeleton-body cols-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => __jsx("div", {
    className: "skel-pro skel-pro-list mb-4",
    key: 'list-skel-' + item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 37
    }
  }))) : '', gridType === 'grid' ? __jsx("div", {
    className: `row product-wrapper ${gridClasses[itemsPerRow]}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }, products && products.map(item => __jsx("div", {
    className: "product-wrap",
    key: 'shop-' + item.slug,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 29
    }
  }, __jsx(_components_features_product_product_two__WEBPACK_IMPORTED_MODULE_4__.default, {
    product: item,
    adClass: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 33
    }
  })))) : __jsx("div", {
    className: "product-lists product-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, products && products.map(item => __jsx(_components_features_product_product_eight__WEBPACK_IMPORTED_MODULE_5__.default, {
    product: item,
    key: 'shop-list-' + item.slug,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 29
    }
  }))), products && products.length === 0 ? __jsx("p", {
    className: "ml-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  }, "No products were found matching your selection.") : '', data && data.products.total > 0 ? __jsx("div", {
    className: "toolbox toolbox-pagination",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }, data && __jsx("p", {
    className: "show-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 37
    }
  }, "Showing ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 70
    }
  }, perPage * (page - 1) + 1, " - ", Math.min(perPage * page, data.products.total), " of ", data.products.total), "Products"), __jsx(_components_features_pagination__WEBPACK_IMPORTED_MODULE_6__.default, {
    totalPage: totalPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 25
    }
  })) : '');
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_server_apollo__WEBPACK_IMPORTED_MODULE_7__.default)({
  ssr: true
})(ProductListOne));

/***/ }),

/***/ "./components/partials/shop/shop-banner.jsx":
/*!**************************************************!*\
  !*** ./components/partials/shop/shop-banner.jsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ShopBanner; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/features/custom-link */ "./components/features/custom-link.jsx");
var _jsxFileName = "/home/tristan/projects/Upsidian/ramset-ecomm/client/components/partials/shop/shop-banner.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ShopBanner(props) {
  const {
    subTitle = '',
    title = "Riode Shop",
    current = "Riode Shop"
  } = props;
  return __jsx("div", {
    className: "page-header",
    style: {
      backgroundImage: `url( ./images/shop/page-header-back.jpg )`,
      backgroundColor: "#3C63A4"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, subTitle ? __jsx("h3", {
    className: "page-subtitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 28
    }
  }, subTitle) : '', title ? __jsx("h1", {
    className: "page-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 25
    }
  }, title) : '', __jsx("ul", {
    className: "breadcrumb",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "d-icon-home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 37
    }
  }))), __jsx("li", {
    className: "delimiter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, "/"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, current)));
}

/***/ }),

/***/ "./components/partials/shop/sidebar/sidebar-filter-one.jsx":
/*!*****************************************************************!*\
  !*** ./components/partials/shop/sidebar/sidebar-filter-one.jsx ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_input_range__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-input-range */ "react-input-range");
/* harmony import */ var react_input_range__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_input_range__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/features/custom-link */ "./components/features/custom-link.jsx");
/* harmony import */ var _components_features_accordion_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/features/accordion/card */ "./components/features/accordion/card.jsx");
/* harmony import */ var _components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/features/owl-carousel */ "./components/features/owl-carousel.jsx");
/* harmony import */ var _components_features_product_product_sm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/components/features/product/product-sm */ "./components/features/product/product-sm.jsx");
/* harmony import */ var _server_apollo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../server/apollo */ "./server/apollo.js");
/* harmony import */ var _server_queries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../server/queries */ "./server/queries.js");
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-slide-toggle */ "react-slide-toggle");
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_slide_toggle__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_data_shop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/utils/data/shop */ "./utils/data/shop.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/utils */ "./utils/index.js");
var _jsxFileName = "/home/tristan/projects/Upsidian/ramset-ecomm/client/components/partials/shop/sidebar/sidebar-filter-one.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















function SidebarFilterOne(props) {
  const {
    type = "left",
    isFeatured = false
  } = props;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const query = router.query;
  const {
    data,
    loading,
    error
  } = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_server_queries__WEBPACK_IMPORTED_MODULE_9__.GET_SHOP_SIDEBAR_DATA, {
    variables: {
      demo: 1,
      featured: true
    }
  });
  let tmpPrice = {
    max: query.max_price ? parseInt(query.max_price) : 1000,
    min: query.min_price ? parseInt(query.min_price) : 0
  };
  const {
    0: filterPrice,
    1: setPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(tmpPrice);
  const {
    0: isFirst,
    1: setFirst
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  let sidebarData = data && data.shopSidebarData;
  let timerId;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener('resize', hideSidebar);
    return () => {
      window.removeEventListener('resize', hideSidebar);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setPrice({
      max: query.max_price ? parseInt(query.max_price) : 1000,
      min: query.min_price ? parseInt(query.min_price) : 0
    });

    if (isFirst) {
      setFirst(false);
    } else {
      (0,_utils__WEBPACK_IMPORTED_MODULE_12__.scrollTopHandler)();
    }
  }, [query]);

  const filterByPrice = e => {
    e.preventDefault();
    let url = router.pathname.replace('[grid]', query.grid);
    let arr = [`min_price=${filterPrice.min}`, `max_price=${filterPrice.max}`, 'page=1'];

    for (let key in query) {
      if (key !== 'min_price' && key !== 'max_price' && key !== 'page' && key !== 'grid') arr.push(key + '=' + query[key]);
    }

    url = url + '?' + arr.join('&');
    router.push(url);
  };

  const containsAttrInUrl = (type, value) => {
    const currentQueries = query[type] ? query[type].split(',') : [];
    return currentQueries && currentQueries.includes(value);
  };

  const getUrlForAttrs = (type, value) => {
    let currentQueries = query[type] ? query[type].split(',') : [];
    currentQueries = containsAttrInUrl(type, value) ? currentQueries.filter(item => item !== value) : [...currentQueries, value];
    return currentQueries.join(',');
  };

  const onChangePrice = value => {
    setPrice(value);
  };

  const toggleSidebar = e => {
    e.preventDefault();
    document.querySelector('body').classList.remove(`${type === "left" || type === "off-canvas" ? "sidebar-active" : "right-sidebar-active"}`);
    let stickyWraper = e.currentTarget.closest('.sticky-sidebar-wrapper');
    let mainContent = e.currentTarget.closest('.main-content-wrap');
    if (mainContent && type !== "off-canvas" && query.grid !== '4cols') mainContent.querySelector('.row.product-wrapper') && mainContent.querySelector('.row.product-wrapper').classList.toggle('cols-md-4');

    if (mainContent && stickyWraper) {
      stickyWraper.classList.toggle('closed');

      if (stickyWraper.classList.contains('closed')) {
        mainContent.classList.add('overflow-hidden');
        clearTimeout(timerId);
      } else {
        timerId = setTimeout(() => {
          mainContent.classList.remove('overflow-hidden');
        }, 500);
      }
    }
  };

  const showSidebar = e => {
    e.preventDefault();
    document.querySelector('body').classList.add("sidebar-active");
  };

  const hideSidebar = () => {
    document.querySelector('body').classList.remove(`${type === "left" || type === "off-canvas" || type === "boxed" || type === "banner" ? "sidebar-active" : "right-sidebar-active"}`);
  };

  return __jsx("aside", {
    className: `col-lg-3 shop-sidebar skeleton-body ${type === "off-canvas" ? '' : "sidebar-fixed sticky-sidebar-wrapper"} ${type === "off-canvas" || type === "boxed" ? '' : "sidebar-toggle-remain"} ${type === "left" || type === "off-canvas" || type === "boxed" || type === "banner" ? "sidebar" : "right-sidebar"}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "sidebar-overlay",
    onClick: hideSidebar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }), type === "boxed" || type === "banner" ? __jsx("a", {
    href: "#",
    className: "sidebar-toggle",
    onClick: showSidebar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 57
    }
  }, __jsx("i", {
    className: "fas fa-chevron-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 120
    }
  })) : '', __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__.default, {
    className: "sidebar-close",
    href: "#",
    onClick: hideSidebar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "d-icon-times",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 79
    }
  })), __jsx("div", {
    className: "sidebar-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, !loading && sidebarData ? __jsx("div", {
    className: "sticky-sidebar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 25
    }
  }, type === "boxed" || type === "banner" ? '' : __jsx("div", {
    className: "filter-actions mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 37
    }
  }, __jsx("a", {
    href: "#",
    className: "sidebar-toggle-btn toggle-remain btn btn-outline btn-primary btn-icon-right btn-rounded",
    onClick: toggleSidebar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 41
    }
  }, "Filter", type === "left" || type === "off-canvas" ? __jsx("i", {
    className: "d-icon-arrow-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 53
    }
  }) : __jsx("i", {
    className: "d-icon-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 93
    }
  })), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: {
      pathname: router.pathname,
      query: {
        grid: query.grid,
        type: router.query.type ? router.query.type : null
      }
    },
    scroll: false,
    className: "filter-clean",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 41
    }
  }, "Clean All")), __jsx("div", {
    className: "widget widget-collapsible",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 29
    }
  }, __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_5__.default, {
    title: "<h3 class='widget-title'>All Categories<span class='toggle-btn p-0 parse-content'></span></h3>",
    type: "parse",
    expanded: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 33
    }
  }, __jsx("ul", {
    className: "widget-body filter-items search-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 37
    }
  }, data && sidebarData.categories.map((item, index) => item.children ? __jsx("li", {
    key: item.name + ' - ' + index,
    className: `with-ul overflow-hidden ${item.slug === query.category || item.children.findIndex(subCat => subCat.slug === query.category) > -1 ? 'show' : ''} `,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 53
    }
  }, __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_10___default()), {
    collapsed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 57
    }
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: {
      pathname: router.pathname,
      query: {
        category: item.slug,
        grid: query.grid,
        type: router.query.type ? router.query.type : null
      }
    },
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 69
    }
  }, item.name, __jsx("i", {
    className: `fas fa-chevron-down ${toggleState.toLowerCase()}`,
    onClick: e => {
      onToggle();
      e.stopPropagation();
      e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 73
    }
  })), __jsx("div", {
    ref: setCollapsibleElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 69
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 73
    }
  }, __jsx("ul", {
    style: {
      display: "block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 77
    }
  }, item.children.map((subItem, index) => __jsx("li", {
    key: subItem.name + ' - ' + index,
    className: `with-ul ${subItem.slug === query.category ? 'show' : ''} `,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 89
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__.default, {
    scroll: false,
    href: {
      pathname: router.pathname,
      query: {
        category: subItem.slug,
        grid: query.grid,
        type: router.query.type ? router.query.type : null
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 93
    }
  }, subItem.name))))))))) : __jsx("li", {
    className: query.category === item.slug ? 'show' : '',
    key: item.name + ' - ' + index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 53
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: {
      pathname: router.pathname,
      query: {
        category: item.slug,
        grid: query.grid,
        type: router.query.type ? router.query.type : null
      }
    },
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 57
    }
  }, item.name)))))), __jsx("div", {
    className: "widget widget-collapsible",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 29
    }
  }, __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_5__.default, {
    title: "<h3 class='widget-title'>Filter by Price<span class='toggle-btn p-0 parse-content'></span></h3>",
    type: "parse",
    expanded: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "widget-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 37
    }
  }, __jsx("form", {
    action: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "filter-price-slider noUi-target noUi-ltr noUi-horizontal shop-input-range",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 45
    }
  }, __jsx((react_input_range__WEBPACK_IMPORTED_MODULE_3___default()), {
    formatLabel: value => `$${value}`,
    maxValue: 1000,
    minValue: 0,
    step: 50,
    value: filterPrice,
    onChange: onChangePrice,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 49
    }
  })), __jsx("div", {
    className: "filter-actions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "filter-price-text mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 49
    }
  }, "Price: $", filterPrice.min, " - $", filterPrice.max, __jsx("span", {
    className: "filter-price-range",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 53
    }
  })), __jsx("button", {
    className: "btn btn-dark btn-filter btn-rounded",
    onClick: filterByPrice,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 49
    }
  }, "Filter")))))), __jsx("div", {
    className: "widget widget-collapsible",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 29
    }
  }, __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_5__.default, {
    title: "<h3 class='widget-title'>Size<span class='toggle-btn p-0 parse-content'></span></h3>",
    type: "parse",
    expanded: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 33
    }
  }, __jsx("ul", {
    className: "widget-body filter-items",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 37
    }
  }, _utils_data_shop__WEBPACK_IMPORTED_MODULE_11__.default.sizes.map((item, index) => __jsx("li", {
    className: containsAttrInUrl('sizes', item.slug) ? 'active' : '',
    key: item + ' - ' + index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 49
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__.default, {
    scroll: false,
    href: {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        page: 1,
        sizes: getUrlForAttrs('sizes', item.slug),
        type: router.query.type ? router.query.type : null
      })
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 53
    }
  }, item.name)))))), __jsx("div", {
    className: "widget widget-collapsible",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 29
    }
  }, __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_5__.default, {
    title: "<h3 class='widget-title'>Color<span class='toggle-btn p-0 parse-content'></span></h3>",
    type: "parse",
    expanded: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 33
    }
  }, __jsx("ul", {
    className: "widget-body filter-items",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 37
    }
  }, _utils_data_shop__WEBPACK_IMPORTED_MODULE_11__.default.colors.map((item, index) => __jsx("li", {
    className: containsAttrInUrl('colors', item.slug) ? 'active' : '',
    key: item + ' - ' + index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 49
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__.default, {
    scroll: false,
    href: {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        page: 1,
        colors: getUrlForAttrs('colors', item.slug),
        type: router.query.type ? router.query.type : null
      })
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 53
    }
  }, item.name)))))), __jsx("div", {
    className: "widget widget-collapsible",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 29
    }
  }, __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_5__.default, {
    title: "<h3 class='widget-title'>Brand<span class='toggle-btn p-0 parse-content'></span></h3>",
    type: "parse",
    expanded: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 33
    }
  }, __jsx("ul", {
    className: "widget-body filter-items",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 37
    }
  }, _utils_data_shop__WEBPACK_IMPORTED_MODULE_11__.default.brands.map((item, index) => __jsx("li", {
    className: containsAttrInUrl('brands', item.slug) ? 'active' : '',
    key: item + ' - ' + index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 49
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__.default, {
    scroll: false,
    href: {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        page: 1,
        brands: getUrlForAttrs('brands', item.slug),
        type: router.query.type ? router.query.type : null
      })
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 53
    }
  }, item.name)))))), isFeatured ? __jsx("div", {
    className: "widget widget-products widget-collapsible",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 37
    }
  }, __jsx("h4", {
    className: "widget-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 41
    }
  }, "Our Featured"), __jsx("div", {
    className: "widget-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 41
    }
  }, __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_6__.default, {
    adClass: "owl-nav-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "products-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 49
    }
  }, sidebarData.featured.slice(0, 3).map((item, index) => __jsx(_components_features_product_product_sm__WEBPACK_IMPORTED_MODULE_7__.default, {
    product: item,
    key: item.name + ' - ' + index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 61
    }
  }))), __jsx("div", {
    className: "products-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 49
    }
  }, sidebarData.featured.slice(3, 6).map((item, index) => __jsx(_components_features_product_product_sm__WEBPACK_IMPORTED_MODULE_7__.default, {
    product: item,
    key: item.name + ' - ' + index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 61
    }
  })))))) : '') : __jsx("div", {
    className: "widget-2 mt-10 pt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 27
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_server_apollo__WEBPACK_IMPORTED_MODULE_8__.default)({
  ssr: true
})(SidebarFilterOne));

/***/ }),

/***/ "./components/partials/shop/sidebar/sidebar-filter-three.jsx":
/*!*******************************************************************!*\
  !*** ./components/partials/shop/sidebar/sidebar-filter-three.jsx ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/custom-link */ "./components/features/custom-link.jsx");
/* harmony import */ var _utils_data_shop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/utils/data/shop */ "./utils/data/shop.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/utils */ "./utils/index.js");
var _jsxFileName = "/home/tristan/projects/Upsidian/ramset-ecomm/client/components/partials/shop/sidebar/sidebar-filter-three.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function SidebarFilterThree() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    0: isFirst,
    1: setFirst
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const query = router.query;
  const prices = [{
    min: '0',
    max: '50'
  }, {
    min: '50',
    max: '100'
  }, {
    min: '100',
    max: '200'
  }, {
    min: '200',
    max: ''
  }];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener('resize', resizeHandler, false);
    document.querySelector("body").addEventListener("click", onBodyClick);
    return () => {
      window.removeEventListener('resize', resizeHandler);
      document.querySelector("body").removeEventListener("click", onBodyClick);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isFirst) {
      setFirst(false);
    } else {
      (0,_utils__WEBPACK_IMPORTED_MODULE_4__.scrollTopHandler)();
    }
  }, [query]);

  const containsAttrInUrl = (type, value) => {
    const currentQueries = query[type] ? query[type].split(',') : [];

    if (type === 'min_price' || type === 'max_price') {
      return currentQueries && (value === '' && currentQueries.length === 0 || currentQueries.includes(value));
    } else {
      return currentQueries && currentQueries.includes(value);
    }
  };

  const getUrlForAttrs = (type, value) => {
    let currentQueries = query[type] ? query[type].split(',') : [];

    if (type === 'min_price' || type === 'max_price') {
      currentQueries = currentQueries.length > 0 && currentQueries.includes(value) ? [] : [value];
    } else {
      currentQueries = containsAttrInUrl(type, value) ? currentQueries.filter(item => item !== value) : [...currentQueries, value];
    }

    return currentQueries.join(',');
  };

  const selectOptionHandler = function (e) {
    e.preventDefault();
    e.currentTarget.closest('.toolbox-item.select-menu').classList.toggle('opened');
  };

  function onBodyClick(e) {
    e.target.closest('.select-menu.opened') || document.querySelector('.select-menu.opened') && document.querySelector('.select-menu.opened').classList.remove('opened');
  }

  const hideSidebar = () => {
    document.querySelector('body').classList.remove("sidebar-active");
  };

  const resizeHandler = () => {
    document.querySelector('body').classList.remove("sidebar-active");
  };

  const selectFilterHandler = e => {
    setTimeout(() => {
      if (document.querySelector('.select-items').children.length > 1) {
        document.querySelector('.select-items').setAttribute('style', 'visibility: visible; opacity: 1; height: auto; margin-top: 2px; margin-bottom: 1.8rem');
      } else {
        document.querySelector('.select-items').setAttribute('style', '');
      }
    }, 100);
  };

  return __jsx("aside", {
    className: "sidebar shop-sidebar sidebar-fixed",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "sidebar-overlay",
    onClick: hideSidebar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__.default, {
    className: "sidebar-close",
    href: "#",
    onClick: hideSidebar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "d-icon-times",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 79
    }
  })), __jsx("div", {
    className: "sidebar-content toolbox-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "toolbox-item select-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "select-menu-toggle",
    href: "#",
    onClick: selectOptionHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }, "Select Size"), __jsx("ul", {
    className: "filter-items",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  }, _utils_data_shop__WEBPACK_IMPORTED_MODULE_3__.default.sizes.map((item, index) => __jsx("li", {
    className: containsAttrInUrl('sizes', item.slug) ? 'active' : '',
    key: item + ' - ' + index,
    onClick: selectFilterHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 33
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        page: 1,
        sizes: getUrlForAttrs('sizes', item.slug),
        type: router.query.type ? router.query.type : null
      })
    },
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 37
    }
  }, item.name))))), __jsx("div", {
    className: "toolbox-item select-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "select-menu-toggle",
    href: "#",
    onClick: selectOptionHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 21
    }
  }, "Select Color"), __jsx("ul", {
    className: "filter-items",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 21
    }
  }, _utils_data_shop__WEBPACK_IMPORTED_MODULE_3__.default.colors.map((item, index) => __jsx("li", {
    className: containsAttrInUrl('colors', item.slug) ? 'active' : '',
    key: item + ' - ' + index,
    onClick: selectFilterHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 33
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        page: 1,
        colors: getUrlForAttrs('colors', item.slug),
        type: router.query.type ? router.query.type : null
      })
    },
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 37
    }
  }, item.name))))), __jsx("div", {
    className: "toolbox-item select-menu price-with-count",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "select-menu-toggle",
    href: "#",
    onClick: selectOptionHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 21
    }
  }, "Select Price"), __jsx("ul", {
    className: "filter-items filter-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 21
    }
  }, prices.map((price, index) => __jsx("li", {
    className: containsAttrInUrl('min_price', price.min) && containsAttrInUrl('max_price', price.max) ? 'active' : '',
    key: "price-filter-" + index,
    onClick: selectFilterHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 33
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        page: 1,
        min_price: getUrlForAttrs('min_price', price.min),
        max_price: getUrlForAttrs('max_price', price.max),
        type: router.query.type ? router.query.type : null
      })
    },
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 37
    }
  }, price.min === '' && price.max === '' ? 'All' : price.max === '' ? `$${price.min}.00 +` : `$${price.min}.00 - $${price.max}.00`)))))));
}

/* harmony default export */ __webpack_exports__["default"] = (SidebarFilterThree);

/***/ }),

/***/ "./components/partials/shop/toolbox.jsx":
/*!**********************************************!*\
  !*** ./components/partials/shop/toolbox.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ToolBox; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/custom-link */ "./components/features/custom-link.jsx");
/* harmony import */ var _components_partials_shop_sidebar_sidebar_filter_three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/partials/shop/sidebar/sidebar-filter-three */ "./components/partials/shop/sidebar/sidebar-filter-three.jsx");
var _jsxFileName = "/home/tristan/projects/Upsidian/ramset-ecomm/client/components/partials/shop/toolbox.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function ToolBox(props) {
  const {
    type = "left"
  } = props;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const query = router.query;
  const gridType = query.type ? query.type : 'grid';
  const sortBy = query.sortby ? query.sortby : 'default';
  const perPage = query.per_page ? query.per_page : 12;
  let tmp = 0;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener('scroll', stickyToolboxHandler);
    return () => {
      window.removeEventListener('scroll', stickyToolboxHandler);
    };
  }, []);

  const onChangeAttri = (e, attri) => {
    e.preventDefault();
    let url = router.pathname.replace('[grid]', query.grid);
    let arr = [`${attri}=${e.target.value}`, 'page=1'];

    for (let key in query) {
      if (key !== attri && key !== 'page' && key !== 'grid') arr.push(key + '=' + query[key]);
    }

    url = url + '?' + arr.join('&');
    router.push(url);
  };

  const showSidebar = () => {
    if (type === "navigation" && window.innerWidth > 991) {
      document.querySelector('.navigation-toggle-btn').click();
    } else {
      document.querySelector('body').classList.add(`${type === "left" || type === "off-canvas" || type === "navigation" || type === "horizontal" ? "sidebar-active" : "right-sidebar-active"}`);
    }
  };

  const stickyToolboxHandler = e => {
    let top = document.querySelector('.page-content') ? document.querySelector('.page-content').offsetTop + document.querySelector('header').offsetHeight + 100 : 600;
    let stickyToolbox = document.querySelector('.sticky-toolbox');
    let height = 0;

    if (stickyToolbox) {
      height = stickyToolbox.offsetHeight;
    }

    if (window.pageYOffset >= top && window.innerWidth < 768 && e.currentTarget.scrollY < tmp) {
      if (stickyToolbox) {
        stickyToolbox.classList.add('fixed');

        if (!document.querySelector('.sticky-toolbox-wrapper')) {
          let newNode = document.createElement("div");
          newNode.className = "sticky-toolbox-wrapper";
          stickyToolbox.parentNode.insertBefore(newNode, stickyToolbox);
          document.querySelector('.sticky-toolbox-wrapper').insertAdjacentElement('beforeend', stickyToolbox);
          document.querySelector('.sticky-toolbox-wrapper').setAttribute("style", "height: " + height + "px");
        }

        if (!document.querySelector('.sticky-toolbox-wrapper').getAttribute("style")) {
          document.querySelector('.sticky-toolbox-wrapper').setAttribute("style", "height: " + height + "px");
        }
      }
    } else {
      if (stickyToolbox) {
        stickyToolbox.classList.remove('fixed');
      }

      if (document.querySelector('.sticky-toolbox-wrapper')) {
        document.querySelector('.sticky-toolbox-wrapper').removeAttribute("style");
      }
    }

    if (window.outerWidth > 767 && document.querySelector('.sticky-toolbox-wrapper')) {
      document.querySelector('.sticky-toolbox-wrapper').style.height = 'auto';
    }

    tmp = e.currentTarget.scrollY;
  };

  return __jsx("nav", {
    className: `toolbox sticky-toolbox sticky-content fix-top ${type === "horizontal" ? 'toolbox-horizontal' : ''}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, type === "horizontal" ? __jsx(_components_partials_shop_sidebar_sidebar_filter_three__WEBPACK_IMPORTED_MODULE_3__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 41
    }
  }) : '', __jsx("div", {
    className: "toolbox-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, type === "left" || type === "off-canvas" || type === "navigation" || type === "horizontal" ? __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    className: `toolbox-item left-sidebar-toggle btn btn-outline btn-primary btn-rounded ${type === "navigation" ? "btn-icon-left btn-sm" : "btn-sm btn-icon-right"} ${type === "off-canvas" || type === "navigation" ? '' : "d-lg-none"}`,
    onClick: showSidebar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 25
    }
  }, type === "navigation" ? __jsx("i", {
    className: "d-icon-filter-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 57
    }
  }) : '', "Filter", type === "navigation" ? '' : __jsx("i", {
    className: "d-icon-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 62
    }
  })) : '', __jsx("div", {
    className: `toolbox-item toolbox-sort ${type === "boxed" || type === "banner" ? "select-box text-dark" : "select-menu"}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, type === "boxed" || type === "banner" ? __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 65
    }
  }, "Sort By :") : '', __jsx("select", {
    name: "orderby",
    className: "form-control",
    defaultValue: query.sortby ? query.sortby : 'default',
    onChange: e => onChangeAttri(e, 'sortby'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 21
    }
  }, __jsx("option", {
    value: "default",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 25
    }
  }, "Default"), __jsx("option", {
    value: "popularity",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 25
    }
  }, "Most Popular"), __jsx("option", {
    value: "rating",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 25
    }
  }, "Average rating"), __jsx("option", {
    value: "date",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 25
    }
  }, "Latest"), __jsx("option", {
    value: "price-low",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 25
    }
  }, "Sort forward price low"), __jsx("option", {
    value: "price-high",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 25
    }
  }, "Sort forward price high"), __jsx("option", {
    value: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 25
    }
  }, "Clear custom sort")))), __jsx("div", {
    className: "toolbox-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "toolbox-item toolbox-show select-box text-dark",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 21
    }
  }, "Show :"), __jsx("select", {
    name: "count",
    className: "form-control",
    defaultValue: perPage,
    onChange: e => onChangeAttri(e, 'per_page'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 21
    }
  }, __jsx("option", {
    value: "12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 25
    }
  }, "12"), __jsx("option", {
    value: "24",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 25
    }
  }, "24"), __jsx("option", {
    value: "36",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 25
    }
  }, "36"))), __jsx("div", {
    className: `toolbox-item toolbox-layout ${type === "right" ? "mr-lg-0" : ''}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        type: "list"
      })
    },
    scroll: false,
    className: `d-icon-mode-list btn-layout ${gridType === 'list' ? 'active' : ''}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 21
    }
  }), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        type: "grid"
      })
    },
    scroll: false,
    className: `d-icon-mode-grid btn-layout ${gridType !== 'list' ? 'active' : ''}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 21
    }
  })), type === "right" ? __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    className: "toolbox-item right-sidebar-toggle btn btn-sm btn-outline btn-primary btn-rounded btn-icon-right d-lg-none",
    onClick: showSidebar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 25
    }
  }, "Filter", __jsx("i", {
    className: "d-icon-arrow-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 189
    }
  })) : ''));
}

/***/ }),

/***/ "./pages/shop/index.jsx":
/*!******************************!*\
  !*** ./pages/shop/index.jsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_partials_shop_shop_banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/partials/shop/shop-banner */ "./components/partials/shop/shop-banner.jsx");
/* harmony import */ var _components_partials_shop_sidebar_sidebar_filter_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/partials/shop/sidebar/sidebar-filter-one */ "./components/partials/shop/sidebar/sidebar-filter-one.jsx");
/* harmony import */ var _components_partials_shop_product_list_product_list_one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/partials/shop/product-list/product-list-one */ "./components/partials/shop/product-list/product-list-one.jsx");
var _jsxFileName = "/home/tristan/projects/Upsidian/ramset-ecomm/client/pages/shop/index.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);






function Shop() {
  return __jsx("main", {
    className: "main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, "Riode React eCommerce Template - Shop Page")), __jsx("h1", {
    className: "d-none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, "Riode React eCommerce Template - Shop Page"), __jsx(_components_partials_shop_shop_banner__WEBPACK_IMPORTED_MODULE_2__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "page-content mb-10 pb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row main-content-wrap gutter-lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, __jsx(_components_partials_shop_sidebar_sidebar_filter_one__WEBPACK_IMPORTED_MODULE_3__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "col-lg-9 main-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, __jsx(_components_partials_shop_product_list_product_list_one__WEBPACK_IMPORTED_MODULE_4__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 29
    }
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Shop));

/***/ }),

/***/ "./utils/data/shop.js":
/*!****************************!*\
  !*** ./utils/data/shop.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  sizes: [{
    name: "Extra Large",
    slug: 'xl',
    size: "XL"
  }, {
    name: "Large",
    slug: 'l',
    size: "L"
  }, {
    name: "Medium",
    slug: 'm',
    size: "M"
  }, {
    name: "Small",
    slug: 's',
    size: "S"
  }],
  colors: [{
    name: "Black",
    slug: 'black',
    color: "#333"
  }, {
    name: "Blue",
    slug: 'blue',
    color: "#1e73be"
  }, {
    name: "Brown",
    slug: 'brown',
    color: "#9e6924"
  }, {
    name: "Green",
    slug: 'green',
    color: "#56962e"
  }],
  brands: [{
    name: "Cinderella",
    slug: "cinderella"
  }, {
    name: "Comedy",
    slug: "comedy"
  }, {
    name: "RightCheck",
    slug: "rightcheck"
  }, {
    name: "SkillStar",
    slug: "skillstar"
  }, {
    name: "SLS",
    slug: "sls"
  }],
  tag: [{
    name: "Bag",
    slug: "bag"
  }, {
    name: "Classic",
    slug: "classic"
  }, {
    name: "Converse",
    slug: "converse"
  }, {
    name: "Fit",
    slug: "fit"
  }, {
    name: "Green",
    slug: "green"
  }, {
    name: "Jack and Jones",
    slug: "jack-and-jones"
  }, {
    name: "Jeans",
    slug: "jeans"
  }, {
    name: "Jumper",
    slug: "jumper"
  }, {
    name: "Leather",
    slug: "leather"
  }, {
    name: "Diesel",
    slug: "diesel"
  }, {
    name: "Man",
    slug: "man"
  }]
});

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

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-helmet");;

/***/ }),

/***/ "react-input-range":
/*!************************************!*\
  !*** external "react-input-range" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-input-range");;

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

/***/ "react-slide-toggle":
/*!*************************************!*\
  !*** external "react-slide-toggle" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-slide-toggle");;

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_features_owl-carousel_jsx-server_apollo_js-server_queries_js-store_cart_js-store_m-6f6f31","components_features_product_product-two_jsx","components_features_accordion_card_jsx"], function() { return __webpack_exec__("./pages/shop/index.jsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYW1zZXQtZWNvbW0vLi9jb21wb25lbnRzL2ZlYXR1cmVzL3BhZ2luYXRpb24uanN4Iiwid2VicGFjazovL3JhbXNldC1lY29tbS8uL2NvbXBvbmVudHMvZmVhdHVyZXMvcHJvZHVjdC9wcm9kdWN0LWVpZ2h0LmpzeCIsIndlYnBhY2s6Ly9yYW1zZXQtZWNvbW0vLi9jb21wb25lbnRzL2ZlYXR1cmVzL3Byb2R1Y3QvcHJvZHVjdC1zbS5qc3giLCJ3ZWJwYWNrOi8vcmFtc2V0LWVjb21tLy4vY29tcG9uZW50cy9wYXJ0aWFscy9zaG9wL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3Qtb25lLmpzeCIsIndlYnBhY2s6Ly9yYW1zZXQtZWNvbW0vLi9jb21wb25lbnRzL3BhcnRpYWxzL3Nob3Avc2hvcC1iYW5uZXIuanN4Iiwid2VicGFjazovL3JhbXNldC1lY29tbS8uL2NvbXBvbmVudHMvcGFydGlhbHMvc2hvcC9zaWRlYmFyL3NpZGViYXItZmlsdGVyLW9uZS5qc3giLCJ3ZWJwYWNrOi8vcmFtc2V0LWVjb21tLy4vY29tcG9uZW50cy9wYXJ0aWFscy9zaG9wL3NpZGViYXIvc2lkZWJhci1maWx0ZXItdGhyZWUuanN4Iiwid2VicGFjazovL3JhbXNldC1lY29tbS8uL2NvbXBvbmVudHMvcGFydGlhbHMvc2hvcC90b29sYm94LmpzeCIsIndlYnBhY2s6Ly9yYW1zZXQtZWNvbW0vLi9wYWdlcy9zaG9wL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9yYW1zZXQtZWNvbW0vLi91dGlscy9kYXRhL3Nob3AuanMiLCJ3ZWJwYWNrOi8vcmFtc2V0LWVjb21tL2V4dGVybmFsIFwiQGFwb2xsby9yZWFjdC1ob29rc1wiIiwid2VicGFjazovL3JhbXNldC1lY29tbS9leHRlcm5hbCBcImFwb2xsby1ib29zdFwiIiwid2VicGFjazovL3JhbXNldC1lY29tbS9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vcmFtc2V0LWVjb21tL2V4dGVybmFsIFwibmV4dC1hcG9sbG9cIiIsIndlYnBhY2s6Ly9yYW1zZXQtZWNvbW0vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vcmFtc2V0LWVjb21tL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3JhbXNldC1lY29tbS9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vcmFtc2V0LWVjb21tL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9yYW1zZXQtZWNvbW0vZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXRcIiIsIndlYnBhY2s6Ly9yYW1zZXQtZWNvbW0vZXh0ZXJuYWwgXCJyZWFjdC1pbnB1dC1yYW5nZVwiIiwid2VicGFjazovL3JhbXNldC1lY29tbS9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vcmFtc2V0LWVjb21tL2V4dGVybmFsIFwicmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudFwiIiwid2VicGFjazovL3JhbXNldC1lY29tbS9leHRlcm5hbCBcInJlYWN0LW93bC1jYXJvdXNlbDJcIiIsIndlYnBhY2s6Ly9yYW1zZXQtZWNvbW0vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL3JhbXNldC1lY29tbS9leHRlcm5hbCBcInJlYWN0LXNsaWRlLXRvZ2dsZVwiIiwid2VicGFjazovL3JhbXNldC1lY29tbS9leHRlcm5hbCBcInJlYWN0LXRvYXN0aWZ5XCIiLCJ3ZWJwYWNrOi8vcmFtc2V0LWVjb21tL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdFwiIiwid2VicGFjazovL3JhbXNldC1lY29tbS9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIiIsIndlYnBhY2s6Ly9yYW1zZXQtZWNvbW0vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJQYWdpbmF0aW9uIiwicHJvcHMiLCJtYXhTaG93Q291bnRzIiwidG90YWxQYWdlIiwiZGlzdGFuY2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsInBhZ2UiLCJwYXJzZUludCIsImluZGV4TGlzdCIsIm1pbiIsIk1hdGgiLCJtYXgiLCJpIiwicGF0aG5hbWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJsZW5ndGgiLCJSZWFjdCIsIlByb2R1Y3RFaWdodCIsInByb2R1Y3QiLCJhZENsYXNzIiwidG9nZ2xlV2lzaGxpc3QiLCJ3aXNobGlzdCIsImFkZFRvQ2FydCIsIm9wZW5RdWlja3ZpZXciLCJpc1dpc2hsaXN0ZWQiLCJmaW5kSW5kZXgiLCJzbHVnIiwic2hvd1F1aWNrdmlld0hhbmRsZXIiLCJ3aXNobGlzdEhhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50VGFyZ2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0VGltZW91dCIsInJlbW92ZSIsImFkZFRvQ2FydEhhbmRsZXIiLCJxdHkiLCJwcmljZSIsInZhcmlhbnRzIiwicHJvY2VzcyIsInBpY3R1cmVzIiwidXJsIiwiaXNfbmV3IiwiaXNfdG9wIiwiZGlzY291bnQiLCJjYXRlZ29yaWVzIiwibmFtZSIsImNhdGVnb3J5IiwidG9EZWNpbWFsIiwid2lkdGgiLCJyYXRpbmdzIiwicmV2aWV3cyIsInNob3J0X2Rlc2NyaXB0aW9uIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJkYXRhIiwiY29ubmVjdCIsIndpc2hsaXN0QWN0aW9ucyIsImNhcnRBY3Rpb25zIiwibW9kYWxBY3Rpb25zIiwiU21hbGxQcm9kdWN0IiwiaXNSZXZpZXdDb3VudCIsIlByb2R1Y3RMaXN0T25lIiwiaXRlbXNQZXJSb3ciLCJ0eXBlIiwiaXNUb29sYm94IiwiZ2V0UHJvZHVjdHMiLCJsb2FkaW5nIiwiZXJyb3IiLCJ1c2VMYXp5UXVlcnkiLCJHRVRfUFJPRFVDVFMiLCJwcm9kdWN0cyIsImdyaWRDbGFzc2VzIiwicGVyUGFnZSIsInBlcl9wYWdlIiwidG90YWwiLCJncmlkVHlwZSIsInVzZUVmZmVjdCIsInZhcmlhYmxlcyIsInNlYXJjaCIsImNvbG9ycyIsInNwbGl0Iiwic2l6ZXMiLCJicmFuZHMiLCJtaW5fcHJpY2UiLCJtYXhfcHJpY2UiLCJ0YWciLCJzb3J0QnkiLCJzb3J0YnkiLCJmcm9tIiwidG8iLCJ3aXRoQXBvbGxvIiwic3NyIiwiU2hvcEJhbm5lciIsInN1YlRpdGxlIiwidGl0bGUiLCJjdXJyZW50IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZENvbG9yIiwiU2lkZWJhckZpbHRlck9uZSIsImlzRmVhdHVyZWQiLCJ1c2VRdWVyeSIsIkdFVF9TSE9QX1NJREVCQVJfREFUQSIsImRlbW8iLCJmZWF0dXJlZCIsInRtcFByaWNlIiwiZmlsdGVyUHJpY2UiLCJzZXRQcmljZSIsInVzZVN0YXRlIiwiaXNGaXJzdCIsInNldEZpcnN0Iiwic2lkZWJhckRhdGEiLCJzaG9wU2lkZWJhckRhdGEiLCJ0aW1lcklkIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhpZGVTaWRlYmFyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNjcm9sbFRvcEhhbmRsZXIiLCJmaWx0ZXJCeVByaWNlIiwicmVwbGFjZSIsImdyaWQiLCJhcnIiLCJrZXkiLCJwdXNoIiwiam9pbiIsImNvbnRhaW5zQXR0ckluVXJsIiwidmFsdWUiLCJjdXJyZW50UXVlcmllcyIsImluY2x1ZGVzIiwiZ2V0VXJsRm9yQXR0cnMiLCJmaWx0ZXIiLCJvbkNoYW5nZVByaWNlIiwidG9nZ2xlU2lkZWJhciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0aWNreVdyYXBlciIsImNsb3Nlc3QiLCJtYWluQ29udGVudCIsInRvZ2dsZSIsImNvbnRhaW5zIiwiY2xlYXJUaW1lb3V0Iiwic2hvd1NpZGViYXIiLCJjaGlsZHJlbiIsInN1YkNhdCIsIm9uVG9nZ2xlIiwic2V0Q29sbGFwc2libGVFbGVtZW50IiwidG9nZ2xlU3RhdGUiLCJ0b0xvd2VyQ2FzZSIsInN0b3BQcm9wYWdhdGlvbiIsImRpc3BsYXkiLCJzdWJJdGVtIiwiZmlsdGVyRGF0YSIsInNsaWNlIiwiU2lkZWJhckZpbHRlclRocmVlIiwicHJpY2VzIiwicmVzaXplSGFuZGxlciIsIm9uQm9keUNsaWNrIiwic2VsZWN0T3B0aW9uSGFuZGxlciIsInRhcmdldCIsInNlbGVjdEZpbHRlckhhbmRsZXIiLCJzZXRBdHRyaWJ1dGUiLCJUb29sQm94IiwidG1wIiwic3RpY2t5VG9vbGJveEhhbmRsZXIiLCJvbkNoYW5nZUF0dHJpIiwiYXR0cmkiLCJpbm5lcldpZHRoIiwiY2xpY2siLCJ0b3AiLCJvZmZzZXRUb3AiLCJvZmZzZXRIZWlnaHQiLCJzdGlja3lUb29sYm94IiwiaGVpZ2h0IiwicGFnZVlPZmZzZXQiLCJzY3JvbGxZIiwibmV3Tm9kZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwib3V0ZXJXaWR0aCIsInN0eWxlIiwiU2hvcCIsInNpemUiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUN2QixRQUFNO0FBQUVDLGlCQUFhLEdBQUcsQ0FBbEI7QUFBcUJDLGFBQVMsR0FBRyxDQUFqQztBQUFvQ0MsWUFBUSxHQUFHO0FBQS9DLE1BQXFESCxLQUEzRDtBQUVBLFFBQU1JLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxRQUFNQyxLQUFLLEdBQUdGLE1BQU0sQ0FBQ0UsS0FBckI7QUFDQSxRQUFNQyxJQUFJLEdBQUdELEtBQUssQ0FBQ0MsSUFBTixHQUFhQyxRQUFRLENBQUNGLEtBQUssQ0FBQ0MsSUFBUCxDQUFyQixHQUFvQyxDQUFqRDtBQUNBLE1BQUlFLFNB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QSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxnRCIsImZpbGUiOiJwYWdlcy9zaG9wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9jdXN0b20tbGluayc7XHJcblxyXG5mdW5jdGlvbiBQYWdpbmF0aW9uKHByb3BzKSB7XHJcbiAgICBjb25zdCB7IG1heFNob3dDb3VudHMgPSA3LCB0b3RhbFBhZ2UgPSAxLCBkaXN0YW5jZSA9IDIgfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgcXVlcnkgPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zdCBwYWdlID0gcXVlcnkucGFnZSA/IHBhcnNlSW50KHF1ZXJ5LnBhZ2UpIDogMTtcclxuICAgIGxldCBpbmRleExpc3QgPSBbXTtcclxuICAgIGxldCBtaW4gPSBNYXRoLm1heChwYWdlIC0gZGlzdGFuY2UsIDIpO1xyXG4gICAgbGV0IG1heCA9IE1hdGgubWluKHBhZ2UgKyBkaXN0YW5jZSwgdG90YWxQYWdlIC0gMSlcclxuXHJcbiAgICBmb3IgKGxldCBpID0gbWluOyBpIDw9IG1heDsgaSsrKSB7XHJcbiAgICAgICAgaW5kZXhMaXN0W2kgLSBtaW4gKyAxXSA9IGk7XHJcbiAgICB9XHJcbiAgICBpbmRleExpc3RbMF0gPSAxO1xyXG4gICAgaW5kZXhMaXN0W21heCAtIG1pbiArIDJdID0gdG90YWxQYWdlO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3RvdGFsUGFnZSA+IDEgJiZcclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YHBhZ2UtaXRlbSAke3BhZ2UgPCAyID8gJ2Rpc2FibGVkJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgY2xhc3NOYW1lPVwicGFnZS1saW5rIHBhZ2UtbGluay1wcmV2XCIgaHJlZj17cGFnZSA+IDEgPyB7cGF0aG5hbWU6IHJvdXRlci5wYXRobmFtZSwgcXVlcnk6IHsgLi4ucXVlcnksIHBhZ2U6IHBhZ2UgLSAxIH0gfSA6ICcjJ30gc2Nyb2xsPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJkLWljb24tYXJyb3ctbGVmdFwiPjwvaT5QcmV2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleExpc3QubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGluZGV4ID09PSAxICYmIGl0ZW0gPiAyKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17YHBhZ2UtJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGFnZS1pdGVtIGRvdHNcIj4uLi48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2BwYWdlLWl0ZW0gJHtwYWdlID09PSBpdGVtID8gJ2FjdGl2ZScgOiAnJ31gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgY2xhc3NOYW1lPVwicGFnZS1saW5rXCIgaHJlZj17cGFnZSA9PT0gaXRlbSA/ICcjJyA6IHtwYXRobmFtZTogcm91dGVyLnBhdGhuYW1lLCBxdWVyeTogeyAuLi5xdWVyeSwgcGFnZTogaXRlbSB9IH19IHNjcm9sbD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfXtwYWdlID09PSBpdGVtICYmIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj4oY3VycmVudCk8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGluZGV4ID09PSBpbmRleExpc3QubGVuZ3RoIC0gMiAmJiBpdGVtICsgMSA8IHRvdGFsUGFnZSkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtgcGFnZS0ke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YHBhZ2UtaXRlbSAke3BhZ2UgPT09IGl0ZW0gPyAnYWN0aXZlJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIiBocmVmPXtwYWdlID09PSBpdGVtID8gJyMnIDoge3BhdGhuYW1lOiByb3V0ZXIucGF0aG5hbWUsIHF1ZXJ5OiB7IC4uLnF1ZXJ5LCBwYWdlOiBpdGVtIH0gfX0gc2Nyb2xsPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfXtwYWdlID09PSBpdGVtICYmIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj4oY3VycmVudCk8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGFnZS1pdGVtIGRvdHNcIj4uLi48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YHBhZ2UtaXRlbSAke3BhZ2UgPT09IGl0ZW0gPyAnYWN0aXZlJyA6ICcnfWB9IGtleT17YHBhZ2UtJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIiBocmVmPXtwYWdlID09PSBpdGVtID8gJyMnIDoge3BhdGhuYW1lOiByb3V0ZXIucGF0aG5hbWUsIHF1ZXJ5OiB7IC4uLnF1ZXJ5LCBwYWdlOiBpdGVtIH0gfX0gc2Nyb2xsPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW19e3BhZ2UgPT09IGl0ZW0gJiYgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPihjdXJyZW50KTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2BwYWdlLWl0ZW0gJHtwYWdlID4gdG90YWxQYWdlIC0gMSA/ICdkaXNhYmxlZCcgOiAnJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGNsYXNzTmFtZT1cInBhZ2UtbGluayBwYWdlLWxpbmstbmV4dFwiIGhyZWY9e3BhZ2UgPCB0b3RhbFBhZ2UgPyB7cGF0aG5hbWU6IHJvdXRlci5wYXRobmFtZSwgcXVlcnk6IHsgLi4ucXVlcnksIHBhZ2U6IHBhZ2UgKyAxIH0gfSA6ICcjJ30gc2Nyb2xsPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXh0PGkgY2xhc3NOYW1lPVwiZC1pY29uLWFycm93LXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oUGFnaW5hdGlvbik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGF6eUxvYWRJbWFnZSB9IGZyb20gJ3JlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9jdXN0b20tbGluayc7XHJcblxyXG5pbXBvcnQgeyBjYXJ0QWN0aW9ucyB9IGZyb20gJ34vc3RvcmUvY2FydCc7XHJcbmltcG9ydCB7IG1vZGFsQWN0aW9ucyB9IGZyb20gJ34vc3RvcmUvbW9kYWwnO1xyXG5pbXBvcnQgeyB3aXNobGlzdEFjdGlvbnMgfSBmcm9tICd+L3N0b3JlL3dpc2hsaXN0JztcclxuXHJcbmltcG9ydCB7IHRvRGVjaW1hbCB9IGZyb20gJ34vdXRpbHMnO1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdEVpZ2h0KCBwcm9wcyApIHtcclxuICAgIGNvbnN0IHsgcHJvZHVjdCwgYWRDbGFzcywgdG9nZ2xlV2lzaGxpc3QsIHdpc2hsaXN0LCBhZGRUb0NhcnQsIG9wZW5RdWlja3ZpZXcgfSA9IHByb3BzO1xyXG5cclxuICAgIC8vIGRlY2lkZSBpZiB0aGUgcHJvZHVjdCBpcyB3aXNobGlzdGVkXHJcbiAgICBsZXQgaXNXaXNobGlzdGVkO1xyXG4gICAgaXNXaXNobGlzdGVkID0gd2lzaGxpc3QuZmluZEluZGV4KCBpdGVtID0+IGl0ZW0uc2x1ZyA9PT0gcHJvZHVjdC5zbHVnICkgPiAtMSA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBzaG93UXVpY2t2aWV3SGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBvcGVuUXVpY2t2aWV3KCBwcm9kdWN0LnNsdWcgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB3aXNobGlzdEhhbmRsZXIgPSAoIGUgKSA9PiB7XHJcbiAgICAgICAgaWYgKCB0b2dnbGVXaXNobGlzdCApIHtcclxuICAgICAgICAgICAgdG9nZ2xlV2lzaGxpc3QoIHByb2R1Y3QgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgY3VycmVudFRhcmdldCA9IGUuY3VycmVudFRhcmdldDtcclxuICAgICAgICBjdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoICdsb2FkLW1vcmUtb3ZlcmxheScsICdsb2FkaW5nJyApO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSggJ2xvYWQtbW9yZS1vdmVybGF5JywgJ2xvYWRpbmcnICk7XHJcbiAgICAgICAgfSwgMTAwMCApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZFRvQ2FydEhhbmRsZXIgPSAoIGUgKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGFkZFRvQ2FydCggeyAuLi5wcm9kdWN0LCBxdHk6IDEsIHByaWNlOiBwcm9kdWN0LnByaWNlWyAwIF0gfSApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBgcHJvZHVjdCBwcm9kdWN0LWxpc3QgJHsgYWRDbGFzcyB9ICR7IHByb2R1Y3QudmFyaWFudHMubGVuZ3RoID4gMCA/ICdwcm9kdWN0LXZhcmlhYmxlJyA6ICcnIH1gIH0+XHJcbiAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwicHJvZHVjdC1tZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyBgL3Byb2R1Y3QvZGVmYXVsdC8keyBwcm9kdWN0LnNsdWcgfWAgfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgcHJvZHVjdC5waWN0dXJlc1sgMCBdLnVybCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZD17IDUwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdD1cIm9wYWNpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjMzOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnBpY3R1cmVzLmxlbmd0aCA+PSAyID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgcHJvZHVjdC5waWN0dXJlc1sgMSBdLnVybCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkPXsgNTAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzM4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZmZlY3Q9XCJvcGFjaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyQ2xhc3NOYW1lPVwicHJvZHVjdC1pbWFnZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9BTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtbGFiZWwtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7IHByb2R1Y3QuaXNfbmV3ID8gPGxhYmVsIGNsYXNzTmFtZT1cInByb2R1Y3QtbGFiZWwgbGFiZWwtbmV3XCI+TmV3PC9sYWJlbD4gOiAnJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyBwcm9kdWN0LmlzX3RvcCA/IDxsYWJlbCBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLXRvcFwiPlRvcDwvbGFiZWw+IDogJycgfVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5kaXNjb3VudCA+IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPT09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLXNhbGVcIj57IHByb2R1Y3QuZGlzY291bnQgfSUgT0ZGPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxsYWJlbCBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLXNhbGVcIj5TYWxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9maWd1cmU+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5jYXRlZ29yaWVzID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuY2F0ZWdvcmllcy5tYXAoICggaXRlbSwgaW5kZXggKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17IGl0ZW0ubmFtZSArICctJyArIGluZGV4IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXsgeyBwYXRobmFtZTogJy9zaG9wJywgcXVlcnk6IHsgY2F0ZWdvcnk6IGl0ZW0uc2x1ZyB9IH0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaXRlbS5uYW1lIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaW5kZXggPCBwcm9kdWN0LmNhdGVnb3JpZXMubGVuZ3RoIC0gMSA/ICcsICcgOiBcIlwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSApIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwcm9kdWN0LW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IGAvcHJvZHVjdC9kZWZhdWx0LyR7IHByb2R1Y3Quc2x1ZyB9YCB9PnsgcHJvZHVjdC5uYW1lIH08L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QucHJpY2VbIDAgXSAhPT0gcHJvZHVjdC5wcmljZVsgMSBdID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudmFyaWFudHMubGVuZ3RoID09PSAwIHx8ICggcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPiAwICYmICFwcm9kdWN0LnZhcmlhbnRzWyAwIF0ucHJpY2UgKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucyBjbGFzc05hbWU9XCJuZXctcHJpY2VcIj4keyB0b0RlY2ltYWwoIHByb2R1Y3QucHJpY2VbIDAgXSApIH08L2lucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRlbCBjbGFzc05hbWU9XCJvbGQtcHJpY2VcIj4keyB0b0RlY2ltYWwoIHByb2R1Y3QucHJpY2VbIDEgXSApIH08L2RlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCBkZWwgY2xhc3NOYW1lPVwibmV3LXByaWNlXCI+JHsgdG9EZWNpbWFsKCBwcm9kdWN0LnByaWNlWyAwIF0gKSB9IOKAkyAkeyB0b0RlY2ltYWwoIHByb2R1Y3QucHJpY2VbIDEgXSApIH08L2RlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGlucyBjbGFzc05hbWU9XCJuZXctcHJpY2VcIj4keyB0b0RlY2ltYWwoIHByb2R1Y3QucHJpY2VbIDAgXSApIH08L2lucz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ3MtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdzLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmF0aW5nc1wiIHN0eWxlPXsgeyB3aWR0aDogMjAgKiBwcm9kdWN0LnJhdGluZ3MgKyAnJScgfSB9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcHRleHQgdG9vbHRpcC10b3BcIj57IHRvRGVjaW1hbCggcHJvZHVjdC5yYXRpbmdzICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyBgL3Byb2R1Y3QvZGVmYXVsdC8keyBwcm9kdWN0LnNsdWcgfWAgfSBjbGFzc05hbWU9XCJyYXRpbmctcmV2aWV3c1wiPiggeyBwcm9kdWN0LnJldmlld3MgfSByZXZpZXdzICk8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZHVjdC1zaG9ydC1kZXNjXCI+eyBwcm9kdWN0LnNob3J0X2Rlc2NyaXB0aW9uIH08L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWFjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXsgYC9wcm9kdWN0L2RlZmF1bHQvJHsgcHJvZHVjdC5zbHVnIH1gIH0gY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QgYnRuLWNhcnRcIiB0aXRsZT1cIkdvIHRvIHByb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TZWxlY3QgT3B0aW9uczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QgYnRuLWNhcnRcIiB0aXRsZT1cIkFkZCB0byBjYXJ0XCIgb25DbGljaz17IGFkZFRvQ2FydEhhbmRsZXIgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJkLWljb24tYmFnXCI+PC9pPjxzcGFuPkFkZCB0byBjYXJ0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0LWljb24gYnRuLXdpc2hsaXN0XCIgdGl0bGU9eyBpc1dpc2hsaXN0ZWQgPyAnUmVtb3ZlIGZyb20gd2lzaGxpc3QnIDogJ0FkZCB0byB3aXNobGlzdCcgfSBvbkNsaWNrPXsgd2lzaGxpc3RIYW5kbGVyIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17IGlzV2lzaGxpc3RlZCA/IFwiZC1pY29uLWhlYXJ0LWZ1bGxcIiA6IFwiZC1pY29uLWhlYXJ0XCIgfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4tcHJvZHVjdC1pY29uIGJ0bi1xdWlja3ZpZXdcIiB0aXRsZT1cIlF1aWNrIFZpZXdcIiBvbkNsaWNrPXsgc2hvd1F1aWNrdmlld0hhbmRsZXIgfT48aSBjbGFzc05hbWU9XCJkLWljb24tc2VhcmNoXCI+PC9pPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXYgPlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoIHN0YXRlICkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB3aXNobGlzdDogc3RhdGUud2lzaGxpc3QuZGF0YSA/IHN0YXRlLndpc2hsaXN0LmRhdGEgOiBbXVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCBtYXBTdGF0ZVRvUHJvcHMsIHsgdG9nZ2xlV2lzaGxpc3Q6IHdpc2hsaXN0QWN0aW9ucy50b2dnbGVXaXNobGlzdCwgYWRkVG9DYXJ0OiBjYXJ0QWN0aW9ucy5hZGRUb0NhcnQsIC4uLm1vZGFsQWN0aW9ucyB9ICkoIFByb2R1Y3RFaWdodCApOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExhenlMb2FkSW1hZ2UgfSBmcm9tICdyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50JztcclxuXHJcbmltcG9ydCBBTGluayBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvY3VzdG9tLWxpbmsnO1xyXG5cclxuaW1wb3J0IHsgdG9EZWNpbWFsIH0gZnJvbSAnfi91dGlscyc7XHJcblxyXG5mdW5jdGlvbiBTbWFsbFByb2R1Y3QoIHByb3BzICkge1xyXG4gICAgY29uc3QgeyBwcm9kdWN0LCBhZENsYXNzLCBpc1Jldmlld0NvdW50ID0gdHJ1ZSB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGBwcm9kdWN0IHByb2R1Y3QtbGlzdC1zbSAkeyBhZENsYXNzIH1gIH0+XHJcbiAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwicHJvZHVjdC1tZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyBgL3Byb2R1Y3QvZGVmYXVsdC8keyBwcm9kdWN0LnNsdWcgfWAgfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgcHJvZHVjdC5waWN0dXJlc1sgMCBdLnVybCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZD17IDUwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdD1cIm9wYWNpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjMzOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnBpY3R1cmVzLmxlbmd0aCA+PSAyID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgcHJvZHVjdC5waWN0dXJlc1sgMSBdLnVybCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkPXsgNTAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzM4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZmZlY3Q9XCJvcGFjaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyQ2xhc3NOYW1lPVwicHJvZHVjdC1pbWFnZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgPC9maWd1cmU+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2R1Y3QtbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXsgYC9wcm9kdWN0L2RlZmF1bHQvJHsgcHJvZHVjdC5zbHVnIH1gIH0+eyBwcm9kdWN0Lm5hbWUgfTwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5wcmljZVsgMCBdICE9PSBwcm9kdWN0LnByaWNlWyAxIF0gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPT09IDAgfHwgKCBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA+IDAgJiYgIXByb2R1Y3QudmFyaWFudHNbIDAgXS5wcmljZSApID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5zIGNsYXNzTmFtZT1cIm5ldy1wcmljZVwiPiR7IHRvRGVjaW1hbCggcHJvZHVjdC5wcmljZVsgMCBdICkgfTwvaW5zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGVsIGNsYXNzTmFtZT1cIm9sZC1wcmljZVwiPiR7IHRvRGVjaW1hbCggcHJvZHVjdC5wcmljZVsgMSBdICkgfTwvZGVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IGRlbCBjbGFzc05hbWU9XCJuZXctcHJpY2VcIj4keyB0b0RlY2ltYWwoIHByb2R1Y3QucHJpY2VbIDAgXSApIH0g4oCTICR7IHRvRGVjaW1hbCggcHJvZHVjdC5wcmljZVsgMSBdICkgfTwvZGVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8aW5zIGNsYXNzTmFtZT1cIm5ldy1wcmljZVwiPiR7IHRvRGVjaW1hbCggcHJvZHVjdC5wcmljZVsgMCBdICkgfTwvaW5zPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5ncy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ3MtZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyYXRpbmdzXCIgc3R5bGU9eyB7IHdpZHRoOiAyMCAqIHByb2R1Y3QucmF0aW5ncyArICclJyB9IH0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwdGV4dCB0b29sdGlwLXRvcFwiPnsgdG9EZWNpbWFsKCBwcm9kdWN0LnJhdGluZ3MgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzUmV2aWV3Q291bnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyBgL3Byb2R1Y3QvZGVmYXVsdC8keyBwcm9kdWN0LnNsdWcgfWAgfSBjbGFzc05hbWU9XCJyYXRpbmctcmV2aWV3c1wiPiggeyBwcm9kdWN0LnJldmlld3MgfSByZXZpZXdzICk8L0FMaW5rPiA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKCBTbWFsbFByb2R1Y3QgKTsiLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlTGF6eVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XHJcblxyXG5pbXBvcnQgVG9vbEJveCBmcm9tICd+L2NvbXBvbmVudHMvcGFydGlhbHMvc2hvcC90b29sYm94JztcclxuaW1wb3J0IFByb2R1Y3RUd28gZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL3Byb2R1Y3QvcHJvZHVjdC10d28nO1xyXG5pbXBvcnQgUHJvZHVjdEVpZ2h0IGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9wcm9kdWN0L3Byb2R1Y3QtZWlnaHQnO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvcGFnaW5hdGlvbic7XHJcblxyXG5pbXBvcnQgd2l0aEFwb2xsbyBmcm9tICd+L3NlcnZlci9hcG9sbG8nO1xyXG5pbXBvcnQgeyBHRVRfUFJPRFVDVFMgfSBmcm9tICd+L3NlcnZlci9xdWVyaWVzJztcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RMaXN0T25lKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IHsgaXRlbXNQZXJSb3cgPSAzLCB0eXBlID0gXCJsZWZ0XCIsIGlzVG9vbGJveCA9IHRydWUgfSA9IHByb3BzO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBxdWVyeSA9IHJvdXRlci5xdWVyeTtcclxuICAgIGNvbnN0IFsgZ2V0UHJvZHVjdHMsIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSBdID0gdXNlTGF6eVF1ZXJ5KCBHRVRfUFJPRFVDVFMgKTtcclxuICAgIGNvbnN0IHByb2R1Y3RzID0gZGF0YSAmJiBkYXRhLnByb2R1Y3RzLmRhdGE7XHJcbiAgICBjb25zdCBncmlkQ2xhc3NlcyA9IHtcclxuICAgICAgICAzOiBcImNvbHMtMiBjb2xzLXNtLTNcIixcclxuICAgICAgICA0OiBcImNvbHMtMiBjb2xzLXNtLTMgY29scy1tZC00XCIsXHJcbiAgICAgICAgNTogXCJjb2xzLTIgY29scy1zbS0zIGNvbHMtbWQtNCBjb2xzLXhsLTVcIixcclxuICAgICAgICA2OiBcImNvbHMtMiBjb2xzLXNtLTMgY29scy1tZC00IGNvbHMteGwtNlwiLFxyXG4gICAgICAgIDc6IFwiY29scy0yIGNvbHMtc20tMyBjb2xzLW1kLTQgY29scy1sZy01IGNvbHMteGwtN1wiLFxyXG4gICAgICAgIDg6IFwiY29scy0yIGNvbHMtc20tMyBjb2xzLW1kLTQgY29scy1sZy01IGNvbHMteGwtOFwiXHJcbiAgICB9XHJcbiAgICBjb25zdCBwZXJQYWdlID0gcXVlcnkucGVyX3BhZ2UgPyBwYXJzZUludCggcXVlcnkucGVyX3BhZ2UgKSA6IDEyO1xyXG4gICAgY29uc3QgdG90YWxQYWdlID0gZGF0YSA/IHBhcnNlSW50KCBkYXRhLnByb2R1Y3RzLnRvdGFsIC8gcGVyUGFnZSApICsgKCBkYXRhLnByb2R1Y3RzLnRvdGFsICUgcGVyUGFnZSA/IDEgOiAwICkgOiAxO1xyXG4gICAgY29uc3QgcGFnZSA9IHF1ZXJ5LnBhZ2UgPyBxdWVyeS5wYWdlIDogMTtcclxuICAgIGNvbnN0IGdyaWRUeXBlID0gcXVlcnkudHlwZSA/IHF1ZXJ5LnR5cGUgOiAnZ3JpZCc7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgZ2V0UHJvZHVjdHMoIHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2g6IHF1ZXJ5LnNlYXJjaCxcclxuICAgICAgICAgICAgICAgIGNvbG9yczogcXVlcnkuY29sb3JzID8gcXVlcnkuY29sb3JzLnNwbGl0KCAnLCcgKSA6IFtdLFxyXG4gICAgICAgICAgICAgICAgc2l6ZXM6IHF1ZXJ5LnNpemVzID8gcXVlcnkuc2l6ZXMuc3BsaXQoICcsJyApIDogW10sXHJcbiAgICAgICAgICAgICAgICBicmFuZHM6IHF1ZXJ5LmJyYW5kcyA/IHF1ZXJ5LmJyYW5kcy5zcGxpdCggJywnICkgOiBbXSxcclxuICAgICAgICAgICAgICAgIG1pbl9wcmljZTogcGFyc2VJbnQoIHF1ZXJ5Lm1pbl9wcmljZSApLFxyXG4gICAgICAgICAgICAgICAgbWF4X3ByaWNlOiBwYXJzZUludCggcXVlcnkubWF4X3ByaWNlICksXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogcXVlcnkuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICB0YWc6IHF1ZXJ5LnRhZyxcclxuICAgICAgICAgICAgICAgIHNvcnRCeTogcXVlcnkuc29ydGJ5LFxyXG4gICAgICAgICAgICAgICAgZnJvbTogcGVyUGFnZSAqICggcGFnZSAtIDEgKSxcclxuICAgICAgICAgICAgICAgIHRvOiBwZXJQYWdlICogcGFnZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApO1xyXG4gICAgfSwgWyBxdWVyeSBdIClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlzVG9vbGJveCA/IDxUb29sQm94IHR5cGU9eyB0eXBlIH0gLz4gOiAnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxvYWRpbmcgP1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRUeXBlID09PSAnZ3JpZCcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGByb3cgcHJvZHVjdC13cmFwcGVyICR7IGdyaWRDbGFzc2VzWyBpdGVtc1BlclJvdyBdIH1gIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyIF0ubWFwKCAoIGl0ZW0gKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtbG9hZGluZy1vdmVybGF5XCIga2V5PXsgJ3BvcHVwLXNrZWwtJyArIGl0ZW0gfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHByb2R1Y3Qtd3JhcHBlciBza2VsZXRvbi1ib2R5IGNvbHMtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMiBdLm1hcCggKCBpdGVtICkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2VsLXBybyBza2VsLXByby1saXN0IG1iLTRcIiBrZXk9eyAnbGlzdC1za2VsLScgKyBpdGVtIH0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZ3JpZFR5cGUgPT09ICdncmlkJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBgcm93IHByb2R1Y3Qtd3JhcHBlciAkeyBncmlkQ2xhc3Nlc1sgaXRlbXNQZXJSb3cgXSB9YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHByb2R1Y3RzICYmIHByb2R1Y3RzLm1hcCggaXRlbSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXdyYXBcIiBrZXk9eyAnc2hvcC0nICsgaXRlbS5zbHVnIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RUd28gcHJvZHVjdD17IGl0ZW0gfSBhZENsYXNzPVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWxpc3RzIHByb2R1Y3Qtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHByb2R1Y3RzICYmIHByb2R1Y3RzLm1hcCggaXRlbSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RFaWdodCBwcm9kdWN0PXsgaXRlbSB9IGtleT17ICdzaG9wLWxpc3QtJyArIGl0ZW0uc2x1ZyB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0cyAmJiBwcm9kdWN0cy5sZW5ndGggPT09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTFcIj5ObyBwcm9kdWN0cyB3ZXJlIGZvdW5kIG1hdGNoaW5nIHlvdXIgc2VsZWN0aW9uLjwvcD4gOiAnJ1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRhICYmIGRhdGEucHJvZHVjdHMudG90YWwgPiAwID9cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xib3ggdG9vbGJveC1wYWdpbmF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgJiYgPHAgY2xhc3NOYW1lPVwic2hvdy1pbmZvXCI+U2hvd2luZyA8c3Bhbj57IHBlclBhZ2UgKiAoIHBhZ2UgLSAxICkgKyAxIH0gLSB7IE1hdGgubWluKCBwZXJQYWdlICogcGFnZSwgZGF0YS5wcm9kdWN0cy50b3RhbCApIH0gb2YgeyBkYXRhLnByb2R1Y3RzLnRvdGFsIH08L3NwYW4+UHJvZHVjdHM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uIHRvdGFsUGFnZT17IHRvdGFsUGFnZSB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKCB7IHNzcjogdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfSApKCBQcm9kdWN0TGlzdE9uZSApOyIsImltcG9ydCBBTGluayBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvY3VzdG9tLWxpbmsnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hvcEJhbm5lciAoIHByb3BzICkge1xyXG4gICAgY29uc3QgeyBzdWJUaXRsZSA9ICcnLCB0aXRsZSA9IFwiUmlvZGUgU2hvcFwiLCBjdXJyZW50ID0gXCJSaW9kZSBTaG9wXCIgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoIC4vaW1hZ2VzL3Nob3AvcGFnZS1oZWFkZXItYmFjay5qcGcgKWAsIGJhY2tncm91bmRDb2xvcjogXCIjM0M2M0E0XCIgfSB9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdWJUaXRsZSA/IDxoMyBjbGFzc05hbWU9XCJwYWdlLXN1YnRpdGxlXCI+eyBzdWJUaXRsZSB9PC9oMz4gOiAnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlID8gPGgxIGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj57IHRpdGxlIH08L2gxPiA6ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJyZWFkY3J1bWJcIj5cclxuICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9cIj48aSBjbGFzc05hbWU9XCJkLWljb24taG9tZVwiPjwvaT48L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGVsaW1pdGVyXCI+LzwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+eyBjdXJyZW50IH08L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xyXG5pbXBvcnQgSW5wdXRSYW5nZSBmcm9tICdyZWFjdC1pbnB1dC1yYW5nZSc7XHJcblxyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9jdXN0b20tbGluayc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9hY2NvcmRpb24vY2FyZCc7XHJcbmltcG9ydCBPd2xDYXJvdXNlbCBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvb3dsLWNhcm91c2VsJztcclxuXHJcbmltcG9ydCBTbWFsbFByb2R1Y3QgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL3Byb2R1Y3QvcHJvZHVjdC1zbSc7XHJcblxyXG5pbXBvcnQgd2l0aEFwb2xsbyBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2ZXIvYXBvbGxvJztcclxuaW1wb3J0IHsgR0VUX1NIT1BfU0lERUJBUl9EQVRBIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmVyL3F1ZXJpZXMnO1xyXG5cclxuaW1wb3J0IFNsaWRlVG9nZ2xlIGZyb20gJ3JlYWN0LXNsaWRlLXRvZ2dsZSc7XHJcblxyXG5pbXBvcnQgZmlsdGVyRGF0YSBmcm9tICd+L3V0aWxzL2RhdGEvc2hvcCc7XHJcbmltcG9ydCB7IHNjcm9sbFRvcEhhbmRsZXIgfSBmcm9tICd+L3V0aWxzJztcclxuXHJcbmZ1bmN0aW9uIFNpZGViYXJGaWx0ZXJPbmUgKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IHsgdHlwZSA9IFwibGVmdFwiLCBpc0ZlYXR1cmVkID0gZmFsc2UgfSA9IHByb3BzO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBxdWVyeSA9IHJvdXRlci5xdWVyeTtcclxuICAgIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5KCBHRVRfU0hPUF9TSURFQkFSX0RBVEEsIHsgdmFyaWFibGVzOiB7IGRlbW86IDEsIGZlYXR1cmVkOiB0cnVlIH0gfSApO1xyXG4gICAgbGV0IHRtcFByaWNlID0geyBtYXg6IHF1ZXJ5Lm1heF9wcmljZSA/IHBhcnNlSW50KCBxdWVyeS5tYXhfcHJpY2UgKSA6IDEwMDAsIG1pbjogcXVlcnkubWluX3ByaWNlID8gcGFyc2VJbnQoIHF1ZXJ5Lm1pbl9wcmljZSApIDogMCB9O1xyXG4gICAgY29uc3QgWyBmaWx0ZXJQcmljZSwgc2V0UHJpY2UgXSA9IHVzZVN0YXRlKCB0bXBQcmljZSApO1xyXG4gICAgY29uc3QgWyBpc0ZpcnN0LCBzZXRGaXJzdCBdID0gdXNlU3RhdGUoIHRydWUgKTtcclxuICAgIGxldCBzaWRlYmFyRGF0YSA9IGRhdGEgJiYgZGF0YS5zaG9wU2lkZWJhckRhdGE7XHJcbiAgICBsZXQgdGltZXJJZDtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIGhpZGVTaWRlYmFyICk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAncmVzaXplJywgaGlkZVNpZGViYXIgKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSApXHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgc2V0UHJpY2UoIHsgbWF4OiBxdWVyeS5tYXhfcHJpY2UgPyBwYXJzZUludCggcXVlcnkubWF4X3ByaWNlICkgOiAxMDAwLCBtaW46IHF1ZXJ5Lm1pbl9wcmljZSA/IHBhcnNlSW50KCBxdWVyeS5taW5fcHJpY2UgKSA6IDAgfSApO1xyXG4gICAgICAgIGlmICggaXNGaXJzdCApIHtcclxuICAgICAgICAgICAgc2V0Rmlyc3QoIGZhbHNlICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wSGFuZGxlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFsgcXVlcnkgXSApXHJcblxyXG4gICAgY29uc3QgZmlsdGVyQnlQcmljZSA9ICggZSApID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IHVybCA9IHJvdXRlci5wYXRobmFtZS5yZXBsYWNlKCAnW2dyaWRdJywgcXVlcnkuZ3JpZCApO1xyXG4gICAgICAgIGxldCBhcnIgPSBbIGBtaW5fcHJpY2U9JHsgZmlsdGVyUHJpY2UubWluIH1gLCBgbWF4X3ByaWNlPSR7IGZpbHRlclByaWNlLm1heCB9YCwgJ3BhZ2U9MScgXTtcclxuICAgICAgICBmb3IgKCBsZXQga2V5IGluIHF1ZXJ5ICkge1xyXG4gICAgICAgICAgICBpZiAoIGtleSAhPT0gJ21pbl9wcmljZScgJiYga2V5ICE9PSAnbWF4X3ByaWNlJyAmJiBrZXkgIT09ICdwYWdlJyAmJiBrZXkgIT09ICdncmlkJyApIGFyci5wdXNoKCBrZXkgKyAnPScgKyBxdWVyeVsga2V5IF0gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdXJsID0gdXJsICsgJz8nICsgYXJyLmpvaW4oICcmJyApO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCB1cmwgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb250YWluc0F0dHJJblVybCA9ICggdHlwZSwgdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFF1ZXJpZXMgPSBxdWVyeVsgdHlwZSBdID8gcXVlcnlbIHR5cGUgXS5zcGxpdCggJywnICkgOiBbXTtcclxuICAgICAgICByZXR1cm4gY3VycmVudFF1ZXJpZXMgJiYgY3VycmVudFF1ZXJpZXMuaW5jbHVkZXMoIHZhbHVlICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0VXJsRm9yQXR0cnMgPSAoIHR5cGUsIHZhbHVlICkgPT4ge1xyXG4gICAgICAgIGxldCBjdXJyZW50UXVlcmllcyA9IHF1ZXJ5WyB0eXBlIF0gPyBxdWVyeVsgdHlwZSBdLnNwbGl0KCAnLCcgKSA6IFtdO1xyXG4gICAgICAgIGN1cnJlbnRRdWVyaWVzID0gY29udGFpbnNBdHRySW5VcmwoIHR5cGUsIHZhbHVlICkgPyBjdXJyZW50UXVlcmllcy5maWx0ZXIoIGl0ZW0gPT4gaXRlbSAhPT0gdmFsdWUgKSA6IFsgLi4uY3VycmVudFF1ZXJpZXMsIHZhbHVlIF07XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRRdWVyaWVzLmpvaW4oICcsJyApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlUHJpY2UgPSB2YWx1ZSA9PiB7XHJcbiAgICAgICAgc2V0UHJpY2UoIHZhbHVlICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlU2lkZWJhciA9IGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnYm9keScgKS5jbGFzc0xpc3QucmVtb3ZlKCBgJHsgdHlwZSA9PT0gXCJsZWZ0XCIgfHwgdHlwZSA9PT0gXCJvZmYtY2FudmFzXCIgPyBcInNpZGViYXItYWN0aXZlXCIgOiBcInJpZ2h0LXNpZGViYXItYWN0aXZlXCIgfWAgKTtcclxuXHJcbiAgICAgICAgbGV0IHN0aWNreVdyYXBlciA9IGUuY3VycmVudFRhcmdldC5jbG9zZXN0KCAnLnN0aWNreS1zaWRlYmFyLXdyYXBwZXInICk7XHJcblxyXG4gICAgICAgIGxldCBtYWluQ29udGVudCA9IGUuY3VycmVudFRhcmdldC5jbG9zZXN0KCAnLm1haW4tY29udGVudC13cmFwJyApO1xyXG4gICAgICAgIGlmICggbWFpbkNvbnRlbnQgJiYgdHlwZSAhPT0gXCJvZmYtY2FudmFzXCIgJiYgcXVlcnkuZ3JpZCAhPT0gJzRjb2xzJyApXHJcbiAgICAgICAgICAgIG1haW5Db250ZW50LnF1ZXJ5U2VsZWN0b3IoICcucm93LnByb2R1Y3Qtd3JhcHBlcicgKSAmJiBtYWluQ29udGVudC5xdWVyeVNlbGVjdG9yKCAnLnJvdy5wcm9kdWN0LXdyYXBwZXInICkuY2xhc3NMaXN0LnRvZ2dsZSggJ2NvbHMtbWQtNCcgKTtcclxuXHJcbiAgICAgICAgaWYgKCBtYWluQ29udGVudCAmJiBzdGlja3lXcmFwZXIgKSB7XHJcbiAgICAgICAgICAgIHN0aWNreVdyYXBlci5jbGFzc0xpc3QudG9nZ2xlKCAnY2xvc2VkJyApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBzdGlja3lXcmFwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2xvc2VkJyApICkge1xyXG4gICAgICAgICAgICAgICAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCggJ292ZXJmbG93LWhpZGRlbicgKTtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCggdGltZXJJZCApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBtYWluQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCAnb3ZlcmZsb3ctaGlkZGVuJyApO1xyXG4gICAgICAgICAgICAgICAgfSwgNTAwICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd1NpZGViYXIgPSAoIGUgKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdib2R5JyApLmNsYXNzTGlzdC5hZGQoIFwic2lkZWJhci1hY3RpdmVcIiApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhpZGVTaWRlYmFyID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdib2R5JyApLmNsYXNzTGlzdC5yZW1vdmUoIGAkeyB0eXBlID09PSBcImxlZnRcIiB8fCB0eXBlID09PSBcIm9mZi1jYW52YXNcIiB8fCB0eXBlID09PSBcImJveGVkXCIgfHwgdHlwZSA9PT0gXCJiYW5uZXJcIiA/IFwic2lkZWJhci1hY3RpdmVcIiA6IFwicmlnaHQtc2lkZWJhci1hY3RpdmVcIiB9YCApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT17IGBjb2wtbGctMyBzaG9wLXNpZGViYXIgc2tlbGV0b24tYm9keSAkeyB0eXBlID09PSBcIm9mZi1jYW52YXNcIiA/ICcnIDogXCJzaWRlYmFyLWZpeGVkIHN0aWNreS1zaWRlYmFyLXdyYXBwZXJcIiB9ICR7IHR5cGUgPT09IFwib2ZmLWNhbnZhc1wiIHx8IHR5cGUgPT09IFwiYm94ZWRcIiA/ICcnIDogXCJzaWRlYmFyLXRvZ2dsZS1yZW1haW5cIiB9ICR7IHR5cGUgPT09IFwibGVmdFwiIHx8IHR5cGUgPT09IFwib2ZmLWNhbnZhc1wiIHx8IHR5cGUgPT09IFwiYm94ZWRcIiB8fCB0eXBlID09PSBcImJhbm5lclwiID8gXCJzaWRlYmFyXCIgOiBcInJpZ2h0LXNpZGViYXJcIiB9YCB9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItb3ZlcmxheVwiIG9uQ2xpY2s9eyBoaWRlU2lkZWJhciB9PjwvZGl2PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlID09PSBcImJveGVkXCIgfHwgdHlwZSA9PT0gXCJiYW5uZXJcIiA/IDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2lkZWJhci10b2dnbGVcIiBvbkNsaWNrPXsgc2hvd1NpZGViYXIgfT48aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2E+IDogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8QUxpbmsgY2xhc3NOYW1lPVwic2lkZWJhci1jbG9zZVwiIGhyZWY9XCIjXCIgb25DbGljaz17IGhpZGVTaWRlYmFyIH0+PGkgY2xhc3NOYW1lPVwiZC1pY29uLXRpbWVzXCI+PC9pPjwvQUxpbms+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICFsb2FkaW5nICYmIHNpZGViYXJEYXRhID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3ktc2lkZWJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPT09IFwiYm94ZWRcIiB8fCB0eXBlID09PSBcImJhbm5lclwiID8gJycgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1hY3Rpb25zIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2lkZWJhci10b2dnbGUtYnRuIHRvZ2dsZS1yZW1haW4gYnRuIGJ0bi1vdXRsaW5lIGJ0bi1wcmltYXJ5IGJ0bi1pY29uLXJpZ2h0IGJ0bi1yb3VuZGVkXCIgb25DbGljaz17IHRvZ2dsZVNpZGViYXIgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPT09IFwibGVmdFwiIHx8IHR5cGUgPT09IFwib2ZmLWNhbnZhc1wiID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImQtaWNvbi1hcnJvdy1sZWZ0XCI+PC9pPiA6IDxpIGNsYXNzTmFtZT1cImQtaWNvbi1hcnJvdy1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IHsgcGF0aG5hbWU6IHJvdXRlci5wYXRobmFtZSwgcXVlcnk6IHsgZ3JpZDogcXVlcnkuZ3JpZCwgdHlwZTogcm91dGVyLnF1ZXJ5LnR5cGUgPyByb3V0ZXIucXVlcnkudHlwZSA6IG51bGwgfSB9IH0gc2Nyb2xsPXsgZmFsc2UgfSBjbGFzc05hbWU9XCJmaWx0ZXItY2xlYW5cIj5DbGVhbiBBbGw8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCB3aWRnZXQtY29sbGFwc2libGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCB0aXRsZT1cIjxoMyBjbGFzcz0nd2lkZ2V0LXRpdGxlJz5BbGwgQ2F0ZWdvcmllczxzcGFuIGNsYXNzPSd0b2dnbGUtYnRuIHAtMCBwYXJzZS1jb250ZW50Jz48L3NwYW4+PC9oMz5cIiB0eXBlPVwicGFyc2VcIiBleHBhbmRlZD17IHRydWUgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIndpZGdldC1ib2R5IGZpbHRlci1pdGVtcyBzZWFyY2gtdWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhICYmIHNpZGViYXJEYXRhLmNhdGVnb3JpZXMubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNoaWxkcmVuID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17IGl0ZW0ubmFtZSArICcgLSAnICsgaW5kZXggfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGB3aXRoLXVsIG92ZXJmbG93LWhpZGRlbiAkeyBpdGVtLnNsdWcgPT09IHF1ZXJ5LmNhdGVnb3J5IHx8IGl0ZW0uY2hpbGRyZW4uZmluZEluZGV4KCBzdWJDYXQgPT4gc3ViQ2F0LnNsdWcgPT09IHF1ZXJ5LmNhdGVnb3J5ICkgPiAtMSA/ICdzaG93JyA6ICcnIH0gYCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlVG9nZ2xlIGNvbGxhcHNlZD17IHRydWUgfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgKCB7IG9uVG9nZ2xlLCBzZXRDb2xsYXBzaWJsZUVsZW1lbnQsIHRvZ2dsZVN0YXRlIH0gKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXsgeyBwYXRobmFtZTogcm91dGVyLnBhdGhuYW1lLCBxdWVyeTogeyBjYXRlZ29yeTogaXRlbS5zbHVnLCBncmlkOiBxdWVyeS5ncmlkLCB0eXBlOiByb3V0ZXIucXVlcnkudHlwZSA/IHJvdXRlci5xdWVyeS50eXBlIDogbnVsbCB9IH0gfSBzY3JvbGw9eyBmYWxzZSB9PnsgaXRlbS5uYW1lIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXsgYGZhcyBmYS1jaGV2cm9uLWRvd24gJHsgdG9nZ2xlU3RhdGUudG9Mb3dlckNhc2UoKSB9YCB9IG9uQ2xpY2s9eyBlID0+IHsgb25Ub2dnbGUoKTsgZS5zdG9wUHJvcGFnYXRpb24oKTsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9IH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXsgc2V0Q29sbGFwc2libGVFbGVtZW50IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9eyB7IGRpc3BsYXk6IFwiYmxvY2tcIiB9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNoaWxkcmVuLm1hcCggKCBzdWJJdGVtLCBpbmRleCApID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXsgc3ViSXRlbS5uYW1lICsgJyAtICcgKyBpbmRleCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgYHdpdGgtdWwgJHsgc3ViSXRlbS5zbHVnID09PSBxdWVyeS5jYXRlZ29yeSA/ICdzaG93JyA6ICcnIH0gYCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBzY3JvbGw9eyBmYWxzZSB9IGhyZWY9eyB7IHBhdGhuYW1lOiByb3V0ZXIucGF0aG5hbWUsIHF1ZXJ5OiB7IGNhdGVnb3J5OiBzdWJJdGVtLnNsdWcsIGdyaWQ6IHF1ZXJ5LmdyaWQsIHR5cGU6IHJvdXRlci5xdWVyeS50eXBlID8gcm91dGVyLnF1ZXJ5LnR5cGUgOiBudWxsIH0gfSB9Pnsgc3ViSXRlbS5uYW1lIH08L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NsaWRlVG9nZ2xlID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IHF1ZXJ5LmNhdGVnb3J5ID09PSBpdGVtLnNsdWcgPyAnc2hvdycgOiAnJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsgaXRlbS5uYW1lICsgJyAtICcgKyBpbmRleCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyB7IHBhdGhuYW1lOiByb3V0ZXIucGF0aG5hbWUsIHF1ZXJ5OiB7IGNhdGVnb3J5OiBpdGVtLnNsdWcsIGdyaWQ6IHF1ZXJ5LmdyaWQsIHR5cGU6IHJvdXRlci5xdWVyeS50eXBlID8gcm91dGVyLnF1ZXJ5LnR5cGUgOiBudWxsIH0gfSB9IHNjcm9sbD17IGZhbHNlIH0+eyBpdGVtLm5hbWUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IHdpZGdldC1jb2xsYXBzaWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHRpdGxlPVwiPGgzIGNsYXNzPSd3aWRnZXQtdGl0bGUnPkZpbHRlciBieSBQcmljZTxzcGFuIGNsYXNzPSd0b2dnbGUtYnRuIHAtMCBwYXJzZS1jb250ZW50Jz48L3NwYW4+PC9oMz5cIiB0eXBlPVwicGFyc2VcIiBleHBhbmRlZD17IHRydWUgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLXByaWNlLXNsaWRlciBub1VpLXRhcmdldCBub1VpLWx0ciBub1VpLWhvcml6b250YWwgc2hvcC1pbnB1dC1yYW5nZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRSYW5nZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0TGFiZWw9eyB2YWx1ZSA9PiBgJCR7IHZhbHVlIH1gIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFZhbHVlPXsgMTAwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5WYWx1ZT17IDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17IDUwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgZmlsdGVyUHJpY2UgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBvbkNoYW5nZVByaWNlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1wcmljZS10ZXh0IG1iLTRcIj5QcmljZTogJHsgZmlsdGVyUHJpY2UubWluIH0gLSAkeyBmaWx0ZXJQcmljZS5tYXggfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmlsdGVyLXByaWNlLXJhbmdlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGJ0bi1maWx0ZXIgYnRuLXJvdW5kZWRcIiBvbkNsaWNrPXsgZmlsdGVyQnlQcmljZSB9PkZpbHRlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCB3aWRnZXQtY29sbGFwc2libGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCB0aXRsZT1cIjxoMyBjbGFzcz0nd2lkZ2V0LXRpdGxlJz5TaXplPHNwYW4gY2xhc3M9J3RvZ2dsZS1idG4gcC0wIHBhcnNlLWNvbnRlbnQnPjwvc3Bhbj48L2gzPlwiIHR5cGU9XCJwYXJzZVwiIGV4cGFuZGVkPXsgdHJ1ZSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwid2lkZ2V0LWJvZHkgZmlsdGVyLWl0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyRGF0YS5zaXplcy5tYXAoICggaXRlbSwgaW5kZXggKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGNvbnRhaW5zQXR0ckluVXJsKCAnc2l6ZXMnLCBpdGVtLnNsdWcgKSA/ICdhY3RpdmUnIDogJycgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsgaXRlbSArICcgLSAnICsgaW5kZXggfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgc2Nyb2xsPXsgZmFsc2UgfSBocmVmPXsgeyBwYXRobmFtZTogcm91dGVyLnBhdGhuYW1lLCBxdWVyeTogeyAuLi5xdWVyeSwgcGFnZTogMSwgc2l6ZXM6IGdldFVybEZvckF0dHJzKCAnc2l6ZXMnLCBpdGVtLnNsdWcgKSwgdHlwZTogcm91dGVyLnF1ZXJ5LnR5cGUgPyByb3V0ZXIucXVlcnkudHlwZSA6IG51bGwgfSB9IH0+eyBpdGVtLm5hbWUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgd2lkZ2V0LWNvbGxhcHNpYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgdGl0bGU9XCI8aDMgY2xhc3M9J3dpZGdldC10aXRsZSc+Q29sb3I8c3BhbiBjbGFzcz0ndG9nZ2xlLWJ0biBwLTAgcGFyc2UtY29udGVudCc+PC9zcGFuPjwvaDM+XCIgdHlwZT1cInBhcnNlXCIgZXhwYW5kZWQ9eyB0cnVlIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ3aWRnZXQtYm9keSBmaWx0ZXItaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJEYXRhLmNvbG9ycy5tYXAoICggaXRlbSwgaW5kZXggKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGNvbnRhaW5zQXR0ckluVXJsKCAnY29sb3JzJywgaXRlbS5zbHVnICkgPyAnYWN0aXZlJyA6ICcnIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17IGl0ZW0gKyAnIC0gJyArIGluZGV4IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIHNjcm9sbD17IGZhbHNlIH0gaHJlZj17IHsgcGF0aG5hbWU6IHJvdXRlci5wYXRobmFtZSwgcXVlcnk6IHsgLi4ucXVlcnksIHBhZ2U6IDEsIGNvbG9yczogZ2V0VXJsRm9yQXR0cnMoICdjb2xvcnMnLCBpdGVtLnNsdWcgKSwgdHlwZTogcm91dGVyLnF1ZXJ5LnR5cGUgPyByb3V0ZXIucXVlcnkudHlwZSA6IG51bGwgfSB9IH0+eyBpdGVtLm5hbWUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgd2lkZ2V0LWNvbGxhcHNpYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgdGl0bGU9XCI8aDMgY2xhc3M9J3dpZGdldC10aXRsZSc+QnJhbmQ8c3BhbiBjbGFzcz0ndG9nZ2xlLWJ0biBwLTAgcGFyc2UtY29udGVudCc+PC9zcGFuPjwvaDM+XCIgdHlwZT1cInBhcnNlXCIgZXhwYW5kZWQ9eyB0cnVlIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ3aWRnZXQtYm9keSBmaWx0ZXItaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJEYXRhLmJyYW5kcy5tYXAoICggaXRlbSwgaW5kZXggKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGNvbnRhaW5zQXR0ckluVXJsKCAnYnJhbmRzJywgaXRlbS5zbHVnICkgPyAnYWN0aXZlJyA6ICcnIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17IGl0ZW0gKyAnIC0gJyArIGluZGV4IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIHNjcm9sbD17IGZhbHNlIH0gaHJlZj17IHsgcGF0aG5hbWU6IHJvdXRlci5wYXRobmFtZSwgcXVlcnk6IHsgLi4ucXVlcnksIHBhZ2U6IDEsIGJyYW5kczogZ2V0VXJsRm9yQXR0cnMoICdicmFuZHMnLCBpdGVtLnNsdWcgKSwgdHlwZTogcm91dGVyLnF1ZXJ5LnR5cGUgPyByb3V0ZXIucXVlcnkudHlwZSA6IG51bGwgfSB9IH0+eyBpdGVtLm5hbWUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRmVhdHVyZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCB3aWRnZXQtcHJvZHVjdHMgd2lkZ2V0LWNvbGxhcHNpYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSd3aWRnZXQtdGl0bGUnPk91ciBGZWF0dXJlZDwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPd2xDYXJvdXNlbCBhZENsYXNzPVwib3dsLW5hdi10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0cy1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWRlYmFyRGF0YS5mZWF0dXJlZC5zbGljZSggMCwgMyApLm1hcCggKCBpdGVtLCBpbmRleCApID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbWFsbFByb2R1Y3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q9eyBpdGVtIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17IGl0ZW0ubmFtZSArICcgLSAnICsgaW5kZXggfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0cy1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWRlYmFyRGF0YS5mZWF0dXJlZC5zbGljZSggMywgNiApLm1hcCggKCBpdGVtLCBpbmRleCApID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbWFsbFByb2R1Y3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q9eyBpdGVtIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17IGl0ZW0ubmFtZSArICcgLSAnICsgaW5kZXggfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L093bENhcm91c2VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LTIgbXQtMTAgcHQtNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2FzaWRlID5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyggeyBzc3I6IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIH0gKSggU2lkZWJhckZpbHRlck9uZSApOyIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBBTGluayBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvY3VzdG9tLWxpbmsnO1xyXG5cclxuaW1wb3J0IGZpbHRlckRhdGEgZnJvbSAnfi91dGlscy9kYXRhL3Nob3AnO1xyXG5pbXBvcnQgeyBzY3JvbGxUb3BIYW5kbGVyIH0gZnJvbSAnfi91dGlscyc7XHJcblxyXG5mdW5jdGlvbiBTaWRlYmFyRmlsdGVyVGhyZWUoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFsgaXNGaXJzdCwgc2V0Rmlyc3QgXSA9IHVzZVN0YXRlKCB0cnVlICk7XHJcbiAgICBjb25zdCBxdWVyeSA9IHJvdXRlci5xdWVyeTtcclxuICAgIGNvbnN0IHByaWNlcyA9IFtcclxuICAgICAgICB7IG1pbjogJzAnLCBtYXg6ICc1MCcgfSxcclxuICAgICAgICB7IG1pbjogJzUwJywgbWF4OiAnMTAwJyB9LFxyXG4gICAgICAgIHsgbWluOiAnMTAwJywgbWF4OiAnMjAwJyB9LFxyXG4gICAgICAgIHsgbWluOiAnMjAwJywgbWF4OiAnJyB9XHJcbiAgICBdXHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCByZXNpemVIYW5kbGVyLCBmYWxzZSApO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIFwiYm9keVwiICkuYWRkRXZlbnRMaXN0ZW5lciggXCJjbGlja1wiLCBvbkJvZHlDbGljayApO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIHJlc2l6ZUhhbmRsZXIgKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggXCJib2R5XCIgKS5yZW1vdmVFdmVudExpc3RlbmVyKCBcImNsaWNrXCIsIG9uQm9keUNsaWNrICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10gKVxyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGlmICggaXNGaXJzdCApIHtcclxuICAgICAgICAgICAgc2V0Rmlyc3QoIGZhbHNlICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wSGFuZGxlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFsgcXVlcnkgXSApXHJcblxyXG4gICAgY29uc3QgY29udGFpbnNBdHRySW5VcmwgPSAoIHR5cGUsIHZhbHVlICkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRRdWVyaWVzID0gcXVlcnlbIHR5cGUgXSA/IHF1ZXJ5WyB0eXBlIF0uc3BsaXQoICcsJyApIDogW107XHJcbiAgICAgICAgaWYgKCB0eXBlID09PSAnbWluX3ByaWNlJyB8fCB0eXBlID09PSAnbWF4X3ByaWNlJyApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRRdWVyaWVzICYmICggKCB2YWx1ZSA9PT0gJycgJiYgY3VycmVudFF1ZXJpZXMubGVuZ3RoID09PSAwICkgfHwgY3VycmVudFF1ZXJpZXMuaW5jbHVkZXMoIHZhbHVlICkgKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50UXVlcmllcyAmJiBjdXJyZW50UXVlcmllcy5pbmNsdWRlcyggdmFsdWUgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0VXJsRm9yQXR0cnMgPSAoIHR5cGUsIHZhbHVlICkgPT4ge1xyXG4gICAgICAgIGxldCBjdXJyZW50UXVlcmllcyA9IHF1ZXJ5WyB0eXBlIF0gPyBxdWVyeVsgdHlwZSBdLnNwbGl0KCAnLCcgKSA6IFtdO1xyXG4gICAgICAgIGlmICggdHlwZSA9PT0gJ21pbl9wcmljZScgfHwgdHlwZSA9PT0gJ21heF9wcmljZScgKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRRdWVyaWVzID0gY3VycmVudFF1ZXJpZXMubGVuZ3RoID4gMCAmJiBjdXJyZW50UXVlcmllcy5pbmNsdWRlcyggdmFsdWUgKSA/IFtdIDogWyB2YWx1ZSBdXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY3VycmVudFF1ZXJpZXMgPSBjb250YWluc0F0dHJJblVybCggdHlwZSwgdmFsdWUgKSA/IGN1cnJlbnRRdWVyaWVzLmZpbHRlciggaXRlbSA9PiBpdGVtICE9PSB2YWx1ZSApIDogWyAuLi5jdXJyZW50UXVlcmllcywgdmFsdWUgXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRRdWVyaWVzLmpvaW4oICcsJyApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlbGVjdE9wdGlvbkhhbmRsZXIgPSBmdW5jdGlvbiAoIGUgKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUuY3VycmVudFRhcmdldC5jbG9zZXN0KCAnLnRvb2xib3gtaXRlbS5zZWxlY3QtbWVudScgKS5jbGFzc0xpc3QudG9nZ2xlKCAnb3BlbmVkJyApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQm9keUNsaWNrKCBlICkge1xyXG4gICAgICAgICggZS50YXJnZXQuY2xvc2VzdCggJy5zZWxlY3QtbWVudS5vcGVuZWQnICkgfHwgKCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnNlbGVjdC1tZW51Lm9wZW5lZCcgKSApICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuc2VsZWN0LW1lbnUub3BlbmVkJyApLmNsYXNzTGlzdC5yZW1vdmUoICdvcGVuZWQnICkgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoaWRlU2lkZWJhciA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnYm9keScgKS5jbGFzc0xpc3QucmVtb3ZlKCBcInNpZGViYXItYWN0aXZlXCIgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXNpemVIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdib2R5JyApLmNsYXNzTGlzdC5yZW1vdmUoIFwic2lkZWJhci1hY3RpdmVcIiApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlbGVjdEZpbHRlckhhbmRsZXIgPSAoIGUgKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuc2VsZWN0LWl0ZW1zJyApLmNoaWxkcmVuLmxlbmd0aCA+IDEgKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnNlbGVjdC1pdGVtcycgKS5zZXRBdHRyaWJ1dGUoICdzdHlsZScsICd2aXNpYmlsaXR5OiB2aXNpYmxlOyBvcGFjaXR5OiAxOyBoZWlnaHQ6IGF1dG87IG1hcmdpbi10b3A6IDJweDsgbWFyZ2luLWJvdHRvbTogMS44cmVtJyApXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnNlbGVjdC1pdGVtcycgKS5zZXRBdHRyaWJ1dGUoICdzdHlsZScsICcnIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMCApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPVwic2lkZWJhciBzaG9wLXNpZGViYXIgc2lkZWJhci1maXhlZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItb3ZlcmxheVwiIG9uQ2xpY2s9eyBoaWRlU2lkZWJhciB9PjwvZGl2PlxyXG4gICAgICAgICAgICA8QUxpbmsgY2xhc3NOYW1lPVwic2lkZWJhci1jbG9zZVwiIGhyZWY9XCIjXCIgb25DbGljaz17IGhpZGVTaWRlYmFyIH0+PGkgY2xhc3NOYW1lPVwiZC1pY29uLXRpbWVzXCI+PC9pPjwvQUxpbms+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItY29udGVudCB0b29sYm94LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJveC1pdGVtIHNlbGVjdC1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic2VsZWN0LW1lbnUtdG9nZ2xlXCIgaHJlZj1cIiNcIiBvbkNsaWNrPXsgc2VsZWN0T3B0aW9uSGFuZGxlciB9PlNlbGVjdCBTaXplPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmlsdGVyLWl0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckRhdGEuc2l6ZXMubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgY29udGFpbnNBdHRySW5VcmwoICdzaXplcycsIGl0ZW0uc2x1ZyApID8gJ2FjdGl2ZScgOiAnJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17IGl0ZW0gKyAnIC0gJyArIGluZGV4IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IHNlbGVjdEZpbHRlckhhbmRsZXIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyB7IHBhdGhuYW1lOiByb3V0ZXIucGF0aG5hbWUsIHF1ZXJ5OiB7IC4uLnF1ZXJ5LCBwYWdlOiAxLCBzaXplczogZ2V0VXJsRm9yQXR0cnMoICdzaXplcycsIGl0ZW0uc2x1ZyApLCB0eXBlOiByb3V0ZXIucXVlcnkudHlwZSA/IHJvdXRlci5xdWVyeS50eXBlIDogbnVsbCB9IH0gfSBzY3JvbGw9eyBmYWxzZSB9PnsgaXRlbS5uYW1lIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJveC1pdGVtIHNlbGVjdC1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic2VsZWN0LW1lbnUtdG9nZ2xlXCIgaHJlZj1cIiNcIiBvbkNsaWNrPXsgc2VsZWN0T3B0aW9uSGFuZGxlciB9PlNlbGVjdCBDb2xvcjwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZpbHRlci1pdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJEYXRhLmNvbG9ycy5tYXAoICggaXRlbSwgaW5kZXggKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBjb250YWluc0F0dHJJblVybCggJ2NvbG9ycycsIGl0ZW0uc2x1ZyApID8gJ2FjdGl2ZScgOiAnJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17IGl0ZW0gKyAnIC0gJyArIGluZGV4IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IHNlbGVjdEZpbHRlckhhbmRsZXIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyB7IHBhdGhuYW1lOiByb3V0ZXIucGF0aG5hbWUsIHF1ZXJ5OiB7IC4uLnF1ZXJ5LCBwYWdlOiAxLCBjb2xvcnM6IGdldFVybEZvckF0dHJzKCAnY29sb3JzJywgaXRlbS5zbHVnICksIHR5cGU6IHJvdXRlci5xdWVyeS50eXBlID8gcm91dGVyLnF1ZXJ5LnR5cGUgOiBudWxsIH0gfSB9IHNjcm9sbD17IGZhbHNlIH0+eyBpdGVtLm5hbWUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sYm94LWl0ZW0gc2VsZWN0LW1lbnUgcHJpY2Utd2l0aC1jb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNlbGVjdC1tZW51LXRvZ2dsZVwiIGhyZWY9XCIjXCIgb25DbGljaz17IHNlbGVjdE9wdGlvbkhhbmRsZXIgfT5TZWxlY3QgUHJpY2U8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmaWx0ZXItaXRlbXMgZmlsdGVyLXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlcy5tYXAoICggcHJpY2UsIGluZGV4ICkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgY29udGFpbnNBdHRySW5VcmwoICdtaW5fcHJpY2UnLCBwcmljZS5taW4gKSAmJiBjb250YWluc0F0dHJJblVybCggJ21heF9wcmljZScsIHByaWNlLm1heCApID8gJ2FjdGl2ZScgOiAnJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17IFwicHJpY2UtZmlsdGVyLVwiICsgaW5kZXggfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgc2VsZWN0RmlsdGVySGFuZGxlciB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IHsgcGF0aG5hbWU6IHJvdXRlci5wYXRobmFtZSwgcXVlcnk6IHsgLi4ucXVlcnksIHBhZ2U6IDEsIG1pbl9wcmljZTogZ2V0VXJsRm9yQXR0cnMoICdtaW5fcHJpY2UnLCBwcmljZS5taW4gKSwgbWF4X3ByaWNlOiBnZXRVcmxGb3JBdHRycyggJ21heF9wcmljZScsIHByaWNlLm1heCApLCB0eXBlOiByb3V0ZXIucXVlcnkudHlwZSA/IHJvdXRlci5xdWVyeS50eXBlIDogbnVsbCB9IH0gfSBzY3JvbGw9eyBmYWxzZSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlLm1pbiA9PT0gJycgJiYgcHJpY2UubWF4ID09PSAnJyA/ICdBbGwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UubWF4ID09PSAnJyA/IGAkJHsgcHJpY2UubWluIH0uMDAgK2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAkJHsgcHJpY2UubWluIH0uMDAgLSAkJHsgcHJpY2UubWF4IH0uMDBgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYXNpZGUgPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoIFNpZGViYXJGaWx0ZXJUaHJlZSApOyIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9jdXN0b20tbGluayc7XHJcblxyXG5pbXBvcnQgU2lkZWJhckZpbHRlclRocmVlIGZyb20gJ34vY29tcG9uZW50cy9wYXJ0aWFscy9zaG9wL3NpZGViYXIvc2lkZWJhci1maWx0ZXItdGhyZWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9vbEJveCggcHJvcHMgKSB7XHJcbiAgICBjb25zdCB7IHR5cGUgPSBcImxlZnRcIiB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHF1ZXJ5ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc3QgZ3JpZFR5cGUgPSBxdWVyeS50eXBlID8gcXVlcnkudHlwZSA6ICdncmlkJztcclxuICAgIGNvbnN0IHNvcnRCeSA9IHF1ZXJ5LnNvcnRieSA/IHF1ZXJ5LnNvcnRieSA6ICdkZWZhdWx0JztcclxuICAgIGNvbnN0IHBlclBhZ2UgPSBxdWVyeS5wZXJfcGFnZSA/IHF1ZXJ5LnBlcl9wYWdlIDogMTI7XHJcbiAgICBsZXQgdG1wID0gMDtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Njcm9sbCcsIHN0aWNreVRvb2xib3hIYW5kbGVyICk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAnc2Nyb2xsJywgc3RpY2t5VG9vbGJveEhhbmRsZXIgKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSApXHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VBdHRyaSA9ICggZSwgYXR0cmkgKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCB1cmwgPSByb3V0ZXIucGF0aG5hbWUucmVwbGFjZSggJ1tncmlkXScsIHF1ZXJ5LmdyaWQgKTtcclxuICAgICAgICBsZXQgYXJyID0gWyBgJHsgYXR0cmkgfT0keyBlLnRhcmdldC52YWx1ZSB9YCwgJ3BhZ2U9MScgXTtcclxuICAgICAgICBmb3IgKCBsZXQga2V5IGluIHF1ZXJ5ICkge1xyXG4gICAgICAgICAgICBpZiAoIGtleSAhPT0gYXR0cmkgJiYga2V5ICE9PSAncGFnZScgJiYga2V5ICE9PSAnZ3JpZCcgKSBhcnIucHVzaCgga2V5ICsgJz0nICsgcXVlcnlbIGtleSBdICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVybCA9IHVybCArICc/JyArIGFyci5qb2luKCAnJicgKTtcclxuICAgICAgICByb3V0ZXIucHVzaCggdXJsICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd1NpZGViYXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCB0eXBlID09PSBcIm5hdmlnYXRpb25cIiAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IDk5MSApIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5uYXZpZ2F0aW9uLXRvZ2dsZS1idG4nICkuY2xpY2soKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnYm9keScgKS5jbGFzc0xpc3QuYWRkKCBgJHsgdHlwZSA9PT0gXCJsZWZ0XCIgfHwgdHlwZSA9PT0gXCJvZmYtY2FudmFzXCIgfHwgdHlwZSA9PT0gXCJuYXZpZ2F0aW9uXCIgfHwgdHlwZSA9PT0gXCJob3Jpem9udGFsXCIgPyBcInNpZGViYXItYWN0aXZlXCIgOiBcInJpZ2h0LXNpZGViYXItYWN0aXZlXCIgfWAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RpY2t5VG9vbGJveEhhbmRsZXIgPSAoIGUgKSA9PiB7XHJcbiAgICAgICAgbGV0IHRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucGFnZS1jb250ZW50JyApID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5wYWdlLWNvbnRlbnQnICkub2Zmc2V0VG9wICsgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJ2hlYWRlcicgKS5vZmZzZXRIZWlnaHQgKyAxMDAgOiA2MDA7XHJcbiAgICAgICAgbGV0IHN0aWNreVRvb2xib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnN0aWNreS10b29sYm94JyApO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSAwO1xyXG5cclxuICAgICAgICBpZiAoIHN0aWNreVRvb2xib3ggKSB7XHJcbiAgICAgICAgICAgIGhlaWdodCA9IHN0aWNreVRvb2xib3gub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCB3aW5kb3cucGFnZVlPZmZzZXQgPj0gdG9wICYmIHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4ICYmIGUuY3VycmVudFRhcmdldC5zY3JvbGxZIDwgdG1wICkge1xyXG4gICAgICAgICAgICBpZiAoIHN0aWNreVRvb2xib3ggKSB7XHJcbiAgICAgICAgICAgICAgICBzdGlja3lUb29sYm94LmNsYXNzTGlzdC5hZGQoICdmaXhlZCcgKTtcclxuICAgICAgICAgICAgICAgIGlmICggIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuc3RpY2t5LXRvb2xib3gtd3JhcHBlcicgKSApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdOb2RlLmNsYXNzTmFtZSA9IFwic3RpY2t5LXRvb2xib3gtd3JhcHBlclwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0aWNreVRvb2xib3gucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoIG5ld05vZGUsIHN0aWNreVRvb2xib3ggKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnN0aWNreS10b29sYm94LXdyYXBwZXInICkuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCAnYmVmb3JlZW5kJywgc3RpY2t5VG9vbGJveCApO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuc3RpY2t5LXRvb2xib3gtd3JhcHBlcicgKS5zZXRBdHRyaWJ1dGUoIFwic3R5bGVcIiwgXCJoZWlnaHQ6IFwiICsgaGVpZ2h0ICsgXCJweFwiICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCAhZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5zdGlja3ktdG9vbGJveC13cmFwcGVyJyApLmdldEF0dHJpYnV0ZSggXCJzdHlsZVwiICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5zdGlja3ktdG9vbGJveC13cmFwcGVyJyApLnNldEF0dHJpYnV0ZSggXCJzdHlsZVwiLCBcImhlaWdodDogXCIgKyBoZWlnaHQgKyBcInB4XCIgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICggc3RpY2t5VG9vbGJveCApIHtcclxuICAgICAgICAgICAgICAgIHN0aWNreVRvb2xib3guY2xhc3NMaXN0LnJlbW92ZSggJ2ZpeGVkJyApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuc3RpY2t5LXRvb2xib3gtd3JhcHBlcicgKSApIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuc3RpY2t5LXRvb2xib3gtd3JhcHBlcicgKS5yZW1vdmVBdHRyaWJ1dGUoIFwic3R5bGVcIiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIHdpbmRvdy5vdXRlcldpZHRoID4gNzY3ICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuc3RpY2t5LXRvb2xib3gtd3JhcHBlcicgKSApIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5zdGlja3ktdG9vbGJveC13cmFwcGVyJyApLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRtcCA9IGUuY3VycmVudFRhcmdldC5zY3JvbGxZO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9eyBgdG9vbGJveCBzdGlja3ktdG9vbGJveCBzdGlja3ktY29udGVudCBmaXgtdG9wICR7IHR5cGUgPT09IFwiaG9yaXpvbnRhbFwiID8gJ3Rvb2xib3gtaG9yaXpvbnRhbCcgOiAnJyB9YCB9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlID09PSBcImhvcml6b250YWxcIiA/IDxTaWRlYmFyRmlsdGVyVGhyZWUgLz4gOiAnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJveC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gXCJsZWZ0XCIgfHwgdHlwZSA9PT0gXCJvZmYtY2FudmFzXCIgfHwgdHlwZSA9PT0gXCJuYXZpZ2F0aW9uXCIgfHwgdHlwZSA9PT0gXCJob3Jpem9udGFsXCIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9eyBgdG9vbGJveC1pdGVtIGxlZnQtc2lkZWJhci10b2dnbGUgYnRuIGJ0bi1vdXRsaW5lIGJ0bi1wcmltYXJ5IGJ0bi1yb3VuZGVkICR7IHR5cGUgPT09IFwibmF2aWdhdGlvblwiID8gXCJidG4taWNvbi1sZWZ0IGJ0bi1zbVwiIDogXCJidG4tc20gYnRuLWljb24tcmlnaHRcIiB9ICR7IHR5cGUgPT09IFwib2ZmLWNhbnZhc1wiIHx8IHR5cGUgPT09IFwibmF2aWdhdGlvblwiID8gJycgOiBcImQtbGctbm9uZVwiIH1gIH0gb25DbGljaz17IHNob3dTaWRlYmFyIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gXCJuYXZpZ2F0aW9uXCIgPyA8aSBjbGFzc05hbWU9XCJkLWljb24tZmlsdGVyLTJcIj48L2k+IDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPT09IFwibmF2aWdhdGlvblwiID8gJycgOiA8aSBjbGFzc05hbWU9XCJkLWljb24tYXJyb3ctcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+IDogJydcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGB0b29sYm94LWl0ZW0gdG9vbGJveC1zb3J0ICR7IHR5cGUgPT09IFwiYm94ZWRcIiB8fCB0eXBlID09PSBcImJhbm5lclwiID8gXCJzZWxlY3QtYm94IHRleHQtZGFya1wiIDogXCJzZWxlY3QtbWVudVwiIH1gIH0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID09PSBcImJveGVkXCIgfHwgdHlwZSA9PT0gXCJiYW5uZXJcIiA/IDxsYWJlbD5Tb3J0IEJ5IDo8L2xhYmVsPiA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIm9yZGVyYnlcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBkZWZhdWx0VmFsdWU9eyBxdWVyeS5zb3J0YnkgPyBxdWVyeS5zb3J0YnkgOiAnZGVmYXVsdCcgfSBvbkNoYW5nZT17IGUgPT4gb25DaGFuZ2VBdHRyaSggZSwgJ3NvcnRieScgKSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGVmYXVsdFwiPkRlZmF1bHQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBvcHVsYXJpdHlcIj5Nb3N0IFBvcHVsYXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJhdGluZ1wiPkF2ZXJhZ2UgcmF0aW5nPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkYXRlXCI+TGF0ZXN0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwcmljZS1sb3dcIj5Tb3J0IGZvcndhcmQgcHJpY2UgbG93PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwcmljZS1oaWdoXCI+U29ydCBmb3J3YXJkIHByaWNlIGhpZ2g8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkNsZWFyIGN1c3RvbSBzb3J0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJveC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sYm94LWl0ZW0gdG9vbGJveC1zaG93IHNlbGVjdC1ib3ggdGV4dC1kYXJrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNob3cgOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiY291bnRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBkZWZhdWx0VmFsdWU9eyBwZXJQYWdlIH0gb25DaGFuZ2U9eyBlID0+IG9uQ2hhbmdlQXR0cmkoIGUsICdwZXJfcGFnZScgKSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTJcIj4xMjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjRcIj4yNDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMzZcIj4zNjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGB0b29sYm94LWl0ZW0gdG9vbGJveC1sYXlvdXQgJHsgdHlwZSA9PT0gXCJyaWdodFwiID8gXCJtci1sZy0wXCIgOiAnJyB9YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXsgeyBwYXRobmFtZTogcm91dGVyLnBhdGhuYW1lLCBxdWVyeTogeyAuLi5xdWVyeSwgdHlwZTogXCJsaXN0XCIgfSB9IH0gc2Nyb2xsPXsgZmFsc2UgfSBjbGFzc05hbWU9eyBgZC1pY29uLW1vZGUtbGlzdCBidG4tbGF5b3V0ICR7IGdyaWRUeXBlID09PSAnbGlzdCcgPyAnYWN0aXZlJyA6ICcnIH1gIH0+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IHsgcGF0aG5hbWU6IHJvdXRlci5wYXRobmFtZSwgcXVlcnk6IHsgLi4ucXVlcnksIHR5cGU6IFwiZ3JpZFwiIH0gfSB9IHNjcm9sbD17IGZhbHNlIH0gY2xhc3NOYW1lPXsgYGQtaWNvbi1tb2RlLWdyaWQgYnRuLWxheW91dCAkeyBncmlkVHlwZSAhPT0gJ2xpc3QnID8gJ2FjdGl2ZScgOiAnJyB9YCB9PjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gXCJyaWdodFwiID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidG9vbGJveC1pdGVtIHJpZ2h0LXNpZGViYXItdG9nZ2xlIGJ0biBidG4tc20gYnRuLW91dGxpbmUgYnRuLXByaW1hcnkgYnRuLXJvdW5kZWQgYnRuLWljb24tcmlnaHQgZC1sZy1ub25lXCIgb25DbGljaz17IHNob3dTaWRlYmFyIH0+RmlsdGVyPGkgY2xhc3NOYW1lPVwiZC1pY29uLWFycm93LWxlZnRcIj48L2k+PC9BTGluaz4gOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XHJcblxyXG5pbXBvcnQgU2hvcEJhbm5lciBmcm9tICd+L2NvbXBvbmVudHMvcGFydGlhbHMvc2hvcC9zaG9wLWJhbm5lcic7XHJcbmltcG9ydCBTaWRlYmFyRmlsdGVyT25lIGZyb20gJ34vY29tcG9uZW50cy9wYXJ0aWFscy9zaG9wL3NpZGViYXIvc2lkZWJhci1maWx0ZXItb25lJ1xyXG5pbXBvcnQgUHJvZHVjdExpc3RPbmUgZnJvbSAnfi9jb21wb25lbnRzL3BhcnRpYWxzL3Nob3AvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC1vbmUnO1xyXG5cclxuZnVuY3Rpb24gU2hvcCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpblwiPlxyXG4gICAgICAgICAgICA8SGVsbWV0PlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPlJpb2RlIFJlYWN0IGVDb21tZXJjZSBUZW1wbGF0ZSAtIFNob3AgUGFnZTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVsbWV0PlxyXG5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImQtbm9uZVwiPlJpb2RlIFJlYWN0IGVDb21tZXJjZSBUZW1wbGF0ZSAtIFNob3AgUGFnZTwvaDE+XHJcblxyXG4gICAgICAgICAgICA8U2hvcEJhbm5lciAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRlbnQgbWItMTAgcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLWNvbnRlbnQtd3JhcCBndXR0ZXItbGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNpZGViYXJGaWx0ZXJPbmUgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTkgbWFpbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdExpc3RPbmUgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYWluID5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyggU2hvcCApOyIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHNpemVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkV4dHJhIExhcmdlXCIsXHJcbiAgICAgICAgICAgIHNsdWc6ICd4bCcsXHJcbiAgICAgICAgICAgIHNpemU6IFwiWExcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkxhcmdlXCIsXHJcbiAgICAgICAgICAgIHNsdWc6ICdsJyxcclxuICAgICAgICAgICAgc2l6ZTogXCJMXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJNZWRpdW1cIixcclxuICAgICAgICAgICAgc2x1ZzogJ20nLFxyXG4gICAgICAgICAgICBzaXplOiBcIk1cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlNtYWxsXCIsXHJcbiAgICAgICAgICAgIHNsdWc6ICdzJyxcclxuICAgICAgICAgICAgc2l6ZTogXCJTXCJcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgY29sb3JzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkJsYWNrXCIsXHJcbiAgICAgICAgICAgIHNsdWc6ICdibGFjaycsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiMzMzNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkJsdWVcIixcclxuICAgICAgICAgICAgc2x1ZzogJ2JsdWUnLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIjMWU3M2JlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJCcm93blwiLFxyXG4gICAgICAgICAgICBzbHVnOiAnYnJvd24nLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIjOWU2OTI0XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJHcmVlblwiLFxyXG4gICAgICAgICAgICBzbHVnOiAnZ3JlZW4nLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIjNTY5NjJlXCJcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgYnJhbmRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkNpbmRlcmVsbGFcIixcclxuICAgICAgICAgICAgc2x1ZzogXCJjaW5kZXJlbGxhXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJDb21lZHlcIixcclxuICAgICAgICAgICAgc2x1ZzogXCJjb21lZHlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlJpZ2h0Q2hlY2tcIixcclxuICAgICAgICAgICAgc2x1ZzogXCJyaWdodGNoZWNrXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJTa2lsbFN0YXJcIixcclxuICAgICAgICAgICAgc2x1ZzogXCJza2lsbHN0YXJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlNMU1wiLFxyXG4gICAgICAgICAgICBzbHVnOiBcInNsc1wiXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIHRhZzogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJCYWdcIixcclxuICAgICAgICAgICAgc2x1ZzogXCJiYWdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkNsYXNzaWNcIixcclxuICAgICAgICAgICAgc2x1ZzogXCJjbGFzc2ljXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJDb252ZXJzZVwiLFxyXG4gICAgICAgICAgICBzbHVnOiBcImNvbnZlcnNlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJGaXRcIixcclxuICAgICAgICAgICAgc2x1ZzogXCJmaXRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkdyZWVuXCIsXHJcbiAgICAgICAgICAgIHNsdWc6IFwiZ3JlZW5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkphY2sgYW5kIEpvbmVzXCIsXHJcbiAgICAgICAgICAgIHNsdWc6IFwiamFjay1hbmQtam9uZXNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkplYW5zXCIsXHJcbiAgICAgICAgICAgIHNsdWc6IFwiamVhbnNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkp1bXBlclwiLFxyXG4gICAgICAgICAgICBzbHVnOiBcImp1bXBlclwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiTGVhdGhlclwiLFxyXG4gICAgICAgICAgICBzbHVnOiBcImxlYXRoZXJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkRpZXNlbFwiLFxyXG4gICAgICAgICAgICBzbHVnOiBcImRpZXNlbFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiTWFuXCIsXHJcbiAgICAgICAgICAgIHNsdWc6IFwibWFuXCJcclxuICAgICAgICB9XHJcbiAgICBdXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tYm9vc3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWFwb2xsb1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1oZWxtZXRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlucHV0LXJhbmdlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtb3dsLWNhcm91c2VsMlwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNsaWRlLXRvZ2dsZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==