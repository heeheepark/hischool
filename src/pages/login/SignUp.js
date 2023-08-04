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
import { useNavigate } from "react-router";
import DaumPostcode from "react-daum-postcode";
import DaumPost from "../../components/DaumPost";

const SignUp = () => {
  const [userType, setUserType] = useState("학생");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const navigate = useNavigate();

  const [enroll_company, setEnroll_company] = useState({
    address: "",
  });

  const [popup, setPopup] = useState(false);

  const handleInput = e => {
    setEnroll_company({
      ...enroll_company,
      [e.target.name]: e.target.value,
    });
  };

  const handleComplete = data => {
    setPopup(!popup);
  };

  const handleUserTypeChange = e => {
    setUserType(e.target.value);
  };

  const handleSignUp = e => {
    e.preventDefault();

    if (!userType || !email || !password || !passwordConfirm) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    if (password !== passwordConfirm) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <SignUpWrap>
      <IntroImage>
        <img src="/images/intro.png" />
      </IntroImage>
      <SignUpInner>
        <div className="signup-box">
          <div className="signup-radio">
            <h3>Sign Up</h3>
            <form>
              <input
                type="radio"
                id="선생님"
                name="userType"
                value="선생님"
                checked={userType === "선생님"}
                onChange={handleUserTypeChange}
              />
              <label htmlFor="선생님">선생님</label>
              <input
                type="radio"
                id="학생"
                name="userType"
                value="학생"
                checked={userType === "학생"}
                onChange={handleUserTypeChange}
              />
              <label htmlFor="학생">학생</label>
            </form>
          </div>
          <SignUpContain>
            <form className="input-form">
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
                      <div>
                        <label>학년</label>
                        <input type="text" />
                      </div>
                      <div>
                        <label>반</label>
                        <input type="text" />
                      </div>
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
                      <input
                        className="user_enroll_text"
                        placeholder="주소"
                        type="text"
                        required={true}
                        name="address"
                        onChange={handleInput}
                        value={enroll_company.address}
                      />
                      <button onClick={handleComplete}>우편번호 찾기</button>
                      {popup && (
                        <DaumPost
                          company={enroll_company}
                          setcompany={setEnroll_company}
                        ></DaumPost>
                      )}
                    </li>
                    {userType === "선생님" ? (
                      <li className="big-input">
                        <label>교원 인증 사진</label>
                        <input type="text" />
                      </li>
                    ) : null}
                  </ul>
                </RightForm>
              </SignUpUl>
            </form>
          </SignUpContain>
          <div className="signup-submit">
            <button onClick={handleSignUp}>회원가입</button>
            <button onClick={handleCancel}>취소</button>
          </div>
        </div>
      </SignUpInner>
    </SignUpWrap>
  );
};

export default SignUp;
