import React from "react";
import { useSelector } from "react-redux";
import { IAddForm } from "../../interface/formInterface/IAddForm";
import "./lists.css";

const paymentDatas = [
  {
    id: 1,
    createAt: "2022-03-01/20:01pm",
    type: "necessary",
    name: "칫솔",
    quantity: 2,
    price: 3000,
    url: "",
  },
  {
    id: 2,
    createAt: "2022-03-02/10:01pm",
    type: "food",
    name: "우유",
    quantity: 2,
    price: 3800,
    url: "",
  },
  {
    id: 3,
    createAt: "2022-03-03/12:01pm",
    type: "food",
    name: "물",
    quantity: 6,
    price: 1000,
    url: "",
  },
  {
    id: 4,
    createAt: "2022-03-04/20:01pm",
    type: "item",
    name: "후라이팬",
    quantity: 2,
    price: 23000,
    url: "",
  },
];

const Lists = () => {
  const orderList = useSelector(
    (state: { addOrderForm: IAddForm }) => state.addOrderForm.buyItemArr
  );

  return (
    <section className="payment-list-section-style">
      <div className="ttl-amount-style">
        <h1>{3}월 총 지출내역 </h1> <h1>10000원</h1>
      </div>
      {orderList &&
        orderList?.map((buying) => {
          return (
            <article key={buying.item}>
              <div className="payment-list-article-style">
                <p>
                  {buying.orderDate}[ {buying.orderTime} ]
                </p>
                <div className="line-style" />
                <div className="flex-style">
                  <h4>
                    {buying.item} ({buying.quantity}개)
                  </h4>
                  <h4>{buying.price}</h4>
                </div>
              </div>
            </article>
          );
        })}
    </section>
  );
};

export default Lists;
