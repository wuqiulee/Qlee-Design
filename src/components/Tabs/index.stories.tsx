import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../Button';
import { Tabs, TabPane } from './index';

export default {
  title: 'Example/Tabs 图标',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

export const Default: ComponentStory<typeof Tabs> = () => (
  <Tabs type="line">
    <TabPane tab="文档" itemKey="1">
      文档
    </TabPane>
    <TabPane tab="快速起步" itemKey="2">
      快速起步
    </TabPane>
    <TabPane tab="帮助" itemKey="3">
      帮助
    </TabPane>
  </Tabs>
);
Default.storyName = '基本用法';

export const TabsType: ComponentStory<typeof Tabs> = () => (
  <>
    <Tabs type="button">
      <TabPane tab="文档" itemKey="1">
        文档
      </TabPane>
      <TabPane tab="快速起步" itemKey="2">
        快速起步
      </TabPane>
      <TabPane tab="帮助" itemKey="3">
        帮助
      </TabPane>
    </Tabs>
    <Tabs type="card">
      <TabPane tab="文档" itemKey="1">
        文档
      </TabPane>
      <TabPane tab="快速起步" itemKey="2">
        快速起步
      </TabPane>
      <TabPane tab="帮助" itemKey="3">
        帮助
      </TabPane>
    </Tabs>
  </>
);
TabsType.storyName = '不同的标签栏';
TabsType.parameters = {
  docs: {
    description: {
      story: '支持3种标签栏，line，card，button',
    },
  },
};

export const Mode: ComponentStory<typeof Tabs> = () => (
  <>
    <Tabs type="line" mode="vertical">
      <TabPane tab="文档" itemKey="1">
        文档
      </TabPane>
      <TabPane tab="快速起步" itemKey="2">
        快速起步
      </TabPane>
      <TabPane tab="帮助" itemKey="3">
        帮助
      </TabPane>
    </Tabs>
    <hr />
    <Tabs type="button" mode="vertical">
      <TabPane tab="文档" itemKey="1">
        文档
      </TabPane>
      <TabPane tab="快速起步" itemKey="2">
        快速起步
      </TabPane>
      <TabPane tab="帮助" itemKey="3">
        帮助
      </TabPane>
    </Tabs>
    <hr />
    <Tabs type="card" mode="vertical">
      <TabPane tab="文档" itemKey="1">
        文档
      </TabPane>
      <TabPane tab="快速起步" itemKey="2">
        快速起步
      </TabPane>
      <TabPane tab="帮助" itemKey="3">
        帮助
      </TabPane>
    </Tabs>
  </>
);
Mode.storyName = '垂直的标签栏';
Mode.parameters = {
  docs: {
    description: {
      story: '支持水平和垂直两种模式，horizontal, vertical',
    },
  },
};

export const Disabled: ComponentStory<typeof Tabs> = () => (
  <>
    <Tabs type="line">
      <TabPane tab="文档" itemKey="1" disabled>
        文档
      </TabPane>
      <TabPane tab="快速起步" itemKey="2">
        快速起步
      </TabPane>
      <TabPane tab="帮助" itemKey="3">
        帮助
      </TabPane>
    </Tabs>
    <Tabs type="button">
      <TabPane tab="文档" itemKey="1">
        文档
      </TabPane>
      <TabPane tab="快速起步" itemKey="2" disabled>
        快速起步
      </TabPane>
      <TabPane tab="帮助" itemKey="3">
        帮助
      </TabPane>
    </Tabs>
    <Tabs type="card">
      <TabPane tab="文档" itemKey="1">
        文档
      </TabPane>
      <TabPane tab="快速起步" itemKey="2">
        快速起步
      </TabPane>
      <TabPane tab="帮助" itemKey="3" disabled>
        帮助
      </TabPane>
    </Tabs>
  </>
);
Disabled.storyName = '禁用';
Disabled.parameters = {
  docs: {
    description: {
      story: '禁用标签栏中的某一个标签页',
    },
  },
};

export const TabBarExtraContent: ComponentStory<typeof Tabs> = () => (
  <>
    <Tabs type="button" tabBarExtraContent={<Button>按钮</Button>}>
      <TabPane tab="文档" itemKey="1">
        文档
      </TabPane>
      <TabPane tab="快速起步" itemKey="2">
        快速起步
      </TabPane>
      <TabPane tab="帮助" itemKey="3">
        帮助
      </TabPane>
    </Tabs>
    <hr />
    <Tabs type="button" mode="vertical" tabBarExtraContent={<Button>按钮</Button>}>
      <TabPane tab="文档" itemKey="1">
        文档
      </TabPane>
      <TabPane tab="快速起步" itemKey="2">
        快速起步
      </TabPane>
      <TabPane tab="帮助" itemKey="3">
        帮助
      </TabPane>
    </Tabs>
  </>
);
TabBarExtraContent.storyName = '标签栏内容扩展';
TabBarExtraContent.parameters = {
  docs: {
    description: {
      story: '传入 tabBarExtraContent 属性可以在标签栏右侧添加附加操作',
    },
  },
};
