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
                          name="lessonNum"
                          value={item.lessonNum}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="unauthAbsence"
                          value={item.unauthAbsence}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="diseaseAbsence"
                          value={item.diseaseAbsence}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="etcAbsence"
                          value={item.etcAbsence}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="unauthLate"
                          value={item.unauthLate}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="diseaseLate"
                          value={item.diseaseLate}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="etcLate"
                          value={item.etcLate}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="unauthEarly"
                          value={item.unauthEarly}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="diseaseEarly"
                          value={item.diseaseEarly}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="etcEarly"
                          value={item.etcEarly}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="unauthOut"
                          value={item.unauthOut}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="diseaseOut"
                          value={item.diseaseOut}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="etcOut"
                          value={item.etcOut}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="specialNote"
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
                          name="lessonNum"
                          value={item.lessonNum}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="unauthAbsence"
                          value={item.unauthAbsence}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="diseaseAbsence"
                          value={item.diseaseAbsence}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="etcAbsence"
                          value={item.etcAbsence}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="unauthLate"
                          value={item.unauthLate}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="diseaseLate"
                          value={item.diseaseLate}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="etcLate"
                          value={item.etcLate}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="unauthEarly"
                          value={item.unauthEarly}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="diseaseEarly"
                          value={item.diseaseEarly}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="etcEarly"
                          value={item.etcEarly}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="unauthOut"
                          value={item.unauthOut}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="diseaseOut"
                          value={item.diseaseOut}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="etcOut"
                          value={item.etcOut}
                          onChange={handleAttendValues}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="specialNote"
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
