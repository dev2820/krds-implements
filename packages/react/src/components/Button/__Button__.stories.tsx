import { Search } from 'lucide-react';
import { Button, type ButtonProps } from './Button';

const variants = ['primary', 'secondary', 'tertiary', 'text'] as const;
const sizes = ['xl','lg', 'md', 'sm', 'xs'] as const;

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: variants,
      description: '버튼 종류',
      control: { type: 'select' },
    },
    size: {
      options: sizes,
      description: '버튼 크기',
      control: { type: 'select' },
    },
    disabled: {
      description: 'disabled props',
      control: { type: 'boolean' },
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
};

export const Default = {
  args: {},
  render: (props: ButtonProps) => {
    return (
      <section className="p-4 w-480px flex flex-row justify-center">
        <Button {...props}>Button</Button>
      </section>
    );
  },
};

export const Size = {
  args: {},
  render: () => {
    return (
      <section className="p-4 w-480px flex flex-row justify-center gap-4">
        {
          sizes.map(size=><Button size={size}>Button</Button>)
        }
      </section>
    );
  },
}

export const Variant = {
  args: {},
  render: () => {
    return (
      <section className="p-4 w-480px flex flex-row justify-center gap-4">
        {
          variants.map(variant=><Button variant={variant}>Button</Button>)
        }
      </section>
    );
  },
};

export const Disabled = {
  args: {},
  render: () => {
    return (
      <section className="p-4 w-480px flex flex-row justify-center gap-4">
        {
          variants.map(variant=><Button variant={variant} disabled>Button</Button>)
        }
      </section>
    );
  },
};

export const WithIcon = {
  args: {},
  render: () => {
    return (
      <section className="p-4 w-480px flex flex-row justify-center gap-4">
        <Button leftIcon={<Search size="24"/>}>Button</Button>
        <Button rightIcon={<Search size="24"/>}>Button</Button>
        <Button leftIcon={<Search size="24"/>} rightIcon={<Search size="24"/>}>Button</Button>
      </section>
    );
  },
};
