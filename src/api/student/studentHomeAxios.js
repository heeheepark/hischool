import { client } from "../login/client";

// 내신 그래프
export const getAllSchoolRecord = async setAllSchoolRecordData => {
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
export const getRecentSchoolRecord = async (
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
export const getAllMockRecord = async setAllMockRecordData => {
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
export const getRecentMockRecord = async (
  setRecentMockRecordData,
  setRecentTestTitle,
) => {
  try {
    const res = await client.get(`/api/student/mock-latest`);
    const result = res.data;
    console.log(result);
    if (result.length !== 0) {
      setRecentMockRecordData(result.list);
      setRecentTestTitle(result.date.split("-"));
    }
  } catch (err) {
    console.log(err);
  }
};

// 주간 급식표
export const getWeekFood = async setWeekMenuData => {
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
export const getTimeTable = async setTimeTable => {
  try {
    const res = await client.get(`/api/timetable`);
    const result = res.data.list;
    setTimeTable(result);
  } catch (err) {
    console.log(err);
  }
};

// 메인 공지사항
export const getMainNotice = async setMainNotice => {
  try {
    const res = await client.get(`/api/student/notice`);
    const result = res.data;
    setMainNotice(result);
  } catch (err) {
    console.log(err);
  }
};
