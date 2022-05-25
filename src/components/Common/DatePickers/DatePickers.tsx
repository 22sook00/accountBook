import React, { FC, SetStateAction, useEffect, useState } from "react";
import "./datePickers.css";
import DatePicker from "react-datepicker";
import { subDays, addDays } from "date-fns";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import { months } from "moment";
import moment from "moment";

export interface IPickerProps {
  bgcolor?: string;
  selectedDate: Date | null | any;
  setSelectedDate: React.Dispatch<SetStateAction<Date | null>>;

  selectedMonth: string;
  setSelectedMonth: React.Dispatch<SetStateAction<string>>;
}

export type pickerOnlyMonth = Pick<IPickerProps, "selectedDate">;

const DatePickers: FC<IPickerProps> = ({
  bgcolor,
  selectedDate,
  setSelectedDate,
  selectedMonth,
  setSelectedMonth,
}) => {
  return (
    <>
      <DatePicker
        locale={ko}
        className="datepicker-custom-style"
        showPopperArrow={true}
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        highlightDates={[subDays(new Date(), 7), addDays(new Date(), 7)]}
        inline
        renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => {
          const setMonth = moment(monthDate).format("YYYY-MM");
          return (
            <div>
              <></>
              <button
                aria-label="Previous Month"
                className={
                  "react-datepicker__navigation react-datepicker__navigation--previous"
                }
                onClick={decreaseMonth}
              >
                <span
                  className={
                    "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
                  }
                >
                  {"<"}
                </span>
              </button>
              <span className="react-datepicker__current-month">
                <>
                  {monthDate.toLocaleString("ko-KR", {
                    month: "long",
                    year: "numeric",
                  })}
                  {setSelectedMonth(setMonth)}
                </>
              </span>
              <button
                aria-label="Next Month"
                className={
                  "react-datepicker__navigation react-datepicker__navigation--next"
                }
                onClick={increaseMonth}
              >
                <span
                  className={
                    "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
                  }
                >
                  {">"}
                </span>
              </button>
            </div>
          );
        }}
      />
    </>
  );
};

export default DatePickers;
