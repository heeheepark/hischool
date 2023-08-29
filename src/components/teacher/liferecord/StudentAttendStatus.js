import React, { useState } from "react";
import {
  AttendStatusDiv,
  AttendTable,
} from "../../../styles/student/AttendStyle";

const StudentAttendStatus = () => {
  const init = [
    {
      classDay: 190,
      selfAbsent: 0,
      sickAbsent: 3,
      etcAbsent: 0,
      selfTardy: 0,
      sickTardy: 0,
      etcTardy: 0,
      selfLeave: 0,
      sickLeave: 0,
      etcLeave: 0,
      selfAttend: 0,
      sickeAttend: 0,
      etcAttend: 0,
      significant: "3일 해외여행",
    },
    {
      classDay: 191,
      selfAbsent: 0,
      sickAbsent: 0,
      etcAbsent: 0,
      selfTardy: 0,
      sickTardy: 0,
      etcTardy: 0,
      selfLeave: 0,
      sickLeave: 0,
      etcLeave: 0,
      selfAttend: 0,
      sickeAttend: 0,
      etcAttend: 0,
      significant: "개근",
    },
    {
      classDay: 190,
      selfAbsent: 0,
      sickAbsent: 0,
      etcAbsent: 0,
      selfTardy: 0,
      sickTardy: 0,
      etcTardy: 0,
      selfLeave: 0,
      sickLeave: 0,
      etcLeave: 0,
      selfAttend: 0,
      sickeAttend: 0,
      etcAttend: 0,
      significant: "개근",
    },
  ];
  const [attendValues, setAttendValues] = useState(init);

  const handleAttendValues = e => {
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
                <li className="category-nm">결석</li>
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
                {Object.keys(attendValues[0]).map(item => (
                  <li key={item}>
                    <input
                      type={
                        typeof attendValues[0][item] === "number"
                          ? "number"
                          : "text"
                      }
                      value={attendValues[0][item]}
                      onChange={handleAttendValues}
                      className={
                        typeof attendValues[0][item] === "string" && "etc-text"
                      }
                    />
                  </li>
                ))}
              </ul>
            </li>
            <li className="attend-list">
              <ul>
                <li>2학년</li>
                {Object.keys(attendValues[1]).map(item => (
                  <li key={item}>
                    <input
                      type={
                        typeof attendValues[1][item] === "number"
                          ? "number"
                          : "text"
                      }
                      value={attendValues[1][item]}
                      onChange={handleAttendValues}
                      className={
                        typeof attendValues[1][item] === "string" && "etc-text"
                      }
                    />
                  </li>
                ))}
              </ul>
            </li>
            <li className="attend-list">
              <ul>
                <li>
                  <a href="#">3학년</a>
                </li>
                {Object.keys(attendValues[2]).map(item => (
                  <li key={item}>
                    <input
                      type={
                        typeof attendValues[2][item] === "number"
                          ? "number"
                          : "text"
                      }
                      value={attendValues[2][item]}
                      onChange={handleAttendValues}
                      className={
                        typeof attendValues[2][item] === "string" && "etc-text"
                      }
                    />
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </AttendTable>
      </div>
    </AttendStatusDiv>
  );
};

export default StudentAttendStatus;
