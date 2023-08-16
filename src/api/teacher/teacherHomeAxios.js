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
    const res = await client.get(`/api/teacher/class-student`);
    const result = res.data;
    setStudentCount(result);
  } catch (err) {
    console.log(err);
  }
};

// 가입 대기 인원
export const getUnSignCount = async setUnSignCount => {
  try {
    const res = await client.get(`/api/teacher/apr-student`);
    const result = res.data;
    setUnSignCount(result);
  } catch (err) {
    console.log(err);
  }
};

// 내신 현황
export const getSchoolData = async setSchoolData => {
  try {
    const res = await client.get(`/api/teacher/aca-graph`);
    const result = res.data;
    setSchoolData(result);
  } catch (err) {
    console.log(err);
  }
};

// 모의고사 현황
export const getMockData = async setMockData => {
  try {
    const res = await client.get(`/api/teacher/subject/mock-graph`);
    const result = res.data;
    setMockData(result);
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
