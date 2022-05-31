import { Dialog, Transition } from "@headlessui/react";
import React, { FC, Fragment, SetStateAction, useCallback } from "react";
import "./modalLayout.css";
import { XIcon } from "@heroicons/react/outline";
interface Props {
  isOpen?: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
  title: string;
}
const ModalLayout: FC<Props> = ({ isOpen, setIsOpen, children, title }) => {
  const handleCloseBtn = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);
  return (
    <section className="scrollHide">
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleCloseBtn}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-white lg:bg-black lg:opacity-60 px-4" />
          </Transition.Child>

          <div className="scrollHide fixed inset-0 overflow-y-auto">
            <div className="w-full z-50 fixed top-0 p-4 border-b shadow bg-white">
              <XIcon
                onClick={handleCloseBtn}
                className="w-6 h-6 text-text-light font-bold cursor-pointer transition hover:rotate-90"
              />
            </div>
            <div className="p-6  flex min-h-full items-center justify-center  text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="pt-[60px] w-full max-w-md transform overflow-x-hidden scroll-smooth overflow-y-scroll rounded-2xl bg-white text-left align-middle lg:shadow-xl transition-all">
                  <div className="scrollHide">
                    <h3 className="text-sm">{title}</h3>
                    <>{children}</>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
};

export default ModalLayout;
