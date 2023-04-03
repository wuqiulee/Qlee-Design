import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import Icon from '../Icon';

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

export const Addon: ComponentStory<typeof Input> = () => (
  <>
    <Input addonBefore="http://" addonAfter=".com" />
  </>
);
Addon.storyName = '前置/后置标签';
Addon.parameters = {
  docs: {
    description: {
      story: '在输入框上增加前置/后置标签',
    },
  },
};

export const PrefixAndSuffix: ComponentStory<typeof Input> = () => (
  <>
    <Input prefix={<Icon icon={faMagnifyingGlass} />} />
    <br />
    <Input suffix={<Icon icon={faUser} />} />
  </>
);
PrefixAndSuffix.storyName = '前缀/后缀';
PrefixAndSuffix.parameters = {
  docs: {
    description: {
      story: '在输入框上增加前缀、后缀图标，可以是 ReactNode',
    },
  },
};

export const ShowClear = Template.bind({});
ShowClear.args = {
  defaultValue: 'click to clear',
  showClear: true,
};
ShowClear.storyName = '带移除图标';
ShowClear.parameters = {
  docs: {
    description: {
      story: '点击图标删除所有内容',
    },
  },
};
