import styled from "@emotion/styled";

export const SignUpWrap = styled.div`
  font-size: 30px;
`;

export const SignUpInner = styled.div`
  > div {
    > form {
      > input[type="radio"] {
        width: 20px;
        height: 20px;
        margin-right: 5px;
      }
    }
  }
`;

export const SignUpContain = styled.div`
  .image-upload {
    width: 200px;
    height: 200px;
    background: cyan;
  }
  button {
    width: 80px;
    height: 30px;
    cursor: pointer;
    /* border: none; */
    background: #fff;
  }
`;

export const SignUpUl = styled.ul`
  .big-input {
    > input {
      display: block;
      width: 300px;
      height: 40px;
      padding-left: 20px;
      padding-right: 20px;
      border-radius: 20px;
    }
  }
  .small-input {
    > input {
      display: block;
      width: 135px;
      height: 40px;
      padding-left: 15px;
      padding-right: 15px;
      border-radius: 20px;
    }
  }
`;

export const LeftForm = styled.li``;
export const RightForm = styled.li``;
