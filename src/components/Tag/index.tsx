import React, { CSSProperties, FC, ReactNode, useState } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import Icon from '../Icon';
import './index.scss';

interface TagProps {
  closable?: Boolean;
  children?: ReactNode;
  style?: CSSProperties;
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
  const { closable, children, ...restProps } = props;

  const [showTag, setShowTag] = useState<Boolean>(true);

  if (!showTag) {
    return null;
  }

  const handleClick = () => {
    setShowTag(false);
  };

  const classes = classNames('tab_wrap');
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

export default Tag;
