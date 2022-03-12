import React, { useState } from "react";
import { increment } from "../../slices/addFormSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import Buttons from "../../components/Common/Buttons/Buttons";
import Lists from "../../components/Lists/Lists";
import DatePickers from "../../components/Common/DatePickers/DatePickers";
import AddForm from "../../components/Forms/AddForm/AddForm";
import ModalLayout from "../../components/Common/Modals/ModalLayout";

const MainPage = () => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickMoveAddForm = () => {
    setIsOpen(true);
  };
  return (
    <>
      <DatePickers />
      <Lists />
      <Buttons
        bottom={"bottom"}
        bgcolor="rgb(177, 189, 220)"
        onclick={handleClickMoveAddForm}
        text={"+"}
      />

      {isOpen ? (
        <ModalLayout title={"추가하기"} setIsOpen={setIsOpen}>
          <AddForm />
        </ModalLayout>
      ) : (
        <></>
      )}
    </>
  );
};

export default MainPage;
