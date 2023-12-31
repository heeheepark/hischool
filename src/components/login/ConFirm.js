import React, { useState } from "react";
import {
  ConFirmWrap,
  ConFirmInput,
  ConFirmButtons,
} from "../../styles/login/ConFirmStyle";
import { postEmailCodeConFirm } from "../../api/signUpAxios";

const ConFirm = ({ setAuthModal }) => {
  const [emailConFirm, setEmailConFirm] = useState("");

  const handleCodeConfirm = e => {
    e.preventDefault();
    postEmailCodeConFirm(emailConFirm);
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
    <ConFirmWrap>
      <ConFirmInput>
        <div>
          <label htmlFor="email-check">이메일 인증번호</label>
          <input
            type="text"
            placeholder="인증번호 6자리를 입력해주세요"
            id="email-check"
            value={emailConFirm}
            onChange={e => handleConfirmInput(e)}
          />
        </div>
      </ConFirmInput>
      <ConFirmButtons>
        <button
          onClick={e => {
            handleCodeConfirm(e);
          }}
        >
          인증확인
        </button>
        <button onClick={e => handleCancel(e)}>취소</button>
      </ConFirmButtons>
    </ConFirmWrap>
  );
};

export default ConFirm;
