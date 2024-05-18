import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as Icon from 'lucide-react';

import { forwardRef } from 'react';
import type {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementRef,
} from 'react';

import { cn } from '../../utils';
import { Text } from '../Text';

export type AccordionProps = ComponentProps<typeof Accordion>;
const Accordion = AccordionPrimitive.Root;

export type AccordionItemProps = ComponentProps<typeof AccordionItem>;
const AccordionItem = forwardRef<
  ElementRef<typeof AccordionPrimitive.Item>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      'first:border-t border-b border-border [&[data-disabled]]:cursor-not-allowed [&[data-disabled]]:color-text-disabled',
      className,
    )}
    {...props}
  />
));
AccordionItem.displayName = AccordionPrimitive.Item.displayName;

export type AccordionTriggerProps = ComponentProps<typeof AccordionTrigger>;
const AccordionTrigger = forwardRef<
  ElementRef<typeof AccordionPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex w-full gap-5 flex-1 items-start text-start justify-between overflow-hidden py-7 transition-all hover:underline [&[data-state=open]>svg]:rotate-180 [&[data-disabled]]:cursor-not-allowed [&[data-disabled]]:hover:no-underline',
        className,
      )}
      {...props}
    >
      <Text.Body size="lg" bold className="flex-1 text-pretty">
        {children}
      </Text.Body>
      <Icon.ChevronDown
        size={16}
        className="shrink-0 transition-transform duration-200"
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

export type AccordionContentProps = ComponentProps<typeof AccordionContent>;
const AccordionContent = forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn('pb-7 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
