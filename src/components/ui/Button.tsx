import React from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "status";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref
  ) => {
    const baseStyles =
      "inline-flex justify-center items-center gap-2.5 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
      primary: "bg-zinc-900 text-white hover:bg-zinc-800 focus:ring-zinc-500",
      secondary:
        "bg-zinc-100 text-zinc-900 border border-zinc-200 shadow-sm hover:bg-zinc-200 focus:ring-zinc-300",
      ghost:
        "bg-white/20 backdrop-blur-[20px] border border-zinc-300 shadow-sm outline outline-1 outline-offset-[-1px] outline-black/10 hover:bg-white/30",
      status:
        "bg-green-100 text-lime-700 hover:bg-green-200 focus:ring-green-300",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm rounded-lg",
      md: "px-6 py-3.5 text-base rounded-2xl",
      lg: "px-8 py-4 text-lg rounded-2xl",
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
