import React from "react";
import { IntroImage } from "../../styles/LoginStyle";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div>
        <IntroImage src="../images/intro.png" />
      </div>
      <div>
        <form>
          <span>Login</span>
          <input type="radio" id="관리자" name="난 교사고 넌 학생이야?" />
          <label htmlFor="관리자">관리자</label>
          <input type="radio" id="선생님" name="난 교사고 넌 학생이야?" />
          <label htmlFor="선생님">선생님</label>
          <input type="radio" id="학생" name="난 교사고 넌 학생이야?" />
          <label htmlFor="학생">학생</label>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="PassWord" />
          <button type="submit">Login</button>
        </form>
      </div>
      <div>
        <Link to="#">Email/PW 찾기</Link>
        <Link to="/signup">회원가입</Link>
      </div>
    </div>
  );
};

export default Login;
