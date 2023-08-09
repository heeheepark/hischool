import styled from "@emotion/styled";
import userImg from "../../assets/gangdongwon.jpeg";

const SideMenuWrap = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(0, 28, 48, 1) 0%,
    rgba(23, 107, 135, 1) 50%
  );
  position: relative;
  height: 100vh;
  .user-info-wrap {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    height: 36vh;
    color: #fff;
    padding: 20px 30px;
    .main-logo {
      width: 100%;
      height: 100%;
      text-align: center;
      font-size: 24px;
      font-weight: 900;
      height: 36px;
      cursor: pointer;
      /* line-height: 2; */
      display: flex;
      justify-content: center;
      align-items: center;
      /* img {
        width: 30px;
        height: 30px;
        margin-bottom: 10px;
      } */
      span {
        /* margin-left: 10px; */
      }
    }
    .user-img {
      border-radius: 50%;
      border: 3px solid #fff;
      overflow: hidden;
      width: 160px;
      height: 160px;
      cursor: pointer;
      span {
        display: block;
        width: 100%;
        height: 100%;
        font-size: 0;
        background: url(${userImg}) no-repeat center;
        background-size: cover;
        background-position: 0 0;
      }
    }
    p {
      text-align: center;
      font-size: 18px;
      line-height: 1.5;
      .user-icon {
        font-size: 18px;
        margin-right: 5px;
      }
      ins {
        cursor: pointer;
        .user-name {
        }
        .user-email {
        }
      }
    }
    button {
      position: absolute;
      right: 10px;
      bottom: 10px;
      border: 0;
      background: 0;
      color: #fff;
    }
  }
  .gnb-wrap {
    height: 64vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    .gnb {
      padding: 20px;
      ul {
        .nav-link {
          li {
            :hover {
              background: #4682a9;
              border-radius: 5px;
            }
            position: relative;
            height: 45px;
            background: 0;
            font-size: 20px;
            text-align: start;
            line-height: 45px;
            color: #fff;
            padding-left: 20px;
            margin-bottom: 10px;
            cursor: pointer;
            .icon {
              margin-right: 20px;
            }
            > span {
            }
            .arrow {
              position: absolute;
              right: 20px;
              top: calc(50% - 9px);
              font-size: 15px;
            }
          }
        }
        .nav-link-active {
          li {
            position: relative;
            height: 45px;
            background: 0;
            font-size: 20px;
            text-align: start;
            line-height: 45px;
            background: #fff;
            color: rgb(23, 107, 150);
            border-radius: 5px;
            padding-left: 20px;
            margin-bottom: 10px;
            cursor: pointer;
            .icon {
              margin-right: 20px;
            }
            > span {
            }
            .arrow {
              position: absolute;
              right: 20px;
              top: calc(50% - 9px);
              font-size: 15px;
            }
          }
        }
        .disabled {
          li {
            cursor: default;
            :hover {
              background: none;
            }
          }
        }
      }
    }
    .footer {
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .btn-logout {
        font-size: 18px;
        display: inline-block;
        border: 0;
        background: 0;
        color: #fff;
        cursor: pointer;
        :not(:last-of-type) {
          margin-right: 10px;
        }
        :nth-of-type(2) {
          font-size: 20px;
        }
      }
    }
  }
`;

export { SideMenuWrap };
