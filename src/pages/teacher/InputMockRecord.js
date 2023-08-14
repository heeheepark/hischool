import React, { useEffect, useState } from "react";
import {
  IMRTitle,
  ISRButton,
  ISRButtonWrapper,
  ISRHeader,
  InputMockRecordWrap,
} from "../../styles/teacher/InputSchoolRecordStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import TSubJectMock from "../../components/teacher/TSubjectMock";
import { getStudentsNameData } from "../../api/teacher/inputMockRecordAxios";
import { postMockData } from "../../api/teacher/inputMockRecordAxios";
import { useLocation, useNavigate } from "react-router";

const InputMockRecord = () => {
  const { state } = useLocation();
  const [dropMonth, setDropMonth] = useState("");
  const initialRecord = {
    id: Date.now(),
    userid: state,
    subjectid: 0,
    mon: parseInt(dropMonth),
    standardscore: 0,
    rating: 0,
    percent: 0,
  };
  const [studentsData, setStudentsData] = useState([initialRecord]);
  const [lastSavedData, setLastSavedData] = useState([]);
  const [studentNameData, setStudentNameData] = useState([]);
  const navigate = useNavigate();

  // 라스트 데이터 전달
  const updateLastSavedData = (_id, newData) => {
    const updateData = lastSavedData.map((item, idx) => {
      if (idx === _id) {
        item = newData;
      }
      return item;
    });
    setLastSavedData(updateData);
  };

  // 월 선택
  const handleMonth = e => {
    setDropMonth(e.target.value);
    studentsData.map(item => (item.mon = parseInt(e.target.value)));
  };

  // "저장" > 서버전송
  const handleSaveButtonClick = () => {
    studentsData?.map(item => {
      const postDataList = {
        userid: item.userid,
        subjectid: item.subjectid,
        mon: item.mon,
        standardscore: item.standardscore,
        rating: item.rating,
        percent: item.percent,
      };
      postMockData(postDataList);
    });
    navigate(-1);
  };

  // 항목 추가 버튼
  const handleAddButtonClick = () => {
    setStudentsData([...studentsData, initialRecord]);
  };

  useEffect(() => {
    getStudentsNameData(state, setStudentNameData);
  }, []);

  return (
    <InputMockRecordWrap>
      <ISRHeader>
        <h3>{`2023 모의 고사 성적 입력( ${studentNameData?.nm} )`}</h3>
        <select value={dropMonth} onChange={handleMonth}>
          <option value="">월 선택</option>
          {Array(12)
            .fill()
            .map((item, index) => (
              <option value={index + 1} key={index}>
                {`${index + 1}월`}
              </option>
            ))}
        </select>
      </ISRHeader>
      <ISRButton>
        <button onClick={handleSaveButtonClick}>저장</button>
        <button onClick={() => navigate(-1)}>취소</button>
      </ISRButton>
      <IMRTitle>
        <p>과목 계열</p>
        <p>세부 과목</p>
        <strong>표준 점수</strong>
        <strong>등급</strong>
        <strong>백분위</strong>
      </IMRTitle>
      <div>
        {studentsData.map((item, index) => {
          return (
            <TSubJectMock
              key={index}
              id={item.id}
              dropMonth={dropMonth}
              studentsData={studentsData}
              setStudentsData={setStudentsData}
            />
          );
        })}
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
