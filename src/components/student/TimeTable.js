import React, { useEffect, useState } from "react";
import { TimeTableDiv } from "../../styles/student/StudentHomeStyle";
import { getSchedule } from "../../api/studentAxios";

const TimeTable = () => {
  const [timeTable, setTimeTable] = useState(null);
  // useEffect(() => {
  //   getSchedule(setTimeTable);
  // }, []);

  // console.log(timeTable);

  // const testArray = [
  //   { day: "월" },
  //   { day: "화" },
  //   { day: "수" },
  //   { day: "목" },
  //   { day: "금" },
  // ];

  // console.log({ ...testArray[0], test: "test" });

  const test = timeTable
    ? timeTable.map((item, index) => {
        const testArray = [
          { day: "1교시", list: [] },
          { day: "2교시", list: [] },
          { day: "3교시", list: [] },
          { day: "4교시", list: [] },
          { day: "5교시", list: [] },
          { day: "6교시", list: [] },
          { day: "7교시", list: [] },
        ];
        if (item.period === "1") {
          testArray[0] = { ...testArray[0], list: [item] };
        }
        return testArray;
      })
    : null;

  // console.log(test);
  const class1 = timeTable
    ? timeTable.filter(item => {
        if (item.period === "1") {
          return item;
        }
      })
    : null;
  const class2 = timeTable
    ? timeTable.filter(item => {
        if (item.period === "2") {
          return item;
        }
      })
    : null;
  const class3 = timeTable
    ? timeTable.filter(item => {
        if (item.period === "3") {
          return item;
        }
      })
    : null;
  const class4 = timeTable
    ? timeTable.filter(item => {
        if (item.period === "4") {
          return item;
        }
      })
    : null;
  const class5 = timeTable
    ? timeTable.filter(item => {
        if (item.period === "5") {
          return item;
        }
      })
    : null;
  const class6 = timeTable
    ? timeTable.filter(item => {
        if (item.period === "6") {
          return item;
        }
      })
    : null;
  const class7 = timeTable
    ? timeTable.filter(item => {
        if (item.period === "7") {
          return item;
        }
      })
    : null;

  // console.log(class1, class2, class3, class4, class5, class6, class7);

  //   console.log(class1[0].dayMonToSun);
  //   console.log(class1[0].dayMonToSun === 0);

  // const test = timeTable.map((item, index) => (
  //   <ul key={index}>
  //     <li>1교시</li>
  //     <li>문학</li>
  //     <li>수학I</li>
  //     <li>영어</li>
  //     <li>한국지리</li>
  //     <li>한국사</li>
  //   </ul>
  // ));
  return (
    <TimeTableDiv>
      <ul>
        <li className="day-list">
          <ul>
            <li className="time-table-th">교시</li>
            <li className="time-table-th">월</li>
            <li className="time-table-th">화</li>
            <li className="time-table-th">수</li>
            <li className="time-table-th">목</li>
            <li className="time-table-th">금</li>
          </ul>
        </li>
        {/* {class1
          ? class1.map((item, index) => (
              <li className="class" key={index}>
                <ul>
                  <li>{index + 1}교시</li>
                  <li>
                    {item.dayMonToSun === index && item.period === "1"
                      ? item.class_contents
                      : ""}
                  </li>
                </ul>
              </li>
            ))
          : ""} */}

        <li className="class">
          <ul>
            <li>2교시</li>
          </ul>
        </li>
        <li className="class3">
          <ul>
            <li>3교시</li>
            <li>문학</li>
            <li>수학I</li>
            <li>영어</li>
            <li>한국지리</li>
            <li>한국사</li>
          </ul>
        </li>
        <li className="class4">
          <ul>
            <li>4교시</li>
            <li>문학</li>
            <li>수학I</li>
            <li>영어</li>
            <li>한국지리</li>
            <li>한국사</li>
          </ul>
        </li>
        <li className="class-lunch">
          <ul className="lunch">
            <li>점심시간</li>
            <li>점심시간</li>
          </ul>
        </li>
        <li className="class5">
          <ul>
            <li>5교시</li>
            <li>문학</li>
            <li>수학I</li>
            <li>영어</li>
            <li>한국지리</li>
            <li>한국사</li>
          </ul>
        </li>
        <li className="class6">
          <ul>
            <li>6교시</li>
            <li>문학</li>
            <li>수학I</li>
            <li>영어</li>
            <li>한국지리</li>
            <li>한국사</li>
          </ul>
        </li>
        <li className="class7">
          <ul>
            <li>7교시</li>
            <li>문학</li>
            <li>수학I</li>
            <li>영어</li>
            <li>한국지리</li>
            <li>한국사</li>
          </ul>
        </li>
      </ul>
    </TimeTableDiv>
  );
};

export default TimeTable;
