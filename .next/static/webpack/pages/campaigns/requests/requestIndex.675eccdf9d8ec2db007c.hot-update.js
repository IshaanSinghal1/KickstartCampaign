"use strict";
self["webpackHotUpdate_N_E"]("pages/campaigns/requests/requestIndex",{

/***/ "./components/RequestRow.js":
/*!**********************************!*\
  !*** ./components/RequestRow.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RequestRow; }
/* harmony export */ });
/* harmony import */ var D_BlockchainCodes_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_BlockchainCodes_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_BlockchainCodes_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_BlockchainCodes_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var D_BlockchainCodes_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_BlockchainCodes_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_BlockchainCodes_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var D_BlockchainCodes_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_BlockchainCodes_kickstarter_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_BlockchainCodes_kickstarter_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(D_BlockchainCodes_kickstarter_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ethereum/campaign */ "./ethereum/campaign.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
/* module decorator */ module = __webpack_require__.hmd(module);








var _jsxFileName = "D:\\BlockchainCodes\\kickstarter\\components\\RequestRow.js";


function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,D_BlockchainCodes_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,D_BlockchainCodes_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,D_BlockchainCodes_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var RequestRow = /*#__PURE__*/function (_Component) {
  (0,D_BlockchainCodes_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(RequestRow, _Component);

  var _super = _createSuper(RequestRow);

  function RequestRow() {
    var _this;

    (0,D_BlockchainCodes_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, RequestRow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,D_BlockchainCodes_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,D_BlockchainCodes_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "handleApprove", /*#__PURE__*/(0,D_BlockchainCodes_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_BlockchainCodes_kickstarter_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().mark(function _callee() {
      var accounts, campaign;
      return D_BlockchainCodes_kickstarter_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _ethereum_web3__WEBPACK_IMPORTED_MODULE_10__.default.eth.getAccounts();

            case 2:
              accounts = _context.sent;
              campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_11__.default)(_this.props.address);
              _context.next = 6;
              return campaign.methods.approveRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    (0,D_BlockchainCodes_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,D_BlockchainCodes_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "handleFinalize", /*#__PURE__*/(0,D_BlockchainCodes_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_BlockchainCodes_kickstarter_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().mark(function _callee2() {
      var accounts, campaign;
      return D_BlockchainCodes_kickstarter_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _ethereum_web3__WEBPACK_IMPORTED_MODULE_10__.default.eth.getAccounts();

            case 2:
              accounts = _context2.sent;
              campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_11__.default)(_this.props.address);
              _context2.next = 6;
              return campaign.methods.finalizeRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    return _this;
  }

  (0,D_BlockchainCodes_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(RequestRow, [{
    key: "render",
    value: function render() {
      var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Table.Row,
          Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Table.Cell;
      var _this$props = this.props,
          id = _this$props.id,
          request = _this$props.request,
          approversCount = _this$props.approversCount;
      var readyToFinalize = request.approvedCount > approversCount / 2;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(Row, {
        disabled: request.complete,
        positive: readyToFinalize && !reque,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(Cell, {
          children: id + 1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(Cell, {
          children: request.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(Cell, {
          children: _ethereum_web3__WEBPACK_IMPORTED_MODULE_10__.default.utils.fromWei(request.value, 'ether')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(Cell, {
          children: request.recipient
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(Cell, {
          children: [request.approvedCount, "/", approversCount]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(Cell, {
          children: request.complete ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Button, {
            basic: true,
            color: "green",
            onClick: this.handleApprove,
            children: "Approve"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 48
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(Cell, {
          children: request.complete ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Button, {
            basic: true,
            color: "purple",
            onClick: this.handleFinalize,
            children: "Finalize"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 48
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }, this);
    }
  }]);

  return RequestRow;
}(react__WEBPACK_IMPORTED_MODULE_9__.Component);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL3JlcXVlc3RJbmRleC42NzVlY2NkZjlkOGVjMmRiMDA3Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0lBRXFCTTs7Ozs7Ozs7Ozs7Ozs7OztpbkJBQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDV0Ysb0VBQUEsRUFEWDs7QUFBQTtBQUNKSyxjQUFBQSxRQURJO0FBRUpDLGNBQUFBLFFBRkksR0FFS0wsNERBQVEsQ0FBQyxNQUFLTSxLQUFMLENBQVdDLE9BQVosQ0FGYjtBQUFBO0FBQUEscUJBR0pGLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQkMsY0FBakIsQ0FBZ0MsTUFBS0gsS0FBTCxDQUFXSSxFQUEzQyxFQUErQ0MsSUFBL0MsQ0FBb0Q7QUFDdkRDLGdCQUFBQSxJQUFJLEVBQUNSLFFBQVEsQ0FBQyxDQUFEO0FBRDBDLGVBQXBELENBSEk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O2tuQkFPQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNVTCxvRUFBQSxFQURWOztBQUFBO0FBQ0xLLGNBQUFBLFFBREs7QUFFTEMsY0FBQUEsUUFGSyxHQUVJTCw0REFBUSxDQUFDLE1BQUtNLEtBQUwsQ0FBV0MsT0FBWixDQUZaO0FBQUE7QUFBQSxxQkFHTEYsUUFBUSxDQUFDRyxPQUFULENBQWlCSyxlQUFqQixDQUFpQyxNQUFLUCxLQUFMLENBQVdJLEVBQTVDLEVBQWdEQyxJQUFoRCxDQUFxRDtBQUN4REMsZ0JBQUFBLElBQUksRUFBQ1IsUUFBUSxDQUFDLENBQUQ7QUFEMkMsZUFBckQsQ0FISzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztXQU9mLGtCQUFTO0FBQ0wsVUFBT1UsR0FBUCxHQUFpQmhCLHlEQUFqQjtBQUFBLFVBQVdpQixJQUFYLEdBQWlCakIsMERBQWpCO0FBQ0Esd0JBQWtDLEtBQUtRLEtBQXZDO0FBQUEsVUFBT0ksRUFBUCxlQUFPQSxFQUFQO0FBQUEsVUFBVU0sT0FBVixlQUFVQSxPQUFWO0FBQUEsVUFBa0JDLGNBQWxCLGVBQWtCQSxjQUFsQjtBQUNBLFVBQU1DLGVBQWUsR0FBQ0YsT0FBTyxDQUFDRyxhQUFSLEdBQXNCRixjQUFjLEdBQUMsQ0FBM0Q7QUFDQSwwQkFDSSwrREFBQyxHQUFEO0FBQUssZ0JBQVEsRUFBRUQsT0FBTyxDQUFDSSxRQUF2QjtBQUFpQyxnQkFBUSxFQUFFRixlQUFlLElBQUUsQ0FBQ0csS0FBN0Q7QUFBQSxnQ0FDSSwrREFBQyxJQUFEO0FBQUEsb0JBQU9YLEVBQUUsR0FBQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSSwrREFBQyxJQUFEO0FBQUEsb0JBQU9NLE9BQU8sQ0FBQ007QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBR0ksK0RBQUMsSUFBRDtBQUFBLG9CQUFPdkIsa0VBQUEsQ0FBbUJpQixPQUFPLENBQUNTLEtBQTNCLEVBQWlDLE9BQWpDO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISixlQUlJLCtEQUFDLElBQUQ7QUFBQSxvQkFBT1QsT0FBTyxDQUFDVTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkosZUFLSSwrREFBQyxJQUFEO0FBQUEscUJBQU9WLE9BQU8sQ0FBQ0csYUFBZixPQUErQkYsY0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKLGVBTUksK0RBQUMsSUFBRDtBQUFBLG9CQUFPRCxPQUFPLENBQUNJLFFBQVIsR0FBa0IsSUFBbEIsZ0JBQXdCLCtEQUFDLHNEQUFEO0FBQVEsaUJBQUssTUFBYjtBQUFjLGlCQUFLLEVBQUMsT0FBcEI7QUFBNEIsbUJBQU8sRUFBRSxLQUFLTyxhQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KLGVBT0ksK0RBQUMsSUFBRDtBQUFBLG9CQUFPWCxPQUFPLENBQUNJLFFBQVIsR0FBa0IsSUFBbEIsZ0JBQXdCLCtEQUFDLHNEQUFEO0FBQVEsaUJBQUssTUFBYjtBQUFjLGlCQUFLLEVBQUMsUUFBcEI7QUFBNkIsbUJBQU8sRUFBRSxLQUFLUSxjQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBV0g7Ozs7RUE5Qm1DaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXF1ZXN0Um93LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtCdXR0b24sIFRhYmxlfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMyc7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi9ldGhlcmV1bS9jYW1wYWlnbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcXVlc3RSb3cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgaGFuZGxlQXBwcm92ZT1hc3luYyAoKT0+e1xyXG4gICAgICAgIGNvbnN0IGFjY291bnRzPWF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgY29uc3QgY2FtcGFpZ249Q2FtcGFpZ24odGhpcy5wcm9wcy5hZGRyZXNzKTtcclxuICAgICAgICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmFwcHJvdmVSZXF1ZXN0KHRoaXMucHJvcHMuaWQpLnNlbmQoe1xyXG4gICAgICAgICAgIGZyb206YWNjb3VudHNbMF0gXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGhhbmRsZUZpbmFsaXplPWFzeW5jKCk9PntcclxuICAgICAgICBjb25zdCBhY2NvdW50cz1hd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgIGNvbnN0IGNhbXBhaWduPUNhbXBhaWduKHRoaXMucHJvcHMuYWRkcmVzcyk7XHJcbiAgICAgICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5maW5hbGl6ZVJlcXVlc3QodGhpcy5wcm9wcy5pZCkuc2VuZCh7XHJcbiAgICAgICAgICAgZnJvbTphY2NvdW50c1swXSBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtSb3csQ2VsbH09VGFibGU7XHJcbiAgICAgICAgY29uc3Qge2lkLHJlcXVlc3QsYXBwcm92ZXJzQ291bnR9PXRoaXMucHJvcHNcclxuICAgICAgICBjb25zdCByZWFkeVRvRmluYWxpemU9cmVxdWVzdC5hcHByb3ZlZENvdW50PmFwcHJvdmVyc0NvdW50LzI7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJvdyBkaXNhYmxlZD17cmVxdWVzdC5jb21wbGV0ZX0gcG9zaXRpdmU9e3JlYWR5VG9GaW5hbGl6ZSYmIXJlcXVlfT5cclxuICAgICAgICAgICAgICAgIDxDZWxsPntpZCsxfTwvQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxDZWxsPntyZXF1ZXN0LmRlc2NyaXB0aW9ufTwvQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxDZWxsPnt3ZWIzLnV0aWxzLmZyb21XZWkocmVxdWVzdC52YWx1ZSwnZXRoZXInKX08L0NlbGw+XHJcbiAgICAgICAgICAgICAgICA8Q2VsbD57cmVxdWVzdC5yZWNpcGllbnR9PC9DZWxsPlxyXG4gICAgICAgICAgICAgICAgPENlbGw+e3JlcXVlc3QuYXBwcm92ZWRDb3VudH0ve2FwcHJvdmVyc0NvdW50fTwvQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxDZWxsPntyZXF1ZXN0LmNvbXBsZXRlID9udWxsOig8QnV0dG9uIGJhc2ljIGNvbG9yPSdncmVlbicgb25DbGljaz17dGhpcy5oYW5kbGVBcHByb3ZlfT5BcHByb3ZlPC9CdXR0b24+KX08L0NlbGw+XHJcbiAgICAgICAgICAgICAgICA8Q2VsbD57cmVxdWVzdC5jb21wbGV0ZSA/bnVsbDooPEJ1dHRvbiBiYXNpYyBjb2xvcj0ncHVycGxlJyBvbkNsaWNrPXt0aGlzLmhhbmRsZUZpbmFsaXplfT5GaW5hbGl6ZTwvQnV0dG9uPil9PC9DZWxsPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiVGFibGUiLCJ3ZWIzIiwiQ2FtcGFpZ24iLCJSZXF1ZXN0Um93IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwibWV0aG9kcyIsImFwcHJvdmVSZXF1ZXN0IiwiaWQiLCJzZW5kIiwiZnJvbSIsImZpbmFsaXplUmVxdWVzdCIsIlJvdyIsIkNlbGwiLCJyZXF1ZXN0IiwiYXBwcm92ZXJzQ291bnQiLCJyZWFkeVRvRmluYWxpemUiLCJhcHByb3ZlZENvdW50IiwiY29tcGxldGUiLCJyZXF1ZSIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwidmFsdWUiLCJyZWNpcGllbnQiLCJoYW5kbGVBcHByb3ZlIiwiaGFuZGxlRmluYWxpemUiXSwic291cmNlUm9vdCI6IiJ9