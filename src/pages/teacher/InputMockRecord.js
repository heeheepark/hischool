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
import { getMockMainSubData, getMockSubData } from "../../api/teacherAxios";
import { postMockData } from "../../api/teacher/teacher";

const InputMockRecord = () => {
  const [dropMonth, setDropMonth] = useState(""); // 학기
  const [studentsData, setStudentsData] = useState([]); // 학생 데이터 배열
  const [lastSavedData, setLastSavedData] = useState([]);
  const [subjectData, setSubjectData] = useState([]);
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
  // "저장" 버튼을 클릭할 때 학생 데이터를 저장하고 서버로 전송하는 함수
  const handleSaveButtonClick = () => {
    if (lastSavedData) {
      // 서버에 전송할 데이터 형식으로 가공
      const dataToSend = lastSavedData.map(item => ({
        userid: 40, // 나중에 실제 사용자 ID를 받아서 설정해야 합니다.
        subjectid: parseInt(item.subjectid) || 0,
        mon: parseInt(item.mon) || 0,
        standardscore: parseInt(item.standardscore) || 0,
        rating: parseInt(item.rating) || 0,
        percent: parseInt(item.percent) || 0,
      }));
      postMockData(dataToSend);
      console.log(dataToSend);
    }
  };
  // 항목 추가 버튼을 누를 때 호출되는 함수
  const handleAddButtonClick = () => {
    // 새로운 빈 객체를 추가하여 학생 데이터 배열을 업데이트
    const newStudent = {
      rating: 0,
      standardscore: 0,
      percent: "0",
      mon: dropMonth,
      subSubject: null,
      subject: null,
    };
    setStudentsData(data => [...data, newStudent]);
    // lastSavedData에도 빈 객체를 추가하여 배열 길이를 유지
    setLastSavedData(data => [...data, newStudent]);
  };
  useEffect(() => {
    async function fetchData() {
      try {
        // 주요과목 데이터 가져오기
        const mainSubData = await getMockMainSubData();

        // 하위과목 데이터 가져오기
        // 주요과목 데이터를 기반으로 하위과목 데이터를 가져오도록 수정
        const newSubjectData = await Promise.all(
          mainSubData.map(async mainSubject => {
            const subData = await getMockSubData(mainSubject.categoryid);
            return {
              mainsubject: mainSubject.nm,
              data: subData.map(subSubject => ({
                subsubject: subSubject.nm,
                subjectid: subSubject.subjectid,
              })),
            };
          }),
        );

        // subjectData 상태 업데이트
        setSubjectData(newSubjectData);
      } catch (err) {
        console.log(err);
        setSubjectData([]);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <ISRHeader>
        <h1>2023 모의 고사 성적 입력표(학생이름)</h1>
        {/* 드롭다운 메뉴 1 */}
        <select value={dropMonth} onChange={handleMonth}>
          <option value="">-- 선택 --</option>
          <option value="3월">3월</option>
          <option value="6월">6월</option>
          <option value="9월">9월</option>
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
