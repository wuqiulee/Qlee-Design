import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import classnames from 'classnames';
import Styles from './index.module.scss';

type BtnType = 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger';
type ThemeType = 'light' | 'solid' | 'borderless';
type SizeType = 'large' | 'default' | 'small';
interface ButtonProps {
  btnType?: BtnType;
  className?: 'string';
  theme?: ThemeType;
  size?: SizeType;
  disabled?: boolean;
  children: ReactNode;
}
type NativeBtnProps = ButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorBtnProps = ButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type IProps = Partial<NativeBtnProps & AnchorBtnProps>;

const Button: React.FC<IProps> = (props) => {
  const {
    btnType = 'primary',
    className,
    theme = 'light',
    size = 'default',
    disabled = false,
    children,
    ...restProps
  } = props;

  const classes = classnames(Styles.base, className, {
    [Styles[`btn_${btnType}`]]: btnType,
    [Styles[`solid_${btnType}`]]: theme === 'solid',
    [Styles.empty]: theme === 'borderless',
    [Styles[`btn_${size}`]]: size && size !== 'default',
    [Styles.disabled]: disabled,
  });

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

export default Button;
