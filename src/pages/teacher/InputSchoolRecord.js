import React, { useEffect, useState } from "react";
import {
  ISRButton,
  ISRButtonWrapper,
  ISRHeader,
  ISRTitle,
  InputSchoolRecordWrap,
} from "../../styles/teacher/InputSchoolRecordStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TSubJectSchool from "../../components/teacher/TSubJectSchool";
import { postSchoolData } from "../../api/teacher/inputSchoolRecordAxios";
import { getStudentsNameData } from "../../api/teacher/inputMockRecordAxios";

const InputSchoolRecord = () => {
  const { state } = useLocation();
  const today = new Date();
  const currentYear = today.getFullYear();
  const [dropSemester, setDropSemester] = useState(null);
  const [dropTest, setDropTest] = useState(null);

  const initialRecord = {
    id: Date.now(),
    userid: state,
    subjectid: 0,
    semester: dropSemester,
    midfinal: dropTest,
    score: 0,
    rating: 0,
    classrank: 0,
    wholerank: 0,
  };
  const [studentsData, setStudentsData] = useState([initialRecord]);
  const [studentNameData, setStudentNameData] = useState([]);
  const navigate = useNavigate();

  // 학기 변경
  const handleSemester = e => {
    setDropSemester(e.target.value);
    studentsData.map(item => (item.semester = parseInt(e.target.value)));
  };

  // 시험유형(중간/기말) 변경
  const handleDropTest = e => {
    setDropTest(e.target.value);
    studentsData.map(item => (item.midfinal = parseInt(e.target.value)));
  };

  // "저장" > 서버전송
  const handleSaveButtonClick = () => {
    if (studentsData) {
      studentsData?.map(item => {
        const postDataList = {
          userid: item.userid,
          subjectid: item.subjectid,
          semester: item.semester,
          midfinal: item.midfinal,
          score: item.score,
          rating: item.rating,
          classrank: item.classrank,
          wholerank: item.wholerank,
        };
        postSchoolData(postDataList);
      });
      navigate(-1);
    }
  };

  // 항목 추가 버튼
  const handleAddButtonClick = () => {
    setStudentsData([...studentsData, initialRecord]);
  };

  useEffect(() => {
    getStudentsNameData(state, setStudentNameData);
  }, []);

  return (
    <InputSchoolRecordWrap>
      <ISRHeader>
        <h3>{`${currentYear} 내신 성적 입력( ${studentNameData?.nm} )`}</h3>
        <select value={dropSemester} onChange={handleSemester}>
          <option value="">학기 선택</option>
          <option value="1">1학기</option>
          <option value="2">2학기</option>
        </select>
        <select value={dropTest} onChange={handleDropTest}>
          <option value="">시험 구분</option>
          <option value="1">중간고사</option>
          <option value="2">기말고사</option>
        </select>
      </ISRHeader>
      <ISRButton>
        <Link to={`/teacher/inputsubject`}>
          <button>과목 정보 입력</button>
        </Link>
        <button onClick={handleSaveButtonClick}>저장</button>
        <button onClick={() => navigate(-1)}>취소</button>
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
          <TSubJectSchool
            key={index}
            id={item.id}
            studentsData={studentsData}
            setStudentsData={setStudentsData}
          />
        ))}
      </div>
      <ISRButtonWrapper>
        <button onClick={handleAddButtonClick}>
          항목 추가
          <FontAwesomeIcon icon={faPlusCircle} className="icon" />
        </button>
      </ISRButtonWrapper>
    </InputSchoolRecordWrap>
  );
};

export default InputSchoolRecord;
