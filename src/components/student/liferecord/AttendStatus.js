import React, { useEffect } from "react";
import {
  AttendStatusDiv,
  AttendTable,
} from "../../../styles/student/liferecord/AttendStyle";
import { useState } from "react";
import { getAttenData } from "../../../api/student/lifeRecordAxios";

const AttendStatus = () => {
  const [attendData, setAttendData] = useState([]);

  useEffect(() => {
    getAttenData(setAttendData);
  }, []);

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
            {attendData.map((item, index) => (
              <li className="attend-list" key={index}>
                <ul>
                  <li>{item.grade}학년</li>
                  <li>{item.lessonNum}</li>
                  <li>{item.unauthAbsence}</li>
                  <li>{item.diseaseAbsence}</li>
                  <li>{item.etcAbsence}</li>
                  <li>{item.unauthLate}</li>
                  <li>{item.diseaseLate}</li>
                  <li>{item.etcLate}</li>
                  <li>{item.unauthEarly}</li>
                  <li>{item.diseaseEarly}</li>
                  <li>{item.etcEarly}</li>
                  <li>{item.unauthOut}</li>
                  <li>{item.diseaseOut}</li>
                  <li>{item.etcOut}</li>
                  <li>{item.specialNote}</li>
                </ul>
              </li>
            ))}
          </ul>
        </AttendTable>
      </div>
    </AttendStatusDiv>
  );
};

export default AttendStatus;
