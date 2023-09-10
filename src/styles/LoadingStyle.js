import styled from "@emotion/styled";

export const LoadingWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 99;
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

export const MiniLoadingWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 99;
  > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    .text-area {
      text-align: center;
      margin-top: 10px;
      span {
        display: block;
        font-size: 12px;
        color: #555;
        line-height: 1.6;
      }
    }
  }
`;
