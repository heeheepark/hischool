import { StudentRecordModalDiv } from "../styles/ModalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

export const StudentRecordModal = () => {
  // const modal = document.querySelector(".modal");
  const handleOk = () => {
    // modal.style.display = "none";
  };
  const closeModal = () => {
    // modal.style.display = "none";
  };

  return (
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
  );
};
