import { client } from "../login/client";

export const getAttendData = async (userId, setAttendList) => {
  try {
    const res = await client.get(`/api/attendance?userId=${userId}`);
    const result = res.data;
    console.log(result);
    setAttendList(result);
  } catch (err) {
    console.log(err);
  }
};

// "attendId": 출결 현황 PK
// "grade": 학년
// "lessonNum": 수업 일수
// "diseaseAbsence": 질병 결석
// "unauthAbsence": 무단 결석
// "etcAbsence": 기타 결석
// "diseaseLate": 질병 지각
// "unauthLate": 무단 지각
// "etcLate": 기타 지각
// "diseaseEarly": 질병 조퇴
// "unauthEarly": 무단 조퇴
// "etcEarly": 기타 조퇴
// "diseaseOut": 질병 결과
// "unauthOut": 무단 결과
// "etcOut": 기타 결과
// "specialNote": 특이 사항
