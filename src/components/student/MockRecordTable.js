import { MockRecordTableDiv } from "../../styles/student/MockRecordStyle";
import { useEffect } from "react";
import { useState } from "react";
import { getAllMockRecord } from "../../api/student/mockRecordAxios";

const MockRecordTable = () => {
  const [allMockRecord, setAllMockRecord] = useState(null);
  useEffect(() => {
    getAllMockRecord(setAllMockRecord);
  }, []);
  return (
    <MockRecordTableDiv>
      <ul className="category">
        <li className="category-th">연도</li>
        <li className="category-th">월</li>
        <li className="category-th">과목 계열</li>
        <li className="category-th">과목명</li>
        <li className="category-th">표준점수</li>
        <li className="category-th">등급</li>
        <li className="category-th">백분위</li>
      </ul>
      <ul className="record-data">
        {allMockRecord?.map((item, index) => (
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
        ))}
      </ul>
    </MockRecordTableDiv>
  );
};
export default MockRecordTable;
