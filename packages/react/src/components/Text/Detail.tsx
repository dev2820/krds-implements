import { cva, type VariantProps } from "class-variance-authority";
import React from "react"
import { cn } from "../../utils";


export type DetailProps<T extends React.ElementType> = {
  as?:T;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>,"as"|"children">
& VariantProps<typeof detailVariants>

function Detail<C extends React.ElementType>({ as, size, bold, className, children, ...props}:DetailProps<C>) {
  const Comp = as || 'span';
  
  return <Comp className={cn(detailVariants({ size, bold }),className)} {...props}>{children}</Comp>
}

const detailVariants = cva('leading-normal',{
  variants: {
    size: {
      lg: 'text-17px',
      md: 'text-15px',
      sm: 'text-13px',
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

export { Detail }