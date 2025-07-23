export const ItemsTable = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="grid grid-cols-5 gap-x-2 border p-3 border-gray-400 rounded-lg bg-gray-300">
        <p className="text-gray-800 font-semibold">Item Name</p>
        <p className="text-gray-800 font-semibold">Quantity</p>
        <p className="text-gray-800 font-semibold">Unit</p>
        <p className="text-gray-800 font-semibold">Unit Price</p>
        <p className="text-gray-800 font-semibold">Final Price</p>
      </div>
      <div className="grid grid-cols-5 gap-x-2 border p-3 border-gray-400 rounded-lg ">
        <p className="text-gray-800 font-semibold">Sample Item</p>
        <p className="text-gray-800 font-semibold">10</p>
        <p className="text-gray-800 font-semibold">pcs</p>
        <p className="text-gray-800 font-semibold">$5.00</p>
        <p className="text-gray-800 font-semibold">$50.00</p>
      </div>
      <div className="grid grid-cols-5 gap-x-2 border p-3 border-gray-400 rounded-lg ">
        <p className="text-gray-800 font-semibold">Sample Item 2</p>
        <p className="text-gray-800 font-semibold">20</p>
        <p className="text-gray-800 font-semibold">pcs</p>
        <p className="text-gray-800 font-semibold">$3.00</p>
        <p className="text-gray-800 font-semibold">$60.00</p>
      </div>
      <p className="font-semibold text-right px-1">Grand Total: $2000</p>
    </div>
  );
};
