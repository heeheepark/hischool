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
  ul {
    font-size: 35px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 0 15px;
    li {
      font-size: 20px;
      input[type="radio"] {
        width: 20px;
        height: 20px;
        margin-right: 5px;
        vertical-align: -3.5px;
      }
      > span {
        font-family: "yg-jalnan";
        font-size: 40px;
      }
    }
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
      margin: 20px 0;
    }
  }
  .login-email {
    font-family: "HakgyoansimWoojuR";
    font-weight: 600;
    font-size: 20px;
  }
  .login-password {
    font-family: "HakgyoansimWoojuR";
    font-weight: 600;
    font-size: 20px;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  span {
    font-size: 45px;
  }
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
