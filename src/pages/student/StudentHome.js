import React from "react";
import RecapSchoolRecord from "../../components/student/RecapSchoolRecord";
import RecapMockRecord from "../../components/student/RecapMockRecord";
import { StudentHomeDiv } from "../../styles/student/StudentHomeStyle";
import TimeTable from "../../components/student/TimeTable";
import WeekFoodMenu from "../../components/student/WeekFoodMenu";

const StudentHome = () => {
  return (
    <StudentHomeDiv>
      <div className="record">
        <h3>성적 현황</h3>
        <div className="record-wrap">
          <div className="school-record">
            <RecapSchoolRecord />
          </div>
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
          <h3>이번주 급식표</h3>
          <div>
            <WeekFoodMenu />
          </div>
        </div>
      </div>
    </StudentHomeDiv>
  );
};

export default StudentHome;
