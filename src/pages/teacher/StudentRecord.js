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
import { SchoolRecordFilterDiv } from "../../styles/student/FilterStyle";

const StudentRecord = () => {
  return (
    <StudentRecordDiv>
      <h3>학생 성적 관리</h3>
      <div className="record-wrap">
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
                <button className="add-mock-record">모의고사 성적 추가</button>
              </Link>
            </div>
          </div>
          <MockRecordList />
        </div>
      </div>
    </StudentRecordDiv>
  );
};

export default StudentRecord;
