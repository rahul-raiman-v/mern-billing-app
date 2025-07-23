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
}: {
  selectItems?: { name: string; value: string }[];
  placeholder: string;
  className?: string;
  selectLabel?: string;
}) => {
  return (
    <Select>
      <SelectTrigger className={`w-full ${className}`}>
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
                    key={idx}
                    value={customer.value}
                    className="text-gray-950 font-semibold"
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
