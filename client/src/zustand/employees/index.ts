import { create } from "zustand";
import { employees } from "../../data";
import type { EmployeesStore } from "./types";

export const useEmployeesStore = create<EmployeesStore>((set) => ({
  employees: employees,
  end: 10,
  page: 1,
  pageSize: 10,
  start: 0,
  editEmployee: null,
  setEmployee: (employee) =>
    set((state) => ({
      employees: [...state.employees, employee],
    })),
  setPage: (page) => set({ page }),
  setPageSize: (pageSize) => set({ pageSize }),
  setStart: (start) => set({ start }),
  setEnd: (end) => set({ end }),
  deleteEmployee: (id) =>
    set((state) => ({
      employees: state.employees.filter((employee) => employee.id !== id),
    })),
  setEditEmployee: (employee) => set({ editEmployee: employee }),
  handleEditEmployee: (updatedEmployee) =>
    set((state) => ({
      employees: state.employees.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee,
      ),
      editEmployee: null,
    })),
}));
