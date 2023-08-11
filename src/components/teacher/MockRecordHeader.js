import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { MockRecordModal } from "../Modal";
import {
  deleteStudentMockRecord,
  getStudentMockRecord,
} from "../../api/teacher/studentRecordAxios";
import { SchoolRecordFilterDiv } from "../../styles/student/FilterStyle";

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
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  const showMockModal = () => {
    setMockModalOpen(true);
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
  }, [mockDeleteOk]);

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

  const yearList = defaultMockRecord => {
    const years = new Set();
    defaultMockRecord?.forEach(item => years.add(item.year));
    const newYears = Array.from(years);
    return newYears.sort();
  };

  const monthList = defaultMockRecord => {
    const months = new Set();
    defaultMockRecord?.forEach(item => months.add(item.mon));
    const newMonths = Array.from(months);
    return newMonths.sort();
  };
  return (
    <>
      {mockModalOpen && (
        <MockRecordModal
          mockModalOpen={mockModalOpen}
          setMockModalOpen={setMockModalOpen}
          setMockDeleteOk={setMockDeleteOk}
        />
      )}
      <div className="mock-record-header">
        <div className="header-left">
          <h4>모의고사 성적 관리</h4>
          <SchoolRecordFilterDiv className="filter-wrap">
            {defaultMockRecord ? (
              <select
                name="year"
                id="year"
                value={selectedYear}
                onChange={e => handleYearList(e)}
              >
                <option value={""} selected>
                  전체 연도
                </option>
                {yearList(defaultMockRecord).map((item, index) => (
                  <option value={item} key={index}>
                    {`${item}년`}
                  </option>
                ))}
              </select>
            ) : null}
            <select
              name="semester"
              id="semester"
              value={selectedMonth}
              onChange={e => handleMonthList(e)}
            >
              <option value={""} selected>
                전체 월
              </option>
              {monthList(defaultMockRecord).map((item, index) => (
                <option value={item} key={index}>
                  {`${item}월`}
                </option>
              ))}
            </select>
          </SchoolRecordFilterDiv>
        </div>
        <div className="btns">
          <button
            onClick={() => {
              navigate("/teacher/editmockrecord", {
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
    </>
  );
};

export default MockRecordHeader;
