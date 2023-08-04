import axios from "axios";

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
    const schoolLogoRes = await axios.get(`/api/header/school-logo`);
    const schoolLogo = schoolLogoRes.data[0].logo;
    setSchoolLogo(schoolLogo);

    // 학교 정보
    const schoolNameRes = await axios.get(`/api/header/school-info`);
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

export { getSchoolInfo };
