import { client } from "../client";

// 전교 학생 인원
export const getAllStudentCount = async setAllStudentCount => {
  try {
    const res = await client.get(`/api/subject/school-snum
    `);
    const result = res.data;
    setAllStudentCount(result);
  } catch (err) {
    console.log(err);
  }
};

// 학급 총원
export const getStudentCount = async setStudentCount => {
  try {
    const res = await client.get(`/api/subject/class-num`);
    const result = res.data;
    setStudentCount(result);
  } catch (err) {
    console.log(err);
  }
};

// 가입 대기 인원
export const getUnSignCount = async setUnSignCount => {
  try {
    const res = await client.get(`/api/teacher/apr-student?classid=${2}`);
    const result = res.data;
    setUnSignCount(result);
  } catch (err) {
    console.log(err);
  }
};

// 학사일정
export const getSchedule = async (setScheduleData, startDate, endDate) => {
  try {
    const res = await client.get(
      `/api/schedule?sdSchulCode=${7240273}&aaFromYmd=${startDate}&aaToYmd=${endDate}`,
    );
    const scheduleList = res.data.infoList;
    const newScheduleList = scheduleList.map(item => {
      return {
        title: item.eventNm,
        start: item.aaYmd,
        end: item.aaYmd,
      };
    });
    setScheduleData(newScheduleList);
  } catch (err) {
    console.log(err);
  }
};
