import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

import { cn } from '../../utils';
import { labelVariants } from '../Text';

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap leading-normal transition-colors transition-opacity ring-offset-background',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'cursor-pointer disabled:cursor-not-allowed disabled:bg-disabled disabled:color-text-disabled',
  ],
  {
    variants: {
      variant: {
        primary: 'bg-primary-50 color-primary-foreground hover:bg-primary-hover active:bg-primary-active',
        secondary: 'border bg-transparent',
        tertiary: '',
        text: 'underline-offset-4 hover:underline',
      },
      size: {
        xl: ['h-16 px-7 rounded-4 text-lg',labelVariants({ size: 'lg'})],
        lg: ['h-14 px-6 rounded-4 text-lg',labelVariants({ size: 'md'})],
        md: ['h-12 px-5 rounded-4 text-sm',labelVariants({ size: 'md'})],
        sm: ['h-10 px-4 rounded-3 text-xs',labelVariants({ size: 'sm'})],
        xs: ['h-8 px-2.5 rounded-3 text-xs',labelVariants({ size: 'sm'})],
      },
    },
    compoundVariants: [
      /**
       * solid
       */
      
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      disabled,
      leftIcon,
      rightIcon,
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size }),
          className,
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export { Button };
