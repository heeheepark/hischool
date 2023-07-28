import styled from "@emotion/styled";

export const SignUpWrap = styled.div`
  font-size: 27px;
`;

export const SignUpInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .signup-box {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: auto;
  }
  .signup-radio {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    span {
      font-family: "yg-jalnan";
      font-size: 40px;
      margin-right: 5%;
    }
    form {
      input[type="radio"] {
        width: 20px;
        height: 20px;
        margin-right: 8px;
        vertical-align: -2px;
      }
      label {
        font-size: 27px;
        margin-right: 10px;
      }
    }
  }
  .signup-submit {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 20px;
    button {
      width: 80px;
      height: 30px;
      font-family: "HakgyoansimWoojuR";
      /* font-family: "yg-jalnan"; */
      font-weight: 600;
      font-size: 20px;
      cursor: pointer;
      border: none;
      border-radius: 5px;
      background: #176b87;
      color: #fff;
    }
  }
`;

export const SignUpContain = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  height: auto;
  .input-form {
    display: flex;
    gap: 20px;
  }
  .image-upload {
    width: 200px;
    height: 200px;
    margin-top: 13px;
    background: #176b87;
  }
`;

export const SignUpUl = styled.ul`
  display: flex;
  .big-input {
    input {
      display: block;
      width: 300px;
      height: 40px;
      padding-left: 20px;
      padding-right: 20px;
      border-radius: 20px;
      font-size: 20px;
    }
  }
  .small-input {
    display: flex;
    justify-content: space-between;
    div {
      display: flex;
      flex-direction: column;
      input {
        display: block;
        font-size: 20px;
        width: 135px;
        height: 40px;
        padding-left: 15px;
        padding-right: 15px;
        border-radius: 20px;
      }
    }
  }
`;

export const LeftForm = styled.li``;
export const RightForm = styled.li`
  margin-left: 30px;
`;
