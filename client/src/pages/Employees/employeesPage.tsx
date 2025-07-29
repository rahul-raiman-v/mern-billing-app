import { CirclePlus, Search } from "lucide-react";
import React from "react";
import { useEmployeesStore } from "../../zustand";
import { InputComponent } from "../../components/input";
import { ModalFormComponent } from "../../components/modals/formModal";
import { EmployeeForm } from "../../components/forms/employeeForm";
import { ButtonComponent } from "../../components/button";
import { EmployeeTable } from "../../components/table/employeeTable";
import { PaginationComponent } from "../../components/pagination";

export interface Employee {
  name: string;
  phone: string;
  location: string;
  designation?: string;
  status: boolean;
  id?: string;
}

export const EmployeesPage = () => {
  const [addOpen, setAddOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  const tableHeaders: string[] = [
    "S.No",
    "Employee Name",
    "Phone Number",
    "Location",
    "Designation",
    "Status",
    "Actions",
  ];

  const employees = useEmployeesStore((s) => s.employees);
  const setEmployee = useEmployeesStore((s) => s.setEmployee);
  const deleteEmployee = useEmployeesStore((s) => s.deleteEmployee);
  const setEditEmployee = useEmployeesStore((s) => s.setEditEmployee);
  const editEmployee = useEmployeesStore((s) => s.editEmployee);
  const handleEditEmployee = useEmployeesStore((s) => s.handleEditEmployee);
  const page = useEmployeesStore((s) => s.page);
  const setPage = useEmployeesStore((s) => s.setPage);
  const pageSize = useEmployeesStore((s) => s.pageSize);
  const setPageSize = useEmployeesStore((s) => s.setPageSize);
  const setStart = useEmployeesStore((s) => s.setStart);
  const setEnd = useEmployeesStore((s) => s.setEnd);
  const start = useEmployeesStore((s) => s.start);
  const end = useEmployeesStore((s) => s.end);

  function handleAddEmployee(newCustomer: Employee) {
    setEmployee(newCustomer);
  }
  const filteredCustomers = employees
    .filter((customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .slice(start, end); // Limit to 10 for pagination
  function handleLimitChange(newLimit: string) {
    setPageSize(parseInt(newLimit, 10));
  }

  const selectOptions: { value: string; name: string }[] = [
    {
      value: "active",
      name: "Active",
    },
    {
      value: "inactive",
      name: "Inactive",
    },
  ];

  const [employeeDetails, setEmployeeDetails] = React.useState(
    editEmployee ?? {
      name: "",
      phone: "",
      location: "",
      designation: "",
      status: true,
      id: "",
    },
  );

  React.useEffect(() => {
    if (editEmployee) {
      setEmployeeDetails(editEmployee);
    } else {
      setEmployeeDetails({
        name: "",
        phone: "",
        location: "",
        designation: "",
        status: true,
        id: "",
      });
    }
  }, [editEmployee]);

  React.useEffect(() => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    setStart(start);
    setEnd(end);
  }, [page, pageSize, setEnd, setStart]);
  return (
    <div>
      {/* You can add more components or features related to employees here */}
      <div className="flex flex-col gap-y-4 p-4 bg-white border border-gray-300 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <InputComponent
            startContent={<Search className="size-3.5 text-gray-500" />}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Employees"
            className="max-w-72 "
          />
          <ButtonComponent
            onClick={() => setAddOpen(true)}
            className="flex items-center gap-x-2"
          >
            <CirclePlus className="w-5 h-5" />
            Add Employee
          </ButtonComponent>
        </div>
        <EmployeeTable
          tableHeaders={tableHeaders}
          tableBody={filteredCustomers}
          onEdit={(e) => {
            setEditEmployee?.(e);
            setEditOpen(true);
          }}
          onDelete={(id) => deleteEmployee?.(id)}
          className="h-[calc(100dvh-15rem)]"
        />
        <PaginationComponent
          currentPage={page}
          setCurrentPage={setPage}
          limit={String(pageSize)}
          setLimit={handleLimitChange}
          totalRecords={employees.length}
        />
      </div>
      <ModalFormComponent
        heading="Add Employee"
        memberDetails={employeeDetails}
        rightButtonLabel="Add Employee"
        modalOpen={addOpen}
        setModalOpen={setAddOpen}
        handleAddMember={handleAddEmployee}
      >
        <EmployeeForm
          customerDetails={employeeDetails}
          selectOptions={selectOptions}
          setCustomerDetails={setEmployeeDetails}
        />
      </ModalFormComponent>
      <ModalFormComponent
        memberDetails={employeeDetails}
        heading="Edit Employee"
        rightButtonLabel="Update Employee"
        editMember={editEmployee}
        handleEditMember={handleEditEmployee}
        modalOpen={editOpen}
        setModalOpen={setEditOpen}
      >
        <EmployeeForm
          customerDetails={employeeDetails}
          selectOptions={selectOptions}
          setCustomerDetails={setEmployeeDetails}
        />
      </ModalFormComponent>
    </div>
  );
};
