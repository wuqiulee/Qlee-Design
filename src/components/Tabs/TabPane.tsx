import React, { ReactNode } from 'react';

interface TabPaneProps {
  tab: ReactNode;
  itemKey?: string;
}

const TabPane: React.FC<TabPaneProps> = (props) => {
  const { tab, itemKey } = props;
  return <li>{tab}</li>;
};

TabPane.defaultProps = {
  itemKey: '1',
};

export default TabPane;
