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
  const colorData = [
    "#f9f68e",
    "#ffbc66",
    "#ff8682",
    "#ddf5ae",
    "#8ce5c8",
    "#1ec2d1",
    "#e4dfd1",
    "#e6c9e1",
    "#adc8d0",
  ];
  console.log(mockData);
  const koreanDataList = mockData?.koList.map(item => {
    return {
      id: `${item.rating}등급`,
      label: `${item.rating}등급`,
      value: item.ratio.toFixed(1),
    };
  });

  const mathDataList = mockData?.mtList.map(item => {
    return {
      id: `${item.rating}등급`,
      label: `${item.rating}등급`,
      value: item.ratio.toFixed(1),
    };
  });

  const englishDataList = mockData?.enList.map(item => {
    return {
      id: `${item.rating}등급`,
      label: `${item.rating}등급`,
      value: item.ratio.toFixed(1),
    };
  });

  const historyDataList = mockData?.hiList.map(item => {
    return {
      id: `${item.rating}등급`,
      label: `${item.rating}등급`,
      value: item.ratio.toFixed(1),
    };
  });

  useEffect(() => {
    getMockData(setMockData);
  }, []);

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
              colors={colorData}
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
              colors={colorData}
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
              colors={colorData}
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
              colors={colorData}
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
          <FontAwesomeIcon icon={faCircle} className="icon grade1" />
          1등급
        </span>
        <span>
          <FontAwesomeIcon icon={faCircle} className="icon grade2" />
          2등급
        </span>
        <span>
          <FontAwesomeIcon icon={faCircle} className="icon grade3" />
          3등급
        </span>
        <span>
          <FontAwesomeIcon icon={faCircle} className="icon grade4" />
          4등급
        </span>
        <span>
          <FontAwesomeIcon icon={faCircle} className="icon grade5" />
          5등급
        </span>
        <span>
          <FontAwesomeIcon icon={faCircle} className="icon grade6" />
          6등급
        </span>
        <span>
          <FontAwesomeIcon icon={faCircle} className="icon grade7" />
          7등급
        </span>
        <span>
          <FontAwesomeIcon icon={faCircle} className="icon grade8" />
          8등급
        </span>
        <span>
          <FontAwesomeIcon icon={faCircle} className="icon grade9" />
          9등급
        </span>
      </div>
    </ClassSchoolRecordDiv>
  );
};

export default ClassMockRecord;
