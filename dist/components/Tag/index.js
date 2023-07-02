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
import React, { useState } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import Icon from '../Icon';
import './index.scss';
/**
 * 标签是图形化标记界面上的元素的组件，达到快速识别、分组的目的。
 * ### 如何引入
 * ~~~js
 *
 * import { Tag  } from 'qlee-design';
 * ~~~
 */
var Tag = function (props) {
  var _a;
  var closable = props.closable,
    children = props.children,
    size = props.size,
    shape = props.shape,
    onClose = props.onClose,
    restProps = __rest(props, ['closable', 'children', 'size', 'shape', 'onClose']);
  console.log(children, 'children');
  var _b = useState(true),
    showTag = _b[0],
    setShowTag = _b[1];
  if (!showTag) {
    return null;
  }
  var handleClick = function (e) {
    setShowTag(false);
    onClose && onClose(children, e);
  };
  var classes = classNames(
    'tag_wrap',
    ((_a = {}), (_a['tag_size_'.concat(size)] = size), (_a['tag_shape_'.concat(shape)] = shape), _a)
  );
  return React.createElement(
    'div',
    __assign({ className: classes }, restProps),
    React.createElement('span', null, children),
    closable &&
      React.createElement(
        'span',
        { className: 'icon', onClick: handleClick },
        React.createElement(Icon, { icon: faXmark })
      )
  );
};
Tag.defaultProps = {
  size: 'small',
  shape: 'square',
};
export default Tag;
