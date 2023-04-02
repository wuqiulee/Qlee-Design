import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import './index.scss';

export type ThemeProps =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';

export interface IconProps extends FontAwesomeIconProps {
  /** 主题类型 */
  theme?: ThemeProps;
}

/**
 * 基于Font Awesome进行二次封装的icon图标。
 * ### 如何引入
 * ~~~js
 *
 * import { Icon } from 'qlee-design';
 * import { faThumbsUp, faUser, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
 * ~~~
 */
const Icon: React.FC<IconProps> = (props) => {
  const { className, theme, ...restProps } = props;
  const classes = classNames(className, {
    [`icon-${theme}`]: theme,
  });
  return <FontAwesomeIcon className={classes} {...restProps} />;
};

export default Icon;
