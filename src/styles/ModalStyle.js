import styled from "@emotion/styled";

export const StudentRecordModalDiv = styled.div`
  display: none;
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
    z-index: 9;
  }
  .content-wrap {
    position: absolute;
    width: 27%;
    height: 24%;
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
  /* transform: translate(-50%, -50%); */
`;
