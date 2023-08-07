import axios from "axios";

// 내신 성적 현황
const getAllSchoolRecord = async setAllSchoolRecordData => {
  try {
    const res = await axios.get(`/api/student/aca-graph`);
    const result = res.data;
    setAllSchoolRecordData(result);
  } catch (err) {
    console.log(err);
  }
};

const getRecentSchoolRecord = async (
  setRecentSchoolRecordData,
  setRecentTestTitle,
) => {
  try {
    const res = await axios.get(`/api/student/aca-latest`);
    const result = res.data;
    setRecentSchoolRecordData(result.list);
    setRecentTestTitle(result.date.split("-"));
  } catch (err) {
    console.log(err);
  }
};

// 모의고사 성적 현황
const getAllMockRecord = async setAllMockRecordData => {
  try {
    const res = await axios.get(`/api/student/mock-graph`);
    const result = res.data;
    setAllMockRecordData(result);
  } catch (err) {
    console.log(err);
  }
};

const getRecentMockRecord = async (
  setRecentMockRecordData,
  setRecentTestTitle,
) => {
  try {
    const res = await axios.get(`/api/student/mock-currentrating`);
    const result = res.data;
    setRecentMockRecordData(result.list);
    setRecentTestTitle(result.date.split("-"));
  } catch (err) {
    console.log(err);
  }
};

// 주간 급식표
const getWeekFood = async setWeekMenuData => {
  try {
    const res = await axios.get(`/api/meal/main?sdSchulCode=${7240273}`);
    const result = res.data.list;
    const menuList = result.map(item => {
      item.menuOftheDay = item.menuOftheDay.split(",");
      return item;
    });
    setWeekMenuData(menuList);
  } catch (err) {
    console.log(err);
  }
};

// 시간표
const getTimeTable = async setTimeTable => {
  try {
    const res = await axios.get(`/api/timetable`);
    const result = res.data.list;
    setTimeTable(result);
  } catch (err) {
    console.log(err);
  }
};

export {
  getAllSchoolRecord,
  getRecentSchoolRecord,
  getAllMockRecord,
  getRecentMockRecord,
  getWeekFood,
  getTimeTable,
};
