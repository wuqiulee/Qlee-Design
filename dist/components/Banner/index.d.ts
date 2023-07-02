import React, { DOMAttributes, MouseEvent, ReactNode, CSSProperties } from 'react';
import './index.scss';
type BannerType = 'info' | 'warning' | 'danger' | 'success';
interface BannerProps extends DOMAttributes<HTMLDivElement> {
  /** 支持4种类型：info、warning、danger、success。默认为 info */
  type?: BannerType;
  /** 描述内容 */
  description: ReactNode;
  /** 类名 */
  className?: string;
  /** 是否为全屏模式 */
  fullMode?: boolean;
  /** 是否展示边框，仅在非全屏模式下有效 */
  bordered?: boolean;
  /** 标题 */
  title?: ReactNode;
  /** 样式名 */
  style?: CSSProperties;
  /** 自定义icon，为null不展示 */
  icon?: any;
  /** 关闭时的回调函数 */
  onClose?: (event: MouseEvent) => void;
}
/**
 * Input 输入框 通过鼠标或键盘输入内容，是最基础的表单域的包装。
 * ### 如何引入
 * ~~~js
 *
 * import { Banner } from 'qlee-design';
 * ~~~
 */
declare const Banner: React.FC<BannerProps>;
export default Banner;
