import React, { useEffect, useState } from "react";
import {
  IMRTitle,
  ISRButton,
  ISRButtonWrapper,
  ISRHeader,
  InputMockRecordWrap,
} from "../../styles/teacher/InputSchoolRecordStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import TSubJectMock from "../../components/teacher/TSubjectMock";
import {
  getMockMainSubData,
  getMockSubData,
  getStudentsNameData,
} from "../../api/teacher/inputMockRecordAxios";
import { postMockData } from "../../api/teacher/inputMockRecordAxios";
import { useLocation, useNavigate } from "react-router";

const InputMockRecord = () => {
  const { state } = useLocation();
  // console.log(state);
  const [dropMonth, setDropMonth] = useState("");
  const initialRecord = {
    rating: 0,
    standardscore: 0,
    percent: "0",
    mon: dropMonth,
    subSubject: null,
    subject: null,
  };
  const [studentsData, setStudentsData] = useState([initialRecord]);
  const [lastSavedData, setLastSavedData] = useState([]);
  const [subjectData, setSubjectData] = useState([]);
  const [studentNameData, setStudentNameData] = useState([]);
  const navigate = useNavigate();

  // 모의고사 과목 리스트
  const [initSubCate, setInitSubCate] = useState(null);
  const [selectedSubCate, setSelectedSubCate] = useState(null);
  const [initDetailSub, setInitDetailSub] = useState(null);

  const [schoolRecordData, setSchoolRecordData] = useState(null);

  // console.log(schoolRecordData);
  // console.log(initDetailSub);
  // console.log(studentsData);
  // console.log(lastSavedData);
  // console.log(dropMonth);
  // console.log(studentNameData);
  // console.log(state);

  // 라스트 데이터 전달
  const updateLastSavedData = (_id, newData) => {
    const updateData = lastSavedData.map((item, idx) => {
      if (idx === _id) {
        item = newData;
      }
      return item;
    });
    setLastSavedData(updateData);
  };

  // 월 선택
  const handleMonth = event => {
    setDropMonth(event.target.value);
  };

  // "저장" > 서버전송
  const handleSaveButtonClick = () => {
    if (lastSavedData) {
      const dataToSend = lastSavedData.map(item => {
        // console.log(item.mon);
        // console.log(parseInt(item.mon));
        return {
          userid: state, //임시유저값
          subjectid: parseInt(item.subjectid) || 0,
          mon: parseInt(item.mon) || 0,
          standardscore: parseInt(item.standardscore) || 0,
          rating: parseInt(item.rating) || 0,
          percent: parseInt(item.percent) || 0,
        };
      });
      postMockData(dataToSend);
      navigate(-1);
    }
  };

  // 항목 추가 버튼
  const handleAddButtonClick = () => {
    // const newStudent = {
    //   rating: 0,
    //   standardscore: 0,
    //   percent: "0",
    //   mon: dropMonth,
    //   subSubject: null,
    //   subject: null,
    // };
    setStudentsData([...studentsData, initialRecord]);
    // setLastSavedData([...lastSavedData, newStudent]);
  };

  useEffect(() => {
    getMockMainSubData(setInitSubCate);
    getMockSubData(selectedSubCate, setInitDetailSub);
    getStudentsNameData(state, setStudentNameData);
    // const interimData = [{}];
    // setStudentsData(interimData);
    // setLastSavedData(interimData);
  }, [selectedSubCate]);

  useEffect(() => {
    async function fetchData() {
      try {
        // 주요과목 데이터
        const mainSubData = await getMockMainSubData();
        // 하위과목 데이터
        const newSubjectData = await Promise.all(
          mainSubData.map(async mainSubject => {
            const subData = await getMockSubData(mainSubject.categoryid);
            return {
              mainsubject: mainSubject.nm,
              mainsubjectId: mainSubject.categoryid,
              data: subData.map(subSubject => ({
                subsubject: subSubject.nm,
                subjectid: subSubject.subjectid,
              })),
            };
          }),
        );
        setSubjectData(newSubjectData);
      } catch (err) {
        console.log(err);
        // setSubjectData([]);
      }
    }

    fetchData();
  }, []);

  // // 학생 이름
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getStudentsNameData();
  //       setStudentNameData(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <InputMockRecordWrap>
      <ISRHeader>
        <h3>{`2023 모의 고사 성적 입력( ${studentNameData.nm} )`}</h3>
        <select value={dropMonth} onChange={handleMonth}>
          <option value="">월 선택</option>
          <option value="3">3월</option>
          <option value="6">6월 </option>
          <option value="9">9월</option>
        </select>
      </ISRHeader>
      <ISRButton>
        <button onClick={handleSaveButtonClick}>저장</button>
        <button onClick={() => navigate(-1)}>취소</button>
      </ISRButton>
      <IMRTitle>
        <p>과목 계열</p>
        <p>세부 과목</p>
        <strong>표준 점수</strong>
        <strong>등급</strong>
        <strong>백분위</strong>
      </IMRTitle>
      <div>
        {/* <TSubJectMock
          subjectData={subjectData}
          dropMonth={dropMonth}
          studentsData={studentsData}
          setStudentsData={setStudentsData}
          updateLastSavedData={updateLastSavedData}
        /> */}
        {studentsData.map((item, index) => {
          // console.log(item);
          return (
            <TSubJectMock
              initSubCate={initSubCate}
              setSelectedSubCate={setSelectedSubCate}
              initDetailSub={initDetailSub}
              setSchoolRecordData={setSchoolRecordData}
              key={index}
              id={index}
              subjectData={subjectData}
              dropMonth={dropMonth}
              studentsData={item}
              setStudentsData={setStudentsData}
              updateLastSavedData={updateLastSavedData}
            />
          );
        })}
      </div>
      <ISRButtonWrapper>
        <button onClick={handleAddButtonClick}>
          항목 추가
          <FontAwesomeIcon icon={faPlusCircle} className="icon" />
        </button>
      </ISRButtonWrapper>
    </InputMockRecordWrap>
  );
};

export default InputMockRecord;
