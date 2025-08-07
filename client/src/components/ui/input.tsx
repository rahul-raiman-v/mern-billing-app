import * as React from "react";

import { cn } from "../../lib";
interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    React.ComponentProps<"input"> {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startContent, endContent, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex items-center gap-x-1 h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ",
          className,
        )}
      >
        {startContent && <span className="mt-0.5">{startContent}</span>}
        <input
          type={type}
          className={`w-full bg-transparent outline-none h-full ${type === "file" ? "file:cursor-pointer" : ""}`}
          ref={ref}
          {...props}
        />
        {endContent && <span className="mt-0.5">{endContent}</span>}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
