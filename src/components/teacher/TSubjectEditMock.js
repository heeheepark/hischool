import React, { useState, useEffect } from "react";
import { IMREdit } from "../../styles/teacher/InputSchoolRecordStyle";
import {
  getMockMainSubData,
  getMockSubData,
} from "../../api/teacher/inputMockRecordAxios";

const TSubJectEditMock = ({ id, scoreList, studentsData, setStudentsData }) => {
  const [initSubCate, setInitSubCate] = useState(null);
  const [selectedSubCate, setSelectedSubCate] = useState(scoreList.categoryId);
  const [initDetailSub, setInitDetailSub] = useState(null);
  const [defaultSubject, setDefaultSubject] = useState(scoreList.categoryId);
  const [defaultDetailSub, setDefaultDetailSub] = useState(scoreList.subjectId);

  const handleMonth = e => {
    const submitList = studentsData?.map(item => {
      if (item.id === id) {
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
      if (item.id === id) {
        item.subjectId = parseInt(e.target.value);
      }
      return item;
    });
    setDefaultDetailSub(e.target.value);
    setStudentsData(submitList);
  };

  const handleStandardScore = e => {
    const submitList = studentsData?.map(item => {
      if (item.id === id) {
        item.standardScore = parseInt(e.target.value);
      }
      return item;
    });
    setStudentsData(submitList);
  };

  const handleRating = e => {
    const submitList = studentsData?.map(item => {
      if (item.id === id) {
        item.rating = parseInt(e.target.value);
      }
      return item;
    });
    setStudentsData(submitList);
  };

  const handlePercentage = e => {
    const submitList = studentsData?.map(item => {
      if (item.id === id) {
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
  console.log("initSubCate", initSubCate)
  return (
    <>
      <div>
        <IMREdit>
          <select defaultValue={scoreList.mon} onChange={handleMonth}>
            <option value="">월</option>
            {Array(12)
              .fill()
              .map((item, index) => (
                <option key={index} value={index + 1}>
                  {index + 1}월
                </option>
              ))}
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
            defaultValue={scoreList.standardScore}
            onChange={handleStandardScore}
            placeholder="점수"
          />
          <input
            type="number"
            name="rating"
            value={scoreList.rating}
            onChange={handleRating}
            placeholder="등급"
            max={9}
          />
          <input
            type="number"
            name="percent"
            value={scoreList.percent}
            onChange={handlePercentage}
            placeholder="백분위"
          />
        </IMREdit>
      </div>
    </>
  );
};

export default TSubJectEditMock;
