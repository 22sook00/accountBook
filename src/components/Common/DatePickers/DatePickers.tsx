import React, { FC, SetStateAction } from "react";
import "./datePickers.css";
import DatePicker from "react-datepicker";
import { subDays, addDays } from "date-fns";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

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
    <section className="w-full mt-16  flex justify-center">
      <DatePicker
        locale={ko}
        className="datepicker-custom-style"
        showPopperArrow={true}
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        // highlightDates={[subDays(new Date(), 7), addDays(new Date(), 7)]}
        inline
        renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => {
          const setMonth = moment(monthDate).format("YYYY-MM");
          return (
            <div className="w-full ">
              <div className="w-full h-fit flex justify-between items-center text-base font-bold text-text-primary">
                <>
                  {monthDate.toLocaleString("En", {
                    month: "short",
                    year: "2-digit",
                  })}
                  {setSelectedMonth(setMonth)}
                </>
                <div className="flex gap-4">
                  <button aria-label="Previous Month" onClick={decreaseMonth}>
                    <ChevronLeftIcon className="cursor-pointer w-4 h-4" />
                  </button>

                  <button aria-label="Next Month" onClick={increaseMonth}>
                    <ChevronRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <hr className="my-2" />
            </div>
          );
        }}
      />
    </section>
  );
};

export default DatePickers;
