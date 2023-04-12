import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AutoComplete, { DataSourceType } from './index';

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

interface GithubUserProps {
  login: string;
  url: string;
  avatar_url: string;
}

const renderOption = (item: DataSourceType) => {
  const itemWithGithub = item as DataSourceType<GithubUserProps>;
  return (
    <>
      <h2>Name: {itemWithGithub.value}</h2>
      <p>url: {itemWithGithub.url}</p>
    </>
  );
};
export const BannerType: ComponentStory<typeof AutoComplete> = () => (
  <AutoComplete fetchData={handleFetch} renderOption={renderOption} />
);
BannerType.storyName = '自定义渲染内容';
BannerType.parameters = {
  docs: {
    description: {
      story: '自定义渲染内容',
    },
  },
};
