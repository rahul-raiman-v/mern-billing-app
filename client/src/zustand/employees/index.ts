import { create } from "zustand";
import type { EmployeesStore } from "./types";
import type { Employee } from "../../pages/Customers";
import { axiosInstance } from "../../lib/axios";
import toast from "react-hot-toast";

export const useEmployeesStore = create<EmployeesStore>((set, get) => ({
  employees: [],
  end: 10,
  page: 1,
  pageSize: 10,
  start: 0,
  isLoading: false,
  employee: null,
  setIsLoading: (isLoading) => set({ isLoading }),
  setEmployee: (key, value) => {
    if (key === "all") {
      set({ employee: value as Employee });
    } else {
      set((state) => ({
        employee: { ...state.employee, [key]: value } as Employee,
      }));
    }
  },
  setPage: (page) => set({ page }),
  setPageSize: (pageSize) => set({ pageSize }),
  setStart: (start) => set({ start }),
  setEnd: (end) => set({ end }),
  deleteEmployee: async (id) => {
    try {
      const res = await axiosInstance.delete(`/employee/${id}`);
      const { getEmployees, setEmployee } = get();
      setEmployee?.("all", {
        name: "",
        phone: "",
        location: "",
        status: true,
        id: "",
      });
      getEmployees();
      toast.success(res.data.message);
    } catch (error) {
      console.error(error);
    }
  },
  getEmployees: async () => {
    try {
      set({ isLoading: true });
      const res = await axiosInstance.get("/employees");
      set({ employees: res.data.employees });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      set({ employees: error.response.data.employees });
      console.error(error);
    } finally {
      set({ isLoading: false });
    }
  },
  createEmployee: async (employee) => {
    try {
      const res = await axiosInstance.post("/employee", employee);
      const { getEmployees } = get();
      getEmployees();
      toast.success(res.data.message);
    } catch (error) {
      console.error(error);
    }
  },
  setEditEmployeeId: (id) => set({ editEmployeeId: id }),
  updateEmployee: async (employee) => {
    try {
      const { editEmployeeId, getEmployees, setEmployee } = get();
      const res = await axiosInstance.put(
        `/employee/${editEmployeeId}`,
        employee,
      );
      setEmployee?.("all", {
        name: "",
        phone: "",
        location: "",
        status: true,
        id: "",
      });
      getEmployees();
      toast.success(res.data.message);
    } catch (error) {
      console.error(error);
    }
  },
}));
