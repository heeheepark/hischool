import {
  ModalContain,
  ModalBody,
  ModalCloseBtn,
  StudentRecordModalDiv,
  FindPasswordModalDiv,
} from "../../styles/ModalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { postEmailCodeConFirm } from "../../api/login/signUpAxios";
import { postEmail } from "../../api/login/findPasswordAxios";

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

// 비밀번호 찾기 모달
export const FindPasswordModal = ({
  passwordModalOpen,
  setPasswordModalOpen,
}) => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [notValidEmail, setNotValidEmail] = useState(false);

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

  if (validEmail) {
    alert(
      "이메일로 임시비밀번호를 전송했습니다. \n발급 받은 임시비밀번호로 로그인 해주세요.",
    );
    setPasswordModalOpen(false);
  }

  if (notValidEmail) {
    alert("가입된 정보가 없습니다. \n이메일을 다시 확인해주세요.");
    setNotValidEmail(false);
  }

  return (
    <>
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
                name="user-email"
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
