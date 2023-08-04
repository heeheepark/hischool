import axios from "axios";
import axiosInstance from "./commonAxios";

// 학급 총원
const getStudentCount = async setStudentCount => {
  try {
    const res = await axios.get(`/api/teacher/classStudent?classid=${2}`);
    const result = res.data;
    setStudentCount(result);
  } catch (err) {
    console.log(err);
  }
};

// 가입 대기 인원
const getUnSignCount = async setUnSignCount => {
  try {
    const res = await axios.get(`/api/teacher/aprStudent?classid=${2}`);
    const result = res.data;
    setUnSignCount(result);
  } catch (err) {
    console.log(err);
  }
};

// 학생관리 리스트
const getStudentData = async setStudentListData => {
  try {
    const res = await axios.get(`/api/teacher/signed?classId=2`);
    const result = res.data;
    const listSortData = result.sort((a, b) =>
      a.snm.toLowerCase() < b.snm.toLowerCase() ? -1 : 1,
    );
    setStudentListData(listSortData);
  } catch (err) {
    console.error(err);
  }
};

// 학생 가입 대기 명단
const getSignListData = async setStudentListData => {
  try {
    const res = await axios.get(`/api/teacher/unsigned?classId=2`);
    const result = res.data;
    const signListSortData = result.sort((a, b) =>
      a.snm.toLowerCase() < b.snm.toLowerCase() ? -1 : 1,
    );
    setStudentListData(signListSortData);
  } catch (err) {
    console.log(err);
  }
};

// 모의 고사 과목 계열 가져오기
const getMockMainSubData = async () => {
  try {
    const res = await axios.get("/api/teacher/subject/mockbig-list");
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

// 모의 고사 세부 과목 가져오기
const getMockSubData = async categoryid => {
  try {
    const res = await axios.get(
      `/api/teacher/subject/mocksmall-list?categoryid=${categoryid}`,
    );
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

// 학생 성적 관리
// 학생 목록
const getStudentList = async setStudentList => {
  try {
    const res = await axios.get(`/api/teacher/signed?classId=${2}`);
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
  getMockMainSubData,
  getMockSubData,
  getStudentList,
};
