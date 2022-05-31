import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import Buttons from "../../components/Common/Buttons/Buttons";
import Lists from "../../components/Lists/Lists";
import DatePickers from "../../components/Common/DatePickers/DatePickers";
import AddForm from "../../components/Forms/AddForm/AddForm";
import ModalLayout from "../../components/Common/Modals/ModalLayout";

const MainPage = () => {
  const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickMoveAddForm = () => {
    setIsOpen(true);
  };
  return (
    <>
      <DatePickers
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        setSelectedMonth={setSelectedMonth}
        selectedMonth={selectedMonth}
      />
      <Lists selectedMonth={selectedMonth} />
      <Buttons bottom={"bottom"} onclick={handleClickMoveAddForm} text={"+"} />

      {isOpen ? (
        <ModalLayout
          isOpen={isOpen}
          title={"구매 항목을 입력하세요"}
          setIsOpen={setIsOpen}
        >
          <AddForm setIsOpen={setIsOpen} />
        </ModalLayout>
      ) : (
        <></>
      )}
    </>
  );
};

export default MainPage;
