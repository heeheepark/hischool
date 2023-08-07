import axios from "axios";

export const getHighestSchoolRecord = async setHighestSchoolRecord => {
  try {
    const res = await axios.get(`/api/student/aca-highest`);
    const result = res.data;
    setHighestSchoolRecord(result);
  } catch (err) {
    console.log(err);
  }
};

export const getCurrentSchoolRecord = async setCurrentSchoolRecord => {
  try {
    const res = await axios.get(`/api/student/aca-latest`);
    const result = res.data.list;
    setCurrentSchoolRecord(result);
  } catch (err) {
    console.log(err);
  }
};

export const getAllSchoolRecord = async (
  setAllSchoolRecord,
  year,
  semester,
  testType,
) => {
  const yearData = year;
  const semesterData = semester;
  let apiUrl;

  if (yearData && semester && testType) {
    apiUrl = `/api/student/aca-table?year=${year}&semester=${semester}&midFinal=${testType}`;
  } else if (yearData && semesterData) {
    apiUrl = `/api/student/aca-table?year=${year}&semester=${semester}`;
  } else if (yearData) {
    apiUrl = `/api/student/aca-table?year=${year}`;
  } else {
    apiUrl = `/api/student/aca-table`;
  }

  try {
    const res = await axios.get(apiUrl);
    const result = res.data;
    setAllSchoolRecord(result);
  } catch (err) {
    console.log(err);
  }
};
