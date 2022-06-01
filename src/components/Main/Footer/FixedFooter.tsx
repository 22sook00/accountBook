import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IAddForm } from "src/interface/formInterface/IAddForm";
import { formatPriceNumber } from "src/utils/numberFormatter";
interface IFixedFooter {
  selectedMonth: string;
  isCheckDate: boolean;
}
const FixedFooter: FC<IFixedFooter> = ({ selectedMonth, isCheckDate }) => {
  const [ttlPriceByMonth, setTtlPriceByMonth] = useState<number>(0);

  const orderListByMonth = useSelector(
    (state: { addOrderForm: IAddForm }) => state.addOrderForm.buyItemArrByMonth
  );
  const orderListByDating = orderListByMonth.filter(
    (status) => status.isDating
  );
  useEffect(() => {
    if (orderListByMonth.length === 0) return;
    const addAll = isCheckDate
      ? orderListByDating?.reduce((acc: any, cur: any) => acc + +cur.price, 0)
      : orderListByMonth?.reduce((acc: any, cur: any) => acc + +cur.price, 0);
    setTtlPriceByMonth(addAll);
  }, [isCheckDate, orderListByDating, orderListByMonth]);

  const onlyShowMonth = +selectedMonth?.split("-")[1];
  return (
    <footer className="bg-secondary-dark text-white border-t fixed bottom-0 z-20 px-4 w-full h-16 rounded-t-xl shadow-md flex justify-between items-center">
      <p className="text-sm">
        {onlyShowMonth}월 {isCheckDate ? "데이트" : "총"} 지출액{" "}
      </p>
      <h2 className="text-lg font-bold">
        {formatPriceNumber(ttlPriceByMonth)} 원
      </h2>
    </footer>
  );
};

export default FixedFooter;
