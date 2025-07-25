import { Button } from "../ui";
import { SelectComponent } from "./selectComponent";

export const BillModal = ({
  isModal,
  setIsModal,
}: {
  isModal: boolean;
  setIsModal: (i: boolean) => void;
}) => {
  return (
    <div>
      {isModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white z-10 fixed h-fit w-fit top-1/2 left-1/2 shadow-lg min-w-96 -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg flex flex-col gap-4">
            <p className="text-gray-500 font-semibold flex justify-between">
              Grand Total: <span className="text-blue-500 ">$2000</span>
            </p>
            <p className="text-gray-500 font-semibold flex justify-between">
              Round-off: <span className="text-blue-500 ">$2000</span>
            </p>
            <p className="text-gray-500 font-semibold flex justify-between">
              Balance: <span className="text-blue-500 ">$2000</span>
            </p>
            <p className="text-gray-500 font-semibold flex justify-between items-center">
              Payment:{" "}
              <SelectComponent
                selectLabel="Payments"
                placeholder="Select Payment"
                className="w-fit"
              />
            </p>
            <div className="flex flex-row gap-6 justify-center items-center">
              <Button
                className="bg-blue-500 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700"
                onClick={() => setIsModal(false)}
              >
                Place Order
              </Button>
              <Button
                className="bg-red-500 text-white px-4 py-2 rounded-md font-medium hover:bg-red-700"
                onClick={() => setIsModal(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
