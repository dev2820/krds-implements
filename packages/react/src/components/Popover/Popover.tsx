import * as PopoverPrimitive from '@radix-ui/react-popover';

import type {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementRef,
} from 'react';

import { cn } from '@/utils';

export type PopoverProps = ComponentProps<typeof Popover>;
const Popover = PopoverPrimitive.Root;

export type PopoverTriggerProps = ComponentProps<typeof PopoverTrigger>;
const PopoverTrigger = PopoverPrimitive.Trigger;

export type PopoverContentProps = ComponentProps<typeof PopoverContent>;
const PopoverContent = forwardRef<
  ElementRef<typeof PopoverPrimitive.Content>,
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(
  (
    { children, className, align = 'center', sideOffset = 4, ...props },
    ref,
  ) => (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className,
        )}
        {...props}
      >
        {children}
        <PopoverPrimitive.Arrow
          width={12}
          height={6}
          className="fill-white -translate-y-1px drop-shadow-[0_0_0.5px_grey] "
          style={{
            clipPath: 'inset(0 -10px -10px -10px)',
          }}
        />
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  ),
);
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };
