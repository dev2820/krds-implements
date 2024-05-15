import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import type {
  ElementRef,
  ComponentPropsWithoutRef,
  ComponentProps,
} from 'react';

import { cn } from '@/utils';

export type RadioGroupProps = ComponentProps<typeof RadioGroup>;
const RadioGroup = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Root>,
  ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn('grid gap-2', className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

export type RadioGroupItemProps = ComponentProps<typeof RadioGroupItem>;
const RadioGroupItem = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Item>,
  ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        'aspect-square h-4 w-4 rounded-full ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:bg-grey-200 disabled:border-grey-200 disabled:cursor-not-allowed disabled:opacity-50',
        'border border-grey-200 aria-checked:border-primary aria-checked:bg-primary aria-checked:text-white text-grey-200',
        'disabled:border-grey-200 disabled:bg-grey-200 disabled:text-grey',
        'disabled:aria-checked:border-grey-200 disabled:aria-checked:bg-grey-200 disabled:aria-checked:text-grey',
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <i className="i-t-x-circle h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
