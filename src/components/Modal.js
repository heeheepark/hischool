import {
  ModalContain,
  ModalBody,
  ModalCloseBtn,
  StudentRecordModalDiv,
  FindPasswordModalDiv,
} from "../styles/ModalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation, faXmark } from "@fortawesome/free-solid-svg-icons";
import { postEmailCodeConFirm } from "../api/signUpAxios";
import { useEffect, useState } from "react";
import { postEmail } from "../api/findPasswordAxios";

// 회원가입, 마이페이지 모달
export const Modal = ({ isOpen, onRequestClose, children }) => {
  const handleTestClose = () => {
    onRequestClose();
  };
  return (
    <>
      {isOpen && (
        <ModalContain>
          <ModalBody onClick={e => e.stopPropagation()}>
            <ModalCloseBtn onClick={handleTestClose}>✖</ModalCloseBtn>
            {children}
          </ModalBody>
        </ModalContain>
      )}
    </>
  );
};

// 비밀번호 찾기 모달
export const FindPasswordModal = ({
  passwordModalOpen,
  setPasswordModalOpen,
}) => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [notValidEmail, setNotValidEmail] = useState(false);

  console.log(typeof email);
  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handleSendPassword = () => {
    postEmail(email, setValidEmail, setNotValidEmail);
    setPasswordModalOpen(true);
  };

  const closeModal = () => {
    setPasswordModalOpen(false);
  };

  useEffect(() => {
    setNotValidEmail(false);
  }, [notValidEmail]);

  return (
    <>
      {notValidEmail &&
        alert("가입된 정보가 없습니다. 이메일을 다시 확인해주세요.")}
      {/* {validEmail &&
        alert(
          "이메일로 임시 비밀번호를 전송했습니다. 발급 받은 임시 비밀번호로 로그인 해주세요.",
        )} */}
      {passwordModalOpen && (
        <FindPasswordModalDiv className="modal">
          <div className="dim"></div>
          <div className="content-wrap">
            <span>
              <FontAwesomeIcon
                icon={faXmark}
                className="close-btn"
                onClick={closeModal}
              />
            </span>
            <div className="header">
              <h3 className="title">비밀번호 찾기</h3>
              <span>회원가입 시 등록한 이메일을 입력해주세요.</span>
            </div>
            <div className="content">
              <input
                type="email"
                placeholder="ex) example@example.com"
                onChange={handleEmail}
              />
            </div>
            <div className="btns">
              <button onClick={handleSendPassword}>임시비밀번호 발급</button>
            </div>
          </div>
        </FindPasswordModalDiv>
      )}
    </>
  );
};

// 이메일 인증 확인 모달
export const EmailConFirmModal = ({
  authModal,
  setAuthModal,
  setEmailCheck,
}) => {
  const [emailConFirm, setEmailConFirm] = useState("");

  const handleCodeConfirm = e => {
    e.preventDefault();
    postEmailCodeConFirm(emailConFirm, setEmailCheck);
    setAuthModal(false);
  };

  const handleCancel = e => {
    e.preventDefault();
    setAuthModal(false);
  };

  const handleConfirmInput = e => {
    setEmailConFirm(e.target.value);
  };

  return (
    <>
      {authModal && (
        <StudentRecordModalDiv className="modal">
          <div className="dim"></div>
          <div className="content-wrap" style={{ height: "230px" }}>
            <div className="header">
              <FontAwesomeIcon icon={faExclamation} className="warning-icon" />
            </div>
            <div className="content">
              <label>이메일 인증번호</label>
              <input
                type="text"
                placeholder="인증번호 6자리를 입력해주세요"
                name="email-check"
                value={emailConFirm}
                onChange={e => handleConfirmInput(e)}
                style={{ width: "100%" }}
              />
            </div>
            <div className="btns">
              <button
                onClick={e => {
                  handleCodeConfirm(e);
                }}
              >
                인증확인
              </button>
              <button onClick={e => handleCancel(e)}>취소</button>
            </div>
          </div>
        </StudentRecordModalDiv>
      )}
    </>
  );
};

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

// 회원 탈퇴 모달
export const DeleteUserModal = ({ modalOpen, setModalOpen, setCancelOk }) => {
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
              <span>정말 회원 탈퇴를 하시겠습니까?</span>
              <span>탈퇴한 계정은 영구 삭제되어 복구할 수 없습니다.</span>
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
