import React, { FC } from "react";
import "./defaultLayout.css";

interface IDefaultLayout {
  children: React.ReactNode;
}

const DefaultLayout: FC<IDefaultLayout> = ({ children }) => {
  return (
    <main className="w-full">
      <section>{children}</section>
    </main>
  );
};

export default DefaultLayout;
