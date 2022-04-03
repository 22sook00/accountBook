import React, { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./datePickers.css";
import DatePicker from "react-datepicker";
import { subDays, addDays } from "date-fns";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import { RootState } from "../../../store";

interface PickerProps {
  bgcolor?: string;
}

const DatePickers: FC<PickerProps> = ({ bgcolor }) => {
  // const dispatch = useDispatch();
  // const example = useSelector((state: RootState) => state.addForm.value);

  const [selectedMonth, setSelectedMonth] = useState<any>(new Date());

  return (
    <>
      <DatePicker
        locale={ko}
        className="datepicker-custom-style"
        showPopperArrow={false}
        selected={selectedMonth}
        onChange={(date) => setSelectedMonth(date)}
        highlightDates={[subDays(new Date(), 7), addDays(new Date(), 7)]}
        inline
      />
    </>
  );
};

export default DatePickers;
