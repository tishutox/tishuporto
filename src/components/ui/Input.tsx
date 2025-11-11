import React from "react";
import { cn } from "../../lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "minimal";
}

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "default" | "minimal";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const baseStyles =
      "w-full px-6 py-3.5 text-base font-medium border border-zinc-200/60 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2";

    const variants = {
      default:
        "bg-zinc-100 rounded-2xl outline outline-1 outline-offset-[-1px] outline-black/10 text-neutral-400 focus:text-zinc-900 focus:bg-white",
      minimal:
        "bg-transparent border-b border-zinc-200 rounded-none focus:border-zinc-500",
    };

    return (
      <input
        className={cn(baseStyles, variants[variant], className)}
        ref={ref}
        {...props}
      />
    );
  }
);

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const baseStyles =
      "w-full px-6 py-3.5 border border-zinc-200/60 text-base font-medium  transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 resize-none";

    const variants = {
      default:
        "bg-zinc-100 rounded-2xl outline outline-1 outline-offset-[-1px] outline-black/10 text-neutral-400 focus:text-zinc-900 focus:bg-white",
      minimal:
        "bg-transparent border-b border-zinc-200 rounded-none focus:border-zinc-500",
    };

    return (
      <textarea
        className={cn(baseStyles, variants[variant], className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
Textarea.displayName = "Textarea";

export { Input, Textarea };
