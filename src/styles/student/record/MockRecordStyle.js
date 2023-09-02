import styled from "@emotion/styled";

export const MockRecordDiv = styled.div`
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  padding: 30px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  h3 {
    font-size: 30px;
    margin-bottom: 15px;
  }
  .record-text {
    padding: 25px 20px;
    text-align: center;
  }
`;

export const MockRecordTableDiv = styled.div`
  position: relative;
  width: 100%;
  height: 97%;
  background: #fff;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 15px;
  line-height: 2.1;
  text-align: center;
  overflow: auto;
  .category {
    position: sticky;
    top: 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 1fr;
    li {
      background: #176b87;
      color: #fff;
      :not(:last-of-type) {
        border-right: 1px solid #ccc;
      }
    }
  }
  .record-data {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(13, 1fr);
    .err-message {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    > li {
      border-bottom: 1px solid #ccc;
      > ul {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        > li {
          :not(:last-of-type) {
            border-right: 1px solid #ccc;
          }
        }
      }
    }
  }
`;
