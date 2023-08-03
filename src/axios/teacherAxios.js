import axios from "axios";

// 학생관리 리스트
const getStudentData = async setStudentListData => {
  try {
    const res = await axios.get(`/api/teacher/signed?classId=2`);
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
    const res = await axios.get(`/api/teacher/unsigned?classId=2`);
    const result = res.data;
    console.log(result);
    setStudentListData(result);
  } catch (err) {
    console.log(err);
  }
};
// 모의 고사 과목 계열, 모의고사 세부과목
const getMockMainSubData = async () => {
  try {
    const res = await axios.get("/api/teacher/subject/mockbiglist");
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getMockSubData = async () => {
  try {
    const res = await axios.get("/api/teacher/subject/mocksmalllist");
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export { getStudentData, getSignListData, getMockMainSubData, getMockSubData };
