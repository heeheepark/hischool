import React, { useEffect, useState } from "react";
import { TimeTableDiv } from "../../styles/student/StudentHomeStyle";
import { getSchedule } from "../../axios/studentAxios";

const TimeTable = () => {
  const [timeTable, setTimeTable] = useState([]);
  useEffect(() => {
    getSchedule(setTimeTable);
  }, []);

  //   console.log(timeTable);
  //   const class1 = timeTable.filter(item => {
  //     if (item.period === "1") {
  //       return item;
  //     }
  //   })
  //   const class2 = timeTable.filter(item => {
  //     if (item.period === "2") {
  //       return item;
  //     }
  //   });
  //   const class3 = timeTable.filter(item => {
  //     if (item.period === "3") {
  //       return item;
  //     }
  //   });
  //   const class4 = timeTable.filter(item => {
  //     if (item.period === "4") {
  //       return item;
  //     }
  //   });
  //   const class5 = timeTable.filter(item => {
  //     if (item.period === "5") {
  //       return item;
  //     }
  //   });
  //   const class6 = timeTable.filter(item => {
  //     if (item.period === "6") {
  //       return item;
  //     }
  //   });
  //   const class7 = timeTable.filter(item => {
  //     if (item.period === "7") {
  //       return item;
  //     }
  //   });
  // }

  //   console.log(class1, class2, class3, class4, class5, class6, class7);

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
        <li className="class">
          {/* <ul>
            <li>1교시</li>
            <li>
              {class1[0].dayMonToSun === 0 && class1[0].period === "1"
                ? class1[0].class_contents
                : ""}
            </li>
            <li>
              {class1[1].dayMonToSun === 1 && class1[1].period === "1"
                ? class1[1].class_contents
                : ""}
            </li>
            <li>
              {class1[2].dayMonToSun === 2 && class1[2].period === "1"
                ? class1[2].class_contents
                : ""}
            </li>
            <li>
              {class1[3].dayMonToSun === 3 && class1[3].period === "1"
                ? class1[3].class_contents
                : ""}
            </li>
            <li>
              {class1[4].dayMonToSun === 4 && class1[4].period === "1"
                ? class1[4].class_contents
                : ""}
            </li>
          </ul>
        </li>
        <li className="class">
          <ul>
            <li>2교시</li>
            <li>
              {class2[0].dayMonToSun === 0 && class2[0].period === "2"
                ? class2[0].class_contents
                : ""}
            </li>
            <li>
              {class2[1].dayMonToSun === 1 && class2[1].period === "2"
                ? class2[1].class_contents
                : ""}
            </li>
            <li>
              {class2[2].dayMonToSun === 2 && class2[2].period === "2"
                ? class2[2].class_contents
                : ""}
            </li>
            <li>
              {class2[3].dayMonToSun === 3 && class2[3].period === "2"
                ? class2[3].class_contents
                : ""}
            </li>
            <li>
              {class2[4].dayMonToSun === 4 && class2[4].period === "2"
                ? class2[4].class_contents
                : ""}
            </li>
          </ul> */}
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
