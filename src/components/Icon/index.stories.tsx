import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { faThumbsUp, faUser, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

import Icon from './index';

export default {
  title: 'Example/Icon 图标',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: faThumbsUp,
};
Default.storyName = '基本用法';

export const BannerType: ComponentStory<typeof Icon> = () => (
  <>
    <Icon icon={faUser} theme="primary" style={{ marginRight: 15 }} />
    <Icon icon={faUser} theme="secondary" style={{ marginRight: 15 }} />
    <Icon icon={faUser} theme="success" style={{ marginRight: 15 }} />
    <Icon icon={faUser} theme="info" style={{ marginRight: 15 }} />
    <Icon icon={faUser} theme="warning" style={{ marginRight: 15 }} />
    <Icon icon={faUser} theme="danger" style={{ marginRight: 15 }} />
    <Icon icon={faUser} theme="light" style={{ marginRight: 15 }} />
    <Icon icon={faUser} theme="dark" style={{ marginRight: 15 }} />
  </>
);
BannerType.storyName = '不同的主题';
BannerType.parameters = {
  docs: {
    description: {
      story: '支持8种主题类型：primary，secondary，success，info，warning，danger，light，dark',
    },
  },
};
