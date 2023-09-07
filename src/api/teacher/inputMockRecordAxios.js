import { client } from "../login/client";

// 서버로 datatoMock 데이터를 전송하는 함수
export const postMockData = async dataToSend => {
  try {
    const response = await client.post("/api/teacher/subject/mock-ins", {
      list: [dataToSend],
    });
  } catch (error) {
    console.error("데이터 전송 오류:", error);
    if (error.response && error.response.status === 500) {
      alert("서버 내부 오류가 발생했습니다. 이미 있는 과목 성적이거나, 서버 전송 오류입니다.");
    }
  }
};

// 모의고사 수정 내용 전송
export const patchMockData = async dataToSend => {
  try {
    const res = await client.patch("/api/teacher/mock", dataToSend);
  } catch (error) {
    console.error("데이터 전송 오류:", error);
    if (error.response && error.response.status === 500) {
      alert("서버 내부 오류가 발생했습니다. 이미 있는 과목 성적이거나, 서버 전송 오류입니다.");
    }
  }
};

// 모의고사 과목 계열 가져오기
export const getMockMainSubData = async setInitSubCate => {
  try {
    const res = await client.get("/api/teacher/subject/mockbig-list");
    const result = res.data;
    setInitSubCate(result);
  } catch (err) {
    console.log(err);
    return [];
  }
};

// 모의고사 세부 과목 가져오기
export const getMockSubData = async (categoryid, setInitDetailSub) => {
  try {
    const res = await client.get(
      `/api/teacher/subject/mocksmall-list?categoryid=${categoryid}`,
    );
    const result = res.data;
    setInitDetailSub(result);
  } catch (err) {
    console.log(err);
    return [];
  }
};

// 모의고사 수정할 과목 가져오기
export const getMockEditData = async resultId => {
  try {
    const res = await client.get(
      `/api/teacher/subject/mock-result?resultId=${resultId}`,
    );
    const result = { ...res.data[0], id: Date.now(), resultId: resultId };
    return result;
  } catch (err) {
    console.log(err);
    return [];
  }
};

// 학생 이름 가져오기
export const getStudentsNameData = async (studentId, setStudentNameData) => {
  try {
    const res = await client.get(
      `/api/teacher/subject/stulist?userid=${studentId}`,
    );
    const result = res.data[0];
    setStudentNameData(result);
  } catch (err) {
    console.log(err);
    return [];
  }
};
