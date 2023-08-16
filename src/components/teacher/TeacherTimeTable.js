import React, { useEffect, useState } from "react";
import { TeacherTimeTableDiv } from "../../styles/teacher/TeacherHomeStyle";
import { getTimeTable } from "../../api/student/studentHomeAxios";

const TeacherTimeTable = () => {
  const [timeTable, setTimeTable] = useState(null);

  useEffect(() => {
    getTimeTable(setTimeTable);
  }, []);

  return (
    <TeacherTimeTableDiv>
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
        {Array(4)
          .fill()
          .map((_, period) => (
            <li className={`class${period + 1}`} key={period}>
              <ul>
                <li>{period + 1}교시</li>
                {Array(5)
                  .fill()
                  .map((_, index) => {
                    return (
                      <li key={index}>
                        {
                          timeTable
                            ?.filter(
                              item => item.period === (period + 1).toString(),
                            )
                            .find(item => item.dayMonToSun === index)
                            ?.class_contents
                        }
                      </li>
                    );
                  })}
              </ul>
            </li>
          ))}
        <li className="class-lunch">
          <ul className="lunch">
            <li>점심시간</li>
            <li>점심시간</li>
          </ul>
        </li>
        {Array(3)
          .fill()
          .map((_, period) => (
            <li className={`class${period + 5}`} key={period + 5}>
              <ul>
                <li>{period + 5}교시</li>
                {Array(5)
                  .fill()
                  .map((_, index) => {
                    return (
                      <li key={index + 5}>
                        {
                          timeTable
                            ?.filter(
                              item => item.period == (period + 5).toString(),
                            )
                            .find(item => item.dayMonToSun === index)
                            ?.class_contents
                        }
                      </li>
                    );
                  })}
              </ul>
            </li>
          ))}
      </ul>
    </TeacherTimeTableDiv>
  );
};

export default TeacherTimeTable;
