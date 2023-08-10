import React, { useEffect, useState } from "react";
import {
  ISRButton,
  ISRHeader,
  ISRTitle,
  InputSchoolRecordWrap,
} from "../../styles/teacher/InputSchoolRecordStyle";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  getSchoolData,
  getSchoolMainSubData,
  getSchoolclassData,
  postSchoolData,
} from "../../api/teacher/inputSchoolRecordAxios";
import { getStudentsNameData } from "../../api/teacher/inputMockRecordAxios";
import TSubJectEditSchool from "../../components/teacher/TSubjectEditSchool";

const InputSchoolRecord = () => {
  const { state } = useLocation();
  const [dropSemester, setDropSemester] = useState("");
  const [dropTest, setDropTest] = useState("");
  const [studentsData, setStudentsData] = useState([]);
  const [lastSchoolSavedData, setLastSchoolSavedData] = useState([]);
  const [subjectData, setSubjectData] = useState([]);
  const [schoolData, setSchoolData] = useState([]);
  const [schoolClassData, setSchoolClassData] = useState([]);
  const [studentNameData, setStudentNameData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const interimData = [{}];
    setStudentsData(interimData);
    setLastSchoolSavedData(interimData);
  }, []);

  // 새로운 데이터를 전달하는 함수
  const updateLastSavedData = (_id, newData) => {
    const updateData = lastSchoolSavedData.map((item, idx) => {
      if (idx === _id) {
        item = newData;
      }
      return item;
    });

    setLastSchoolSavedData(updateData);
  };
  // 학기 항목
  const handleSemester = event => {
    setDropSemester(event.target.value);
  };

  // 고사 항목
  const handleDropTest = event => {
    setDropTest(event.target.value);
  };

  // "수정" > 서버전송
  const handleSaveButtonClick = () => {
    if (lastSchoolSavedData) {
      const SdataToSend = lastSchoolSavedData.map(item => ({
        resultId: state[1], //임시 유저 아이디 추후 수정 필요
        subjectid: parseInt(item.subjectid) || 0,
        semester: parseInt(item.semester) || 0,
        midfinal: parseInt(item.midfinal) || 0,
        score: parseInt(item.score) || 0,
        rating: parseInt(item.rating) || 0,
        classrank: parseInt(item.classrank) || 0,
        wholerank: parseInt(item.wholerank) || 0,
      }));
      postSchoolData(SdataToSend);
    }
  };

  // 과목 정보
  useEffect(() => {
    async function fetchData() {
      try {
        // 주요과목 데이터
        const mainSubData = await getSchoolMainSubData();
        setSubjectData(mainSubData);
      } catch (err) {
        console.log(err);
        setSubjectData([]);
      }
    }

    fetchData();
  }, []);
  // 학생 숫자 데이터
  useEffect(() => {
    async function personnelData() {
      try {
        // 전교 인원
        const schoolData = await getSchoolData();
        // 반 인원
        const schoolclassData = await getSchoolclassData();
        setSchoolData(schoolData);
        setSchoolClassData(schoolclassData);
      } catch (err) {
        console.log(err);
        setSchoolData([]);
        setSchoolClassData([]);
      }
    }

    personnelData();
  }, []);
  // 학생 이름
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStudentsNameData();
        setStudentNameData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  const matchingStudent = studentNameData.find(
    student => student.userid === state[0],
  );
  return (
    <InputSchoolRecordWrap>
      <ISRHeader>
        {matchingStudent && (
          <h3>2023 내신 고사 성적 수정( {matchingStudent.nm} )</h3>
        )}
        <select value={dropSemester} onChange={handleSemester}>
          <option value="">학기 선택</option>
          <option value="1학기">1학기</option>
          <option value="2학기">2학기</option>
        </select>
        <select value={dropTest} onChange={handleDropTest}>
          <option value="">시험 구분</option>
          <option value="1">중간고사</option>
          <option value="2">기말고사</option>
        </select>
      </ISRHeader>
      <ISRButton>
        <button onClick={handleSaveButtonClick}>수정</button>
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
          <TSubJectEditSchool
            key={index}
            id={index}
            schoolData={schoolData}
            schoolClassData={schoolClassData}
            subjectData={subjectData}
            dropSemester={dropSemester}
            dropTest={dropTest}
            studentsData={studentsData[index]}
            setStudentsData={setStudentsData}
            updateLastSavedData={updateLastSavedData}
          />
        ))}
      </div>
    </InputSchoolRecordWrap>
  );
};

export default InputSchoolRecord;