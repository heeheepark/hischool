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
    if (selectedStudentIndex !== null) {
      setStudentData(studentsData[selectedStudentIndex]);
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
          {subjectData.map(mainSubject => {
            return (
              <option
                key={mainSubject.mainsubject}
                value={mainSubject.mainsubject}
              >
                {mainSubject.mainsubject}
              </option>
            );
          })}
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
