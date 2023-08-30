import React from "react";
import {
  LifeRecordTableWrap,
  RecordStatusDiv,
} from "../../../styles/student/LifeRecordStyle";
import SchoolRecordChart from "./TSchoolRecordChart";
import MockRecordChart from "./TMockRecordChart";
import SchoolRecordTable from "./TSchoolRecordTable";
import MockRecordTable from "./TMockRecordTable";
import { RecordTableWrap } from "../../../styles/student/SchoolRecordStyle";
import TSchoolRecordChart from "./TSchoolRecordChart";
import TMockRecordChart from "./TMockRecordChart";
import TSchoolRecordTable from "./TSchoolRecordTable";
import TMockRecordTable from "./TMockRecordTable";

const StudentRecordStatus = ({ userId }) => {
  return (
    <RecordStatusDiv>
      <h4>성적 현황</h4>
      <div className="record-chart">
        <div className="school-record-wrap">
          <span>내신 그래프</span>
          <TSchoolRecordChart userId={userId} />
        </div>
        <div className="mock-record-wrap">
          <span>모의고사 그래프</span>
          <TMockRecordChart userId={userId} />
        </div>
      </div>
      <div className="record-table">
        <div className="school-record-wrap">
          <LifeRecordTableWrap>
            <TSchoolRecordTable userId={userId} />
          </LifeRecordTableWrap>
        </div>
        <div className="mock-record-wrap">
          <LifeRecordTableWrap>
            <TMockRecordTable userId={userId} />
          </LifeRecordTableWrap>
        </div>
      </div>
    </RecordStatusDiv>
  );
};

export default StudentRecordStatus;
