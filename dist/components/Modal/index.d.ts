import { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import './index.scss';
import { ButtonProps } from '../Button';
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
declare const Modal: FC<ModalProps>;
export default Modal;
