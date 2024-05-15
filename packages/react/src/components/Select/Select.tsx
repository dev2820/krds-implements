import { type VariantProps, cva } from 'class-variance-authority';

import type { SelectHTMLAttributes } from 'react';

import { cn } from '@/utils';

const selectVariants = cva(
  [
    'border-1 border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'w-full',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'invalid:bg-error-50 invalid:border-error',
    'appearance-none',
  ],
  {
    variants: {
      size: {
        sm: 'h-8 pl-3 pt-1.5 pb-5px pr-2 rounded-lg text-sm',
        md: 'h-10 pl-4 py-2 pr-3 rounded-10px text-md',
        lg: 'h-12 pl-4 pt-2.5 pb-11px pr-3 rounded-xl text-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

export type SelectProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'size'
> &
  VariantProps<typeof selectVariants> & {
    placeholder?: string;
  };

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ size, placeholder, className, children, ...props }, ref) => {
    return (
      <div className="flex flex-row items-center relative text-grey-700">
        <select
          className={cn(selectVariants({ size }), className)}
          ref={ref}
          defaultValue={placeholder ? '' : undefined}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {children}
        </select>
        <i
          className={cn(
            'absolute right-0 i-t-chevron-right rotate-90 text-4 color-grey-700',
            `${size === 'sm' ? 'mr-2' : 'mr-3'}`,
          )}
        />
      </div>
    );
  },
);

Select.displayName = 'Select';

export { Select };
