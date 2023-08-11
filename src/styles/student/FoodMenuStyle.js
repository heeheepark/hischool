import styled from "@emotion/styled";

const FoodMenuDiv = styled.div`
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  padding: 15px 50px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  h3 {
    text-align: center;
    font-size: 27px;
    margin: 10px 0 15px;
  }
  .fc {
    width: 100%;
    background: #fff;
    color: #333;
    box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    .fc-col-header {
      background: #176b87;
      height: 3vh;
      .fc-col-header-cell-cushion {
        color: #fff;
        font-size: 15px;
        line-height: 3vh;
      }
    }
    .fc-daygrid-day-top {
      justify-content: center;
      font-weight: 600;
      .fc-daygrid-day-number {
        padding: 4px 2px 0px;
        font-size: 14px;
        color: #176b87;
        font-weight: 800;
      }
    }
    .fc-daygrid-day-events {
      text-align: center;
      margin: 0;
      line-height: 1.5;
      font-size: 15px;
      .menu {
        display: inline-block;
        color: #fff;
        background: #64ccc5;
        padding: 0 2px;
        border-radius: 3px;
      }
    }
    .fc-view-harness {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      overflow: hidden;
    }
    .fc-day-today {
      background: #f1f6f9;
    }
    .fc-daygrid-day-bottom {
      display: none;
    }
  }
`;

export { FoodMenuDiv };
