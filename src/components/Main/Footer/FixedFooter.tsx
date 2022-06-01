import React from "react";

const FixedFooter = () => {
  return (
    <footer className="bg-secondary-dark text-white border-t fixed bottom-0 z-50 px-4 w-full h-16 rounded-t-xl shadow-md flex justify-between items-center">
      <p className="text-sm"> ~월 ~~ 지출액 </p>
      <h2 className="text-lg font-bold">20,000 원</h2>
    </footer>
  );
};

export default FixedFooter;
