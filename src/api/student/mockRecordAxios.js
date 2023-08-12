import { client } from "../client";

// 최고 모의고사 성적
export const getHighestMockRecord = async setHighestMockRecord => {
  try {
    const res = await client.get(`/api/student/mock-highrating`);
    const result = res.data;
    setHighestMockRecord(result);
  } catch (err) {
    console.log(err);
  }
};

// 최근 모의고사 성적
export const getCurrentMockRecord = async setCurrentMockRecord => {
  try {
    const res = await client.get(`/api/student/mock-currentrating`);
    const result = res.data.list;
    setCurrentMockRecord(result);
  } catch (err) {
    console.log(err);
  }
};

// 모의고사 그래프
export const getAllMockRecord = async (
  setDefaultMockRecord,
  setAllMockRecord,
  year,
  month,
) => {
  try {
    let axiosUrl;
    if (year && month) {
      axiosUrl = `/api/student/mock-table?year=${year}&mon=${month}`;
    } else if (year && !month) {
      axiosUrl = `/api/student/mock-table?year=${year}`;
    } else if (!year && month) {
      axiosUrl = `/api/student/mock-table?mon=${month}`;
    } else {
      axiosUrl = "/api/student/mock-table";
      const res = await client.get(axiosUrl);
      const result = res.data;
      if (result.length !== 0) setDefaultMockRecord(result);
    }
    const res = await client.get(axiosUrl);
    const result = res.data;
    if (result.length !== 0) setAllMockRecord(result);
  } catch (err) {
    console.log(err);
  }
};
