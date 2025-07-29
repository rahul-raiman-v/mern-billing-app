import { cn } from "../../lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "default";
}

export const ButtonComponent = ({
  className,
  size = "default",
  variant = "primary",
  ...props
}: ButtonProps) => {
  const sizes = {
    default: "px-5 py-2.5 rounded-lg",
  };
  const variants = {
    primary:
      "text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium  text-sm text-center ",
    secondary:
      "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  text-sm  text-center ",
  };
  return (
    <button
      className={cn(sizes[size], variants[variant], className)}
      {...props}
    >
      {props.children}
    </button>
  );
};
