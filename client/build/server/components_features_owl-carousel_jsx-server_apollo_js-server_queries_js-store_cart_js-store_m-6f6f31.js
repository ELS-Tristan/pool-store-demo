exports.id = "components_features_owl-carousel_jsx-server_apollo_js-server_queries_js-store_cart_js-store_m-6f6f31";
exports.ids = ["components_features_owl-carousel_jsx-server_apollo_js-server_queries_js-store_cart_js-store_m-6f6f31"];
exports.modules = {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYW1zZXQtZWNvbW0vLi9jb21wb25lbnRzL2ZlYXR1cmVzL2N1c3RvbS1saW5rLmpzeCIsIndlYnBhY2s6Ly9yYW1zZXQtZWNvbW0vLi9jb21wb25lbnRzL2ZlYXR1cmVzL293bC1jYXJvdXNlbC5qc3giLCJ3ZWJwYWNrOi8vcmFtc2V0LWVjb21tLy4vY29tcG9uZW50cy9mZWF0dXJlcy9wcm9kdWN0L2NvbW1vbi9jYXJ0LXBvcHVwLmpzeCIsIndlYnBhY2s6Ly9yYW1zZXQtZWNvbW0vLi9zZXJ2ZXIvYXBvbGxvLmpzIiwid2VicGFjazovL3JhbXNldC1lY29tbS8uL3NlcnZlci9xdWVyaWVzLmpzIiwid2VicGFjazovL3JhbXNldC1lY29tbS8uL3N0b3JlL2NhcnQuanMiLCJ3ZWJwYWNrOi8vcmFtc2V0LWVjb21tLy4vc3RvcmUvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vcmFtc2V0LWVjb21tLy4vc3RvcmUvd2lzaGxpc3QuanMiLCJ3ZWJwYWNrOi8vcmFtc2V0LWVjb21tLy4vdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmFtc2V0LWVjb21tL2lnbm9yZWR8L2hvbWUvdHJpc3Rhbi9wcm9qZWN0cy9VcHNpZGlhbi9yYW1zZXQtZWNvbW0vY2xpZW50L25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQUxpbmsiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImNvbnRlbnQiLCJzdHlsZSIsInByb3BzIiwicHJldmVudERlZmF1bHQiLCJlIiwiaHJlZiIsIm9uQ2xpY2siLCJwYXJzZUNvbnRlbnQiLCJPd2xDYXJvdXNlbCIsImFkQ2xhc3MiLCJvcHRpb25zIiwiY2Fyb3VzZWxSZWYiLCJ1c2VSZWYiLCJkZWZhdWx0T3B0aW9ucyIsIml0ZW1zIiwibG9vcCIsIm1hcmdpbiIsInJlc3BvbnNpdmVDbGFzcyIsIm5hdiIsIm5hdlRleHQiLCJuYXZFbGVtZW50IiwiZG90cyIsInNtYXJ0U3BlZWQiLCJhdXRvcGxheSIsImF1dG9IZWlnaHQiLCJ1c2VFZmZlY3QiLCJvbkNoYW5nZVJlZiIsImV2ZW50cyIsIm9uVHJhbnNsYXRlZCIsInRhcmdldCIsIm9uQ2hhbmdlSW5kZXgiLCJpdGVtIiwiaW5kZXgiLCJPYmplY3QiLCJhc3NpZ24iLCJzZXR0aW5ncyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIlJlYWN0IiwiQ2FydFBvcHVwIiwicHJvZHVjdCIsInRvcCIsInNsdWciLCJwcm9jZXNzIiwicGljdHVyZXMiLCJ1cmwiLCJuYW1lIiwicXR5IiwidG9EZWNpbWFsIiwicHJpY2UiLCJBUElfVVJJIiwiY29uc29sZSIsImxvZyIsImFwb2xsb0NsaWVudCIsIkFwb2xsb0NsaWVudCIsInVyaSIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsIndpdGhBcG9sbG8iLCJjdXJyZW50RGVtbyIsIlBST0RVQ1RfU0lNUExFIiwiZ3FsIiwiUFJPRFVDVF9TTUFMTCIsIkdFVF9QUk9EVUNUUyIsIkdFVF9TUEVDSUFMX1BST0RVQ1RTIiwiR0VUX1BST0RVQ1QiLCJHRVRfVklERU8iLCJHRVRfU0hPUF9TSURFQkFSX0RBVEEiLCJHRVRfUE9TVFMiLCJHRVRfUE9TVCIsIkdFVF9QT1NUX1NJREVCQVJfREFUQSIsIkdFVF9IT01FX0RBVEEiLCJhY3Rpb25UeXBlcyIsIkFERF9UT19DQVJUIiwiUkVNT1ZFX0ZST01fQ0FSVCIsIlVQREFURV9DQVJUIiwiUkVGUkVTSF9TVE9SRSIsImluaXRpYWxTdGF0ZSIsImRhdGEiLCJjYXJ0UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInRtcFByb2R1Y3QiLCJwYXlsb2FkIiwiZmluZEluZGV4IiwidG1wRGF0YSIsInJlZHVjZSIsImFjYyIsImN1ciIsInB1c2giLCJwYXJzZUludCIsImNhcnQiLCJjYXJ0QWNjIiwicHJvZHVjdHMiLCJjYXJ0QWN0aW9ucyIsImFkZFRvQ2FydCIsInJlbW92ZUZyb21DYXJ0IiwidXBkYXRlQ2FydCIsImNhcnRTYWdhIiwidGFrZUV2ZXJ5Iiwic2FnYSIsInRvYXN0IiwicGVyc2lzdENvbmZpZyIsImtleVByZWZpeCIsImtleSIsInN0b3JhZ2UiLCJwZXJzaXN0UmVkdWNlciIsIk9QRU5fTU9EQUwiLCJDTE9TRV9NT0RBTCIsIk9QRU5fUVVJQ0tWSUVXIiwiQ0xPU0VfUVVJQ0tWSUVXIiwib3Blbk1vZGFsIiwicXVpY2t2aWV3Iiwic2luZ2xlU2x1ZyIsIm1vZGFsUmVkdWNlciIsIm1vZGFsQWN0aW9ucyIsImNsb3NlTW9kYWwiLCJtb2RhbFR5cGUiLCJvcGVuUXVpY2t2aWV3IiwiY2xvc2VRdWlja3ZpZXciLCJUT0dHTEVfV0lTSExJU1QiLCJSRU1PVkVfRlJPTV9XSVNITElTVCIsIndpc2hsaXN0UmVkdWNlciIsInNwbGljZSIsIndpc2hsaXN0Iiwid2lzaGxpc3RBY2MiLCJ3aXNobGlzdEFjdGlvbnMiLCJ0b2dnbGVXaXNobGlzdCIsInJlbW92ZUZyb21XaXNobGlzdCIsInBhcnNlT3B0aW9ucyIsIkpTT04iLCJwYXJzZSIsInJlcGxhY2UiLCJpc0lFQnJvd3NlciIsInNVc3JBZyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImluZGV4T2YiLCJpc1NhZmFyaUJyb3dzZXIiLCJpc0VkZ2VCcm93c2VyIiwiYXJyYXkiLCJjYiIsImkiLCJmaW5kQXJyYXlJbmRleCIsInNlYXJjaEFycmF5IiwiaHRtbCIsIlNDUklQVF9SRUdFWCIsInRlc3QiLCJfX2h0bWwiLCJzdGlja3lIZWFkZXJIYW5kbGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib2Zmc2V0VG9wIiwic3RpY2t5SGVhZGVyIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJpbm5lcldpZHRoIiwiY2xhc3NMaXN0IiwiYWRkIiwibmV3Tm9kZSIsImNyZWF0ZUVsZW1lbnQiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlIiwicmVtb3ZlQXR0cmlidXRlIiwib3V0ZXJXaWR0aCIsImNvbnRhaW5zIiwicmVzaXplSGFuZGxlciIsIndpZHRoIiwiYXR0cmkiLCJib2R5Q2xhc3NlcyIsInZhbHVlIiwic3BsaXQiLCJmaWx0ZXIiLCJzdGlja3lGb290ZXJIYW5kbGVyIiwic3RpY2t5Rm9vdGVyIiwicGFyYWxsYXhIYW5kbGVyIiwicGFyYWxsYXhJdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYXJhbGxheCIsInlQb3MiLCJwYXJhbGxheFNwZWVkIiwic3BlZWQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJzaG93U2Nyb2xsVG9wSGFuZGxlciIsInNjcm9sbFRvcCIsInNjcm9sbFRvcEhhbmRsZXIiLCJpc0N1c3RvbSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBvcyIsInRpbWVySWQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzY3JvbGxCeSIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJ2aWRlb0hhbmRsZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50VGFyZ2V0IiwiY2xvc2VzdCIsInZpZGVvIiwicGF1c2UiLCJwbGF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldFRvdGFsUHJpY2UiLCJjYXJ0SXRlbXMiLCJ0b3RhbCIsImdldENhcnRDb3VudCIsImZpeGVkQ291bnQiLCJ0b0xvY2FsZVN0cmluZyIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsIm1heGltdW1GcmFjdGlvbkRpZ2l0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVlLFNBQVNBLEtBQVQsT0FBa0U7QUFBQSxNQUFuRDtBQUFFQyxZQUFGO0FBQVlDLGFBQVo7QUFBdUJDLFdBQXZCO0FBQWdDQztBQUFoQyxHQUFtRDtBQUFBLE1BQVRDLEtBQVM7O0FBRTdFLFFBQU1DLGNBQWMsR0FBSUMsQ0FBRCxJQUFPO0FBQzFCLFFBQUlGLEtBQUssQ0FB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RixFQUFTcUssVUFBVSxHQUFHLENBQXRCLEtBQTZCO0FBQ2xELFNBQU9ySyxLQUFLLENBQUNzSyxjQUFOLENBQXNCbEwsU0FBdEIsRUFBaUM7QUFBRW1MLHlCQUFxQixFQUFFRixVQUF6QjtBQUFxQ0cseUJBQXFCLEVBQUVIO0FBQTVELEdBQWpDLENBQVA7QUFDSCxDQUZNLEM7Ozs7Ozs7Ozs7QUN4VFAsZSIsImZpbGUiOiJjb21wb25lbnRzX2ZlYXR1cmVzX293bC1jYXJvdXNlbF9qc3gtc2VydmVyX2Fwb2xsb19qcy1zZXJ2ZXJfcXVlcmllc19qcy1zdG9yZV9jYXJ0X2pzLXN0b3JlX20tNmY2ZjMxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IHsgcGFyc2VDb250ZW50IH0gZnJvbSAnfi91dGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBTGluayh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGNvbnRlbnQsIHN0eWxlLCAuLi5wcm9wcyB9KSB7XHJcblxyXG4gICAgY29uc3QgcHJldmVudERlZmF1bHQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9wcy5ocmVmID09PSAnIycpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByb3BzLm9uQ2xpY2spIHtcclxuICAgICAgICAgICAgcHJvcHMub25DbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIGNvbnRlbnQgP1xyXG4gICAgICAgICAgICA8TGluayB7Li4ucHJvcHN9ID5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBzdHlsZT17c3R5bGV9IG9uQ2xpY2s9e3ByZXZlbnREZWZhdWx0fSBkYW5nZXJvdXNseVNldElubmVySFRNTD17cGFyc2VDb250ZW50KGNvbnRlbnQpfT5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz4gOlxyXG4gICAgICAgICAgICA8TGluayB7Li4ucHJvcHN9ID5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBzdHlsZT17c3R5bGV9IG9uQ2xpY2s9e3ByZXZlbnREZWZhdWx0fT5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW93bC1jYXJvdXNlbDInO1xyXG5cclxuLy8gbGV0IHByZXZQYXRoO1xyXG5mdW5jdGlvbiBPd2xDYXJvdXNlbCAoIHByb3BzICkge1xyXG4gICAgY29uc3QgeyBhZENsYXNzLCBvcHRpb25zIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IGNhcm91c2VsUmVmID0gdXNlUmVmKCBudWxsICk7XHJcbiAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgICAgICBpdGVtczogMSxcclxuICAgICAgICBsb29wOiBmYWxzZSxcclxuICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgcmVzcG9uc2l2ZUNsYXNzOiBcInRydWVcIixcclxuICAgICAgICBuYXY6IHRydWUsXHJcbiAgICAgICAgbmF2VGV4dDogWyAnPGkgY2xhc3M9XCJkLWljb24tYW5nbGUtbGVmdFwiPicsICc8aSBjbGFzcz1cImQtaWNvbi1hbmdsZS1yaWdodFwiPicgXSxcclxuICAgICAgICBuYXZFbGVtZW50OiBcImJ1dHRvblwiLFxyXG4gICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgc21hcnRTcGVlZDogNDAwLFxyXG4gICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICBhdXRvSGVpZ2h0OiBmYWxzZVxyXG4gICAgICAgIC8vIGF1dG9wbGF5VGltZW91dDogNTAwMCxcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCBwcm9wcy5vbkNoYW5nZVJlZiApIHtcclxuICAgICAgICAgICAgcHJvcHMub25DaGFuZ2VSZWYoIGNhcm91c2VsUmVmICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgWyBjYXJvdXNlbFJlZiBdIClcclxuXHJcbiAgICBsZXQgZXZlbnRzID0ge1xyXG4gICAgICAgIG9uVHJhbnNsYXRlZDogZnVuY3Rpb24gKCBlICkge1xyXG4gICAgICAgICAgICBpZiAoICFlLnRhcmdldCApIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKCBwcm9wcy5vbkNoYW5nZUluZGV4ICkge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMub25DaGFuZ2VJbmRleCggZS5pdGVtLmluZGV4ICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzID0gT2JqZWN0LmFzc2lnbigge30sIGV2ZW50cywgcHJvcHMuZXZlbnRzICk7XHJcbiAgICBsZXQgc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKCB7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIHByb3BzLmNoaWxkcmVuID9cclxuICAgICAgICAgICAgcHJvcHMuY2hpbGRyZW4ubGVuZ3RoID4gMCB8fCAoIHByb3BzLmNoaWxkcmVuICYmIHByb3BzLmNoaWxkcmVuLmxlbmd0aCA9PT0gdW5kZWZpbmVkICkgP1xyXG4gICAgICAgICAgICAgICAgPENhcm91c2VsIHJlZj17IGNhcm91c2VsUmVmIH0gY2xhc3NOYW1lPXsgYG93bC1jYXJvdXNlbCAkeyBhZENsYXNzIH1gIH0gb3B0aW9ucz17IHNldHRpbmdzIH0gZXZlbnRzPXsgZXZlbnRzIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9XHJcbiAgICAgICAgICAgICAgICA8L0Nhcm91c2VsID5cclxuICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICA6IFwiXCJcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oIE93bENhcm91c2VsICk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBBTGluayBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvY3VzdG9tLWxpbmsnO1xyXG5cclxuaW1wb3J0IHsgdG9EZWNpbWFsIH0gZnJvbSAnfi91dGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJ0UG9wdXAgKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IHsgcHJvZHVjdCB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbmlwb3B1cC1hcmVhXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluaXBvcHVwLWJveCBzaG93XCIgc3R5bGU9eyB7IHRvcDogXCIwXCIgfSB9PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWluaXBvcHVwLXRpdGxlXCI+U3VjY2Vzc2Z1bGx5IGFkZGVkLjwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QgcHJvZHVjdC1wdXJjaGFzZWQgIHByb2R1Y3QtY2FydCBtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJwcm9kdWN0LW1lZGlhIHB1cmUtbWVkaWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyBgL3Byb2R1Y3QvZGVmYXVsdC8keyBwcm9kdWN0LnNsdWcgfWAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9eyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BU1NFVF9VUkkgKyBwcm9kdWN0LnBpY3R1cmVzWyAwIF0udXJsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjkwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI5MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyBgL3Byb2R1Y3QvZGVmYXVsdC8keyBwcm9kdWN0LnNsdWcgfWAgfSBjbGFzc05hbWU9XCJwcm9kdWN0LW5hbWVcIj57IHByb2R1Y3QubmFtZSB9PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2UtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LXF1YW50aXR5XCI+eyBwcm9kdWN0LnF0eSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPiR7IHRvRGVjaW1hbCggcHJvZHVjdC5wcmljZSApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uLWdyb3VwIGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3BhZ2VzL2NhcnRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lIGJ0bi1wcmltYXJ5IGJ0bi1yb3VuZGVkXCI+VmlldyBDYXJ0PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9wYWdlcy9jaGVja291dFwiIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLXByaW1hcnkgYnRuLXJvdW5kZWRcIj5DaGVjayBPdXQ8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgd2l0aEFwb2xsbyB9IGZyb20gJ25leHQtYXBvbGxvJztcclxuaW1wb3J0IEFwb2xsb0NsaWVudCwgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnYXBvbGxvLWJvb3N0JztcclxuXHJcbmNvbnN0IEFQSV9VUkkgPSBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TRVJWRVJfVVJMfS9ncmFwaHFsYFxyXG5jb25zb2xlLmxvZyhcIkFQSV9VUklcIilcclxuY29uc29sZS5sb2coQVBJX1VSSSlcclxuXHJcbmNvbnN0IGFwb2xsb0NsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gICAgdXJpOiBBUElfVVJJLFxyXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKClcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKGFwb2xsb0NsaWVudCk7IiwiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZydcclxuXHJcbmV4cG9ydCBjb25zdCBjdXJyZW50RGVtbyA9IGBcIjFcImA7XHJcblxyXG5jb25zdCBQUk9EVUNUX1NJTVBMRSA9IGdxbGBcclxuICAgIGZyYWdtZW50IFByb2R1Y3RTaW1wbGUgb24gUHJvZHVjdCB7XHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIHNsdWdcclxuICAgICAgICBwcmljZVxyXG4gICAgICAgIHJhdGluZ3NcclxuICAgICAgICByZXZpZXdzXHJcbiAgICAgICAgc3RvY2tcclxuICAgICAgICBzaG9ydF9kZXNjcmlwdGlvblxyXG4gICAgICAgIGlzX2ZlYXR1cmVkXHJcbiAgICAgICAgaXNfbmV3XHJcbiAgICAgICAgdW50aWxcclxuICAgICAgICBkaXNjb3VudFxyXG4gICAgICAgIHBpY3R1cmVzIHtcclxuICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgIH1cclxuICAgICAgICBzbWFsbF9waWN0dXJlcyB7XHJcbiAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXJpYW50cyB7XHJcbiAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgIHNhbGVfcHJpY2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IFBST0RVQ1RfU01BTEwgPSBncWxgXHJcbiAgICBmcmFnbWVudCBQcm9kdWN0U21hbGwgb24gUHJvZHVjdCB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgc2x1Z1xyXG4gICAgICAgIHByaWNlXHJcbiAgICAgICAgcmF0aW5nc1xyXG4gICAgICAgIHBpY3R1cmVzIHtcclxuICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgIH1cclxuICAgICAgICBzbWFsbF9waWN0dXJlcyB7XHJcbiAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyaWFudHMge1xyXG4gICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICBzYWxlX3ByaWNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BST0RVQ1RTID0gZ3FsYFxyXG4gICAgcXVlcnkgcHJvZHVjdHMoJHNlYXJjaDogU3RyaW5nLCAkY29sb3JzOiBbU3RyaW5nXSwgJHNpemVzOiBbU3RyaW5nXSwgJGJyYW5kczogW1N0cmluZ10sICRtaW5fcHJpY2U6IEludCwgJG1heF9wcmljZTogSW50LCAkY2F0ZWdvcnk6IFN0cmluZywgJHRhZzogU3RyaW5nLCAkc29ydEJ5OiBTdHJpbmcsICRmcm9tOiBJbnQsICR0bzogSW50LCAkbGlzdDogQm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgcHJvZHVjdHMoZGVtbzogJHtjdXJyZW50RGVtbyB9LCBzZWFyY2g6ICRzZWFyY2gsIGNvbG9yczogJGNvbG9ycywgc2l6ZXM6ICRzaXplcywgYnJhbmRzOiAkYnJhbmRzLCBtaW5fcHJpY2U6ICRtaW5fcHJpY2UsIG1heF9wcmljZTogJG1heF9wcmljZSwgY2F0ZWdvcnk6ICRjYXRlZ29yeSwgdGFnOiAkdGFnLCBzb3J0Qnk6ICRzb3J0QnksIGZyb206ICRmcm9tLCB0bzogJHRvICkge1xyXG4gICAgICAgICAgICBkYXRhIHtcclxuICAgICAgICAgICAgICAgIHNob3J0X2Rlc2NyaXB0aW9uIEBpbmNsdWRlKGlmOiAkbGlzdClcclxuICAgICAgICAgICAgICAgIC4uLlByb2R1Y3RTaW1wbGVcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdG90YWxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAkeyBQUk9EVUNUX1NJTVBMRSB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfU1BFQ0lBTF9QUk9EVUNUUyA9IGdxbGBcclxuICAgIHF1ZXJ5IHNwZWNpYWxQcm9kdWN0cygkZmVhdHVyZWQ6IEJvb2xlYW4gPSBmYWxzZSwgJGJlc3RTZWxsaW5nOiBCb29sZWFuID0gZmFsc2UsICR0b3BSYXRlZDogQm9vbGVhbiA9IGZhbHNlLCAkb25TYWxlOiBCb29sZWFuID0gZmFsc2UsICRjb3VudDogSW50KSB7XHJcbiAgICAgICAgc3BlY2lhbFByb2R1Y3RzKGRlbW86ICR7Y3VycmVudERlbW8gfSwgZmVhdHVyZWQ6ICRmZWF0dXJlZCwgYmVzdFNlbGxpbmc6ICRiZXN0U2VsbGluZywgdG9wUmF0ZWQ6ICR0b3BSYXRlZCwgb25TYWxlOiAkb25TYWxlLCBjb3VudDogJGNvdW50KSB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVkIEBpbmNsdWRlKGlmOiAkZmVhdHVyZWQpIHtcclxuICAgICAgICAgICAgICAgIC4uLlByb2R1Y3RTbWFsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJlc3RTZWxsaW5nIEBpbmNsdWRlKGlmOiAkYmVzdFNlbGxpbmcpIHtcclxuICAgICAgICAgICAgICAgIC4uLlByb2R1Y3RTbWFsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRvcFJhdGVkIEBpbmNsdWRlKGlmOiAkdG9wUmF0ZWQpIHtcclxuICAgICAgICAgICAgICAgIC4uLlByb2R1Y3RTbWFsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhdGVzdCBAaW5jbHVkZShpZjogJGxhdGVzdCkge1xyXG4gICAgICAgICAgICAgICAgLi4uUHJvZHVjdFNtYWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAkeyBQUk9EVUNUX1NNQUxMIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9QUk9EVUNUID0gZ3FsYFxyXG4gICAgcXVlcnkgcHJvZHVjdCgkc2x1ZzogU3RyaW5nISwgJG9ubHlEYXRhOiBCb29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBwcm9kdWN0KGRlbW86ICR7Y3VycmVudERlbW8gfSwgc2x1ZzogJHNsdWcsIG9ubHlEYXRhOiAkb25seURhdGEpIHtcclxuICAgICAgICAgICAgZGF0YSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICAgIGRpc2NvdW50XHJcbiAgICAgICAgICAgICAgICBzaG9ydF9kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgc2t1XHJcbiAgICAgICAgICAgICAgICBzdG9ja1xyXG4gICAgICAgICAgICAgICAgcmF0aW5nc1xyXG4gICAgICAgICAgICAgICAgcmV2aWV3c1xyXG4gICAgICAgICAgICAgICAgc2FsZV9jb3VudFxyXG4gICAgICAgICAgICAgICAgaXNfbmV3XHJcbiAgICAgICAgICAgICAgICBpc190b3BcclxuICAgICAgICAgICAgICAgIHVudGlsXHJcbiAgICAgICAgICAgICAgICBwaWN0dXJlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNtYWxsX3BpY3R1cmVzIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGFyZ2VfcGljdHVyZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGFncyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyYW5kcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnRzIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgICAgICAgIHNhbGVfcHJpY2VcclxuICAgICAgICAgICAgICAgICAgICBjb2xvciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHVtYiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcmV2IEBza2lwKGlmOiAkb25seURhdGEpIHtcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIHBpY3R1cmVzIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5leHQgQHNraXAoaWY6ICRvbmx5RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgcGljdHVyZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVsYXRlZCBAc2tpcChpZjogJG9ubHlEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAuLi5Qcm9kdWN0U2ltcGxlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAkeyBQUk9EVUNUX1NJTVBMRSB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfVklERU8gPSBncWxgXHJcbiAgICBxdWVyeSB2aWRlbygkc2x1ZzogU3RyaW5nISkge1xyXG4gICAgICAgIHZpZGVvKGRlbW86ICR7Y3VycmVudERlbW8gfSwgc2x1ZzogJHNsdWcpIHtcclxuICAgICAgICAgICAgZGF0YSB7XHJcbiAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9TSE9QX1NJREVCQVJfREFUQSA9IGdxbGBcclxuICAgIHF1ZXJ5IHNob3BTaWRlYmFyRGF0YSgkZmVhdHVyZWQ6IEJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHNob3BTaWRlYmFyRGF0YShkZW1vOiAke2N1cnJlbnREZW1vIH0sIGZlYXR1cmVkOiAkZmVhdHVyZWQpIHtcclxuICAgICAgICAgICAgY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmZWF0dXJlZCBAaW5jbHVkZShpZjogJGZlYXR1cmVkKSB7XHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgICAgcmF0aW5nc1xyXG4gICAgICAgICAgICAgICAgcmV2aWV3c1xyXG4gICAgICAgICAgICAgICAgcGljdHVyZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9QT1NUUyA9IGdxbGBcclxuICAgIHF1ZXJ5IHBvc3RzKCRjYXRlZ29yeTogU3RyaW5nLCAkZnJvbTogSW50LCAkdG86IEludCwgJGNhdGVnb3JpZXM6IFtTdHJpbmddKSB7XHJcbiAgICAgICAgcG9zdHMoZGVtbzogJHtjdXJyZW50RGVtbyB9LCBjYXRlZ29yeTogJGNhdGVnb3J5LCBmcm9tOiAkZnJvbSwgdG86ICR0bywgY2F0ZWdvcmllczogJGNhdGVnb3JpZXMgKSB7XHJcbiAgICAgICAgICAgIGRhdGEge1xyXG4gICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIGRhdGVcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRzXHJcbiAgICAgICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgICBhdXRob3JcclxuICAgICAgICAgICAgICAgIGxhcmdlX3BpY3R1cmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwaWN0dXJlIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc21hbGxfcGljdHVyZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZpZGVvIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRvdGFsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BPU1QgPSBncWxgXHJcbiAgICBxdWVyeSBwb3N0KCRzbHVnOiBTdHJpbmchKSB7XHJcbiAgICAgICAgcG9zdChkZW1vOiAke2N1cnJlbnREZW1vIH0sIHNsdWc6ICRzbHVnKSB7XHJcbiAgICAgICAgICAgIGRhdGEge1xyXG4gICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIGF1dGhvclxyXG4gICAgICAgICAgICAgICAgZGF0ZVxyXG4gICAgICAgICAgICAgICAgY29tbWVudHNcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRcclxuICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgIGxhcmdlX3BpY3R1cmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwaWN0dXJlIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmlkZW8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlbGF0ZWQge1xyXG4gICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIGRhdGVcclxuICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRzXHJcbiAgICAgICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICAgICAgICBwaWN0dXJlIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmlkZW8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfUE9TVF9TSURFQkFSX0RBVEEgPSBncWxgXHJcbiAgICBxdWVyeSBwb3N0U2lkYmFyRGF0YSB7XHJcbiAgICAgICAgcG9zdFNpZGViYXJEYXRhKGRlbW86ICR7Y3VycmVudERlbW8gfSkge1xyXG4gICAgICAgICAgICBjYXRlZ29yaWVzIHtcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWNlbnQge1xyXG4gICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIGRhdGVcclxuICAgICAgICAgICAgICAgIHNtYWxsX3BpY3R1cmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfSE9NRV9EQVRBID0gZ3FsYFxyXG4gICAgcXVlcnkgaW5kZXhEYXRhKCRwcm9kdWN0c0NvdW50OiBJbnQsICRwb3N0c0NvdW50OiBJbnQpIHtcclxuICAgICAgICBzcGVjaWFsUHJvZHVjdHMoZGVtbzogJHtjdXJyZW50RGVtbyB9LCBmZWF0dXJlZDogdHJ1ZSwgYmVzdFNlbGxpbmc6IHRydWUsIHRvcFJhdGVkOiB0cnVlLCBsYXRlc3Q6IHRydWUsIG9uU2FsZTogdHJ1ZSwgY291bnQ6ICRwcm9kdWN0c0NvdW50KSB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVkIHtcclxuICAgICAgICAgICAgICAgIC4uLlByb2R1Y3RTaW1wbGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBiZXN0U2VsbGluZyB7XHJcbiAgICAgICAgICAgICAgICAuLi5Qcm9kdWN0U2ltcGxlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdG9wUmF0ZWQge1xyXG4gICAgICAgICAgICAgICAgLi4uUHJvZHVjdFNpbXBsZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhdGVzdCB7XHJcbiAgICAgICAgICAgICAgICAuLi5Qcm9kdWN0U2ltcGxlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb25TYWxlIHtcclxuICAgICAgICAgICAgICAgIC4uLlByb2R1Y3RTaW1wbGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwb3N0cyhkZW1vOiAke2N1cnJlbnREZW1vIH0sIHRvOiAkcG9zdHNDb3VudCkge1xyXG4gICAgICAgICAgICBkYXRhIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICBkYXRlXHJcbiAgICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgICBjb21tZW50c1xyXG4gICAgICAgICAgICAgICAgY29udGVudFxyXG4gICAgICAgICAgICAgICAgcGljdHVyZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZpZGVvIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGFyZ2VfcGljdHVyZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICR7IFBST0RVQ1RfU0lNUExFIH1cclxuYFxyXG4iLCJpbXBvcnQgeyBwZXJzaXN0UmVkdWNlciB9IGZyb20gXCJyZWR1eC1wZXJzaXN0XCI7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJ3JlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2UnO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IHsgdGFrZUV2ZXJ5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuXHJcbmltcG9ydCBDYXJ0UG9wdXAgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL3Byb2R1Y3QvY29tbW9uL2NhcnQtcG9wdXAnO1xyXG5cclxuY29uc3QgYWN0aW9uVHlwZXMgPSB7XHJcbiAgICBBRERfVE9fQ0FSVDogJ0FERF9UT19DQVJUJyxcclxuICAgIFJFTU9WRV9GUk9NX0NBUlQ6ICdSRU1PVkVfRlJPTV9DQVJUJyxcclxuICAgIFVQREFURV9DQVJUOiAnVVBEQVRFX0NBUlQnLFxyXG4gICAgUkVGUkVTSF9TVE9SRTogJ1JFRlJFU0hfU1RPUkUnXHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGRhdGE6IFtdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhcnRSZWR1Y2VyKCBzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uICkge1xyXG4gICAgc3dpdGNoICggYWN0aW9uLnR5cGUgKSB7XHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5BRERfVE9fQ0FSVDpcclxuICAgICAgICAgICAgbGV0IHRtcFByb2R1Y3QgPSB7IC4uLmFjdGlvbi5wYXlsb2FkLnByb2R1Y3QgfTtcclxuXHJcbiAgICAgICAgICAgIGlmICggc3RhdGUuZGF0YS5maW5kSW5kZXgoIGl0ZW0gPT4gaXRlbS5uYW1lID09PSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0Lm5hbWUgKSA+IC0xICkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRtcERhdGEgPSBzdGF0ZS5kYXRhLnJlZHVjZSggKCBhY2MsIGN1ciApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGN1ci5uYW1lID09PSB0bXBQcm9kdWN0Lm5hbWUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjYy5wdXNoKCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5jdXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdHk6IHBhcnNlSW50KCBjdXIucXR5ICkgKyBwYXJzZUludCggdG1wUHJvZHVjdC5xdHkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjLnB1c2goIGN1ciApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICAgICAgICAgIH0sIFtdIClcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZGF0YTogdG1wRGF0YSB9O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGRhdGE6IFsgLi4uc3RhdGUuZGF0YSwgdG1wUHJvZHVjdCBdIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5SRU1PVkVfRlJPTV9DQVJUOlxyXG4gICAgICAgICAgICBsZXQgY2FydCA9IHN0YXRlLmRhdGEucmVkdWNlKCAoIGNhcnRBY2MsIHByb2R1Y3QgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHByb2R1Y3QubmFtZSAhPT0gYWN0aW9uLnBheWxvYWQucHJvZHVjdC5uYW1lICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcnRBY2MucHVzaCggcHJvZHVjdCApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhcnRBY2M7XHJcbiAgICAgICAgICAgIH0sIFtdICk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZGF0YTogY2FydCB9O1xyXG5cclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLlVQREFURV9DQVJUOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZGF0YTogYWN0aW9uLnBheWxvYWQucHJvZHVjdHMgfTtcclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5SRUZSRVNIX1NUT1JFOlxyXG4gICAgICAgICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjYXJ0QWN0aW9ucyA9IHtcclxuICAgIGFkZFRvQ2FydDogcHJvZHVjdCA9PiAoIHsgdHlwZTogYWN0aW9uVHlwZXMuQUREX1RPX0NBUlQsIHBheWxvYWQ6IHsgcHJvZHVjdCB9IH0gKSxcclxuICAgIHJlbW92ZUZyb21DYXJ0OiBwcm9kdWN0ID0+ICggeyB0eXBlOiBhY3Rpb25UeXBlcy5SRU1PVkVfRlJPTV9DQVJULCBwYXlsb2FkOiB7IHByb2R1Y3QgfSB9ICksXHJcbiAgICB1cGRhdGVDYXJ0OiBwcm9kdWN0cyA9PiAoIHsgdHlwZTogYWN0aW9uVHlwZXMuVVBEQVRFX0NBUlQsIHBheWxvYWQ6IHsgcHJvZHVjdHMgfSB9IClcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogY2FydFNhZ2EoKSB7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoIGFjdGlvblR5cGVzLkFERF9UT19DQVJULCBmdW5jdGlvbiogc2FnYSggZSApIHtcclxuICAgICAgICB0b2FzdCggPENhcnRQb3B1cCBwcm9kdWN0PXsgZS5wYXlsb2FkLnByb2R1Y3QgfSAvPiApO1xyXG4gICAgfSApXHJcbn1cclxuXHJcbmNvbnN0IHBlcnNpc3RDb25maWcgPSB7XHJcbiAgICBrZXlQcmVmaXg6IFwicmlvZGUtXCIsXHJcbiAgICBrZXk6IFwiY2FydFwiLFxyXG4gICAgc3RvcmFnZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwZXJzaXN0UmVkdWNlciggcGVyc2lzdENvbmZpZywgY2FydFJlZHVjZXIgKTsiLCJpbXBvcnQgeyBwZXJzaXN0UmVkdWNlciB9IGZyb20gXCJyZWR1eC1wZXJzaXN0XCI7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJ3JlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2UnO1xyXG5cclxuY29uc3QgYWN0aW9uVHlwZXMgPSB7XHJcbiAgICBPUEVOX01PREFMOiAnT1BFTl9NT0RBTCcsXHJcbiAgICBDTE9TRV9NT0RBTDogJ0NMT1NFX01PREFMJyxcclxuICAgIE9QRU5fUVVJQ0tWSUVXOiAnT1BFTl9RVUlDS1ZJRVcnLFxyXG4gICAgQ0xPU0VfUVVJQ0tWSUVXOiAnQ0xPU0VfUVVJQ0tWSUVXJyxcclxuICAgIFJFRlJFU0hfU1RPUkU6ICdSRUZSRVNIX1NUT1JFJ1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICB0eXBlOiAndmlkZW8nLFxyXG4gICAgb3Blbk1vZGFsOiBmYWxzZSxcclxuICAgIHF1aWNrdmlldzogZmFsc2UsXHJcbiAgICBzaW5nbGVTbHVnOiAnJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb2RhbFJlZHVjZXIoIHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gKSB7XHJcbiAgICBzd2l0Y2ggKCBhY3Rpb24udHlwZSApIHtcclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLk9QRU5fUVVJQ0tWSUVXOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBxdWlja3ZpZXc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzaW5nbGVTbHVnOiBhY3Rpb24ucGF5bG9hZC5zbHVnXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5DTE9TRV9RVUlDS1ZJRVc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHF1aWNrdmlldzogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLk9QRU5fTU9EQUw6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHNpbmdsZVNsdWc6IGFjdGlvbi5wYXlsb2FkLnNsdWcsXHJcbiAgICAgICAgICAgICAgICBvcGVuTW9kYWw6IHRydWVcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLkNMT1NFX01PREFMOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBvcGVuTW9kYWw6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5SRUZSRVNIX1NUT1JFOlxyXG4gICAgICAgICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtb2RhbEFjdGlvbnMgPSB7XHJcbiAgICBvcGVuTW9kYWw6IHNsdWcgPT4gKCB7IHR5cGU6IGFjdGlvblR5cGVzLk9QRU5fTU9EQUwsIHBheWxvYWQ6IHsgc2x1ZyB9IH0gKSxcclxuICAgIGNsb3NlTW9kYWw6IG1vZGFsVHlwZSA9PiAoIHsgdHlwZTogYWN0aW9uVHlwZXMuQ0xPU0VfTU9EQUwsIHBheWxvYWQ6IHsgbW9kYWxUeXBlIH0gfSApLFxyXG4gICAgb3BlblF1aWNrdmlldzogc2x1ZyA9PiAoIHsgdHlwZTogYWN0aW9uVHlwZXMuT1BFTl9RVUlDS1ZJRVcsIHBheWxvYWQ6IHsgc2x1ZyB9IH0gKSxcclxuICAgIGNsb3NlUXVpY2t2aWV3OiAoKSA9PiAoIHsgdHlwZTogYWN0aW9uVHlwZXMuQ0xPU0VfUVVJQ0tWSUVXIH0gKVxyXG59O1xyXG5cclxuY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcclxuICAgIGtleVByZWZpeDogXCJyaW9kZS1cIixcclxuICAgIGtleTogXCJtb2RhbFwiLFxyXG4gICAgc3RvcmFnZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwZXJzaXN0UmVkdWNlciggcGVyc2lzdENvbmZpZywgbW9kYWxSZWR1Y2VyICk7IiwiaW1wb3J0IHsgcGVyc2lzdFJlZHVjZXIgfSBmcm9tIFwicmVkdXgtcGVyc2lzdFwiO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tICdyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlJztcclxuXHJcbmNvbnN0IGFjdGlvblR5cGVzID0ge1xyXG4gICAgVE9HR0xFX1dJU0hMSVNUOiAnVE9HR0xFX1dJU0hMSVNUJyxcclxuICAgIFJFTU9WRV9GUk9NX1dJU0hMSVNUOiAnUkVNT1ZFX0ZST01fV0lTSExJU1QnLFxyXG4gICAgUkVGUkVTSF9TVE9SRTogJ1JFRlJFU0hfU1RPUkUnXHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGRhdGE6IFtdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdpc2hsaXN0UmVkdWNlciggc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiApIHtcclxuICAgIHN3aXRjaCAoIGFjdGlvbi50eXBlICkge1xyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuVE9HR0xFX1dJU0hMSVNUOlxyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleCggaXRlbSA9PiBpdGVtLm5hbWUgPT09IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QubmFtZSApO1xyXG4gICAgICAgICAgICBsZXQgdG1wRGF0YSA9IFsgLi4uc3RhdGUuZGF0YSBdO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBpbmRleCA9PT0gLTEgKSB7XHJcbiAgICAgICAgICAgICAgICB0bXBEYXRhLnB1c2goIGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRtcERhdGEuc3BsaWNlKCBpbmRleCApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZGF0YTogdG1wRGF0YSB9O1xyXG5cclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLlJFTU9WRV9GUk9NX1dJU0hMSVNUOlxyXG4gICAgICAgICAgICBsZXQgd2lzaGxpc3QgPSBzdGF0ZS5kYXRhLnJlZHVjZSggKCB3aXNobGlzdEFjYywgcHJvZHVjdCApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggcHJvZHVjdC5uYW1lICE9PSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0Lm5hbWUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lzaGxpc3RBY2MucHVzaCggcHJvZHVjdCApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpc2hsaXN0QWNjO1xyXG4gICAgICAgICAgICB9LCBbXSApO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGRhdGE6IHdpc2hsaXN0IH07XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuUkVGUkVTSF9TVE9SRTpcclxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgIH1cclxuICAgIHJldHVybiBzdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHdpc2hsaXN0QWN0aW9ucyA9IHtcclxuICAgIHRvZ2dsZVdpc2hsaXN0OiBwcm9kdWN0ID0+ICggeyB0eXBlOiBhY3Rpb25UeXBlcy5UT0dHTEVfV0lTSExJU1QsIHBheWxvYWQ6IHsgcHJvZHVjdCB9IH0gKSxcclxuICAgIHJlbW92ZUZyb21XaXNobGlzdDogcHJvZHVjdCA9PiAoIHsgdHlwZTogYWN0aW9uVHlwZXMuUkVNT1ZFX0ZST01fV0lTSExJU1QsIHBheWxvYWQ6IHsgcHJvZHVjdCB9IH0gKVxyXG59O1xyXG5cclxuY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcclxuICAgIGtleVByZWZpeDogXCJyaW9kZS1cIixcclxuICAgIGtleTogXCJ3aXNobGlzdFwiLFxyXG4gICAgc3RvcmFnZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwZXJzaXN0UmVkdWNlciggcGVyc2lzdENvbmZpZywgd2lzaGxpc3RSZWR1Y2VyICk7IiwiLyoqXHJcbiAqIHV0aWxzIHRvIHBhcnNlIG9wdGlvbnMgc3RyaW5nIHRvIG9iamVjdFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucyBcclxuICogQHJldHVybiB7b2JqZWN0fVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHBhcnNlT3B0aW9ucyA9IGZ1bmN0aW9uICggb3B0aW9ucyApIHtcclxuICAgIGlmICggXCJzdHJpbmdcIiA9PT0gdHlwZW9mIG9wdGlvbnMgKSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoIG9wdGlvbnMucmVwbGFjZSggLycvZywgJ1wiJyApLnJlcGxhY2UoICc7JywgJycgKSApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHt9O1xyXG59XHJcblxyXG4vKipcclxuICogdXRpbHMgdG8gZGVjdGVjdCBJRSBicm93c2VyXHJcbiAqIEByZXR1cm4ge2Jvb2x9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNJRUJyb3dzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgc1VzckFnID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICAgIGlmICggc1VzckFnLmluZGV4T2YoIFwiVHJpZGVudFwiICkgPiAtMSApIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiB1dGlscyB0byBkZXRlY3Qgc2FmYXJpIGJyb3dzZXJcclxuICogQHJldHVybiB7Ym9vbH1cclxuICovXHJcbmV4cG9ydCBjb25zdCBpc1NhZmFyaUJyb3dzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgc1VzckFnID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICAgIGlmICggc1VzckFnLmluZGV4T2YoICdTYWZhcmknICkgIT09IC0xICYmIHNVc3JBZy5pbmRleE9mKCAnQ2hyb21lJyApID09PSAtMSApXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiB1dGlscyB0byBkZXRlY3QgRWRnZSBicm93c2VyXHJcbiAqIEByZXR1cm4ge2Jvb2x9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNFZGdlQnJvd3NlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBzVXNyQWcgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gICAgaWYgKCBzVXNyQWcuaW5kZXhPZiggXCJFZGdlXCIgKSA+IC0xIClcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIHV0aWxzIHRvIGZpbmQgaW5kZXggaW4gYXJyYXlcclxuICogQHBhcmFtIHthcnJheX0gYXJyYXlcclxuICogQHBhcmFtIHtjYWxsYmFja30gY2JcclxuICogQHJldHVybnMge251bWJlcn0gaW5kZXhcclxuICovXHJcbmV4cG9ydCBjb25zdCBmaW5kSW5kZXggPSBmdW5jdGlvbiAoIGFycmF5LCBjYiApIHtcclxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrICkge1xyXG4gICAgICAgIGlmICggY2IoIGFycmF5WyBpIF0gKSApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIC0xO1xyXG59XHJcblxyXG4vKipcclxuICogdXRpbHMgdG8gZ2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgZmlyc3QgZWxlbWVudCBvZiBzZWFyY2ggYXJyYXkgaW4gYXJyYXlcclxuICogQHBhcmFtIHthcnJheX0gYXJyYXlcclxuICogQHBhcmFtIHthcnJheX0gc2VhcmNoQXJyYXlcclxuICogQHBhcmFtIHtjYWxsYmFja30gY2JcclxuICogQHJldHVybnMge251bWJlcn0gaW5kZXhcclxuICovXHJcbmV4cG9ydCBjb25zdCBmaW5kQXJyYXlJbmRleCA9IGZ1bmN0aW9uICggYXJyYXksIHNlYXJjaEFycmF5LCBjYiApIHtcclxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHNlYXJjaEFycmF5Lmxlbmd0aDsgaSsrICkge1xyXG4gICAgICAgIGlmICggY2IoIHNlYXJjaEFycmF5WyBpIF0gKSApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIC0xO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIHV0aWxzIHRvIHJlbW92ZSBhbGwgWFNTICBhdHRhY2tzIHBvdGVudGlhbFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gaHRtbFxyXG4gKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcGFyc2VDb250ZW50ID0gKCBodG1sICkgPT4ge1xyXG4gICAgY29uc3QgU0NSSVBUX1JFR0VYID0gLzxzY3JpcHRcXGJbXjxdKig/Oig/ITxcXC9zY3JpcHQ+KTxbXjxdKikqPFxcL3NjcmlwdD4vZ2k7XHJcblxyXG4gICAgLy9SZW1vdmluZyB0aGUgPHNjcmlwdD4gdGFnc1xyXG4gICAgd2hpbGUgKCBTQ1JJUFRfUkVHRVgudGVzdCggaHRtbCApICkge1xyXG4gICAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoIFNDUklQVF9SRUdFWCwgJycgKTtcclxuICAgIH1cclxuXHJcbiAgICAvL1JlbW92aW5nIGFsbCBldmVudHMgZnJvbSB0YWdzLi4uXHJcbiAgICBodG1sID0gaHRtbC5yZXBsYWNlKCAvIG9uXFx3Kz1cIlteXCJdKlwiL2csICcnICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBfX2h0bWw6IGh0bWxcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFwcGx5IHN0aWNreSBoZWFkZXJcclxuICovXHJcbmV4cG9ydCBjb25zdCBzdGlja3lIZWFkZXJIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdtYWluJyApID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJ21haW4nICkub2Zmc2V0VG9wIDogMzAwO1xyXG5cclxuICAgIGxldCBzdGlja3lIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnN0aWNreS1oZWFkZXInICk7XHJcbiAgICBsZXQgaGVpZ2h0ID0gMDtcclxuXHJcbiAgICBpZiAoIHN0aWNreUhlYWRlciApIHtcclxuICAgICAgICBoZWlnaHQgPSBzdGlja3lIZWFkZXIub2Zmc2V0SGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICggd2luZG93LnBhZ2VZT2Zmc2V0ID49IHRvcCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+PSA5OTIgKSB7XHJcbiAgICAgICAgaWYgKCBzdGlja3lIZWFkZXIgKSB7XHJcbiAgICAgICAgICAgIHN0aWNreUhlYWRlci5jbGFzc0xpc3QuYWRkKCAnZml4ZWQnICk7XHJcbiAgICAgICAgICAgIGlmICggIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuc3RpY2t5LXdyYXBwZXInICkgKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKTtcclxuICAgICAgICAgICAgICAgIG5ld05vZGUuY2xhc3NOYW1lID0gXCJzdGlja3ktd3JhcHBlclwiO1xyXG4gICAgICAgICAgICAgICAgc3RpY2t5SGVhZGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKCBuZXdOb2RlLCBzdGlja3lIZWFkZXIgKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuc3RpY2t5LXdyYXBwZXInICkuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCAnYmVmb3JlZW5kJywgc3RpY2t5SGVhZGVyICk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnN0aWNreS13cmFwcGVyJyApLnNldEF0dHJpYnV0ZSggXCJzdHlsZVwiLCBcImhlaWdodDogXCIgKyBoZWlnaHQgKyBcInB4XCIgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCAhZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5zdGlja3ktd3JhcHBlcicgKS5nZXRBdHRyaWJ1dGUoIFwic3R5bGVcIiApICkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5zdGlja3ktd3JhcHBlcicgKS5zZXRBdHRyaWJ1dGUoIFwic3R5bGVcIiwgXCJoZWlnaHQ6IFwiICsgaGVpZ2h0ICsgXCJweFwiICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICggc3RpY2t5SGVhZGVyICkge1xyXG4gICAgICAgICAgICBzdGlja3lIZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSggJ2ZpeGVkJyApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnN0aWNreS13cmFwcGVyJyApICkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnN0aWNreS13cmFwcGVyJyApLnJlbW92ZUF0dHJpYnV0ZSggXCJzdHlsZVwiICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICggd2luZG93Lm91dGVyV2lkdGggPj0gOTkyICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdib2R5JyApLmNsYXNzTGlzdC5jb250YWlucyggJ3JpZ2h0LXNpZGViYXItYWN0aXZlJyApICkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdib2R5JyApLmNsYXNzTGlzdC5yZW1vdmUoICdyaWdodC1zaWRlYmFyLWFjdGl2ZScgKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZCBvciByZW1vdmUgc2V0dGluZ3Mgd2hlbiB0aGUgd2luZG93IGlzIHJlc2l6ZWRcclxuICovXHJcbmV4cG9ydCBjb25zdCByZXNpemVIYW5kbGVyID0gZnVuY3Rpb24gKCB3aWR0aCA9IDk5MiwgYXR0cmkgPSAncmlnaHQtc2lkZWJhci1hY3RpdmUnICkge1xyXG4gICAgbGV0IGJvZHlDbGFzc2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggXCJib2R5XCIgKSAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBcImJvZHlcIiApLmNsYXNzTGlzdDtcclxuICAgIGJvZHlDbGFzc2VzID0gYm9keUNsYXNzZXMudmFsdWUuc3BsaXQoICcgJyApLmZpbHRlciggaXRlbSA9PiBpdGVtICE9PSAnaG9tZScgJiYgaXRlbSAhPT0gJ2xvYWRlZCcgKTtcclxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGJvZHlDbGFzc2VzLmxlbmd0aDsgaSsrICkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIFwiYm9keVwiICkgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJ2JvZHknICkuY2xhc3NMaXN0LnJlbW92ZSggYm9keUNsYXNzZXNbIGkgXSApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQXBwbHkgc3RpY2t5IGZvb3RlclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHN0aWNreUZvb3RlckhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgc3RpY2t5Rm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5zdGlja3ktZm9vdGVyJyApO1xyXG4gICAgbGV0IHRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdtYWluJyApID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJ21haW4nICkub2Zmc2V0VG9wIDogMzAwO1xyXG5cclxuICAgIGxldCBoZWlnaHQgPSAwO1xyXG5cclxuICAgIGlmICggc3RpY2t5Rm9vdGVyICkge1xyXG4gICAgICAgIGhlaWdodCA9IHN0aWNreUZvb3Rlci5vZmZzZXRIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCB3aW5kb3cucGFnZVlPZmZzZXQgPj0gdG9wICYmIHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4ICkge1xyXG4gICAgICAgIGlmICggc3RpY2t5Rm9vdGVyICkge1xyXG4gICAgICAgICAgICBzdGlja3lGb290ZXIuY2xhc3NMaXN0LmFkZCggJ2ZpeGVkJyApO1xyXG4gICAgICAgICAgICBpZiAoICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnN0aWNreS1jb250ZW50LXdyYXBwZXInICkgKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKTtcclxuICAgICAgICAgICAgICAgIG5ld05vZGUuY2xhc3NOYW1lID0gXCJzdGlja3ktY29udGVudC13cmFwcGVyXCI7XHJcbiAgICAgICAgICAgICAgICBzdGlja3lGb290ZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoIG5ld05vZGUsIHN0aWNreUZvb3RlciApO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5zdGlja3ktY29udGVudC13cmFwcGVyJyApLmluc2VydEFkamFjZW50RWxlbWVudCggJ2JlZm9yZWVuZCcsIHN0aWNreUZvb3RlciApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnN0aWNreS1jb250ZW50LXdyYXBwZXInICkuc2V0QXR0cmlidXRlKCBcInN0eWxlXCIsIFwiaGVpZ2h0OiBcIiArIGhlaWdodCArIFwicHhcIiApO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCBzdGlja3lGb290ZXIgKSB7XHJcbiAgICAgICAgICAgIHN0aWNreUZvb3Rlci5jbGFzc0xpc3QucmVtb3ZlKCAnZml4ZWQnICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuc3RpY2t5LWNvbnRlbnQtd3JhcHBlcicgKSApIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5zdGlja3ktY29udGVudC13cmFwcGVyJyApLnJlbW92ZUF0dHJpYnV0ZSggXCJzdHlsZVwiICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICggd2luZG93LmlubmVyV2lkdGggPiA3NjggJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5zdGlja3ktY29udGVudC13cmFwcGVyJyApICkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuc3RpY2t5LWNvbnRlbnQtd3JhcHBlcicgKS5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiB1dGlscyB0byBtYWtlIGJhY2tncm91bmQgcGFyYWxsYXhcclxuICovXHJcbmV4cG9ydCBjb25zdCBwYXJhbGxheEhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgcGFyYWxsYXhJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcucGFyYWxsYXgnICk7XHJcblxyXG4gICAgaWYgKCBwYXJhbGxheEl0ZW1zICkge1xyXG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHBhcmFsbGF4SXRlbXMubGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSBiYWNrZ3JvdW5kIHkgUG9zaXRpb247XHJcbiAgICAgICAgICAgIGxldCBwYXJhbGxheCA9IHBhcmFsbGF4SXRlbXNbIGkgXSwgeVBvcywgcGFyYWxsYXhTcGVlZCA9IDE7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHBhcmFsbGF4LmdldEF0dHJpYnV0ZSggJ2RhdGEtb3B0aW9uJyApICkge1xyXG4gICAgICAgICAgICAgICAgcGFyYWxsYXhTcGVlZCA9IHBhcnNlSW50KCBwYXJzZU9wdGlvbnMoIHBhcmFsbGF4LmdldEF0dHJpYnV0ZSggJ2RhdGEtb3B0aW9uJyApICkuc3BlZWQgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgeVBvcyA9ICggcGFyYWxsYXgub2Zmc2V0VG9wIC0gd2luZG93LnBhZ2VZT2Zmc2V0ICkgKiA1MCAqIHBhcmFsbGF4U3BlZWQgLyBwYXJhbGxheC5vZmZzZXRUb3AgKyA1MDtcclxuXHJcbiAgICAgICAgICAgIHBhcmFsbGF4LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IFwiNTAlIFwiICsgeVBvcyArIFwiJVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIHV0aWxzIHRvIHNob3cgc2Nyb2xsVG9wIGJ1dHRvblxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNob3dTY3JvbGxUb3BIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHNjcm9sbFRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIFwiLnNjcm9sbC10b3BcIiApO1xyXG5cclxuICAgIGlmICggd2luZG93LnBhZ2VZT2Zmc2V0ID49IDc2OCApIHtcclxuICAgICAgICBzY3JvbGxUb3AuY2xhc3NMaXN0LmFkZCggXCJzaG93XCIgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2Nyb2xsVG9wLmNsYXNzTGlzdC5yZW1vdmUoIFwic2hvd1wiICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiB1dGlscyB0byBzY3JvbGwgdG8gdG9wXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsVG9wSGFuZGxlciggaXNDdXN0b20gPSB0cnVlLCBzcGVlZCA9IDE1ICkge1xyXG4gICAgbGV0IG9mZnNldFRvcCA9IDA7XHJcblxyXG4gICAgaWYgKCBpc0N1c3RvbSAmJiAhaXNFZGdlQnJvd3NlcigpICkge1xyXG4gICAgICAgIGlmICggZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5tYWluIC5jb250YWluZXIgPiAucm93JyApICkge1xyXG4gICAgICAgICAgICBvZmZzZXRUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLm1haW4gLmNvbnRhaW5lciA+IC5yb3cnICkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0IC0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5zdGlja3ktaGVhZGVyJyApLm9mZnNldEhlaWdodCArIDI7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBvZmZzZXRUb3AgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICggaXNTYWZhcmlCcm93c2VyKCkgfHwgaXNFZGdlQnJvd3NlcigpICkge1xyXG4gICAgICAgIGxldCBwb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgbGV0IHRpbWVySWQgPSBzZXRJbnRlcnZhbCggKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIHBvcyA8PSBvZmZzZXRUb3AgKSBjbGVhckludGVydmFsKCB0aW1lcklkICk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSggMCwgLXNwZWVkICk7XHJcbiAgICAgICAgICAgIHBvcyAtPSBzcGVlZDtcclxuICAgICAgICB9LCAxICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygge1xyXG4gICAgICAgICAgICB0b3A6IG9mZnNldFRvcCxcclxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgICAgfSApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogdXRpbHMgdG8gcGxheSBhbmQgcGF1c2UgdmlkZW9cclxuICovXHJcbmV4cG9ydCBjb25zdCB2aWRlb0hhbmRsZXIgPSAoIGUgKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmICggZS5jdXJyZW50VGFyZ2V0LmNsb3Nlc3QoICcucG9zdC12aWRlbycgKSApIHtcclxuICAgICAgICBsZXQgdmlkZW8gPSBlLmN1cnJlbnRUYXJnZXQuY2xvc2VzdCggJy5wb3N0LXZpZGVvJyApO1xyXG4gICAgICAgIGlmICggdmlkZW8uY2xhc3NMaXN0LmNvbnRhaW5zKCAncGxheWluZycgKSApIHtcclxuICAgICAgICAgICAgdmlkZW8uY2xhc3NMaXN0LnJlbW92ZSggJ3BsYXlpbmcnICk7XHJcbiAgICAgICAgICAgIHZpZGVvLmNsYXNzTGlzdC5hZGQoICdwYXVzZWQnICk7XHJcbiAgICAgICAgICAgIHZpZGVvLnF1ZXJ5U2VsZWN0b3IoICd2aWRlbycgKS5wYXVzZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZpZGVvLmNsYXNzTGlzdC5hZGQoICdwbGF5aW5nJyApO1xyXG4gICAgICAgICAgICB2aWRlby5xdWVyeVNlbGVjdG9yKCAndmlkZW8nICkucGxheSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmlkZW8ucXVlcnlTZWxlY3RvciggJ3ZpZGVvJyApLmFkZEV2ZW50TGlzdGVuZXIoICdlbmRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmlkZW8uY2xhc3NMaXN0LnJlbW92ZSggJ3BsYXlpbmcnICk7XHJcbiAgICAgICAgICAgIHZpZGVvLmNsYXNzTGlzdC5yZW1vdmUoICdwYXVzZWQnICk7XHJcbiAgICAgICAgfSApXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiB1dGlscyB0byBnZXQgdG90YWwgUHJpY2Ugb2YgcHJvZHVjdHMgaW4gY2FydC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRUb3RhbFByaWNlID0gY2FydEl0ZW1zID0+IHtcclxuICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICBpZiAoIGNhcnRJdGVtcyApIHtcclxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBjYXJ0SXRlbXMubGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgICAgICAgIHRvdGFsICs9IGNhcnRJdGVtc1sgaSBdLnByaWNlICogcGFyc2VJbnQoIGNhcnRJdGVtc1sgaSBdLnF0eSwgMTAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG90YWw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiB1dGlscyB0byBnZXQgbnVtYmVyIG9mIHByb2R1Y3RzIGluIGNhcnRcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRDYXJ0Q291bnQgPSBjYXJ0SXRlbXMgPT4ge1xyXG4gICAgbGV0IHRvdGFsID0gMDtcclxuXHJcbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBjYXJ0SXRlbXMubGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgICAgdG90YWwgKz0gcGFyc2VJbnQoIGNhcnRJdGVtc1sgaSBdLnF0eSwgMTAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdG90YWw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiB1dGlscyB0byBzaG93IG51bWJlciB0byBuIHBsYWNlcyBvZiBkZWNpbWFsc1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHRvRGVjaW1hbCA9ICggcHJpY2UsIGZpeGVkQ291bnQgPSAyICkgPT4ge1xyXG4gICAgcmV0dXJuIHByaWNlLnRvTG9jYWxlU3RyaW5nKCB1bmRlZmluZWQsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBmaXhlZENvdW50LCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IGZpeGVkQ291bnQgfSApO1xyXG59IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==