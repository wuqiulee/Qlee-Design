import react, { FC, ReactNode, useEffect, useRef } from 'react';
import classNames from 'classnames';
import './index.scss';

type Theme = 'default' | 'info' | 'error' | 'warning' | 'success';
interface NotificationProps {
  theme?: Theme;
  title?: ReactNode;
  content?: ReactNode;
  duration?: number;
}

const NotificationComp: FC<NotificationProps> = (props) => {
  const { theme, title, content, duration } = props;
  const ref = useRef(null);

  const classes = classNames('notification_wrap');

  useEffect(() => {
    setTimeout(() => {
      ref.current && (ref.current as HTMLElement).remove();
    }, duration);
  });
  return (
    <div className={classes} ref={ref}>
      <div className="title">{title}</div>
      <div className="content">{content}</div>
    </div>
  );
};

NotificationComp.defaultProps = {
  theme: 'default',
  duration: 3,
};

const Notification = {
  open(props: NotificationProps) {
    return <NotificationComp {...props} />;
  },
  info(props: NotificationProps) {
    return <NotificationComp theme="info" {...props} />;
  },
};

export default Notification;
