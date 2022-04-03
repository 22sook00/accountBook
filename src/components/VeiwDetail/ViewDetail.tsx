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
        {/* FIXME 추후 차트 삽입 예정 : 차트로 어느 카테고리에 돈 많이썼는지 알수있음. */}
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
          <span className="detailSubTitle"> ☝🏼 구매 수량 : </span>
          <span className="detailContent">{selectedItem.quantity}개</span>
        </article>
        {selectedItem?.url && (
          <article className="detailTextBox">
            <span className="detailSubTitle"> 🛒 구매처 : </span>
            <a
              href={selectedItem?.url}
              target="_blank"
              rel="noreferrer"
              className="detailContentUrl"
            >
              {selectedItem.url}
            </a>
          </article>
        )}
        <div className="priceWrapper">
          <h2>합계 {selectedItem.price * selectedItem.quantity}</h2>
        </div>{" "}
      </section>
    </div>
  );
};

export default ViewDetail;
