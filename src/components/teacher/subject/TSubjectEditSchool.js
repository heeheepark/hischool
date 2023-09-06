import React, { useState, useEffect } from "react";
import {
  getSchoolMainSubData,
  getSchoolSubData,
} from "../../../api/teacher/inputSchoolRecordAxios";
import { ISinput } from "../../../styles/teacher/studentrecord/InputSchoolRecordStyle";

const TSubJectEditSchool = ({
  id,
  scoreList,
  studentsData,
  setStudentsData,
}) => {
  const [mainSubjects, setMainSubjects] = useState([]);
  const [subSubjects, setSubSubjects] = useState([]);
  const [mainSubject, setMainSubject] = useState(scoreList.categoryId);
  const [subject, setSubject] = useState(scoreList.subjectId);
  const [semester, setSemester] = useState(scoreList.semester);
  const [midfinal, setMidfinal] = useState(scoreList.midfinal);

  useEffect(() => {
    const fetchData = async () => {
      const mainSubjectData = await getSchoolMainSubData();
      setMainSubjects(mainSubjectData);

      if (mainSubject) {
        const subSubjectData = await getSchoolSubData(mainSubject);
        setSubSubjects(subSubjectData);
      }
    };
    fetchData();
  }, [mainSubject]);

  // 학기 변경
  const handleSemester = e => {
    const submitList = studentsData.map(item => {
      if (item.id === id) {
        item.semester = parseInt(e.target.value);
      }
      return item;
    });
    setSemester(e.target.value);
    setStudentsData(submitList);
  };

  // 시험유형(중간/기말) 변경
  const handleDropTest = e => {
    const submitList = studentsData.map(item => {
      if (item.id === id) {
        item.midfinal = parseInt(e.target.value);
      }
      return item;
    });
    setMidfinal(e.target.value);
    setStudentsData(submitList);
  };

  // 점수
  const handleScore = e => {
    const submitList = studentsData.map(item => {
      if (item.id === id) {
        item.score = parseInt(e.target.value);
      }
      return item;
    });
    setStudentsData(submitList);
  };

  const handleMainSubChange = e => {
    setMainSubject(e.target.value);
  };

  const handleSubChange = e => {
    setSubject(e.target.value);
    const submitList = studentsData.map(item => {
      if (item.id === id) {
        item.subjectId = parseInt(e.target.value);
      }
      return item;
    });
    setStudentsData(submitList);
  };

  return (
    <>
      <div>
        <ISinput>
          <select
            value={semester || ""}
            onChange={handleSemester}
            name="semester"
          >
            <option value={1}>1학기</option>
            <option value={2}>2학기</option>
          </select>
          <select
            value={midfinal || ""}
            onChange={handleDropTest}
            name="test-type"
          >
            <option value={1}>중간고사</option>
            <option value={2}>기말고사</option>
          </select>
          <select
            name="mainSubject"
            value={mainSubject || ""}
            onChange={handleMainSubChange}
          >
            <option value="">과목 계열 선택</option>
            {mainSubjects.map(mainSubject => (
              <option
                key={mainSubject.categoryId}
                value={mainSubject.categoryId}
              >
                {mainSubject.nm}
              </option>
            ))}
          </select>
          <select
            name="subSubject"
            value={subject || ""}
            onChange={handleSubChange}
          >
            <option value="">세부 과목 선택</option>
            {subSubjects.map(subSubject => (
              <option key={subSubject.subjectId} value={subSubject.subjectId}>
                {subSubject.nm}
              </option>
            ))}
          </select>
          <input
            type="number"
            name="score"
            defaultValue={scoreList.score}
            onChange={handleScore}
            placeholder="점수"
            max={100}
          />
        </ISinput>
      </div>
    </>
  );
};

export default TSubJectEditSchool;
