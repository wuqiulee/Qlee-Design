import React, { ReactNode, CSSProperties } from 'react';
import './index.scss';
export interface TabPaneProps {
  tab: ReactNode;
  itemKey: string;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
  closable?: boolean;
}
declare const TabPane: React.FC<TabPaneProps>;
export default TabPane;
