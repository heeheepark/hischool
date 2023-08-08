import { client } from "../client";

export const getStudentSchoolRecord = async (
  studentId,
  setStudentSchoolRecordList,
) => {
  try {
    const res = await client.get(`/api/teacher/acaresult?userId=${studentId}`);
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
    const res = await client.get(`/api/teacher/mockresult?userId=${studentId}`);
    const result = res.data;
  } catch (err) {
    console.log(err);
  }
};
