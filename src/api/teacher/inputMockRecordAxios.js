import { client } from "../client";

// 서버로 datatoMock 데이터를 전송하는 함수
export const postMockData = async dataToSend => {
  try {
    const response = await client.post("/api/teacher/subject/mock-ins", {
      list: dataToSend,
    });
    console.log("데이터 전송 성공 : ", response.data);
  } catch (error) {
    console.error("데이터 전송 오류:", error);
  }
};

// 모의 고사 과목 계열 가져오기
export const getMockMainSubData = async () => {
  try {
    const res = await client.get("/api/teacher/subject/mockbig-list");
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

// 모의 고사 세부 과목 가져오기
export const getMockSubData = async categoryid => {
  try {
    const res = await client.get(
      `/api/teacher/subject/mocksmall-list?categoryid=${categoryid}`,
    );
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
