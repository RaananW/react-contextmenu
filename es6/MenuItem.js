"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _objectAssign = _interopRequireDefault(require("object-assign"));

var _actions = require("./actions");

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MenuItem = /*#__PURE__*/function (_Component) {
  _inherits(MenuItem, _Component);

  var _super = _createSuper(MenuItem);

  function MenuItem() {
    var _this;

    _classCallCheck(this, MenuItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      if (event.button !== 0 && event.button !== 1) {
        event.preventDefault();
      }

      if (_this.props.disabled || _this.props.divider) return;
      (0, _helpers.callIfExists)(_this.props.onClick, event, (0, _objectAssign["default"])({}, _this.props.data, _helpers.store.data), _helpers.store.target);
      if (_this.props.preventClose) return;
      (0, _actions.hideMenu)();
    });

    return _this;
  }

  _createClass(MenuItem, [{
    key: "render",
    value: function render() {
      var _cx,
          _this2 = this;

      var _this$props = this.props,
          attributes = _this$props.attributes,
          children = _this$props.children,
          className = _this$props.className,
          disabled = _this$props.disabled,
          divider = _this$props.divider,
          selected = _this$props.selected;
      var menuItemClassNames = (0, _classnames["default"])(className, _helpers.cssClasses.menuItem, attributes.className, (_cx = {}, _defineProperty(_cx, (0, _classnames["default"])(_helpers.cssClasses.menuItemDisabled, attributes.disabledClassName), disabled), _defineProperty(_cx, (0, _classnames["default"])(_helpers.cssClasses.menuItemDivider, attributes.dividerClassName), divider), _defineProperty(_cx, (0, _classnames["default"])(_helpers.cssClasses.menuItemSelected, attributes.selectedClassName), selected), _cx));
      return /*#__PURE__*/_react["default"].createElement("div", _extends({}, attributes, {
        className: menuItemClassNames,
        role: "menuitem",
        tabIndex: "-1",
        "aria-disabled": disabled ? 'true' : 'false',
        "aria-orientation": divider ? 'horizontal' : null,
        ref: function ref(_ref) {
          _this2.ref = _ref;
        },
        onMouseMove: this.props.onMouseMove,
        onMouseLeave: this.props.onMouseLeave,
        onTouchEnd: this.handleClick,
        onClick: this.handleClick
      }), divider ? null : children);
    }
  }]);

  return MenuItem;
}(_react.Component);

exports["default"] = MenuItem;

_defineProperty(MenuItem, "propTypes", {
  attributes: _propTypes["default"].object,
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  data: _propTypes["default"].object,
  disabled: _propTypes["default"].bool,
  divider: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  onMouseLeave: _propTypes["default"].func,
  onMouseMove: _propTypes["default"].func,
  preventClose: _propTypes["default"].bool,
  selected: _propTypes["default"].bool
});

_defineProperty(MenuItem, "defaultProps", {
  attributes: {},
  children: null,
  className: '',
  data: {},
  disabled: false,
  divider: false,
  onClick: function onClick() {
    return null;
  },
  onMouseMove: function onMouseMove() {
    return null;
  },
  onMouseLeave: function onMouseLeave() {
    return null;
  },
  preventClose: false,
  selected: false
});