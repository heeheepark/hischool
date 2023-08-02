import styled from "@emotion/styled";

export const TcMyPageWrap = styled.div`
  padding: 5% 5% 0 5%;
  list-style: none;
  > div {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 40px;
    .TcMypagePic {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 200px;
      height: 200px;
      border: 1px solid yellow;
      background: crimson;
      input {
      }
    }
  }
`;

export const TcMyPageTopInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  vertical-align: middle;
  gap: 10px;
  font-size: 20px;
  font-weight: 800;
  li {
    gap: 15px;
    display: flex;
    justify-content: space-between;
    input {
      border-radius: 20px;
      font-size: 18px;
      height: 30px;
      width: 300px;
      padding: 0 10px;
    }
  }
`;

export const TcMyPageDownInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 5%;
`;

export const TcMyPageLeftInfo = styled.div`
  gap: 10px;
  font-size: 20px;
  font-weight: 800;
  ul {
    li {
      input {
        display: block;
        border-radius: 20px;
        font-size: 18px;
        height: 30px;
        width: 300px;
        padding: 0 10px;
        margin: 5px 0;
      }
    }
    .grade-van {
      display: flex;
      justify-content: space-between;
      div {
        input {
          font-size: 20px;
          width: 100px;
          height: 30px;
          padding-left: 25%;
          padding-right: 25%;
          border-radius: 20px;
          margin: 5px 0;
        }
      }
    }
  }
`;
export const TcMyPageRightInfo = styled.div`
  margin-right: 30%;
  font-size: 20px;
  font-weight: 800;
  li {
    padding-bottom: 10px;
    input {
      display: block;
      border-radius: 20px;
      font-size: 18px;
      height: 30px;
      width: 300px;
      padding: 0 10px;
      margin: 5px 0;
    }
  }
`;

export const TcButtons = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 12%;
  padding-right: 10%;
  button {
    width: 80px;
    height: 28px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    background: #176b87;
    color: #fff;
    cursor: pointer;
  }
  div {
    display: flex;
    gap: 15px;
  }
`;
