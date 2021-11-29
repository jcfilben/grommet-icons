"use strict";

exports.__esModule = true;
exports.Escalator = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Escalator = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Escalator"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: "2",
    d: "M22 9a2 2 0 0 0-1.998-2H16L6 17H4c-1.105 0-2 .888-2 2h0a2 2 0 0 0 1.998 2H8l10-10h2c1.105 0 2-.888 2-2h0zM7 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 6v-2.505c0-.273.232-.495.5-.495h0c.276 0 .5.214.5.505V14l-1 1zm5-11a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 6V7.495c0-.273.232-.495.5-.495h0c.276 0 .5.214.5.505V9l-1 1z"
  }));
});
exports.Escalator = Escalator;
Escalator.displayName = 'Escalator';