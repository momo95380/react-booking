'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));

var _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _react = _interopRequireWildcard(require('react'));

var _store = require('./store');

var _moment = _interopRequireDefault(require('moment'));

var _rxprop = require('./rxprop');

var AppointmentInformationComponent =
  /*#__PURE__*/
  (function (_Component) {
    (0, _inherits2['default'])(AppointmentInformationComponent, _Component);

    function AppointmentInformationComponent() {
      (0, _classCallCheck2['default'])(this, AppointmentInformationComponent);
      return (0, _possibleConstructorReturn2['default'])(
        this,
        (0, _getPrototypeOf2['default'])(AppointmentInformationComponent).apply(this, arguments),
      );
    }

    (0, _createClass2['default'])(AppointmentInformationComponent, [
      {
        key: 'render',
        value: function render() {
          var _this = this;

          var user = this.props.user;
          user = user.find(function (x) {
            return x.module_id === _this.props.module_id;
          });

          if (!user || !user.slotId) {
            return _react['default'].createElement(_react['default'].Fragment, null);
          }

          return _react['default'].createElement(
            'div',
            {
              className: 'selected-appointment-information',
            },
            user.customer_fullname &&
              _react['default'].createElement(
                'div',
                null,
                _react['default'].createElement('i', {
                  className: 'icon icon-user',
                }),
                _react['default'].createElement(
                  'span',
                  {
                    className: 'selected-appointment-information-title',
                  },
                  'Fullname:',
                ),
                _react['default'].createElement(
                  'span',
                  {
                    className: 'selected-appointment-information-value',
                  },
                  user.customer_fullname,
                ),
              ),
            user.customer_email &&
              _react['default'].createElement(
                'div',
                null,
                _react['default'].createElement('i', {
                  className: 'icon icon-at-sign',
                }),
                _react['default'].createElement(
                  'span',
                  {
                    className: 'selected-appointment-information-title',
                  },
                  'Email:',
                ),
                _react['default'].createElement(
                  'span',
                  {
                    className: 'selected-appointment-information-value',
                  },
                  user.customer_email,
                ),
              ),
            user.customer_phone &&
              _react['default'].createElement(
                'div',
                null,
                _react['default'].createElement('i', {
                  className: 'icon icon-phone',
                }),
                _react['default'].createElement(
                  'span',
                  {
                    className: 'selected-appointment-information-title',
                  },
                  'Phone number:',
                ),
                _react['default'].createElement(
                  'span',
                  {
                    className: 'selected-appointment-information-value',
                  },
                  user.customer_phone,
                ),
              ),
            user.slotDate &&
              _react['default'].createElement(
                'div',
                null,
                _react['default'].createElement('i', {
                  className: 'icon icon-calendar',
                }),
                _react['default'].createElement(
                  'span',
                  {
                    className: 'selected-appointment-information-title',
                  },
                  'Date:',
                ),
                _react['default'].createElement(
                  'span',
                  {
                    className: 'selected-appointment-information-value',
                  },
                  (0, _moment['default'])(user.slotDate).format('DD/MM/YYYY'),
                ),
              ),
            user.slotTime &&
              _react['default'].createElement(
                'div',
                null,
                _react['default'].createElement('i', {
                  className: 'icon icon-clock',
                }),
                _react['default'].createElement(
                  'span',
                  {
                    className: 'selected-appointment-information-title',
                  },
                  'Heure:',
                ),
                _react['default'].createElement(
                  'span',
                  {
                    className: 'selected-appointment-information-value',
                  },
                  user.slotTime,
                ),
              ),
            user.slotCapacity &&
              _react['default'].createElement(
                'div',
                null,
                _react['default'].createElement('i', {
                  className: 'icon icon-layers',
                }),
                _react['default'].createElement(
                  'span',
                  {
                    className: 'selected-appointment-information-title',
                  },
                  'Capacity:',
                ),
                _react['default'].createElement('span', null, user.slotCapacity),
              ),
          );
        },
      },
    ]);
    return AppointmentInformationComponent;
  })(_react.Component);

var _default = (0, _rxprop.rxProp)({
  user: _store.Store.appointment,
})(AppointmentInformationComponent);

exports['default'] = _default;
