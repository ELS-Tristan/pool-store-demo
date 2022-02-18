exports.id = "components_features_custom-link_jsx";
exports.ids = ["components_features_custom-link_jsx"];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYW1zZXQtZWNvbW0vLi9jb21wb25lbnRzL2ZlYXR1cmVzL2N1c3RvbS1saW5rLmpzeCIsIndlYnBhY2s6Ly9yYW1zZXQtZWNvbW0vLi91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yYW1zZXQtZWNvbW0vaWdub3JlZHwvaG9tZS90cmlzdGFuL3Byb2plY3RzL1Vwc2lkaWFuL3JhbXNldC1lY29tbS9jbGllbnQvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJBTGluayIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiY29udGVudCIsInN0eWxlIiwicHJvcHMiLCJwcmV2ZW50RGVmYXVsdCIsImUiLCJocmVmIiwib25DbGljayIsInBhcnNlQ29udGVudCIsInBhcnNlT3B0aW9ucyIsIm9wdGlvbnMiLCJKU09OIiwicGFyc2UiLCJyZXBsYWNlIiwiaXNJRUJyb3dzZXIiLCJzVXNyQWciLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmRleE9mIiwiaXNTYWZhcmlCcm93c2VyIiwiaXNFZGdlQnJvd3NlciIsImZpbmRJbmRleCIsImFycmF5IiwiY2IiLCJpIiwibGVuZ3RoIiwiZmluZEFycmF5SW5kZXgiLCJzZWFyY2hBcnJheSIsImh0bWwiLCJTQ1JJUFRfUkVHRVgiLCJ0ZXN0IiwiX19odG1sIiwic3RpY2t5SGVhZGVySGFuZGxlciIsInRvcCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm9mZnNldFRvcCIsInN0aWNreUhlYWRlciIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiaW5uZXJXaWR0aCIsImNsYXNzTGlzdCIsImFkZCIsIm5ld05vZGUiLCJjcmVhdGVFbGVtZW50IiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsImluc2VydEFkamFjZW50RWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsInJlbW92ZSIsInJlbW92ZUF0dHJpYnV0ZSIsIm91dGVyV2lkdGgiLCJjb250YWlucyIsInJlc2l6ZUhhbmRsZXIiLCJ3aWR0aCIsImF0dHJpIiwiYm9keUNsYXNzZXMiLCJ2YWx1ZSIsInNwbGl0IiwiZmlsdGVyIiwiaXRlbSIsInN0aWNreUZvb3RlckhhbmRsZXIiLCJzdGlja3lGb290ZXIiLCJwYXJhbGxheEhhbmRsZXIiLCJwYXJhbGxheEl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcmFsbGF4IiwieVBvcyIsInBhcmFsbGF4U3BlZWQiLCJwYXJzZUludCIsInNwZWVkIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwic2hvd1Njcm9sbFRvcEhhbmRsZXIiLCJzY3JvbGxUb3AiLCJzY3JvbGxUb3BIYW5kbGVyIiwiaXNDdXN0b20iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwb3MiLCJ0aW1lcklkIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwic2Nyb2xsQnkiLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwidmlkZW9IYW5kbGVyIiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudFRhcmdldCIsImNsb3Nlc3QiLCJ2aWRlbyIsInBhdXNlIiwicGxheSIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZXRUb3RhbFByaWNlIiwiY2FydEl0ZW1zIiwidG90YWwiLCJwcmljZSIsInF0eSIsImdldENhcnRDb3VudCIsInRvRGVjaW1hbCIsImZpeGVkQ291bnQiLCJ0b0xvY2FsZVN0cmluZyIsInVuZGVmaW5lZCIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsIm1heGltdW1GcmFjdGlvbkRpZ2l0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVlLFNBQVNBLEtBQVQsT0FBa0U7QUFBQSxNQUFuRDtBQUFFQyxZQUFGO0FBQVlDLGFBQVo7QUFBdUJDLFdBQXZCO0FBQWdDQztBQUFoQyxHQUFtRDtBQUFBLE1BQVRD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bEQsU0FBT0osS0FBSyxDQUFDSyxjQUFOLENBQXNCQyxTQUF0QixFQUFpQztBQUFFQyx5QkFBcUIsRUFBRUgsVUFBekI7QUFBcUNJLHlCQUFxQixFQUFFSjtBQUE1RCxHQUFqQyxDQUFQO0FBQ0gsQ0FGTSxDOzs7Ozs7Ozs7O0FDeFRQLGUiLCJmaWxlIjoiY29tcG9uZW50c19mZWF0dXJlc19jdXN0b20tbGlua19qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgeyBwYXJzZUNvbnRlbnQgfSBmcm9tICd+L3V0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFMaW5rKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgY29udGVudCwgc3R5bGUsIC4uLnByb3BzIH0pIHtcclxuXHJcbiAgICBjb25zdCBwcmV2ZW50RGVmYXVsdCA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLmhyZWYgPT09ICcjJykge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJvcHMub25DbGljaykge1xyXG4gICAgICAgICAgICBwcm9wcy5vbkNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgY29udGVudCA/XHJcbiAgICAgICAgICAgIDxMaW5rIHsuLi5wcm9wc30gPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHN0eWxlPXtzdHlsZX0gb25DbGljaz17cHJldmVudERlZmF1bHR9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXtwYXJzZUNvbnRlbnQoY29udGVudCl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPiA6XHJcbiAgICAgICAgICAgIDxMaW5rIHsuLi5wcm9wc30gPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHN0eWxlPXtzdHlsZX0gb25DbGljaz17cHJldmVudERlZmF1bHR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgKVxyXG59IiwiLyoqXHJcbiAqIHV0aWxzIHRvIHBhcnNlIG9wdGlvbnMgc3RyaW5nIHRvIG9iamVjdFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucyBcclxuICogQHJldHVybiB7b2JqZWN0fVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHBhcnNlT3B0aW9ucyA9IGZ1bmN0aW9uICggb3B0aW9ucyApIHtcclxuICAgIGlmICggXCJzdHJpbmdcIiA9PT0gdHlwZW9mIG9wdGlvbnMgKSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoIG9wdGlvbnMucmVwbGFjZSggLycvZywgJ1wiJyApLnJlcGxhY2UoICc7JywgJycgKSApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHt9O1xyXG59XHJcblxyXG4vKipcclxuICogdXRpbHMgdG8gZGVjdGVjdCBJRSBicm93c2VyXHJcbiAqIEByZXR1cm4ge2Jvb2x9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNJRUJyb3dzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgc1VzckFnID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICAgIGlmICggc1VzckFnLmluZGV4T2YoIFwiVHJpZGVudFwiICkgPiAtMSApIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiB1dGlscyB0byBkZXRlY3Qgc2FmYXJpIGJyb3dzZXJcclxuICogQHJldHVybiB7Ym9vbH1cclxuICovXHJcbmV4cG9ydCBjb25zdCBpc1NhZmFyaUJyb3dzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgc1VzckFnID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICAgIGlmICggc1VzckFnLmluZGV4T2YoICdTYWZhcmknICkgIT09IC0xICYmIHNVc3JBZy5pbmRleE9mKCAnQ2hyb21lJyApID09PSAtMSApXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiB1dGlscyB0byBkZXRlY3QgRWRnZSBicm93c2VyXHJcbiAqIEByZXR1cm4ge2Jvb2x9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNFZGdlQnJvd3NlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBzVXNyQWcgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gICAgaWYgKCBzVXNyQWcuaW5kZXhPZiggXCJFZGdlXCIgKSA+IC0xIClcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIHV0aWxzIHRvIGZpbmQgaW5kZXggaW4gYXJyYXlcclxuICogQHBhcmFtIHthcnJheX0gYXJyYXlcclxuICogQHBhcmFtIHtjYWxsYmFja30gY2JcclxuICogQHJldHVybnMge251bWJlcn0gaW5kZXhcclxuICovXHJcbmV4cG9ydCBjb25zdCBmaW5kSW5kZXggPSBmdW5jdGlvbiAoIGFycmF5LCBjYiApIHtcclxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrICkge1xyXG4gICAgICAgIGlmICggY2IoIGFycmF5WyBpIF0gKSApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIC0xO1xyXG59XHJcblxyXG4vKipcclxuICogdXRpbHMgdG8gZ2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgZmlyc3QgZWxlbWVudCBvZiBzZWFyY2ggYXJyYXkgaW4gYXJyYXlcclxuICogQHBhcmFtIHthcnJheX0gYXJyYXlcclxuICogQHBhcmFtIHthcnJheX0gc2VhcmNoQXJyYXlcclxuICogQHBhcmFtIHtjYWxsYmFja30gY2JcclxuICogQHJldHVybnMge251bWJlcn0gaW5kZXhcclxuICovXHJcbmV4cG9ydCBjb25zdCBmaW5kQXJyYXlJbmRleCA9IGZ1bmN0aW9uICggYXJyYXksIHNlYXJjaEFycmF5LCBjYiApIHtcclxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHNlYXJjaEFycmF5Lmxlbmd0aDsgaSsrICkge1xyXG4gICAgICAgIGlmICggY2IoIHNlYXJjaEFycmF5WyBpIF0gKSApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIC0xO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIHV0aWxzIHRvIHJlbW92ZSBhbGwgWFNTICBhdHRhY2tzIHBvdGVudGlhbFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gaHRtbFxyXG4gKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcGFyc2VDb250ZW50ID0gKCBodG1sICkgPT4ge1xyXG4gICAgY29uc3QgU0NSSVBUX1JFR0VYID0gLzxzY3JpcHRcXGJbXjxdKig/Oig/ITxcXC9zY3JpcHQ+KTxbXjxdKikqPFxcL3NjcmlwdD4vZ2k7XHJcblxyXG4gICAgLy9SZW1vdmluZyB0aGUgPHNjcmlwdD4gdGFnc1xyXG4gICAgd2hpbGUgKCBTQ1JJUFRfUkVHRVgudGVzdCggaHRtbCApICkge1xyXG4gICAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoIFNDUklQVF9SRUdFWCwgJycgKTtcclxuICAgIH1cclxuXHJcbiAgICAvL1JlbW92aW5nIGFsbCBldmVudHMgZnJvbSB0YWdzLi4uXHJcbiAgICBodG1sID0gaHRtbC5yZXBsYWNlKCAvIG9uXFx3Kz1cIlteXCJdKlwiL2csICcnICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBfX2h0bWw6IGh0bWxcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFwcGx5IHN0aWNreSBoZWFkZXJcclxuICovXHJcbmV4cG9ydCBjb25zdCBzdGlja3lIZWFkZXJIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdtYWluJyApID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJ21haW4nICkub2Zmc2V0VG9wIDogMzAwO1xyXG5cclxuICAgIGxldCBzdGlja3lIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnN0aWNreS1oZWFkZXInICk7XHJcbiAgICBsZXQgaGVpZ2h0ID0gMDtcclxuXHJcbiAgICBpZiAoIHN0aWNreUhlYWRlciApIHtcclxuICAgICAgICBoZWlnaHQgPSBzdGlja3lIZWFkZXIub2Zmc2V0SGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICggd2luZG93LnBhZ2VZT2Zmc2V0ID49IHRvcCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+PSA5OTIgKSB7XHJcbiAgICAgICAgaWYgKCBzdGlja3lIZWFkZXIgKSB7XHJcbiAgICAgICAgICAgIHN0aWNreUhlYWRlci5jbGFzc0xpc3QuYWRkKCAnZml4ZWQnICk7XHJcbiAgICAgICAgICAgIGlmICggIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuc3RpY2t5LXdyYXBwZXInICkgKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKTtcclxuICAgICAgICAgICAgICAgIG5ld05vZGUuY2xhc3NOYW1lID0gXCJzdGlja3ktd3JhcHBlclwiO1xyXG4gICAgICAgICAgICAgICAgc3RpY2t5SGVhZGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKCBuZXdOb2RlLCBzdGlja3lIZWFkZXIgKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuc3RpY2t5LXdyYXBwZXInICkuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCAnYmVmb3JlZW5kJywgc3RpY2t5SGVhZGVyICk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnN0aWNreS13cmFwcGVyJyApLnNldEF0dHJpYnV0ZSggXCJzdHlsZVwiLCBcImhlaWdodDogXCIgKyBoZWlnaHQgKyBcInB4XCIgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCAhZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5zdGlja3ktd3JhcHBlcicgKS5nZXRBdHRyaWJ1dGUoIFwic3R5bGVcIiApICkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5zdGlja3ktd3JhcHBlcicgKS5zZXRBdHRyaWJ1dGUoIFwic3R5bGVcIiwgXCJoZWlnaHQ6IFwiICsgaGVpZ2h0ICsgXCJweFwiICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICggc3RpY2t5SGVhZGVyICkge1xyXG4gICAgICAgICAgICBzdGlja3lIZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSggJ2ZpeGVkJyApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnN0aWNreS13cmFwcGVyJyApICkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnN0aWNreS13cmFwcGVyJyApLnJlbW92ZUF0dHJpYnV0ZSggXCJzdHlsZVwiICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICggd2luZG93Lm91dGVyV2lkdGggPj0gOTkyICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdib2R5JyApLmNsYXNzTGlzdC5jb250YWlucyggJ3JpZ2h0LXNpZGViYXItYWN0aXZlJyApICkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdib2R5JyApLmNsYXNzTGlzdC5yZW1vdmUoICdyaWdodC1zaWRlYmFyLWFjdGl2ZScgKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZCBvciByZW1vdmUgc2V0dGluZ3Mgd2hlbiB0aGUgd2luZG93IGlzIHJlc2l6ZWRcclxuICovXHJcbmV4cG9ydCBjb25zdCByZXNpemVIYW5kbGVyID0gZnVuY3Rpb24gKCB3aWR0aCA9IDk5MiwgYXR0cmkgPSAncmlnaHQtc2lkZWJhci1hY3RpdmUnICkge1xyXG4gICAgbGV0IGJvZHlDbGFzc2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggXCJib2R5XCIgKSAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBcImJvZHlcIiApLmNsYXNzTGlzdDtcclxuICAgIGJvZHlDbGFzc2VzID0gYm9keUNsYXNzZXMudmFsdWUuc3BsaXQoICcgJyApLmZpbHRlciggaXRlbSA9PiBpdGVtICE9PSAnaG9tZScgJiYgaXRlbSAhPT0gJ2xvYWRlZCcgKTtcclxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGJvZHlDbGFzc2VzLmxlbmd0aDsgaSsrICkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIFwiYm9keVwiICkgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJ2JvZHknICkuY2xhc3NMaXN0LnJlbW92ZSggYm9keUNsYXNzZXNbIGkgXSApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQXBwbHkgc3RpY2t5IGZvb3RlclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHN0aWNreUZvb3RlckhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgc3RpY2t5Rm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5zdGlja3ktZm9vdGVyJyApO1xyXG4gICAgbGV0IHRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdtYWluJyApID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJ21haW4nICkub2Zmc2V0VG9wIDogMzAwO1xyXG5cclxuICAgIGxldCBoZWlnaHQgPSAwO1xyXG5cclxuICAgIGlmICggc3RpY2t5Rm9vdGVyICkge1xyXG4gICAgICAgIGhlaWdodCA9IHN0aWNreUZvb3Rlci5vZmZzZXRIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCB3aW5kb3cucGFnZVlPZmZzZXQgPj0gdG9wICYmIHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4ICkge1xyXG4gICAgICAgIGlmICggc3RpY2t5Rm9vdGVyICkge1xyXG4gICAgICAgICAgICBzdGlja3lGb290ZXIuY2xhc3NMaXN0LmFkZCggJ2ZpeGVkJyApO1xyXG4gICAgICAgICAgICBpZiAoICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnN0aWNreS1jb250ZW50LXdyYXBwZXInICkgKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKTtcclxuICAgICAgICAgICAgICAgIG5ld05vZGUuY2xhc3NOYW1lID0gXCJzdGlja3ktY29udGVudC13cmFwcGVyXCI7XHJcbiAgICAgICAgICAgICAgICBzdGlja3lGb290ZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoIG5ld05vZGUsIHN0aWNreUZvb3RlciApO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5zdGlja3ktY29udGVudC13cmFwcGVyJyApLmluc2VydEFkamFjZW50RWxlbWVudCggJ2JlZm9yZWVuZCcsIHN0aWNreUZvb3RlciApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnN0aWNreS1jb250ZW50LXdyYXBwZXInICkuc2V0QXR0cmlidXRlKCBcInN0eWxlXCIsIFwiaGVpZ2h0OiBcIiArIGhlaWdodCArIFwicHhcIiApO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCBzdGlja3lGb290ZXIgKSB7XHJcbiAgICAgICAgICAgIHN0aWNreUZvb3Rlci5jbGFzc0xpc3QucmVtb3ZlKCAnZml4ZWQnICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuc3RpY2t5LWNvbnRlbnQtd3JhcHBlcicgKSApIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5zdGlja3ktY29udGVudC13cmFwcGVyJyApLnJlbW92ZUF0dHJpYnV0ZSggXCJzdHlsZVwiICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICggd2luZG93LmlubmVyV2lkdGggPiA3NjggJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5zdGlja3ktY29udGVudC13cmFwcGVyJyApICkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuc3RpY2t5LWNvbnRlbnQtd3JhcHBlcicgKS5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiB1dGlscyB0byBtYWtlIGJhY2tncm91bmQgcGFyYWxsYXhcclxuICovXHJcbmV4cG9ydCBjb25zdCBwYXJhbGxheEhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgcGFyYWxsYXhJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcucGFyYWxsYXgnICk7XHJcblxyXG4gICAgaWYgKCBwYXJhbGxheEl0ZW1zICkge1xyXG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHBhcmFsbGF4SXRlbXMubGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSBiYWNrZ3JvdW5kIHkgUG9zaXRpb247XHJcbiAgICAgICAgICAgIGxldCBwYXJhbGxheCA9IHBhcmFsbGF4SXRlbXNbIGkgXSwgeVBvcywgcGFyYWxsYXhTcGVlZCA9IDE7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHBhcmFsbGF4LmdldEF0dHJpYnV0ZSggJ2RhdGEtb3B0aW9uJyApICkge1xyXG4gICAgICAgICAgICAgICAgcGFyYWxsYXhTcGVlZCA9IHBhcnNlSW50KCBwYXJzZU9wdGlvbnMoIHBhcmFsbGF4LmdldEF0dHJpYnV0ZSggJ2RhdGEtb3B0aW9uJyApICkuc3BlZWQgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgeVBvcyA9ICggcGFyYWxsYXgub2Zmc2V0VG9wIC0gd2luZG93LnBhZ2VZT2Zmc2V0ICkgKiA1MCAqIHBhcmFsbGF4U3BlZWQgLyBwYXJhbGxheC5vZmZzZXRUb3AgKyA1MDtcclxuXHJcbiAgICAgICAgICAgIHBhcmFsbGF4LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IFwiNTAlIFwiICsgeVBvcyArIFwiJVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIHV0aWxzIHRvIHNob3cgc2Nyb2xsVG9wIGJ1dHRvblxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNob3dTY3JvbGxUb3BIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHNjcm9sbFRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIFwiLnNjcm9sbC10b3BcIiApO1xyXG5cclxuICAgIGlmICggd2luZG93LnBhZ2VZT2Zmc2V0ID49IDc2OCApIHtcclxuICAgICAgICBzY3JvbGxUb3AuY2xhc3NMaXN0LmFkZCggXCJzaG93XCIgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2Nyb2xsVG9wLmNsYXNzTGlzdC5yZW1vdmUoIFwic2hvd1wiICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiB1dGlscyB0byBzY3JvbGwgdG8gdG9wXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsVG9wSGFuZGxlciggaXNDdXN0b20gPSB0cnVlLCBzcGVlZCA9IDE1ICkge1xyXG4gICAgbGV0IG9mZnNldFRvcCA9IDA7XHJcblxyXG4gICAgaWYgKCBpc0N1c3RvbSAmJiAhaXNFZGdlQnJvd3NlcigpICkge1xyXG4gICAgICAgIGlmICggZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5tYWluIC5jb250YWluZXIgPiAucm93JyApICkge1xyXG4gICAgICAgICAgICBvZmZzZXRUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLm1haW4gLmNvbnRhaW5lciA+IC5yb3cnICkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0IC0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5zdGlja3ktaGVhZGVyJyApLm9mZnNldEhlaWdodCArIDI7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBvZmZzZXRUb3AgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICggaXNTYWZhcmlCcm93c2VyKCkgfHwgaXNFZGdlQnJvd3NlcigpICkge1xyXG4gICAgICAgIGxldCBwb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgbGV0IHRpbWVySWQgPSBzZXRJbnRlcnZhbCggKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIHBvcyA8PSBvZmZzZXRUb3AgKSBjbGVhckludGVydmFsKCB0aW1lcklkICk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSggMCwgLXNwZWVkICk7XHJcbiAgICAgICAgICAgIHBvcyAtPSBzcGVlZDtcclxuICAgICAgICB9LCAxICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygge1xyXG4gICAgICAgICAgICB0b3A6IG9mZnNldFRvcCxcclxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgICAgfSApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogdXRpbHMgdG8gcGxheSBhbmQgcGF1c2UgdmlkZW9cclxuICovXHJcbmV4cG9ydCBjb25zdCB2aWRlb0hhbmRsZXIgPSAoIGUgKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmICggZS5jdXJyZW50VGFyZ2V0LmNsb3Nlc3QoICcucG9zdC12aWRlbycgKSApIHtcclxuICAgICAgICBsZXQgdmlkZW8gPSBlLmN1cnJlbnRUYXJnZXQuY2xvc2VzdCggJy5wb3N0LXZpZGVvJyApO1xyXG4gICAgICAgIGlmICggdmlkZW8uY2xhc3NMaXN0LmNvbnRhaW5zKCAncGxheWluZycgKSApIHtcclxuICAgICAgICAgICAgdmlkZW8uY2xhc3NMaXN0LnJlbW92ZSggJ3BsYXlpbmcnICk7XHJcbiAgICAgICAgICAgIHZpZGVvLmNsYXNzTGlzdC5hZGQoICdwYXVzZWQnICk7XHJcbiAgICAgICAgICAgIHZpZGVvLnF1ZXJ5U2VsZWN0b3IoICd2aWRlbycgKS5wYXVzZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZpZGVvLmNsYXNzTGlzdC5hZGQoICdwbGF5aW5nJyApO1xyXG4gICAgICAgICAgICB2aWRlby5xdWVyeVNlbGVjdG9yKCAndmlkZW8nICkucGxheSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmlkZW8ucXVlcnlTZWxlY3RvciggJ3ZpZGVvJyApLmFkZEV2ZW50TGlzdGVuZXIoICdlbmRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmlkZW8uY2xhc3NMaXN0LnJlbW92ZSggJ3BsYXlpbmcnICk7XHJcbiAgICAgICAgICAgIHZpZGVvLmNsYXNzTGlzdC5yZW1vdmUoICdwYXVzZWQnICk7XHJcbiAgICAgICAgfSApXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiB1dGlscyB0byBnZXQgdG90YWwgUHJpY2Ugb2YgcHJvZHVjdHMgaW4gY2FydC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRUb3RhbFByaWNlID0gY2FydEl0ZW1zID0+IHtcclxuICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICBpZiAoIGNhcnRJdGVtcyApIHtcclxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBjYXJ0SXRlbXMubGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgICAgICAgIHRvdGFsICs9IGNhcnRJdGVtc1sgaSBdLnByaWNlICogcGFyc2VJbnQoIGNhcnRJdGVtc1sgaSBdLnF0eSwgMTAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG90YWw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiB1dGlscyB0byBnZXQgbnVtYmVyIG9mIHByb2R1Y3RzIGluIGNhcnRcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRDYXJ0Q291bnQgPSBjYXJ0SXRlbXMgPT4ge1xyXG4gICAgbGV0IHRvdGFsID0gMDtcclxuXHJcbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBjYXJ0SXRlbXMubGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgICAgdG90YWwgKz0gcGFyc2VJbnQoIGNhcnRJdGVtc1sgaSBdLnF0eSwgMTAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdG90YWw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiB1dGlscyB0byBzaG93IG51bWJlciB0byBuIHBsYWNlcyBvZiBkZWNpbWFsc1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHRvRGVjaW1hbCA9ICggcHJpY2UsIGZpeGVkQ291bnQgPSAyICkgPT4ge1xyXG4gICAgcmV0dXJuIHByaWNlLnRvTG9jYWxlU3RyaW5nKCB1bmRlZmluZWQsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBmaXhlZENvdW50LCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IGZpeGVkQ291bnQgfSApO1xyXG59IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==