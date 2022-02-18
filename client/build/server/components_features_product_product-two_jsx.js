exports.id = "components_features_product_product-two_jsx";
exports.ids = ["components_features_product_product-two_jsx"];
exports.modules = {

/***/ "./components/features/product/product-two.jsx":
/*!*****************************************************!*\
  !*** ./components/features/product/product-two.jsx ***!
  \*****************************************************/
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
var _jsxFileName = "/home/tristan/projects/Upsidian/ramset-ecomm/client/components/features/product/product-two.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function ProductTwo(props) {
  const {
    product,
    adClass = 'text-center',
    toggleWishlist,
    wishlist,
    addToCart,
    openQuickview,
    isCategory = true
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
    className: `product text-left ${adClass}`,
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
  }, "Sale") : ''), __jsx("div", {
    className: "product-action-vertical",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, product.variants.length > 0 ? __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: `/product/default/${product.slug}`,
    className: "btn-product-icon btn-cart",
    title: "Go to product",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 29
    }
  }, __jsx("i", {
    className: "d-icon-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 33
    }
  })) : __jsx("a", {
    href: "#",
    className: "btn-product-icon btn-cart",
    title: "Add to cart",
    onClick: addToCartHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 29
    }
  }, __jsx("i", {
    className: "d-icon-bag",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 33
    }
  })), __jsx("a", {
    href: "#",
    className: "btn-product-icon btn-wishlist",
    title: isWishlisted ? 'Remove from wishlist' : 'Add to wishlist',
    onClick: wishlistHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: isWishlisted ? "d-icon-heart-full" : "d-icon-heart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "product-action",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: "#",
    className: "btn-product btn-quickview",
    title: "Quick View",
    onClick: showQuickviewHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }, "Quick View"))), __jsx("div", {
    className: "product-details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, isCategory ? __jsx("div", {
    className: "product-cat",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 25
    }
  }, product.categories ? product.categories.map((item, index) => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    key: item.name + '-' + index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 41
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
      lineNumber: 111,
      columnNumber: 45
    }
  }, item.name, index < product.categories.length - 1 ? ', ' : ""))) : "") : "", __jsx("h3", {
    className: "product-name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: `/product/default/${product.slug}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 21
    }
  }, product.name)), __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }, product.price[0] !== product.price[1] ? product.variants.length === 0 || product.variants.length > 0 && !product.variants[0].price ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("ins", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 37
    }
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_7__.toDecimal)(product.price[0])), __jsx("del", {
    className: "old-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 37
    }
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_7__.toDecimal)(product.price[1]))) : __jsx("del", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 33
    }
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_7__.toDecimal)(product.price[0]), " \u2013 $", (0,_utils__WEBPACK_IMPORTED_MODULE_7__.toDecimal)(product.price[1])) : __jsx("ins", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 31
    }
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_7__.toDecimal)(product.price[0]))), __jsx("div", {
    className: "ratings-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "ratings-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
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
      lineNumber: 141,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "tooltiptext tooltip-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 25
    }
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_7__.toDecimal)(product.ratings))), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: `/product/default/${product.slug}`,
    className: "rating-reviews",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 21
    }
  }, "( ", product.reviews, " reviews )"))));
}

