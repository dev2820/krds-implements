import { Button, type ButtonProps } from './Button';

const variants = ['primary', 'secondary', 'tertiary', 'text'] as const;
const sizes = ['xl','lg', 'md', 'sm', 'xs'] as const;

/**
 * API Reference: https://ui.shadcn.com/docs/components/button <br/>
 * whiteAlpha colorScheme는 dark모드에서 확인이 가능합니다.
 */
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
