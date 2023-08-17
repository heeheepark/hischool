import React, { useState } from "react";
import {
  IntroImage,
  LoginContain,
  LoginForm,
  LoginWrap,
} from "../../styles/login/LoginStyle";
import { Link, useNavigate } from "react-router-dom";
import { fetchLogin } from "../../api/client";

const Login = () => {
  const [email, setEmail] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [isLoginDisabled, setIsLoginDisabled] = useState(true);
  const [errConfirm, setErrConfirm] = useState(false);
  const navigate = useNavigate();

  const checkEmail = () => {
    const regex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const isValid = regex.test(email);
    setErrEmail(isValid ? "" : "이메일 주소가 형식에 맞지 않습니다.");
  };

  const checkPass = () => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/g;
    const isValid = regex.test(password);
    setErrPassword(isValid ? "" : "비밀번호가 형식에 맞지 않습니다.");
    setIsLoginDisabled(!isValid);
  };


  // // 유저 선택 및 로그인 버튼 함수
  const handleSubmit = async e => {
    e.preventDefault();
    if (!isLoginDisabled) {
      const role = await fetchLogin(email, password, setErrConfirm);
      if (role === "ROLE_TC") {
        navigate("/teacher/home");
      } else if (role === "ROLE_STD") {
        navigate("/student/home");
      }else{
        setErrConfirm(true)
      }
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
              onBlur={checkEmail}
            />
            {errEmail && <p className="err-message">{errEmail}</p>}
            <input
              className="login-password"
              onChange={e => handlePassWord(e)}
              type="password"
              placeholder="Password"
              autoComplete="on"
              onBlur={checkPass}
            />
            {errPassword && <p className="err-message">{errPassword}</p>}
          {errConfirm && <p className="err-message">이메일과 비밀번호를 확인 해주세요.</p>}
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
