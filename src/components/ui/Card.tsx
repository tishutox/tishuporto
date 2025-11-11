import React from "react";
import { cn } from "../../lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outlined";
  padding?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { className, variant = "default", padding = "md", children, ...props },
    ref
  ) => {
    const baseStyles = "bg-white rounded-xl md:rounded-3xl overflow-hidden";

    const variants = {
      default: "outline outline-1 outline-offset-[-1px] outline-black/10",
      outlined:
        "bg-neutral-50 outline outline-[1.50px] outline-offset-[-1.50px] outline-zinc-100 ",
    };

    const paddings = {
      sm: "p-4 md:p-6",
      md: "p-6",
      lg: "p-8",
    };

    return (
      <div
        className={cn(
          baseStyles,
          variants[variant],
          paddings[padding],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card };
