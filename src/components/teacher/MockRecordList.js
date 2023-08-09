import { useEffect, useState } from "react";
import {
  MockRecordListDiv,
  SchoolRecordListDiv,
  StudentListDiv,
} from "../../styles/teacher/StudentRecordStyle";
import { getStudentData } from "../../api/teacher/studentListAxios";
import {
  getStudentMockRecord,
  getStudentSchoolRecord,
} from "../../api/teacher/studentRecordAxios";

const MockRecordList = ({ studentMockRecordList }) => {
  const handleAllCheck = e => {
    const allCheckBox = document.querySelectorAll(".mock-checkbox");
    if (e.target.checked === true) {
      allCheckBox.forEach(item => (item.checked = true));
    } else {
      allCheckBox.forEach(item => (item.checked = false));
    }
  };
  return (
    <MockRecordListDiv>
      <ul className="category">
        <li className="category-th">
          <input type="checkbox" onClick={e => handleAllCheck(e)} />
        </li>
        <li className="category-th">연도</li>
        <li className="category-th">월</li>
        <li className="category-th">과목 계열</li>
        <li className="category-th">과목명</li>
        <li className="category-th">표준점수</li>
        <li className="category-th">등급</li>
        <li className="category-th">백분위</li>
      </ul>
      <ul className="record-data">
        {studentMockRecordList?.map(item => (
          <li className="data-table" key={item.userId}>
            <ul>
              <li>
                <input type="checkbox" className="mock-checkbox" />
              </li>
              <li>{item.year}</li>
              <li>{`${item.mon}월`}</li>
              <li>{item.nm}</li>
              <li>{item.detailNm}</li>
              <li>{item.sc}</li>
              <li>{item.rating}</li>
              <li>{`${item.percent}%`}</li>
            </ul>
          </li>
        ))}
      </ul>
    </MockRecordListDiv>
  );
};

export { MockRecordList };
