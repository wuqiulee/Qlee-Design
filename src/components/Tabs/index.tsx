import React, { CSSProperties, ReactNode } from 'react';
import classnames from 'classnames';
import TabPane from './TabPane';
import Styles from './index.module.scss';

type TabsType = 'line' | 'card' | 'button';
type ModeType = 'horizontal' | 'vertical';
interface TabsProps {
  type?: TabsType;
  children?: ReactNode;
  mode?: ModeType; // 横向|纵向
  className?: string;
}

const Tabs: React.FC<TabsProps> = (props) => {
  const { type, children, mode, className } = props;

  const classes = classnames(Styles.base, className, {});
  return (
    <div className={classes}>
      <ul className={Styles.tabs_wrap}>{children}</ul>
    </div>
  );
};

Tabs.defaultProps = {
  type: 'line',
  children: null,
  mode: 'horizontal',
  className: '',
};

export { TabPane, Tabs };
