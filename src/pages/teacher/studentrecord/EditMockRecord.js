import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import {
  getMockEditData,
  getStudentsNameData,
  patchMockData,
} from "../../../api/teacher/inputMockRecordAxios";
import {
  IMREditTitle,
  ISRButton,
  ISRHeader,
  InputMockRecordWrap,
} from "../../../styles/teacher/studentrecord/InputSchoolRecordStyle";
import TSubJectEditMock from "../../../components/teacher/subject/TSubjectEditMock";

const EditMockRecord = () => {
  const { state } = useLocation();
  const [studentsData, setStudentsData] = useState([]);
  const [studentNameData, setStudentNameData] = useState([]);
  const navigate = useNavigate();

  const handleSaveButtonClick = () => {
    const isRatingNot = studentsData.some(item => item.rating === 0);
    if (isRatingNot) {
      window.alert("등급을 입력하세요.");
      return;
    }
    const isStandardScoreNot = studentsData.some(item => item.percent === 0);
    if (isStandardScoreNot) {
      window.alert("퍼센트를 입력하세요.");
      return;
    }
    const isSubSubjectNotSelected = studentsData.some(
      item => item.subjectId === "" || item.subjectId === null,
    );
    if (isSubSubjectNotSelected) {
      window.alert("세부 과목을 선택하세요.");
      return;
    }
    if (studentsData) {
      studentsData?.map(item => {
        const patchDataList = {
          resultId: item.resultId,
          subjectId: parseInt(item.subjectId),
          year: "2023",
          mon: item.mon,
          standardScore: item.standardScore,
          rating: item.rating,
          percent: item.percent,
        };
        patchMockData(patchDataList);
      });
      navigate(-1);
    }
  };

  useEffect(() => {
    getStudentsNameData(state[0], setStudentNameData);
    Promise.all(
      state[1].map(async item => {
        return await getMockEditData(item);
      }),
    )
      .then(recordList => {
        const newStudentsData = [...studentsData, ...recordList];
        setStudentsData(newStudentsData);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <InputMockRecordWrap>
      <ISRHeader>
        <h3>{`모의고사 성적 수정( ${studentNameData?.nm} )`}</h3>
      </ISRHeader>
      <ISRButton>
        <button onClick={handleSaveButtonClick}>수정</button>
        <button
          onClick={() => navigate("/teacher/record", { state: state[0] })}
        >
          취소
        </button>
      </ISRButton>
      <IMREditTitle>
        <p>월</p>
        <p>과목 계열</p>
        <p>세부 과목</p>
        <strong>표준 점수</strong>
        <strong>등급</strong>
        <strong>백분위</strong>
      </IMREditTitle>
      <div>
        {studentsData.map((item, index) => {
          return (
            <TSubJectEditMock
              key={index}
              resultId={item.resultId}
              scoreList={item}
              studentsData={studentsData}
              setStudentsData={setStudentsData}
            />
          );
        })}
      </div>
    </InputMockRecordWrap>
  );
};

export default EditMockRecord;
