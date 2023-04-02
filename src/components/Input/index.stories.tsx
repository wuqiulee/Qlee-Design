import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { faThumbsUp, faUser, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

import Input from './index';

export default {
  title: 'Example/Input 输入框',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultValue: 'qlee-design',
};
Default.storyName = '基本用法';

export const Disabled = Template.bind({});
Disabled.args = {
  defaultValue: 'qlee-design',
  disabled: true,
};
Disabled.storyName = '禁用';

export const Size: ComponentStory<typeof Input> = () => (
  <>
    <Input size="large" placeholder="large" />
    <br />
    <br />
    <Input size="default" placeholder="default" />
    <br />
    <br />
    <Input size="small" placeholder="small" />
  </>
);
Size.storyName = '不同大小';
Size.parameters = {
  docs: {
    description: {
      story: '默认定义了三种尺寸：大、默认、小',
    },
  },
};
