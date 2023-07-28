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
  const [dropSemester, setDropSemester] = useState(""); // 학기
  const [dropTest, setDropTest] = useState(""); // 고사
  const [isSemesterAndTestSelected, setIsSemesterAndTestSelected] =
    useState(false); // 학기와 고사가 선택되었는지 여부
  const [studentsData, setStudentsData] = useState([]); // 학생 데이터 배열
  const [lastSavedData, setLastSavedData] = useState(null);

  // 새로운 데이터를 전달하는 함수
  const updateLastSavedData = newData => {
    setLastSavedData(newData);
  };
  const subjectData = [
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

  // 학기 항목이 선택되었을 때 처리하는 함수
  const handleSemester = event => {
    setDropSemester(event.target.value);
  };

  // 고사 항목이 선택되었을 때 처리하는 함수
  const handleDropTest = event => {
    setDropTest(event.target.value);
  };

  // "저장" 버튼을 클릭할 때 학생 데이터를 저장하고 콘솔에 출력하는 함수
  const handleSaveButtonClick = () => {
    if (lastSavedData) {
      console.log("저장된 학생 데이터:");
      console.log(lastSavedData);
    } else {
      console.log("저장된 학생 데이터가 없습니다.");
    }
    // 저장 로직을 추가하세요 (데이터베이스에 저장하거나 다른 처리를 수행할 수 있습니다).
  };

  // "과목 정보 입력" 버튼을 클릭할 때 처리하는 함수
  const handleSubjectInfoBtnClick = () => {
    // 학기와 고사가 선택되었는지 확인하고, 선택되었을 경우 isSemesterAndTestSelected를 true로 설정합니다.
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

        {/* 드롭다운 메뉴 1 */}
        <select value={dropSemester} onChange={handleSemester}>
          <option value="">-- 선택 --</option>
          <option value="1학기">1학기</option>
          <option value="2학기">2학기</option>
        </select>

        {/* 드롭다운 메뉴 2 */}
        <select value={dropTest} onChange={handleDropTest}>
          <option value="">-- 선택 --</option>
          <option value="중간고사">중간고사</option>
          <option value="기말고사">기말고사</option>
        </select>
      </ISRHeader>
      <ISRButton>
        {/* "과목 정보 입력" 버튼 */}
        <Link to={`/teacher/inputsubject`}>
          <button>과목 정보 입력</button>
        </Link>
        <button onClick={handleSaveButtonClick}>
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
      <div>
        <TSubJect
          subjectData={subjectData}
          schoolClassData={schoolClassData}
          isSemesterAndTestSelected={isSemesterAndTestSelected}
          dropSemester={dropSemester}
          dropTest={dropTest}
          studentsData={studentsData}
          setStudentsData={setStudentsData}
          updateLastSavedData={updateLastSavedData}
        />
      </div>
    </div>
  );
};

export default InputSchoolRecord;
