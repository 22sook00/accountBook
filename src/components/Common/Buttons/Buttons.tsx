import React, { FC } from "react";
import "./buttons.css";

interface Props {
  disabled?: boolean;
  onclick: any;
  bgcolor?:
    | "#DFE9F5"
    | "rgb(177, 189, 220)"
    | "#3E77B6"
    | "#003A88"
    | "#F8979B";
  text: string;
  bottom?: string;
}

const Buttons: FC<Props> = ({
  disabled = false,
  onclick,
  bgcolor,
  text,
  bottom,
}) => {
  const bottonBottom = bottom ? "button-style-bottom" : "";

  return (
    <>
      <button
        style={{ backgroundColor: bgcolor }}
        className={[
          "button-style",
          `button-style-${bgcolor?.slice(1)}`,
          bottonBottom,
        ].join(" ")}
        onClick={onclick}
        disabled={disabled ? true : false}
      >
        {text}
      </button>
    </>
  );
};

export default Buttons;
