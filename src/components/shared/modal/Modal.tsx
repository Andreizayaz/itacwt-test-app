import { FC, ReactElement, ReactNode } from "react";
import { CustomPortal } from "../customPortal";
import { Button } from "../button";

import CloseIcon from "./icons/CloseIcon.svg";

import "./Modal.scss";

type ModalPropsTypes = {
  children: ReactNode;
  heading: string;
  closeModal: () => void;
};

export const Modal: FC<ModalPropsTypes> = ({
  children,
  heading,
  closeModal,
}): ReactElement => {
  return (
    <CustomPortal>
      <div className="overlay" onClick={closeModal}>
        <div className="modal" onClick={(e)=>e.stopPropagation()}>
          <div className="modal__top">
            <h4>{heading}</h4>
            <Button clickHandler={closeModal}>
              <img src={CloseIcon} alt="icon" />
            </Button>
          </div>
          <div className="modal__bottom">{children}</div>
        </div>
      </div>
    </CustomPortal>
  );
};
