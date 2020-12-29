"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uuidv4 = uuidv4;
exports.ReactBooking = exports.NavLink = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _appointment = require("./appointment.component");

var _mock = require("./mock");

var _form = require("./form.component");

var _reactTransitionGroup = require("react-transition-group");

var _finalStatus = require("./final-status.component");

var _appointmentInformation = _interopRequireDefault(require("./appointment-information.component"));

var _payment = require("./payment.component");

var _store = require("./store");

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}

var NavLink =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(NavLink, _Component);

  function NavLink() {
    (0, _classCallCheck2["default"])(this, NavLink);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(NavLink).apply(this, arguments));
  }

  (0, _createClass2["default"])(NavLink, [{
    key: "content",
    value: function content() {
      return _react["default"].createElement(_react["default"].Fragment, null, this.props.backUrl && _react["default"].createElement(_reactRouterDom.Link, {
        className: "back-btn",
        to: this.props.backUrl
      }, _react["default"].createElement("i", {
        className: "icon icon-chevron-left"
      })), _react["default"].createElement("i", {
        className: 'icon ' + this.props.icon
      }), _react["default"].createElement("span", null, this.props.label));
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.pathname === this.props.to) {
        return _react["default"].createElement("li", {
          className: this.props.pathname === this.props.to ? 'active' : ''
        }, _react["default"].createElement("span", null, this.content()));
      }

      return _react["default"].createElement("li", null, _react["default"].createElement(_reactRouterDom.Link, {
        to: this.props.to
      }, this.content()));
    }
  }]);
  return NavLink;
}(_react.Component);

exports.NavLink = NavLink;

var ReactBooking =
/*#__PURE__*/
function (_Component2) {
  (0, _inherits2["default"])(ReactBooking, _Component2);

  function ReactBooking(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ReactBooking);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ReactBooking).call(this, props));
    _this.state = {
      module_id: uuidv4(),
      campaign: null,
      loaded: false,
      form: {
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

  (0, _createClass2["default"])(ReactBooking, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      console.log(nextProps);
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _mock.getMockData)();

              case 2:
                data = _context.sent;
                this.setState({
                  campaign: data,
                  loaded: true
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      (0, _store.addAppointment)({
        module_id: this.state.module_id,
        slotId: null,
        slotDate: null,
        slotTime: null,
        slotPrice: null,
        slotCapacity: null,
        customer_fullname: null,
        customer_email: null,
        customer_phone: null,
        customer_address: null,
        customer_zipCode: null,
        customer_location: null,
        customer_message: null
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var campaign = this.state.campaign;
      var Router = this.props.historyType === 'memory' ? _reactRouterDom.MemoryRouter : _reactRouterDom.BrowserRouter;
      return this.state.loaded === true ? _react["default"].createElement(Router, null, _react["default"].createElement(_reactRouterDom.Route, {
        exact: true,
        render: function render(_ref) {
          var location = _ref.location;
          return _react["default"].createElement("div", {
            className: "campagin-wrapper"
          }, _react["default"].createElement("div", {
            className: "navigation-path"
          }, _react["default"].createElement("ul", null, _react["default"].createElement(NavLink, {
            label: "Selectionnez une date et un crénaux",
            icon: "icon-calendar",
            to: "/datepicker",
            pathname: location.pathname
          }), _react["default"].createElement(NavLink, {
            label: "Informations sur la course",
            icon: "icon-user",
            to: "/personel-information",
            backUrl: "/",
            pathname: location.pathname
          }), _this2.props.paymentTab ? _react["default"].createElement(NavLink, {
            label: "Payment Page",
            icon: "icon icon-credit-card",
            to: "",
            pathname: location.pathname
          }) : null, _react["default"].createElement(NavLink, {
            label: "Final Status",
            icon: "icon-award",
            to: "/final-status",
            pathname: location.pathname
          }))), _react["default"].createElement("div", {
            className: "text-center"
          }, _react["default"].createElement("h1", null, _this2.props.title), _react["default"].createElement("p", null, _this2.props.description)), _react["default"].createElement(_appointmentInformation["default"], {
            module_id: _this2.state.module_id,
            user: {}
          }), _react["default"].createElement(_reactTransitionGroup.TransitionGroup, null, _react["default"].createElement(_reactTransitionGroup.CSSTransition, {
            key: location.key,
            timeout: 300,
            classNames: "fade"
          }, _react["default"].createElement(_reactRouterDom.Switch, {
            location: location
          }, _react["default"].createElement(_reactRouterDom.Route, {
            path: "/datepicker",
            exact: true,
            component: function component(props) {
              return _react["default"].createElement(_appointment.AppointmentComponent, (0, _extends2["default"])({}, props, {
                module_id: _this2.state.module_id,
                campaign: campaign,
                parentProps: _this2.props,
                appointments: _this2.props.appointments
              }));
            }
          }), _react["default"].createElement(_reactRouterDom.Route, {
            path: "/personel-information",
            exact: true,
            component: function component(props) {
              return _react["default"].createElement(_form.FormComponent, (0, _extends2["default"])({}, props, {
                hello: "ali",
                module_id: _this2.state.module_id,
                onFormSubmit: _this2.props.onFormSubmit,
                parentProps: _this2.props,
                response: _this2.props.response
              }));
            }
          }), _react["default"].createElement(_reactRouterDom.Route, {
            path: "/payment",
            parentProps: _this2.props,
            exact: true,
            component: _payment.PaymentComponent
          }), _react["default"].createElement(_reactRouterDom.Route, {
            path: "/final-status",
            exact: true,
            component: function component(props) {
              return _react["default"].createElement(_finalStatus.FinalStatusComponent, {
                parentProps: _this2.props
              });
            }
          }), _react["default"].createElement(_reactRouterDom.Redirect, {
            from: "/",
            to: '/' + _this2.props.visibleTab
          })))));
        }
      })) : _react["default"].createElement("div", null, "Please wait we are getting data from our servers ...");
    }
  }]);
  return ReactBooking;
}(_react.Component);

exports.ReactBooking = ReactBooking;
ReactBooking.propTypes = {
  title: _propTypes["default"].string,
  description: _propTypes["default"].string,
  historyType: _propTypes["default"].oneOf(['browser', 'memory']),
  paymentTab: _propTypes["default"].bool,
  appointments: _propTypes["default"].array,
  visibleTab: _propTypes["default"].string,
  formMode: _propTypes["default"].string,
  onFormSubmit: _propTypes["default"].func,
  scrollAdjust: _propTypes["default"].string
};
ReactBooking.defaultProps = {
  title: 'Booking and reservation',
  description: 'Please complete your booking here. Select an appointment and continue.',
  historyType: 'memory',
  paymentTab: true,
  appointments: [],
  visibleTab: 'datepicker',
  formMode: 'normal',
  onFormSubmit: function onFormSubmit(params) {
    return console.warn('You need to implement `onFormSubmit` and integrate it with your project.', params);
  },
  scrollAdjust: 'smooth'
};