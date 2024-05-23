import {
  ComponentPropsWithoutRef,
  forwardRef,
  type ComponentProps,
} from 'react';

import { cn } from '../../utils';

export type RootProps = ComponentProps<typeof Root>;
const Root = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<'div'> & {
    type?: 'spin' | 'progress';
    progress?: number;
  }
>(({ type = 'spin', progress, ...props }, ref) => {
  const isProgressType = type === 'progress';
  const isSpinType = type === 'spin';

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
      className={cn('relative w-32px h-32px')}
      ref={ref}
      aria-busy={isSpinType ? true : undefined}
      aria-role={isProgressType ? 'progressbar' : undefined}
      aria-valuemin={isProgressType ? 0 : undefined}
      aria-valuemax={isProgressType ? 100 : undefined}
      aria-valuenow={isProgressType ? progress : undefined}
      {...props}
    >
      <Track />
      <Identifier size={32} {...identifierProps} />
    </div>
  );
});

export type TrackProps = ComponentProps<typeof Track>;
function Track({ size = 32 }: { size?: number }) {
  return (
    <span className="absolute">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 2}
          stroke="#e6e6e6"
          strokeWidth="4"
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
}: {
  spin?: boolean;
  size?: number;
  progress?: number;
}) {
  const strokeWidth = 4;
  const outerRadius = size / 2;
  const innerRadius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * innerRadius;

  const strokeDasharray = `${(progress / 100) * circumference} ${(1 - progress / 100) * circumference}`;
  const strokeDashoffset = `${circumference / 4}`;

  return (
    <span
      className={cn('absolute color-primary transition-stroke', {
        'animate-spin': spin,
      })}
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
