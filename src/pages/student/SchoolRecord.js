import React from "react";
import {
  RecordTableWrap,
  ChartWrap,
  SchoolRecordDiv,
} from "../../styles/student/SchoolRecordStyle";
import { ResponsiveLine } from "@nivo/line";
import SchoolRecordTable from "../../components/student/SchoolRecordTable";

const SchoolRecord = () => {
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
      <h3>내신 성적 관리</h3>
      <ChartWrap>
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
            axisLeft={{ tickValues: [1, 2, 3, 4, 5] }}
            gridYValues={[1, 2, 3, 4, 5]}
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
                translateY: 60,
                itemDirection: "left-to-right",
                itemWidth: 70,
                itemHeight: 20,
                itemOpacity: 1,
                symbolSize: 12,
                symbolShape: "circle",
              },
            ]}
          />
        </div>
        <div className="record-text">
          <p>
            <span className="user-name">강동원</span>
            <span>님의</span>
            <span>주요 과목 등급</span>
          </p>
          <div>
            <div className="high-record-text">
              <span>내신 최고 등급</span>
              <div>
                <p>
                  <span className="subject-title">국어</span>
                  <span className="grade-num">3</span>
                  <span>등급</span>
                </p>
                <p>
                  <span className="subject-title">수학</span>
                  <span className="grade-num">3</span>
                  <span>등급</span>
                </p>
                <p>
                  <span className="subject-title">영어</span>
                  <span className="grade-num">3</span>
                  <span>등급</span>
                </p>
                <p>
                  <span className="subject-title">한국사</span>
                  <span className="grade-num">3</span>
                  <span>등급</span>
                </p>
              </div>
            </div>
            <div className="current-record-text">
              <span>현재 내신 등급</span>
              <div>
                <p>
                  <span className="subject-title">국어</span>
                  <span className="grade-num">3</span>
                  <span>등급</span>
                </p>
                <p>
                  <span className="subject-title">수학</span>
                  <span className="grade-num">3</span>
                  <span>등급</span>
                </p>
                <p>
                  <span className="subject-title">영어</span>
                  <span className="grade-num">3</span>
                  <span>등급</span>
                </p>
                <p>
                  <span className="subject-title">한국사</span>
                  <span className="grade-num">3</span>
                  <span>등급</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </ChartWrap>
      <RecordTableWrap>
        <div className="title">
          <h4>내신 성적 목록</h4>
          <div className="filter-wrap">
            <select name="year" id="year">
              <option value="all">전체 연도</option>
              <option value="2023">2023년</option>
              <option value="2022">2022년</option>
              <option value="2021">2021년</option>
            </select>
            <select name="semester" id="semester">
              <option value="all">전체 학기</option>
              <option value="semester1">1학기</option>
              <option value="semester2">2학기</option>
            </select>
            <select name="test-category" id="test-category">
              <option value="all">전체 시험</option>
              <option value="middle">중간</option>
              <option value="final">기말</option>
            </select>
          </div>
        </div>
        <div className="record-table">
          <SchoolRecordTable />
        </div>
      </RecordTableWrap>
    </SchoolRecordDiv>
  );
};

export default SchoolRecord;
