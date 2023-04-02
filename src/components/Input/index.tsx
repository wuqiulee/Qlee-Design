import React, {
  FC,
  InputHTMLAttributes,
  FocusEvent,
  ReactNode,
  CSSProperties,
  useRef,
  useEffect,
  useState,
} from 'react';
import classNames from 'classnames';
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
  const {
    defaultValue,
    disabled,
    size,
    addonBefore,
    addonAfter,
    prefix,
    suffix,
    className,
    style,
    ...restProps
  } = props;

  const [inputStyle, setInputStyle] = useState({});
  const prefixRef = useRef(null);
  const suffixRef = useRef(null);

  const classes = classNames('input_wrap', className, {
    input_focus: !disabled,
    input_disabled: disabled,
    [`input_size_${size}`]: size,
  });
  const boxClasses = classNames('input_box', {
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

  // 动态获取Input padding
  useEffect(() => {
    const prefixEle: HTMLElement | null = prefixRef.current;
    const suffixEle: HTMLElement | null = suffixRef.current;
    const newStyle = {
      ...style,
      paddingLeft: prefix ? prefixEle!.offsetWidth + 10 : 12,
      paddingRight: suffix ? suffixEle!.offsetWidth + 10 : 12,
    };
    setInputStyle(newStyle);
  }, [prefix, suffix]);

  return (
    <div className={boxClasses}>
      {addonBefore && <div className="input_addon">{addonBefore}</div>}
      <div className="input_content">
        <span className="input_prefix" ref={prefixRef}>
          {prefix}
        </span>
        <input
          type="text"
          className={classes}
          defaultValue={defaultValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          style={inputStyle}
          {...restProps}
        />
        <span className="input_suffix" ref={suffixRef}>
          {suffix}
        </span>
      </div>
      {addonAfter && <div className="input_addon">{addonAfter}</div>}
    </div>
  );
};

Input.defaultProps = {
  disabled: false,
  size: 'default',
};

export default Input;
