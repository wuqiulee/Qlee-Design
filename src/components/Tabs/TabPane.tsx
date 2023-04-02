import React, { useContext, useRef, ReactNode, CSSProperties, MouseEvent } from 'react';
import classnames from 'classnames';
import { TabsContext } from './index';
import './index.scss';

export interface TabPaneProps {
  tab: ReactNode;
  itemKey: string;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
  closable?: boolean; // 是否支持关闭选项
}

const TabPane: React.FC<TabPaneProps> = (props) => {
  const { tab, itemKey, children, className, style, disabled, closable } = props;
  const { activeKey, onChange, onTabClose } = useContext(TabsContext);
  const TabRef = useRef(null);

  const classes = classnames('tabPane', className, {
    active: activeKey === itemKey,
    tabs_disabled: disabled,
  });

  // 切换 tab 页触发的回调
  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(itemKey);
    }
  };
  // 关闭 tab 页触发的回调
  const handleClose = (e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    const ele = TabRef.current! as HTMLSpanElement;
    ele.remove();
    onTabClose && onTabClose(itemKey);
  };
  return (
    <li className={classes} style={style} onClick={handleClick} ref={TabRef}>
      <span>{tab}</span>
      {closable && (
        <span className="tabs_closable" onClick={handleClose}>
          ×
        </span>
      )}
    </li>
  );
};

TabPane.defaultProps = {
  children: '',
  className: '',
  style: {},
  disabled: false,
  closable: false,
};
TabPane.displayName = 'TabPane';

export default TabPane;
