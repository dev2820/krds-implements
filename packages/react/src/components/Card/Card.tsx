import { type VariantProps, cva } from 'class-variance-authority';

import type { ComponentProps, HTMLAttributes } from 'react';

import { cn } from '@/utils';

const cardVariants = cva('rounded-lg text-card-foreground', {
  variants: {
    variant: {
      elevated: 'bg-card-background-elevated shadow-sm',
      outline: 'bg-card-background-outline border border-border',
      filled: 'bg-card-background-fill',
    },
  },
  defaultVariants: {
    variant: 'elevated',
  },
});

export type CardProps = ComponentProps<typeof Card>;
const Card = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>
>(({ variant, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(cardVariants({ variant }), className)}
    {...props}
  />
));
Card.displayName = 'Card';

export type CardHeaderProps = ComponentProps<typeof CardHeader>;
const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...props}
    />
  ),
);
CardHeader.displayName = 'CardHeader';

export type CardTitleProps = ComponentProps<typeof CardTitle>;
const CardTitle = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight',
      className,
    )}
    {...props}
  >
    {children}
  </h3>
));
CardTitle.displayName = 'CardTitle';

export type CardDescriptionProps = ComponentProps<typeof CardDescription>;
const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

export type CardContentProps = ComponentProps<typeof CardContent>;
const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  ),
);
CardContent.displayName = 'CardContent';

export type CardFooterProps = ComponentProps<typeof CardFooter>;
const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center p-6 pt-0', className)}
      {...props}
    />
  ),
);
CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
