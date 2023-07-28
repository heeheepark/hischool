import styled from "@emotion/styled";
import schoolLogo from "../assets/hamji.png";

const MainDiv = styled.div`
  .wrap {
    display: flex;
    .main-right {
      width: 100%;
    }
  }
`;

const Header = styled.div`
  width: 100%;
  height: 60px;
  background: linear-gradient(
    to bottom,
    rgba(0, 28, 48, 1) 0%,
    rgba(23, 107, 135, 1) 530%
  );
  text-align: end;
  > div {
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 15px 50px 0 0;
    .school-logo {
      width: 30px;
      height: 30px;
      font-size: 0;
      background: url(${schoolLogo}) no-repeat center;
      background-position: 3px 1.4px;
      background-size: 24px;
      background-color: #fff;
      border-radius: 50%;
      margin-right: 10px;
    }
    span {
      font-size: 20px;
      color: #fff;
      :not(:last-of-type) {
        margin-right: 10px;
      }
    }
  }
`;

const Aside = styled.div`
  width: 300px;
  height: 100vh;
`;

const Content = styled.div`
  width: 100%;
  padding: 10px;
  height: calc(100vh - 60px);
  .content-wrap {
    background: #f7f7f7;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`;

export { MainDiv, Header, Aside, Content };
