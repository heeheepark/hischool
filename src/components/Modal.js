import React from "react";
import { ModalContain, ModalBody, ModalCloseBtn } from "../styles/ModalStyle";

const Modal = ({ isOpen, onRequestClose, children }) => {
  const handleModalClose = () => {
    onRequestClose();
  };

  return (
    <>
      {isOpen && (
        <ModalContain onClick={handleModalClose}>
          <ModalBody onClick={e => e.stopPropagation()}>
            <ModalCloseBtn onClick={handleModalClose}>✖</ModalCloseBtn>
            {children}
          </ModalBody>
        </ModalContain>
      )}
    </>
  );
};

export default Modal;

