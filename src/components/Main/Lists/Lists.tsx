import moment from "moment";
import React, { FC, useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tags from "src/components/Common/Tags/Tags";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { IAddForm, IAddItems } from "../../../interface/formInterface/IAddForm";
import {
  setDeleteItem,
  setFormListByMonth,
} from "../../../slices/addFormSlice";
import { formatPriceNumber } from "../../../utils/numberFormatter";
import Buttons from "../../Common/Buttons/Buttons";
import { pickerOnlyMonth } from "../../Common/DatePickers/DatePickers";
import ModalLayout from "../../Common/Modals/ModalLayout";
import EditForm from "../../Forms/EditForm/EditForm";
import ViewDetail from "../../VeiwDetail/ViewDetail";
import "./lists.css";

interface IProps {
  selectedMonth: string;
  isCheckDate?: boolean;
  pickerOnlyMonth?: pickerOnlyMonth;
}

const Lists: FC<IProps> = ({ pickerOnlyMonth, isCheckDate, selectedMonth }) => {
  const dispatch = useDispatch();

  const orderList = useAppSelector((state) => state.addOrderForm.buyItemArr);
  const orderListByMonth = useSelector(
    (state: { addOrderForm: IAddForm }) => state.addOrderForm.buyItemArrByMonth
  );
  const orderListByDating = orderListByMonth.filter(
    (status) => status.isDating
  );

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

  const handleOpenDetailModal = (idx: number) => {
    setIsOpen(!isOpen);
    setSelectedItem(
      isCheckDate ? orderListByDating[idx] : orderListByMonth[idx]
    );
  };

  const handleDeleteClick = (idx: number, buying: any) => {
    dispatch(
      setDeleteItem({ idx, uuid: `${buying.orderDate}-${buying.item}` })
    );
  };

  return (
    <section className="grid grid-cols-1 gap-2 ">
      {isCheckDate ? (
        <>
          {orderListByDating &&
            orderListByDating?.map((buying: IAddItems, idx: number) => {
              return (
                <article
                  key={idx}
                  className=" px-3 py-2 border border-line-default shadow-md rounded-md"
                >
                  <div className="h-fit flex justify-between items-center">
                    <div className="flex gap-2 h-fit  justify-between items-center">
                      {buying.isDating && (
                        <span className="text-[10px]">❤️</span>
                      )}
                      <Tags text={buying.category.toLocaleLowerCase()} />
                      <span className="text-[10px]">
                        {buying?.orderDate}_{buying?.orderTime}
                      </span>
                    </div>
                    <Buttons
                      onclick={() => handleDeleteClick(idx, buying)}
                      text={"삭제"}
                      size="small"
                      lineColor={"primary-default"}
                      custom={{
                        fontSize: "10px",
                      }}
                    />
                  </div>
                  <div className="border-b-2 border-dashed border-line-default w-full my-2" />
                  <div
                    className="flex justify-between text-sm"
                    onClick={() => handleOpenDetailModal(idx)}
                  >
                    <h4>{buying.item}</h4>
                    <h4>{formatPriceNumber(+buying.price)} 원</h4>
                  </div>
                </article>
              );
            })}
        </>
      ) : (
        <>
          {orderListByMonth &&
            orderListByMonth?.map((buying: IAddItems, idx: number) => {
              return (
                <article
                  key={idx}
                  className=" px-3 py-2 border border-line-default shadow-md rounded-md"
                >
                  <div className="h-fit flex justify-between items-center">
                    <div className="flex gap-2 h-fit  justify-between items-center">
                      {buying.isDating && (
                        <span className="text-[10px]">❤️</span>
                      )}
                      <Tags text={buying.category.toLocaleLowerCase()} />
                      <span className="text-[10px]">
                        {buying?.orderDate}_{buying?.orderTime}
                      </span>
                    </div>
                    <Buttons
                      onclick={() => handleDeleteClick(idx, buying)}
                      text={"삭제"}
                      size="small"
                      lineColor={"primary-default"}
                      custom={{
                        fontSize: "10px",
                      }}
                    />
                  </div>
                  <div className="border-b-2 border-dashed border-line-default w-full my-2" />
                  <div
                    className="flex justify-between text-sm"
                    onClick={() => handleOpenDetailModal(idx)}
                  >
                    <h4>{buying.item}</h4>
                    <h4>{formatPriceNumber(+buying.price)} 원</h4>
                  </div>
                </article>
              );
            })}
        </>
      )}

      {isOpen && (
        <ModalLayout
          title="구매 상세정보"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        >
          <ViewDetail selectedItem={selectedItem} />
        </ModalLayout>
      )}
    </section>
  );
};

export default Lists;
