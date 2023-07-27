import React, { useState } from "react";
import { IntroImage } from "../../styles/LoginStyle";
import {
  LeftForm,
  RightForm,
  SignUpContain,
  SignUpInner,
  SignUpUl,
  SignUpWrap,
} from "../../styles/login/SignUpStyle";

const SignUp = () => {
  const [formChange, setFormChange] = useState(0);

  return (
    <SignUpWrap>
      <div>
        <IntroImage src="../images/intro.png" />
      </div>
      <SignUpInner>
        <div>
          <span>Sign Up</span>
          <form>
            <input type="radio" id="선생님" name="몰루" />
            <label htmlFor="선생님">선생님</label>
            <input type="radio" id="학생" name="몰루" />
            <label htmlFor="학생">학생</label>
          </form>
        </div>
        <SignUpContain>
          <form>
            <div className="image-upload">
              <img src="" alt="pic" />
            </div>
            <SignUpUl>
              <LeftForm>
                <ul>
                  <li className="big-input">
                    <label>이메일</label>
                    <input type="email" />
                  </li>
                  <li className="big-input">
                    <label>비밀번호</label>
                    <input type="password" />
                  </li>
                  <li className="big-input">
                    <label>비밀번호 확인</label>
                    <input type="password" />
                  </li>
                  <li className="big-input">
                    <label>학교</label>
                    <input type="text" />
                  </li>
                  <li className="small-input">
                    <label>학년</label>
                    <input type="text" />
                  </li>
                  <li className="small-input">
                    <label>반</label>
                    <input type="text" />
                  </li>
                </ul>
              </LeftForm>
              <RightForm>
                <ul>
                  <li className="big-input">
                    <label>이름</label>
                    <input type="text" />
                  </li>
                  <li className="big-input">
                    <label>생년월일</label>
                    <input type="text" />
                  </li>
                  <li className="big-input">
                    <label>연락처</label>
                    <input type="text" />
                  </li>
                  <li className="big-input">
                    <label>주소입력</label>
                    <input type="text" />
                  </li>
                  <li className="big-input">
                    <label>교원 인증 사진</label>
                    <input type="text" />
                  </li>
                </ul>
              </RightForm>
            </SignUpUl>
            <div>
              <button>회원가입</button>
              <button>취소</button>
            </div>
          </form>
        </SignUpContain>
      </SignUpInner>
    </SignUpWrap>
  );
};

export default SignUp;
