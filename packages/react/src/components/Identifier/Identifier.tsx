import { type VariantProps, cva } from 'class-variance-authority';

import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '../../utils';

const identifierVariants = cva(['h-10'], {
  variants: {
    dark: {
      true: 'bg-grayscale-100 color-grayscale-0',
      false: 'bg-grayscale-0 color-text-body',
    },
    round: {
      true: 'rounded-3 px-5',
      false: '',
    },
  },
  defaultVariants: {
    dark: false,
    round: false,
  },
});

export type IdentifierProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof identifierVariants>;

const Identifier = forwardRef<HTMLDivElement, IdentifierProps>(
  ({ children, className, dark, round, ...props }, ref) => {
    return (
      <div
        className={cn(identifierVariants({ dark, round }), className)}
        ref={ref}
        {...props}
      >
        <div className="max-w-desktop w-full h-full flex flex-row items-center gap-3">
          {children}
        </div>
      </div>
    );
  },
);
Identifier.displayName = 'Identifier';

export { Identifier };
