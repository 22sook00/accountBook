export interface IAddForm {
  buyItemArr: Array<IAddItems>;
  buyItemArrByMonth: Array<IAddItems>;
}
export interface IAddItems {
  item: string;
  idx?: number;
  category: string;
  isDating: boolean;
  quantity: number;
  price: number;
  orderDate: Date | null | string;
  orderTime?: Date | null;
  url?: string;
}
