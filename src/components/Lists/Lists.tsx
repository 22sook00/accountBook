import moment from "moment";
import React, { FC, useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "../../hooks/reduxHooks";
import { IAddForm, IAddItems } from "../../interface/formInterface/IAddForm";
import { setDeleteItem, setFormListByMonth } from "../../slices/addFormSlice";
import { formatPriceNumber } from "../../utils/numberFormatter";
import Buttons from "../Common/Buttons/Buttons";
import { pickerOnlyMonth } from "../Common/DatePickers/DatePickers";
import ModalLayout from "../Common/Modals/ModalLayout";
import EditForm from "../Forms/EditForm/EditForm";
import ViewDetail from "../VeiwDetail/ViewDetail";
import "./lists.css";

interface IProps {
  selectedMonth: string;
  pickerOnlyMonth?: pickerOnlyMonth;
}

const Lists: FC<IProps> = ({ pickerOnlyMonth, selectedMonth }) => {
  const dispatch = useDispatch();

  const orderList = useAppSelector((state) => state.addOrderForm.buyItemArr);
  const orderListByMonth = useSelector(
    (state: { addOrderForm: IAddForm }) => state.addOrderForm.buyItemArrByMonth
  );
  const onlyShowMonth = selectedMonth?.split("-")[1];

  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);
  const [ttlPriceByMonth, setTtlPriceByMonth] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<any>([]);

  const [showList, setShowList] = useState<any>([]);

  useEffect(() => {
    const data = orderList.filter(
      (data) =>
        moment(data.orderDate).format("YYYYMM") ===
        moment(selectedItem).format("YYYYMM")
    );
    setShowList(data);
    dispatch(setFormListByMonth(selectedMonth));
  }, [dispatch, orderList, selectedItem, selectedMonth]);

  useEffect(() => {
    if (orderListByMonth.length === 0) return;
    const addAll = orderListByMonth?.reduce(
      (acc: any, cur: any) => acc + +cur.price * +cur.quantity,
      0
    );
    setTtlPriceByMonth(addAll);
  }, [orderListByMonth]);

  const handleOpenDetailModal = (idx: number) => {
    setIsOpen(!isOpen);
    setSelectedItem(orderListByMonth[idx]);
  };

  const handleDeleteClick = (idx: number, buying: any) => {
    dispatch(
      setDeleteItem({ idx, uuid: `${buying.orderDate}-${buying.item}` })
    );
  };

  const handleDropdown = useCallback(() => {
    setIsOpenDropdown(!isOpenDropdown);
  }, [isOpenDropdown]);

  return (
    <section className="payment-list-section-style">
      <div className="ttl-amount-style">
        <h1 onClick={handleDropdown}>
          💰{+onlyShowMonth}월 총 지출내역{" "}
          <button
            onClick={() =>
              console.log("dropdown later due to checking date fee")
            }
            className="cursor-pointer"
          >
            🔽
          </button>
        </h1>
        <h1 className="">{formatPriceNumber(ttlPriceByMonth)}원</h1>
      </div>
      {orderListByMonth &&
        orderListByMonth?.map((buying: IAddItems, idx: number) => {
          return (
            <article key={idx}>
              <div className="payment-list-article-style">
                <span>{buying?.orderDate}</span>
                <span className="order-time">_{buying?.orderTime}</span>
                <Buttons
                  onclick={() => handleDeleteClick(idx, buying)}
                  text={"삭제"}
                  bgcolor={"#F8979B"}
                  custom={{
                    fontSize: "12px",
                    padding: "4px 8px",
                  }}
                />
                <div className="line-style" />
                <div
                  className="flex-style"
                  onClick={() => handleOpenDetailModal(idx)}
                >
                  <h4>{buying.item}</h4>
                  <h4>
                    {formatPriceNumber(+buying.price * buying.quantity)}원
                  </h4>
                </div>
              </div>
            </article>
          );
        })}

      {isOpen && (
        <ModalLayout title="구매 상세정보" setIsOpen={setIsOpen}>
          <ViewDetail selectedItem={selectedItem} />
        </ModalLayout>
      )}
    </section>
  );
};

export default Lists;
