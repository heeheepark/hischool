import React, { useState } from "react";
import { RecordDiv } from "../../../styles/student/studenthome/StudentHomeStyle";
import { ResponsiveLine } from "@nivo/line";
import {
  getAllMockRecord,
  getRecentMockRecord,
} from "../../../api/student/studentHomeAxios";

const RecapMockRecord = () => {
  const colorData = ["#97E3D5", "#E8C1A0", "#F1E15B", "#F47560"];
  const [allMockRecordData, setAllMockRecordData] = useState(null);
  const [recentMockRecordData, setRecentMockRecordData] = useState(null);
  const [recentTestTitle, setRecentTestTitle] = useState(null);

  // 모의고사 성적 현황 텍스트
  const testYear = recentTestTitle ? recentTestTitle[0] : null;
  const testMonth = recentTestTitle ? recentTestTitle[1] : null;

  // 모의고사 차트 데이터
  const subject = ["한국사", "영어", "수학", "국어"];
  const ratingList = allMockRecordData?.map(item => parseInt(item.rating));
  const highGrade = ratingList?.reduce((a, b) => {
    return Math.max(a, b);
  });
  const gradeArray = Array.from({ length: highGrade }, (_, index) => index + 1);
  const newMockRecordData = Array(4)
    .fill()
    .map((_, index) => {
      const data = allMockRecordData
        ?.filter(originRecord => originRecord.nm === subject[index])
        .map(item => {
          return {
            x: item.date,
            y: parseInt(item.rating),
          };
        });
      return { id: subject[index], data };
    });

  useState(() => {
    getAllMockRecord(setAllMockRecordData);
    getRecentMockRecord(setRecentMockRecordData, setRecentTestTitle);
  }, []);

  return (
    <RecordDiv>
      {allMockRecordData ? (
        <>
          <div className="chart">
            {allMockRecordData ? (
              <ResponsiveLine
                data={newMockRecordData}
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
                {testYear}년 {testMonth}월 모의고사
              </span>
              <span>주요 과목 등급</span>
            </div>
            <div className="subject-grade">
              {recentMockRecordData?.map((item, index) => (
                <p key={`0${index}`}>
                  <span className="subject-title">{item.nm}</span>
                  <span className="grade-num">{item.rating}</span>
                  <span>등급</span>
                </p>
              ))}
            </div>
          </div>
        </>
      ) : (
        <p className="err-message">모의고사 성적 데이터가 없습니다.</p>
      )}
    </RecordDiv>
  );
};

export default RecapMockRecord;
