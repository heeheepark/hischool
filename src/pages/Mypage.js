import React from "react";
import TeacherMyPage from "../components/teacher/TeacherMyPage";
import { MypageDiv } from "../styles/teacher/TeacherMyPageStyle";
// import StudentMypage from "../components/student/StudentMypage";

const Mypage = () => {
  return (
    <MypageDiv>
      <h3>회원 정보 수정</h3>
      <TeacherMyPage />
    </MypageDiv>
  );
};

export default Mypage;
