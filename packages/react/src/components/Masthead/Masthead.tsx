import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';

import type { ComponentProps, ComponentPropsWithoutRef } from 'react';
import { forwardRef, useState } from 'react';

import { createContext } from '../../hooks/create-context';
import { cn } from '../../utils';

const [Provider, useContext] = createContext<{
  open: boolean;
  setOpen: (value: boolean) => void;
}>({
  name: 'Masthead',
  hookName: 'useMastheadContext',
  providerName: 'MastheadProvider',
  defaultValue: {
    open: false,
    setOpen: () => {},
  },
});

export type RootProps = ComponentProps<typeof Root>;
const Root = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ className, children, ...props }, ref) => {
    const [open, setOpen] = useState<boolean>(false);
    const defaultValue = {
      open,
      setOpen: (value: boolean) => {
        setOpen(value);
      },
    };
    return (
      <Provider value={defaultValue}>
        <div
          role="banner"
          className={cn(
            'bg-background-2 flex flex-col items-center',
            className,
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </Provider>
    );
  },
);

export type ContainerProps = ComponentProps<'div'>;
const Container = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ className, children, ...props }, ref) => {
    const context = useContext();

    return (
      <div
        className={cn('min-h-8 max-w-desktop w-full', className)}
        data-orientation={'vertical'}
        data-state={context.open ? 'open' : 'close'}
        aria-expanded={context.open ? 'true' : 'false'}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  },
);

export type DropdownProps = ComponentProps<'div'>;
const Dropdown = forwardRef<
  HTMLButtonElement,
  ComponentProps<'button'> & {
    asChild?: boolean;
  }
>(({ asChild, children, className, ...props }, ref) => {
  const context = useContext();
  const Comp = asChild ? Slot : 'button';

  const handleClick = () => {
    context.setOpen(!context.open);
  };

  return (
    <Comp
      className={cn('[&[data-state=open]>svg]:rotate-180', className)}
      ref={ref}
      onClick={handleClick}
      data-state={context.open ? 'open' : 'close'}
      {...props}
    >
      {children}
      <ChevronDown size={12} className="transition-transform duration-200" />
    </Comp>
  );
});

const descriptionVariant = cva(
  [
    'overflow-hidden border-border-secondary transition-all duration-300 w-full flex flex-col items-center',
    'before:content-[""] before:w-full before:flex before:border-t-1 before:border-border-secondary',
  ],
  {
    variants: {
      open: {
        true: 'max-h-500px',
        false: 'max-h-0',
      },
    },
    defaultVariants: {
      open: false,
    },
  },
);

export type DescriptionProps = ComponentProps<'dl'>;
const Description = forwardRef<HTMLDListElement, ComponentProps<'dl'>>(
  ({ children, className, ...props }, ref) => {
    const context = useContext();

    return (
      <dl
        className={cn(descriptionVariant({ open: context.open }), className)}
        data-orientation={'vertical'}
        data-state={context.open ? 'open' : 'close'}
        ref={ref}
        {...props}
      >
        {children}
      </dl>
    );
  },
);

export type DescriptionTitleProps = ComponentProps<'dt'>;
const DescriptionTitle = forwardRef<HTMLElement, ComponentProps<'dt'>>(
  ({ className, ...props }, ref) => {
    return (
      <dt
        className={cn('mt-7 mb-5 max-w-desktop w-full', className)}
        ref={ref}
        {...props}
      />
    );
  },
);
export type DescriptionContentProps = ComponentProps<'dd'>;
const DescriptionContent = forwardRef<HTMLElement, ComponentProps<'dd'>>(
  ({ children, className, ...props }, ref) => {
    return (
      <dd
        className={cn('mb-7 pl-28px max-w-desktop w-full', className)}
        ref={ref}
        {...props}
      >
        {children}
      </dd>
    );
  },
);
export {
  Root,
  Container,
  Dropdown,
  Description,
  DescriptionTitle,
  DescriptionContent,
};
