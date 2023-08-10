import React, { useEffect, useState } from "react";
import {
  StudentListDiv,
  StudentRecordDiv,
} from "../../styles/teacher/StudentRecordStyle";
import MockRecordList from "../../components/teacher/MockRecordList";
// import { MockRecordFilter } from "../../components/student/Filter";
import { useNavigate } from "react-router-dom";
import { SchoolRecordFilterDiv } from "../../styles/student/FilterStyle";
import { MockRecordModal, SchoolRecordModal } from "../../components/Modal";
import { getStudentData } from "../../api/teacher/studentListAxios";
import {
  deleteStudentMockRecord,
  deleteStudentSchoolRecord,
  getStudentMockRecord,
  getStudentSchoolRecord,
} from "../../api/teacher/studentRecordAxios";
import SchoolRecordList from "../../components/teacher/SchoolRecordList";

const StudentRecord = () => {
  const category = ["연번", "이름", "생년월일", "연락처", "이메일"];
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(null);
  const [schoolModalOpen, setSchoolModalOpen] = useState(false);
  const [mockModalOpen, setMockModalOpen] = useState(false);
  const [studentListData, setStudentListData] = useState(null);
  const [studentSchoolRecordList, setStudentSchoolRecordList] = useState(null);
  const [schoolResultIdList, setSchoolResultIdList] = useState([]);
  const [studentMockRecordList, setStudentMockRecordList] = useState(null);
  const [mockResultIdList, setMockResultIdList] = useState([]);
  const [schoolDeleteOk, setschoolDeleteOk] = useState(false);
  const [mockDeleteOk, setmockDeleteOk] = useState(false);

  const showSchoolModal = () => {
    setSchoolModalOpen(true);
  };

  const showMockModal = () => {
    setMockModalOpen(true);
  };

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

  // 선택한 학생 데이터 불러오기
  const handleStudentRecordData = studentId => {
    getStudentSchoolRecord(studentId, setStudentSchoolRecordList);
    getStudentMockRecord(studentId, setStudentMockRecordList);
  };

  // 초기 데이터 불러오기
  useEffect(() => {
    getStudentData(setStudentListData);
  }, []);

  // 기본값으로 선택된 학생 데이터 불러오기
  useEffect(() => {
    if (studentListData) {
      const defaultSelectedId = document.querySelector("li.active");
      const studentId = parseInt(defaultSelectedId?.classList[0].slice(10));
      setSelectedId(studentId);
      handleStudentRecordData(studentId);
    }
  }, [studentListData]);

  // School Record Modal 확인 클릭 시
  useEffect(() => {
    if (schoolResultIdList.length !== 0) {
      schoolResultIdList.forEach(item => deleteStudentSchoolRecord(item));
    }
    setSchoolModalOpen(false);
    getStudentSchoolRecord(selectedId, setStudentSchoolRecordList);
    getStudentMockRecord(selectedId, setStudentMockRecordList);
    setschoolDeleteOk(false);
  }, [schoolDeleteOk]);

  // Mock Record Modal 확인 클릭 시
  useEffect(() => {
    if (mockResultIdList.length !== 0) {
      mockResultIdList.forEach(item => deleteStudentMockRecord(item));
    }
    setMockModalOpen(false);
    getStudentSchoolRecord(selectedId, setStudentSchoolRecordList);
    getStudentMockRecord(selectedId, setStudentMockRecordList);
    setmockDeleteOk(false);
  }, [mockDeleteOk]);

  return (
    <>
      {schoolModalOpen && (
        <SchoolRecordModal
          schoolModalOpen={schoolModalOpen}
          setSchoolModalOpen={setSchoolModalOpen}
          setschoolDeleteOk={setschoolDeleteOk}
        />
      )}
      {mockModalOpen && (
        <MockRecordModal
          mockModalOpen={mockModalOpen}
          setMockModalOpen={setMockModalOpen}
          setmockDeleteOk={setmockDeleteOk}
        />
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
                <button
                  onClick={() => {
                    navigate("/teacher/inputschoolrecord", {
                      state: [selectedId, schoolResultIdList],
                    });
                  }}
                >
                  수정
                </button>
                <button onClick={showSchoolModal}>삭제</button>
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
              setSchoolResultIdList={setSchoolResultIdList}
              schoolResultIdList={schoolResultIdList}
            />
          </div>
          <div className="mock-record-wrap">
            <div className="mock-record-header">
              <div className="header-left">
                <h4>모의고사 성적 관리</h4>
                {/* <MockRecordFilter /> */}
              </div>
              <div className="btns">
                <button
                  onClick={() => {
                    navigate("/teacher/inputschoolrecord", {
                      state: [selectedId, mockResultIdList],
                    });
                  }}
                >
                  수정
                </button>
                <button onClick={showMockModal}>삭제</button>
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
            <MockRecordList
              studentMockRecordList={studentMockRecordList}
              setMockResultIdList={setMockResultIdList}
              mockResultIdList={mockResultIdList}
            />
          </div>
        </div>
      </StudentRecordDiv>
    </>
  );
};

export default StudentRecord;
