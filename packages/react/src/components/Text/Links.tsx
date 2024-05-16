import { cva, type VariantProps } from "class-variance-authority";
import React from "react"
import { cn } from "../../utils";


export type LinksProps<T extends React.ElementType> = {
  as?:T;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>,"as"|"children">
& VariantProps<typeof linksVariants>

function Links<C extends React.ElementType>({ as, size, bold, className, children, ...props}:LinksProps<C>) {
  const Comp = as || 'span';
  
  return <Comp className={cn(linksVariants({ size, bold }),className)} {...props}>{children}</Comp>
}

const linksVariants = cva('leading-normal',{
  variants: {
    size: {
      lg: 'text-19px',
      md: 'text-17px',
      sm: 'text-15px',
    },
    bold: {
      true: 'font-bold',
      false: 'font-normal'
    }
  },
  defaultVariants: {
    size: 'md',
    bold: false
  }
})

export { Links }