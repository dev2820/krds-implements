import { type VariantProps, cva } from 'class-variance-authority';

import type { InputHTMLAttributes } from 'react';

import { cn } from '@/utils';

const inputVariants = cva(
  [
    'flex w-full border border-input bg-background',
    'file:border-0 file:bg-transparent file:text-sm file:font-medium',
    'placeholder:text-muted-foreground',
    'ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-40',
    'invalid:bg-error-50 invalid:border-error',
  ],
  {
    variants: {
      sizeVariant: {
        xs: 'h-6 px-2 rounded-md text-xs',
        sm: 'h-8 px-3 rounded-lg text-sm',
        md: 'h-10 px-4 py-3 rounded-10px text-md',
        lg: 'h-12 px-4 rounded-xl text-lg',
      },
    },
    defaultVariants: {
      sizeVariant: 'md',
    },
  },
);

export type InputProps = InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, sizeVariant, ...props }, ref) => {
    return (
      <input
        className={cn(inputVariants({ sizeVariant }), className)}
        type={type}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
