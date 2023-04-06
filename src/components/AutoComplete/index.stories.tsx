import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AutoComplete from './index';

export default {
  title: 'Example/AutoComplete 自动完成',
  component: AutoComplete,
  decorators: [
    (Story) => (
      <div style={{ marginBottom: 200 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof AutoComplete>;

const Template: ComponentStory<typeof AutoComplete> = (args) => <AutoComplete {...args} />;
export const Default = Template.bind({});
const handleFetch = (query: string) => {
  return fetch(`https://api.github.com/search/users?q=${query}`)
    .then((res) => res.json())
    .then(({ items }) => {
      return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item }));
    });
};
Default.args = {
  fetchData: handleFetch,
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

// export const BannerType: ComponentStory<typeof AutoComplete> = () => (
//   <>
//     <Banner type="info" description="普通消息提示" />
//     <Banner type="warning" description="warning消息提示" style={{ margin: '5px 0' }} />
//     <Banner type="danger" description="danger消息提示" />
//     <Banner type="success" description="success消息提示" style={{ marginTop: 5 }} />
//   </>
// );
// BannerType.storyName = '不同类型';
// BannerType.parameters = {
//   docs: {
//     description: {
//       story: '支持4种类型：info、warning、danger、success。默认为 info',
//     },
//   },
// };
