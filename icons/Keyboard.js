"use strict";

exports.__esModule = true;
exports.Keyboard = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Keyboard = function Keyboard(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Keyboard"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M24 7C24 5.89543 23.1046 5 22 5H2C0.895432 5 0 5.89543 0 7V17C0 18.1046 0.895432 19 2 19H22C23.1046 19 24 18.1046 24 17V7ZM22 7V17H2V7H22ZM3 10H6V8H3V10ZM5 13H3V11H5V13ZM3 16H4V14H3V16ZM17 14V16H7V14H17ZM18 16H19V14H18V16ZM21 16H20V14H21V16ZM18 13H21V11H18V13ZM21 10H19V8H21V10ZM16 10H18V8H16V10ZM9 10H7V8H9V10ZM10 10H12V8H10V10ZM15 10H13V8H15V10ZM5 16H6V14H5V16ZM8 13H6V11H8V13ZM9 13H11V11H9V13ZM14 13H12V11H14V13ZM15 13H17V11H15V13Z",
    fill: "#000"
  }));
};

exports.Keyboard = Keyboard;