import axiosInstance from "./commonAxios";

// 학급 총원
const getStudentCount = async setStudentCount => {
  try {
    const res = await axiosInstance.get(
      `/api/teacher/classStudent?classid=${2}`,
    );
    const result = res.data;
    setStudentCount(result);
  } catch (err) {
    console.log(err);
  }
};

// 가입 대기 인원
const getUnSignCount = async setUnSignCount => {
  try {
    const res = await axiosInstance.get(`/api/teacher/aprStudent?classid=${2}`);
    const result = res.data;
    setUnSignCount(result);
  } catch (err) {
    console.log(err);
  }
};

// 학생관리 리스트
const getStudentData = async setStudentListData => {
  try {
    const res = await axiosInstance.get(`/api/teacher/signed?classId=2`);
    const result = res.data;
    setStudentListData(result);
    console.log(result);
  } catch (err) {
    console.error(err);
  }
};

// 학생 가입 대기 명단
const getSignListData = async setStudentListData => {
  try {
    const res = await axiosInstance.get(`/api/teacher/unsigned?classId=2`);
    const result = res.data;
    console.log(result);
    setStudentListData(result);
  } catch (err) {
    console.log(err);
  }
};

// 학생 성적 관리
// 학생 목록
const getStudentList = async setStudentList => {
  try {
    const res = await axiosInstance.get(`/api/teacher/signed?classId=${2}`);
    const result = res.data;
    setStudentList(result);
  } catch (err) {
    console.log(err);
  }
};

export {
  getStudentCount,
  getUnSignCount,
  getStudentData,
  getSignListData,
  getStudentList,
};
