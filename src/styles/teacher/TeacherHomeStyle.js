import styled from "@emotion/styled";

const TeacherHomeDiv = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  h3 {
    font-size: 30px;
    /* font-family: "yg-jalnan"; */
    margin-bottom: 10px;
    color: #333;
  }
  .teacher-home-left {
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    margin-right: 10px;
    .student-count {
      height: 100%;
      /* font-family: "yg-jalnan"; */
      .class-status {
        font-size: 30px;
        color: #176b87;
        > span {
          display: inline-block;
          margin-right: 15px;
          :last-of-type {
            color: #333;
          }
        }
        .student-count {
          /* font-family: "yg-jalnan"; */
          font-size: 45px;
          color: #64ccc5;
          text-decoration: underline;
          margin: 0 10px 0 15px;
        }
      }
      .sign-wait {
        font-size: 30px;
        > span {
          color: #176b87;
          display: inline-block;
          margin-right: 15px;
          :last-of-type {
            color: #333;
          }
        }
        .student-count {
          /* font-family: "yg-jalnan"; */
          font-size: 45px;
          color: #64ccc5;
          text-decoration: underline;
          margin: 0 10px 0 15px;
        }
      }
    }
    .time-table {
      height: 100%;
    }
  }
  .teacher-home-right {
    width: 100%;
    margin-left: 10px;
    .calendar {
      height: 100%;
    }
  }
`;

const FullCalendarDiv = styled.div`
  width: 100%;
  /* height: 200%; */
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
`;

export { TeacherHomeDiv, FullCalendarDiv };
