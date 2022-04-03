export interface IAddForm {
  buyItemArr: Array<IAddItems>;
}
export interface IAddItems {
  item: string;
  category: string;
  isDating: boolean;
  quantity: number;
  price: number;
  orderDate: Date | null | string;
  orderTime?: Date | null;
  url?: string;
}
