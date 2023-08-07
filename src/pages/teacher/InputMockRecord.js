import React, { useEffect, useState } from "react";
import {
  IMRTitle,
  ISRButton,
  ISRButtonWrapper,
  ISRHeader,
  ISRTitle,
  InputMockRecordWrap,
} from "../../styles/teacher/InputSchoolRecordStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFloppyDisk,
  faPlusCircle,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import TSubJectMock from "../../components/teacher/TSubjectMock";
import {
  getMockMainSubData,
  getMockSubData,
} from "../../api/teacher/inputMockRecordAxios";
import { postMockData } from "../../api/teacher/inputMockRecordAxios";

const InputMockRecord = () => {
  const [dropMonth, setDropMonth] = useState(""); 
  const [studentsData, setStudentsData] = useState([]);
  const [lastSavedData, setLastSavedData] = useState([]);
  const [subjectData, setSubjectData] = useState([]);
  useEffect(() => {
    const interimData = [{}];
    setStudentsData(interimData);
    setLastSavedData(interimData);
  }, []);

  // 새로운 데이터를 전달하는 함수
  const updateLastSavedData = (_id, newData) => {
    const updateData = lastSavedData.map((item, idx) => {
      if (idx === _id) {
        item = newData;
      }
      return item;
    });
    setLastSavedData(updateData);
  };
  // 월 항목이 선택되었을 때 처리하는 함수
  const handleMonth = event => {
    setDropMonth(event.target.value);
  };
  // "저장" 버튼을 클릭할 때 학생 데이터를 저장하고 서버로 전송하는 함수
  const handleSaveButtonClick = () => {
    if (lastSavedData) {
      const dataToSend = lastSavedData.map(item => ({
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
    const newStudent = {
      rating: 0,
      standardscore: 0,
      percent: "0",
      mon: dropMonth,
      subSubject: null,
      subject: null,
    };
    setStudentsData(data => [...data, newStudent]);
    setLastSavedData(data => [...data, newStudent]);
  };
  useEffect(() => {
    async function fetchData() {
      try {
        // 주요과목 데이터 가져오기
        const mainSubData = await getMockMainSubData();
        // 하위과목 데이터 가져오기
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
    <InputMockRecordWrap>
      <ISRHeader>
        <h3>2023 모의 고사 성적 입력(학생이름)</h3>
        <select value={dropMonth} onChange={handleMonth}>
          <option value="">월 선택</option>
          <option value="3월">3월</option>
          <option value="6월">6월</option>
          <option value="9월">9월</option>
        </select>
      </ISRHeader>
      <ISRButton>
        <button onClick={handleSaveButtonClick}>저장</button>
        <button>취소</button>
      </ISRButton>
      <IMRTitle>
        <p>과목 계열</p>
        <p>세부 과목</p>
        <strong>표준 점수</strong>
        <strong>등급</strong>
        <strong>백분위</strong>
      </IMRTitle>
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
          항목 추가
          <FontAwesomeIcon icon={faPlusCircle} className="icon" />
        </button>
      </ISRButtonWrapper>
    </InputMockRecordWrap>
  );
};

export default InputMockRecord;
