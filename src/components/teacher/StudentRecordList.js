import { useEffect, useState } from "react";
import {
  MockRecordListDiv,
  SchoolRecordListDiv,
  StudentListDiv,
} from "../../styles/teacher/StudentRecordStyle";
import { getStudentData } from "../../api/teacherAxios";
import {
  getStudentMockRecord,
  getStudentSchoolRecord,
} from "../../api/studentRecordAxios";

// const [studentSchoolRecordList, setStudentSchoolRecordList] = useState(null);
// const [studentMockRecordList, setStudentMockRecordList] = useState(null);

const handleStudentList = e => {
  const allStudentList = document.querySelectorAll(".student-detail-list");
  allStudentList.forEach(item => item.classList.remove("active"));
  const clickList = e.currentTarget;
  clickList.classList.add("active");
  const StudentId = parseInt(clickList.classList[0].slice(10));
  getStudentSchoolRecord(StudentId);
  getStudentMockRecord(StudentId);
};

const StudentSearchList = () => {
  const [studentListData, setStudentListData] = useState(null);
  console.log(studentListData);

  useEffect(() => {
    getStudentData(setStudentListData);
  }, []);

  return (
    <StudentListDiv>
      <ul className="category">
        <li className="category-th">연번</li>
        <li className="category-th">이름</li>
        <li className="category-th">생년월일</li>
        <li className="category-th">연락처</li>
        <li className="category-th">이메일</li>
      </ul>
      <ul className="list-wrap">
        {studentListData?.map((item, index) => (
          <li
            className={
              index === 0
                ? `studentNum${item.userId} student-detail-list active`
                : `studentNum${item.userId} student-detail-list`
            }
            onClick={e => handleStudentList(e)}
            key={item.userId}
          >
            <ul>
              <li>{index + 1}</li>
              <li>{item.snm}</li>
              <li>{item.birth}</li>
              <li>{item.phone}</li>
              <li>{item.email}</li>
            </ul>
          </li>
        ))}
      </ul>
    </StudentListDiv>
  );
};

const SchoolRecordList = () => {
  const handleAllCheck = e => {
    const allCheckBox = document.querySelectorAll(".school-checkbox");
    if (e.target.checked === true) {
      allCheckBox.forEach(item => (item.checked = true));
    } else {
      allCheckBox.forEach(item => (item.checked = false));
    }
  };
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
        {/* {studentSchoolRecordList?.map(item => (
          <li className="data-table" key={item.resultId}>
            <ul>
              <li>
                <input type="checkbox" className="school-checkbox" />
              </li>
              <li>{item.year}</li>
              <li></li>
              <li>중간</li>
              <li>국어</li>
              <li>언어와매체</li>
              <li>97</li>
              <li>1</li>
              <li>2/25</li>
              <li>10/360</li>
            </ul>
          </li>
        ))} */}
      </ul>
    </SchoolRecordListDiv>
  );
};

const MockRecordList = () => {
  const handleAllCheck = e => {
    const allCheckBox = document.querySelectorAll(".mock-checkbox");
    if (e.target.checked === true) {
      allCheckBox.forEach(item => (item.checked = true));
    } else {
      allCheckBox.forEach(item => (item.checked = false));
    }
  };
  return (
    <MockRecordListDiv>
      <ul className="category">
        <li className="category-th">
          <input type="checkbox" onClick={e => handleAllCheck(e)} />
        </li>
        <li className="category-th">연도</li>
        <li className="category-th">월</li>
        <li className="category-th">과목 계열</li>
        <li className="category-th">과목명</li>
        <li className="category-th">표준점수</li>
        <li className="category-th">등급</li>
        <li className="category-th">백분위</li>
      </ul>
      <ul className="record-data">
        {/* {studentMockRecordList?.map(item => (
          <li className="data-table" key={item.userId}>
            <ul>
              <li>
                <input type="checkbox" className="mock-checkbox" />
              </li>
              <li>{item.year}</li>
              <li>{item.mon}</li>
              <li>{item.categoryId}</li>
              <li>{item.nm}</li>
              <li>{item.sc}</li>
              <li>{item.rating}</li>
              <li>{`${item.percent}%`}</li>
            </ul>
          </li>
        ))} */}
      </ul>
    </MockRecordListDiv>
  );
};

export { StudentSearchList, SchoolRecordList, MockRecordList };
