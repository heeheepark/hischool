import React, { useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import { getAllMockRecord } from "../../../api/student/studentHomeAxios";
import { RecordDiv } from "../../../styles/student/studenthome/StudentHomeStyle";

const MockRecordChart = () => {
  const colorData = ["#97E3D5", "#E8C1A0", "#F1E15B", "#F47560"];
  const [allMockRecordData, setAllMockRecordData] = useState(null);

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
        </>
      ) : (
        <p className="err-message">모의고사 성적 데이터가 없습니다.</p>
      )}
    </RecordDiv>
  );
};

export default MockRecordChart;
