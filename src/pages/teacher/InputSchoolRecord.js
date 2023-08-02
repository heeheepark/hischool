import React, { useEffect, useState } from "react";
import {
  ISRButton,
  ISRHeader,
  ISRTitle,
} from "../../styles/teacher/InputSchoolRecord";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFloppyDisk,
  faPlusCircle,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import TSubJect from "../../components/teacher/TSubJect";

const InputSchoolRecord = () => {
  const [dropSemester, setDropSemester] = useState(""); // 학기
  const [dropTest, setDropTest] = useState(""); // 고사
  const [isSemesterAndTestSelected, setIsSemesterAndTestSelected] =
    useState(false); // 학기와 고사가 선택되었는지 여부
  const [studentsData, setStudentsData] = useState([]); // 학생 데이터 배열
  const [lastSavedData, setLastSavedData] = useState([]);
  // 최초 학생의 데이터를 셋팅하여야 함.
  useEffect(() => {
    const 임시데이터 = [{}, {}, {}, {}, {}, {}, {}, {}];
    //{subject: '인문과학', semester: '', test: ''}
    setStudentsData(임시데이터);
    setLastSavedData(임시데이터);
  }, []);

  // 새로운 데이터를 전달하는 함수
  const updateLastSavedData = (_id, newData) => {
    const updateData = lastSavedData.map((item, idx) => {
      // 변경된 데이터 순서 번호와 같다면 데이터를 업데이트 한다.
      if (idx === _id) {
        item = newData;
      }
      return item;
    });

    setLastSavedData(updateData);
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
  // 항목 추가 버튼을 누를 때 호출되는 함수
  const handleAddButtonClick = () => {
    // 새로운 빈 객체를 추가하여 학생 데이터 배열을 업데이트
    console.log(studentsData);
    const newArr = [...studentsData];
    const newArr2 = [...lastSavedData];
    newArr.push({});
    console.log(newArr);
    setStudentsData(newArr);
    setLastSavedData(newArr2);
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
        <p>과목 계열</p>
        <p>세부 과목</p>
        <strong>점수</strong>
        <strong>등급</strong>
        <strong>반 석차</strong>
        <strong>전교 석차</strong>
      </ISRTitle>
      <div>
        {studentsData.map((item, index) => (
          <TSubJect
            key={index}
            id={index}
            subjectData={subjectData}
            schoolClassData={schoolClassData}
            isSemesterAndTestSelected={isSemesterAndTestSelected}
            dropSemester={dropSemester}
            dropTest={dropTest}
            studentsData={studentsData}
            setStudentsData={setStudentsData}
            updateLastSavedData={updateLastSavedData}
          />
        ))}
      </div>
      <div>
        <button onClick={handleAddButtonClick}>
          항목추가
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>
      </div>
    </div>
  );
};

export default InputSchoolRecord;
