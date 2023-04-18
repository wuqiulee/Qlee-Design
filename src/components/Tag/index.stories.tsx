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

export const Size: ComponentStory<typeof Tag> = () => {
  return (
    <>
      <Tag style={{ marginRight: 10 }}>small tag</Tag>
      <Tag size="large">large tag</Tag>
    </>
  );
};
Size.storyName = '尺寸';
Size.parameters = {
  docs: {
    description: {
      story: '默认定义了两种尺寸：大、小（默认）',
    },
  },
};

export const Shape: ComponentStory<typeof Tag> = () => {
  return (
    <>
      <Tag style={{ marginRight: 10 }}>small tag</Tag>
      <Tag size="large" shape="circle">
        large tag
      </Tag>
    </>
  );
};
Shape.storyName = '形状';
Shape.parameters = {
  docs: {
    description: {
      story: '默认定义了两种形状：square（默认）、circle',
    },
  },
};
