import React, { useEffect, useRef, useState } from "react";
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
import {
  getStudentCount,
  getUnSignCount,
} from "../../api/teacher/teacherHomeAxios";
import { getSchedule } from "../../api/teacher/teacherHomeAxios";

const TeacherHome = () => {
  const [studentCount, setStudentCount] = useState(null);
  const [unSignCount, setUnSignCount] = useState(null);
  const [scheduleData, setScheduleData] = useState([]);
  const calRef = useRef(null);

  // 현재 기준 캘린더 날짜
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = (today.getMonth() + 1).toString();
  const monthEndDate = new Date(todayYear, todayMonth, 0).getDate();
  const todayStartDate =
    todayYear + (todayMonth.length <= 1 ? "0" + todayMonth : todayMonth) + "01";
  const todayEndDate =
    todayYear +
    (todayMonth.length <= 1 ? "0" + todayMonth : todayMonth) +
    monthEndDate;

  const [startDate, setStartDate] = useState(todayStartDate);
  const [endDate, setEndDate] = useState(todayEndDate);

  // 캘린더 월 변경
  const handleDatesSet = () => {
    if (calRef.current) {
      const calApi = calRef.current.getApi();
      const currentYear = calApi.getDate().getYear() + 1900;
      const currentMonth = (calApi.getDate().getMonth() + 1).toString();
      const endDateDay = new Date(currentYear, currentMonth, 0).getDate();
      const startDate =
        currentYear +
        (currentMonth.length <= 1 ? "0" + currentMonth : currentMonth) +
        "01";
      const endDate =
        currentYear +
        (currentMonth.length <= 1 ? "0" + currentMonth : currentMonth) +
        endDateDay;
      setStartDate(startDate);
      setEndDate(endDate);
    }
  };

  useEffect(() => {
    getStudentCount(setStudentCount);
    getUnSignCount(setUnSignCount);
    getSchedule(setScheduleData, startDate, endDate);
  }, []);

  useEffect(() => {
    getSchedule(setScheduleData, startDate, endDate);
  }, [startDate, endDate]);

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
                ref={calRef}
                height="46.4vh"
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                locale="ko"
                dayCellContent={day => day.dayNumberText.replace("일", "")}
                events={scheduleData}
                eventColor="transparent"
                eventTextColor="#555"
                dayMaxEvents={true}
                datesSet={handleDatesSet}
                // getDate={handleDatesSet}
                moreLinkContent={args => {
                  return <span>{"+" + args.num}</span>;
                }}
                headerToolbar={{
                  start: "prev",
                  center: "title",
                  end: "next today",
                }}
              />
            </FullCalendarDiv>
          </div>
        </div>
      </div>
    </TeacherHomeDiv>
  );
};

export default TeacherHome;
