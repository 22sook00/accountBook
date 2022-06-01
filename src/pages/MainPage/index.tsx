import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Lists from "../../components/Main/Lists/Lists";
import DatePickers from "../../components/Common/DatePickers/DatePickers";
import AddForm from "../../components/Forms/AddForm/AddForm";
import ModalLayout from "../../components/Common/Modals/ModalLayout";
import FixedHeader from "src/components/Main/Header/FixedHeader";
import FixedFooter from "src/components/Main/Footer/FixedFooter";

const MainPage = () => {
  const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <FixedHeader setIsOpen={setIsOpen} />
      <DatePickers
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        setSelectedMonth={setSelectedMonth}
        selectedMonth={selectedMonth}
      />
      <Lists selectedMonth={selectedMonth} />
      <FixedFooter />

      {isOpen && (
        <ModalLayout
          isOpen={isOpen}
          title={"구매 항목을 입력하세요"}
          setIsOpen={setIsOpen}
        >
          <AddForm setIsOpen={setIsOpen} />
        </ModalLayout>
      )}
    </>
  );
};

export default MainPage;
