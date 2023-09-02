import React, { useEffect, useState } from "react";
import {
  AttendStatusDiv,
  AttendTable,
} from "../../../styles/student/liferecord/AttendStyle";
import { getAttendData } from "../../../api/teacher/tcAttendAxios";

const StudentAttendStatus = ({ userId }) => {
  const [attendList, setAttendList] = useState([]);
  const [payload, setPayload] = useState({
    attendId: "",
    attendId: "",
    lessonNum: "",
    diseaseAbsence: "",
    unauthAbsence: "",
    etcAbsence: "",
    diseaseLate: "",
    unauthLate: "",
    etcLate: "",
    diseaseEarly: "",
    unauthEarly: "",
    etcEarly: "",
    diseaseOut: "",
    unauthOut: "",
    etcOut: "",
    specialNote: "",
  });

  const handleAttendValues = e => {
    console.log(e.target.value);
    setAttendList;
  };

  useEffect(() => {
    getAttendData(userId, setAttendList);
  }, []);

  console.log(attendList);
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
            {attendList && attendList.length > 0
              ? attendList.map(item => (
                  <li className="attend-list" key={item.attendId}>
                    <ul>
                      <li>{item.grade}학년</li>
                      <li>
                        <input
                          type="text"
                          value={item.lessonNum}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          value={item.unauthAbsence}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          value={item.diseaseAbsence}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          value={item.etcAbsence}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          value={item.unauthLate}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          value={item.diseaseLate}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          value={item.etcLate}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          value={item.unauthEarly}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          value={item.diseaseEarly}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          value={item.etcEarly}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          value={item.unauthOut}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          value={item.diseaseOut}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          value={item.etcOut}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          className="etc-text"
                          value={item.specialNote}
                          onChange={handleAttendValues}
                        />
                      </li>
                    </ul>
                  </li>
                ))
              : attendList.map(item => (
                  <li className="attend-list" key={item.attendId}>
                    <ul>
                      <li>{item.grade}학년</li>
                      <li>
                        <input
                          type="text"
                          value={item.lessonNum}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          value={item.unauthAbsence}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          value={item.diseaseAbsence}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          value={item.etcAbsence}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          value={item.unauthLate}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          value={item.diseaseLate}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          value={item.etcLate}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          value={item.unauthEarly}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          value={item.diseaseEarly}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          value={item.etcEarly}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          value={item.unauthOut}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          value={item.diseaseOut}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          value={item.etcOut}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          className="etc-text"
                          value={item.specialNote}
                          onChange={handleAttendValues}
                        />
                      </li>
                    </ul>
                  </li>
                ))}
          </ul>
        </AttendTable>
      </div>
    </AttendStatusDiv>
  );
};

export default StudentAttendStatus;
