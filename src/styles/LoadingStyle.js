import styled from "@emotion/styled";

export const LoadingWrap = styled.div`
  position: absolute;
  width: calc(100vw - 300px);
  height: calc(100vh - 100px);
  background: #fff;
  z-index: 9;
  > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .spinner {
      display: block !important;
      top: 50% !important;
      left: 50% !important;
      transform: translate(-30%, -50%) !important;
      width: 20px !important;
      height: 20px !important;
    }
    .text-area {
      text-align: center;
      margin-top: 30px;
      span {
        display: block;
        font-size: 14px;
        color: #555;
        line-height: 1.6;
      }
    }
  }
`;
