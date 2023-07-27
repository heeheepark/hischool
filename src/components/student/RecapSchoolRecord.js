import React from "react";
import { SchoolRecordDiv } from "../../styles/student/StudentHomeStyle";
import { ResponsiveLine } from "@nivo/line";

const RecapSchoolRecord = () => {
  const data = [
    {
      id: "한국사",
      color: "hsl(231, 100%, 59%)",
      data: [
        {
          x: `2021-1 중간`,
          y: 4,
        },
        {
          x: "2021-1 기말",
          y: 4,
        },
        {
          x: "2021-2 중간",
          y: 5,
        },
        {
          x: "2021-2 기말",
          y: 4,
        },
        {
          x: "2022-1 중간",
          y: 3,
        },
        {
          x: "2022-1 기말",
          y: 2,
        },
        {
          x: "2022-2 중간",
          y: 2,
        },
        {
          x: "2022-2 기말",
          y: 2,
        },
      ],
    },
    {
      id: "영어",
      color: "hsl(213, 70%, 50%)",
      data: [
        {
          x: `2021-1 중간`,
          y: 3,
        },
        {
          x: "2021-1 기말",
          y: 2,
        },
        {
          x: "2021-2 중간",
          y: 2,
        },
        {
          x: "2021-2 기말",
          y: 1,
        },
        {
          x: "2022-1 중간",
          y: 2,
        },
        {
          x: "2022-1 기말",
          y: 2,
        },
        {
          x: "2022-2 중간",
          y: 1,
        },
        {
          x: "2022-2 기말",
          y: 2,
        },
      ],
    },
    {
      id: "수학",
      color: "hsl(342, 70%, 50%)",
      data: [
        {
          x: `2021-1 중간`,
          y: 1,
        },
        {
          x: "2021-1 기말",
          y: 5,
        },
        {
          x: "2021-2 중간",
          y: 3,
        },
        {
          x: "2021-2 기말",
          y: 2,
        },
        {
          x: "2022-1 중간",
          y: 2,
        },
        {
          x: "2022-1 기말",
          y: 1,
        },
        {
          x: "2022-2 중간",
          y: 1,
        },
        {
          x: "2022-2 기말",
          y: 1,
        },
      ],
    },
    {
      id: "국어",
      color: "hsl(45, 70%, 50%)",
      data: [
        {
          x: `2021-1 중간`,
          y: 1,
        },
        {
          x: "2021-1 기말",
          y: 2,
        },
        {
          x: "2021-2 중간",
          y: 3,
        },
        {
          x: "2021-2 기말",
          y: 2,
        },
        {
          x: "2022-1 중간",
          y: 1,
        },
        {
          x: "2022-1 기말",
          y: 1,
        },
        {
          x: "2022-2 중간",
          y: 3,
        },
        {
          x: "2022-2 기말",
          y: 1,
        },
        // {
        //   x: "2023-1 중간",
        //   y: 1,
        // },
        // {
        //   x: "2023-1 기말",
        //   y: 1,
        // },
        // {
        //   x: "2023-2 중간",
        //   y: 3,
        // },
        // {
        //   x: "2023-2 기말",
        //   y: 1,
        // },
      ],
    },
  ];
  return (
    <SchoolRecordDiv>
      <div
        className="chart"
        style={{
          width: "100%",
          height: "350px",
          background: "#fff",
          marginBottom: "20px",
          borderRadius: "5px",
          boxShadow: "0px 0.5px 5px 0px rgba(0, 0, 0, 0.2)",
        }}
      >
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
          axisRight={null}
          colors={{ scheme: "nivo" }}
          pointSize={3}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          // pointLabelYOffset={-12}
          // useMesh={true}
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
        {/* <h4>최근 내신 성적</h4> */}
        <div className="exam-title-wrap">
          <span>최근에 응시한</span>
          <span className="exam-title">2023학년도 2학기 중간고사의</span>
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
