var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  };
import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Icon from '../Icon';
import './index.scss';
/**
 * 输入框是最基本的接收用户文本输入的组件
 * ### 如何引入
 * ~~~js
 *
 * import { Input } from 'qlee-design';
 * ~~~
 */
var Input = function (props) {
  var _a, _b;
  var defaultValue = props.defaultValue,
    disabled = props.disabled,
    size = props.size,
    addonBefore = props.addonBefore,
    addonAfter = props.addonAfter,
    prefix = props.prefix,
    suffix = props.suffix,
    className = props.className,
    style = props.style,
    showClear = props.showClear,
    onFocus = props.onFocus,
    onBlur = props.onBlur,
    onChange = props.onChange,
    onClear = props.onClear,
    restProps = __rest(props, [
      'defaultValue',
      'disabled',
      'size',
      'addonBefore',
      'addonAfter',
      'prefix',
      'suffix',
      'className',
      'style',
      'showClear',
      'onFocus',
      'onBlur',
      'onChange',
      'onClear',
    ]);
  var _c = useState({}),
    inputStyle = _c[0],
    setInputStyle = _c[1];
  var prefixRef = useRef(null);
  var suffixRef = useRef(null);
  var disableRef = useRef(false);
  var inputRef = useRef(null);
  var classes = classNames(
    'input_wrap',
    className,
    ((_a = {
      input_focus: !disabled,
      input_disabled: disabled,
    }),
    (_a['input_size_'.concat(size)] = size),
    _a)
  );
  var boxClasses = classNames(
    'input_box',
    ((_b = {}), (_b['input_size_'.concat(size)] = size), (_b.input_showclear = showClear), _b)
  );
  // 获取焦点
  var handleFocus = function (e) {
    e.target.style.borderColor = 'blue';
    disableRef.current = true;
    if (showClear && e.target.value) {
      suffixRef.current.style.display = 'block';
    }
    onFocus && onFocus(e);
  };
  // 失去焦点
  var handleBlur = function (e) {
    e.target.style.borderColor = 'transparent';
    disableRef.current = false;
    showClear &&
      setTimeout(function () {
        suffixRef.current.style.display = 'none';
      }, 0);
    onBlur && onBlur(e);
  };
  var handleMouseEnter = function (e) {
    if (showClear && !disableRef.current && e.target.value) {
      suffixRef.current.style.display = 'block';
    }
  };
  var handleMouseLeave = function () {
    if (showClear && !disableRef.current) {
      suffixRef.current.style.display = 'none';
    }
  };
  var handleInput = function (e) {
    var ele = suffixRef.current;
    var value = e.target.value;
    onChange && onChange(e);
    if (!value && ele && showClear) {
      disableRef.current = true;
      ele.style.display = 'none';
      return;
    }
    // value有值再显示
    if (value && ele) {
      ele.style.display = 'block';
    }
  };
  // 清空输入框
  var clearInput = function (e) {
    inputRef.current.value = '';
    suffixRef.current.style.display = 'none';
    onClear && onClear(e);
  };
  // 动态获取Input padding
  useEffect(
    function () {
      var prefixEle = prefixRef.current;
      var suffixEle = suffixRef.current;
      var newStyle = __assign(__assign({}, style), {
        paddingLeft: prefix ? prefixEle.offsetWidth + 10 : 12,
        paddingRight: suffix ? suffixEle.offsetWidth + 10 : 12,
      });
      setInputStyle(newStyle);
    },
    [prefix, suffix]
  );
  return React.createElement(
    'div',
    { className: boxClasses },
    addonBefore && React.createElement('div', { className: 'input_addon' }, addonBefore),
    React.createElement(
      'div',
      {
        className: 'input_content',
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
      },
      prefix && React.createElement('span', { className: 'input_prefix', ref: prefixRef }, prefix),
      React.createElement(
        'input',
        __assign(
          {
            type: 'text',
            className: classes,
            ref: inputRef,
            defaultValue: defaultValue,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onInput: handleInput,
            disabled: disabled,
            style: inputStyle,
          },
          restProps
        )
      ),
      (suffix || showClear) &&
        React.createElement(
          'span',
          { className: 'input_suffix', ref: suffixRef },
          showClear
            ? React.createElement(Icon, { icon: faCircleXmark, onClick: clearInput })
            : suffix
        )
    ),
    addonAfter && React.createElement('div', { className: 'input_addon' }, addonAfter)
  );
};
Input.defaultProps = {
  disabled: false,
  size: 'default',
  showClear: false,
};
export default Input;
