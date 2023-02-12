import React, { FC } from "react";
interface ITag {
  text: "food" | "shopping" | "necessity" | "transportation" | "etc" | string;
}
const Tags: FC<ITag> = ({ text }) => {
  const tagColor =
    text === "food"
      ? "tag-yellow"
      : text === "shopping"
      ? "tag-blue"
      : text === "necessity"
      ? "tag-skyblue"
      : text === "transportation"
      ? "tag-light-yellow"
      : "tag-pink";
  return (
    <div
      className={` 
      font-sans w-fit h-fit rounded-[4px] font-bold text-[10px] px-1 py-[2px] 
      bg-${tagColor} 
      `}
    >
      {text}
    </div>
  );
};

export default Tags;
