import { CSSProperties, MouseEvent, FC, ReactNode } from 'react';
import './index.scss';
type Size = 'small' | 'large';
type Shape = 'square' | 'circle';
interface TagProps {
  /** 标签是否可以关闭 */
  closable?: Boolean;
  /** 标签内容 */
  children?: ReactNode;
  /** 样式 */
  style?: CSSProperties;
  /** 标签的尺寸，可选 small、 large */
  /** 标签形状 */
  shape?: Shape;
  size?: Size;
  /** 关闭标签时的回调函数 */
  onClose?: (tagChildren: ReactNode, e: MouseEvent) => void;
}
/**
 * 标签是图形化标记界面上的元素的组件，达到快速识别、分组的目的。
 * ### 如何引入
 * ~~~js
 *
 * import { Tag  } from 'qlee-design';
 * ~~~
 */
declare const Tag: FC<TagProps>;
export default Tag;
