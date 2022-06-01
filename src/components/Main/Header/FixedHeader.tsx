import React, { FC, SetStateAction } from "react";
import {
  ChartSquareBarIcon,
  HeartIcon,
  PlusIcon,
} from "@heroicons/react/outline";

interface IFixedHeader {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  isCheckDate?: boolean;
  setIsCheckDate?: React.Dispatch<SetStateAction<boolean>>;
}
const FixedHeader: FC<IFixedHeader> = ({
  setIsOpen,
  isCheckDate,
  setIsCheckDate,
}) => {
  return (
    <header className="w-full h-16 px-4 py-2 text-text-primary flex items-center justify-end gap-4 bg-white fixed top-0 z-20 shadow-md">
      <PlusIcon
        onClick={() => setIsOpen(true)}
        className="cursor-pointer w-6 h-6 transition hover:rotate-90"
      />
      <ChartSquareBarIcon className="cursor-pointer w-6 h-6 " />
      {isCheckDate ? (
        <>
          <svg
            onClick={() => setIsCheckDate(!isCheckDate)}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-error-primary cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </>
      ) : (
        <HeartIcon
          onClick={() => setIsCheckDate(!isCheckDate)}
          className={`cursor-pointer w-6 h-6 
        
        `}
        />
      )}
    </header>
  );
};

export default FixedHeader;
