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
    console.log(year, semester, testType);
    let axiosUrl;
    if (year && semester && testType) {
      axiosUrl = `/api/teacher/acaresult?userId=${studentId}&year=${year}&semester=${semester}&mf=${testType}`;
    } else if (year && semester && !testType) {
      axiosUrl = `/api/teacher/acaresult?userId=${studentId}&year=${year}&semester=${semester}`;
    } else if (year && !semester && !testType) {
      axiosUrl = `/api/teacher/acaresult?userId=${studentId}&year=${year}`;
    } else if (!year && semester && !testType) {
      axiosUrl = `/api/teacher/acaresult?userId=${studentId}&semester=${semester}`;
    } else if (!year && !semester && testType) {
      axiosUrl = `/api/teacher/acaresult?userId=${studentId}&mf=${testType}`;
    } else if (!year && semester && testType) {
      axiosUrl = `/api/teacher/acaresult?userId=${studentId}&semester=${semester}&mf=${testType}`;
    } else if (year && !semester && testType) {
      axiosUrl = `/api/teacher/acaresult?userId=${studentId}&mf=${testType}`;
    } else {
      axiosUrl = `/api/teacher/acaresult?userId=${studentId}`;
      const res = await client.get(axiosUrl);
      const result = res.data;
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
  setDefaultMockRecord,
  setStudentMockRecordList,
  year,
  month,
) => {
  try {
    // console.log("여기지롱~~");
    let axiosUrl;
    if (year && month) {
      axiosUrl = `/api/teacher/mockresult?userId=${studentId}&year=${year}&mon=${month}`;
    } else if (year && !month) {
      axiosUrl = `/api/teacher/mockresult?userId=${studentId}&year=${year}`;
    } else if (!year && month) {
      axiosUrl = `/api/teacher/mockresult?userId=${studentId}&mon=${month}`;
    } else {
      axiosUrl = `/api/teacher/mockresult?userId=${studentId}`;
      const res = await client.get(axiosUrl);
      const result = res.data;
      // console.log(result);
      setDefaultMockRecord(result);
    }
    // console.log("안녕");
    const res = await client.get(axiosUrl);
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
