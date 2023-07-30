import React from "react";
import {
  ChartWrap,
  RecordTableWrap,
} from "../../styles/student/SchoolRecordStyle";
import { ResponsiveLine } from "@nivo/line";
import { MockRecordDiv } from "../../styles/student/MockRecordStyle";
import MockRecordTable from "../../components/student/MockRecordTable";

const MockRecord = () => {
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
    <MockRecordDiv>
      <h3>모의고사 성적 관리</h3>
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
              <span>모의고사 최고 등급</span>
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
              <span>현재 모의고사 등급</span>
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
          <h4>모의고사 성적 목록</h4>
          <div className="filter-wrap">
            <select name="year" id="year">
              <option value="all">전체 연도</option>
              <option value="2023">2023년</option>
              <option value="2022">2022년</option>
              <option value="2021">2021년</option>
            </select>
            <select name="semester" id="semester">
              <option value="all">전체 월</option>
              <option value="semester1">3월</option>
              <option value="semester2">6월</option>
              <option value="semester2">9월</option>
            </select>
          </div>
        </div>
        <div className="record-table">
          <MockRecordTable />
        </div>
      </RecordTableWrap>
    </MockRecordDiv>
  );
};

export default MockRecord;
