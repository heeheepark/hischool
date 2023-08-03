import React, { useEffect, useState } from "react";
import {
  ISRButton,
  ISRButtonWrapper,
  ISRHeader,
  ISRTitle,
} from "../../styles/teacher/InputSchoolRecord";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFloppyDisk,
  faPlusCircle,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import TSubJectMock from "../../components/teacher/TSubjectMock";

const InputMockRecord = () => {
  const [dropMonth, setDropMonth] = useState(""); // 학기
  const [studentsData, setStudentsData] = useState([]); // 학생 데이터 배열
  const [lastSavedData, setLastSavedData] = useState([]);
  // 최초 학생의 데이터를 셋팅하여야 함.
  useEffect(() => {
    const interimData = [{}];
    //{subject: '인문과학', semester: '', test: ''}
    setStudentsData(interimData);
    setLastSavedData(interimData);
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
  // 학기 항목이 선택되었을 때 처리하는 함수
  const handleMonth = event => {
    setDropMonth(event.target.value);
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
    const newStudent = {
      grade: 0,
      score: 0,
      percentile: "0",
      month: dropMonth,
      subSubject: null,
      subject: null,
    };
    setStudentsData(data => [...data, newStudent]);
    // lastSavedData에도 빈 객체를 추가하여 배열 길이를 유지
    setLastSavedData(data => [...data, newStudent]);
  };
  const subjectData = [
    {
      mainsubject: "국어",
      data: [
        {
          subsubject: "언어와 매체",
        },
        {
          subsubject: "영어",
        },
      ],
    },
    {
      mainsubject: "수학",
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
  return (
    <div>
      <ISRHeader>
        <h1>2023 모의 고사 성적 입력표(학생이름)</h1>
        {/* 드롭다운 메뉴 1 */}
        <select value={dropMonth} onChange={handleMonth}>
          <option value="">-- 선택 --</option>
          <option value="1월">1월</option>
          <option value="2월">2월</option>
          <option value="3월">3월</option>
          <option value="4월">4월</option>
          <option value="5월">5월</option>
          <option value="6월">6월</option>
          <option value="7월">7월</option>
          <option value="8월">8월</option>
          <option value="9월">9월</option>
          <option value="10월">10월</option>
          <option value="11월">11월</option>
          <option value="12월">12월</option>
        </select>
      </ISRHeader>
      <ISRButton>
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
        <strong>백분위</strong>
      </ISRTitle>
      <div>
        {studentsData.map((item, index) => (
          <TSubJectMock
            key={index}
            id={index}
            subjectData={subjectData}
            dropMonth={dropMonth}
            studentsData={studentsData[index]}
            setStudentsData={setStudentsData}
            updateLastSavedData={updateLastSavedData}
          />
        ))}
      </div>
      <ISRButtonWrapper>
        <button onClick={handleAddButtonClick}>
          항목추가
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>
      </ISRButtonWrapper>
    </div>
  );
};

export default InputMockRecord;
