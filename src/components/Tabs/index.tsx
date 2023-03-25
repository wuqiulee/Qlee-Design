import React, { useState, createContext, CSSProperties, ReactNode } from 'react';
import classnames from 'classnames';
import TabPane, { TabPaneProps } from './TabPane';
import Styles from './index.module.scss';

type TabsType = 'line' | 'card' | 'button';
type ModeType = 'horizontal' | 'vertical';
interface TabsProps {
  type?: TabsType;
  children?: any;
  mode?: ModeType; // 横向|纵向
  className?: string;
  style?: CSSProperties;
  defaultActiveKey?: string; // 初始激活的itemKey
  onChange?: (activeKey: string) => void; // 切换tab触发的函数
}
interface ContextType {
  activeKey: string;
  onChange?: (activeKey: string) => void;
}

export const TabsContext = createContext<ContextType>({
  activeKey: '',
});

const Tabs: React.FC<TabsProps> = (props) => {
  const { type, children, mode, className, style, defaultActiveKey = '', onChange } = props;
  // 如果没传defaultActiveKey则取第一个TabPane的itemKey
  const [currentActive, setActive] = useState<string>(
    defaultActiveKey || children[0]?.props?.itemKey
  );

  const classes = classnames(Styles.base, className, {
    [Styles[`tabs_${type}`]]: mode === 'horizontal',
    [Styles[`vertical_${type}`]]: mode === 'vertical',
  });

  const wrapStyle = mode === 'vertical' ? { ...style, display: 'flex' } : style;

  // 切换 tab 页时的回调函数
  const handleChange = (key: string) => {
    setActive(key);
    onChange && onChange(key);
  };

  const contextValue: ContextType = {
    activeKey: currentActive,
    onChange: handleChange,
  };

  // 渲染TabPane组件
  const renderTabPane = () => {
    return React.Children.map(children, (child) => {
      const childElement = child as React.FunctionComponentElement<TabPaneProps>;
      const { displayName } = childElement.type;
      const { disabled, itemKey } = childElement.props;
      // Tabs的children必须是Tabpane，否则抛出error
      if (displayName !== 'TabPane') {
        throw new Error('children must be Tabpane component');
      }
      // defaultActiveKey不能是绑定了disabled属性的Tabpane
      if (disabled && itemKey === defaultActiveKey) {
        throw new Error('defaultActiveKey Cannot be a disabled Tabpane component');
      }
      return React.cloneElement(childElement, {
        itemKey: child?.props?.itemKey,
      });
    });
  };

  // 渲染Tabpane组件的children
  const renderContent = () => {
    return React.Children.map(children, (child) => {
      if (child?.props?.itemKey === currentActive) {
        return child.props.children;
      }
      return null;
    });
  };
  return (
    <TabsContext.Provider value={contextValue}>
      <div style={wrapStyle}>
        <ul className={classes}>{renderTabPane()}</ul>
        <div className={Styles.content_wrap}>{renderContent()}</div>
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
};

export { TabPane, Tabs };
