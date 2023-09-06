import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getSchoolEditData,
  patchSchoolData,
} from "../../../api/teacher/inputSchoolRecordAxios";
import { getStudentsNameData } from "../../../api/teacher/inputMockRecordAxios";
import {
  ISRButton,
  ISRHeader,
  ISTitle,
  InputSchoolRecordWrap,
} from "../../../styles/teacher/studentrecord/InputSchoolRecordStyle";
import TSubJectEditSchool from "../../../components/teacher/subject/TSubjectEditSchool";

const EditSchoolRecord = () => {
  const { state } = useLocation();
  const [studentsData, setStudentsData] = useState([]);
  const [studentNameData, setStudentNameData] = useState([]);
  const navigate = useNavigate();

  // "저장" > 서버전송
  const handleSaveButtonClick = () => {
    if (studentsData) {
      studentsData.map((item, index) => {
        const postDataList = {
          resultId: state[1][index],
          subjectId: parseInt(item.subjectId),
          year: 2023,
          semester: item.semester,
          mf: item.midfinal,
          score: item.score,
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
        const newData = recordList;
        const newDataItems = [];
        newData.forEach((item, index) => {
          item[0].id = state[1][index];
          newDataItems.push(item[0]);
        });
        setStudentsData(newDataItems);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getStudentsNameData(state[0], setStudentNameData);
  }, []);

  return (
    <InputSchoolRecordWrap>
      <ISRHeader>
        <h3>{`내신 성적 수정( ${studentNameData?.nm} )`}</h3>
      </ISRHeader>
      <ISRButton>
        <button onClick={handleSaveButtonClick}>수정</button>
        <button
          onClick={() => navigate("/teacher/record", { state: state[0] })}
        >
          취소
        </button>
      </ISRButton>
      <ISTitle>
        <p>학기</p>
        <p>고사</p>
        <p>과목 계열</p>
        <p>세부 과목</p>
        <strong>점수</strong>
      </ISTitle>
      <div>
        {studentsData.map((item, index) => (
          <TSubJectEditSchool
            key={index}
            id={item.id}
            scoreList={item}
            studentsData={studentsData}
            setStudentsData={setStudentsData}
          />
        ))}
      </div>
    </InputSchoolRecordWrap>
  );
};

export default EditSchoolRecord;
