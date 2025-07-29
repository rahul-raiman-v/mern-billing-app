import { cn } from "../../lib/utils";

export const AvatarImage = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "rounded-full w-fit size-10 flex items-center justify-center bg-violet-500",
        className,
      )}
    >
      <p className="text-white text-lg font-semibold">{children.charAt(0)}</p>
    </div>
  );
};
