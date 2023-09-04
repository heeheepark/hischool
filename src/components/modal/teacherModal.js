import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StudentRecordModalDiv } from "../../styles/ModalStyle";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

// 내신 성적 삭제 모달
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

// 모의고사 성적 삭제 모달
export const MockRecordModal = ({
  mockModalOpen,
  setMockModalOpen,
  setMockDeleteOk,
}) => {
  const handleOk = () => {
    setMockDeleteOk(true);
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

// 성적 수정 오류 모달
export const EditErrorModal = ({ editErrModalOpen, setEditErrModalOpen }) => {
  const handleOk = () => {
    setEditErrModalOpen(false);
  };

  return (
    <>
      {editErrModalOpen && (
        <StudentRecordModalDiv className="modal">
          <div className="dim"></div>
          <div className="content-wrap">
            <div className="header">
              <FontAwesomeIcon icon={faExclamation} className="warning-icon" />
              <span></span>
            </div>
            <div className="content">
              <span>선택된 항목이 없습니다.</span>
              <span>수정할 항목을 선택해주세요.</span>
            </div>
            <div className="btns">
              <button onClick={handleOk}>확인</button>
            </div>
          </div>
        </StudentRecordModalDiv>
      )}
    </>
  );
};

// 성적 삭제 오류 모달
export const DeleteErrorModal = ({
  showDeleteErrModal,
  setDeleteErrModalOpen,
}) => {
  const handleOk = () => {
    setDeleteErrModalOpen(false);
  };

  return (
    <>
      {showDeleteErrModal && (
        <StudentRecordModalDiv className="modal">
          <div className="dim"></div>
          <div className="content-wrap">
            <div className="header">
              <FontAwesomeIcon icon={faExclamation} className="warning-icon" />
              <span></span>
            </div>
            <div className="content">
              <span>선택된 항목이 없습니다.</span>
              <span>삭제할 항목을 선택해주세요.</span>
            </div>
            <div className="btns">
              <button onClick={handleOk}>확인</button>
            </div>
          </div>
        </StudentRecordModalDiv>
      )}
    </>
  );
};

// 학생 승인 확인 모달
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

// 학생 승인 취소 모달
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

// 생활기록부(진로지도) 저장
export const CareerRecordSaveModal = ({
  modalOpen,
  setModalOpen,
  setAcceptOk,
}) => {
  const handleOk = () => {
    setAcceptOk(true);
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
              <span>저장 하시겠습니까?</span>
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
