import { client } from "../client";

// 전체 내신 성적
export const getStudentSchoolRecord = async (
  studentId,
  setDefaultSchoolRecord,
  setStudentSchoolRecordList,
  year,
  semester,
  testType,
) => {
  try {
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

// 전체 모의고사 성적
export const getStudentMockRecord = async (
  studentId,
  setDefaultMockRecord,
  setStudentMockRecordList,
  year,
  month,
) => {
  try {
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
      setDefaultMockRecord(result);
    }
    const res = await client.get(axiosUrl);
    const result = res.data;
    setStudentMockRecordList(result);
  } catch (err) {
    console.log(err);
  }
};

// 내신 성적 삭제
export const deleteStudentSchoolRecord = async resultId => {
  try {
    const res = await client.delete(
      `/api/teacher/eli-aca?resultId=${resultId}`,
    );
  } catch (err) {
    console.log(err);
  }
};

// 모의고사 성적 삭제
export const deleteStudentMockRecord = async resultId => {
  try {
    const res = await client.delete(
      `/api/teacher/eli-mock?resultId=${resultId}`,
    );
  } catch (err) {
    console.log(err);
  }
};
