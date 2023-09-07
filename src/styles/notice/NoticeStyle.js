import styled from "@emotion/styled";

const NoticeWrap = styled.div`
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  padding: 15px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  font-size: 18px;
  h3 {
    font-size: 30px;
    margin-bottom: 10px;
  }
  label {
    > input {
      margin-left: 1vh;
      > .checkbox {
      }
    }
  }
`;

const NoticeTitle = styled.div`
  margin-bottom: 20px;
`;
const NoticeInput = styled.div`
  font-size: 13px;
  margin: auto;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  > form {
    input {
      border: 1px solid #bbb;
      border-radius: 3px;
      width: 200px;
      height: 24px;
      padding-left: 5px;
      margin-right: 5px;
    }
    button {
      width: 3vw;
      height: 24px;
      line-height: 1;
      background: #fff;
      border: 1px solid #bbb;
      border-radius: 3px;
      margin-right: 5px;
      cursor: pointer;
    }
  }
  button {
    width: 4vw;
    height: 24px;
    line-height: 1;
    background: #fff;
    border: 1px solid #bbb;
    border-radius: 3px;
    margin-right: 5px;
    cursor: pointer;
  }
`;
const NoticeBoard = styled.div`
  width: 100%;
  position: relative;
  height: 71vh;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  .title-wrap {
    width: 100%;
    display: grid;
    grid-template-columns: 0.05fr 0.7fr 0.1fr 0.15fr 0.05fr;
    grid-template-rows: 1fr;
    text-align: center;
    background: #176b87;
    color: #fff;
    height: 4vh;
    line-height: 4vh;
    padding: 0 20px 0 5px;
  }
  .notice-list {
    position: relative;
    width: 100%;
    height: 100%;
    > ul {
      width: 100%;
      display: grid;
      grid-template-columns: 0.05fr 0.7fr 0.1fr 0.15fr 0.05fr;
      grid-template-rows: 1fr;
      text-align: center;
      padding: 0 20px 0 5px;
      height: 4.75vh;
      line-height: 4.75vh;
      > li {
        text-align: center;
        border-top: 1px solid #e7e7e7;
        :nth-of-type(2) {
          text-align: start;
          padding-left: 30px;
          cursor: pointer;
        }
      }
    }
    .important-notice {
      font-weight: bold;
      color: black;
      > li {
        :first-of-type {
          > span {
            background: #ffe7ea;
            font-size: 15px;
            font-weight: 900;
            text-align: center;
            color: #ff5e5e;
            padding: 3px 6px;
            border-radius: 3px;
          }
        }
      }
    }
  }
`;

const NoticeDetailButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 2vh;
  button {
    width: 3vw;
    height: 24px;
    line-height: 1;
    background: #fff;
    border: 1px solid #bbb;
    border-radius: 3px;
    margin-right: 5px;
    cursor: pointer;
  }
`;

const NoticeDetailBoard = styled.div`
  width: 100%;
  position: relative;
  height: 69vh;
  text-align: left;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  background: #fff;
  overflow: auto;
  padding: 1.8vh;
`;

const NoticeDetailInformation = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  height: 3vh;
  text-align: left;
  border-top: 1px solid #000;
  background: #fff;
  overflow: auto;
  justify-content: space-between;
  padding: 0 1.8vh;
  > div {
    display: flex;
    gap: 1vh;
    align-items: center;
    > p {
      :nth-of-type(2) {
        position: relative;
        margin-left: 2px;
        padding-left: 10px;
      }
      :nth-of-type(2)::after {
        position: absolute;
        left: 0;
        top: 3px;
        content: "";
        top: 50%;
        transform: translateY(-50%);
        width: 1px;
        height: 15px;
        background-color: black;
      }
    }
  }
`;

const NoticeDetailITitle = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  align-items: center;
  height: 4vh;
  text-align: left;
  border-top: 1px solid #000;
  background: #176b87;
  color: #fff;
  font: bold;
  overflow: auto;
  padding: 0 1.8vh;
  font-weight: bold;
  color: #fff;
  > span {
    background: #ffe7ea;
    font-size: 15px;
    font-weight: 900;
    text-align: center;
    color: #ff5e5e;
    padding: 1px 6px;
    border-radius: 3px;
    margin-right: 2vh;
  }
`;

const PaginationContainer = styled.div`
  ul {
    display: flex;
    justify-content: center;
    margin-top: 25px;
    li {
      display: inline-block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      cursor: pointer;
      a {
        text-decoration: none;
        color: #176b87;
        font-size: 16px;
        line-height: 16px;
      }
    }
    .active a {
      color: #fff;
    }
    .active {
      background-color: #176b87;
    }
  }
  .page-selection {
    width: 48px;
    height: 30px;
    color: #176b87;
  }
`;

export {
  NoticeWrap,
  NoticeBoard,
  NoticeTitle,
  NoticeInput,
  PaginationContainer,
  NoticeDetailBoard,
  NoticeDetailInformation,
  NoticeDetailITitle,
  NoticeDetailButton,
};
