import React, { FC } from "react";
import "./buttons.css";

interface Props {
  disabled?: boolean;
  onclick?: () => void;
  size?: "small" | "medium" | "large";
  bgcolor?: "primary-default" | "secondary-dark" | "error-primary";
  lineColor?: "primary-default" | "secondary-dark" | "line-default";
  text: string;
  bottom?: string;
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
  bottom,
  custom,
  width,
}) => {
  const button_size =
    size === "small"
      ? ["text-base", "h-[40px] px-6", "rounded-sm"]
      : size === "medium"
      ? ["text-base", "h-[51px] px-8", "rounded-[5px]"]
      : size === "large"
      ? ["text-base", "h-[59px] px-9", "rounded-[5px]"]
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
