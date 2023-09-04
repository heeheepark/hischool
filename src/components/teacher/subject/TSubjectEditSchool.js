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
  const [initSubCate, setInitSubCate] = useState(null);
  const [selectedSubCate, setSelectedSubCate] = useState(scoreList.categoryId);
  const [initDetailSub, setInitDetailSub] = useState(null);
  const [defaultSubject, setDefaultSubject] = useState(scoreList.categoryId);
  const [defaultDetailSub, setDefaultDetailSub] = useState(scoreList.subjectId);

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

  const handleSubject = e => {
    setSelectedSubCate(e.target.value);
    setDefaultSubject(e.target.value);
  };
  const handleDetailSubject = e => {
    const submitList = studentsData?.map(item => {
      if (item.id === id) {
        item.subjectId = parseInt(e.target.value);
      }
      return item;
    });
    setDefaultDetailSub(e.target.value);
    setStudentsData(submitList);
  };
  {
    studentsData.subjectId === initDetailSub.subjectid;
  }

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

  useEffect(() => {
    getSchoolMainSubData(setInitSubCate);
    if (selectedSubCate) getSchoolSubData(selectedSubCate, setInitDetailSub);
  }, [selectedSubCate]);

  return (
    <>
      <div>
        <ISinput>
          <select
            defaultValue={scoreList.semester}
            onChange={handleSemester}
            name="semester"
          >
            <option value={scoreList.semester}>{scoreList.semester}학기</option>
            <option value="1학기">1학기</option>
            <option value="2학기">2학기</option>
          </select>
          <select
            defaultValue={scoreList.midfinal}
            onChange={handleDropTest}
            name="test-type"
          >
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
            <option value={studentsData.subjectId}></option>
            {initDetailSub?.map((item, index) => (
              <option key={index} value={item.subjectid}>
                {item.nm}
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
