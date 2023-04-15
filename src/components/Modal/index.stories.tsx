import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../Button';

import Modal from './index';

export default {
  title: 'Example/Modal 模态对话框',
  component: Modal,
} as ComponentMeta<typeof Modal>;

export const Default: ComponentStory<typeof Modal> = () => {
  const [visible, setVisible] = useState(false);
  const handleOk = () => {
    setVisible(false);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <>
      <Button onClick={() => setVisible(true)}>打开弹窗</Button>
      <Modal visible={visible} title="我是标题" onOk={handleOk} onCancel={handleCancel}>
        我是模态框
      </Modal>
    </>
  );
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

export const MaskClosable: ComponentStory<typeof Modal> = () => {
  const [visible, setVisible] = useState(false);
  const handleOk = () => {
    setVisible(false);
  };
  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button onClick={() => setVisible(true)}>打开弹窗</Button>
      <Modal
        visible={visible}
        title="我是标题"
        onOk={handleOk}
        onCancel={handleCancel}
        maskClosable
        setVisible={setVisible}
      >
        我是模态框
      </Modal>
    </>
  );
};
MaskClosable.storyName = '点击遮罩层可关闭';
MaskClosable.parameters = {
  docs: {
    description: {
      story: '修改 maskClosable为true 则可通过点击遮罩层来关闭对话框，需与setVisible搭配使用',
    },
  },
};
