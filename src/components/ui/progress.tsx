import * as React from "react";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ value, max = 100, className, ...props }, ref) => (
    <div
      ref={ref}
      className={`w-full h-2 bg-gray-200 rounded-full overflow-hidden ${className || ""}`}
      {...props}
    >
      <div
        className="h-full bg-emerald-500 transition-all duration-300"
        style={{ width: `${(value / max) * 100}%` }}
      />
    </div>
  )
);

Progress.displayName = "Progress"; 