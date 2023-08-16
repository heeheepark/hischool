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
  const [selectedSubCate, setSelectedSubCate] = useState(scoreList.subjectId);
  const [initDetailSub, setInitDetailSub] = useState(null);
  const [subDetailSubList, setSubInitDetailSubList] = useState(null);
  const [defaultSubject, setDefaultSubject] = useState(scoreList.subjectId);
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
    const arr = initDetailSub.filter(
      item => item.subjectid === parseInt(e.target.value),
    );
    setSubInitDetailSubList(arr);
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
        item.classrank = parseInt(e.target.value);
      }
      return item;
    });
    setStudentsData(submitList);
  };

  // 전교등수
  const handleWholeRank = e => {
    const submitList = studentsData.map(item => {
      if (item.id === id) {
        item.wholerank = parseInt(e.target.value);
      }
      return item;
    });
    setStudentsData(submitList);
  };
  const getAllData = async () => {
    await getSchoolMainSubData(setInitSubCate);
    if (selectedSubCate) {
      const res = await getSchoolSubData(setInitDetailSub);
      const arr = res.filter(item => item.subjectid === selectedSubCate);
      setSubInitDetailSubList(arr);
    }
    getSchoolclassData(setClassCount);
    getSchoolData(setWholeCount);
  };
  useEffect(() => {
    getAllData();
  }, []);
  console.log(scoreList, "scoreList")
  console.log(studentsData, "studentsData")
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
            <option value="1">중간고사</option>
            <option value="2">기말고사</option>
          </select>
          <select
            name="subject"
            value={defaultSubject}
            onChange={handleSubject}
          >
            {initSubCate?.map((item, index) => {
              return (
                <option key={index} value={item.subjectid}>
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
            {subDetailSubList?.map((subSubject, index) => (
              <option key={index} value={subSubject.subjectid}>
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
