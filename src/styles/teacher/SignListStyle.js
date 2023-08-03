import styled from "@emotion/styled";

const StudentListWrap = styled.div`
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  padding: 15px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  font-size: 20px;
`;
const StudentListTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0 10px 0;
  h3 {
    font-size: 35px;
    padding-left: 20px;
  }
  .ListButtons {
    display: flex;

    margin-right: 20px;
    gap: 5px;
    button {
      width: 2.5vw;
      height: 30px;
      line-height: 1;
      background: #fff;
      border: 1px solid #bbb;
      border-radius: 3px;
      cursor: pointer;
    }
  }
`;
const TimeTableDiv = styled.div`
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  > ul {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(17, 42px);
    > li {
      line-height: 42px;
      border-top: 1px solid #ccc;
      :first-of-type {
        background: #176b87;
        color: #fff;
        border-top: 0;
      }
      :last-of-type {
        border-bottom: 1px solid #ccc;
      }
      > ul {
        height: 100%;
        display: grid;
        grid-template-columns: 0.5fr repeat(3, 1fr) 1.8fr 0.2fr;
        > li {
          line-height: 2;
          :not(:last-of-type) {
            border-right: 1px solid #ccc;
          }
        }
      }
    }
  }
`;

export { StudentListWrap, StudentListTitle, TimeTableDiv };
