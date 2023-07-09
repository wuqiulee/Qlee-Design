import React, { Dispatch, FC, MouseEvent, ReactNode, SetStateAction, useEffect } from 'react';
import classNames from 'classnames';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Icon from '../Icon';
import Button, { ButtonProps } from '../Button';

interface ModalProps {
  /** 弹窗标题 */
  title?: ReactNode;
  /** 是否显示弹窗 */
  visible?: Boolean;
  /** 模态框内容 */
  children: ReactNode;
  /** 模态框宽度 */
  width?: number;
  /** 模态框高度 */
  height?: number;
  /** 确认按钮的文字 */
  okText?: string;
  /** 取消按钮的文字 */
  cancelText?: string;
  /** 是否允许通过点击遮罩来关闭模态框，需与setVisible搭配使用 */
  maskClosable?: Boolean;
  /** 确认按钮的props */
  okBtnProps?: ButtonProps;
  /** 取消按钮的props */
  cancelBtnProps?: ButtonProps;
  /** 是否开启全屏 */
  fullScreen?: Boolean;
  /** 点击确认按钮时的回调函数 */
  onOk?: () => void;
  /** 点击取消按钮时的回调函数 */
  onCancel?: () => void;
  /** 控制模态框显示和隐藏的函数，需与setVisible搭配使用 */
  setVisible?: Dispatch<SetStateAction<boolean>>;
}

/**
 * 模态对话框用于等待用户响应、告知用户重要信息或在不丢失上下文的情况下展示更多信息
 * ### 如何引入
 * ~~~js
 *
 * import { Modal  } from 'qlee-design';
 * ~~~
 */
const Modal: FC<ModalProps> = (props) => {
  const {
    title,
    visible,
    children,
    width,
    height,
    okText,
    cancelText,
    maskClosable,
    okBtnProps,
    cancelBtnProps,
    fullScreen,
    onOk,
    onCancel,
    setVisible,
  } = props;

  const classes = classNames('modal_wrap', {
    modal_full: fullScreen,
  });

  const handleClickMask = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (maskClosable && target.className === 'modal_mask') {
      if (!setVisible) {
        throw new Error('缺少setVisible，maskClosable需与setVisible搭配使用');
      }
      setVisible(false);
    }
  };

  // 模态框打开时隐藏滚动条避免页面滚动
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [visible]);

  return (
    <div
      className="modal_mask"
      style={{ display: visible ? 'block' : 'none' }}
      onClick={handleClickMask}
    >
      <div className={classes} style={{ width, height }}>
        <div className="modal_title">
          <span>{title}</span>
          <span className="icon" onClick={onCancel}>
            <Icon icon={faXmark} />
          </span>
        </div>
        <div className="modal_content">{children}</div>
        <div className="modal_btn">
          <Button onClick={onCancel} {...okBtnProps}>
            {cancelText}
          </Button>
          <Button style={{ margin: '0 0 0 4px' }} onClick={onOk} {...cancelBtnProps}>
            {okText}
          </Button>
        </div>
      </div>
    </div>
  );
};

Modal.defaultProps = {
  visible: false,
  width: 450,
  okText: '确认',
  cancelText: '取消',
  maskClosable: false,
  okBtnProps: { btnType: 'tertiary' },
  fullScreen: false,
};

export default Modal;
