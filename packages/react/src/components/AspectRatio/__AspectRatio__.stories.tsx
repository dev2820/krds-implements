import { AspectRatio, type AspectRatioProps } from './AspectRatio';

const variants = ['default', 'destructive'] as const;

/**
 * API Reference: https://ui.shadcn.com/docs/components/aspect-ratio
 */
export default {
  title: 'Components/AspectRatio',
  component: AspectRatio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      options: variants,
      description: '이미지 aspect 비율 (ex. 16 / 9)',
      control: { type: 'number' },
    },
  },
  args: {
    ratio: 16 / 9,
  },
};

export const Default = {
  args: {},
  render: (props: AspectRatioProps) => {
    return (
      <section className="p-4 w-480px">
        <AspectRatio {...props}>
          <img
            className="object-cover"
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Landscape photograph by Tobias Tullius"
          />
        </AspectRatio>
      </section>
    );
  },
};
