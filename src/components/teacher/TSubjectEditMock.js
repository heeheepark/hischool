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

  useEffect(() => {
    // 수정 폼에 해당 학생 데이터를 불러옵니다.
    setStudentData(studentsData, dropMonth);
  }, [studentsData, dropMonth]);

  // const [세부과목목록, 세부과목목록업데이트] = useState(배열)
  const [detailSubject, setDetailSubject] = useState([]);
  const handleInputChange = e => {
    const { name, value } = e.target;
    // 숫자만 필터링하여 숫자 이외의 문자는 제거
    // 카테고리 ID  : studentData 의 categoryId
    const filteredValue = value;
    // score와 grade 입력 폼의 최댓값 설정
    let updatedValue = filteredValue;
    if (name === "rating") {
      updatedValue = Math.min(parseInt(filteredValue, 10), 9);
    } else if (name === "percent") {
      updatedValue = Math.min(parseInt(filteredValue, 10), 100);
    } else if (name === "categoryId") {
      // 과목 계열 카테고리가 변경된 경우에 대한 처리
      const obj = subjectData.filter(
        item => item.mainsubjectId === parseInt(filteredValue),
      );
      setDetailSubject(obj[0].data);
    }

    setStudentData(prevData => ({
      ...prevData,
      [name]: updatedValue,
    }));

    // ["categoryId"] : 10

    const updatedData = {
      ...studentData,
      [name]: updatedValue,
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
  const matchMainSid = [];
  const subjectIds = [];
  const subsubjects = [];

  // subjectData 배열을 반복하여 처리
  subjectData.forEach(item => {
    if (item.mainsubjectId === studentData.categoryId) {
      matchingMainsubjects.push(item.mainsubject);
      matchMainSid.push(item.mainsubjectId);
    }
  });
  subjectData.forEach(item => {
    if (item.mainsubjectId === studentData.subjectId) {
      subjectIds.push(studentData.subjectId); // Assuming you want to push the main subject's ID
    } else {
      const subsubjectMatch = item.data.find(
        subitem => subitem.subjectid === studentData.subjectId,
      );
      if (subsubjectMatch) {
        subjectIds.push(studentData.subjectId); // Change this line if you want to push subsubjectMatch.subjectid
      }
    }
  });
  console.log(studentData, "studentData");
  subjectData.forEach(item => {
    if (item.mainsubjectId === studentData.subjectId) {
      subsubjects.push(item.data[0]?.subsubject);
    } else {
      const subsubjectMatch = item.data.find(
        subitem => subitem.subjectid === studentData.subjectId,
      );
      if (subsubjectMatch) {
        subsubjects.push(subsubjectMatch.subsubject);
      }
    }
  });
  return (
    <>
      <div>
        <IMREdit>
          <select value={dropMonth} onChange={handleMonth}>
            <option value={studentData?.mon || ""}>{studentData?.mon}월</option>
            <option value="3">3월</option>
            <option value="6">6월</option>
            <option value="9">9월</option>
          </select>
          <select
            name="categoryId"
            value={studentData?.categoryId || ""}
            onChange={handleInputChange}
          >
            {matchingMainsubjects.map((mainSubject, index) => {
              console.log("matchingMainsubjects ",mainSubject);
              return (
                <option key={index} value={matchMainSid}>
                  {mainSubject}
                </option>
              );
            })}
            {subjectData.map(mainSubject => (
              <option
                key={mainSubject.mainsubject}
                value={mainSubject.mainsubjectId}
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
            <option value={subjectIds}>{subsubjects}</option>
            {detailSubject.map((subSubject, index) => (
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
