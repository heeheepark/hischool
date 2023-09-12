import styled from "@emotion/styled";

export const LifeRecordDiv = styled.div`
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  padding: 20px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  h3 {
    font-size: 27px;
    margin-bottom: 18px;
  }
  .life-record-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-size: 27px;
      margin-bottom: 18px;
    }
    button {
      font-size: 15px;
      border: 0;
      border-radius: 3px;
      background: #176b87;
      padding: 3px 6px;
      cursor: pointer;
      > a {
        color: #fff;
      }
    }
  }
  .category-wrap {
    display: flex;
    font-size: 18px;
    font-weight: 500;
    padding-left: 20px;
    > li {
      width: 100px;
      height: 40px;
      color: #176b87;
      line-height: 40px;
      text-align: center;
      background: #fff;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      border: 1px solid #e5e5e5;
      cursor: pointer;
      :not(:last-of-type) {
        margin-right: 5px;
      }
    }
    .active {
      background: #4682a9;
      color: #fff;
      font-weight: 600;
    }
  }
  .content-wrap {
    height: 100%;
    width: 100%;
  }
`;

export const CareerStatusDiv = styled.div`
  width: 100%;
  height: 730px;
  background: #fff;
  border-radius: 5px;
  padding: 20px 45px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  > div {
    h4 {
      font-size: 21px;
      margin-bottom: 10px;
    }
  }
  .top-wrap {
    text-align: end;
    button {
      font-size: 15px;
      border: 0;
      border-radius: 2px;
      color: #fff;
      background: #176b87;
      padding: 4px 8px;
      cursor: pointer;
    }
  }
  .mid-wrap {
    display: flex;
    gap: 30px;
    margin-bottom: 20px;
    .hope-univ-wrap {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      align-items: start;
      width: 21%;
      margin-bottom: 30px;
      h4 {
        width: 100%;
        margin-bottom: 10px;
        margin-right: 20px;
      }
      .label-nm {
        width: 100%;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 15px;
        span {
          display: inline-block;
          width: 60px;
          margin-bottom: 6px;
        }
        input {
          width: 100%;
          height: 27px;
          font-size: 16px;
          border: 1px solid #ccc;
          padding-left: 5px;
          :read-only {
            cursor: default;
          }
        }
      }
    }
    .hope-career-wrap {
      width: 100%;
    }
  }
  .st-significant {
    .detail-significant {
      display: flex;
      flex-flow: column;
      .label-nm {
        display: flex;
        align-items: center;
        gap: 30px;
        font-size: 16px;
        padding-left: 15px;
        :not(:last-of-type) {
          margin-bottom: 20px;
        }
        span {
          width: 5%;
        }
        textarea {
          font-size: 15px;
          width: 100%;
          resize: none;
          border: 1px solid #ccc;
          font-family: "Pretendard", sans-serif;
          :read-only {
            cursor: default;
          }
        }
      }
    }
  }
  .significant {
    .detail-significant {
      display: flex;
      flex-flow: column;
      .label-nm {
        display: flex;
        align-items: center;
        gap: 30px;
        font-size: 16px;
        padding-left: 15px;
        :not(:last-of-type) {
          margin-bottom: 20px;
        }
        span {
          width: 5%;
        }
        textarea {
          font-size: 15px;
          width: 100%;
          resize: none;
          border: 1px solid #ccc;
          font-family: "Pretendard", sans-serif;
          :read-only {
            background: #f9f9f9;
            color: #bbb;
            cursor: default;
          }
        }
      }
    }
  }
`;

export const HopeCareerTable = styled.div`
  width: 100%;
  margin-bottom: 30px;
  > ul {
    font-size: 15px;
    text-align: center;
    border: 1px solid #ccc;
    .cate-list {
      > ul {
        display: grid;
        grid-template-columns: 0.5fr 1fr 0.5fr 0.5fr;
        grid-template-rows: 1fr;
        background: #176b87;
        color: #fff;
        > li {
          font-size: 16px;
          font-weight: 600;
          line-height: 30px;
          border-bottom: 1px solid #ccc;
          border-right: 1px solid #ccc;
        }
        li:nth-of-type(1) {
          line-height: 60px;
          grid-column: 1 / 2;
          grid-row: 1 / 3;
        }
        li:nth-of-type(2) {
          line-height: 60px;
          grid-column: 2 / 3;
          grid-row: 1 / 3;
        }
        li:nth-of-type(3) {
          grid-column: 3 / 5;
          grid-row: 1 / 2;
          border-right: 0;
        }
        li:nth-of-type(4) {
          grid-column: 3 / 4;
          grid-row: 2 / 3;
        }
        li:nth-of-type(5) {
          grid-column: 4 / 5;
          grid-row: 2 / 3;
          border-right: 0;
        }
      }
    }
    .career-list {
      background: #fff;
      :last-of-type {
        > ul {
          > li {
            border-bottom: 0;
          }
        }
      }
      > ul {
        display: grid;
        grid-template-columns: 0.5fr 1fr 0.5fr 0.5fr;
        grid-template-rows: 1fr;
        line-height: 30px;
        > li {
          border-bottom: 1px solid #ccc;
          border-right: 1px solid #ccc;
          :last-of-type {
            border-right: 0;
          }
        }
      }
      input {
        width: 90%;
        height: 24px;
        font-size: 15px;
        font-family: "Pretendard";
        text-align: center;
        border: 1px solid #ccc;
      }
    }
  }
`;

export const RecordStatusDiv = styled.div`
  width: 100%;
  height: 730px;
  background: #fff;
  border-radius: 5px;
  padding: 20px 45px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  overflow-y: scroll;
  h4 {
    font-size: 21px;
    margin-bottom: 10px;
  }
  .record-chart {
    display: flex;
    gap: 20px;
    margin-bottom: 10px;
    .school-record-wrap {
      width: 50%;
      span {
        display: block;
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 5px;
      }
    }
    .mock-record-wrap {
      width: 50%;
      span {
        display: block;
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 5px;
      }
    }
  }
  .record-table {
    .school-record-wrap {
      margin-bottom: 20px;
    }
    .mock-record-wrap {
    }
  }
`;

export const LifeRecordTableWrap = styled.div`
  .title {
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin-bottom: 5px;
    h4 {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 0;
    }
  }
  .record-table {
    height: 28vh;
  }
`;
