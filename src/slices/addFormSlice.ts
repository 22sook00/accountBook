import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";
import { IAddForm } from "../interface/formInterface/IAddForm";
import { RootState } from "../store";

const initialState: IAddForm = {
  buyItemArr: [],
  buyItemArrByMonth: [],
};

export const addFormSlice = createSlice({
  name: "addOrderForm",
  initialState,
  reducers: {
    setSubmitOrderForm: (state, action: PayloadAction<any>) => {
      return { ...state, buyItemArr: [...state.buyItemArr, action.payload] };
    },
    setFormListByMonth: (state, action) => {
      return {
        ...state,
        buyItemArrByMonth: state.buyItemArr.filter(
          (data) =>
            moment(data.orderDate).format("YYYYMM") ===
            moment(action.payload).format("YYYYMM")
        ),
      };
    },
    setDeleteItem: (state, action) => {
      return {
        ...state,
        buyItemArrByMonth: state.buyItemArrByMonth.filter(
          (value, idx) => idx !== action.payload.idx
        ),
        buyItemArr: state.buyItemArr.filter(
          (value) => `${value.orderDate}-${value.item}` !== action.payload.uuid
        ),
      };
    },
  },
});

export const { setSubmitOrderForm, setFormListByMonth, setDeleteItem } =
  addFormSlice.actions;
export const selectOrderedItem = (state: RootState) => state.addOrderForm;

export default addFormSlice.reducer;
