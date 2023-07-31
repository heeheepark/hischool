import styled from "@emotion/styled";

const StudentRecordDiv = styled.div`
  background: #f7f7f7;
  padding: 15px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  h3 {
    font-size: 27px;
    margin-bottom: 20px;
  }
  .student-list-wrap {
    margin-bottom: 30px;
    form {
      margin-bottom: 5px;
      > input {
        border: 1px solid #bbb;
        border-radius: 3px;
        width: 150px;
        height: 24px;
        padding-left: 5px;
        margin-right: 5px;
      }
      button {
        width: 45px;
        height: 24px;
        background: #fff;
        border: 1px solid #bbb;
        border-radius: 3px;
        cursor: pointer;
      }
    }
  }
  .school-record-wrap {
    margin-bottom: 30px;
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
    margin-bottom: 8px;
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
          cursor: pointer;
          &.add-mock-record {
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
`;

const StudentListDiv = styled.div`
  position: relative;
  width: 100%;
  height: 10vh;
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
    grid-template-columns: 0.1fr 0.5fr 0.6fr 1fr 1fr;
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
    height: 50%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    > li {
      border-bottom: 1px solid #ccc;
      cursor: pointer;
      > ul {
        display: grid;
        grid-template-columns: 0.1fr 0.5fr 0.6fr 1fr 1fr;
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
  }
`;

const SchoolRecordListDiv = styled.div`
  position: relative;
  width: 100%;
  height: 26.7vh;
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
    grid-template-columns: 0.1fr repeat(9, 0.5fr);
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
  .record-data {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(12, 1fr);
    > li {
      border-bottom: 1px solid #ccc;
      > ul {
        display: grid;
        grid-template-columns: 0.1fr repeat(9, 0.5fr);
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

const MockRecordListDiv = styled.div`
  position: relative;
  width: 100%;
  height: 26.7vh;
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
    grid-template-columns: 0.1fr repeat(7, 0.5fr);
    grid-template-rows: 1fr;
    li {
      background: #176b87;
      color: #fff;
      :not(:last-of-type) {
        border-right: 1px solid #ccc;
      }
    }
  }
  .record-data {
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

export {
  StudentRecordDiv,
  StudentListDiv,
  SchoolRecordListDiv,
  MockRecordListDiv,
};
