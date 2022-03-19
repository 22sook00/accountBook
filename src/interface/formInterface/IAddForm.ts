export interface IAddForm {
  item: string;
  category: string;
  quantity: number;
  price: string;
  orderDate: Date | null | string;
  orderTime: Date | null | string;
}
