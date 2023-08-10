import React, { useState, useEffect } from "react";
import { ISRinput, ISainput } from "../../styles/teacher/InputSchoolRecordStyle";
import { getSchoolSubData } from "../../api/teacher/inputSchoolRecordAxios";

const TSubJectEditSchool = ({
  id,
  subjectData,
  dropSemester,
  dropTest,
  studentsData,
  updateLastSavedData,
  selectedStudentIndex,
  schoolData,
  schoolClassData,
}) => {
  const initialStudentData = {
    subject: "",
    subjectid: "",
    score: "",
    rating: "",
    classrank: "",
    wholerank: "",
    semester: dropSemester,
    midfinal: dropTest,
  };

  const [studentData, setStudentData] = useState(initialStudentData);
  const [detailList, setDetailList] = useState([]);

  // 세부항목 호출
  const getDetailList = async _sid => {
    const result = await getSchoolSubData();
    const arr = result.filter(item => item.subjectid === parseInt(_sid));
    setDetailList(arr);
  };

  useEffect(() => {
    // 선택된 데이터가 있을 경우, 수정 폼에 해당 데이터를 불러옵니다.
    if (selectedStudentIndex !== null) {
      setStudentData(studentsData[selectedStudentIndex]);
    } else {
      // 선택된 데이터가 없으면 초기화
      setStudentData(initialStudentData);
    }
  }, [selectedStudentIndex, studentsData, dropSemester, dropTest]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    // 숫자만 필터링
    const filteredValue = value;
    // score와 rating 입력 폼의 최댓값
    let updatedValue = filteredValue;
    if (name === "subject") {
      getDetailList(filteredValue);
    } else if (name === "score") {
      updatedValue = Math.min(parseInt(filteredValue, 10), 100);
    } else if (name === "rating") {
      updatedValue = Math.min(parseInt(filteredValue, 10), 9);
    }
    setStudentData(prevData => ({
      ...prevData,
      [name]: updatedValue,
    }));
    // 변경된 데이터를 바로 저장
    const updatedData = {
      ...studentData,
      [name]: updatedValue,
      semester: dropSemester,
      midfinal: dropTest,
    };
    // 변경된 데이터를 InputSchoolRecord 컴포넌트로 전달
    updateLastSavedData(id, updatedData);
  };

  return (
    <>
      <div>
        <ISRinput>
          <select
            name="subject"
            value={studentData?.subject || ""}
            onChange={handleInputChange}
          >
            <option value="">과목 계열 선택</option>
            {subjectData.map(mainSubject => (
              <option key={mainSubject.subjectid} value={mainSubject.subjectid}>
                {mainSubject.nm}
              </option>
            ))}
          </select>
          <select
            name="subjectid"
            value={studentData?.subjectid || ""}
            onChange={handleInputChange}
          >
            <option value="">세부 과목 선택</option>
            {detailList.map(item => (
              <option key={item.subjectid} value={item.subjectid}>
                {item.nm}
              </option>
            ))}
          </select>
          <input
            type="number"
            name="score"
            value={studentData?.score || ""}
            onChange={handleInputChange}
            placeholder="점수"
            max={100}
          />
          <input
            type="number"
            name="rating"
            value={studentData?.rating || ""}
            onChange={handleInputChange}
            placeholder="등급"
            max={9}
          />
          <ISainput>
            <input
              type="number"
              name="classrank"
              value={studentData?.classrank || ""}
              onChange={handleInputChange}
              placeholder="반 석차"
            />
            <span> / {schoolClassData}</span>
          </ISainput>
          <ISainput>
            <input
              type="number"
              name="wholerank"
              value={studentData?.wholerank || ""}
              onChange={handleInputChange}
              placeholder="전교 석차"
            />
            <span> / {schoolData}</span>
          </ISainput>
        </ISRinput>
      </div>
    </>
  );
};

export default TSubJectEditSchool;
