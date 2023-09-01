import { client } from "../client";

// 학년
export const getGrade = async setGrade => {
  try {
    const res = await client.get(`/api/header/school-info`);
    const result = res.data;
    const grade = result.grade;
    setGrade(grade);
  } catch (err) {
    console.log(err);
  }
};

// 내신 그래프
export const getSchoolRecordChart = async (userId, setAllSchoolRecordData) => {
  try {
    const res = await client.get(`/api/teacher/aca-graph/${userId}`);
    const result = res.data;
    if (result.length !== 0) {
      setAllSchoolRecordData(result);
    }
  } catch (err) {
    console.log(err);
  }
};

// 모의고사 그래프
export const getMockRecordChart = async (userId, setAllMockRecordData) => {
  try {
    const res = await client.get(`/api/teacher/mock-graph/${userId}`);
    const result = res.data;
    if (result.length !== 0) {
      setAllMockRecordData(result);
    }
  } catch (err) {
    console.log(err);
  }
};

// 희망 대학, 학과
export const getHopeUniversity = async (userId, setHopeUniv, setHopeDept) => {
  try {
    const res = await client.get(`/api/career/hope?userId=${parseInt(userId)}`);
    const result = res.data[0];
    setHopeUniv(result.hopeUniv);
    setHopeDept(result.hopeDept);
  } catch (err) {
    console.log(err);
  }
};

// 진로 희망사항
export const getStudentCareerList = async (
  userId,
  setCareerList,
  setExistCareerId,
) => {
  try {
    const res = await client.get(`/api/career/by?userId=${parseInt(userId)}`);
    const result = res.data;
    console.log(result);
    if (result.length > 0) {
      setExistCareerId(true);
      setCareerList(result);
    }
  } catch (err) {
    console.log(err);
  }
};

// 진로지도 Patch
export const patchSutdentCareerList = async payload => {
  try {
    console.log("Post 시도");
    console.log(payload);
    const res = await client.patch(`/api/career/clear`, payload);
    const result = res.data;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
