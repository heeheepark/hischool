import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { postSchoolData } from "../../../api/teacher/inputSchoolRecordAxios";
import { getStudentsNameData } from "../../../api/teacher/inputMockRecordAxios";
import {
  ISBoard,
  ISRButton,
  ISRButtonWrapper,
  ISRHeader,
  ISRTitle,
  InputSchoolRecordWrap,
} from "../../../styles/teacher/studentrecord/InputSchoolRecordStyle";
import TSubJectSchool from "../../../components/teacher/subject/TSubJectSchool";

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

  const handleSemester = e => {
    setDropSemester(e.target.value);
    studentsData.map(item => (item.semester = parseInt(e.target.value)));
  };

  const handleDropTest = e => {
    setDropTest(e.target.value);
    studentsData.map(item => (item.midfinal = parseInt(e.target.value)));
  };

  const handleSaveButtonClick = () => {
    if (!dropSemester) {
      window.alert("학기를 선택하세요.");
      return;
    }
    if (!dropTest) {
      window.alert("고사를 선택하세요.");
      return;
    }
    const isSubSubjectNotSelected = studentsData.some(
      item => item.subjectid === 0,
    );
    if (isSubSubjectNotSelected) {
      window.alert("세부 과목을 선택하세요.");
      return;
    }
    if (studentsData) {
      const firstStudent = studentsData[0];
      const postDataList = {
        userId: parseInt(firstStudent.userid),
        semester: parseInt(firstStudent.semester),
        midFinal: parseInt(firstStudent.midfinal),
        list: studentsData.map(item => ({
          subjectId: parseInt(item.subjectid),
          score: parseInt(item.score),
        })),
      };
      console.log("postDataList", postDataList);
      postSchoolData(postDataList);
      navigate("/teacher/record", { state: state });
    }
  };

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
        <select
          value={dropSemester ? dropSemester : ""}
          onChange={handleSemester}
          name="semester"
        >
          <option value="">학기 선택</option>
          <option value="1">1학기</option>
          <option value="2">2학기</option>
        </select>
        <select
          value={dropTest ? dropTest : ""}
          onChange={handleDropTest}
          name="test-type"
        >
          <option value="">시험 구분</option>
          <option value="1">중간고사</option>
          <option value="2">기말고사</option>
        </select>
      </ISRHeader>
      <ISRButton>
        <button onClick={handleSaveButtonClick}>저장</button>
        <button onClick={() => navigate("/teacher/record", { state: state })}>
          취소
        </button>
      </ISRButton>
      <ISRTitle>
        <p>과목 계열</p>
        <p>세부 과목</p>
        <strong>점수</strong>
      </ISRTitle>
      <ISBoard>
        {studentsData.map((item, index) => (
          <TSubJectSchool
            key={index}
            id={item.id}
            studentsData={studentsData}
            setStudentsData={setStudentsData}
          />
        ))}
      </ISBoard>
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
