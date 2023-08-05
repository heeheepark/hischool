import { useEffect, useState } from "react";
import { SchoolRecordTableDiv } from "../../styles/student/SchoolRecordStyle";
import { getAllSchoolRecord } from "../../api/studentSchoolRecordAxios";
import { getStudentCount } from "../../api/teacherAxios";
import { SchoolRecordFilterDiv } from "../../styles/student/FilterStyle";

const SchoolRecordTable = () => {
  const [allSchoolRecord, setAllSchoolRecord] = useState(null);
  const [studentCount, setStudentCount] = useState(null);

  useEffect(() => {
    getAllSchoolRecord(setAllSchoolRecord);
    getStudentCount(setStudentCount);
  }, []);

  console.log(allSchoolRecord);

  return (
    <>
      <div className="title">
        <h4>내신 성적 목록</h4>
        <SchoolRecordFilterDiv>
          <select name="year" id="year">
            <option value="all">전체 연도</option>
            <option value="2023">2023년</option>
            <option value="2022">2022년</option>
            <option value="2021">2021년</option>
          </select>
          <select name="semester" id="semester">
            <option value="all">전체 학기</option>
            <option value="semester1">1학기</option>
            <option value="semester2">2학기</option>
          </select>
          <select name="test-category" id="test-category">
            <option value="all">전체 시험</option>
            <option value="middle">중간</option>
            <option value="final">기말</option>
          </select>
        </SchoolRecordFilterDiv>
      </div>
      <div className="record-table">
        <SchoolRecordTableDiv>
          <ul className="category">
            <li className="category-th">연도</li>
            <li className="category-th">학기</li>
            <li className="category-th">시험구분</li>
            <li className="category-th">과목 계열</li>
            <li className="category-th">과목명</li>
            <li className="category-th">점수</li>
            <li className="category-th">등급</li>
            <li className="category-th">반석차</li>
            <li className="category-th">전교석차</li>
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
                  <li>{`${item.classRank}/${studentCount}`}</li>
                  <li>{`${item.wholeRank}/360`}</li>
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
