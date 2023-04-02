import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { faThumbsUp, faUser, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

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
    <Banner type="warning" description="warning消息提示" style={{ margin: '5px 0' }} />
    <Banner type="danger" description="danger消息提示" />
    <Banner type="success" description="success消息提示" style={{ marginTop: 5 }} />
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
      style={{ margin: '5px 0' }}
    />
    <Banner type="danger" description="danger消息提示" fullMode={false} title="我是标题" bordered />
    <Banner
      type="success"
      description="success消息提示"
      fullMode={false}
      title="我是标题"
      bordered
      style={{ marginTop: 5 }}
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

export const Icon: ComponentStory<typeof Banner> = () => (
  <>
    <Banner description="自定义icon" icon={faThumbsUp} />
    <Banner description="自定义icon" icon={faUser} style={{ margin: '5px 0' }} />
    <Banner description="自定义icon" icon={faVolumeUp} />
  </>
);
Icon.storyName = '自定义icon';
Icon.parameters = {
  docs: {
    description: {
      story: '自定义 icon，参考fortawesome，为 null 时不显示 icon',
    },
  },
};
