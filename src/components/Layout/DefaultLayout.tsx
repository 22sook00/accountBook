import React, { FC } from "react";
import "./defaultLayout.css";

interface IDefaultLayout {
  children: React.ReactNode;
}

const DefaultLayout: FC<IDefaultLayout> = ({ children }) => {
  return (
    <>
      <main className="layout-style">
        <section className="layout-section-style">{children}</section>
      </main>
    </>
  );
};

export default DefaultLayout;
