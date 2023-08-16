import styled from "@emotion/styled";

export const AboutDiv = styled.div`
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  padding: 1.5% 30px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-flow: column nowrap;
  gap: 3%;
  h3 {
    color: #176b87;
    font-size: 30px;
    margin-bottom: 1.3%;
  }
  .service-info-wrap {
    width: 100%;
    p {
      font-size: 20px;
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
        margin-bottom: 1.5%;
        > p {
          font-size: 18px;
          a {
            margin-right: 20px;
            font-weight: 600;
            > span {
              :not(:last-of-type) {
                margin-right: 10px;
              }
              > img {
                width: 30px;
                height: 30px;
              }
            }
          }
        }
      }
      :not(:first-of-type) {
        display: flex;
        justify-content: space-between;
      }
      :nth-of-type(2) {
        margin-bottom: 2%;
      }
      > div {
        width: 100%;
        .member-detail-wrap {
          display: flex;
          align-items: center;
          > img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: gray;
          }
          > div {
            margin-left: 10px;
            > div {
              .member-name {
                display: inline-block;
                font-size: 20px;
                font-weight: 600;
                margin-right: 10px;
                margin-bottom: 5px;
              }
              .icons {
                display: inline-block;
                vertical-align: top;
                a {
                  img {
                    width: 24px;
                    height: 24px;
                  }
                }
              }
            }
            span {
              display: block;
              font-size: 16px;
            }
          }
        }
      }
    }
  }
`;
