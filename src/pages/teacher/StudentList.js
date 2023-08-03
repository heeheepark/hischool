import React, { useEffect, useState } from "react";

import {
  StudentListTitle,
  StudentListWrap,
  TimeTableDiv,
} from "../../styles/teacher/StudentListStyle";
import { useNavigate } from "react-router";
import { getStudentData } from "../../api/teacherAxios";

const StudentList = () => {
  const [studentListData, setStudentListData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getStudentData(setStudentListData);
  }, []);

  const handleSginClick = () => {
    navigate("/teacher/signlist");
  };

  return (
    <StudentListWrap>
      <StudentListTitle>
        <div>
          <h3>학생관리</h3>
        </div>
        <div>
          <button onClick={handleSginClick}>가입대기 명단</button>
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
              <li className="time-table-th">승인취소</li>
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
                  <button>취소</button>
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
