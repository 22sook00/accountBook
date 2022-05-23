import React, { FC } from "react";
import "./buttons.css";

interface Props {
  disabled?: boolean;
  onclick?: () => void;
  bgcolor?:
    | "#DFE9F5"
    | "rgb(177, 189, 220)"
    | "#3E77B6"
    | "#003A88"
    | "#F8979B";
  text: string;
  bottom?: string;
  custom?: any;
}

const Buttons: FC<Props> = ({
  disabled = false,
  onclick,
  bgcolor,
  text,
  bottom,
  custom,
}) => {
  const bottonBottom = bottom ? "button-style-bottom" : "";

  return (
    <>
      <button
        style={{ backgroundColor: bgcolor, ...custom }}
        className={
          // custom
          //   ? "custom-style"
          //   :
          [
            "button-style",
            `button-style-${bgcolor?.slice(1)}`,
            bottonBottom,
          ].join(" ")
        }
        onClick={onclick}
        disabled={disabled ? true : false}
      >
        {text}
      </button>
    </>
  );
};

export default Buttons;
