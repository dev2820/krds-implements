import { type ProgressProps, Progress } from './Progress';

const sizes = ['xs', 'sm', 'md', 'lg'] as const;
/**
 * API Reference: https://ui.shadcn.com/docs/components/progress
 */
export default {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: sizes,
      description: 'Progress 사이즈',
      control: { type: 'select' },
    },
  },
  args: {},
};

export const Default = {
  args: {
    value: 33,
  },
  render: (props: ProgressProps) => {
    return (
      <section className="p-4 w-480px">
        <Progress {...props} />
      </section>
    );
  },
};

export const Size = {
  args: {
    value: 33,
  },
  render: (props: ProgressProps) => {
    return (
      <section className="p-4 w-480px flex flex-col gap-4">
        {sizes.map(size => (
          <Progress {...props} size={size} key={size} />
        ))}
      </section>
    );
  },
};
