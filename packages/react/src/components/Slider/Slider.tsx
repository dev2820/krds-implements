import * as SliderPrimitive from '@radix-ui/react-slider';
import { cva } from 'class-variance-authority';

import type {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementRef,
} from 'react';

import { cn } from '@/utils';

const sliderTrackVariants = cva(
  'relative h-2 w-full grow overflow-hidden rounded-full bg-grey-200',
  {
    variants: {
      size: {
        sm: 'h-2px',
        md: 'h-4px',
        lg: 'h-4px',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const sliderThumbVariants = cva(
  [
    'block cursor-pointer rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.06)] shadow-[0_1px_3px_rgba(0,0,0,0.10)] bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none',
  ],
  {
    variants: {
      size: {
        sm: 'h-2.5 w-2.5',
        md: 'h-3.5 w-3.5',
        lg: 'h-4 w-4',
      },
      disabled: {
        true: 'bg-grey-200 cursor-not-allowed',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

export type SliderProps = ComponentProps<typeof Slider>;

const Slider = forwardRef<
  ElementRef<typeof SliderPrimitive.Root>,
  ComponentPropsWithoutRef<typeof SliderPrimitive.Root> &
    Partial<{
      size: 'sm' | 'md' | 'lg';
    }>
>(({ size, disabled, className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      'disabled:opacity-60',
      className,
    )}
    disabled={disabled}
    {...props}
  >
    <SliderPrimitive.Track className={cn(sliderTrackVariants({ size }))}>
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className={cn(sliderThumbVariants({ size, disabled }))}
    />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
