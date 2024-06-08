import type { ComponentProps, ComponentPropsWithoutRef } from 'react';
import { forwardRef } from 'react';

import { cn } from '../../utils';

export type SkipLinkProps = ComponentProps<typeof SkipLink>;
const SkipLink = forwardRef<
  HTMLAnchorElement,
  Omit<ComponentPropsWithoutRef<'a'>, 'href'> & {
    to: string;
    theme: 'dark' | 'light';
  }
>(({ className, theme = 'dark', to, children, ...props }, ref) => {
  return (
    <a
      className={cn(
        theme === 'dark' && 'bg-grayscale-90 color-grayscale-foreground',
        theme === 'light' && 'bg-grayscale-0 color-text-body',
        'text-center block h-8 flex flex-row items-center justify-center',
        className,
      )}
      ref={ref}
      href={`#${to}`}
      {...props}
    >
      {children}
    </a>
  );
});

export { SkipLink };
