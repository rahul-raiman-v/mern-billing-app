import {
  Select,
  SelectItem,
  SelectLabel,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "../ui";

export const SelectComponent = ({
  selectItems = [],
  placeholder = "",
  className,
  selectLabel = "Customers",
  value,
  onValueChange,
  initialValue = "",
}: {
  selectItems?: { name: string; value: string }[];
  placeholder: string;
  className?: string;
  selectLabel?: string;
  value?: string;
  initialValue?: string;
  onValueChange?: (value: string) => void;
}) => {
  return (
    <Select
      value={value}
      onValueChange={onValueChange}
      defaultValue={initialValue}
    >
      <SelectTrigger className={`w-full font-semibold ${className}`}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className={`w-full ${className}`}>
        <SelectGroup>
          <SelectLabel className="text-gray-700">{selectLabel}</SelectLabel>
          {selectItems.length > 0 ? (
            selectItems.map(
              (customer: { name: string; value: string }, idx: number) => {
                return (
                  <SelectItem
                    key={customer.value + idx}
                    value={customer.value}
                    className="text-gray-950 font-semibold cursor-pointer"
                  >
                    {customer.name}
                  </SelectItem>
                );
              },
            )
          ) : (
            <p className="text-gray-500 p-3 text-center">No Datas</p>
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
