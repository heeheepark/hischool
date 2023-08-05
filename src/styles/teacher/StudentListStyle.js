import styled from "@emotion/styled";

export const StudentListWrap = styled.div`
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  padding: 15px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  font-size: 20px;
`;
export const StudentListTitle = styled.div`
  display: flex;
  /* justify-content: space-between; */
  gap: 20px;
  align-items: center;
  padding: 15px 0 15px 0;
  h3 {
    font-size: 30px;
  }
  button {
    width: 120px;
    height: 30px;
    font-size: 17px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background: #64ccc5;
    color: #fff;
  }
`;

export const TimeTableDiv = styled.div`
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
        grid-template-columns: 0.5fr repeat(3, 1fr) 1.8fr 0.4fr;
        > li {
          line-height: 2;
          :not(:last-of-type) {
            border-right: 1px solid #ccc;
          }
          > button {
            width: 60px;
            height: 30px;
            font-size: 17px;
            cursor: pointer;
            border: none;
            border-radius: 5px;
            background: #176b87;
            color: #fff;
          }
        }
      }
    }
  }
`;
