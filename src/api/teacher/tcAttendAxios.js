import { client } from "../login/client";

export const getAttendData = async (userId, setPayload) => {
  try {
    console.log(userId);
    const res = await client.get(`/api/attendance?userId=${userId}`);
    const result = res.data;
    setPayload(result);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

export const putAttendData = async payload => {
  try {
    const res = await client.put(`/api/attendance`, payload);
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const postAttendData = async () => {
  try {
    const res = await client.post(`/api/attendance`);
    console.log(res.data);
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

// "attendId": 수정할 출결 현황 PK
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

// "userId": 선택한 학생 PK
// "grade": ex) "1"
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
