import moment from "moment";
import React, { FC, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { IAddForm, IAddItems } from "../../interface/formInterface/IAddForm";
import { pickerOnlyMonth } from "../Common/DatePickers/DatePickers";
import "./lists.css";

interface IProps {
  selectedMonth: string;
  pickerOnlyMonth?: pickerOnlyMonth;
}

const Lists: FC<IProps> = ({ pickerOnlyMonth, selectedMonth }) => {
  const orderList = useSelector(
    (state: { addOrderForm: IAddForm }) => state.addOrderForm.buyItemArr
  );
  const onlyShowMonth = selectedMonth?.split("-")[1];
  const [showOnlySelectedMonthPrice, setShowOnlySelectedMonthPrice] =
    useState<any>([]);
  const [ttlPriceByMonth, setTtlPriceByMonth] = useState<number>(0);

  useEffect(() => {
    setShowOnlySelectedMonthPrice(
      orderList.filter(
        (data) =>
          moment(data.orderDate).format("YYYYMM") ===
          moment(selectedMonth).format("YYYYMM")
      )
    );
  }, [orderList, selectedMonth]);

  useEffect(() => {
    if (showOnlySelectedMonthPrice.length === 0) return;
    const addAll = showOnlySelectedMonthPrice?.reduce(
      (acc: any, cur: any) => acc + +cur.price * +cur.quantity,
      0
    );
    setTtlPriceByMonth(addAll);
  }, [showOnlySelectedMonthPrice]);

  return (
    <section className="payment-list-section-style">
      <div className="ttl-amount-style">
        <h1>{+onlyShowMonth}월 총 지출내역 </h1> <h1>{ttlPriceByMonth}원</h1>
      </div>
      {showOnlySelectedMonthPrice &&
        showOnlySelectedMonthPrice?.map((buying: IAddItems, idx: number) => {
          return (
            <article key={idx}>
              <div className="payment-list-article-style">
                <span>{buying?.orderDate}</span>
                <span>_{buying?.orderTime}</span>
                <div className="line-style" />
                <div className="flex-style">
                  <h4>
                    {buying.item} ({buying.price} x {buying.quantity})
                  </h4>
                  <h4>{+buying.price * buying.quantity}</h4>
                </div>
              </div>
            </article>
          );
        })}
    </section>
  );
};

export default Lists;
