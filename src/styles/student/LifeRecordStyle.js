import styled from "@emotion/styled";

export const LifeRecordDiv = styled.div`
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  padding: 20px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  h3 {
    font-size: 30px;
    margin-bottom: 15px;
  }
  .tabs-wrap {
    display: flex;
    font-size: 18px;
    font-weight: 500;
    padding-left: 20px;
    > div {
      width: 100px;
      height: 40px;
      color: #fff;
      line-height: 40px;
      text-align: center;
      background: #4682a9;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      cursor: pointer;
      :not(:last-of-type) {
        margin-right: 5px;
      }
    }
    .active {
      background: #e5e5e5;
      color: #176b87;
      font-weight: 800;
    }
  }
`;

export const CareerStatusDiv = styled.div`
  width: 100%;
  height: 730px;
  background: #e5e5e5;
  border-radius: 5px;
  padding: 15px 20px;
  h4 {
    font-size: 21px;
  }
`;

export const HopeCareerTable = styled.div``;
