import { useEffect, useState } from "react";
import { SchoolRecordListDiv } from "../../styles/teacher/StudentRecordStyle";
import { getAllSchoolRecord } from "../../api/student/schoolRecordAxios";
import {
  getAllStudentCount,
  getStudentCount,
} from "../../api/teacher/teacherHomeAxios";

const SchoolRecordList = ({ studentSchoolRecordList }) => {
  const [allStudentCount, setAllStudentCount] = useState(null);
  const [studentCount, setStudentCount] = useState(null);

  const handleAllCheck = e => {
    const allCheckBox = document.querySelectorAll(".school-checkbox");
    if (e.target.checked === true) {
      allCheckBox.forEach(item => (item.checked = true));
    } else {
      allCheckBox.forEach(item => (item.checked = false));
    }
  };

  useEffect(() => {
    getAllStudentCount(setAllStudentCount);
    getStudentCount(setStudentCount);
  }, []);
  return (
    <SchoolRecordListDiv>
      <ul className="category">
        <li className="category-th">
          <input type="checkbox" onClick={e => handleAllCheck(e)} />
        </li>
        <li className="category-th">연도</li>
        <li className="category-th">학기</li>
        <li className="category-th">시험 구분</li>
        <li className="category-th">과목 계열</li>
        <li className="category-th">과목명</li>
        <li className="category-th">점수</li>
        <li className="category-th">등급</li>
        <li className="category-th">반석차</li>
        <li className="category-th">전교석차</li>
      </ul>
      <ul className="record-data">
        {studentSchoolRecordList?.map(item => (
          <li className="data-table" key={item.resultId}>
            <ul>
              <li>
                <input type="checkbox" className="school-checkbox" />
              </li>
              <li>{item.year}</li>
              <li>{item.semester}</li>
              <li>{item.midFinal === 1 ? "중간" : "기말"}</li>
              <li>{item.cateName}</li>
              <li>{item.nm}</li>
              <li>{item.score}</li>
              <li>{item.rating}</li>
              <li>
                {item.classRank}/{studentCount}
              </li>
              <li>
                {item.wholeRank}/{allStudentCount}
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </SchoolRecordListDiv>
  );
};

export default SchoolRecordList;
