import { cn } from "../../lib/utils";
import React from "react";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    React.ComponentProps<"input"> {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

export const InputComponent = ({
  startContent,
  endContent,
  className,
  type,
  ref,
  ...props
}: InputProps) => {
  const focusRef = React.useRef(null);
  const [focus, setFocus] = React.useState<boolean>(false);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        focusRef.current &&
        !(focusRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setFocus(false); // Clicked outside the div
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      role="none"
      className={cn(
        "flex items-center gap-x-1  w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        focus && "border-blue-500 border-2",
        className,
      )}
      ref={focusRef}
      onClick={() => setFocus(true)}
    >
      {startContent && <span className="mt-0.5">{startContent}</span>}
      <input
        type={type}
        className="w-full bg-transparent outline-none"
        ref={ref}
        {...props}
      />
      {endContent && <span className="mt-0.5">{endContent}</span>}
    </div>
  );
};