function mapStateToProps(state) {
  return {
    wishlist: state.wishlist.data ? state.wishlist.data : []
  };
}

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, _objectSpread({
  toggleWishlist: _store_wishlist__WEBPACK_IMPORTED_MODULE_6__.wishlistActions.toggleWishlist,
  addToCart: _store_cart__WEBPACK_IMPORTED_MODULE_4__.cartActions.addToCart
}, _store_modal__WEBPACK_IMPORTED_MODULE_5__.modalActions))(ProductTwo));

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYW1zZXQtZWNvbW0vLi9jb21wb25lbnRzL2ZlYXR1cmVzL3Byb2R1Y3QvcHJvZHVjdC10d28uanN4Il0sIm5hbWVzIjpbIlByb2R1Y3RUd28iLCJwcm9wcyIsInByb2R1Y3QiLCJhZENsYXNzIiwidG9nZ2xlV2lzaGxpc3QiLCJ3aXNobGlzdCIsImFkZFRvQ2FydCIsIm9wZW5RdWlja3ZpZXciLCJpc0NhdGVnb3J5IiwiaXNXaXNobGlzdGVkIiwiZmluZEluZGV4IiwiaXRlbSIsInNsdWciLCJzaG93UXVpY2t2aWV3SGFuZGxlciIsIndpc2hsaXN0SGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRUYXJnZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiYWRkVG9DYXJ0SGFuZGxlciIsInF0eSIsInByaWNlIiwicHJvY2VzcyIsInBpY3R1cmVzIiwidXJsIiwibGVuZ3RoIiwiaXNfbmV3IiwiaXNfdG9wIiwiZGlzY291bnQiLCJ2YXJpYW50cyIsImNhdGVnb3JpZXMiLCJtYXAiLCJpbmRleCIsIm5hbWUiLCJwYXRobmFtZSIsInF1ZXJ5IiwiY2F0ZWdvcnkiLCJ0b0RlY2ltYWwiLCJ3aWR0aCIsInJhdGluZ3MiLCJyZXZpZXdzIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJkYXRhIiwiY29ubmVjdCIsIndpc2hsaXN0QWN0aW9ucyIsImNhcnRBY3Rpb25zIiwibW9kYWxBY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsVUFBVCxDQUFxQkMsS0FBckIsRUFBNkI7QUFDekIsUUFBTTtBQUFFQyxXQUFGO0FBQVdDLFdBQU8sR0FBRyxhQUFyQjtBQUFvQ0Msa0JBQXBDO0FBQW9EQyxZQUFwRDtBQUE4REMsYUFBOUQ7QUFBeUVDLGlCQUF6RTtBQUF3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QyxRQUFOLENBQWV5QyxJQUFmLEdBQXNCRCxLQUFLLENBQUN4QyxRQUFOLENBQWV5QyxJQUFyQyxHQUE0QztBQURuRCxHQUFQO0FBR0g7O0FBRUQsK0RBQWVDLG9EQUFPLENBQUVILGVBQUY7QUFBcUJ4QyxnQkFBYyxFQUFFNEMsMkVBQXJDO0FBQXFFMUMsV0FBUyxFQUFFMkMsOERBQXFCM0M7QUFBckcsR0FBMEc0QyxzREFBMUcsRUFBUCxDQUFtSWxELFVBQW5JLENBQWYsRSIsImZpbGUiOiJjb21wb25lbnRzX2ZlYXR1cmVzX3Byb2R1Y3RfcHJvZHVjdC10d29fanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGF6eUxvYWRJbWFnZSB9IGZyb20gJ3JlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9jdXN0b20tbGluayc7XHJcblxyXG5pbXBvcnQgeyBjYXJ0QWN0aW9ucyB9IGZyb20gJ34vc3RvcmUvY2FydCc7XHJcbmltcG9ydCB7IG1vZGFsQWN0aW9ucyB9IGZyb20gJ34vc3RvcmUvbW9kYWwnO1xyXG5pbXBvcnQgeyB3aXNobGlzdEFjdGlvbnMgfSBmcm9tICd+L3N0b3JlL3dpc2hsaXN0JztcclxuXHJcbmltcG9ydCB7IHRvRGVjaW1hbCB9IGZyb20gJ34vdXRpbHMnO1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdFR3byggcHJvcHMgKSB7XHJcbiAgICBjb25zdCB7IHByb2R1Y3QsIGFkQ2xhc3MgPSAndGV4dC1jZW50ZXInLCB0b2dnbGVXaXNobGlzdCwgd2lzaGxpc3QsIGFkZFRvQ2FydCwgb3BlblF1aWNrdmlldywgaXNDYXRlZ29yeSA9IHRydWUgfSA9IHByb3BzO1xyXG5cclxuICAgIC8vIGRlY2lkZSBpZiB0aGUgcHJvZHVjdCBpcyB3aXNobGlzdGVkXHJcbiAgICBsZXQgaXNXaXNobGlzdGVkO1xyXG4gICAgaXNXaXNobGlzdGVkID0gd2lzaGxpc3QuZmluZEluZGV4KCBpdGVtID0+IGl0ZW0uc2x1ZyA9PT0gcHJvZHVjdC5zbHVnICkgPiAtMSA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBzaG93UXVpY2t2aWV3SGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBvcGVuUXVpY2t2aWV3KCBwcm9kdWN0LnNsdWcgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB3aXNobGlzdEhhbmRsZXIgPSAoIGUgKSA9PiB7XHJcbiAgICAgICAgaWYgKCB0b2dnbGVXaXNobGlzdCApIHtcclxuICAgICAgICAgICAgdG9nZ2xlV2lzaGxpc3QoIHByb2R1Y3QgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgY3VycmVudFRhcmdldCA9IGUuY3VycmVudFRhcmdldDtcclxuICAgICAgICBjdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoICdsb2FkLW1vcmUtb3ZlcmxheScsICdsb2FkaW5nJyApO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSggJ2xvYWQtbW9yZS1vdmVybGF5JywgJ2xvYWRpbmcnICk7XHJcbiAgICAgICAgfSwgMTAwMCApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZFRvQ2FydEhhbmRsZXIgPSAoIGUgKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGFkZFRvQ2FydCggeyAuLi5wcm9kdWN0LCBxdHk6IDEsIHByaWNlOiBwcm9kdWN0LnByaWNlWyAwIF0gfSApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBgcHJvZHVjdCB0ZXh0LWxlZnQgJHsgYWRDbGFzcyB9YCB9PlxyXG4gICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cInByb2R1Y3QtbWVkaWFcIj5cclxuICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXsgYC9wcm9kdWN0L2RlZmF1bHQvJHsgcHJvZHVjdC5zbHVnIH1gIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FTU0VUX1VSSSArIHByb2R1Y3QucGljdHVyZXNbIDAgXS51cmwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGQ9eyA1MDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZmZlY3Q9XCJvcGFjaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMzhcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5waWN0dXJlcy5sZW5ndGggPj0gMiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInByb2R1Y3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FTU0VUX1VSSSArIHByb2R1Y3QucGljdHVyZXNbIDEgXS51cmwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZD17IDUwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjMzOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0PVwib3BhY2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlckNsYXNzTmFtZT1cInByb2R1Y3QtaW1hZ2UtaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBwcm9kdWN0LmlzX25ldyA/IDxsYWJlbCBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLW5ld1wiPk5ldzwvbGFiZWw+IDogJycgfVxyXG4gICAgICAgICAgICAgICAgICAgIHsgcHJvZHVjdC5pc190b3AgPyA8bGFiZWwgY2xhc3NOYW1lPVwicHJvZHVjdC1sYWJlbCBsYWJlbC10b3BcIj5Ub3A8L2xhYmVsPiA6ICcnIH1cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuZGlzY291bnQgPiAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudmFyaWFudHMubGVuZ3RoID09PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicHJvZHVjdC1sYWJlbCBsYWJlbC1zYWxlXCI+eyBwcm9kdWN0LmRpc2NvdW50IH0lIE9GRjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8bGFiZWwgY2xhc3NOYW1lPVwicHJvZHVjdC1sYWJlbCBsYWJlbC1zYWxlXCI+U2FsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWFjdGlvbi12ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXsgYC9wcm9kdWN0L2RlZmF1bHQvJHsgcHJvZHVjdC5zbHVnIH1gIH0gY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QtaWNvbiBidG4tY2FydFwiIHRpdGxlPVwiR28gdG8gcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImQtaWNvbi1hcnJvdy1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QtaWNvbiBidG4tY2FydFwiIHRpdGxlPVwiQWRkIHRvIGNhcnRcIiBvbkNsaWNrPXsgYWRkVG9DYXJ0SGFuZGxlciB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImQtaWNvbi1iYWdcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QtaWNvbiBidG4td2lzaGxpc3RcIiB0aXRsZT17IGlzV2lzaGxpc3RlZCA/ICdSZW1vdmUgZnJvbSB3aXNobGlzdCcgOiAnQWRkIHRvIHdpc2hsaXN0JyB9IG9uQ2xpY2s9eyB3aXNobGlzdEhhbmRsZXIgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXsgaXNXaXNobGlzdGVkID8gXCJkLWljb24taGVhcnQtZnVsbFwiIDogXCJkLWljb24taGVhcnRcIiB9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QgYnRuLXF1aWNrdmlld1wiIHRpdGxlPVwiUXVpY2sgVmlld1wiIG9uQ2xpY2s9eyBzaG93UXVpY2t2aWV3SGFuZGxlciB9PlF1aWNrIFZpZXc8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZmlndXJlPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0NhdGVnb3J5ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuY2F0ZWdvcmllcyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuY2F0ZWdvcmllcy5tYXAoICggaXRlbSwgaW5kZXggKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXsgaXRlbS5uYW1lICsgJy0nICsgaW5kZXggfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IHsgcGF0aG5hbWU6ICcvc2hvcCcsIHF1ZXJ5OiB7IGNhdGVnb3J5OiBpdGVtLnNsdWcgfSB9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaXRlbS5uYW1lIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpbmRleCA8IHByb2R1Y3QuY2F0ZWdvcmllcy5sZW5ndGggLSAxID8gJywgJyA6IFwiXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICkgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHJvZHVjdC1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyBgL3Byb2R1Y3QvZGVmYXVsdC8keyBwcm9kdWN0LnNsdWcgfWAgfT57IHByb2R1Y3QubmFtZSB9PC9BTGluaz5cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnByaWNlWyAwIF0gIT09IHByb2R1Y3QucHJpY2VbIDEgXSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA9PT0gMCB8fCAoIHByb2R1Y3QudmFyaWFudHMubGVuZ3RoID4gMCAmJiAhcHJvZHVjdC52YXJpYW50c1sgMCBdLnByaWNlICkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnMgY2xhc3NOYW1lPVwibmV3LXByaWNlXCI+JHsgdG9EZWNpbWFsKCBwcm9kdWN0LnByaWNlWyAwIF0gKSB9PC9pbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZWwgY2xhc3NOYW1lPVwib2xkLXByaWNlXCI+JHsgdG9EZWNpbWFsKCBwcm9kdWN0LnByaWNlWyAxIF0gKSB9PC9kZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwgZGVsIGNsYXNzTmFtZT1cIm5ldy1wcmljZVwiPiR7IHRvRGVjaW1hbCggcHJvZHVjdC5wcmljZVsgMCBdICkgfSDigJMgJHsgdG9EZWNpbWFsKCBwcm9kdWN0LnByaWNlWyAxIF0gKSB9PC9kZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxpbnMgY2xhc3NOYW1lPVwibmV3LXByaWNlXCI+JHsgdG9EZWNpbWFsKCBwcm9kdWN0LnByaWNlWyAwIF0gKSB9PC9pbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5ncy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJhdGluZ3NcIiBzdHlsZT17IHsgd2lkdGg6IDIwICogcHJvZHVjdC5yYXRpbmdzICsgJyUnIH0gfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXB0ZXh0IHRvb2x0aXAtdG9wXCI+eyB0b0RlY2ltYWwoIHByb2R1Y3QucmF0aW5ncyApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXsgYC9wcm9kdWN0L2RlZmF1bHQvJHsgcHJvZHVjdC5zbHVnIH1gIH0gY2xhc3NOYW1lPVwicmF0aW5nLXJldmlld3NcIj4oIHsgcHJvZHVjdC5yZXZpZXdzIH0gcmV2aWV3cyApPC9BTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKCBzdGF0ZSApIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgd2lzaGxpc3Q6IHN0YXRlLndpc2hsaXN0LmRhdGEgPyBzdGF0ZS53aXNobGlzdC5kYXRhIDogW11cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCggbWFwU3RhdGVUb1Byb3BzLCB7IHRvZ2dsZVdpc2hsaXN0OiB3aXNobGlzdEFjdGlvbnMudG9nZ2xlV2lzaGxpc3QsIGFkZFRvQ2FydDogY2FydEFjdGlvbnMuYWRkVG9DYXJ0LCAuLi5tb2RhbEFjdGlvbnMgfSApKCBQcm9kdWN0VHdvICk7Il0sInNvdXJjZVJvb3QiOiIifQ==