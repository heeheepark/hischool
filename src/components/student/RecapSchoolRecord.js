import React, { useState } from "react";
import { RecordDiv } from "../../styles/student/StudentHomeStyle";
import { ResponsiveLine } from "@nivo/line";
import {
  getAllSchoolRecord,
  getRecentSchoolRecord,
} from "../../api/student/studentHomeAxios";

const RecapSchoolRecord = () => {
  const colorData = ["#97E3D5", "#E8C1A0", "#F1E15B", "#F47560"];
  const [allSchoolRecordData, setAllSchoolRecordData] = useState(null);
  const [recentSchoolRecordData, setRecentSchoolRecordData] = useState(null);
  const [recentTestTitle, setRecentTestTitle] = useState(null);

  useState(() => {
    getAllSchoolRecord(setAllSchoolRecordData);
    getRecentSchoolRecord(setRecentSchoolRecordData, setRecentTestTitle);
  }, []);

  // 내신 성적 현황 텍스트
  const testYear = recentTestTitle ? recentTestTitle[0] : null;
  const testSemester = recentTestTitle
    ? recentTestTitle[1].split(" ")[0]
    : null;
  const testType = recentTestTitle ? recentTestTitle[1].split(" ")[1] : null;

  // 내신 차트 데이터
  const subject = ["한국사", "영어", "수학", "국어"];
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
      return { id: subject[index], data };
    });

  return (
    <RecordDiv>
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
            colors={colorData}
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
        <div className="exam-title-wrap">
          <span className="exam-title">
            {testYear}학년도 {testSemester}학기 {testType}고사
          </span>
          <span>주요 과목 등급</span>
        </div>
        <div className="subject-grade">
          {recentSchoolRecordData?.map(item => (
            <p key={item.nm}>
              <span className="subject-title korean">{item.nm}</span>
              <span className="grade-num korean">{item.rating}</span>
              <span>등급</span>
            </p>
          ))}
        </div>
      </div>
    </RecordDiv>
  );
};

export default RecapSchoolRecord;
