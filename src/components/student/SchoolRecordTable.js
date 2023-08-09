import { useEffect, useState } from "react";
import { SchoolRecordTableDiv } from "../../styles/student/SchoolRecordStyle";
import { SchoolRecordFilterDiv } from "../../styles/student/FilterStyle";
import { getAllSchoolRecord } from "../../api/student/schoolRecordAxios";
import {
  getAllStudentCount,
  getStudentCount,
} from "../../api/teacher/teacherHomeAxios";

const SchoolRecordTable = () => {
  const cateList = [
    "연도",
    "학기",
    "시험 구분",
    "과목 계열",
    "과목명",
    "점수",
    "등급",
    "반석차",
    "전교석차",
  ];
  const [defaultSchoolRecord, setDefaultSchoolRecord] = useState(null);
  const [allSchoolRecord, setAllSchoolRecord] = useState(null);
  const [allStudentCount, setAllStudentCount] = useState(null);
  const [studentCount, setStudentCount] = useState(null);
  const [year, setYear] = useState(null);
  const [semester, setSemester] = useState(null);
  const [testType, setTestType] = useState(null);

  useEffect(() => {
    getAllSchoolRecord(setAllSchoolRecord);
    getStudentCount(setStudentCount);
    getAllStudentCount(setAllStudentCount);
  }, []);

  const handleYearList = e => {
    const selectYear = e.target.value;
    setYear(selectYear);
    getAllSchoolRecord(setAllSchoolRecord, year);
  };
  const handleSemesterList = e => {
    const selectSemester = e.target.value;
    setSemester(selectSemester);
    getAllSchoolRecord(setAllSchoolRecord, year, semester);
  };
  const handleTestTypeList = e => {
    const selectTestType = e.target.value;
    setTestType(selectTestType);
    getAllSchoolRecord(setAllSchoolRecord, year, semester, testType);
  };

  const getUniqueYears = allSchoolRecord => {
    const years = new Set();
    allSchoolRecord?.forEach(item => years.add(item.year));
    const newYears = Array.from(years);
    return newYears.sort();
  };

  const getUniqueSemester = allSchoolRecord => {
    const semesters = new Set();
    allSchoolRecord?.forEach(item => semesters.add(item.semester));
    const newSemesters = Array.from(semesters);
    return newSemesters.sort();
  };

  const getUniqueTestType = allSchoolRecord => {
    const testTypes = new Set();
    allSchoolRecord?.forEach(item => testTypes.add(item.semester));
    const newTestTypes = Array.from(testTypes);
    return newTestTypes.sort();
  };

  return (
    <>
      <div className="title">
        <h4>내신 성적 목록</h4>
        <SchoolRecordFilterDiv>
          <select name="year" id="year" onChange={e => handleYearList(e)}>
            <option value="all">전체 연도</option>
            {getUniqueYears(allSchoolRecord).map((item, index) => (
              <option value={item} key={index}>
                {`${item}년`}
              </option>
            ))}
          </select>
          <select
            name="semester"
            id="semester"
            onChange={e => handleSemesterList(e)}
          >
            <option value="all">전체 학기</option>
            {getUniqueSemester(allSchoolRecord).map((item, index) => (
              <option value={item} key={index}>
                {`${item}학기`}
              </option>
            ))}
          </select>
          <select
            name="test-category"
            id="test-category"
            onChange={e => handleTestTypeList(e)}
          >
            <option value="all">전체 시험</option>
            {getUniqueSemester(allSchoolRecord).map((item, index) => (
              <option value={item} key={index}>
                {item === 1 ? "중간 " : "기말"}
              </option>
            ))}
          </select>
        </SchoolRecordFilterDiv>
      </div>
      <div className="record-table">
        <SchoolRecordTableDiv>
          <ul className="category">
            {cateList.map((item, index) => (
              <li className="category-th" key={index}>
                {item}
              </li>
            ))}
          </ul>
          <ul className="record-data">
            {allSchoolRecord?.map((item, index) => (
              <li className="data-table" key={index}>
                <ul>
                  <li>{item.year}</li>
                  <li>{item.semester}</li>
                  <li>{item.midFinal === 1 ? "중간" : "기말"}</li>
                  <li>{item.cateName}</li>
                  <li>{item.nm}</li>
                  <li>{item.score}</li>
                  <li>{item.rating}</li>
                  <li>{`${item.classRank}/${
                    studentCount ? studentCount : null
                  }`}</li>
                  <li>{`${item.wholeRank}/${allStudentCount}`}</li>
                </ul>
              </li>
            ))}
          </ul>
        </SchoolRecordTableDiv>
      </div>
    </>
  );
};
export default SchoolRecordTable;
