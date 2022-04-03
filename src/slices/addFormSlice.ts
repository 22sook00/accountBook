import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAddForm } from "../interface/formInterface/IAddForm";
import { RootState } from "../store";

const initialState: IAddForm = {
  buyItemArr: [],
};

export const addFormSlice = createSlice({
  name: "addOrderForm",
  initialState,
  reducers: {
    setSubmitOrderForm: (state, action: PayloadAction<any>) => {
      return { ...state, buyItemArr: [...state.buyItemArr, action.payload] };
    },
    setDeleteItem: (state, action: PayloadAction<any>) => {
      // console.log("delelel", state, action.payload);
      // ...state,
      // cart: state.cart.filter((item) => item.id !== action.payload.id),

      return {
        ...state,
        buyItemArr: [...action.payload],
      };
    },
  },
});

export const { setSubmitOrderForm, setDeleteItem } = addFormSlice.actions;
export const selectOrderedItem = (state: RootState) => state.addOrderForm;

export default addFormSlice.reducer;
