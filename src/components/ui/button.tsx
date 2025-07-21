import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-normal ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-105",
  {
    variants: {
      variant: {
        default: "bg-primary-500 hover:bg-primary-600 text-white font-bold shadow-lg hover:shadow-xl",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg hover:shadow-xl",
        outline:
          "bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold",
        secondary:
          "bg-secondary-500 hover:bg-secondary-600 text-white font-bold shadow-lg hover:shadow-xl",
        tertiary:
          "bg-tertiary-500 hover:bg-tertiary-800 text-white font-bold shadow-lg hover:shadow-xl",
        quaternary:
          "bg-quaternary-500 hover:bg-quaternary-600 text-white font-bold shadow-lg hover:shadow-xl",
        quinary:
          "bg-quinary-700 hover:bg-quinary-600 text-white font-bold shadow-lg hover:shadow-xl",
        green:
          "bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg hover:shadow-xl",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        highlight: "bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-bold shadow-lg hover:shadow-xl hover:shadow-primary-500/25",
        "highlight-outline": "bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        xl: "py-4 px-8 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants } 