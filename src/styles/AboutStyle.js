import styled from "@emotion/styled";

export const AboutDiv = styled.div`
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  padding: 30px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-flow: column nowrap;
  gap: 50px;
  h3 {
    color: #176b87;
    font-size: 27px;
    margin-bottom: 20px;
  }
  .service-info-wrap {
    width: 100%;
    p {
      font-size: 18px;
      line-height: 1.7;
      margin-bottom: 18px;
      .info-message {
        display: inline-block;
        margin-top: 18px;
        font-size: 15px;
      }
    }
  }
  .developer-wrap {
    h4 {
      font-size: 24px;
      margin-bottom: 20px;
    }
    > div {
      :first-of-type {
        margin-bottom: 30px;
        > p {
          font-size: 18px;
          > span {
            :not(:last-of-type) {
              margin-right: 5px;
            }
          }
        }
      }
      :not(:first-of-type) {
        display: flex;
        justify-content: space-between;
      }
      :nth-of-type(2) {
        margin-bottom: 50px;
      }
      > div {
        width: 100%;
        .member-detail-wrap {
          display: flex;
          align-items: center;
          > img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: gray;
          }
          > div {
            margin-left: 10px;
            > div {
              .member-name {
                display: inline-block;
                font-size: 18px;
                font-weight: 600;
                margin-right: 10px;
                margin-bottom: 5px;
              }
              .icons {
                display: inline-block;
              }
            }
            span {
              display: block;
              font-size: 15px;
            }
          }
        }
      }
    }
  }
`;
