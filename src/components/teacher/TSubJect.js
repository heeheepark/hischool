import React, { useState, useEffect } from "react";
import {
  ISRdetail,
  ISRdetailButton,
  ISRinput,
  ISRinputR,
} from "../../styles/teacher/InputSchoolRecord";

const TSubJect = ({
  subjectData,
  schoolClassData,
  dropSemester,
  dropTest,
  studentsData,
  setStudentsData,
}) => {
  const initialStudentData = {
    subject: "",
    subSubject: "",
    score: "",
    grade: "",
    classRank: "",
    schoolRank: "",
  };

  const [studentData, setStudentData] = useState(initialStudentData);

  useEffect(() => {
    setStudentData({
      subject: "",
      subSubject: "",
      score: "",
      grade: "",
      classRank: "",
      schoolRank: "",
    });
  }, [dropSemester, dropTest]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddStudentData = () => {
    setStudentsData((prevStudentsData) => [...prevStudentsData, studentData]);
    setStudentData(initialStudentData); // 입력한 정보를 초기화합니다.
  };

  return (
    <>
      <ISRinput>
        <select
          name="subject"
          value={studentData.subject}
          onChange={handleInputChange}
        >
          <option value="">과목 계열 선택</option>
          {subjectData.map((mainSubject) => (
            <option
              key={mainSubject.mainsubject}
              value={mainSubject.mainsubject}
            >
              {mainSubject.mainsubject}
            </option>
          ))}
        </select>
        <select
          name="subSubject"
          value={studentData.subSubject}
          onChange={handleInputChange}
        >
          <option value="">세부 과목 선택</option>
          {studentData.subject &&
            subjectData
              .find((mainSubject) => mainSubject.mainsubject === studentData.subject)
              .data.map((subSubject, index) => (
                <option key={index} value={subSubject.subsubject}>
                  {subSubject.subsubject}
                </option>
              ))}
        </select>
        <ISRinputR>
          <input
            type="number"
            name="score"
            value={studentData.score}
            onChange={handleInputChange}
            placeholder="점수"
          />
          <input
            type="number"
            name="grade"
            value={studentData.grade}
            onChange={handleInputChange}
            placeholder="등급"
          />
          <input
            type="number"
            name="classRank"
            value={studentData.classRank}
            onChange={handleInputChange}
            placeholder="반 석차"
          />
          <input
            type="number"
            name="schoolRank"
            value={studentData.schoolRank}
            onChange={handleInputChange}
            placeholder="전교 석차"
          />
        </ISRinputR>
        <button onClick={handleAddStudentData}>추가</button>
      </ISRinput>
    </>
  );
};

export default TSubJect;
