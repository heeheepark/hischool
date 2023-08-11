import React, { useEffect, useState } from "react";
import {
  ISRButton,
  ISRHeader,
  ISTitle,
  InputSchoolRecordWrap,
} from "../../styles/teacher/InputSchoolRecordStyle";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getSchoolData,
  getSchoolEditData,
  getSchoolMainSubData,
  getSchoolclassData,
} from "../../api/teacher/inputSchoolRecordAxios";
import { getStudentsNameData } from "../../api/teacher/inputMockRecordAxios";
import TSubJectEditSchool from "../../components/teacher/TSubjectEditSchool";

const EditSchoolRecord = () => {
  const { state } = useLocation();
  const [studentsData, setStudentsData] = useState([]);
  const [lastSchoolSavedData, setLastSchoolSavedData] = useState([]);
  const [subjectData, setSubjectData] = useState([]);
  const [schoolData, setSchoolData] = useState([]);
  const [schoolClassData, setSchoolClassData] = useState([]);
  const [studentNameData, setStudentNameData] = useState([]);
  const navigate = useNavigate();
  console.log("state",state);

  let total = 0;

  const getMockWhile = async () => {
    // 과목 정보를 담아줄 임시 배열
    let interimData = [];
    // state 의 인덱스 [1] 에 과목 PK 있습니다.
    // state 의 인덱스 [1] 에 담긴 과목은 최소 1종목 이상입니다.
    console.log("담겨진 과목배열 : ", state[1]);
    // 과목 배열의 0번부터 처리합니다.
    for (let i = 0; i < total; i++) {
      const result = await getSchoolEditData(state[1][i]);
      // console.log("getMockEditData 과목 호출 결과 :", result);
      interimData.push(result[0]);
    }
    console.log("interimData", interimData);
    setStudentsData(interimData);
    setLastSchoolSavedData(interimData);
  };

  useEffect(() => {
    // 화면에서 그려질때 배열의 총 개수를 파악함.
    total = state[1].length;
    getMockWhile();
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
      console.log(SdataToSend);
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
      </ISRHeader>
      <ISRButton>
        <button onClick={handleSaveButtonClick}>수정</button>
        <button onClick={() => navigate(-1)}>취소</button>
      </ISRButton>
      <ISTitle>
        <p>학기</p>
        <p>고사</p>
        <p>과목 계열</p>
        <p>세부 과목</p>
        <strong>점수</strong>
        <strong>등급</strong>
        <strong>반 석차</strong>
        <strong>전교 석차</strong>
      </ISTitle>
      <div>
        {studentsData.map((item, index) => (
          <TSubJectEditSchool
            key={index}
            id={index}
            schoolData={schoolData}
            schoolClassData={schoolClassData}
            subjectData={subjectData}
            studentsData={studentsData[index]}
            updateLastSavedData={updateLastSavedData}
          />
        ))}
      </div>
    </InputSchoolRecordWrap>
  );
};

export default EditSchoolRecord;
