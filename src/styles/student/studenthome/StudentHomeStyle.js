import styled from "@emotion/styled";

export const StudentHomeDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
  h3 {
    font-size: 21px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #333;
  }
  .record {
    width: 100%;
    height: 100%;
    margin-bottom: 15px;
    border-radius: 5px;
    background: #f7f7f7;
    padding: 15px;
    box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    gap: 20px;
    > div {
      position: relative;
      width: 100%;
      .icon-arrow {
        font-size: 18px;
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
    .bottom-right-wrap {
      display: flex;
      flex-flow: column nowrap;
      gap: 15px;
      .notice-wrap {
        width: 100%;
        height: 120px;
        background: #f7f7f7;
        padding: 15px;
        box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
        display: flex;
        gap: 15px;
        .notice-wrap-title {
          width: 13%;
        }
        .notice-swiper {
          width: 100%;
          height: 100%;
          line-height: 35px;
          .mySwiper {
            height: 100%;
          }
          .notice-title-wrap {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 2% 0 0;
            font-size: 16px;
            font-weight: 600;
            height: 100%;
            > div {
              display: flex;
              align-items: center;
              gap: 5px;
              .notice-important {
                display: inline-block;
                background: #ffe7ea;
                font-size: 13px;
                font-weight: 900;
                height: 20px;
                line-height: 20px;
                color: #ff5e5e;
                border-radius: 3px;
                padding: 0 4px;
                width: 30px;
              }
              .disabled {
                background: transparent;
              }
              .notice-title {
                :hover {
                  text-decoration: underline;
                  cursor: pointer;
                }
              }
            }
            .notice-date {
              display: inline-block;
            }
          }
        }
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
            font-size: 18px;
            margin-left: 5px;
          }
        }
      }
    }
  }
`;

export const RecordDiv = styled.div`
  position: relative;
  .err-message {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .chart {
    width: 100%;
    height: 28.8vh;
    background: #fff;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  }
  .record-text {
    width: 100%;
    font-size: 25px;
    text-align: center;
    margin-top: 20px;
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
        font-size: 25px;
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

export const TimeTableDiv = styled.div`
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
    grid-template-rows: repeat(9, 3.75vh);
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

export const WeekFoodMenuDiv = styled.div`
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
    grid-template-rows: 3.75vh 15vh;
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
        grid-template-columns: repeat(7, 6vw);
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
          padding: 0 5px;
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
            width: 100%;
            display: block;
            font-size: 13px;
            > span {
              display: block;
              width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
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
