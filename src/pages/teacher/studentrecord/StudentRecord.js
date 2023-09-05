import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import {
  getStudentMockRecord,
  getStudentSchoolRecord,
} from "../../../api/teacher/studentRecordAxios";
import { getStudentData } from "../../../api/teacher/studentListAxios";
import { StudentRecordDiv } from "../../../styles/teacher/studentrecord/StudentRecordStyle";
import SearchStudent from "../../../components/teacher/studentrecord/SearchStudent";
import SchoolRecordHeader from "../../../components/teacher/studentrecord/SchoolRecordHeader";
import SchoolRecordList from "../../../components/teacher/studentrecord/SchoolRecordList";
import MockRecordHeader from "../../../components/teacher/studentrecord/MockRecordHeader";
import MockRecordList from "../../../components/teacher/studentrecord/MockRecordList";
import { RecordConfirmModal } from "../../../components/modal/teacherModal";
import Loading from "../../../components/Loading";
import { client } from "../../../api/login/client";
import { finishLoading, startLoading } from "../../../reducers/loadingSlice";
import { useDispatch, useSelector } from "react-redux";

const StudentRecord = () => {
  const { loading } = useSelector(state => state.loading);
  const dispatch = useDispatch();
  const { state } = useLocation();
  const [defaultSchoolRecord, setDefaultSchoolRecord] = useState(null);
  const [defaultMockRecord, setDefaultMockRecord] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [studentListData, setStudentListData] = useState(null);
  const [studentSchoolRecordList, setStudentSchoolRecordList] = useState(null);
  const [schoolResultIdList, setSchoolResultIdList] = useState([]);
  const [studentMockRecordList, setStudentMockRecordList] = useState(null);
  const [mockResultIdList, setMockResultIdList] = useState([]);
  const [schoolYear, setSchoolYear] = useState(null);
  const [mockYear, setMockYear] = useState(null);
  const [month, setMonth] = useState(null);
  const [semester, setSemester] = useState(null);
  const [testType, setTestType] = useState(null);
  const [confirmModal, setConfirmModal] = useState(false);

  // 선택한 학생 데이터 불러오기
  const handleStudentRecordData = (
    studentId,
    schoolYear,
    semester,
    testType,
    mockYear,
    month,
  ) => {
    if (!schoolYear && !semester && !testType && !mockYear && !month) {
      getStudentSchoolRecord(
        studentId,
        setDefaultSchoolRecord,
        setStudentSchoolRecordList,
      );
      getStudentMockRecord(
        studentId,
        setDefaultMockRecord,
        setStudentMockRecordList,
      );
    } else {
      getStudentSchoolRecord(
        studentId,
        setDefaultSchoolRecord,
        setStudentSchoolRecordList,
        schoolYear,
        semester,
        testType,
      );
      getStudentMockRecord(
        studentId,
        setDefaultMockRecord,
        setStudentMockRecordList,
        mockYear,
        month,
      );
    }
  };

  // 초기 데이터 불러오기
  useEffect(() => {
    getStudentData(setStudentListData);
  }, []);

  // 갱신 시 학생 데이터 불러오기
  useEffect(() => {
    if (studentListData) {
      // 로딩 호출
      client.interceptors.request.use(function (config) {
        dispatch(startLoading({}));
        return config;
      });
      // 로딩 완료
      client.interceptors.response.use(config => {
        dispatch(finishLoading({}));
        return config;
      });
      const defaultSelectedId = document.querySelector("li.active");
      let studentId = parseInt(defaultSelectedId?.classList[0].slice(10));
      if (state) {
        studentId = state;
      }
      setSelectedId(studentId);
      handleStudentRecordData(
        studentId,
        schoolYear,
        semester,
        testType,
        mockYear,
        month,
      );
    }
  }, [studentListData, schoolYear, semester, testType, mockYear, month]);

  return (
    <>
      {/* {loading ? <Loading /> : null} */}
      <StudentRecordDiv>
        {confirmModal && (
          <RecordConfirmModal setConfirmModal={setConfirmModal} />
        )}
        <div className="student-record-header">
          <h3>학생 성적 관리</h3>
          <button onClick={() => setConfirmModal(true)}>성적 확정</button>
        </div>
        <div className="wrap">
          <SearchStudent
            selectId={state}
            studentListData={studentListData}
            setSelectedId={setSelectedId}
            handleStudentRecordData={handleStudentRecordData}
          />
          <div className="record-wrap">
            <div className="school-record-wrap">
              <SchoolRecordHeader
                defaultSchoolRecord={defaultSchoolRecord}
                setDefaultSchoolRecord={setDefaultSchoolRecord}
                selectedId={selectedId}
                schoolResultIdList={schoolResultIdList}
                setStudentSchoolRecordList={setStudentSchoolRecordList}
                setYear={setSchoolYear}
                setSemester={setSemester}
                setTestType={setTestType}
              />
              <SchoolRecordList
                studentSchoolRecordList={studentSchoolRecordList}
                setSchoolResultIdList={setSchoolResultIdList}
                schoolResultIdList={schoolResultIdList}
              />
            </div>
            <div className="mock-record-wrap">
              <MockRecordHeader
                defaultMockRecord={defaultMockRecord}
                setDefaultMockRecord={setDefaultMockRecord}
                selectedId={selectedId}
                mockResultIdList={mockResultIdList}
                setStudentMockRecordList={setStudentMockRecordList}
                setYear={setMockYear}
                setMonth={setMonth}
              />
              <MockRecordList
                studentMockRecordList={studentMockRecordList}
                setMockResultIdList={setMockResultIdList}
                mockResultIdList={mockResultIdList}
              />
            </div>
          </div>
        </div>
      </StudentRecordDiv>
    </>
  );
};

export default StudentRecord;
