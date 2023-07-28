import styled from "@emotion/styled";

const StudentHomeDiv = styled.div`
  width: 100%;
  padding: 20px;
  h3 {
    font-size: 30px;
    font-family: "yg-jalnan";
    margin-bottom: 10px;
    color: #333;
  }
  .record {
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
    .record-wrap {
      width: 100%;
      display: flex;
      justify-content: space-between;
      > div {
        width: 100%;
        margin-right: 20px;
        :nth-of-type(2) {
          margin: 0;
        }
      }
    }
  }
  .student-home-bottom {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .time-table {
      width: 100%;
      > div {
        margin-right: 10px;
      }
    }
    .food-menu {
      width: 100%;
      > h3 {
        margin-left: 10px;
      }
      > div {
        margin-left: 10px;
      }
    }
  }
`;

const SchoolRecordDiv = styled.div`
  .chart {
    width: 100%;
    height: 330px;
    background: #fff;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  }
  .record-text {
    width: 100%;
    font-size: 25px;
    text-align: center;
    h4 {
      font-size: 24px;
    }
    .exam-title-wrap {
      > span {
        margin-right: 10px;
      }
      .exam-title {
        font-family: "yg-jalnan";
        font-size: 27px;
        color: #176b87;
        margin: 3px;
      }
    }
    .subject-grade {
      display: flex;
      justify-content: center;
      p {
        :not(:last-of-type) {
          margin-right: 20px;
        }
        > span.subject-title {
          margin-right: 10px;
        }
        .korean {
          color: #001c30;
        }
        .math {
          color: #001c30;
        }
        .english {
          color: #001c30;
        }
        .k-history {
          color: #001c30;
        }
        > span.grade-num {
          font-family: "yg-jalnan";
          font-size: 33px;
          font-weight: 900;
          margin-right: 3px;
          color: #64ccc5;
          text-decoration: underline;
        }
      }
    }
  }
`;

const TimeTableDiv = styled.div`
  font-size: 20px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  > ul {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8, 42px);
    > li:nth-of-type(6) {
      background: #eee;
      > ul {
        display: grid;
        grid-template-columns: 1fr 5fr;
        > li {
        }
      }
    }
    > li {
      line-height: 42px;
      :first-of-type {
        background: #176b87;
        color: #fff;
      }
      :not(:first-of-type) {
        border-top: 1px solid #ccc;
      }
      > ul {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        > li {
          :first-of-type {
            background: #176b87;
            color: #fff;
            /* border-bottom: 1px solid #ccc; */
          }
          :not(:last-of-type) {
            border-right: 1px solid #ccc;
          }
        }
      }
      > ul.class {
        > li {
          :first-of-type {
            background: #176b87;
          }
        }
      }
    }
  }
`;

const WeekFoodMenuDiv = styled.div`
  font-size: 20px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  > ul {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 42px 336px;
    > li {
      :first-of-type {
        background: #176b87;
        color: #fff;
        line-height: 42px;
      }
      :not(:last-of-type) {
        border-bottom: 1px solid #ccc;
      }
      > ul {
        height: 100%;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        li {
          :not(:last-of-type) {
            border-right: 1px solid #ccc;
          }
        }
        > li.menu {
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          align-items: center;
          span.menu-type {
            font-size: 15px;
            display: block;
            background: #64ccc5;
            color: #fff;
            padding: 0 5px;
            border-radius: 3px;
            margin-bottom: 5px;
          }
          > p {
            display: block;
            font-size: 18px;
            > span {
              display: block;
            }
          }
          :not(:last-of-type) {
            border-right: 1px solid #ccc;
          }
        }
      }
    }
  }
`;

export { StudentHomeDiv, SchoolRecordDiv, TimeTableDiv, WeekFoodMenuDiv };
