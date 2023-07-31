import React, { useEffect } from "react";
import {
  FullCalendarDiv,
  TeacherHomeDiv,
} from "../../styles/teacher/TeacherHomeStyle";
import TimeTable from "../../components/student/TimeTable";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const TeacherHome = () => {
  const eventData = [
    {
      idTitle: 1,
      color: "gray",
      textColor: "#fff",
      end: "2023-07-05",
      start: "2023-07-03",
      title: "방학식 준비",
    },
    {
      idTitle: 1,
      color: "gray",
      textColor: "#fff",
      end: "2023-07-07",
      start: "2023-07-07",
      title: "방학식",
    },
    {
      idTitle: 1,
      color: "gray",
      textColor: "#fff",
      end: "2023-07-14",
      start: "2023-07-11",
      title: "1학기 성적 마감",
    },
    {
      idTitle: 1,
      color: "gray",
      textColor: "#fff",
      end: "2023-07-22",
      start: "2023-07-17",
      title: "1학기 수업 보고",
    },
    {
      idTitle: 1,
      color: "gray",
      textColor: "#fff",
      end: "2023-08-03",
      start: "2023-07-31",
      title: "2학기 수업 계획",
      allDay: true,
    },
  ];

  return (
    <TeacherHomeDiv>
      <div className="teacher-home-left">
        <div className="student-count">
          <h3>학급 현황</h3>
          <div className="class-status">
            <span>총 인원:</span>
            <span className="student-num">25</span>
            <span>명</span>
            <span>(가입 대기 인원:</span>
            <span className="student-num">10</span>
            <span>명)</span>
          </div>
          <div className="sign-wait"></div>
        </div>
        <div className="class-school-record"></div>
        {/* <div className="time-table">
          <h3>학급 시간표</h3>
          <div>
            <TimeTable />
          </div>
        </div> */}
      </div>
      <div className="teacher-home-right">
        <div className="class-mock-record"></div>
        <div className="calendar">
          {/* <h3>학사 일정</h3> */}
          <FullCalendarDiv>
            <FullCalendar
              height="56.6vh"
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              locale="ko"
              dayCellContent={day => day.dayNumberText.replace("일", "")}
              events={eventData}
              nextDayThreshold={"09:00:00"}
              headerToolbar={{
                start: "prev",
                center: "title",
                end: "next today",
              }}
            />
          </FullCalendarDiv>
        </div>
        <div className="time-table">
          <h3>학급 시간표</h3>
          <div>
            <TimeTable />
          </div>
        </div>
      </div>
    </TeacherHomeDiv>
  );
};

export default TeacherHome;
