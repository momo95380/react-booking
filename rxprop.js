"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rxProp = rxProp;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/keys"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assign = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/assign"));

var _react = _interopRequireDefault(require("react"));

var _rxjs = require("rxjs");

var _lodash = _interopRequireDefault(require("lodash.values"));

// from babel
function _extends() {
  // eslint-disable-next-line
  _extends = _assign["default"] || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function rxProp() {
  var subjectBehaviors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (ComposedComponent) {
    return (
      /*#__PURE__*/
      function (_React$Component) {
        (0, _inherits2["default"])(_class, _React$Component);

        function _class(props) {
          var _this;

          (0, _classCallCheck2["default"])(this, _class);
          _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(_class).call(this, props));
          _this.state = {
            store: {}
          };
          _this.subscription = null;
          return _this;
        } // Subscribe to RxJS, map the current state to composed component props


        (0, _createClass2["default"])(_class, [{
          key: "componentWillMount",
          value: function componentWillMount() {
            var _this2 = this;

            var vars = (0, _keys["default"])(subjectBehaviors);
            var vals = (0, _lodash["default"])(subjectBehaviors);
            this.subscription = _rxjs.combineLatest.apply(void 0, (0, _toConsumableArray2["default"])(vals)).subscribe(function (result) {
              var store = {};
              result.forEach(function (item, index) {
                store[vars[index]] = item;
              });

              _this2.setState({
                store: store
              });
            });
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            if (this.subscription && this.subscription.unsubscribe) {
              this.subscription.unsubscribe();
            }
          }
        }, {
          key: "render",
          value: function render() {
            return _react["default"].createElement(ComposedComponent, _extends({}, this.props, this.state.store));
          }
        }]);
        return _class;
      }(_react["default"].Component)
    );
  };
}