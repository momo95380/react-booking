"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertComponent = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var AlertComponent =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(AlertComponent, _Component);

  function AlertComponent() {
    (0, _classCallCheck2["default"])(this, AlertComponent);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(AlertComponent).apply(this, arguments));
  }

  (0, _createClass2["default"])(AlertComponent, [{
    key: "alertIcon",
    value: function alertIcon() {
      switch (this.props.type) {
        case 'success':
          return 'check';

        case 'warning':
          return 'alert-triangle';

        default:
          return '';
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: 'alert alert-' + this.props.type
      }, _react["default"].createElement("i", {
        className: 'icon icon-' + this.alertIcon()
      }), _react["default"].createElement("p", null, this.props.children));
    }
  }]);
  return AlertComponent;
}(_react.Component);

exports.AlertComponent = AlertComponent;