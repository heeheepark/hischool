import React, { useState } from "react";
import {
  IntroImage,
  LoginContain,
  LoginForm,
  LoginWrap,
} from "../../styles/LoginStyle";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [selectedLogin, setSelectedLogin] = useState("student");
  const navigate = useNavigate();

  const handleLoginChange = e => {
    setSelectedLogin(e.target.value);
  };

  const handleLogin = () => {
    switch (selectedLogin) {
      case "admin":
        navigate("/");
        break;
      case "teacher":
        navigate("/teacher/home");
        break;
      case "student":
        navigate("/student/home");
        break;
      default:
        navigate("/");
    }
  };
  return (
    <LoginWrap>
      <IntroImage>
        <img src="../images/intro.png" />
      </IntroImage>
      <LoginForm>
        <LoginContain>
          <ul>
            <li>
              <h3>Login</h3>
            </li>
            <li>
              <input
                type="radio"
                id="관리자"
                value="admin"
                checked={selectedLogin === "admin"}
                onChange={handleLoginChange}
                name="이건역할이머지?"
              />
              <label htmlFor="관리자">관리자</label>
            </li>
            <li>
              <input
                type="radio"
                id="선생님"
                value="teacher"
                checked={selectedLogin === "teacher"}
                onChange={handleLoginChange}
                name="이건역할이머지?"
              />
              <label htmlFor="선생님">선생님</label>
            </li>
            <li>
              <input
                type="radio"
                id="학생"
                value="student"
                checked={selectedLogin === "student"}
                onChange={handleLoginChange}
                name="이건역할이머지?"
              />
              <label htmlFor="학생">학생</label>
            </li>
          </ul>
          <div>
            <input className="login-email" type="email" placeholder="Email" />
            <input
              className="login-password"
              type="password"
              placeholder="PassWord"
            />
          </div>
          <div className="link-button">
            <Link to="#">Email/PW 찾기</Link>
            <Link to="/signup">회원가입</Link>
          </div>
        </LoginContain>
        <div className="login-button">
          <button type="submit" onClick={handleLogin}>
            Login
          </button>
        </div>
      </LoginForm>
    </LoginWrap>
  );
};

export default Login;
