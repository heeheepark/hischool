import { useEffect, useState } from "react";
import {
  SchoolRecordFilterDiv,
  SchoolRecordTableDiv,
} from "../../../styles/student/record/SchoolRecordStyle";
import {
  getAllStudentCount,
  getStudentCount,
} from "../../../api/teacher/teacherHomeAxios";
import { getAllSchoolRecord } from "../../../api/student/schoolRecordAxios";

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

  const handleYearList = e => {
    const selectYear = e.target.value;
    setYear(selectYear);
  };

  const handleSemesterList = e => {
    const selectSemester = e.target.value;
    setSemester(selectSemester);
  };

  const handleTestTypeList = e => {
    const selectTestType = e.target.value;
    setTestType(selectTestType);
  };

  const yearList = defaultSchoolRecord => {
    const years = new Set();
    defaultSchoolRecord?.forEach(item => years.add(item.year));
    const newYears = Array.from(years);
    return newYears.sort((a, b) => b - a);
  };

  const semesterList = defaultSchoolRecord => {
    const semesters = new Set();
    defaultSchoolRecord?.forEach(item => semesters.add(item.semester));
    const newSemesters = Array.from(semesters);
    return newSemesters.sort((a, b) => b - a);
  };

  const testTypeList = defaultSchoolRecord => {
    const testTypes = new Set();
    defaultSchoolRecord?.forEach(item => testTypes.add(item.midFinal));
    const newTestTypes = Array.from(testTypes);
    return newTestTypes.sort((a, b) => b - a);
  };

  useEffect(() => {
    getAllSchoolRecord(
      setDefaultSchoolRecord,
      setAllSchoolRecord,
      year,
      semester,
      testType,
    );
    getStudentCount(setStudentCount);
    getAllStudentCount(setAllStudentCount);
  }, [year, semester, testType]);

  return (
    <>
      <div className="title">
        <h4>내신 성적 목록</h4>
        <SchoolRecordFilterDiv>
          <select name="year" id="year" onChange={e => handleYearList(e)}>
            <option value="">전체 연도</option>
            {yearList(defaultSchoolRecord).map((item, index) => (
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
            <option value="">전체 학기</option>
            {semesterList(defaultSchoolRecord).map((item, index) => (
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
            <option value="">전체 시험</option>
            {testTypeList(defaultSchoolRecord).map((item, index) => (
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
            {allSchoolRecord ? (
              allSchoolRecord.map((item, index) => (
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
              ))
            ) : (
              <p className="err-message">내신 성적 데이터가 없습니다.</p>
            )}
          </ul>
        </SchoolRecordTableDiv>
      </div>
    </>
  );
};
export default SchoolRecordTable;
