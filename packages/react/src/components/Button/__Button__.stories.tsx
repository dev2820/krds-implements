import { Button, type ButtonProps } from './Button';

const variants = ['solid', 'outline', 'ghost', 'link'] as const;
const sizes = ['lg', 'md', 'sm', 'xs'] as const;
const colorSchemes = [
  'primary',
  'grey',
  'whiteAlpha',
  'error',
  'info',
] as const;

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
    colorScheme: {
      options: colorSchemes,
      description: '버튼 색상',
      control: { type: 'select' },
    },
    disabled: {
      description: 'disabled props',
      control: { type: 'boolean' },
    },
  },
  args: {
    variant: 'solid',
    size: 'lg',
    colorScheme: 'primary',
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
