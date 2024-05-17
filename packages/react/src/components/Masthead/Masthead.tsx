import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

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
          className={cn('bg-background-2', className)}
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
        className={cn('min-h-8', className)}
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

export type TriggerProps = ComponentProps<'div'>;
const Trigger = forwardRef<
  HTMLButtonElement,
  ComponentProps<'button'> & {
    asChild?: boolean;
  }
>(({ asChild, className, ...props }, ref) => {
  const context = useContext();
  const Comp = asChild ? Slot : 'button';

  const handleClick = () => {
    context.setOpen(!context.open);
  };

  return (
    <Comp
      className={cn('[aria-open>svg]:rotate-180', className)}
      ref={ref}
      onClick={handleClick}
      {...props}
    />
  );
});

const descriptionVariant = cva('overflow-hidden border-border-secondary', {
  variants: {
    open: {
      true: 'max-h-500px',
      false: 'max-h-0',
    },
  },
  defaultVariants: {
    open: false,
  },
});

export type DescriptionProps = ComponentProps<'div'>;
const Description = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ className, ...props }, ref) => {
    const context = useContext();

    return (
      <div
        className={cn(descriptionVariant({ open: context.open }), className)}
        role="region"
        data-orientation={'vertical'}
        data-state={context.open ? 'open' : 'close'}
        ref={ref}
        {...props}
      />
    );
  },
);

export { Root, Container, Trigger, Description };
