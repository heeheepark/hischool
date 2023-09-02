import { client } from "../login/client";

// 학생 정보
export const getStudentInfo = async setStudentInfo => {
  try {
    const res = await client.get(`/api/mypage/user-mypage`);
    const studentName = res.data.unm;
    const studentBirth = res.data.birth;
    setStudentInfo({ studentName, studentBirth });
  } catch (err) {
    console.log(err);
  }
};

// 진로 지도
export const getCareerData = async setCareerList => {
  try {
    const res = await client.get(`/api/career`);
    const result = res.data;
    setCareerList(result);
  } catch (err) {
    console.log(err);
  }
};
