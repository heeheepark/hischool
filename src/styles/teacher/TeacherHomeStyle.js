import styled from "@emotion/styled";

const TeacherHomeDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 15px;
  h3 {
    font-size: 21px;
    margin-bottom: 10px;
    color: #333;
  }
  .teacher-home-left {
    display: flex;
    flex-flow: column nowrap;
    width: 100%;

    .student-count {
      display: flex;
      /* align-items: ; */
      height: 60px;
      background: #f7f7f7;
      box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
      padding: 15px;
      margin-bottom: 15px;
      h3 {
        width: 14%;
        font-size: 21px;
        border-right: 1px solid #ccc;
        margin-right: 15px;
        margin-bottom: 0;
        padding-right: 15px;
      }
      .class-status {
        width: 100%;
        height: 100%;
        font-size: 21px;
        font-weight: 600;
        color: #176b87;
        > span {
          display: inline-block;
          margin-right: 10px;
          /* :last-of-type {
            color: #333;
          } */
          &:nth-of-type(3) {
            margin-right: 0;
          }
        }
        .student-num {
          /* font-size: px; */
          font-weight: 600;
          margin-right: 0;
          color: #64ccc5;
          text-decoration: underline;
          /* margin: 0 10px 0 15px; */
        }
      }
    }
    .class-school-record {
      height: 70%;
      background: #f7f7f7;
      box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
      padding: 15px;
      margin-bottom: 15px;
    }
    .time-table {
      height: 100%;
      background: #f7f7f7;
      box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
      padding: 15px;
    }
  }
  .teacher-home-right {
    width: 100%;
    /* background: #f7f7f7;
    box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
    padding: 15px; */
    display: flex;
    flex-flow: column;
    .class-mock-record {
      height: 100%;
    }
    .calendar {
      height: 65%;
    }
  }
`;

const FullCalendarDiv = styled.div`
  width: 100%;
  background: #f7f7f7;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  .fc {
    width: 100%;
    color: #333;
    .fc-button-primary {
      background: transparent;
      border-color: transparent;
      color: #000;
      font-size: 15px;
      font-weight: 900;
    }
    .fc-header-toolbar {
      position: relative;
      justify-content: center;
      gap: 30px;
      margin-top: 2px;
      margin-bottom: 8px;
      /* margin-top: 10px; */
      .fc-toolbar-title {
        font-size: 24px;
      }
      .fc-prev-button {
        background: transparent;
        border-color: transparent;
        color: #000;
        font-size: 15px;
        font-weight: 900;
        :hover {
          color: #000 !important;
          background: transparent !important;
        }
        :focus {
          box-shadow: none !important;
          background: "none" !important;
        }
      }
      .fc-next-button {
        background: transparent;
        border-color: transparent;
        color: #000;
        font-size: 15px;
        font-weight: 900;
        :hover {
          color: #000 !important;
          background: transparent !important;
        }
        :focus {
          box-shadow: none !important;
          background: "none" !important;
        }
      }
      .fc-today-button {
        position: absolute;
        right: 0;
        bottom: -5px;
        font-size: 12px;
        font-weight: 400;
        background: #2c3e50;
        color: #fff;
        cursor: pointer;
      }
    }
    .fc-col-header {
      background: #176b87;
      height: 3vh;
      .fc-col-header-cell-cushion {
        color: #fff;
        font-size: 15px;
        font-weight: 400;
        line-height: 3vh;
      }
    }
    .fc-scrollgrid-section {
      background: #fff;
    }
    .fc-daygrid-day-top {
      .fc-daygrid-day-number {
        padding: 4px 2px 0px;
        font-size: 12px;
      }
    }
    .fc-daygrid-day-events {
      margin: 0;
      line-height: 1.5;
      font-size: 15px;
    }
    .fc-view-harness {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      overflow: hidden;
    }
    .fc-day-today {
      background: #f1f6f9;
    }
  }
`;

export { TeacherHomeDiv, FullCalendarDiv };
