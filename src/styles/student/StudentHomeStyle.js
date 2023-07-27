import styled from "@emotion/styled";

const StudentHomeDiv = styled.div`
  padding: 20px;
  h3 {
    font-size: 30px;
    font-family: "yg-jalnan";
    margin-bottom: 10px;
    color: #333;
  }
  .record-wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    > div {
      width: 100%;
      margin-right: 20px;
    }
  }
`;

const SchoolRecordDiv = styled.div`
  .record-text {
    width: 100%;
    font-size: 25px;
    text-align: center;
    h4 {
      /* font-family: "yg-jalnan"; */
      font-size: 24px;
      /* font-weight: 400; */
    }
    .exam-title-wrap {
      span:not(:last-of-type) {
        margin-right: 10px;
      }
      .exam-title {
        font-family: "yg-jalnan";
        /* font-size: 24px; */
        /* font-weight: 900; */
        color: #176b87;
        text-decoration: underline;
        text-decoration-color: #ccc;
      }
    }
    .subject-grade {
      display: flex;
      justify-content: center;
      p {
        :not(:last-of-type) {
          margin-right: 20px;
        }
        span.subject-title {
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
        span.grade-num {
          font-family: "yg-jalnan";
          font-size: 30px;
          font-weight: 900;
          margin-right: 3px;
          color: #64ccc5;
          text-decoration: underline;
          text-decoration-color: #ccc;
        }
      }
    }
  }
`;

export { StudentHomeDiv, SchoolRecordDiv };
