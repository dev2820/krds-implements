import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import type { ButtonHTMLAttributes } from 'react';

import { cn } from '@/utils';

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center font-semibold whitespace-nowrap leading-normal transition-colors transition-opacity ring-offset-background',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'cursor-pointer disabled:cursor-not-allowed disabled:opacity-40',
  ],
  {
    variants: {
      variant: {
        solid: '',
        outline: 'border bg-transparent',
        ghost: '',
        link: 'underline-offset-4 hover:underline',
      },
      size: {
        lg: 'h-12 px-6 rounded-10px text-lg',
        md: 'h-10 px-4 rounded-10px text-sm',
        sm: 'h-8 px-3 rounded-8px text-xs',
        xs: 'h-6 px-2 rounded-6px text-xs',
      },
      colorScheme: {
        primary: '',
        grey: '',
        whiteAlpha: '',
        error: '',
        info: '',
      },
      disabled: {
        true: '',
      },
    },
    compoundVariants: [
      /**
       * solid
       */
      {
        variant: 'solid',
        colorScheme: 'primary',
        disabled: false,
        className: 'bg-primary text-primary-foreground hover:bg-primary-600',
      },
      {
        variant: 'solid',
        colorScheme: 'primary',
        disabled: true,
        className: 'bg-primary text-primary-foreground hover:bg-primary',
      },
      {
        variant: 'solid',
        colorScheme: 'grey',
        disabled: false,
        className: 'bg-grey-100 text-grey-foreground hover:bg-grey-200',
      },
      {
        variant: 'solid',
        colorScheme: 'grey',
        disabled: true,
        className: 'bg-grey-100 text-grey-foreground hover:bg-grey-100',
      },
      {
        variant: 'solid',
        colorScheme: 'whiteAlpha',
        disabled: false,
        className:
          'bg-whiteAlpha-500 text-whiteAlpha-foreground hover:bg-whiteAlpha-400',
      },
      {
        variant: 'solid',
        colorScheme: 'whiteAlpha',
        disabled: true,
        className:
          'bg-whiteAlpha-500 text-whiteAlpha-foreground hover:bg-whiteAlpha-500',
      },
      {
        variant: 'solid',
        colorScheme: 'error',
        disabled: false,
        className: 'bg-error text-error-foreground hover:bg-error-600',
      },
      {
        variant: 'solid',
        colorScheme: 'error',
        disabled: true,
        className: 'bg-error text-error-foreground hover:bg-error',
      },
      {
        variant: 'solid',
        colorScheme: 'info',
        disabled: false,
        className: 'bg-info text-info-foreground hover:bg-info-600',
      },
      {
        variant: 'solid',
        colorScheme: 'info',
        disabled: true,
        className: 'bg-info text-info-foreground hover:bg-info',
      },
      /**
       * outline
       */
      {
        variant: 'outline',
        colorScheme: 'primary',
        disabled: false,
        className: 'border-primary text-primary hover:bg-primary-50',
      },
      {
        variant: 'outline',
        colorScheme: 'primary',
        disabled: true,
        className: 'border-primary text-primary hover:bg-transparent',
      },
      {
        variant: 'outline',
        colorScheme: 'grey',
        disabled: false,
        className: 'border-grey-200 text-grey-foreground hover:bg-grey-50',
      },
      {
        variant: 'outline',
        colorScheme: 'grey',
        disabled: true,
        className: 'border-grey-200 text-grey-foreground hover:bg-transparent',
      },
      {
        variant: 'outline',
        colorScheme: 'whiteAlpha',
        disabled: false,
        className:
          'border-whiteAlpha-500 text-whiteAlpha-foreground hover:bg-whiteAlpha-600',
      },
      {
        variant: 'outline',
        colorScheme: 'whiteAlpha',
        disabled: true,
        className:
          'border-whiteAlpha-500 text-whiteAlpha-foreground hover:bg-transparent',
      },
      {
        variant: 'outline',
        colorScheme: 'error',
        disabled: false,
        className: 'border-error-500 text-error hover:bg-error-50',
      },
      {
        variant: 'outline',
        colorScheme: 'error',
        disabled: true,
        className: 'border-error-500 text-error hover:bg-transparent',
      },
      {
        variant: 'outline',
        colorScheme: 'info',
        disabled: false,
        className: 'border-info-500 text-info hover:bg-info-50',
      },
      {
        variant: 'outline',
        colorScheme: 'info',
        disabled: true,
        className: 'border-info-500 text-info hover:bg-transparent',
      },
      /**
       * ghost
       */
      {
        variant: 'ghost',
        colorScheme: 'primary',
        disabled: false,
        className: 'text-primary hover:bg-primary-50',
      },
      {
        variant: 'ghost',
        colorScheme: 'primary',
        disabled: true,
        className: 'text-primary hover:bg-transparent',
      },
      {
        variant: 'ghost',
        colorScheme: 'grey',
        disabled: false,
        className: 'text-grey-foreground hover:bg-grey-50',
      },
      {
        variant: 'ghost',
        colorScheme: 'grey',
        disabled: true,
        className: 'text-grey-foreground hover:bg-transparent',
      },
      {
        variant: 'ghost',
        colorScheme: 'whiteAlpha',
        disabled: false,
        className: 'text-whiteAlpha-foreground hover:bg-whiteAlpha-600',
      },
      {
        variant: 'ghost',
        colorScheme: 'whiteAlpha',
        disabled: true,
        className: 'text-whiteAlpha-foreground hover:bg-transparent',
      },
      {
        variant: 'ghost',
        colorScheme: 'error',
        disabled: false,
        className: 'text-error hover:bg-error-50',
      },
      {
        variant: 'ghost',
        colorScheme: 'error',
        disabled: true,
        className: 'text-error hover:bg-transparent',
      },
      {
        variant: 'ghost',
        colorScheme: 'info',
        disabled: false,
        className: 'text-info hover:bg-info-50',
      },
      {
        variant: 'ghost',
        colorScheme: 'info',
        disabled: true,
        className: 'text-info hover:bg-transparent',
      },
      /**
       * link
       */
      {
        variant: 'link',
        colorScheme: 'primary',
        disabled: false,
        className: 'text-primary',
      },
      {
        variant: 'link',
        colorScheme: 'primary',
        disabled: true,
        className: 'text-primary hover:no-underline',
      },
      {
        variant: 'link',
        colorScheme: 'grey',
        disabled: false,
        className: 'text-grey-800',
      },
      {
        variant: 'link',
        colorScheme: 'grey',
        disabled: true,
        className: 'text-grey-800 hover:no-underline',
      },
      {
        variant: 'link',
        colorScheme: 'whiteAlpha',
        disabled: false,
        className: 'text-whiteAlpha-foreground',
      },
      {
        variant: 'link',
        colorScheme: 'whiteAlpha',
        disabled: true,
        className: 'text-whiteAlpha-foreground hover:no-underline',
      },
      {
        variant: 'link',
        colorScheme: 'error',
        disabled: false,
        className: 'text-error',
      },
      {
        variant: 'link',
        colorScheme: 'error',
        disabled: true,
        className: 'text-error hover:no-underline',
      },
      {
        variant: 'link',
        colorScheme: 'info',
        disabled: false,
        className: 'text-info',
      },
      {
        variant: 'link',
        colorScheme: 'info',
        disabled: true,
        className: 'text-info hover:no-underline',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      colorScheme: 'primary',
      size: 'lg',
      disabled: false,
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      colorScheme,
      disabled,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, colorScheme, disabled }),
          className,
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants };
