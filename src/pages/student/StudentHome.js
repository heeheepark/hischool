import React, { useState } from "react";
import RecapSchoolRecord from "../../components/student/RecapSchoolRecord";
import RecapMockRecord from "../../components/student/RecapMockRecord";
import { StudentHomeDiv } from "../../styles/student/StudentHomeStyle";
import TimeTable from "../../components/student/TimeTable";
import WeekFoodMenu from "../../components/student/WeekFoodMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import { getSchoolInfo, getUserInfo } from "../../api/userInfoAxios";

const StudentHome = () => {
  const [loading, setLoading] = useState(false);
  // const [test, setTest] = useState(null);
  // const [test2, setTest] = useState(null);

  useState(() => {
    setTimeout(() => setLoading(true), 1000);
    // getSchoolInfo();
  }, []);

  return (
    <StudentHomeDiv>
      {loading ? null : <Loading />}
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
    </StudentHomeDiv>
  );
};

export default StudentHome;
