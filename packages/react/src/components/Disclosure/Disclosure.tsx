import * as DisclosurePrimitive from '@radix-ui/react-collapsible';
import { CircleChevronRightIcon } from 'lucide-react';

import {
  type ComponentProps,
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from 'react';

import { cn } from '../../utils';

export type DisclosureProps = ComponentProps<typeof Disclosure>;
const Disclosure = DisclosurePrimitive.Root;

export type DisclosureControlProps = ComponentProps<typeof DisclosureControl>;
const DisclosureControl = forwardRef<
  ElementRef<typeof DisclosurePrimitive.CollapsibleTrigger>,
  ComponentPropsWithoutRef<typeof DisclosurePrimitive.CollapsibleTrigger>
>(({ className, children, ...props }, ref) => {
  return (
    <DisclosurePrimitive.CollapsibleTrigger
      className={cn(
        'inline-flex flex-row gap-2 items-center disabled:color-disabled disabled:cursor-not-allowed',
        className,
      )}
      ref={ref}
      {...props}
    >
      <CircleChevronRightIcon size={20} />
      {children}
    </DisclosurePrimitive.CollapsibleTrigger>
  );
});

export type DisclosureContainerProps = ComponentProps<
  typeof DisclosureContainer
>;
const DisclosureContainer = forwardRef<
  ElementRef<typeof DisclosurePrimitive.CollapsibleContent>,
  ComponentPropsWithoutRef<typeof DisclosurePrimitive.CollapsibleContent>
>(({ className, children, ...props }, ref) => {
  return (
    <DisclosurePrimitive.CollapsibleContent
      className={cn('bg-grayscale-5 rounded-lg p-7', className)}
      ref={ref}
      {...props}
    >
      {children}
    </DisclosurePrimitive.CollapsibleContent>
  );
});
DisclosurePrimitive.CollapsibleContent;

export { Disclosure, DisclosureControl, DisclosureContainer };
