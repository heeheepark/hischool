import React, { useState, useEffect } from "react";
import { ISRinput } from "../../styles/teacher/InputSchoolRecordStyle";

const TSubJectSchool = ({
  id,
  subjectData,
  dropSemester,
  dropTest,
  studentsData,
  updateLastSavedData,
  selectedStudentIndex,
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

  useEffect(() => {
    // 선택된 학생 데이터가 있을 경우, 수정 폼에 해당 학생 데이터를 불러옵니다.
    if (selectedStudentIndex !== null) {
      setStudentData(studentsData[selectedStudentIndex]);
    } else {
      // 선택된 학생 데이터가 없으면 초기화합니다.
      setStudentData(initialStudentData);
    }
  }, [selectedStudentIndex, studentsData, dropSemester, dropTest]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    // 숫자만 필터링하여 숫자 이외의 문자는 제거
    const filteredValue = value;
    // score와 rating 입력 폼의 최댓값 설정
    let updatedValue = filteredValue;
    if (name === "score") {
      updatedValue = Math.min(parseInt(filteredValue, 10), 100);
    } else if (name === "rating") {
      updatedValue = Math.min(parseInt(filteredValue, 10), 9);
    }
    setStudentData(prevData => ({
      ...prevData,
      [name]: updatedValue,
    }));
    // 변경된 데이터를 바로 저장하는 로직 추가 (예시로 콘솔에 출력)
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
              <option
                key={mainSubject.mainsubject}
                value={mainSubject.mainsubject}
              >
                {mainSubject.mainsubject}
              </option>
            ))}
          </select>
          <select
            name="subjectid"
            value={studentData?.subjectid || ""} // 선택적 렌더링을 사용하여 정의되지 않은 경우 빈 문자열("")로 처리합니다.
            onChange={handleInputChange}
          >
            <option value="">세부 과목 선택</option>
            {studentData?.subject &&
              subjectData
                .find(
                  mainSubject =>
                    mainSubject.mainsubject === studentData.subject,
                )
                .data.map((subSubject, index) => (
                  <option key={index} value={subSubject.subsubject}>
                    {subSubject.subsubject}
                  </option>
                ))}
          </select>
          <input
            type="number"
            name="score"
            value={studentData?.score || ""} // 선택적 렌더링을 사용하여 정의되지 않은 경우 빈 문자열("")로 처리합니다.
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
          <input
            type="number"
            name="classrank"
            value={studentData?.classrank || ""}
            onChange={handleInputChange}
            placeholder="반 석차"
          />
          <input
            type="number"
            name="wholerank"
            value={studentData?.wholerank || ""}
            onChange={handleInputChange}
            placeholder="전교 석차"
          />
        </ISRinput>
      </div>
    </>
  );
};

export default TSubJectSchool;
