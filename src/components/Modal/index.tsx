import React, { FC, ReactNode } from 'react';
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
}

const Modal: FC<ModalProps> = (props) => {
  const { title, visible, children, width, height, okText, cancelText } = props;
  const classes = classNames('modal_wrap');
  if (!visible) {
    return null;
  }
  return (
    <div className="modal_mask">
      <div className={classes} style={{ width, height }}>
        <h3>{title}</h3>
        <>{children}</>
        <div className="modal_btn">
          <Button btnType="tertiary">{cancelText}</Button>
          <Button style={{ margin: '0 0 0 4px' }}>{okText}</Button>
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
