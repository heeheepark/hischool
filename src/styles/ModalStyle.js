import styled from "@emotion/styled";

export const ModalContain = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(2px);
`;

export const ModalBody = styled.div`
  position: absolute;
  width: 40%;
  height: 50%;
  padding: 40px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
`;

export const ModalCloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  color: rgba(0, 0, 0, 0.7);
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: rgba(0, 0, 0, 1);
  }
`;

export const StudentRecordModalDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  .dim {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 99;
    backdrop-filter: blur(2px);
  }
  .content-wrap {
    position: absolute;
    width: 23%;
    height: 20%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    background: #fff;
    border-radius: 10px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    padding: 36px;
    z-index: 99;
    > div {
      text-align: center;
    }
    .header {
      .warning-icon {
        color: #ff5e5e;
        background: #ffe7ea;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        padding: 5px;
      }
    }
    .content {
      line-height: 1.6;
      margin-bottom: 12px;
      span {
        display: block;
        font-size: 16px;
        :first-of-type {
          font-weight: 600;
        }
      }
    }
    .btns {
      button {
        width: 60px;
        height: 30px;
        background: #fff;
        border: 1px solid #bbb;
        border-radius: 3px;
        line-height: 1;
        cursor: pointer;
        :first-of-type {
          background: #176b87;
          color: #fff;
          border: 0;
          margin-right: 10px;
        }
      }
    }
  }
`;

export const FindPasswordModalDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  .dim {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 99;
    backdrop-filter: blur(2px);
  }
  .content-wrap {
    position: absolute;
    width: 23%;
    height: 27%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    background: #fff;
    border-radius: 10px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    padding: 40px 20px;
    z-index: 99;
    .close-btn {
      position: absolute;
      top: 10px;
      right: 15px;
      font-size: 21px;
      color: #444;
      cursor: pointer;
    }
    > div {
      text-align: center;
    }
    .header {
      margin-bottom: 10px;
      h3 {
        font-size: 21px;
        margin-bottom: 5px;
      }
      > span {
        font-size: 15px;
      }
    }
    .content {
      margin-bottom: 10px;
      input {
        width: 80%;
        height: 36px;
        border: 1px solid #ccc;
        font-size: 15px;
        padding-left: 10px;
        border-radius: 3px;
      }
    }
    .btns {
      button {
        width: 150px;
        height: 30px;
        background: #fff;
        border: 1px solid #bbb;
        border-radius: 3px;
        line-height: 1;
        font-size: 14px;
        cursor: pointer;
        :first-of-type {
          background: #176b87;
          color: #fff;
          border: 0;
          margin-right: 10px;
        }
      }
    }
  }
`;

export const RecordConfirmModalDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  .dim {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 99;
    backdrop-filter: blur(2px);
  }
  .content-wrap {
    position: absolute;
    width: 22%;
    height: 27vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    background: #fff;
    border-radius: 10px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    padding: 30px;
    z-index: 99;
    > div {
      text-align: center;
    }
    .header {
      .title {
        display: block;
        font-size: 20px;
        font-weight: 700;
        .warning-icon {
          color: #ff5e5e;
          background: #ffe7ea;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          padding: 5px;
          display: block;
          margin: 0 auto 10px;
        }
      }
      .description {
        font-size: 14px;
      }
    }
    .content {
      font-size: 16px;
      margin-bottom: 10px;
      label {
        font-weight: 600;
        :first-of-type {
          margin-right: 15px;
        }
        select {
          width: 100px;
          height: 30px;
          margin-left: 10px;
          font-size: 15px;
          border: 1px solid #ccc;
          border-radius: 2px;
          text-align: center;
        }
        #test-type {
          width: 110px;
        }
      }
    }
    .btns {
      button {
        width: 60px;
        height: 30px;
        background: #fff;
        border: 1px solid #bbb;
        border-radius: 3px;
        line-height: 1;
        cursor: pointer;
        :first-of-type {
          background: #176b87;
          color: #fff;
          border: 0;
          margin-right: 10px;
        }
      }
    }
  }
`;
