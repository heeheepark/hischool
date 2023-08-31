import React, { useEffect, useState } from "react";
import RecapSchoolRecord from "../../components/student/RecapSchoolRecord";
import RecapMockRecord from "../../components/student/RecapMockRecord";
import { StudentHomeDiv } from "../../styles/student/StudentHomeStyle";
import TimeTable from "../../components/student/TimeTable";
import WeekFoodMenu from "../../components/student/WeekFoodMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { getMainNotice } from "../../api/student/studentHomeAxios";

const StudentHome = () => {
  const [mainNotice, setMainNotice] = useState("");

  useEffect(() => {
    getMainNotice(setMainNotice);
  }, []);

  return (
    <StudentHomeDiv>
      <div className="record">
        <div>
          <Link to="/student/schoolrecord">
            <h3>
              내신 성적 현황
              <FontAwesomeIcon icon={faChevronRight} className="icon-arrow" />
            </h3>
          </Link>
          <div className="school-record">
            <RecapSchoolRecord />
          </div>
        </div>
        <div>
          <Link to="/student/mockrecord">
            <h3>
              모의고사 성적 현황
              <FontAwesomeIcon icon={faChevronRight} className="icon-arrow" />
            </h3>
          </Link>
          <div className="mock-record">
            <RecapMockRecord />
          </div>
        </div>
      </div>
      <div className="student-home-bottom">
        <div className="time-table">
          <h3>학급 시간표</h3>
          <div>
            <TimeTable />
          </div>
        </div>
        <div className="bottom-right-wrap">
          <div className="notice-wrap">
            <Link to="/student/notice" className="notice-wrap-title">
              <h3>
                공지사항
                <FontAwesomeIcon icon={faChevronRight} className="icon-arrow" />
              </h3>
            </Link>
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
                  slidesPerView={3}
                >
                  {mainNotice.imptList?.map(item => (
                    <SwiperSlide key={item.noticeId}>
                      <div className="notice-title-wrap">
                        <div>
                          <span className="notice-important">중요</span>
                          <span className="notice-title">
                            <Link to={`/student/notice/${item.noticeId}`}>
                              {item.title}
                            </Link>
                          </span>
                        </div>
                        <span className="notice-date">{item.createdAt}</span>
                      </div>
                    </SwiperSlide>
                  ))}
                  {mainNotice.normalList?.map(item => (
                    <SwiperSlide key={item.noticeId}>
                      <div className="notice-title-wrap">
                        <div>
                          <Link to={`/student/notice/${item.noticeId}`}>
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
          <div className="food-menu">
            <Link to="/student/foodmenu" className="food-menu-title">
              <h3>
                주간 급식표
                <FontAwesomeIcon icon={faChevronRight} className="icon-arrow" />
              </h3>
            </Link>
            <div>
              <WeekFoodMenu />
            </div>
          </div>
        </div>
      </div>
    </StudentHomeDiv>
  );
};

export default StudentHome;
