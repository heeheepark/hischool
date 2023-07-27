import React from "react";
import {
  IntroImage,
  LoginContain,
  LoginForm,
  LoginWrap,
} from "../../styles/LoginStyle";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <LoginWrap>
      <div>
        <IntroImage src="../images/intro.png" />
      </div>
      <LoginContain>
        <span>Login</span>
        <LoginForm>
          <ul>
            <li>
              <input type="radio" id="관리자" name="난 교사고 넌 학생이야?" />
              <label htmlFor="관리자">관리자</label>
            </li>
            <li>
              <input type="radio" id="선생님" name="난 교사고 넌 학생이야?" />
              <label htmlFor="선생님">선생님</label>
            </li>
            <li>
              <input type="radio" id="학생" name="난 교사고 넌 학생이야?" />
              <label htmlFor="학생">학생</label>
            </li>
          </ul>
          <div>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="PassWord" />
          </div>
          <div className="login-button">
            <button type="submit">Login</button>
          </div>
          <div className="link-button">
            <Link to="#">Email/PW 찾기</Link>
            <Link to="/signup">회원가입</Link>
          </div>
        </LoginForm>
      </LoginContain>
    </LoginWrap>
  );
};

export default Login;
