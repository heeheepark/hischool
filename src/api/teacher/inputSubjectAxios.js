import { client } from "../client";

// 서버로 datatoMock 데이터를 전송하는 함수
export const postALLData = async dataToSend => {
  try {
    const response = await client.post("/api/teacher/subject", {
      list: dataToSend,
    });
    console.log("데이터 전송 성공 : ", response.data);
  } catch (error) {
    console.error("데이터 전송 오류:", error);
  }
};

// 내신 과목 계열 가져오기
export const getALLMainSubData = async () => {
  try {
    const res = await client.get("/api/teacher/subject/category");
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

// 내신 세부 과목 가져오기
export const getALLSubData = async categoryid => {
  try {
    const res = await client.get(
      `/api/teacher/subject?categoryid=${categoryid}`,
    );
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
