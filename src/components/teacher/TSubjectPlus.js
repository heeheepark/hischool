import React, { useEffect, useState } from "react";
import { ISJinput } from "../../styles/teacher/InputSchoolRecordStyle";

const TSubjectPlus = ({
  id,
  subjectData,
  studentsData,
  updateLastSavedData,
  selectedStudentIndex,
}) => {
  const initialStudentData = {
    subject: "",
    subjectid: "",
  };
  const [studentData, setStudentData] = useState(initialStudentData);
  useEffect(() => {
    // 선택된 학생 데이터가 있을 경우, 수정 폼에 해당 학생 데이터를 불러옵니다.
    if (selectedStudentIndex !== null) {
      setStudentData(studentsData[selectedStudentIndex]);
    } else {
      // 선택된 학생 데이터가 없으면 초기화합니다.
      // setStudentData(initialStudentData);
    }
  }, [selectedStudentIndex, studentsData]);
  const handleInputChange = e => {
    const { name, value } = e.target;
    const updatedValue = value;
    setStudentData(prevData => ({
      ...prevData,
      [name]: updatedValue,
    }));

    const updatedData = {
      ...studentData,
      [name]: updatedValue,
    };
    // 변경된 데이터를 InputSchoolRecord 컴포넌트로 전달
    updateLastSavedData(id, updatedData);
  };
  return (
    <div>
      <ISJinput>
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
          value={studentData?.subjectid || ""}
          onChange={handleInputChange}
        >
          <option value="">세부 과목 선택</option>
          {studentData?.subject &&
            subjectData
              .find(
                mainSubject => mainSubject.mainsubject === studentData.subject,
              )
              .data.map((subSubject, index) => (
                <option key={index} value={subSubject.subjectid}>
                  {subSubject.subsubject}
                </option>
              ))}
        </select>
      </ISJinput>
    </div>
  );
};

export default TSubjectPlus;
