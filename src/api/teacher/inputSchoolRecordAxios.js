import { client } from "../login/client";

// 서버로 postSchoolData 데이터 전송
export const postSchoolData = async postDataList => {
  try {
    const response = await client.post("/api/teacher/aca-result", postDataList);
  } catch (error) {
    console.error("데이터 전송 오류:", error);
    if (error.response && error.response.status === 500) {
      alert(
        "서버 내부 오류가 발생했습니다. 이미 있는 과목 성적이거나, 서버 전송 오류입니다.",
      );
    }
  }
};

export const patchSchoolData = async dataToSend => {
  try {
    const res = await client.patch("/api/teacher/aca", dataToSend);
  } catch (error) {
    console.error("데이터 전송 오류:", error);
    if (error.response && error.response.status === 500) {
      alert(
        "서버 내부 오류가 발생했습니다. 이미 있는 과목 성적이거나, 서버 전송 오류입니다.",
      );
    }
  }
};

// 내신 등록 후 과목 계열
export const getSchoolMainSubData = async () => {
  try {
    const res = await client.get("/api/teacher/subject/aca-category");
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

// 내신 등록 후 세부 과목
export const getSchoolSubData = async categoryid => {
  try {
    const res = await client.get(
      `/api/teacher/subject/aca-subject?categoryId=${categoryid}`,
    );
    return res.data;
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
