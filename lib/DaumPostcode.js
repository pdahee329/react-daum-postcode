'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var daum = global.daum;

var DaumPostcode = function (_React$Component) {
  _inherits(DaumPostcode, _React$Component);

  function DaumPostcode(props) {
    _classCallCheck(this, DaumPostcode);

    var _this = _possibleConstructorReturn(this, (DaumPostcode.__proto__ || Object.getPrototypeOf(DaumPostcode)).call(this, props));

    _this.initiate = function () {
      var comp = _this;

      daum.postcode.load(function () {
        var Postcode = new daum.Postcode({
          oncomplete: function oncomplete(data) {
            comp.props.onComplete(data);
            if (comp.props.autoClose) comp.setState({ display: 'none' });
          },
          onresize: function onresize(size) {
            if (comp.props.autoResize) comp.setState({ height: size.height });
          },
          theme: comp.props.theme,
          animation: comp.props.animation,
          width: '100%',
          height: '100%'
        });

        Postcode.embed(_this.wrap, { q: _this.props.defaultQuery, autoClose: _this.props.autoClose });
      });
    };

    _this.state = {
      display: 'block',
      width: _this.props.width,
      height: _this.props.height
    };
    return _this;
  }

  _createClass(DaumPostcode, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.initiate();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', {
        ref: function ref(div) {
          _this2.wrap = div;
        },
        style: _extends({}, this.props.style, {
          display: this.state.display,
          width: this.state.width,
          height: this.state.height
        })
      });
    }
  }]);

  return DaumPostcode;
}(_react2.default.Component);

DaumPostcode.propTypes = {
  onComplete: _react2.default.PropTypes.func.isRequired,
  width: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string]),
  height: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string]),
  autoClose: _react2.default.PropTypes.bool,
  autoResize: _react2.default.PropTypes.bool,
  animation: _react2.default.PropTypes.bool,
  style: _react2.default.PropTypes.object,
  defaultQuery: _react2.default.PropTypes.string,
  theme: _react2.default.PropTypes.object
};

DaumPostcode.defaultProps = {
  width: '100%',
  height: 400,
  autoClose: false,
  autoResize: false,
  animation: false,
  style: null,
  defaultQuery: null,
  theme: null
};

exports.default = DaumPostcode;