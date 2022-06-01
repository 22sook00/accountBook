import React, { FC } from "react";
import "./buttons.css";

interface Props {
  disabled?: boolean;
  onclick?: () => void;
  size?: "small" | "medium" | "large";
  bgcolor?: "primary-default" | "secondary-dark" | "error-primary";
  lineColor?: "primary-default" | "secondary-dark" | "line-default";
  text: string;
  custom?: any;
  width?: string;
  type?: "submit" | "button" | "reset";
}

const Buttons: FC<Props> = ({
  disabled = false,
  onclick,
  size,
  bgcolor,
  lineColor,
  text,
  custom,
  width,
}) => {
  const button_size =
    size === "small"
      ? ["text-[10px]", "py-[2px] px-2", "rounded-sm"]
      : size === "medium"
      ? ["text-base", "h-[50px] px-6", "rounded-[5px]"]
      : size === "large"
      ? ["text-lg", "h-[59px] px-9", "rounded-[5px]"]
      : ["text-base", " w-full py-[16px] text-center", "rounded-[5px]"];
  return (
    <>
      <button
        className={`
        ${button_size[0]} ${button_size[2]} 
				${button_size[1]}
        ${width && width}
        ${
          bgcolor
            ? ` bg-primary-default hover:bg-secondary-dark text-white`
            : "bg-white"
        }
        ${lineColor && `border border-${lineColor} text-secondary-dark`}
        transition
        rounded-lg
         disabled:border-line-default disabled:cursor-not-allowed disabled:border-dashed
        `}
        onClick={onclick}
        disabled={disabled ? true : false}
      >
        {text}
      </button>
    </>
  );
};

export default Buttons;
