import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  type AvatarProps,
} from './Avatar';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;
/**
 * API Reference: https://ui.shadcn.com/docs/components/avatar
 */
export default {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: sizes,
      description: '아바타 사이즈',
      control: { type: 'select' },
    },
  },
  args: {
    size: 'md',
  },
};

export const Default = {
  render: (props: AvatarProps) => {
    return (
      <section className="p-4 w-480px">
        <Avatar {...props}>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </section>
    );
  },
};
export const Size = {
  render: () => {
    return (
      <section className="p-4 w-480px">
        {sizes.map(size => (
          <Avatar size={size} key={size}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        ))}
      </section>
    );
  },
};
