import * as React from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={`w-full rounded-lg bg-white/20 px-4 py-2 text-white placeholder:text-white/50 outline-none border border-white/30 focus:border-emerald-400 transition-all duration-200 shadow-md focus:shadow-emerald-500/30 resize-none ${className || ""}`}
      {...props}
    />
  )
);

Textarea.displayName = "Textarea"; 