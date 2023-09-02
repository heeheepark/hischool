import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  deleteStudentMockRecord,
  getStudentMockRecord,
} from "../../../api/teacher/studentRecordAxios";
import {
  DeleteErrorModal,
  EditErrorModal,
  MockRecordModal,
} from "../../modal/teacherModal";
import { SchoolRecordFilterDiv } from "../../../styles/student/record/SchoolRecordStyle";

const MockRecordHeader = ({
  defaultMockRecord,
  setDefaultMockRecord,
  selectedId,
  mockResultIdList,
  setStudentMockRecordList,
  setYear,
  setMonth,
}) => {
  const navigate = useNavigate();
  const [mockModalOpen, setMockModalOpen] = useState(false);
  const [mockDeleteOk, setMockDeleteOk] = useState(false);
  const [editErrModalOpen, setEditErrModalOpen] = useState(false);
  const [deleteErrModalOpen, setDeleteErrModalOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  const showMockModal = () => {
    if (mockResultIdList.length > 0) {
      setMockModalOpen(true);
    } else {
      showDeleteErrModal();
    }
  };

  const showEditErrModal = () => {
    setEditErrModalOpen(true);
  };

  const showDeleteErrModal = () => {
    setDeleteErrModalOpen(true);
  };

  const handleYearList = e => {
    const selectYear = e.target.value;
    setYear(selectYear);
    setSelectedYear(selectYear);
  };

  const handleMonthList = e => {
    const selectMonth = e.target.value;
    setSelectedMonth(selectMonth);
    setMonth(selectMonth);
  };

  const handleEdit = e => {
    if (mockResultIdList.length > 0) {
      navigate("/teacher/editmockrecord", {
        state: [selectedId, mockResultIdList],
      });
    } else {
      showEditErrModal();
    }
  };

  const yearList = defaultMockRecord => {
    const years = new Set();
    defaultMockRecord?.forEach(item => years.add(item.year));
    const newYears = Array.from(years);
    return newYears.sort((a, b) => b - a);
  };

  const monthList = defaultMockRecord => {
    const months = new Set();
    defaultMockRecord?.forEach(item => months.add(item.mon));
    const newMonths = Array.from(months);
    return newMonths.sort((a, b) => b - a);
  };

  // 모의고사 삭제 모달 확인 클릭 시
  useEffect(() => {
    if (mockResultIdList.length !== 0 && mockDeleteOk === true) {
      mockResultIdList.forEach(item => deleteStudentMockRecord(item));
      getStudentMockRecord(
        selectedId,
        setDefaultMockRecord,
        setStudentMockRecordList,
      );
      setMockModalOpen(false);
      setMockDeleteOk(false);
    }
    // 데이터 갱신 시 필터링 초기화
    const yearSelect = document.getElementById("mock-year");
    yearSelect.value = "";
    setYear("");

    const monthSelect = document.getElementById("month");
    monthSelect.value = "";
    setMonth("");
  }, [mockDeleteOk, defaultMockRecord]);

  return (
    <>
      {editErrModalOpen && (
        <EditErrorModal
          editErrModalOpen={editErrModalOpen}
          setEditErrModalOpen={setEditErrModalOpen}
        />
      )}
      {mockModalOpen && (
        <MockRecordModal
          mockModalOpen={mockModalOpen}
          setMockModalOpen={setMockModalOpen}
          setMockDeleteOk={setMockDeleteOk}
        />
      )}
      {deleteErrModalOpen && (
        <DeleteErrorModal
          showDeleteErrModal={showDeleteErrModal}
          setDeleteErrModalOpen={setDeleteErrModalOpen}
        />
      )}
      <div className="mock-record-header">
        <div className="header-left">
          <h4>모의고사 성적</h4>
          <SchoolRecordFilterDiv className="filter-wrap">
            <select
              name="mock-year"
              id="mock-year"
              onChange={e => handleYearList(e)}
            >
              <option value="">전체 연도</option>
              {yearList(defaultMockRecord).map((item, index) => (
                <option value={item} key={index}>
                  {`${item}년`}
                </option>
              ))}
            </select>
            <select name="month" id="month" onChange={e => handleMonthList(e)}>
              <option value="">전체 월</option>
              {monthList(defaultMockRecord).map((item, index) => (
                <option value={item} key={index}>
                  {`${item}월`}
                </option>
              ))}
            </select>
          </SchoolRecordFilterDiv>
        </div>
        <div className="btns">
          <button onClick={handleEdit}>수정</button>
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
    </>
  );
};

export default MockRecordHeader;
