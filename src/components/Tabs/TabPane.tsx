import React, { useContext, ReactNode, CSSProperties } from 'react';
import classnames from 'classnames';
import { TabsContext } from './index';
import Styles from './index.module.scss';

export interface TabPaneProps {
  tab: ReactNode;
  itemKey: string;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const TabPane: React.FC<TabPaneProps> = (props) => {
  const { tab, itemKey, children, className, style } = props;
  const { activeKey, onChange } = useContext(TabsContext);
  console.log(activeKey, itemKey);

  const classes = classnames(Styles.tabPane, className, {
    [Styles.active]: activeKey === itemKey,
  });

  const handleClick = () => {
    onChange && onChange(itemKey);
  };
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {tab}
    </li>
  );
};

TabPane.defaultProps = {
  children: '',
  className: '',
  style: {},
};
TabPane.displayName = 'TabPane';

export default TabPane;
