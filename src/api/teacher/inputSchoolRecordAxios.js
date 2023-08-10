import { client } from "../client";

// 서버로 postSchoolData 데이터 전송
export const postSchoolData = async SdataToSend => {
  try {
    const response = await client.post("/api/teacher/subject/aca-ins", {
      list: SdataToSend,
    });
    console.log(response.data);
  } catch (error) {
    console.error("데이터 전송 오류:", error);
  }
};
// 내신 등록 후 과목 계열
export const getSchoolMainSubData = async () => {
  try {
    const res = await client.get("/api/teacher/subject/category/big");
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

// 내신 등록 후 세부 과목
export const getSchoolSubData = async () => {
  try {
    const res = await client.get("/api/teacher/subject/category/small");
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

// 학교 전체 학생 인원 데이터
export const getSchoolData = async () => {
  try {
    const res = await client.get("/api/subject/school-snum");
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

// 반 학생 인원 데이터
export const getSchoolclassData = async () => {
  try {
    const res = await client.get("/api/subject/class-num");
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
