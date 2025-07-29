import { Input } from "../ui";
import { SelectComponent } from "../orders/selectComponent";
import { FileInput } from "lucide-react";
import { ButtonComponent } from "../button";
import React from "react";

export const ItemsModal = ({
  modalOpen,
  setModalOpen,
}: {
  modalOpen: boolean;
  setModalOpen: (i: boolean) => void;
}) => {
  const selectOptions = [
    {
      value: "piece",
      name: "Piece",
    },
    {
      value: "roll",
      name: "Roll",
    },
    {
      value: "pack",
      name: "Pack",
    },
  ];

  const [unit, setUnit] = React.useState("piece");

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
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col gap-4 w-1/3">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">Add New Item</h2>
              </div>
              <ButtonComponent
                variant="secondary"
                onClick={() => setModalOpen(false)}
              >
                CLose
              </ButtonComponent>
            </div>
            {/* Form for adding new item goes here */}
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
                  className="border border-gray-300 p-2 rounded w-full"
                  placeholder="Item Title"
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
            <ButtonComponent
              className="mt-1"
              onClick={() => setModalOpen(false)}
            >
              Add
            </ButtonComponent>
          </div>
        </div>
      )}
    </div>
  );
};
