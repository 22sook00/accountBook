import React, { FC } from "react";
import "./buttons.css";

interface Props {
  disabled?: boolean;
  onclick: any;
  bgcolor?: "#DFE9F5" | "#90B1DB" | "#3E77B6" | "#003A88" | "#F8979B";
  text: string;
}

const Buttons: FC<Props> = ({ disabled = false, onclick, bgcolor, text }) => {
  console.log("dd", bgcolor);

  return (
    <>
      <button
        style={{ backgroundColor: bgcolor }}
        className={["button-style", `button-style-${bgcolor?.slice(1)}`].join(
          " "
        )}
        onClick={onclick}
        disabled={disabled ? true : false}
      >
        {text}
      </button>
    </>
  );
};

export default Buttons;
