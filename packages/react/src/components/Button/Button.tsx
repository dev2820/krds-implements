import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

import { cn } from '../../utils';
import { labelVariants } from '../Typo';

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
        secondary: 'color-primary-60 border border-primary-50 disabled:border-grayscale-40 bg-primary-5 hover:bg-primary-10 active:bg-primary-20',
        tertiary: 'color-secondary-90 border border-grayscale-90 disabled:border-grayscale-40 bg-grayscale-0 hover:bg-grayscale-5 active:bg-grayscale-10',
        text: 'color-grayscale-90 bg-transparent hover:bg-secondary-5 active:bg-secondary-10 disabled:color-grayscale-50 disabled:bg-transparent px-1',
      },
      size: {
        xl: ['h-16 px-7 rounded-4',labelVariants({ size: 'lg'})],
        lg: ['h-14 px-6 rounded-4',labelVariants({ size: 'lg'})],
        md: ['h-12 px-5 rounded-4',labelVariants({ size: 'md'})],
        sm: ['h-10 px-4 rounded-3',labelVariants({ size: 'sm'})],
        xs: ['h-8 px-2.5 rounded-3',labelVariants({ size: 'sm'})],
      },
    },
    compoundVariants: [
      {
        variant:'text',
        size:'xl',
        className: 'h-9 px-1'
      },
      {
        variant:'text',
        size:'lg',
        className: 'h-9 px-1'
      },
      {
        variant:'text',
        size:'md',
        className: 'h-8 px-1'
      },
      {
        variant:'text',
        size:'sm',
        className: `h-7 px-1 ${labelVariants({ size:'md'})}`
      },
      {
        variant:'text',
        size:'xs',
        className: 'h-6 px-1' 
      }
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
      type = "button",
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
        type={type}
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
