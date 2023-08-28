import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StudentRecordModalDiv } from "../../styles/ModalStyle";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

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
