import { Tag, TagGroup, type TagProps } from './index';

export default {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export const Default = {
  args: {
    disabled: false,
  },
  render: (props: TagProps) => {
    return <Tag {...props}>태그</Tag>;
  },
};

export const Group = {
  args: {},
  render: () => {
    return (
      <TagGroup className="max-w-480px">
        {[
          '태그1',
          '태그2',
          'loooooooooong 태그',
          'loooooooooong 태그2',
          '태그3',
        ].map(tag => (
          <Tag>{tag}</Tag>
        ))}
      </TagGroup>
    );
  },
};
