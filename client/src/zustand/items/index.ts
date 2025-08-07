import { create } from "zustand";
import type { ItemsStore } from "./types";
import { axiosInstance } from "../../lib/axios";
import toast from "react-hot-toast";
import type { Items } from "../../types";

export const useItemsStore = create<ItemsStore>((set, get) => ({
  items: [],
  item: {
    id: "",
    name: "",
    price: 0,
    image: "",
    quantity: 0,
    units: [
      {
        name: "piece",
        conversionFactor: 1,
      },
      {
        name: "roll",
        conversionFactor: 12,
      },
      {
        name: "pack",
        conversionFactor: 20,
      },
    ],
  },
  end: 10,
  page: 1,
  pageSize: 10,
  start: 0,
  editId: null,
  unit: "piece",
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
  setUnit: (unit) => set({ unit }),
  setPage: (page) => set({ page }),
  setPageSize: (pageSize) => set({ pageSize }),
  setStart: (start) => set({ start }),
  setEnd: (end) => set({ end }),
  setItem: (key, item) => {
    if (key === "all") {
      set({ item: item as Items | null });
    } else {
      set((state) => ({ item: { ...state.item, [key]: item } as Items }));
    }
  },
  getItems: async () => {
    try {
      set({ isLoading: true });
      const res = await axiosInstance.get("/items");
      set({ items: res.data.items });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      set({ items: error.response.data.items });
      console.error(error);
    } finally {
      set({ isLoading: false });
    }
  },
  deleteItem: async (itemId) => {
    try {
      const res = await axiosInstance.delete(`/item/${itemId}`);
      toast.success(res.data.message);
      const { getItems } = get();
      getItems();
    } catch (error) {
      console.error(error);
    }
  },
  setEditId: (editId) => set({ editId }),
  createItem: async (item) => {
    try {
      const res = await axiosInstance.post("/item", item);
      toast.success(res.data.message);
      const { getItems } = get();
      getItems();
    } catch (error) {
      console.error(error);
    }
  },
  updateItem: async (item) => {
    try {
      const { editId, getItems } = get();
      const res = await axiosInstance.put(`/item/${editId}`, item);
      toast.success(res.data.message);
      getItems();
    } catch (error) {
      console.error(error);
    }
  },
}));
