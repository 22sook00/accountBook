import React from "react";
import { increment } from "../../slices/addFormSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import Buttons from "../../components/Common/Buttons/Buttons";
import Lists from "../../components/Lists/Lists";
import DatePickers from "../../components/Common/DatePickers/DatePickers";

const MainPage = () => {
  const dispatch = useDispatch();

  const handleClickAddBtn = () => {
    dispatch(increment());
  };
  return (
    <>
      <DatePickers />
      <Buttons
        bottom={"bottom"}
        bgcolor="rgb(177, 189, 220)"
        onclick={handleClickAddBtn}
        text={"+"}
      />
      <Lists />
    </>
  );
};

export default MainPage;
