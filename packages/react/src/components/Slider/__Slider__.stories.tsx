import { type SliderProps, Slider } from './Slider';

const sizes = ['sm', 'md', 'lg'] as const;
/**
 * API Reference: https://ui.shadcn.com/docs/components/slider
 */
export default {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: sizes,
      description: 'Select 크기',
      control: { type: 'select' },
    },
  },
  args: {},
};

export const Default = {
  args: {
    defaultValue: [33],
    min: 0,
    max: 100,
    step: 1,
  },
  render: (props: SliderProps) => {
    return (
      <section className="p-4 w-480px">
        <Slider {...props} />
      </section>
    );
  },
};

export const Size = {
  args: {
    defaultValue: [33],
    min: 0,
    max: 100,
    step: 1,
  },
  render: (props: SliderProps) => {
    return (
      <section className="p-4 w-480px flex flex-col gap-6">
        {sizes.map(size => (
          <Slider {...props} size={size} key={size} />
        ))}
      </section>
    );
  },
};

export const Disabled = {
  args: {
    defaultValue: [33],
    min: 0,
    max: 100,
    step: 1,
  },
  render: (props: SliderProps) => {
    return (
      <section className="p-4 w-480px flex flex-col gap-6">
        {sizes.map(size => (
          <Slider {...props} size={size} key={size} disabled />
        ))}
      </section>
    );
  },
};
