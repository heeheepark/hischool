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
  patchSchoolData,
  postSchoolData,
} from "../../api/teacher/inputSchoolRecordAxios";
import { getStudentsNameData } from "../../api/teacher/inputMockRecordAxios";
import TSubJectEditSchool from "../../components/teacher/TSubjectEditSchool";

const EditSchoolRecord = () => {
  const { state } = useLocation();
  const today = new Date();
  const currentYear = today.getFullYear();
  const [studentsData, setStudentsData] = useState([]);
  const [studentNameData, setStudentNameData] = useState([]);
  const navigate = useNavigate();

  // "저장" > 서버전송
  const handleSaveButtonClick = () => {
    if (studentsData) {
      const nowArr = studentsData.map((item, index) => {
        item[0].resultId = state[1][index];
        return item[0];
      });
      nowArr.map(item => {
        const postDataList = {
          resultId: item.resultId,
          subjectId: item.subjectId,
          year: "2023", //임시
          semester: item.semester,
          mf: item.midfinal,
          score: item.score,
          rating: item.rating,
          classRank: item.classRank,
          wholeRank: item.wholeRank,
        };
        patchSchoolData(postDataList);
      });
      navigate(-1);
    }
  };
  useEffect(() => {
    getStudentsNameData(state[0], setStudentNameData);
    Promise.all(
      state[1].map(async item => {
        return await getSchoolEditData(item);
      }),
    )
      .then(recordList => {
        const newStudentsData = [...studentsData, ...recordList];
        setStudentsData(newStudentsData);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

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
        {studentsData.map((item, index) => (
          <TSubJectEditSchool
            key={index}
            id={item.id}
            scoreList={item[0]}
            studentsData={studentsData}
            setStudentsData={setStudentsData}
          />
        ))}
      </div>
    </InputSchoolRecordWrap>
  );
};

export default EditSchoolRecord;