import React from "react";
import { LifeRecordDiv } from "../../styles/student/LifeRecordStyle";
import AttendStatus from "../../components/student/AttendStatus";
import RecordStatus from "../../components/student/RecordStatus";
import CareerStatus from "../../components/student/CareerStatus";

const LifeRecord = () => {
  return (
    <LifeRecordDiv>
      <h3>학생 생활기록부({"김수현(2005-12-25)"})</h3>
      <div className="tabs-wrap">
        <div className="grade">성적현황</div>
        <div className="attendance">출결현황</div>
        <div className="career active">진로지도</div>
      </div>
      <div className="content-wrap">
        {/* <RecordStatus /> */}
        {/* <AttendStatus /> */}
        <CareerStatus />
      </div>
    </LifeRecordDiv>
  );
};

export default LifeRecord;
