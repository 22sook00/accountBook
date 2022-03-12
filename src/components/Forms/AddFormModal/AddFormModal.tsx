import React, { FC, useCallback, SetStateAction } from "react";

interface Props {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

const AddFormModal: FC<Props> = ({ setIsOpen }) => {
  const handleCloseBtn = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  return (
    <>
      <section>
        <div onClick={handleCloseBtn} className="closeBtn">
          X
        </div>
      </section>
    </>
  );
};

export default AddFormModal;
