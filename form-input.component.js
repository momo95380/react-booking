"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormInputComponent = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var FormInputComponent =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(FormInputComponent, _Component);

  function FormInputComponent() {
    (0, _classCallCheck2["default"])(this, FormInputComponent);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(FormInputComponent).apply(this, arguments));
  }

  (0, _createClass2["default"])(FormInputComponent, [{
    key: "findErrorMessage",
    value: function findErrorMessage(field, response) {
      if (response && response.error && response.error.errors) {
        var $field = response.error.errors.find(function (error) {
          return error.location === field;
        });

        if ($field) {
          return $field.message;
        }
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          title = _this$props.title,
          placeholder = _this$props.placeholder,
          icon = _this$props.icon;
      return _react["default"].createElement("div", {
        className: 'booking-widget-input-group' + (this.errorMessage || this.props.isValid ? ' warning' : '')
      }, _react["default"].createElement("div", {
        className: "booking-widget-input-title"
      }, icon && icon.length > 0 && _react["default"].createElement("i", {
        className: 'icon ' + icon
      }), title), _react["default"].createElement("div", null, _react["default"].createElement("input", {
        className: "booking-widget-input",
        type: "text",
        placeholder: placeholder,
        onInput: function onInput(e) {
          return _this.props.onChange(e.target.value);
        }
      })), this.errorMessage && _react["default"].createElement("span", null, this.errorMessage));
    }
  }, {
    key: "errorMessage",
    get: function get() {
      var _this$props2 = this.props,
          response = _this$props2.response,
          name = _this$props2.name;
      return this.findErrorMessage(name, response);
    }
  }]);
  return FormInputComponent;
}(_react.Component);

exports.FormInputComponent = FormInputComponent;