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
  ISBoard,
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

  const handleMonth = e => {
    setDropMonth(e.target.value);
    studentsData.map(item => (item.mon = parseInt(e.target.value)));
  };

  const handleSaveButtonClick = () => {
    if (!dropMonth) {
      alert("월을 선택하세요.");
      return;
    }
    const isSubSubjectNotSelected = studentsData.some(
      item => item.subjectid === 0,
    );
    if (isSubSubjectNotSelected) {
      alert("세부 과목을 선택하세요.");
      return;
    }
    const isRatingNot = studentsData.some(item => item.rating === 0);
    if (isRatingNot) {
      alert("등급을 입력하세요.");
      return;
    }
    const isPercentNot = studentsData.some(item => item.percent === 0);
    if (isPercentNot) {
      alert("퍼센트를 입력하세요.");
      return;
    }

    const goData = studentsData?.map(item => {
      const postDataList = {
        userid: item.userid,
        subjectid: item.subjectid,
        mon: item.mon,
        standardscore: item.standardscore,
        rating: item.rating,
        percent: item.percent,
      };
      return postDataList;
    });
    postMockData(goData);
    navigate("/teacher/record", { state: state });
  };

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
      <ISBoard>
        {studentsData.map((item, index) => {
          return (
            <TSubJectMock
              key={item.id}
              id={item.id}
              dropMonth={dropMonth}
              studentsData={studentsData}
              setStudentsData={setStudentsData}
            />
          );
        })}
      </ISBoard>
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
