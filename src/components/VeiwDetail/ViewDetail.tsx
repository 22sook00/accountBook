import React, { FC } from "react";
import { IAddItems } from "../../interface/formInterface/IAddForm";
import "./viewDetail.css";

interface IProps {
  selectedItem: IAddItems;
}

const ViewDetail: FC<IProps> = ({ selectedItem }) => {
  return (
    <div className="gridBox">
      <section className="categoryChartWrapper">
        <p>{selectedItem.category.toUpperCase()}</p>
      </section>
      <section className="detailWrapper">
        <h1>
          {selectedItem.item}
          {selectedItem.isDating ? "💞" : ""}
        </h1>
        <article className="detailTextBox">
          <span className="detailSubTitle">🗓 구매 날짜 : </span>{" "}
          <span className="detailContent"> {selectedItem.orderDate}</span>
        </article>
        <article className="detailTextBox">
          <span className="detailSubTitle"> ⏰ 구매 시간 : </span>{" "}
          <span className="detailContent">{selectedItem.orderTime}</span>
        </article>
        <article className="detailTextBox">
          <span className="detailSubTitle"> 💸 구매 가격 : </span>
          <span className="detailContent">{selectedItem.price}원</span>
        </article>
        <article className="detailTextBox">
          <span className="detailSubTitle"> 💸 설명 : </span>
          <span className="detailContent">{selectedItem.memo}</span>
        </article>

        <div className="priceWrapper">
          <h2>합계 {selectedItem.price} 원</h2>
        </div>
      </section>
    </div>
  );
};

export default ViewDetail;
