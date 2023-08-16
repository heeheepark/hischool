import React, { useState, useEffect } from "react";
import {
  ISRinput,
  ISainput,
} from "../../styles/teacher/InputSchoolRecordStyle";
import {
  getSchoolData,
  getSchoolMainSubData,
  getSchoolSubData,
  getSchoolclassData,
} from "../../api/teacher/inputSchoolRecordAxios";
const TSubJectSchool = ({ id, studentsData, setStudentsData }) => {
  const [initSubCate, setInitSubCate] = useState(null);
  const [initDetailSub, setInitDetailSub] = useState(null);
  const [classCount, setClassCount] = useState(null);
  const [wholeCount, setWholeCount] = useState(null);

  useEffect(() => {
    getSchoolMainSubData(setInitSubCate);
    getSchoolSubData(setInitDetailSub);
    getSchoolclassData(setClassCount);
    getSchoolData(setWholeCount);
  }, []);

  const handleSubCate = e => {};

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

  const handleRating = e => {
    const submitList = studentsData.map(item => {
      if (item.id === id) {
        item.rating = parseInt(e.target.value);
      }
      return item;
    });
    setStudentsData(submitList);
  };

  const handleClassRank = e => {
    const submitList = studentsData.map(item => {
      if (item.id === id) {
        item.classrank = parseInt(e.target.value);
      }
      return item;
    });
    setStudentsData(submitList);
  };

  const handleWholeRank = e => {
    const submitList = studentsData.map(item => {
      if (item.id === id) {
        item.wholerank = parseInt(e.target.value);
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
            {initSubCate?.map(mainSubject => (
              <option key={mainSubject.subjectid} value={mainSubject.subjectid}>
                {mainSubject.nm}
              </option>
            ))}
          </select>
          <select name="subjectid" onChange={handleDetailSub}>
            <option value="">세부 과목 선택</option>
            {initDetailSub?.map(item => (
              <option key={item.subjectid} value={item.subjectid}>
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
          <input
            type="number"
            name="rating"
            onChange={handleRating}
            placeholder="등급"
            max={9}
          />
          <ISainput>
            <input
              type="number"
              name="classrank"
              onChange={handleClassRank}
              placeholder="반 석차"
              min={1}
            />
            <span> / {classCount}</span>
          </ISainput>
          <ISainput>
            <input
              type="number"
              name="wholerank"
              onChange={handleWholeRank}
              placeholder="전교 석차"
              min={1}
            />
            <span> / {wholeCount}</span>
          </ISainput>
        </ISRinput>
      </div>
    </>
  );
};
export default TSubJectSchool;
