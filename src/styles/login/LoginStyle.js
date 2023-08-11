import styled from "@emotion/styled";

export const LoginWrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const IntroImage = styled.div`
  width: 100vw;
  height: 50vh;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const LoginContain = styled.div`
  font-size: 20px;
  margin-top: 8%;
  margin-right: 35px;
  h3 {
    font-size: 45px;
  }
  div {
    width: 400px;
    input {
      display: block;
      padding-left: 20px;
      padding-right: 20px;
      width: 100%;
      height: 60px;
      border-radius: 20px;
      margin-top: 20px;
    }
    .err-message {
      padding-left: 10px;
      font-size: 16px;
      color: crimson;
    }
  }
  .login-email {
    font-weight: 600;
    font-size: 20px;
  }
  .login-password {
    font-weight: 600;
    font-size: 20px;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .login-button {
    margin-top: 9.5%;
    padding-right: 10%;
    button {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      font-size: 25px;
      background: #176b87;
      border: none;
      color: #fff;
      cursor: pointer;
    }
  }
  .link-button {
    display: flex;
    justify-content: space-around;
  }
`;
