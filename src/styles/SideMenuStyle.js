import styled from "@emotion/styled";
import userImg from "../assets/gangdongwon.jpeg";

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
      font-size: 24px;
      font-weight: 900;
      height: 30px;
      cursor: pointer;
    }
    .user-img {
      border-radius: 50%;
      border: 3px solid #fff;
      overflow: hidden;
      width: 160px;
      height: 160px;
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
        li {
          position: relative;
          height: 45px;
          background: 0;
          font-size: 20px;
          text-align: start;
          line-height: 45px;
          color: #fff;
          padding-left: 20px;
          cursor: pointer;
          :not(:last-of-type) {
            margin-bottom: 10px;
          }
          .icon {
            margin-right: 20px;
          }
          > span {
            color: #fff;
            /* display: block; */
          }
          .arrow {
            position: absolute;
            right: 20px;
            top: calc(50% - 9px);
            font-size: 15px;
          }
        }
        li.active {
          background: #fff;
          color: rgb(23, 107, 150);
          border-radius: 5px;
        }
      }
    }
    .footer {
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      div {
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
