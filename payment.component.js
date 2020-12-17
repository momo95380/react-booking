"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentComponent = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var PaymentComponent =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(PaymentComponent, _Component);

  function PaymentComponent() {
    (0, _classCallCheck2["default"])(this, PaymentComponent);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(PaymentComponent).apply(this, arguments));
  }

  (0, _createClass2["default"])(PaymentComponent, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "final-status-wrapper successed"
      }, _react["default"].createElement("div", {
        className: "final-box-wrapper"
      }, _react["default"].createElement("p", null, _react["default"].createElement("a", {
        href: "https://sklep.przelewy24.pl/zakup.php?z24_id_sprzedawcy=93228&z24_kwota=1000&z24_currency=pln&z24_nazwa=Hello%21&z24_language=en&k24_kraj=PL&z24_crc=75ce628f",
        className: "btn btn-primary"
      }, "Pay by przelewy24.pl"))));
    }
  }]);
  return PaymentComponent;
}(_react.Component);

exports.PaymentComponent = PaymentComponent;