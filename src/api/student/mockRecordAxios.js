import axios from "axios";

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
    // setCurrentMockRecord(result);
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
