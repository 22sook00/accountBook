import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAddForm } from "../interface/formInterface/IAddForm";
import { RootState } from "../store";

const initialState: IAddForm = {
  item: "",
  category: "",
  quantity: 0,
  price: "",
  orderDate: "",
  orderTime: "",
};

export const addFormSlice = createSlice({
  name: "addOrderForm",
  initialState,
  reducers: {
    setSubmitOrderForm: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setSubmitOrderForm } = addFormSlice.actions;
export const selectOrderedItem = (state: RootState) => state.addOrderForm;

export default addFormSlice.reducer;
