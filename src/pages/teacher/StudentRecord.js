import React from "react";
import { StudentRecordDiv } from "../../styles/teacher/StudentRecordStyle";
import {
  StudentSearchList,
  SchoolRecordList,
  MockRecordList,
} from "../../components/teacher/StudentRecordList";
import {
  MockRecordFilter,
  SchoolRecordFilter,
} from "../../components/student/Filter";
import { Link } from "react-router-dom";

const StudentRecord = () => {
  return (
    <StudentRecordDiv>
      <h3>학생 성적 관리</h3>
      <div className="student-list-wrap">
        <form action="">
          <input type="text" placeholder="학생 이름을 입력하세요." />
          <button>검색</button>
        </form>
        <div className="student-list">
          <StudentSearchList />
        </div>
      </div>
      <div className="school-record-wrap">
        <div className="school-record-header">
          <div className="header-left">
            <h4>내신 성적 관리</h4>
            <SchoolRecordFilter />
          </div>
          <div className="btns">
            <button>수정</button>
            <button>삭제</button>
            <Link to="/teacher/inputschoolrecord">
              <button className="add-school-record">내신 성적 추가</button>
            </Link>
          </div>
        </div>
        <SchoolRecordList />
      </div>
      <div className="mock-record-wrap">
        <div className="mock-record-header">
          <div className="header-left">
            <h4>모의고사 성적 관리</h4>
            <MockRecordFilter />
          </div>
          <div className="btns">
            <button>수정</button>
            <button>삭제</button>
            <Link to="/teacher/inputmockrecord">
              <button className="add-mock-record">내신 성적 추가</button>
            </Link>
          </div>
        </div>
        <MockRecordList />
      </div>
    </StudentRecordDiv>
  );
};

export default StudentRecord;
