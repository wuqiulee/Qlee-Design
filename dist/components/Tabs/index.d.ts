import React, { CSSProperties, ReactNode } from 'react';
import TabPane from './TabPane';
import './index.scss';
type TabsType = 'line' | 'card' | 'button';
type ModeType = 'horizontal' | 'vertical';
interface TabsProps {
  /** 标签栏的样式，可选line、 card、 button */
  type?: TabsType;
  children?: any;
  /** tab 的位置 */
  mode?: ModeType;
  /** 类名 */
  className?: string;
  /** 样式名 */
  style?: CSSProperties;
  /** 初始激活的itemKey */
  defaultActiveKey?: string;
  /** 切换tab触发的函数 */
  onChange?: (activeKey: string) => void;
  /** 标签栏内容扩展 */
  tabBarExtraContent?: ReactNode;
  /** 关闭tab页触发的回调 */
  onTabClose?: (itemKey: string) => void;
}
interface ContextType {
  activeKey: string;
  onChange?: (activeKey: string) => void;
  onTabClose?: (itemKey: string) => void;
}
export declare const TabsContext: React.Context<ContextType>;
/**
 * 当内容需要分组并在不同模块页面中展示，可使用 Tabs 标签栏目对不同的组/页之间进行切换
 * ### 如何引入
 * ~~~js
 *
 * import { Tabs, TabPane } from 'qlee-design';
 * ~~~
 */
declare const Tabs: React.FC<TabsProps>;
export { TabPane, Tabs };
