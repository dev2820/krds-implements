import { Input, type InputProps } from './Input';

const sizes = ['xs', 'sm', 'md', 'lg'] as const;

/**
 * API Reference: https://ui.shadcn.com/docs/components/input
 */
export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    sizeVariant: {
      options: sizes,
      description: 'input 크기',
      control: { type: 'select' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  args: {
    size: 'md',
    disabled: false,
  },
};

export const Default = {
  args: {},
  render: (props: InputProps) => {
    return (
      <section className="p-4 w-480px">
        <Input type="email" placeholder="Email" {...props} />
      </section>
    );
  },
};

export const SizeVariant = {
  args: {},
  render: (props: InputProps) => {
    return (
      <section className="p-4 w-480px flex flex-col gap-4">
        {sizes.map(size => (
          <Input
            type="email"
            placeholder="Email"
            sizeVariant={size}
            {...props}
            key={size}
          />
        ))}
      </section>
    );
  },
};

export const FileInput = {
  args: {},
  render: (props: InputProps) => {
    return (
      <section className="p-4 w-480px">
        <Input type="file" {...props} />
      </section>
    );
  },
};

export const PasswordInput = {
  args: {},
  render: (props: InputProps) => {
    return (
      <section className="p-4 w-480px">
        <Input type="password" {...props} />
      </section>
    );
  },
};

export const DateInput = {
  args: {},
  render: (props: InputProps) => {
    return (
      <section className="p-4 w-480px">
        <Input type="date" {...props} />
      </section>
    );
  },
};
