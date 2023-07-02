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
import React, { useState, createContext } from 'react';
import classnames from 'classnames';
import TabPane from './TabPane';
import './index.scss';
export var TabsContext = createContext({
  activeKey: '',
});
/**
 * 当内容需要分组并在不同模块页面中展示，可使用 Tabs 标签栏目对不同的组/页之间进行切换
 * ### 如何引入
 * ~~~js
 *
 * import { Tabs, TabPane } from 'qlee-design';
 * ~~~
 */
var Tabs = function (props) {
  var _a;
  var _b, _c;
  var type = props.type,
    children = props.children,
    mode = props.mode,
    className = props.className,
    style = props.style,
    _d = props.defaultActiveKey,
    defaultActiveKey = _d === void 0 ? '' : _d,
    onChange = props.onChange,
    onTabClose = props.onTabClose,
    tabBarExtraContent = props.tabBarExtraContent;
  // 如果没传defaultActiveKey则取第一个TabPane的itemKey
  var _e = useState(
      defaultActiveKey ||
        ((_c = (_b = children[0]) === null || _b === void 0 ? void 0 : _b.props) === null ||
        _c === void 0
          ? void 0
          : _c.itemKey)
    ),
    currentActive = _e[0],
    setActive = _e[1];
  var _f = useState([0, '']),
    refresh = _f[0],
    setRefresh = _f[1];
  var classes = classnames(
    className,
    ((_a = {}),
    (_a['tabs_'.concat(type)] = mode === 'horizontal'),
    (_a['tabs_vertical_'.concat(type)] = mode === 'vertical'),
    _a)
  );
  var wrapStyle = mode === 'vertical' ? __assign(__assign({}, style), { display: 'flex' }) : style;
  // 切换 tab 页时的回调函数
  var handleChange = function (key) {
    setActive(key);
    onChange && onChange(key);
  };
  // 关闭 tab 页触发的回调
  var handleClose = function (itemKey) {
    setRefresh([refresh[0] + 1, itemKey]);
    onTabClose && onTabClose(itemKey);
  };
  var contextValue = {
    activeKey: currentActive,
    onChange: handleChange,
    onTabClose: handleClose,
  };
  // 渲染TabPane组件
  var renderTabPane = function () {
    return React.Children.map(children, function (child) {
      var _a;
      var childElement = child;
      var displayName = childElement.type.displayName;
      var _b = childElement.props,
        disabled = _b.disabled,
        itemKey = _b.itemKey,
        closable = _b.closable;
      // Tabs的children必须是TabPane，否则抛出error
      if (displayName !== 'TabPane') {
        throw new Error('children must be TabPane component');
      }
      // defaultActiveKey不能是绑定了disabled属性的TabPane
      if (disabled && itemKey === defaultActiveKey) {
        throw new Error('defaultActiveKey Cannot be a disabled TabPane component');
      }
      // TabPane组件不能同时存在disabled和closable
      if (disabled && closable) {
        throw new Error(
          'Different TabPane components is props exist simultaneously disabled and closable'
        );
      }
      return React.cloneElement(childElement, {
        itemKey:
          (_a = child === null || child === void 0 ? void 0 : child.props) === null || _a === void 0
            ? void 0
            : _a.itemKey,
      });
    });
  };
  // 渲染Tabpane组件的children
  var renderContent = function () {
    return React.Children.map(children, function (child) {
      var _a;
      if (
        ((_a = child === null || child === void 0 ? void 0 : child.props) === null || _a === void 0
          ? void 0
          : _a.itemKey) === currentActive &&
        refresh[1] !== currentActive
      ) {
        return child.props.children;
      }
      return null;
    });
  };
  return React.createElement(
    TabsContext.Provider,
    { value: contextValue },
    React.createElement(
      'div',
      { style: wrapStyle },
      React.createElement(
        'ul',
        { className: classes },
        renderTabPane(),
        tabBarExtraContent &&
          React.createElement('div', { className: 'tabs_bar_extra' }, tabBarExtraContent)
      ),
      React.createElement('div', { className: 'tabs_content_wrap' }, renderContent())
    )
  );
};
Tabs.defaultProps = {
  type: 'line',
  children: null,
  mode: 'horizontal',
  className: '',
  onChange: undefined,
  style: {},
  defaultActiveKey: '',
  tabBarExtraContent: null,
  onTabClose: undefined,
};
export { TabPane, Tabs };
