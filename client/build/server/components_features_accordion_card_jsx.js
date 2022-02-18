exports.id = "components_features_accordion_card_jsx";
exports.ids = ["components_features_accordion_card_jsx"];
exports.modules = {

/***/ "./components/features/accordion/card.jsx":
/*!************************************************!*\
  !*** ./components/features/accordion/card.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Card; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/features/custom-link */ "./components/features/custom-link.jsx");
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slide-toggle */ "react-slide-toggle");
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slide_toggle__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/tristan/projects/Upsidian/ramset-ecomm/client/components/features/accordion/card.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function Card(props) {
  const {
    title,
    expanded = false,
    adClass,
    iconClass,
    type = "normal",
    url
  } = props;
  return "normal" === type ? __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_2___default()), {
    collapsed: expanded ? false : true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("div", {
    className: `card ${adClass}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: `card-header`,
    onClick: onToggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "#",
    className: `toggle-button ${toggleState.toLowerCase()}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 29
    }
  }, iconClass ? __jsx("i", {
    className: iconClass,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 41
    }
  }) : "", title ? title : "")), __jsx("div", {
    ref: setCollapsibleElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "card-body overflow-hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 29
    }
  }, props.children)))) : "parse" === type ? __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_2___default()), {
    collapsed: expanded ? false : true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: url ? url : '#',
    content: title,
    className: `parse-content ${toggleState.toLowerCase()}`,
    onClick: e => {
      onToggle();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 29
    }
  }), __jsx("div", {
    ref: setCollapsibleElement,
    className: "overflow-hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 29
    }
  }, props.children))) : __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_2___default()), {
    collapsed: expanded ? false : true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: url ? url : "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 29
    }
  }, title, __jsx("span", {
    className: `toggle-btn ${toggleState.toLowerCase()}`,
    onClick: e => {
      onToggle();
      e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 33
    }
  })), __jsx("div", {
    ref: setCollapsibleElement,
    className: "overflow-hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 29
    }
  }, props.children)));
  return '';
}

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYW1zZXQtZWNvbW0vLi9jb21wb25lbnRzL2ZlYXR1cmVzL2FjY29yZGlvbi9jYXJkLmpzeCJdLCJuYW1lcyI6WyJDYXJkIiwicHJvcHMiLCJ0aXRsZSIsImV4cGFuZGVkIiwiYWRDbGFzcyIsImljb25DbGFzcyIsInR5cGUiLCJ1cmwiLCJvblRvZ2dsZSIsInNldENvbGxhcHNpYmxlRWxlbWVudCIsInRvZ2dsZVN0YXRlIiwidG9Mb3dlckNhc2UiLCJjaGlsZHJlbiIsImUiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFFQTtBQUVlLFNBQVNBLElBQVQsQ0FBZUMsS0FBZixFQUF1QjtBQUNsQyxRQUFNO0FBQUVDLFNBQUY7QUFBU0MsWUFBUSxHQUFHLEtBQXBCO0FBQTJCQyxXQUEzQjtBQUFvQ0MsYUFBcEM7QUFBK0NDLFFBQUksR0FBRyxRQUF0RDtBQUFnRUM7QUFBaEUsTUFBd0VOLEtBQTlFO0FBRUEsU0FDSSxhQUFhSyxJQUFiLEdBQ0ksTUFBRSwyREFBRjtBQUFjLGFBQVMsRUFBR0gsUUFBUSxHQUFHLEtBQUgsR0FBVyxJQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ00sQ0FBRTtBQUFFSyxZQUFGO0FBQVlDLHlCQUFaO0FBQW1DQztBQUFuQyxHQUFGLEtBQ0U7QUFBSyxhQUFTLEVBQUksUUFBUU4sT0FBUyxFQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUksYUFBbEI7QUFBaUMsV0FBTyxFQUFHSSxRQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxxRUFBRDtBQUFPLFFBQUksRUFBQyxHQUFaO0FBQWdCLGFBQVMsRUFBSSxpQkFBaUJFLFdBQVcsQ0FBQ0MsV0FBWixFQUEyQixFQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVFOLFNBQVMsR0FDTDtBQUFHLGFBQVMsRUFBR0EsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREssR0FDNkIsRUFIOUMsRUFLTUgsS0FBSyxHQUNIQSxLQURHLEdBQ0ssRUFOaEIsQ0FESixDQURKLEVBYUk7QUFBSyxPQUFHLEVBQUdPLHFCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQywyQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ01SLEtBQUssQ0FBQ1csUUFEWixDQURKLENBYkosQ0FGUixDQURKLEdBeUJJLFlBQVlOLElBQVosR0FDSSxNQUFDLDJEQUFEO0FBQWEsYUFBUyxFQUFHSCxRQUFRLEdBQUcsS0FBSCxHQUFXLElBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTSxDQUFFO0FBQUVLLFlBQUY7QUFBWUMseUJBQVo7QUFBbUNDO0FBQW5DLEdBQUYsS0FDRSxxRUFDSSxNQUFDLHFFQUFEO0FBQ0ksUUFBSSxFQUFHSCxHQUFHLEdBQUdBLEdBQUgsR0FBUyxHQUR2QjtBQUVJLFdBQU8sRUFBR0wsS0FGZDtBQUdJLGFBQVMsRUFBSSxpQkFBaUJRLFdBQVcsQ0FBQ0MsV0FBWixFQUEyQixFQUg3RDtBQUlJLFdBQU8sRUFBS0UsQ0FBRixJQUFTO0FBQUVMLGNBQVE7QUFBSyxLQUp0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFTSTtBQUFLLE9BQUcsRUFBR0MscUJBQVg7QUFBbUMsYUFBUyxFQUFDLGlCQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ01SLEtBQUssQ0FBQ1csUUFEWixDQVRKLENBRlIsQ0FESixHQWtCSSxNQUFDLDJEQUFEO0FBQWEsYUFBUyxFQUFHVCxRQUFRLEdBQUcsS0FBSCxHQUFXLElBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTSxDQUFFO0FBQUVLLFlBQUY7QUFBWUMseUJBQVo7QUFBbUNDO0FBQW5DLEdBQUYsS0FDRSxxRUFDSSxNQUFDLHFFQUFEO0FBQU8sUUFBSSxFQUFHSCxHQUFHLEdBQUdBLEdBQUgsR0FBUyxHQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVFMLEtBRlIsRUFJSTtBQUFNLGFBQVMsRUFBSSxjQUFjUSxXQUFXLENBQUNDLFdBQVosRUFBMkIsRUFBNUQ7QUFBZ0UsV0FBTyxFQUFLRSxDQUFGLElBQVM7QUFBRUwsY0FBUTtBQUFJSyxPQUFDLENBQUNDLGNBQUY7QUFBcUIsS0FBdEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLENBREosRUFRSTtBQUFLLE9BQUcsRUFBR0wscUJBQVg7QUFBbUMsYUFBUyxFQUFDLGlCQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ01SLEtBQUssQ0FBQ1csUUFEWixDQVJKLENBRlIsQ0E1Q1o7QUE2REEsU0FBTyxFQUFQO0FBQ0gsQyIsImZpbGUiOiJjb21wb25lbnRzX2ZlYXR1cmVzX2FjY29yZGlvbl9jYXJkX2pzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9jdXN0b20tbGluayc7XHJcblxyXG5pbXBvcnQgU2xpZGVUb2dnbGUgZnJvbSAncmVhY3Qtc2xpZGUtdG9nZ2xlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmQoIHByb3BzICkge1xyXG4gICAgY29uc3QgeyB0aXRsZSwgZXhwYW5kZWQgPSBmYWxzZSwgYWRDbGFzcywgaWNvbkNsYXNzLCB0eXBlID0gXCJub3JtYWxcIiwgdXJsIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIFwibm9ybWFsXCIgPT09IHR5cGUgP1xyXG4gICAgICAgICAgICA8IFNsaWRlVG9nZ2xlIGNvbGxhcHNlZD17IGV4cGFuZGVkID8gZmFsc2UgOiB0cnVlIH0gPlxyXG4gICAgICAgICAgICAgICAgeyAoIHsgb25Ub2dnbGUsIHNldENvbGxhcHNpYmxlRWxlbWVudCwgdG9nZ2xlU3RhdGUgfSApID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGBjYXJkICR7IGFkQ2xhc3MgfWAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBgY2FyZC1oZWFkZXJgIH0gb25DbGljaz17IG9uVG9nZ2xlIH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPXsgYHRvZ2dsZS1idXR0b24gJHsgdG9nZ2xlU3RhdGUudG9Mb3dlckNhc2UoKSB9YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNsYXNzID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17IGljb25DbGFzcyB9PjwvaT4gOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGl0bGUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXsgc2V0Q29sbGFwc2libGVFbGVtZW50IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9TbGlkZVRvZ2dsZSA+IDpcclxuICAgICAgICAgICAgXCJwYXJzZVwiID09PSB0eXBlID9cclxuICAgICAgICAgICAgICAgIDxTbGlkZVRvZ2dsZSBjb2xsYXBzZWQ9eyBleHBhbmRlZCA/IGZhbHNlIDogdHJ1ZSB9ID5cclxuICAgICAgICAgICAgICAgICAgICB7ICggeyBvblRvZ2dsZSwgc2V0Q29sbGFwc2libGVFbGVtZW50LCB0b2dnbGVTdGF0ZSB9ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17IHVybCA/IHVybCA6ICcjJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17IHRpdGxlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBgcGFyc2UtY29udGVudCAkeyB0b2dnbGVTdGF0ZS50b0xvd2VyQ2FzZSgpIH1gIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCBlICkgPT4geyBvblRvZ2dsZSgpOyB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9eyBzZXRDb2xsYXBzaWJsZUVsZW1lbnQgfSBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgICAgIDwvU2xpZGVUb2dnbGUgPiA6XHJcbiAgICAgICAgICAgICAgICA8U2xpZGVUb2dnbGUgY29sbGFwc2VkPXsgZXhwYW5kZWQgPyBmYWxzZSA6IHRydWUgfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgeyAoIHsgb25Ub2dnbGUsIHNldENvbGxhcHNpYmxlRWxlbWVudCwgdG9nZ2xlU3RhdGUgfSApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXsgdXJsID8gdXJsIDogXCIjXCIgfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyBgdG9nZ2xlLWJ0biAkeyB0b2dnbGVTdGF0ZS50b0xvd2VyQ2FzZSgpIH1gIH0gb25DbGljaz17ICggZSApID0+IHsgb25Ub2dnbGUoKTsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9IH0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17IHNldENvbGxhcHNpYmxlRWxlbWVudCB9IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgPC9TbGlkZVRvZ2dsZT5cclxuICAgIClcclxuICAgIHJldHVybiAnJztcclxufSJdLCJzb3VyY2VSb290IjoiIn0=