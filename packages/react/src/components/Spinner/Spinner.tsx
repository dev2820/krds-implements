import { cva, VariantProps } from 'class-variance-authority';

import {
  ComponentPropsWithoutRef,
  forwardRef,
  type ComponentProps,
} from 'react';

import { cn } from '../../utils';

const SIZE_MAP: Record<string, number> = {
  lg: 48,
  md: 32,
  sm: 20,
};

const spinnerVariants = cva('relative', {
  variants: {
    size: {
      lg: 'size-48px',
      md: 'size-32px',
      sm: 'size-20px',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
export type RootProps = ComponentProps<typeof Root>;
const Root = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<'div'> &
    VariantProps<typeof spinnerVariants> & {
      type?: 'spin' | 'progress';
      progress?: number;
    }
>(({ type = 'spin', progress, size, className, ...props }, ref) => {
  const isProgressType = type === 'progress';
  const isSpinType = type === 'spin';
  size = size ?? 'md';
  let identifierProps: { spin: boolean; progress: number } = {
    spin: false,
    progress: progress ?? 0,
  };
  if (isSpinType) {
    identifierProps = {
      spin: true,
      progress: progress ?? 25,
    };
  }
  return (
    <div
      className={cn(spinnerVariants({ size }), className)}
      ref={ref}
      role={isProgressType ? 'progressbar' : undefined}
      aria-busy={isSpinType ? true : undefined}
      aria-valuemin={isProgressType ? 0 : undefined}
      aria-valuemax={isProgressType ? 100 : undefined}
      aria-valuenow={isProgressType ? progress : undefined}
      {...props}
    >
      <Track size={SIZE_MAP[size]} data-testid="track" />
      <Identifier
        size={SIZE_MAP[size]}
        data-testid="identifier"
        {...identifierProps}
      />
    </div>
  );
});

export type TrackProps = ComponentProps<typeof Track>;
function Track({
  size = 32,
  className,
  ...props
}: ComponentProps<'span'> & { size?: number }) {
  const strokeWidth = size === 48 ? 4 : size === 32 ? 3 : 2;

  return (
    <span className={cn('absolute color-grayscale-20', className)} {...props}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - strokeWidth / 2}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
        />
      </svg>
    </span>
  );
}

export type IdentifierProps = ComponentProps<typeof Identifier>;
function Identifier({
  spin = false,
  size = 32,
  progress = 0,
  className,
  ...props
}: ComponentProps<'span'> & {
  spin?: boolean;
  size?: number;
  progress?: number;
}) {
  const strokeWidth = size === 48 ? 4 : size === 32 ? 3 : 2;
  const outerRadius = size / 2;
  const innerRadius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * innerRadius;

  const strokeDasharray = `${(progress / 100) * circumference} ${(1 - progress / 100) * circumference}`;
  const strokeDashoffset = `${circumference / 4}`;

  return (
    <span
      className={cn(
        'absolute color-primary transition-stroke',
        {
          'animate-spin': spin,
        },
        className,
      )}
      {...props}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx={outerRadius}
          cy={outerRadius}
          r={innerRadius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export { Root, Track, Identifier };
