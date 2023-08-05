import axios from "axios";

// 내신 성적 페이지
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
    const result = res.data;
    setCurrentSchoolRecord(result);
  } catch (err) {
    console.log(err);
  }
};

export const getAllSchoolRecord = async setAllSchoolRecord => {
  try {
    const res = await axios.get(`/api/student/aca-table`);
    const result = res.data;
    setAllSchoolRecord(result);
  } catch (err) {
    console.log(err);
  }
};

// 모의고사 성적 페이지
export const getHighestMockRecord = async setHighestMockRecord => {
  try {
    const res = await axios.get(`/api/student/mock-highrating`);
    const result = res.data;
    setHighestMockRecord(result);
  } catch (err) {
    console.log(err);
  }
};

export const getCurrentMockRecord = async setCurrentMockRecord => {
  try {
    const res = await axios.get(`/api/student/mock-currentrating`);
    const result = res.data;
    setCurrentMockRecord(result);
  } catch (err) {
    console.log(err);
  }
};

export const getAllMockRecord = async setAllMockRecord => {
  try {
    const res = await axios.get(`/api/student/mock-table`);
    const result = res.data;
    setAllMockRecord(result);
  } catch (err) {
    console.log(err);
  }
};
