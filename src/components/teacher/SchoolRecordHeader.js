import React, { useEffect, useState } from "react";
import { SchoolRecordFilterDiv } from "../../styles/student/FilterStyle";
import { useNavigate } from "react-router";
import { DeleteErrorModal, EditErrorModal, SchoolRecordModal } from "../Modal";
import {
  deleteStudentSchoolRecord,
  getStudentSchoolRecord,
} from "../../api/teacher/studentRecordAxios";

const SchoolRecordHeader = ({
  defaultSchoolRecord,
  setDefaultSchoolRecord,
  selectedId,
  schoolResultIdList,
  setStudentSchoolRecordList,
  setYear,
  setSemester,
  setTestType,
}) => {
  const navigate = useNavigate();
  const [schoolModalOpen, setSchoolModalOpen] = useState(false);
  const [schoolDeleteOk, setschoolDeleteOk] = useState(false);
  const [editErrModalOpen, setEditErrModalOpen] = useState(false);
  const [deleteErrModalOpen, setDeleteErrModalOpen] = useState(false);

  const showSchoolModal = () => {
    if (schoolResultIdList.length > 0) {
      setSchoolModalOpen(true);
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

  // 내신 삭제 모달 확인 클릭 시
  useEffect(() => {
    if (schoolResultIdList.length !== 0 && schoolDeleteOk === true) {
      schoolResultIdList.forEach(item => deleteStudentSchoolRecord(item));
      getStudentSchoolRecord(
        selectedId,
        setDefaultSchoolRecord,
        setStudentSchoolRecordList,
      );
      setSchoolModalOpen(false);
      setschoolDeleteOk(false);
    }
  }, [schoolDeleteOk]);

  const handleYearList = e => {
    const selectYear = e.target.value;
    setYear(selectYear);
  };

  const handleSemesterList = e => {
    const selectSemester = parseInt(e.target.value);
    setSemester(selectSemester);
  };

  const handleTestTypeList = e => {
    const selectTestType = e.target.value;
    setTestType(selectTestType);
  };

  const handleEdit = e => {
    if (schoolResultIdList.length > 0) {
      navigate("/teacher/editschoolrecord", {
        state: [selectedId, schoolResultIdList],
      });
    } else {
      showEditErrModal();
    }
  };

  const yearList = defaultSchoolRecord => {
    const years = new Set();
    defaultSchoolRecord?.forEach(item => years.add(item.year));
    const newYears = Array.from(years);
    return newYears.sort();
  };

  const semesterList = defaultSchoolRecord => {
    const semesters = new Set();
    defaultSchoolRecord?.forEach(item => semesters.add(item.semester));
    const newSemesters = Array.from(semesters);
    return newSemesters.sort();
  };

  const testTypeList = defaultSchoolRecord => {
    const testTypes = new Set();
    defaultSchoolRecord?.forEach(item => testTypes.add(item.mf));
    const newTestTypes = Array.from(testTypes);
    return newTestTypes.sort();
  };

  return (
    <>
      {editErrModalOpen && (
        <EditErrorModal
          editErrModalOpen={editErrModalOpen}
          setEditErrModalOpen={setEditErrModalOpen}
        />
      )}
      {schoolModalOpen && (
        <SchoolRecordModal
          schoolModalOpen={schoolModalOpen}
          setSchoolModalOpen={setSchoolModalOpen}
          setschoolDeleteOk={setschoolDeleteOk}
        />
      )}
      {deleteErrModalOpen && (
        <DeleteErrorModal
          showDeleteErrModal={showDeleteErrModal}
          setDeleteErrModalOpen={setDeleteErrModalOpen}
        />
      )}
      <div className="school-record-header">
        <div className="header-left">
          <h4>내신 성적 관리</h4>
          <SchoolRecordFilterDiv>
            <select name="year" id="year" onChange={e => handleYearList(e)}>
              <option value="">전체 연도</option>
              {yearList(defaultSchoolRecord).map((item, index) => (
                <option value={item} key={index}>
                  {`${item}년`}
                </option>
              ))}
            </select>
            <select
              name="semester"
              id="semester"
              onChange={e => handleSemesterList(e)}
            >
              <option value="">전체 학기</option>
              {semesterList(defaultSchoolRecord).map((item, index) => (
                <option value={item} key={index}>
                  {`${item}학기`}
                </option>
              ))}
            </select>
            <select
              name="test-category"
              id="test-category"
              onChange={e => handleTestTypeList(e)}
            >
              <option value="">전체 시험</option>
              {testTypeList(defaultSchoolRecord).map((item, index) => (
                <option value={item} key={index}>
                  {item === 1 ? "중간 " : "기말"}
                </option>
              ))}
            </select>
          </SchoolRecordFilterDiv>
        </div>
        <div className="btns">
          <button onClick={handleEdit}>수정</button>
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
    </>
  );
};

export default SchoolRecordHeader;
