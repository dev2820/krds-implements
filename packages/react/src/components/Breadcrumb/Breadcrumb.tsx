import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cva } from 'class-variance-authority';

import type {
  ComponentPropsWithoutRef,
  ReactNode,
  ComponentProps,
} from 'react';

import { cn } from '@/utils';

export type BreadcrumbProps = ComponentProps<typeof Breadcrumb>;
const Breadcrumb = forwardRef<
  HTMLElement,
  ComponentPropsWithoutRef<'nav'> & {
    separator?: ReactNode;
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />);
Breadcrumb.displayName = 'Breadcrumb';

export type BreadcrumbListProps = ComponentProps<typeof BreadcrumbList>;
const BreadcrumbList = forwardRef<
  HTMLOListElement,
  ComponentPropsWithoutRef<'ol'>
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5',
      className,
    )}
    {...props}
  />
));
BreadcrumbList.displayName = 'BreadcrumbList';

export type BreadcrumbItemProps = ComponentProps<typeof BreadcrumbItem>;
const BreadcrumbItem = forwardRef<
  HTMLLIElement,
  ComponentPropsWithoutRef<'li'>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn('inline-flex items-center gap-1.5', className)}
    {...props}
  />
));
BreadcrumbItem.displayName = 'BreadcrumbItem';

export type BreadcrumbLinkProps = ComponentProps<typeof BreadcrumbLink>;
const BreadcrumbLink = forwardRef<
  HTMLAnchorElement,
  ComponentPropsWithoutRef<'a'> & {
    asChild?: boolean;
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      ref={ref}
      className={cn('transition-colors hover:text-foreground', className)}
      {...props}
    />
  );
});
BreadcrumbLink.displayName = 'BreadcrumbLink';

export type BreadcrumbPageProps = ComponentProps<typeof BreadcrumbPage>;
const BreadcrumbPage = forwardRef<
  HTMLSpanElement,
  ComponentPropsWithoutRef<'span'>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn('font-normal text-foreground', className)}
    {...props}
  />
));
BreadcrumbPage.displayName = 'BreadcrumbPage';

const breadcrumbSeparatorVariants = cva('', {
  variants: {
    type: {
      slash: 'i-t-slash',
      dash: 'i-t-dash',
      arrow: 'i-t-arrow',
    },
  },
  defaultVariants: {
    type: 'slash',
  },
});
export type BreadcrumbSeparatorProps = ComponentProps<
  typeof BreadcrumbSeparator
>;
const BreadcrumbSeparator = ({
  type,
  children,
  className,
  ...props
}: ComponentProps<'li'> & VariantProps<typeof breadcrumbSeparatorVariants>) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn('[&>svg]:size-3.5', className)}
    {...props}
  >
    {children ?? (
      <i className={cn(breadcrumbSeparatorVariants({ type }), 'text-6')} />
    )}
  </li>
);
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

export type BreadcrumbEllipsisProps = ComponentProps<typeof BreadcrumbEllipsis>;
const BreadcrumbEllipsis = ({
  className,
  ...props
}: ComponentProps<'span'>) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <span className="h-4 w-4">...</span>
    <span className="sr-only">More</span>
  </span>
);
BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis';

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
