"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMockData = getMockData;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var data = {
  title: 'Campaing number 1',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry ...',
  events: [{
    date: '2019-08-26',
    slots: [{
      id: 1,
      from: '12:00',
      to: '13:00'
    }, {
      id: 2,
      from: '14:00',
      to: '15:00'
    }, {
      id: 3,
      from: '16:00',
      to: '17:00'
    }]
  }, {
    date: '2019-07-27',
    slots: [{
      id: 4,
      from: '12:30',
      to: '13:30'
    }]
  }, {
    date: '2019-07-28',
    slots: [{
      id: 5,
      from: '12:45',
      to: '13:45'
    }, {
      id: 6,
      from: '16:45',
      to: '17:45'
    }]
  }, {
    date: '2019-07-29',
    slots: [{
      id: 7,
      from: '12:15',
      to: '13:15'
    }, {
      id: 8,
      from: '14:15',
      to: '15:15'
    }, {
      id: 9,
      from: '16:15',
      to: '17:15'
    }, {
      id: 10,
      from: '18:15',
      to: '19:15'
    }, {
      id: 11,
      from: '20:15',
      to: '21:15'
    }]
  }]
};

function getMockData() {
  return _getMockData.apply(this, arguments);
}

function _getMockData() {
  _getMockData = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", data);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getMockData.apply(this, arguments);
}