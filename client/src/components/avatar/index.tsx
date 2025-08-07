import { cn } from "../../lib";

export const AvatarImage = ({
  children,
  className,
  textClassName,
  onImageClick,
}: {
  children: string;
  className?: string;
  textClassName?: string;
  onImageClick?: () => void;
}) => {
  return (
    <button
      className={cn(
        "rounded-full w-fit size-10 flex items-center justify-center bg-violet-500",
        className,
      )}
      onClick={onImageClick}
    >
      <p className={cn("text-white text-lg font-semibold", textClassName)}>
        {children.charAt(0)}
      </p>
    </button>
  );
};
