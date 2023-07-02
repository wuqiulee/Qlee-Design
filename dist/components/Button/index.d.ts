import {
  FC,
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  CSSProperties,
  ReactNode,
  MouseEvent,
} from 'react';
import './index.scss';
type BtnType = 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger';
type ThemeType = 'light' | 'solid' | 'borderless';
type SizeType = 'large' | 'default' | 'small';
export interface ButtonProps {
  /** 按钮类型，可选值： */
  btnType?: BtnType;
  /** 类名 */
  className?: string;
  /** 按钮主题，可选值：solid（有背景色）、 borderless（无背景色）、 light（浅背景色） */
  theme?: ThemeType;
  /** 按钮大小，可选值：large、default、small */
  size?: SizeType;
  /** 禁用状态 */
  disabled?: boolean;
  /** 块级按钮 */
  block?: boolean;
  /** 子元素 */
  children?: ReactNode;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 点击事件 */
  onClick?: (event: MouseEvent) => void;
}
type NativeBtnProps = ButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorBtnProps = ButtonProps & AnchorHTMLAttributes<HTMLElement>;
type IProps = Partial<NativeBtnProps & AnchorBtnProps>;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 如何引入
 * ~~~js
 *
 * import { Button } from 'qlee-design';
 * ~~~
 */
declare const Button: FC<IProps>;
export default Button;
