import axios from "axios";

// 서버로 datatoMock 데이터를 전송하는 함수
export const postMockData = async dataToSend => {
  try {
    const response = await axios.post(
      "/api/teacher/subject/mock-ins",
      dataToSend,
    );
    console.log("데이터 전송 성공:", response.data);
  } catch (error) {
    console.error("데이터 전송 오류:", error);
  }
};
