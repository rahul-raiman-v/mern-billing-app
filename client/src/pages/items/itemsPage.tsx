import React from "react";
import { CirclePlus, Search } from "lucide-react";
import { useItemsStore } from "../../zustand";
import toast from "react-hot-toast";
import { NoDatas } from "../../assets";
import type { Items } from "../../types";
import {
  ButtonComponent,
  InputComponent,
  ItemCard,
  ItemsForm,
  ItemsModal,
  LoaderComponent,
} from "../../components";

export const ItemsPage = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [editModalOpen, setEditModalOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  const items = useItemsStore((s) => s.items);
  const deleteItem = useItemsStore((s) => s.deleteItem);
  const unit = useItemsStore((s) => s.unit);
  const setUnit = useItemsStore((s) => s.setUnit);
  const item = useItemsStore((s) => s.item);
  const setItem = useItemsStore((s) => s.setItem);
  const createItem = useItemsStore((s) => s.createItem);
  const getItems = useItemsStore((s) => s.getItems);
  const setEditId = useItemsStore((s) => s.setEditId);
  const updateItem = useItemsStore((s) => s.updateItem);
  const isLoading = useItemsStore((s) => s.isLoading);

  React.useEffect(() => {
    if (item) {
      setItem("all", item);
    } else {
      setItem("all", {
        id: "",
        name: "",
        price: 0,
        image: "",
        quantity: 0,
        units: [
          {
            name: "piece",
            conversionFactor: 1,
          },
        ],
      });
    }
  }, [setItem, editModalOpen, item]);

  React.useEffect(() => {
    getItems();
  }, [getItems]);

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

  const filteredItems = items.filter((item) =>
    item.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()),
  );

  function handleAddItem() {
    if (item?.name.trim() !== "" && item?.quantity && item?.quantity > 0) {
      createItem(item);
      setItem("all", {
        id: "",
        name: "",
        price: 0,
        image: "",
        quantity: 0,
        units: [
          {
            name: "piece",
            conversionFactor: 1,
          },
        ],
      });
    } else {
      toast.error("Fill all the fields.");
    }
  }
  function handleEditItemChange() {
    if (item?.name.trim() !== "" && item?.quantity && item?.quantity > 0) {
      updateItem(item);
      setItem("all", {
        id: "",
        name: "",
        price: 0,
        image: "",
        quantity: 0,
        units: [
          {
            name: "piece",
            conversionFactor: 1,
          },
        ],
      });
    } else {
      toast.error("Fill all the fields.");
    }
  }

  function handleEditItem(item: Items) {
    setEditId?.(item?.id);
    setItem("all", item);
  }

  return (
    <div className="border border-gray-300 h-[calc(100dvh-6.5rem)] bg-white p-4 rounded-xl shadow-xl flex flex-col gap-y-3">
      <div className="flex justify-between items-center">
        <InputComponent
          startContent={<Search className="size-3.5 text-gray-500" />}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Items"
          className="max-w-72"
        />
        <ButtonComponent
          onClick={() => {
            setItem("all", {
              id: "",
              name: "",
              price: 0,
              image: "",
              quantity: 0,
              units: [
                {
                  name: "piece",
                  conversionFactor: 1,
                },
              ],
            });
            setModalOpen(true);
          }}
          className="flex items-center gap-x-2"
        >
          <CirclePlus className="w-5 h-5" />
          Add Item
        </ButtonComponent>
      </div>

      {filteredItems.length === 0 &&
        (isLoading ? (
          <LoaderComponent />
        ) : (
          <div className="flex items-center justify-center flex-col h-full">
            <NoDatas className="size-[30rem]" />
            <p className="font-semibold text-lg text-gray-700">
              No Items Found
            </p>
          </div>
        ))}
      <div className="flex flex-wrap gap-4 items-center">
        {filteredItems.map((item) => {
          return (
            <ItemCard
              onEdit={handleEditItem}
              onDelete={deleteItem}
              key={item.id}
              item={item}
              isPreview={true}
              setModalOpen={setEditModalOpen}
            />
          );
        })}
      </div>
      <ItemsModal
        handleAddItem={handleAddItem}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      >
        <ItemsForm
          itemDetails={item}
          setItemDetails={setItem}
          selectOptions={selectOptions}
          setUnit={setUnit}
          unit={unit}
        />
      </ItemsModal>
      <ItemsModal
        handleAddItem={handleEditItemChange}
        buttonText="Update Item"
        modalOpen={editModalOpen}
        setModalOpen={setEditModalOpen}
      >
        <ItemsForm
          itemDetails={item}
          setItemDetails={setItem}
          selectOptions={selectOptions}
          setUnit={setUnit}
          unit={unit}
        />
      </ItemsModal>
    </div>
  );
};
