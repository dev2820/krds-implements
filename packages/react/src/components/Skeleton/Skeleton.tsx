import type { ComponentProps } from 'react';

import { cn } from '@/utils';

export type SkeletonProps = ComponentProps<typeof Skeleton>;

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-gradient-to-r from-#E2E8F0 to-#EDF2F7',
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
