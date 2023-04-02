import React, { useState, createContext, CSSProperties, ReactNode, Children } from 'react';
import classnames from 'classnames';
import TabPane, { TabPaneProps } from './TabPane';
import './index.scss';

type TabsType = 'line' | 'card' | 'button';
type ModeType = 'horizontal' | 'vertical';
interface TabsProps {
  /** 标签栏的样式，可选line、 card、 button */
  type?: TabsType;
  children?: any;
  /** tab 的位置 */
  mode?: ModeType;
  /** 类名 */
  className?: string;
  /** 样式名 */
  style?: CSSProperties;
  /** 初始激活的itemKey */
  defaultActiveKey?: string;
  /** 切换tab触发的函数 */
  onChange?: (activeKey: string) => void;
  /** 标签栏内容扩展 */
  tabBarExtraContent?: ReactNode;
  /** 关闭tab页触发的回调 */
  onTabClose?: (itemKey: string) => void;
}
interface ContextType {
  activeKey: string;
  onChange?: (activeKey: string) => void;
  onTabClose?: (itemKey: string) => void;
}

export const TabsContext = createContext<ContextType>({
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
const Tabs: React.FC<TabsProps> = (props) => {
  const {
    type,
    children,
    mode,
    className,
    style,
    defaultActiveKey = '',
    onChange,
    onTabClose,
    tabBarExtraContent,
  } = props;
  // 如果没传defaultActiveKey则取第一个TabPane的itemKey
  const [currentActive, setActive] = useState<string>(
    defaultActiveKey || children[0]?.props?.itemKey
  );
  const [refresh, setRefresh] = useState<any>([0, '']);

  const classes = classnames(className, {
    [`tabs_${type}`]: mode === 'horizontal',
    [`tabs_vertical_${type}`]: mode === 'vertical',
  });

  const wrapStyle = mode === 'vertical' ? { ...style, display: 'flex' } : style;

  // 切换 tab 页时的回调函数
  const handleChange = (key: string) => {
    setActive(key);
    onChange && onChange(key);
  };

  // 关闭 tab 页触发的回调
  const handleClose = (itemKey: string) => {
    setRefresh([refresh[0] + 1, itemKey]);
    onTabClose && onTabClose(itemKey);
  };

  const contextValue: ContextType = {
    activeKey: currentActive,
    onChange: handleChange,
    onTabClose: handleClose,
  };

  // 渲染TabPane组件
  const renderTabPane = () => {
    return React.Children.map(children, (child) => {
      const childElement = child as React.FunctionComponentElement<TabPaneProps>;
      const { displayName } = childElement.type;
      const { disabled, itemKey, closable } = childElement.props;
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
        itemKey: child?.props?.itemKey,
      });
    });
  };

  // 渲染Tabpane组件的children
  const renderContent = () => {
    return React.Children.map(children, (child) => {
      if (child?.props?.itemKey === currentActive && refresh[1] !== currentActive) {
        return child.props.children;
      }
      return null;
    });
  };
  return (
    <TabsContext.Provider value={contextValue}>
      <div style={wrapStyle}>
        <ul className={classes}>
          {renderTabPane()}
          {tabBarExtraContent && <div className="tabs_bar_extra">{tabBarExtraContent}</div>}
        </ul>
        <div className="tabs_content_wrap">{renderContent()}</div>
      </div>
    </TabsContext.Provider>
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
