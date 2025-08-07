import { cn } from "../../lib";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui";

interface SelectComponentProps {
  className?: string;
  selectLabel?: string;
  selectItems?: { value: string; name: string }[];
  initialValue?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  value?: string;
}

export const SelectComponent = ({
  className,
  selectLabel,
  initialValue,
  selectItems,
  onValueChange,
  placeholder,
  value,
}: SelectComponentProps) => {
  return (
    <Select
      defaultValue={initialValue}
      value={value}
      onValueChange={onValueChange}
    >
      <SelectTrigger className={cn("", className)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{selectLabel}</SelectLabel>
          {selectItems?.map((item) => {
            return (
              <SelectItem key={item.value} value={item.value}>
                {item.name}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
