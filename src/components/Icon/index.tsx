import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import Styles from './index.module.scss';

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
  theme?: ThemeProps;
}

/* 基于Font Awesome进行二次封装 */
const Icon: React.FC<IconProps> = (props) => {
  const { className, theme, ...restProps } = props;
  const classes = classNames(className, {
    [Styles[`icon-${theme}`]]: theme,
  });
  return <FontAwesomeIcon className={classes} {...restProps} />;
};

Icon.defaultProps = {
  theme: undefined,
};

export default Icon;
