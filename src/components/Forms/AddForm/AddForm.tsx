import React, {
  FC,
  useCallback,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { IAddForm } from "../../../interface/formInterface/IAddForm";
import ReactDatePicker from "react-datepicker";
import { addDays } from "date-fns";
import { ko } from "date-fns/esm/locale";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import Buttons from "../../Common/Buttons/Buttons";
import "./addForm.css";
import { useDispatch } from "react-redux";
import { setSubmitOrderForm } from "../../../slices/addFormSlice";

interface Props {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

const defaultValues = {
  item: "",
  category: "",
  quantity: 0,
  price: "",
  orderDate: new Date(),
  orderTime: new Date(),
};
const AddForm: FC<Props> = ({ setIsOpen }) => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm<any>({ defaultValues });

  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formData, setFormData] = useState<any>({});

  const handleChangeDate = (e: Date | null) => {
    setSelectedDate(moment(e).format("YYYY-MM-DD"));
  };
  const handleChangeTime = (e: Date | null) => {
    setSelectedTime(moment(e).format("HH:MM A"));
  };

  const onSubmit: SubmitHandler<IAddForm> = useCallback(
    (data) => {
      setFormData({
        ...data,
        orderDate: selectedDate,
        orderTime: selectedTime,
      });

      setIsOpen(false);
    },
    [selectedDate, selectedTime, setIsOpen]
  );
  useEffect(() => {
    console.log("formData?", formData);
    if (formData) {
      dispatch(setSubmitOrderForm({ buyItemArr: formData }));
    }
  }, [dispatch, formData]);

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
          <h5>
            <input
              {...register("category")}
              type="radio"
              name="category"
              value="Food"
              id="field-Food"
              checked
            />
            식비
          </h5>
          <h5>
            <input
              {...register("category")}
              type="radio"
              name="category"
              value="Necessity"
              id="field-Necessity"
            />
            생필품
          </h5>
          <h5>
            <input
              {...register("category")}
              type="radio"
              name="category"
              value="Shopping"
              id="field-Shopping"
            />
            옷/악세서리 쇼핑
          </h5>
          <h5>
            <input
              {...register("category")}
              type="radio"
              name="category"
              value="Transportaion"
              id="field-Transportaion"
            />
            교통비
          </h5>
          <h5>
            <input
              {...register("category")}
              type="radio"
              name="category"
              value="ETC"
              id="field-ETC"
            />
            그 외
          </h5>
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
            <input {...register("price", { required: true, maxLength: 20 })} />
            원
            <p className="errorText">
              {" "}
              {errors.price?.type === "required" && "가격을 작성하세요."}
            </p>
          </div>
        </article>

        <article className="formArticle">
          <label>구매날짜</label>
          <Controller
            control={control}
            name="orderDate"
            render={({ field }) => (
              <div className="inputWrapper">
                <ReactDatePicker
                  className="input"
                  locale={ko}
                  placeholderText="Select date"
                  onChange={(e) => field.onChange(e, handleChangeDate(e))}
                  // onChange={(e) => handleChangeDate(e, field)}
                  // selected={selectDateValue}
                  selected={field.value}
                  maxDate={addDays(new Date(), 0)}
                />{" "}
              </div>
            )}
          />
        </article>

        {/* time */}
        <article className="formArticle">
          <label>구매시간 (Option)</label>
          <Controller
            control={control}
            name="orderTime"
            render={({ field }) => (
              <div className="inputWrapper">
                <ReactDatePicker
                  selected={field.value}
                  onChange={(e) => field.onChange(e, handleChangeTime(e))}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={60}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                />
              </div>
            )}
          />
        </article>

        <article style={{ textAlign: "right" }}>
          <Buttons text="추가" bgcolor="#3E77B6" />
        </article>
      </form>
    </>
  );
};

export default AddForm;
