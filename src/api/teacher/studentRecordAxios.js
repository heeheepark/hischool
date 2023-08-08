import { client } from "../client";

export const getStudentSchoolRecord = async (
  studentId,
  setStudentSchoolRecordList,
) => {
  try {
    const res = await client.get(`/api/teacher/aca/${studentId}`);
    const result = res.data;
    console.log(result);
    setStudentSchoolRecordList(result);
  } catch (err) {
    console.log(err);
  }
};

export const getStudentMockRecord = async (
  studentId,
  setStudentMockRecordList,
) => {
  try {
    const res = await client.get(`/api/teacher/mock/${studentId}`);
    const result = res.data;
    console.log(result);
    setStudentMockRecordList(result);
  } catch (err) {
    console.log(err);
  }
};
