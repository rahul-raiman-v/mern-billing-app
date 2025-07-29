import { create } from "zustand";
import type { CustomersStore } from "./types";
import { customers } from "../../data/customers";

export const useCustomersStore = create<CustomersStore>((set) => ({
  customers: customers,
  end: 10,
  page: 1,
  pageSize: 10,
  start: 0,
  editCustomer: null,
  setCustomer: (customer) =>
    set((state) => ({
      customers: [...state.customers, customer],
    })),
  setPage: (page) => set({ page }),
  setPageSize: (pageSize) => set({ pageSize }),
  setStart: (start) => set({ start }),
  setEnd: (end) => set({ end }),
  deleteCustomer: (id) =>
    set((state) => ({
      customers: state.customers.filter((customer) => customer.id !== id),
    })),
  setEditCustomer: (customer) => set({ editCustomer: customer }),
  handleEditCustomer: (updatedCustomer) =>
    set((state) => ({
      customers: state.customers.map((customer) =>
        customer.id === updatedCustomer.id ? updatedCustomer : customer,
      ),
      editCustomer: null,
    })),
}));
