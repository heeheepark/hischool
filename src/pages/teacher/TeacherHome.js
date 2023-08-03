import React, { useEffect, useState } from "react";
import {
  FullCalendarDiv,
  TeacherHomeDiv,
} from "../../styles/teacher/TeacherHomeStyle";
import TimeTable from "../../components/student/TimeTable";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Link } from "react-router-dom";
import TeacherTimeTable from "../../components/teacher/TeacherTimeTable";
import ClassSchoolRecord from "../../components/teacher/ClassSchoolRecord";
import ClassMockRecord from "../../components/teacher/ClassMockRecord";
import { getStudentCount, getUnSignCount } from "../../api/teacherAxios";

const TeacherHome = () => {
  const [studentCount, setStudentCount] = useState(null);
  const [unSignCount, setUnSignCount] = useState(null);
  const eventData = [
    // {
    //   idTitle: 1,
    //   title: "2학기 수업 계획",
    //   start: "2023-07-31",
    //   end: "2023-08-03",
    // },
    {
      idTitle: 1,
      title: "2학기 수업 계획",
      start: "2023-07-31",
      end: "2023-08-03",
    },
    {
      idTitle: 1,
      title: "2학기 수업 계획",
      start: "2023-07-31",
      end: "2023-08-03",
    },
    {
      idTitle: 1,
      title: "2학기 수업 계획",
      start: "2023-08-08",
      end: "2023-08-11",
    },
    {
      idTitle: 1,
      title: "2학기 수업 계획",
      start: "2023-08-10",
      end: "2023-08-13",
    },
    {
      idTitle: 1,
      title: "2학기 수업 계획",
      start: "2023-08-13",
      end: "2023-08-16",
    },
    {
      idTitle: 1,
      title: "2학기 수업 계획",
      start: "2023-08-15",
      end: "2023-08-18",
    },
    {
      idTitle: 1,
      title: "2학기 수업 계획",
      start: "2023-08-21",
      end: "2023-08-24",
    },
    {
      idTitle: 1,
      title: "2학기 수업 계획",
      start: "2023-08-23",
      end: "2023-08-26",
    },
    {
      idTitle: 1,
      title: "2학기 수업 계획",
      start: "2023-08-28",
      end: "2023-08-30",
    },
    {
      idTitle: 1,
      title: "2학기 수업 계획",
      start: "2023-08-29",
      end: "2023-08-31",
    },
    {
      idTitle: 1,
      title: "2학기 수업 계획",
      start: "2023-09-04",
      end: "2023-09-06",
    },
    {
      idTitle: 1,
      title: "2학기 수업 계획",
      start: "2023-09-04",
      end: "2023-09-08",
    },
  ];

  useEffect(() => {
    getStudentCount(setStudentCount);
    getUnSignCount(setUnSignCount);
  }, []);

  return (
    <TeacherHomeDiv>
      <div className="student-count">
        <h3>학급 현황</h3>
        <div className="class-status">
          <span>총 인원:</span>
          <Link to="/teacher/studentlist">
            <span className="student-num">{studentCount}</span>
          </Link>
          <span>명</span>
          <span>(가입 대기 인원:</span>
          <Link to="/teacher/signlist">
            <span className="student-num">{unSignCount}</span>
          </Link>
          <span>명)</span>
        </div>
      </div>
      <div className="teacher-home-bottom">
        <div className="teacher-home-left">
          <div className="class-school-record">
            <h3>학급 내신 현황</h3>
            <ClassSchoolRecord />
          </div>
          <div className="class-mock-record">
            <h3>학급 모의고사 현황</h3>
            <ClassMockRecord />
          </div>
        </div>
        <div className="teacher-home-right">
          <div className="time-table">
            <h3>학급 시간표</h3>
            <div>
              <TeacherTimeTable />
            </div>
          </div>
          <div className="calendar">
            <FullCalendarDiv>
              <FullCalendar
                height="46.4vh"
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                locale="ko"
                dayCellContent={day => day.dayNumberText.replace("일", "")}
                events={eventData}
                eventColor="#aaa"
                eventTextColor="#fff"
                dayMaxEvents={true}
                moreLinkContent={args => {
                  return <span>{"+" + args.num}</span>;
                }}
                headerToolbar={{
                  start: "prev",
                  center: "title",
                  end: "next today",
                }}
                event
              />
            </FullCalendarDiv>
          </div>
        </div>
      </div>
    </TeacherHomeDiv>
  );
};

export default TeacherHome;
