import * as ProgressPrimitive from '@radix-ui/react-progress';
import { type VariantProps, cva } from 'class-variance-authority';

import type {
  ComponentPropsWithoutRef,
  ComponentProps,
  ElementRef,
} from 'react';

import { cn } from '@/utils';

const progressVariants = cva(
  'relative w-full overflow-hidden rounded-full bg-background',
  {
    variants: {
      size: {
        xs: 'h-1',
        sm: 'h-2',
        md: 'h-3',
        lg: 'h-4',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);
export type ProgressProps = ComponentProps<typeof Progress>;

const Progress = forwardRef<
  ElementRef<typeof ProgressPrimitive.Root>,
  ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> &
    VariantProps<typeof progressVariants>
>(({ size, className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(progressVariants({ size }), className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
