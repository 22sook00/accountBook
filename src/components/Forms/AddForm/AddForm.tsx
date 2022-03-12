import React, { FC, useCallback, SetStateAction } from "react";

import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
interface Props {}

interface IFormErrProps {
  품명: string | any[];
  카테고리: string | any[];
  개수: string | number;
  가격: string | number[];
}
const validate = (values: IFormErrProps) => {
  const errors: IFormErrProps = {
    품명: "",
    카테고리: "",
    개수: "",
    가격: "",
  };

  if (!values.품명) {
    errors.품명 = "Required";
  } else if (values.품명.length < 2) {
    errors.품명 = "Must be 2 characters over";
  }
  if (!values.카테고리) {
    errors.카테고리 = "Required";
  }

  if (!values.개수) {
    errors.개수 = "Required";
  }

  if (!values.가격) {
    errors.가격 = "Required";
  }

  return errors;
};

const AddForm: FC<Props> = ({}) => {
  const formik = useFormik({
    initialValues: {
      품명: "",
      카테고리: "",
      개수: "",
      가격: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <section>forrrm</section>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="품명">품목 이름</label>
        <input
          id="품명"
          name="품명"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.품명}
        />
        {formik.touched.품명 && formik.errors.품명 ? (
          <div>{formik.errors.품명}</div>
        ) : null}
        {/* radio 버튼은 커스텀으로 작성해보기 */}
        <label htmlFor="카테고리">카테고리</label>
        <input
          id="1"
          name="카테고리"
          type="radio"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value="food"
        />
        음식
        <input
          id="2"
          name="카테고리"
          type="radio"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value="shopping"
        />
        쇼핑
        <input
          id="3"
          name="카테고리"
          type="radio"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value="necessity"
        />
        생필품
        <input
          id="3"
          name="카테고리"
          type="radio"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value="etc"
        />
        그 외<label htmlFor="개수">Last Name</label>
        <input
          id="개수"
          name="개수"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.개수}
        />
        {formik.touched.개수 && formik.errors.개수 ? (
          <div>{formik.errors.개수}</div>
        ) : null}
        <label htmlFor="가격">가격</label>
        <input
          id="가격"
          name="가격"
          type="가격"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.가격}
        />
        {formik.touched.가격 && formik.errors.가격 ? (
          <div>{formik.errors.가격}</div>
        ) : null}
        <button type="submit">추가하기</button>
      </form>
    </>
  );
};

export default AddForm;
