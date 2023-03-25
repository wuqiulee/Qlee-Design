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
  disabled?: boolean;
}

const TabPane: React.FC<TabPaneProps> = (props) => {
  const { tab, itemKey, children, className, style, disabled } = props;
  const { activeKey, onChange } = useContext(TabsContext);

  const classes = classnames(Styles.tabPane, className, {
    [Styles.active]: activeKey === itemKey,
    [Styles.disabled]: disabled,
  });

  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(itemKey);
    }
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
  disabled: false,
};
TabPane.displayName = 'TabPane';

export default TabPane;
