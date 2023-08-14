import { client } from "../client";
// 서버로 postSchoolData 데이터 전송
export const postSchoolData = async SdataToSend => {
  try {
    const response = await client.post("/api/teacher/subject/aca-ins", {
      list: [SdataToSend],
    });
  } catch (error) {
    console.error("데이터 전송 오류:", error);
  }
};
// 내신 등록 후 과목 계열
export const getSchoolMainSubData = async setInitSubCate => {
  try {
    const res = await client.get("/api/teacher/subject/category/big");
    const result = res.data;
    setInitSubCate(result);
  } catch (err) {
    console.log(err);
    return [];
  }
};
// 내신 등록 후 세부 과목
export const getSchoolSubData = async setInitDetailSub => {
  try {
    const res = await client.get("/api/teacher/subject/category/small");
    const result = res.data;
    setInitDetailSub(result);
    console.log("result tlqkf", result)
  } catch (err) {
    console.log(err);
    return [];
  }
};
export const getSchoolEditData = async resultId => {
  try {
    const res = await client.get(
      `/api/teacher/subject/aca-result?resultId=${resultId}`,
    );
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
// 학교 전체 학생 인원 데이터
export const getSchoolData = async setWholeCount => {
  try {
    const res = await client.get("/api/subject/school-snum");
    const result = res.data;
    setWholeCount(result);
  } catch (err) {
    console.log(err);
    return [];
  }
};
// 반 학생 인원 데이터
export const getSchoolclassData = async setClassCount => {
  try {
    const res = await client.get("/api/subject/class-num");
    const result = res.data;
    setClassCount(result);
  } catch (err) {
    console.log(err);
    return [];
  }
};