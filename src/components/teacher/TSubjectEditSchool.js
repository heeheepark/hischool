import React, { useState, useEffect } from "react";
import { ISainput, ISinput } from "../../styles/teacher/InputSchoolRecordStyle";
import {
  getSchoolData,
  getSchoolMainSubData,
  getSchoolSubData,
  getSchoolclassData,
} from "../../api/teacher/inputSchoolRecordAxios";

const TSubJectEditSchool = ({
  id,
  scoreList,
  studentsData,
  setStudentsData,
}) => {
  const [initSubCate, setInitSubCate] = useState(null);
  const [selectedSubCate, setSelectedSubCate] = useState(scoreList.categoryId);
  const [initDetailSub, setInitDetailSub] = useState(null);
  const [defaultSubject, setDefaultSubject] = useState(scoreList.categoryId);
  const [defaultDetailSub, setDefaultDetailSub] = useState(scoreList.subjectId);
  const [classCount, setClassCount] = useState(null);
  const [wholeCount, setWholeCount] = useState(null);

  const handleDetailSubject = e => {
    const submitList = studentsData.map(item => {
      if (item.id === id) {
        item.subjectId = parseInt(e.target.value);
      }
      return item;
    });
    setDefaultDetailSub(e.target.value);
    setStudentsData(submitList);
  };

  const handleSubject = e => {
    setSelectedSubCate(e.target.value);
    setDefaultSubject(e.target.value);
  };

  // 학기 변경
  const handleSemester = e => {
    const submitList = studentsData.map(item => {
      if (item.id === id) {
        item.semester = parseInt(e.target.value);
      }
      return item;
    });
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

  // 등급
  const handleRating = e => {
    const submitList = studentsData.map(item => {
      if (item.id === id) {
        item.rating = parseInt(e.target.value);
      }
      return item;
    });
    setStudentsData(submitList);
  };

  // 반 등수
  const handleClassRank = e => {
    const submitList = studentsData.map(item => {
      if (item.id === id) {
        item.classRank = parseInt(e.target.value);
      }
      return item;
    });
    setStudentsData(submitList);
  };

  // 전교등수
  const handleWholeRank = e => {
    const submitList = studentsData.map(item => {
      if (item.id === id) {
        item.wholeRank = parseInt(e.target.value);
      }
      return item;
    });
    setStudentsData(submitList);
  };

  useEffect(() => {
    getSchoolMainSubData(setInitSubCate);
    if (selectedSubCate) getSchoolSubData(selectedSubCate, setInitDetailSub);
    getSchoolclassData(setClassCount);
    getSchoolData(setWholeCount);
  }, [selectedSubCate]);
  console.log("initSubCate", initSubCate);
  return (
    <>
      <div>
        <ISinput>
          <select defaultValue={scoreList.semester} onChange={handleSemester}>
            <option value={scoreList.semester}>{scoreList.semester}학기</option>
            <option value="1학기">1학기</option>
            <option value="2학기">2학기</option>
          </select>
          <select defaultValue={scoreList.midfinal} onChange={handleDropTest}>
            <option value={1}>중간고사</option>
            <option value={2}>기말고사</option>
          </select>
          <select
            name="categoryId"
            value={defaultSubject}
            onChange={handleSubject}
          >
            <option value="">과목 계열 선택</option>
            {initSubCate?.map((item, index) => {
              return (
                <option key={index} value={item.categoryid}>
                  {item.nm}
                </option>
              );
            })}
          </select>
          <select
            name="subjectid"
            value={defaultDetailSub}
            onChange={handleDetailSubject}
          >
            {initDetailSub?.map(subSubject => (
              <option key={subSubject.subjectid} value={subSubject.subjectid}>
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
          <input
            type="number"
            name="rating"
            defaultValue={scoreList.rating}
            onChange={handleRating}
            placeholder="등급"
            max={9}
          />
          <ISainput>
            <input
              type="number"
              name="classrank"
              defaultValue={scoreList.classRank}
              onChange={handleClassRank}
              placeholder="반 석차"
            />
            <span> / {classCount}</span>
          </ISainput>
          <ISainput>
            <input
              type="number"
              name="wholerank"
              defaultValue={scoreList.wholeRank}
              onChange={handleWholeRank}
              placeholder="전교 석차"
            />
            <span> / {wholeCount}</span>
          </ISainput>
        </ISinput>
      </div>
    </>
  );
};

export default TSubJectEditSchool;
