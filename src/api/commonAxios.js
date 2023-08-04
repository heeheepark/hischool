import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
  // headers: {
  //   "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
  //   Accept: "*/*",
  // },
});

// Main
// Header
const getSchoolInfo = async (
  setSchoolLogo,
  setSchoolName,
  setGrade,
  setClassNum,
) => {
  try {
    // 학교 로고
    const schoolLogoRes = await axiosInstance.get(
      `/api/header/school_logo?userId=${41}`,
    );
    const schoolLogo = schoolLogoRes.data[0].logo;
    setSchoolLogo(schoolLogo);

    // 학교 정보
    const schoolNameRes = await axiosInstance.get(
      `/api/header/school_info?userId=${41}`,
    );
    const schoolName = schoolNameRes.data[0].nm;
    const grade = schoolNameRes.data[0].grade;
    const classNum = schoolNameRes.data[0].van;
    setSchoolName(schoolName);
    setGrade(grade);
    setClassNum(classNum);
  } catch (err) {
    console.log(err);
  }
};

const getSchedule = async setTimeTable => {
  try {
    const res = await axiosInstance.get(
      `/api/timetable?sdSchulCode=${7240273}&grade=${1}&classNm=${1}`,
    );
    const result = res.data.list;
    setTimeTable(result);
  } catch (err) {
    console.log(err);
  }
};

export default axiosInstance;

export { getSchoolInfo, getSchedule };
