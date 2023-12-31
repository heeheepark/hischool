import React, { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Link, NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import {
  getMainNotice,
  getSchedule,
  getStudentCount,
  getUnSignCount,
} from "../../api/teacher/teacherHomeAxios";
import {
  FullCalendarDiv,
  TeacherHomeDiv,
} from "../../styles/teacher/teacherhome/TeacherHomeStyle";
import ClassSchoolRecord from "../../components/teacher/teacherhome/ClassSchoolRecord";
import ClassMockRecord from "../../components/teacher/teacherhome/ClassMockRecord";
import TeacherTimeTable from "../../components/teacher/teacherhome/TeacherTimeTable";

const TeacherHome = () => {
  const [mainNotice, setMainNotice] = useState("");
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

  // 월 변경
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
    getMainNotice(setMainNotice);
  }, []);

  useEffect(() => {
    getSchedule(setScheduleData, startDate, endDate);
  }, [startDate, endDate]);

  return (
    <>
      <TeacherHomeDiv>
        <div className="student-count">
          <div className="class-status-wrap">
            <h3>학급 현황</h3>
            <div className="class-status">
              <span>총 인원:</span>
              <Link to="/teacher/studentlist">
                <span className="student-num">{studentCount}</span>
              </Link>
              <span>명</span>
              <span>(가입 대기 인원:</span>
              <Link to="/teacher/studentlist/signlist">
                <span className="student-num">{unSignCount}</span>
              </Link>
              <span>명)</span>
            </div>
          </div>
          <div className="notice-wrap">
            <NavLink to="/teacher/notice" className="notice-wrap-title">
              <h3>공지사항</h3>
            </NavLink>
            <div className="notice-swiper">
              {mainNotice && (
                <Swiper
                  style={{ height: "100%" }}
                  direction={"vertical"}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Autoplay]}
                  className="mySwiper"
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  loop={true}
                  slidesPerView={1}
                >
                  {mainNotice.imptList?.map(item => (
                    <SwiperSlide key={item.noticeId}>
                      <div className="notice-title-wrap">
                        <div>
                          <span className="notice-important">중요</span>
                          <Link
                            to={`/teacher/notice/${item.noticeId}`}
                            className="list-title"
                          >
                            {item.title}
                          </Link>
                        </div>
                        <span className="notice-date">{item.createdAt}</span>
                      </div>
                    </SwiperSlide>
                  ))}
                  {mainNotice.normalList?.map(item => (
                    <SwiperSlide key={item.noticeId}>
                      <div className="notice-title-wrap">
                        <div>
                          <Link
                            to={`/teacher/notice/${item.noticeId}`}
                            className="list-title"
                          >
                            {item.title}
                          </Link>
                        </div>
                        <span className="notice-date">{item.createdAt}</span>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
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
    </>
  );
};

export default TeacherHome;
