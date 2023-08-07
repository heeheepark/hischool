import { faFloppyDisk, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  InputSubJectWrap,
  SJButton,
  SJHeader,
  SJTitle,
} from "../../styles/teacher/InputSubectStyle";
import TSubjectPlus from "../../components/teacher/TSubjectPlus";

const InputSubject = () => {
  return (
    <InputSubJectWrap>
      <SJHeader>
        <h3>과목 정보 입력</h3>
        <SJButton>
          <button>저장</button>
          <button>취소</button>
        </SJButton>
      </SJHeader>
      <SJTitle>
        <p>과목계열</p>
        <p>세부과목</p>
      </SJTitle>
      <div>
        <TSubjectPlus />
      </div>
    </InputSubJectWrap>
  );
};

export default InputSubject;
