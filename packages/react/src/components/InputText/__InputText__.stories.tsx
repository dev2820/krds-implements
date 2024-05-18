import { InputText, type InputTextProps } from './InputText';

const sizes = ['xs', 'sm', 'md', 'lg'] as const;

/**
 * API Reference: https://ui.shadcn.com/docs/components/input
 */
export default {
  title: 'Components/InputText',
  component: InputText,
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
  render: (props: InputTextProps) => {
    return (
      <section className="p-4 w-480px">
        <InputText type="email" placeholder="Email" {...props} />
      </section>
    );
  },
};

export const SizeVariant = {
  args: {},
  render: (props: InputTextProps) => {
    return (
      <section className="p-4 w-480px flex flex-col gap-4">
        {sizes.map(size => (
          <InputText
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

export const PasswordInput = {
  args: {},
  render: (props: InputTextProps) => {
    return (
      <section className="p-4 w-480px">
        <InputText type="password" {...props} />
      </section>
    );
  },
};
