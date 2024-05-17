import { cva, type VariantProps } from 'class-variance-authority';

import React from 'react';

import { cn } from '../../utils';

export type HeadingProps<T extends React.ElementType> = {
  as?: T;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children'> &
  VariantProps<typeof headingVariants>;

function Heading<C extends React.ElementType>({
  as,
  size,
  className,
  children,
  ...props
}: HeadingProps<C>) {
  const Comp = as || 'span';

  return (
    <Comp className={cn(headingVariants({ size }), className)} {...props}>
      {children}
    </Comp>
  );
}

const headingVariants = cva('leading-normal tracking-1px font-bold', {
  variants: {
    size: {
      lg: 'text-50px <mobile:text-40px',
      md: 'text-40px <mobile:text-32px',
      sm: 'text-32px <mobile:text-25px',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export { Heading };
