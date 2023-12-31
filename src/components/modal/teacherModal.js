import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  RecordConfirmModalDiv,
  StudentRecordModalDiv,
} from "../../styles/ModalStyle";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { patchRecordConfirm } from "../../api/teacher/studentRecordAxios";

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

// 성적확정 처리 모달
export const RecordConfirmModal = ({ setConfirmModal }) => {
  const [payload, setPayload] = useState({
    semester: 0,
    midFinal: 0,
  });

  const handleOk = () => {
    if (payload.semester === 0 || payload.midFinal === 0) {
      alert("학기, 시험유형을 다시 확인해주세요.");
    } else {
      patchRecordConfirm(payload);
      setConfirmModal(false);
    }
  };

  const closeModal = () => {
    setConfirmModal(false);
  };

  const handleSemester = e => {
    setPayload({ ...payload, semester: parseInt(e.target.value) });
  };

  const handleTestType = e => {
    setPayload({ ...payload, midFinal: parseInt(e.target.value) });
  };

  return (
    <>
      <RecordConfirmModalDiv className="modal">
        <div className="dim"></div>
        <div className="content-wrap">
          <div className="header">
            <span className="title">
              <FontAwesomeIcon icon={faExclamation} className="warning-icon" />
              성적 확정 처리
            </span>
            <span className="description">
              성적확정 처리할 시험을 선택해주세요.
            </span>
          </div>
          <div className="content">
            <label htmlFor="confirm-semester">
              <select id="confirm-semester" onChange={e => handleSemester(e)}>
                <option value="0">학기</option>
                <option value="1">1학기</option>
                <option value="2">2학기</option>
              </select>
            </label>
            <label htmlFor="test-type">
              <select id="test-type" onChange={e => handleTestType(e)}>
                <option value="0">시험 유형</option>
                <option value="1">중간고사</option>
                <option value="2">기말고사</option>
              </select>
            </label>
          </div>
          <div className="btns">
            <button onClick={handleOk}>확정</button>
            <button onClick={closeModal}>취소</button>
          </div>
        </div>
      </RecordConfirmModalDiv>
    </>
  );
};

// 생활기록부(출결현황) 저장
export const AttendSaveModal = ({ modalOpen, setModalOpen, setAcceptOk }) => {
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
