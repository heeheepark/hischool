import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router";
import {
  getStudentsNameData,
  postMockData,
} from "../../../api/teacher/inputMockRecordAxios";
import {
  IMRTitle,
  ISRButton,
  ISRButtonWrapper,
  ISRHeader,
  InputMockRecordWrap,
} from "../../../styles/teacher/studentrecord/InputSchoolRecordStyle";
import TSubJectMock from "../../../components/teacher/subject/TSubjectMock";

const InputMockRecord = () => {
  const { state } = useLocation();
  const today = new Date();
  const currentYear = today.getFullYear();
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
  const [studentNameData, setStudentNameData] = useState([]);
  const navigate = useNavigate();

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
        <h3>{`${currentYear} 모의고사 성적 입력( ${studentNameData?.nm} )`}</h3>
        <select value={dropMonth} onChange={handleMonth} name="month">
          <option value="">월 선택</option>
          <option value={3}>3월</option>
          <option value={6}>6월</option>
          <option value={9}>9월</option>
        </select>
      </ISRHeader>
      <ISRButton>
        <button onClick={handleSaveButtonClick}>저장</button>
        <button onClick={() => navigate("/teacher/record", { state: state })}>
          취소
        </button>
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
