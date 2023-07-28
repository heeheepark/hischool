import React, { useState } from "react";
import {
  ISRButton,
  ISRHeader,
  ISRTitle,
} from "../../styles/teacher/InputSchoolRecord";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import TSubJect from "../../components/teacher/TSubJect";

const InputSchoolRecord = () => {
  const [dropSemester, setDropSemester] = useState("");
  const [dropTest, setDropTest] = useState("");
  const [isSemesterAndTestSelected, setIsSemesterAndTestSelected] =
    useState(false);
  const [studentsData, setStudentsData] = useState([]);
  const subjectData = [
    // 과목 데이터
    {
      mainsubject: "인문과학",
      data: [
        {
          subsubject: "한국사",
        },
        {
          subsubject: "영어",
        },
      ],
    },
    {
      mainsubject: "자연과학",
      data: [
        {
          subsubject: "수학",
        },
        {
          subsubject: "물리학",
        },
      ],
    },
  ];

  const schoolClassData = [
    // 학급 데이터
    {
      class: "2-5",
      data: [
        {
          totalclass: "25",
        },
      ],
    },
    {
      school: "함양",
      data: [
        {
          totalschool: "150",
        },
      ],
    },
  ];

  const handleSemester = event => {
    setDropSemester(event.target.value);
  };

  const handleDropTest = event => {
    setDropTest(event.target.value);
  };

  const handleSaveData = studentData => {
    // TSubJect 컴포넌트에서 저장 버튼을 누를 때 호출되는 함수
    // 입력된 값을 저장하는 로직을 추가하세요.
    // 예를 들어, 학생 데이터를 배열로 저장하는 경우:
    setStudentsData(prevStudentsData => [...prevStudentsData, studentData]);
  };

  const handleSubjectInfoBtnClick = () => {
    if (dropSemester !== "" && dropTest !== "") {
      setIsSemesterAndTestSelected(true);
    } else {
      setIsSemesterAndTestSelected(false);
    }
  };

  return (
    <div>
      <ISRHeader>
        <h1>2023 내신 고사 성적 입력표</h1>
        <select value={dropSemester} onChange={handleSemester}>
          <option value="">-- 선택 --</option>
          <option value="1학기">1학기</option>
          <option value="2학기">2학기</option>
        </select>
        <select value={dropTest} onChange={handleDropTest}>
          <option value="">-- 선택 --</option>
          <option value="중간고사">중간고사</option>
          <option value="기말고사">기말고사</option>
        </select>
      </ISRHeader>
      <ISRButton>
        <button onClick={() => setIsSemesterAndTestSelected(true)}>
          저장
          <FontAwesomeIcon icon={faFloppyDisk} />
        </button>
        <button>
          취소
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </ISRButton>
      <ISRTitle>
        <strong>과목 계열</strong>
        <strong>세부 과목</strong>
        <strong>점수</strong>
        <strong>등급</strong>
        <strong>반 석차</strong>
        <strong>전교 석차</strong>
        <strong>수정/삭제</strong>
      </ISRTitle>
      {isSemesterAndTestSelected && (
        <div>
          <TSubJect
            subjectData={subjectData}
            schoolClassData={schoolClassData}
            dropSemester={dropSemester}
            dropTest={dropTest}
            studentsData={studentsData} // 학생 데이터를 TSubJect 컴포넌트에 전달합니다.
            setStudentsData={setStudentsData} // 학생 데이터를 업데이트하는 함수를 TSubJect 컴포넌트에 전달합니다.
            handleSaveData={handleSaveData} // TSubJect 컴포넌트에서 저장 버튼을 누를 때 호출되는 함수를 전달합니다.
          />
        </div>
      )}
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