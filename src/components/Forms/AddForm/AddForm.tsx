import React, {
  FC,
  useCallback,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { IAddForm, IAddItems } from "../../../interface/formInterface/IAddForm";
import ReactDatePicker from "react-datepicker";
import { addDays } from "date-fns";
import { ko } from "date-fns/esm/locale";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import Buttons from "../../Common/Buttons/Buttons";
import "./addForm.css";
import { setSubmitOrderForm } from "../../../slices/addFormSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";

interface Props {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}
export interface ICategoryList {
  id: string;
  value: string;
  title: string;
}

export const CategoryList = [
  { id: "field-Food", value: "food", title: "식비" },
  { id: "field-Necessity", value: "Necessity", title: "생필품" },
  { id: "field-Shopping", value: "Shopping", title: "쇼핑" },
  { id: "field-Transportaion", value: "Transportaion", title: "교통비" },
  { id: "field-ETC", value: "ETC", title: "그 외" },
];

export const defaultValues = {
  idx: 0,
  item: "",
  category: "",
  isDating: false,
  quantity: 0,
  price: 0,
  orderDate: new Date(),
  orderTime: new Date(),
  url: "",
};
const AddForm: FC<Props> = ({ setIsOpen }) => {
  const dispatch = useAppDispatch();
  const selectItemIdx = useAppSelector(
    (state: any) => state.addOrderForm.buyItemArr
  );
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm<any>({ defaultValues });
  const { category } = watch();

  const onSubmit: SubmitHandler<IAddItems> = useCallback(
    (data) => {
      const formData = {
        ...data,
        idx: selectItemIdx.length,
        orderDate: data.orderDate
          ? moment(data.orderDate).format("YYYY-MM-DD")
          : moment().format("YYYY-MM-DD"),
        orderTime: data.orderTime
          ? moment(data.orderTime).format("HH:MM A")
          : moment().format("HH:MM A"),
      };

      dispatch(setSubmitOrderForm(formData));
      setIsOpen(false);
    },
    [dispatch, selectItemIdx.length, setIsOpen]
  );

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="formWrapper">
        <article className="formArticle">
          <label>품목</label>
          <div className="inputWrapper">
            <input {...register("item", { required: true, maxLength: 20 })} />
            <p className="errorText">
              {errors.item?.type === "required" &&
                "구매한 물건 이름을 작성하세요."}
            </p>
          </div>
        </article>
        <article className="formArticle">
          <label>카테고리</label>

          {CategoryList.map((list: ICategoryList, i: number) => {
            return (
              <h5 key={list.id}>
                <input
                  {...register("category")}
                  type="radio"
                  name="category"
                  value={list.value}
                  id={list.id}
                  checked={category ? category === list.value : i === 0}
                />
                {list.title}
              </h5>
            );
          })}
        </article>
        <article className="formArticle">
          <label>데이트 여부</label>
          <input {...register("isDating")} type="checkbox" />
          <p className="errorText">
            {errors.isDating?.type === "required" &&
              "구매한 물건 이름을 작성하세요."}
          </p>
        </article>

        <article className="formArticle">
          <label>수량</label>
          <div className="inputWrapper">
            <input
              type="number"
              {...register("quantity", { required: true, min: 1, max: 99 })}
            />
            개
            <p className="errorText">
              {errors.quantity && "수량은 최소 1개이상 입니다."}
            </p>
          </div>
        </article>

        <article className="formArticle">
          <label>가격</label>
          <div className="inputWrapper">
            <input type="number" {...register("price", { required: true })} />원
            <p className="errorText">
              {errors.price?.type === "required" && "가격을 작성하세요."}
            </p>
          </div>
        </article>

        <article className="formArticle">
          <label>구매날짜</label>
          <Controller
            control={control}
            name={"orderDate"}
            render={({ field }) => (
              <div className="inputWrapper">
                <ReactDatePicker
                  className="input"
                  locale={ko}
                  placeholderText="Select date"
                  onChange={(e) => field.onChange(e)}
                  selected={field.value}
                  maxDate={addDays(new Date(), 0)}
                />{" "}
              </div>
            )}
          />
        </article>

        {/* time */}
        <article className="formArticle">
          <label>구매시간 (Optional)</label>
          <Controller
            control={control}
            name="orderTime"
            render={({ field }) => {
              return (
                <div className="inputWrapper">
                  <ReactDatePicker
                    selected={field.value}
                    onChange={(e) => field.onChange(e)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={60}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                  />
                </div>
              );
            }}
          />
        </article>

        {/* url */}
        <article className="formArticle">
          <label>URL (Optional)</label>
          <div className="inputWrapper">
            <input {...register("url", { required: false })} />
          </div>
        </article>

        <div className="grid grid-cols-3 gap-3">
          <div className=" col-span-1">
            <Buttons
              width="w-full"
              size="small"
              text="Reset"
              lineColor="primary-default"
            />
          </div>
          <div className="col-span-2">
            <Buttons
              width="w-full"
              size="small"
              text="Submit"
              bgcolor="primary-default"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default AddForm;
