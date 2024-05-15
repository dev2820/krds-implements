import * as DividerPrimitive from '@radix-ui/react-separator';

import type {
  ElementRef,
  ComponentPropsWithoutRef,
  ComponentProps,
} from 'react';

import { cn } from '@/utils';

export type DividerProps = ComponentProps<typeof Divider>;

const Divider = forwardRef<
  ElementRef<typeof DividerPrimitive.Root>,
  ComponentPropsWithoutRef<typeof DividerPrimitive.Root>
>(
  (
    { className, orientation = 'horizontal', decorative = true, ...props },
    ref,
  ) => (
    <DividerPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 bg-border',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        className,
      )}
      {...props}
    />
  ),
);

Divider.displayName = 'Divider';

export { Divider };
