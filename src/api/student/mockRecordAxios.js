import { client } from "../client";

export const getHighestMockRecord = async setHighestMockRecord => {
  try {
    const res = await client.get(`/api/student/mock-highrating`);
    const result = res.data;
    setHighestMockRecord(result);
  } catch (err) {
    console.log(err);
  }
};

export const getCurrentMockRecord = async setCurrentMockRecord => {
  try {
    const res = await client.get(`/api/student/mock-currentrating`);
    const result = res.data;
    setCurrentMockRecord(result);
  } catch (err) {
    console.log(err);
  }
};

export const getAllMockRecord = async (
  setDefaultMockRecord,
  setAllMockRecord,
  year,
  month,
) => {
  console.log(year, month);
  try {
    let endpoint;
    if (year && month) {
      endpoint = `/api/student/mock-table?year=${year}&mon=${month}`;
    } else if (year && !month) {
      endpoint = `/api/student/mock-table?year=${year}`;
    } else if (!year && month) {
      console.log("시도");
      endpoint = `/api/student/mock-table?mon=${month}`;
    } else {
      endpoint = "/api/student/mock-table";
      const res = await client.get(endpoint);
      const result = res.data;
      setDefaultMockRecord(result);
    }
    const res = await client.get(endpoint);
    const result = res.data;
    console.log(result);
    setAllMockRecord(result);
  } catch (err) {
    console.log(err);
  }
};
