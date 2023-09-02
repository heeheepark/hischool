import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import {
  ChartWrap,
  ClassSchoolRecordDiv,
} from "../../../styles/teacher/teacherhome/TeacherHomeStyle";
import { ResponsivePie } from "@nivo/pie";
import { getSchoolData } from "../../../api/teacher/teacherHomeAxios";

const ClassSchoolRecord = () => {
  const [schoolData, setSchoolData] = useState(null);
  const gradeList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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

  useEffect(() => {
    getSchoolData(setSchoolData);
  }, []);

  const koreanDataList = schoolData?.list[0].map(item => {
    return {
      id: `${item.rating}등급`,
      label: `${item.rating}등급`,
      value: item.percentage.toFixed(1),
    };
  });

  const mathDataList = schoolData?.list[1].map(item => {
    return {
      id: `${item.rating}등급`,
      label: `${item.rating}등급`,
      value: item.percentage.toFixed(1),
    };
  });

  const englishDataList = schoolData?.list[2].map(item => {
    return {
      id: `${item.rating}등급`,
      label: `${item.rating}등급`,
      value: item.percentage.toFixed(1),
    };
  });

  const historyDataList = schoolData?.list[3].map(item => {
    return {
      id: `${item.rating}등급`,
      label: `${item.rating}등급`,
      value: item.percentage.toFixed(1),
    };
  });

  return (
    <ClassSchoolRecordDiv>
      <div className="title-wrap">
        <span>2023년 1학기 기말고사</span>
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
        {gradeList.map((item, index) => (
          <span key={index}>
            <FontAwesomeIcon icon={faCircle} className={`icon grade${item}`} />
            {item}등급
          </span>
        ))}
      </div>
    </ClassSchoolRecordDiv>
  );
};

export default ClassSchoolRecord;
