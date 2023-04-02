import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Banner from './index';

export default {
  title: 'Example/Banner 通知横幅',
  component: Banner,
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const Default = Template.bind({});
Default.args = {
  description: '普通消息提示',
};
Default.storyName = '基本用法';

export const BannerType: ComponentStory<typeof Banner> = () => (
  <>
    <Banner type="info" description="普通消息提示" />
    <Banner type="warning" description="warning消息提示" />
    <Banner type="danger" description="danger消息提示" />
    <Banner type="success" description="success消息提示" />
  </>
);
BannerType.storyName = '不同类型';
BannerType.parameters = {
  docs: {
    description: {
      story: '支持4种类型：info、warning、danger、success。默认为 info',
    },
  },
};

export const FullMode: ComponentStory<typeof Banner> = () => (
  <>
    <Banner type="info" description="普通消息提示" fullMode={false} title="我是标题" bordered />
    <Banner
      type="warning"
      description="warning消息提示"
      fullMode={false}
      title="我是标题"
      bordered
    />
    <Banner type="danger" description="danger消息提示" fullMode={false} title="我是标题" bordered />
    <Banner
      type="success"
      description="success消息提示"
      fullMode={false}
      title="我是标题"
      bordered
    />
  </>
);
FullMode.storyName = '非全屏模式';
FullMode.parameters = {
  docs: {
    description: {
      story:
        '可以设置 **fullMode={false}** 使用非全屏模式的 banner 样式。 通过 bordered 属性可以设置边框',
    },
  },
};
