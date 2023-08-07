import React, { useState } from "react";
import {
  ModalContain,
  ModalBody,
  ModalCloseBtn,
  StudentRecordModalDiv,
} from "../styles/ModalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

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

export const StudentRecordModal = ({ modalOpen, setModalOpen }) => {
  const handleOk = () => {
    setModalOpen(false);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {modalOpen && (
        <StudentRecordModalDiv className="modal">
          <div className="dim"></div>
          <div className="content-wrap">
            <div className="header">
              <FontAwesomeIcon icon={faExclamation} className="warning-icon" />
              <span></span>
            </div>
            <div className="content">
              <span>해당 항목을 삭제하시겠습니까?</span>
              <span>삭제한 항목은 영구 삭제되어 복구할 수 없습니다.</span>
            </div>
            <div className="btns">
              <button onClick={handleOk}>확인</button>
              <button onClick={closeModal}>취소</button>
            </div>
          </div>
        </StudentRecordModalDiv>
      )}
    </>
  );
};
