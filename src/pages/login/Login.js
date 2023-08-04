import React, { useState } from "react";
import {
  IntroImage,
  LoginContain,
  LoginForm,
  LoginWrap,
} from "../../styles/LoginStyle";
import { Link, useNavigate } from "react-router-dom";
import { fetchLogin } from "../../api/client";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    fetchLogin(email, password, setRole);
    if (role === "ROLE_TC") {
      navigate("/teacher/home");
    } else if (role === "ROLE_STD") {
      navigate("/student/home");
    }
  };

  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handlePassWord = e => {
    setPassword(e.target.value);
  };

  return (
    <LoginWrap>
      <IntroImage>
        <img src="../images/intro.png" />
      </IntroImage>
      <LoginForm>
        <LoginContain>
          <h3>Login</h3>
          <div>
            <input
              className="login-email"
              onChange={e => handleEmail(e)}
              type="email"
              placeholder="Email"
            />
            <input
              className="login-password"
              onChange={e => handlePassWord(e)}
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
          <button type="submit" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </LoginForm>
    </LoginWrap>
  );
};

export default Login;
