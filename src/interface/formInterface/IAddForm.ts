import React from "react";

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
  orderDate: Date | null | string | React.Key | any;
  orderTime?: Date | null | React.Key | any;
  url?: string;
}
