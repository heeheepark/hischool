import React, { useState } from "react";
import {
  ISRButton,
  ISRFont,
  ISRHeader,
  ISRTitle,
} from "../../styles/teacher/InputSchoolRecord";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const InputSchoolRecord = () => {
  const [dropSemester, setDropSemester] = useState(""); // 학기
  const [dropTest, setDropTest] = useState(""); // 고사
  const [dropSubject, setDropSubject] = useState("")

  // 학기 항목이 선택되었을 때 처리하는 함수
  const handleSemester = event => {
    setDropSemester(event.target.value);
  };

  // 고사 항목이 선택되었을 때 처리하는 함수
  const handledropTest = event => {
    setDropTest(event.target.value);
  };

  return (
    <div>
      <ISRHeader>
        <h1>2023 내신 고사 성적 입력표</h1>

        {/* 드롭다운 메뉴 1 */}
        <select value={dropSemester} onChange={handleSemester}>
          <option value="">-- 선택 --</option>
          <option value="1학기">1학기</option>
          <option value="2학기">2학기</option>
        </select>

        {/* 드롭다운 메뉴 2 */}
        <select value={dropTest} onChange={handledropTest}>
          <option value="">-- 선택 --</option>
          <option value="중간고사">중간 고사</option>
          <option value="기말고사">기말 고사</option>
        </select>
      </ISRHeader>
      <ISRButton>
        <Link to={`/teacher/inputsubject`}>
          <button>과목 정보 입력</button>
        </Link>
        <button>
          저장
          <FontAwesomeIcon icon={faFloppyDisk} />
        </button>
        <button>
          취소
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </ISRButton>
      <ISRTitle>
        <ISRFont>과목 계열</ISRFont>
        <ISRFont>세부 과목</ISRFont>
        <ISRFont>점수</ISRFont>
        <ISRFont>등급</ISRFont>
        <ISRFont>반 석차</ISRFont>
        <ISRFont>전교 석차</ISRFont>
      </ISRTitle>
      <div>
        <select value={dropTest} onChange={handledropTest}>
          <option value="">-- 선택 --</option>
          <option value="중간 고사">중간 고사</option>
          <option value="기말 고사">기말 고사</option>
        </select>
      </div>
      <div>
        {/* 선택한 드롭다운 메뉴에 따라 화면에 렌더링할 내용 */}
        {dropSemester && dropTest && (
          <div>
            <h2>선택 결과:</h2>
            <p>드롭다운1 선택: {dropSemester}</p>
            <p>드롭다운2 선택: {dropTest}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputSchoolRecord;
