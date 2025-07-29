import { ButtonComponent } from "../../button";
import React from "react";

export const ItemsModal = ({
  modalOpen,
  setModalOpen,
  children,
  handleAddItem,
  heading = "Add New Item",
  buttonText = "Add Item",
}: {
  modalOpen: boolean;
  setModalOpen: (i: boolean) => void;
  children: React.ReactNode;
  handleAddItem?: () => void;
  heading?: string;
  buttonText?: string;
}) => {
  return (
    <div>
      {modalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col gap-4 w-1/3">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{heading}</h2>
              </div>
              <ButtonComponent
                variant="secondary"
                onClick={() => setModalOpen(false)}
              >
                CLose
              </ButtonComponent>
            </div>
            {/* Form for adding new item goes here */}
            {children}
            <ButtonComponent
              className="mt-1"
              onClick={() => {
                handleAddItem?.();
                setModalOpen(false);
              }}
            >
              {buttonText}
            </ButtonComponent>
          </div>
        </div>
      )}
    </div>
  );
};
