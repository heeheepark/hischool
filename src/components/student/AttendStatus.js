import React from "react";
import { AttendStatusDiv, AttendTable } from "../../styles/student/AttendStyle";
import { useState } from "react";

const AttendStatus = () => {
  const [attendData, setAttendData] = useState([]);

  const handleChangeValue = e => {
    console.log(e.target.value);
  };
  return (
    <AttendStatusDiv>
      <div className="hope-career-wrap">
        <h4>출결 현황</h4>
        <AttendTable>
          <ul>
            <li className="cate-list">
              <ul>
                <li className="category-nm">학년</li>
                <li className="category-nm">수업일수</li>
                <li className="category-nm">결석일수</li>
                <li className="category-detail">무단</li>
                <li className="category-detail">질병</li>
                <li className="category-detail">기타</li>
                <li className="category-nm">지각</li>
                <li className="category-detail">무단</li>
                <li className="category-detail">질병</li>
                <li className="category-detail">기타</li>
                <li className="category-nm">조퇴</li>
                <li className="category-detail">무단</li>
                <li className="category-detail">질병</li>
                <li className="category-detail">기타</li>
                <li className="category-nm">결과</li>
                <li className="category-detail">무단</li>
                <li className="category-detail">질병</li>
                <li className="category-detail">기타</li>
                <li className="category-nm">특이사항</li>
              </ul>
            </li>
            <li className="attend-list">
              <ul>
                <li>1학년</li>
                <li>190</li>
                <li>0</li>
                <li>0</li>
                <li>3</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>해외여행 3일</li>
              </ul>
            </li>
            <li className="attend-list">
              <ul>
                <li>2학년</li>
                <li>191</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>개근</li>
              </ul>
            </li>
            <li className="attend-list">
              <ul>
                <li>
                  <a href="#">3학년</a>
                </li>
                <li>190</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>개근</li>
              </ul>
            </li>
          </ul>
        </AttendTable>
      </div>
    </AttendStatusDiv>
  );
};

export default AttendStatus;
