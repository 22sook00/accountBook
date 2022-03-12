import React, { FC, SetStateAction, useCallback } from "react";
import Buttons from "../Buttons/Buttons";
import "./modalLayout.css";
interface Props {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
  title: string;
}
const ModalLayout: FC<Props> = ({ setIsOpen, children, title }) => {
  const handleCloseBtn = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  return (
    <>
      <section className="modalContainer">
        <div className="modalWrapper">
          <div className="modalTextBox">
            <h3>{title}</h3>
            <Buttons
              custom={{ padding: "0 10px 4px" }}
              bgcolor="#F8979B"
              onclick={handleCloseBtn}
              text={"x"}
            />
          </div>

          <div>{children}</div>
        </div>
      </section>
    </>
  );
};

export default ModalLayout;
