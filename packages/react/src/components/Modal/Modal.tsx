import * as ModalPrimitive from '@radix-ui/react-dialog';

import { forwardRef } from 'react';
import type {
  ElementRef,
  ComponentPropsWithoutRef,
  HTMLAttributes,
  ComponentProps,
} from 'react';

import { cn } from '../../utils';

export type ModalProps = ComponentProps<typeof Modal>;
const Modal = ModalPrimitive.Root;

export type ModalTriggerProps = ComponentProps<typeof ModalTrigger>;
const ModalTrigger = ModalPrimitive.Trigger;

export type ModalPortalProps = ComponentProps<typeof ModalPortal>;
const ModalPortal = ModalPrimitive.Portal;

export type ModalCloseProps = ComponentProps<typeof ModalClose>;
const ModalClose = ModalPrimitive.Close;

export type ModalOverlayProps = ComponentProps<typeof ModalOverlay>;
const ModalOverlay = forwardRef<
  ElementRef<typeof ModalPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof ModalPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <ModalPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className,
    )}
    {...props}
  />
));
ModalOverlay.displayName = ModalPrimitive.Overlay.displayName;

export type ModalContentProps = ComponentProps<typeof ModalContent>;
const ModalContent = forwardRef<
  ElementRef<typeof ModalPrimitive.Content>,
  ComponentPropsWithoutRef<typeof ModalPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <ModalPortal>
    <ModalOverlay />
    <ModalPrimitive.Content
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
        className,
      )}
      {...props}
    >
      {children}
      <ModalPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <i className="i-t-close-big text-6" />
        <span className="sr-only">Close</span>
      </ModalPrimitive.Close>
    </ModalPrimitive.Content>
  </ModalPortal>
));
ModalContent.displayName = ModalPrimitive.Content.displayName;

export type ModalHeaderProps = ComponentProps<typeof ModalHeader>;
const ModalHeader = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col space-y-1.5 text-center sm:text-left',
      className,
    )}
    {...props}
  />
);
ModalHeader.displayName = 'ModalHeader';

export type ModalFooterProps = ComponentProps<typeof ModalFooter>;
const ModalFooter = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className,
    )}
    {...props}
  />
);
ModalFooter.displayName = 'ModalFooter';

export type ModalTitleProps = ComponentProps<typeof ModalTitle>;
const ModalTitle = forwardRef<
  ElementRef<typeof ModalPrimitive.Title>,
  ComponentPropsWithoutRef<typeof ModalPrimitive.Title>
>(({ className, ...props }, ref) => (
  <ModalPrimitive.Title
    ref={ref}
    className={cn(
      'text-lg font-semibold leading-none tracking-tight',
      className,
    )}
    {...props}
  />
));
ModalTitle.displayName = ModalPrimitive.Title.displayName;

export type ModalDescriptionProps = ComponentProps<typeof ModalDescription>;
const ModalDescription = forwardRef<
  ElementRef<typeof ModalPrimitive.Description>,
  ComponentPropsWithoutRef<typeof ModalPrimitive.Description>
>(({ className, ...props }, ref) => (
  <ModalPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
ModalDescription.displayName = ModalPrimitive.Description.displayName;

export {
  Modal,
  ModalPortal,
  ModalOverlay,
  ModalClose,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalDescription,
};
