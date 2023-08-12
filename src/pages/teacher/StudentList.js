import React, { useEffect, useState } from "react";

import {
  StudentListTitle,
  StudentListWrap,
  TimeTableDiv,
} from "../../styles/teacher/StudentListStyle";
import { useNavigate } from "react-router";
import {
  getStudentData,
  patchSignCancel,
} from "../../api/teacher/studentListAxios";
import { StudentCancelModal } from "../../components/Modal";

const StudentList = () => {
  const [studentListData, setStudentListData] = useState([]);
  const [cancelOk, setCancelOk] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [userPk, setUserPk] = useState(null);
  const navigate = useNavigate();

  // Modal 확인 클릭 시
  useEffect(() => {
    if (cancelOk) {
      setModalOpen(false);
      patchSignCancel(userPk);
      setCancelOk(false);
    }
    getStudentData(setStudentListData);
  }, [cancelOk]);

  const handleSginClick = () => {
    navigate("/teacher/signlist");
  };

  // 승인 취소
  const handleOk = e => {
    const resultUserId = e.target.classList[0].slice(6);
    setModalOpen(true);
    setUserPk(resultUserId);
  };

  return (
    <StudentListWrap>
      {modalOpen && (
        <StudentCancelModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          setCancelOk={setCancelOk}
        />
      )}
      <StudentListTitle>
        <div>
          <h3>학생관리</h3>
        </div>
        <div>
          <button onClick={handleSginClick}>가입대기 명단</button>
        </div>
      </StudentListTitle>
      <TimeTableDiv>
        <ul className="list-title">
          <li className="list-title-th">순번</li>
          <li className="list-title-th">이름</li>
          <li className="list-title-th">생년월일</li>
          <li className="list-title-th">연락처</li>
          <li className="list-title-th">이메일</li>
          <li className="list-title-th">승인취소</li>
        </ul>
        <ul className="data-list">
          {studentListData?.map((item, index) => (
            <li className="class" key={index}>
              <ul>
                <li>{index + 1}</li>
                <li>{item.snm}</li>
                <li>{item.birth}</li>
                <li>{item.phone}</li>
                <li>{item.email}</li>
                <li>
                  <button
                    className={`cancel${item.userId}`}
                    onClick={e => handleOk(e)}
                  >
                    취소
                  </button>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </TimeTableDiv>
    </StudentListWrap>
  );
};

export default StudentList;
