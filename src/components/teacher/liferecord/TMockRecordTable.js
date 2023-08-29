import { MockRecordTableDiv } from "../../../styles/student/MockRecordStyle";
import { useEffect } from "react";
import { useState } from "react";
import { getAllMockRecord } from "../../../api/student/mockRecordAxios";
import { SchoolRecordFilterDiv } from "../../../styles/student/FilterStyle";

const TMockRecordTable = () => {
  const cateList = [
    "연도",
    "월",
    "과목 계열",
    "과목명",
    "표준점수",
    "등급",
    "백분위",
  ];
  const [defaultMockRecord, setDefaultMockRecord] = useState(null);
  const [allMockRecord, setAllMockRecord] = useState(null);
  const [year, setYear] = useState(null);
  const [month, setMonth] = useState(null);

  const handleYearList = e => {
    const selectYear = e.target.value;
    setYear(selectYear);
  };

  const handleMonthList = e => {
    const selectMonth = e.target.value;
    setMonth(selectMonth);
  };

  const yearList = defaultMockRecord => {
    const years = new Set();
    defaultMockRecord?.forEach(item => years.add(item.year));
    const newYears = Array.from(years);
    return newYears.sort((a, b) => b - a);
  };

  const monthList = defaultMockRecord => {
    const months = new Set();
    defaultMockRecord?.forEach(item => months.add(item.mon));
    const newMonths = Array.from(months);
    return newMonths.sort((a, b) => b - a);
  };

  useEffect(() => {
    getAllMockRecord(setDefaultMockRecord, setAllMockRecord, year, month);
  }, [year, month]);

  return (
    <>
      <div className="title">
        <h4>모의고사 성적 목록</h4>
        <SchoolRecordFilterDiv className="filter-wrap">
          <select name="year" id="year" onChange={e => handleYearList(e)}>
            <option value={""}>전체 연도</option>
            {yearList(defaultMockRecord).map((item, index) => (
              <option value={item} key={index}>
                {`${item}년`}
              </option>
            ))}
          </select>
          <select
            name="semester"
            id="semester"
            onChange={e => handleMonthList(e)}
          >
            <option value={""}>전체 월</option>
            {monthList(defaultMockRecord).map((item, index) => (
              <option value={item} key={index}>
                {`${item}월`}
              </option>
            ))}
          </select>
        </SchoolRecordFilterDiv>
      </div>
      <div className="record-table">
        <MockRecordTableDiv>
          <ul className="category">
            {cateList.map((item, index) => (
              <li className="category-th" key={index}>
                {item}
              </li>
            ))}
          </ul>
          <ul className="record-data">
            {allMockRecord ? (
              allMockRecord.map((item, index) => (
                <li className="data-table" key={index}>
                  <ul>
                    <li>{item.year}</li>
                    <li>{`${item.mon}월`}</li>
                    <li>{item.cateName}</li>
                    <li>{item.nm}</li>
                    <li>{item.standardScore}</li>
                    <li>{item.rating}</li>
                    <li>{`${item.percent}%`}</li>
                  </ul>
                </li>
              ))
            ) : (
              <p className="err-message">모의고사 성적 데이터가 없습니다.</p>
            )}
          </ul>
        </MockRecordTableDiv>
      </div>
    </>
  );
};
export default TMockRecordTable;