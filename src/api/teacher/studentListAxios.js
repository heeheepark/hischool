import { client } from "../client";

// 학생관리 리스트
export const getStudentData = async setStudentListData => {
  try {
    const res = await client.get(`/api/teacher/signed`);
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
    const res = await client.get(`/api/teacher/unsigned`);
    const result = res.data;
    const signListSortData = result.sort((a, b) =>
      a.snm.toLowerCase() < b.snm.toLowerCase() ? -1 : 1,
    );
    setStudentListData(signListSortData);
  } catch (err) {
    console.log(err);
  }
};

// 학생 가입 승인
export const patchSignAccept = async userId => {
  try {
    const res = await client.patch(
      `/api/teacher/acpt-student?userId=${userId}`,
    );
    const result = res.data;
  } catch (err) {
    console.log(err);
  }
};

// 학생 승인 취소
export const patchSignCancel = async userId => {
  try {
    const res = await client.patch(`/api/teacher/can-std?userId=${userId}`);
    const result = res.data;
  } catch (err) {
    console.log(err);
  }
};
