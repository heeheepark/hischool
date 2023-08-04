import { faFloppyDisk, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { SJButton, SJHeader, SJTitle } from "../../styles/teacher/InputSubect";
import TSubjectPlus from "../../components/teacher/TSubjectPlus";

const InputSubject = () => {
  return (
    <>
      <SJHeader>
        <h1>과목 정보 입력창</h1>
        <SJButton>
          <button>
            저장
            <FontAwesomeIcon icon={faFloppyDisk} />
          </button>
          <button>
            취소
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </SJButton>
      </SJHeader>
      <SJTitle>
        <p>과목계열</p>
        <p>세부과목</p>
      </SJTitle>
      <div>
        <TSubjectPlus />
      </div>
    </>
  );
};

export default InputSubject;
