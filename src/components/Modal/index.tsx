import React, { FC, ReactNode, useEffect } from 'react';
import classNames from 'classnames';
import './index.scss';
import Button from '../Button';

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
  /** 点击确认按钮时的回调函数 */
  onOk?: () => void;
  /** 点击取消按钮时的回调函数 */
  onCancel?: () => void;
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
  const { title, visible, children, width, height, okText, cancelText, onOk, onCancel } = props;
  const classes = classNames('modal_wrap');

  if (!visible) {
    return null;
  }

  // 模态框打开时隐藏滚动条避免页面滚动
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [visible]);

  return (
    <div className="modal_mask">
      <div className={classes} style={{ width, height }}>
        <h3>{title}</h3>
        <>{children}</>
        <div className="modal_btn">
          <Button btnType="tertiary" onClick={onCancel}>
            {cancelText}
          </Button>
          <Button style={{ margin: '0 0 0 4px' }} onClick={onOk}>
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
};

export default Modal;
