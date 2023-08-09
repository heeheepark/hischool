import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import {
  ChartWrap,
  ClassSchoolRecordDiv,
} from "../../styles/teacher/TeacherHomeStyle";
import { ResponsivePie } from "@nivo/pie";
import { getMockData } from "../../api/teacher/teacherHomeAxios";

const ClassMockRecord = () => {
  const [mockData, setMockData] = useState(null);
  const koreanDataList = mockData?.koList.map(item => {
    return {
      id: `${item.rating}등급`,
      label: `${item.rating}등급`,
      value: item.ratio.toFixed(1),
      color: "hsl(168, 70%, 50%)",
    };
  });

  const mathDataList = mockData?.mtList.map(item => {
    return {
      id: `${item.rating}등급`,
      label: `${item.rating}등급`,
      value: item.ratio.toFixed(1),
      color: "hsl(168, 70%, 50%)",
    };
  });

  const englishDataList = mockData?.enList.map(item => {
    return {
      id: `${item.rating}등급`,
      label: `${item.rating}등급`,
      value: item.ratio.toFixed(1),
      color: "hsl(168, 70%, 50%)",
    };
  });

  const historyDataList = mockData?.hiList.map(item => {
    return {
      id: `${item.rating}등급`,
      label: `${item.rating}등급`,
      value: item.ratio.toFixed(1),
      color: "hsl(168, 70%, 50%)",
    };
  });

  useEffect(() => {
    getMockData(setMockData);
  }, []);

  // const data = [
  //   {
  //     id: "1등급",
  //     label: "1등급",
  //     value: 5,
  //     color: "hsl(168, 70%, 50%)",
  //   },
  //   {
  //     id: "2등급",
  //     label: "2등급",
  //     value: 5,
  //     color: "hsl(49, 70%, 50%)",
  //   },
  //   {
  //     id: "3등급",
  //     label: "3등급",
  //     value: 5,
  //     color: "hsl(122, 70%, 50%)",
  //   },
  //   {
  //     id: "4등급",
  //     label: "4등급",
  //     value: 5,
  //     color: "hsl(327, 70%, 50%)",
  //   },
  //   {
  //     id: "5등급",
  //     label: "5등급",
  //     value: 5,
  //     color: "hsl(165, 70%, 50%)",
  //   },
  //   {
  //     id: "6등급",
  //     label: "6등급",
  //     value: 10,
  //     color: "hsl(168, 70%, 50%)",
  //   },
  //   {
  //     id: "7등급",
  //     label: "7등급",
  //     value: 10,
  //     color: "hsl(49, 70%, 50%)",
  //   },
  //   {
  //     id: "8등급",
  //     label: "8등급",
  //     value: 10,
  //     color: "hsl(122, 70%, 50%)",
  //   },
  //   {
  //     id: "9등급",
  //     label: "9등급",
  //     value: 5,
  //     color: "hsl(327, 70%, 50%)",
  //   },
  // ];

  // const data = koreanDataList ? koreanDataList : null;

  return (
    <ClassSchoolRecordDiv>
      <div className="title-wrap">
        <span>2023년 6월 모의고사</span>
        <span>주요 과목 등급 분포</span>
      </div>
      <ChartWrap>
        <div>
          {koreanDataList ? (
            <ResponsivePie
              data={koreanDataList}
              width={200}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={0}
              activeOuterRadiusOffset={8}
              borderWidth={1}
              borderColor={{
                from: "color",
                modifiers: [["darker", 0.2]],
              }}
              enableArcLinkLabels={false}
              arcLinkLabelsSkipAngle={10}
            />
          ) : null}
          <span>국어</span>
        </div>
        <div>
          {mathDataList ? (
            <ResponsivePie
              data={mathDataList}
              width={200}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={0}
              activeOuterRadiusOffset={8}
              borderWidth={1}
              borderColor={{
                from: "color",
                modifiers: [["darker", 0.2]],
              }}
              enableArcLinkLabels={false}
              arcLinkLabelsSkipAngle={10}
            />
          ) : null}
          <span>수학</span>
        </div>
        <div>
          {englishDataList ? (
            <ResponsivePie
              data={englishDataList}
              width={200}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={0}
              activeOuterRadiusOffset={8}
              borderWidth={1}
              borderColor={{
                from: "color",
                modifiers: [["darker", 0.2]],
              }}
              enableArcLinkLabels={false}
              arcLinkLabelsSkipAngle={10}
            />
          ) : null}
          <span>영어</span>
        </div>
        <div>
          {historyDataList ? (
            <ResponsivePie
              data={historyDataList}
              width={200}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={0}
              activeOuterRadiusOffset={8}
              borderWidth={1}
              borderColor={{
                from: "color",
                modifiers: [["darker", 0.2]],
              }}
              enableArcLinkLabels={false}
              arcLinkLabelsSkipAngle={10}
            />
          ) : null}
          <span>한국사</span>
        </div>
      </ChartWrap>
      <div className="subject-info-wrap">
        <span>
          <FontAwesomeIcon icon={faCircle} className="icon korean" />
          1등급
        </span>
        <span>
          <FontAwesomeIcon icon={faCircle} className="icon math" />
          2등급
        </span>
        <span>
          <FontAwesomeIcon icon={faCircle} className="icon english" />
          3등급
        </span>
        <span>
          <FontAwesomeIcon icon={faCircle} className="icon history" />
          4등급
        </span>
        <span>
          <FontAwesomeIcon icon={faCircle} className="icon korean" />
          5등급
        </span>
        <span>
          <FontAwesomeIcon icon={faCircle} className="icon math" />
          6등급
        </span>
        <span>
          <FontAwesomeIcon icon={faCircle} className="icon english" />
          7등급
        </span>
        <span>
          <FontAwesomeIcon icon={faCircle} className="icon history" />
          8등급
        </span>
        <span>
          <FontAwesomeIcon icon={faCircle} className="icon history" />
          9등급
        </span>
      </div>
    </ClassSchoolRecordDiv>
  );
};

export default ClassMockRecord;
