import React from "react";
import {
  FullCalendarDiv,
  TeacherHomeDiv,
} from "../../styles/teacher/TeacherHomeStyle";
import TimeTable from "../../components/student/TimeTable";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const TeacherHome = () => {
  return (
    <TeacherHomeDiv>
      <div className="teacher-home-left">
        <div className="student-count">
          <h3>학생 현황</h3>
          <div className="class-status">
            <span>학급 총 인원:</span>
            <span className="student-count">25</span>
            <span>명</span>
          </div>
          <div className="sign-wait">
            <span>가입 대기 인원:</span>
            <span className="student-count">10</span>
            <span>명</span>
          </div>
        </div>
        <div className="time-table">
          <h3>학급 시간표</h3>
          <div>
            <TimeTable />
          </div>
        </div>
      </div>
      <div className="teacher-home-right">
        <div className="calendar">
          <h3>학사 일정</h3>
          <FullCalendarDiv>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              locale="ko"
            />
          </FullCalendarDiv>
        </div>
      </div>
    </TeacherHomeDiv>
  );
};

export default TeacherHome;
