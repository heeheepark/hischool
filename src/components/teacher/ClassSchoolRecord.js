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
  useEffect(() => {
    getSchoolData(setSchoolData);
  }, []);

  const koreanDataList = schoolData?.list[0].map(item => {
    return {
      id: `${item.rating}등급`,
      label: `${item.rating}등급`,
      value: item.percentage,
      color: "hsl(168, 70%, 50%)",
    };
  });

  const mathDataList = schoolData?.list[1].map(item => {
    return {
      id: `${item.rating}등급`,
      label: `${item.rating}등급`,
      value: item.percentage,
      color: "hsl(168, 70%, 50%)",
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

export default ClassSchoolRecord;
