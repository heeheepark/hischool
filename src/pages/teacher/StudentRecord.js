import React, { useEffect, useState } from "react";
import {
  StudentListDiv,
  StudentRecordDiv,
} from "../../styles/teacher/StudentRecordStyle";
import { MockRecordList } from "../../components/teacher/MockRecordList";
// import { MockRecordFilter } from "../../components/student/Filter";
import { Link, useNavigate } from "react-router-dom";
import { SchoolRecordFilterDiv } from "../../styles/student/FilterStyle";
import { StudentRecordModal } from "../../components/Modal";
import { getStudentData } from "../../api/teacher/studentListAxios";
import {
  getStudentMockRecord,
  getStudentSchoolRecord,
} from "../../api/teacher/studentRecordAxios";
import SchoolRecordList from "../../components/teacher/SchoolRecordList";

const StudentRecord = () => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [studentListData, setStudentListData] = useState(null);
  const [studentSchoolRecordList, setStudentSchoolRecordList] = useState(null);
  // console.log(studentSchoolRecordList);
  const [studentMockRecordList, setStudentMockRecordList] = useState(null);

  const showModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleStudentList = e => {
    const allStudentList = document.querySelectorAll(".student-detail-list");
    allStudentList.forEach(item => item.classList.remove("active"));
    const clickList = e.currentTarget;
    clickList.classList.add("active");
    const studentId = parseInt(clickList.classList[0].slice(10));
    setSelectedId(studentId);
    getStudentSchoolRecord(studentId, setStudentSchoolRecordList);
    getStudentMockRecord(studentId, setStudentMockRecordList);
  };

  useEffect(() => {
    getStudentData(setStudentListData);

    // const defaultSelectedId = document.querySelector("li.active");
    // console.log(defaultSelectedId);
  }, []);

  useEffect(() => {
    if (studentListData) {
      const defaultSelectedId = document.querySelector("li.active");
      const studentId = parseInt(defaultSelectedId.classList[0].slice(10));
      setSelectedId(studentId);
      getStudentSchoolRecord(studentId, setStudentSchoolRecordList);
      getStudentMockRecord(studentId, setStudentMockRecordList);
    }
  }, [studentListData]);

  return (
    <>
      {modalOpen && (
        <StudentRecordModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
      <StudentRecordDiv>
        <h3>학생 성적 관리</h3>
        <div className="record-wrap">
          <div className="student-list-wrap">
            <form action="">
              <input type="text" placeholder="학생 이름을 입력하세요." />
              <button>검색</button>
            </form>
            <div className="student-list">
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
                      // onLoad={e => handleStudentList(e)}
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
                <button onClick={showModal}>삭제</button>
                <button
                  className="add-school-record"
                  onClick={() => {
                    navigate("/teacher/inputschoolrecord", {
                      state: selectedId,
                    });
                  }}
                >
                  내신 성적 추가
                </button>
              </div>
            </div>
            <SchoolRecordList
              studentSchoolRecordList={studentSchoolRecordList}
            />
          </div>
          <div className="mock-record-wrap">
            <div className="mock-record-header">
              <div className="header-left">
                <h4>모의고사 성적 관리</h4>
                {/* <MockRecordFilter /> */}
              </div>
              <div className="btns">
                <button>수정</button>
                <button onClick={showModal}>삭제</button>
                <button
                  className="add-mock-record"
                  onClick={() => {
                    navigate("/teacher/inputmockrecord", {
                      state: selectedId,
                    });
                  }}
                >
                  모의고사 성적 추가
                </button>
              </div>
            </div>
            <MockRecordList studentMockRecordList={studentMockRecordList} />
          </div>
        </div>
      </StudentRecordDiv>
    </>
  );
};

export default StudentRecord;
