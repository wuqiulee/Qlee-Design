import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './index';

export default {
  title: 'Example/Button 按钮',
  component: Button,
  // argTypes: {
  //   btnType: {
  //     control: 'BtnType',
  //   },
  // },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '默认按钮',
};
Default.storyName = '默认按钮';

export const BtnType: ComponentStory<typeof Button> = () => (
  <>
    <Button btnType="primary">主要按钮</Button>
    <Button btnType="secondary">次要按钮</Button>
    <Button btnType="tertiary">第三按钮</Button>
    <Button btnType="warning">警告按钮</Button>
    <Button btnType="danger">危险按钮</Button>
  </>
);
BtnType.storyName = '按钮类型';

export const Theme: ComponentStory<typeof Button> = () => (
  <>
    <Button theme="light" btnType="primary" style={{ marginRight: 8 }}>
      浅色主要
    </Button>
    <Button theme="light" btnType="secondary" style={{ marginRight: 8 }}>
      浅色次要
    </Button>
    <Button theme="light" btnType="tertiary" style={{ marginRight: 8 }}>
      浅色第三
    </Button>
    <Button theme="light" btnType="warning" style={{ marginRight: 8 }}>
      浅色警告
    </Button>
    <Button theme="light" btnType="danger" style={{ marginRight: 8 }}>
      浅色危险
    </Button>
    <br />
    <br />
    <Button theme="solid" btnType="primary" style={{ marginRight: 8 }}>
      深色主要
    </Button>
    <Button theme="solid" btnType="secondary" style={{ marginRight: 8 }}>
      深色次要
    </Button>
    <Button theme="solid" btnType="tertiary" style={{ marginRight: 8 }}>
      深色第三
    </Button>
    <Button theme="solid" btnType="warning" style={{ marginRight: 8 }}>
      深色警告
    </Button>
    <Button theme="solid" btnType="danger" style={{ marginRight: 8 }}>
      深色危险
    </Button>
    <br />
    <br />
    <Button theme="borderless" btnType="primary" style={{ marginRight: 8 }}>
      无背景主要
    </Button>
    <Button theme="borderless" btnType="secondary" style={{ marginRight: 8 }}>
      无背景次要
    </Button>
    <Button theme="borderless" btnType="tertiary" style={{ marginRight: 8 }}>
      无背景第三
    </Button>
    <Button theme="borderless" btnType="warning" style={{ marginRight: 8 }}>
      无背景警告
    </Button>
    <Button theme="borderless" btnType="danger" style={{ marginRight: 8 }}>
      无背景危险
    </Button>
  </>
);
Theme.storyName = '按钮主题';

export const Size: ComponentStory<typeof Button> = () => (
  <>
    <Button size="large" style={{ marginRight: 8 }}>
      大尺寸
    </Button>
    <Button size="default" style={{ marginRight: 8 }}>
      默认尺寸
    </Button>
    <Button size="small">小尺寸</Button>
  </>
);
Size.storyName = '按钮尺寸';

export const Disabled = Template.bind({});
Disabled.args = {
  children: '禁用',
  disabled: true,
};
Disabled.storyName = '禁用状态';

export const Block = Template.bind({});
Block.args = {
  children: '块级按钮',
  block: true,
};
Block.storyName = '块级按钮';

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
