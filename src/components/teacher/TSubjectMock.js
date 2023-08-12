import React, { useState, useEffect } from "react";
import { IMRinput } from "../../styles/teacher/InputSchoolRecordStyle";

const TSubJectMock = ({
  initSubCate,
  setSelectedSubCate,
  initDetailSub,
  setSchoolRecordData,
  id,
  subjectData,
  dropMonth,
  studentsData,
  updateLastSavedData,
  // selectedStudentIndex,
}) => {
  // console.log(initSubCate);
  const [subCategory, setSubCategory] = useState(null);
  const [detailSub, setDetailSub] = useState(null);
  const [standardScore, setStandardScore] = useState(null);
  const [rating, setRating] = useState(null);
  const [percentage, setPercentage] = useState(null);

  const submitData = {
    subject: subCategory,
    subjectid: detailSub,
    standardscore: standardScore,
    rating: rating,
    percent: percentage,
    mon: dropMonth,
  };
  // setSchoolRecordData(submitData);

  // console.log(submitData);

  const handleSubCate = e => {
    setSubCategory(e.target.value);
    setSelectedSubCate(e.target.value);
  };

  const handleDetailSub = e => {
    setDetailSub(e.target.value);
  };

  const handleStandardScore = e => {
    setStandardScore(e.target.value);
  };

  const handleRating = e => {
    setRating(e.target.value);
  };

  const handlePercentage = e => {
    setPercentage(e.target.value);
  };

  // console.log(studentData);

  // useEffect(() => {
  //   // 선택된 학생 데이터가 있을 경우, 수정 폼에 해당 학생 데이터를 불러옵니다.
  //   if (selectedStudentIndex !== null) {
  //     setStudentData(studentsData[selectedStudentIndex]);
  //   } else {
  //     // 선택된 학생 데이터가 없으면 초기화합니다.
  //     // setStudentData(initialStudentData);
  //   }
  // }, [selectedStudentIndex]);

  // const handleInputChange = e => {
  //   const { name, value } = e.target;
  //   // 숫자만 필터링하여 숫자 이외의 문자는 제거
  //   const filteredValue = value;
  //   // score와 grade 입력 폼의 최댓값 설정
  //   let updatedValue = filteredValue;
  //   if (name === "rating") {
  //     updatedValue = Math.min(parseInt(filteredValue, 10), 9);
  //   } else if (name === "percent") {
  //     updatedValue = Math.min(parseInt(filteredValue, 10), 100);
  //   }
  //   setStudentData(prevData => ({
  //     ...prevData,
  //     [name]: updatedValue,
  //   }));

  // const updatedData = {
  //   ...studentData,
  //   [name]: updatedValue,
  //   // mon: dropMonth,
  // };
  // 변경된 데이터를 InputSchoolRecord 컴포넌트로 전달
  // updateLastSavedData(id, updatedData);

  return (
    <>
      <div>
        <IMRinput>
          <select
            name="subCategory"
            value={subCategory}
            onChange={handleSubCate}
          >
            <option value="">과목 계열 선택</option>
            {initSubCate?.map((subCate, index) => (
              <option key={index} value={subCate.categoryid}>
                {subCate.nm}
              </option>
            ))}
          </select>
          <select name="detailSub" value={detailSub} onChange={handleDetailSub}>
            <option value="">세부 과목 선택</option>
            {initDetailSub?.map((detailSub, index) => (
              <option key={index} value={detailSub.categoryid}>
                {detailSub.nm}
              </option>
            ))}
          </select>
          <input
            type="number"
            name="standardscore"
            value={standardScore}
            onChange={handleStandardScore}
            placeholder="표준 점수"
            min={0}
          />
          <input
            type="number"
            name="rating"
            value={rating}
            onChange={handleRating}
            placeholder="등급"
            max={9}
          />
          <input
            type="number"
            name="percent"
            value={percentage}
            onChange={handlePercentage}
            placeholder="백분위"
            max={100}
          />
        </IMRinput>
      </div>
    </>
  );
};

export default TSubJectMock;
