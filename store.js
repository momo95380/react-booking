"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addAppointment = addAppointment;
exports.setAppointment = setAppointment;
exports.getAppointment = getAppointment;
exports.Store = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _getIterator2 = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/get-iterator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _rxjs = require("rxjs");

var Store = {
  appointment: new _rxjs.BehaviorSubject([])
};
exports.Store = Store;

function addAppointment(data) {
  var _current = Store.appointment.value;

  var _update = [].concat((0, _toConsumableArray2["default"])(_current), [data]);

  Store.appointment.next(_update);
}

function setAppointment(module_id, data) {
  var newvalue = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator2["default"])(Store.appointment.value), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _v = _step.value;

      if (_v.module_id === module_id) {
        _v = (0, _objectSpread2["default"])({
          module_id: module_id
        }, _v, data);
      }

      newvalue.push(_v);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  Store.appointment.next(newvalue);
}

function getAppointment(module_id) {
  return Store.appointment.value.find(function (x) {
    return x.module_id === module_id;
  });
}