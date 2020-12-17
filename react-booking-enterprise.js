"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactBookingEnterprise = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

var _getIterator2 = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/get-iterator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _reactBooking = require("./react-booking");

var _pages = require("../../pages");

var _pixelpluxCommon = require("../../pages/pixelplux-common");

var ReactBookingEnterprise =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(ReactBookingEnterprise, _React$Component);

  function ReactBookingEnterprise() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, ReactBookingEnterprise);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(ReactBookingEnterprise)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      response: null,
      term: null
    };
    return _this;
  }

  (0, _createClass2["default"])(ReactBookingEnterprise, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var id, term, res, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, slot;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = this.props.campaignId;
                term = null;

                if (!id) {
                  _context.next = 31;
                  break;
                }

                _context.prev = 3;
                _context.next = 6;
                return (0, _pages.GetTermPublic)(id);

              case 6:
                res = _context.sent;

                if ((0, _pixelpluxCommon.GetEntity)(res)) {
                  term = (0, _pixelpluxCommon.GetEntity)(res);
                }

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 11;

                for (_iterator = (0, _getIterator2["default"])(term.slots); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  slot = _step.value;
                  slot.start = new Date(slot.start);
                  slot.end = new Date(slot.end);
                }

                _context.next = 19;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](11);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 19:
                _context.prev = 19;
                _context.prev = 20;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 22:
                _context.prev = 22;

                if (!_didIteratorError) {
                  _context.next = 25;
                  break;
                }

                throw _iteratorError;

              case 25:
                return _context.finish(22);

              case 26:
                return _context.finish(19);

              case 27:
                _context.next = 31;
                break;

              case 29:
                _context.prev = 29;
                _context.t1 = _context["catch"](3);

              case 31:
                this.setState({
                  term: term
                });

              case 32:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 29], [11, 15, 19, 27], [20,, 22, 26]]);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "sendRequestToServer",
    value: function () {
      var _sendRequestToServer = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(e) {
        var campaignId, data, response;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                campaignId = this.props.campaignId;
                data = (0, _objectSpread2["default"])({}, e, {
                  term: campaignId
                });
                _context2.next = 5;
                return (0, _pages.ConfirmBooking)(data);

              case 5:
                response = _context2.sent;

                if (!response) {
                  alert('You are not connected to the internet.');
                  this.setState({
                    response: null
                  });
                }

                response.form = e;
                this.setState({
                  response: response
                });
                _context2.next = 16;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](0);
                alert('Sorry there was an error. Try again');
                this.setState({
                  response: null
                });
                console.error(_context2.t0);

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 11]]);
      }));

      function sendRequestToServer(_x) {
        return _sendRequestToServer.apply(this, arguments);
      }

      return sendRequestToServer;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var term = this.state.term;

      if (!term) {
        return '...';
      }

      return _react["default"].createElement(_reactBooking.ReactBooking, {
        title: term.term.title,
        description: term.term.description,
        onFormSubmit: function onFormSubmit(e) {
          return _this2.sendRequestToServer(e);
        },
        response: this.state.response,
        paymentTab: false,
        appointments: term.slots
      });
    }
  }]);
  return ReactBookingEnterprise;
}(_react["default"].Component);

exports.ReactBookingEnterprise = ReactBookingEnterprise;