import { items } from "../../data";
import { create } from "zustand";
import type { ItemsStore } from "./types";
export const useItemsStore = create<ItemsStore>((set) => ({
  items: items,
  end: 10,
  page: 1,
  pageSize: 10,
  start: 0,
  editItem: null,
  unit: "piece",
  setUnit: (unit) => set({ unit }),
  setPage: (page) => set({ page }),
  setPageSize: (pageSize) => set({ pageSize }),
  setStart: (start) => set({ start }),
  setEnd: (end) => set({ end }),
  setItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),
  deleteItem: (itemId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== itemId),
    })),
  handleEditItem: (updatedItem) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === updatedItem.id ? updatedItem : item,
      ),
      editItem: null,
    })),
  setEditItem: (editItem) => set({ editItem }),
}));
