import { client } from "../login/client";

// 학생 리스트
export const getStudentList = async (setStudentListData, searchText) => {
  try {
    const res = await client.get(
      `/api/teacher/student-list?name=${searchText}`,
    );
    const result = res.data;
    const listSortData = result.sort((a, b) =>
      a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1,
    );
    setStudentListData(listSortData);
  } catch (err) {
    console.error(err);
  }
};

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
      axiosUrl = `/api/teacher/aca-result?userId=${studentId}&year=${year}&semester=${semester}&midFinal=${testType}`;
    } else if (year && semester && !testType) {
      axiosUrl = `/api/teacher/aca-result?userId=${studentId}&year=${year}&semester=${semester}`;
    } else if (year && !semester && !testType) {
      axiosUrl = `/api/teacher/aca-result?userId=${studentId}&year=${year}`;
    } else if (!year && semester && !testType) {
      axiosUrl = `/api/teacher/aca-result?userId=${studentId}&semester=${semester}`;
    } else if (!year && !semester && testType) {
      axiosUrl = `/api/teacher/aca-result?userId=${studentId}&midFinal=${testType}`;
    } else if (!year && semester && testType) {
      axiosUrl = `/api/teacher/aca-result?userId=${studentId}&semester=${semester}&midFinal=${testType}`;
    } else if (year && !semester && testType) {
      axiosUrl = `/api/teacher/aca-result?userId=${studentId}&year=${year}&midFinal=${testType}`;
    } else {
      axiosUrl = `/api/teacher/aca-result?userId=${studentId}`;
      const res = await client.get(axiosUrl);
      const result = res.data;
      if (result.length !== 0) setDefaultSchoolRecord(result);
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
      axiosUrl = `/api/teacher/mock-result?userId=${studentId}&year=${year}&mon=${month}`;
    } else if (year && !month) {
      axiosUrl = `/api/teacher/mock-result?userId=${studentId}&year=${year}`;
    } else if (!year && month) {
      axiosUrl = `/api/teacher/mock-result?userId=${studentId}&mon=${month}`;
    } else {
      axiosUrl = `/api/teacher/mock-result?userId=${studentId}`;
      const res = await client.get(axiosUrl);
      const result = res.data;
      if (result.length !== 0) setDefaultMockRecord(result);
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
    const res = await client.delete(`/api/teacher/aca?resultId=${resultId}`);
  } catch (err) {
    console.log(err);
  }
};

// 모의고사 성적 삭제
export const deleteStudentMockRecord = async resultId => {
  try {
    const res = await client.delete(`/api/teacher/mock?resultId=${resultId}`);
  } catch (err) {
    console.log(err);
  }
};

// 성적 확정
export const patchRecordConfirm = async payload => {
  try {
    const res = await client.patch(`/api/teacher/rank`, payload);
  } catch (err) {
    console.log(err);
  }
};
