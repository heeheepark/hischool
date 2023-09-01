import React, { useState, useEffect } from "react";
import { ISRinput } from "../../styles/teacher/InputSchoolRecordStyle";
import {
  getSchoolMainSubData,
  getSchoolSubData,
} from "../../api/teacher/inputSchoolRecordAxios";
const TSubJectSchool = ({ id, studentsData, setStudentsData }) => {
  const [initSubCate, setInitSubCate] = useState(null);
  const [initDetailSub, setInitDetailSub] = useState(null);
  const [selectedSubCate, setSelectedSubCate] = useState(null);

  useEffect(() => {
    getSchoolMainSubData(setInitSubCate);
    if (selectedSubCate) {
      getSchoolSubData(selectedSubCate, setInitDetailSub);
    }
  }, [selectedSubCate]);

  const handleSubCate = e => {
    setSelectedSubCate(e.target.value);
  };

  const handleDetailSub = e => {
    const submitList = studentsData.map(item => {
      if (item.id === id) {
        item.subjectid = parseInt(e.target.value);
      }
      return item;
    });
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
          <select name="subject" onChange={handleSubCate}>
            <option value="">과목 계열 선택</option>
            {initSubCate?.map((mainSubject, index) => (
              <option key={index} value={mainSubject.categoryid}>
                {mainSubject.nm}
              </option>
            ))}
          </select>
          <select name="subjectid" onChange={handleDetailSub}>
            <option value="">세부 과목 선택</option>
            {initDetailSub?.map((item, index) => (
              <option key={index} value={item.subjectid}>
                {item.nm}
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
