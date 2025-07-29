export interface Items {
  id: string;
  title: string;
  price: {
    piecePrice?: string;
    rollPrice?: string;
    packPrice?: string;
  };
  image: string;
  quantity: number;
}

export interface ItemsStore {
  items: Items[];
  unit: string;
  page: number;
  pageSize: number;
  start: number;
  end: number;
  editItem?: Items | null;
  setUnit: (i: string) => void;
  setItem: (Item: Items) => void;
  setPage: (page: number) => void;
  setPageSize: (pageSize: number) => void;
  setStart: (start: number) => void;
  setEnd: (end: number) => void;
  deleteItem?: (id: string) => void;
  setEditItem?: (Item: Items | null) => void;
  handleEditItem?: (updatedItem: Items) => void;
}
