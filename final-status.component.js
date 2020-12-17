"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FinalStatusComponent = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var FinalStatusComponent =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(FinalStatusComponent, _Component);

  function FinalStatusComponent() {
    (0, _classCallCheck2["default"])(this, FinalStatusComponent);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(FinalStatusComponent).apply(this, arguments));
  }

  (0, _createClass2["default"])(FinalStatusComponent, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "final-status-wrapper successed"
      }, _react["default"].createElement("div", {
        className: "final-box-wrapper"
      }, _react["default"].createElement("span", {
        className: "icon-wrapper"
      }, _react["default"].createElement("i", {
        className: "icon"
      })), _react["default"].createElement("p", null, "Congratulation! You reservation operations were successfully completed.")), this.props.parentProps.reservationCode ? _react["default"].createElement("div", {
        className: "final-status-code-box"
      }, _react["default"].createElement("span", null, "Your reservation code: "), _react["default"].createElement("p", null, "987654321"), _react["default"].createElement("br", null)) : null);
    }
  }]);
  return FinalStatusComponent;
}(_react.Component);

exports.FinalStatusComponent = FinalStatusComponent;