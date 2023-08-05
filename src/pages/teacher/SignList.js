import React, { useEffect, useState } from "react";
import {
  StudentListTitle,
  StudentListWrap,
  TimeTableDiv,
} from "../../styles/teacher/SignListStyle";
import { useNavigate } from "react-router";
import { getSignListData } from "../../api/teacher/studentListAxios";

const SignList = () => {
  const [studentListData, setStudentListData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getSignListData(setStudentListData);
  }, []);

  const handleCancel = () => {
    navigate("/teacher/studentlist");
  };

  return (
    <StudentListWrap>
      <StudentListTitle>
        <div>
          <h3>가입대기 명단</h3>
        </div>
        <div className="ListButtons">
          <button type="submit" onClick={handleCancel}>
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
                <input type="checkbox" />
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
                  <input type="checkbox" />
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
