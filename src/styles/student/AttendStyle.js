import styled from "@emotion/styled";

export const AttendStatusDiv = styled.div`
  width: 100%;
  height: 730px;
  background: #fff;
  border-radius: 5px;
  padding: 20px 45px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  h4 {
    font-size: 21px;
    margin-bottom: 10px;
  }
`;

export const AttendTable = styled.div`
  width: 100%;
  margin-bottom: 30px;
  > ul {
    font-size: 15px;
    text-align: center;
    border: 1px solid #ccc;
    .cate-list {
      > ul {
        display: grid;
        grid-template-columns: 1fr 1fr repeat(12, 0.5fr) 2fr;
        grid-template-rows: 1fr;
        background: #176b87;
        color: #fff;
        > li {
          font-size: 16px;
          font-weight: 600;
          line-height: 40px;
          border-bottom: 1px solid #ccc;
          border-right: 1px solid #ccc;
        }
        li:nth-of-type(1) {
          line-height: 80px;
          grid-column: 1 / 2;
          grid-row: 1 / 3;
        }
        li:nth-of-type(2) {
          line-height: 80px;
          grid-column: 2 / 3;
          grid-row: 1 / 3;
        }
        li:nth-of-type(3) {
          grid-column: 3 / 6;
          grid-row: 1 / 2;
        }
        li:nth-of-type(4) {
          grid-column: 3 / 4;
          grid-row: 2 / 3;
        }
        li:nth-of-type(5) {
          grid-column: 4 / 5;
          grid-row: 2 / 3;
        }
        li:nth-of-type(6) {
          grid-column: 5 / 6;
          grid-row: 2 / 3;
        }
        li:nth-of-type(7) {
          grid-column: 6 / 9;
          grid-row: 1 / 2;
        }
        li:nth-of-type(8) {
          grid-column: 6 / 7;
          grid-row: 2 / 3;
        }
        li:nth-of-type(9) {
          grid-column: 7 / 8;
          grid-row: 2 / 3;
        }
        li:nth-of-type(10) {
          grid-column: 8 / 9;
          grid-row: 2 / 3;
        }
        li:nth-of-type(11) {
          grid-column: 9 / 12;
          grid-row: 1 / 2;
        }
        li:nth-of-type(12) {
          grid-column: 9 / 10;
          grid-row: 2 / 3;
        }
        li:nth-of-type(13) {
          grid-column: 10 / 11;
          grid-row: 2 / 3;
        }
        li:nth-of-type(14) {
          grid-column: 11 / 12;
          grid-row: 2 / 3;
        }
        li:nth-of-type(15) {
          grid-column: 12 / 15;
          grid-row: 1 / 2;
        }
        li:nth-of-type(16) {
          grid-column: 12 / 13;
          grid-row: 2 / 3;
        }
        li:nth-of-type(17) {
          grid-column: 13 / 14;
          grid-row: 2 / 3;
        }
        li:nth-of-type(18) {
          grid-column: 14 / 15;
          grid-row: 2 / 3;
        }
        li:nth-of-type(19) {
          line-height: 80px;
          grid-column: 15 / 16;
          grid-row: 1 / 3;
          border-right: 0;
        }
      }
    }
    .attend-list {
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
        grid-template-columns: 1fr 1fr repeat(12, 0.5fr) 2fr;
        grid-template-rows: 1fr;
        line-height: 50px;
        > li {
          border-bottom: 1px solid #ccc;
          border-right: 1px solid #ccc;
          :last-of-type {
            border-right: 0;
          }
        }
      }
      input {
        width: 35px;
        height: 27px;
        font-size: 15px;
        font-family: "Pretendard";
        text-align: center;
        border: 1px solid #ccc;
      }
      .etc-text {
        width: 90%;
      }
    }
  }
`;
