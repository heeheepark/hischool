import React from "react";
import MyPage from "../components/MyPage";
import { MypageDiv } from "../styles/MyPageStyle";

const Mypage = () => {
  return (
    <MypageDiv>
      <h3>회원 정보 수정</h3>
      <MyPage />
    </MypageDiv>
  );
};

export default Mypage;
