import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { type VariantProps, cva } from 'class-variance-authority';

import type { ComponentPropsWithoutRef, ElementRef } from 'react';

import { cn } from '@/utils';

const checkboxVariants = cva('rounded', {
  variants: {
    size: {
      md: 'h-4 w-4',
      lg: 'h-5 w-5',
      xl: 'h-6 w-6',
    },
  },
  defaultVariants: {
    size: 'lg',
  },
});

export type CheckboxProps = ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
> &
  VariantProps<typeof checkboxVariants> & {
    indeterminate?: boolean;
  };

const Checkbox = forwardRef<
  ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ indeterminate = false, size = 'lg', className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer shrink-0 rounded border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      checkboxVariants({ size }),
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn('flex items-center justify-center text-current')}
    >
      {indeterminate === true ? (
        <i
          className={cn(
            'i-nc-indeterminate stroke-white',
            `${size === 'xl' ? 'text-14px' : 'text-12px'}`,
          )}
        />
      ) : (
        <i
          className={cn(
            'i-nc-checkbox-control stroke-white',
            `${size === 'xl' ? 'text-14px' : 'text-12px'}`,
          )}
        />
      )}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
