import { cva, type VariantProps } from "class-variance-authority";
import React from "react"
import { cn } from "../../utils";


export type LabelProps<T extends React.ElementType> = {
  as?:T;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>,"as"|"children">
& VariantProps<typeof labelVariants>

function Label<C extends React.ElementType>({ as, size, bold, className, children, ...props}:LabelProps<C>) {
  const Comp = as || 'span';
  
  return <Comp className={cn(labelVariants({ size, bold }),className)} {...props}>{children}</Comp>
}

const labelVariants = cva('leading-normal',{
  variants: {
    size: {
      lg: 'text-19px',
      md: 'text-17px',
      sm: 'text-15px',
      xs: 'text-13px',
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

export { Label }