import { SelectComponent } from "../../components/components/selectComponent";
import { Button, Input } from "../../components";
import { ItemsTable } from "../../components/components/itemsTable";
import { ItemsDrawer } from "../../components/components/itemsDrawer";
import React from "react";
import { BillModal } from "../../components/components/billModal";

export const OrderPage = () => {
  const customers: { name: string; value: string }[] = [
    {
      name: "Rahul",
      value: "rahul",
    },
  ];
  const [isModal, setIsModal] = React.useState(false);
  return (
    <div className="p-6 h-screen w-screen flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div></div>
        <p className="text-2xl font-bold text-center text-gray-700">
          Order Page
        </p>
        <Button
          className="bg-green-500 text-white px-4 py-2 rounded-md font-medium hover:bg-green-700"
          onClick={() => setIsModal(true)}
        >
          Save
        </Button>
      </div>
      <div className="flex flex-row gap-2">
        <SelectComponent
          selectItems={customers}
          placeholder="Search Customer"
        />
        <Input placeholder="Search Salesman" className="w-full" />
        <SelectComponent placeholder="Search Salemen" />
        <ItemsDrawer />
      </div>
      <div>
        <ItemsTable />
      </div>
      <BillModal isModal={isModal} setIsModal={setIsModal} />
    </div>
  );
};
