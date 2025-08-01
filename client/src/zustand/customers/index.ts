import { create } from "zustand";
import type { Customer, CustomersStore } from "./types";
import { axiosInstance } from "../../lib/axios";
import toast from "react-hot-toast";

export const useCustomersStore = create<CustomersStore>((set, get) => ({
  customers: [],
  end: 10,
  page: 1,
  pageSize: 10,
  start: 0,
  customer: null,
  editId: null,
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
  setPage: (page) => set({ page }),
  setPageSize: (pageSize) => set({ pageSize }),
  setStart: (start) => set({ start }),
  setEnd: (end) => set({ end }),
  deleteCustomer: async (id) => {
    try {
      const res = await axiosInstance.delete(`/customer/${id}`);
      const { getCustomers, setCustomer } = get();
      setCustomer?.("all", {
        name: "",
        phone: "",
        location: "",
        status: true,
        id: "",
      });
      getCustomers();
      toast.success(res.data.message);
    } catch (error) {
      console.error(error);
    }
  },
  setCustomer: (key, value) => {
    if (key === "all") {
      set({ customer: value as Customer });
    } else {
      set((state) => ({
        customer: { ...state.customer, [key]: value } as Customer,
      }));
    }
  },
  getCustomers: async () => {
    try {
      set({ isLoading: true });
      const res = await axiosInstance.get("/customers");
      set({ customers: res.data });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      set({ customers: error.response.data.customers });
      console.error(error);
    } finally {
      set({ isLoading: false });
    }
  },
  createCustomer: async (newCustomer) => {
    try {
      const res = await axiosInstance.post("/customer", newCustomer);
      const { getCustomers } = get();
      getCustomers();
      toast.success(res.data.message);
    } catch (error) {
      console.error(error);
    }
  },
  setEditId: (id) => set({ editId: id }),
  updateCustomer: async (customer) => {
    try {
      const { editId, getCustomers, setCustomer } = get();
      const res = await axiosInstance.put(`/customer/${editId}`, customer);
      setCustomer?.("all", {
        name: "",
        phone: "",
        location: "",
        status: true,
        id: "",
      });
      getCustomers();
      toast.success(res.data.message);
    } catch (error) {
      console.error(error);
    }
  },
}));
