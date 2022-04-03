export interface IAddForm {
  buyItemArr: Array<IAddItems>;
}
export interface IAddItems {
  item: string;
  category: string;
  quantity: number;
  price: string;
  orderDate: Date | null | string;
  orderTime?: Date | null;
  url?: string;
}
