import React from "react";
import { StudentListDiv } from "../../../styles/teacher/studentrecord/StudentRecordStyle";

const SearchStudent = ({
  studentListData,
  setSelectedId,
  handleStudentRecordData,
}) => {
  const category = ["이름", "생년월일"];

  // 학생 선택
  const handleStudentList = e => {
    const allStudentList = document.querySelectorAll(".student-detail-list");
    allStudentList.forEach(item => item.classList.remove("active"));
    const clickList = e.currentTarget;
    clickList.classList.add("active");
    const studentId = parseInt(clickList.classList[0].slice(10));
    setSelectedId(studentId);
    handleStudentRecordData(studentId);
  };

  return (
    <div className="student-list-wrap">
      <form action="">
        <input type="text" placeholder="학생 이름을 입력하세요." />
        <button>검색</button>
      </form>
      <div className="student-list">
        <StudentListDiv>
          <ul className="category">
            {category.map(item => (
              <li className="category-th" key={item}>
                {item}
              </li>
            ))}
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
                  <li>{item.snm}</li>
                  <li>{item.birth}</li>
                </ul>
              </li>
            ))}
          </ul>
        </StudentListDiv>
      </div>
    </div>
  );
};

export default SearchStudent;
