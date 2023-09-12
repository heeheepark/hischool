import React, { useState, useEffect } from "react";
import {
  getSchoolMainSubData,
  getSchoolSubData,
} from "../../../api/teacher/inputSchoolRecordAxios";
import { ISRinput } from "../../../styles/teacher/studentrecord/InputSchoolRecordStyle";

const TSubJectSchool = ({ id, studentsData, setStudentsData }) => {
  const [mainSubjects, setMainSubjects] = useState([]);
  const [subSubjects, setSubSubjects] = useState([]);
  const [mainSubject, setMainSubject] = useState("");
  const [subject, setSubject] = useState("");

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

  const handleSubCate = e => {
    setMainSubject(e.target.value);
  };

  const handleDetailSub = e => {
    const submitList = studentsData.map(item => {
      if (item.id === id) {
        item.subjectid = parseInt(e.target.value);
      }
      return item;
    });
    setSubject(e.target.value);
    setStudentsData(submitList);
  };

  const handleScore = e => {
    const submitList = studentsData.map(item => {
      if (item.id === id) {
        item.score = parseInt(e.target.value);
      }
      return item;
    });
    setStudentsData(submitList);
  };

  return (
    <>
      <div>
        <ISRinput>
          <select
            name="mainSubject"
            value={mainSubject}
            onChange={handleSubCate}
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
          <select name="subSubject" value={subject} onChange={handleDetailSub}>
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
            onChange={handleScore}
            placeholder="점수"
            min={0}
            max={100}
          />
        </ISRinput>
      </div>
    </>
  );
};
export default TSubJectSchool;
