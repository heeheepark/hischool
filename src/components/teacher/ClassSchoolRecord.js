import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faSquare } from "@fortawesome/free-solid-svg-icons";
import { Chart } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { ClassSchoolRecordDiv } from "../../styles/teacher/TeacherHomeStyle";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  ChartDataLabels,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const ClassSchoolRecord = () => {
  const data = {
    labels: ["2023-1 중간", "2023-1 기말", "2023-2 중간", "2023-2 기말"],
    datasets: [
      {
        label: "국어 9등급",
        backgroundColor: "rgba(197, 22, 5, 1)",
        stack: "국어",
        data: [1, 1, 1, 1],
      },
      {
        label: "국어 8등급",
        backgroundColor: "rgba(197, 22, 5, 0.9)",
        stack: "국어",
        data: [2, 2, 2, 2],
      },
      {
        label: "국어 7등급",
        backgroundColor: "rgba(197, 22, 5, 0.8)",
        stack: "국어",
        data: [1, 1, 1, 1],
      },
      {
        label: "국어 6등급",
        backgroundColor: "rgba(197, 22, 5, 0.7)",
        stack: "국어",
        data: [3, 3, 3, 3, 3],
      },
      {
        label: "국어 5등급",
        backgroundColor: "rgba(197, 22, 5, 0.6)",
        stack: "국어",
        data: [6, 6, 6, 6],
      },
      {
        label: "국어 4등급",
        backgroundColor: "rgba(197, 22, 5, 0.5)",
        stack: "국어",
        data: [5, 5, 5, 5],
      },
      {
        label: "국어 3등급",
        backgroundColor: "rgba(197, 22, 5, 0.4)",
        stack: "국어",
        data: [3, 3, 3, 3, 3],
      },
      {
        label: "국어 2등급",
        backgroundColor: "rgba(197, 22, 5, 0.3)",
        stack: "국어",
        data: [3, 3, 3, 3],
      },
      {
        label: "국어 1등급",
        backgroundColor: "rgba(197, 22, 5, 0.2)",
        stack: "국어",
        data: [1, 1, 1, 1],
      },
      {
        label: "수학 9등급",
        backgroundColor: "rgba(253, 141, 20, 1)",
        stack: "수학",
        data: [1, 1, 1, 1],
      },
      {
        label: "수학 8등급",
        backgroundColor: "rgba(253, 141, 20, 0.9)",
        stack: "수학",
        data: [2, 2, 2, 2],
      },
      {
        label: "수학 7등급",
        backgroundColor: "rgba(253, 141, 20, 0.8)",
        stack: "수학",
        data: [1, 1, 1, 1],
      },
      {
        label: "수학 6등급",
        backgroundColor: "rgba(253, 141, 20, 0.7)",
        stack: "수학",
        data: [3, 3, 3, 3, 3],
      },
      {
        label: "수학 5등급",
        backgroundColor: "rgba(253, 141, 20, 0.6)",
        stack: "수학",
        data: [6, 6, 6, 6],
      },
      {
        label: "수학 4등급",
        backgroundColor: "rgba(253, 141, 20, 0.5)",
        stack: "수학",
        data: [5, 5, 5, 5],
      },
      {
        label: "수학 3등급",
        backgroundColor: "rgba(253, 141, 20, 0.4)",
        stack: "수학",
        data: [3, 3, 3, 3, 3],
      },
      {
        label: "수학 2등급",
        backgroundColor: "rgba(253, 141, 20, 0.3)",
        stack: "수학",
        data: [3, 3, 3, 3],
      },
      {
        label: "수학 1등급",
        backgroundColor: "rgba(253, 141, 20, 0.2)",
        stack: "수학",
        data: [1, 1, 1, 1],
      },
      {
        label: "영어 9등급",
        backgroundColor: "rgba(250, 194, 19, 1)",
        stack: "영어",
        data: [1, 1, 1, 1],
      },
      {
        label: "영어 8등급",
        backgroundColor: "rgba(250, 194, 19, 0.9)",
        stack: "영어",
        data: [2, 2, 2, 2],
      },
      {
        label: "영어 7등급",
        backgroundColor: "rgba(250, 194, 19, 0.8)",
        stack: "영어",
        data: [1, 1, 1, 1],
      },
      {
        label: "영어 6등급",
        backgroundColor: "rgba(250, 194, 19, 0.7)",
        stack: "영어",
        data: [3, 3, 3, 3, 3],
      },
      {
        label: "영어 5등급",
        backgroundColor: "rgba(250, 194, 19, 0.6)",
        stack: "영어",
        data: [6, 6, 6, 6],
      },
      {
        label: "영어 4등급",
        backgroundColor: "rgba(250, 194, 19, 0.5)",
        stack: "영어",
        data: [5, 5, 5, 5],
      },
      {
        label: "영어 3등급",
        backgroundColor: "rgba(250, 194, 19, 0.4)",
        stack: "영어",
        data: [3, 3, 3, 3, 3],
      },
      {
        label: "영어 2등급",
        backgroundColor: "rgba(250, 194, 19, 0.3)",
        stack: "영어",
        data: [3, 3, 3, 3],
      },
      {
        label: "영어 1등급",
        backgroundColor: "rgba(250, 194, 19, 0.2)",
        stack: "영어",
        data: [1, 1, 1, 1],
      },
      {
        label: "한국사 9등급",
        backgroundColor: "rgba(111, 105, 172, 1)",
        stack: "한국사",
        data: [1, 1, 1, 1],
      },
      {
        label: "한국사 8등급",
        backgroundColor: "rgba(111, 105, 172, 0.9)",
        stack: "한국사",
        data: [2, 2, 2, 2],
      },
      {
        label: "한국사 7등급",
        backgroundColor: "rgba(111, 105, 172, 0.8)",
        stack: "한국사",
        data: [1, 1, 1, 1],
      },
      {
        label: "한국사 6등급",
        backgroundColor: "rgba(111, 105, 172, 0.7)",
        stack: "한국사",
        data: [3, 3, 3, 3, 3],
      },
      {
        label: "한국사 5등급",
        backgroundColor: "rgba(111, 105, 172, 0.6)",
        stack: "한국사",
        data: [6, 6, 6, 6],
      },
      {
        label: "한국사 4등급",
        backgroundColor: "rgba(111, 105, 172, 0.5)",
        stack: "한국사",
        data: [5, 5, 5, 5],
      },
      {
        label: "한국사 3등급",
        backgroundColor: "rgba(111, 105, 172, 0.4)",
        stack: "한국사",
        data: [3, 3, 3, 3, 3],
      },
      {
        label: "한국사 2등급",
        backgroundColor: "rgba(111, 105, 172, 0.3)",
        stack: "한국사",
        data: [3, 3, 3, 3],
      },
      {
        label: "한국사 1등급",
        backgroundColor: "rgba(111, 105, 172, 0.2)",
        stack: "한국사",
        data: [1, 1, 1, 1],
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        color: "#fff",
        anchor: "center",
        align: "center",
        offset: 4,
        font: {
          size: 9,
        },
        formatter: (value, context) => {
          return value;
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        stacked: true,
        fontSize: 20,
      },
      y: {
        stacked: true,
      },
    },
    tooltips: {
      enabled: true,
      mode: "index",
      intersect: false,
    },
  };

  return (
    <ClassSchoolRecordDiv>
      <Chart
        type="bar"
        data={data}
        options={options}
        plugins={ChartDataLabels}
      />
      <div>
        <span>
          <FontAwesomeIcon icon={faCircle} className="icon korean" />
          국어
        </span>
        <span>
          <FontAwesomeIcon icon={faCircle} className="icon math" />
          수학
        </span>
        <span>
          <FontAwesomeIcon icon={faCircle} className="icon english" />
          영어
        </span>
        <span>
          <FontAwesomeIcon icon={faCircle} className="icon history" />
          한국사
        </span>
      </div>
    </ClassSchoolRecordDiv>
  );
};

export default ClassSchoolRecord;
