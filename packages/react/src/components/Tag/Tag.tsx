import { XIcon } from 'lucide-react';

import { type ComponentProps, forwardRef } from 'react';

import { cn } from '../../utils';
import { Typo } from '../Typo';

export type TagProps = ComponentProps<typeof Tag>;
const Tag = forwardRef<HTMLButtonElement, ComponentProps<'button'>>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex flex-row gap-1 items-center',
          'h-8',
          'border border-border bg-background px-4 py-3 rounded-full',
          'hover:cursor-pointer hover:bg-secondary-5',
          'hover:cursor-pointer active:bg-secondary-10',
          'disabled:cursor-not-allowed disabled:bg-disabled',
          className,
        )}
        ref={ref}
        {...props}
      >
        <Typo.Label size="sm">{children}</Typo.Label>
        <XIcon size={12} className="color-grayscale-50" />
      </button>
    );
  },
);

export type TagGroupProps = ComponentProps<typeof TagGroup>;
const TagGroup = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn('flex flex-row flex-wrap gap-x-3 gap-y-3', className)}
        ref={ref}
        {...props}
      />
    );
  },
);
export { Tag, TagGroup };
