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
import { DevTool } from "@hookform/devtools";
import { CheckCircleIcon } from "@heroicons/react/outline";

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
  price: "",
  category: "",
  isDating: false,
  orderDate: new Date(),
  orderTime: new Date(),
  memo: "",
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
    setValue,
  } = useForm<any>({ defaultValues });
  const { category, isDating } = watch();

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

  const handleSelectCategory = useCallback(
    (value: string, onChange: (value: string) => void) => {
      onChange(value);
    },
    []
  );
  useEffect(() => {
    setValue("isDating", false);
  }, []);
  const handleSelectDateStatus = useCallback(
    (value: boolean, onChange: (value: boolean) => void) => {
      onChange(value);
    },
    []
  );

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-8 grid grid-cols-1 gap-3">
          <section className="h-fit flex items-center ">
            <div className="w-[60px] h-fit flex items-center gap-1">
              <label>품명</label>
              <span className="w-2 h-2 rounded-[50%] bg-gradient-to-r  from-red-800 to-error-primary" />
            </div>
            <input
              autoComplete="off"
              className={`w-full border-b  ml-3 text-text-light ${
                errors.item
                  ? "border-b-2 border-primary-default"
                  : "border-line-default"
              }`}
              {...register("item", { required: true, maxLength: 20 })}
            />
          </section>

          <section className="h-fit flex items-center ">
            <div className="w-[60px] h-fit flex items-center gap-1">
              <label>비용</label>
              <span className="w-2 h-2 rounded-[50%] bg-gradient-to-r  from-red-800 to-error-primary" />
            </div>
            <input
              step={100}
              type="number"
              className={`w-full border-b  ml-3 ${
                errors.price
                  ? "border-b-2 border-primary-default"
                  : "border-line-default"
              }`}
              {...register("price", { required: true })}
            />
            <p className="ml-[-20px] lg:ml-[-50px] text-sm text-text-light">
              원
            </p>
          </section>

          <section>
            <div className=" h-fit flex items-center gap-1">
              <label>카테고리</label>
              <span className="w-2 h-2 rounded-[50%] bg-gradient-to-r  from-red-800 to-error-primary" />
            </div>

            <Controller
              control={control}
              name={"category"}
              rules={{ required: "카테고리를 선택 해 주세요." }}
              render={({ field: { onChange } }) => {
                return (
                  <ul className="flex gap-1 mt-2">
                    {CategoryList.map((list: ICategoryList, i: number) => {
                      return (
                        <li
                          key={list.id}
                          onClick={() => {
                            handleSelectCategory(list.value, onChange);
                          }}
                        >
                          <div
                            className={`${
                              category === list.value
                                ? "border border-solid border-primary-default text-secondary-dark font-[600] py-[5px] px-[9px] "
                                : "border-2 border-dashed py-1 px-2 "
                            }cursor-pointer rounded-md  text-xs`}
                          >
                            {list.value.toLocaleLowerCase()}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                );
              }}
            />
          </section>

          <section>
            <div className="h-fit flex items-center gap-1">
              <label>데이트</label>
              <span className="w-2 h-2 rounded-[50%] bg-gradient-to-r  from-red-800 to-error-primary" />
            </div>

            <Controller
              control={control}
              name={"isDating"}
              render={({ field: { onChange } }) => {
                return (
                  <ul className="grid grid-cols-2 mt-2">
                    <li
                      className="cursor-pointer flex h-fit items-center gap-2"
                      onClick={() => {
                        handleSelectDateStatus(true, onChange);
                      }}
                    >
                      <CheckCircleIcon
                        className={`${
                          !isDating
                            ? "text-text-light"
                            : " text-primary-default"
                        } w-5 h-5`}
                      />
                      <p
                        className={`${
                          !isDating
                            ? "text-text-primary"
                            : " text-primary-default font-[600] "
                        } text-sm `}
                      >
                        YES
                      </p>
                    </li>
                    <li
                      className="cursor-pointer flex h-fit items-center gap-2"
                      onClick={() => {
                        handleSelectDateStatus(false, onChange);
                      }}
                    >
                      <CheckCircleIcon
                        className={`${
                          isDating
                            ? "text-text-light"
                            : " text-primary-default "
                        } w-5 h-5`}
                      />
                      <p
                        className={`${
                          isDating
                            ? "text-text-primary"
                            : " text-primary-default font-[600] "
                        } text-sm`}
                      >
                        NO
                      </p>
                    </li>
                  </ul>
                );
              }}
            />
          </section>

          <section className="h-fit flex items-center ">
            <div className="w-[60px] h-fit flex items-center gap-1">
              <label>날짜</label>
              <span className="w-2 h-2 rounded-[50%] bg-gradient-to-r  from-red-800 to-error-primary" />
            </div>
            <Controller
              control={control}
              name={"orderDate"}
              rules={{ required: "구매 날짜를 선택 해 주세요." }}
              render={({ field }) => (
                <div
                  className={`w-full border-b  ml-3 text-text-light ${
                    errors.orderDate
                      ? "border-b-2 border-primary-default"
                      : "border-line-default"
                  }`}
                >
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
          </section>

          {/* time */}
          <section className="h-fit flex items-center ">
            <div className="w-[60px]">
              <label>시간</label>
            </div>
            <Controller
              control={control}
              name="orderTime"
              render={({ field }) => {
                return (
                  <div className="border-line-default w-full border-b  ml-3 text-text-light">
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
          </section>

          {/* memo */}
          <section>
            <label>기타</label>
            <div className="w-full mt-2 h-[80px]">
              <textarea
                className="resize-none w-full h-full rounded-lg border-2 border-dashed border-line-default"
                {...register("memo", { required: false })}
              />
            </div>
          </section>

          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className=" col-span-1">
              <Buttons
                type={"reset"}
                width="w-full"
                size="small"
                text="Reset"
                lineColor="primary-default"
                onclick={() => {
                  reset({ ...defaultValues });
                }}
              />
            </div>
            <div className="col-span-2">
              <Buttons
                type={"submit"}
                width="w-full"
                size="small"
                text="Submit"
                bgcolor="primary-default"
              />
            </div>
          </div>
        </div>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default AddForm;
