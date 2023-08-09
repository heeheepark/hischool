import { async } from "q";
import { client } from "../client";

export const getStudentSchoolRecord = async (
  studentId,
  setStudentSchoolRecordList,
) => {
  try {
    const res = await client.get(`/api/teacher/acaresult?userId=${studentId}`);
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

export const deleteStudentSchoolRecord = async resultId => {
  try {
    const res = await client.delete(
      `/api/teacher/eli-aca?resultId=${resultId}`,
    );
    const result = res.data;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
