import { client } from "../client";

export const getStudentSchoolRecord = async (
  studentId,
  setDefaultSchoolRecord,
  setStudentSchoolRecordList,
  year,
  semester,
  testType,
) => {
  try {
    console.log(studentId, year, semester, testType);
    let axiosUrl;
    if (year && semester && testType) {
      console.log("1번 실행");
      axiosUrl = `/api/teacher/acaresult?userId=${studentId}&year=${year}&semester=${semester}&mf=${testType}`;
    } else if (year && semester && !testType) {
      console.log("2번 실행");
      axiosUrl = `/api/teacher/acaresult?userId=${studentId}&year=${year}&semester=${semester}`;
    } else if (year && !semester && !testType) {
      console.log("3번 실행");
      axiosUrl = `/api/teacher/acaresult?userId=${studentId}&year=${year}`;
    } else if (!year && semester && !testType) {
      console.log("4번 실행");
      axiosUrl = `/api/teacher/acaresult?userId=${studentId}&semester=${semester}`;
    } else if (!year && !semester && testType) {
      console.log("5번 실행");
      axiosUrl = `/api/teacher/acaresult?userId=${studentId}&mf=${testType}`;
    } else if (!year && semester && testType) {
      console.log("6번 실행");
      axiosUrl = `/api/teacher/acaresult?userId=${studentId}&semester=${semester}&mf=${testType}`;
    } else {
      console.log("7번 실행");
      axiosUrl = `/api/teacher/acaresult?userId=${studentId}`;
      const res = await client.get(axiosUrl);
      const result = res.data;
      // console.log(result);
      setDefaultSchoolRecord(result);
    }
    const res = await client.get(axiosUrl);
    const result = res.data;
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
    const res = await client.get(`/api/teacher/mockresult?userId=${studentId}`);
    const result = res.data;
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
  } catch (err) {
    console.log(err);
  }
};

export const deleteStudentMockRecord = async resultId => {
  try {
    const res = await client.delete(
      `/api/teacher/eli-mock?resultId=${resultId}`,
    );
    const result = res.data;
  } catch (err) {
    console.log(err);
  }
};
