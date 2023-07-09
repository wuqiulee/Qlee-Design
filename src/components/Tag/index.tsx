import React, { CSSProperties, MouseEvent, FC, ReactNode, useState } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import Icon from '../Icon';

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
const Tag: FC<TagProps> = (props) => {
  const { closable, children, size, shape, onClose, ...restProps } = props;
  console.log(children, 'children');

  const [showTag, setShowTag] = useState<Boolean>(true);

  if (!showTag) {
    return null;
  }

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    setShowTag(false);
    onClose && onClose(children, e);
  };

  const classes = classNames('tag_wrap', {
    [`tag_size_${size}`]: size,
    [`tag_shape_${shape}`]: shape,
  });

  return (
    <div className={classes} {...restProps}>
      <span>{children}</span>
      {closable && (
        <span className="icon" onClick={handleClick}>
          <Icon icon={faXmark} />
        </span>
      )}
    </div>
  );
};

Tag.defaultProps = {
  size: 'small',
  shape: 'square',
};

export default Tag;
