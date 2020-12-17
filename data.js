"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAvailabelSlots = getAvailabelSlots;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var sample = {
  apiVersion: 'beta',
  data: {
    items: [{
      slots: [{
        start: '2019-07-25T19:30:00.000Z',
        end: '2019-07-26T19:30:00.000Z',
        user: 3,
        bookable_term: 29,
        capacity: 1,
        id: 36,
        createdAt: '2019-07-25T08:28:21.000Z',
        updatedAt: '2019-07-25T08:28:21.000Z'
      }, {
        start: '2019-07-26T19:30:00.000Z',
        end: '2019-07-27T19:30:00.000Z',
        user: 3,
        bookable_term: 29,
        capacity: 1,
        id: 37,
        createdAt: '2019-07-25T08:28:34.000Z',
        updatedAt: '2019-07-25T08:28:34.000Z'
      }, {
        start: '2019-07-27T19:30:00.000Z',
        end: '2019-07-29T19:30:00.000Z',
        user: 3,
        bookable_term: 29,
        capacity: 2,
        id: 38,
        createdAt: '2019-07-25T08:31:28.000Z',
        updatedAt: '2019-07-25T08:31:28.000Z'
      }],
      term: {
        title: 'Test',
        description: 'Test',
        location: null,
        images: null,
        payment_on_cash: true,
        tracking_campaign: 'ydSm-UyCJq',
        user: 3,
        status: 'active',
        id: 29,
        createdAt: '2019-07-25T08:27:40.000Z',
        updatedAt: '2019-07-25T08:27:40.000Z'
      }
    }]
  }
};

function getAvailabelSlots(_x) {
  return _getAvailabelSlots.apply(this, arguments);
}

function _getAvailabelSlots() {
  _getAvailabelSlots = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(campaign) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", sample.data.items[0].slots);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getAvailabelSlots.apply(this, arguments);
}