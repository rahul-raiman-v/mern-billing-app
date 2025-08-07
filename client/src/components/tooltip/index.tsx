import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui";
import { capitalizeFirstLetter } from "../../lib";

interface ToolTipComponentProps {
  children: string | React.ReactNode | number;
  tooltipContent: string;
  onButtonClick?: () => void;
}
export const ToolTipComponent = ({
  children,
  tooltipContent,
  onButtonClick,
}: ToolTipComponentProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button onClick={onButtonClick}>{children}</button>
        </TooltipTrigger>
        <TooltipContent
          side="right"
          sideOffset={6}
          className="bg-white text-gray-800 font-semibold border border-gray-300 shadow-lg text-sm"
        >
          <p>{capitalizeFirstLetter(tooltipContent)}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
