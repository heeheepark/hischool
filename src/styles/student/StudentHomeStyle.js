import styled from "@emotion/styled";

const StudentHomeDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
  h3 {
    font-size: 24px;
    /* font-family: "yg-jalnan"; */
    font-weight: 700;
    margin-bottom: 10px;
    color: #333;
  }
  .record {
    width: 100%;
    margin-bottom: 15px;
    border-radius: 5px;
    background: #f7f7f7;
    padding: 15px;
    box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    gap: 20px;
    /* line-height: ; */
    > div {
      width: 100%;
      .icon-arrow {
        font-size: 22px;
        margin-left: 5px;
      }
    }
  }
  .student-home-bottom {
    width: 100%;
    height: 100%;
    display: flex;
    gap: 15px;
    .time-table {
      width: 100%;
      height: 100%;
      background: #f7f7f7;
      padding: 15px;
      box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .food-menu {
      width: 100%;
      height: 100%;
      background: #f7f7f7;
      padding: 15px;
      box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
      .food-menu-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon-arrow {
          font-size: 22px;
          margin-left: 5px;
        }
      }
    }
  }
`;

const RecordDiv = styled.div`
  height: 100%;
  .chart {
    width: 100%;
    height: 30vh;
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
      span:last-of-type {
        font-size: 22px;
      }
      .exam-title {
        /* font-family: "yg-jalnan"; */
        font-size: 27px;
        font-weight: 900;
        color: #176b87;
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
          font-weight: 800;
          color: #64ccc5;
        }
        > span.grade-num {
          /* font-family: "yg-jalnan"; */
          display: inline-block;
          margin-bottom: 5px;
          font-size: 33px;
          font-weight: 900;
          margin-right: 3px;
          color: #64ccc5;
          vertical-align: middle;
        }
        span:last-of-type {
          font-size: 18px;
        }
      }
    }
  }
`;

const TimeTableDiv = styled.div`
  width: 100%;
  height: 100%;
  font-size: 16px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  > ul {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(9, 1fr);
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
      line-height: 4vh;
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
          }
          :not(:first-of-type) {
            font-size: 16px;
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
  width: 100%;
  height: 100%;
  font-size: 16px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  > ul {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 4fr 4fr;
    > li {
      :first-of-type {
        background: #176b87;
        color: #fff;
        line-height: 4vh;
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
            font-size: 11px;
            display: block;
            background: #64ccc5;
            color: #fff;
            padding: 0 5px;
            border-radius: 3px;
            margin-bottom: 5px;
          }
          > p {
            display: block;
            font-size: 13px;
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

export { StudentHomeDiv, RecordDiv, TimeTableDiv, WeekFoodMenuDiv };
