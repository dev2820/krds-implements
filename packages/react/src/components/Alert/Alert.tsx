import { cva, type VariantProps } from 'class-variance-authority';

import type { ComponentProps, HTMLAttributes } from 'react';

import { cn } from '../../utils';

const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>i~*]:pl-7 [&>i+div]:translate-y-[-3px] [&>i]:absolute [&>i]:left-4 [&>i]:top-4 [&>i]:text-foreground',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        error: 'border-error/50 text-error dark:border-error [&>i]:text-error',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export type AlertProps = ComponentProps<typeof Alert>;
const Alert = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = 'Alert';

export type AlertTitleProps = ComponentProps<typeof AlertTitle>;
const AlertTitle = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('mb-1 font-medium leading-none tracking-tight', className)}
    {...props}
  >
    {children}
  </h5>
));
AlertTitle.displayName = 'AlertTitle';

export type AlertDescriptionProps = ComponentProps<typeof AlertDescription>;
const AlertDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm [&_p]:leading-relaxed', className)}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
