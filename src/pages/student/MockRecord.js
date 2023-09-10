import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { useState, useEffect } from "react";
import { getUserInfo } from "../../api/login/userInfoAxios";
import { MockRecordDiv } from "../../styles/student/record/MockRecordStyle";
import {
  ChartWrap,
  RecordTableWrap,
} from "../../styles/student/record/SchoolRecordStyle";
import {
  getCurrentMockRecord,
  getHighestMockRecord,
} from "../../api/student/mockRecordAxios";
import { getAllMockRecord } from "../../api/student/studentHomeAxios";
import MockRecordTable from "../../components/student/record/MockRecordTable";
import { MiniLoading } from "../../components/Loading";
import { client } from "../../api/login/client";

const MockRecord = () => {
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState(null);
  const [highestMockRecord, setHighestMockRecord] = useState(null);
  const [currentMockRecord, setCurrentMockRecord] = useState(null);
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

  useEffect(() => {
    // 로딩 호출
    client.interceptors.request.use(config => {
      if (config.url.includes("mock-graph")) {
        setLoading(true);
      }
      return config;
    });
    // 로딩 완료
    client.interceptors.response.use(config => {
      setLoading(false);
      return config;
    });
    getUserInfo(null, setUserName, null);
    getHighestMockRecord(setHighestMockRecord);
    getCurrentMockRecord(setCurrentMockRecord);
    getAllMockRecord(setAllMockRecordData);
  }, []);

  return (
    <>
      <MockRecordDiv>
        <h3>모의고사 성적 관리</h3>
        <ChartWrap>
          <div className="chart">
            {loading ? <MiniLoading /> : null}
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
                colors={["#97E3D5", "#E8C1A0", "#F1E15B", "#F47560"]}
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
            ) : (
              <p className="err-message">모의고사 성적 데이터가 없습니다.</p>
            )}
          </div>
          <div className="record-text">
            {loading ? <MiniLoading /> : null}
            <p>
              <span className="user-name">{userName}</span>
              <span>님의</span>
              <span>주요 과목 등급</span>
            </p>
            <div>
              <div className="high-record-text">
                <span>모의고사 최고 등급</span>
                <div>
                  {highestMockRecord?.map((item, index) => (
                    <p key={index}>
                      <span className="subject-title">{item.nm}</span>
                      <span className="grade-num">{item.rating}</span>
                      <span>등급</span>
                    </p>
                  ))}
                </div>
              </div>
              <div className="current-record-text">
                <span>현재 모의고사 등급</span>
                <div>
                  {currentMockRecord?.map((item, index) => (
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
          <MockRecordTable />
        </RecordTableWrap>
      </MockRecordDiv>
    </>
  );
};

export default MockRecord;
