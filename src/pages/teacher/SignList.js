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
  console.log(studentListData);
  const navigate = useNavigate();
  let resultIdArray = saveCheckBox;

  // 전체 체크박스 선택
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

  // 개별 체크박스 선택
  const handleCheckBox = e => {
    const clickList = e.currentTarget;
    const userId = parseInt(clickList.classList[1].slice(6));
    console.log(userId);
    if (e.target.checked === true) {
      resultIdArray.push(userId);
    } else {
      resultIdArray = resultIdArray.filter(item => item !== userId);
    }
    setSaveCheckBox(resultIdArray);
  };

  // Modal 확인 클릭 시
  useEffect(() => {
    getSignListData(setStudentListData);
    if (acceptOk) {
      resultIdArray.forEach(item => patchSignAccept(item));
    }
    setAcceptOk(false);
    setModalOpen(false);
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
              <li className="time-table-th">
                <input
                  type="checkbox"
                  onClick={e => handleAllCheck(e)}
                  className="all-checkbox-btn"
                />
              </li>
              <li className="time-table-th">번호</li>
              <li className="time-table-th">이름</li>
              <li className="time-table-th">생년월일</li>
              <li className="time-table-th">연락처</li>
              <li className="time-table-th">이메일</li>
            </ul>
          </li>
          {studentListData.map((item, index) => (
            <li className="class" key={index}>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    defaultChecked={false}
                    className={`school-checkbox userId${item.userId}`}
                    onClick={e => handleCheckBox(e)}
                  />
                </li>
                <li>{index + 1}</li>
                <li>{item.snm}</li>
                <li>{item.birth}</li>
                <li>{item.phone}</li>
                <li>{item.email}</li>
              </ul>
            </li>
          ))}
        </ul>
      </TimeTableDiv>
    </StudentListWrap>
  );
};

export default SignList;
