import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../Button';

import Modal from './index';

export default {
  title: 'Example/Modal 模态对话框',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button onClick={() => setVisible(true)}>打开弹窗</Button>
      <Modal visible={visible} {...args} />
    </div>
  );
};
export const Default = Template.bind({});
Default.args = {
  title: '我是标题',
  children: <div>haha</div>,
};
Default.storyName = '基本用法';
Default.parameters = {
  docs: {
    description: {
      story:
        '通过onSearch监听用户输入，将输入建议通过data传入，通过onChange保持受控，当输入框变化/选中输入项时会触发onChange',
    },
  },
};

// export const BannerType: ComponentStory<typeof Modal> = () => <Modal>vvvv</Modal>;
// BannerType.storyName = '自定义渲染内容';
// BannerType.parameters = {
//   docs: {
//     description: {
//       story: '自定义渲染内容',
//     },
//   },
// };
