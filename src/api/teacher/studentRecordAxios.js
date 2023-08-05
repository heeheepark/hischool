import axios from "axios";

export const getStudentSchoolRecord = async (
  studentId,
  setStudentSchoolRecordList,
) => {
  try {
    const res = await axios.get(`/api/teacher/acaresult?userId=${studentId}`);
    const result = res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getStudentMockRecord = async (
  studentId,
  setStudentMockRecordList,
) => {
  try {
    const res = await axios.get(`/api/teacher/mockresult?userId=${studentId}`);
    const result = res.data;
  } catch (err) {
    console.log(err);
  }
};
