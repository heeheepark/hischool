import React from "react";
import { SchoolRecordDiv } from "../../styles/student/StudentHomeStyle";
import { ResponsiveLine } from "@nivo/line";

const RecapSchoolRecord = () => {
  const data = [
    {
      id: "한국사",
      data: [
        {
          x: `2023년 3월`,
          y: 1,
        },
        {
          x: "2023년 4월",
          y: 2,
        },
        {
          x: "2023년 6월",
          y: 3,
        },
        {
          x: "2023년 9월",
          y: 2,
        },
        {
          x: "2023년 10월",
          y: 1,
        },
        {
          x: "2023년 11월",
          y: 1,
        },
      ],
    },
    {
      id: "영어",
      data: [
        {
          x: `2023년 3월`,
          y: 4,
        },
        {
          x: "2023년 4월",
          y: 3,
        },
        {
          x: "2023년 6월",
          y: 3,
        },
        {
          x: "2023년 9월",
          y: 5,
        },
        {
          x: "2023년 10월",
          y: 4,
        },
        {
          x: "2023년 11월",
          y: 4,
        },
      ],
    },
    {
      id: "수학",
      data: [
        {
          x: `2023년 3월`,
          y: 2,
        },
        {
          x: "2023년 4월",
          y: 2,
        },
        {
          x: "2023년 6월",
          y: 3,
        },
        {
          x: "2023년 9월",
          y: 3,
        },
        {
          x: "2023년 10월",
          y: 2,
        },
        {
          x: "2023년 11월",
          y: 2,
        },
      ],
    },
    {
      id: "국어",
      data: [
        {
          x: `2023년 3월`,
          y: 3,
        },
        {
          x: "2023년 4월",
          y: 1,
        },
        {
          x: "2023년 6월",
          y: 2,
        },
        {
          x: "2023년 9월",
          y: 4,
        },
        {
          x: "2023년 10월",
          y: 3,
        },
        {
          x: "2023년 11월",
          y: 3,
        },
      ],
    },
  ];
  return (
    <SchoolRecordDiv>
      <div className="chart">
        <ResponsiveLine
          data={data}
          margin={{ top: 30, right: 60, bottom: 70, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "1",
            max: "5",
            stacked: false,
            reverse: true,
          }}
          // yFormat=" >-.2f"
          // axisTop={null}
          // axisRight={null}
          axisLeft={{ tickValues: [1, 2, 3, 4, 5] }}
          gridYValues={[1, 2, 3, 4, 5]}
          colors={["#B2A4FF", "#FFB4B4", "#C3EDC0", "gold"]}
          pointSize={3}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          // pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: 55,
              // itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 70,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              // symbolBorderColor: "rgba(0, 0, 0, 1.0)",
              // effects: [
              //   {
              //     on: "hover",
              //     style: {
              //       itemBackground: "rgba(0, 0, 0, .03)",
              //       itemOpacity: 1,
              //     },
              //   },
              // ],
            },
          ]}
        />
      </div>
      <div className="record-text">
        <div className="exam-title-wrap">
          <span className="exam-title">2023년 10월 모의고사</span>
          <span>의</span>
          <span>주요 과목 등급</span>
        </div>
        <div className="subject-grade">
          <p>
            <span className="subject-title korean">국어</span>
            <span className="grade-num">3</span>
            <span>등급</span>
          </p>
          <p>
            <span className="subject-title math">수학</span>
            <span className="grade-num">2</span>
            <span>등급</span>
          </p>
          <p>
            <span className="subject-title english">영어</span>
            <span className="grade-num">3</span>
            <span>등급</span>
          </p>
          <p>
            <span className="subject-title k-history">한국사</span>
            <span className="grade-num">2</span>
            <span>등급</span>
          </p>
        </div>
      </div>
    </SchoolRecordDiv>
  );
};

export default RecapSchoolRecord;
