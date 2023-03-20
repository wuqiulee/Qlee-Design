import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';
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
  block?: boolean;
  children: ReactNode;
  style?: CSSProperties;
  onClick?: (event: MouseEvent) => void;
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
    block = false,
    children,
    style,
    onClick,
    ...restProps
  } = props;

  const classes = classnames(Styles.base, className, {
    [Styles[`btn_${btnType}`]]: btnType,
    [Styles[`solid_${btnType}`]]: theme === 'solid',
    [Styles.empty]: theme === 'borderless',
    [Styles[`btn_${size}`]]: size && size !== 'default',
    [Styles.disabled]: disabled,
    [Styles.block]: block,
  });

  return (
    <div className={classes} style={style} onClick={onClick} {...restProps}>
      {children}
    </div>
  );
};

export default Button;
