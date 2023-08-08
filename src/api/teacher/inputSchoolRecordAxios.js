import axios from "axios";

// 서버로 datatoMock 데이터를 전송하는 함수
// export const postSchoolData = async () => {
//   try {
//     const response = await axios.post("/api/teacher/subject/aca-ins", {
//       list: ,
//     });
//     console.log("데이터 전송 성공:", response.data);
//   } catch (error) {
//     console.error("데이터 전송 오류:", error);
//   }
// };

// 내신 등록 후 과목 계열 가져오기
export const getSchoolMainSubData = async () => {
  try {
    const res = await axios.get("/api/teacher/subject/category/big");
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

// 내신 등록 후 세부 과목 가져오기
export const getSchoolSubData = async () => {
  try {
    const res = await axios.get(
      `/api/teacher/subject/category/small`,
    );
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
