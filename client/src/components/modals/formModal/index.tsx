import { ButtonComponent } from "../../button";
import React from "react";

export const ModalFormComponent = ({
  modalOpen,
  setModalOpen,
  handleAddMember,
  editMember,
  handleEditMember = () => false,
  heading = "",
  leftButtonLabel = "",
  rightButtonLabel = "",
  children = <></>,
  setMemberDetails,
  memberDetails,
}: {
  modalOpen: boolean;
  setModalOpen: (i: boolean) => void;
  handleAddMember?: (
    newCustomer: {
      name: string;
      phone: string;
      location: string;
      designation?: string;
      status: boolean;
      id?: string;
    } | null,
  ) => void;
  editMember?: {
    name: string;
    phone: string;
    location: string;
    designation?: string;
    status: boolean;
    id?: string;
  } | null;
  handleEditMember?: (
    updatedCustomer: {
      name: string;
      phone: string;
      location: string;
      designation?: string;
      status: boolean;
      id?: string;
    } | null,
  ) => void;
  heading: string;
  leftButtonLabel?: string;
  rightButtonLabel?: string;
  children: React.ReactNode;
  setMemberDetails?: (updatedCustomer: {
    name: string;
    phone: string;
    location: string;
    designation?: string;
    status: boolean;
    id?: string;
  }) => void;
  memberDetails: {
    name: string;
    phone: string;
    location: string;
    designation?: string;
    status: boolean;
    id?: string;
  } | null;
}) => {
  return (
    <div>
      {/* You can add modal content here for managing employees */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-opacity-40 flex
          justify-center items-center z-50 w-screen h-screen backdrop-blur-[0.125rem]"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full">
            <h2 className="text-xl font-semibold mb-4">{heading}</h2>
            {/* Form or content for adding a new employee */}
            {children}
            <div className="flex items-center gap-4">
              <ButtonComponent
                variant="secondary"
                onClick={() => {
                  if (!editMember) {
                    setMemberDetails?.({
                      name: "",
                      phone: "",
                      location: "",
                      designation: "",
                      status: true,
                      id: "",
                    });
                  }
                  setModalOpen(false);
                }}
                className="w-full"
              >
                {leftButtonLabel.length > 0 ? leftButtonLabel : "Close"}
              </ButtonComponent>
              <ButtonComponent
                className="w-full"
                onClick={() => {
                  if (!editMember) {
                    handleAddMember?.(memberDetails);
                  } else {
                    handleEditMember?.(memberDetails);
                  }
                  setModalOpen(false);
                  setMemberDetails?.({
                    name: "",
                    phone: "",
                    location: "",
                    designation: "",
                    status: true,
                    id: "",
                  });
                }}
              >
                {rightButtonLabel.length > 0
                  ? rightButtonLabel
                  : "Add Employee"}
              </ButtonComponent>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
