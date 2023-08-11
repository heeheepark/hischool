import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import {
  ChartWrap,
  ClassSchoolRecordDiv,
} from "../../styles/teacher/TeacherHomeStyle";
import { ResponsivePie } from "@nivo/pie";
import { getSchoolData } from "../../api/teacher/teacherHomeAxios";

const ClassSchoolRecord = () => {
  const [schoolData, setSchoolData] = useState(null);
  const colorData = [
    "#ffb343",
    "#ff8682",
    "#bad252",
    "#8ce5c8",
    "#1e9faa",
    "#d5ba99",
    "#a8b9df",
    "#ad7ca4",
  ];

  useEffect(() => {
    getSchoolData(setSchoolData);
  }, []);

  const koreanDataList = schoolData?.list[0].map((item, index) => {
    return {
      id: `${item.rating}등급`,
      label: `${item.rating}등급`,
      value: item.percentage,
      color: colorData[index],
    };
  });

  const mathDataList = schoolData?.list[1].map((item, index) => {
    return {
      id: `${item.rating}등급`,
      label: `${item.rating}등급`,
      value: item.percentage,
      color: colorData[index],
    };
  });

  const englishDataList = schoolData?.list[2].map(item => {
    return {
      id: `${item.rating}등급`,
      label: `${item.rating}등급`,
      value: item.percentage,
      color: "hsl(168, 70%, 50%)",
    };
  });

  const historyDataList = schoolData?.list[3].map(item => {
    return {
      id: `${item.rating}등급`,
      label: `${item.rating}등급`,
      value: item.percentage,
      color: "hsl(168, 70%, 50%)",
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
              width={200}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={0}
              activeOuterRadiusOffset={8}
              borderWidth={1}
              colors={colorData}
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

export default ClassSchoolRecord;
