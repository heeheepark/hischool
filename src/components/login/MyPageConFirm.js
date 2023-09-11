import React, { useState } from "react";
import { MyPageConFirmDiv } from "../../styles/login/MyPageStyle";

const MyPageConFirm = ({ handlePasswordConFirm }) => {
  const [pass, setPass] = useState("");
  const [errMassege, setErrMassege] = useState("");
  const handlePasswordChange = event => {
    event.preventDefault();
    setPass(event.target.value);
  };

  const handlePasswordSubmit = e => {
    e.preventDefault();
    handlePasswordConFirm(pass, setErrMassege);
  };

  return (
    <MyPageConFirmDiv>
      <h3>비밀번호를 입력해주세요.</h3>
      <p>
        회원 정보를 안전하게 보호하기 위해 현재 사용하고 있는 비밀번호를
        입력해주세요.
      </p>
      <div>
        <form>
          <input
            type="password"
            id="password"
            value={pass}
            onChange={handlePasswordChange}
            autoComplete="off"
            autoFocus
          />
          <button onClick={e => handlePasswordSubmit(e)}>확인</button>
        </form>
      </div>
      {errMassege === 0 && (
        <span className="err-message">비밀번호를 확인 해주세요.</span>
      )}
    </MyPageConFirmDiv>
  );
};
export default MyPageConFirm;
