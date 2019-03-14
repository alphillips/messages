var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import observer from 'node-observer';
import jsxToString from 'jsx-to-string';
import './messages.css';

var Messages = function (_React$Component) {
  _inherits(Messages, _React$Component);

  function Messages(props) {
    _classCallCheck(this, Messages);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.componentWillUnmount = function () {
      observer.unsubscribe('error-listener', "error");
    };

    _this.makeString = function (message) {
      if (message) {
        if ((typeof message === 'undefined' ? 'undefined' : _typeof(message)) === "object") {
          return jsxToString(message);
        }
        return message;
      }
      return null;
    };

    _this.state = {
      info: null,
      warning: null,
      success: null,
      error: null
    };
    _this.apiHook = props.apiHook === false ? false : true;
    return _this;
  }

  Messages.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.setState(function (prevState, props) {
      return {
        info: _this2.props.info,
        warning: _this2.props.warning,
        success: _this2.props.success,
        error: _this2.props.error
      };
    });

    if (this.apiHook) {
      observer.subscribe('error-listener', "error", function (who, data) {
        this.setState(function (prevState, props) {
          return {
            error: data
          };
        });
      }.bind(this));
    }
  };

  Messages.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    this.setState(function (prevState, props) {
      return {
        info: nextProps.info,
        warning: nextProps.warning,
        success: nextProps.success,
        error: nextProps.error
      };
    });
  };

  Messages.prototype.render = function render() {
    return React.createElement(
      'div',
      { className: 'message-container' },
      this.state.info && React.createElement(
        'div',
        { className: 'uikit-page-alerts', role: 'alert' },
        React.createElement('div', { dangerouslySetInnerHTML: { __html: this.makeString(this.state.info) } })
      ),
      this.state.warning && React.createElement(
        'div',
        { className: 'uikit-page-alerts uikit-page-alerts--warning', role: 'alert' },
        React.createElement('div', { dangerouslySetInnerHTML: { __html: this.makeString(this.state.warning) } })
      ),
      this.state.success && React.createElement(
        'div',
        { className: 'uikit-page-alerts uikit-page-alerts--success', role: 'alert' },
        React.createElement('div', { dangerouslySetInnerHTML: { __html: this.makeString(this.state.success) } })
      ),
      this.state.error && React.createElement(
        'div',
        { className: 'uikit-page-alerts uikit-page-alerts--error', role: 'alert' },
        React.createElement('div', { dangerouslySetInnerHTML: { __html: this.makeString(this.state.error) } })
      )
    );
  };

  return Messages;
}(React.Component);

export default Messages;