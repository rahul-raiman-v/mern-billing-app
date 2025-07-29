import { SelectComponent } from "../../orders/selectComponent";
import { Input } from "../../ui";
import { FileInput } from "lucide-react";

interface ItemsFormProps {
  unit: string;
  setUnit: (i: string) => void;
  selectOptions: { value: string; name: string }[];
  itemDetails: {
    id: string;
    title: string;
    price: {
      piecePrice?: string;
      packPrice?: string;
      rollPrice?: string;
    };
    image: string;
    quantity: number;
  };
  setItemDetails: (e: {
    id: string;
    title: string;
    price: {
      piecePrice?: string;
      packPrice?: string;
      rollPrice?: string;
    };
    image: string;
    quantity: number;
  }) => void;
}
export const ItemsForm = ({
  selectOptions,
  setUnit,
  unit,
  itemDetails,
  setItemDetails,
}: ItemsFormProps) => {
  const getUnitPrice = (unit: string) => {
    switch (unit) {
      case "piece":
        return (
          <div className="w-full">
            <p className="font-medium">Piece Price</p>
            <Input
              type="text"
              className="border border-gray-300 p-2 rounded w-full"
              placeholder="Item Price"
              value={itemDetails.price.piecePrice}
              onChange={(e) =>
                setItemDetails({
                  ...itemDetails,
                  price: { ...itemDetails.price, piecePrice: e.target.value },
                })
              }
            />
          </div>
        );
      case "roll":
        return (
          <div className="w-full">
            <p className="font-medium">Roll Price</p>
            <Input
              type="text"
              className="border border-gray-300 p-2 rounded w-full"
              placeholder="Item Price"
              value={itemDetails.price.rollPrice}
              onChange={(e) =>
                setItemDetails({
                  ...itemDetails,
                  price: { ...itemDetails.price, rollPrice: e.target.value },
                })
              }
            />
          </div>
        );
      case "pack":
        return (
          <div className="w-full">
            <p className="font-medium">Pack Price</p>
            <Input
              type="text"
              className="border border-gray-300 p-2 rounded w-full"
              placeholder="Item Price"
              value={itemDetails.price.packPrice}
              onChange={(e) =>
                setItemDetails({
                  ...itemDetails,
                  price: { ...itemDetails.price, packPrice: e.target.value },
                })
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
        <p className="font-medium">Item Name</p>
        <Input
          type="text"
          className="w-full"
          placeholder="Item Title"
          value={itemDetails.title}
          onChange={(e) =>
            setItemDetails({ ...itemDetails, title: e.target.value })
          }
        />
      </div>
      <div>
        <p className="font-medium">Quantity</p>
        <Input
          type="text"
          className="w-full"
          placeholder="Item Title"
          value={itemDetails.quantity}
          onChange={(e) =>
            setItemDetails({ ...itemDetails, quantity: Number(e.target.value) })
          }
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
