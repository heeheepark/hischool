import React, { useState, useEffect } from "react";
import { ISainput, ISinput } from "../../styles/teacher/InputSchoolRecordStyle";
import {
  getSchoolData,
  getSchoolEditData,
  getSchoolMainSubData,
  getSchoolSubData,
  getSchoolclassData,
} from "../../api/teacher/inputSchoolRecordAxios";

const TSubJectEditSchool = ({
  id,
  studentsData,
  schoolEditData,
  setStudentsData,
}) => {
  const [dropSemester, setDropSemester] = useState("");
  const [dropTest, setDropTest] = useState("");
  const [subject, setSubject] = useState("");
  const [detailsubject, setDetailSubject] = useState("");
  const [initSubCate, setInitSubCate] = useState([]);
  const [initDetailSub, setInitDetailSub] = useState(null);
  const [classCount, setClassCount] = useState(null);
  const [wholeCount, setWholeCount] = useState(null);
  useEffect(() => {
    getSchoolMainSubData(setInitSubCate);
    getSchoolSubData(setInitDetailSub);
    getSchoolclassData(setClassCount);
    getSchoolData(setWholeCount);
    getSchoolEditData();
  }, []);
  useEffect(() => {
    console.log("최초 데이터 처리", schoolEditData);
    console.log(schoolEditData.semester + "학기");
    console.log("안녕하세요", schoolEditData.categoryId);
    console.log("잘가세요", schoolEditData.subjectId);
    console.log("잘있어요", initSubCate);
    console.log("다시만나요", initDetailSub);
    setDropSemester(schoolEditData.semester + "학기");
    console.log(typeof schoolEditData.midfinal);
    if (schoolEditData.midfinal === 1) {
      setDropTest("1");
    } else if (schoolEditData.midfinal === 2) {
      setDropTest("2");
    }
  }, [initSubCate]);
  console.log(studentsData);

  // 학기 변경
  const handleSemester = e => {
    setDropSemester(e.target.value);
    studentsData.map(item => (item.semester = parseInt(e.target.value)));
  };

  // 시험유형(중간/기말) 변경
  const handleDropTest = e => {
    setDropTest(e.target.value);
    studentsData.map(item => (item.midfinal = parseInt(e.target.value)));
  };

  // 과목계열
  const handleSubCate = e => {
    const submitList = studentsData.map(item => {
      if (item.id === id) {
        item.subjectid = parseInt(e.target.value);
      }
      return item;
    });
    setStudentsData(submitList);
  };

  // 서브과목
  const handleDetailSub = e => {
    const submitList = studentsData.map(item => {
      if (item.id === id) {
        item.subjectid = parseInt(e.target.value);
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

  return (
    <>
      <div>
        <ISinput>
          <select value={dropSemester} onChange={handleSemester}>
            <option value="1학기">1학기</option>
            <option value="2학기">2학기</option>
          </select>
          <select value={dropTest} onChange={handleDropTest}>
            <option value="1">중간고사</option>
            <option value="2">기말고사</option>
          </select>
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
            />
            <span> / {classCount}</span>
          </ISainput>
          <ISainput>
            <input
              type="number"
              name="wholerank"
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
