import React, { useEffect, useState } from "react";
import {
  StudentListTitle,
  StudentListWrap,
  TimeTableDiv,
} from "../../styles/teacher/SignListStyle";
import { useNavigate } from "react-router";
import {
  getSignListData,
  patchSignAccept,
} from "../../api/teacher/studentListAxios";
import { StudentAcceptModal } from "../../components/Modal";

const SignList = () => {
  const [studentListData, setStudentListData] = useState([]);
  const [acceptOk, setAcceptOk] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [saveCheckBox, setSaveCheckBox] = useState([]);

  const navigate = useNavigate();
  let resultIdArray = saveCheckBox;

  useEffect(() => {
    getSignListData(setStudentListData);
  }, []);

  // 전체 선택
  const handleAllCheck = e => {
    const allCheckBox = document.querySelectorAll(".school-checkbox");
    resultIdArray = [];
    if (e.target.checked === true) {
      allCheckBox.forEach(item => {
        item.checked = true;
        resultIdArray.push(parseInt(item.classList[1].slice(6)));
      });
    } else {
      allCheckBox.forEach(item => {
        item.checked = false;
      });
      resultIdArray = [];
    }
    setSaveCheckBox(resultIdArray);
  };

  // 개별 선택
  const handleCheckBox = e => {
    const clickList = e.currentTarget;
    const userId = parseInt(clickList.classList[1].slice(6));
    if (e.target.checked === true) {
      resultIdArray.push(userId);
    } else {
      resultIdArray = resultIdArray.filter(item => item !== userId);
    }
    console.log(resultIdArray);
    setSaveCheckBox(resultIdArray);
  };

  // Modal 확인 클릭 시
  useEffect(() => {
    if (acceptOk) {
      console.log("patch 실행");
      console.log(resultIdArray);
      resultIdArray.forEach(item => console.log(item));
      resultIdArray.forEach(item => patchSignAccept(item));
    }
    setModalOpen(false);
    getSignListData(setStudentListData);
    setStudentListData([]);
  }, [acceptOk]);

  const handleOk = () => {
    setModalOpen(true);
  };

  const handleCancel = () => {
    navigate("/teacher/studentlist");
  };

  return (
    <StudentListWrap>
      {modalOpen && (
        <StudentAcceptModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          resultIdArray={resultIdArray}
          setAcceptOk={setAcceptOk}
        />
      )}
      <StudentListTitle>
        <div>
          <h3>가입대기 명단</h3>
        </div>
        <div className="ListButtons">
          <button type="submit" onClick={handleOk}>
            승인
          </button>
          <button onClick={handleCancel}>취소</button>
        </div>
      </StudentListTitle>
      <TimeTableDiv>
        <ul>
          <li className="day-list">
            <ul>
              <li className="time-table-th">순번</li>
              <li className="time-table-th">이름</li>
              <li className="time-table-th">생년월일</li>
              <li className="time-table-th">연락처</li>
              <li className="time-table-th">이메일</li>
              <li className="time-table-th">
                <input
                  type="checkbox"
                  onClick={e => handleAllCheck(e)}
                  className="all-checkbox-btn"
                />
              </li>
            </ul>
          </li>
          {studentListData.map((item, index) => (
            <li className="class" key={index}>
              <ul>
                <li>{index + 1}</li>
                <li>{item.snm}</li>
                <li>{item.birth}</li>
                <li>{item.phone}</li>
                <li>{item.email}</li>
                <li>
                  <input
                    type="checkbox"
                    defaultChecked={false}
                    className={`school-checkbox userId${item.userId}`}
                    onClick={e => handleCheckBox(e)}
                  />
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </TimeTableDiv>
    </StudentListWrap>
  );
};

export default SignList;
