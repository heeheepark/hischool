import styled from "@emotion/styled";

export const StudentRecordDiv = styled.div`
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  padding: 9px 15px 15px 15px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-flow: column;
  .student-record-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-size: 27px;
      margin-bottom: 0.5%;
    }
    button {
      border: 0;
      background: #176b87;
      color: #fff;
      width: 80px;
      height: 27px;
      border-radius: 3px;
      line-height: 27px;
      cursor: pointer;
    }
  }
  .wrap {
    height: 100%;
    display: flex;
    flex-flow: row;
    gap: 15px;
    .student-list-wrap {
      width: 15%;
      height: 100%;
      margin-top: 5px;
      form {
        margin-bottom: 12px;
        > input {
          border: 1px solid #bbb;
          border-radius: 3px;
          width: 77%;
          height: 24px;
          padding-left: 5px;
          margin-right: 5px;
        }
        button {
          width: 2vw;
          height: 24px;
          line-height: 1;
          background: #fff;
          border: 1px solid #bbb;
          border-radius: 3px;
          cursor: pointer;
        }
      }
      .student-list {
        height: 91.6%;
      }
    }
    .record-wrap {
      width: 100%;
      display: flex;
      flex-flow: column nowrap;
      .school-record-wrap {
        height: 100%;
        margin-bottom: 1.1%;
        .school-record-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          .header-left {
            display: flex;
            align-items: center;
            h4 {
              font-size: 22px;
              margin-right: 10px;
            }
          }
          .btns {
            button {
              width: 45px;
              height: 24px;
              background: #fff;
              border: 1px solid #bbb;
              border-radius: 3px;
              margin-right: 5px;
              line-height: 1;
              cursor: pointer;
              &.add-school-record {
                width: 110px;
                margin-right: 0;
                background: #64ccc5;
                color: #fff;
                border: #64cbb2;
              }
            }
          }
        }
      }
      .mock-record-wrap {
        height: 100%;
        .mock-record-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          .header-left {
            display: flex;
            align-items: center;
            h4 {
              font-size: 22px;
              margin-right: 10px;
            }
          }
          .btns {
            button {
              width: 45px;
              height: 24px;
              background: #fff;
              border: 1px solid #bbb;
              border-radius: 3px;
              margin-right: 5px;
              line-height: 1;
              cursor: pointer;
              &.add-mock-record {
                width: 8vw;
                margin-right: 0;
                background: #64ccc5;
                color: #fff;
                border: #64cbb2;
              }
            }
          }
        }
      }
    }
  }
`;

export const StudentListDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 15px;
  line-height: 2.1;
  text-align: center;
  overflow: auto;
  .category {
    position: sticky;
    top: 0;
    width: 100%;
    display: grid;
    grid-template-columns: 0.4fr 0.6fr;
    grid-template-rows: 1fr;
    li {
      input {
        cursor: pointer;
      }
      background: #176b87;
      color: #fff;
      :not(:last-of-type) {
        border-right: 1px solid #ccc;
      }
    }
  }
  .list-wrap {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: 1fr;
    > li {
      border-bottom: 1px solid #ccc;
      cursor: pointer;
      > ul {
        display: grid;
        grid-template-columns: 0.4fr 0.6fr;
        > li {
          input {
            cursor: pointer;
          }
          :not(:last-of-type) {
            border-right: 1px solid #ccc;
          }
        }
      }
    }
    li.active {
      background: #ddd;
    }
    .err-message {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 15px;
      line-height: 1.5;
    }
  }
`;

export const SchoolRecordListDiv = styled.div`
  position: relative;
  width: 100%;
  height: 34vh;
  background: #fff;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 15px;
  line-height: 2.1;
  text-align: center;
  overflow: auto;
  .err-message {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .category {
    position: sticky;
    top: 0;
    width: 100%;
    display: grid;
    grid-template-columns: 0.03fr repeat(3, 0.1fr) 0.17fr 0.2fr repeat(4, 0.1fr);
    grid-template-rows: 1fr;
    z-index: 9;
    li {
      input {
        cursor: pointer;
      }
      background: #176b87;
      color: #fff;
      :not(:last-of-type) {
        border-right: 1px solid #ccc;
      }
    }
  }
  .record-data {
    position: relative;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(12, 1fr);
    > li {
      border-bottom: 1px solid #ccc;
      > ul {
        display: grid;
        grid-template-columns: 0.03fr repeat(3, 0.1fr) 0.17fr 0.2fr repeat(
            4,
            0.1fr
          );
        > li {
          input {
            cursor: pointer;
          }
          :not(:last-of-type) {
            border-right: 1px solid #ccc;
          }
        }
      }
    }
  }
`;

export const MockRecordListDiv = styled.div`
  position: relative;
  width: 100%;
  height: 34vh;
  background: #fff;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 15px;
  line-height: 2.1;
  text-align: center;
  overflow: auto;
  .err-message {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .category {
    position: sticky;
    top: 0;
    width: 100%;
    display: grid;
    grid-template-columns: 0.1fr repeat(7, 0.5fr);
    grid-template-rows: 1fr;
    z-index: 9;
    li {
      background: #176b87;
      color: #fff;
      :not(:last-of-type) {
        border-right: 1px solid #ccc;
      }
    }
  }
  .record-data {
    position: relative;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(12, 1fr);
    > li {
      border-bottom: 1px solid #ccc;
      > ul {
        display: grid;
        grid-template-columns: 0.1fr repeat(7, 0.5fr);
        > li {
          :not(:last-of-type) {
            border-right: 1px solid #ccc;
          }
        }
      }
    }
  }
`;
