import React, { useState, useEffect } from "react";
import {
  getMockMainSubData,
  getMockSubData,
} from "../../../api/teacher/inputMockRecordAxios";
import { IMREdit } from "../../../styles/teacher/studentrecord/InputSchoolRecordStyle";

const TSubJectEditMock = ({
  resultId,
  scoreList,
  studentsData,
  setStudentsData,
}) => {
  const [initSubCate, setInitSubCate] = useState(null);
  const [selectedSubCate, setSelectedSubCate] = useState(scoreList.categoryId);
  const [initDetailSub, setInitDetailSub] = useState(null);
  const [defaultSubject, setDefaultSubject] = useState(scoreList.categoryId);
  const [defaultDetailSub, setDefaultDetailSub] = useState(scoreList.subjectId);

  const handleMonth = e => {
    const submitList = studentsData?.map(item => {
      if (item.resultId === resultId) {
        item.mon = parseInt(e.target.value);
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
      if (item.resultId === resultId) {
        item.subjectId = e.target.value;
      }
      return item;
    });
    setDefaultDetailSub(e.target.value);
    setStudentsData(submitList);
  };

  const handleStandardScore = e => {
    const inputValue = parseInt(e.target.value);
    if (isNaN(inputValue)) {
      return;
    }
    if (inputValue < 0) {
      e.target.value = "0";
    } else if (inputValue > 200) {
      e.target.value = "200";
    }
    const submitList = studentsData?.map(item => {
      if (item.resultId === resultId) {
        item.standardScore = parseInt(e.target.value);
      }
      return item;
    });
    setStudentsData(submitList);
  };

  const handleRating = e => {
    const inputValue = parseInt(e.target.value);
    if (isNaN(inputValue)) {
      return;
    }
    if (inputValue < 0) {
      e.target.value = "0";
    } else if (inputValue > 9) {
      e.target.value = "9";
    }
    const submitList = studentsData?.map(item => {
      if (item.resultId === resultId) {
        item.rating = parseInt(e.target.value);
      }
      return item;
    });
    setStudentsData(submitList);
  };

  const handlePercentage = e => {
    const inputValue = parseInt(e.target.value);
    if (isNaN(inputValue)) {
      return;
    }
    if (inputValue < 0) {
      e.target.value = "0";
    } else if (inputValue > 100) {
      e.target.value = "100";
    }
    const submitList = studentsData?.map(item => {
      if (item.resultId === resultId) {
        item.percent = parseInt(e.target.value);
      }
      return item;
    });
    setStudentsData(submitList);
  };

  useEffect(() => {
    getMockMainSubData(setInitSubCate);
    if (selectedSubCate) getMockSubData(selectedSubCate, setInitDetailSub);
  }, [selectedSubCate]);

  return (
    <>
      <div>
        <IMREdit>
          <select
            defaultValue={scoreList.mon || ""}
            onChange={handleMonth}
            name="month"
          >
            <option value={3}>3월</option>
            <option value={6}>6월</option>
            <option value={9}>9월</option>
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
            value={defaultDetailSub || ""}
            onChange={handleDetailSubject}
          >
            <option value="">세부 과목 선택</option>
            {initDetailSub?.map((subSubject, index) => (
              <option key={index} value={subSubject.subjectid}>
                {subSubject.nm}
              </option>
            ))}
          </select>
          <input
            type="number"
            name="standardScore"
            defaultValue={scoreList.standardScore || ""}
            onChange={handleStandardScore}
            placeholder="점수"
          />
          <input
            type="number"
            name="rating"
            defaultValue={scoreList.rating || ""}
            onChange={handleRating}
            placeholder="등급"
            min={0}
            max={9}
          />
          <input
            type="number"
            name="percent"
            defaultValue={scoreList.percent || ""}
            onChange={handlePercentage}
            placeholder="백분위"
            min={0}
            max={100}
          />
        </IMREdit>
      </div>
    </>
  );
};

export default TSubJectEditMock;
