import React from "react";
import {
  RecordTableWrap,
  ChartWrap,
  SchoolRecordDiv,
} from "../../styles/student/SchoolRecordStyle";
import { ResponsiveLine } from "@nivo/line";
import SchoolRecordTable from "../../components/student/SchoolRecordTable";
import { SchoolRecordFilter } from "../../components/student/Filter";
import { useEffect } from "react";
import { useState } from "react";
import { getUserInfo } from "../../api/userInfoAxios";
import {
  getCurrentSchoolRecord,
  getHighestSchoolRecord,
} from "../../api/student/schoolRecordAxios";
import { SchoolRecordFilterDiv } from "../../styles/student/FilterStyle";
import { getAllSchoolRecord } from "../../api/student/studentHomeAxios";

const SchoolRecord = () => {
  const [userName, setUserName] = useState(null);
  const [highestSchoolRecord, setHighestSchoolRecord] = useState(null);
  const [currentSchoolRecord, setCurrentSchoolRecord] = useState(null);
  const [allSchoolRecordData, setAllSchoolRecordData] = useState(null);

  useEffect(() => {
    getUserInfo(setUserName);
    getHighestSchoolRecord(setHighestSchoolRecord);
    getCurrentSchoolRecord(setCurrentSchoolRecord);
    getAllSchoolRecord(setAllSchoolRecordData);
  }, []);

  // 내신 차트 데이터
  const subject = ["한국사", "영어", "수학", "국어"];
  const chartColor = [
    "hsl(231, 100%, 59%)",
    "hsl(45, 70%, 50%)",
    "hsl(342, 70%, 50%)",
    "hsl(213, 70%, 50%)",
  ];
  const ratingList = allSchoolRecordData?.map(item => parseInt(item.rating));
  const highGrade = ratingList?.reduce((a, b) => {
    return Math.max(a, b);
  });
  const gradeArray = Array.from({ length: highGrade }, (_, index) => index + 1);
  const newSchoolRecordData = Array(4)
    .fill()
    .map((_, index) => {
      const data = allSchoolRecordData
        ?.filter(originRecord => originRecord.nm === subject[index])
        .map(item => {
          return {
            x: item.date,
            y: parseInt(item.rating),
          };
        });
      return { id: subject[index], color: chartColor[index], data };
    });

  return (
    <SchoolRecordDiv>
      <h3>내신 성적 관리</h3>
      <ChartWrap>
        <div className="chart">
          {allSchoolRecordData ? (
            <ResponsiveLine
              data={newSchoolRecordData}
              margin={{ top: 30, right: 60, bottom: 70, left: 60 }}
              xScale={{ type: "point" }}
              yScale={{
                type: "linear",
                min: "1",
                max: highGrade,
                stacked: false,
                reverse: true,
              }}
              axisLeft={{ tickValues: gradeArray }}
              gridYValues={gradeArray}
              colors={["#B2A4FF", "#FFB4B4", "#C3EDC0", "gold"]}
              lineWidth={3}
              pointSize={5}
              pointColor={{ theme: "background" }}
              pointBorderWidth={3}
              pointBorderColor={{ from: "serieColor" }}
              useMesh={true}
              legends={[
                {
                  anchor: "bottom",
                  direction: "row",
                  justify: false,
                  translateX: 0,
                  translateY: 55,
                  itemDirection: "left-to-right",
                  itemWidth: 70,
                  itemHeight: 20,
                  itemOpacity: 1,
                  symbolSize: 12,
                  symbolShape: "circle",
                },
              ]}
            />
          ) : null}
        </div>
        <div className="record-text">
          <p>
            <span className="user-name">{userName}</span>
            <span>님의</span>
            <span>주요 과목 등급</span>
          </p>
          <div>
            <div className="high-record-text">
              <span>내신 최고 등급</span>
              <div>
                {highestSchoolRecord?.map((item, index) => (
                  <p key={index}>
                    <span className="subject-title">{item.nm}</span>
                    <span className="grade-num">{item.rating}</span>
                    <span>등급</span>
                  </p>
                ))}
              </div>
            </div>
            <div className="current-record-text">
              <span>현재 내신 등급</span>
              <div>
                {currentSchoolRecord?.map((item, index) => (
                  <p key={index}>
                    <span className="subject-title">{item.nm}</span>
                    <span className="grade-num">{item.rating}</span>
                    <span>등급</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ChartWrap>
      <RecordTableWrap>
        <SchoolRecordTable />
      </RecordTableWrap>
    </SchoolRecordDiv>
  );
};

export default SchoolRecord;
