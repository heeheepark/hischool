import axios from "axios";

// 학생관리 리스트
export const getStudentData = async setStudentListData => {
  try {
    const res = await axios.get(`/api/teacher/signed?classId=${2}`);
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
export const getSignListData = async setStudentListData => {
  try {
    const res = await axios.get(`/api/teacher/unsigned?classId=${2}`);
    const result = res.data;
    const signListSortData = result.sort((a, b) =>
      a.snm.toLowerCase() < b.snm.toLowerCase() ? -1 : 1,
    );
    setStudentListData(signListSortData);
  } catch (err) {
    console.log(err);
  }
};
