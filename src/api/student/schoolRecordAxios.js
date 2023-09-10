import { client } from "../login/client";

// 최고 내신 등급
export const getHighestSchoolRecord = async setHighestSchoolRecord => {
  try {
    const res = await client.get(`/api/student/aca-highest`);
    const result = res.data;
    setHighestSchoolRecord(result);
  } catch (err) {
    console.log(err);
  }
};

// 최근 내신 등급
export const getCurrentSchoolRecord = async setCurrentSchoolRecord => {
  try {
    const res = await client.get(`/api/student/aca-latest`);
    const result = res.data.list;
    setCurrentSchoolRecord(result);
  } catch (err) {
    console.log(err);
  }
};

// 내신 그래프
export const getAllSchoolRecord = async (
  setDefaultSchoolRecord,
  setAllSchoolRecord,
  year,
  semester,
  testType,
) => {
  try {
    let axiosUrl;
    if (year && semester && testType) {
      axiosUrl = `/api/student/aca-table?year=${year}&semester=${semester}&midFinal=${testType}`;
    } else if (year && semester && !testType) {
      axiosUrl = `/api/student/aca-table?year=${year}&semester=${semester}`;
    } else if (year && !semester && !testType) {
      axiosUrl = `/api/student/aca-table?year=${year}`;
    } else if (!year && semester && !testType) {
      axiosUrl = `/api/student/aca-table?semester=${semester}`;
    } else if (!year && !semester && testType) {
      axiosUrl = `/api/student/aca-table?midFinal=${testType}`;
    } else if (!year && semester && testType) {
      axiosUrl = `/api/student/aca-table?semester=${semester}&midFinal=${testType}`;
    } else if (year && !semester && testType) {
      axiosUrl = `/api/student/aca-table?year=${year}&midFinal=${testType}`;
    } else {
      axiosUrl = `/api/student/aca-table`;
      const res = await client.get(axiosUrl);
      const result = res.data;
      if (result.length !== 0) {
        setDefaultSchoolRecord(result);
      }
    }
    const res = await client.get(axiosUrl);
    const result = res.data;
    if (result.length !== 0) setAllSchoolRecord(result);
  } catch (err) {
    console.log(err);
  }
};

// excel 파일 다운로드
export const getSchoolExcelFile = async (year, semester, testType) => {
  try {
    const res = await client.get(`/test/aca-result`);
    const result = res.data;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
