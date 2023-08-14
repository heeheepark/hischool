import styled from "@emotion/styled";

export const SignUpWrap = styled.div`
  font-size: 23px;
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
    h3 {
      font-size: 40px;
      margin-right: 5%;
    }
    form {
      input[type="radio"] {
        width: 20px;
        height: 20px;
        margin-right: 8px;
        vertical-align: -3px;
      }
      label {
        font-size: 20px;
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
      font-size: 18px;
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
    /* background: #176b87; */
    border: solid 2px #176b87;
    border-radius: 8px;
  }
  .picture-img {
    img {
      width: 200px;
      height: 200px;
      object-fit: contain;
    }
  }
`;

export const SignUpUl = styled.ul`
  display: flex;
  .big-input {
    input {
      display: block;
      width: 21vw;
      height: 35px;
      border: 1px solid #bbb;
      border-radius: 4px;
      padding-left: 10px;
      margin-right: 5px;
      font-size: 18px;
    }
    .confirm-input {
      display: inline-block;
    }
  }
  span {
    display: inline-block;
    text-align: center;
    width: 50px;
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    color: #fff;
    border-radius: 4px;
    background: #176b87;
    cursor: pointer;
  }
  .small-input {
    display: flex;
    div {
      display: flex;
      flex-direction: column;
      input {
        display: block;
        width: 10.4vw;
        height: 35px;
        border: 1px solid #bbb;
        border-radius: 4px;
        padding-left: 10px;
        margin-right: 5px;
        font-size: 18px;
      }
    }
  }
`;

export const LeftForm = styled.li``;
export const RightForm = styled.li`
  margin-left: 30px;
`;
