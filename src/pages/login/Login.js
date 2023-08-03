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
  const [selectedLogin, setSelectedLogin] = useState("student");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRadioChange = e => {
    setSelectedLogin(e.target.value);
  };

  const handleLogin = async () => {
    fetchLogin(email, password);
    // switch (selectedLogin) {
    //   case "admin":
    //     navigate("/");
    //     break;
    //   case "teacher":
    //     navigate("/teacher/home");
    //     break;
    //   case "student":
    //     navigate("/student/home");
    //     break;
    //   default:
    //     navigate("/");
    // }
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <LoginWrap>
      <IntroImage>
        <img src="../images/intro.png" />
      </IntroImage>
      <LoginForm onSubmit={handleSubmit}>
        <LoginContain>
          <h3>Login</h3>
          <div>
            <input
              className="login-email"
              onChange={e => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
            <input
              className="login-password"
              onChange={e => setPassword(e.target.value)}
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
          {error && <p>{error}</p>}
        </div>
      </LoginForm>
    </LoginWrap>
  );
};

export default Login;
