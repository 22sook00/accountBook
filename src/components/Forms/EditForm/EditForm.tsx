import { addDays } from "date-fns";
import { ko } from "date-fns/locale";
import React, { FC } from "react";
import ReactDatePicker from "react-datepicker";
import { Controller, useForm } from "react-hook-form";
import { IAddItems } from "../../../interface/formInterface/IAddForm";
import Buttons from "../../Common/Buttons/Buttons";
import { CategoryList, defaultValues, ICategoryList } from "../AddForm/AddForm";
interface Props {}

const EditForm: FC<Props> = ({}) => {
  // console.log("category", category, "sele", selectedItem.category);

  return (
    <section className="formWrapper">
      <article style={{ textAlign: "right" }}>
        <Buttons text="수정하기" bgcolor="primary-default" />
      </article>
    </section>
  );
};

export default EditForm;
