import { SchoolRecordFilterDiv } from "../../styles/student/FilterStyle";

const MockRecordFilter = () => {
  return (
    <SchoolRecordFilterDiv className="filter-wrap">
      <select name="year" id="year">
        <option value="all">전체 연도</option>
        <option value="2023">2023년</option>
        <option value="2022">2022년</option>
        <option value="2021">2021년</option>
      </select>
      <select name="semester" id="semester">
        <option value="all">전체 월</option>
        <option value="semester1">3월</option>
        <option value="semester2">6월</option>
        <option value="semester2">9월</option>
      </select>
    </SchoolRecordFilterDiv>
  );
};
export { MockRecordFilter };
