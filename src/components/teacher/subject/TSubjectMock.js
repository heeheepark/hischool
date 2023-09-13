import React, { useState, useEffect } from "react";
import {
  getMockMainSubData,
  getMockSubData,
} from "../../../api/teacher/inputMockRecordAxios";
import { IMRinput } from "../../../styles/teacher/studentrecord/InputSchoolRecordStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

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
    const inputValue = parseInt(e.target.value);
    if (isNaN(inputValue)) {
      return;
    }
    if (inputValue < 0) {
      e.target.value = "0";
    } else if (inputValue > 200) {
      e.target.value = "200";
    }
    const submitList = studentsData.map(item => {
      if (item.id === id) {
        item.standardscore = parseInt(e.target.value);
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
    if (inputValue < 1) {
      e.target.value = "1";
    } else if (inputValue > 9) {
      e.target.value = "9";
    }
    const submitList = studentsData.map(item => {
      if (item.id === id) {
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
    const submitList = studentsData.map(item => {
      if (item.id === id) {
        item.percent = parseInt(e.target.value);
      }
      return item;
    });
    setStudentsData(submitList);
  };
  const handleDelete = () => {
    const submitList = studentsData.filter(item => item.id !== id);
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
            max={200}
          />
          <input
            type="number"
            name="rating"
            onChange={e => handleRating(e)}
            placeholder="등급"
            min={0}
            max={9}
          />
          <input
            type="number"
            name="percent"
            onChange={e => handlePercentage(e)}
            placeholder="백분위"
            min={0}
            max={100}
          />
          <button onClick={handleDelete}>
            <FontAwesomeIcon icon={faCircleXmark} className="icon" />
          </button>
        </IMRinput>
      </div>
    </>
  );
};

export default TSubJectMock;
