import { cva, type VariantProps } from "class-variance-authority";
import React from "react"
import { cn } from "../../utils";


export type TitleProps<T extends React.ElementType> = {
  as?:T;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>,"as"|"children">
& VariantProps<typeof titleVariants>

function Title<C extends React.ElementType>({ as, size, className, children, ...props}:TitleProps<C>) {
  const Comp = as || 'span';
  
  return <Comp className={cn(titleVariants({ size }),className)} {...props}>{children}</Comp>
}

const titleVariants = cva('leading-normal font-bold',{
  variants: {
    size: {
      '2xl': 'text-32px tracking-1px sm:text-25px',
      xl: 'text-25px',
      lg: 'text-21px',
      md: 'text-19px',
      sm: 'text-17px',
      xs: 'text-15px'
    },
  },
  defaultVariants: {
    size: 'md'
  }
})

export { Title }