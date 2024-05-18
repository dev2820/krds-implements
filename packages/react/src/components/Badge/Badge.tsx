import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-2px border px-1 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        subtle: 'border-transparent',
        solid: 'border-transparent',
        outline: 'bg-transparent',
      },
      colorScheme: {
        primary: 'bg-primary text-primary-foreground',
        success: 'bg-success text-success-foreground',
        warning: 'bg-warning text-warning-foreground',
        error: 'bg-error text-error-foreground',
        info: 'bg-info text-info-foreground',
      },
    },
    compoundVariants: [
      {
        variant: 'outline',
        colorScheme: 'primary',
        className: 'bg-transparent border-primary text-primary-600',
      },
      {
        variant: 'outline',
        colorScheme: 'success',
        className: 'bg-transparent border-success text-success-600',
      },
      {
        variant: 'outline',
        colorScheme: 'warning',
        className: 'bg-transparent border-warning text-warning-600',
      },
      {
        variant: 'outline',
        colorScheme: 'error',
        className: 'bg-transparent border-error text-error-600',
      },
      {
        variant: 'outline',
        colorScheme: 'info',
        className: 'bg-transparent border-info text-info-600',
      },
      {
        variant: 'subtle',
        colorScheme: 'primary',
        className: 'bg-primary-100 text-primary-800',
      },
      {
        variant: 'subtle',
        colorScheme: 'success',
        className: 'bg-success-100 text-success-800',
      },
      {
        variant: 'subtle',
        colorScheme: 'warning',
        className: 'bg-warning-100 text-warning-800',
      },
      {
        variant: 'subtle',
        colorScheme: 'error',
        className: 'bg-error-100 text-error-800',
      },
      {
        variant: 'subtle',
        colorScheme: 'info',
        className: 'bg-info-100 text-info-800',
      },
    ],
    defaultVariants: {
      variant: 'subtle',
      colorScheme: 'primary',
    },
  },
);

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants>;

function Badge({ className, variant, colorScheme, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, colorScheme }), className)}
      {...props}
    />
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export { Badge, badgeVariants };
