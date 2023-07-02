import React, { useContext, useRef } from 'react';
import classnames from 'classnames';
import { TabsContext } from './index';
import './index.scss';
var TabPane = function (props) {
  var tab = props.tab,
    itemKey = props.itemKey,
    children = props.children,
    className = props.className,
    style = props.style,
    disabled = props.disabled,
    closable = props.closable;
  var _a = useContext(TabsContext),
    activeKey = _a.activeKey,
    onChange = _a.onChange,
    onTabClose = _a.onTabClose;
  var TabRef = useRef(null);
  var classes = classnames('tabPane', className, {
    active: activeKey === itemKey,
    tabs_disabled: disabled,
  });
  // 切换 tab 页触发的回调
  var handleClick = function () {
    if (!disabled && onChange) {
      onChange(itemKey);
    }
  };
  // 关闭 tab 页触发的回调
  var handleClose = function (e) {
    e.stopPropagation();
    var ele = TabRef.current;
    ele.remove();
    onTabClose && onTabClose(itemKey);
  };
  return React.createElement(
    'li',
    { className: classes, style: style, onClick: handleClick, ref: TabRef },
    React.createElement('span', null, tab),
    closable &&
      React.createElement('span', { className: 'tabs_closable', onClick: handleClose }, '\u00D7')
  );
};
TabPane.defaultProps = {
  children: '',
  className: '',
  style: {},
  disabled: false,
  closable: false,
};
TabPane.displayName = 'TabPane';
export default TabPane;
