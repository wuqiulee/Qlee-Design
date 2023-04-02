import React, { FC, InputHTMLAttributes, FocusEvent } from 'react';
import classNames from 'classnames';
import './index.scss';

type SizeType = 'default' | 'large' | 'small';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** 默认值 */
  defaultValue?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 输入框大小 */
  size?: SizeType;
}

/**
 * 输入框是最基本的接收用户文本输入的组件
 * ### 如何引入
 * ~~~js
 *
 * import { Input } from 'qlee-design';
 * ~~~
 */
const Input: FC<InputProps> = (props) => {
  const { defaultValue, disabled, size, ...restProps } = props;
  const classes = classNames('input_wrap', {
    input_focus: !disabled,
    input_disabled: disabled,
    [`input_size_${size}`]: size,
  });

  // 获取焦点
  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    e.target.style.borderColor = 'blue';
  };
  // 失去焦点
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    e.target.style.borderColor = 'transparent';
  };
  return (
    <input
      type="text"
      className={classes}
      defaultValue={defaultValue}
      onFocus={handleFocus}
      onBlur={handleBlur}
      disabled={disabled}
      {...restProps}
    />
  );
};

Input.defaultProps = {
  disabled: false,
  size: 'default',
};

export default Input;
