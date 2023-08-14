import React, { useEffect, useState } from "react";
import {
  ISRButton,
  ISRHeader,
  ISTitle,
  InputSchoolRecordWrap,
} from "../../styles/teacher/InputSchoolRecordStyle";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getSchoolEditData,
  postSchoolData,
} from "../../api/teacher/inputSchoolRecordAxios";
import { getStudentsNameData } from "../../api/teacher/inputMockRecordAxios";
import TSubJectEditSchool from "../../components/teacher/TSubjectEditSchool";

const EditSchoolRecord = () => {
  const { state } = useLocation();
  const today = new Date();
  const currentYear = today.getFullYear();
  const initialRecord = {
    id: Date.now(),
    userid: state[0],
    subjectid: 0,
    semester: 0,
    midfinal: 0,
    score: 0,
    rating: 0,
    classrank: 0,
    wholerank: 0,
  };
  const [studentsData, setStudentsData] = useState([initialRecord]);
  const [studentNameData, setStudentNameData] = useState([]);
  const navigate = useNavigate();

  let total = 0;
  const [schoolEditData, setSchoolEditData] = useState([]);


  const getSchoolWhile = async () => {
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
    setSchoolEditData(interimData);
  };
  useEffect(() => {
    // 화면에서 그려질때 배열의 총 개수를 파악함.
    total = state[1].length;
    getSchoolWhile();
  }, []);
  // "저장" > 서버전송
  const handleSaveButtonClick = () => {
    if (studentsData) {
      studentsData?.map(item => {
        const postDataList = {
          resultId: state[1],
          subjectId: item.subjectid,
          year: "2023", //임시
          semester: item.semester,
          mf: item.midfinal,
          score: item.score,
          rating: item.rating,
          classRank: item.classrank,
          wholeRank: item.wholerank,
        };
        console.log(postDataList);
      });
      navigate(-1);
    }
  };

  useEffect(() => {
    getStudentsNameData(state[0], setStudentNameData);
  }, []);
  return (
    <InputSchoolRecordWrap>
      <ISRHeader>
        <h3>{`${currentYear} 내신 성적 입력( ${studentNameData?.nm} )`}</h3>
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
        {schoolEditData.map((item, index) => (
          <TSubJectEditSchool
            key={index}
            id={studentsData.id}
            schoolEditData={schoolEditData[index]}
            studentsData={studentsData}
            setStudentsData={setStudentsData}
          />
        ))}
      </div>
    </InputSchoolRecordWrap>
  );
};

export default EditSchoolRecord;
