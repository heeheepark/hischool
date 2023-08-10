import React, { useState, useEffect } from "react";
import { IMREdit } from "../../styles/teacher/InputSchoolRecordStyle";

const TSubJectEditMock = ({
  id,
  subjectData,
  studentsData,
  updateLastSavedData,
}) => {
  const initialStudentData = {
    categoryId: "",
    subjectid: "",
    standardScore: "",
    rating: "",
    percent: "",
    mon: "",
  };
  const [dropMonth, setDropMonth] = useState("");
  const [studentData, setStudentData] = useState(initialStudentData);
  console.log(studentData);

  useEffect(() => {
    // 수정 폼에 해당 학생 데이터를 불러옵니다.
    setStudentData(studentsData, dropMonth);
  }, [studentsData, dropMonth]);
  const handleInputChange = e => {
    const { name, value } = e.target;
    // 숫자만 필터링하여 숫자 이외의 문자는 제거
    const filteredValue = value;
    // score와 grade 입력 폼의 최댓값 설정
    let updatedValue = filteredValue;
    if (name === "rating") {
      updatedValue = Math.min(parseInt(filteredValue, 10), 9);
    } else if (name === "percent") {
      updatedValue = Math.min(parseInt(filteredValue, 10), 100);
    }
    setStudentData(prevData => ({
      ...prevData,
      [name]: updatedValue,
    }));

    const updatedData = {
      ...studentData,
      [name]: updatedValue,
      mon: dropMonth,
    };
    // 변경된 데이터를 InputSchoolRecord 컴포넌트로 전달
    updateLastSavedData(id, updatedData);
  };
  const handleMonth = event => {
    const selectedMonth = event.target.value;
    setDropMonth(selectedMonth);
  };
  // studentData.categoryId와 동일한 mainsubject를 저장할 배열
  const matchingMainsubjects = [];
  let matchedSubsubject = null;

  // subjectData 배열을 반복하여 처리
  subjectData.forEach(item => {
    if (item.mainsubjectId === studentData.categoryId) {
      matchingMainsubjects.push(item.mainsubject);
    }
  });
  subjectData.forEach(item => {
    if (item.mainsubjectId === studentData.subjectId) {
      matchedSubsubject = item.data[0]?.subsubject;
    } else {
      const subsubjectMatch = item.data.find(
        subitem => subitem.subjectid === studentData.subjectId,
      );
      if (subsubjectMatch) {
        matchedSubsubject = subsubjectMatch.subsubject;
      }
    }
  });
  if (matchedSubsubject) {
    console.log("Matching subsubject:", matchedSubsubject);
  } else {
    console.log("No matching subsubject found.");
  }

  // matchingMainsubjects 배열에 저장된 mainsubject 출력 또는 사용
  console.log("Matching mainsubjects:", matchingMainsubjects);
  console.log("dddddddddd", studentData);
  return (
    <>
      <div>
        <IMREdit>
          <select value={dropMonth} onChange={handleMonth}>
            <option value={studentData?.mon}>{studentData?.mon}월</option>
            <option value="3">3월</option>
            <option value="6">6월</option>
            <option value="9">9월</option>
          </select>
          <select
            name="categoryId"
            value={studentData?.categoryId || ""}
            onChange={handleInputChange}
          >
            {matchingMainsubjects.map((mainSubject, index) => (
              <option key={index} value={mainSubject.categoryId}>
                {mainSubject}
              </option>
            ))}
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
            value={studentData?.subjectid || ""}
            onChange={handleInputChange}
          >
            <option value={studentData?.subjectid}></option>
            {studentData?.subjectid &&
              subjectData
                .find(
                  mainSubject =>
                    mainSubject.mainsubject === studentData.subjectid,
                )
                .data.map((subSubject, index) => (
                  <option key={index} value={subSubject.subjectid}>
                    {subSubject.subsubject}
                  </option>
                ))}
          </select>
          <input
            type="number"
            name="standardScore"
            value={studentData?.standardScore || ""}
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
            name="percent"
            value={studentData?.percent || ""}
            onChange={handleInputChange}
            placeholder="백분위"
          />
        </IMREdit>
      </div>
    </>
  );
};

export default TSubJectEditMock;
