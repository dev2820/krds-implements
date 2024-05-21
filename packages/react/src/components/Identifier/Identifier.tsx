import { isString } from '@krds/utils';
import { type VariantProps, cva } from 'class-variance-authority';

import {
  type ComponentProps,
  forwardRef,
  ComponentPropsWithoutRef,
} from 'react';
import { Text } from '../Text';
import { createContext } from '../../hooks/create-context';
import { cn } from '../../utils';

const [Provider, useContext] = createContext<{
  isDark?: boolean;
  isRound?: boolean;
}>({
  name: 'Identifier',
  hookName: 'useIdentifierContext',
  providerName: 'IdentifierProvider',
  defaultValue: {
    isDark: false,
    isRound: false,
  },
});

const identifierVariants = cva(['h-10 overflow-hidden'], {
  variants: {
    isDark: {
      true: 'bg-grayscale-100 color-grayscale-0',
      false: 'bg-grayscale-0 color-text-body',
    },
    isRound: {
      true: 'rounded-3 px-5',
      false: '',
    },
  },
  defaultVariants: {
    isDark: false,
    isRound: false,
  },
});

export type RootProps = ComponentProps<typeof Root>;

const Root = forwardRef<
  HTMLElement,
  ComponentPropsWithoutRef<'section'> & VariantProps<typeof identifierVariants>
>(({ children, className, isDark = false, isRound = false, ...props }, ref) => {
  const defaultValue = {
    isDark: isDark ?? false,
    isRound: isRound ?? false,
  };

  return (
    <section
      className={cn(identifierVariants({ isDark, isRound }), className)}
      ref={ref}
      {...props}
      aria-labelledby='identifier'
    >
      <h3 id="identifier" className='sr-only'>identifier</h3>
      <Provider value={defaultValue}>
        <div className="max-w-desktop w-full h-full flex flex-row items-center gap-3">
          {children}
        </div>
      </Provider>
    </section>
  );
});
Root.displayName = 'Identifier';

export type LogoProps = ComponentProps<'img'> & {
  url:
    | string
    | {
        light: string;
        dark?: string;
      };
  alt?: string;
};
const Logo = forwardRef<HTMLImageElement, LogoProps>(
  ({ url, alt = '', className }, ref) => {
    const { isDark } = useContext();
    const logoUrl = isString(url)
      ? url
      : isDark
        ? url.dark ?? url.light
        : url.light;
    return (
      <img src={logoUrl} alt={alt} ref={ref} className={cn('h-6',`${isDark ? 'dark':'none-dark'}`, className)} />
    );
  },
);

Logo.displayName = "IdentifierLogo"

export type GuideProps = ComponentProps<typeof Text.Body>;

const Guide = forwardRef<HTMLSpanElement, GuideProps>(
  ({ className, ...props }, ref) => {
    
    return (
      <Text.Body as="span" size="sm" className={className} ref={ref} {...props}/>
    );
  },
);

Guide.displayName = "IdentifierGuide"

export { Root, Logo,Guide };
