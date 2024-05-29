import { cva, type VariantProps } from 'class-variance-authority';

import React from 'react';

import { cn } from '../../utils';

export type DisplayProps<T extends React.ElementType> = {
  as?: T;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children'> &
  VariantProps<typeof displayVariants>;

function Display<C extends React.ElementType>({
  as,
  size,
  className,
  children,
  ...props
}: DisplayProps<C>) {
  const Comp = as || 'span';

  return (
    <Comp className={cn(displayVariants({ size }), className)} {...props}>
      {children}
    </Comp>
  );
}

const displayVariants = cva('leading-normal tracking-1px font-bold', {
  variants: {
    size: {
      lg: 'text-66px <mobile:text-40px',
      md: 'text-50px <mobile:text-32px',
      sm: 'text-40px <mobile:text-25px',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export { Display };
