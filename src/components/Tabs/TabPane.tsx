import React, { useContext, ReactNode } from 'react';
import { TabsContext } from './index';

export interface TabPaneProps {
  tab: ReactNode;
  itemKey: string;
  children?: ReactNode;
}

const TabPane: React.FC<TabPaneProps> = (props) => {
  const { tab, itemKey, children } = props;
  const { activeKey, onChange } = useContext(TabsContext);
  const handleClick = () => {
    onChange && onChange(itemKey);
  };
  return <li onClick={handleClick}>{tab}</li>;
};

TabPane.defaultProps = {
  children: '',
};
TabPane.displayName = 'TabPane';

export default TabPane;
