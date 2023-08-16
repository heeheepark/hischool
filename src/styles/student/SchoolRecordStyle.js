import styled from "@emotion/styled";

const SchoolRecordDiv = styled.div`
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  padding: 20px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  h3 {
    font-size: 30px;
    margin-bottom: 15px;
  }
`;

const ChartWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 40px;
  .err-message {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .chart {
    position: relative;
    width: 100%;
    height: 30vh;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  }
  .record-text {
    background: #fff;
    border-radius: 5px;
    height: 30vh;
    width: 50%;
    padding: 25px 40px;
    box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
    text-align: center;
    > p {
      font-size: 24px;
      margin-bottom: 15px;
      span {
        margin-right: 6px;
        :last-of-type {
          font-weight: 600;
        }
      }
      .user-name {
        margin-right: 0;
        font-size: 28px;
        font-weight: 600;
        text-decoration: underline;
      }
    }
    > div {
      display: flex;
      justify-content: space-between;
      text-align: center;
      .high-record-text {
        width: 100%;
        text-align: center;
        border-right: 1px solid #efefef;
        padding-right: 10px;
        > span {
          display: block;
          font-size: 28px;
          font-weight: 700;
          color: #176b87;
          margin-bottom: 6px;
        }
        > div {
          p {
            font-size: 25px;
            color: #64ccc5;
            font-weight: 700;
            span {
              margin-right: 2px;
              &.subject-title {
                margin-right: 5px;
              }
              :last-of-type {
                font-size: 20px;
                color: #000;
                font-weight: 400;
              }
            }
          }
        }
      }
      .current-record-text {
        width: 100%;
        text-align: center;
        > span {
          display: block;
          font-size: 27px;
          font-weight: 700;
          color: #176b87;
          margin-bottom: 6px;
        }
        > div {
          p {
            font-size: 25px;
            color: #64ccc5;
            font-weight: 700;
            span {
              margin-right: 2px;
              &.subject-title {
                margin-right: 5px;
              }
              :last-of-type {
                font-size: 20px;
                color: #000;
                font-weight: 400;
              }
            }
          }
        }
      }
    }
  }
`;

const RecordTableWrap = styled.div`
  .title {
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin-bottom: 10px;
    h4 {
      font-size: 24px;
      font-weight: 600;
    }
  }
  .record-table {
    height: 42vh;
  }
`;

const SchoolRecordTableDiv = styled.div`
  position: relative;
  width: 100%;
  height: 97%;
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
    grid-template-columns: repeat(9, 1fr);
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
    grid-template-rows: repeat(13, 1fr);
    .err-message {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    > li {
      border-bottom: 1px solid #ccc;
      > ul {
        display: grid;
        grid-template-columns: repeat(9, 1fr);
        > li {
          :not(:last-of-type) {
            border-right: 1px solid #ccc;
          }
        }
      }
    }
  }
`;

export { SchoolRecordDiv, ChartWrap, RecordTableWrap, SchoolRecordTableDiv };
