import styled from "@emotion/styled";

export const LoginWrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const IntroImage = styled.img`
  width: 100vw;
  height: 50vh;
`;

export const LoginContain = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const LoginForm = styled.form`
  font-size: 20px;
  margin-right: 20%;
  ul {
    font-size: 35px;
    display: flex;
    gap: 15px;
    li {
      font-size: 20px;
      input[type="radio"] {
        width: 20px;
        height: 20px;
        margin-right: 5px;
        vertical-align: -3.5px;
      }
    }
  }
  > div {
    > input {
      display: block;
      padding-left: 20px;
      padding-right: 20px;
      width: 100%;
      height: 45px;
      border-radius: 20px;
      margin: 20px 0;
    }
  }
  > span {
    font-size: 45px;
  }
  .login-button {
    button {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      font-size: 25px;
      background: #176b87;
      border: none;
      color: #fff;
    }
  }
  .link-button {
  }
`;
