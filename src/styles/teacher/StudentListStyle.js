import styled from "@emotion/styled";

export const StudentListWrap = styled.div`
  font-size: 20px;
`;
export const StudentListTitle = styled.div`
`;

export const TimeTableDiv = styled.div`
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
