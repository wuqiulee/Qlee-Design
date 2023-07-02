import {
  FC,
  InputHTMLAttributes,
  FocusEvent,
  ReactNode,
  CSSProperties,
  ChangeEvent,
  MouseEvent,
} from 'react';
import './index.scss';
type SizeType = 'default' | 'large' | 'small';
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix' | 'suffix'> {
  /** 默认值 */
  defaultValue?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 输入框大小 */
  size?: SizeType;
  /** 输入框前缀 */
  prefix?: ReactNode;
  /** 输入框后缀 */
  suffix?: ReactNode;
  /** 前置标签 */
  addonBefore?: ReactNode;
  /** 后置标签 */
  addonAfter?: ReactNode;
  /** 类名 */
  className?: string;
  /** 样式名 */
  style?: CSSProperties;
  /** 输入框有内容且 hover或focus时展示清除按钮 */
  showClear?: boolean;
  /** 输入框聚焦的回调 */
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  /** 输入框失焦的回调 */
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  /** 输入框内容变化时的回调 */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  /** 点击清除按钮时的回调 */
  onClear?: (e: MouseEvent<SVGSVGElement>) => void;
}
/**
 * 输入框是最基本的接收用户文本输入的组件
 * ### 如何引入
 * ~~~js
 *
 * import { Input } from 'qlee-design';
 * ~~~
 */
declare const Input: FC<InputProps>;
export default Input;
