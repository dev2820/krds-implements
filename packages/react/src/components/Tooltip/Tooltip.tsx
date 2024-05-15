import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import type {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementRef,
} from 'react';

import { cn } from '@/utils';

const TooltipProvider = TooltipPrimitive.Provider;

export type TooltipProps = ComponentProps<typeof Tooltip>;
const Tooltip = TooltipPrimitive.Root;

export type TooltipTriggerProps = ComponentProps<typeof TooltipTrigger>;
const TooltipTrigger = TooltipPrimitive.Trigger;

export type TooltipContentProps = ComponentProps<typeof TooltipContent>;
const TooltipContent = forwardRef<
  ElementRef<typeof TooltipPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ children, className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      'z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className,
    )}
    {...props}
  >
    {children}
    <TooltipPrimitive.Arrow
      width={11}
      height={5}
      className="fill-white -translate-y-1px"
      style={{
        filter: 'drop-shadow(0 0 3px grey)',
        clipPath: 'inset(0 -10px -10px -10px)',
        boxShadow: '-1px -1px 0px 0px',
      }}
    />
  </TooltipPrimitive.Content>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
