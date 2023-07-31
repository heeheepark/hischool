import { SchoolRecordFilterDiv } from "../../styles/student/FilterStyle";

const SchoolRecordFilter = () => {
  return (
    <SchoolRecordFilterDiv>
      <select name="year" id="year">
        <option value="all">전체 연도</option>
        <option value="2023">2023년</option>
        <option value="2022">2022년</option>
        <option value="2021">2021년</option>
      </select>
      <select name="semester" id="semester">
        <option value="all">전체 학기</option>
        <option value="semester1">1학기</option>
        <option value="semester2">2학기</option>
      </select>
      <select name="test-category" id="test-category">
        <option value="all">전체 시험</option>
        <option value="middle">중간</option>
        <option value="final">기말</option>
      </select>
    </SchoolRecordFilterDiv>
  );
};

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
export { SchoolRecordFilter, MockRecordFilter };
