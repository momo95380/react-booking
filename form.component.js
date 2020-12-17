"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormComponent = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _formInput = require("./form-input.component");

var _store = require("./store");

var FormComponent =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(FormComponent, _Component);

  function FormComponent(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, FormComponent);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(FormComponent).call(this, props));
    _this.state = {
      loading: false,
      response: null,
      form: {
        module_id: _this.props.module_id,
        customer_fullname: null,
        customer_email: null,
        customer_phone: null,
        customer_address: null,
        customer_zipCode: null,
        customer_location: null,
        customer_message: null
      }
    };
    return _this;
  }

  (0, _createClass2["default"])(FormComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        response: this.props.response
      });

      if (this.props.response) {
        (0, _store.setAppointment)(this.props.response.form.module_id, this.props.response.form);
        this.props.history.push('/final-status');
        this.setState({
          loading: false
        });
      }
    }
  }, {
    key: "setFormState",
    value: function setFormState(name, value) {
      var form = this.state.form;
      form[name] = value;
      this.setState({
        form: form
      });
    }
  }, {
    key: "previousStep",
    value: function previousStep() {
      this.props.history.push('/');
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      e && e.preventDefault && e.preventDefault();
      var validation = this.preValidator(this.state.form);

      if (validation.length) {
        this.setState({
          response: {
            error: {
              errors: validation
            }
          }
        });
      } else {
        this.setState({
          response: {}
        });

        if (this.props.onFormSubmit) {
          var store_data = (0, _store.getAppointment)(this.props.module_id);
          var form_data = (0, _objectSpread2["default"])({}, this.state.form, {
            id: store_data.slotId
          });
          this.props.onFormSubmit(form_data);
          this.setState({
            loading: true
          });
        }
      }
    }
  }, {
    key: "preValidator",
    value: function preValidator(form) {
      var errors = [];

      if (!form.customer_fullname) {
        errors.push({
          location: 'customer_fullname',
          message: 'We need your full name.'
        });
      }

      if (!form.customer_email) {
        errors.push({
          location: 'customer_email',
          message: 'Please enter your email address.'
        });
      } else {
        if (!/\S+@\S+\.\S+/.test(form.customer_email)) {
          errors.push({
            location: 'customer_email',
            message: 'We need your email address in correct form (my.name@gmail.com)'
          });
        }
      }

      if (!form.customer_phone) {
        errors.push({
          location: 'customer_phone',
          message: 'Please enter your phone number.'
        });
      } else {
        if (!/^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/im.test(form.customer_phone)) {
          errors.push({
            location: 'customer_phone',
            message: 'Enter your phone number in correct format e.g +18182003004000'
          });
        }
      }

      return errors;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement("div", {
        className: "form-container"
      }, this.state.loading && _react["default"].createElement("div", {
        className: "spinner-wrapper"
      }, _react["default"].createElement("div", {
        "class": "spinner"
      }), _react["default"].createElement("p", null, "Please wait ...")), _react["default"].createElement("form", {
        onSubmit: function onSubmit(e) {
          return _this2.onSubmit(e);
        }
      }, _react["default"].createElement("div", {
        className: "d-flex flex-wrap"
      }, _react["default"].createElement("div", {
        className: "flex-1"
      }, _react["default"].createElement(_formInput.FormInputComponent, {
        name: "customer_fullname",
        title: "FULLNAME",
        icon: "icon-user",
        response: this.state.response,
        onChange: function onChange(e) {
          return _this2.setFormState('customer_fullname', e);
        }
      })), _react["default"].createElement("div", {
        className: "flex-1"
      }, _react["default"].createElement(_formInput.FormInputComponent, {
        name: "customer_email",
        title: "EMAIL",
        icon: "icon-at-sign",
        response: this.state.response,
        onChange: function onChange(e) {
          return _this2.setFormState('customer_email', e);
        }
      })), _react["default"].createElement("div", {
        className: "flex-1"
      }, _react["default"].createElement(_formInput.FormInputComponent, {
        name: "customer_phone",
        title: "PHONE NUMBER",
        icon: "icon-phone",
        response: this.state.response,
        onChange: function onChange(e) {
          return _this2.setFormState('customer_phone', e);
        }
      }))), _react["default"].createElement("div", {
        className: "d-flex flex-wrap"
      }, _react["default"].createElement("div", {
        className: "flex-3"
      }, _react["default"].createElement(_formInput.FormInputComponent, {
        name: "customer_address",
        title: "ADDRESS (optional)",
        icon: "icon-map-pin",
        response: this.state.response,
        onChange: function onChange(e) {
          return _this2.setFormState('customer_address', e);
        }
      })), _react["default"].createElement("div", {
        className: "flex-1"
      }, _react["default"].createElement(_formInput.FormInputComponent, {
        name: "customer_zipCode",
        title: "ZIP CODE (optional)",
        icon: "icon-map",
        response: this.state.response,
        onChange: function onChange(e) {
          return _this2.setFormState('customer_zipCode', e);
        }
      }))), _react["default"].createElement("div", {
        className: "button-wrapper d-flex flex-end"
      }, _react["default"].createElement("input", {
        type: "button",
        onClick: function onClick() {
          return _this2.previousStep();
        },
        className: "btn btn-default",
        value: "Previous Step"
      }), _react["default"].createElement("button", {
        type: "submit",
        className: "btn btn-primary"
      }, "Next Step"))));
    }
  }]);
  return FormComponent;
}(_react.Component);

exports.FormComponent = FormComponent;