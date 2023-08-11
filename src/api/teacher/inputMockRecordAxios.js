import { client } from "../client";

// 서버로 datatoMock 데이터를 전송하는 함수
export const postMockData = async dataToSend => {
  try {
    const response = await client.post("/api/teacher/subject/mock-ins", {
      list: dataToSend,
    });
    console.log(response.data);
  } catch (error) {
    console.error("데이터 전송 오류:", error);
  }
};
export const patchMockData = async dataToSend => {
  try {
    console.log(dataToSend);
    const response = await client.patch("/api/teacher/update-mock", dataToSend);
    console.log(response.data);
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

// 모의 고사 수정할 과목 가져오기
export const getMockEditData = async resultId => {
  try {
    const res = await client.get(
      `/api/teacher/subject/mock-result?resultId=${resultId}`,
    );
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

// 학생 이름 가져오기
export const getStudentsNameData = async () => {
  try {
    const res = await client.get("/api/teacher/subject/stulist");
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
