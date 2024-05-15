import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { VariantProps, cva } from 'class-variance-authority';

import type {
  ElementRef,
  ComponentPropsWithoutRef,
  ComponentProps,
} from 'react';

import { cn } from '@/utils';

const avatarVariants = cva(
  'relative w-full rounded-lg border [&>i~*]:pl-7 [&>i+div]:translate-y-[-3px] [&>i]:absolute [&>i]:left-4 [&>i]:top-4 [&>i]:text-foreground',
  {
    variants: {
      size: {
        xs: 'h-6 w-6',
        sm: 'h-8 w-8',
        md: 'h-12 w-12',
        lg: 'h-16 w-16',
        xl: 'h-24 w-24',
        '2xl': 'h-32 w-32',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

export type AvatarProps = ComponentProps<typeof Avatar>;
const Avatar = forwardRef<
  ElementRef<typeof AvatarPrimitive.Root>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> &
    VariantProps<typeof avatarVariants>
>(({ className, size, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      avatarVariants({ size }),
      'relative flex shrink-0 overflow-hidden rounded-full',
      className,
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

export type AvatarImageProps = ComponentProps<typeof AvatarImage>;
const AvatarImage = forwardRef<
  ElementRef<typeof AvatarPrimitive.Image>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

export type AvatarFallbackProps = ComponentProps<typeof AvatarFallback>;
const AvatarFallback = forwardRef<
  ElementRef<typeof AvatarPrimitive.Fallback>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted',
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
