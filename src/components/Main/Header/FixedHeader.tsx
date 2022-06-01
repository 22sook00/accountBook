import React, { FC, SetStateAction } from "react";
import {
  ChartSquareBarIcon,
  HeartIcon,
  PlusIcon,
} from "@heroicons/react/outline";

interface IFixedHeader {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}
const FixedHeader: FC<IFixedHeader> = ({ setIsOpen }) => {
  return (
    <header className="w-full h-16 px-4 py-2 text-text-primary flex items-center justify-end gap-4 bg-white fixed top-0 z-50 shadow-md">
      {/* <Buttons onclick={() => setIsOpen(true)} text={"+"} /> */}
      <PlusIcon className="cursor-pointer w-6 h-6 transition hover:rotate-90" />
      <ChartSquareBarIcon className="cursor-pointer w-6 h-6 " />
      <HeartIcon className="cursor-pointer w-6 h-6 " />
    </header>
  );
};

export default FixedHeader;
