"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppointmentComponent = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));

var _reactTimepicker = _interopRequireDefault(require("react-time-picker"));

var _moment = _interopRequireDefault(require("moment"));

var _store = require("./store");

var AppointmentComponent =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(AppointmentComponent, _Component);

  function AppointmentComponent(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, AppointmentComponent);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(AppointmentComponent).call(this, props));

    _this.handleDatepicker = function (date) {
      if (_this.props.parentProps.scrollAdjust === 'native') {
        _this.scrollToEnd();
      }

      if (_this.props.parentProps.scrollAdjust === 'smooth') {
        _this.scrollToEndAnimated();
      }

      _this.setState({
        startDate: date
      });
    };

    _this.ref = _react["default"].createRef();
    _this.state = {
      data: null,
      selectedSlot: null,
      time: '13:00',
    };
    return _this;
  }

  (0, _createClass2["default"])(AppointmentComponent, [{
    key: "scrollToEndAnimated",
    value: function scrollToEndAnimated() {
      setTimeout(function () {
        var _document$getElements = document.getElementsByClassName('react-booking-calendar-screen')[0].getBoundingClientRect(),
            top = _document$getElements.top,
            height = _document$getElements.height;

        var end = top + window.scrollY + height - window.innerHeight;
        window.scrollTo({
          top: end,
          left: 0,
          behavior: 'smooth'
        });
      }, 500);
    }
  }, {
    key: "scrollToEnd",
    value: function scrollToEnd() {
      setTimeout(function () {
        document.getElementsByClassName('react-booking-calendar-screen')[0].scrollIntoView();
      }, 500);
    }
  }, {
    key: "handleSeletctedSlot",
    value: function handleSeletctedSlot(slot) {
      this.setState({
        selectedSlot: slot
      });
    }
  }, {
    key: "confirmAppointment",
    value: function confirmAppointment(slot) {
/*      var data = {
        slotId: slot.id,
        slotDate: slot.start,
        slotTime: "".concat((0, _moment["default"])(slot.start).format('HH:mm'), " - ").concat((0, _moment["default"])(slot.end).format('HH:mm')),
      };
      (0, _store.setAppointment)(this.props.module_id, data);
      var parentProps = this.props.parentProps;

      const startDate = new Date(slot.start);
      const endDate = new Date(slot.end);

      this.props.parentProps.onDateSubmit({
        start: startDate,
        end: endDate
      });

      if (parentProps.formMode === 'skip') {
        this.props.parentProps.onFormSubmit({
          id: slot.id,
          start: slot.start,
          end: slot.end,
        });
        return this.props.history.push('/final-status');
      } */

      /*this.props.parentProps.onDateSubmit({
        start: startDate,
        end: endDate
      });*/

      const date = new Date(this.state.startDate);
      const timeArray = this.state.time.split(':')
      date.setHours(timeArray[0], timeArray[1], 0);

      this.props.parentProps.onDateSubmit({
        start: date,
        end: date
      });

      this.props.history.push('/personel-information');
    }
  },{
    key: "selectTime",
    value: function selectTime(time) {
      this.setState({
        time,
      });
    }
  },{
    key: "render",
    value: function render() {
      var _this2 = this;

      var appointments = this.props.appointments;
      var startDate = this.state.startDate;
      var includeDates = appointments.map(function (app) {
        return app.start;
      });
      var appointmentsInDate = appointments.filter(function (app) {
        return (0, _moment["default"])(app.start).isSame((0, _moment["default"])(startDate), 'date');
      });
      return _react["default"].createElement("div", {
        className: "react-booking-calendar-screen"
      }, _react["default"].createElement(_reactDatepicker["default"], {
        inline: true,
        selectsStart: true,
        selected: this.state.startDate,
        includeDates: includeDates,
        onChange: this.handleDatepicker,
        locale: ""
      }), this.state.startDate && _react["default"].createElement("div", {
        className: "text-center react-booking-appointments"
      }, _react["default"].createElement("h3",  {
        className: "title-time"
      }, "Chosissez une heure"), _react["default"].createElement(_reactTimepicker["default"], {
        value: this.state.time,
        onChange: function onChange(value) { _this2.selectTime(value) }
      }),  _react["default"].createElement("div", {
        className: "appointment-confirm"
      }, _react["default"].createElement("button", {
        className: 'button-confirm',
        onClick: function onClick() {
          return _this2.confirmAppointment();
        }
      }, "Confirmer")) ));
    }
  }]);
  return AppointmentComponent;
}(_react.Component);

exports.AppointmentComponent = AppointmentComponent;