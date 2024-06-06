import { ComponentProps, ReactNode, forwardRef } from 'react';

import { cn } from '../../utils';

export type LinkProps = ComponentProps<'a'> & {
  icon?: ReactNode;
};

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ icon, className, children, ...props }, ref) => {
    return (
      <a
        className={cn(
          'inline-flex flex-row items-center gap-1 underline color-primary-50 hover:color-primary-60 active:color-primary-70 visited:color-#5917B8',
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
        {icon}
      </a>
    );
  },
);

export { Link };
