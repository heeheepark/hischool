import React, { useState, useEffect } from "react";
import {
  getMockMainSubData,
  getMockSubData,
} from "../../../api/teacher/inputMockRecordAxios";
import { IMRinput } from "../../../styles/teacher/studentrecord/InputSchoolRecordStyle";

const TSubJectMock = ({ id, studentsData, setStudentsData }) => {
  const [initSubCate, setInitSubCate] = useState(null);
  const [selectedSubCate, setSelectedSubCate] = useState(null);
  const [initDetailSub, setInitDetailSub] = useState(null);

  useEffect(() => {
    getMockMainSubData(setInitSubCate);
    if (selectedSubCate) {
      getMockSubData(selectedSubCate, setInitDetailSub);
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

  const handleStandardScore = e => {
    const submitList = studentsData.map(item => {
      if (item.id === id) {
        item.standardscore = parseInt(e.target.value);
      }
      return item;
    });
    setStudentsData(submitList);
    console.log(submitList)
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

  const handlePercentage = e => {
    const submitList = studentsData.map(item => {
      if (item.id === id) {
        item.percent = parseInt(e.target.value);
      }
      return item;
    });
    setStudentsData(submitList);
  };

  return (
    <>
      <div>
        <IMRinput>
          <select name="subCategory" onChange={e => handleSubCate(e)}>
            <option value="">과목 계열 선택</option>
            {initSubCate?.map((subCate, index) => (
              <option key={index} value={subCate.categoryid}>
                {subCate.nm}
              </option>
            ))}
          </select>
          <select name="detailSub" onChange={e => handleDetailSub(e)}>
            <option value="">세부 과목 선택</option>
            {initDetailSub?.map((detailSub, index) => (
              <option key={index} value={detailSub.subjectid}>
                {detailSub.nm}
              </option>
            ))}
          </select>
          <input
            type="number"
            name="standardscore"
            onChange={e => handleStandardScore(e)}
            placeholder="표준 점수"
            min={0}
          />
          <input
            type="number"
            name="rating"
            onChange={e => handleRating(e)}
            placeholder="등급"
            max={9}
          />
          <input
            type="number"
            name="percent"
            onChange={e => handlePercentage(e)}
            placeholder="백분위"
            max={100}
          />
        </IMRinput>
      </div>
    </>
  );
};

export default TSubJectMock;
