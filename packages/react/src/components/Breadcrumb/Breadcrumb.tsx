import { Slot } from '@radix-ui/react-slot';
import { Ellipsis as EllipsisIcon } from 'lucide-react';

import { forwardRef } from 'react';
import type {
  ComponentPropsWithoutRef,
  ReactNode,
  ComponentProps,
} from 'react';

import { createContext } from '../../hooks/create-context';
import { cn } from '../../utils';

const [Provider, useContext] = createContext<{
  separator?: ReactNode;
  ellipsis?: ReactNode;
}>({
  name: 'Breadcrumb',
  hookName: 'useBreadcrumbContext',
  providerName: 'BreadcrumbProvider',
  defaultValue: {
    separator: '/',
    ellipsis: <EllipsisIcon size={16} />,
  },
});

export type BreadcrumbProps = ComponentProps<typeof Root>;
const Root = forwardRef<
  HTMLElement,
  ComponentPropsWithoutRef<'nav'> & {
    separator?: ReactNode;
    ellipsis?: ReactNode;
  }
>(({ separator, ellipsis, ...props }, ref) => {
  const defaultValue = {
    separator: separator ?? '/',
    ellipsis: ellipsis ?? <EllipsisIcon size={16} />,
  };

  return (
    <Provider value={defaultValue}>
      <nav ref={ref} aria-label="breadcrumb" {...props} />
    </Provider>
  );
});
Root.displayName = 'Breadcrumb';

export type BreadcrumbListProps = ComponentProps<typeof List>;
const List = forwardRef<HTMLOListElement, ComponentPropsWithoutRef<'ol'>>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        'flex flex-wrap items-center gap-2 break-words text-sm h-6',
        className,
      )}
      {...props}
    />
  ),
);
List.displayName = 'BreadcrumbList';

export type BreadcrumbItemProps = ComponentProps<typeof Item>;
const Item = forwardRef<HTMLLIElement, ComponentPropsWithoutRef<'li'>>(
  ({ className, ...props }, ref) => (
    <li
      ref={ref}
      className={cn('inline-flex items-center gap-1.5', className)}
      {...props}
    />
  ),
);
Item.displayName = 'BreadcrumbItem';

export type BreadcrumbLinkProps = ComponentProps<typeof Link>;
const Link = forwardRef<
  HTMLAnchorElement,
  ComponentPropsWithoutRef<'a'> & {
    asChild?: boolean;
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      ref={ref}
      className={cn(
        'transition-colors hover:bg-secondary-5 active:bg-secondary-10 disabled:bg-transparent disabled:color-grayscale-50 rounded-2 underline p-6px',
        className,
      )}
      {...props}
    />
  );
});
Link.displayName = 'BreadcrumbLink';

export type BreadcrumbSeparatorProps = ComponentProps<typeof Separator>;
const Separator = ({ children, className, ...props }: ComponentProps<'li'>) => {
  const { separator } = useContext();

  return (
    <li
      role="presentation"
      aria-hidden="true"
      className={cn('', className)}
      {...props}
    >
      {children ?? separator}
    </li>
  );
};
Separator.displayName = 'BreadcrumbSeparator';

export type BreadcrumbEllipsisProps = ComponentProps<typeof Ellipsis>;
const Ellipsis = ({
  className,
  children,
  ...props
}: ComponentProps<'span'>) => {
  const { ellipsis } = useContext();

  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={cn('flex h-9 w-9 items-center justify-center', className)}
      {...props}
    >
      <span className="h-4 w-4">{children ?? ellipsis}</span>
      <span className="sr-only">More</span>
    </span>
  );
};
Ellipsis.displayName = 'BreadcrumbElipssis';

export { Root, List, Item, Link, Separator, Ellipsis };
