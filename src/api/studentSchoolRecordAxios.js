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
