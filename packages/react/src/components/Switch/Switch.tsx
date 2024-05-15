import * as SwitchPrimitives from '@radix-ui/react-switch';
import { cva } from 'class-variance-authority';

import type {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementRef,
} from 'react';

import { cn } from '@/utils';

const switchVariants = cva(
  'peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-40 data-[state=checked]:bg-primary data-[state=unchecked]:bg-muted',
  {
    variants: {
      size: {
        sm: 'h-16px w-26px',
        md: 'h-20px w-34px',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);
const switchThumbVariants = cva(
  'pointer-events-none block rounded-full bg-background ring-0 transition-transform',
  {
    variants: {
      size: {
        sm: 'h-3 w-3 data-[state=checked]:translate-x-10px data-[state=unchecked]:translate-x-0',
        md: 'h-4 w-4 data-[state=checked]:translate-x-14px data-[state=unchecked]:translate-x-0',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

export type SwitchProps = ComponentProps<typeof Switch>;

const Switch = forwardRef<
  ElementRef<typeof SwitchPrimitives.Root>,
  ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> &
    Partial<{
      size: 'sm' | 'md' | null;
    }>
>(({ size = 'md', className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(switchVariants({ size }), className)}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb className={cn(switchThumbVariants({ size }))} />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
