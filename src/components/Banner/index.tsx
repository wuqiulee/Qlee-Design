import React, {
  useRef,
  DOMAttributes,
  MouseEvent,
  MutableRefObject,
  ReactNode,
  CSSProperties,
} from 'react';
import classnames from 'classnames';
import {
  faCircleInfo,
  faTriangleExclamation,
  faCircleExclamation,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import Icon from '../Icon';
import './index.scss';

const IconMap = {
  info: {
    color: 'blue',
    icon: faCircleInfo,
  },
  warning: {
    color: 'orange',
    icon: faTriangleExclamation,
  },
  danger: {
    color: 'red',
    icon: faCircleExclamation,
  },
  success: {
    color: 'green',
    icon: faCircleCheck,
  },
};

type CurrentType = {
  current: HTMLDivElement;
};
type BannerRefType = MutableRefObject<null> | CurrentType;
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
const Banner: React.FC<BannerProps> = (props) => {
  const {
    type = 'info',
    description,
    fullMode,
    bordered,
    title,
    className,
    icon,
    onClose,
    ...restProps
  } = props;

  const bannerRef = useRef(null);

  const classes = classnames('banner_wrap', className, {
    [`banner_${type}`]: type,
    banner_fullMode: !fullMode,
    [`banner_border_${type}`]: bordered && !fullMode,
  });

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    (bannerRef as BannerRefType)!.current!.style.display = 'none';
    onClose && onClose(e);
  };

  const iconStyle = {
    marginRight: 8,
    fontSize: 18,
    color: IconMap[type].color,
  };

  return (
    <div className={classes} ref={bannerRef} {...restProps}>
      <div className="banner_content">
        <div className="banner_title">{title}</div>
        <div>
          {icon !== null && <Icon icon={icon || IconMap[type].icon} style={iconStyle} />}
          <span>{description}</span>
        </div>
      </div>
      <div className="banner_close_icon" onClick={handleClick}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          focusable="false"
          aria-hidden="true"
        >
          <path
            d="M17.6568 19.7782C18.2426 20.3639 19.1924 20.3639 19.7782 19.7782C20.3639 19.1924 20.3639 18.2426 19.7782 17.6568L14.1213 12L19.7782 6.34313C20.3639 5.75734 20.3639 4.8076 19.7782 4.22181C19.1924 3.63602 18.2426 3.63602 17.6568 4.22181L12 9.87866L6.34313 4.22181C5.75734 3.63602 4.8076 3.63602 4.22181 4.22181C3.63602 4.8076 3.63602 5.75734 4.22181 6.34313L9.87866 12L4.22181 17.6568C3.63602 18.2426 3.63602 19.1924 4.22181 19.7782C4.8076 20.3639 5.75734 20.3639 6.34313 19.7782L12 14.1213L17.6568 19.7782Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

Banner.defaultProps = {
  type: 'info',
  fullMode: true,
  bordered: false,
};

export default Banner;
