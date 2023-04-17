import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tag from './index';

export default {
  title: 'Example/Tag 标签',
  component: Tag,
} as ComponentMeta<typeof Tag>;

export const Default: ComponentStory<typeof Tag> = () => {
  return (
    <>
      <Tag style={{ margin: 10 }}>默认标签</Tag>
      <Tag closable>关闭标签</Tag>
    </>
  );
};
Default.storyName = '基本用法';

// export const MaskClosable: ComponentStory<typeof Tag> = () => {
//   const [visible, setVisible] = useState(false);
//   const handleOk = () => {
//     setVisible(false);
//   };
//   const handleCancel = () => {
//     setVisible(false);
//   };

//   return (
//     <>
//       <Button onClick={() => setVisible(true)}>点击遮罩层可关闭</Button>
//       <Modal
//         visible={visible}
//         title="我是标题"
//         onOk={handleOk}
//         onCancel={handleCancel}
//         maskClosable
//         setVisible={setVisible}
//       >
//         我是模态框内容
//       </Modal>
//     </>
//   );
// };
// MaskClosable.storyName = '点击遮罩层可关闭';
// MaskClosable.parameters = {
//   docs: {
//     description: {
//       story: '修改 maskClosable为true 则可通过点击遮罩层来关闭对话框，需与setVisible搭配使用',
//     },
//   },
// };
