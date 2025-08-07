import type { Items } from "../../types";

export interface ItemsStore {
  items: Items[];
  item: Items | null;
  unit: string;
  page: number;
  pageSize: number;
  start: number;
  end: number;
  editId?: string | null;
  isLoading: boolean;
  setUnit: (i: string) => void;
  setItem: (
    key: string,
    Item:
      | Items
      | null
      | string
      | boolean
      | { name: string; conversionFactor: number }[]
      | number,
  ) => void;
  setPage: (page: number) => void;
  setPageSize: (pageSize: number) => void;
  setStart: (start: number) => void;
  setEnd: (end: number) => void;
  deleteItem?: (id: string) => Promise<void>;
  setEditId?: (editId: string) => void;
  setIsLoading?: (isLoading: boolean) => void;
  getItems: () => Promise<void>;
  createItem: (item: Items) => Promise<void>;
  updateItem: (item: Items) => Promise<void>;
}
