import { cva } from 'class-variance-authority';

import { cn } from '../../utils';
import { labelVariants } from '../Typo';

const dotBadgeVariants = cva('rounded-full size-1.5', {
  variants: {
    color: {
      primary: 'bg-primary',
      new: 'bg-point',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});

const countBadgeVariants = cva(
  ['h-5 px-3 rounded-full', labelVariants({ size: 'sm' })],
  {
    variants: {
      color: {
        primary: 'bg-primary color-primary-foreground',
        new: 'bg-point color-point-foreground',
      },
    },
    defaultVariants: {
      color: 'primary',
    },
  },
);
const textBadgeVariants = cva(
  ['rounded-2 px-3 box-border h-6', labelVariants({ size: 'sm' })],
  {
    variants: {
      color: {
        primary: '',
        secondary: '',
        tertiary: '',
        danger: '',
      },
      type: {
        solid: '',
        outline: '',
        subtle: '',
      },
    },
    defaultVariants: {
      color: 'primary',
      type: 'solid',
    },
    compoundVariants: [
      {
        color: 'primary',
        type: 'solid',
        className: 'bg-primary color-primary-foreground',
      },
      {
        color: 'primary',
        type: 'outline',
        className: 'border border-primary color-primary-60',
      },
      {
        color: 'primary',
        type: 'subtle',
        className: 'bg-primary-5 color-primary-60',
      },
      {
        color: 'secondary',
        type: 'solid',
        className: 'bg-secondary color-secondary-foreground',
      },
      {
        color: 'secondary',
        type: 'outline',
        className: 'border border-secondary color-secondary-60',
      },
      {
        color: 'secondary',
        type: 'subtle',
        className: 'bg-secondary-5 color-secondary-60',
      },
      {
        color: 'tertiary',
        type: 'solid',
        className: 'bg-grayscale-70 color-grayscale-foreground',
      },
      {
        color: 'tertiary',
        type: 'outline',
        className: 'border border-grayscale-70 color-grayscale-80',
      },
      {
        color: 'tertiary',
        type: 'subtle',
        className: 'bg-grayscale-20 color-grayscale-80',
      },
      {
        color: 'danger',
        type: 'solid',
        className: 'bg-danger color-danger-foreground',
      },
      {
        color: 'danger',
        type: 'outline',
        className: 'border border-danger color-danger-60',
      },
      {
        color: 'danger',
        type: 'subtle',
        className: 'bg-danger-5 color-danger-60',
      },
    ],
  },
);

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: 'dot' | 'count' | 'text';
  color?: 'primary' | 'new' | 'secondary' | 'tertiary' | 'danger';
  type?: 'solid' | 'outline' | 'subtle';
  count?: number;
  text?: string;
  isOverCount?: boolean;
};

function Badge({
  className,
  variant = 'text',
  color = 'primary',
  type = 'solid',
  count = NaN,
  text = '',
  isOverCount = false,
  ...props
}: BadgeProps) {
  const style =
    variant === 'dot'
      ? dotBadgeVariants({ color: color !== 'new' ? 'primary' : 'new' })
      : variant === 'count'
        ? countBadgeVariants({ color: color !== 'new' ? 'primary' : 'new' })
        : textBadgeVariants({
            color: color === 'new' ? 'danger' : color,
            type,
          });

  return (
    <span
      role="status"
      className={cn('inline-flex place-items-center', style, className)}
      {...props}
    >
      {variant === 'count' && `${isOverCount ? '+' : ''}${count}`}
      {variant === 'text' && text}
    </span>
  );
}

export { Badge };
