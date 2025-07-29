import React from "react";
import { CirclePlus, Search } from "lucide-react";
import { ItemCard } from "../../components/card/itemCard";
import { InputComponent } from "../../components/input";
import { ButtonComponent } from "../../components/button";
import { ItemsModal } from "../../components/modals/itemsModal";
import { ItemsForm } from "../../components/forms/itemsForm";
import { useItemsStore } from "../../zustand/items";
import toast from "react-hot-toast";

export const ItemsPage = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [editModalOpen, setEditModalOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  const items = useItemsStore((s) => s.items);
  // const page = useItemsStore(s => s.page);
  // const pageSize = useItemsStore(s=>s.pageSize);
  // const start = useItemsStore(s=>s.start);
  // const end = useItemsStore(s=>s.end);
  const setEditItem = useItemsStore((s) => s.setEditItem);
  const handleEditItem = useItemsStore((s) => s.handleEditItem);
  const editItem = useItemsStore((s) => s.editItem);
  const deleteItem = useItemsStore((s) => s.deleteItem);
  const unit = useItemsStore((s) => s.unit);
  const setUnit = useItemsStore((s) => s.setUnit);
  // const setPageSize = useItemsStore(s=>s.setPageSize);
  // const setPage = useItemsStore(s=>s.setPage);
  // const setStart = useItemsStore(s=>s.setStart);
  // const setItem = useItemsStore(s=>s.setItem);
  // const setEnd = useItemsStore(s=>s.setEnd);

  const [itemDetails, setItemDetails] = React.useState(
    editItem ?? {
      id: "",
      title: "",
      price: {
        piecePrice: "",
        packPrice: "",
        rollPrice: "",
      },
      image: "",
      quantity: 0,
    },
  );

  React.useEffect(() => {
    if (editItem) {
      setItemDetails(editItem);
    } else {
      setItemDetails({
        id: "",
        title: "",
        price: {
          piecePrice: "",
          packPrice: "",
          rollPrice: "",
        },
        image: "",
        quantity: 0,
      });
    }
  }, [editItem, editModalOpen]);

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
    item.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()),
  );

  function handleAddItem() {
    if (itemDetails.title.trim() !== "" && itemDetails.quantity > 0) {
      setItem(itemDetails);
      setItemDetails({
        id: "",
        title: "",
        price: {
          piecePrice: "",
          packPrice: "",
          rollPrice: "",
        },
        image: "",
        quantity: 0,
      });
    } else {
      toast.error("Fill all the fields.");
    }
  }
  function handleEditItemChange() {
    if (itemDetails.title.trim() !== "" && itemDetails.quantity > 0) {
      handleEditItem?.(itemDetails);
      setItemDetails({
        id: "",
        title: "",
        price: {
          piecePrice: "",
          packPrice: "",
          rollPrice: "",
        },
        image: "",
        quantity: 0,
      });
    } else {
      toast.error("Fill all the fields.");
    }
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
            setItemDetails({
              id: "",
              title: "",
              price: {
                piecePrice: "",
                packPrice: "",
                rollPrice: "",
              },
              image: "",
              quantity: 0,
            });
            setModalOpen(true);
          }}
          className="flex items-center gap-x-2"
        >
          <CirclePlus className="w-5 h-5" />
          Add Item
        </ButtonComponent>
      </div>
      <div className="flex flex-wrap gap-4 items-center">
        {filteredItems.map((item) => {
          return (
            <ItemCard
              onEdit={setEditItem}
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
          itemDetails={itemDetails}
          setItemDetails={setItemDetails}
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
          itemDetails={itemDetails}
          setItemDetails={setItemDetails}
          selectOptions={selectOptions}
          setUnit={setUnit}
          unit={unit}
        />
      </ItemsModal>
    </div>
  );
};
