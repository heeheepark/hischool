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

export { getStudentData, getSignListData };
