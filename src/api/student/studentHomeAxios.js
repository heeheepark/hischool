import { client } from "../client";

// 내신 그래프
const getAllSchoolRecord = async setAllSchoolRecordData => {
  try {
    const res = await client.get(`/api/student/aca-graph`);
    const result = res.data;
    if (result.length !== 0) {
      setAllSchoolRecordData(result);
    }
  } catch (err) {
    console.log(err);
  }
};

// 최근 내신 성적
const getRecentSchoolRecord = async (
  setRecentSchoolRecordData,
  setRecentTestTitle,
) => {
  try {
    const res = await client.get(`/api/student/aca-latest`);
    const result = res.data;
    if (result.length !== 0) {
      setRecentSchoolRecordData(result.list);
      setRecentTestTitle(result.date.split("-"));
    }
  } catch (err) {
    console.log(err);
  }
};

// 모의고사 그래프
const getAllMockRecord = async setAllMockRecordData => {
  try {
    const res = await client.get(`/api/student/mock-graph`);
    const result = res.data;
    if (result.length !== 0) {
      setAllMockRecordData(result);
    }
  } catch (err) {
    console.log(err);
  }
};

// 최근 모의고사 성적
const getRecentMockRecord = async (
  setRecentMockRecordData,
  setRecentTestTitle,
) => {
  try {
    const res = await client.get(`/api/student/mock-currentrating`);
    const result = res.data;
    if (result.length !== 0) {
      setRecentMockRecordData(result.list);
      setRecentTestTitle(result.date.split("-"));
    }
  } catch (err) {
    console.log(err);
  }
};

// 주간 급식표
const getWeekFood = async setWeekMenuData => {
  try {
    const res = await client.get(`/api/meal/main`);
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
    const res = await client.get(`/api/timetable`);
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
