import React, { useState } from "react";
import {
  ConFirmWrap,
  ConFirmInput,
  ConFirmButtons,
} from "../styles/login/ConFirmStyle";
import { postEmailCodeConFirm } from "../api/signUpAxios";

const ConFirm = () => {
  const [emailConFirm, setEmailConFirm] = useState("");

  const handleCodeConfirm = () => {
    postEmailCodeConFirm(emailConFirm);
  };

  return (
    <ConFirmWrap>
      <ConFirmInput>
        <div>
          <label>이메일 인증번호</label>
          <input
            type="text"
            placeholder="인증번호 6자리를 입력해주세요"
            name="email-check"
            value={emailConFirm}
            // onChange={setEmailConFirm}
          />
        </div>
      </ConFirmInput>
      <ConFirmButtons>
        <button onClick={handleCodeConfirm}>인증확인</button>
        <button>취소</button>
      </ConFirmButtons>
    </ConFirmWrap>
  );
};

export default ConFirm;
