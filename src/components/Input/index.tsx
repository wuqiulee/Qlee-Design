import React, { FC, FocusEvent } from 'react';
import classNames from 'classnames';
import Styles from './index.module.scss';

export interface InputProps {
  defaultValue?: string;
  disabled?: boolean;
}

const Input: FC<InputProps> = (props) => {
  const { defaultValue, disabled } = props;
  const classes = classNames(Styles.input_wrap, {
    [Styles.input_focus]: !disabled,
    [Styles.input_disabled]: disabled,
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
    />
  );
};

Input.defaultProps = {
  defaultValue: '',
  disabled: false,
};

export default Input;
