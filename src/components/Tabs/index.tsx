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
  activeKey?: string; // 当前激活的 tab 页的 itemKey 值
  onChange?: (activeKey: string) => void;
}
interface ContextType {
  activeKey: string;
  onChange?: (activeKey: string) => void;
}

export const TabsContext = createContext<ContextType>({
  activeKey: '0',
});

const Tabs: React.FC<TabsProps> = (props) => {
  const { type, children, mode, className, activeKey = '0', onChange } = props;
  const [currentActive, setActive] = useState<string>(activeKey);

  const classes = classnames(Styles.base, className, {});

  // 切换 tab 页时的回调函数
  const handleChange = (key: string) => {
    setActive(key);
    onChange && onChange(key);
  };

  const contextValue: ContextType = {
    activeKey: currentActive,
    onChange: handleChange,
  };

  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      const childElement = child as React.FunctionComponentElement<TabPaneProps>;
      const { displayName } = childElement.type;
      if (displayName !== 'TabPane') {
        throw new Error('必须是TabPane组件');
      }
      return React.cloneElement(childElement, {
        itemKey: child?.props?.itemKey,
      });
    });
  };
  return (
    <TabsContext.Provider value={contextValue}>
      <div className={classes}>
        <ul className={Styles.tabs_wrap}>{renderChildren()}</ul>
        <div>{children[0].props.children}</div>
      </div>
    </TabsContext.Provider>
  );
};

Tabs.defaultProps = {
  type: 'line',
  children: null,
  mode: 'horizontal',
  className: '',
  activeKey: '0',
  onChange: undefined,
};

export { TabPane, Tabs };
