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
import React, { useEffect } from 'react';
import classNames from 'classnames';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Icon from '../Icon';
import './index.scss';
import Button from '../Button';
/**
 * 模态对话框用于等待用户响应、告知用户重要信息或在不丢失上下文的情况下展示更多信息
 * ### 如何引入
 * ~~~js
 *
 * import { Modal  } from 'qlee-design';
 * ~~~
 */
var Modal = function (props) {
  var title = props.title,
    visible = props.visible,
    children = props.children,
    width = props.width,
    height = props.height,
    okText = props.okText,
    cancelText = props.cancelText,
    maskClosable = props.maskClosable,
    okBtnProps = props.okBtnProps,
    cancelBtnProps = props.cancelBtnProps,
    fullScreen = props.fullScreen,
    onOk = props.onOk,
    onCancel = props.onCancel,
    setVisible = props.setVisible;
  var classes = classNames('modal_wrap', {
    modal_full: fullScreen,
  });
  var handleClickMask = function (e) {
    var target = e.target;
    if (maskClosable && target.className === 'modal_mask') {
      if (!setVisible) {
        throw new Error('缺少setVisible，maskClosable需与setVisible搭配使用');
      }
      setVisible(false);
    }
  };
  // 模态框打开时隐藏滚动条避免页面滚动
  useEffect(
    function () {
      if (visible) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    },
    [visible]
  );
  return React.createElement(
    'div',
    {
      className: 'modal_mask',
      style: { display: visible ? 'block' : 'none' },
      onClick: handleClickMask,
    },
    React.createElement(
      'div',
      { className: classes, style: { width: width, height: height } },
      React.createElement(
        'div',
        { className: 'modal_title' },
        React.createElement('span', null, title),
        React.createElement(
          'span',
          { className: 'icon', onClick: onCancel },
          React.createElement(Icon, { icon: faXmark })
        )
      ),
      React.createElement('div', { className: 'modal_content' }, children),
      React.createElement(
        'div',
        { className: 'modal_btn' },
        React.createElement(Button, __assign({ onClick: onCancel }, okBtnProps), cancelText),
        React.createElement(
          Button,
          __assign({ style: { margin: '0 0 0 4px' }, onClick: onOk }, cancelBtnProps),
          okText
        )
      )
    )
  );
};
Modal.defaultProps = {
  visible: false,
  width: 450,
  okText: '确认',
  cancelText: '取消',
  maskClosable: false,
  okBtnProps: { btnType: 'tertiary' },
  fullScreen: false,
};
export default Modal;
