import React from "react";
import { IntroImage } from "../../styles/LoginStyle";

const SignUp = () => {
  return (
    <div>
      <div>
        <IntroImage src="../images/intro.png" />
      </div>
      <div>
        <span>Sign Up</span>
        <form>
          <input type="radio" id="선생님" name="몰루" />
          <label htmlFor="선생님">선생님</label>
          <input type="radio" id="학생" name="몰루" />
          <label htmlFor="학생">학생</label>
        </form>
      </div>
      <div>
        <form>
          <ul>
            <li>
              <ul>
                <li>
                  <label>이메일</label>
                  <input type="email" />
                </li>
                <li>
                  <label>비밀번호</label>
                  <input type="password" />
                </li>
                <li>
                  <label>비밀번호 확인</label>
                  <input type="password" />
                </li>
                <li>
                  <label>학교</label>
                  <input type="text" />
                </li>
                <li>
                  <label>반</label>
                  <input type="text" />
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <label>이름</label>
                  <input type="text" />
                </li>
                <li>
                  <label>생년월일</label>
                  <input type="text" />
                </li>
                <li>
                  <label>연락처</label>
                  <input type="text" />
                </li>
                <li>
                  <label>주소입력</label>
                  <input type="text" />
                </li>
              </ul>
            </li>
          </ul>
          <div>
            <button>회원가입</button>
            <button>취소</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
