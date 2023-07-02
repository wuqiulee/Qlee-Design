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
import React, { useRef } from 'react';
import classnames from 'classnames';
import {
  faCircleInfo,
  faTriangleExclamation,
  faCircleExclamation,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import Icon from '../Icon';
import './index.scss';
var IconMap = {
  info: {
    color: 'blue',
    icon: faCircleInfo,
  },
  warning: {
    color: 'orange',
    icon: faTriangleExclamation,
  },
  danger: {
    color: 'red',
    icon: faCircleExclamation,
  },
  success: {
    color: 'green',
    icon: faCircleCheck,
  },
};
/**
 * Input 输入框 通过鼠标或键盘输入内容，是最基础的表单域的包装。
 * ### 如何引入
 * ~~~js
 *
 * import { Banner } from 'qlee-design';
 * ~~~
 */
var Banner = function (props) {
  var _a;
  var _b = props.type,
    type = _b === void 0 ? 'info' : _b,
    description = props.description,
    fullMode = props.fullMode,
    bordered = props.bordered,
    title = props.title,
    className = props.className,
    icon = props.icon,
    onClose = props.onClose,
    restProps = __rest(props, [
      'type',
      'description',
      'fullMode',
      'bordered',
      'title',
      'className',
      'icon',
      'onClose',
    ]);
  var bannerRef = useRef(null);
  var classes = classnames(
    'banner_wrap',
    className,
    ((_a = {}),
    (_a['banner_'.concat(type)] = type),
    (_a.banner_fullMode = !fullMode),
    (_a['banner_border_'.concat(type)] = bordered && !fullMode),
    _a)
  );
  var handleClick = function (e) {
    bannerRef.current.style.display = 'none';
    onClose && onClose(e);
  };
  var iconStyle = {
    marginRight: 8,
    fontSize: 18,
    color: IconMap[type].color,
  };
  return React.createElement(
    'div',
    __assign({ className: classes, ref: bannerRef }, restProps),
    React.createElement(
      'div',
      { className: 'banner_content' },
      React.createElement('div', { className: 'banner_title' }, title),
      React.createElement(
        'div',
        null,
        icon !== null &&
          React.createElement(Icon, { icon: icon || IconMap[type].icon, style: iconStyle }),
        React.createElement('span', null, description)
      )
    ),
    React.createElement(
      'div',
      { className: 'banner_close_icon', onClick: handleClick },
      React.createElement(
        'svg',
        {
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          width: '1em',
          height: '1em',
          focusable: 'false',
          'aria-hidden': 'true',
        },
        React.createElement('path', {
          d: 'M17.6568 19.7782C18.2426 20.3639 19.1924 20.3639 19.7782 19.7782C20.3639 19.1924 20.3639 18.2426 19.7782 17.6568L14.1213 12L19.7782 6.34313C20.3639 5.75734 20.3639 4.8076 19.7782 4.22181C19.1924 3.63602 18.2426 3.63602 17.6568 4.22181L12 9.87866L6.34313 4.22181C5.75734 3.63602 4.8076 3.63602 4.22181 4.22181C3.63602 4.8076 3.63602 5.75734 4.22181 6.34313L9.87866 12L4.22181 17.6568C3.63602 18.2426 3.63602 19.1924 4.22181 19.7782C4.8076 20.3639 5.75734 20.3639 6.34313 19.7782L12 14.1213L17.6568 19.7782Z',
          fill: 'currentColor',
        })
      )
    )
  );
};
Banner.defaultProps = {
  type: 'info',
  fullMode: true,
  bordered: false,
};
export default Banner;
