import { capitalizeFirstLetter } from "../../../lib/utils";
import { SelectComponent } from "../../orders/selectComponent";
import { Input } from "../../ui";
import { FileInput } from "lucide-react";

interface ItemsFormProps {
  unit: string;
  setUnit: (i: string) => void;
  selectOptions: { value: string; name: string }[];
  itemDetails: {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
    units: {
      name: string;
      conversionFactor: number;
    }[];
  } | null;
  setItemDetails: (
    key: string,
    e:
      | {
          id: string;
          name: string;
          price: number;
          image: string;
          quantity: number;
          units: {
            name: string;
            conversionFactor: number;
          }[];
        }
      | null
      | string
      | boolean
      | { name: string; conversionFactor: number }[]
      | number,
  ) => void;
}
export const ItemsForm = ({
  selectOptions,
  setUnit,
  unit,
  itemDetails,
  setItemDetails,
}: ItemsFormProps) => {
  const getUnitPrice = (unit: string) => {
    const pieceUnit = itemDetails?.units?.find((units) => units.name === unit);
    switch (unit) {
      case "piece":
        return (
          <div className="w-full">
            <p className="font-medium">
              {capitalizeFirstLetter(pieceUnit?.name)}
            </p>
            <Input
              type="text"
              className="border border-gray-300 p-2 rounded w-full"
              placeholder="Enter units"
              value={pieceUnit?.conversionFactor}
              onChange={(e) =>
                setItemDetails(
                  "units",
                  itemDetails?.units?.map((units) => {
                    if (units?.name === "piece") {
                      return {
                        ...units,
                        conversionFactor: Number(e.target.value),
                      };
                    }
                    return units;
                  }) ?? [],
                )
              }
            />
          </div>
        );
      case "roll":
        return (
          <div className="w-full">
            <p className="font-medium">
              {capitalizeFirstLetter(pieceUnit?.name)}
            </p>
            <Input
              type="text"
              className="border border-gray-300 p-2 rounded w-full"
              placeholder="Enter units"
              value={pieceUnit?.conversionFactor}
              onChange={(e) =>
                setItemDetails(
                  "units",
                  itemDetails?.units?.map((units) => {
                    if (units?.name === "roll") {
                      return {
                        ...units,
                        conversionFactor: Number(e.target.value),
                      };
                    }
                    return units;
                  }) ?? [],
                )
              }
            />
          </div>
        );
      case "pack":
        return (
          <div className="w-full">
            <p className="font-medium">
              {capitalizeFirstLetter(pieceUnit?.name)}
            </p>
            <Input
              type="text"
              className="border border-gray-300 p-2 rounded w-full"
              placeholder="Enter units"
              value={pieceUnit?.conversionFactor}
              onChange={(e) =>
                setItemDetails(
                  "units",
                  itemDetails?.units?.map((units) => {
                    if (units?.name === "pack") {
                      return {
                        ...units,
                        conversionFactor: Number(e.target.value),
                      };
                    }
                    return units;
                  }) ?? [],
                )
              }
            />
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col-reverse items-center ">
        <p className="font-medium">Image</p>
        <div className="relative border border-gray-300 p-4 rounded-full w-fit flex items-center justify-center">
          <FileInput size={32} color="#4783d1" />
          <Input
            type="file"
            accept="image/jpeg, image/png"
            className="border border-gray-300 p-2 rounded w-full absolute h-full top-0 left-0 opacity-0 cursor-pointer"
          />
        </div>
      </div>
      <div>
        <p className="font-medium">Item Id</p>
        <Input
          type="text"
          className="w-full"
          placeholder="Item Id"
          value={itemDetails?.id}
          onChange={(e) => setItemDetails("id", e.target.value)}
        />
      </div>
      <div>
        <p className="font-medium">Item Name</p>
        <Input
          type="text"
          className="w-full"
          placeholder="Item Title"
          value={itemDetails?.name}
          onChange={(e) => setItemDetails("name", e.target.value)}
        />
      </div>
      <div>
        <p className="font-medium">Quantity</p>
        <Input
          type="text"
          className="w-full"
          placeholder="Item Quantity"
          value={itemDetails?.quantity}
          onChange={(e) => setItemDetails("quantity", Number(e.target.value))}
        />
      </div>
      <div>
        <p className="font-medium">Price</p>
        <Input
          type="text"
          className="w-full"
          placeholder="Item Price"
          value={itemDetails?.price}
          onChange={(e) => setItemDetails("price", Number(e.target.value))}
        />
      </div>
      <div className="flex items-center gap-x-4 w-full">
        {getUnitPrice(unit)}
        <div className="w-full">
          <p className="font-medium">Unit</p>
          <SelectComponent
            placeholder="Select Unit"
            selectLabel="Unit"
            onValueChange={setUnit}
            selectItems={selectOptions}
            initialValue="piece"
          />
        </div>
      </div>
    </div>
  );
};
