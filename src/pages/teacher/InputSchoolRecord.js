import React, { useEffect, useState } from "react";
import {
  ISRButton,
  ISRButtonWrapper,
  ISRHeader,
  ISRTitle,
  InputSchoolRecordWrap,
} from "../../styles/teacher/InputSchoolRecordStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TSubJectSchool from "../../components/teacher/TSubJectSchool";
import {
  getSchoolData,
  getSchoolMainSubData,
  getSchoolSubData,
  getSchoolclassData,
  postSchoolData,
} from "../../api/teacher/inputSchoolRecordAxios";

const InputSchoolRecord = () => {
  // userId 전달
  const { state } = useLocation();
  console.log(state);

  const [dropSemester, setDropSemester] = useState(""); // 학기
  const [dropTest, setDropTest] = useState(""); // 고사
  const [studentsData, setStudentsData] = useState([]);
  const [lastSchoolSavedData, setLastSchoolSavedData] = useState([]);
  const [subjectData, setSubjectData] = useState([]);
  const [schoolData, setSchoolData] = useState([]);
  const [schoolClassData, setSchoolClassData] = useState([]);
  const navigate = useNavigate();
  // 최초 학생의 데이터를 셋팅하여야 함.
  useEffect(() => {
    const interimData = [{}];
    //{subject: '인문과학', semester: '', test: ''}
    setStudentsData(interimData);
    setLastSchoolSavedData(interimData);
  }, []);

  // 새로운 데이터를 전달하는 함수
  const updateLastSavedData = (_id, newData) => {
    const updateData = lastSchoolSavedData.map((item, idx) => {
      // 변경된 데이터 순서 번호와 같다면 데이터를 업데이트 한다.
      if (idx === _id) {
        item = newData;
      }
      return item;
    });

    setLastSchoolSavedData(updateData);
  };
  // 학기 항목이 선택되었을 때 처리하는 함수
  const handleSemester = event => {
    setDropSemester(event.target.value);
  };

  // 고사 항목이 선택되었을 때 처리하는 함수
  const handleDropTest = event => {
    setDropTest(event.target.value);
  };

  // "저장" 버튼을 클릭할 때 학생 데이터를 저장하고 콘솔에 출력하는 함수
  const handleSaveButtonClick = () => {
    if (lastSchoolSavedData) {
      const SdataToSend = lastSchoolSavedData.map(item => ({
        userid: 40, //임시 유저 아이디 추후 수정 필요
        subjectid: parseInt(item.subjectid) || 0,
        semester: parseInt(item.semester) || 0,
        midfinal: parseInt(item.midfinal) || 0,
        score: parseInt(item.score) || 0,
        rating: parseInt(item.rating) || 0,
        classrank: parseInt(item.classrank) || 0,
        wholerank: parseInt(item.wholerank) || 0,
      }));
      postSchoolData(SdataToSend);
      console.log(SdataToSend);
    }
  };
  // 항목 추가 버튼을 누를 때 호출되는 함수
  const handleAddButtonClick = () => {
    // 새로운 빈 객체를 추가하여 학생 데이터 배열을 업데이트
    const newStudent = {
      classrank: "0",
      rating: 0,
      wolerank: "0",
      score: 0,
      semester: dropSemester,
      subjectid: null,
      subject: null,
      midfinal: dropTest,
    };
    setStudentsData(data => [...data, newStudent]);
    // lastSavedData에도 빈 객체를 추가하여 배열 길이를 유지
    setLastSchoolSavedData(data => [...data, newStudent]);
  };

  // 과목 정보 입력 관련
  useEffect(() => {
    async function fetchData() {
      try {
        // 주요과목 데이터 가져오기
        const mainSubData = await getSchoolMainSubData();
        console.log(mainSubData);

        // subjectData 상태 업데이트
        setSubjectData(mainSubData);
      } catch (err) {
        console.log(err);
        setSubjectData([]);
      }
    }

    fetchData();
  }, []);
  useEffect(() => {
    async function personnelData() {
      try {
        // 전교 인원
        const schoolData = await getSchoolData();
        // 클래스 인원 데이터
        const schoolclassData = await getSchoolclassData();
        setSchoolData(schoolData);
        setSchoolClassData(schoolclassData);
      } catch (err) {
        console.log(err);
        setSchoolData([]);
        setSchoolClassData([]);
      }
    }

    personnelData();
  }, []);

  return (
    <InputSchoolRecordWrap>
      <ISRHeader>
        <h3>2023 내신 고사 성적 입력(학생이름)</h3>
        {/* 드롭다운 메뉴 1 */}
        <select value={dropSemester} onChange={handleSemester}>
          <option value="">학기 선택</option>
          <option value="1학기">1학기</option>
          <option value="2학기">2학기</option>
        </select>
        {/* 드롭다운 메뉴 2 */}
        <select value={dropTest} onChange={handleDropTest}>
          <option value="">시험 구분</option>
          <option value="1">중간고사</option>
          <option value="2">기말고사</option>
        </select>
      </ISRHeader>
      <ISRButton>
        {/* "과목 정보 입력" 버튼 */}
        <Link to={`/teacher/inputsubject`}>
          <button>과목 정보 입력</button>
        </Link>
        <button onClick={handleSaveButtonClick}>저장</button>
        <button onClick={() => navigate(-1)}>취소</button>
      </ISRButton>
      <ISRTitle>
        <p>과목 계열</p>
        <p>세부 과목</p>
        <strong>점수</strong>
        <strong>등급</strong>
        <strong>반 석차</strong>
        <strong>전교 석차</strong>
      </ISRTitle>
      <div>
        {studentsData.map((item, index) => (
          <TSubJectSchool
            key={index}
            id={index}
            schoolData={schoolData}
            schoolClassData={schoolClassData}
            subjectData={subjectData}
            dropSemester={dropSemester}
            dropTest={dropTest}
            studentsData={studentsData[index]}
            setStudentsData={setStudentsData}
            updateLastSavedData={updateLastSavedData}
          />
        ))}
      </div>
      <ISRButtonWrapper>
        <button onClick={handleAddButtonClick}>
          항목 추가
          <FontAwesomeIcon icon={faPlusCircle} className="icon" />
        </button>
      </ISRButtonWrapper>
    </InputSchoolRecordWrap>
  );
};

export default InputSchoolRecord;
