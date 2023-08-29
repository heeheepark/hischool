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
export const getStudentCareerList = async (userId, setCareerList) => {
  try {
    const res = await client.get(`/api/career/by?userId=${parseInt(userId)}`);
    const result = res.data;
    setCareerList(result);
  } catch (err) {
    console.log(err);
  }
};