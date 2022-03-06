import React from "react";
import Buttons from "../../components/Common/Buttons/Buttons";
import DatePicker from "../../components/Common/DatePickers/DatePicker";
import Lists from "../../components/Lists/Lists";
import { increment } from "../../slices/addFormSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";

const MainPage = () => {
  const example = useSelector((state: RootState) => state.addForm.value);
  const dispatch = useDispatch();

  const todayMonths = new Date().getMonth() + 1;

  const handleClickAddBtn = () => {
    dispatch(increment());
  };
  return (
    <>
      <Buttons bgcolor="#003A88" onclick={handleClickAddBtn} text={"Delete"} />
      <DatePicker />
      <h1>
        {todayMonths}월 총 지출내역 : 10000원 {example}
      </h1>
      <Lists />
    </>
  );
};

export default MainPage;
