import React from "react";
import { TimeTableDiv } from "../../styles/student/StudentHomeStyle";
import { TeacherTimeTableDiv } from "../../styles/teacher/TeacherHomeStyle";

const TeacherTimeTable = () => {
  return (
    <TeacherTimeTableDiv>
      <ul>
        <li className="day-list">
          <ul>
            <li className="time-table-th">교시</li>
            <li className="time-table-th">월</li>
            <li className="time-table-th">화</li>
            <li className="time-table-th">수</li>
            <li className="time-table-th">목</li>
            <li className="time-table-th">금</li>
          </ul>
        </li>
        <li className="class">
          <ul>
            <li>1교시</li>
            <li>문학</li>
            <li>수학I</li>
            <li>영어</li>
            <li>한국지리</li>
            <li>한국사</li>
          </ul>
        </li>
        <li className="class">
          <ul>
            <li>2교시</li>
            <li>문학</li>
            <li>수학I</li>
            <li>영어</li>
            <li>한국지리</li>
            <li>한국사</li>
          </ul>
        </li>
        <li className="class3">
          <ul>
            <li>3교시</li>
            <li>문학</li>
            <li>수학I</li>
            <li>영어</li>
            <li>한국지리</li>
            <li>한국사</li>
          </ul>
        </li>
        <li className="class4">
          <ul>
            <li>4교시</li>
            <li>문학</li>
            <li>수학I</li>
            <li>영어</li>
            <li>한국지리</li>
            <li>한국사</li>
          </ul>
        </li>
        <li className="class-lunch">
          <ul className="lunch">
            <li>점심시간</li>
            <li>점심시간</li>
          </ul>
        </li>
        <li className="class5">
          <ul>
            <li>5교시</li>
            <li>문학</li>
            <li>수학I</li>
            <li>영어</li>
            <li>한국지리</li>
            <li>한국사</li>
          </ul>
        </li>
        <li className="class6">
          <ul>
            <li>6교시</li>
            <li>문학</li>
            <li>수학I</li>
            <li>영어</li>
            <li>한국지리</li>
            <li>한국사</li>
          </ul>
        </li>
        <li className="class7">
          <ul>
            <li>7교시</li>
            <li>문학</li>
            <li>수학I</li>
            <li>영어</li>
            <li>한국지리</li>
            <li>한국사</li>
          </ul>
        </li>
      </ul>
    </TeacherTimeTableDiv>
  );
};

export default TeacherTimeTable;
