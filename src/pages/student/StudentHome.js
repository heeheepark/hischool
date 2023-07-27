import React from "react";
import RecapSchoolRecord from "../../components/student/RecapSchoolRecord";
import RecapMockRecord from "../../components/student/RecapMockRecord";
import { StudentHomeDiv } from "../../styles/student/StudentHomeStyle";

const StudentHome = () => {
  return (
    <StudentHomeDiv>
      <h3>성적 현황</h3>
      <div className="record-wrap">
        <div className="school-record">
          <RecapSchoolRecord />
        </div>
        <div className="mock-record">
          <RecapMockRecord />
        </div>
      </div>
    </StudentHomeDiv>
  );
};

export default StudentHome;
