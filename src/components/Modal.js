import {
  ModalContain,
  ModalBody,
  ModalCloseBtn,
  StudentRecordModalDiv,
} from "../styles/ModalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

export const Modal = ({ isOpen, onRequestClose, children }) => {
  const handleTestClose = () => {
    // console.log("모달이야");
    // e.preventDefault();
    onRequestClose();
  };

  return (
    <>
      {isOpen && (
        <ModalContain onClick={e => handleTestClose(e)}>
          <ModalBody onClick={e => e.stopPropagation()}>
            <ModalCloseBtn onClick={e => handleTestClose(e)}>✖</ModalCloseBtn>
            {children}
          </ModalBody>
        </ModalContain>
      )}
    </>
  );
};

export const SchoolRecordModal = ({
  schoolModalOpen,
  setSchoolModalOpen,
  setschoolDeleteOk,
}) => {
  const handleOk = () => {
    setschoolDeleteOk(true);
  };

  const closeModal = () => {
    setSchoolModalOpen(false);
  };

  return (
    <>
      {schoolModalOpen && (
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

export const MockRecordModal = ({
  mockModalOpen,
  setMockModalOpen,
  setmockDeleteOk,
}) => {
  const handleOk = () => {
    setmockDeleteOk(true);
  };

  const closeModal = () => {
    setMockModalOpen(false);
  };

  return (
    <>
      {mockModalOpen && (
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

export const StudentAcceptModal = ({
  modalOpen,
  setModalOpen,
  setAcceptOk,
}) => {
  const handleOk = () => {
    setAcceptOk(true);
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
              <span>해당 학생을 승인 하시겠습니까?</span>
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

export const StudentCancelModal = ({
  modalOpen,
  setModalOpen,
  setCancelOk,
}) => {
  const handleOk = () => {
    setCancelOk(true);
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
              <span>해당 학생을 승인 취소 하시겠습니까?</span>
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
