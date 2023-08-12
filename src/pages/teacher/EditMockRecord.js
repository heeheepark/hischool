import React, { useEffect, useState } from "react";
import {
  IMREditTitle,
  ISRButton,
  ISRHeader,
  InputMockRecordWrap,
} from "../../styles/teacher/InputSchoolRecordStyle";
import {
  getMockEditData,
  getMockMainSubData,
  getMockSubData,
  getStudentsNameData,
  patchMockData,
} from "../../api/teacher/inputMockRecordAxios";
import { useLocation, useNavigate } from "react-router";
import TSubJectEditMock from "../../components/teacher/TSubjectEditMock";

const EditMockRecord = () => {
  const { state } = useLocation();
  const [studentsData, setStudentsData] = useState([]);
  const [lastSavedData, setLastSavedData] = useState([]);
  const [subjectData, setSubjectData] = useState([]);
  const [studentNameData, setStudentNameData] = useState([]);
  const navigate = useNavigate();
  // 처음에 화면이 만들어지면 호출을 한다.
  // 과목의 총 개수를 파악한다.
  let total = 0;

  const getMockWhile = async () => {
    // 과목 정보를 담아줄 임시 배열
    let interimData = [];
    // state 의 인덱스 [1] 에 과목 PK 있습니다.
    // state 의 인덱스 [1] 에 담긴 과목은 최소 1종목 이상입니다.
    console.log("담겨진 과목배열 : ", state[1]);
    // 과목 배열의 0번부터 처리합니다.
    for (let i = 0; i < total; i++) {
      const result = await getMockEditData(state[1][i]);
      // console.log("getMockEditData 과목 호출 결과 :", result);
      interimData.push(result[0]);
    }
    console.log(interimData);
    setStudentsData(interimData);
    setLastSavedData(interimData);
  };

  useEffect(() => {
    // 화면에서 그려질때 배열의 총 개수를 파악함.
    total = state[1].length;
    getMockWhile();
  }, []);

  // 라스트 데이터 전달
  const updateLastSavedData = (_id, newData) => {
    const updateData = lastSavedData.map((item, idx) => {
      if (idx === _id) {
        item = newData;
      }
      return item;
    });
    setLastSavedData(updateData);
  };
  // "수정" > 서버전송
  const handleSaveButtonClick = () => {
    if (lastSavedData) {
      const dataToSend = lastSavedData.map((item, index) => ({
        resultId: state[1][index],
        subjectId: parseInt(item.subjectid),
        year: "2023", //임시값
        mon: parseInt(item.mon) || 0,
        standardScore: parseInt(item.standardScore) || 0,
        rating: parseInt(item.rating) || 0,
        percent: parseInt(item.percent) || 0,
      }));
      dataToSend.forEach(item => patchMockData(item));
      navigate(-1)
    }
  };
  useEffect(() => {
    async function fetchData() {
      try {
        // 주요과목 데이터
        const mainSubData = await getMockMainSubData();
        // 하위과목 데이터
        const newSubjectData = await Promise.all(
          mainSubData.map(async mainSubject => {
            const subData = await getMockSubData(mainSubject.categoryid);
            return {
              mainsubject: mainSubject.nm,
              mainsubjectId: mainSubject.categoryid,
              data: subData.map(subSubject => ({
                subsubject: subSubject.nm,
                subjectid: subSubject.subjectid,
              })),
            };
          }),
        );
        setSubjectData(newSubjectData);
      } catch (err) {
        console.log(err);
        setSubjectData([]);
      }
    }

    fetchData();
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
    <InputMockRecordWrap>
      <ISRHeader>
        {matchingStudent && (
          <h3>2023 모의 고사 성적 수정( {matchingStudent.nm} )</h3>
        )}
      </ISRHeader>
      <ISRButton>
        <button onClick={handleSaveButtonClick}>수정</button>
        <button onClick={() => navigate(-1)}>취소</button>
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
        {studentsData.map((item, index) => (
          <TSubJectEditMock
            key={index}
            id={index}
            subjectData={subjectData}
            studentsData={item}
            setStudentsData={setStudentsData}
            updateLastSavedData={updateLastSavedData}
          />
        ))}
      </div>
    </InputMockRecordWrap>
  );
};

export default EditMockRecord;
